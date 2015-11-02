// Compiled by ClojureScript 1.7.145 {}
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.string');
goog.require('sablono.util');
goog.require('sablono.interpreter');
goog.require('goog.dom');
goog.require('cljsjs.react');
/**
 * Add an optional attribute argument to a function that returns a element vector.
 */
sablono.core.wrap_attrs = (function sablono$core$wrap_attrs(func){
return (function() { 
var G__24167__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__24166 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var tag = cljs.core.nth.call(null,vec__24166,(0),null);
var body = cljs.core.nthnext.call(null,vec__24166,(1));
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else {
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__24167 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24168__i = 0, G__24168__a = new Array(arguments.length -  0);
while (G__24168__i < G__24168__a.length) {G__24168__a[G__24168__i] = arguments[G__24168__i + 0]; ++G__24168__i;}
  args = new cljs.core.IndexedSeq(G__24168__a,0);
} 
return G__24167__delegate.call(this,args);};
G__24167.cljs$lang$maxFixedArity = 0;
G__24167.cljs$lang$applyTo = (function (arglist__24169){
var args = cljs.core.seq(arglist__24169);
return G__24167__delegate(args);
});
G__24167.cljs$core$IFn$_invoke$arity$variadic = G__24167__delegate;
return G__24167;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__17148__auto__ = (function sablono$core$update_arglists_$_iter__24174(s__24175){
return (new cljs.core.LazySeq(null,(function (){
var s__24175__$1 = s__24175;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__24175__$1);
if(temp__4425__auto__){
var s__24175__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__24175__$2)){
var c__17146__auto__ = cljs.core.chunk_first.call(null,s__24175__$2);
var size__17147__auto__ = cljs.core.count.call(null,c__17146__auto__);
var b__24177 = cljs.core.chunk_buffer.call(null,size__17147__auto__);
if((function (){var i__24176 = (0);
while(true){
if((i__24176 < size__17147__auto__)){
var args = cljs.core._nth.call(null,c__17146__auto__,i__24176);
cljs.core.chunk_append.call(null,b__24177,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__24178 = (i__24176 + (1));
i__24176 = G__24178;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24177),sablono$core$update_arglists_$_iter__24174.call(null,cljs.core.chunk_rest.call(null,s__24175__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24177),null);
}
} else {
var args = cljs.core.first.call(null,s__24175__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__24174.call(null,cljs.core.rest.call(null,s__24175__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__17148__auto__.call(null,arglists);
});
/**
 * Render `element` as HTML string.
 */
sablono.core.render = (function sablono$core$render(element){
if(cljs.core.truth_(element)){
return React.renderToString(element);
} else {
return null;
}
});
/**
 * Render `element` as HTML string, without React internal attributes.
 */
sablono.core.render_static = (function sablono$core$render_static(element){
if(cljs.core.truth_(element)){
return React.renderToStaticMarkup(element);
} else {
return null;
}
});
/**
 * Include a list of external stylesheet files.
 */
sablono.core.include_css = (function sablono$core$include_css(var_args){
var args__17441__auto__ = [];
var len__17434__auto___24184 = arguments.length;
var i__17435__auto___24185 = (0);
while(true){
if((i__17435__auto___24185 < len__17434__auto___24184)){
args__17441__auto__.push((arguments[i__17435__auto___24185]));

var G__24186 = (i__17435__auto___24185 + (1));
i__17435__auto___24185 = G__24186;
continue;
} else {
}
break;
}

var argseq__17442__auto__ = ((((0) < args__17441__auto__.length))?(new cljs.core.IndexedSeq(args__17441__auto__.slice((0)),(0))):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__17442__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__17148__auto__ = (function sablono$core$iter__24180(s__24181){
return (new cljs.core.LazySeq(null,(function (){
var s__24181__$1 = s__24181;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__24181__$1);
if(temp__4425__auto__){
var s__24181__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__24181__$2)){
var c__17146__auto__ = cljs.core.chunk_first.call(null,s__24181__$2);
var size__17147__auto__ = cljs.core.count.call(null,c__17146__auto__);
var b__24183 = cljs.core.chunk_buffer.call(null,size__17147__auto__);
if((function (){var i__24182 = (0);
while(true){
if((i__24182 < size__17147__auto__)){
var style = cljs.core._nth.call(null,c__17146__auto__,i__24182);
cljs.core.chunk_append.call(null,b__24183,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__24187 = (i__24182 + (1));
i__24182 = G__24187;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24183),sablono$core$iter__24180.call(null,cljs.core.chunk_rest.call(null,s__24181__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24183),null);
}
} else {
var style = cljs.core.first.call(null,s__24181__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__24180.call(null,cljs.core.rest.call(null,s__24181__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__17148__auto__.call(null,styles);
});

sablono.core.include_css.cljs$lang$maxFixedArity = (0);

sablono.core.include_css.cljs$lang$applyTo = (function (seq24179){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24179));
});
/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
return goog.dom.appendChild(goog.dom.getDocument().body,goog.dom.createDom("script",{"src": src}));
});
/**
 * Include Facebook's React JavaScript library.
 */
sablono.core.include_react = (function sablono$core$include_react(){
return sablono.core.include_js.call(null,"http://fb.me/react-0.12.2.js");
});
/**
 * Wraps some content in a HTML hyperlink with the supplied URL.
 */
sablono.core.link_to24188 = (function sablono$core$link_to24188(var_args){
var args__17441__auto__ = [];
var len__17434__auto___24191 = arguments.length;
var i__17435__auto___24192 = (0);
while(true){
if((i__17435__auto___24192 < len__17434__auto___24191)){
args__17441__auto__.push((arguments[i__17435__auto___24192]));

var G__24193 = (i__17435__auto___24192 + (1));
i__17435__auto___24192 = G__24193;
continue;
} else {
}
break;
}

var argseq__17442__auto__ = ((((1) < args__17441__auto__.length))?(new cljs.core.IndexedSeq(args__17441__auto__.slice((1)),(0))):null);
return sablono.core.link_to24188.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17442__auto__);
});

sablono.core.link_to24188.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to24188.cljs$lang$maxFixedArity = (1);

sablono.core.link_to24188.cljs$lang$applyTo = (function (seq24189){
var G__24190 = cljs.core.first.call(null,seq24189);
var seq24189__$1 = cljs.core.next.call(null,seq24189);
return sablono.core.link_to24188.cljs$core$IFn$_invoke$arity$variadic(G__24190,seq24189__$1);
});

sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to24188);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to24194 = (function sablono$core$mail_to24194(var_args){
var args__17441__auto__ = [];
var len__17434__auto___24199 = arguments.length;
var i__17435__auto___24200 = (0);
while(true){
if((i__17435__auto___24200 < len__17434__auto___24199)){
args__17441__auto__.push((arguments[i__17435__auto___24200]));

var G__24201 = (i__17435__auto___24200 + (1));
i__17435__auto___24200 = G__24201;
continue;
} else {
}
break;
}

var argseq__17442__auto__ = ((((1) < args__17441__auto__.length))?(new cljs.core.IndexedSeq(args__17441__auto__.slice((1)),(0))):null);
return sablono.core.mail_to24194.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17442__auto__);
});

sablono.core.mail_to24194.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__24197){
var vec__24198 = p__24197;
var content = cljs.core.nth.call(null,vec__24198,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__16375__auto__ = content;
if(cljs.core.truth_(or__16375__auto__)){
return or__16375__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to24194.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to24194.cljs$lang$applyTo = (function (seq24195){
var G__24196 = cljs.core.first.call(null,seq24195);
var seq24195__$1 = cljs.core.next.call(null,seq24195);
return sablono.core.mail_to24194.cljs$core$IFn$_invoke$arity$variadic(G__24196,seq24195__$1);
});

sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to24194);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list24202 = (function sablono$core$unordered_list24202(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__17148__auto__ = (function sablono$core$unordered_list24202_$_iter__24207(s__24208){
return (new cljs.core.LazySeq(null,(function (){
var s__24208__$1 = s__24208;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__24208__$1);
if(temp__4425__auto__){
var s__24208__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__24208__$2)){
var c__17146__auto__ = cljs.core.chunk_first.call(null,s__24208__$2);
var size__17147__auto__ = cljs.core.count.call(null,c__17146__auto__);
var b__24210 = cljs.core.chunk_buffer.call(null,size__17147__auto__);
if((function (){var i__24209 = (0);
while(true){
if((i__24209 < size__17147__auto__)){
var x = cljs.core._nth.call(null,c__17146__auto__,i__24209);
cljs.core.chunk_append.call(null,b__24210,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__24211 = (i__24209 + (1));
i__24209 = G__24211;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24210),sablono$core$unordered_list24202_$_iter__24207.call(null,cljs.core.chunk_rest.call(null,s__24208__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24210),null);
}
} else {
var x = cljs.core.first.call(null,s__24208__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list24202_$_iter__24207.call(null,cljs.core.rest.call(null,s__24208__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__17148__auto__.call(null,coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list24202);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list24212 = (function sablono$core$ordered_list24212(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__17148__auto__ = (function sablono$core$ordered_list24212_$_iter__24217(s__24218){
return (new cljs.core.LazySeq(null,(function (){
var s__24218__$1 = s__24218;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__24218__$1);
if(temp__4425__auto__){
var s__24218__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__24218__$2)){
var c__17146__auto__ = cljs.core.chunk_first.call(null,s__24218__$2);
var size__17147__auto__ = cljs.core.count.call(null,c__17146__auto__);
var b__24220 = cljs.core.chunk_buffer.call(null,size__17147__auto__);
if((function (){var i__24219 = (0);
while(true){
if((i__24219 < size__17147__auto__)){
var x = cljs.core._nth.call(null,c__17146__auto__,i__24219);
cljs.core.chunk_append.call(null,b__24220,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__24221 = (i__24219 + (1));
i__24219 = G__24221;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24220),sablono$core$ordered_list24212_$_iter__24217.call(null,cljs.core.chunk_rest.call(null,s__24218__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24220),null);
}
} else {
var x = cljs.core.first.call(null,s__24218__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list24212_$_iter__24217.call(null,cljs.core.rest.call(null,s__24218__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__17148__auto__.call(null,coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list24212);
/**
 * Create an image element.
 */
sablono.core.image24222 = (function sablono$core$image24222(var_args){
var args24223 = [];
var len__17434__auto___24226 = arguments.length;
var i__17435__auto___24227 = (0);
while(true){
if((i__17435__auto___24227 < len__17434__auto___24226)){
args24223.push((arguments[i__17435__auto___24227]));

var G__24228 = (i__17435__auto___24227 + (1));
i__17435__auto___24227 = G__24228;
continue;
} else {
}
break;
}

var G__24225 = args24223.length;
switch (G__24225) {
case 1:
return sablono.core.image24222.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image24222.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24223.length)].join('')));

}
});

sablono.core.image24222.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image24222.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image24222.cljs$lang$maxFixedArity = 2;

sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image24222);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__24230_SHARP_,p2__24231_SHARP_){
return [cljs.core.str(p1__24230_SHARP_),cljs.core.str("["),cljs.core.str(p2__24231_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__24232_SHARP_,p2__24233_SHARP_){
return [cljs.core.str(p1__24232_SHARP_),cljs.core.str("-"),cljs.core.str(p2__24233_SHARP_)].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(type,name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});
/**
 * Creates a color input field.
 */
sablono.core.color_field24234 = (function sablono$core$color_field24234(var_args){
var args24235 = [];
var len__17434__auto___24302 = arguments.length;
var i__17435__auto___24303 = (0);
while(true){
if((i__17435__auto___24303 < len__17434__auto___24302)){
args24235.push((arguments[i__17435__auto___24303]));

var G__24304 = (i__17435__auto___24303 + (1));
i__17435__auto___24303 = G__24304;
continue;
} else {
}
break;
}

var G__24237 = args24235.length;
switch (G__24237) {
case 1:
return sablono.core.color_field24234.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field24234.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24235.length)].join('')));

}
});

sablono.core.color_field24234.cljs$core$IFn$_invoke$arity$1 = (function (name__22690__auto__){
return sablono.core.color_field24234.call(null,name__22690__auto__,null);
});

sablono.core.color_field24234.cljs$core$IFn$_invoke$arity$2 = (function (name__22690__auto__,value__22691__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__22690__auto__,value__22691__auto__);
});

sablono.core.color_field24234.cljs$lang$maxFixedArity = 2;

sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field24234);

/**
 * Creates a date input field.
 */
sablono.core.date_field24238 = (function sablono$core$date_field24238(var_args){
var args24239 = [];
var len__17434__auto___24306 = arguments.length;
var i__17435__auto___24307 = (0);
while(true){
if((i__17435__auto___24307 < len__17434__auto___24306)){
args24239.push((arguments[i__17435__auto___24307]));

var G__24308 = (i__17435__auto___24307 + (1));
i__17435__auto___24307 = G__24308;
continue;
} else {
}
break;
}

var G__24241 = args24239.length;
switch (G__24241) {
case 1:
return sablono.core.date_field24238.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field24238.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24239.length)].join('')));

}
});

sablono.core.date_field24238.cljs$core$IFn$_invoke$arity$1 = (function (name__22690__auto__){
return sablono.core.date_field24238.call(null,name__22690__auto__,null);
});

sablono.core.date_field24238.cljs$core$IFn$_invoke$arity$2 = (function (name__22690__auto__,value__22691__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__22690__auto__,value__22691__auto__);
});

sablono.core.date_field24238.cljs$lang$maxFixedArity = 2;

sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field24238);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field24242 = (function sablono$core$datetime_field24242(var_args){
var args24243 = [];
var len__17434__auto___24310 = arguments.length;
var i__17435__auto___24311 = (0);
while(true){
if((i__17435__auto___24311 < len__17434__auto___24310)){
args24243.push((arguments[i__17435__auto___24311]));

var G__24312 = (i__17435__auto___24311 + (1));
i__17435__auto___24311 = G__24312;
continue;
} else {
}
break;
}

var G__24245 = args24243.length;
switch (G__24245) {
case 1:
return sablono.core.datetime_field24242.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field24242.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24243.length)].join('')));

}
});

sablono.core.datetime_field24242.cljs$core$IFn$_invoke$arity$1 = (function (name__22690__auto__){
return sablono.core.datetime_field24242.call(null,name__22690__auto__,null);
});

sablono.core.datetime_field24242.cljs$core$IFn$_invoke$arity$2 = (function (name__22690__auto__,value__22691__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__22690__auto__,value__22691__auto__);
});

sablono.core.datetime_field24242.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field24242);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field24246 = (function sablono$core$datetime_local_field24246(var_args){
var args24247 = [];
var len__17434__auto___24314 = arguments.length;
var i__17435__auto___24315 = (0);
while(true){
if((i__17435__auto___24315 < len__17434__auto___24314)){
args24247.push((arguments[i__17435__auto___24315]));

var G__24316 = (i__17435__auto___24315 + (1));
i__17435__auto___24315 = G__24316;
continue;
} else {
}
break;
}

var G__24249 = args24247.length;
switch (G__24249) {
case 1:
return sablono.core.datetime_local_field24246.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field24246.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24247.length)].join('')));

}
});

sablono.core.datetime_local_field24246.cljs$core$IFn$_invoke$arity$1 = (function (name__22690__auto__){
return sablono.core.datetime_local_field24246.call(null,name__22690__auto__,null);
});

sablono.core.datetime_local_field24246.cljs$core$IFn$_invoke$arity$2 = (function (name__22690__auto__,value__22691__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__22690__auto__,value__22691__auto__);
});

sablono.core.datetime_local_field24246.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field24246);

/**
 * Creates a email input field.
 */
sablono.core.email_field24250 = (function sablono$core$email_field24250(var_args){
var args24251 = [];
var len__17434__auto___24318 = arguments.length;
var i__17435__auto___24319 = (0);
while(true){
if((i__17435__auto___24319 < len__17434__auto___24318)){
args24251.push((arguments[i__17435__auto___24319]));

var G__24320 = (i__17435__auto___24319 + (1));
i__17435__auto___24319 = G__24320;
continue;
} else {
}
break;
}

var G__24253 = args24251.length;
switch (G__24253) {
case 1:
return sablono.core.email_field24250.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field24250.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24251.length)].join('')));

}
});

sablono.core.email_field24250.cljs$core$IFn$_invoke$arity$1 = (function (name__22690__auto__){
return sablono.core.email_field24250.call(null,name__22690__auto__,null);
});

sablono.core.email_field24250.cljs$core$IFn$_invoke$arity$2 = (function (name__22690__auto__,value__22691__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__22690__auto__,value__22691__auto__);
});

sablono.core.email_field24250.cljs$lang$maxFixedArity = 2;

sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field24250);

/**
 * Creates a file input field.
 */
sablono.core.file_field24254 = (function sablono$core$file_field24254(var_args){
var args24255 = [];
var len__17434__auto___24322 = arguments.length;
var i__17435__auto___24323 = (0);
while(true){
if((i__17435__auto___24323 < len__17434__auto___24322)){
args24255.push((arguments[i__17435__auto___24323]));

var G__24324 = (i__17435__auto___24323 + (1));
i__17435__auto___24323 = G__24324;
continue;
} else {
}
break;
}

var G__24257 = args24255.length;
switch (G__24257) {
case 1:
return sablono.core.file_field24254.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field24254.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24255.length)].join('')));

}
});

sablono.core.file_field24254.cljs$core$IFn$_invoke$arity$1 = (function (name__22690__auto__){
return sablono.core.file_field24254.call(null,name__22690__auto__,null);
});

sablono.core.file_field24254.cljs$core$IFn$_invoke$arity$2 = (function (name__22690__auto__,value__22691__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__22690__auto__,value__22691__auto__);
});

sablono.core.file_field24254.cljs$lang$maxFixedArity = 2;

sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field24254);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field24258 = (function sablono$core$hidden_field24258(var_args){
var args24259 = [];
var len__17434__auto___24326 = arguments.length;
var i__17435__auto___24327 = (0);
while(true){
if((i__17435__auto___24327 < len__17434__auto___24326)){
args24259.push((arguments[i__17435__auto___24327]));

var G__24328 = (i__17435__auto___24327 + (1));
i__17435__auto___24327 = G__24328;
continue;
} else {
}
break;
}

var G__24261 = args24259.length;
switch (G__24261) {
case 1:
return sablono.core.hidden_field24258.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field24258.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24259.length)].join('')));

}
});

sablono.core.hidden_field24258.cljs$core$IFn$_invoke$arity$1 = (function (name__22690__auto__){
return sablono.core.hidden_field24258.call(null,name__22690__auto__,null);
});

sablono.core.hidden_field24258.cljs$core$IFn$_invoke$arity$2 = (function (name__22690__auto__,value__22691__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__22690__auto__,value__22691__auto__);
});

sablono.core.hidden_field24258.cljs$lang$maxFixedArity = 2;

sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field24258);

/**
 * Creates a month input field.
 */
sablono.core.month_field24262 = (function sablono$core$month_field24262(var_args){
var args24263 = [];
var len__17434__auto___24330 = arguments.length;
var i__17435__auto___24331 = (0);
while(true){
if((i__17435__auto___24331 < len__17434__auto___24330)){
args24263.push((arguments[i__17435__auto___24331]));

var G__24332 = (i__17435__auto___24331 + (1));
i__17435__auto___24331 = G__24332;
continue;
} else {
}
break;
}

var G__24265 = args24263.length;
switch (G__24265) {
case 1:
return sablono.core.month_field24262.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field24262.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24263.length)].join('')));

}
});

