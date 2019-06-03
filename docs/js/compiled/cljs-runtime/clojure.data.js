goog.provide('clojure.data');
goog.require('cljs.core');
goog.require('clojure.set');
/**
 * Internal helper for diff.
 */
clojure.data.atom_diff = (function clojure$data$atom_diff(a,b){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,b)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,a], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,null], null);
}
});
/**
 * Convert an associative-by-numeric-index collection into
 * an equivalent vector, with nil for any missing keys
 */
clojure.data.vectorize = (function clojure$data$vectorize(m){
if(cljs.core.seq(m)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,p__26476){
var vec__26477 = p__26476;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26477,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26477,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,k,v);
}),cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.keys(m)),null)),m);
} else {
return null;
}
});
/**
 * Diff associative things a and b, comparing only the key k.
 */
clojure.data.diff_associative_key = (function clojure$data$diff_associative_key(a,b,k){
var va = cljs.core.get.cljs$core$IFn$_invoke$arity$2(a,k);
var vb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(b,k);
var vec__26486 = clojure.data.diff(va,vb);
var a_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26486,(0),null);
var b_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26486,(1),null);
var ab = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26486,(2),null);
var in_a = cljs.core.contains_QMARK_(a,k);
var in_b = cljs.core.contains_QMARK_(b,k);
var same = ((in_a) && (in_b) && ((((!((ab == null)))) || ((((va == null)) && ((vb == null)))))));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((((in_a) && ((((!((a_STAR_ == null)))) || ((!(same)))))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,a_STAR_]):null),((((in_b) && ((((!((b_STAR_ == null)))) || ((!(same)))))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,b_STAR_]):null),((same)?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,ab]):null)], null);
});
/**
 * Diff associative things a and b, comparing only keys in ks (if supplied).
 */
clojure.data.diff_associative = (function clojure$data$diff_associative(var_args){
var G__26494 = arguments.length;
switch (G__26494) {
case 2:
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3(a,b,clojure.set.union.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(a),cljs.core.keys(b)));
});

clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3 = (function (a,b,ks){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (diff1,diff2){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.merge,diff1,diff2));
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,null], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(clojure.data.diff_associative_key,a,b),ks));
});

clojure.data.diff_associative.cljs$lang$maxFixedArity = 3;

clojure.data.diff_sequential = (function clojure$data$diff_sequential(a,b){
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.data.vectorize,clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3(((cljs.core.vector_QMARK_(a))?a:cljs.core.vec(a)),((cljs.core.vector_QMARK_(b))?b:cljs.core.vec(b)),cljs.core.range.cljs$core$IFn$_invoke$arity$1((function (){var x__4219__auto__ = cljs.core.count(a);
var y__4220__auto__ = cljs.core.count(b);
return ((x__4219__auto__ > y__4220__auto__) ? x__4219__auto__ : y__4220__auto__);
})()))));
});
clojure.data.diff_set = (function clojure$data$diff_set(a,b){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.not_empty(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(a,b)),cljs.core.not_empty(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(b,a)),cljs.core.not_empty(clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(a,b))], null);
});

/**
 * Implementation detail. Subject to change.
 * @interface
 */
clojure.data.EqualityPartition = function(){};

/**
 * Implementation detail. Subject to change.
 */
