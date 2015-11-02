// Compiled by ClojureScript 1.7.145 {}
goog.provide('datascript.parser');
goog.require('cljs.core');
goog.require('clojure.set');
goog.require('datascript.db');
datascript.parser.collect_vars_acc;

/**
 * @interface
 */
datascript.parser.ITraversable = function(){};

datascript.parser._collect = (function datascript$parser$_collect(_,pred,acc){
if((!((_ == null))) && (!((_.datascript$parser$ITraversable$_collect$arity$3 == null)))){
return _.datascript$parser$ITraversable$_collect$arity$3(_,pred,acc);
} else {
var x__17031__auto__ = (((_ == null))?null:_);
var m__17032__auto__ = (datascript.parser._collect[goog.typeOf(x__17031__auto__)]);
if(!((m__17032__auto__ == null))){
return m__17032__auto__.call(null,_,pred,acc);
} else {
var m__17032__auto____$1 = (datascript.parser._collect["_"]);
if(!((m__17032__auto____$1 == null))){
return m__17032__auto____$1.call(null,_,pred,acc);
} else {
throw cljs.core.missing_protocol.call(null,"ITraversable.-collect",_);
}
}
}
});

datascript.parser._collect_vars = (function datascript$parser$_collect_vars(_,acc){
if((!((_ == null))) && (!((_.datascript$parser$ITraversable$_collect_vars$arity$2 == null)))){
return _.datascript$parser$ITraversable$_collect_vars$arity$2(_,acc);
} else {
var x__17031__auto__ = (((_ == null))?null:_);
var m__17032__auto__ = (datascript.parser._collect_vars[goog.typeOf(x__17031__auto__)]);
if(!((m__17032__auto__ == null))){
return m__17032__auto__.call(null,_,acc);
} else {
var m__17032__auto____$1 = (datascript.parser._collect_vars["_"]);
if(!((m__17032__auto____$1 == null))){
return m__17032__auto____$1.call(null,_,acc);
} else {
throw cljs.core.missing_protocol.call(null,"ITraversable.-collect-vars",_);
}
}
}
});

datascript.parser._postwalk = (function datascript$parser$_postwalk(_,f){
if((!((_ == null))) && (!((_.datascript$parser$ITraversable$_postwalk$arity$2 == null)))){
return _.datascript$parser$ITraversable$_postwalk$arity$2(_,f);
} else {
var x__17031__auto__ = (((_ == null))?null:_);
var m__17032__auto__ = (datascript.parser._postwalk[goog.typeOf(x__17031__auto__)]);
if(!((m__17032__auto__ == null))){
return m__17032__auto__.call(null,_,f);
} else {
var m__17032__auto____$1 = (datascript.parser._postwalk["_"]);
if(!((m__17032__auto____$1 == null))){
return m__17032__auto____$1.call(null,_,f);
} else {
throw cljs.core.missing_protocol.call(null,"ITraversable.-postwalk",_);
}
}
}
});

datascript.parser.of_size_QMARK_ = (function datascript$parser$of_size_QMARK_(form,size){
return (cljs.core.sequential_QMARK_.call(null,form)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,form),size));
});
datascript.parser.parse_seq = (function datascript$parser$parse_seq(parse_el,form){
if(cljs.core.sequential_QMARK_.call(null,form)){
return cljs.core.reduce.call(null,(function (p1__25594_SHARP_,p2__25593_SHARP_){
var temp__4423__auto__ = parse_el.call(null,p2__25593_SHARP_);
if(cljs.core.truth_(temp__4423__auto__)){
var parsed = temp__4423__auto__;
return cljs.core.conj.call(null,p1__25594_SHARP_,parsed);
} else {
return cljs.core.reduced.call(null,null);
}
}),cljs.core.PersistentVector.EMPTY,form);
} else {
return null;
}
});
datascript.parser.collect = (function datascript$parser$collect(var_args){
var args__17441__auto__ = [];
var len__17434__auto___25601 = arguments.length;
var i__17435__auto___25602 = (0);
while(true){
if((i__17435__auto___25602 < len__17434__auto___25601)){
args__17441__auto__.push((arguments[i__17435__auto___25602]));

var G__25603 = (i__17435__auto___25602 + (1));
i__17435__auto___25602 = G__25603;
continue;
} else {
}
break;
}

var argseq__17442__auto__ = ((((2) < args__17441__auto__.length))?(new cljs.core.IndexedSeq(args__17441__auto__.slice((2)),(0))):null);
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__17442__auto__);
});

datascript.parser.collect.cljs$core$IFn$_invoke$arity$variadic = (function (pred,form,p__25598){
var vec__25599 = p__25598;
var acc = cljs.core.nth.call(null,vec__25599,(0),null);
var acc__$1 = (function (){var or__16375__auto__ = acc;
if(cljs.core.truth_(or__16375__auto__)){
return or__16375__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})();
if(cljs.core.truth_(pred.call(null,form))){
return cljs.core.conj.call(null,acc__$1,form);
} else {
if(((!((form == null)))?(((false) || (form.datascript$parser$ITraversable$))?true:(((!form.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,datascript.parser.ITraversable,form):false)):cljs.core.native_satisfies_QMARK_.call(null,datascript.parser.ITraversable,form))){
return datascript.parser._collect.call(null,form,pred,acc__$1);
} else {
if(cljs.core.truth_(datascript.db.seqable_QMARK_.call(null,form))){
return cljs.core.reduce.call(null,((function (acc__$1,vec__25599,acc){
return (function (acc__$2,form__$1){
return datascript.parser.collect.call(null,pred,form__$1,acc__$2);
});})(acc__$1,vec__25599,acc))
,acc__$1,form);
} else {
return acc__$1;

}
}
}
});

datascript.parser.collect.cljs$lang$maxFixedArity = (2);

datascript.parser.collect.cljs$lang$applyTo = (function (seq25595){
var G__25596 = cljs.core.first.call(null,seq25595);
var seq25595__$1 = cljs.core.next.call(null,seq25595);
var G__25597 = cljs.core.first.call(null,seq25595__$1);
var seq25595__$2 = cljs.core.next.call(null,seq25595__$1);
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$variadic(G__25596,G__25597,seq25595__$2);
});
datascript.parser.distinct_QMARK_ = (function datascript$parser$distinct_QMARK_(coll){
var or__16375__auto__ = cljs.core.empty_QMARK_.call(null,coll);
if(or__16375__auto__){
return or__16375__auto__;
} else {
return cljs.core.apply.call(null,cljs.core.distinct_QMARK_,coll);
}
});
datascript.parser.postwalk = (function datascript$parser$postwalk(form,f){
if(((!((form == null)))?(((false) || (form.datascript$parser$ITraversable$))?true:(((!form.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,datascript.parser.ITraversable,form):false)):cljs.core.native_satisfies_QMARK_.call(null,datascript.parser.ITraversable,form))){
return f.call(null,datascript.parser._postwalk.call(null,form,f));
} else {
if(cljs.core.map_QMARK_.call(null,form)){
return f.call(null,cljs.core.reduce.call(null,(function (form__$1,p__25610){
var vec__25611 = p__25610;
var k = cljs.core.nth.call(null,vec__25611,(0),null);
var v = cljs.core.nth.call(null,vec__25611,(1),null);
return cljs.core.assoc.call(null,form__$1,k,datascript$parser$postwalk.call(null,v,f));
}),form,form));
} else {
if(cljs.core.seq_QMARK_.call(null,form)){
return f.call(null,cljs.core.map.call(null,(function (p1__25604_SHARP_){
return datascript$parser$postwalk.call(null,p1__25604_SHARP_,f);
}),form));
} else {
if(cljs.core.coll_QMARK_.call(null,form)){
return f.call(null,cljs.core.into.call(null,cljs.core.empty.call(null,form),cljs.core.map.call(null,(function (p1__25605_SHARP_){
return datascript$parser$postwalk.call(null,p1__25605_SHARP_,f);
}),form)));
} else {
return f.call(null,form);

}
}
}
}
});
datascript.parser.with_source = (function datascript$parser$with_source(obj,source){
return cljs.core.with_meta.call(null,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"source","source",-433931539),source], null));
});
datascript.parser.source = (function datascript$parser$source(obj){
var or__16375__auto__ = new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,obj));
if(cljs.core.truth_(or__16375__auto__)){
return or__16375__auto__;
} else {
return obj;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.Placeholder = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.Placeholder.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__16990__auto__,k__16991__auto__){
var self__ = this;
var this__16990__auto____$1 = this;
return cljs.core._lookup.call(null,this__16990__auto____$1,k__16991__auto__,null);
});

datascript.parser.Placeholder.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__16992__auto__,k25616,else__16993__auto__){
var self__ = this;
var this__16992__auto____$1 = this;
var G__25618 = k25616;
switch (G__25618) {
default:
return cljs.core.get.call(null,self__.__extmap,k25616,else__16993__auto__);

}
});

datascript.parser.Placeholder.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__17004__auto__,writer__17005__auto__,opts__17006__auto__){
var self__ = this;
var this__17004__auto____$1 = this;
var pr_pair__17007__auto__ = ((function (this__17004__auto____$1){
return (function (keyval__17008__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__17005__auto__,cljs.core.pr_writer,""," ","",opts__17006__auto__,keyval__17008__auto__);
});})(this__17004__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__17005__auto__,pr_pair__17007__auto__,"#datascript.parser.Placeholder{",", ","}",opts__17006__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

datascript.parser.Placeholder.prototype.cljs$core$IIterable$ = true;

datascript.parser.Placeholder.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__25615){
var self__ = this;
var G__25615__$1 = this;
return (new cljs.core.RecordIter((0),G__25615__$1,0,cljs.core.PersistentVector.EMPTY,cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.Placeholder.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__16988__auto__){
var self__ = this;
var this__16988__auto____$1 = this;
return self__.__meta;
});

datascript.parser.Placeholder.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__16984__auto__){
var self__ = this;
var this__16984__auto____$1 = this;
return (new datascript.parser.Placeholder(self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.Placeholder.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__16994__auto__){
var self__ = this;
var this__16994__auto____$1 = this;
return (0 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.Placeholder.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__16985__auto__){
var self__ = this;
var this__16985__auto____$1 = this;
var h__16810__auto__ = self__.__hash;
if(!((h__16810__auto__ == null))){
return h__16810__auto__;
} else {
var h__16810__auto____$1 = cljs.core.hash_imap.call(null,this__16985__auto____$1);
self__.__hash = h__16810__auto____$1;

return h__16810__auto____$1;
}
});

datascript.parser.Placeholder.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__16986__auto__,other__16987__auto__){
var self__ = this;
var this__16986__auto____$1 = this;
if(cljs.core.truth_((function (){var and__16363__auto__ = other__16987__auto__;
if(cljs.core.truth_(and__16363__auto__)){
var and__16363__auto____$1 = (this__16986__auto____$1.constructor === other__16987__auto__.constructor);
if(and__16363__auto____$1){
return cljs.core.equiv_map.call(null,this__16986__auto____$1,other__16987__auto__);
} else {
return and__16363__auto____$1;
}
} else {
return and__16363__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.Placeholder.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__16999__auto__,k__17000__auto__){
var self__ = this;
var this__16999__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__17000__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__16999__auto____$1),self__.__meta),k__17000__auto__);
} else {
return (new datascript.parser.Placeholder(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__17000__auto__)),null));
}
});

datascript.parser.Placeholder.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__16997__auto__,k__16998__auto__,G__25615){
var self__ = this;
var this__16997__auto____$1 = this;
var pred__25619 = cljs.core.keyword_identical_QMARK_;
var expr__25620 = k__16998__auto__;
return (new datascript.parser.Placeholder(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__16998__auto__,G__25615),null));
});

datascript.parser.Placeholder.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__17002__auto__){
var self__ = this;
var this__17002__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

datascript.parser.Placeholder.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__16989__auto__,G__25615){
var self__ = this;
var this__16989__auto____$1 = this;
return (new datascript.parser.Placeholder(G__25615,self__.__extmap,self__.__hash));
});

datascript.parser.Placeholder.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__16995__auto__,entry__16996__auto__){
var self__ = this;
var this__16995__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__16996__auto__)){
return cljs.core._assoc.call(null,this__16995__auto____$1,cljs.core._nth.call(null,entry__16996__auto__,(0)),cljs.core._nth.call(null,entry__16996__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__16995__auto____$1,entry__16996__auto__);
}
});

datascript.parser.Placeholder.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.Placeholder.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__20299__auto__,f25612){
var self__ = this;
var this__20299__auto____$1 = this;
var new__20300__auto__ = (new datascript.parser.Placeholder(null,null,null));
var temp__4423__auto__ = cljs.core.meta.call(null,this__20299__auto____$1);
if(cljs.core.truth_(temp__4423__auto__)){
var meta__20301__auto__ = temp__4423__auto__;
return cljs.core.with_meta.call(null,new__20300__auto__,meta__20301__auto__);
} else {
return new__20300__auto__;
}
});

datascript.parser.Placeholder.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___20302__auto__,pred25613,acc25614){
var self__ = this;
var ___20302__auto____$1 = this;
return acc25614;
});

datascript.parser.Placeholder.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___20302__auto__,acc25614){
var self__ = this;
var ___20302__auto____$1 = this;
return acc25614;
});

datascript.parser.Placeholder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

datascript.parser.Placeholder.cljs$lang$type = true;

datascript.parser.Placeholder.cljs$lang$ctorPrSeq = (function (this__17024__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/Placeholder");
});

datascript.parser.Placeholder.cljs$lang$ctorPrWriter = (function (this__17024__auto__,writer__17025__auto__){
return cljs.core._write.call(null,writer__17025__auto__,"datascript.parser/Placeholder");
});

datascript.parser.__GT_Placeholder = (function datascript$parser$__GT_Placeholder(){
return (new datascript.parser.Placeholder(null,null,null));
});

datascript.parser.map__GT_Placeholder = (function datascript$parser$map__GT_Placeholder(G__25617){
return (new datascript.parser.Placeholder(null,cljs.core.dissoc.call(null,G__25617),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.Variable = (function (symbol,__meta,__extmap,__hash){
this.symbol = symbol;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.Variable.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__16990__auto__,k__16991__auto__){
var self__ = this;
var this__16990__auto____$1 = this;
return cljs.core._lookup.call(null,this__16990__auto____$1,k__16991__auto__,null);
});

datascript.parser.Variable.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__16992__auto__,k25627,else__16993__auto__){
var self__ = this;
var this__16992__auto____$1 = this;
var G__25629 = (((k25627 instanceof cljs.core.Keyword))?k25627.fqn:null);
switch (G__25629) {
case "symbol":
return self__.symbol;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k25627,else__16993__auto__);

}
});

datascript.parser.Variable.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__17004__auto__,writer__17005__auto__,opts__17006__auto__){
var self__ = this;
var this__17004__auto____$1 = this;
var pr_pair__17007__auto__ = ((function (this__17004__auto____$1){
return (function (keyval__17008__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__17005__auto__,cljs.core.pr_writer,""," ","",opts__17006__auto__,keyval__17008__auto__);
});})(this__17004__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__17005__auto__,pr_pair__17007__auto__,"#datascript.parser.Variable{",", ","}",opts__17006__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"symbol","symbol",-1038572696),self__.symbol],null))], null),self__.__extmap));
});

datascript.parser.Variable.prototype.cljs$core$IIterable$ = true;

datascript.parser.Variable.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__25626){
var self__ = this;
var G__25626__$1 = this;
return (new cljs.core.RecordIter((0),G__25626__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"symbol","symbol",-1038572696)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.Variable.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__16988__auto__){
var self__ = this;
var this__16988__auto____$1 = this;
return self__.__meta;
});

datascript.parser.Variable.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__16984__auto__){
var self__ = this;
var this__16984__auto____$1 = this;
return (new datascript.parser.Variable(self__.symbol,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.Variable.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__16994__auto__){
var self__ = this;
var this__16994__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.Variable.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__16985__auto__){
var self__ = this;
var this__16985__auto____$1 = this;
var h__16810__auto__ = self__.__hash;
if(!((h__16810__auto__ == null))){
return h__16810__auto__;
} else {
var h__16810__auto____$1 = cljs.core.hash_imap.call(null,this__16985__auto____$1);
self__.__hash = h__16810__auto____$1;

return h__16810__auto____$1;
}
});

datascript.parser.Variable.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__16986__auto__,other__16987__auto__){
var self__ = this;
var this__16986__auto____$1 = this;
if(cljs.core.truth_((function (){var and__16363__auto__ = other__16987__auto__;
if(cljs.core.truth_(and__16363__auto__)){
var and__16363__auto____$1 = (this__16986__auto____$1.constructor === other__16987__auto__.constructor);
if(and__16363__auto____$1){
return cljs.core.equiv_map.call(null,this__16986__auto____$1,other__16987__auto__);
} else {
return and__16363__auto____$1;
}
} else {
return and__16363__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.Variable.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__16999__auto__,k__17000__auto__){
var self__ = this;
var this__16999__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"symbol","symbol",-1038572696),null], null), null),k__17000__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__16999__auto____$1),self__.__meta),k__17000__auto__);
} else {
return (new datascript.parser.Variable(self__.symbol,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__17000__auto__)),null));
}
});

datascript.parser.Variable.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__16997__auto__,k__16998__auto__,G__25626){
var self__ = this;
var this__16997__auto____$1 = this;
var pred__25630 = cljs.core.keyword_identical_QMARK_;
var expr__25631 = k__16998__auto__;
if(cljs.core.truth_(pred__25630.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),expr__25631))){
return (new datascript.parser.Variable(G__25626,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Variable(self__.symbol,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__16998__auto__,G__25626),null));
}
});

datascript.parser.Variable.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__17002__auto__){
var self__ = this;
var this__17002__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"symbol","symbol",-1038572696),self__.symbol],null))], null),self__.__extmap));
});

datascript.parser.Variable.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__16989__auto__,G__25626){
var self__ = this;
var this__16989__auto____$1 = this;
return (new datascript.parser.Variable(self__.symbol,G__25626,self__.__extmap,self__.__hash));
});

datascript.parser.Variable.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__16995__auto__,entry__16996__auto__){
var self__ = this;
var this__16995__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__16996__auto__)){
return cljs.core._assoc.call(null,this__16995__auto____$1,cljs.core._nth.call(null,entry__16996__auto__,(0)),cljs.core._nth.call(null,entry__16996__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__16995__auto____$1,entry__16996__auto__);
}
});

datascript.parser.Variable.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.Variable.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__20299__auto__,f25623){
var self__ = this;
var this__20299__auto____$1 = this;
var new__20300__auto__ = (new datascript.parser.Variable(datascript.parser.postwalk.call(null,self__.symbol,f25623),null,null,null));
var temp__4423__auto__ = cljs.core.meta.call(null,this__20299__auto____$1);
if(cljs.core.truth_(temp__4423__auto__)){
var meta__20301__auto__ = temp__4423__auto__;
return cljs.core.with_meta.call(null,new__20300__auto__,meta__20301__auto__);
} else {
return new__20300__auto__;
}
});

datascript.parser.Variable.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___20302__auto__,pred25624,acc25625){
var self__ = this;
var ___20302__auto____$1 = this;
return datascript.parser.collect.call(null,pred25624,self__.symbol,acc25625);
});

datascript.parser.Variable.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___20302__auto__,acc25625){
var self__ = this;
var ___20302__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,acc25625,self__.symbol);
});

datascript.parser.Variable.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"symbol","symbol",601958831,null)], null);
});

datascript.parser.Variable.cljs$lang$type = true;

datascript.parser.Variable.cljs$lang$ctorPrSeq = (function (this__17024__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/Variable");
});

datascript.parser.Variable.cljs$lang$ctorPrWriter = (function (this__17024__auto__,writer__17025__auto__){
return cljs.core._write.call(null,writer__17025__auto__,"datascript.parser/Variable");
});

datascript.parser.__GT_Variable = (function datascript$parser$__GT_Variable(symbol){
return (new datascript.parser.Variable(symbol,null,null,null));
});

datascript.parser.map__GT_Variable = (function datascript$parser$map__GT_Variable(G__25628){
return (new datascript.parser.Variable(new cljs.core.Keyword(null,"symbol","symbol",-1038572696).cljs$core$IFn$_invoke$arity$1(G__25628),null,cljs.core.dissoc.call(null,G__25628,new cljs.core.Keyword(null,"symbol","symbol",-1038572696)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.SrcVar = (function (symbol,__meta,__extmap,__hash){
this.symbol = symbol;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.SrcVar.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__16990__auto__,k__16991__auto__){
var self__ = this;
var this__16990__auto____$1 = this;
return cljs.core._lookup.call(null,this__16990__auto____$1,k__16991__auto__,null);
});

datascript.parser.SrcVar.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__16992__auto__,k25638,else__16993__auto__){
var self__ = this;
var this__16992__auto____$1 = this;
var G__25640 = (((k25638 instanceof cljs.core.Keyword))?k25638.fqn:null);
switch (G__25640) {
case "symbol":
return self__.symbol;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k25638,else__16993__auto__);

}
});

datascript.parser.SrcVar.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__17004__auto__,writer__17005__auto__,opts__17006__auto__){
var self__ = this;
var this__17004__auto____$1 = this;
var pr_pair__17007__auto__ = ((function (this__17004__auto____$1){
return (function (keyval__17008__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__17005__auto__,cljs.core.pr_writer,""," ","",opts__17006__auto__,keyval__17008__auto__);
});})(this__17004__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__17005__auto__,pr_pair__17007__auto__,"#datascript.parser.SrcVar{",", ","}",opts__17006__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"symbol","symbol",-1038572696),self__.symbol],null))], null),self__.__extmap));
});

datascript.parser.SrcVar.prototype.cljs$core$IIterable$ = true;

datascript.parser.SrcVar.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__25637){
var self__ = this;
var G__25637__$1 = this;
return (new cljs.core.RecordIter((0),G__25637__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"symbol","symbol",-1038572696)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.SrcVar.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__16988__auto__){
var self__ = this;
var this__16988__auto____$1 = this;
return self__.__meta;
});

datascript.parser.SrcVar.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__16984__auto__){
var self__ = this;
var this__16984__auto____$1 = this;
return (new datascript.parser.SrcVar(self__.symbol,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.SrcVar.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__16994__auto__){
var self__ = this;
var this__16994__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.SrcVar.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__16985__auto__){
var self__ = this;
var this__16985__auto____$1 = this;
var h__16810__auto__ = self__.__hash;
if(!((h__16810__auto__ == null))){
return h__16810__auto__;
} else {
var h__16810__auto____$1 = cljs.core.hash_imap.call(null,this__16985__auto____$1);
self__.__hash = h__16810__auto____$1;

return h__16810__auto____$1;
}
});

datascript.parser.SrcVar.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__16986__auto__,other__16987__auto__){
var self__ = this;
var this__16986__auto____$1 = this;
if(cljs.core.truth_((function (){var and__16363__auto__ = other__16987__auto__;
if(cljs.core.truth_(and__16363__auto__)){
var and__16363__auto____$1 = (this__16986__auto____$1.constructor === other__16987__auto__.constructor);
if(and__16363__auto____$1){
return cljs.core.equiv_map.call(null,this__16986__auto____$1,other__16987__auto__);
} else {
return and__16363__auto____$1;
}
} else {
return and__16363__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.SrcVar.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__16999__auto__,k__17000__auto__){
var self__ = this;
var this__16999__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"symbol","symbol",-1038572696),null], null), null),k__17000__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__16999__auto____$1),self__.__meta),k__17000__auto__);
} else {
return (new datascript.parser.SrcVar(self__.symbol,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__17000__auto__)),null));
}
});

datascript.parser.SrcVar.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__16997__auto__,k__16998__auto__,G__25637){
var self__ = this;
var this__16997__auto____$1 = this;
var pred__25641 = cljs.core.keyword_identical_QMARK_;
var expr__25642 = k__16998__auto__;
if(cljs.core.truth_(pred__25641.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),expr__25642))){
return (new datascript.parser.SrcVar(G__25637,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.SrcVar(self__.symbol,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__16998__auto__,G__25637),null));
}
});

datascript.parser.SrcVar.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__17002__auto__){
var self__ = this;
var this__17002__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"symbol","symbol",-1038572696),self__.symbol],null))], null),self__.__extmap));
});

datascript.parser.SrcVar.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__16989__auto__,G__25637){
var self__ = this;
var this__16989__auto____$1 = this;
return (new datascript.parser.SrcVar(self__.symbol,G__25637,self__.__extmap,self__.__hash));
});

datascript.parser.SrcVar.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__16995__auto__,entry__16996__auto__){
var self__ = this;
var this__16995__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__16996__auto__)){
return cljs.core._assoc.call(null,this__16995__auto____$1,cljs.core._nth.call(null,entry__16996__auto__,(0)),cljs.core._nth.call(null,entry__16996__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__16995__auto____$1,entry__16996__auto__);
}
});

datascript.parser.SrcVar.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.SrcVar.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__20299__auto__,f25634){
var self__ = this;
var this__20299__auto____$1 = this;
var new__20300__auto__ = (new datascript.parser.SrcVar(datascript.parser.postwalk.call(null,self__.symbol,f25634),null,null,null));
var temp__4423__auto__ = cljs.core.meta.call(null,this__20299__auto____$1);
if(cljs.core.truth_(temp__4423__auto__)){
var meta__20301__auto__ = temp__4423__auto__;
return cljs.core.with_meta.call(null,new__20300__auto__,meta__20301__auto__);
} else {
return new__20300__auto__;
}
});

datascript.parser.SrcVar.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___20302__auto__,pred25635,acc25636){
var self__ = this;
var ___20302__auto____$1 = this;
return datascript.parser.collect.call(null,pred25635,self__.symbol,acc25636);
});

datascript.parser.SrcVar.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___20302__auto__,acc25636){
var self__ = this;
var ___20302__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,acc25636,self__.symbol);
});

datascript.parser.SrcVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"symbol","symbol",601958831,null)], null);
});

datascript.parser.SrcVar.cljs$lang$type = true;

datascript.parser.SrcVar.cljs$lang$ctorPrSeq = (function (this__17024__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/SrcVar");
});

datascript.parser.SrcVar.cljs$lang$ctorPrWriter = (function (this__17024__auto__,writer__17025__auto__){
return cljs.core._write.call(null,writer__17025__auto__,"datascript.parser/SrcVar");
});

datascript.parser.__GT_SrcVar = (function datascript$parser$__GT_SrcVar(symbol){
return (new datascript.parser.SrcVar(symbol,null,null,null));
});

datascript.parser.map__GT_SrcVar = (function datascript$parser$map__GT_SrcVar(G__25639){
return (new datascript.parser.SrcVar(new cljs.core.Keyword(null,"symbol","symbol",-1038572696).cljs$core$IFn$_invoke$arity$1(G__25639),null,cljs.core.dissoc.call(null,G__25639,new cljs.core.Keyword(null,"symbol","symbol",-1038572696)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.DefaultSrc = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.DefaultSrc.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__16990__auto__,k__16991__auto__){
var self__ = this;
var this__16990__auto____$1 = this;
return cljs.core._lookup.call(null,this__16990__auto____$1,k__16991__auto__,null);
});

datascript.parser.DefaultSrc.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__16992__auto__,k25649,else__16993__auto__){
var self__ = this;
var this__16992__auto____$1 = this;
var G__25651 = k25649;
switch (G__25651) {
default:
return cljs.core.get.call(null,self__.__extmap,k25649,else__16993__auto__);

}
});

datascript.parser.DefaultSrc.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__17004__auto__,writer__17005__auto__,opts__17006__auto__){
var self__ = this;
var this__17004__auto____$1 = this;
var pr_pair__17007__auto__ = ((function (this__17004__auto____$1){
return (function (keyval__17008__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__17005__auto__,cljs.core.pr_writer,""," ","",opts__17006__auto__,keyval__17008__auto__);
});})(this__17004__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__17005__auto__,pr_pair__17007__auto__,"#datascript.parser.DefaultSrc{",", ","}",opts__17006__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

datascript.parser.DefaultSrc.prototype.cljs$core$IIterable$ = true;

datascript.parser.DefaultSrc.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__25648){
var self__ = this;
var G__25648__$1 = this;
return (new cljs.core.RecordIter((0),G__25648__$1,0,cljs.core.PersistentVector.EMPTY,cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.DefaultSrc.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__16988__auto__){
var self__ = this;
var this__16988__auto____$1 = this;
return self__.__meta;
});

datascript.parser.DefaultSrc.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__16984__auto__){
var self__ = this;
var this__16984__auto____$1 = this;
return (new datascript.parser.DefaultSrc(self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.DefaultSrc.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__16994__auto__){
var self__ = this;
var this__16994__auto____$1 = this;
return (0 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.DefaultSrc.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__16985__auto__){
var self__ = this;
var this__16985__auto____$1 = this;
var h__16810__auto__ = self__.__hash;
if(!((h__16810__auto__ == null))){
return h__16810__auto__;
} else {
var h__16810__auto____$1 = cljs.core.hash_imap.call(null,this__16985__auto____$1);
self__.__hash = h__16810__auto____$1;

return h__16810__auto____$1;
}
});

datascript.parser.DefaultSrc.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__16986__auto__,other__16987__auto__){
var self__ = this;
var this__16986__auto____$1 = this;
if(cljs.core.truth_((function (){var and__16363__auto__ = other__16987__auto__;
if(cljs.core.truth_(and__16363__auto__)){
var and__16363__auto____$1 = (this__16986__auto____$1.constructor === other__16987__auto__.constructor);
if(and__16363__auto____$1){
return cljs.core.equiv_map.call(null,this__16986__auto____$1,other__16987__auto__);
} else {
return and__16363__auto____$1;
}
} else {
return and__16363__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.DefaultSrc.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__16999__auto__,k__17000__auto__){
var self__ = this;
var this__16999__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__17000__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__16999__auto____$1),self__.__meta),k__17000__auto__);
} else {
return (new datascript.parser.DefaultSrc(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__17000__auto__)),null));
}
});

datascript.parser.DefaultSrc.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__16997__auto__,k__16998__auto__,G__25648){
var self__ = this;
var this__16997__auto____$1 = this;
var pred__25652 = cljs.core.keyword_identical_QMARK_;
var expr__25653 = k__16998__auto__;
return (new datascript.parser.DefaultSrc(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__16998__auto__,G__25648),null));
});

datascript.parser.DefaultSrc.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__17002__auto__){
var self__ = this;
var this__17002__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

datascript.parser.DefaultSrc.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__16989__auto__,G__25648){
var self__ = this;
var this__16989__auto____$1 = this;
return (new datascript.parser.DefaultSrc(G__25648,self__.__extmap,self__.__hash));
});

datascript.parser.DefaultSrc.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__16995__auto__,entry__16996__auto__){
var self__ = this;
var this__16995__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__16996__auto__)){
return cljs.core._assoc.call(null,this__16995__auto____$1,cljs.core._nth.call(null,entry__16996__auto__,(0)),cljs.core._nth.call(null,entry__16996__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__16995__auto____$1,entry__16996__auto__);
}
});

datascript.parser.DefaultSrc.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.DefaultSrc.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__20299__auto__,f25645){
var self__ = this;
var this__20299__auto____$1 = this;
var new__20300__auto__ = (new datascript.parser.DefaultSrc(null,null,null));
var temp__4423__auto__ = cljs.core.meta.call(null,this__20299__auto____$1);
if(cljs.core.truth_(temp__4423__auto__)){
var meta__20301__auto__ = temp__4423__auto__;
return cljs.core.with_meta.call(null,new__20300__auto__,meta__20301__auto__);
} else {
return new__20300__auto__;
}
});

datascript.parser.DefaultSrc.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___20302__auto__,pred25646,acc25647){
var self__ = this;
var ___20302__auto____$1 = this;
return acc25647;
});

datascript.parser.DefaultSrc.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___20302__auto__,acc25647){
var self__ = this;
var ___20302__auto____$1 = this;
return acc25647;
});

datascript.parser.DefaultSrc.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

datascript.parser.DefaultSrc.cljs$lang$type = true;

datascript.parser.DefaultSrc.cljs$lang$ctorPrSeq = (function (this__17024__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/DefaultSrc");
});

datascript.parser.DefaultSrc.cljs$lang$ctorPrWriter = (function (this__17024__auto__,writer__17025__auto__){
return cljs.core._write.call(null,writer__17025__auto__,"datascript.parser/DefaultSrc");
});