sablono.core.month_field24262.cljs$core$IFn$_invoke$arity$1 = (function (name__22690__auto__){
return sablono.core.month_field24262.call(null,name__22690__auto__,null);
});

sablono.core.month_field24262.cljs$core$IFn$_invoke$arity$2 = (function (name__22690__auto__,value__22691__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__22690__auto__,value__22691__auto__);
});

sablono.core.month_field24262.cljs$lang$maxFixedArity = 2;

sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field24262);

/**
 * Creates a number input field.
 */
sablono.core.number_field24266 = (function sablono$core$number_field24266(var_args){
var args24267 = [];
var len__17434__auto___24334 = arguments.length;
var i__17435__auto___24335 = (0);
while(true){
if((i__17435__auto___24335 < len__17434__auto___24334)){
args24267.push((arguments[i__17435__auto___24335]));

var G__24336 = (i__17435__auto___24335 + (1));
i__17435__auto___24335 = G__24336;
continue;
} else {
}
break;
}

var G__24269 = args24267.length;
switch (G__24269) {
case 1:
return sablono.core.number_field24266.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field24266.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24267.length)].join('')));

}
});

sablono.core.number_field24266.cljs$core$IFn$_invoke$arity$1 = (function (name__22690__auto__){
return sablono.core.number_field24266.call(null,name__22690__auto__,null);
});

