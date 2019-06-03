goog.provide('twitt_clone.core');
goog.require('cljs.core');
goog.require('reagent.core');
if((typeof twitt_clone !== 'undefined') && (typeof twitt_clone.core !== 'undefined') && (typeof twitt_clone.core.twits !== 'undefined')){
} else {
twitt_clone.core.twits = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.sorted_map());
}
if((typeof twitt_clone !== 'undefined') && (typeof twitt_clone.core !== 'undefined') && (typeof twitt_clone.core.counter !== 'undefined')){
} else {
twitt_clone.core.counter = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
twitt_clone.core.add_twit = (function twitt_clone$core$add_twit(text){
var id = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(twitt_clone.core.counter,cljs.core.inc);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(twitt_clone.core.twits,cljs.core.assoc,id,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"title","title",636505583),text], null));
});
twitt_clone.core.save = (function twitt_clone$core$save(id,title){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(twitt_clone.core.twits,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"title","title",636505583)], null),title);
});
twitt_clone.core.delete$ = (function twitt_clone$core$delete(id){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(twitt_clone.core.twits,cljs.core.dissoc,id);
});
if((typeof twitt_clone !== 'undefined') && (typeof twitt_clone.core !== 'undefined') && (typeof twitt_clone.core.init !== 'undefined')){
} else {
twitt_clone.core.init = (function (){
twitt_clone.core.add_twit("There is rarely a need to use this because Figwheel will reload all the files that are depending on the changed file that initiated the reload.");

twitt_clone.core.add_twit("Of all the Figwheel config options the one you will use the most often is the :watch-dirs option. This option determines which directories Figwheel will watch for file changes.");

twitt_clone.core.add_twit("Definitivamente todas las personas necesitan \"closure\" aunque no quieran o no les guste. Es lo sano, es lo maduro!");

twitt_clone.core.add_twit("Si quieres una buena intro a Haskell te recomiendo el Learn you some Haskell for great good: (link: http://learnyouahaskell.com/) learnyouahaskell.com  Puedes leerlo online gratis, o bien comprar el PDF (pero el PDF est\u00E1 por todos lados, es f\u00E1cil de encontrar). Es muy pr\u00E1ctico, genial para arrancar en Haskell...");

twitt_clone.core.add_twit("\u00BFPor qu\u00E9 siempre hacen esto? \u00BFPor qu\u00E9 se borra de la historia a familias enteras de lenguajes? Donde est\u00E1n LISP, Smalltalk, Haskell, matlab, ruby, rust... Ni siquiera est\u00E1 el lenguaje m\u00E1s popular en la actualidad! \u00BF\u00BFD\u00F3nde est\u00E1 Python??");

return twitt_clone.core.add_twit("Spoilers: En F# las m\u00F3nadas se llaman Computation Expressions, existe un typeclass para \u00E9stas y el az\u00FAcar sint\u00E1ctico para composici\u00F3n mon\u00E1dico es un poco extra\u00F1o porque lo que en Haskell es do y en Scala for, en F# es let! (con el bang).");
})()
;
}
twitt_clone.core.twit_input = (function twitt_clone$core$twit_input(p__26260){
var map__26261 = p__26260;
var map__26261__$1 = (((((!((map__26261 == null))))?(((((map__26261.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26261.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26261):map__26261);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26261__$1,new cljs.core.Keyword(null,"title","title",636505583));
var on_save = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26261__$1,new cljs.core.Keyword(null,"on-save","on-save",1618176266));
var on_stop = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26261__$1,new cljs.core.Keyword(null,"on-stop","on-stop",1520114515));
var val = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(title);
var stop = ((function (val,map__26261,map__26261__$1,title,on_save,on_stop){
return (function (){
cljs.core.reset_BANG_(val,"");

if(cljs.core.truth_(on_stop)){
return (on_stop.cljs$core$IFn$_invoke$arity$0 ? on_stop.cljs$core$IFn$_invoke$arity$0() : on_stop.call(null));
} else {
return null;
}
});})(val,map__26261,map__26261__$1,title,on_save,on_stop))
;
var save = ((function (val,stop,map__26261,map__26261__$1,title,on_save,on_stop){
return (function (){
var v = clojure.string.trim(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(val)));
if((!(cljs.core.empty_QMARK_(v)))){
(on_save.cljs$core$IFn$_invoke$arity$1 ? on_save.cljs$core$IFn$_invoke$arity$1(v) : on_save.call(null,v));
} else {
}

return stop();
});})(val,stop,map__26261,map__26261__$1,title,on_save,on_stop))
;
return ((function (val,stop,save,map__26261,map__26261__$1,title,on_save,on_stop){
return (function (p__26263){
var map__26264 = p__26263;
var map__26264__$1 = (((((!((map__26264 == null))))?(((((map__26264.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26264.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26264):map__26264);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26264__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26264__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var placeholder = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26264__$1,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(val),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"class","class",-2030961996),class$,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),placeholder,new cljs.core.Keyword(null,"on-blur","on-blur",814300747),save,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (map__26264,map__26264__$1,id,class$,placeholder,val,stop,save,map__26261,map__26261__$1,title,on_save,on_stop){
return (function (p1__26258_SHARP_){
return cljs.core.reset_BANG_(val,p1__26258_SHARP_.target.value);
});})(map__26264,map__26264__$1,id,class$,placeholder,val,stop,save,map__26261,map__26261__$1,title,on_save,on_stop))
,new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),((function (map__26264,map__26264__$1,id,class$,placeholder,val,stop,save,map__26261,map__26261__$1,title,on_save,on_stop){
return (function (p1__26259_SHARP_){
var G__26266 = p1__26259_SHARP_.which;
switch (G__26266) {
case (13):
return save();

break;
case (27):
return stop();

break;
default:
return null;

}
});})(map__26264,map__26264__$1,id,class$,placeholder,val,stop,save,map__26261,map__26261__$1,title,on_save,on_stop))
], null)], null);
});
;})(val,stop,save,map__26261,map__26261__$1,title,on_save,on_stop))
});
twitt_clone.core.twit_edit = cljs.core.with_meta(twitt_clone.core.twit_input,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (p1__26267_SHARP_){
return reagent.core.dom_node(p1__26267_SHARP_).focus();
})], null));
twitt_clone.core.user_image = (function twitt_clone$core$user_image(p__26268){
var map__26269 = p__26268;
var map__26269__$1 = (((((!((map__26269 == null))))?(((((map__26269.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26269.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26269):map__26269);
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26269__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26269__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26269__$1,new cljs.core.Keyword(null,"height","height",1025178622));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"src","src",-1651076051),"https://pbs.twimg.com/profile_images/537755721040142337/5bLC9d_n_normal.jpeg",new cljs.core.Keyword(null,"class","class",-2030961996),class$,new cljs.core.Keyword(null,"alt","alt",-3214426),"user image",new cljs.core.Keyword(null,"width","width",-384071477),width,new cljs.core.Keyword(null,"height","height",1025178622),height], null)], null);
});
twitt_clone.core.twit_item = (function twitt_clone$core$twit_item(){
var editing = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
return ((function (editing){
return (function (p__26272){
var map__26273 = p__26272;
var map__26273__$1 = (((((!((map__26273 == null))))?(((((map__26273.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26273.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26273):map__26273);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26273__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var done = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26273__$1,new cljs.core.Keyword(null,"done","done",-889844188));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26273__$1,new cljs.core.Keyword(null,"title","title",636505583));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),[(cljs.core.truth_(cljs.core.deref(editing))?"editing":null),"media border-bottom mb-3 pb-3"].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [twitt_clone.core.user_image,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),"rounded-circle mr-3",new cljs.core.Keyword(null,"width","width",-384071477),"39px",new cljs.core.Keyword(null,"height","height",1025178622),"39px"], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.media-body","div.media-body",-1089439484),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h5.mt-0","h5.mt-0",-891339680),"Alex Aldaco",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.small.text-secondary","span.small.text-secondary",1357505420)," - @sraldaco"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),title], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-light.btn-sm.mr-1","button.btn.btn-light.btn-sm.mr-1",1061487797),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__26273,map__26273__$1,id,done,title,editing){
return (function (){
return cljs.core.reset_BANG_(editing,true);
});})(map__26273,map__26273__$1,id,done,title,editing))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.fi-pencil","i.fi-pencil",-759570152)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-light.btn-sm","button.btn.btn-light.btn-sm",394779869),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__26273,map__26273__$1,id,done,title,editing){
return (function (){
return twitt_clone.core.delete$(id);
});})(map__26273,map__26273__$1,id,done,title,editing))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.fi-x","i.fi-x",-693198896)], null)], null)], null),(cljs.core.truth_(cljs.core.deref(editing))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [twitt_clone.core.twit_edit,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"class","class",-2030961996),"form-control mt-3",new cljs.core.Keyword(null,"title","title",636505583),title,new cljs.core.Keyword(null,"on-save","on-save",1618176266),((function (map__26273,map__26273__$1,id,done,title,editing){
return (function (p1__26271_SHARP_){
return twitt_clone.core.save(id,p1__26271_SHARP_);
});})(map__26273,map__26273__$1,id,done,title,editing))
,new cljs.core.Keyword(null,"on-stop","on-stop",1520114515),((function (map__26273,map__26273__$1,id,done,title,editing){
return (function (){
return cljs.core.reset_BANG_(editing,false);
});})(map__26273,map__26273__$1,id,done,title,editing))
], null)], null):null)], null);
});
;})(editing))
});
twitt_clone.core.twit_app = (function twitt_clone$core$twit_app(props){
var filt = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"all","all",892129742));
return ((function (filt){
return (function (){
var items = cljs.core.vals(cljs.core.deref(twitt_clone.core.twits));
var done = cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"done","done",-889844188),items));
var active = (cljs.core.count(items) - done);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.bg-light","div.bg-light",1919448894),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section#twit-app","section#twit-app",790792701),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.navbar.navbar-dark.bg-info.text-light.mb-4.shadow","div.navbar.navbar-dark.bg-info.text-light.mb-4.shadow",-357979021),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container","div.container",72419955),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.navbar-brand","div.navbar-brand",1304438848),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"src","src",-1651076051),"http://icons.iconarchive.com/icons/fasticon/web-2/256/Twitter-icon.png",new cljs.core.Keyword(null,"width","width",-384071477),"40px",new cljs.core.Keyword(null,"height","height",1025178622),"40px",new cljs.core.Keyword(null,"class","class",-2030961996),"float-left mr-3"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Simple Twit's Clone ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"small.navbar-text","small.navbar-text",-1411927807),"- ClojureScript"], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container","div.container",72419955),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.p-3.bg-white.border-left.border-right.border-top.shadow","div.p-3.bg-white.border-left.border-right.border-top.shadow",1463479547),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h5.mt-0.mb-0","h5.mt-0.mb-0",782557309),"Inicio"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.p-3.bg-white.border.shadow","div.p-3.bg-white.border.shadow",-982354706),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.media","div.media",-1604536597),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [twitt_clone.core.user_image,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),"rounded mr-3",new cljs.core.Keyword(null,"width","width",-384071477),"39px",new cljs.core.Keyword(null,"height","height",1025178622),"39px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [twitt_clone.core.twit_input,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),"new-twit",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"\u00BFQu\u00E9 est\u00E1 pasando?",new cljs.core.Keyword(null,"class","class",-2030961996),"form-control",new cljs.core.Keyword(null,"on-save","on-save",1618176266),twitt_clone.core.add_twit], null)], null)], null)], null)], null),(((cljs.core.count(items) > (0)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container","div.container",72419955),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section#main","section#main",559170339),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mb-5.p-3.bg-white.border-left.border-right.border-bottom.shadow","div.mb-5.p-3.bg-white.border-left.border-right.border-bottom.shadow",938270946),(function (){var iter__4523__auto__ = ((function (items,done,active,filt){
return (function twitt_clone$core$twit_app_$_iter__26275(s__26276){
return (new cljs.core.LazySeq(null,((function (items,done,active,filt){
return (function (){
var s__26276__$1 = s__26276;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__26276__$1);
if(temp__5720__auto__){
var s__26276__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__26276__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__26276__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__26278 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__26277 = (0);
while(true){
if((i__26277 < size__4522__auto__)){
var twit = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__26277);
cljs.core.chunk_append(b__26278,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [twitt_clone.core.twit_item,twit], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(twit)], null)));

var G__26282 = (i__26277 + (1));
i__26277 = G__26282;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__26278),twitt_clone$core$twit_app_$_iter__26275(cljs.core.chunk_rest(s__26276__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__26278),null);
}
} else {
var twit = cljs.core.first(s__26276__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [twitt_clone.core.twit_item,twit], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(twit)], null)),twitt_clone$core$twit_app_$_iter__26275(cljs.core.rest(s__26276__$2)));
}
} else {
return null;
}
break;
}
});})(items,done,active,filt))
,null,null));
});})(items,done,active,filt))
;
return iter__4523__auto__(cljs.core.reverse(items));
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Programaci\u00F3n declarativa 2019-2"], null)], null)], null)], null):null)], null)], null);
});
;})(filt))
});
twitt_clone.core.start = (function twitt_clone$core$start(){
var G__26279 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [twitt_clone.core.twit_app], null);
var G__26280 = document.getElementById("app");
return (reagent.core.render_component.cljs$core$IFn$_invoke$arity$2 ? reagent.core.render_component.cljs$core$IFn$_invoke$arity$2(G__26279,G__26280) : reagent.core.render_component.call(null,G__26279,G__26280));
});
twitt_clone.core.run = (function twitt_clone$core$run(){
return twitt_clone.core.start();
});
goog.exportSymbol('twitt_clone.core.run', twitt_clone.core.run);
twitt_clone.core.stop = (function twitt_clone$core$stop(){
return console.log("stop");
});

//# sourceMappingURL=twitt_clone.core.js.map