datascript.parser.__GT_DefaultSrc = (function datascript$parser$__GT_DefaultSrc(){
return (new datascript.parser.DefaultSrc(null,null,null));
});

datascript.parser.map__GT_DefaultSrc = (function datascript$parser$map__GT_DefaultSrc(G__25650){
return (new datascript.parser.DefaultSrc(null,cljs.core.dissoc.call(null,G__25650),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.RulesVar = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.RulesVar.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__16990__auto__,k__16991__auto__){
var self__ = this;
var this__16990__auto____$1 = this;
return cljs.core._lookup.call(null,this__16990__auto____$1,k__16991__auto__,null);
});

datascript.parser.RulesVar.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__16992__auto__,k25660,else__16993__auto__){
var self__ = this;
var this__16992__auto____$1 = this;
var G__25662 = k25660;
switch (G__25662) {
default:
return cljs.core.get.call(null,self__.__extmap,k25660,else__16993__auto__);

}
});

datascript.parser.RulesVar.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__17004__auto__,writer__17005__auto__,opts__17006__auto__){
var self__ = this;
var this__17004__auto____$1 = this;
var pr_pair__17007__auto__ = ((function (this__17004__auto____$1){
return (function (keyval__17008__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__17005__auto__,cljs.core.pr_writer,""," ","",opts__17006__auto__,keyval__17008__auto__);
});})(this__17004__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__17005__auto__,pr_pair__17007__auto__,"#datascript.parser.RulesVar{",", ","}",opts__17006__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

datascript.parser.RulesVar.prototype.cljs$core$IIterable$ = true;

datascript.parser.RulesVar.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__25659){
var self__ = this;
var G__25659__$1 = this;
return (new cljs.core.RecordIter((0),G__25659__$1,0,cljs.core.PersistentVector.EMPTY,cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.RulesVar.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__16988__auto__){
var self__ = this;
var this__16988__auto____$1 = this;
return self__.__meta;
});

datascript.parser.RulesVar.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__16984__auto__){
var self__ = this;
var this__16984__auto____$1 = this;
return (new datascript.parser.RulesVar(self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.RulesVar.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__16994__auto__){
var self__ = this;
var this__16994__auto____$1 = this;
return (0 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.RulesVar.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__16985__auto__){
var self__ = this;
var this__16985__auto____$1 = this;
var h__16810__auto__ = self__.__hash;
if(!((h__16810__auto__ == null))){
return h__16810__auto__;
} else {
var h__16810__auto____$1 = cljs.core.hash_imap.call(null,this__16985__auto____$1);
self__.__hash = h__16810__auto____$1;

return h__16810__auto____$1;
}
});

datascript.parser.RulesVar.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__16986__auto__,other__16987__auto__){
var self__ = this;
var this__16986__auto____$1 = this;
if(cljs.core.truth_((function (){var and__16363__auto__ = other__16987__auto__;
if(cljs.core.truth_(and__16363__auto__)){
var and__16363__auto____$1 = (this__16986__auto____$1.constructor === other__16987__auto__.constructor);
if(and__16363__auto____$1){
return cljs.core.equiv_map.call(null,this__16986__auto____$1,other__16987__auto__);
} else {
return and__16363__auto____$1;
}
} else {
return and__16363__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.RulesVar.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__16999__auto__,k__17000__auto__){
var self__ = this;
var this__16999__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__17000__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__16999__auto____$1),self__.__meta),k__17000__auto__);
} else {
return (new datascript.parser.RulesVar(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__17000__auto__)),null));
}
});

datascript.parser.RulesVar.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__16997__auto__,k__16998__auto__,G__25659){
var self__ = this;
var this__16997__auto____$1 = this;
var pred__25663 = cljs.core.keyword_identical_QMARK_;
var expr__25664 = k__16998__auto__;
return (new datascript.parser.RulesVar(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__16998__auto__,G__25659),null));
});

datascript.parser.RulesVar.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__17002__auto__){
var self__ = this;
var this__17002__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

datascript.parser.RulesVar.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__16989__auto__,G__25659){
var self__ = this;
var this__16989__auto____$1 = this;
return (new datascript.parser.RulesVar(G__25659,self__.__extmap,self__.__hash));
});

datascript.parser.RulesVar.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__16995__auto__,entry__16996__auto__){
var self__ = this;
var this__16995__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__16996__auto__)){
return cljs.core._assoc.call(null,this__16995__auto____$1,cljs.core._nth.call(null,entry__16996__auto__,(0)),cljs.core._nth.call(null,entry__16996__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__16995__auto____$1,entry__16996__auto__);
}
});

datascript.parser.RulesVar.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.RulesVar.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__20299__auto__,f25656){
var self__ = this;
var this__20299__auto____$1 = this;
var new__20300__auto__ = (new datascript.parser.RulesVar(null,null,null));
var temp__4423__auto__ = cljs.core.meta.call(null,this__20299__auto____$1);
if(cljs.core.truth_(temp__4423__auto__)){
var meta__20301__auto__ = temp__4423__auto__;
return cljs.core.with_meta.call(null,new__20300__auto__,meta__20301__auto__);
} else {
return new__20300__auto__;
}
});

datascript.parser.RulesVar.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___20302__auto__,pred25657,acc25658){
var self__ = this;
var ___20302__auto____$1 = this;
return acc25658;
});

datascript.parser.RulesVar.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___20302__auto__,acc25658){
var self__ = this;
var ___20302__auto____$1 = this;
return acc25658;
});

datascript.parser.RulesVar.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

datascript.parser.RulesVar.cljs$lang$type = true;

datascript.parser.RulesVar.cljs$lang$ctorPrSeq = (function (this__17024__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/RulesVar");
});

datascript.parser.RulesVar.cljs$lang$ctorPrWriter = (function (this__17024__auto__,writer__17025__auto__){
return cljs.core._write.call(null,writer__17025__auto__,"datascript.parser/RulesVar");
});

datascript.parser.__GT_RulesVar = (function datascript$parser$__GT_RulesVar(){
return (new datascript.parser.RulesVar(null,null,null));
});

datascript.parser.map__GT_RulesVar = (function datascript$parser$map__GT_RulesVar(G__25661){
return (new datascript.parser.RulesVar(null,cljs.core.dissoc.call(null,G__25661),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.Constant = (function (value,__meta,__extmap,__hash){
this.value = value;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.Constant.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__16990__auto__,k__16991__auto__){
var self__ = this;
var this__16990__auto____$1 = this;
return cljs.core._lookup.call(null,this__16990__auto____$1,k__16991__auto__,null);
});

datascript.parser.Constant.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__16992__auto__,k25671,else__16993__auto__){
var self__ = this;
var this__16992__auto____$1 = this;
var G__25673 = (((k25671 instanceof cljs.core.Keyword))?k25671.fqn:null);
switch (G__25673) {
case "value":
return self__.value;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k25671,else__16993__auto__);

}
});

datascript.parser.Constant.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__17004__auto__,writer__17005__auto__,opts__17006__auto__){
var self__ = this;
var this__17004__auto____$1 = this;
var pr_pair__17007__auto__ = ((function (this__17004__auto____$1){
return (function (keyval__17008__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__17005__auto__,cljs.core.pr_writer,""," ","",opts__17006__auto__,keyval__17008__auto__);
});})(this__17004__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__17005__auto__,pr_pair__17007__auto__,"#datascript.parser.Constant{",", ","}",opts__17006__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",305978217),self__.value],null))], null),self__.__extmap));
});

datascript.parser.Constant.prototype.cljs$core$IIterable$ = true;

datascript.parser.Constant.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__25670){
var self__ = this;
var G__25670__$1 = this;
return (new cljs.core.RecordIter((0),G__25670__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.Constant.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__16988__auto__){
var self__ = this;
var this__16988__auto____$1 = this;
return self__.__meta;
});

datascript.parser.Constant.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__16984__auto__){
var self__ = this;
var this__16984__auto____$1 = this;
return (new datascript.parser.Constant(self__.value,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.Constant.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__16994__auto__){
var self__ = this;
var this__16994__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.Constant.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__16985__auto__){
var self__ = this;
var this__16985__auto____$1 = this;
var h__16810__auto__ = self__.__hash;
if(!((h__16810__auto__ == null))){
return h__16810__auto__;
} else {
var h__16810__auto____$1 = cljs.core.hash_imap.call(null,this__16985__auto____$1);
self__.__hash = h__16810__auto____$1;

return h__16810__auto____$1;
}
});

datascript.parser.Constant.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__16986__auto__,other__16987__auto__){
var self__ = this;
var this__16986__auto____$1 = this;
if(cljs.core.truth_((function (){var and__16363__auto__ = other__16987__auto__;
if(cljs.core.truth_(and__16363__auto__)){
var and__16363__auto____$1 = (this__16986__auto____$1.constructor === other__16987__auto__.constructor);
if(and__16363__auto____$1){
return cljs.core.equiv_map.call(null,this__16986__auto____$1,other__16987__auto__);
} else {
return and__16363__auto____$1;
}
} else {
return and__16363__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.Constant.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__16999__auto__,k__17000__auto__){
var self__ = this;
var this__16999__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),null], null), null),k__17000__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__16999__auto____$1),self__.__meta),k__17000__auto__);
} else {
return (new datascript.parser.Constant(self__.value,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__17000__auto__)),null));
}
});

datascript.parser.Constant.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__16997__auto__,k__16998__auto__,G__25670){
var self__ = this;
var this__16997__auto____$1 = this;
var pred__25674 = cljs.core.keyword_identical_QMARK_;
var expr__25675 = k__16998__auto__;
if(cljs.core.truth_(pred__25674.call(null,new cljs.core.Keyword(null,"value","value",305978217),expr__25675))){
return (new datascript.parser.Constant(G__25670,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Constant(self__.value,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__16998__auto__,G__25670),null));
}
});

datascript.parser.Constant.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__17002__auto__){
var self__ = this;
var this__17002__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",305978217),self__.value],null))], null),self__.__extmap));
});

datascript.parser.Constant.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__16989__auto__,G__25670){
var self__ = this;
var this__16989__auto____$1 = this;
return (new datascript.parser.Constant(self__.value,G__25670,self__.__extmap,self__.__hash));
});

datascript.parser.Constant.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__16995__auto__,entry__16996__auto__){
var self__ = this;
var this__16995__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__16996__auto__)){
return cljs.core._assoc.call(null,this__16995__auto____$1,cljs.core._nth.call(null,entry__16996__auto__,(0)),cljs.core._nth.call(null,entry__16996__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__16995__auto____$1,entry__16996__auto__);
}
});

datascript.parser.Constant.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.Constant.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__20299__auto__,f25667){
var self__ = this;
var this__20299__auto____$1 = this;
var new__20300__auto__ = (new datascript.parser.Constant(datascript.parser.postwalk.call(null,self__.value,f25667),null,null,null));
var temp__4423__auto__ = cljs.core.meta.call(null,this__20299__auto____$1);
if(cljs.core.truth_(temp__4423__auto__)){
var meta__20301__auto__ = temp__4423__auto__;
return cljs.core.with_meta.call(null,new__20300__auto__,meta__20301__auto__);
} else {
return new__20300__auto__;
}
});

datascript.parser.Constant.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___20302__auto__,pred25668,acc25669){
var self__ = this;
var ___20302__auto____$1 = this;
return datascript.parser.collect.call(null,pred25668,self__.value,acc25669);
});

datascript.parser.Constant.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___20302__auto__,acc25669){
var self__ = this;
var ___20302__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,acc25669,self__.value);
});

datascript.parser.Constant.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"value","value",1946509744,null)], null);
});

datascript.parser.Constant.cljs$lang$type = true;

datascript.parser.Constant.cljs$lang$ctorPrSeq = (function (this__17024__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/Constant");
});

datascript.parser.Constant.cljs$lang$ctorPrWriter = (function (this__17024__auto__,writer__17025__auto__){
return cljs.core._write.call(null,writer__17025__auto__,"datascript.parser/Constant");
});

datascript.parser.__GT_Constant = (function datascript$parser$__GT_Constant(value){
return (new datascript.parser.Constant(value,null,null,null));
});

datascript.parser.map__GT_Constant = (function datascript$parser$map__GT_Constant(G__25672){
return (new datascript.parser.Constant(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(G__25672),null,cljs.core.dissoc.call(null,G__25672,new cljs.core.Keyword(null,"value","value",305978217)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.PlainSymbol = (function (symbol,__meta,__extmap,__hash){
this.symbol = symbol;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.PlainSymbol.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__16990__auto__,k__16991__auto__){
var self__ = this;
var this__16990__auto____$1 = this;
return cljs.core._lookup.call(null,this__16990__auto____$1,k__16991__auto__,null);
});

datascript.parser.PlainSymbol.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__16992__auto__,k25682,else__16993__auto__){
var self__ = this;
var this__16992__auto____$1 = this;
var G__25684 = (((k25682 instanceof cljs.core.Keyword))?k25682.fqn:null);
switch (G__25684) {
case "symbol":
return self__.symbol;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k25682,else__16993__auto__);

}
});

datascript.parser.PlainSymbol.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__17004__auto__,writer__17005__auto__,opts__17006__auto__){
var self__ = this;
var this__17004__auto____$1 = this;
var pr_pair__17007__auto__ = ((function (this__17004__auto____$1){
return (function (keyval__17008__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__17005__auto__,cljs.core.pr_writer,""," ","",opts__17006__auto__,keyval__17008__auto__);
});})(this__17004__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__17005__auto__,pr_pair__17007__auto__,"#datascript.parser.PlainSymbol{",", ","}",opts__17006__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"symbol","symbol",-1038572696),self__.symbol],null))], null),self__.__extmap));
});

datascript.parser.PlainSymbol.prototype.cljs$core$IIterable$ = true;

datascript.parser.PlainSymbol.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__25681){
var self__ = this;
var G__25681__$1 = this;
return (new cljs.core.RecordIter((0),G__25681__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"symbol","symbol",-1038572696)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.PlainSymbol.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__16988__auto__){
var self__ = this;
var this__16988__auto____$1 = this;
return self__.__meta;
});

datascript.parser.PlainSymbol.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__16984__auto__){
var self__ = this;
var this__16984__auto____$1 = this;
return (new datascript.parser.PlainSymbol(self__.symbol,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.PlainSymbol.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__16994__auto__){
var self__ = this;
var this__16994__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.PlainSymbol.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__16985__auto__){
var self__ = this;
var this__16985__auto____$1 = this;
var h__16810__auto__ = self__.__hash;
if(!((h__16810__auto__ == null))){
return h__16810__auto__;
} else {
var h__16810__auto____$1 = cljs.core.hash_imap.call(null,this__16985__auto____$1);
self__.__hash = h__16810__auto____$1;

return h__16810__auto____$1;
}
});

datascript.parser.PlainSymbol.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__16986__auto__,other__16987__auto__){
var self__ = this;
var this__16986__auto____$1 = this;
if(cljs.core.truth_((function (){var and__16363__auto__ = other__16987__auto__;
if(cljs.core.truth_(and__16363__auto__)){
var and__16363__auto____$1 = (this__16986__auto____$1.constructor === other__16987__auto__.constructor);
if(and__16363__auto____$1){
return cljs.core.equiv_map.call(null,this__16986__auto____$1,other__16987__auto__);
} else {
return and__16363__auto____$1;
}
} else {
return and__16363__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.PlainSymbol.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__16999__auto__,k__17000__auto__){
var self__ = this;
var this__16999__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"symbol","symbol",-1038572696),null], null), null),k__17000__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__16999__auto____$1),self__.__meta),k__17000__auto__);
} else {
return (new datascript.parser.PlainSymbol(self__.symbol,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__17000__auto__)),null));
}
});

datascript.parser.PlainSymbol.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__16997__auto__,k__16998__auto__,G__25681){
var self__ = this;
var this__16997__auto____$1 = this;
var pred__25685 = cljs.core.keyword_identical_QMARK_;
var expr__25686 = k__16998__auto__;
if(cljs.core.truth_(pred__25685.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),expr__25686))){
return (new datascript.parser.PlainSymbol(G__25681,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.PlainSymbol(self__.symbol,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__16998__auto__,G__25681),null));
}
});

datascript.parser.PlainSymbol.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__17002__auto__){
var self__ = this;
var this__17002__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"symbol","symbol",-1038572696),self__.symbol],null))], null),self__.__extmap));
});

datascript.parser.PlainSymbol.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__16989__auto__,G__25681){
var self__ = this;
var this__16989__auto____$1 = this;
return (new datascript.parser.PlainSymbol(self__.symbol,G__25681,self__.__extmap,self__.__hash));
});

datascript.parser.PlainSymbol.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__16995__auto__,entry__16996__auto__){
var self__ = this;
var this__16995__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__16996__auto__)){
return cljs.core._assoc.call(null,this__16995__auto____$1,cljs.core._nth.call(null,entry__16996__auto__,(0)),cljs.core._nth.call(null,entry__16996__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__16995__auto____$1,entry__16996__auto__);
}
});

datascript.parser.PlainSymbol.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.PlainSymbol.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__20299__auto__,f25678){
var self__ = this;
var this__20299__auto____$1 = this;
var new__20300__auto__ = (new datascript.parser.PlainSymbol(datascript.parser.postwalk.call(null,self__.symbol,f25678),null,null,null));
var temp__4423__auto__ = cljs.core.meta.call(null,this__20299__auto____$1);
if(cljs.core.truth_(temp__4423__auto__)){
var meta__20301__auto__ = temp__4423__auto__;
return cljs.core.with_meta.call(null,new__20300__auto__,meta__20301__auto__);
} else {
return new__20300__auto__;
}
});

datascript.parser.PlainSymbol.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___20302__auto__,pred25679,acc25680){
var self__ = this;
var ___20302__auto____$1 = this;
return datascript.parser.collect.call(null,pred25679,self__.symbol,acc25680);
});

datascript.parser.PlainSymbol.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___20302__auto__,acc25680){
var self__ = this;
var ___20302__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,acc25680,self__.symbol);
});

datascript.parser.PlainSymbol.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"symbol","symbol",601958831,null)], null);
});

datascript.parser.PlainSymbol.cljs$lang$type = true;

datascript.parser.PlainSymbol.cljs$lang$ctorPrSeq = (function (this__17024__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/PlainSymbol");
});

datascript.parser.PlainSymbol.cljs$lang$ctorPrWriter = (function (this__17024__auto__,writer__17025__auto__){
return cljs.core._write.call(null,writer__17025__auto__,"datascript.parser/PlainSymbol");
});

datascript.parser.__GT_PlainSymbol = (function datascript$parser$__GT_PlainSymbol(symbol){
return (new datascript.parser.PlainSymbol(symbol,null,null,null));
});

datascript.parser.map__GT_PlainSymbol = (function datascript$parser$map__GT_PlainSymbol(G__25683){
return (new datascript.parser.PlainSymbol(new cljs.core.Keyword(null,"symbol","symbol",-1038572696).cljs$core$IFn$_invoke$arity$1(G__25683),null,cljs.core.dissoc.call(null,G__25683,new cljs.core.Keyword(null,"symbol","symbol",-1038572696)),null));
});

datascript.parser.parse_placeholder = (function datascript$parser$parse_placeholder(form){
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"_","_",-1201019570,null),form)){
return (new datascript.parser.Placeholder(null,null,null));
} else {
return null;
}
});
datascript.parser.parse_variable = (function datascript$parser$parse_variable(form){
if(((form instanceof cljs.core.Symbol)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,cljs.core.name.call(null,form)),"?"))){
return (new datascript.parser.Variable(form,null,null,null));
} else {
return null;
}
});
datascript.parser.parse_src_var = (function datascript$parser$parse_src_var(form){
if(((form instanceof cljs.core.Symbol)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,cljs.core.name.call(null,form)),"$"))){
return (new datascript.parser.SrcVar(form,null,null,null));
} else {
return null;
}
});
datascript.parser.parse_rules_var = (function datascript$parser$parse_rules_var(form){
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"%","%",-950237169,null),form)){
return (new datascript.parser.RulesVar(null,null,null));
} else {
return null;
}
});
datascript.parser.parse_constant = (function datascript$parser$parse_constant(form){
if(!((form instanceof cljs.core.Symbol))){
return (new datascript.parser.Constant(form,null,null,null));
} else {
return null;
}
});
datascript.parser.parse_plain_symbol = (function datascript$parser$parse_plain_symbol(form){
if(((form instanceof cljs.core.Symbol)) && (cljs.core.not.call(null,datascript.parser.parse_variable.call(null,form))) && (cljs.core.not.call(null,datascript.parser.parse_src_var.call(null,form))) && (cljs.core.not.call(null,datascript.parser.parse_placeholder.call(null,form)))){
return (new datascript.parser.PlainSymbol(form,null,null,null));
} else {
return null;
}
});
datascript.parser.parse_fn_arg = (function datascript$parser$parse_fn_arg(form){
var or__16375__auto__ = datascript.parser.parse_variable.call(null,form);
if(cljs.core.truth_(or__16375__auto__)){
return or__16375__auto__;
} else {
var or__16375__auto____$1 = datascript.parser.parse_constant.call(null,form);
if(cljs.core.truth_(or__16375__auto____$1)){
return or__16375__auto____$1;
} else {
return datascript.parser.parse_src_var.call(null,form);
}
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.RuleVars = (function (required,free,__meta,__extmap,__hash){
this.required = required;
this.free = free;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.RuleVars.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__16990__auto__,k__16991__auto__){
var self__ = this;
var this__16990__auto____$1 = this;
return cljs.core._lookup.call(null,this__16990__auto____$1,k__16991__auto__,null);
});

datascript.parser.RuleVars.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__16992__auto__,k25693,else__16993__auto__){
var self__ = this;
var this__16992__auto____$1 = this;
var G__25695 = (((k25693 instanceof cljs.core.Keyword))?k25693.fqn:null);
switch (G__25695) {
case "required":
return self__.required;

break;
case "free":
return self__.free;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k25693,else__16993__auto__);

}
});

datascript.parser.RuleVars.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__17004__auto__,writer__17005__auto__,opts__17006__auto__){
var self__ = this;
var this__17004__auto____$1 = this;
var pr_pair__17007__auto__ = ((function (this__17004__auto____$1){
return (function (keyval__17008__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__17005__auto__,cljs.core.pr_writer,""," ","",opts__17006__auto__,keyval__17008__auto__);
});})(this__17004__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__17005__auto__,pr_pair__17007__auto__,"#datascript.parser.RuleVars{",", ","}",opts__17006__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"required","required",1807647006),self__.required],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"free","free",801364328),self__.free],null))], null),self__.__extmap));
});

datascript.parser.RuleVars.prototype.cljs$core$IIterable$ = true;

datascript.parser.RuleVars.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__25692){
var self__ = this;
var G__25692__$1 = this;
return (new cljs.core.RecordIter((0),G__25692__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"required","required",1807647006),new cljs.core.Keyword(null,"free","free",801364328)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.RuleVars.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__16988__auto__){
var self__ = this;
var this__16988__auto____$1 = this;
return self__.__meta;
});

datascript.parser.RuleVars.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__16984__auto__){
var self__ = this;
var this__16984__auto____$1 = this;
return (new datascript.parser.RuleVars(self__.required,self__.free,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.RuleVars.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__16994__auto__){
var self__ = this;
var this__16994__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.RuleVars.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__16985__auto__){
var self__ = this;
var this__16985__auto____$1 = this;
var h__16810__auto__ = self__.__hash;
if(!((h__16810__auto__ == null))){
return h__16810__auto__;
} else {
var h__16810__auto____$1 = cljs.core.hash_imap.call(null,this__16985__auto____$1);
self__.__hash = h__16810__auto____$1;

return h__16810__auto____$1;
}
});

datascript.parser.RuleVars.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__16986__auto__,other__16987__auto__){
var self__ = this;
var this__16986__auto____$1 = this;
if(cljs.core.truth_((function (){var and__16363__auto__ = other__16987__auto__;
if(cljs.core.truth_(and__16363__auto__)){
var and__16363__auto____$1 = (this__16986__auto____$1.constructor === other__16987__auto__.constructor);
if(and__16363__auto____$1){
return cljs.core.equiv_map.call(null,this__16986__auto____$1,other__16987__auto__);
} else {
return and__16363__auto____$1;
}
} else {
return and__16363__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.RuleVars.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__16999__auto__,k__17000__auto__){
var self__ = this;
var this__16999__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"free","free",801364328),null,new cljs.core.Keyword(null,"required","required",1807647006),null], null), null),k__17000__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__16999__auto____$1),self__.__meta),k__17000__auto__);
} else {
return (new datascript.parser.RuleVars(self__.required,self__.free,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__17000__auto__)),null));
}
});

datascript.parser.RuleVars.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__16997__auto__,k__16998__auto__,G__25692){
var self__ = this;
var this__16997__auto____$1 = this;
var pred__25696 = cljs.core.keyword_identical_QMARK_;
var expr__25697 = k__16998__auto__;
if(cljs.core.truth_(pred__25696.call(null,new cljs.core.Keyword(null,"required","required",1807647006),expr__25697))){
return (new datascript.parser.RuleVars(G__25692,self__.free,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__25696.call(null,new cljs.core.Keyword(null,"free","free",801364328),expr__25697))){
return (new datascript.parser.RuleVars(self__.required,G__25692,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.RuleVars(self__.required,self__.free,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__16998__auto__,G__25692),null));
}
}
});

datascript.parser.RuleVars.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__17002__auto__){
var self__ = this;
var this__17002__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"required","required",1807647006),self__.required],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"free","free",801364328),self__.free],null))], null),self__.__extmap));
});

datascript.parser.RuleVars.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__16989__auto__,G__25692){
var self__ = this;
var this__16989__auto____$1 = this;
return (new datascript.parser.RuleVars(self__.required,self__.free,G__25692,self__.__extmap,self__.__hash));
});

datascript.parser.RuleVars.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__16995__auto__,entry__16996__auto__){
var self__ = this;
var this__16995__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__16996__auto__)){
return cljs.core._assoc.call(null,this__16995__auto____$1,cljs.core._nth.call(null,entry__16996__auto__,(0)),cljs.core._nth.call(null,entry__16996__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__16995__auto____$1,entry__16996__auto__);
}
});

datascript.parser.RuleVars.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.RuleVars.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__20299__auto__,f25689){
var self__ = this;
var this__20299__auto____$1 = this;
var new__20300__auto__ = (new datascript.parser.RuleVars(datascript.parser.postwalk.call(null,self__.required,f25689),datascript.parser.postwalk.call(null,self__.free,f25689),null,null,null));
var temp__4423__auto__ = cljs.core.meta.call(null,this__20299__auto____$1);
if(cljs.core.truth_(temp__4423__auto__)){
var meta__20301__auto__ = temp__4423__auto__;
return cljs.core.with_meta.call(null,new__20300__auto__,meta__20301__auto__);
} else {
return new__20300__auto__;
}
});

datascript.parser.RuleVars.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___20302__auto__,pred25690,acc25691){
var self__ = this;
var ___20302__auto____$1 = this;
return datascript.parser.collect.call(null,pred25690,self__.free,datascript.parser.collect.call(null,pred25690,self__.required,acc25691));
});

datascript.parser.RuleVars.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___20302__auto__,acc25691){
var self__ = this;
var ___20302__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,acc25691,self__.required),self__.free);
});

datascript.parser.RuleVars.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"required","required",-846788763,null),new cljs.core.Symbol(null,"free","free",-1853071441,null)], null);
});

datascript.parser.RuleVars.cljs$lang$type = true;

datascript.parser.RuleVars.cljs$lang$ctorPrSeq = (function (this__17024__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/RuleVars");
});

datascript.parser.RuleVars.cljs$lang$ctorPrWriter = (function (this__17024__auto__,writer__17025__auto__){
return cljs.core._write.call(null,writer__17025__auto__,"datascript.parser/RuleVars");
});

datascript.parser.__GT_RuleVars = (function datascript$parser$__GT_RuleVars(required,free){
return (new datascript.parser.RuleVars(required,free,null,null,null));
});

datascript.parser.map__GT_RuleVars = (function datascript$parser$map__GT_RuleVars(G__25694){
return (new datascript.parser.RuleVars(new cljs.core.Keyword(null,"required","required",1807647006).cljs$core$IFn$_invoke$arity$1(G__25694),new cljs.core.Keyword(null,"free","free",801364328).cljs$core$IFn$_invoke$arity$1(G__25694),null,cljs.core.dissoc.call(null,G__25694,new cljs.core.Keyword(null,"required","required",1807647006),new cljs.core.Keyword(null,"free","free",801364328)),null));
});

datascript.parser.parse_rule_vars = (function datascript$parser$parse_rule_vars(form){
if(cljs.core.sequential_QMARK_.call(null,form)){
var vec__25701 = ((cljs.core.sequential_QMARK_.call(null,cljs.core.first.call(null,form)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,form),cljs.core.next.call(null,form)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,form], null));
var required = cljs.core.nth.call(null,vec__25701,(0),null);
var rest = cljs.core.nth.call(null,vec__25701,(1),null);
var required_STAR_ = datascript.parser.parse_seq.call(null,datascript.parser.parse_variable,required);
var free_STAR_ = datascript.parser.parse_seq.call(null,datascript.parser.parse_variable,rest);
if((cljs.core.empty_QMARK_.call(null,required_STAR_)) && (cljs.core.empty_QMARK_.call(null,free_STAR_))){
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse rule-vars, expected [ variable+ | ([ variable+ ] variable*) ]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","rule-vars","parser/rule-vars",-1493174969),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
} else {
}

if(cljs.core.truth_(datascript.parser.distinct_QMARK_.call(null,cljs.core.concat.call(null,required_STAR_,free_STAR_)))){
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Rule variables should be distinct")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","rule-vars","parser/rule-vars",-1493174969),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}

return (new datascript.parser.RuleVars(required_STAR_,free_STAR_,null,null,null));
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse rule-vars, expected [ variable+ | ([ variable+ ] variable*) ]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","rule-vars","parser/rule-vars",-1493174969),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
});
datascript.parser.flatten_rule_vars = (function datascript$parser$flatten_rule_vars(rule_vars){
return cljs.core.concat.call(null,(cljs.core.truth_(new cljs.core.Keyword(null,"required","required",1807647006).cljs$core$IFn$_invoke$arity$1(rule_vars))?(function (){
new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.mapv.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),new cljs.core.Keyword(null,"required","required",1807647006).cljs$core$IFn$_invoke$arity$1(rule_vars))], null);

return cljs.core.mapv.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),new cljs.core.Keyword(null,"free","free",801364328).cljs$core$IFn$_invoke$arity$1(rule_vars));
})()
:null));
});
datascript.parser.rule_vars_arity = (function datascript$parser$rule_vars_arity(rule_vars){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.count.call(null,new cljs.core.Keyword(null,"required","required",1807647006).cljs$core$IFn$_invoke$arity$1(rule_vars)),cljs.core.count.call(null,new cljs.core.Keyword(null,"free","free",801364328).cljs$core$IFn$_invoke$arity$1(rule_vars))], null);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.BindIgnore = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.BindIgnore.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__16990__auto__,k__16991__auto__){
var self__ = this;
var this__16990__auto____$1 = this;
return cljs.core._lookup.call(null,this__16990__auto____$1,k__16991__auto__,null);
});

datascript.parser.BindIgnore.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__16992__auto__,k25706,else__16993__auto__){
var self__ = this;
var this__16992__auto____$1 = this;
var G__25708 = k25706;
switch (G__25708) {
default:
return cljs.core.get.call(null,self__.__extmap,k25706,else__16993__auto__);

}
});

