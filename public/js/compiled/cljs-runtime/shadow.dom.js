goog.provide('shadow.dom');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.dom.forms');
goog.require('goog.dom.classlist');
goog.require('goog.style');
goog.require('goog.style.transition');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('cljs.core.async');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4434__auto__.call(null,this$));
} else {
var m__4431__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4431__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4434__auto__.call(null,this$));
} else {
var m__4431__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4431__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__34986 = coll;
var G__34987 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__34986,G__34987) : shadow.dom.lazy_native_coll_seq.call(null,G__34986,G__34987));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
});

shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
});

shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4131__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return not_found;
}
});

shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
});

shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
});

shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
});

shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
});

shadow.dom.NativeColl.cljs$lang$type = true;

shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl";

shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"shadow.dom/NativeColl");
});

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__35004 = arguments.length;
switch (G__35004) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
});

shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
});

shadow.dom.query_one.cljs$lang$maxFixedArity = 2;

shadow.dom.query = (function shadow$dom$query(var_args){
var G__35010 = arguments.length;
switch (G__35010) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
});

shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
});

shadow.dom.query.cljs$lang$maxFixedArity = 2;

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__35012 = arguments.length;
switch (G__35012) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
});

shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
});

shadow.dom.by_id.cljs$lang$maxFixedArity = 2;

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__35014 = arguments.length;
switch (G__35014) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
e.cancelBubble = true;

e.returnValue = false;
}

return e;
});

shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
});

shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
});

shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4;

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__35016 = arguments.length;
switch (G__35016) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
var G__35017 = document;
var G__35018 = shadow.dom.dom_node(el);
return goog.dom.contains(G__35017,G__35018);
});

shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
var G__35019 = shadow.dom.dom_node(parent);
var G__35020 = shadow.dom.dom_node(el);
return goog.dom.contains(G__35019,G__35020);
});

shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2;

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
var G__35022 = shadow.dom.dom_node(el);
var G__35023 = cls;
return goog.dom.classlist.add(G__35022,G__35023);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
var G__35024 = shadow.dom.dom_node(el);
var G__35025 = cls;
return goog.dom.classlist.remove(G__35024,G__35025);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__35027 = arguments.length;
switch (G__35027) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
var G__35028 = shadow.dom.dom_node(el);
var G__35029 = cls;
return goog.dom.classlist.toggle(G__35028,G__35029);
});

shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
});

shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3;

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4131__auto__ = (!((typeof document !== 'undefined')));
if(or__4131__auto__){
return or__4131__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e35030){if((e35030 instanceof Object)){
var e = e35030;
return console.log("didnt support attachEvent",el,e);
} else {
throw e35030;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4131__auto__ = (!((typeof document !== 'undefined')));
if(or__4131__auto__){
return or__4131__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__35031 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__35032 = null;
var count__35033 = (0);
var i__35034 = (0);
while(true){
if((i__35034 < count__35033)){
var el = chunk__35032.cljs$core$IIndexed$_nth$arity$2(null,i__35034);
var handler_35628__$1 = ((function (seq__35031,chunk__35032,count__35033,i__35034,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__35031,chunk__35032,count__35033,i__35034,el))
;
var G__35044_35629 = el;
var G__35045_35630 = cljs.core.name(ev);
var G__35046_35631 = handler_35628__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__35044_35629,G__35045_35630,G__35046_35631) : shadow.dom.dom_listen.call(null,G__35044_35629,G__35045_35630,G__35046_35631));


var G__35636 = seq__35031;
var G__35637 = chunk__35032;
var G__35638 = count__35033;
var G__35639 = (i__35034 + (1));
seq__35031 = G__35636;
chunk__35032 = G__35637;
count__35033 = G__35638;
i__35034 = G__35639;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__35031);
if(temp__5720__auto__){
var seq__35031__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35031__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__35031__$1);
var G__35640 = cljs.core.chunk_rest(seq__35031__$1);
var G__35641 = c__4550__auto__;
var G__35642 = cljs.core.count(c__4550__auto__);
var G__35643 = (0);
seq__35031 = G__35640;
chunk__35032 = G__35641;
count__35033 = G__35642;
i__35034 = G__35643;
continue;
} else {
var el = cljs.core.first(seq__35031__$1);
var handler_35644__$1 = ((function (seq__35031,chunk__35032,count__35033,i__35034,el,seq__35031__$1,temp__5720__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__35031,chunk__35032,count__35033,i__35034,el,seq__35031__$1,temp__5720__auto__))
;
var G__35048_35645 = el;
var G__35049_35646 = cljs.core.name(ev);
var G__35050_35647 = handler_35644__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__35048_35645,G__35049_35646,G__35050_35647) : shadow.dom.dom_listen.call(null,G__35048_35645,G__35049_35646,G__35050_35647));


var G__35648 = cljs.core.next(seq__35031__$1);
var G__35649 = null;
var G__35650 = (0);
var G__35651 = (0);
seq__35031 = G__35648;
chunk__35032 = G__35649;
count__35033 = G__35650;
i__35034 = G__35651;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__35053 = arguments.length;
switch (G__35053) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
});

shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
var G__35054 = shadow.dom.dom_node(el);
var G__35055 = cljs.core.name(ev);
var G__35056 = handler__$1;
return (shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__35054,G__35055,G__35056) : shadow.dom.dom_listen.call(null,G__35054,G__35055,G__35056));
}
});

