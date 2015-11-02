// Compiled by ClojureScript 1.7.145 {}
goog.provide('datascript.btset');
goog.require('cljs.core');
goog.require('datascript.arrays');
datascript.btset.min_len = (16);
datascript.btset.max_len = (32);
datascript.btset.avg_len = ((datascript.btset.max_len + datascript.btset.min_len) >>> (1));
datascript.btset.level_shift = (cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__25107_SHARP_){
return ((datascript.btset.max_len & (1 << p1__25107_SHARP_)) != 0);
}),cljs.core.range.call(null,(31),(-1),(-1)))) + (1));
datascript.btset.path_mask = (((1) << datascript.btset.level_shift) - (1));
datascript.btset.empty_path = (0);
datascript.btset.path_get = (function datascript$btset$path_get(path,level){
return (datascript.btset.path_mask & (path >>> level));
});
datascript.btset.path_set = (function datascript$btset$path_set(path,level,idx){
return (path | (idx << level));
});
datascript.btset.binary_search_l = (function datascript$btset$binary_search_l(cmp,arr,r,k){
var l = (0);
var r__$1 = cljs.core.long$.call(null,r);
while(true){
if((l <= r__$1)){
var m = ((l + r__$1) >>> (1));
var mk = (arr[m]);
if((cmp.call(null,mk,k) < (0))){
var G__25108 = (m + (1));
var G__25109 = r__$1;
l = G__25108;
r__$1 = G__25109;
continue;
} else {
var G__25110 = l;
var G__25111 = (m - (1));
l = G__25110;
r__$1 = G__25111;
continue;
}
} else {
return l;
}
break;
}
});
datascript.btset.binary_search_r = (function datascript$btset$binary_search_r(cmp,arr,r,k){
var l = (0);
var r__$1 = cljs.core.long$.call(null,r);
while(true){
if((l <= r__$1)){
var m = ((l + r__$1) >>> (1));
var mk = (arr[m]);
if((cmp.call(null,mk,k) > (0))){
var G__25112 = l;
var G__25113 = (m - (1));
l = G__25112;
r__$1 = G__25113;
continue;
} else {
var G__25114 = (m + (1));
var G__25115 = r__$1;
l = G__25114;
r__$1 = G__25115;
continue;
}
} else {
return l;
}
break;
}
});
datascript.btset.lookup_exact = (function datascript$btset$lookup_exact(cmp,arr,key){
var arr_l = arr.length;
var idx = datascript.btset.binary_search_l.call(null,cmp,arr,(arr_l - (1)),key);
if(((idx < arr_l)) && (((0) === cmp.call(null,(arr[idx]),key)))){
return idx;
} else {
return (-1);
}
});
datascript.btset.lookup_range = (function datascript$btset$lookup_range(cmp,arr,key){
var arr_l = arr.length;
var idx = datascript.btset.binary_search_l.call(null,cmp,arr,(arr_l - (1)),key);
if((idx === arr_l)){
return (-1);
} else {
return idx;
}
});
datascript.btset.alast = (function datascript$btset$alast(arr){
return (arr[(arr.length - (1))]);
});
datascript.btset.cut_n_splice = (function datascript$btset$cut_n_splice(arr,cut_from,cut_to,splice_from,splice_to,xs){
var xs_l = xs.length;
var l1 = (splice_from - cut_from);
var l2 = (cut_to - splice_to);
var l1xs = (l1 + xs_l);
var new_arr = datascript.arrays.make_array.call(null,((l1 + xs_l) + l2));
var l__19154__auto___25116 = (splice_from - cut_from);
var n__17279__auto___25117 = l__19154__auto___25116;
var i__19155__auto___25118 = (0);
while(true){
if((i__19155__auto___25118 < n__17279__auto___25117)){
(new_arr[(i__19155__auto___25118 + (0))] = (arr[(i__19155__auto___25118 + cut_from)]));

var G__25119 = (i__19155__auto___25118 + (1));
i__19155__auto___25118 = G__25119;
continue;
} else {
}
break;
}

var l__19154__auto___25120 = (xs_l - (0));
var n__17279__auto___25121 = l__19154__auto___25120;
var i__19155__auto___25122 = (0);
while(true){
if((i__19155__auto___25122 < n__17279__auto___25121)){
(new_arr[(i__19155__auto___25122 + l1)] = (xs[(i__19155__auto___25122 + (0))]));

var G__25123 = (i__19155__auto___25122 + (1));
i__19155__auto___25122 = G__25123;
continue;
} else {
}
break;
}

var l__19154__auto___25124 = (cut_to - splice_to);
var n__17279__auto___25125 = l__19154__auto___25124;
var i__19155__auto___25126 = (0);
while(true){
if((i__19155__auto___25126 < n__17279__auto___25125)){
(new_arr[(i__19155__auto___25126 + l1xs)] = (arr[(i__19155__auto___25126 + splice_to)]));

var G__25127 = (i__19155__auto___25126 + (1));
i__19155__auto___25126 = G__25127;
continue;
} else {
}
break;
}

return new_arr;
});
datascript.btset.cut = (function datascript$btset$cut(var_args){
var args25128 = [];
var len__17434__auto___25131 = arguments.length;
var i__17435__auto___25132 = (0);
while(true){
if((i__17435__auto___25132 < len__17434__auto___25131)){
args25128.push((arguments[i__17435__auto___25132]));

var G__25133 = (i__17435__auto___25132 + (1));
i__17435__auto___25132 = G__25133;
continue;
} else {
}
break;
}

var G__25130 = args25128.length;
switch (G__25130) {
case 2:
return datascript.btset.cut.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.btset.cut.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25128.length)].join('')));

}
});

datascript.btset.cut.cljs$core$IFn$_invoke$arity$2 = (function (arr,cut_from){
return arr.slice(cut_from);
});

datascript.btset.cut.cljs$core$IFn$_invoke$arity$3 = (function (arr,cut_from,cut_to){
return arr.slice(cut_from,cut_to);
});