datascript.parser.BindIgnore.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__17004__auto__,writer__17005__auto__,opts__17006__auto__){
var self__ = this;
var this__17004__auto____$1 = this;
var pr_pair__17007__auto__ = ((function (this__17004__auto____$1){
return (function (keyval__17008__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__17005__auto__,cljs.core.pr_writer,""," ","",opts__17006__auto__,keyval__17008__auto__);
});})(this__17004__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__17005__auto__,pr_pair__17007__auto__,"#datascript.parser.BindIgnore{",", ","}",opts__17006__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

datascript.parser.BindIgnore.prototype.cljs$core$IIterable$ = true;

datascript.parser.BindIgnore.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__25705){
var self__ = this;
var G__25705__$1 = this;
return (new cljs.core.RecordIter((0),G__25705__$1,0,cljs.core.PersistentVector.EMPTY,cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.BindIgnore.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__16988__auto__){
var self__ = this;
var this__16988__auto____$1 = this;
return self__.__meta;
});

datascript.parser.BindIgnore.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__16984__auto__){
var self__ = this;
var this__16984__auto____$1 = this;
return (new datascript.parser.BindIgnore(self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.BindIgnore.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__16994__auto__){
var self__ = this;
var this__16994__auto____$1 = this;
return (0 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.BindIgnore.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__16985__auto__){
var self__ = this;
var this__16985__auto____$1 = this;
var h__16810__auto__ = self__.__hash;
if(!((h__16810__auto__ == null))){
return h__16810__auto__;
} else {
var h__16810__auto____$1 = cljs.core.hash_imap.call(null,this__16985__auto____$1);
self__.__hash = h__16810__auto____$1;

return h__16810__auto____$1;
}
});

datascript.parser.BindIgnore.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__16986__auto__,other__16987__auto__){
var self__ = this;
var this__16986__auto____$1 = this;
if(cljs.core.truth_((function (){var and__16363__auto__ = other__16987__auto__;
if(cljs.core.truth_(and__16363__auto__)){
var and__16363__auto____$1 = (this__16986__auto____$1.constructor === other__16987__auto__.constructor);
if(and__16363__auto____$1){
return cljs.core.equiv_map.call(null,this__16986__auto____$1,other__16987__auto__);
} else {
return and__16363__auto____$1;
}
} else {
return and__16363__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.BindIgnore.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__16999__auto__,k__17000__auto__){
var self__ = this;
var this__16999__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__17000__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__16999__auto____$1),self__.__meta),k__17000__auto__);
} else {
return (new datascript.parser.BindIgnore(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__17000__auto__)),null));
}
});

datascript.parser.BindIgnore.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__16997__auto__,k__16998__auto__,G__25705){
var self__ = this;
var this__16997__auto____$1 = this;
var pred__25709 = cljs.core.keyword_identical_QMARK_;
var expr__25710 = k__16998__auto__;
return (new datascript.parser.BindIgnore(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__16998__auto__,G__25705),null));
});

datascript.parser.BindIgnore.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__17002__auto__){
var self__ = this;
var this__17002__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

datascript.parser.BindIgnore.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__16989__auto__,G__25705){
var self__ = this;
var this__16989__auto____$1 = this;
return (new datascript.parser.BindIgnore(G__25705,self__.__extmap,self__.__hash));
});

datascript.parser.BindIgnore.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__16995__auto__,entry__16996__auto__){
var self__ = this;
var this__16995__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__16996__auto__)){
return cljs.core._assoc.call(null,this__16995__auto____$1,cljs.core._nth.call(null,entry__16996__auto__,(0)),cljs.core._nth.call(null,entry__16996__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__16995__auto____$1,entry__16996__auto__);
}
});

datascript.parser.BindIgnore.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.BindIgnore.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__20299__auto__,f25702){
var self__ = this;
var this__20299__auto____$1 = this;
var new__20300__auto__ = (new datascript.parser.BindIgnore(null,null,null));
var temp__4423__auto__ = cljs.core.meta.call(null,this__20299__auto____$1);
if(cljs.core.truth_(temp__4423__auto__)){
var meta__20301__auto__ = temp__4423__auto__;
return cljs.core.with_meta.call(null,new__20300__auto__,meta__20301__auto__);
} else {
return new__20300__auto__;
}
});

datascript.parser.BindIgnore.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___20302__auto__,pred25703,acc25704){
var self__ = this;
var ___20302__auto____$1 = this;
return acc25704;
});

datascript.parser.BindIgnore.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___20302__auto__,acc25704){
var self__ = this;
var ___20302__auto____$1 = this;
return acc25704;
});

datascript.parser.BindIgnore.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

datascript.parser.BindIgnore.cljs$lang$type = true;

datascript.parser.BindIgnore.cljs$lang$ctorPrSeq = (function (this__17024__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/BindIgnore");
});

datascript.parser.BindIgnore.cljs$lang$ctorPrWriter = (function (this__17024__auto__,writer__17025__auto__){
return cljs.core._write.call(null,writer__17025__auto__,"datascript.parser/BindIgnore");
});

datascript.parser.__GT_BindIgnore = (function datascript$parser$__GT_BindIgnore(){
return (new datascript.parser.BindIgnore(null,null,null));
});

datascript.parser.map__GT_BindIgnore = (function datascript$parser$map__GT_BindIgnore(G__25707){
return (new datascript.parser.BindIgnore(null,cljs.core.dissoc.call(null,G__25707),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.BindScalar = (function (variable,__meta,__extmap,__hash){
this.variable = variable;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.BindScalar.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__16990__auto__,k__16991__auto__){
var self__ = this;
var this__16990__auto____$1 = this;
return cljs.core._lookup.call(null,this__16990__auto____$1,k__16991__auto__,null);
});

datascript.parser.BindScalar.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__16992__auto__,k25717,else__16993__auto__){
var self__ = this;
var this__16992__auto____$1 = this;
var G__25719 = (((k25717 instanceof cljs.core.Keyword))?k25717.fqn:null);
switch (G__25719) {
case "variable":
return self__.variable;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k25717,else__16993__auto__);

}
});

datascript.parser.BindScalar.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__17004__auto__,writer__17005__auto__,opts__17006__auto__){
var self__ = this;
var this__17004__auto____$1 = this;
var pr_pair__17007__auto__ = ((function (this__17004__auto____$1){
return (function (keyval__17008__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__17005__auto__,cljs.core.pr_writer,""," ","",opts__17006__auto__,keyval__17008__auto__);
});})(this__17004__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__17005__auto__,pr_pair__17007__auto__,"#datascript.parser.BindScalar{",", ","}",opts__17006__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"variable","variable",-281346492),self__.variable],null))], null),self__.__extmap));
});

datascript.parser.BindScalar.prototype.cljs$core$IIterable$ = true;

datascript.parser.BindScalar.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__25716){
var self__ = this;
var G__25716__$1 = this;
return (new cljs.core.RecordIter((0),G__25716__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"variable","variable",-281346492)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.BindScalar.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__16988__auto__){
var self__ = this;
var this__16988__auto____$1 = this;
return self__.__meta;
});

datascript.parser.BindScalar.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__16984__auto__){
var self__ = this;
var this__16984__auto____$1 = this;
return (new datascript.parser.BindScalar(self__.variable,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.BindScalar.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__16994__auto__){
var self__ = this;
var this__16994__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.BindScalar.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__16985__auto__){
var self__ = this;
var this__16985__auto____$1 = this;
var h__16810__auto__ = self__.__hash;
if(!((h__16810__auto__ == null))){
return h__16810__auto__;
} else {
var h__16810__auto____$1 = cljs.core.hash_imap.call(null,this__16985__auto____$1);
self__.__hash = h__16810__auto____$1;

return h__16810__auto____$1;
}
});

datascript.parser.BindScalar.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__16986__auto__,other__16987__auto__){
var self__ = this;
var this__16986__auto____$1 = this;
if(cljs.core.truth_((function (){var and__16363__auto__ = other__16987__auto__;
if(cljs.core.truth_(and__16363__auto__)){
var and__16363__auto____$1 = (this__16986__auto____$1.constructor === other__16987__auto__.constructor);
if(and__16363__auto____$1){
return cljs.core.equiv_map.call(null,this__16986__auto____$1,other__16987__auto__);
} else {
return and__16363__auto____$1;
}
} else {
return and__16363__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.BindScalar.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__16999__auto__,k__17000__auto__){
var self__ = this;
var this__16999__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"variable","variable",-281346492),null], null), null),k__17000__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__16999__auto____$1),self__.__meta),k__17000__auto__);
} else {
return (new datascript.parser.BindScalar(self__.variable,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__17000__auto__)),null));
}
});

datascript.parser.BindScalar.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__16997__auto__,k__16998__auto__,G__25716){
var self__ = this;
var this__16997__auto____$1 = this;
var pred__25720 = cljs.core.keyword_identical_QMARK_;
var expr__25721 = k__16998__auto__;
if(cljs.core.truth_(pred__25720.call(null,new cljs.core.Keyword(null,"variable","variable",-281346492),expr__25721))){
return (new datascript.parser.BindScalar(G__25716,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.BindScalar(self__.variable,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__16998__auto__,G__25716),null));
}
});

datascript.parser.BindScalar.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__17002__auto__){
var self__ = this;
var this__17002__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"variable","variable",-281346492),self__.variable],null))], null),self__.__extmap));
});

datascript.parser.BindScalar.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__16989__auto__,G__25716){
var self__ = this;
var this__16989__auto____$1 = this;
return (new datascript.parser.BindScalar(self__.variable,G__25716,self__.__extmap,self__.__hash));
});

datascript.parser.BindScalar.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__16995__auto__,entry__16996__auto__){
var self__ = this;
var this__16995__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__16996__auto__)){
return cljs.core._assoc.call(null,this__16995__auto____$1,cljs.core._nth.call(null,entry__16996__auto__,(0)),cljs.core._nth.call(null,entry__16996__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__16995__auto____$1,entry__16996__auto__);
}
});

datascript.parser.BindScalar.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.BindScalar.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__20299__auto__,f25713){
var self__ = this;
var this__20299__auto____$1 = this;
var new__20300__auto__ = (new datascript.parser.BindScalar(datascript.parser.postwalk.call(null,self__.variable,f25713),null,null,null));
var temp__4423__auto__ = cljs.core.meta.call(null,this__20299__auto____$1);
if(cljs.core.truth_(temp__4423__auto__)){
var meta__20301__auto__ = temp__4423__auto__;
return cljs.core.with_meta.call(null,new__20300__auto__,meta__20301__auto__);
} else {
return new__20300__auto__;
}
});

datascript.parser.BindScalar.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___20302__auto__,pred25714,acc25715){
var self__ = this;
var ___20302__auto____$1 = this;
return datascript.parser.collect.call(null,pred25714,self__.variable,acc25715);
});

datascript.parser.BindScalar.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___20302__auto__,acc25715){
var self__ = this;
var ___20302__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,acc25715,self__.variable);
});

datascript.parser.BindScalar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"variable","variable",1359185035,null)], null);
});

datascript.parser.BindScalar.cljs$lang$type = true;

datascript.parser.BindScalar.cljs$lang$ctorPrSeq = (function (this__17024__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/BindScalar");
});

datascript.parser.BindScalar.cljs$lang$ctorPrWriter = (function (this__17024__auto__,writer__17025__auto__){
return cljs.core._write.call(null,writer__17025__auto__,"datascript.parser/BindScalar");
});

datascript.parser.__GT_BindScalar = (function datascript$parser$__GT_BindScalar(variable){
return (new datascript.parser.BindScalar(variable,null,null,null));
});

datascript.parser.map__GT_BindScalar = (function datascript$parser$map__GT_BindScalar(G__25718){
return (new datascript.parser.BindScalar(new cljs.core.Keyword(null,"variable","variable",-281346492).cljs$core$IFn$_invoke$arity$1(G__25718),null,cljs.core.dissoc.call(null,G__25718,new cljs.core.Keyword(null,"variable","variable",-281346492)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.BindTuple = (function (bindings,__meta,__extmap,__hash){
this.bindings = bindings;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.BindTuple.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__16990__auto__,k__16991__auto__){
var self__ = this;
var this__16990__auto____$1 = this;
return cljs.core._lookup.call(null,this__16990__auto____$1,k__16991__auto__,null);
});

datascript.parser.BindTuple.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__16992__auto__,k25728,else__16993__auto__){
var self__ = this;
var this__16992__auto____$1 = this;
var G__25730 = (((k25728 instanceof cljs.core.Keyword))?k25728.fqn:null);
switch (G__25730) {
case "bindings":
return self__.bindings;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k25728,else__16993__auto__);

}
});

datascript.parser.BindTuple.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__17004__auto__,writer__17005__auto__,opts__17006__auto__){
var self__ = this;
var this__17004__auto____$1 = this;
var pr_pair__17007__auto__ = ((function (this__17004__auto____$1){
return (function (keyval__17008__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__17005__auto__,cljs.core.pr_writer,""," ","",opts__17006__auto__,keyval__17008__auto__);
});})(this__17004__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__17005__auto__,pr_pair__17007__auto__,"#datascript.parser.BindTuple{",", ","}",opts__17006__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"bindings","bindings",1271397192),self__.bindings],null))], null),self__.__extmap));
});

datascript.parser.BindTuple.prototype.cljs$core$IIterable$ = true;

datascript.parser.BindTuple.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__25727){
var self__ = this;
var G__25727__$1 = this;
return (new cljs.core.RecordIter((0),G__25727__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bindings","bindings",1271397192)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.BindTuple.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__16988__auto__){
var self__ = this;
var this__16988__auto____$1 = this;
return self__.__meta;
});

datascript.parser.BindTuple.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__16984__auto__){
var self__ = this;
var this__16984__auto____$1 = this;
return (new datascript.parser.BindTuple(self__.bindings,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.BindTuple.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__16994__auto__){
var self__ = this;
var this__16994__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.BindTuple.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__16985__auto__){
var self__ = this;
var this__16985__auto____$1 = this;
var h__16810__auto__ = self__.__hash;
if(!((h__16810__auto__ == null))){
return h__16810__auto__;
} else {
var h__16810__auto____$1 = cljs.core.hash_imap.call(null,this__16985__auto____$1);
self__.__hash = h__16810__auto____$1;

return h__16810__auto____$1;
}
});

datascript.parser.BindTuple.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__16986__auto__,other__16987__auto__){
var self__ = this;
var this__16986__auto____$1 = this;
if(cljs.core.truth_((function (){var and__16363__auto__ = other__16987__auto__;
if(cljs.core.truth_(and__16363__auto__)){
var and__16363__auto____$1 = (this__16986__auto____$1.constructor === other__16987__auto__.constructor);
if(and__16363__auto____$1){
return cljs.core.equiv_map.call(null,this__16986__auto____$1,other__16987__auto__);
} else {
return and__16363__auto____$1;
}
} else {
return and__16363__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.BindTuple.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__16999__auto__,k__17000__auto__){
var self__ = this;
var this__16999__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bindings","bindings",1271397192),null], null), null),k__17000__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__16999__auto____$1),self__.__meta),k__17000__auto__);
} else {
return (new datascript.parser.BindTuple(self__.bindings,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__17000__auto__)),null));
}
});

datascript.parser.BindTuple.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__16997__auto__,k__16998__auto__,G__25727){
var self__ = this;
var this__16997__auto____$1 = this;
var pred__25731 = cljs.core.keyword_identical_QMARK_;
var expr__25732 = k__16998__auto__;
if(cljs.core.truth_(pred__25731.call(null,new cljs.core.Keyword(null,"bindings","bindings",1271397192),expr__25732))){
return (new datascript.parser.BindTuple(G__25727,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.BindTuple(self__.bindings,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__16998__auto__,G__25727),null));
}
});

datascript.parser.BindTuple.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__17002__auto__){
var self__ = this;
var this__17002__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"bindings","bindings",1271397192),self__.bindings],null))], null),self__.__extmap));
});

datascript.parser.BindTuple.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__16989__auto__,G__25727){
var self__ = this;
var this__16989__auto____$1 = this;
return (new datascript.parser.BindTuple(self__.bindings,G__25727,self__.__extmap,self__.__hash));
});

datascript.parser.BindTuple.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__16995__auto__,entry__16996__auto__){
var self__ = this;
var this__16995__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__16996__auto__)){
return cljs.core._assoc.call(null,this__16995__auto____$1,cljs.core._nth.call(null,entry__16996__auto__,(0)),cljs.core._nth.call(null,entry__16996__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__16995__auto____$1,entry__16996__auto__);
}
});

datascript.parser.BindTuple.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.BindTuple.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__20299__auto__,f25724){
var self__ = this;
var this__20299__auto____$1 = this;
var new__20300__auto__ = (new datascript.parser.BindTuple(datascript.parser.postwalk.call(null,self__.bindings,f25724),null,null,null));
var temp__4423__auto__ = cljs.core.meta.call(null,this__20299__auto____$1);
if(cljs.core.truth_(temp__4423__auto__)){
var meta__20301__auto__ = temp__4423__auto__;
return cljs.core.with_meta.call(null,new__20300__auto__,meta__20301__auto__);
} else {
return new__20300__auto__;
}
});

datascript.parser.BindTuple.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___20302__auto__,pred25725,acc25726){
var self__ = this;
var ___20302__auto____$1 = this;
return datascript.parser.collect.call(null,pred25725,self__.bindings,acc25726);
});

datascript.parser.BindTuple.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___20302__auto__,acc25726){
var self__ = this;
var ___20302__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,acc25726,self__.bindings);
});

datascript.parser.BindTuple.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"bindings","bindings",-1383038577,null)], null);
});

datascript.parser.BindTuple.cljs$lang$type = true;

datascript.parser.BindTuple.cljs$lang$ctorPrSeq = (function (this__17024__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/BindTuple");
});

datascript.parser.BindTuple.cljs$lang$ctorPrWriter = (function (this__17024__auto__,writer__17025__auto__){
return cljs.core._write.call(null,writer__17025__auto__,"datascript.parser/BindTuple");
});

datascript.parser.__GT_BindTuple = (function datascript$parser$__GT_BindTuple(bindings){
return (new datascript.parser.BindTuple(bindings,null,null,null));
});

datascript.parser.map__GT_BindTuple = (function datascript$parser$map__GT_BindTuple(G__25729){
return (new datascript.parser.BindTuple(new cljs.core.Keyword(null,"bindings","bindings",1271397192).cljs$core$IFn$_invoke$arity$1(G__25729),null,cljs.core.dissoc.call(null,G__25729,new cljs.core.Keyword(null,"bindings","bindings",1271397192)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.BindColl = (function (binding,__meta,__extmap,__hash){
this.binding = binding;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.BindColl.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__16990__auto__,k__16991__auto__){
var self__ = this;
var this__16990__auto____$1 = this;
return cljs.core._lookup.call(null,this__16990__auto____$1,k__16991__auto__,null);
});

datascript.parser.BindColl.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__16992__auto__,k25739,else__16993__auto__){
var self__ = this;
var this__16992__auto____$1 = this;
var G__25741 = (((k25739 instanceof cljs.core.Keyword))?k25739.fqn:null);
switch (G__25741) {
case "binding":
return self__.binding;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k25739,else__16993__auto__);

}
});

datascript.parser.BindColl.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__17004__auto__,writer__17005__auto__,opts__17006__auto__){
var self__ = this;
var this__17004__auto____$1 = this;
var pr_pair__17007__auto__ = ((function (this__17004__auto____$1){
return (function (keyval__17008__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__17005__auto__,cljs.core.pr_writer,""," ","",opts__17006__auto__,keyval__17008__auto__);
});})(this__17004__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__17005__auto__,pr_pair__17007__auto__,"#datascript.parser.BindColl{",", ","}",opts__17006__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"binding","binding",539932593),self__.binding],null))], null),self__.__extmap));
});

datascript.parser.BindColl.prototype.cljs$core$IIterable$ = true;

datascript.parser.BindColl.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__25738){
var self__ = this;
var G__25738__$1 = this;
return (new cljs.core.RecordIter((0),G__25738__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"binding","binding",539932593)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.BindColl.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__16988__auto__){
var self__ = this;
var this__16988__auto____$1 = this;
return self__.__meta;
});

datascript.parser.BindColl.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__16984__auto__){
var self__ = this;
var this__16984__auto____$1 = this;
return (new datascript.parser.BindColl(self__.binding,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.BindColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__16994__auto__){
var self__ = this;
var this__16994__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.BindColl.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__16985__auto__){
var self__ = this;
var this__16985__auto____$1 = this;
var h__16810__auto__ = self__.__hash;
if(!((h__16810__auto__ == null))){
return h__16810__auto__;
} else {
var h__16810__auto____$1 = cljs.core.hash_imap.call(null,this__16985__auto____$1);
self__.__hash = h__16810__auto____$1;

return h__16810__auto____$1;
}
});

datascript.parser.BindColl.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__16986__auto__,other__16987__auto__){
var self__ = this;
var this__16986__auto____$1 = this;
if(cljs.core.truth_((function (){var and__16363__auto__ = other__16987__auto__;
if(cljs.core.truth_(and__16363__auto__)){
var and__16363__auto____$1 = (this__16986__auto____$1.constructor === other__16987__auto__.constructor);
if(and__16363__auto____$1){
return cljs.core.equiv_map.call(null,this__16986__auto____$1,other__16987__auto__);
} else {
return and__16363__auto____$1;
}
} else {
return and__16363__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.BindColl.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__16999__auto__,k__17000__auto__){
var self__ = this;
var this__16999__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"binding","binding",539932593),null], null), null),k__17000__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__16999__auto____$1),self__.__meta),k__17000__auto__);
} else {
return (new datascript.parser.BindColl(self__.binding,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__17000__auto__)),null));
}
});

datascript.parser.BindColl.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__16997__auto__,k__16998__auto__,G__25738){
var self__ = this;
var this__16997__auto____$1 = this;
var pred__25742 = cljs.core.keyword_identical_QMARK_;
var expr__25743 = k__16998__auto__;
if(cljs.core.truth_(pred__25742.call(null,new cljs.core.Keyword(null,"binding","binding",539932593),expr__25743))){
return (new datascript.parser.BindColl(G__25738,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.BindColl(self__.binding,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__16998__auto__,G__25738),null));
}
});

datascript.parser.BindColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__17002__auto__){
var self__ = this;
var this__17002__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"binding","binding",539932593),self__.binding],null))], null),self__.__extmap));
});

datascript.parser.BindColl.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__16989__auto__,G__25738){
var self__ = this;
var this__16989__auto____$1 = this;
return (new datascript.parser.BindColl(self__.binding,G__25738,self__.__extmap,self__.__hash));
});

datascript.parser.BindColl.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__16995__auto__,entry__16996__auto__){
var self__ = this;
var this__16995__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__16996__auto__)){
return cljs.core._assoc.call(null,this__16995__auto____$1,cljs.core._nth.call(null,entry__16996__auto__,(0)),cljs.core._nth.call(null,entry__16996__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__16995__auto____$1,entry__16996__auto__);
}
});

datascript.parser.BindColl.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.BindColl.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__20299__auto__,f25735){
var self__ = this;
var this__20299__auto____$1 = this;
var new__20300__auto__ = (new datascript.parser.BindColl(datascript.parser.postwalk.call(null,self__.binding,f25735),null,null,null));
var temp__4423__auto__ = cljs.core.meta.call(null,this__20299__auto____$1);
if(cljs.core.truth_(temp__4423__auto__)){
var meta__20301__auto__ = temp__4423__auto__;
return cljs.core.with_meta.call(null,new__20300__auto__,meta__20301__auto__);
} else {
return new__20300__auto__;
}
});

datascript.parser.BindColl.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___20302__auto__,pred25736,acc25737){
var self__ = this;
var ___20302__auto____$1 = this;
return datascript.parser.collect.call(null,pred25736,self__.binding,acc25737);
});

datascript.parser.BindColl.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___20302__auto__,acc25737){
var self__ = this;
var ___20302__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,acc25737,self__.binding);
});

datascript.parser.BindColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"binding","binding",-2114503176,null)], null);
});

datascript.parser.BindColl.cljs$lang$type = true;

datascript.parser.BindColl.cljs$lang$ctorPrSeq = (function (this__17024__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/BindColl");
});

datascript.parser.BindColl.cljs$lang$ctorPrWriter = (function (this__17024__auto__,writer__17025__auto__){
return cljs.core._write.call(null,writer__17025__auto__,"datascript.parser/BindColl");
});

datascript.parser.__GT_BindColl = (function datascript$parser$__GT_BindColl(binding){
return (new datascript.parser.BindColl(binding,null,null,null));
});

datascript.parser.map__GT_BindColl = (function datascript$parser$map__GT_BindColl(G__25740){
return (new datascript.parser.BindColl(new cljs.core.Keyword(null,"binding","binding",539932593).cljs$core$IFn$_invoke$arity$1(G__25740),null,cljs.core.dissoc.call(null,G__25740,new cljs.core.Keyword(null,"binding","binding",539932593)),null));
});

datascript.parser.parse_binding;
datascript.parser.parse_bind_ignore = (function datascript$parser$parse_bind_ignore(form){
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"_","_",-1201019570,null),form)){
return datascript.parser.with_source.call(null,(new datascript.parser.BindIgnore(null,null,null)),form);
} else {
return null;
}
});
datascript.parser.parse_bind_scalar = (function datascript$parser$parse_bind_scalar(form){
var temp__4425__auto__ = datascript.parser.parse_variable.call(null,form);
if(cljs.core.truth_(temp__4425__auto__)){
var var$ = temp__4425__auto__;
return datascript.parser.with_source.call(null,(new datascript.parser.BindScalar(var$,null,null,null)),form);
} else {
return null;
}
});
datascript.parser.parse_bind_coll = (function datascript$parser$parse_bind_coll(form){
if(cljs.core.truth_((function (){var and__16363__auto__ = datascript.parser.of_size_QMARK_.call(null,form,(2));
if(cljs.core.truth_(and__16363__auto__)){
return cljs.core._EQ_.call(null,cljs.core.second.call(null,form),new cljs.core.Symbol(null,"...","...",-1926939749,null));
} else {
return and__16363__auto__;
}
})())){
var temp__4423__auto__ = datascript.parser.parse_binding.call(null,cljs.core.first.call(null,form));
if(cljs.core.truth_(temp__4423__auto__)){
var sub_bind = temp__4423__auto__;
return datascript.parser.with_source.call(null,(new datascript.parser.BindColl(sub_bind,null,null,null)),form);
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse collection binding")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","binding","parser/binding",-346395752),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
} else {
return null;
}
});
datascript.parser.parse_tuple_el = (function datascript$parser$parse_tuple_el(form){
var or__16375__auto__ = datascript.parser.parse_bind_ignore.call(null,form);
if(cljs.core.truth_(or__16375__auto__)){
return or__16375__auto__;
} else {
return datascript.parser.parse_binding.call(null,form);
}
});
datascript.parser.parse_bind_tuple = (function datascript$parser$parse_bind_tuple(form){
var temp__4425__auto__ = datascript.parser.parse_seq.call(null,datascript.parser.parse_tuple_el,form);
if(cljs.core.truth_(temp__4425__auto__)){
var sub_bindings = temp__4425__auto__;
if(!(cljs.core.empty_QMARK_.call(null,sub_bindings))){
return datascript.parser.with_source.call(null,(new datascript.parser.BindTuple(sub_bindings,null,null,null)),form);
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Tuple binding cannot be empty")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","binding","parser/binding",-346395752),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
} else {
return null;
}
});
datascript.parser.parse_bind_rel = (function datascript$parser$parse_bind_rel(form){
if(cljs.core.truth_((function (){var and__16363__auto__ = datascript.parser.of_size_QMARK_.call(null,form,(1));
if(cljs.core.truth_(and__16363__auto__)){
return cljs.core.sequential_QMARK_.call(null,cljs.core.first.call(null,form));
} else {
return and__16363__auto__;
}
})())){
return datascript.parser.with_source.call(null,(new datascript.parser.BindColl(datascript.parser.parse_bind_tuple.call(null,cljs.core.first.call(null,form)),null,null,null)),form);
} else {
return null;
}
});
datascript.parser.parse_binding = (function datascript$parser$parse_binding(form){
var or__16375__auto__ = datascript.parser.parse_bind_coll.call(null,form);
if(cljs.core.truth_(or__16375__auto__)){
return or__16375__auto__;
} else {
var or__16375__auto____$1 = datascript.parser.parse_bind_rel.call(null,form);
if(cljs.core.truth_(or__16375__auto____$1)){
return or__16375__auto____$1;
} else {
var or__16375__auto____$2 = datascript.parser.parse_bind_tuple.call(null,form);
if(cljs.core.truth_(or__16375__auto____$2)){
return or__16375__auto____$2;
} else {
var or__16375__auto____$3 = datascript.parser.parse_bind_ignore.call(null,form);
if(cljs.core.truth_(or__16375__auto____$3)){
return or__16375__auto____$3;
} else {
var or__16375__auto____$4 = datascript.parser.parse_bind_scalar.call(null,form);
if(cljs.core.truth_(or__16375__auto____$4)){
return or__16375__auto____$4;
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse binding, expected (bind-scalar | bind-tuple | bind-coll | bind-rel)")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","binding","parser/binding",-346395752),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
}
}
}
}
});

/**
 * @interface
 */
datascript.parser.IFindVars = function(){};

datascript.parser._find_vars = (function datascript$parser$_find_vars(this$){
if((!((this$ == null))) && (!((this$.datascript$parser$IFindVars$_find_vars$arity$1 == null)))){
return this$.datascript$parser$IFindVars$_find_vars$arity$1(this$);
} else {
var x__17031__auto__ = (((this$ == null))?null:this$);
var m__17032__auto__ = (datascript.parser._find_vars[goog.typeOf(x__17031__auto__)]);
if(!((m__17032__auto__ == null))){
return m__17032__auto__.call(null,this$);
} else {
var m__17032__auto____$1 = (datascript.parser._find_vars["_"]);
if(!((m__17032__auto____$1 == null))){
return m__17032__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IFindVars.-find-vars",this$);
}
}
}
});

datascript.parser.Variable.prototype.datascript$parser$IFindVars$ = true;

datascript.parser.Variable.prototype.datascript$parser$IFindVars$_find_vars$arity$1 = (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1.symbol], null);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {datascript.parser.IFindVars}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.Aggregate = (function (fn,args,__meta,__extmap,__hash){
this.fn = fn;
this.args = args;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.Aggregate.prototype.datascript$parser$IFindVars$ = true;

datascript.parser.Aggregate.prototype.datascript$parser$IFindVars$_find_vars$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return datascript.parser._find_vars.call(null,cljs.core.last.call(null,self__.args));
});

datascript.parser.Aggregate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__16990__auto__,k__16991__auto__){
var self__ = this;
var this__16990__auto____$1 = this;
return cljs.core._lookup.call(null,this__16990__auto____$1,k__16991__auto__,null);
});

datascript.parser.Aggregate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__16992__auto__,k25750,else__16993__auto__){
var self__ = this;
var this__16992__auto____$1 = this;
var G__25752 = (((k25750 instanceof cljs.core.Keyword))?k25750.fqn:null);
switch (G__25752) {
case "fn":
return self__.fn;

break;
case "args":
return self__.args;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k25750,else__16993__auto__);

}
});

datascript.parser.Aggregate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__17004__auto__,writer__17005__auto__,opts__17006__auto__){
var self__ = this;
var this__17004__auto____$1 = this;
var pr_pair__17007__auto__ = ((function (this__17004__auto____$1){
return (function (keyval__17008__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__17005__auto__,cljs.core.pr_writer,""," ","",opts__17006__auto__,keyval__17008__auto__);
});})(this__17004__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__17005__auto__,pr_pair__17007__auto__,"#datascript.parser.Aggregate{",", ","}",opts__17006__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"args","args",1315556576),self__.args],null))], null),self__.__extmap));
});

datascript.parser.Aggregate.prototype.cljs$core$IIterable$ = true;

datascript.parser.Aggregate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__25749){
var self__ = this;
var G__25749__$1 = this;
return (new cljs.core.RecordIter((0),G__25749__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"args","args",1315556576)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.Aggregate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__16988__auto__){
var self__ = this;
var this__16988__auto____$1 = this;
return self__.__meta;
});