shadow.dom.on.cljs$lang$maxFixedArity = 4;

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
var G__35059 = shadow.dom.dom_node(el);
var G__35060 = cljs.core.name(ev);
var G__35061 = handler;
return (shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3(G__35059,G__35060,G__35061) : shadow.dom.dom_listen_remove.call(null,G__35059,G__35060,G__35061));
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__35063 = cljs.core.seq(events);
var chunk__35064 = null;
var count__35065 = (0);
var i__35066 = (0);
while(true){
if((i__35066 < count__35065)){
var vec__35078 = chunk__35064.cljs$core$IIndexed$_nth$arity$2(null,i__35066);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35078,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35078,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__35678 = seq__35063;
var G__35679 = chunk__35064;
var G__35680 = count__35065;
var G__35681 = (i__35066 + (1));
seq__35063 = G__35678;
chunk__35064 = G__35679;
count__35065 = G__35680;
i__35066 = G__35681;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__35063);
if(temp__5720__auto__){
var seq__35063__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35063__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__35063__$1);
var G__35682 = cljs.core.chunk_rest(seq__35063__$1);
var G__35683 = c__4550__auto__;
var G__35684 = cljs.core.count(c__4550__auto__);
var G__35685 = (0);
seq__35063 = G__35682;
chunk__35064 = G__35683;
count__35065 = G__35684;
i__35066 = G__35685;
continue;
} else {
var vec__35084 = cljs.core.first(seq__35063__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35084,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35084,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__35686 = cljs.core.next(seq__35063__$1);
var G__35687 = null;
var G__35688 = (0);
var G__35689 = (0);
seq__35063 = G__35686;
chunk__35064 = G__35687;
count__35065 = G__35688;
i__35066 = G__35689;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__35090 = cljs.core.seq(styles);
var chunk__35091 = null;
var count__35092 = (0);
var i__35093 = (0);
while(true){
if((i__35093 < count__35092)){
var vec__35106 = chunk__35091.cljs$core$IIndexed$_nth$arity$2(null,i__35093);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35106,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35106,(1),null);
var G__35109_35690 = dom;
var G__35110_35691 = cljs.core.name(k);
var G__35111_35692 = (((v == null))?"":v);
goog.style.setStyle(G__35109_35690,G__35110_35691,G__35111_35692);


var G__35693 = seq__35090;
var G__35694 = chunk__35091;
var G__35695 = count__35092;
var G__35696 = (i__35093 + (1));
seq__35090 = G__35693;
chunk__35091 = G__35694;
count__35092 = G__35695;
i__35093 = G__35696;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__35090);
if(temp__5720__auto__){
var seq__35090__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35090__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__35090__$1);
var G__35697 = cljs.core.chunk_rest(seq__35090__$1);
var G__35698 = c__4550__auto__;
var G__35699 = cljs.core.count(c__4550__auto__);
var G__35700 = (0);
seq__35090 = G__35697;
chunk__35091 = G__35698;
count__35092 = G__35699;
i__35093 = G__35700;
continue;
} else {
var vec__35112 = cljs.core.first(seq__35090__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35112,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35112,(1),null);
var G__35115_35701 = dom;
var G__35116_35702 = cljs.core.name(k);
var G__35117_35703 = (((v == null))?"":v);
goog.style.setStyle(G__35115_35701,G__35116_35702,G__35117_35703);


var G__35704 = cljs.core.next(seq__35090__$1);
var G__35705 = null;
var G__35706 = (0);
var G__35707 = (0);
seq__35090 = G__35704;
chunk__35091 = G__35705;
count__35092 = G__35706;
i__35093 = G__35707;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__35120_35708 = key;
var G__35120_35709__$1 = (((G__35120_35708 instanceof cljs.core.Keyword))?G__35120_35708.fqn:null);
switch (G__35120_35709__$1) {
case "id":
el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value);

break;
case "class":
el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value);

break;
case "for":
el.htmlFor = value;

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_35729 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4131__auto__ = goog.string.startsWith(ks_35729,"data-");
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return goog.string.startsWith(ks_35729,"aria-");
}
})())){
el.setAttribute(ks_35729,value);
} else {
(el[ks_35729] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
var G__35121 = shadow.dom.dom_node(el);
var G__35122 = cls;
return goog.dom.classlist.contains(G__35121,G__35122);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__35126){
var map__35127 = p__35126;
var map__35127__$1 = (((((!((map__35127 == null))))?(((((map__35127.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35127.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35127):map__35127);
var props = map__35127__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35127__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__35133 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35133,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35133,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35133,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__35138 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__35138,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__35138;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__35141 = arguments.length;
switch (G__35141) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5720__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5720__auto__)){
var n = temp__5720__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
});

shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5720__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5720__auto__)){
var n = temp__5720__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
});

shadow.dom.append.cljs$lang$maxFixedArity = 2;

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__35148){
var vec__35150 = p__35148;
var seq__35151 = cljs.core.seq(vec__35150);
var first__35152 = cljs.core.first(seq__35151);
var seq__35151__$1 = cljs.core.next(seq__35151);
var nn = first__35152;
var first__35152__$1 = cljs.core.first(seq__35151__$1);
var seq__35151__$2 = cljs.core.next(seq__35151__$1);
var np = first__35152__$1;
var nc = seq__35151__$2;
var node = vec__35150;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__35154 = nn;
var G__35155 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__35154,G__35155) : create_fn.call(null,G__35154,G__35155));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__35156 = nn;
var G__35157 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__35156,G__35157) : create_fn.call(null,G__35156,G__35157));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__35159 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35159,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35159,(1),null);
var seq__35162_35765 = cljs.core.seq(node_children);
var chunk__35163_35766 = null;
var count__35164_35767 = (0);
var i__35165_35768 = (0);
while(true){
if((i__35165_35768 < count__35164_35767)){
var child_struct_35769 = chunk__35163_35766.cljs$core$IIndexed$_nth$arity$2(null,i__35165_35768);
var children_35770 = shadow.dom.dom_node(child_struct_35769);
if(cljs.core.seq_QMARK_(children_35770)){
var seq__35191_35771 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_35770));
var chunk__35193_35772 = null;
var count__35194_35773 = (0);
var i__35195_35774 = (0);
while(true){
if((i__35195_35774 < count__35194_35773)){
var child_35775 = chunk__35193_35772.cljs$core$IIndexed$_nth$arity$2(null,i__35195_35774);
if(cljs.core.truth_(child_35775)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_35775);


var G__35776 = seq__35191_35771;
var G__35777 = chunk__35193_35772;
var G__35778 = count__35194_35773;
var G__35779 = (i__35195_35774 + (1));
seq__35191_35771 = G__35776;
chunk__35193_35772 = G__35777;
count__35194_35773 = G__35778;
i__35195_35774 = G__35779;
continue;
} else {
var G__35780 = seq__35191_35771;
var G__35781 = chunk__35193_35772;
var G__35782 = count__35194_35773;
var G__35783 = (i__35195_35774 + (1));
seq__35191_35771 = G__35780;
chunk__35193_35772 = G__35781;
count__35194_35773 = G__35782;
i__35195_35774 = G__35783;
continue;
}
} else {
var temp__5720__auto___35784 = cljs.core.seq(seq__35191_35771);
if(temp__5720__auto___35784){
var seq__35191_35785__$1 = temp__5720__auto___35784;
if(cljs.core.chunked_seq_QMARK_(seq__35191_35785__$1)){
var c__4550__auto___35786 = cljs.core.chunk_first(seq__35191_35785__$1);
var G__35787 = cljs.core.chunk_rest(seq__35191_35785__$1);
var G__35788 = c__4550__auto___35786;
var G__35789 = cljs.core.count(c__4550__auto___35786);
var G__35790 = (0);
seq__35191_35771 = G__35787;
chunk__35193_35772 = G__35788;
count__35194_35773 = G__35789;
i__35195_35774 = G__35790;
continue;
} else {
var child_35792 = cljs.core.first(seq__35191_35785__$1);
if(cljs.core.truth_(child_35792)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_35792);


var G__35793 = cljs.core.next(seq__35191_35785__$1);
var G__35794 = null;
var G__35795 = (0);
var G__35796 = (0);
seq__35191_35771 = G__35793;
chunk__35193_35772 = G__35794;
count__35194_35773 = G__35795;
i__35195_35774 = G__35796;
continue;
} else {
var G__35797 = cljs.core.next(seq__35191_35785__$1);
var G__35798 = null;
var G__35799 = (0);
var G__35800 = (0);
seq__35191_35771 = G__35797;
chunk__35193_35772 = G__35798;
count__35194_35773 = G__35799;
i__35195_35774 = G__35800;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_35770);
}


var G__35806 = seq__35162_35765;
var G__35807 = chunk__35163_35766;
var G__35808 = count__35164_35767;
var G__35809 = (i__35165_35768 + (1));
seq__35162_35765 = G__35806;
chunk__35163_35766 = G__35807;
count__35164_35767 = G__35808;
i__35165_35768 = G__35809;
continue;
} else {
var temp__5720__auto___35810 = cljs.core.seq(seq__35162_35765);
if(temp__5720__auto___35810){
var seq__35162_35811__$1 = temp__5720__auto___35810;
if(cljs.core.chunked_seq_QMARK_(seq__35162_35811__$1)){
var c__4550__auto___35812 = cljs.core.chunk_first(seq__35162_35811__$1);
var G__35813 = cljs.core.chunk_rest(seq__35162_35811__$1);
var G__35814 = c__4550__auto___35812;
var G__35815 = cljs.core.count(c__4550__auto___35812);
var G__35816 = (0);
seq__35162_35765 = G__35813;
chunk__35163_35766 = G__35814;
count__35164_35767 = G__35815;
i__35165_35768 = G__35816;
continue;
} else {
var child_struct_35817 = cljs.core.first(seq__35162_35811__$1);
var children_35818 = shadow.dom.dom_node(child_struct_35817);
if(cljs.core.seq_QMARK_(children_35818)){
var seq__35201_35819 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_35818));
var chunk__35203_35820 = null;
var count__35204_35821 = (0);
var i__35205_35822 = (0);
while(true){
if((i__35205_35822 < count__35204_35821)){
var child_35824 = chunk__35203_35820.cljs$core$IIndexed$_nth$arity$2(null,i__35205_35822);
if(cljs.core.truth_(child_35824)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_35824);


var G__35825 = seq__35201_35819;
var G__35826 = chunk__35203_35820;
var G__35827 = count__35204_35821;
var G__35828 = (i__35205_35822 + (1));
seq__35201_35819 = G__35825;
chunk__35203_35820 = G__35826;
count__35204_35821 = G__35827;
i__35205_35822 = G__35828;
continue;
} else {
var G__35829 = seq__35201_35819;
var G__35830 = chunk__35203_35820;
var G__35831 = count__35204_35821;
var G__35832 = (i__35205_35822 + (1));
seq__35201_35819 = G__35829;
chunk__35203_35820 = G__35830;
count__35204_35821 = G__35831;
i__35205_35822 = G__35832;
continue;
}
} else {
var temp__5720__auto___35833__$1 = cljs.core.seq(seq__35201_35819);
if(temp__5720__auto___35833__$1){
var seq__35201_35835__$1 = temp__5720__auto___35833__$1;
if(cljs.core.chunked_seq_QMARK_(seq__35201_35835__$1)){
var c__4550__auto___35836 = cljs.core.chunk_first(seq__35201_35835__$1);
var G__35837 = cljs.core.chunk_rest(seq__35201_35835__$1);
var G__35838 = c__4550__auto___35836;
var G__35839 = cljs.core.count(c__4550__auto___35836);
var G__35840 = (0);
seq__35201_35819 = G__35837;
chunk__35203_35820 = G__35838;
count__35204_35821 = G__35839;
i__35205_35822 = G__35840;
continue;
} else {
var child_35842 = cljs.core.first(seq__35201_35835__$1);
if(cljs.core.truth_(child_35842)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_35842);


var G__35843 = cljs.core.next(seq__35201_35835__$1);
var G__35844 = null;
var G__35845 = (0);
var G__35846 = (0);
seq__35201_35819 = G__35843;
chunk__35203_35820 = G__35844;
count__35204_35821 = G__35845;
i__35205_35822 = G__35846;
continue;
} else {
var G__35847 = cljs.core.next(seq__35201_35835__$1);
var G__35848 = null;
var G__35849 = (0);
var G__35850 = (0);
seq__35201_35819 = G__35847;
chunk__35203_35820 = G__35848;
count__35204_35821 = G__35849;
i__35205_35822 = G__35850;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_35818);
}


var G__35851 = cljs.core.next(seq__35162_35811__$1);
var G__35852 = null;
var G__35853 = (0);
var G__35854 = (0);
seq__35162_35765 = G__35851;
chunk__35163_35766 = G__35852;
count__35164_35767 = G__35853;
i__35165_35768 = G__35854;
continue;
}
} else {
}
}
break;
}