datascript.btset.cut.cljs$lang$maxFixedArity = 3;
datascript.btset.splice = (function datascript$btset$splice(arr,splice_from,splice_to,xs){
return datascript.btset.cut_n_splice.call(null,arr,(0),arr.length,splice_from,splice_to,xs);
});
datascript.btset.insert = (function datascript$btset$insert(arr,idx,xs){
return datascript.btset.cut_n_splice.call(null,arr,(0),arr.length,idx,idx,xs);
});
datascript.btset.merge_n_split = (function datascript$btset$merge_n_split(a1,a2){
var a1_l = a1.length;
var a2_l = a2.length;
var total_l = (a1_l + a2_l);
var r1_l = (total_l >>> (1));
var r2_l = (total_l - r1_l);
var r1 = datascript.arrays.make_array.call(null,r1_l);
var r2 = datascript.arrays.make_array.call(null,r2_l);
if((a1_l <= r1_l)){
var l__19154__auto___25135 = (a1_l - (0));
var n__17279__auto___25136 = l__19154__auto___25135;
var i__19155__auto___25137 = (0);
while(true){
if((i__19155__auto___25137 < n__17279__auto___25136)){
(r1[(i__19155__auto___25137 + (0))] = (a1[(i__19155__auto___25137 + (0))]));

var G__25138 = (i__19155__auto___25137 + (1));
i__19155__auto___25137 = G__25138;
continue;
} else {
}
break;
}

var l__19154__auto___25139 = ((r1_l - a1_l) - (0));
var n__17279__auto___25140 = l__19154__auto___25139;
var i__19155__auto___25141 = (0);
while(true){
if((i__19155__auto___25141 < n__17279__auto___25140)){
(r1[(i__19155__auto___25141 + a1_l)] = (a2[(i__19155__auto___25141 + (0))]));

var G__25142 = (i__19155__auto___25141 + (1));
i__19155__auto___25141 = G__25142;
continue;
} else {
}
break;
}

var l__19154__auto___25143 = (a2_l - (r1_l - a1_l));
var n__17279__auto___25144 = l__19154__auto___25143;
var i__19155__auto___25145 = (0);
while(true){
if((i__19155__auto___25145 < n__17279__auto___25144)){
(r2[(i__19155__auto___25145 + (0))] = (a2[(i__19155__auto___25145 + (r1_l - a1_l))]));

var G__25146 = (i__19155__auto___25145 + (1));
i__19155__auto___25145 = G__25146;
continue;
} else {
}
break;
}
} else {
var l__19154__auto___25147 = (r1_l - (0));
var n__17279__auto___25148 = l__19154__auto___25147;
var i__19155__auto___25149 = (0);
while(true){
if((i__19155__auto___25149 < n__17279__auto___25148)){
(r1[(i__19155__auto___25149 + (0))] = (a1[(i__19155__auto___25149 + (0))]));

var G__25150 = (i__19155__auto___25149 + (1));
i__19155__auto___25149 = G__25150;
continue;
} else {
}
break;
}

var l__19154__auto___25151 = (a1_l - r1_l);
var n__17279__auto___25152 = l__19154__auto___25151;
var i__19155__auto___25153 = (0);
while(true){
if((i__19155__auto___25153 < n__17279__auto___25152)){
(r2[(i__19155__auto___25153 + (0))] = (a1[(i__19155__auto___25153 + r1_l)]));

var G__25154 = (i__19155__auto___25153 + (1));
i__19155__auto___25153 = G__25154;
continue;
} else {
}
break;
}

var l__19154__auto___25155 = (a2_l - (0));
var n__17279__auto___25156 = l__19154__auto___25155;
var i__19155__auto___25157 = (0);
while(true){
if((i__19155__auto___25157 < n__17279__auto___25156)){
(r2[(i__19155__auto___25157 + (a1_l - r1_l))] = (a2[(i__19155__auto___25157 + (0))]));

var G__25158 = (i__19155__auto___25157 + (1));
i__19155__auto___25157 = G__25158;
continue;
} else {
}
break;
}
}

return [r1,r2];
});
datascript.btset.eq_arr = (function datascript$btset$eq_arr(cmp,a1,a1_from,a1_to,a2,a2_from,a2_to){
var len = (a1_to - a1_from);
var and__16363__auto__ = (len === (a2_to - a2_from));
if(and__16363__auto__){
var i = (0);
while(true){
if((i === len)){
return true;
} else {
if(!(((0) === cmp.call(null,(a1[(i + a1_from)]),(a2[(i + a2_from)]))))){
return false;
} else {
var G__25159 = (i + (1));
i = G__25159;
continue;

}
}
break;
}
} else {
return and__16363__auto__;
}
});
datascript.btset.check_n_splice = (function datascript$btset$check_n_splice(cmp,arr,from,to,new_arr){
if(datascript.btset.eq_arr.call(null,cmp,arr,from,to,new_arr,(0),new_arr.length)){
return arr;
} else {
return datascript.btset.splice.call(null,arr,from,to,new_arr);
}
});
datascript.btset.arr_map_inplace = (function datascript$btset$arr_map_inplace(f,arr){
var len = arr.length;
var i_25160 = (0);
while(true){
if((i_25160 < len)){
(arr[i_25160] = f.call(null,(arr[i_25160])));

var G__25161 = (i_25160 + (1));
i_25160 = G__25161;
continue;
} else {
}
break;
}

return arr;
});
/**
 * Splits `arr` into arrays of size between min-len and max-len,
 * trying to stick to (min+max)/2
 */
datascript.btset.arr_partition_approx = (function datascript$btset$arr_partition_approx(min_len,max_len,arr){
var chunk_len = datascript.btset.avg_len;
var len = arr.length;
var acc = cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
if((len > (0))){
var pos_25162 = (0);
while(true){
var rest_25163 = (len - pos_25162);
if((rest_25163 <= max_len)){
cljs.core.conj_BANG_.call(null,acc,datascript.btset.cut.call(null,arr,pos_25162));
} else {
if((rest_25163 >= (chunk_len + min_len))){
cljs.core.conj_BANG_.call(null,acc,datascript.btset.cut.call(null,arr,pos_25162,(pos_25162 + chunk_len)));

var G__25164 = (pos_25162 + chunk_len);
pos_25162 = G__25164;
continue;
} else {
var piece_len_25165 = (rest_25163 >>> (1));
cljs.core.conj_BANG_.call(null,acc,datascript.btset.cut.call(null,arr,pos_25162,(pos_25162 + piece_len_25165)));

var G__25166 = (pos_25162 + piece_len_25165);
pos_25162 = G__25166;
continue;

}
}
break;
}
} else {
}

return cljs.core.to_array.call(null,cljs.core.persistent_BANG_.call(null,acc));
});
datascript.btset.sorted_arr_distinct_QMARK_ = (function datascript$btset$sorted_arr_distinct_QMARK_(arr,cmp){
var al = arr.length;
if((al <= (1))){
return true;
} else {
var i = (1);
var p = (arr[(0)]);
while(true){
if((i >= al)){
return true;
} else {
var e = (arr[i]);
if(((0) === cmp.call(null,e,p))){
return false;
} else {
var G__25167 = (i + (1));
var G__25168 = e;
i = G__25167;
p = G__25168;
continue;
}
}
break;
}
}
});
/**
 * Filter out repetitive values in a sorted array.
 * Optimized for no-duplicates case
 */
datascript.btset.sorted_arr_distinct = (function datascript$btset$sorted_arr_distinct(arr,cmp){
if(cljs.core.truth_(datascript.btset.sorted_arr_distinct_QMARK_.call(null,arr,cmp))){
return arr;
} else {
var al = arr.length;
var acc = cljs.core.transient$.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(arr[(0)])], null));
var i = (1);
var p = (arr[(0)]);
while(true){
if((i >= al)){
return cljs.core.into_array.call(null,cljs.core.persistent_BANG_.call(null,acc));
} else {
var e = (arr[i]);
if(((0) === cmp.call(null,e,p))){
var G__25169 = acc;
var G__25170 = (i + (1));
var G__25171 = e;
acc = G__25169;
i = G__25170;
p = G__25171;
continue;
} else {
var G__25172 = cljs.core.conj_BANG_.call(null,acc,e);
var G__25173 = (i + (1));
var G__25174 = e;
acc = G__25172;
i = G__25173;
p = G__25174;
continue;
}
}
break;
}
}
});
/**
 * Drop non-nil references and return array of arguments
 */
datascript.btset.return_array = (function datascript$btset$return_array(var_args){
var args25175 = [];
var len__17434__auto___25178 = arguments.length;
var i__17435__auto___25179 = (0);
while(true){
if((i__17435__auto___25179 < len__17434__auto___25178)){
args25175.push((arguments[i__17435__auto___25179]));

var G__25180 = (i__17435__auto___25179 + (1));
i__17435__auto___25179 = G__25180;
continue;
} else {
}
break;
}

var G__25177 = args25175.length;
switch (G__25177) {
case 1:
return datascript.btset.return_array.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return datascript.btset.return_array.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.btset.return_array.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25175.length)].join('')));

}
});

datascript.btset.return_array.cljs$core$IFn$_invoke$arity$1 = (function (a1){
return [a1];
});

datascript.btset.return_array.cljs$core$IFn$_invoke$arity$2 = (function (a1,a2){
if(cljs.core.truth_(a1)){
if(cljs.core.truth_(a2)){
return [a1,a2];
} else {
return [a1];
}
} else {
return [a2];
}
});

datascript.btset.return_array.cljs$core$IFn$_invoke$arity$3 = (function (a1,a2,a3){
if(cljs.core.truth_(a1)){
if(cljs.core.truth_(a2)){
if(cljs.core.truth_(a3)){
return [a1,a2,a3];
} else {
return [a1,a2];
}
} else {
if(cljs.core.truth_(a3)){
return [a1,a3];
} else {
return [a1];
}
}
} else {
if(cljs.core.truth_(a2)){
if(cljs.core.truth_(a3)){
return [a2,a3];
} else {
return [a2];
}
} else {
return [a3];
}
}
});

datascript.btset.return_array.cljs$lang$maxFixedArity = 3;

/**
 * @interface
 */
datascript.btset.INode = function(){};

datascript.btset.node_lim_key = (function datascript$btset$node_lim_key(_){
if((!((_ == null))) && (!((_.datascript$btset$INode$node_lim_key$arity$1 == null)))){
return _.datascript$btset$INode$node_lim_key$arity$1(_);
} else {
var x__17031__auto__ = (((_ == null))?null:_);
var m__17032__auto__ = (datascript.btset.node_lim_key[goog.typeOf(x__17031__auto__)]);
if(!((m__17032__auto__ == null))){
return m__17032__auto__.call(null,_);
} else {
var m__17032__auto____$1 = (datascript.btset.node_lim_key["_"]);
if(!((m__17032__auto____$1 == null))){
return m__17032__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"INode.node-lim-key",_);
}
}
}
});