datascript.parser.Aggregate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__16984__auto__){
var self__ = this;
var this__16984__auto____$1 = this;
return (new datascript.parser.Aggregate(self__.fn,self__.args,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.Aggregate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__16994__auto__){
var self__ = this;
var this__16994__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.Aggregate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__16985__auto__){
var self__ = this;
var this__16985__auto____$1 = this;
var h__16810__auto__ = self__.__hash;
if(!((h__16810__auto__ == null))){
return h__16810__auto__;
} else {
var h__16810__auto____$1 = cljs.core.hash_imap.call(null,this__16985__auto____$1);
self__.__hash = h__16810__auto____$1;

return h__16810__auto____$1;
}
});

datascript.parser.Aggregate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__16986__auto__,other__16987__auto__){
var self__ = this;
var this__16986__auto____$1 = this;
if(cljs.core.truth_((function (){var and__16363__auto__ = other__16987__auto__;
if(cljs.core.truth_(and__16363__auto__)){
var and__16363__auto____$1 = (this__16986__auto____$1.constructor === other__16987__auto__.constructor);
if(and__16363__auto____$1){
return cljs.core.equiv_map.call(null,this__16986__auto____$1,other__16987__auto__);
} else {
return and__16363__auto____$1;
}
} else {
return and__16363__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.Aggregate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__16999__auto__,k__17000__auto__){
var self__ = this;
var this__16999__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"args","args",1315556576),null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null], null), null),k__17000__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__16999__auto____$1),self__.__meta),k__17000__auto__);
} else {
return (new datascript.parser.Aggregate(self__.fn,self__.args,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__17000__auto__)),null));
}
});

datascript.parser.Aggregate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__16997__auto__,k__16998__auto__,G__25749){
var self__ = this;
var this__16997__auto____$1 = this;
var pred__25753 = cljs.core.keyword_identical_QMARK_;
var expr__25754 = k__16998__auto__;
if(cljs.core.truth_(pred__25753.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__25754))){
return (new datascript.parser.Aggregate(G__25749,self__.args,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__25753.call(null,new cljs.core.Keyword(null,"args","args",1315556576),expr__25754))){
return (new datascript.parser.Aggregate(self__.fn,G__25749,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Aggregate(self__.fn,self__.args,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__16998__auto__,G__25749),null));
}
}
});

datascript.parser.Aggregate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__17002__auto__){
var self__ = this;
var this__17002__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"args","args",1315556576),self__.args],null))], null),self__.__extmap));
});

datascript.parser.Aggregate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__16989__auto__,G__25749){
var self__ = this;
var this__16989__auto____$1 = this;
return (new datascript.parser.Aggregate(self__.fn,self__.args,G__25749,self__.__extmap,self__.__hash));
});

datascript.parser.Aggregate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__16995__auto__,entry__16996__auto__){
var self__ = this;
var this__16995__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__16996__auto__)){
return cljs.core._assoc.call(null,this__16995__auto____$1,cljs.core._nth.call(null,entry__16996__auto__,(0)),cljs.core._nth.call(null,entry__16996__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__16995__auto____$1,entry__16996__auto__);
}
});

datascript.parser.Aggregate.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.Aggregate.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__20299__auto__,f25746){
var self__ = this;
var this__20299__auto____$1 = this;
var new__20300__auto__ = (new datascript.parser.Aggregate(datascript.parser.postwalk.call(null,self__.fn,f25746),datascript.parser.postwalk.call(null,self__.args,f25746),null,null,null));
var temp__4423__auto__ = cljs.core.meta.call(null,this__20299__auto____$1);
if(cljs.core.truth_(temp__4423__auto__)){
var meta__20301__auto__ = temp__4423__auto__;
return cljs.core.with_meta.call(null,new__20300__auto__,meta__20301__auto__);
} else {
return new__20300__auto__;
}
});

datascript.parser.Aggregate.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___20302__auto__,pred25747,acc25748){
var self__ = this;
var ___20302__auto____$1 = this;
return datascript.parser.collect.call(null,pred25747,self__.args,datascript.parser.collect.call(null,pred25747,self__.fn,acc25748));
});

datascript.parser.Aggregate.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___20302__auto__,acc25748){
var self__ = this;
var ___20302__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,acc25748,self__.fn),self__.args);
});

datascript.parser.Aggregate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"args","args",-1338879193,null)], null);
});

datascript.parser.Aggregate.cljs$lang$type = true;

datascript.parser.Aggregate.cljs$lang$ctorPrSeq = (function (this__17024__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/Aggregate");
});

datascript.parser.Aggregate.cljs$lang$ctorPrWriter = (function (this__17024__auto__,writer__17025__auto__){
return cljs.core._write.call(null,writer__17025__auto__,"datascript.parser/Aggregate");
});

datascript.parser.__GT_Aggregate = (function datascript$parser$__GT_Aggregate(fn,args){
return (new datascript.parser.Aggregate(fn,args,null,null,null));
});

datascript.parser.map__GT_Aggregate = (function datascript$parser$map__GT_Aggregate(G__25751){
return (new datascript.parser.Aggregate(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__25751),new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(G__25751),null,cljs.core.dissoc.call(null,G__25751,new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"args","args",1315556576)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {datascript.parser.IFindVars}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.Pull = (function (source,variable,pattern,__meta,__extmap,__hash){
this.source = source;
this.variable = variable;
this.pattern = pattern;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.Pull.prototype.datascript$parser$IFindVars$ = true;

datascript.parser.Pull.prototype.datascript$parser$IFindVars$_find_vars$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return datascript.parser._find_vars.call(null,self__.variable);
});

datascript.parser.Pull.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__16990__auto__,k__16991__auto__){
var self__ = this;
var this__16990__auto____$1 = this;
return cljs.core._lookup.call(null,this__16990__auto____$1,k__16991__auto__,null);
});

datascript.parser.Pull.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__16992__auto__,k25761,else__16993__auto__){
var self__ = this;
var this__16992__auto____$1 = this;
var G__25763 = (((k25761 instanceof cljs.core.Keyword))?k25761.fqn:null);
switch (G__25763) {
case "source":
return self__.source;

break;
case "variable":
return self__.variable;

break;
case "pattern":
return self__.pattern;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k25761,else__16993__auto__);

}
});

datascript.parser.Pull.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__17004__auto__,writer__17005__auto__,opts__17006__auto__){
var self__ = this;
var this__17004__auto____$1 = this;
var pr_pair__17007__auto__ = ((function (this__17004__auto____$1){
return (function (keyval__17008__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__17005__auto__,cljs.core.pr_writer,""," ","",opts__17006__auto__,keyval__17008__auto__);
});})(this__17004__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__17005__auto__,pr_pair__17007__auto__,"#datascript.parser.Pull{",", ","}",opts__17006__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source","source",-433931539),self__.source],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"variable","variable",-281346492),self__.variable],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pattern","pattern",242135423),self__.pattern],null))], null),self__.__extmap));
});

datascript.parser.Pull.prototype.cljs$core$IIterable$ = true;

datascript.parser.Pull.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__25760){
var self__ = this;
var G__25760__$1 = this;
return (new cljs.core.RecordIter((0),G__25760__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"variable","variable",-281346492),new cljs.core.Keyword(null,"pattern","pattern",242135423)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.Pull.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__16988__auto__){
var self__ = this;
var this__16988__auto____$1 = this;
return self__.__meta;
});

datascript.parser.Pull.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__16984__auto__){
var self__ = this;
var this__16984__auto____$1 = this;
return (new datascript.parser.Pull(self__.source,self__.variable,self__.pattern,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.Pull.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__16994__auto__){
var self__ = this;
var this__16994__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.Pull.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__16985__auto__){
var self__ = this;
var this__16985__auto____$1 = this;
var h__16810__auto__ = self__.__hash;
if(!((h__16810__auto__ == null))){
return h__16810__auto__;
} else {
var h__16810__auto____$1 = cljs.core.hash_imap.call(null,this__16985__auto____$1);
self__.__hash = h__16810__auto____$1;

return h__16810__auto____$1;
}
});

datascript.parser.Pull.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__16986__auto__,other__16987__auto__){
var self__ = this;
var this__16986__auto____$1 = this;
if(cljs.core.truth_((function (){var and__16363__auto__ = other__16987__auto__;
if(cljs.core.truth_(and__16363__auto__)){
var and__16363__auto____$1 = (this__16986__auto____$1.constructor === other__16987__auto__.constructor);
if(and__16363__auto____$1){
return cljs.core.equiv_map.call(null,this__16986__auto____$1,other__16987__auto__);
} else {
return and__16363__auto____$1;
}
} else {
return and__16363__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.Pull.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__16999__auto__,k__17000__auto__){
var self__ = this;
var this__16999__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"variable","variable",-281346492),null,new cljs.core.Keyword(null,"source","source",-433931539),null,new cljs.core.Keyword(null,"pattern","pattern",242135423),null], null), null),k__17000__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__16999__auto____$1),self__.__meta),k__17000__auto__);
} else {
return (new datascript.parser.Pull(self__.source,self__.variable,self__.pattern,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__17000__auto__)),null));
}
});

datascript.parser.Pull.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__16997__auto__,k__16998__auto__,G__25760){
var self__ = this;
var this__16997__auto____$1 = this;
var pred__25764 = cljs.core.keyword_identical_QMARK_;
var expr__25765 = k__16998__auto__;
if(cljs.core.truth_(pred__25764.call(null,new cljs.core.Keyword(null,"source","source",-433931539),expr__25765))){
return (new datascript.parser.Pull(G__25760,self__.variable,self__.pattern,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__25764.call(null,new cljs.core.Keyword(null,"variable","variable",-281346492),expr__25765))){
return (new datascript.parser.Pull(self__.source,G__25760,self__.pattern,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__25764.call(null,new cljs.core.Keyword(null,"pattern","pattern",242135423),expr__25765))){
return (new datascript.parser.Pull(self__.source,self__.variable,G__25760,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Pull(self__.source,self__.variable,self__.pattern,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__16998__auto__,G__25760),null));
}
}
}
});

datascript.parser.Pull.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__17002__auto__){
var self__ = this;
var this__17002__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source","source",-433931539),self__.source],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"variable","variable",-281346492),self__.variable],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pattern","pattern",242135423),self__.pattern],null))], null),self__.__extmap));
});

datascript.parser.Pull.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__16989__auto__,G__25760){
var self__ = this;
var this__16989__auto____$1 = this;
return (new datascript.parser.Pull(self__.source,self__.variable,self__.pattern,G__25760,self__.__extmap,self__.__hash));
});

datascript.parser.Pull.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__16995__auto__,entry__16996__auto__){
var self__ = this;
var this__16995__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__16996__auto__)){
return cljs.core._assoc.call(null,this__16995__auto____$1,cljs.core._nth.call(null,entry__16996__auto__,(0)),cljs.core._nth.call(null,entry__16996__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__16995__auto____$1,entry__16996__auto__);
}
});

datascript.parser.Pull.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.Pull.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__20299__auto__,f25757){
var self__ = this;
var this__20299__auto____$1 = this;
var new__20300__auto__ = (new datascript.parser.Pull(datascript.parser.postwalk.call(null,self__.source,f25757),datascript.parser.postwalk.call(null,self__.variable,f25757),datascript.parser.postwalk.call(null,self__.pattern,f25757),null,null,null));
var temp__4423__auto__ = cljs.core.meta.call(null,this__20299__auto____$1);
if(cljs.core.truth_(temp__4423__auto__)){
var meta__20301__auto__ = temp__4423__auto__;
return cljs.core.with_meta.call(null,new__20300__auto__,meta__20301__auto__);
} else {
return new__20300__auto__;
}
});

datascript.parser.Pull.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___20302__auto__,pred25758,acc25759){
var self__ = this;
var ___20302__auto____$1 = this;
return datascript.parser.collect.call(null,pred25758,self__.pattern,datascript.parser.collect.call(null,pred25758,self__.variable,datascript.parser.collect.call(null,pred25758,self__.source,acc25759)));
});

datascript.parser.Pull.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___20302__auto__,acc25759){
var self__ = this;
var ___20302__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,acc25759,self__.source),self__.variable),self__.pattern);
});

datascript.parser.Pull.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"source","source",1206599988,null),new cljs.core.Symbol(null,"variable","variable",1359185035,null),new cljs.core.Symbol(null,"pattern","pattern",1882666950,null)], null);
});

datascript.parser.Pull.cljs$lang$type = true;

datascript.parser.Pull.cljs$lang$ctorPrSeq = (function (this__17024__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/Pull");
});

datascript.parser.Pull.cljs$lang$ctorPrWriter = (function (this__17024__auto__,writer__17025__auto__){
return cljs.core._write.call(null,writer__17025__auto__,"datascript.parser/Pull");
});

datascript.parser.__GT_Pull = (function datascript$parser$__GT_Pull(source,variable,pattern){
return (new datascript.parser.Pull(source,variable,pattern,null,null,null));
});

datascript.parser.map__GT_Pull = (function datascript$parser$map__GT_Pull(G__25762){
return (new datascript.parser.Pull(new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(G__25762),new cljs.core.Keyword(null,"variable","variable",-281346492).cljs$core$IFn$_invoke$arity$1(G__25762),new cljs.core.Keyword(null,"pattern","pattern",242135423).cljs$core$IFn$_invoke$arity$1(G__25762),null,cljs.core.dissoc.call(null,G__25762,new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"variable","variable",-281346492),new cljs.core.Keyword(null,"pattern","pattern",242135423)),null));
});


/**
 * @interface
 */
datascript.parser.IFindElements = function(){};

datascript.parser.find_elements = (function datascript$parser$find_elements(this$){
if((!((this$ == null))) && (!((this$.datascript$parser$IFindElements$find_elements$arity$1 == null)))){
return this$.datascript$parser$IFindElements$find_elements$arity$1(this$);
} else {
var x__17031__auto__ = (((this$ == null))?null:this$);
var m__17032__auto__ = (datascript.parser.find_elements[goog.typeOf(x__17031__auto__)]);
if(!((m__17032__auto__ == null))){
return m__17032__auto__.call(null,this$);
} else {
var m__17032__auto____$1 = (datascript.parser.find_elements["_"]);
if(!((m__17032__auto____$1 == null))){
return m__17032__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IFindElements.find-elements",this$);
}
}
}
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {datascript.parser.IFindElements}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.FindRel = (function (elements,__meta,__extmap,__hash){
this.elements = elements;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.FindRel.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__16990__auto__,k__16991__auto__){
var self__ = this;
var this__16990__auto____$1 = this;
return cljs.core._lookup.call(null,this__16990__auto____$1,k__16991__auto__,null);
});

datascript.parser.FindRel.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__16992__auto__,k25772,else__16993__auto__){
var self__ = this;
var this__16992__auto____$1 = this;
var G__25774 = (((k25772 instanceof cljs.core.Keyword))?k25772.fqn:null);
switch (G__25774) {
case "elements":
return self__.elements;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k25772,else__16993__auto__);

}
});

datascript.parser.FindRel.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__17004__auto__,writer__17005__auto__,opts__17006__auto__){
var self__ = this;
var this__17004__auto____$1 = this;
var pr_pair__17007__auto__ = ((function (this__17004__auto____$1){
return (function (keyval__17008__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__17005__auto__,cljs.core.pr_writer,""," ","",opts__17006__auto__,keyval__17008__auto__);
});})(this__17004__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__17005__auto__,pr_pair__17007__auto__,"#datascript.parser.FindRel{",", ","}",opts__17006__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"elements","elements",657646735),self__.elements],null))], null),self__.__extmap));
});

datascript.parser.FindRel.prototype.cljs$core$IIterable$ = true;

datascript.parser.FindRel.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__25771){
var self__ = this;
var G__25771__$1 = this;
return (new cljs.core.RecordIter((0),G__25771__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"elements","elements",657646735)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.FindRel.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__16988__auto__){
var self__ = this;
var this__16988__auto____$1 = this;
return self__.__meta;
});

datascript.parser.FindRel.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__16984__auto__){
var self__ = this;
var this__16984__auto____$1 = this;
return (new datascript.parser.FindRel(self__.elements,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.FindRel.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__16994__auto__){
var self__ = this;
var this__16994__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.FindRel.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__16985__auto__){
var self__ = this;
var this__16985__auto____$1 = this;
var h__16810__auto__ = self__.__hash;
if(!((h__16810__auto__ == null))){
return h__16810__auto__;
} else {
var h__16810__auto____$1 = cljs.core.hash_imap.call(null,this__16985__auto____$1);
self__.__hash = h__16810__auto____$1;

return h__16810__auto____$1;
}
});

datascript.parser.FindRel.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__16986__auto__,other__16987__auto__){
var self__ = this;
var this__16986__auto____$1 = this;
if(cljs.core.truth_((function (){var and__16363__auto__ = other__16987__auto__;
if(cljs.core.truth_(and__16363__auto__)){
var and__16363__auto____$1 = (this__16986__auto____$1.constructor === other__16987__auto__.constructor);
if(and__16363__auto____$1){
return cljs.core.equiv_map.call(null,this__16986__auto____$1,other__16987__auto__);
} else {
return and__16363__auto____$1;
}
} else {
return and__16363__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.FindRel.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__16999__auto__,k__17000__auto__){
var self__ = this;
var this__16999__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"elements","elements",657646735),null], null), null),k__17000__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__16999__auto____$1),self__.__meta),k__17000__auto__);
} else {
return (new datascript.parser.FindRel(self__.elements,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__17000__auto__)),null));
}
});

datascript.parser.FindRel.prototype.datascript$parser$IFindElements$ = true;

datascript.parser.FindRel.prototype.datascript$parser$IFindElements$find_elements$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.elements;
});

datascript.parser.FindRel.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__16997__auto__,k__16998__auto__,G__25771){
var self__ = this;
var this__16997__auto____$1 = this;
var pred__25775 = cljs.core.keyword_identical_QMARK_;
var expr__25776 = k__16998__auto__;
if(cljs.core.truth_(pred__25775.call(null,new cljs.core.Keyword(null,"elements","elements",657646735),expr__25776))){
return (new datascript.parser.FindRel(G__25771,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.FindRel(self__.elements,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__16998__auto__,G__25771),null));
}
});

datascript.parser.FindRel.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__17002__auto__){
var self__ = this;
var this__17002__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"elements","elements",657646735),self__.elements],null))], null),self__.__extmap));
});

datascript.parser.FindRel.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__16989__auto__,G__25771){
var self__ = this;
var this__16989__auto____$1 = this;
return (new datascript.parser.FindRel(self__.elements,G__25771,self__.__extmap,self__.__hash));
});

datascript.parser.FindRel.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__16995__auto__,entry__16996__auto__){
var self__ = this;
var this__16995__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__16996__auto__)){
return cljs.core._assoc.call(null,this__16995__auto____$1,cljs.core._nth.call(null,entry__16996__auto__,(0)),cljs.core._nth.call(null,entry__16996__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__16995__auto____$1,entry__16996__auto__);
}
});

datascript.parser.FindRel.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.FindRel.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__20299__auto__,f25768){
var self__ = this;
var this__20299__auto____$1 = this;
var new__20300__auto__ = (new datascript.parser.FindRel(datascript.parser.postwalk.call(null,self__.elements,f25768),null,null,null));
var temp__4423__auto__ = cljs.core.meta.call(null,this__20299__auto____$1);
if(cljs.core.truth_(temp__4423__auto__)){
var meta__20301__auto__ = temp__4423__auto__;
return cljs.core.with_meta.call(null,new__20300__auto__,meta__20301__auto__);
} else {
return new__20300__auto__;
}
});

datascript.parser.FindRel.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___20302__auto__,pred25769,acc25770){
var self__ = this;
var ___20302__auto____$1 = this;
return datascript.parser.collect.call(null,pred25769,self__.elements,acc25770);
});

datascript.parser.FindRel.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___20302__auto__,acc25770){
var self__ = this;
var ___20302__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,acc25770,self__.elements);
});

datascript.parser.FindRel.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"elements","elements",-1996789034,null)], null);
});

datascript.parser.FindRel.cljs$lang$type = true;

datascript.parser.FindRel.cljs$lang$ctorPrSeq = (function (this__17024__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/FindRel");
});

datascript.parser.FindRel.cljs$lang$ctorPrWriter = (function (this__17024__auto__,writer__17025__auto__){
return cljs.core._write.call(null,writer__17025__auto__,"datascript.parser/FindRel");
});

datascript.parser.__GT_FindRel = (function datascript$parser$__GT_FindRel(elements){
return (new datascript.parser.FindRel(elements,null,null,null));
});

datascript.parser.map__GT_FindRel = (function datascript$parser$map__GT_FindRel(G__25773){
return (new datascript.parser.FindRel(new cljs.core.Keyword(null,"elements","elements",657646735).cljs$core$IFn$_invoke$arity$1(G__25773),null,cljs.core.dissoc.call(null,G__25773,new cljs.core.Keyword(null,"elements","elements",657646735)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {datascript.parser.IFindElements}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.FindColl = (function (element,__meta,__extmap,__hash){
this.element = element;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.FindColl.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__16990__auto__,k__16991__auto__){
var self__ = this;
var this__16990__auto____$1 = this;
return cljs.core._lookup.call(null,this__16990__auto____$1,k__16991__auto__,null);
});

datascript.parser.FindColl.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__16992__auto__,k25783,else__16993__auto__){
var self__ = this;
var this__16992__auto____$1 = this;
var G__25785 = (((k25783 instanceof cljs.core.Keyword))?k25783.fqn:null);
switch (G__25785) {
case "element":
return self__.element;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k25783,else__16993__auto__);

}
});

datascript.parser.FindColl.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__17004__auto__,writer__17005__auto__,opts__17006__auto__){
var self__ = this;
var this__17004__auto____$1 = this;
var pr_pair__17007__auto__ = ((function (this__17004__auto____$1){
return (function (keyval__17008__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__17005__auto__,cljs.core.pr_writer,""," ","",opts__17006__auto__,keyval__17008__auto__);
});})(this__17004__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__17005__auto__,pr_pair__17007__auto__,"#datascript.parser.FindColl{",", ","}",opts__17006__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"element","element",1974019749),self__.element],null))], null),self__.__extmap));
});

datascript.parser.FindColl.prototype.cljs$core$IIterable$ = true;

datascript.parser.FindColl.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__25782){
var self__ = this;
var G__25782__$1 = this;
return (new cljs.core.RecordIter((0),G__25782__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"element","element",1974019749)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.FindColl.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__16988__auto__){
var self__ = this;
var this__16988__auto____$1 = this;
return self__.__meta;
});

datascript.parser.FindColl.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__16984__auto__){
var self__ = this;
var this__16984__auto____$1 = this;
return (new datascript.parser.FindColl(self__.element,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.FindColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__16994__auto__){
var self__ = this;
var this__16994__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.FindColl.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__16985__auto__){
var self__ = this;
var this__16985__auto____$1 = this;
var h__16810__auto__ = self__.__hash;
if(!((h__16810__auto__ == null))){
return h__16810__auto__;
} else {
var h__16810__auto____$1 = cljs.core.hash_imap.call(null,this__16985__auto____$1);
self__.__hash = h__16810__auto____$1;

return h__16810__auto____$1;
}
});

datascript.parser.FindColl.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__16986__auto__,other__16987__auto__){
var self__ = this;
var this__16986__auto____$1 = this;
if(cljs.core.truth_((function (){var and__16363__auto__ = other__16987__auto__;
if(cljs.core.truth_(and__16363__auto__)){
var and__16363__auto____$1 = (this__16986__auto____$1.constructor === other__16987__auto__.constructor);
if(and__16363__auto____$1){
return cljs.core.equiv_map.call(null,this__16986__auto____$1,other__16987__auto__);
} else {
return and__16363__auto____$1;
}
} else {
return and__16363__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.FindColl.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__16999__auto__,k__17000__auto__){
var self__ = this;
var this__16999__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"element","element",1974019749),null], null), null),k__17000__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__16999__auto____$1),self__.__meta),k__17000__auto__);
} else {
return (new datascript.parser.FindColl(self__.element,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__17000__auto__)),null));
}
});

datascript.parser.FindColl.prototype.datascript$parser$IFindElements$ = true;

datascript.parser.FindColl.prototype.datascript$parser$IFindElements$find_elements$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.element], null);
});

datascript.parser.FindColl.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__16997__auto__,k__16998__auto__,G__25782){
var self__ = this;
var this__16997__auto____$1 = this;
var pred__25786 = cljs.core.keyword_identical_QMARK_;
var expr__25787 = k__16998__auto__;
if(cljs.core.truth_(pred__25786.call(null,new cljs.core.Keyword(null,"element","element",1974019749),expr__25787))){
return (new datascript.parser.FindColl(G__25782,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.FindColl(self__.element,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__16998__auto__,G__25782),null));
}
});

datascript.parser.FindColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__17002__auto__){
var self__ = this;
var this__17002__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"element","element",1974019749),self__.element],null))], null),self__.__extmap));
});

datascript.parser.FindColl.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__16989__auto__,G__25782){
var self__ = this;
var this__16989__auto____$1 = this;
return (new datascript.parser.FindColl(self__.element,G__25782,self__.__extmap,self__.__hash));
});

datascript.parser.FindColl.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__16995__auto__,entry__16996__auto__){
var self__ = this;
var this__16995__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__16996__auto__)){
return cljs.core._assoc.call(null,this__16995__auto____$1,cljs.core._nth.call(null,entry__16996__auto__,(0)),cljs.core._nth.call(null,entry__16996__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__16995__auto____$1,entry__16996__auto__);
}
});

datascript.parser.FindColl.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.FindColl.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__20299__auto__,f25779){
var self__ = this;
var this__20299__auto____$1 = this;
var new__20300__auto__ = (new datascript.parser.FindColl(datascript.parser.postwalk.call(null,self__.element,f25779),null,null,null));
var temp__4423__auto__ = cljs.core.meta.call(null,this__20299__auto____$1);
if(cljs.core.truth_(temp__4423__auto__)){
var meta__20301__auto__ = temp__4423__auto__;
return cljs.core.with_meta.call(null,new__20300__auto__,meta__20301__auto__);
} else {
return new__20300__auto__;
}
});

datascript.parser.FindColl.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___20302__auto__,pred25780,acc25781){
var self__ = this;
var ___20302__auto____$1 = this;
return datascript.parser.collect.call(null,pred25780,self__.element,acc25781);
});

datascript.parser.FindColl.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___20302__auto__,acc25781){
var self__ = this;
var ___20302__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,acc25781,self__.element);
});

datascript.parser.FindColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"element","element",-680416020,null)], null);
});

datascript.parser.FindColl.cljs$lang$type = true;

datascript.parser.FindColl.cljs$lang$ctorPrSeq = (function (this__17024__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/FindColl");
});

datascript.parser.FindColl.cljs$lang$ctorPrWriter = (function (this__17024__auto__,writer__17025__auto__){
return cljs.core._write.call(null,writer__17025__auto__,"datascript.parser/FindColl");
});

datascript.parser.__GT_FindColl = (function datascript$parser$__GT_FindColl(element){
return (new datascript.parser.FindColl(element,null,null,null));
});

datascript.parser.map__GT_FindColl = (function datascript$parser$map__GT_FindColl(G__25784){
return (new datascript.parser.FindColl(new cljs.core.Keyword(null,"element","element",1974019749).cljs$core$IFn$_invoke$arity$1(G__25784),null,cljs.core.dissoc.call(null,G__25784,new cljs.core.Keyword(null,"element","element",1974019749)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {datascript.parser.IFindElements}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.FindScalar = (function (element,__meta,__extmap,__hash){
this.element = element;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.FindScalar.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__16990__auto__,k__16991__auto__){
var self__ = this;
var this__16990__auto____$1 = this;
return cljs.core._lookup.call(null,this__16990__auto____$1,k__16991__auto__,null);
});

datascript.parser.FindScalar.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__16992__auto__,k25794,else__16993__auto__){
var self__ = this;
var this__16992__auto____$1 = this;
var G__25796 = (((k25794 instanceof cljs.core.Keyword))?k25794.fqn:null);
switch (G__25796) {
case "element":
return self__.element;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k25794,else__16993__auto__);

}
});

datascript.parser.FindScalar.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__17004__auto__,writer__17005__auto__,opts__17006__auto__){
var self__ = this;
var this__17004__auto____$1 = this;
var pr_pair__17007__auto__ = ((function (this__17004__auto____$1){
return (function (keyval__17008__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__17005__auto__,cljs.core.pr_writer,""," ","",opts__17006__auto__,keyval__17008__auto__);
});})(this__17004__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__17005__auto__,pr_pair__17007__auto__,"#datascript.parser.FindScalar{",", ","}",opts__17006__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"element","element",1974019749),self__.element],null))], null),self__.__extmap));
});

datascript.parser.FindScalar.prototype.cljs$core$IIterable$ = true;

datascript.parser.FindScalar.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__25793){
var self__ = this;
var G__25793__$1 = this;
return (new cljs.core.RecordIter((0),G__25793__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"element","element",1974019749)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.FindScalar.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__16988__auto__){
var self__ = this;
var this__16988__auto____$1 = this;
return self__.__meta;
});

datascript.parser.FindScalar.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__16984__auto__){
var self__ = this;
var this__16984__auto____$1 = this;
return (new datascript.parser.FindScalar(self__.element,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.FindScalar.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__16994__auto__){
var self__ = this;
var this__16994__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.FindScalar.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__16985__auto__){
var self__ = this;
var this__16985__auto____$1 = this;
var h__16810__auto__ = self__.__hash;
if(!((h__16810__auto__ == null))){
return h__16810__auto__;
} else {
var h__16810__auto____$1 = cljs.core.hash_imap.call(null,this__16985__auto____$1);
self__.__hash = h__16810__auto____$1;

return h__16810__auto____$1;
}
});

datascript.parser.FindScalar.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__16986__auto__,other__16987__auto__){
var self__ = this;
var this__16986__auto____$1 = this;
if(cljs.core.truth_((function (){var and__16363__auto__ = other__16987__auto__;
if(cljs.core.truth_(and__16363__auto__)){
var and__16363__auto____$1 = (this__16986__auto____$1.constructor === other__16987__auto__.constructor);
if(and__16363__auto____$1){
return cljs.core.equiv_map.call(null,this__16986__auto____$1,other__16987__auto__);
} else {
return and__16363__auto____$1;
}
} else {
return and__16363__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.FindScalar.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__16999__auto__,k__17000__auto__){
var self__ = this;
var this__16999__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"element","element",1974019749),null], null), null),k__17000__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__16999__auto____$1),self__.__meta),k__17000__auto__);
} else {
return (new datascript.parser.FindScalar(self__.element,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__17000__auto__)),null));
}
});

datascript.parser.FindScalar.prototype.datascript$parser$IFindElements$ = true;

datascript.parser.FindScalar.prototype.datascript$parser$IFindElements$find_elements$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.element], null);
});

datascript.parser.FindScalar.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__16997__auto__,k__16998__auto__,G__25793){
var self__ = this;
var this__16997__auto____$1 = this;
var pred__25797 = cljs.core.keyword_identical_QMARK_;
var expr__25798 = k__16998__auto__;
if(cljs.core.truth_(pred__25797.call(null,new cljs.core.Keyword(null,"element","element",1974019749),expr__25798))){
return (new datascript.parser.FindScalar(G__25793,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.FindScalar(self__.element,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__16998__auto__,G__25793),null));
}
});

datascript.parser.FindScalar.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__17002__auto__){
var self__ = this;
var this__17002__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"element","element",1974019749),self__.element],null))], null),self__.__extmap));
});

datascript.parser.FindScalar.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__16989__auto__,G__25793){
var self__ = this;
var this__16989__auto____$1 = this;
return (new datascript.parser.FindScalar(self__.element,G__25793,self__.__extmap,self__.__hash));
});

datascript.parser.FindScalar.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__16995__auto__,entry__16996__auto__){
var self__ = this;
var this__16995__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__16996__auto__)){
return cljs.core._assoc.call(null,this__16995__auto____$1,cljs.core._nth.call(null,entry__16996__auto__,(0)),cljs.core._nth.call(null,entry__16996__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__16995__auto____$1,entry__16996__auto__);
}
});

datascript.parser.FindScalar.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.FindScalar.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__20299__auto__,f25790){
var self__ = this;
var this__20299__auto____$1 = this;
var new__20300__auto__ = (new datascript.parser.FindScalar(datascript.parser.postwalk.call(null,self__.element,f25790),null,null,null));
var temp__4423__auto__ = cljs.core.meta.call(null,this__20299__auto____$1);
if(cljs.core.truth_(temp__4423__auto__)){
var meta__20301__auto__ = temp__4423__auto__;
return cljs.core.with_meta.call(null,new__20300__auto__,meta__20301__auto__);
} else {
return new__20300__auto__;
}
});

datascript.parser.FindScalar.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___20302__auto__,pred25791,acc25792){
var self__ = this;
var ___20302__auto____$1 = this;
return datascript.parser.collect.call(null,pred25791,self__.element,acc25792);
});

datascript.parser.FindScalar.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___20302__auto__,acc25792){
var self__ = this;
var ___20302__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,acc25792,self__.element);
});

