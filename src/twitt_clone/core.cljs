(ns twitt-clone.core
  (:require [reagent.core :as r :refer [atom]]))

;; define your app data so that it doesn't get over-written on reload

(defonce twits (r/atom (sorted-map)))

(defonce counter (r/atom 0))

(defn add-twit [text]
  (let [id (swap! counter inc)] 
    (swap! twits assoc id {:id id :title text})))

(defn save [id title] (swap! twits assoc-in [id :title] title))

(defn delete [id] (swap! twits dissoc id))

(defonce init (do
                (add-twit "There is rarely a need to use this because Figwheel will reload all the files that are depending on the changed file that initiated the reload.")
                (add-twit "Of all the Figwheel config options the one you will use the most often is the :watch-dirs option. This option determines which directories Figwheel will watch for file changes.")
                (add-twit "Definitivamente todas las personas necesitan \"closure\" aunque no quieran o no les guste. Es lo sano, es lo maduro!")
                (add-twit "Si quieres una buena intro a Haskell te recomiendo el Learn you some Haskell for great good: (link: http://learnyouahaskell.com/) learnyouahaskell.com  Puedes leerlo online gratis, o bien comprar el PDF (pero el PDF está por todos lados, es fácil de encontrar). Es muy práctico, genial para arrancar en Haskell...")
                (add-twit "¿Por qué siempre hacen esto? ¿Por qué se borra de la historia a familias enteras de lenguajes? Donde están LISP, Smalltalk, Haskell, matlab, ruby, rust... Ni siquiera está el lenguaje más popular en la actualidad! ¿¿Dónde está Python??")
                (add-twit "Spoilers: En F# las mónadas se llaman Computation Expressions, existe un typeclass para éstas y el azúcar sintáctico para composición monádico es un poco extraño porque lo que en Haskell es do y en Scala for, en F# es let! (con el bang).")))

(defn twit-input [{:keys [title on-save on-stop]}]
  (let [val (r/atom title)
        stop #(do (reset! val "")
                  (if on-stop (on-stop)))
        save #(let [v (-> @val str clojure.string/trim)]
                (if-not (empty? v) (on-save v))
                (stop))]
    (fn [{:keys [id class placeholder]}]
      [:input {:type "text" :value @val
               :id id :class class :placeholder placeholder
               :on-blur save
               :on-change #(reset! val (-> % .-target .-value))
               :on-key-down #(case (.-which %)
                               13 (save)
                               27 (stop)
                               nil)}])))

(def twit-edit (with-meta twit-input
                 {:component-did-mount #(.focus (r/dom-node %))}))

(def user-image 
  (fn [{:keys [class width height]}]
  [:img {
         :src "https://pbs.twimg.com/profile_images/537755721040142337/5bLC9d_n_normal.jpeg" :class class 
         :alt "user image"
         :width width
         :height height}]))

(defn twit-item []
  (let [editing (r/atom false)]
    (fn [{:keys [id done title]}]
      [:div {:class (str (if @editing "editing") "media border-bottom mb-3 pb-3")}
       [user-image {:class "rounded-circle mr-3"
                          :width "39px"
                          :height "39px"}]
       [:div.media-body
        [:h5.mt-0 "Alex Aldaco"
         [:span.small.text-secondary " - @sraldaco"]]
        [:p title]
        [:button.btn.btn-light.btn-sm.mr-1
         {:on-click #(reset! editing true)} [:i.fi-pencil]]
        [:button.btn.btn-light.btn-sm
         {:on-click #(delete id)} [:i.fi-x]]]
       (when @editing
         [twit-edit {:class "form-control mt-3" :title title
                     :on-save #(save id %)
                     :on-stop #(reset! editing false)}])])))

(defn twit-app [props]
  (let [filt (r/atom :all)]
    (fn []
      (let [items (vals @twits)
            done (->> items (filter :done) count)
            active (- (count items) done)]
        [:div.bg-light
         [:section#twit-app
          [:div.navbar.navbar-dark.bg-info.text-light.mb-4.shadow
           [:div.container
            [:div.navbar-brand
            [:img {:src "https://raw.githubusercontent.com/sraldaco/twitt-clone/master/public/img/Twitter-icon.png"
                   :width "40px"
                   :height "40px"
                   :class "float-left mr-3"}]
            [:div "Simple Twit's Clone "
             [:small.navbar-text "- ClojureScript"]]]]
           ]
          [:div.container
           [:div.p-3.bg-white.border-left.border-right.border-top.shadow
            [:h5.mt-0.mb-0 "Inicio"]]
           [:div.p-3.bg-white.border.shadow
            [:div.media
             [user-image {:class "rounded mr-3"
                          :width "39px"
                          :height "39px"}]
             [twit-input {:id "new-twit"
                          :placeholder "¿Qué está pasando?"
                          :class "form-control"
                          :on-save add-twit}]]]]
          (when (-> items count pos?)
            [:div.container
             [:section#main
              [:div.mb-5.p-3.bg-white.border-left.border-right.border-bottom.shadow
               (for [twit (reverse items)]
                 ^{:key (:id twit)} [twit-item twit])
               [:p "Programación declarativa 2019-2"]]]])]]))))

(defn start []
  (r/render-component [twit-app]
                            (. js/document (getElementById "app"))))

(defn ^:export run []
  (start))

(defn stop []
  ;; stop is called before any code is reloaded
  ;; this is controlled by :before-load in the config
  (js/console.log "stop"))