sablono.core.number_field24266.cljs$core$IFn$_invoke$arity$2 = (function (name__22690__auto__,value__22691__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__22690__auto__,value__22691__auto__);
});

sablono.core.number_field24266.cljs$lang$maxFixedArity = 2;

sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field24266);

/**
 * Creates a password input field.
 */
sablono.core.password_field24270 = (function sablono$core$password_field24270(var_args){
var args24271 = [];
var len__17434__auto___24338 = arguments.length;
var i__17435__auto___24339 = (0);
while(true){
if((i__17435__auto___24339 < len__17434__auto___24338)){
args24271.push((arguments[i__17435__auto___24339]));

var G__24340 = (i__17435__auto___24339 + (1));
i__17435__auto___24339 = G__24340;
continue;
} else {
}
break;
}

var G__24273 = args24271.length;
switch (G__24273) {
case 1:
return sablono.core.password_field24270.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field24270.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24271.length)].join('')));

}
});

sablono.core.password_field24270.cljs$core$IFn$_invoke$arity$1 = (function (name__22690__auto__){
return sablono.core.password_field24270.call(null,name__22690__auto__,null);
});

sablono.core.password_field24270.cljs$core$IFn$_invoke$arity$2 = (function (name__22690__auto__,value__22691__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__22690__auto__,value__22691__auto__);
});