datascript.parser.FindScalar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"element","element",-680416020,null)], null);
});

datascript.parser.FindScalar.cljs$lang$type = true;

datascript.parser.FindScalar.cljs$lang$ctorPrSeq = (function (this__17024__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/FindScalar");
});

datascript.parser.FindScalar.cljs$lang$ctorPrWriter = (function (this__17024__auto__,writer__17025__auto__){
return cljs.core._write.call(null,writer__17025__auto__,"datascript.parser/FindScalar");
});

datascript.parser.__GT_FindScalar = (function datascript$parser$__GT_FindScalar(element){
return (new datascript.parser.FindScalar(element,null,null,null));
});

datascript.parser.map__GT_FindScalar = (function datascript$parser$map__GT_FindScalar(G__25795){
return (new datascript.parser.FindScalar(new cljs.core.Keyword(null,"element","element",1974019749).cljs$core$IFn$_invoke$arity$1(G__25795),null,cljs.core.dissoc.call(null,G__25795,new cljs.core.Keyword(null,"element","element",1974019749)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {datascript.parser.IFindElements}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.FindTuple = (function (elements,__meta,__extmap,__hash){
this.elements = elements;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.FindTuple.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__16990__auto__,k__16991__auto__){
var self__ = this;
var this__16990__auto____$1 = this;
return cljs.core._lookup.call(null,this__16990__auto____$1,k__16991__auto__,null);
});

datascript.parser.FindTuple.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__16992__auto__,k25805,else__16993__auto__){
var self__ = this;
var this__16992__auto____$1 = this;
var G__25807 = (((k25805 instanceof cljs.core.Keyword))?k25805.fqn:null);
switch (G__25807) {
case "elements":
return self__.elements;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k25805,else__16993__auto__);

}
});

datascript.parser.FindTuple.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__17004__auto__,writer__17005__auto__,opts__17006__auto__){
var self__ = this;
var this__17004__auto____$1 = this;
var pr_pair__17007__auto__ = ((function (this__17004__auto____$1){
return (function (keyval__17008__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__17005__auto__,cljs.core.pr_writer,""," ","",opts__17006__auto__,keyval__17008__auto__);
});})(this__17004__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__17005__auto__,pr_pair__17007__auto__,"#datascript.parser.FindTuple{",", ","}",opts__17006__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"elements","elements",657646735),self__.elements],null))], null),self__.__extmap));
});

datascript.parser.FindTuple.prototype.cljs$core$IIterable$ = true;

datascript.parser.FindTuple.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__25804){
var self__ = this;
var G__25804__$1 = this;
return (new cljs.core.RecordIter((0),G__25804__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"elements","elements",657646735)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.FindTuple.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__16988__auto__){
var self__ = this;
var this__16988__auto____$1 = this;
return self__.__meta;
});

datascript.parser.FindTuple.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__16984__auto__){
var self__ = this;
var this__16984__auto____$1 = this;
return (new datascript.parser.FindTuple(self__.elements,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.FindTuple.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__16994__auto__){
var self__ = this;
var this__16994__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.FindTuple.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__16985__auto__){
var self__ = this;
var this__16985__auto____$1 = this;
var h__16810__auto__ = self__.__hash;
if(!((h__16810__auto__ == null))){
return h__16810__auto__;
} else {
var h__16810__auto____$1 = cljs.core.hash_imap.call(null,this__16985__auto____$1);
self__.__hash = h__16810__auto____$1;

return h__16810__auto____$1;
}
});

datascript.parser.FindTuple.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__16986__auto__,other__16987__auto__){
var self__ = this;
var this__16986__auto____$1 = this;
if(cljs.core.truth_((function (){var and__16363__auto__ = other__16987__auto__;
if(cljs.core.truth_(and__16363__auto__)){
var and__16363__auto____$1 = (this__16986__auto____$1.constructor === other__16987__auto__.constructor);
if(and__16363__auto____$1){
return cljs.core.equiv_map.call(null,this__16986__auto____$1,other__16987__auto__);
} else {
return and__16363__auto____$1;
}
} else {
return and__16363__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.FindTuple.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__16999__auto__,k__17000__auto__){
var self__ = this;
var this__16999__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"elements","elements",657646735),null], null), null),k__17000__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__16999__auto____$1),self__.__meta),k__17000__auto__);
} else {
return (new datascript.parser.FindTuple(self__.elements,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__17000__auto__)),null));
}
});

datascript.parser.FindTuple.prototype.datascript$parser$IFindElements$ = true;

datascript.parser.FindTuple.prototype.datascript$parser$IFindElements$find_elements$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.elements;
});

datascript.parser.FindTuple.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__16997__auto__,k__16998__auto__,G__25804){
var self__ = this;
var this__16997__auto____$1 = this;
var pred__25808 = cljs.core.keyword_identical_QMARK_;
var expr__25809 = k__16998__auto__;
if(cljs.core.truth_(pred__25808.call(null,new cljs.core.Keyword(null,"elements","elements",657646735),expr__25809))){
return (new datascript.parser.FindTuple(G__25804,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.FindTuple(self__.elements,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__16998__auto__,G__25804),null));
}
});

datascript.parser.FindTuple.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__17002__auto__){
var self__ = this;
var this__17002__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"elements","elements",657646735),self__.elements],null))], null),self__.__extmap));
});

datascript.parser.FindTuple.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__16989__auto__,G__25804){
var self__ = this;
var this__16989__auto____$1 = this;
return (new datascript.parser.FindTuple(self__.elements,G__25804,self__.__extmap,self__.__hash));
});

datascript.parser.FindTuple.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__16995__auto__,entry__16996__auto__){
var self__ = this;
var this__16995__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__16996__auto__)){
return cljs.core._assoc.call(null,this__16995__auto____$1,cljs.core._nth.call(null,entry__16996__auto__,(0)),cljs.core._nth.call(null,entry__16996__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__16995__auto____$1,entry__16996__auto__);
}
});

datascript.parser.FindTuple.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.FindTuple.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__20299__auto__,f25801){
var self__ = this;
var this__20299__auto____$1 = this;
var new__20300__auto__ = (new datascript.parser.FindTuple(datascript.parser.postwalk.call(null,self__.elements,f25801),null,null,null));
var temp__4423__auto__ = cljs.core.meta.call(null,this__20299__auto____$1);
if(cljs.core.truth_(temp__4423__auto__)){
var meta__20301__auto__ = temp__4423__auto__;
return cljs.core.with_meta.call(null,new__20300__auto__,meta__20301__auto__);
} else {
return new__20300__auto__;
}
});

datascript.parser.FindTuple.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___20302__auto__,pred25802,acc25803){
var self__ = this;
var ___20302__auto____$1 = this;
return datascript.parser.collect.call(null,pred25802,self__.elements,acc25803);
});

datascript.parser.FindTuple.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___20302__auto__,acc25803){
var self__ = this;
var ___20302__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,acc25803,self__.elements);
});

datascript.parser.FindTuple.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"elements","elements",-1996789034,null)], null);
});

datascript.parser.FindTuple.cljs$lang$type = true;

datascript.parser.FindTuple.cljs$lang$ctorPrSeq = (function (this__17024__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/FindTuple");
});

datascript.parser.FindTuple.cljs$lang$ctorPrWriter = (function (this__17024__auto__,writer__17025__auto__){
return cljs.core._write.call(null,writer__17025__auto__,"datascript.parser/FindTuple");
});

datascript.parser.__GT_FindTuple = (function datascript$parser$__GT_FindTuple(elements){
return (new datascript.parser.FindTuple(elements,null,null,null));
});

datascript.parser.map__GT_FindTuple = (function datascript$parser$map__GT_FindTuple(G__25806){
return (new datascript.parser.FindTuple(new cljs.core.Keyword(null,"elements","elements",657646735).cljs$core$IFn$_invoke$arity$1(G__25806),null,cljs.core.dissoc.call(null,G__25806,new cljs.core.Keyword(null,"elements","elements",657646735)),null));
});

datascript.parser.find_vars = (function datascript$parser$find_vars(find){
return cljs.core.mapcat.call(null,datascript.parser._find_vars,datascript.parser.find_elements.call(null,find));
});
datascript.parser.aggregate_QMARK_ = (function datascript$parser$aggregate_QMARK_(element){
return (element instanceof datascript.parser.Aggregate);
});
datascript.parser.pull_QMARK_ = (function datascript$parser$pull_QMARK_(element){
return (element instanceof datascript.parser.Pull);
});
datascript.parser.parse_aggregate = (function datascript$parser$parse_aggregate(form){
if((cljs.core.sequential_QMARK_.call(null,form)) && ((cljs.core.count.call(null,form) >= (2)))){
var vec__25813 = form;
var fn = cljs.core.nth.call(null,vec__25813,(0),null);
var args = cljs.core.nthnext.call(null,vec__25813,(1));
var fn_STAR_ = datascript.parser.parse_plain_symbol.call(null,fn);
var args_STAR_ = datascript.parser.parse_seq.call(null,datascript.parser.parse_fn_arg,args);
if(cljs.core.truth_((function (){var and__16363__auto__ = fn_STAR_;
if(cljs.core.truth_(and__16363__auto__)){
return args_STAR_;
} else {
return and__16363__auto__;
}
})())){
return (new datascript.parser.Aggregate(fn_STAR_,args_STAR_,null,null,null));
} else {
return null;
}
} else {
return null;
}
});
datascript.parser.parse_aggregate_custom = (function datascript$parser$parse_aggregate_custom(form){
if((cljs.core.sequential_QMARK_.call(null,form)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,form),new cljs.core.Symbol(null,"aggregate","aggregate",-1142967327,null)))){
if((cljs.core.count.call(null,form) >= (3))){
var vec__25815 = form;
var _ = cljs.core.nth.call(null,vec__25815,(0),null);
var fn = cljs.core.nth.call(null,vec__25815,(1),null);
var args = cljs.core.nthnext.call(null,vec__25815,(2));
var fn_STAR_ = datascript.parser.parse_variable.call(null,fn);
var args_STAR_ = datascript.parser.parse_seq.call(null,datascript.parser.parse_fn_arg,args);
if(cljs.core.truth_((function (){var and__16363__auto__ = fn_STAR_;
if(cljs.core.truth_(and__16363__auto__)){
return args_STAR_;
} else {
return and__16363__auto__;
}
})())){
return (new datascript.parser.Aggregate(fn_STAR_,args_STAR_,null,null,null));
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse custom aggregate call, expect ['aggregate' variable fn-arg+]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","find","parser/find",-801023103),new cljs.core.Keyword(null,"fragment","fragment",826775688),form], null));
}
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse custom aggregate call, expect ['aggregate' variable fn-arg+]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","find","parser/find",-801023103),new cljs.core.Keyword(null,"fragment","fragment",826775688),form], null));
}
} else {
return null;
}
});
datascript.parser.parse_pull_expr = (function datascript$parser$parse_pull_expr(form){
if((cljs.core.sequential_QMARK_.call(null,form)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,form),new cljs.core.Symbol(null,"pull","pull",779986722,null)))){
if((((3) <= cljs.core.count.call(null,form))) && ((cljs.core.count.call(null,form) <= (4)))){
var long_QMARK_ = cljs.core._EQ_.call(null,cljs.core.count.call(null,form),(4));
var src = ((long_QMARK_)?cljs.core.nth.call(null,form,(1)):new cljs.core.Symbol(null,"$","$",-1580747756,null));
var vec__25817 = ((long_QMARK_)?cljs.core.nnext.call(null,form):cljs.core.next.call(null,form));
var var$ = cljs.core.nth.call(null,vec__25817,(0),null);
var pattern = cljs.core.nth.call(null,vec__25817,(1),null);
var src_STAR_ = datascript.parser.parse_src_var.call(null,src);
var var_STAR_ = datascript.parser.parse_variable.call(null,var$);
var pattern_STAR_ = (function (){var or__16375__auto__ = datascript.parser.parse_variable.call(null,pattern);
if(cljs.core.truth_(or__16375__auto__)){
return or__16375__auto__;
} else {
return datascript.parser.parse_constant.call(null,pattern);
}
})();
if(cljs.core.truth_((function (){var and__16363__auto__ = src_STAR_;
if(cljs.core.truth_(and__16363__auto__)){
var and__16363__auto____$1 = var_STAR_;
if(cljs.core.truth_(and__16363__auto____$1)){
return pattern_STAR_;
} else {
return and__16363__auto____$1;
}
} else {
return and__16363__auto__;
}
})())){
return (new datascript.parser.Pull(src_STAR_,var_STAR_,pattern_STAR_,null,null,null));
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse pull expression, expect ['pull' src-var? variable (constant | variable)]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","find","parser/find",-801023103),new cljs.core.Keyword(null,"fragment","fragment",826775688),form], null));
}
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse pull expression, expect ['pull' src-var? variable (constant | variable)]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","find","parser/find",-801023103),new cljs.core.Keyword(null,"fragment","fragment",826775688),form], null));
}
} else {
return null;
}
});
datascript.parser.parse_find_elem = (function datascript$parser$parse_find_elem(form){
var or__16375__auto__ = datascript.parser.parse_variable.call(null,form);
if(cljs.core.truth_(or__16375__auto__)){
return or__16375__auto__;
} else {
var or__16375__auto____$1 = datascript.parser.parse_pull_expr.call(null,form);
if(cljs.core.truth_(or__16375__auto____$1)){
return or__16375__auto____$1;
} else {
var or__16375__auto____$2 = datascript.parser.parse_aggregate_custom.call(null,form);
if(cljs.core.truth_(or__16375__auto____$2)){
return or__16375__auto____$2;
} else {
return datascript.parser.parse_aggregate.call(null,form);
}
}
}
});
datascript.parser.parse_find_rel = (function datascript$parser$parse_find_rel(form){
var G__25819 = datascript.parser.parse_seq.call(null,datascript.parser.parse_find_elem,form);
var G__25819__$1 = (((G__25819 == null))?null:(new datascript.parser.FindRel(G__25819,null,null,null)));
return G__25819__$1;
});
datascript.parser.parse_find_coll = (function datascript$parser$parse_find_coll(form){
if((cljs.core.sequential_QMARK_.call(null,form)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,form),(1)))){
var inner = cljs.core.first.call(null,form);
if((cljs.core.sequential_QMARK_.call(null,inner)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,inner),(2))) && (cljs.core._EQ_.call(null,cljs.core.second.call(null,inner),new cljs.core.Symbol(null,"...","...",-1926939749,null)))){
var G__25821 = datascript.parser.parse_find_elem.call(null,cljs.core.first.call(null,inner));
var G__25821__$1 = (((G__25821 == null))?null:(new datascript.parser.FindColl(G__25821,null,null,null)));
return G__25821__$1;
} else {
return null;
}
} else {
return null;
}
});
datascript.parser.parse_find_scalar = (function datascript$parser$parse_find_scalar(form){
if((cljs.core.sequential_QMARK_.call(null,form)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,form),(2))) && (cljs.core._EQ_.call(null,cljs.core.second.call(null,form),new cljs.core.Symbol(null,".",".",1975675962,null)))){
var G__25823 = datascript.parser.parse_find_elem.call(null,cljs.core.first.call(null,form));
var G__25823__$1 = (((G__25823 == null))?null:(new datascript.parser.FindScalar(G__25823,null,null,null)));
return G__25823__$1;
} else {
return null;
}
});
datascript.parser.parse_find_tuple = (function datascript$parser$parse_find_tuple(form){
if((cljs.core.sequential_QMARK_.call(null,form)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,form),(1)))){
var inner = cljs.core.first.call(null,form);
var G__25825 = datascript.parser.parse_seq.call(null,datascript.parser.parse_find_elem,inner);
var G__25825__$1 = (((G__25825 == null))?null:(new datascript.parser.FindTuple(G__25825,null,null,null)));
return G__25825__$1;
} else {
return null;
}
});
datascript.parser.parse_find = (function datascript$parser$parse_find(form){
var or__16375__auto__ = datascript.parser.parse_find_rel.call(null,form);
if(cljs.core.truth_(or__16375__auto__)){
return or__16375__auto__;
} else {
var or__16375__auto____$1 = datascript.parser.parse_find_coll.call(null,form);
if(cljs.core.truth_(or__16375__auto____$1)){
return or__16375__auto____$1;
} else {
var or__16375__auto____$2 = datascript.parser.parse_find_scalar.call(null,form);
if(cljs.core.truth_(or__16375__auto____$2)){
return or__16375__auto____$2;
} else {
var or__16375__auto____$3 = datascript.parser.parse_find_tuple.call(null,form);
if(cljs.core.truth_(or__16375__auto____$3)){
return or__16375__auto____$3;
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse :find, expected: (find-rel | find-coll | find-tuple | find-scalar)")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","find","parser/find",-801023103),new cljs.core.Keyword(null,"fragment","fragment",826775688),form], null));
}
}
}
}
});
datascript.parser.parse_with = (function datascript$parser$parse_with(form){
var or__16375__auto__ = datascript.parser.parse_seq.call(null,datascript.parser.parse_variable,form);
if(cljs.core.truth_(or__16375__auto__)){
return or__16375__auto__;
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse :with clause, expected [ variable+ ]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","with","parser/with",-386255821),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
});
datascript.parser.parse_in_binding = (function datascript$parser$parse_in_binding(form){
var temp__4423__auto__ = (function (){var or__16375__auto__ = datascript.parser.parse_src_var.call(null,form);
if(cljs.core.truth_(or__16375__auto__)){
return or__16375__auto__;
} else {
return datascript.parser.parse_rules_var.call(null,form);
}
})();
if(cljs.core.truth_(temp__4423__auto__)){
var var$ = temp__4423__auto__;
return datascript.parser.with_source.call(null,(new datascript.parser.BindScalar(var$,null,null,null)),form);
} else {
return datascript.parser.parse_binding.call(null,form);
}
});
datascript.parser.parse_in = (function datascript$parser$parse_in(form){
var or__16375__auto__ = datascript.parser.parse_seq.call(null,datascript.parser.parse_in_binding,form);
if(cljs.core.truth_(or__16375__auto__)){
return or__16375__auto__;
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse :in clause, expected (src-var | % | bind-scalar | bind-tuple | bind-coll | bind-rel)")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","in","parser/in",1617442048),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.Pattern = (function (source,pattern,__meta,__extmap,__hash){
this.source = source;
this.pattern = pattern;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.Pattern.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__16990__auto__,k__16991__auto__){
var self__ = this;
var this__16990__auto____$1 = this;
return cljs.core._lookup.call(null,this__16990__auto____$1,k__16991__auto__,null);
});

datascript.parser.Pattern.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__16992__auto__,k25830,else__16993__auto__){
var self__ = this;
var this__16992__auto____$1 = this;
var G__25832 = (((k25830 instanceof cljs.core.Keyword))?k25830.fqn:null);
switch (G__25832) {
case "source":
return self__.source;

break;
case "pattern":
return self__.pattern;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k25830,else__16993__auto__);

}
});

datascript.parser.Pattern.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__17004__auto__,writer__17005__auto__,opts__17006__auto__){
var self__ = this;
var this__17004__auto____$1 = this;
var pr_pair__17007__auto__ = ((function (this__17004__auto____$1){
return (function (keyval__17008__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__17005__auto__,cljs.core.pr_writer,""," ","",opts__17006__auto__,keyval__17008__auto__);
});})(this__17004__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__17005__auto__,pr_pair__17007__auto__,"#datascript.parser.Pattern{",", ","}",opts__17006__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source","source",-433931539),self__.source],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pattern","pattern",242135423),self__.pattern],null))], null),self__.__extmap));
});

datascript.parser.Pattern.prototype.cljs$core$IIterable$ = true;

datascript.parser.Pattern.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__25829){
var self__ = this;
var G__25829__$1 = this;
return (new cljs.core.RecordIter((0),G__25829__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"pattern","pattern",242135423)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.Pattern.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__16988__auto__){
var self__ = this;
var this__16988__auto____$1 = this;
return self__.__meta;
});

datascript.parser.Pattern.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__16984__auto__){
var self__ = this;
var this__16984__auto____$1 = this;
return (new datascript.parser.Pattern(self__.source,self__.pattern,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.Pattern.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__16994__auto__){
var self__ = this;
var this__16994__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.Pattern.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__16985__auto__){
var self__ = this;
var this__16985__auto____$1 = this;
var h__16810__auto__ = self__.__hash;
if(!((h__16810__auto__ == null))){
return h__16810__auto__;
} else {
var h__16810__auto____$1 = cljs.core.hash_imap.call(null,this__16985__auto____$1);
self__.__hash = h__16810__auto____$1;

return h__16810__auto____$1;
}
});

datascript.parser.Pattern.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__16986__auto__,other__16987__auto__){
var self__ = this;
var this__16986__auto____$1 = this;
if(cljs.core.truth_((function (){var and__16363__auto__ = other__16987__auto__;
if(cljs.core.truth_(and__16363__auto__)){
var and__16363__auto____$1 = (this__16986__auto____$1.constructor === other__16987__auto__.constructor);
if(and__16363__auto____$1){
return cljs.core.equiv_map.call(null,this__16986__auto____$1,other__16987__auto__);
} else {
return and__16363__auto____$1;
}
} else {
return and__16363__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.Pattern.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__16999__auto__,k__17000__auto__){
var self__ = this;
var this__16999__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"source","source",-433931539),null,new cljs.core.Keyword(null,"pattern","pattern",242135423),null], null), null),k__17000__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__16999__auto____$1),self__.__meta),k__17000__auto__);
} else {
return (new datascript.parser.Pattern(self__.source,self__.pattern,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__17000__auto__)),null));
}
});

datascript.parser.Pattern.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__16997__auto__,k__16998__auto__,G__25829){
var self__ = this;
var this__16997__auto____$1 = this;
var pred__25833 = cljs.core.keyword_identical_QMARK_;
var expr__25834 = k__16998__auto__;
if(cljs.core.truth_(pred__25833.call(null,new cljs.core.Keyword(null,"source","source",-433931539),expr__25834))){
return (new datascript.parser.Pattern(G__25829,self__.pattern,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__25833.call(null,new cljs.core.Keyword(null,"pattern","pattern",242135423),expr__25834))){
return (new datascript.parser.Pattern(self__.source,G__25829,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Pattern(self__.source,self__.pattern,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__16998__auto__,G__25829),null));
}
}
});

datascript.parser.Pattern.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__17002__auto__){
var self__ = this;
var this__17002__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source","source",-433931539),self__.source],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pattern","pattern",242135423),self__.pattern],null))], null),self__.__extmap));
});

datascript.parser.Pattern.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__16989__auto__,G__25829){
var self__ = this;
var this__16989__auto____$1 = this;
return (new datascript.parser.Pattern(self__.source,self__.pattern,G__25829,self__.__extmap,self__.__hash));
});

datascript.parser.Pattern.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__16995__auto__,entry__16996__auto__){
var self__ = this;
var this__16995__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__16996__auto__)){
return cljs.core._assoc.call(null,this__16995__auto____$1,cljs.core._nth.call(null,entry__16996__auto__,(0)),cljs.core._nth.call(null,entry__16996__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__16995__auto____$1,entry__16996__auto__);
}
});

datascript.parser.Pattern.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.Pattern.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__20299__auto__,f25826){
var self__ = this;
var this__20299__auto____$1 = this;
var new__20300__auto__ = (new datascript.parser.Pattern(datascript.parser.postwalk.call(null,self__.source,f25826),datascript.parser.postwalk.call(null,self__.pattern,f25826),null,null,null));
var temp__4423__auto__ = cljs.core.meta.call(null,this__20299__auto____$1);
if(cljs.core.truth_(temp__4423__auto__)){
var meta__20301__auto__ = temp__4423__auto__;
return cljs.core.with_meta.call(null,new__20300__auto__,meta__20301__auto__);
} else {
return new__20300__auto__;
}
});

datascript.parser.Pattern.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___20302__auto__,pred25827,acc25828){
var self__ = this;
var ___20302__auto____$1 = this;
return datascript.parser.collect.call(null,pred25827,self__.pattern,datascript.parser.collect.call(null,pred25827,self__.source,acc25828));
});

datascript.parser.Pattern.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___20302__auto__,acc25828){
var self__ = this;
var ___20302__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,acc25828,self__.source),self__.pattern);
});

datascript.parser.Pattern.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"source","source",1206599988,null),new cljs.core.Symbol(null,"pattern","pattern",1882666950,null)], null);
});

datascript.parser.Pattern.cljs$lang$type = true;

datascript.parser.Pattern.cljs$lang$ctorPrSeq = (function (this__17024__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/Pattern");
});

datascript.parser.Pattern.cljs$lang$ctorPrWriter = (function (this__17024__auto__,writer__17025__auto__){
return cljs.core._write.call(null,writer__17025__auto__,"datascript.parser/Pattern");
});

datascript.parser.__GT_Pattern = (function datascript$parser$__GT_Pattern(source,pattern){
return (new datascript.parser.Pattern(source,pattern,null,null,null));
});

datascript.parser.map__GT_Pattern = (function datascript$parser$map__GT_Pattern(G__25831){
return (new datascript.parser.Pattern(new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(G__25831),new cljs.core.Keyword(null,"pattern","pattern",242135423).cljs$core$IFn$_invoke$arity$1(G__25831),null,cljs.core.dissoc.call(null,G__25831,new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"pattern","pattern",242135423)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.Predicate = (function (fn,args,__meta,__extmap,__hash){
this.fn = fn;
this.args = args;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.Predicate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__16990__auto__,k__16991__auto__){
var self__ = this;
var this__16990__auto____$1 = this;
return cljs.core._lookup.call(null,this__16990__auto____$1,k__16991__auto__,null);
});

datascript.parser.Predicate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__16992__auto__,k25841,else__16993__auto__){
var self__ = this;
var this__16992__auto____$1 = this;
var G__25843 = (((k25841 instanceof cljs.core.Keyword))?k25841.fqn:null);
switch (G__25843) {
case "fn":
return self__.fn;

break;
case "args":
return self__.args;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k25841,else__16993__auto__);

}
});

datascript.parser.Predicate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__17004__auto__,writer__17005__auto__,opts__17006__auto__){
var self__ = this;
var this__17004__auto____$1 = this;
var pr_pair__17007__auto__ = ((function (this__17004__auto____$1){
return (function (keyval__17008__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__17005__auto__,cljs.core.pr_writer,""," ","",opts__17006__auto__,keyval__17008__auto__);
});})(this__17004__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__17005__auto__,pr_pair__17007__auto__,"#datascript.parser.Predicate{",", ","}",opts__17006__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"args","args",1315556576),self__.args],null))], null),self__.__extmap));
});

datascript.parser.Predicate.prototype.cljs$core$IIterable$ = true;

datascript.parser.Predicate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__25840){
var self__ = this;
var G__25840__$1 = this;
return (new cljs.core.RecordIter((0),G__25840__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"args","args",1315556576)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.Predicate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__16988__auto__){
var self__ = this;
var this__16988__auto____$1 = this;
return self__.__meta;
});

datascript.parser.Predicate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__16984__auto__){
var self__ = this;
var this__16984__auto____$1 = this;
return (new datascript.parser.Predicate(self__.fn,self__.args,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.Predicate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__16994__auto__){
var self__ = this;
var this__16994__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.Predicate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__16985__auto__){
var self__ = this;
var this__16985__auto____$1 = this;
var h__16810__auto__ = self__.__hash;
if(!((h__16810__auto__ == null))){
return h__16810__auto__;
} else {
var h__16810__auto____$1 = cljs.core.hash_imap.call(null,this__16985__auto____$1);
self__.__hash = h__16810__auto____$1;

return h__16810__auto____$1;
}
});

datascript.parser.Predicate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__16986__auto__,other__16987__auto__){
var self__ = this;
var this__16986__auto____$1 = this;
if(cljs.core.truth_((function (){var and__16363__auto__ = other__16987__auto__;
if(cljs.core.truth_(and__16363__auto__)){
var and__16363__auto____$1 = (this__16986__auto____$1.constructor === other__16987__auto__.constructor);
if(and__16363__auto____$1){
return cljs.core.equiv_map.call(null,this__16986__auto____$1,other__16987__auto__);
} else {
return and__16363__auto____$1;
}
} else {
return and__16363__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.Predicate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__16999__auto__,k__17000__auto__){
var self__ = this;
var this__16999__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"args","args",1315556576),null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null], null), null),k__17000__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__16999__auto____$1),self__.__meta),k__17000__auto__);
} else {
return (new datascript.parser.Predicate(self__.fn,self__.args,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__17000__auto__)),null));
}
});

datascript.parser.Predicate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__16997__auto__,k__16998__auto__,G__25840){
var self__ = this;
var this__16997__auto____$1 = this;
var pred__25844 = cljs.core.keyword_identical_QMARK_;
var expr__25845 = k__16998__auto__;
if(cljs.core.truth_(pred__25844.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__25845))){
return (new datascript.parser.Predicate(G__25840,self__.args,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__25844.call(null,new cljs.core.Keyword(null,"args","args",1315556576),expr__25845))){
return (new datascript.parser.Predicate(self__.fn,G__25840,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Predicate(self__.fn,self__.args,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__16998__auto__,G__25840),null));
}
}
});

datascript.parser.Predicate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__17002__auto__){
var self__ = this;
var this__17002__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"args","args",1315556576),self__.args],null))], null),self__.__extmap));
});

datascript.parser.Predicate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__16989__auto__,G__25840){
var self__ = this;
var this__16989__auto____$1 = this;
return (new datascript.parser.Predicate(self__.fn,self__.args,G__25840,self__.__extmap,self__.__hash));
});

datascript.parser.Predicate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__16995__auto__,entry__16996__auto__){
var self__ = this;
var this__16995__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__16996__auto__)){
return cljs.core._assoc.call(null,this__16995__auto____$1,cljs.core._nth.call(null,entry__16996__auto__,(0)),cljs.core._nth.call(null,entry__16996__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__16995__auto____$1,entry__16996__auto__);
}
});

datascript.parser.Predicate.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.Predicate.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__20299__auto__,f25837){
var self__ = this;
var this__20299__auto____$1 = this;
var new__20300__auto__ = (new datascript.parser.Predicate(datascript.parser.postwalk.call(null,self__.fn,f25837),datascript.parser.postwalk.call(null,self__.args,f25837),null,null,null));
var temp__4423__auto__ = cljs.core.meta.call(null,this__20299__auto____$1);
if(cljs.core.truth_(temp__4423__auto__)){
var meta__20301__auto__ = temp__4423__auto__;
return cljs.core.with_meta.call(null,new__20300__auto__,meta__20301__auto__);
} else {
return new__20300__auto__;
}
});

datascript.parser.Predicate.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___20302__auto__,pred25838,acc25839){
var self__ = this;
var ___20302__auto____$1 = this;
return datascript.parser.collect.call(null,pred25838,self__.args,datascript.parser.collect.call(null,pred25838,self__.fn,acc25839));
});

datascript.parser.Predicate.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___20302__auto__,acc25839){
var self__ = this;
var ___20302__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,acc25839,self__.fn),self__.args);
});

datascript.parser.Predicate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"args","args",-1338879193,null)], null);
});

datascript.parser.Predicate.cljs$lang$type = true;

datascript.parser.Predicate.cljs$lang$ctorPrSeq = (function (this__17024__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/Predicate");
});

datascript.parser.Predicate.cljs$lang$ctorPrWriter = (function (this__17024__auto__,writer__17025__auto__){
return cljs.core._write.call(null,writer__17025__auto__,"datascript.parser/Predicate");
});

datascript.parser.__GT_Predicate = (function datascript$parser$__GT_Predicate(fn,args){
return (new datascript.parser.Predicate(fn,args,null,null,null));
});

datascript.parser.map__GT_Predicate = (function datascript$parser$map__GT_Predicate(G__25842){
return (new datascript.parser.Predicate(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__25842),new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(G__25842),null,cljs.core.dissoc.call(null,G__25842,new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"args","args",1315556576)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.Function = (function (fn,args,binding,__meta,__extmap,__hash){
this.fn = fn;
this.args = args;
this.binding = binding;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.Function.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__16990__auto__,k__16991__auto__){
var self__ = this;
var this__16990__auto____$1 = this;
return cljs.core._lookup.call(null,this__16990__auto____$1,k__16991__auto__,null);
});

datascript.parser.Function.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__16992__auto__,k25852,else__16993__auto__){
var self__ = this;
var this__16992__auto____$1 = this;
var G__25854 = (((k25852 instanceof cljs.core.Keyword))?k25852.fqn:null);
switch (G__25854) {
case "fn":
return self__.fn;

break;
case "args":
return self__.args;

break;
case "binding":
return self__.binding;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k25852,else__16993__auto__);

}
});