clojure.data.equality_partition = (function clojure$data$equality_partition(x){
if((((!((x == null)))) && ((!((x.clojure$data$EqualityPartition$equality_partition$arity$1 == null)))))){
return x.clojure$data$EqualityPartition$equality_partition$arity$1(x);
} else {
var x__4433__auto__ = (((x == null))?null:x);
var m__4434__auto__ = (clojure.data.equality_partition[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(x) : m__4434__auto__.call(null,x));
} else {
var m__4431__auto__ = (clojure.data.equality_partition["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(x) : m__4431__auto__.call(null,x));
} else {
throw cljs.core.missing_protocol("EqualityPartition.equality-partition",x);
}
}
}
});


/**
 * Implementation detail. Subject to change.
 * @interface
 */
clojure.data.Diff = function(){};

/**
 * Implementation detail. Subject to change.
 */
clojure.data.diff_similar = (function clojure$data$diff_similar(a,b){
if((((!((a == null)))) && ((!((a.clojure$data$Diff$diff_similar$arity$2 == null)))))){
return a.clojure$data$Diff$diff_similar$arity$2(a,b);
} else {
var x__4433__auto__ = (((a == null))?null:a);
var m__4434__auto__ = (clojure.data.diff_similar[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(a,b) : m__4434__auto__.call(null,a,b));
} else {
var m__4431__auto__ = (clojure.data.diff_similar["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(a,b) : m__4431__auto__.call(null,a,b));
} else {
throw cljs.core.missing_protocol("Diff.diff-similar",a);
}
}
}
});

goog.object.set(clojure.data.EqualityPartition,"null",true);

var G__26496_26561 = clojure.data.equality_partition;
var G__26497_26562 = "null";
var G__26498_26563 = ((function (G__26496_26561,G__26497_26562){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__26496_26561,G__26497_26562))
;
goog.object.set(G__26496_26561,G__26497_26562,G__26498_26563);

goog.object.set(clojure.data.EqualityPartition,"string",true);

var G__26499_26564 = clojure.data.equality_partition;
var G__26500_26565 = "string";
var G__26501_26566 = ((function (G__26499_26564,G__26500_26565){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__26499_26564,G__26500_26565))
;
goog.object.set(G__26499_26564,G__26500_26565,G__26501_26566);

goog.object.set(clojure.data.EqualityPartition,"number",true);

var G__26502_26567 = clojure.data.equality_partition;
var G__26503_26568 = "number";
var G__26504_26569 = ((function (G__26502_26567,G__26503_26568){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__26502_26567,G__26503_26568))
;
goog.object.set(G__26502_26567,G__26503_26568,G__26504_26569);

goog.object.set(clojure.data.EqualityPartition,"array",true);

var G__26505_26572 = clojure.data.equality_partition;
var G__26506_26573 = "array";
var G__26507_26574 = ((function (G__26505_26572,G__26506_26573){
return (function (x){
return new cljs.core.Keyword(null,"sequential","sequential",-1082983960);
});})(G__26505_26572,G__26506_26573))
;
goog.object.set(G__26505_26572,G__26506_26573,G__26507_26574);

goog.object.set(clojure.data.EqualityPartition,"function",true);

var G__26508_26582 = clojure.data.equality_partition;
var G__26509_26583 = "function";
var G__26510_26584 = ((function (G__26508_26582,G__26509_26583){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__26508_26582,G__26509_26583))
;
goog.object.set(G__26508_26582,G__26509_26583,G__26510_26584);

goog.object.set(clojure.data.EqualityPartition,"boolean",true);

var G__26511_26586 = clojure.data.equality_partition;
var G__26512_26587 = "boolean";
var G__26513_26588 = ((function (G__26511_26586,G__26512_26587){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__26511_26586,G__26512_26587))
;
goog.object.set(G__26511_26586,G__26512_26587,G__26513_26588);

goog.object.set(clojure.data.EqualityPartition,"_",true);

var G__26514_26591 = clojure.data.equality_partition;
var G__26515_26592 = "_";
var G__26516_26593 = ((function (G__26514_26591,G__26515_26592){
return (function (x){
if((((!((x == null))))?(((((x.cljs$lang$protocol_mask$partition0$ & (1024))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IMap$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IMap,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IMap,x))){
return new cljs.core.Keyword(null,"map","map",1371690461);
} else {
if((((!((x == null))))?(((((x.cljs$lang$protocol_mask$partition0$ & (4096))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$ISet$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.ISet,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ISet,x))){
return new cljs.core.Keyword(null,"set","set",304602554);
} else {
if((((!((x == null))))?(((((x.cljs$lang$protocol_mask$partition0$ & (16777216))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$ISequential$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.ISequential,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ISequential,x))){
return new cljs.core.Keyword(null,"sequential","sequential",-1082983960);
} else {
return new cljs.core.Keyword(null,"atom","atom",-397043653);

}
}
}
});})(G__26514_26591,G__26515_26592))
;
goog.object.set(G__26514_26591,G__26515_26592,G__26516_26593);
goog.object.set(clojure.data.Diff,"null",true);

var G__26520_26599 = clojure.data.diff_similar;
var G__26521_26600 = "null";
var G__26522_26601 = ((function (G__26520_26599,G__26521_26600){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__26520_26599,G__26521_26600))
;
goog.object.set(G__26520_26599,G__26521_26600,G__26522_26601);

goog.object.set(clojure.data.Diff,"string",true);

var G__26523_26602 = clojure.data.diff_similar;
var G__26524_26603 = "string";
var G__26525_26604 = ((function (G__26523_26602,G__26524_26603){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__26523_26602,G__26524_26603))
;
goog.object.set(G__26523_26602,G__26524_26603,G__26525_26604);

goog.object.set(clojure.data.Diff,"number",true);

var G__26526_26605 = clojure.data.diff_similar;
var G__26527_26606 = "number";
var G__26528_26607 = ((function (G__26526_26605,G__26527_26606){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__26526_26605,G__26527_26606))
;
goog.object.set(G__26526_26605,G__26527_26606,G__26528_26607);

goog.object.set(clojure.data.Diff,"array",true);

var G__26529_26608 = clojure.data.diff_similar;
var G__26530_26609 = "array";
var G__26531_26610 = ((function (G__26529_26608,G__26530_26609){
return (function (a,b){
return clojure.data.diff_sequential(a,b);
});})(G__26529_26608,G__26530_26609))
;
goog.object.set(G__26529_26608,G__26530_26609,G__26531_26610);

goog.object.set(clojure.data.Diff,"function",true);

var G__26532_26611 = clojure.data.diff_similar;
var G__26533_26612 = "function";
var G__26534_26613 = ((function (G__26532_26611,G__26533_26612){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__26532_26611,G__26533_26612))
;
goog.object.set(G__26532_26611,G__26533_26612,G__26534_26613);

goog.object.set(clojure.data.Diff,"boolean",true);

var G__26535_26614 = clojure.data.diff_similar;
var G__26536_26615 = "boolean";
var G__26537_26616 = ((function (G__26535_26614,G__26536_26615){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__26535_26614,G__26536_26615))
;
goog.object.set(G__26535_26614,G__26536_26615,G__26537_26616);

goog.object.set(clojure.data.Diff,"_",true);

var G__26538_26617 = clojure.data.diff_similar;
var G__26539_26618 = "_";
var G__26540_26619 = ((function (G__26538_26617,G__26539_26618){
return (function (a,b){
var fexpr__26542 = (function (){var G__26544 = clojure.data.equality_partition(a);
var G__26544__$1 = (((G__26544 instanceof cljs.core.Keyword))?G__26544.fqn:null);
switch (G__26544__$1) {
case "atom":
return clojure.data.atom_diff;

break;
case "set":
return clojure.data.diff_set;

break;
case "sequential":
return clojure.data.diff_sequential;

break;
case "map":
return clojure.data.diff_associative;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__26544__$1)].join('')));

}
})();
return (fexpr__26542.cljs$core$IFn$_invoke$arity$2 ? fexpr__26542.cljs$core$IFn$_invoke$arity$2(a,b) : fexpr__26542.call(null,a,b));
});})(G__26538_26617,G__26539_26618))
;
goog.object.set(G__26538_26617,G__26539_26618,G__26540_26619);
/**
 * Recursively compares a and b, returning a tuple of
 *   [things-only-in-a things-only-in-b things-in-both].
 *   Comparison rules:
 * 
 *   * For equal a and b, return [nil nil a].
 *   * Maps are subdiffed where keys match and values differ.
 *   * Sets are never subdiffed.
 *   * All sequential things are treated as associative collections
 *  by their indexes, with results returned as vectors.
 *   * Everything else (including strings!) is treated as
 *  an atom and compared for equality.
 */
clojure.data.diff = (function clojure$data$diff(a,b){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,b)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,a], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clojure.data.equality_partition(a),clojure.data.equality_partition(b))){
return clojure.data.diff_similar(a,b);
} else {
return clojure.data.atom_diff(a,b);
}
}
});

//# sourceMappingURL=clojure.data.js.map
