goog.provide('shadow.cljs.devtools.client.browser');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('clojure.string');
goog.require('goog.dom');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('goog.net.XhrIo');
goog.require('shadow.cljs.devtools.client.env');
goog.require('shadow.cljs.devtools.client.console');
goog.require('shadow.cljs.devtools.client.hud');
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.active_modules_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.active_modules_ref = cljs.core.volatile_BANG_(cljs.core.PersistentHashSet.EMPTY);
}
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.repl_ns_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.repl_ns_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
shadow.cljs.devtools.client.browser.module_loaded = (function shadow$cljs$devtools$client$browser$module_loaded(name){
return shadow.cljs.devtools.client.browser.active_modules_ref.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.active_modules_ref.cljs$core$IDeref$_deref$arity$1(null),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(name)));
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.socket_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.socket_ref = cljs.core.volatile_BANG_(null);
}
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4736__auto__ = [];
var len__4730__auto___37262 = arguments.length;
var i__4731__auto___37263 = (0);
while(true){
if((i__4731__auto___37263 < len__4730__auto___37262)){
args__4736__auto__.push((arguments[i__4731__auto___37263]));

var G__37264 = (i__4731__auto___37263 + (1));
i__4731__auto___37263 = G__37264;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
return console.log.apply(null,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),"color: blue;"], null),args)));
});

shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq37053){
var G__37054 = cljs.core.first(seq37053);
var seq37053__$1 = cljs.core.next(seq37053);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37054,seq37053__$1);
});