return node;
});
cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
});

cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
});

cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
});
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
});
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
});
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
var G__35216 = shadow.dom.dom_node(node);
return goog.dom.removeChildren(G__35216);
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__35219 = cljs.core.seq(node);
var chunk__35220 = null;
var count__35221 = (0);
var i__35222 = (0);
while(true){
if((i__35222 < count__35221)){
var n = chunk__35220.cljs$core$IIndexed$_nth$arity$2(null,i__35222);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__35860 = seq__35219;
var G__35861 = chunk__35220;
var G__35862 = count__35221;
var G__35863 = (i__35222 + (1));
seq__35219 = G__35860;
chunk__35220 = G__35861;
count__35221 = G__35862;
i__35222 = G__35863;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__35219);
if(temp__5720__auto__){
var seq__35219__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35219__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__35219__$1);
var G__35871 = cljs.core.chunk_rest(seq__35219__$1);
var G__35872 = c__4550__auto__;
var G__35873 = cljs.core.count(c__4550__auto__);
var G__35874 = (0);
seq__35219 = G__35871;
chunk__35220 = G__35872;
count__35221 = G__35873;
i__35222 = G__35874;
continue;
} else {
var n = cljs.core.first(seq__35219__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__35875 = cljs.core.next(seq__35219__$1);
var G__35876 = null;
var G__35877 = (0);
var G__35878 = (0);
seq__35219 = G__35875;
chunk__35220 = G__35876;
count__35221 = G__35877;
i__35222 = G__35878;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
var G__35233 = shadow.dom.dom_node(new$);
var G__35234 = shadow.dom.dom_node(old);
return goog.dom.replaceNode(G__35233,G__35234);
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__35237 = arguments.length;
switch (G__35237) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return shadow.dom.dom_node(el).innerText = new_text;
});

shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
});

shadow.dom.text.cljs$lang$maxFixedArity = 2;

shadow.dom.check = (function shadow$dom$check(var_args){
var G__35242 = arguments.length;
switch (G__35242) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
});

shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return shadow.dom.dom_node(el).checked = checked;
});

shadow.dom.check.cljs$lang$maxFixedArity = 2;

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__35249 = arguments.length;
switch (G__35249) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
});

shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4131__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return default$;
}
});

shadow.dom.attr.cljs$lang$maxFixedArity = 3;

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return shadow.dom.dom_node(node).innerHTML = text;
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4736__auto__ = [];
var len__4730__auto___35896 = arguments.length;
var i__4731__auto___35897 = (0);
while(true){
if((i__4731__auto___35897 < len__4730__auto___35896)){
args__4736__auto__.push((arguments[i__4731__auto___35897]));

var G__35898 = (i__4731__auto___35897 + (1));
i__4731__auto___35897 = G__35898;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__35264_35899 = cljs.core.seq(nodes);
var chunk__35265_35900 = null;
var count__35266_35901 = (0);
var i__35267_35902 = (0);
while(true){
if((i__35267_35902 < count__35266_35901)){
var node_35903 = chunk__35265_35900.cljs$core$IIndexed$_nth$arity$2(null,i__35267_35902);
fragment.appendChild(shadow.dom._to_dom(node_35903));


var G__35904 = seq__35264_35899;
var G__35905 = chunk__35265_35900;
var G__35906 = count__35266_35901;
var G__35907 = (i__35267_35902 + (1));
seq__35264_35899 = G__35904;
chunk__35265_35900 = G__35905;
count__35266_35901 = G__35906;
i__35267_35902 = G__35907;
continue;
} else {
var temp__5720__auto___35908 = cljs.core.seq(seq__35264_35899);
if(temp__5720__auto___35908){
var seq__35264_35909__$1 = temp__5720__auto___35908;
if(cljs.core.chunked_seq_QMARK_(seq__35264_35909__$1)){
var c__4550__auto___35910 = cljs.core.chunk_first(seq__35264_35909__$1);
var G__35911 = cljs.core.chunk_rest(seq__35264_35909__$1);
var G__35912 = c__4550__auto___35910;
var G__35913 = cljs.core.count(c__4550__auto___35910);
var G__35914 = (0);
seq__35264_35899 = G__35911;
chunk__35265_35900 = G__35912;
count__35266_35901 = G__35913;
i__35267_35902 = G__35914;
continue;
} else {
var node_35919 = cljs.core.first(seq__35264_35909__$1);
fragment.appendChild(shadow.dom._to_dom(node_35919));


var G__35921 = cljs.core.next(seq__35264_35909__$1);
var G__35922 = null;
var G__35923 = (0);
var G__35924 = (0);
seq__35264_35899 = G__35921;
chunk__35265_35900 = G__35922;
count__35266_35901 = G__35923;
i__35267_35902 = G__35924;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
});

shadow.dom.fragment.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
shadow.dom.fragment.cljs$lang$applyTo = (function (seq35261){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq35261));
});

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__35280_35925 = cljs.core.seq(scripts);
var chunk__35281_35926 = null;
var count__35282_35927 = (0);
var i__35283_35928 = (0);
while(true){
if((i__35283_35928 < count__35282_35927)){
var vec__35292_35929 = chunk__35281_35926.cljs$core$IIndexed$_nth$arity$2(null,i__35283_35928);
var script_tag_35930 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35292_35929,(0),null);
var script_body_35931 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35292_35929,(1),null);
eval(script_body_35931);


var G__35932 = seq__35280_35925;
var G__35933 = chunk__35281_35926;
var G__35934 = count__35282_35927;
var G__35935 = (i__35283_35928 + (1));
seq__35280_35925 = G__35932;
chunk__35281_35926 = G__35933;
count__35282_35927 = G__35934;
i__35283_35928 = G__35935;
continue;
} else {
var temp__5720__auto___35936 = cljs.core.seq(seq__35280_35925);
if(temp__5720__auto___35936){
var seq__35280_35937__$1 = temp__5720__auto___35936;
if(cljs.core.chunked_seq_QMARK_(seq__35280_35937__$1)){
var c__4550__auto___35938 = cljs.core.chunk_first(seq__35280_35937__$1);
var G__35939 = cljs.core.chunk_rest(seq__35280_35937__$1);
var G__35940 = c__4550__auto___35938;
var G__35941 = cljs.core.count(c__4550__auto___35938);
var G__35942 = (0);
seq__35280_35925 = G__35939;
chunk__35281_35926 = G__35940;
count__35282_35927 = G__35941;
i__35283_35928 = G__35942;
continue;
} else {
var vec__35296_35943 = cljs.core.first(seq__35280_35937__$1);
var script_tag_35944 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35296_35943,(0),null);
var script_body_35945 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35296_35943,(1),null);
eval(script_body_35945);


var G__35946 = cljs.core.next(seq__35280_35937__$1);
var G__35947 = null;
var G__35948 = (0);
var G__35949 = (0);
seq__35280_35925 = G__35946;
chunk__35281_35926 = G__35947;
count__35282_35927 = G__35948;
i__35283_35928 = G__35949;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (scripts){
return (function (s__$1,p__35299){
var vec__35300 = p__35299;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35300,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35300,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
});})(scripts))
,s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
el.innerHTML = s;

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
var G__35308 = shadow.dom.dom_node(el);
var G__35309 = cls;
return goog.dom.getAncestorByClass(G__35308,G__35309);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__35312 = arguments.length;
switch (G__35312) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
var G__35316 = shadow.dom.dom_node(el);
var G__35317 = cljs.core.name(tag);
return goog.dom.getAncestorByTagNameAndClass(G__35316,G__35317);
});

shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
var G__35320 = shadow.dom.dom_node(el);
var G__35321 = cljs.core.name(tag);
var G__35322 = cljs.core.name(cls);
return goog.dom.getAncestorByTagNameAndClass(G__35320,G__35321,G__35322);
});

shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3;

shadow.dom.get_value = (function shadow$dom$get_value(dom){
var G__35325 = shadow.dom.dom_node(dom);
return goog.dom.forms.getValue(G__35325);
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
var G__35327 = shadow.dom.dom_node(dom);
var G__35328 = value;
return goog.dom.forms.setValue(G__35327,G__35328);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__35331 = cljs.core.seq(style_keys);
var chunk__35332 = null;
var count__35333 = (0);
var i__35334 = (0);
while(true){
if((i__35334 < count__35333)){
var it = chunk__35332.cljs$core$IIndexed$_nth$arity$2(null,i__35334);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__35971 = seq__35331;
var G__35972 = chunk__35332;
var G__35973 = count__35333;
var G__35974 = (i__35334 + (1));
seq__35331 = G__35971;
chunk__35332 = G__35972;
count__35333 = G__35973;
i__35334 = G__35974;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__35331);
if(temp__5720__auto__){
var seq__35331__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35331__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__35331__$1);
var G__35976 = cljs.core.chunk_rest(seq__35331__$1);
var G__35977 = c__4550__auto__;
var G__35978 = cljs.core.count(c__4550__auto__);
var G__35979 = (0);
seq__35331 = G__35976;
chunk__35332 = G__35977;
count__35333 = G__35978;
i__35334 = G__35979;
continue;
} else {
var it = cljs.core.first(seq__35331__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__35984 = cljs.core.next(seq__35331__$1);
var G__35985 = null;
var G__35986 = (0);
var G__35987 = (0);
seq__35331 = G__35984;
chunk__35332 = G__35985;
count__35333 = G__35986;
i__35334 = G__35987;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k35336,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__35340 = k35336;
var G__35340__$1 = (((G__35340 instanceof cljs.core.Keyword))?G__35340.fqn:null);
switch (G__35340__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k35336,else__4388__auto__);

}
});

shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__35341){
var vec__35342 = p__35341;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35342,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35342,(1),null);
return (f__4405__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4405__auto__.cljs$core$IFn$_invoke$arity$3(ret__4407__auto__,k__4408__auto__,v__4409__auto__) : f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__));
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer(writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4400__auto__,pr_pair__4402__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4401__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
});

shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__35335){
var self__ = this;
var G__35335__$1 = this;
return (new cljs.core.RecordIter((0),G__35335__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return self__.__meta;
});

shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
});

shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4389__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = (function (){var fexpr__35349 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__35349(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this35337,other35338){
var self__ = this;
var this35337__$1 = this;
return (((!((other35338 == null)))) && ((this35337__$1.constructor === other35338.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35337__$1.x,other35338.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35337__$1.y,other35338.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35337__$1.__extmap,other35338.__extmap)));
});

shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4395__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4395__auto__)),null));
}
});

shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__35335){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__35353 = cljs.core.keyword_identical_QMARK_;
var expr__35354 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__35356 = new cljs.core.Keyword(null,"x","x",2099068185);
var G__35357 = expr__35354;
return (pred__35353.cljs$core$IFn$_invoke$arity$2 ? pred__35353.cljs$core$IFn$_invoke$arity$2(G__35356,G__35357) : pred__35353.call(null,G__35356,G__35357));
})())){
return (new shadow.dom.Coordinate(G__35335,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__35358 = new cljs.core.Keyword(null,"y","y",-1757859776);
var G__35359 = expr__35354;
return (pred__35353.cljs$core$IFn$_invoke$arity$2 ? pred__35353.cljs$core$IFn$_invoke$arity$2(G__35358,G__35359) : pred__35353.call(null,G__35358,G__35359));
})())){
return (new shadow.dom.Coordinate(self__.x,G__35335,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__35335),null));
}
}
});

shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
});

shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__35335){
var self__ = this;
var this__4384__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__35335,self__.__extmap,self__.__hash));
});

shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
});

shadow.dom.Coordinate.cljs$lang$type = true;

shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
});

shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write(writer__4429__auto__,"shadow.dom/Coordinate");
});

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__35339){
var extmap__4424__auto__ = (function (){var G__35373 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__35339,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__35339)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__35373);
} else {
return G__35373;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__35339),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__35339),null,cljs.core.not_empty(extmap__4424__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = (function (){var G__35374 = shadow.dom.dom_node(el);
return goog.style.getPosition(G__35374);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = (function (){var G__35375 = shadow.dom.dom_node(el);
return goog.style.getClientPosition(G__35375);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = (function (){var G__35376 = shadow.dom.dom_node(el);
return goog.style.getPageOffset(G__35376);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k35378,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__35388 = k35378;
var G__35388__$1 = (((G__35388 instanceof cljs.core.Keyword))?G__35388.fqn:null);
switch (G__35388__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k35378,else__4388__auto__);

}
});

shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__35389){
var vec__35390 = p__35389;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35390,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35390,(1),null);
return (f__4405__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4405__auto__.cljs$core$IFn$_invoke$arity$3(ret__4407__auto__,k__4408__auto__,v__4409__auto__) : f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__));
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer(writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4400__auto__,pr_pair__4402__auto__,"#shadow.dom.Size{",", ","}",opts__4401__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
});

shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__35377){
var self__ = this;
var G__35377__$1 = this;
return (new cljs.core.RecordIter((0),G__35377__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return self__.__meta;
});

shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
});

shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4389__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = (function (){var fexpr__35402 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__35402(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this35379,other35380){
var self__ = this;
var this35379__$1 = this;
return (((!((other35380 == null)))) && ((this35379__$1.constructor === other35380.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35379__$1.w,other35380.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35379__$1.h,other35380.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35379__$1.__extmap,other35380.__extmap)));
});

shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4395__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4395__auto__)),null));
}
});

shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__35377){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__35406 = cljs.core.keyword_identical_QMARK_;
var expr__35407 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__35410 = new cljs.core.Keyword(null,"w","w",354169001);
var G__35411 = expr__35407;
return (pred__35406.cljs$core$IFn$_invoke$arity$2 ? pred__35406.cljs$core$IFn$_invoke$arity$2(G__35410,G__35411) : pred__35406.call(null,G__35410,G__35411));
})())){
return (new shadow.dom.Size(G__35377,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__35412 = new cljs.core.Keyword(null,"h","h",1109658740);
var G__35413 = expr__35407;
return (pred__35406.cljs$core$IFn$_invoke$arity$2 ? pred__35406.cljs$core$IFn$_invoke$arity$2(G__35412,G__35413) : pred__35406.call(null,G__35412,G__35413));
})())){
return (new shadow.dom.Size(self__.w,G__35377,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__35377),null));
}
}
});

shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
});

shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__35377){
var self__ = this;
var this__4384__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__35377,self__.__extmap,self__.__hash));
});

shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
});

shadow.dom.Size.cljs$lang$type = true;

shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
});

shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write(writer__4429__auto__,"shadow.dom/Size");
});

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__35381){
var extmap__4424__auto__ = (function (){var G__35423 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__35381,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__35381)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__35423);
} else {
return G__35423;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__35381),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__35381),null,cljs.core.not_empty(extmap__4424__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj((function (){var G__35427 = shadow.dom.dom_node(el);
return goog.style.getSize(G__35427);
})());
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(shadow.dom.get_size(el));
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4604__auto__ = opts;
var l__4605__auto__ = a__4604__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4605__auto__)){
var G__36036 = (i + (1));
var G__36037 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__36036;
ret = G__36037;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__35439){
var vec__35440 = p__35439;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35440,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35440,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params)))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__35444 = arguments.length;
switch (G__35444) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
});

shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
});