datascript.parser.Function.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__17004__auto__,writer__17005__auto__,opts__17006__auto__){
var self__ = this;
var this__17004__auto____$1 = this;
var pr_pair__17007__auto__ = ((function (this__17004__auto____$1){
return (function (keyval__17008__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__17005__auto__,cljs.core.pr_writer,""," ","",opts__17006__auto__,keyval__17008__auto__);
});})(this__17004__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__17005__auto__,pr_pair__17007__auto__,"#datascript.parser.Function{",", ","}",opts__17006__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"args","args",1315556576),self__.args],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"binding","binding",539932593),self__.binding],null))], null),self__.__extmap));
});

datascript.parser.Function.prototype.cljs$core$IIterable$ = true;

datascript.parser.Function.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__25851){
var self__ = this;
var G__25851__$1 = this;
return (new cljs.core.RecordIter((0),G__25851__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"binding","binding",539932593)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.Function.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__16988__auto__){
var self__ = this;
var this__16988__auto____$1 = this;
return self__.__meta;
});

datascript.parser.Function.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__16984__auto__){
var self__ = this;
var this__16984__auto____$1 = this;
return (new datascript.parser.Function(self__.fn,self__.args,self__.binding,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.Function.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__16994__auto__){
var self__ = this;
var this__16994__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.Function.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__16985__auto__){
var self__ = this;
var this__16985__auto____$1 = this;
var h__16810__auto__ = self__.__hash;
if(!((h__16810__auto__ == null))){
return h__16810__auto__;
} else {
var h__16810__auto____$1 = cljs.core.hash_imap.call(null,this__16985__auto____$1);
self__.__hash = h__16810__auto____$1;

return h__16810__auto____$1;
}
});

datascript.parser.Function.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__16986__auto__,other__16987__auto__){
var self__ = this;
var this__16986__auto____$1 = this;
if(cljs.core.truth_((function (){var and__16363__auto__ = other__16987__auto__;
if(cljs.core.truth_(and__16363__auto__)){
var and__16363__auto____$1 = (this__16986__auto____$1.constructor === other__16987__auto__.constructor);
if(and__16363__auto____$1){
return cljs.core.equiv_map.call(null,this__16986__auto____$1,other__16987__auto__);
} else {
return and__16363__auto____$1;
}
} else {
return and__16363__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.Function.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__16999__auto__,k__17000__auto__){
var self__ = this;
var this__16999__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"args","args",1315556576),null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null,new cljs.core.Keyword(null,"binding","binding",539932593),null], null), null),k__17000__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__16999__auto____$1),self__.__meta),k__17000__auto__);
} else {
return (new datascript.parser.Function(self__.fn,self__.args,self__.binding,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__17000__auto__)),null));
}
});

datascript.parser.Function.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__16997__auto__,k__16998__auto__,G__25851){
var self__ = this;
var this__16997__auto____$1 = this;
var pred__25855 = cljs.core.keyword_identical_QMARK_;
var expr__25856 = k__16998__auto__;
if(cljs.core.truth_(pred__25855.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__25856))){
return (new datascript.parser.Function(G__25851,self__.args,self__.binding,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__25855.call(null,new cljs.core.Keyword(null,"args","args",1315556576),expr__25856))){
return (new datascript.parser.Function(self__.fn,G__25851,self__.binding,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__25855.call(null,new cljs.core.Keyword(null,"binding","binding",539932593),expr__25856))){
return (new datascript.parser.Function(self__.fn,self__.args,G__25851,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Function(self__.fn,self__.args,self__.binding,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__16998__auto__,G__25851),null));
}
}
}
});

datascript.parser.Function.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__17002__auto__){
var self__ = this;
var this__17002__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"args","args",1315556576),self__.args],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"binding","binding",539932593),self__.binding],null))], null),self__.__extmap));
});

datascript.parser.Function.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__16989__auto__,G__25851){
var self__ = this;
var this__16989__auto____$1 = this;
return (new datascript.parser.Function(self__.fn,self__.args,self__.binding,G__25851,self__.__extmap,self__.__hash));
});

datascript.parser.Function.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__16995__auto__,entry__16996__auto__){
var self__ = this;
var this__16995__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__16996__auto__)){
return cljs.core._assoc.call(null,this__16995__auto____$1,cljs.core._nth.call(null,entry__16996__auto__,(0)),cljs.core._nth.call(null,entry__16996__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__16995__auto____$1,entry__16996__auto__);
}
});

datascript.parser.Function.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.Function.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__20299__auto__,f25848){
var self__ = this;
var this__20299__auto____$1 = this;
var new__20300__auto__ = (new datascript.parser.Function(datascript.parser.postwalk.call(null,self__.fn,f25848),datascript.parser.postwalk.call(null,self__.args,f25848),datascript.parser.postwalk.call(null,self__.binding,f25848),null,null,null));
var temp__4423__auto__ = cljs.core.meta.call(null,this__20299__auto____$1);
if(cljs.core.truth_(temp__4423__auto__)){
var meta__20301__auto__ = temp__4423__auto__;
return cljs.core.with_meta.call(null,new__20300__auto__,meta__20301__auto__);
} else {
return new__20300__auto__;
}
});

datascript.parser.Function.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___20302__auto__,pred25849,acc25850){
var self__ = this;
var ___20302__auto____$1 = this;
return datascript.parser.collect.call(null,pred25849,self__.binding,datascript.parser.collect.call(null,pred25849,self__.args,datascript.parser.collect.call(null,pred25849,self__.fn,acc25850)));
});

datascript.parser.Function.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___20302__auto__,acc25850){
var self__ = this;
var ___20302__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,acc25850,self__.fn),self__.args),self__.binding);
});

datascript.parser.Function.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"args","args",-1338879193,null),new cljs.core.Symbol(null,"binding","binding",-2114503176,null)], null);
});

datascript.parser.Function.cljs$lang$type = true;

datascript.parser.Function.cljs$lang$ctorPrSeq = (function (this__17024__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/Function");
});

datascript.parser.Function.cljs$lang$ctorPrWriter = (function (this__17024__auto__,writer__17025__auto__){
return cljs.core._write.call(null,writer__17025__auto__,"datascript.parser/Function");
});

datascript.parser.__GT_Function = (function datascript$parser$__GT_Function(fn,args,binding){
return (new datascript.parser.Function(fn,args,binding,null,null,null));
});

datascript.parser.map__GT_Function = (function datascript$parser$map__GT_Function(G__25853){
return (new datascript.parser.Function(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__25853),new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(G__25853),new cljs.core.Keyword(null,"binding","binding",539932593).cljs$core$IFn$_invoke$arity$1(G__25853),null,cljs.core.dissoc.call(null,G__25853,new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"binding","binding",539932593)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.RuleExpr = (function (source,name,args,__meta,__extmap,__hash){
this.source = source;
this.name = name;
this.args = args;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.RuleExpr.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__16990__auto__,k__16991__auto__){
var self__ = this;
var this__16990__auto____$1 = this;
return cljs.core._lookup.call(null,this__16990__auto____$1,k__16991__auto__,null);
});

datascript.parser.RuleExpr.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__16992__auto__,k25863,else__16993__auto__){
var self__ = this;
var this__16992__auto____$1 = this;
var G__25865 = (((k25863 instanceof cljs.core.Keyword))?k25863.fqn:null);
switch (G__25865) {
case "source":
return self__.source;

break;
case "name":
return self__.name;

break;
case "args":
return self__.args;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k25863,else__16993__auto__);

}
});

datascript.parser.RuleExpr.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__17004__auto__,writer__17005__auto__,opts__17006__auto__){
var self__ = this;
var this__17004__auto____$1 = this;
var pr_pair__17007__auto__ = ((function (this__17004__auto____$1){
return (function (keyval__17008__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__17005__auto__,cljs.core.pr_writer,""," ","",opts__17006__auto__,keyval__17008__auto__);
});})(this__17004__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__17005__auto__,pr_pair__17007__auto__,"#datascript.parser.RuleExpr{",", ","}",opts__17006__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source","source",-433931539),self__.source],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"args","args",1315556576),self__.args],null))], null),self__.__extmap));
});

datascript.parser.RuleExpr.prototype.cljs$core$IIterable$ = true;

datascript.parser.RuleExpr.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__25862){
var self__ = this;
var G__25862__$1 = this;
return (new cljs.core.RecordIter((0),G__25862__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"args","args",1315556576)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.RuleExpr.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__16988__auto__){
var self__ = this;
var this__16988__auto____$1 = this;
return self__.__meta;
});

datascript.parser.RuleExpr.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__16984__auto__){
var self__ = this;
var this__16984__auto____$1 = this;
return (new datascript.parser.RuleExpr(self__.source,self__.name,self__.args,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.RuleExpr.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__16994__auto__){
var self__ = this;
var this__16994__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.RuleExpr.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__16985__auto__){
var self__ = this;
var this__16985__auto____$1 = this;
var h__16810__auto__ = self__.__hash;
if(!((h__16810__auto__ == null))){
return h__16810__auto__;
} else {
var h__16810__auto____$1 = cljs.core.hash_imap.call(null,this__16985__auto____$1);
self__.__hash = h__16810__auto____$1;

return h__16810__auto____$1;
}
});

datascript.parser.RuleExpr.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__16986__auto__,other__16987__auto__){
var self__ = this;
var this__16986__auto____$1 = this;
if(cljs.core.truth_((function (){var and__16363__auto__ = other__16987__auto__;
if(cljs.core.truth_(and__16363__auto__)){
var and__16363__auto____$1 = (this__16986__auto____$1.constructor === other__16987__auto__.constructor);
if(and__16363__auto____$1){
return cljs.core.equiv_map.call(null,this__16986__auto____$1,other__16987__auto__);
} else {
return and__16363__auto____$1;
}
} else {
return and__16363__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.RuleExpr.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__16999__auto__,k__17000__auto__){
var self__ = this;
var this__16999__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"args","args",1315556576),null,new cljs.core.Keyword(null,"name","name",1843675177),null,new cljs.core.Keyword(null,"source","source",-433931539),null], null), null),k__17000__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__16999__auto____$1),self__.__meta),k__17000__auto__);
} else {
return (new datascript.parser.RuleExpr(self__.source,self__.name,self__.args,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__17000__auto__)),null));
}
});

datascript.parser.RuleExpr.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__16997__auto__,k__16998__auto__,G__25862){
var self__ = this;
var this__16997__auto____$1 = this;
var pred__25866 = cljs.core.keyword_identical_QMARK_;
var expr__25867 = k__16998__auto__;
if(cljs.core.truth_(pred__25866.call(null,new cljs.core.Keyword(null,"source","source",-433931539),expr__25867))){
return (new datascript.parser.RuleExpr(G__25862,self__.name,self__.args,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__25866.call(null,new cljs.core.Keyword(null,"name","name",1843675177),expr__25867))){
return (new datascript.parser.RuleExpr(self__.source,G__25862,self__.args,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__25866.call(null,new cljs.core.Keyword(null,"args","args",1315556576),expr__25867))){
return (new datascript.parser.RuleExpr(self__.source,self__.name,G__25862,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.RuleExpr(self__.source,self__.name,self__.args,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__16998__auto__,G__25862),null));
}
}
}
});

datascript.parser.RuleExpr.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__17002__auto__){
var self__ = this;
var this__17002__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source","source",-433931539),self__.source],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"args","args",1315556576),self__.args],null))], null),self__.__extmap));
});

datascript.parser.RuleExpr.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__16989__auto__,G__25862){
var self__ = this;
var this__16989__auto____$1 = this;
return (new datascript.parser.RuleExpr(self__.source,self__.name,self__.args,G__25862,self__.__extmap,self__.__hash));
});

datascript.parser.RuleExpr.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__16995__auto__,entry__16996__auto__){
var self__ = this;
var this__16995__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__16996__auto__)){
return cljs.core._assoc.call(null,this__16995__auto____$1,cljs.core._nth.call(null,entry__16996__auto__,(0)),cljs.core._nth.call(null,entry__16996__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__16995__auto____$1,entry__16996__auto__);
}
});

datascript.parser.RuleExpr.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.RuleExpr.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__20299__auto__,f25859){
var self__ = this;
var this__20299__auto____$1 = this;
var new__20300__auto__ = (new datascript.parser.RuleExpr(datascript.parser.postwalk.call(null,self__.source,f25859),datascript.parser.postwalk.call(null,self__.name,f25859),datascript.parser.postwalk.call(null,self__.args,f25859),null,null,null));
var temp__4423__auto__ = cljs.core.meta.call(null,this__20299__auto____$1);
if(cljs.core.truth_(temp__4423__auto__)){
var meta__20301__auto__ = temp__4423__auto__;
return cljs.core.with_meta.call(null,new__20300__auto__,meta__20301__auto__);
} else {
return new__20300__auto__;
}
});

datascript.parser.RuleExpr.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___20302__auto__,pred25860,acc25861){
var self__ = this;
var ___20302__auto____$1 = this;
return datascript.parser.collect.call(null,pred25860,self__.args,datascript.parser.collect.call(null,pred25860,self__.name,datascript.parser.collect.call(null,pred25860,self__.source,acc25861)));
});

datascript.parser.RuleExpr.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___20302__auto__,acc25861){
var self__ = this;
var ___20302__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,acc25861,self__.source),self__.name),self__.args);
});

datascript.parser.RuleExpr.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"source","source",1206599988,null),new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.Symbol(null,"args","args",-1338879193,null)], null);
});

datascript.parser.RuleExpr.cljs$lang$type = true;

datascript.parser.RuleExpr.cljs$lang$ctorPrSeq = (function (this__17024__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/RuleExpr");
});

datascript.parser.RuleExpr.cljs$lang$ctorPrWriter = (function (this__17024__auto__,writer__17025__auto__){
return cljs.core._write.call(null,writer__17025__auto__,"datascript.parser/RuleExpr");
});

datascript.parser.__GT_RuleExpr = (function datascript$parser$__GT_RuleExpr(source,name,args){
return (new datascript.parser.RuleExpr(source,name,args,null,null,null));
});

datascript.parser.map__GT_RuleExpr = (function datascript$parser$map__GT_RuleExpr(G__25864){
return (new datascript.parser.RuleExpr(new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(G__25864),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(G__25864),new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(G__25864),null,cljs.core.dissoc.call(null,G__25864,new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"args","args",1315556576)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.Not = (function (source,vars,clauses,__meta,__extmap,__hash){
this.source = source;
this.vars = vars;
this.clauses = clauses;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.Not.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__16990__auto__,k__16991__auto__){
var self__ = this;
var this__16990__auto____$1 = this;
return cljs.core._lookup.call(null,this__16990__auto____$1,k__16991__auto__,null);
});

datascript.parser.Not.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__16992__auto__,k25874,else__16993__auto__){
var self__ = this;
var this__16992__auto____$1 = this;
var G__25876 = (((k25874 instanceof cljs.core.Keyword))?k25874.fqn:null);
switch (G__25876) {
case "source":
return self__.source;

break;
case "vars":
return self__.vars;

break;
case "clauses":
return self__.clauses;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k25874,else__16993__auto__);

}
});

datascript.parser.Not.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__17004__auto__,writer__17005__auto__,opts__17006__auto__){
var self__ = this;
var this__17004__auto____$1 = this;
var pr_pair__17007__auto__ = ((function (this__17004__auto____$1){
return (function (keyval__17008__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__17005__auto__,cljs.core.pr_writer,""," ","",opts__17006__auto__,keyval__17008__auto__);
});})(this__17004__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__17005__auto__,pr_pair__17007__auto__,"#datascript.parser.Not{",", ","}",opts__17006__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source","source",-433931539),self__.source],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"vars","vars",-2046957217),self__.vars],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"clauses","clauses",1454841241),self__.clauses],null))], null),self__.__extmap));
});

datascript.parser.Not.prototype.cljs$core$IIterable$ = true;

datascript.parser.Not.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__25873){
var self__ = this;
var G__25873__$1 = this;
return (new cljs.core.RecordIter((0),G__25873__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"vars","vars",-2046957217),new cljs.core.Keyword(null,"clauses","clauses",1454841241)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.Not.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__16988__auto__){
var self__ = this;
var this__16988__auto____$1 = this;
return self__.__meta;
});

datascript.parser.Not.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__16984__auto__){
var self__ = this;
var this__16984__auto____$1 = this;
return (new datascript.parser.Not(self__.source,self__.vars,self__.clauses,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.Not.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__16994__auto__){
var self__ = this;
var this__16994__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.Not.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__16985__auto__){
var self__ = this;
var this__16985__auto____$1 = this;
var h__16810__auto__ = self__.__hash;
if(!((h__16810__auto__ == null))){
return h__16810__auto__;
} else {
var h__16810__auto____$1 = cljs.core.hash_imap.call(null,this__16985__auto____$1);
self__.__hash = h__16810__auto____$1;

return h__16810__auto____$1;
}
});

datascript.parser.Not.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__16986__auto__,other__16987__auto__){
var self__ = this;
var this__16986__auto____$1 = this;
if(cljs.core.truth_((function (){var and__16363__auto__ = other__16987__auto__;
if(cljs.core.truth_(and__16363__auto__)){
var and__16363__auto____$1 = (this__16986__auto____$1.constructor === other__16987__auto__.constructor);
if(and__16363__auto____$1){
return cljs.core.equiv_map.call(null,this__16986__auto____$1,other__16987__auto__);
} else {
return and__16363__auto____$1;
}
} else {
return and__16363__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.Not.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__16999__auto__,k__17000__auto__){
var self__ = this;
var this__16999__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"source","source",-433931539),null,new cljs.core.Keyword(null,"clauses","clauses",1454841241),null,new cljs.core.Keyword(null,"vars","vars",-2046957217),null], null), null),k__17000__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__16999__auto____$1),self__.__meta),k__17000__auto__);
} else {
return (new datascript.parser.Not(self__.source,self__.vars,self__.clauses,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__17000__auto__)),null));
}
});

datascript.parser.Not.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__16997__auto__,k__16998__auto__,G__25873){
var self__ = this;
var this__16997__auto____$1 = this;
var pred__25877 = cljs.core.keyword_identical_QMARK_;
var expr__25878 = k__16998__auto__;
if(cljs.core.truth_(pred__25877.call(null,new cljs.core.Keyword(null,"source","source",-433931539),expr__25878))){
return (new datascript.parser.Not(G__25873,self__.vars,self__.clauses,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__25877.call(null,new cljs.core.Keyword(null,"vars","vars",-2046957217),expr__25878))){
return (new datascript.parser.Not(self__.source,G__25873,self__.clauses,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__25877.call(null,new cljs.core.Keyword(null,"clauses","clauses",1454841241),expr__25878))){
return (new datascript.parser.Not(self__.source,self__.vars,G__25873,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Not(self__.source,self__.vars,self__.clauses,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__16998__auto__,G__25873),null));
}
}
}
});

datascript.parser.Not.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__17002__auto__){
var self__ = this;
var this__17002__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source","source",-433931539),self__.source],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"vars","vars",-2046957217),self__.vars],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"clauses","clauses",1454841241),self__.clauses],null))], null),self__.__extmap));
});

datascript.parser.Not.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__16989__auto__,G__25873){
var self__ = this;
var this__16989__auto____$1 = this;
return (new datascript.parser.Not(self__.source,self__.vars,self__.clauses,G__25873,self__.__extmap,self__.__hash));
});

datascript.parser.Not.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__16995__auto__,entry__16996__auto__){
var self__ = this;
var this__16995__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__16996__auto__)){
return cljs.core._assoc.call(null,this__16995__auto____$1,cljs.core._nth.call(null,entry__16996__auto__,(0)),cljs.core._nth.call(null,entry__16996__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__16995__auto____$1,entry__16996__auto__);
}
});

datascript.parser.Not.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.Not.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__20299__auto__,f25870){
var self__ = this;
var this__20299__auto____$1 = this;
var new__20300__auto__ = (new datascript.parser.Not(datascript.parser.postwalk.call(null,self__.source,f25870),datascript.parser.postwalk.call(null,self__.vars,f25870),datascript.parser.postwalk.call(null,self__.clauses,f25870),null,null,null));
var temp__4423__auto__ = cljs.core.meta.call(null,this__20299__auto____$1);
if(cljs.core.truth_(temp__4423__auto__)){
var meta__20301__auto__ = temp__4423__auto__;
return cljs.core.with_meta.call(null,new__20300__auto__,meta__20301__auto__);
} else {
return new__20300__auto__;
}
});

datascript.parser.Not.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___20302__auto__,pred25871,acc25872){
var self__ = this;
var ___20302__auto____$1 = this;
return datascript.parser.collect.call(null,pred25871,self__.clauses,datascript.parser.collect.call(null,pred25871,self__.vars,datascript.parser.collect.call(null,pred25871,self__.source,acc25872)));
});

datascript.parser.Not.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___20302__auto__,acc25872){
var self__ = this;
var ___20302__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,acc25872,self__.source),self__.vars),self__.clauses);
});

datascript.parser.Not.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"source","source",1206599988,null),new cljs.core.Symbol(null,"vars","vars",-406425690,null),new cljs.core.Symbol(null,"clauses","clauses",-1199594528,null)], null);
});

datascript.parser.Not.cljs$lang$type = true;

datascript.parser.Not.cljs$lang$ctorPrSeq = (function (this__17024__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/Not");
});

datascript.parser.Not.cljs$lang$ctorPrWriter = (function (this__17024__auto__,writer__17025__auto__){
return cljs.core._write.call(null,writer__17025__auto__,"datascript.parser/Not");
});

datascript.parser.__GT_Not = (function datascript$parser$__GT_Not(source,vars,clauses){
return (new datascript.parser.Not(source,vars,clauses,null,null,null));
});

datascript.parser.map__GT_Not = (function datascript$parser$map__GT_Not(G__25875){
return (new datascript.parser.Not(new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(G__25875),new cljs.core.Keyword(null,"vars","vars",-2046957217).cljs$core$IFn$_invoke$arity$1(G__25875),new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(G__25875),null,cljs.core.dissoc.call(null,G__25875,new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"vars","vars",-2046957217),new cljs.core.Keyword(null,"clauses","clauses",1454841241)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.Or = (function (source,rule_vars,clauses,__meta,__extmap,__hash){
this.source = source;
this.rule_vars = rule_vars;
this.clauses = clauses;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.Or.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__16990__auto__,k__16991__auto__){
var self__ = this;
var this__16990__auto____$1 = this;
return cljs.core._lookup.call(null,this__16990__auto____$1,k__16991__auto__,null);
});

datascript.parser.Or.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__16992__auto__,k25885,else__16993__auto__){
var self__ = this;
var this__16992__auto____$1 = this;
var G__25887 = (((k25885 instanceof cljs.core.Keyword))?k25885.fqn:null);
switch (G__25887) {
case "source":
return self__.source;

break;
case "rule-vars":
return self__.rule_vars;

break;
case "clauses":
return self__.clauses;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k25885,else__16993__auto__);

}
});

datascript.parser.Or.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__17004__auto__,writer__17005__auto__,opts__17006__auto__){
var self__ = this;
var this__17004__auto____$1 = this;
var pr_pair__17007__auto__ = ((function (this__17004__auto____$1){
return (function (keyval__17008__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__17005__auto__,cljs.core.pr_writer,""," ","",opts__17006__auto__,keyval__17008__auto__);
});})(this__17004__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__17005__auto__,pr_pair__17007__auto__,"#datascript.parser.Or{",", ","}",opts__17006__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source","source",-433931539),self__.source],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"rule-vars","rule-vars",1665972520),self__.rule_vars],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"clauses","clauses",1454841241),self__.clauses],null))], null),self__.__extmap));
});

datascript.parser.Or.prototype.cljs$core$IIterable$ = true;

datascript.parser.Or.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__25884){
var self__ = this;
var G__25884__$1 = this;
return (new cljs.core.RecordIter((0),G__25884__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"rule-vars","rule-vars",1665972520),new cljs.core.Keyword(null,"clauses","clauses",1454841241)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.Or.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__16988__auto__){
var self__ = this;
var this__16988__auto____$1 = this;
return self__.__meta;
});

datascript.parser.Or.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__16984__auto__){
var self__ = this;
var this__16984__auto____$1 = this;
return (new datascript.parser.Or(self__.source,self__.rule_vars,self__.clauses,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.Or.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__16994__auto__){
var self__ = this;
var this__16994__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.Or.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__16985__auto__){
var self__ = this;
var this__16985__auto____$1 = this;
var h__16810__auto__ = self__.__hash;
if(!((h__16810__auto__ == null))){
return h__16810__auto__;
} else {
var h__16810__auto____$1 = cljs.core.hash_imap.call(null,this__16985__auto____$1);
self__.__hash = h__16810__auto____$1;

return h__16810__auto____$1;
}
});

datascript.parser.Or.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__16986__auto__,other__16987__auto__){
var self__ = this;
var this__16986__auto____$1 = this;
if(cljs.core.truth_((function (){var and__16363__auto__ = other__16987__auto__;
if(cljs.core.truth_(and__16363__auto__)){
var and__16363__auto____$1 = (this__16986__auto____$1.constructor === other__16987__auto__.constructor);
if(and__16363__auto____$1){
return cljs.core.equiv_map.call(null,this__16986__auto____$1,other__16987__auto__);
} else {
return and__16363__auto____$1;
}
} else {
return and__16363__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.Or.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__16999__auto__,k__17000__auto__){
var self__ = this;
var this__16999__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"rule-vars","rule-vars",1665972520),null,new cljs.core.Keyword(null,"source","source",-433931539),null,new cljs.core.Keyword(null,"clauses","clauses",1454841241),null], null), null),k__17000__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__16999__auto____$1),self__.__meta),k__17000__auto__);
} else {
return (new datascript.parser.Or(self__.source,self__.rule_vars,self__.clauses,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__17000__auto__)),null));
}
});

datascript.parser.Or.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__16997__auto__,k__16998__auto__,G__25884){
var self__ = this;
var this__16997__auto____$1 = this;
var pred__25888 = cljs.core.keyword_identical_QMARK_;
var expr__25889 = k__16998__auto__;
if(cljs.core.truth_(pred__25888.call(null,new cljs.core.Keyword(null,"source","source",-433931539),expr__25889))){
return (new datascript.parser.Or(G__25884,self__.rule_vars,self__.clauses,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__25888.call(null,new cljs.core.Keyword(null,"rule-vars","rule-vars",1665972520),expr__25889))){
return (new datascript.parser.Or(self__.source,G__25884,self__.clauses,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__25888.call(null,new cljs.core.Keyword(null,"clauses","clauses",1454841241),expr__25889))){
return (new datascript.parser.Or(self__.source,self__.rule_vars,G__25884,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Or(self__.source,self__.rule_vars,self__.clauses,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__16998__auto__,G__25884),null));
}
}
}
});

datascript.parser.Or.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__17002__auto__){
var self__ = this;
var this__17002__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source","source",-433931539),self__.source],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"rule-vars","rule-vars",1665972520),self__.rule_vars],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"clauses","clauses",1454841241),self__.clauses],null))], null),self__.__extmap));
});

datascript.parser.Or.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__16989__auto__,G__25884){
var self__ = this;
var this__16989__auto____$1 = this;
return (new datascript.parser.Or(self__.source,self__.rule_vars,self__.clauses,G__25884,self__.__extmap,self__.__hash));
});

datascript.parser.Or.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__16995__auto__,entry__16996__auto__){
var self__ = this;
var this__16995__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__16996__auto__)){
return cljs.core._assoc.call(null,this__16995__auto____$1,cljs.core._nth.call(null,entry__16996__auto__,(0)),cljs.core._nth.call(null,entry__16996__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__16995__auto____$1,entry__16996__auto__);
}
});

datascript.parser.Or.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.Or.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__20299__auto__,f25881){
var self__ = this;
var this__20299__auto____$1 = this;
var new__20300__auto__ = (new datascript.parser.Or(datascript.parser.postwalk.call(null,self__.source,f25881),datascript.parser.postwalk.call(null,self__.rule_vars,f25881),datascript.parser.postwalk.call(null,self__.clauses,f25881),null,null,null));
var temp__4423__auto__ = cljs.core.meta.call(null,this__20299__auto____$1);
if(cljs.core.truth_(temp__4423__auto__)){
var meta__20301__auto__ = temp__4423__auto__;
return cljs.core.with_meta.call(null,new__20300__auto__,meta__20301__auto__);
} else {
return new__20300__auto__;
}
});

datascript.parser.Or.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___20302__auto__,pred25882,acc25883){
var self__ = this;
var ___20302__auto____$1 = this;
return datascript.parser.collect.call(null,pred25882,self__.clauses,datascript.parser.collect.call(null,pred25882,self__.rule_vars,datascript.parser.collect.call(null,pred25882,self__.source,acc25883)));
});

datascript.parser.Or.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___20302__auto__,acc25883){
var self__ = this;
var ___20302__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,acc25883,self__.source),self__.rule_vars),self__.clauses);
});

datascript.parser.Or.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"source","source",1206599988,null),new cljs.core.Symbol(null,"rule-vars","rule-vars",-988463249,null),new cljs.core.Symbol(null,"clauses","clauses",-1199594528,null)], null);
});

datascript.parser.Or.cljs$lang$type = true;

datascript.parser.Or.cljs$lang$ctorPrSeq = (function (this__17024__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/Or");
});

datascript.parser.Or.cljs$lang$ctorPrWriter = (function (this__17024__auto__,writer__17025__auto__){
return cljs.core._write.call(null,writer__17025__auto__,"datascript.parser/Or");
});

datascript.parser.__GT_Or = (function datascript$parser$__GT_Or(source,rule_vars,clauses){
return (new datascript.parser.Or(source,rule_vars,clauses,null,null,null));
});

datascript.parser.map__GT_Or = (function datascript$parser$map__GT_Or(G__25886){
return (new datascript.parser.Or(new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(G__25886),new cljs.core.Keyword(null,"rule-vars","rule-vars",1665972520).cljs$core$IFn$_invoke$arity$1(G__25886),new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(G__25886),null,cljs.core.dissoc.call(null,G__25886,new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"rule-vars","rule-vars",1665972520),new cljs.core.Keyword(null,"clauses","clauses",1454841241)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.And = (function (clauses,__meta,__extmap,__hash){
this.clauses = clauses;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.And.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__16990__auto__,k__16991__auto__){
var self__ = this;
var this__16990__auto____$1 = this;
return cljs.core._lookup.call(null,this__16990__auto____$1,k__16991__auto__,null);
});

datascript.parser.And.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__16992__auto__,k25896,else__16993__auto__){
var self__ = this;
var this__16992__auto____$1 = this;
var G__25898 = (((k25896 instanceof cljs.core.Keyword))?k25896.fqn:null);
switch (G__25898) {
case "clauses":
return self__.clauses;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k25896,else__16993__auto__);

}
});

datascript.parser.And.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__17004__auto__,writer__17005__auto__,opts__17006__auto__){
var self__ = this;
var this__17004__auto____$1 = this;
var pr_pair__17007__auto__ = ((function (this__17004__auto____$1){
return (function (keyval__17008__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__17005__auto__,cljs.core.pr_writer,""," ","",opts__17006__auto__,keyval__17008__auto__);
});})(this__17004__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__17005__auto__,pr_pair__17007__auto__,"#datascript.parser.And{",", ","}",opts__17006__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"clauses","clauses",1454841241),self__.clauses],null))], null),self__.__extmap));
});

datascript.parser.And.prototype.cljs$core$IIterable$ = true;

datascript.parser.And.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__25895){
var self__ = this;
var G__25895__$1 = this;
return (new cljs.core.RecordIter((0),G__25895__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"clauses","clauses",1454841241)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.And.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__16988__auto__){
var self__ = this;
var this__16988__auto____$1 = this;
return self__.__meta;
});