sablono.core.password_field24270.cljs$lang$maxFixedArity = 2;

sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field24270);

/**
 * Creates a range input field.
 */
sablono.core.range_field24274 = (function sablono$core$range_field24274(var_args){
var args24275 = [];
var len__17434__auto___24342 = arguments.length;
var i__17435__auto___24343 = (0);
while(true){
if((i__17435__auto___24343 < len__17434__auto___24342)){
args24275.push((arguments[i__17435__auto___24343]));

var G__24344 = (i__17435__auto___24343 + (1));
i__17435__auto___24343 = G__24344;
continue;
} else {
}
break;
}

var G__24277 = args24275.length;
switch (G__24277) {
case 1:
return sablono.core.range_field24274.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field24274.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24275.length)].join('')));

}
});

sablono.core.range_field24274.cljs$core$IFn$_invoke$arity$1 = (function (name__22690__auto__){
return sablono.core.range_field24274.call(null,name__22690__auto__,null);
});

sablono.core.range_field24274.cljs$core$IFn$_invoke$arity$2 = (function (name__22690__auto__,value__22691__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__22690__auto__,value__22691__auto__);
});

sablono.core.range_field24274.cljs$lang$maxFixedArity = 2;

sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field24274);

/**
 * Creates a search input field.
 */
sablono.core.search_field24278 = (function sablono$core$search_field24278(var_args){
var args24279 = [];
var len__17434__auto___24346 = arguments.length;
var i__17435__auto___24347 = (0);
while(true){
if((i__17435__auto___24347 < len__17434__auto___24346)){
args24279.push((arguments[i__17435__auto___24347]));

var G__24348 = (i__17435__auto___24347 + (1));
i__17435__auto___24347 = G__24348;
continue;
} else {
}
break;
}

var G__24281 = args24279.length;
switch (G__24281) {
case 1:
return sablono.core.search_field24278.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field24278.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24279.length)].join('')));

}
});