shadow.dom.redirect.cljs$lang$maxFixedArity = 2;

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return document.location.href = document.location.href;
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__35445_36044 = new_node;
var G__35446_36045 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingAfter(G__35445_36044,G__35446_36045);

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__35447_36050 = new_node;
var G__35448_36051 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingBefore(G__35447_36050,G__35448_36051);

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5718__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5718__auto__)){
var child = temp__5718__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__36053 = ps;
var G__36054 = (i + (1));
el__$1 = G__36053;
i = G__36054;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
var G__35452 = shadow.dom.dom_node(el);
return goog.dom.getParentElement(G__35452);
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,((function (parent){
return (function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
});})(parent))
,null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
var G__35456 = shadow.dom.dom_node(el);
return goog.dom.getNextElementSibling(G__35456);
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
var G__35457 = shadow.dom.dom_node(el);
return goog.dom.getPreviousElementSibling(G__35457);
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__35458 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35458,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35458,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35458,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__35461_36066 = cljs.core.seq(props);
var chunk__35462_36067 = null;
var count__35463_36068 = (0);
var i__35464_36069 = (0);
while(true){
if((i__35464_36069 < count__35463_36068)){
var vec__35471_36075 = chunk__35462_36067.cljs$core$IIndexed$_nth$arity$2(null,i__35464_36069);
var k_36076 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35471_36075,(0),null);
var v_36077 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35471_36075,(1),null);
el.setAttributeNS((function (){var temp__5720__auto__ = cljs.core.namespace(k_36076);
if(cljs.core.truth_(temp__5720__auto__)){
var ns = temp__5720__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_36076),v_36077);


var G__36079 = seq__35461_36066;
var G__36080 = chunk__35462_36067;
var G__36081 = count__35463_36068;
var G__36082 = (i__35464_36069 + (1));
seq__35461_36066 = G__36079;
chunk__35462_36067 = G__36080;
count__35463_36068 = G__36081;
i__35464_36069 = G__36082;
continue;
} else {
var temp__5720__auto___36084 = cljs.core.seq(seq__35461_36066);
if(temp__5720__auto___36084){
var seq__35461_36085__$1 = temp__5720__auto___36084;
if(cljs.core.chunked_seq_QMARK_(seq__35461_36085__$1)){
var c__4550__auto___36086 = cljs.core.chunk_first(seq__35461_36085__$1);
var G__36088 = cljs.core.chunk_rest(seq__35461_36085__$1);
var G__36089 = c__4550__auto___36086;
var G__36090 = cljs.core.count(c__4550__auto___36086);
var G__36091 = (0);
seq__35461_36066 = G__36088;
chunk__35462_36067 = G__36089;
count__35463_36068 = G__36090;
i__35464_36069 = G__36091;
continue;
} else {
var vec__35474_36093 = cljs.core.first(seq__35461_36085__$1);
var k_36094 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35474_36093,(0),null);
var v_36095 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35474_36093,(1),null);
el.setAttributeNS((function (){var temp__5720__auto____$1 = cljs.core.namespace(k_36094);
if(cljs.core.truth_(temp__5720__auto____$1)){
var ns = temp__5720__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_36094),v_36095);


var G__36097 = cljs.core.next(seq__35461_36085__$1);
var G__36098 = null;
var G__36099 = (0);
var G__36100 = (0);
seq__35461_36066 = G__36097;
chunk__35462_36067 = G__36098;
count__35463_36068 = G__36099;
i__35464_36069 = G__36100;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__35479 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35479,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35479,(1),null);
var seq__35483_36105 = cljs.core.seq(node_children);
var chunk__35485_36106 = null;
var count__35486_36107 = (0);
var i__35487_36108 = (0);
while(true){
if((i__35487_36108 < count__35486_36107)){
var child_struct_36110 = chunk__35485_36106.cljs$core$IIndexed$_nth$arity$2(null,i__35487_36108);
if((!((child_struct_36110 == null)))){
if(typeof child_struct_36110 === 'string'){
var text_36111 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_36111),child_struct_36110].join(''));
} else {
var children_36126 = shadow.dom.svg_node(child_struct_36110);
if(cljs.core.seq_QMARK_(children_36126)){
var seq__35519_36127 = cljs.core.seq(children_36126);
var chunk__35521_36128 = null;
var count__35522_36129 = (0);
var i__35523_36130 = (0);
while(true){
if((i__35523_36130 < count__35522_36129)){
var child_36132 = chunk__35521_36128.cljs$core$IIndexed$_nth$arity$2(null,i__35523_36130);
if(cljs.core.truth_(child_36132)){
node.appendChild(child_36132);


var G__36133 = seq__35519_36127;
var G__36134 = chunk__35521_36128;
var G__36135 = count__35522_36129;
var G__36136 = (i__35523_36130 + (1));
seq__35519_36127 = G__36133;
chunk__35521_36128 = G__36134;
count__35522_36129 = G__36135;
i__35523_36130 = G__36136;
continue;
} else {
var G__36138 = seq__35519_36127;
var G__36139 = chunk__35521_36128;
var G__36140 = count__35522_36129;
var G__36141 = (i__35523_36130 + (1));
seq__35519_36127 = G__36138;
chunk__35521_36128 = G__36139;
count__35522_36129 = G__36140;
i__35523_36130 = G__36141;
continue;
}
} else {
var temp__5720__auto___36142 = cljs.core.seq(seq__35519_36127);
if(temp__5720__auto___36142){
var seq__35519_36143__$1 = temp__5720__auto___36142;
if(cljs.core.chunked_seq_QMARK_(seq__35519_36143__$1)){
var c__4550__auto___36144 = cljs.core.chunk_first(seq__35519_36143__$1);
var G__36145 = cljs.core.chunk_rest(seq__35519_36143__$1);
var G__36146 = c__4550__auto___36144;
var G__36147 = cljs.core.count(c__4550__auto___36144);
var G__36148 = (0);
seq__35519_36127 = G__36145;
chunk__35521_36128 = G__36146;
count__35522_36129 = G__36147;
i__35523_36130 = G__36148;
continue;
} else {
var child_36149 = cljs.core.first(seq__35519_36143__$1);
if(cljs.core.truth_(child_36149)){
node.appendChild(child_36149);


var G__36150 = cljs.core.next(seq__35519_36143__$1);
var G__36151 = null;
var G__36152 = (0);
var G__36153 = (0);
seq__35519_36127 = G__36150;
chunk__35521_36128 = G__36151;
count__35522_36129 = G__36152;
i__35523_36130 = G__36153;
continue;
} else {
var G__36155 = cljs.core.next(seq__35519_36143__$1);
var G__36156 = null;
var G__36157 = (0);
var G__36158 = (0);
seq__35519_36127 = G__36155;
chunk__35521_36128 = G__36156;
count__35522_36129 = G__36157;
i__35523_36130 = G__36158;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_36126);
}
}


var G__36159 = seq__35483_36105;
var G__36160 = chunk__35485_36106;
var G__36161 = count__35486_36107;
var G__36162 = (i__35487_36108 + (1));
seq__35483_36105 = G__36159;
chunk__35485_36106 = G__36160;
count__35486_36107 = G__36161;
i__35487_36108 = G__36162;
continue;
} else {
var G__36163 = seq__35483_36105;
var G__36164 = chunk__35485_36106;
var G__36165 = count__35486_36107;
var G__36166 = (i__35487_36108 + (1));
seq__35483_36105 = G__36163;
chunk__35485_36106 = G__36164;
count__35486_36107 = G__36165;
i__35487_36108 = G__36166;
continue;
}
} else {
var temp__5720__auto___36168 = cljs.core.seq(seq__35483_36105);
if(temp__5720__auto___36168){
var seq__35483_36169__$1 = temp__5720__auto___36168;
if(cljs.core.chunked_seq_QMARK_(seq__35483_36169__$1)){
var c__4550__auto___36170 = cljs.core.chunk_first(seq__35483_36169__$1);
var G__36171 = cljs.core.chunk_rest(seq__35483_36169__$1);
var G__36172 = c__4550__auto___36170;
var G__36173 = cljs.core.count(c__4550__auto___36170);
var G__36174 = (0);
seq__35483_36105 = G__36171;
chunk__35485_36106 = G__36172;
count__35486_36107 = G__36173;
i__35487_36108 = G__36174;
continue;
} else {
var child_struct_36175 = cljs.core.first(seq__35483_36169__$1);
if((!((child_struct_36175 == null)))){
if(typeof child_struct_36175 === 'string'){
var text_36177 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_36177),child_struct_36175].join(''));
} else {
var children_36178 = shadow.dom.svg_node(child_struct_36175);
if(cljs.core.seq_QMARK_(children_36178)){
var seq__35533_36179 = cljs.core.seq(children_36178);
var chunk__35535_36180 = null;
var count__35536_36181 = (0);
var i__35537_36182 = (0);
while(true){
if((i__35537_36182 < count__35536_36181)){
var child_36184 = chunk__35535_36180.cljs$core$IIndexed$_nth$arity$2(null,i__35537_36182);
if(cljs.core.truth_(child_36184)){
node.appendChild(child_36184);


var G__36185 = seq__35533_36179;
var G__36186 = chunk__35535_36180;
var G__36187 = count__35536_36181;
var G__36188 = (i__35537_36182 + (1));
seq__35533_36179 = G__36185;
chunk__35535_36180 = G__36186;
count__35536_36181 = G__36187;
i__35537_36182 = G__36188;
continue;
} else {
var G__36190 = seq__35533_36179;
var G__36191 = chunk__35535_36180;
var G__36192 = count__35536_36181;
var G__36193 = (i__35537_36182 + (1));
seq__35533_36179 = G__36190;
chunk__35535_36180 = G__36191;
count__35536_36181 = G__36192;
i__35537_36182 = G__36193;
continue;
}
} else {
var temp__5720__auto___36200__$1 = cljs.core.seq(seq__35533_36179);
if(temp__5720__auto___36200__$1){
var seq__35533_36201__$1 = temp__5720__auto___36200__$1;
if(cljs.core.chunked_seq_QMARK_(seq__35533_36201__$1)){
var c__4550__auto___36202 = cljs.core.chunk_first(seq__35533_36201__$1);
var G__36203 = cljs.core.chunk_rest(seq__35533_36201__$1);
var G__36204 = c__4550__auto___36202;
var G__36205 = cljs.core.count(c__4550__auto___36202);
var G__36206 = (0);
seq__35533_36179 = G__36203;
chunk__35535_36180 = G__36204;
count__35536_36181 = G__36205;
i__35537_36182 = G__36206;
continue;
} else {
var child_36211 = cljs.core.first(seq__35533_36201__$1);
if(cljs.core.truth_(child_36211)){
node.appendChild(child_36211);


var G__36212 = cljs.core.next(seq__35533_36201__$1);
var G__36213 = null;
var G__36214 = (0);
var G__36215 = (0);
seq__35533_36179 = G__36212;
chunk__35535_36180 = G__36213;
count__35536_36181 = G__36214;
i__35537_36182 = G__36215;
continue;
} else {
var G__36220 = cljs.core.next(seq__35533_36201__$1);
var G__36221 = null;
var G__36222 = (0);
var G__36223 = (0);
seq__35533_36179 = G__36220;
chunk__35535_36180 = G__36221;
count__35536_36181 = G__36222;
i__35537_36182 = G__36223;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_36178);
}
}


var G__36228 = cljs.core.next(seq__35483_36169__$1);
var G__36229 = null;
var G__36230 = (0);
var G__36231 = (0);
seq__35483_36105 = G__36228;
chunk__35485_36106 = G__36229;
count__35486_36107 = G__36230;
i__35487_36108 = G__36231;
continue;
} else {
var G__36232 = cljs.core.next(seq__35483_36169__$1);
var G__36233 = null;
var G__36234 = (0);
var G__36235 = (0);
seq__35483_36105 = G__36232;
chunk__35485_36106 = G__36233;
count__35486_36107 = G__36234;
i__35487_36108 = G__36235;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

var G__35548_36236 = shadow.dom._to_svg;
var G__35549_36237 = "string";
var G__35550_36238 = ((function (G__35548_36236,G__35549_36237){
return (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
});})(G__35548_36236,G__35549_36237))
;
goog.object.set(G__35548_36236,G__35549_36237,G__35550_36238);

cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
});

cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
});

goog.object.set(shadow.dom.SVGElement,"null",true);

var G__35553_36249 = shadow.dom._to_svg;
var G__35554_36250 = "null";
var G__35555_36251 = ((function (G__35553_36249,G__35554_36250){
return (function (_){
return null;
});})(G__35553_36249,G__35554_36250))
;
goog.object.set(G__35553_36249,G__35554_36250,G__35555_36251);
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4736__auto__ = [];
var len__4730__auto___36260 = arguments.length;
var i__4731__auto___36261 = (0);
while(true){
if((i__4731__auto___36261 < len__4730__auto___36260)){
args__4736__auto__.push((arguments[i__4731__auto___36261]));

var G__36262 = (i__4731__auto___36261 + (1));
i__4731__auto___36261 = G__36262;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
});

shadow.dom.svg.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
shadow.dom.svg.cljs$lang$applyTo = (function (seq35556){
var G__35557 = cljs.core.first(seq35556);
var seq35556__$1 = cljs.core.next(seq35556);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35557,seq35556__$1);
});

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__35559 = arguments.length;
switch (G__35559) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
});

shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
});

shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = ((function (buf,chan){
return (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});})(buf,chan))
;
var G__35560_36274 = shadow.dom.dom_node(el);
var G__35561_36275 = cljs.core.name(event);
var G__35562_36276 = event_fn;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__35560_36274,G__35561_36275,G__35562_36276) : shadow.dom.dom_listen.call(null,G__35560_36274,G__35561_36275,G__35562_36276));

if(cljs.core.truth_((function (){var and__4120__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4120__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4120__auto__;
}
})())){
var c__33394__auto___36277 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33394__auto___36277,buf,chan,event_fn){
return (function (){
var f__33395__auto__ = (function (){var switch__33298__auto__ = ((function (c__33394__auto___36277,buf,chan,event_fn){
return (function (state_35567){
var state_val_35568 = (state_35567[(1)]);
if((state_val_35568 === (1))){
var state_35567__$1 = state_35567;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35567__$1,(2),once_or_cleanup);
} else {
if((state_val_35568 === (2))){
var inst_35564 = (state_35567[(2)]);
var inst_35565 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_35567__$1 = (function (){var statearr_35572 = state_35567;
(statearr_35572[(7)] = inst_35564);

return statearr_35572;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_35567__$1,inst_35565);
} else {
return null;
}
}
});})(c__33394__auto___36277,buf,chan,event_fn))
;
return ((function (switch__33298__auto__,c__33394__auto___36277,buf,chan,event_fn){
return (function() {
var shadow$dom$state_machine__33299__auto__ = null;
var shadow$dom$state_machine__33299__auto____0 = (function (){
var statearr_35573 = [null,null,null,null,null,null,null,null];
(statearr_35573[(0)] = shadow$dom$state_machine__33299__auto__);

(statearr_35573[(1)] = (1));

return statearr_35573;
});
var shadow$dom$state_machine__33299__auto____1 = (function (state_35567){
while(true){
var ret_value__33300__auto__ = (function (){try{while(true){
var result__33301__auto__ = switch__33298__auto__(state_35567);
if(cljs.core.keyword_identical_QMARK_(result__33301__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33301__auto__;
}
break;
}
}catch (e35574){if((e35574 instanceof Object)){
var ex__33302__auto__ = e35574;
var statearr_35576_36279 = state_35567;
(statearr_35576_36279[(5)] = ex__33302__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35567);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35574;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36281 = state_35567;
state_35567 = G__36281;
continue;
} else {
return ret_value__33300__auto__;
}
break;
}
});
shadow$dom$state_machine__33299__auto__ = function(state_35567){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__33299__auto____0.call(this);
case 1:
return shadow$dom$state_machine__33299__auto____1.call(this,state_35567);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__33299__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__33299__auto____0;
shadow$dom$state_machine__33299__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__33299__auto____1;
return shadow$dom$state_machine__33299__auto__;
})()
;})(switch__33298__auto__,c__33394__auto___36277,buf,chan,event_fn))
})();
var state__33396__auto__ = (function (){var statearr_35577 = (f__33395__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33395__auto__.cljs$core$IFn$_invoke$arity$0() : f__33395__auto__.call(null));
(statearr_35577[(6)] = c__33394__auto___36277);

return statearr_35577;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33396__auto__);
});})(c__33394__auto___36277,buf,chan,event_fn))
);

} else {
}

return chan;
});

shadow.dom.event_chan.cljs$lang$maxFixedArity = 4;


//# sourceMappingURL=shadow.dom.js.map