datascript.btset.node_len = (function datascript$btset$node_len(_){
if((!((_ == null))) && (!((_.datascript$btset$INode$node_len$arity$1 == null)))){
return _.datascript$btset$INode$node_len$arity$1(_);
} else {
var x__17031__auto__ = (((_ == null))?null:_);
var m__17032__auto__ = (datascript.btset.node_len[goog.typeOf(x__17031__auto__)]);
if(!((m__17032__auto__ == null))){
return m__17032__auto__.call(null,_);
} else {
var m__17032__auto____$1 = (datascript.btset.node_len["_"]);
if(!((m__17032__auto____$1 == null))){
return m__17032__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"INode.node-len",_);
}
}
}
});

datascript.btset.node_merge = (function datascript$btset$node_merge(_,next){
if((!((_ == null))) && (!((_.datascript$btset$INode$node_merge$arity$2 == null)))){
return _.datascript$btset$INode$node_merge$arity$2(_,next);
} else {
var x__17031__auto__ = (((_ == null))?null:_);
var m__17032__auto__ = (datascript.btset.node_merge[goog.typeOf(x__17031__auto__)]);
if(!((m__17032__auto__ == null))){
return m__17032__auto__.call(null,_,next);
} else {
var m__17032__auto____$1 = (datascript.btset.node_merge["_"]);
if(!((m__17032__auto____$1 == null))){
return m__17032__auto____$1.call(null,_,next);
} else {
throw cljs.core.missing_protocol.call(null,"INode.node-merge",_);
}
}
}
});

datascript.btset.node_merge_n_split = (function datascript$btset$node_merge_n_split(_,next){
if((!((_ == null))) && (!((_.datascript$btset$INode$node_merge_n_split$arity$2 == null)))){
return _.datascript$btset$INode$node_merge_n_split$arity$2(_,next);
} else {
var x__17031__auto__ = (((_ == null))?null:_);
var m__17032__auto__ = (datascript.btset.node_merge_n_split[goog.typeOf(x__17031__auto__)]);
if(!((m__17032__auto__ == null))){
return m__17032__auto__.call(null,_,next);
} else {
var m__17032__auto____$1 = (datascript.btset.node_merge_n_split["_"]);
if(!((m__17032__auto____$1 == null))){
return m__17032__auto____$1.call(null,_,next);
} else {
throw cljs.core.missing_protocol.call(null,"INode.node-merge-n-split",_);
}
}
}
});

datascript.btset.node_lookup = (function datascript$btset$node_lookup(_,cmp,key){
if((!((_ == null))) && (!((_.datascript$btset$INode$node_lookup$arity$3 == null)))){
return _.datascript$btset$INode$node_lookup$arity$3(_,cmp,key);
} else {
var x__17031__auto__ = (((_ == null))?null:_);
var m__17032__auto__ = (datascript.btset.node_lookup[goog.typeOf(x__17031__auto__)]);
if(!((m__17032__auto__ == null))){
return m__17032__auto__.call(null,_,cmp,key);
} else {
var m__17032__auto____$1 = (datascript.btset.node_lookup["_"]);
if(!((m__17032__auto____$1 == null))){
return m__17032__auto____$1.call(null,_,cmp,key);
} else {
throw cljs.core.missing_protocol.call(null,"INode.node-lookup",_);
}
}
}
});

datascript.btset.node_conj = (function datascript$btset$node_conj(_,cmp,key){
if((!((_ == null))) && (!((_.datascript$btset$INode$node_conj$arity$3 == null)))){
return _.datascript$btset$INode$node_conj$arity$3(_,cmp,key);
} else {
var x__17031__auto__ = (((_ == null))?null:_);
var m__17032__auto__ = (datascript.btset.node_conj[goog.typeOf(x__17031__auto__)]);
if(!((m__17032__auto__ == null))){
return m__17032__auto__.call(null,_,cmp,key);
} else {
var m__17032__auto____$1 = (datascript.btset.node_conj["_"]);
if(!((m__17032__auto____$1 == null))){
return m__17032__auto____$1.call(null,_,cmp,key);
} else {
throw cljs.core.missing_protocol.call(null,"INode.node-conj",_);
}
}
}
});

datascript.btset.node_disj = (function datascript$btset$node_disj(_,cmp,key,root_QMARK_,left,right){
if((!((_ == null))) && (!((_.datascript$btset$INode$node_disj$arity$6 == null)))){
return _.datascript$btset$INode$node_disj$arity$6(_,cmp,key,root_QMARK_,left,right);
} else {
var x__17031__auto__ = (((_ == null))?null:_);
var m__17032__auto__ = (datascript.btset.node_disj[goog.typeOf(x__17031__auto__)]);
if(!((m__17032__auto__ == null))){
return m__17032__auto__.call(null,_,cmp,key,root_QMARK_,left,right);
} else {
var m__17032__auto____$1 = (datascript.btset.node_disj["_"]);
if(!((m__17032__auto____$1 == null))){
return m__17032__auto____$1.call(null,_,cmp,key,root_QMARK_,left,right);
} else {
throw cljs.core.missing_protocol.call(null,"INode.node-disj",_);
}
}
}
});

datascript.btset.rotate = (function datascript$btset$rotate(node,root_QMARK_,left,right){
if(cljs.core.truth_(root_QMARK_)){
return datascript.btset.return_array.call(null,node);
} else {
if((datascript.btset.node_len.call(null,node) > datascript.btset.min_len)){
return datascript.btset.return_array.call(null,left,node,right);
} else {
if(cljs.core.truth_((function (){var and__16363__auto__ = left;
if(cljs.core.truth_(and__16363__auto__)){
return (datascript.btset.node_len.call(null,left) <= datascript.btset.min_len);
} else {
return and__16363__auto__;
}
})())){
return datascript.btset.return_array.call(null,datascript.btset.node_merge.call(null,left,node),right);
} else {
if(cljs.core.truth_((function (){var and__16363__auto__ = right;
if(cljs.core.truth_(and__16363__auto__)){
return (datascript.btset.node_len.call(null,right) <= datascript.btset.min_len);
} else {
return and__16363__auto__;
}
})())){
return datascript.btset.return_array.call(null,left,datascript.btset.node_merge.call(null,node,right));
} else {
if(cljs.core.truth_((function (){var and__16363__auto__ = left;
if(cljs.core.truth_(and__16363__auto__)){
return ((right == null)) || ((datascript.btset.node_len.call(null,left) < datascript.btset.node_len.call(null,right)));
} else {
return and__16363__auto__;
}
})())){
var nodes = datascript.btset.node_merge_n_split.call(null,left,node);
return datascript.btset.return_array.call(null,(nodes[(0)]),(nodes[(1)]),right);
} else {
var nodes = datascript.btset.node_merge_n_split.call(null,node,right);
return datascript.btset.return_array.call(null,left,(nodes[(0)]),(nodes[(1)]));

}
}
}
}
}
});

/**
* @constructor
 * @implements {datascript.btset.INode}
*/
datascript.btset.Node = (function (keys,pointers){
this.keys = keys;
this.pointers = pointers;
})
datascript.btset.Node.prototype.datascript$btset$INode$ = true;

datascript.btset.Node.prototype.datascript$btset$INode$node_lim_key$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return datascript.btset.alast.call(null,self__.keys);
});

datascript.btset.Node.prototype.datascript$btset$INode$node_len$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.keys.length;
});

datascript.btset.Node.prototype.datascript$btset$INode$node_merge$arity$2 = (function (_,next){
var self__ = this;
var ___$1 = this;
return (new datascript.btset.Node(datascript.arrays.aconcat.call(null,self__.keys,next.keys),datascript.arrays.aconcat.call(null,self__.pointers,next.pointers)));
});

datascript.btset.Node.prototype.datascript$btset$INode$node_merge_n_split$arity$2 = (function (_,next){
var self__ = this;
var ___$1 = this;
var ks = datascript.btset.merge_n_split.call(null,self__.keys,next.keys);
var ps = datascript.btset.merge_n_split.call(null,self__.pointers,next.pointers);
return datascript.btset.return_array.call(null,(new datascript.btset.Node((ks[(0)]),(ps[(0)]))),(new datascript.btset.Node((ks[(1)]),(ps[(1)]))));
});