datascript.parser.And.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__16984__auto__){
var self__ = this;
var this__16984__auto____$1 = this;
return (new datascript.parser.And(self__.clauses,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.And.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__16994__auto__){
var self__ = this;
var this__16994__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.And.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__16985__auto__){
var self__ = this;
var this__16985__auto____$1 = this;
var h__16810__auto__ = self__.__hash;
if(!((h__16810__auto__ == null))){
return h__16810__auto__;
} else {
var h__16810__auto____$1 = cljs.core.hash_imap.call(null,this__16985__auto____$1);
self__.__hash = h__16810__auto____$1;

return h__16810__auto____$1;
}
});

datascript.parser.And.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__16986__auto__,other__16987__auto__){
var self__ = this;
var this__16986__auto____$1 = this;
if(cljs.core.truth_((function (){var and__16363__auto__ = other__16987__auto__;
if(cljs.core.truth_(and__16363__auto__)){
var and__16363__auto____$1 = (this__16986__auto____$1.constructor === other__16987__auto__.constructor);
if(and__16363__auto____$1){
return cljs.core.equiv_map.call(null,this__16986__auto____$1,other__16987__auto__);
} else {
return and__16363__auto____$1;
}
} else {
return and__16363__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.And.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__16999__auto__,k__17000__auto__){
var self__ = this;
var this__16999__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"clauses","clauses",1454841241),null], null), null),k__17000__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__16999__auto____$1),self__.__meta),k__17000__auto__);
} else {
return (new datascript.parser.And(self__.clauses,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__17000__auto__)),null));
}
});

datascript.parser.And.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__16997__auto__,k__16998__auto__,G__25895){
var self__ = this;
var this__16997__auto____$1 = this;
var pred__25899 = cljs.core.keyword_identical_QMARK_;
var expr__25900 = k__16998__auto__;
if(cljs.core.truth_(pred__25899.call(null,new cljs.core.Keyword(null,"clauses","clauses",1454841241),expr__25900))){
return (new datascript.parser.And(G__25895,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.And(self__.clauses,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__16998__auto__,G__25895),null));
}
});

datascript.parser.And.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__17002__auto__){
var self__ = this;
var this__17002__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"clauses","clauses",1454841241),self__.clauses],null))], null),self__.__extmap));
});

datascript.parser.And.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__16989__auto__,G__25895){
var self__ = this;
var this__16989__auto____$1 = this;
return (new datascript.parser.And(self__.clauses,G__25895,self__.__extmap,self__.__hash));
});

datascript.parser.And.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__16995__auto__,entry__16996__auto__){
var self__ = this;
var this__16995__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__16996__auto__)){
return cljs.core._assoc.call(null,this__16995__auto____$1,cljs.core._nth.call(null,entry__16996__auto__,(0)),cljs.core._nth.call(null,entry__16996__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__16995__auto____$1,entry__16996__auto__);
}
});

datascript.parser.And.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.And.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__20299__auto__,f25892){
var self__ = this;
var this__20299__auto____$1 = this;
var new__20300__auto__ = (new datascript.parser.And(datascript.parser.postwalk.call(null,self__.clauses,f25892),null,null,null));
var temp__4423__auto__ = cljs.core.meta.call(null,this__20299__auto____$1);
if(cljs.core.truth_(temp__4423__auto__)){
var meta__20301__auto__ = temp__4423__auto__;
return cljs.core.with_meta.call(null,new__20300__auto__,meta__20301__auto__);
} else {
return new__20300__auto__;
}
});

datascript.parser.And.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___20302__auto__,pred25893,acc25894){
var self__ = this;
var ___20302__auto____$1 = this;
return datascript.parser.collect.call(null,pred25893,self__.clauses,acc25894);
});

datascript.parser.And.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___20302__auto__,acc25894){
var self__ = this;
var ___20302__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,acc25894,self__.clauses);
});

datascript.parser.And.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"clauses","clauses",-1199594528,null)], null);
});

datascript.parser.And.cljs$lang$type = true;

datascript.parser.And.cljs$lang$ctorPrSeq = (function (this__17024__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/And");
});

datascript.parser.And.cljs$lang$ctorPrWriter = (function (this__17024__auto__,writer__17025__auto__){
return cljs.core._write.call(null,writer__17025__auto__,"datascript.parser/And");
});

datascript.parser.__GT_And = (function datascript$parser$__GT_And(clauses){
return (new datascript.parser.And(clauses,null,null,null));
});

datascript.parser.map__GT_And = (function datascript$parser$map__GT_And(G__25897){
return (new datascript.parser.And(new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(G__25897),null,cljs.core.dissoc.call(null,G__25897,new cljs.core.Keyword(null,"clauses","clauses",1454841241)),null));
});

datascript.parser.parse_clause;

datascript.parser.parse_clauses;
datascript.parser.parse_pattern_el = (function datascript$parser$parse_pattern_el(form){
var or__16375__auto__ = datascript.parser.parse_placeholder.call(null,form);
if(cljs.core.truth_(or__16375__auto__)){
return or__16375__auto__;
} else {
var or__16375__auto____$1 = datascript.parser.parse_variable.call(null,form);
if(cljs.core.truth_(or__16375__auto____$1)){
return or__16375__auto____$1;
} else {
return datascript.parser.parse_constant.call(null,form);
}
}
});
datascript.parser.take_source = (function datascript$parser$take_source(form){
if(cljs.core.sequential_QMARK_.call(null,form)){
var temp__4423__auto__ = datascript.parser.parse_src_var.call(null,cljs.core.first.call(null,form));
if(cljs.core.truth_(temp__4423__auto__)){
var source_STAR_ = temp__4423__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [source_STAR_,cljs.core.next.call(null,form)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new datascript.parser.DefaultSrc(null,null,null)),form], null);
}
} else {
return null;
}
});
datascript.parser.parse_pattern = (function datascript$parser$parse_pattern(form){
var temp__4425__auto__ = datascript.parser.take_source.call(null,form);
if(cljs.core.truth_(temp__4425__auto__)){
var vec__25904 = temp__4425__auto__;
var source_STAR_ = cljs.core.nth.call(null,vec__25904,(0),null);
var next_form = cljs.core.nth.call(null,vec__25904,(1),null);
var temp__4425__auto____$1 = datascript.parser.parse_seq.call(null,datascript.parser.parse_pattern_el,next_form);
if(cljs.core.truth_(temp__4425__auto____$1)){
var pattern_STAR_ = temp__4425__auto____$1;
if(!(cljs.core.empty_QMARK_.call(null,pattern_STAR_))){
return datascript.parser.with_source.call(null,(new datascript.parser.Pattern(source_STAR_,pattern_STAR_,null,null,null)),form);
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Pattern could not be empty")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","where","parser/where",-966053850),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
} else {
return null;
}
} else {
return null;
}
});
datascript.parser.parse_call = (function datascript$parser$parse_call(form){
if(cljs.core.sequential_QMARK_.call(null,form)){
var vec__25906 = form;
var fn = cljs.core.nth.call(null,vec__25906,(0),null);
var args = cljs.core.nthnext.call(null,vec__25906,(1));
var args__$1 = (((args == null))?cljs.core.PersistentVector.EMPTY:args);
var fn_STAR_ = (function (){var or__16375__auto__ = datascript.parser.parse_plain_symbol.call(null,fn);
if(cljs.core.truth_(or__16375__auto__)){
return or__16375__auto__;
} else {
return datascript.parser.parse_variable.call(null,fn);
}
})();
var args_STAR_ = datascript.parser.parse_seq.call(null,datascript.parser.parse_fn_arg,args__$1);
if(cljs.core.truth_((function (){var and__16363__auto__ = fn_STAR_;
if(cljs.core.truth_(and__16363__auto__)){
return args_STAR_;
} else {
return and__16363__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fn_STAR_,args_STAR_], null);
} else {
return null;
}
} else {
return null;
}
});
datascript.parser.parse_pred = (function datascript$parser$parse_pred(form){
if(cljs.core.truth_(datascript.parser.of_size_QMARK_.call(null,form,(1)))){
var temp__4425__auto__ = datascript.parser.parse_call.call(null,cljs.core.first.call(null,form));
if(cljs.core.truth_(temp__4425__auto__)){
var vec__25908 = temp__4425__auto__;
var fn_STAR_ = cljs.core.nth.call(null,vec__25908,(0),null);
var args_STAR_ = cljs.core.nth.call(null,vec__25908,(1),null);
return datascript.parser.with_source.call(null,(new datascript.parser.Predicate(fn_STAR_,args_STAR_,null,null,null)),form);
} else {
return null;
}
} else {
return null;
}
});
datascript.parser.parse_fn = (function datascript$parser$parse_fn(form){
if(cljs.core.truth_(datascript.parser.of_size_QMARK_.call(null,form,(2)))){
var vec__25911 = form;
var call = cljs.core.nth.call(null,vec__25911,(0),null);
var binding = cljs.core.nth.call(null,vec__25911,(1),null);
var temp__4425__auto__ = datascript.parser.parse_call.call(null,call);
if(cljs.core.truth_(temp__4425__auto__)){
var vec__25912 = temp__4425__auto__;
var fn_STAR_ = cljs.core.nth.call(null,vec__25912,(0),null);
var args_STAR_ = cljs.core.nth.call(null,vec__25912,(1),null);
var temp__4425__auto____$1 = datascript.parser.parse_binding.call(null,binding);
if(cljs.core.truth_(temp__4425__auto____$1)){
var binding_STAR_ = temp__4425__auto____$1;
return datascript.parser.with_source.call(null,(new datascript.parser.Function(fn_STAR_,args_STAR_,binding_STAR_,null,null,null)),form);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
datascript.parser.parse_rule_expr = (function datascript$parser$parse_rule_expr(form){
var temp__4425__auto__ = datascript.parser.take_source.call(null,form);
if(cljs.core.truth_(temp__4425__auto__)){
var vec__25915 = temp__4425__auto__;
var source_STAR_ = cljs.core.nth.call(null,vec__25915,(0),null);
var next_form = cljs.core.nth.call(null,vec__25915,(1),null);
var vec__25916 = next_form;
var name = cljs.core.nth.call(null,vec__25916,(0),null);
var args = cljs.core.nthnext.call(null,vec__25916,(1));
var name_STAR_ = datascript.parser.parse_plain_symbol.call(null,name);
var args_STAR_ = datascript.parser.parse_seq.call(null,datascript.parser.parse_pattern_el,args);
if(cljs.core.truth_(name_STAR_)){
if(cljs.core.empty_QMARK_.call(null,args)){
throw cljs.core.ex_info.call(null,[cljs.core.str("rule-expr requires at least one argument")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","where","parser/where",-966053850),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
} else {
if((args_STAR_ == null)){
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse rule-expr arguments, expected [ (variable | constant | '_')+ ]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","where","parser/where",-966053850),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
} else {
return (new datascript.parser.RuleExpr(source_STAR_,name_STAR_,args_STAR_,null,null,null));

}
}
} else {
return null;
}
} else {
return null;
}
});
datascript.parser.collect_vars_acc = (function datascript$parser$collect_vars_acc(acc,form){
if((form instanceof datascript.parser.Variable)){
return cljs.core.conj.call(null,acc,form);
} else {
if((form instanceof datascript.parser.Not)){
return cljs.core.into.call(null,acc,new cljs.core.Keyword(null,"vars","vars",-2046957217).cljs$core$IFn$_invoke$arity$1(form));
} else {
if((form instanceof datascript.parser.Or)){
return datascript$parser$collect_vars_acc.call(null,acc,new cljs.core.Keyword(null,"rule-vars","rule-vars",1665972520).cljs$core$IFn$_invoke$arity$1(form));
} else {
if(((!((form == null)))?(((false) || (form.datascript$parser$ITraversable$))?true:(((!form.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,datascript.parser.ITraversable,form):false)):cljs.core.native_satisfies_QMARK_.call(null,datascript.parser.ITraversable,form))){
return datascript.parser._collect_vars.call(null,form,acc);
} else {
if(cljs.core.sequential_QMARK_.call(null,form)){
return cljs.core.reduce.call(null,datascript$parser$collect_vars_acc,acc,form);
} else {
return acc;

}
}
}
}
}
});
datascript.parser.collect_vars = (function datascript$parser$collect_vars(form){
return datascript.parser.collect_vars_acc.call(null,cljs.core.PersistentVector.EMPTY,form);
});
datascript.parser.collect_vars_distinct = (function datascript$parser$collect_vars_distinct(form){
return cljs.core.vec.call(null,cljs.core.distinct.call(null,datascript.parser.collect_vars.call(null,form)));
});
datascript.parser.validate_join_vars = (function datascript$parser$validate_join_vars(vars,clauses,form){
var undeclared_25919 = clojure.set.difference.call(null,cljs.core.set.call(null,vars),cljs.core.set.call(null,datascript.parser.collect_vars.call(null,clauses)));
if(cljs.core.empty_QMARK_.call(null,undeclared_25919)){
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Join variable not declared inside clauses: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.mapv.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),undeclared_25919)))].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","where","parser/where",-966053850),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}

if(cljs.core.empty_QMARK_.call(null,vars)){
throw cljs.core.ex_info.call(null,[cljs.core.str("Join variables should not be empty")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","where","parser/where",-966053850),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
} else {
return null;
}
});
datascript.parser.validate_not = (function datascript$parser$validate_not(clause,form){
datascript.parser.validate_join_vars.call(null,new cljs.core.Keyword(null,"vars","vars",-2046957217).cljs$core$IFn$_invoke$arity$1(clause),new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(clause),form);

return clause;
});
datascript.parser.parse_not = (function datascript$parser$parse_not(form){
var temp__4425__auto__ = datascript.parser.take_source.call(null,form);
if(cljs.core.truth_(temp__4425__auto__)){
var vec__25922 = temp__4425__auto__;
var source_STAR_ = cljs.core.nth.call(null,vec__25922,(0),null);
var next_form = cljs.core.nth.call(null,vec__25922,(1),null);
var vec__25923 = next_form;
var sym = cljs.core.nth.call(null,vec__25923,(0),null);
var clauses = cljs.core.nthnext.call(null,vec__25923,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"not","not",1044554643,null),sym)){
var temp__4423__auto__ = datascript.parser.parse_clauses.call(null,clauses);
if(cljs.core.truth_(temp__4423__auto__)){
var clauses_STAR_ = temp__4423__auto__;
return datascript.parser.validate_not.call(null,datascript.parser.with_source.call(null,(new datascript.parser.Not(source_STAR_,datascript.parser.collect_vars_distinct.call(null,clauses_STAR_),clauses_STAR_,null,null,null)),form),form);
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse 'not' clause, expected [ src-var? 'not' clause+ ]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","where","parser/where",-966053850),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
} else {
return null;
}
} else {
return null;
}
});
datascript.parser.parse_not_join = (function datascript$parser$parse_not_join(form){
var temp__4425__auto__ = datascript.parser.take_source.call(null,form);
if(cljs.core.truth_(temp__4425__auto__)){
var vec__25926 = temp__4425__auto__;
var source_STAR_ = cljs.core.nth.call(null,vec__25926,(0),null);
var next_form = cljs.core.nth.call(null,vec__25926,(1),null);
var vec__25927 = next_form;
var sym = cljs.core.nth.call(null,vec__25927,(0),null);
var vars = cljs.core.nth.call(null,vec__25927,(1),null);
var clauses = cljs.core.nthnext.call(null,vec__25927,(2));
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"not-join","not-join",-645515756,null),sym)){
var vars_STAR_ = datascript.parser.parse_seq.call(null,datascript.parser.parse_variable,vars);
var clauses_STAR_ = datascript.parser.parse_clauses.call(null,clauses);
if(cljs.core.truth_((function (){var and__16363__auto__ = vars_STAR_;
if(cljs.core.truth_(and__16363__auto__)){
return clauses_STAR_;
} else {
return and__16363__auto__;
}
})())){
return datascript.parser.validate_not.call(null,datascript.parser.with_source.call(null,(new datascript.parser.Not(source_STAR_,vars_STAR_,clauses_STAR_,null,null,null)),form),form);
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse 'not-join' clause, expected [ src-var? 'not-join' [variable+] clause+ ]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","where","parser/where",-966053850),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
} else {
return null;
}
} else {
return null;
}
});
datascript.parser.validate_or = (function datascript$parser$validate_or(clause,form){
var map__25936 = clause;
var map__25936__$1 = ((((!((map__25936 == null)))?((((map__25936.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25936.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25936):map__25936);
var map__25937 = cljs.core.get.call(null,map__25936__$1,new cljs.core.Keyword(null,"rule-vars","rule-vars",1665972520));
var map__25937__$1 = ((((!((map__25937 == null)))?((((map__25937.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25937.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25937):map__25937);
var required = cljs.core.get.call(null,map__25937__$1,new cljs.core.Keyword(null,"required","required",1807647006));
var free = cljs.core.get.call(null,map__25937__$1,new cljs.core.Keyword(null,"free","free",801364328));
var clauses = cljs.core.get.call(null,map__25936__$1,new cljs.core.Keyword(null,"clauses","clauses",1454841241));
var vars = cljs.core.concat.call(null,required,free);
var seq__25940_25944 = cljs.core.seq.call(null,clauses);
var chunk__25941_25945 = null;
var count__25942_25946 = (0);
var i__25943_25947 = (0);
while(true){
if((i__25943_25947 < count__25942_25946)){
var clause_25948__$1 = cljs.core._nth.call(null,chunk__25941_25945,i__25943_25947);
datascript.parser.validate_join_vars.call(null,vars,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause_25948__$1], null),form);

var G__25949 = seq__25940_25944;
var G__25950 = chunk__25941_25945;
var G__25951 = count__25942_25946;
var G__25952 = (i__25943_25947 + (1));
seq__25940_25944 = G__25949;
chunk__25941_25945 = G__25950;
count__25942_25946 = G__25951;
i__25943_25947 = G__25952;
continue;
} else {
var temp__4425__auto___25953 = cljs.core.seq.call(null,seq__25940_25944);
if(temp__4425__auto___25953){
var seq__25940_25954__$1 = temp__4425__auto___25953;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25940_25954__$1)){
var c__17179__auto___25955 = cljs.core.chunk_first.call(null,seq__25940_25954__$1);
var G__25956 = cljs.core.chunk_rest.call(null,seq__25940_25954__$1);
var G__25957 = c__17179__auto___25955;
var G__25958 = cljs.core.count.call(null,c__17179__auto___25955);
var G__25959 = (0);
seq__25940_25944 = G__25956;
chunk__25941_25945 = G__25957;
count__25942_25946 = G__25958;
i__25943_25947 = G__25959;
continue;
} else {
var clause_25960__$1 = cljs.core.first.call(null,seq__25940_25954__$1);
datascript.parser.validate_join_vars.call(null,vars,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause_25960__$1], null),form);

var G__25961 = cljs.core.next.call(null,seq__25940_25954__$1);
var G__25962 = null;
var G__25963 = (0);
var G__25964 = (0);
seq__25940_25944 = G__25961;
chunk__25941_25945 = G__25962;
count__25942_25946 = G__25963;
i__25943_25947 = G__25964;
continue;
}
} else {
}
}
break;
}

return clause;
});
datascript.parser.parse_and = (function datascript$parser$parse_and(form){
if((cljs.core.sequential_QMARK_.call(null,form)) && (cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"and","and",668631710,null),cljs.core.first.call(null,form)))){
var clauses_STAR_ = datascript.parser.parse_clauses.call(null,cljs.core.next.call(null,form));
if(cljs.core.truth_(cljs.core.not_empty.call(null,clauses_STAR_))){
return (new datascript.parser.And(clauses_STAR_,null,null,null));
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse 'and' clause, expected [ 'and' clause+ ]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","where","parser/where",-966053850),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
} else {
return null;
}
});
datascript.parser.parse_or = (function datascript$parser$parse_or(form){
var temp__4425__auto__ = datascript.parser.take_source.call(null,form);
if(cljs.core.truth_(temp__4425__auto__)){
var vec__25967 = temp__4425__auto__;
var source_STAR_ = cljs.core.nth.call(null,vec__25967,(0),null);
var next_form = cljs.core.nth.call(null,vec__25967,(1),null);
var vec__25968 = next_form;
var sym = cljs.core.nth.call(null,vec__25968,(0),null);
var clauses = cljs.core.nthnext.call(null,vec__25968,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"or","or",1876275696,null),sym)){
var temp__4423__auto__ = datascript.parser.parse_seq.call(null,cljs.core.some_fn.call(null,datascript.parser.parse_and,datascript.parser.parse_clause),clauses);
if(cljs.core.truth_(temp__4423__auto__)){
var clauses_STAR_ = temp__4423__auto__;
return datascript.parser.validate_or.call(null,datascript.parser.with_source.call(null,(new datascript.parser.Or(source_STAR_,(new datascript.parser.RuleVars(null,datascript.parser.collect_vars_distinct.call(null,clauses_STAR_),null,null,null)),clauses_STAR_,null,null,null)),form),form);
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse 'or' clause, expected [ src-var? 'or' clause+ ]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","where","parser/where",-966053850),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
} else {
return null;
}
} else {
return null;
}
});
datascript.parser.parse_or_join = (function datascript$parser$parse_or_join(form){
var temp__4425__auto__ = datascript.parser.take_source.call(null,form);
if(cljs.core.truth_(temp__4425__auto__)){
var vec__25971 = temp__4425__auto__;
var source_STAR_ = cljs.core.nth.call(null,vec__25971,(0),null);
var next_form = cljs.core.nth.call(null,vec__25971,(1),null);
var vec__25972 = next_form;
var sym = cljs.core.nth.call(null,vec__25972,(0),null);
var vars = cljs.core.nth.call(null,vec__25972,(1),null);
var clauses = cljs.core.nthnext.call(null,vec__25972,(2));
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"or-join","or-join",591375469,null),sym)){
var vars_STAR_ = datascript.parser.parse_rule_vars.call(null,vars);
var clauses_STAR_ = datascript.parser.parse_seq.call(null,cljs.core.some_fn.call(null,datascript.parser.parse_and,datascript.parser.parse_clause),clauses);
if(cljs.core.truth_((function (){var and__16363__auto__ = vars_STAR_;
if(cljs.core.truth_(and__16363__auto__)){
return clauses_STAR_;
} else {
return and__16363__auto__;
}
})())){
return datascript.parser.validate_or.call(null,datascript.parser.with_source.call(null,(new datascript.parser.Or(source_STAR_,vars_STAR_,clauses_STAR_,null,null,null)),form),form);
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse 'or-join' clause, expected [ src-var? 'or-join' [variable+] clause+ ]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","where","parser/where",-966053850),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
} else {
return null;
}
} else {
return null;
}
});
datascript.parser.parse_clause = (function datascript$parser$parse_clause(form){
var or__16375__auto__ = datascript.parser.parse_not.call(null,form);
if(cljs.core.truth_(or__16375__auto__)){
return or__16375__auto__;
} else {
var or__16375__auto____$1 = datascript.parser.parse_not_join.call(null,form);
if(cljs.core.truth_(or__16375__auto____$1)){
return or__16375__auto____$1;
} else {
var or__16375__auto____$2 = datascript.parser.parse_or.call(null,form);
if(cljs.core.truth_(or__16375__auto____$2)){
return or__16375__auto____$2;
} else {
var or__16375__auto____$3 = datascript.parser.parse_or_join.call(null,form);
if(cljs.core.truth_(or__16375__auto____$3)){
return or__16375__auto____$3;
} else {
var or__16375__auto____$4 = datascript.parser.parse_pred.call(null,form);
if(cljs.core.truth_(or__16375__auto____$4)){
return or__16375__auto____$4;
} else {
var or__16375__auto____$5 = datascript.parser.parse_fn.call(null,form);
if(cljs.core.truth_(or__16375__auto____$5)){
return or__16375__auto____$5;
} else {
var or__16375__auto____$6 = datascript.parser.parse_rule_expr.call(null,form);
if(cljs.core.truth_(or__16375__auto____$6)){
return or__16375__auto____$6;
} else {
var or__16375__auto____$7 = datascript.parser.parse_pattern.call(null,form);
if(cljs.core.truth_(or__16375__auto____$7)){
return or__16375__auto____$7;
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse clause, expected (data-pattern | pred-expr | fn-expr | rule-expr | not-clause | not-join-clause | or-clause | or-join-clause)")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","where","parser/where",-966053850),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
}
}
}
}
}
}
}
});
datascript.parser.parse_clauses = (function datascript$parser$parse_clauses(clauses){
return datascript.parser.parse_seq.call(null,datascript.parser.parse_clause,clauses);
});
datascript.parser.parse_where = (function datascript$parser$parse_where(form){
var or__16375__auto__ = datascript.parser.parse_clauses.call(null,form);
if(cljs.core.truth_(or__16375__auto__)){
return or__16375__auto__;
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse :where clause, expected [clause+]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","where","parser/where",-966053850),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.RuleBranch = (function (vars,clauses,__meta,__extmap,__hash){
this.vars = vars;
this.clauses = clauses;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.RuleBranch.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__16990__auto__,k__16991__auto__){
var self__ = this;
var this__16990__auto____$1 = this;
return cljs.core._lookup.call(null,this__16990__auto____$1,k__16991__auto__,null);
});

datascript.parser.RuleBranch.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__16992__auto__,k25978,else__16993__auto__){
var self__ = this;
var this__16992__auto____$1 = this;
var G__25980 = (((k25978 instanceof cljs.core.Keyword))?k25978.fqn:null);
switch (G__25980) {
case "vars":
return self__.vars;

break;
case "clauses":
return self__.clauses;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k25978,else__16993__auto__);

}
});

datascript.parser.RuleBranch.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__17004__auto__,writer__17005__auto__,opts__17006__auto__){
var self__ = this;
var this__17004__auto____$1 = this;
var pr_pair__17007__auto__ = ((function (this__17004__auto____$1){
return (function (keyval__17008__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__17005__auto__,cljs.core.pr_writer,""," ","",opts__17006__auto__,keyval__17008__auto__);
});})(this__17004__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__17005__auto__,pr_pair__17007__auto__,"#datascript.parser.RuleBranch{",", ","}",opts__17006__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"vars","vars",-2046957217),self__.vars],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"clauses","clauses",1454841241),self__.clauses],null))], null),self__.__extmap));
});

datascript.parser.RuleBranch.prototype.cljs$core$IIterable$ = true;

datascript.parser.RuleBranch.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__25977){
var self__ = this;
var G__25977__$1 = this;
return (new cljs.core.RecordIter((0),G__25977__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vars","vars",-2046957217),new cljs.core.Keyword(null,"clauses","clauses",1454841241)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.RuleBranch.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__16988__auto__){
var self__ = this;
var this__16988__auto____$1 = this;
return self__.__meta;
});

datascript.parser.RuleBranch.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__16984__auto__){
var self__ = this;
var this__16984__auto____$1 = this;
return (new datascript.parser.RuleBranch(self__.vars,self__.clauses,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.RuleBranch.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__16994__auto__){
var self__ = this;
var this__16994__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.RuleBranch.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__16985__auto__){
var self__ = this;
var this__16985__auto____$1 = this;
var h__16810__auto__ = self__.__hash;
if(!((h__16810__auto__ == null))){
return h__16810__auto__;
} else {
var h__16810__auto____$1 = cljs.core.hash_imap.call(null,this__16985__auto____$1);
self__.__hash = h__16810__auto____$1;

return h__16810__auto____$1;
}
});

datascript.parser.RuleBranch.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__16986__auto__,other__16987__auto__){
var self__ = this;
var this__16986__auto____$1 = this;
if(cljs.core.truth_((function (){var and__16363__auto__ = other__16987__auto__;
if(cljs.core.truth_(and__16363__auto__)){
var and__16363__auto____$1 = (this__16986__auto____$1.constructor === other__16987__auto__.constructor);
if(and__16363__auto____$1){
return cljs.core.equiv_map.call(null,this__16986__auto____$1,other__16987__auto__);
} else {
return and__16363__auto____$1;
}
} else {
return and__16363__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.RuleBranch.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__16999__auto__,k__17000__auto__){
var self__ = this;
var this__16999__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"clauses","clauses",1454841241),null,new cljs.core.Keyword(null,"vars","vars",-2046957217),null], null), null),k__17000__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__16999__auto____$1),self__.__meta),k__17000__auto__);
} else {
return (new datascript.parser.RuleBranch(self__.vars,self__.clauses,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__17000__auto__)),null));
}
});

datascript.parser.RuleBranch.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__16997__auto__,k__16998__auto__,G__25977){
var self__ = this;
var this__16997__auto____$1 = this;
var pred__25981 = cljs.core.keyword_identical_QMARK_;
var expr__25982 = k__16998__auto__;
if(cljs.core.truth_(pred__25981.call(null,new cljs.core.Keyword(null,"vars","vars",-2046957217),expr__25982))){
return (new datascript.parser.RuleBranch(G__25977,self__.clauses,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__25981.call(null,new cljs.core.Keyword(null,"clauses","clauses",1454841241),expr__25982))){
return (new datascript.parser.RuleBranch(self__.vars,G__25977,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.RuleBranch(self__.vars,self__.clauses,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__16998__auto__,G__25977),null));
}
}
});

datascript.parser.RuleBranch.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__17002__auto__){
var self__ = this;
var this__17002__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"vars","vars",-2046957217),self__.vars],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"clauses","clauses",1454841241),self__.clauses],null))], null),self__.__extmap));
});

datascript.parser.RuleBranch.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__16989__auto__,G__25977){
var self__ = this;
var this__16989__auto____$1 = this;
return (new datascript.parser.RuleBranch(self__.vars,self__.clauses,G__25977,self__.__extmap,self__.__hash));
});

datascript.parser.RuleBranch.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__16995__auto__,entry__16996__auto__){
var self__ = this;
var this__16995__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__16996__auto__)){
return cljs.core._assoc.call(null,this__16995__auto____$1,cljs.core._nth.call(null,entry__16996__auto__,(0)),cljs.core._nth.call(null,entry__16996__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__16995__auto____$1,entry__16996__auto__);
}
});

datascript.parser.RuleBranch.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.RuleBranch.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__20299__auto__,f25974){
var self__ = this;
var this__20299__auto____$1 = this;
var new__20300__auto__ = (new datascript.parser.RuleBranch(datascript.parser.postwalk.call(null,self__.vars,f25974),datascript.parser.postwalk.call(null,self__.clauses,f25974),null,null,null));
var temp__4423__auto__ = cljs.core.meta.call(null,this__20299__auto____$1);
if(cljs.core.truth_(temp__4423__auto__)){
var meta__20301__auto__ = temp__4423__auto__;
return cljs.core.with_meta.call(null,new__20300__auto__,meta__20301__auto__);
} else {
return new__20300__auto__;
}
});

datascript.parser.RuleBranch.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___20302__auto__,pred25975,acc25976){
var self__ = this;
var ___20302__auto____$1 = this;
return datascript.parser.collect.call(null,pred25975,self__.clauses,datascript.parser.collect.call(null,pred25975,self__.vars,acc25976));
});

datascript.parser.RuleBranch.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___20302__auto__,acc25976){
var self__ = this;
var ___20302__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,acc25976,self__.vars),self__.clauses);
});

datascript.parser.RuleBranch.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"vars","vars",-406425690,null),new cljs.core.Symbol(null,"clauses","clauses",-1199594528,null)], null);
});

datascript.parser.RuleBranch.cljs$lang$type = true;

datascript.parser.RuleBranch.cljs$lang$ctorPrSeq = (function (this__17024__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/RuleBranch");
});

datascript.parser.RuleBranch.cljs$lang$ctorPrWriter = (function (this__17024__auto__,writer__17025__auto__){
return cljs.core._write.call(null,writer__17025__auto__,"datascript.parser/RuleBranch");
});

datascript.parser.__GT_RuleBranch = (function datascript$parser$__GT_RuleBranch(vars,clauses){
return (new datascript.parser.RuleBranch(vars,clauses,null,null,null));
});