shadow.cljs.devtools.client.browser.ws_msg = (function shadow$cljs$devtools$client$browser$ws_msg(msg){
var temp__5718__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5718__auto__)){
var s = temp__5718__auto__;
return s.send(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
} else {
return console.warn("WEBSOCKET NOT CONNECTED",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
}
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.scripts_to_load !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.scripts_to_load = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
shadow.cljs.devtools.client.browser.loaded_QMARK_ = goog.isProvided_;
shadow.cljs.devtools.client.browser.goog_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$browser$goog_is_loaded_QMARK_(name){
return $CLJS.SHADOW_ENV.isLoaded(name);
});
shadow.cljs.devtools.client.browser.goog_base_rc = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shadow.build.classpath","resource","shadow.build.classpath/resource",-879517823),"goog/base.js"], null);
shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$browser$src_is_loaded_QMARK_(p__37056){
var map__37057 = p__37056;
var map__37057__$1 = (((((!((map__37057 == null))))?(((((map__37057.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37057.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37057):map__37057);
var src = map__37057__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37057__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37057__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var or__4131__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.goog_base_rc,resource_id);
if(or__4131__auto__){
return or__4131__auto__;
} else {
return shadow.cljs.devtools.client.browser.goog_is_loaded_QMARK_(output_name);
}
});
shadow.cljs.devtools.client.browser.module_is_active_QMARK_ = (function shadow$cljs$devtools$client$browser$module_is_active_QMARK_(module){
return cljs.core.contains_QMARK_(cljs.core.deref(shadow.cljs.devtools.client.browser.active_modules_ref),module);
});
shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__37059 = cljs.core.seq(sources);
var chunk__37060 = null;
var count__37061 = (0);
var i__37062 = (0);
while(true){
if((i__37062 < count__37061)){
var map__37067 = chunk__37060.cljs$core$IIndexed$_nth$arity$2(null,i__37062);
var map__37067__$1 = (((((!((map__37067 == null))))?(((((map__37067.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37067.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37067):map__37067);
var src = map__37067__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37067__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37067__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37067__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37067__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));


var G__37267 = seq__37059;
var G__37268 = chunk__37060;
var G__37269 = count__37061;
var G__37270 = (i__37062 + (1));
seq__37059 = G__37267;
chunk__37060 = G__37268;
count__37061 = G__37269;
i__37062 = G__37270;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__37059);
if(temp__5720__auto__){
var seq__37059__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37059__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__37059__$1);
var G__37271 = cljs.core.chunk_rest(seq__37059__$1);
var G__37272 = c__4550__auto__;
var G__37273 = cljs.core.count(c__4550__auto__);
var G__37274 = (0);
seq__37059 = G__37271;
chunk__37060 = G__37272;
count__37061 = G__37273;
i__37062 = G__37274;
continue;
} else {
var map__37069 = cljs.core.first(seq__37059__$1);
var map__37069__$1 = (((((!((map__37069 == null))))?(((((map__37069.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37069.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37069):map__37069);
var src = map__37069__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37069__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37069__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37069__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37069__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));


var G__37275 = cljs.core.next(seq__37059__$1);
var G__37276 = null;
var G__37277 = (0);
var G__37278 = (0);
seq__37059 = G__37275;
chunk__37060 = G__37276;
count__37061 = G__37277;
i__37062 = G__37278;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["can't find fn ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__37073 = cljs.core.seq(js_requires);
var chunk__37074 = null;
var count__37075 = (0);
var i__37076 = (0);
while(true){
if((i__37076 < count__37075)){
var js_ns = chunk__37074.cljs$core$IIndexed$_nth$arity$2(null,i__37076);
var require_str_37282 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_37282);


var G__37283 = seq__37073;
var G__37284 = chunk__37074;
var G__37285 = count__37075;
var G__37286 = (i__37076 + (1));
seq__37073 = G__37283;
chunk__37074 = G__37284;
count__37075 = G__37285;
i__37076 = G__37286;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__37073);
if(temp__5720__auto__){
var seq__37073__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37073__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__37073__$1);
var G__37287 = cljs.core.chunk_rest(seq__37073__$1);
var G__37288 = c__4550__auto__;
var G__37289 = cljs.core.count(c__4550__auto__);
var G__37290 = (0);
seq__37073 = G__37287;
chunk__37074 = G__37288;
count__37075 = G__37289;
i__37076 = G__37290;
continue;
} else {
var js_ns = cljs.core.first(seq__37073__$1);
var require_str_37291 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_37291);


var G__37292 = cljs.core.next(seq__37073__$1);
var G__37293 = null;
var G__37294 = (0);
var G__37295 = (0);
seq__37073 = G__37292;
chunk__37074 = G__37293;
count__37075 = G__37294;
i__37076 = G__37295;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.load_sources = (function shadow$cljs$devtools$client$browser$load_sources(sources,callback){
if(cljs.core.empty_QMARK_(sources)){
var G__37077 = cljs.core.PersistentVector.EMPTY;
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__37077) : callback.call(null,G__37077));
} else {
var G__37078 = shadow.cljs.devtools.client.env.files_url();
var G__37079 = ((function (G__37078){
return (function (res){
var req = this;
var content = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(content) : callback.call(null,content));
});})(G__37078))
;
var G__37080 = "POST";
var G__37081 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.Keyword(null,"browser","browser",828191719),new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources)], null)], 0));
var G__37082 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__37078,G__37079,G__37080,G__37081,G__37082);
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(p__37085){
var map__37087 = p__37085;
var map__37087__$1 = (((((!((map__37087 == null))))?(((((map__37087.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37087.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37087):map__37087);
var msg = map__37087__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37087__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37087__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var map__37092 = info;
var map__37092__$1 = (((((!((map__37092 == null))))?(((((map__37092.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37092.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37092):map__37092);
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37092__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var compiled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37092__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4523__auto__ = ((function (map__37092,map__37092__$1,sources,compiled,map__37087,map__37087__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37095(s__37096){
return (new cljs.core.LazySeq(null,((function (map__37092,map__37092__$1,sources,compiled,map__37087,map__37087__$1,msg,info,reload_info){
return (function (){
var s__37096__$1 = s__37096;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__37096__$1);
if(temp__5720__auto__){
var xs__6277__auto__ = temp__5720__auto__;
var map__37101 = cljs.core.first(xs__6277__auto__);
var map__37101__$1 = (((((!((map__37101 == null))))?(((((map__37101.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37101.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37101):map__37101);
var src = map__37101__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37101__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37101__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4519__auto__ = ((function (s__37096__$1,map__37101,map__37101__$1,src,resource_name,warnings,xs__6277__auto__,temp__5720__auto__,map__37092,map__37092__$1,sources,compiled,map__37087,map__37087__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37095_$_iter__37097(s__37098){
return (new cljs.core.LazySeq(null,((function (s__37096__$1,map__37101,map__37101__$1,src,resource_name,warnings,xs__6277__auto__,temp__5720__auto__,map__37092,map__37092__$1,sources,compiled,map__37087,map__37087__$1,msg,info,reload_info){
return (function (){
var s__37098__$1 = s__37098;
while(true){
var temp__5720__auto____$1 = cljs.core.seq(s__37098__$1);
if(temp__5720__auto____$1){
var s__37098__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__37098__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__37098__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__37100 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__37099 = (0);
while(true){
if((i__37099 < size__4522__auto__)){
var warning = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__37099);
cljs.core.chunk_append(b__37100,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__37296 = (i__37099 + (1));
i__37099 = G__37296;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__37100),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37095_$_iter__37097(cljs.core.chunk_rest(s__37098__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__37100),null);
}
} else {
var warning = cljs.core.first(s__37098__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37095_$_iter__37097(cljs.core.rest(s__37098__$2)));
}
} else {
return null;
}
break;
}
});})(s__37096__$1,map__37101,map__37101__$1,src,resource_name,warnings,xs__6277__auto__,temp__5720__auto__,map__37092,map__37092__$1,sources,compiled,map__37087,map__37087__$1,msg,info,reload_info))
,null,null));
});})(s__37096__$1,map__37101,map__37101__$1,src,resource_name,warnings,xs__6277__auto__,temp__5720__auto__,map__37092,map__37092__$1,sources,compiled,map__37087,map__37087__$1,msg,info,reload_info))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__(warnings));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37095(cljs.core.rest(s__37096__$1)));
} else {
var G__37297 = cljs.core.rest(s__37096__$1);
s__37096__$1 = G__37297;
continue;
}
} else {
var G__37298 = cljs.core.rest(s__37096__$1);
s__37096__$1 = G__37298;
continue;
}
} else {
return null;
}
break;
}
});})(map__37092,map__37092__$1,sources,compiled,map__37087,map__37087__$1,msg,info,reload_info))
,null,null));
});})(map__37092,map__37092__$1,sources,compiled,map__37087,map__37087__$1,msg,info,reload_info))
;
return iter__4523__auto__(sources);
})()));
var seq__37104_37299 = cljs.core.seq(warnings);
var chunk__37105_37300 = null;
var count__37106_37301 = (0);
var i__37107_37302 = (0);
while(true){
if((i__37107_37302 < count__37106_37301)){
var map__37122_37303 = chunk__37105_37300.cljs$core$IIndexed$_nth$arity$2(null,i__37107_37302);
var map__37122_37304__$1 = (((((!((map__37122_37303 == null))))?(((((map__37122_37303.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37122_37303.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37122_37303):map__37122_37303);
var w_37305 = map__37122_37304__$1;
var msg_37306__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37122_37304__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_37307 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37122_37304__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_37308 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37122_37304__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_37309 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37122_37304__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_37309)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_37307),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_37308),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_37306__$1)].join(''));


var G__37310 = seq__37104_37299;
var G__37311 = chunk__37105_37300;
var G__37312 = count__37106_37301;
var G__37313 = (i__37107_37302 + (1));
seq__37104_37299 = G__37310;
chunk__37105_37300 = G__37311;
count__37106_37301 = G__37312;
i__37107_37302 = G__37313;
continue;
} else {
var temp__5720__auto___37314 = cljs.core.seq(seq__37104_37299);
if(temp__5720__auto___37314){
var seq__37104_37315__$1 = temp__5720__auto___37314;
if(cljs.core.chunked_seq_QMARK_(seq__37104_37315__$1)){
var c__4550__auto___37316 = cljs.core.chunk_first(seq__37104_37315__$1);
var G__37317 = cljs.core.chunk_rest(seq__37104_37315__$1);
var G__37318 = c__4550__auto___37316;
var G__37319 = cljs.core.count(c__4550__auto___37316);
var G__37320 = (0);
seq__37104_37299 = G__37317;
chunk__37105_37300 = G__37318;
count__37106_37301 = G__37319;
i__37107_37302 = G__37320;
continue;
} else {
var map__37124_37321 = cljs.core.first(seq__37104_37315__$1);
var map__37124_37322__$1 = (((((!((map__37124_37321 == null))))?(((((map__37124_37321.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37124_37321.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37124_37321):map__37124_37321);
var w_37323 = map__37124_37322__$1;
var msg_37324__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37124_37322__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_37325 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37124_37322__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_37326 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37124_37322__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_37327 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37124_37322__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_37327)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_37325),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_37326),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_37324__$1)].join(''));


var G__37328 = cljs.core.next(seq__37104_37315__$1);
var G__37329 = null;
var G__37330 = (0);
var G__37331 = (0);
seq__37104_37299 = G__37328;
chunk__37105_37300 = G__37329;
count__37106_37301 = G__37330;
i__37107_37302 = G__37331;
continue;
}
} else {
}
}
break;
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__37092,map__37092__$1,sources,compiled,warnings,map__37087,map__37087__$1,msg,info,reload_info){
return (function (p__37126){
var map__37137 = p__37126;
var map__37137__$1 = (((((!((map__37137 == null))))?(((((map__37137.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37137.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37137):map__37137);
var src = map__37137__$1;
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37137__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37137__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
return ((cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"always-load","always-load",66405637).cljs$core$IFn$_invoke$arity$1(reload_info),ns)) || (cljs.core.not(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src))) || (((cljs.core.contains_QMARK_(compiled,resource_id)) && (cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))))));
});})(map__37092,map__37092__$1,sources,compiled,warnings,map__37087,map__37087__$1,msg,info,reload_info))
,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (map__37092,map__37092__$1,sources,compiled,warnings,map__37087,map__37087__$1,msg,info,reload_info){
return (function (p__37139){
var map__37140 = p__37139;
var map__37140__$1 = (((((!((map__37140 == null))))?(((((map__37140.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37140.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37140):map__37140);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37140__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"never-load","never-load",1300896819).cljs$core$IFn$_invoke$arity$1(reload_info),ns);
});})(map__37092,map__37092__$1,sources,compiled,warnings,map__37087,map__37087__$1,msg,info,reload_info))
,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__37092,map__37092__$1,sources,compiled,warnings,map__37087,map__37087__$1,msg,info,reload_info){
return (function (p__37142){
var map__37143 = p__37142;
var map__37143__$1 = (((((!((map__37143 == null))))?(((((map__37143.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37143.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37143):map__37143);
var rc = map__37143__$1;
var module = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37143__$1,new cljs.core.Keyword(null,"module","module",1424618191));
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("js",shadow.cljs.devtools.client.env.module_format)) || (shadow.cljs.devtools.client.browser.module_is_active_QMARK_(module)));
});})(map__37092,map__37092__$1,sources,compiled,warnings,map__37087,map__37087__$1,msg,info,reload_info))
,sources))));
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.browser.load_sources(sources_to_get,((function (sources_to_get,map__37092,map__37092__$1,sources,compiled,warnings,map__37087,map__37087__$1,msg,info,reload_info){
return (function (p1__37083_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__37083_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
});})(sources_to_get,map__37092,map__37092__$1,sources,compiled,warnings,map__37087,map__37087__$1,msg,info,reload_info))
);
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(rel_new),"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__4120__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__4120__auto__){
var and__4120__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__4120__auto____$1){
return new$;
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_watch = (function shadow$cljs$devtools$client$browser$handle_asset_watch(p__37148){
var map__37149 = p__37148;
var map__37149__$1 = (((((!((map__37149 == null))))?(((((map__37149.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37149.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37149):map__37149);
var msg = map__37149__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37149__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__37155 = cljs.core.seq(updates);
var chunk__37161 = null;
var count__37162 = (0);
var i__37163 = (0);
while(true){
if((i__37163 < count__37162)){
var path = chunk__37161.cljs$core$IIndexed$_nth$arity$2(null,i__37163);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__37208_37373 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__37211_37374 = null;
var count__37212_37375 = (0);
var i__37213_37376 = (0);
while(true){
if((i__37213_37376 < count__37212_37375)){
var node_37377 = chunk__37211_37374.cljs$core$IIndexed$_nth$arity$2(null,i__37213_37376);
var path_match_37378 = shadow.cljs.devtools.client.browser.match_paths(node_37377.getAttribute("href"),path);
if(cljs.core.truth_(path_match_37378)){
var new_link_37379 = (function (){var G__37219 = node_37377.cloneNode(true);
G__37219.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_37378),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37219;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_37378], 0));

goog.dom.insertSiblingAfter(new_link_37379,node_37377);

goog.dom.removeNode(node_37377);


var G__37382 = seq__37208_37373;
var G__37383 = chunk__37211_37374;
var G__37384 = count__37212_37375;
var G__37385 = (i__37213_37376 + (1));
seq__37208_37373 = G__37382;
chunk__37211_37374 = G__37383;
count__37212_37375 = G__37384;
i__37213_37376 = G__37385;
continue;
} else {
var G__37386 = seq__37208_37373;
var G__37387 = chunk__37211_37374;
var G__37388 = count__37212_37375;
var G__37389 = (i__37213_37376 + (1));
seq__37208_37373 = G__37386;
chunk__37211_37374 = G__37387;
count__37212_37375 = G__37388;
i__37213_37376 = G__37389;
continue;
}
} else {
var temp__5720__auto___37390 = cljs.core.seq(seq__37208_37373);
if(temp__5720__auto___37390){
var seq__37208_37391__$1 = temp__5720__auto___37390;
if(cljs.core.chunked_seq_QMARK_(seq__37208_37391__$1)){
var c__4550__auto___37392 = cljs.core.chunk_first(seq__37208_37391__$1);
var G__37393 = cljs.core.chunk_rest(seq__37208_37391__$1);
var G__37394 = c__4550__auto___37392;
var G__37395 = cljs.core.count(c__4550__auto___37392);
var G__37396 = (0);
seq__37208_37373 = G__37393;
chunk__37211_37374 = G__37394;
count__37212_37375 = G__37395;
i__37213_37376 = G__37396;
continue;
} else {
var node_37397 = cljs.core.first(seq__37208_37391__$1);
var path_match_37398 = shadow.cljs.devtools.client.browser.match_paths(node_37397.getAttribute("href"),path);
if(cljs.core.truth_(path_match_37398)){
var new_link_37399 = (function (){var G__37222 = node_37397.cloneNode(true);
G__37222.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_37398),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37222;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_37398], 0));

goog.dom.insertSiblingAfter(new_link_37399,node_37397);

goog.dom.removeNode(node_37397);


var G__37400 = cljs.core.next(seq__37208_37391__$1);
var G__37401 = null;
var G__37402 = (0);
var G__37403 = (0);
seq__37208_37373 = G__37400;
chunk__37211_37374 = G__37401;
count__37212_37375 = G__37402;
i__37213_37376 = G__37403;
continue;
} else {
var G__37404 = cljs.core.next(seq__37208_37391__$1);
var G__37405 = null;
var G__37406 = (0);
var G__37407 = (0);
seq__37208_37373 = G__37404;
chunk__37211_37374 = G__37405;
count__37212_37375 = G__37406;
i__37213_37376 = G__37407;
continue;
}
}
} else {
}
}
break;
}


var G__37408 = seq__37155;
var G__37409 = chunk__37161;
var G__37410 = count__37162;
var G__37411 = (i__37163 + (1));
seq__37155 = G__37408;
chunk__37161 = G__37409;
count__37162 = G__37410;
i__37163 = G__37411;
continue;
} else {
var G__37412 = seq__37155;
var G__37413 = chunk__37161;
var G__37414 = count__37162;
var G__37415 = (i__37163 + (1));
seq__37155 = G__37412;
chunk__37161 = G__37413;
count__37162 = G__37414;
i__37163 = G__37415;
continue;
}
} else {
var temp__5720__auto__ = cljs.core.seq(seq__37155);
if(temp__5720__auto__){
var seq__37155__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37155__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__37155__$1);
var G__37416 = cljs.core.chunk_rest(seq__37155__$1);
var G__37417 = c__4550__auto__;
var G__37418 = cljs.core.count(c__4550__auto__);
var G__37419 = (0);
seq__37155 = G__37416;
chunk__37161 = G__37417;
count__37162 = G__37418;
i__37163 = G__37419;
continue;
} else {
var path = cljs.core.first(seq__37155__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__37224_37420 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__37227_37421 = null;
var count__37228_37422 = (0);
var i__37229_37423 = (0);
while(true){
if((i__37229_37423 < count__37228_37422)){
var node_37427 = chunk__37227_37421.cljs$core$IIndexed$_nth$arity$2(null,i__37229_37423);
var path_match_37428 = shadow.cljs.devtools.client.browser.match_paths(node_37427.getAttribute("href"),path);
if(cljs.core.truth_(path_match_37428)){
var new_link_37429 = (function (){var G__37235 = node_37427.cloneNode(true);
G__37235.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_37428),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37235;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_37428], 0));

goog.dom.insertSiblingAfter(new_link_37429,node_37427);

goog.dom.removeNode(node_37427);


var G__37430 = seq__37224_37420;
var G__37431 = chunk__37227_37421;
var G__37432 = count__37228_37422;
var G__37433 = (i__37229_37423 + (1));
seq__37224_37420 = G__37430;
chunk__37227_37421 = G__37431;
count__37228_37422 = G__37432;
i__37229_37423 = G__37433;
continue;
} else {
var G__37434 = seq__37224_37420;
var G__37435 = chunk__37227_37421;
var G__37436 = count__37228_37422;
var G__37437 = (i__37229_37423 + (1));
seq__37224_37420 = G__37434;
chunk__37227_37421 = G__37435;
count__37228_37422 = G__37436;
i__37229_37423 = G__37437;
continue;
}
} else {
var temp__5720__auto___37438__$1 = cljs.core.seq(seq__37224_37420);
if(temp__5720__auto___37438__$1){
var seq__37224_37439__$1 = temp__5720__auto___37438__$1;
if(cljs.core.chunked_seq_QMARK_(seq__37224_37439__$1)){
var c__4550__auto___37440 = cljs.core.chunk_first(seq__37224_37439__$1);
var G__37441 = cljs.core.chunk_rest(seq__37224_37439__$1);
var G__37442 = c__4550__auto___37440;
var G__37443 = cljs.core.count(c__4550__auto___37440);
var G__37444 = (0);
seq__37224_37420 = G__37441;
chunk__37227_37421 = G__37442;
count__37228_37422 = G__37443;
i__37229_37423 = G__37444;
continue;
} else {
var node_37445 = cljs.core.first(seq__37224_37439__$1);
var path_match_37446 = shadow.cljs.devtools.client.browser.match_paths(node_37445.getAttribute("href"),path);
if(cljs.core.truth_(path_match_37446)){
var new_link_37447 = (function (){var G__37236 = node_37445.cloneNode(true);
G__37236.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_37446),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37236;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_37446], 0));

goog.dom.insertSiblingAfter(new_link_37447,node_37445);

goog.dom.removeNode(node_37445);


var G__37448 = cljs.core.next(seq__37224_37439__$1);
var G__37449 = null;
var G__37450 = (0);
var G__37451 = (0);
seq__37224_37420 = G__37448;
chunk__37227_37421 = G__37449;
count__37228_37422 = G__37450;
i__37229_37423 = G__37451;
continue;
} else {
var G__37452 = cljs.core.next(seq__37224_37439__$1);
var G__37453 = null;
var G__37454 = (0);
var G__37455 = (0);
seq__37224_37420 = G__37452;
chunk__37227_37421 = G__37453;
count__37228_37422 = G__37454;
i__37229_37423 = G__37455;
continue;
}
}
} else {
}
}
break;
}


var G__37457 = cljs.core.next(seq__37155__$1);
var G__37458 = null;
var G__37459 = (0);
var G__37460 = (0);
seq__37155 = G__37457;
chunk__37161 = G__37458;
count__37162 = G__37459;
i__37163 = G__37460;
continue;
} else {
var G__37461 = cljs.core.next(seq__37155__$1);
var G__37462 = null;
var G__37463 = (0);
var G__37464 = (0);
seq__37155 = G__37461;
chunk__37161 = G__37462;
count__37162 = G__37463;
i__37163 = G__37464;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.get_ua_product = (function shadow$cljs$devtools$client$browser$get_ua_product(){
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
});
shadow.cljs.devtools.client.browser.get_asset_root = (function shadow$cljs$devtools$client$browser$get_asset_root(){
var loc = (new goog.Uri(document.location.href));
var cbp = (new goog.Uri(CLOSURE_BASE_PATH));
var s = loc.resolve(cbp).toString();
return clojure.string.replace(s,/^file:\//,"file:///");
});
shadow.cljs.devtools.client.browser.repl_error = (function shadow$cljs$devtools$client$browser$repl_error(e){
console.error("repl/invoke error",e);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(shadow.cljs.devtools.client.env.repl_error(e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),shadow.cljs.devtools.client.browser.get_ua_product(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"asset-root","asset-root",1771735072),shadow.cljs.devtools.client.browser.get_asset_root()], 0));
});
shadow.cljs.devtools.client.browser.repl_invoke = (function shadow$cljs$devtools$client$browser$repl_invoke(p__37237){
var map__37238 = p__37237;
var map__37238__$1 = (((((!((map__37238 == null))))?(((((map__37238.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37238.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37238):map__37238);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37238__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37238__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var result = shadow.cljs.devtools.client.env.repl_call(((function (map__37238,map__37238__$1,id,js){
return (function (){
return eval(js);
});})(map__37238,map__37238__$1,id,js))
,shadow.cljs.devtools.client.browser.repl_error);
return shadow.cljs.devtools.client.browser.ws_msg(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"id","id",-1388402092),id));
});
shadow.cljs.devtools.client.browser.repl_require = (function shadow$cljs$devtools$client$browser$repl_require(p__37240){
var map__37241 = p__37240;
var map__37241__$1 = (((((!((map__37241 == null))))?(((((map__37241.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37241.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37241):map__37241);
var msg = map__37241__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37241__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37241__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37241__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37241__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (map__37241,map__37241__$1,msg,id,sources,reload_namespaces,js_requires){
return (function (p__37243){
var map__37244 = p__37243;
var map__37244__$1 = (((((!((map__37244 == null))))?(((((map__37244.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37244.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37244):map__37244);
var src = map__37244__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37244__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4120__auto__ = shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4120__auto__;
}
});})(map__37241,map__37241__$1,msg,id,sources,reload_namespaces,js_requires))
,sources));
return shadow.cljs.devtools.client.browser.load_sources(sources_to_load,((function (sources_to_load,map__37241,map__37241__$1,msg,id,sources,reload_namespaces,js_requires){
return (function (sources__$1){
shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-complete","repl/require-complete",-2140254719),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));
});})(sources_to_load,map__37241,map__37241__$1,msg,id,sources,reload_namespaces,js_requires))
);
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(p__37246){
var map__37247 = p__37246;
var map__37247__$1 = (((((!((map__37247 == null))))?(((((map__37247.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37247.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37247):map__37247);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37247__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37247__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return shadow.cljs.devtools.client.browser.load_sources(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),((function (map__37247,map__37247__$1,repl_state,id){
return (function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","init-complete","repl/init-complete",-162252879),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));

return shadow.cljs.devtools.client.browser.devtools_msg("REPL session start successful");
});})(map__37247,map__37247__$1,repl_state,id))
);
});
shadow.cljs.devtools.client.browser.repl_set_ns = (function shadow$cljs$devtools$client$browser$repl_set_ns(p__37249){
var map__37250 = p__37249;
var map__37250__$1 = (((((!((map__37250 == null))))?(((((map__37250.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37250.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37250):map__37250);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37250__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37250__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","set-ns-complete","repl/set-ns-complete",680944662),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
});
shadow.cljs.devtools.client.browser.close_reason_ref = cljs.core.volatile_BANG_(null);
shadow.cljs.devtools.client.browser.handle_message = (function shadow$cljs$devtools$client$browser$handle_message(p__37252){
var map__37253 = p__37252;
var map__37253__$1 = (((((!((map__37253 == null))))?(((((map__37253.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37253.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37253):map__37253);
var msg = map__37253__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37253__$1,new cljs.core.Keyword(null,"type","type",1174270348));
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

var G__37255 = type;
var G__37255__$1 = (((G__37255 instanceof cljs.core.Keyword))?G__37255.fqn:null);
switch (G__37255__$1) {
case "asset-watch":
return shadow.cljs.devtools.client.browser.handle_asset_watch(msg);

break;
case "repl/invoke":
return shadow.cljs.devtools.client.browser.repl_invoke(msg);

break;
case "repl/require":
return shadow.cljs.devtools.client.browser.repl_require(msg);

break;
case "repl/set-ns":
return shadow.cljs.devtools.client.browser.repl_set_ns(msg);

break;
case "repl/init":
return shadow.cljs.devtools.client.browser.repl_init(msg);

break;
case "repl/session-start":
return shadow.cljs.devtools.client.browser.repl_init(msg);

break;
case "build-complete":
shadow.cljs.devtools.client.hud.hud_warnings(msg);

return shadow.cljs.devtools.client.browser.handle_build_complete(msg);

break;
case "build-failure":
shadow.cljs.devtools.client.hud.load_end();

return shadow.cljs.devtools.client.hud.hud_error(msg);

break;
case "build-init":
return shadow.cljs.devtools.client.hud.hud_warnings(msg);

break;
case "build-start":
shadow.cljs.devtools.client.hud.hud_hide();

return shadow.cljs.devtools.client.hud.load_start();

break;
case "pong":
return null;

break;
case "client/stale":
return cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,"Stale Client! You are not using the latest compilation output!");

break;
case "client/no-worker":
return cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,["watch for build \"",shadow.cljs.devtools.client.env.build_id,"\" not running"].join(''));

break;
case "custom-msg":
return shadow.cljs.devtools.client.env.publish_BANG_(new cljs.core.Keyword(null,"payload","payload",-383036092).cljs$core$IFn$_invoke$arity$1(msg));

break;
default:
return new cljs.core.Keyword(null,"ignored","ignored",1227374526);

}
});
shadow.cljs.devtools.client.browser.compile = (function shadow$cljs$devtools$client$browser$compile(text,callback){
var G__37256 = ["http",((shadow.cljs.devtools.client.env.ssl)?"s":null),"://",shadow.cljs.devtools.client.env.server_host,":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.server_port),"/worker/compile/",shadow.cljs.devtools.client.env.build_id,"/",shadow.cljs.devtools.client.env.proc_id,"/browser"].join('');
var G__37257 = ((function (G__37256){
return (function (res){
var req = this;
var actions = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
if(cljs.core.truth_(callback)){
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(actions) : callback.call(null,actions));
} else {
return null;
}
});})(G__37256))
;
var G__37258 = "POST";
var G__37259 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input","input",556931961),text], null)], 0));
var G__37260 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__37256,G__37257,G__37258,G__37259,G__37260);
});
shadow.cljs.devtools.client.browser.heartbeat_BANG_ = (function shadow$cljs$devtools$client$browser$heartbeat_BANG_(){
var temp__5720__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5720__auto__)){
var s = temp__5720__auto__;
s.send(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"ping","ping",-1670114784),new cljs.core.Keyword(null,"v","v",21465059),Date.now()], null)], 0)));

return setTimeout(shadow.cljs.devtools.client.browser.heartbeat_BANG_,(30000));
} else {
return null;
}
});
shadow.cljs.devtools.client.browser.ws_connect = (function shadow$cljs$devtools$client$browser$ws_connect(){
try{var print_fn = cljs.core._STAR_print_fn_STAR_;
var ws_url = shadow.cljs.devtools.client.env.ws_url(new cljs.core.Keyword(null,"browser","browser",828191719));
var socket = (new WebSocket(ws_url));
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,socket);

socket.onmessage = ((function (print_fn,ws_url,socket){
return (function (e){
return shadow.cljs.devtools.client.env.process_ws_msg(e.data,shadow.cljs.devtools.client.browser.handle_message);
});})(print_fn,ws_url,socket))
;

socket.onopen = ((function (print_fn,ws_url,socket){
return (function (e){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,null);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("goog",shadow.cljs.devtools.client.env.module_format)){
goog.provide = goog.constructNamespace_;
} else {
}

shadow.cljs.devtools.client.env.set_print_fns_BANG_(shadow.cljs.devtools.client.browser.ws_msg);

return shadow.cljs.devtools.client.browser.devtools_msg("WebSocket connected!");
});})(print_fn,ws_url,socket))
;

socket.onclose = ((function (print_fn,ws_url,socket){
return (function (e){
shadow.cljs.devtools.client.browser.devtools_msg("WebSocket disconnected!");

shadow.cljs.devtools.client.hud.connection_error((function (){var or__4131__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.close_reason_ref);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "Connection closed!";
}
})());

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);

return shadow.cljs.devtools.client.env.reset_print_fns_BANG_();
});})(print_fn,ws_url,socket))
;

socket.onerror = ((function (print_fn,ws_url,socket){
return (function (e){
shadow.cljs.devtools.client.hud.connection_error("Connection failed!");

return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("websocket error",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
});})(print_fn,ws_url,socket))
;

return setTimeout(shadow.cljs.devtools.client.browser.heartbeat_BANG_,(30000));
}catch (e37261){var e = e37261;
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("WebSocket setup failed",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
}});
if(shadow.cljs.devtools.client.env.enabled){
var temp__5720__auto___37468 = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5720__auto___37468)){
var s_37469 = temp__5720__auto___37468;
shadow.cljs.devtools.client.browser.devtools_msg("connection reset!");

s_37469.onclose = ((function (s_37469,temp__5720__auto___37468){
return (function (e){
return null;
});})(s_37469,temp__5720__auto___37468))
;

s_37469.close();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);
} else {
}

window.addEventListener("beforeunload",(function (){
var temp__5720__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5720__auto__)){
var s = temp__5720__auto__;
return s.close();
} else {
return null;
}
}));

if(cljs.core.truth_((function (){var and__4120__auto__ = document;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("loading",document.readyState);
} else {
return and__4120__auto__;
}
})())){
window.addEventListener("DOMContentLoaded",shadow.cljs.devtools.client.browser.ws_connect);
} else {
setTimeout(shadow.cljs.devtools.client.browser.ws_connect,(10));
}
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