datascript.btset.Node.prototype.datascript$btset$INode$node_lookup$arity$3 = (function (_,cmp,key){
var self__ = this;
var ___$1 = this;
var idx = datascript.btset.lookup_range.call(null,cmp,self__.keys,key);
if(((-1) === idx)){
return null;
} else {
return datascript.btset.node_lookup.call(null,(self__.pointers[idx]),cmp,key);
}
});

datascript.btset.Node.prototype.datascript$btset$INode$node_conj$arity$3 = (function (_,cmp,key){
var self__ = this;
var ___$1 = this;
var idx = datascript.btset.binary_search_l.call(null,cmp,self__.keys,(self__.keys.length - (2)),key);
var nodes = datascript.btset.node_conj.call(null,(self__.pointers[idx]),cmp,key);
if(cljs.core.truth_(nodes)){
var new_keys = datascript.btset.check_n_splice.call(null,cmp,self__.keys,idx,(idx + (1)),datascript.arrays.amap.call(null,datascript.btset.node_lim_key,nodes));
var new_pointers = datascript.btset.splice.call(null,self__.pointers,idx,(idx + (1)),nodes);
if((new_pointers.length <= datascript.btset.max_len)){
return [(new datascript.btset.Node(new_keys,new_pointers))];
} else {
var middle = (new_pointers.length >>> (1));
return [(new datascript.btset.Node(datascript.btset.cut.call(null,new_keys,(0),middle),datascript.btset.cut.call(null,new_pointers,(0),middle))),(new datascript.btset.Node(datascript.btset.cut.call(null,new_keys,middle),datascript.btset.cut.call(null,new_pointers,middle)))];
}
} else {
return null;
}
});

datascript.btset.Node.prototype.datascript$btset$INode$node_disj$arity$6 = (function (_,cmp,key,root_QMARK_,left,right){
var self__ = this;
var ___$1 = this;
var idx = datascript.btset.lookup_range.call(null,cmp,self__.keys,key);
if(((-1) === idx)){
return null;
} else {
var child = (self__.pointers[idx]);
var left_child = ((((idx - (1)) >= (0)))?(self__.pointers[(idx - (1))]):null);
var right_child = ((((idx + (1)) < self__.pointers.length))?(self__.pointers[(idx + (1))]):null);
var disjned = datascript.btset.node_disj.call(null,child,cmp,key,false,left_child,right_child);
if(cljs.core.truth_(disjned)){
var left_idx = (cljs.core.truth_(left_child)?(idx - (1)):idx);
var right_idx = (cljs.core.truth_(right_child)?((2) + idx):((1) + idx));
var new_keys = datascript.btset.check_n_splice.call(null,cmp,self__.keys,left_idx,right_idx,datascript.arrays.amap.call(null,datascript.btset.node_lim_key,disjned));
var new_pointers = datascript.btset.splice.call(null,self__.pointers,left_idx,right_idx,disjned);
return datascript.btset.rotate.call(null,(new datascript.btset.Node(new_keys,new_pointers)),root_QMARK_,left,right);
} else {
return null;
}
}
});

datascript.btset.Node.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"keys","keys",-1586012071,null),new cljs.core.Symbol(null,"pointers","pointers",-1669058356,null)], null);
});

datascript.btset.Node.cljs$lang$type = true;

datascript.btset.Node.cljs$lang$ctorStr = "datascript.btset/Node";

datascript.btset.Node.cljs$lang$ctorPrWriter = (function (this__16974__auto__,writer__16975__auto__,opt__16976__auto__){
return cljs.core._write.call(null,writer__16975__auto__,"datascript.btset/Node");
});

datascript.btset.__GT_Node = (function datascript$btset$__GT_Node(keys,pointers){
return (new datascript.btset.Node(keys,pointers));
});


/**
* @constructor
 * @implements {datascript.btset.INode}
*/
datascript.btset.Leaf = (function (keys){
this.keys = keys;
})
datascript.btset.Leaf.prototype.datascript$btset$INode$ = true;

datascript.btset.Leaf.prototype.datascript$btset$INode$node_lim_key$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return datascript.btset.alast.call(null,self__.keys);
});

datascript.btset.Leaf.prototype.datascript$btset$INode$node_len$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.keys.length;
});

datascript.btset.Leaf.prototype.datascript$btset$INode$node_merge$arity$2 = (function (_,next){
var self__ = this;
var ___$1 = this;
return (new datascript.btset.Leaf(datascript.arrays.aconcat.call(null,self__.keys,next.keys)));
});

datascript.btset.Leaf.prototype.datascript$btset$INode$node_merge_n_split$arity$2 = (function (_,next){
var self__ = this;
var ___$1 = this;
var ks = datascript.btset.merge_n_split.call(null,self__.keys,next.keys);
return datascript.btset.return_array.call(null,(new datascript.btset.Leaf((ks[(0)]))),(new datascript.btset.Leaf((ks[(1)]))));
});

datascript.btset.Leaf.prototype.datascript$btset$INode$node_lookup$arity$3 = (function (_,cmp,key){
var self__ = this;
var ___$1 = this;
var idx = datascript.btset.lookup_exact.call(null,cmp,self__.keys,key);
if(((-1) === idx)){
return null;
} else {
return (self__.keys[idx]);
}
});

datascript.btset.Leaf.prototype.datascript$btset$INode$node_conj$arity$3 = (function (_,cmp,key){
var self__ = this;
var ___$1 = this;
var idx = datascript.btset.binary_search_l.call(null,cmp,self__.keys,(self__.keys.length - (1)),key);
var keys_l = self__.keys.length;
if(((idx < keys_l)) && (((0) === cmp.call(null,key,(self__.keys[idx]))))){
return null;
} else {
if((keys_l === datascript.btset.max_len)){
var middle = ((keys_l + (1)) >>> (1));
if((idx > middle)){
return [(new datascript.btset.Leaf(datascript.btset.cut.call(null,self__.keys,(0),middle))),(new datascript.btset.Leaf(datascript.btset.cut_n_splice.call(null,self__.keys,middle,keys_l,idx,idx,[key])))];
} else {
return [(new datascript.btset.Leaf(datascript.btset.cut_n_splice.call(null,self__.keys,(0),middle,idx,idx,[key]))),(new datascript.btset.Leaf(datascript.btset.cut.call(null,self__.keys,middle,keys_l)))];
}
} else {
return [(new datascript.btset.Leaf(datascript.btset.splice.call(null,self__.keys,idx,idx,[key])))];

}
}
});

datascript.btset.Leaf.prototype.datascript$btset$INode$node_disj$arity$6 = (function (_,cmp,key,root_QMARK_,left,right){
var self__ = this;
var ___$1 = this;
var idx = datascript.btset.lookup_exact.call(null,cmp,self__.keys,key);
if(((-1) === idx)){
return null;
} else {
var new_keys = datascript.btset.splice.call(null,self__.keys,idx,(idx + (1)),[]);
return datascript.btset.rotate.call(null,(new datascript.btset.Leaf(new_keys)),root_QMARK_,left,right);
}
});

datascript.btset.Leaf.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"keys","keys",-1586012071,null)], null);
});

datascript.btset.Leaf.cljs$lang$type = true;

datascript.btset.Leaf.cljs$lang$ctorStr = "datascript.btset/Leaf";

datascript.btset.Leaf.cljs$lang$ctorPrWriter = (function (this__16974__auto__,writer__16975__auto__,opt__16976__auto__){
return cljs.core._write.call(null,writer__16975__auto__,"datascript.btset/Leaf");
});

datascript.btset.__GT_Leaf = (function datascript$btset$__GT_Leaf(keys){
return (new datascript.btset.Leaf(keys));
});

datascript.btset.btset_conj;

datascript.btset.btset_disj;

datascript.btset.btset_iter;
datascript.btset.uninitialized_hash = null;

/**
* @constructor
 * @implements {cljs.core.IReversible}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ISet}
 * @implements {cljs.core.IEmptyableCollection}
 * @implements {datascript.btset.Object}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.ILookup}
 * @implements {cljs.core.IReduce}
*/
datascript.btset.BTSet = (function (root,shift,cnt,comparator,meta,__hash){
this.root = root;
this.shift = shift;
this.cnt = cnt;
this.comparator = comparator;
this.meta = meta;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2297303311;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.btset.BTSet.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return cljs.core.pr_str_STAR_.call(null,this$);
});