sablono.core.search_field24278.cljs$core$IFn$_invoke$arity$1 = (function (name__22690__auto__){
return sablono.core.search_field24278.call(null,name__22690__auto__,null);
});

sablono.core.search_field24278.cljs$core$IFn$_invoke$arity$2 = (function (name__22690__auto__,value__22691__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__22690__auto__,value__22691__auto__);
});

sablono.core.search_field24278.cljs$lang$maxFixedArity = 2;

sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field24278);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field24282 = (function sablono$core$tel_field24282(var_args){
var args24283 = [];
var len__17434__auto___24350 = arguments.length;
var i__17435__auto___24351 = (0);
while(true){
if((i__17435__auto___24351 < len__17434__auto___24350)){
args24283.push((arguments[i__17435__auto___24351]));

var G__24352 = (i__17435__auto___24351 + (1));
i__17435__auto___24351 = G__24352;
continue;
} else {
}
break;
}

var G__24285 = args24283.length;
switch (G__24285) {
case 1:
return sablono.core.tel_field24282.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field24282.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24283.length)].join('')));

}
});

sablono.core.tel_field24282.cljs$core$IFn$_invoke$arity$1 = (function (name__22690__auto__){
return sablono.core.tel_field24282.call(null,name__22690__auto__,null);
});