datascript.parser.map__GT_RuleBranch = (function datascript$parser$map__GT_RuleBranch(G__25979){
return (new datascript.parser.RuleBranch(new cljs.core.Keyword(null,"vars","vars",-2046957217).cljs$core$IFn$_invoke$arity$1(G__25979),new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(G__25979),null,cljs.core.dissoc.call(null,G__25979,new cljs.core.Keyword(null,"vars","vars",-2046957217),new cljs.core.Keyword(null,"clauses","clauses",1454841241)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.Rule = (function (name,branches,__meta,__extmap,__hash){
this.name = name;
this.branches = branches;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.Rule.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__16990__auto__,k__16991__auto__){
var self__ = this;
var this__16990__auto____$1 = this;
return cljs.core._lookup.call(null,this__16990__auto____$1,k__16991__auto__,null);
});

datascript.parser.Rule.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__16992__auto__,k25989,else__16993__auto__){
var self__ = this;
var this__16992__auto____$1 = this;
var G__25991 = (((k25989 instanceof cljs.core.Keyword))?k25989.fqn:null);
switch (G__25991) {
case "name":
return self__.name;

break;
case "branches":
return self__.branches;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k25989,else__16993__auto__);

}
});

datascript.parser.Rule.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__17004__auto__,writer__17005__auto__,opts__17006__auto__){
var self__ = this;
var this__17004__auto____$1 = this;
var pr_pair__17007__auto__ = ((function (this__17004__auto____$1){
return (function (keyval__17008__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__17005__auto__,cljs.core.pr_writer,""," ","",opts__17006__auto__,keyval__17008__auto__);
});})(this__17004__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__17005__auto__,pr_pair__17007__auto__,"#datascript.parser.Rule{",", ","}",opts__17006__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"branches","branches",-1240337268),self__.branches],null))], null),self__.__extmap));
});

datascript.parser.Rule.prototype.cljs$core$IIterable$ = true;

datascript.parser.Rule.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__25988){
var self__ = this;
var G__25988__$1 = this;
return (new cljs.core.RecordIter((0),G__25988__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"branches","branches",-1240337268)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.Rule.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__16988__auto__){
var self__ = this;
var this__16988__auto____$1 = this;
return self__.__meta;
});

datascript.parser.Rule.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__16984__auto__){
var self__ = this;
var this__16984__auto____$1 = this;
return (new datascript.parser.Rule(self__.name,self__.branches,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.Rule.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__16994__auto__){
var self__ = this;
var this__16994__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.Rule.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__16985__auto__){
var self__ = this;
var this__16985__auto____$1 = this;
var h__16810__auto__ = self__.__hash;
if(!((h__16810__auto__ == null))){
return h__16810__auto__;
} else {
var h__16810__auto____$1 = cljs.core.hash_imap.call(null,this__16985__auto____$1);
self__.__hash = h__16810__auto____$1;

return h__16810__auto____$1;
}
});

datascript.parser.Rule.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__16986__auto__,other__16987__auto__){
var self__ = this;
var this__16986__auto____$1 = this;
if(cljs.core.truth_((function (){var and__16363__auto__ = other__16987__auto__;
if(cljs.core.truth_(and__16363__auto__)){
var and__16363__auto____$1 = (this__16986__auto____$1.constructor === other__16987__auto__.constructor);
if(and__16363__auto____$1){
return cljs.core.equiv_map.call(null,this__16986__auto____$1,other__16987__auto__);
} else {
return and__16363__auto____$1;
}
} else {
return and__16363__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.Rule.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__16999__auto__,k__17000__auto__){
var self__ = this;
var this__16999__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),null,new cljs.core.Keyword(null,"branches","branches",-1240337268),null], null), null),k__17000__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__16999__auto____$1),self__.__meta),k__17000__auto__);
} else {
return (new datascript.parser.Rule(self__.name,self__.branches,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__17000__auto__)),null));
}
});

datascript.parser.Rule.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__16997__auto__,k__16998__auto__,G__25988){
var self__ = this;
var this__16997__auto____$1 = this;
var pred__25992 = cljs.core.keyword_identical_QMARK_;
var expr__25993 = k__16998__auto__;
if(cljs.core.truth_(pred__25992.call(null,new cljs.core.Keyword(null,"name","name",1843675177),expr__25993))){
return (new datascript.parser.Rule(G__25988,self__.branches,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__25992.call(null,new cljs.core.Keyword(null,"branches","branches",-1240337268),expr__25993))){
return (new datascript.parser.Rule(self__.name,G__25988,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Rule(self__.name,self__.branches,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__16998__auto__,G__25988),null));
}
}
});

datascript.parser.Rule.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__17002__auto__){
var self__ = this;
var this__17002__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"branches","branches",-1240337268),self__.branches],null))], null),self__.__extmap));
});

datascript.parser.Rule.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__16989__auto__,G__25988){
var self__ = this;
var this__16989__auto____$1 = this;
return (new datascript.parser.Rule(self__.name,self__.branches,G__25988,self__.__extmap,self__.__hash));
});

datascript.parser.Rule.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__16995__auto__,entry__16996__auto__){
var self__ = this;
var this__16995__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__16996__auto__)){
return cljs.core._assoc.call(null,this__16995__auto____$1,cljs.core._nth.call(null,entry__16996__auto__,(0)),cljs.core._nth.call(null,entry__16996__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__16995__auto____$1,entry__16996__auto__);
}
});

datascript.parser.Rule.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.Rule.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__20299__auto__,f25985){
var self__ = this;
var this__20299__auto____$1 = this;
var new__20300__auto__ = (new datascript.parser.Rule(datascript.parser.postwalk.call(null,self__.name,f25985),datascript.parser.postwalk.call(null,self__.branches,f25985),null,null,null));
var temp__4423__auto__ = cljs.core.meta.call(null,this__20299__auto____$1);
if(cljs.core.truth_(temp__4423__auto__)){
var meta__20301__auto__ = temp__4423__auto__;
return cljs.core.with_meta.call(null,new__20300__auto__,meta__20301__auto__);
} else {
return new__20300__auto__;
}
});

datascript.parser.Rule.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___20302__auto__,pred25986,acc25987){
var self__ = this;
var ___20302__auto____$1 = this;
return datascript.parser.collect.call(null,pred25986,self__.branches,datascript.parser.collect.call(null,pred25986,self__.name,acc25987));
});

datascript.parser.Rule.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___20302__auto__,acc25987){
var self__ = this;
var ___20302__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,acc25987,self__.name),self__.branches);
});

datascript.parser.Rule.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.Symbol(null,"branches","branches",400194259,null)], null);
});

datascript.parser.Rule.cljs$lang$type = true;

datascript.parser.Rule.cljs$lang$ctorPrSeq = (function (this__17024__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/Rule");
});

datascript.parser.Rule.cljs$lang$ctorPrWriter = (function (this__17024__auto__,writer__17025__auto__){
return cljs.core._write.call(null,writer__17025__auto__,"datascript.parser/Rule");
});

datascript.parser.__GT_Rule = (function datascript$parser$__GT_Rule(name,branches){
return (new datascript.parser.Rule(name,branches,null,null,null));
});

datascript.parser.map__GT_Rule = (function datascript$parser$map__GT_Rule(G__25990){
return (new datascript.parser.Rule(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(G__25990),new cljs.core.Keyword(null,"branches","branches",-1240337268).cljs$core$IFn$_invoke$arity$1(G__25990),null,cljs.core.dissoc.call(null,G__25990,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"branches","branches",-1240337268)),null));
});

datascript.parser.validate_vars = (function datascript$parser$validate_vars(vars,clauses,form){
var declared_vars = datascript.parser.collect.call(null,(function (p1__25996_SHARP_){
return (p1__25996_SHARP_ instanceof datascript.parser.Variable);
}),vars,cljs.core.PersistentHashSet.EMPTY);
var used_vars = datascript.parser.collect.call(null,((function (declared_vars){
return (function (p1__25997_SHARP_){
return (p1__25997_SHARP_ instanceof datascript.parser.Variable);
});})(declared_vars))
,clauses,cljs.core.PersistentHashSet.EMPTY);
var undeclared_vars = clojure.set.difference.call(null,used_vars,declared_vars);
if(cljs.core.empty_QMARK_.call(null,undeclared_vars)){
return null;
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Reference to the unknown variables: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),undeclared_vars)))].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","rule","parser/rule",-464044566),new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"vars","vars",-2046957217),undeclared_vars], null));
}
});
datascript.parser.parse_rule = (function datascript$parser$parse_rule(form){
if(cljs.core.sequential_QMARK_.call(null,form)){
var vec__26000 = form;
var head = cljs.core.nth.call(null,vec__26000,(0),null);
var clauses = cljs.core.nthnext.call(null,vec__26000,(1));
if(cljs.core.sequential_QMARK_.call(null,head)){
var vec__26001 = head;
var name = cljs.core.nth.call(null,vec__26001,(0),null);
var vars = cljs.core.nthnext.call(null,vec__26001,(1));
var name_STAR_ = (function (){var or__16375__auto__ = datascript.parser.parse_plain_symbol.call(null,name);
if(cljs.core.truth_(or__16375__auto__)){
return or__16375__auto__;
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse rule name, expected plain-symbol")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","rule","parser/rule",-464044566),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
})();
var vars_STAR_ = datascript.parser.parse_rule_vars.call(null,vars);
var clauses_STAR_ = (function (){var or__16375__auto__ = cljs.core.not_empty.call(null,datascript.parser.parse_clauses.call(null,clauses));
if(cljs.core.truth_(or__16375__auto__)){
return or__16375__auto__;
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Rule branch should have clauses")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","rule","parser/rule",-464044566),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
})();
datascript.parser.validate_vars.call(null,vars_STAR_,clauses_STAR_,form);

return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),name_STAR_,new cljs.core.Keyword(null,"vars","vars",-2046957217),vars_STAR_,new cljs.core.Keyword(null,"clauses","clauses",1454841241),clauses_STAR_], null);
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse rule head, expected [rule-name rule-vars]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","rule","parser/rule",-464044566),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse rule, expected [rule-head clause+]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","rule","parser/rule",-464044566),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
});
datascript.parser.validate_arity = (function datascript$parser$validate_arity(name,branches){
var vars0 = new cljs.core.Keyword(null,"vars","vars",-2046957217).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,branches));
var arity0 = datascript.parser.rule_vars_arity.call(null,vars0);
var seq__26008 = cljs.core.seq.call(null,cljs.core.next.call(null,branches));
var chunk__26010 = null;
var count__26011 = (0);
var i__26012 = (0);
while(true){
if((i__26012 < count__26011)){
var b = cljs.core._nth.call(null,chunk__26010,i__26012);
var vars_26014 = new cljs.core.Keyword(null,"vars","vars",-2046957217).cljs$core$IFn$_invoke$arity$1(b);
if(cljs.core.not_EQ_.call(null,arity0,datascript.parser.rule_vars_arity.call(null,vars_26014))){
throw cljs.core.ex_info.call(null,[cljs.core.str("Arity mismatch for rule '"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696).cljs$core$IFn$_invoke$arity$1(name))),cljs.core.str("': "),cljs.core.str(cljs.core.pr_str.call(null,datascript.parser.flatten_rule_vars.call(null,vars0))),cljs.core.str(" vs. "),cljs.core.str(cljs.core.pr_str.call(null,datascript.parser.flatten_rule_vars.call(null,vars_26014)))].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","rule","parser/rule",-464044566),new cljs.core.Keyword(null,"rule","rule",729973257),name], null));
} else {
}

var G__26015 = seq__26008;
var G__26016 = chunk__26010;
var G__26017 = count__26011;
var G__26018 = (i__26012 + (1));
seq__26008 = G__26015;
chunk__26010 = G__26016;
count__26011 = G__26017;
i__26012 = G__26018;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__26008);
if(temp__4425__auto__){
var seq__26008__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26008__$1)){
var c__17179__auto__ = cljs.core.chunk_first.call(null,seq__26008__$1);
var G__26019 = cljs.core.chunk_rest.call(null,seq__26008__$1);
var G__26020 = c__17179__auto__;
var G__26021 = cljs.core.count.call(null,c__17179__auto__);
var G__26022 = (0);
seq__26008 = G__26019;
chunk__26010 = G__26020;
count__26011 = G__26021;
i__26012 = G__26022;
continue;
} else {
var b = cljs.core.first.call(null,seq__26008__$1);
var vars_26023 = new cljs.core.Keyword(null,"vars","vars",-2046957217).cljs$core$IFn$_invoke$arity$1(b);
if(cljs.core.not_EQ_.call(null,arity0,datascript.parser.rule_vars_arity.call(null,vars_26023))){
throw cljs.core.ex_info.call(null,[cljs.core.str("Arity mismatch for rule '"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696).cljs$core$IFn$_invoke$arity$1(name))),cljs.core.str("': "),cljs.core.str(cljs.core.pr_str.call(null,datascript.parser.flatten_rule_vars.call(null,vars0))),cljs.core.str(" vs. "),cljs.core.str(cljs.core.pr_str.call(null,datascript.parser.flatten_rule_vars.call(null,vars_26023)))].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","rule","parser/rule",-464044566),new cljs.core.Keyword(null,"rule","rule",729973257),name], null));
} else {
}

var G__26024 = cljs.core.next.call(null,seq__26008__$1);
var G__26025 = null;
var G__26026 = (0);
var G__26027 = (0);
seq__26008 = G__26024;
chunk__26010 = G__26025;
count__26011 = G__26026;
i__26012 = G__26027;
continue;
}
} else {
return null;
}
}
break;
}
});
datascript.parser.parse_rules = (function datascript$parser$parse_rules(form){
return cljs.core.vec.call(null,(function (){var iter__17148__auto__ = (function datascript$parser$parse_rules_$_iter__26037(s__26038){
return (new cljs.core.LazySeq(null,(function (){
var s__26038__$1 = s__26038;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__26038__$1);
if(temp__4425__auto__){
var s__26038__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__26038__$2)){
var c__17146__auto__ = cljs.core.chunk_first.call(null,s__26038__$2);
var size__17147__auto__ = cljs.core.count.call(null,c__17146__auto__);
var b__26040 = cljs.core.chunk_buffer.call(null,size__17147__auto__);
if((function (){var i__26039 = (0);
while(true){
if((i__26039 < size__17147__auto__)){
var vec__26043 = cljs.core._nth.call(null,c__17146__auto__,i__26039);
var name = cljs.core.nth.call(null,vec__26043,(0),null);
var branches = cljs.core.nth.call(null,vec__26043,(1),null);
var branches__$1 = cljs.core.mapv.call(null,((function (i__26039,vec__26043,name,branches,c__17146__auto__,size__17147__auto__,b__26040,s__26038__$2,temp__4425__auto__){
return (function (p1__26028_SHARP_){
return (new datascript.parser.RuleBranch(new cljs.core.Keyword(null,"vars","vars",-2046957217).cljs$core$IFn$_invoke$arity$1(p1__26028_SHARP_),new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(p1__26028_SHARP_),null,null,null));
});})(i__26039,vec__26043,name,branches,c__17146__auto__,size__17147__auto__,b__26040,s__26038__$2,temp__4425__auto__))
,branches);
cljs.core.chunk_append.call(null,b__26040,(function (){
datascript.parser.validate_arity.call(null,name,branches__$1);

return (new datascript.parser.Rule(name,branches__$1,null,null,null));
})()
);

var G__26045 = (i__26039 + (1));
i__26039 = G__26045;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26040),datascript$parser$parse_rules_$_iter__26037.call(null,cljs.core.chunk_rest.call(null,s__26038__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26040),null);
}
} else {
var vec__26044 = cljs.core.first.call(null,s__26038__$2);
var name = cljs.core.nth.call(null,vec__26044,(0),null);
var branches = cljs.core.nth.call(null,vec__26044,(1),null);
var branches__$1 = cljs.core.mapv.call(null,((function (vec__26044,name,branches,s__26038__$2,temp__4425__auto__){
return (function (p1__26028_SHARP_){
return (new datascript.parser.RuleBranch(new cljs.core.Keyword(null,"vars","vars",-2046957217).cljs$core$IFn$_invoke$arity$1(p1__26028_SHARP_),new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(p1__26028_SHARP_),null,null,null));
});})(vec__26044,name,branches,s__26038__$2,temp__4425__auto__))
,branches);
return cljs.core.cons.call(null,(function (){
datascript.parser.validate_arity.call(null,name,branches__$1);

return (new datascript.parser.Rule(name,branches__$1,null,null,null));
})()
,datascript$parser$parse_rules_$_iter__26037.call(null,cljs.core.rest.call(null,s__26038__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__17148__auto__.call(null,cljs.core.group_by.call(null,new cljs.core.Keyword(null,"name","name",1843675177),datascript.parser.parse_seq.call(null,datascript.parser.parse_rule,form)));
})());
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.Query = (function (find,with$,in$,where,__meta,__extmap,__hash){
this.find = find;
this.with$ = with$;
this.in$ = in$;
this.where = where;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.Query.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__16990__auto__,k__16991__auto__){
var self__ = this;
var this__16990__auto____$1 = this;
return cljs.core._lookup.call(null,this__16990__auto____$1,k__16991__auto__,null);
});

datascript.parser.Query.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__16992__auto__,k26050,else__16993__auto__){
var self__ = this;
var this__16992__auto____$1 = this;
var G__26052 = (((k26050 instanceof cljs.core.Keyword))?k26050.fqn:null);
switch (G__26052) {
case "find":
return self__.find;

break;
case "with":
return self__.with$;

break;
case "in":
return self__.in$;

break;
case "where":
return self__.where;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k26050,else__16993__auto__);

}
});

datascript.parser.Query.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__17004__auto__,writer__17005__auto__,opts__17006__auto__){
var self__ = this;
var this__17004__auto____$1 = this;
var pr_pair__17007__auto__ = ((function (this__17004__auto____$1){
return (function (keyval__17008__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__17005__auto__,cljs.core.pr_writer,""," ","",opts__17006__auto__,keyval__17008__auto__);
});})(this__17004__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__17005__auto__,pr_pair__17007__auto__,"#datascript.parser.Query{",", ","}",opts__17006__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"find","find",496279456),self__.find],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"with","with",-1536296876),self__.with$],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"in","in",-1531184865),self__.in$],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"where","where",-2044795965),self__.where],null))], null),self__.__extmap));
});

datascript.parser.Query.prototype.cljs$core$IIterable$ = true;

datascript.parser.Query.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__26049){
var self__ = this;
var G__26049__$1 = this;
return (new cljs.core.RecordIter((0),G__26049__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Keyword(null,"with","with",-1536296876),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Keyword(null,"where","where",-2044795965)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

datascript.parser.Query.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__16988__auto__){
var self__ = this;
var this__16988__auto____$1 = this;
return self__.__meta;
});

datascript.parser.Query.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__16984__auto__){
var self__ = this;
var this__16984__auto____$1 = this;
return (new datascript.parser.Query(self__.find,self__.with$,self__.in$,self__.where,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.Query.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__16994__auto__){
var self__ = this;
var this__16994__auto____$1 = this;
return (4 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.Query.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__16985__auto__){
var self__ = this;
var this__16985__auto____$1 = this;
var h__16810__auto__ = self__.__hash;
if(!((h__16810__auto__ == null))){
return h__16810__auto__;
} else {
var h__16810__auto____$1 = cljs.core.hash_imap.call(null,this__16985__auto____$1);
self__.__hash = h__16810__auto____$1;

return h__16810__auto____$1;
}
});

datascript.parser.Query.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__16986__auto__,other__16987__auto__){
var self__ = this;
var this__16986__auto____$1 = this;
if(cljs.core.truth_((function (){var and__16363__auto__ = other__16987__auto__;
if(cljs.core.truth_(and__16363__auto__)){
var and__16363__auto____$1 = (this__16986__auto____$1.constructor === other__16987__auto__.constructor);
if(and__16363__auto____$1){
return cljs.core.equiv_map.call(null,this__16986__auto____$1,other__16987__auto__);
} else {
return and__16363__auto____$1;
}
} else {
return and__16363__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.Query.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__16999__auto__,k__17000__auto__){
var self__ = this;
var this__16999__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"find","find",496279456),null,new cljs.core.Keyword(null,"where","where",-2044795965),null,new cljs.core.Keyword(null,"with","with",-1536296876),null,new cljs.core.Keyword(null,"in","in",-1531184865),null], null), null),k__17000__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__16999__auto____$1),self__.__meta),k__17000__auto__);
} else {
return (new datascript.parser.Query(self__.find,self__.with$,self__.in$,self__.where,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__17000__auto__)),null));
}
});

datascript.parser.Query.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__16997__auto__,k__16998__auto__,G__26049){
var self__ = this;
var this__16997__auto____$1 = this;
var pred__26053 = cljs.core.keyword_identical_QMARK_;
var expr__26054 = k__16998__auto__;
if(cljs.core.truth_(pred__26053.call(null,new cljs.core.Keyword(null,"find","find",496279456),expr__26054))){
return (new datascript.parser.Query(G__26049,self__.with$,self__.in$,self__.where,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26053.call(null,new cljs.core.Keyword(null,"with","with",-1536296876),expr__26054))){
return (new datascript.parser.Query(self__.find,G__26049,self__.in$,self__.where,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26053.call(null,new cljs.core.Keyword(null,"in","in",-1531184865),expr__26054))){
return (new datascript.parser.Query(self__.find,self__.with$,G__26049,self__.where,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26053.call(null,new cljs.core.Keyword(null,"where","where",-2044795965),expr__26054))){
return (new datascript.parser.Query(self__.find,self__.with$,self__.in$,G__26049,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Query(self__.find,self__.with$,self__.in$,self__.where,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__16998__auto__,G__26049),null));
}
}
}
}
});

datascript.parser.Query.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__17002__auto__){
var self__ = this;
var this__17002__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"find","find",496279456),self__.find],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"with","with",-1536296876),self__.with$],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"in","in",-1531184865),self__.in$],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"where","where",-2044795965),self__.where],null))], null),self__.__extmap));
});

datascript.parser.Query.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__16989__auto__,G__26049){
var self__ = this;
var this__16989__auto____$1 = this;
return (new datascript.parser.Query(self__.find,self__.with$,self__.in$,self__.where,G__26049,self__.__extmap,self__.__hash));
});

datascript.parser.Query.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__16995__auto__,entry__16996__auto__){
var self__ = this;
var this__16995__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__16996__auto__)){
return cljs.core._assoc.call(null,this__16995__auto____$1,cljs.core._nth.call(null,entry__16996__auto__,(0)),cljs.core._nth.call(null,entry__16996__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__16995__auto____$1,entry__16996__auto__);
}
});

datascript.parser.Query.prototype.datascript$parser$ITraversable$ = true;

datascript.parser.Query.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__20299__auto__,f26046){
var self__ = this;
var this__20299__auto____$1 = this;
var new__20300__auto__ = (new datascript.parser.Query(datascript.parser.postwalk.call(null,self__.find,f26046),datascript.parser.postwalk.call(null,self__.with$,f26046),datascript.parser.postwalk.call(null,self__.in$,f26046),datascript.parser.postwalk.call(null,self__.where,f26046),null,null,null));
var temp__4423__auto__ = cljs.core.meta.call(null,this__20299__auto____$1);
if(cljs.core.truth_(temp__4423__auto__)){
var meta__20301__auto__ = temp__4423__auto__;
return cljs.core.with_meta.call(null,new__20300__auto__,meta__20301__auto__);
} else {
return new__20300__auto__;
}
});

datascript.parser.Query.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___20302__auto__,pred26047,acc26048){
var self__ = this;
var ___20302__auto____$1 = this;
return datascript.parser.collect.call(null,pred26047,self__.where,datascript.parser.collect.call(null,pred26047,self__.in$,datascript.parser.collect.call(null,pred26047,self__.with$,datascript.parser.collect.call(null,pred26047,self__.find,acc26048))));
});

datascript.parser.Query.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___20302__auto__,acc26048){
var self__ = this;
var ___20302__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,acc26048,self__.find),self__.with$),self__.in$),self__.where);
});

datascript.parser.Query.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"find","find",2136810983,null),new cljs.core.Symbol(null,"with","with",104234651,null),new cljs.core.Symbol(null,"in","in",109346662,null),new cljs.core.Symbol(null,"where","where",-404264438,null)], null);
});

datascript.parser.Query.cljs$lang$type = true;

datascript.parser.Query.cljs$lang$ctorPrSeq = (function (this__17024__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/Query");
});

datascript.parser.Query.cljs$lang$ctorPrWriter = (function (this__17024__auto__,writer__17025__auto__){
return cljs.core._write.call(null,writer__17025__auto__,"datascript.parser/Query");
});

datascript.parser.__GT_Query = (function datascript$parser$__GT_Query(find,with$,in$,where){
return (new datascript.parser.Query(find,with$,in$,where,null,null,null));
});

datascript.parser.map__GT_Query = (function datascript$parser$map__GT_Query(G__26051){
return (new datascript.parser.Query(new cljs.core.Keyword(null,"find","find",496279456).cljs$core$IFn$_invoke$arity$1(G__26051),new cljs.core.Keyword(null,"with","with",-1536296876).cljs$core$IFn$_invoke$arity$1(G__26051),new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(G__26051),new cljs.core.Keyword(null,"where","where",-2044795965).cljs$core$IFn$_invoke$arity$1(G__26051),null,cljs.core.dissoc.call(null,G__26051,new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Keyword(null,"with","with",-1536296876),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Keyword(null,"where","where",-2044795965)),null));
});

datascript.parser.query__GT_map = (function datascript$parser$query__GT_map(query){
var parsed = cljs.core.PersistentArrayMap.EMPTY;
var key = null;
var qs = query;
while(true){
var temp__4423__auto__ = cljs.core.first.call(null,qs);
if(cljs.core.truth_(temp__4423__auto__)){
var q = temp__4423__auto__;
if((q instanceof cljs.core.Keyword)){
var G__26057 = parsed;
var G__26058 = q;
var G__26059 = cljs.core.next.call(null,qs);
parsed = G__26057;
key = G__26058;
qs = G__26059;
continue;
} else {
var G__26060 = cljs.core.update_in.call(null,parsed,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),q);
var G__26061 = key;
var G__26062 = cljs.core.next.call(null,qs);
parsed = G__26060;
key = G__26061;
qs = G__26062;
continue;
}
} else {
return parsed;
}
break;
}
});
datascript.parser.validate_query = (function datascript$parser$validate_query(q,form){
var find_vars_26069 = cljs.core.set.call(null,datascript.parser.collect_vars.call(null,new cljs.core.Keyword(null,"find","find",496279456).cljs$core$IFn$_invoke$arity$1(q)));
var with_vars_26070 = cljs.core.set.call(null,new cljs.core.Keyword(null,"with","with",-1536296876).cljs$core$IFn$_invoke$arity$1(q));
var in_vars_26071 = cljs.core.set.call(null,datascript.parser.collect_vars.call(null,new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(q)));
var where_vars_26072 = cljs.core.set.call(null,datascript.parser.collect_vars.call(null,new cljs.core.Keyword(null,"where","where",-2044795965).cljs$core$IFn$_invoke$arity$1(q)));
var unknown_26073 = clojure.set.difference.call(null,clojure.set.union.call(null,find_vars_26069,with_vars_26070),clojure.set.union.call(null,where_vars_26072,in_vars_26071));
var shared_26074 = clojure.set.intersection.call(null,find_vars_26069,with_vars_26070);
if(cljs.core.empty_QMARK_.call(null,unknown_26073)){
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Query for unknown vars: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.mapv.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),unknown_26073)))].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","query","parser/query",1877320671),new cljs.core.Keyword(null,"vars","vars",-2046957217),unknown_26073,new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}

if(cljs.core.empty_QMARK_.call(null,shared_26074)){
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str(":in and :with should not use same variables: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.mapv.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),shared_26074)))].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","query","parser/query",1877320671),new cljs.core.Keyword(null,"vars","vars",-2046957217),shared_26074,new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}

var in_vars_26075 = datascript.parser.collect_vars.call(null,new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(q));
var in_sources_26076 = datascript.parser.collect.call(null,((function (in_vars_26075){
return (function (p1__26063_SHARP_){
return (p1__26063_SHARP_ instanceof datascript.parser.SrcVar);
});})(in_vars_26075))
,new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(q));
var in_rules_26077 = datascript.parser.collect.call(null,((function (in_vars_26075,in_sources_26076){
return (function (p1__26064_SHARP_){
return (p1__26064_SHARP_ instanceof datascript.parser.RulesVar);
});})(in_vars_26075,in_sources_26076))
,new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(q));
if(cljs.core.truth_((function (){var and__16363__auto__ = datascript.parser.distinct_QMARK_.call(null,in_vars_26075);
if(cljs.core.truth_(and__16363__auto__)){
var and__16363__auto____$1 = datascript.parser.distinct_QMARK_.call(null,in_sources_26076);
if(cljs.core.truth_(and__16363__auto____$1)){
return datascript.parser.distinct_QMARK_.call(null,in_rules_26077);
} else {
return and__16363__auto____$1;
}
} else {
return and__16363__auto__;
}
})())){
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Vars used in :in should be distinct")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","query","parser/query",1877320671),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}

var with_vars_26078 = datascript.parser.collect_vars.call(null,new cljs.core.Keyword(null,"with","with",-1536296876).cljs$core$IFn$_invoke$arity$1(q));
if(cljs.core.truth_(datascript.parser.distinct_QMARK_.call(null,with_vars_26078))){
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Vars used in :with should be distinct")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","query","parser/query",1877320671),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}

var in_sources_26079 = datascript.parser.collect.call(null,(function (p1__26065_SHARP_){
return (p1__26065_SHARP_ instanceof datascript.parser.SrcVar);
}),new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(q),cljs.core.PersistentHashSet.EMPTY);
var where_sources_26080 = datascript.parser.collect.call(null,((function (in_sources_26079){
return (function (p1__26066_SHARP_){
return (p1__26066_SHARP_ instanceof datascript.parser.SrcVar);
});})(in_sources_26079))
,new cljs.core.Keyword(null,"where","where",-2044795965).cljs$core$IFn$_invoke$arity$1(q),cljs.core.PersistentHashSet.EMPTY);
var unknown_26081 = clojure.set.difference.call(null,where_sources_26080,in_sources_26079);
if(cljs.core.empty_QMARK_.call(null,unknown_26081)){
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Where uses unknown source vars: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.mapv.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),unknown_26081)))].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","query","parser/query",1877320671),new cljs.core.Keyword(null,"vars","vars",-2046957217),unknown_26081,new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}

var rule_exprs = datascript.parser.collect.call(null,(function (p1__26067_SHARP_){
return (p1__26067_SHARP_ instanceof datascript.parser.RuleExpr);
}),new cljs.core.Keyword(null,"where","where",-2044795965).cljs$core$IFn$_invoke$arity$1(q));
var rules_vars = datascript.parser.collect.call(null,((function (rule_exprs){
return (function (p1__26068_SHARP_){
return (p1__26068_SHARP_ instanceof datascript.parser.RulesVar);
});})(rule_exprs))
,new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(q));
if((!(cljs.core.empty_QMARK_.call(null,rule_exprs))) && (cljs.core.empty_QMARK_.call(null,rules_vars))){
throw cljs.core.ex_info.call(null,[cljs.core.str("Missing rules var '%' in :in")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","query","parser/query",1877320671),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
} else {
return null;
}
});
datascript.parser.parse_query = (function datascript$parser$parse_query(q){
var qm = ((cljs.core.map_QMARK_.call(null,q))?q:((cljs.core.sequential_QMARK_.call(null,q))?datascript.parser.query__GT_map.call(null,q):(function(){throw cljs.core.ex_info.call(null,[cljs.core.str("Query should be a vector or a map")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","query","parser/query",1877320671),new cljs.core.Keyword(null,"form","form",-1624062471),q], null))})()
));
var res = datascript.parser.map__GT_Query.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"find","find",496279456),datascript.parser.parse_find.call(null,new cljs.core.Keyword(null,"find","find",496279456).cljs$core$IFn$_invoke$arity$1(qm)),new cljs.core.Keyword(null,"with","with",-1536296876),(function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"with","with",-1536296876).cljs$core$IFn$_invoke$arity$1(qm);
if(cljs.core.truth_(temp__4425__auto__)){
var with$ = temp__4425__auto__;
return datascript.parser.parse_with.call(null,with$);
} else {
return null;
}
})(),new cljs.core.Keyword(null,"in","in",-1531184865),datascript.parser.parse_in.call(null,new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$2(qm,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"$","$",-1580747756,null)], null))),new cljs.core.Keyword(null,"where","where",-2044795965),datascript.parser.parse_where.call(null,new cljs.core.Keyword(null,"where","where",-2044795965).cljs$core$IFn$_invoke$arity$2(qm,cljs.core.PersistentVector.EMPTY))], null));
datascript.parser.validate_query.call(null,res,q);

return res;
});

//# sourceMappingURL=parser.js.map