datascript.btset.BTSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
return datascript.btset.node_lookup.call(null,self__.root,self__.comparator,k);
});

datascript.btset.BTSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (_,k,not_found){
var self__ = this;
var ___$1 = this;
var or__16375__auto__ = datascript.btset.node_lookup.call(null,self__.root,self__.comparator,k);
if(cljs.core.truth_(or__16375__auto__)){
return or__16375__auto__;
} else {
return not_found;
}
});

datascript.btset.BTSet.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var self__ = this;
var this$__$1 = this;
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,"#{"," ","}",opts,cljs.core.seq.call(null,this$__$1));
});

datascript.btset.BTSet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.meta;
});

datascript.btset.BTSet.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new datascript.btset.BTSet(self__.root,self__.shift,self__.cnt,self__.comparator,self__.meta,self__.__hash));
});

datascript.btset.BTSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.cnt;
});

datascript.btset.BTSet.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.rseq.call(null,datascript.btset.btset_iter.call(null,this$__$1));
});

datascript.btset.BTSet.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var h__16810__auto__ = self__.__hash;
if(!((h__16810__auto__ == null))){
return h__16810__auto__;
} else {
var h__16810__auto____$1 = cljs.core.hash_iset.call(null,this$__$1);
self__.__hash = h__16810__auto____$1;

return h__16810__auto____$1;
}
});

datascript.btset.BTSet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var self__ = this;
var this$__$1 = this;
return (cljs.core.set_QMARK_.call(null,other)) && ((self__.cnt === cljs.core.count.call(null,other))) && (cljs.core.every_QMARK_.call(null,((function (this$__$1){
return (function (p1__25182_SHARP_){
return cljs.core.contains_QMARK_.call(null,this$__$1,p1__25182_SHARP_);
});})(this$__$1))
,other));
});

datascript.btset.BTSet.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new datascript.btset.BTSet((new datascript.btset.Leaf([])),(0),(0),self__.comparator,self__.meta,datascript.btset.uninitialized_hash));
});

datascript.btset.BTSet.prototype.cljs$core$ISet$_disjoin$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
return datascript.btset.btset_disj.call(null,this$__$1,key,self__.comparator);
});

datascript.btset.BTSet.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (this$,f){
var self__ = this;
var this$__$1 = this;
var temp__4423__auto__ = datascript.btset.btset_iter.call(null,this$__$1);
if(cljs.core.truth_(temp__4423__auto__)){
var i = temp__4423__auto__;
return cljs.core._reduce.call(null,i,f);
} else {
return f.call(null);
}
});

datascript.btset.BTSet.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (this$,f,start){
var self__ = this;
var this$__$1 = this;
var temp__4423__auto__ = datascript.btset.btset_iter.call(null,this$__$1);
if(cljs.core.truth_(temp__4423__auto__)){
var i = temp__4423__auto__;
return cljs.core._reduce.call(null,i,f,start);
} else {
return start;
}
});

datascript.btset.BTSet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return datascript.btset.btset_iter.call(null,this$__$1);
});

datascript.btset.BTSet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,new_meta){
var self__ = this;
var ___$1 = this;
return (new datascript.btset.BTSet(self__.root,self__.shift,self__.cnt,self__.comparator,new_meta,self__.__hash));
});

datascript.btset.BTSet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
return datascript.btset.btset_conj.call(null,this$__$1,key,self__.comparator);
});

datascript.btset.BTSet.prototype.call = (function() {
var G__25185 = null;
var G__25185__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,k);
});
var G__25185__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,k,not_found);
});
G__25185 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__25185__2.call(this,self__,k);
case 3:
return G__25185__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__25185.cljs$core$IFn$_invoke$arity$2 = G__25185__2;
G__25185.cljs$core$IFn$_invoke$arity$3 = G__25185__3;
return G__25185;
})()
;

datascript.btset.BTSet.prototype.apply = (function (self__,args25184){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args25184)));
});

datascript.btset.BTSet.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var this$ = this;
return cljs.core._lookup.call(null,this$,k);
});

datascript.btset.BTSet.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var self__ = this;
var this$ = this;
return cljs.core._lookup.call(null,this$,k,not_found);
});

datascript.btset.BTSet.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"root","root",1191874074,null),new cljs.core.Symbol(null,"shift","shift",-1657295705,null),new cljs.core.Symbol(null,"cnt","cnt",1924510325,null),new cljs.core.Symbol(null,"comparator","comparator",-509539107,null),new cljs.core.Symbol(null,"meta","meta",-1154898805,null),cljs.core.with_meta(new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

datascript.btset.BTSet.cljs$lang$type = true;

datascript.btset.BTSet.cljs$lang$ctorStr = "datascript.btset/BTSet";

datascript.btset.BTSet.cljs$lang$ctorPrWriter = (function (this__16974__auto__,writer__16975__auto__,opt__16976__auto__){
return cljs.core._write.call(null,writer__16975__auto__,"datascript.btset/BTSet");
});

datascript.btset.__GT_BTSet = (function datascript$btset$__GT_BTSet(root,shift,cnt,comparator,meta,__hash){
return (new datascript.btset.BTSet(root,shift,cnt,comparator,meta,__hash));
});

datascript.btset.alter_btset = (function datascript$btset$alter_btset(set,root,shift,cnt){
return (new datascript.btset.BTSet(root,shift,cnt,set.comparator,set.meta,datascript.btset.uninitialized_hash));
});
datascript.btset.keys_for = (function datascript$btset$keys_for(set,path){
var level = set.shift;
var node = set.root;
while(true){
if((level > (0))){
var G__25186 = (level - datascript.btset.level_shift);
var G__25187 = (node.pointers[datascript.btset.path_get.call(null,path,level)]);
level = G__25186;
node = G__25187;
continue;
} else {
return node.keys;
}
break;
}
});
datascript.btset.btset_conj = (function datascript$btset$btset_conj(set,key,cmp){
var roots = datascript.btset.node_conj.call(null,set.root,cmp,key);
if((roots == null)){
return set;
} else {
if((roots.length === (1))){
return datascript.btset.alter_btset.call(null,set,(roots[(0)]),set.shift,(set.cnt + (1)));
} else {
return datascript.btset.alter_btset.call(null,set,(new datascript.btset.Node(datascript.arrays.amap.call(null,datascript.btset.node_lim_key,roots),roots)),(set.shift + datascript.btset.level_shift),(set.cnt + (1)));

}
}
});
datascript.btset.btset_disj = (function datascript$btset$btset_disj(set,key,cmp){
var new_roots = datascript.btset.node_disj.call(null,set.root,cmp,key,true,null,null);
if((new_roots == null)){
return set;
} else {
var new_root = (new_roots[(0)]);
if(((new_root instanceof datascript.btset.Node)) && (((1) === new_root.pointers.length))){
return datascript.btset.alter_btset.call(null,set,(new_root.pointers[(0)]),(set.shift - datascript.btset.level_shift),(set.cnt - (1)));
} else {
return datascript.btset.alter_btset.call(null,set,new_root,set.shift,(set.cnt - (1)));
}
}
});
datascript.btset._next_path = (function datascript$btset$_next_path(node,path,level){
var idx = datascript.btset.path_get.call(null,path,level);
if((level > (0))){
var sub_path = datascript$btset$_next_path.call(null,(node.pointers[idx]),path,(level - datascript.btset.level_shift));
if(((-1) === sub_path)){
if(((idx + (1)) < node.pointers.length)){
return datascript.btset.path_set.call(null,datascript.btset.empty_path,level,(idx + (1)));
} else {
return (-1);
}
} else {
return datascript.btset.path_set.call(null,sub_path,level,idx);
}
} else {
if(((idx + (1)) < node.keys.length)){
return datascript.btset.path_set.call(null,datascript.btset.empty_path,(0),(idx + (1)));
} else {
return (-1);
}
}
});
/**
 * Returns path representing next item after `path` in natural traversal order,
 * or -1 if end of tree has been reached
 */
datascript.btset.next_path = (function datascript$btset$next_path(set,path){
return datascript.btset._next_path.call(null,set.root,path,set.shift);
});
/**
 * Returns rightmost path possible starting from node and going deeper
 */
datascript.btset._rpath = (function datascript$btset$_rpath(node,level){
var node__$1 = node;
var path = datascript.btset.empty_path;
var level__$1 = level;
while(true){
if((level__$1 > (0))){
var G__25188 = datascript.btset.alast.call(null,node__$1.pointers);
var G__25189 = datascript.btset.path_set.call(null,path,level__$1,(node__$1.pointers.length - (1)));
var G__25190 = (level__$1 - datascript.btset.level_shift);
node__$1 = G__25188;
path = G__25189;
level__$1 = G__25190;
continue;
} else {
return datascript.btset.path_set.call(null,path,(0),(node__$1.keys.length - (1)));
}
break;
}
});
datascript.btset._prev_path = (function datascript$btset$_prev_path(node,path,level){
var idx = datascript.btset.path_get.call(null,path,level);
if((level > (0))){
var sub_level = (level - datascript.btset.level_shift);
var sub_path = datascript$btset$_prev_path.call(null,(node.pointers[idx]),path,sub_level);
if(((-1) === sub_path)){
if(((idx - (1)) >= (0))){
var idx__$1 = (idx - (1));
var sub_path__$1 = datascript.btset._rpath.call(null,(node.pointers[idx__$1]),sub_level);
return datascript.btset.path_set.call(null,sub_path__$1,level,idx__$1);
} else {
return (-1);
}
} else {
return datascript.btset.path_set.call(null,sub_path,level,idx);
}
} else {
if(((idx - (1)) >= (0))){
return datascript.btset.path_set.call(null,datascript.btset.empty_path,(0),(idx - (1)));
} else {
return (-1);
}
}
});
/**
 * Returns path representing previous item before `path` in natural traversal order,
 * or -1 if `path` was already beginning of a tree
 */
datascript.btset.prev_path = (function datascript$btset$prev_path(set,path){
return datascript.btset._prev_path.call(null,set.root,path,set.shift);
});
datascript.btset.iter;

datascript.btset.riter;

datascript.btset.iter_first;

datascript.btset.iter_next;

datascript.btset.iter_chunk;

datascript.btset.iter_chunked_next;

datascript.btset.iter_rseq;

datascript.btset.iter_reduce;
/**
 * Iterator that represents whole set
 */
datascript.btset.btset_iter = (function datascript$btset$btset_iter(set){
if((datascript.btset.node_len.call(null,set.root) > (0))){
var left = datascript.btset.empty_path;
var right = (datascript.btset._rpath.call(null,set.root,set.shift) + (1));
return datascript.btset.iter.call(null,set,left,right);
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IReversible}
 * @implements {cljs.core.IChunkedNext}
 * @implements {cljs.core.ISeq}
 * @implements {cljs.core.INext}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IChunkedSeq}
 * @implements {cljs.core.IReduce}
*/
datascript.btset.Iter = (function (set,left,right,keys,idx){
this.set = set;
this.left = left;
this.right = right;
this.keys = keys;
this.idx = idx;
this.cljs$lang$protocol_mask$partition0$ = 143130816;
this.cljs$lang$protocol_mask$partition1$ = 1536;
})
datascript.btset.Iter.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(self__.keys)){
return this$__$1;
} else {
return null;
}
});