sablono.core.tel_field24282.cljs$core$IFn$_invoke$arity$2 = (function (name__22690__auto__,value__22691__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__22690__auto__,value__22691__auto__);
});

sablono.core.tel_field24282.cljs$lang$maxFixedArity = 2;

sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field24282);

/**
 * Creates a text input field.
 */
sablono.core.text_field24286 = (function sablono$core$text_field24286(var_args){
var args24287 = [];
var len__17434__auto___24354 = arguments.length;
var i__17435__auto___24355 = (0);
while(true){
if((i__17435__auto___24355 < len__17434__auto___24354)){
args24287.push((arguments[i__17435__auto___24355]));

var G__24356 = (i__17435__auto___24355 + (1));
i__17435__auto___24355 = G__24356;
continue;
} else {
}
break;
}

var G__24289 = args24287.length;
switch (G__24289) {
case 1:
return sablono.core.text_field24286.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field24286.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24287.length)].join('')));

}
});

sablono.core.text_field24286.cljs$core$IFn$_invoke$arity$1 = (function (name__22690__auto__){
return sablono.core.text_field24286.call(null,name__22690__auto__,null);
});

sablono.core.text_field24286.cljs$core$IFn$_invoke$arity$2 = (function (name__22690__auto__,value__22691__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__22690__auto__,value__22691__auto__);
});

sablono.core.text_field24286.cljs$lang$maxFixedArity = 2;

sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field24286);

/**
 * Creates a time input field.
 */
sablono.core.time_field24290 = (function sablono$core$time_field24290(var_args){
var args24291 = [];
var len__17434__auto___24358 = arguments.length;
var i__17435__auto___24359 = (0);
while(true){
if((i__17435__auto___24359 < len__17434__auto___24358)){
args24291.push((arguments[i__17435__auto___24359]));

var G__24360 = (i__17435__auto___24359 + (1));
i__17435__auto___24359 = G__24360;
continue;
} else {
}
break;
}

var G__24293 = args24291.length;
switch (G__24293) {
case 1:
return sablono.core.time_field24290.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field24290.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24291.length)].join('')));

}
});

sablono.core.time_field24290.cljs$core$IFn$_invoke$arity$1 = (function (name__22690__auto__){
return sablono.core.time_field24290.call(null,name__22690__auto__,null);
});