datascript.btset.Iter.prototype.cljs$core$ISeq$_first$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return datascript.btset.iter_first.call(null,this$__$1);
});

datascript.btset.Iter.prototype.cljs$core$ISeq$_rest$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var or__16375__auto__ = datascript.btset.iter_next.call(null,this$__$1);
if(cljs.core.truth_(or__16375__auto__)){
return or__16375__auto__;
} else {
return cljs.core.List.EMPTY;
}
});

datascript.btset.Iter.prototype.cljs$core$INext$_next$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return datascript.btset.iter_next.call(null,this$__$1);
});

datascript.btset.Iter.prototype.cljs$core$IChunkedSeq$_chunked_first$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return datascript.btset.iter_chunk.call(null,this$__$1);
});

datascript.btset.Iter.prototype.cljs$core$IChunkedSeq$_chunked_rest$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var or__16375__auto__ = cljs.core._chunked_next.call(null,this$__$1);
if(cljs.core.truth_(or__16375__auto__)){
return or__16375__auto__;
} else {
return cljs.core.List.EMPTY;
}
});

datascript.btset.Iter.prototype.cljs$core$IChunkedNext$_chunked_next$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return datascript.btset.iter_chunked_next.call(null,this$__$1);
});

datascript.btset.Iter.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (this$,f){
var self__ = this;
var this$__$1 = this;
return datascript.btset.iter_reduce.call(null,this$__$1,f);
});

datascript.btset.Iter.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (this$,f,start){
var self__ = this;
var this$__$1 = this;
return datascript.btset.iter_reduce.call(null,this$__$1,f,start);
});

datascript.btset.Iter.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return datascript.btset.iter_rseq.call(null,this$__$1);
});

datascript.btset.Iter.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"set","set",1945134081,null),cljs.core.with_meta(new cljs.core.Symbol(null,"left","left",1241415590,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"long","long",1469079434,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"right","right",1187949694,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"long","long",1469079434,null)], null)),new cljs.core.Symbol(null,"keys","keys",-1586012071,null),cljs.core.with_meta(new cljs.core.Symbol(null,"idx","idx",-1600747296,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"long","long",1469079434,null)], null))], null);
});

datascript.btset.Iter.cljs$lang$type = true;

datascript.btset.Iter.cljs$lang$ctorStr = "datascript.btset/Iter";

datascript.btset.Iter.cljs$lang$ctorPrWriter = (function (this__16974__auto__,writer__16975__auto__,opt__16976__auto__){
return cljs.core._write.call(null,writer__16975__auto__,"datascript.btset/Iter");
});

datascript.btset.__GT_Iter = (function datascript$btset$__GT_Iter(set,left,right,keys,idx){
return (new datascript.btset.Iter(set,left,right,keys,idx));
});

datascript.btset.iter = (function datascript$btset$iter(set,left,right){
return (new datascript.btset.Iter(set,left,right,datascript.btset.keys_for.call(null,set,left),datascript.btset.path_get.call(null,left,(0))));
});
datascript.btset.iter_first = (function datascript$btset$iter_first(iter){
if(cljs.core.truth_(iter.keys)){
return (iter.keys[iter.idx]);
} else {
return null;
}
});
datascript.btset.iter_next = (function datascript$btset$iter_next(iter){
var set = iter.set;
var left = iter.left;
var right = iter.right;
var keys = iter.keys;
var idx = iter.idx;
if(cljs.core.truth_(keys)){
if(((idx + (1)) < keys.length)){
if(((left + (1)) < right)){
return (new datascript.btset.Iter(set,(left + (1)),right,keys,(idx + (1))));
} else {
return null;
}
} else {
var left__$1 = datascript.btset.next_path.call(null,set,left);
if((cljs.core.not_EQ_.call(null,(-1),left__$1)) && ((left__$1 < right))){
return datascript.btset.iter.call(null,set,left__$1,right);
} else {
return null;
}
}
} else {
return null;
}
});
datascript.btset.iter_chunk = (function datascript$btset$iter_chunk(iter){
var left = iter.left;
var right = iter.right;
var keys = iter.keys;
var idx = iter.idx;
var end_idx = ((cljs.core._EQ_.call(null,(left | datascript.btset.path_mask),(right | datascript.btset.path_mask)))?(right & datascript.btset.path_mask):keys.length);
return cljs.core.array_chunk.call(null,keys,idx,end_idx);
});
datascript.btset.iter_chunked_next = (function datascript$btset$iter_chunked_next(iter){
var set = iter.set;
var left = iter.left;
var right = iter.right;
var keys = iter.keys;
var idx = iter.idx;
var left__$1 = datascript.btset.next_path.call(null,set,(left + ((keys.length - idx) - (1))));
if((cljs.core.not_EQ_.call(null,(-1),left__$1)) && ((left__$1 < right))){
return datascript.btset.iter.call(null,set,left__$1,right);
} else {
return null;
}
});
datascript.btset.iter_rseq = (function datascript$btset$iter_rseq(iter){
var set = iter.set;
var left = iter.left;
var right = iter.right;
if(cljs.core.truth_(iter.keys)){
return datascript.btset.riter.call(null,set,datascript.btset.prev_path.call(null,set,left),datascript.btset.prev_path.call(null,set,right));
} else {
return null;
}
});
datascript.btset.iter_reduce = (function datascript$btset$iter_reduce(var_args){
var args25191 = [];
var len__17434__auto___25194 = arguments.length;
var i__17435__auto___25195 = (0);
while(true){
if((i__17435__auto___25195 < len__17434__auto___25194)){
args25191.push((arguments[i__17435__auto___25195]));

var G__25196 = (i__17435__auto___25195 + (1));
i__17435__auto___25195 = G__25196;
continue;
} else {
}
break;
}

var G__25193 = args25191.length;
switch (G__25193) {
case 2:
return datascript.btset.iter_reduce.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.btset.iter_reduce.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25191.length)].join('')));

}
});

datascript.btset.iter_reduce.cljs$core$IFn$_invoke$arity$2 = (function (iter,f){
if((iter.keys == null)){
return f.call(null);
} else {
var first = datascript.btset.iter_first.call(null,iter);
var temp__4423__auto__ = datascript.btset.iter_next.call(null,iter);
if(cljs.core.truth_(temp__4423__auto__)){
var next = temp__4423__auto__;
return datascript.btset.iter_reduce.call(null,next,f,first);
} else {
return first;
}
}
});

datascript.btset.iter_reduce.cljs$core$IFn$_invoke$arity$3 = (function (iter,f,start){
var set = iter.set;
var right = iter.right;
var left = iter.left;
var keys = iter.keys;
var idx = iter.idx;
var acc = start;
while(true){
if(cljs.core.reduced_QMARK_.call(null,acc)){
return cljs.core.deref.call(null,acc);
} else {
if((keys == null)){
return acc;
} else {
var new_acc = f.call(null,acc,(keys[idx]));
if(((idx + (1)) < keys.length)){
if(((left + (1)) < right)){
var G__25198 = (left + (1));
var G__25199 = keys;
var G__25200 = (idx + (1));
var G__25201 = new_acc;
left = G__25198;
keys = G__25199;
idx = G__25200;
acc = G__25201;
continue;
} else {
return new_acc;
}
} else {
var new_left = datascript.btset.next_path.call(null,set,left);
if((!(((-1) === new_left))) && ((new_left < right))){
var G__25202 = new_left;
var G__25203 = datascript.btset.keys_for.call(null,set,new_left);
var G__25204 = datascript.btset.path_get.call(null,new_left,(0));
var G__25205 = new_acc;
left = G__25202;
keys = G__25203;
idx = G__25204;
acc = G__25205;
continue;
} else {
return new_acc;
}
}

}
}
break;
}
});

datascript.btset.iter_reduce.cljs$lang$maxFixedArity = 3;
datascript.btset.riter_first;

datascript.btset.riter_next;

datascript.btset.riter_rseq;

/**
* @constructor
 * @implements {cljs.core.IReversible}
 * @implements {cljs.core.ISeq}
 * @implements {cljs.core.INext}
 * @implements {cljs.core.ISeqable}
*/
datascript.btset.ReverseIter = (function (set,left,right,keys,idx){
this.set = set;
this.left = left;
this.right = right;
this.keys = keys;
this.idx = idx;
this.cljs$lang$protocol_mask$partition0$ = 142606528;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
datascript.btset.ReverseIter.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(self__.keys)){
return this$__$1;
} else {
return null;
}
});

datascript.btset.ReverseIter.prototype.cljs$core$ISeq$_first$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return datascript.btset.riter_first.call(null,this$__$1);
});

datascript.btset.ReverseIter.prototype.cljs$core$ISeq$_rest$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var or__16375__auto__ = datascript.btset.riter_next.call(null,this$__$1);
if(cljs.core.truth_(or__16375__auto__)){
return or__16375__auto__;
} else {
return cljs.core.List.EMPTY;
}
});

datascript.btset.ReverseIter.prototype.cljs$core$INext$_next$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return datascript.btset.riter_next.call(null,this$__$1);
});

datascript.btset.ReverseIter.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return datascript.btset.riter_rseq.call(null,this$__$1);
});

datascript.btset.ReverseIter.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"set","set",1945134081,null),cljs.core.with_meta(new cljs.core.Symbol(null,"left","left",1241415590,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"long","long",1469079434,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"right","right",1187949694,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"long","long",1469079434,null)], null)),new cljs.core.Symbol(null,"keys","keys",-1586012071,null),cljs.core.with_meta(new cljs.core.Symbol(null,"idx","idx",-1600747296,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"long","long",1469079434,null)], null))], null);
});

datascript.btset.ReverseIter.cljs$lang$type = true;

datascript.btset.ReverseIter.cljs$lang$ctorStr = "datascript.btset/ReverseIter";

datascript.btset.ReverseIter.cljs$lang$ctorPrWriter = (function (this__16974__auto__,writer__16975__auto__,opt__16976__auto__){
return cljs.core._write.call(null,writer__16975__auto__,"datascript.btset/ReverseIter");
});

datascript.btset.__GT_ReverseIter = (function datascript$btset$__GT_ReverseIter(set,left,right,keys,idx){
return (new datascript.btset.ReverseIter(set,left,right,keys,idx));
});

datascript.btset.riter = (function datascript$btset$riter(set,left,right){
return (new datascript.btset.ReverseIter(set,left,right,datascript.btset.keys_for.call(null,set,right),datascript.btset.path_get.call(null,right,(0))));
});
datascript.btset.riter_first = (function datascript$btset$riter_first(riter){
if(cljs.core.truth_(riter.keys)){
return (riter.keys[riter.idx]);
} else {
return null;
}
});
datascript.btset.riter_next = (function datascript$btset$riter_next(ri){
var set = ri.set;
var left = ri.left;
var right = ri.right;
var keys = ri.keys;
var idx = ri.idx;
if(cljs.core.truth_(keys)){
if(((idx - (1)) >= (0))){
if(((right - (1)) > left)){
return (new datascript.btset.ReverseIter(set,left,(right - (1)),keys,(idx - (1))));
} else {
return null;
}
} else {
var right__$1 = datascript.btset.prev_path.call(null,set,right);
if((cljs.core.not_EQ_.call(null,(-1),right__$1)) && ((right__$1 > left))){
return datascript.btset.riter.call(null,set,left,right__$1);
} else {
return null;
}
}
} else {
return null;
}
});
datascript.btset.riter_rseq = (function datascript$btset$riter_rseq(riter){
var set = riter.set;
var left = riter.left;
var right = riter.right;
if(cljs.core.truth_(cljs.core.keys)){
var new_left = (((left === (-1)))?(0):datascript.btset.next_path.call(null,set,left));
var new_right = datascript.btset.next_path.call(null,set,right);
var new_right__$1 = (((new_right === (-1)))?(right + (1)):new_right);
return datascript.btset.iter.call(null,set,new_left,new_right__$1);
} else {
return null;
}
});
datascript.btset._distance = (function datascript$btset$_distance(node,left,right,level){
var idx_l = datascript.btset.path_get.call(null,left,level);
var idx_r = datascript.btset.path_get.call(null,right,level);
if((level > (0))){
if((idx_l === idx_r)){
return datascript$btset$_distance.call(null,(node.pointers[idx_l]),left,right,(level - datascript.btset.level_shift));
} else {
var level__$1 = level;
var res = (idx_r - idx_l);
while(true){
if(((0) === level__$1)){
return res;
} else {
var G__25206 = (level__$1 - datascript.btset.level_shift);
var G__25207 = (res * datascript.btset.avg_len);
level__$1 = G__25206;
res = G__25207;
continue;
}
break;
}
}
} else {
return (idx_r - idx_l);
}
});
datascript.btset.distance = (function datascript$btset$distance(set,path_l,path_r){
if((path_l === path_r)){
return (0);
} else {
if(((path_l + (1)) === path_r)){
return (1);
} else {
if((datascript.btset.next_path.call(null,set,path_l) === path_r)){
return (1);
} else {
return datascript.btset._distance.call(null,set.root,path_l,path_r,set.shift);

}
}
}
});
datascript.btset.est_count = (function datascript$btset$est_count(iter){
return datascript.btset.distance.call(null,iter.set,iter.left,iter.right);
});
/**
 * Returns path to first element >= key,
 * or -1 if all elements in a set < key
 */