sablono.core.time_field24290.cljs$core$IFn$_invoke$arity$2 = (function (name__22690__auto__,value__22691__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__22690__auto__,value__22691__auto__);
});

sablono.core.time_field24290.cljs$lang$maxFixedArity = 2;

sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field24290);

/**
 * Creates a url input field.
 */
sablono.core.url_field24294 = (function sablono$core$url_field24294(var_args){
var args24295 = [];
var len__17434__auto___24362 = arguments.length;
var i__17435__auto___24363 = (0);
while(true){
if((i__17435__auto___24363 < len__17434__auto___24362)){
args24295.push((arguments[i__17435__auto___24363]));

var G__24364 = (i__17435__auto___24363 + (1));
i__17435__auto___24363 = G__24364;
continue;
} else {
}
break;
}

var G__24297 = args24295.length;
switch (G__24297) {
case 1:
return sablono.core.url_field24294.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field24294.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24295.length)].join('')));

}
});

sablono.core.url_field24294.cljs$core$IFn$_invoke$arity$1 = (function (name__22690__auto__){
return sablono.core.url_field24294.call(null,name__22690__auto__,null);
});

sablono.core.url_field24294.cljs$core$IFn$_invoke$arity$2 = (function (name__22690__auto__,value__22691__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__22690__auto__,value__22691__auto__);
});

sablono.core.url_field24294.cljs$lang$maxFixedArity = 2;

sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field24294);

/**
 * Creates a week input field.
 */
sablono.core.week_field24298 = (function sablono$core$week_field24298(var_args){
var args24299 = [];
var len__17434__auto___24366 = arguments.length;
var i__17435__auto___24367 = (0);
while(true){
if((i__17435__auto___24367 < len__17434__auto___24366)){
args24299.push((arguments[i__17435__auto___24367]));

var G__24368 = (i__17435__auto___24367 + (1));
i__17435__auto___24367 = G__24368;
continue;
} else {
}
break;
}

var G__24301 = args24299.length;
switch (G__24301) {
case 1:
return sablono.core.week_field24298.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field24298.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24299.length)].join('')));

}
});

sablono.core.week_field24298.cljs$core$IFn$_invoke$arity$1 = (function (name__22690__auto__){
return sablono.core.week_field24298.call(null,name__22690__auto__,null);
});

sablono.core.week_field24298.cljs$core$IFn$_invoke$arity$2 = (function (name__22690__auto__,value__22691__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__22690__auto__,value__22691__auto__);
});

sablono.core.week_field24298.cljs$lang$maxFixedArity = 2;

sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field24298);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box24370 = (function sablono$core$check_box24370(var_args){
var args24371 = [];
var len__17434__auto___24374 = arguments.length;
var i__17435__auto___24375 = (0);
while(true){
if((i__17435__auto___24375 < len__17434__auto___24374)){
args24371.push((arguments[i__17435__auto___24375]));

var G__24376 = (i__17435__auto___24375 + (1));
i__17435__auto___24375 = G__24376;
continue;
} else {
}
break;
}

var G__24373 = args24371.length;
switch (G__24373) {
case 1:
return sablono.core.check_box24370.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box24370.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box24370.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24371.length)].join('')));

}
});

sablono.core.check_box24370.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box24370.call(null,name,null);
});

sablono.core.check_box24370.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box24370.call(null,name,checked_QMARK_,"true");
});

sablono.core.check_box24370.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box24370.cljs$lang$maxFixedArity = 3;

sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box24370);
/**
 * Creates a radio button.
 */
sablono.core.radio_button24378 = (function sablono$core$radio_button24378(var_args){
var args24379 = [];
var len__17434__auto___24382 = arguments.length;
var i__17435__auto___24383 = (0);
while(true){
if((i__17435__auto___24383 < len__17434__auto___24382)){
args24379.push((arguments[i__17435__auto___24383]));

var G__24384 = (i__17435__auto___24383 + (1));
i__17435__auto___24383 = G__24384;
continue;
} else {
}
break;
}

var G__24381 = args24379.length;
switch (G__24381) {
case 1:
return sablono.core.radio_button24378.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button24378.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button24378.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24379.length)].join('')));

}
});

sablono.core.radio_button24378.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button24378.call(null,group,null);
});

sablono.core.radio_button24378.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button24378.call(null,group,checked_QMARK_,"true");
});

sablono.core.radio_button24378.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button24378.cljs$lang$maxFixedArity = 3;

sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button24378);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.call(null,x));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options24386 = (function sablono$core$select_options24386(coll){
var iter__17148__auto__ = (function sablono$core$select_options24386_$_iter__24395(s__24396){
return (new cljs.core.LazySeq(null,(function (){
var s__24396__$1 = s__24396;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__24396__$1);
if(temp__4425__auto__){
var s__24396__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__24396__$2)){
var c__17146__auto__ = cljs.core.chunk_first.call(null,s__24396__$2);
var size__17147__auto__ = cljs.core.count.call(null,c__17146__auto__);
var b__24398 = cljs.core.chunk_buffer.call(null,size__17147__auto__);
if((function (){var i__24397 = (0);
while(true){
if((i__24397 < size__17147__auto__)){
var x = cljs.core._nth.call(null,c__17146__auto__,i__24397);
cljs.core.chunk_append.call(null,b__24398,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__24401 = x;
var text = cljs.core.nth.call(null,vec__24401,(0),null);
var val = cljs.core.nth.call(null,vec__24401,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__24401,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options24386.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__24403 = (i__24397 + (1));
i__24397 = G__24403;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24398),sablono$core$select_options24386_$_iter__24395.call(null,cljs.core.chunk_rest.call(null,s__24396__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24398),null);
}
} else {
var x = cljs.core.first.call(null,s__24396__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__24402 = x;
var text = cljs.core.nth.call(null,vec__24402,(0),null);
var val = cljs.core.nth.call(null,vec__24402,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__24402,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options24386.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options24386_$_iter__24395.call(null,cljs.core.rest.call(null,s__24396__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__17148__auto__.call(null,coll);
});

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options24386);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down24404 = (function sablono$core$drop_down24404(var_args){
var args24405 = [];
var len__17434__auto___24408 = arguments.length;
var i__17435__auto___24409 = (0);
while(true){
if((i__17435__auto___24409 < len__17434__auto___24408)){
args24405.push((arguments[i__17435__auto___24409]));

var G__24410 = (i__17435__auto___24409 + (1));
i__17435__auto___24409 = G__24410;
continue;
} else {
}
break;
}

var G__24407 = args24405.length;
switch (G__24407) {
case 2:
return sablono.core.drop_down24404.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down24404.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24405.length)].join('')));

}
});

sablono.core.drop_down24404.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down24404.call(null,name,options,null);
});

sablono.core.drop_down24404.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down24404.cljs$lang$maxFixedArity = 3;

sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down24404);
/**
 * Creates a text area element.
 */
sablono.core.text_area24412 = (function sablono$core$text_area24412(var_args){
var args24413 = [];
var len__17434__auto___24416 = arguments.length;
var i__17435__auto___24417 = (0);
while(true){
if((i__17435__auto___24417 < len__17434__auto___24416)){
args24413.push((arguments[i__17435__auto___24417]));

var G__24418 = (i__17435__auto___24417 + (1));
i__17435__auto___24417 = G__24418;
continue;
} else {
}
break;
}

var G__24415 = args24413.length;
switch (G__24415) {
case 1:
return sablono.core.text_area24412.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area24412.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24413.length)].join('')));

}
});

sablono.core.text_area24412.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area24412.call(null,name,null);
});

sablono.core.text_area24412.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});

sablono.core.text_area24412.cljs$lang$maxFixedArity = 2;

sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area24412);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label24420 = (function sablono$core$label24420(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label24420);
/**
 * Creates a submit button.
 */
sablono.core.submit_button24421 = (function sablono$core$submit_button24421(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button24421);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button24422 = (function sablono$core$reset_button24422(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button24422);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to24423 = (function sablono$core$form_to24423(var_args){
var args__17441__auto__ = [];
var len__17434__auto___24428 = arguments.length;
var i__17435__auto___24429 = (0);
while(true){
if((i__17435__auto___24429 < len__17434__auto___24428)){
args__17441__auto__.push((arguments[i__17435__auto___24429]));

var G__24430 = (i__17435__auto___24429 + (1));
i__17435__auto___24429 = G__24430;
continue;
} else {
}
break;
}

var argseq__17442__auto__ = ((((1) < args__17441__auto__.length))?(new cljs.core.IndexedSeq(args__17441__auto__.slice((1)),(0))):null);
return sablono.core.form_to24423.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17442__auto__);
});

sablono.core.form_to24423.cljs$core$IFn$_invoke$arity$variadic = (function (p__24426,body){
var vec__24427 = p__24426;
var method = cljs.core.nth.call(null,vec__24427,(0),null);
var action = cljs.core.nth.call(null,vec__24427,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
});

sablono.core.form_to24423.cljs$lang$maxFixedArity = (1);

sablono.core.form_to24423.cljs$lang$applyTo = (function (seq24424){
var G__24425 = cljs.core.first.call(null,seq24424);
var seq24424__$1 = cljs.core.next.call(null,seq24424);
return sablono.core.form_to24423.cljs$core$IFn$_invoke$arity$variadic(G__24425,seq24424__$1);
});

sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to24423);

//# sourceMappingURL=core.js.map