datascript.btset._seek = (function datascript$btset$_seek(set,key){
var node = set.root;
var path = datascript.btset.empty_path;
var level = set.shift;
while(true){
var keys_l = datascript.btset.node_len.call(null,node);
if(((0) === level)){
var keys = node.keys;
var idx = datascript.btset.binary_search_l.call(null,set.comparator,keys,(keys_l - (1)),key);
if((keys_l === idx)){
return (-1);
} else {
return datascript.btset.path_set.call(null,path,(0),idx);
}
} else {
var keys = node.keys;
var idx = datascript.btset.binary_search_l.call(null,set.comparator,keys,(keys_l - (2)),key);
var G__25208 = (node.pointers[idx]);
var G__25209 = datascript.btset.path_set.call(null,path,level,idx);
var G__25210 = (level - datascript.btset.level_shift);
node = G__25208;
path = G__25209;
level = G__25210;
continue;
}
break;
}
});
/**
 * Returns path to the first element that is > key.
 * If all elements in a set are <= key, returns `(-rpath set) + 1`.
 * It’s a virtual path that is bigger than any path in a tree
 */
datascript.btset._rseek = (function datascript$btset$_rseek(set,key){
var node = set.root;
var path = datascript.btset.empty_path;
var level = set.shift;
while(true){
var keys_l = datascript.btset.node_len.call(null,node);
if(((0) === level)){
var keys = node.keys;
var idx = datascript.btset.binary_search_r.call(null,set.comparator,keys,(keys_l - (1)),key);
return datascript.btset.path_set.call(null,path,(0),idx);
} else {
var keys = node.keys;
var idx = datascript.btset.binary_search_r.call(null,set.comparator,keys,(keys_l - (2)),key);
var G__25211 = (node.pointers[idx]);
var G__25212 = datascript.btset.path_set.call(null,path,level,idx);
var G__25213 = (level - datascript.btset.level_shift);
node = G__25211;
path = G__25212;
level = G__25213;
continue;
}
break;
}
});
datascript.btset._slice = (function datascript$btset$_slice(set,key_from,key_to){
var path = datascript.btset._seek.call(null,set,key_from);
if((path < (0))){
return null;
} else {
var till_path = datascript.btset._rseek.call(null,set,key_to);
if((till_path > path)){
return (new datascript.btset.Iter(set,path,till_path,datascript.btset.keys_for.call(null,set,path),datascript.btset.path_get.call(null,path,(0))));
} else {
return null;
}
}
});
/**
 * When called with single key, returns iterator over set that contains all elements equal to the key.
 * When called with two keys (range), returns iterator for all X where key-from <= X <= key-to
 */
datascript.btset.slice = (function datascript$btset$slice(var_args){
var args25214 = [];
var len__17434__auto___25217 = arguments.length;
var i__17435__auto___25218 = (0);
while(true){
if((i__17435__auto___25218 < len__17434__auto___25217)){
args25214.push((arguments[i__17435__auto___25218]));

var G__25219 = (i__17435__auto___25218 + (1));
i__17435__auto___25218 = G__25219;
continue;
} else {
}
break;
}

var G__25216 = args25214.length;
switch (G__25216) {
case 2:
return datascript.btset.slice.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.btset.slice.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25214.length)].join('')));

}
});

datascript.btset.slice.cljs$core$IFn$_invoke$arity$2 = (function (set,key){
return datascript.btset.slice.call(null,set,key,key);
});

datascript.btset.slice.cljs$core$IFn$_invoke$arity$3 = (function (set,key_from,key_to){
return datascript.btset._slice.call(null,set,key_from,key_to);
});

datascript.btset.slice.cljs$lang$maxFixedArity = 3;
datascript.btset._btset_from_sorted_arr = (function datascript$btset$_btset_from_sorted_arr(arr,cmp){
var leafs = datascript.btset.arr_map_inplace.call(null,(function (p1__25221_SHARP_){
return (new datascript.btset.Leaf(p1__25221_SHARP_));
}),datascript.btset.arr_partition_approx.call(null,datascript.btset.min_len,datascript.btset.max_len,arr));
var current_level = leafs;
var shift = (0);
while(true){
var G__25224 = cljs.core.count.call(null,current_level);
switch (G__25224) {
case (0):
return (new datascript.btset.BTSet((new datascript.btset.Leaf([])),(0),(0),cmp,null,datascript.btset.uninitialized_hash));

break;
case (1):
return (new datascript.btset.BTSet(cljs.core.first.call(null,current_level),shift,arr.length,cmp,null,datascript.btset.uninitialized_hash));

break;
default:
var G__25226 = datascript.btset.arr_map_inplace.call(null,((function (current_level,shift,G__25224,leafs){
return (function (p1__25222_SHARP_){
return (new datascript.btset.Node(datascript.arrays.amap.call(null,datascript.btset.node_lim_key,p1__25222_SHARP_),p1__25222_SHARP_));
});})(current_level,shift,G__25224,leafs))
,datascript.btset.arr_partition_approx.call(null,datascript.btset.min_len,datascript.btset.max_len,current_level));
var G__25227 = (shift + datascript.btset.level_shift);
current_level = G__25226;
shift = G__25227;
continue;

}
break;
}
});
datascript.btset._btset_from_seq = (function datascript$btset$_btset_from_seq(seq,cmp){
var arr = datascript.btset.sorted_arr_distinct.call(null,datascript.arrays.asort.call(null,cljs.core.into_array.call(null,seq),cmp),cmp);
return datascript.btset._btset_from_sorted_arr.call(null,arr,cmp);
});
datascript.btset.btset_by = (function datascript$btset$btset_by(var_args){
var args25228 = [];
var len__17434__auto___25233 = arguments.length;
var i__17435__auto___25234 = (0);
while(true){
if((i__17435__auto___25234 < len__17434__auto___25233)){
args25228.push((arguments[i__17435__auto___25234]));

var G__25235 = (i__17435__auto___25234 + (1));
i__17435__auto___25234 = G__25235;
continue;
} else {
}
break;
}

var G__25232 = args25228.length;
switch (G__25232) {
case 1:
return datascript.btset.btset_by.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var argseq__17453__auto__ = (new cljs.core.IndexedSeq(args25228.slice((1)),(0)));
return datascript.btset.btset_by.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17453__auto__);

}
});

datascript.btset.btset_by.cljs$core$IFn$_invoke$arity$1 = (function (cmp){
return (new datascript.btset.BTSet((new datascript.btset.Leaf([])),(0),(0),cmp,null,datascript.btset.uninitialized_hash));
});

datascript.btset.btset_by.cljs$core$IFn$_invoke$arity$variadic = (function (cmp,keys){
return datascript.btset._btset_from_seq.call(null,keys,cmp);
});

datascript.btset.btset_by.cljs$lang$applyTo = (function (seq25229){
var G__25230 = cljs.core.first.call(null,seq25229);
var seq25229__$1 = cljs.core.next.call(null,seq25229);
return datascript.btset.btset_by.cljs$core$IFn$_invoke$arity$variadic(G__25230,seq25229__$1);
});

datascript.btset.btset_by.cljs$lang$maxFixedArity = (1);
datascript.btset.btset = (function datascript$btset$btset(var_args){
var args25237 = [];
var len__17434__auto___25241 = arguments.length;
var i__17435__auto___25242 = (0);
while(true){
if((i__17435__auto___25242 < len__17434__auto___25241)){
args25237.push((arguments[i__17435__auto___25242]));

var G__25243 = (i__17435__auto___25242 + (1));
i__17435__auto___25242 = G__25243;
continue;
} else {
}
break;
}

var G__25240 = args25237.length;
switch (G__25240) {
case 0:
return datascript.btset.btset.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__17453__auto__ = (new cljs.core.IndexedSeq(args25237.slice((0)),(0)));
return datascript.btset.btset.cljs$core$IFn$_invoke$arity$variadic(argseq__17453__auto__);

}
});

datascript.btset.btset.cljs$core$IFn$_invoke$arity$0 = (function (){
return datascript.btset.btset_by.call(null,cljs.core.compare);
});

datascript.btset.btset.cljs$core$IFn$_invoke$arity$variadic = (function (keys){
return datascript.btset._btset_from_seq.call(null,keys,cljs.core.compare);
});

datascript.btset.btset.cljs$lang$applyTo = (function (seq25238){
return datascript.btset.btset.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq25238));
});

datascript.btset.btset.cljs$lang$maxFixedArity = (0);

//# sourceMappingURL=btset.js.map