// Compiled by ClojureScript 1.7.145 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(f){
if(typeof cljs.core.async.t_cljs$core$async28537 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28537 = (function (fn_handler,f,meta28538){
this.fn_handler = fn_handler;
this.f = f;
this.meta28538 = meta28538;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28537.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28539,meta28538__$1){
var self__ = this;
var _28539__$1 = this;
return (new cljs.core.async.t_cljs$core$async28537(self__.fn_handler,self__.f,meta28538__$1));
});

cljs.core.async.t_cljs$core$async28537.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28539){
var self__ = this;
var _28539__$1 = this;
return self__.meta28538;
});

cljs.core.async.t_cljs$core$async28537.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async28537.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async28537.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async28537.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"fn-handler","fn-handler",648785851,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null)], null)))], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta28538","meta28538",-730959098,null)], null);
});

cljs.core.async.t_cljs$core$async28537.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28537.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28537";

cljs.core.async.t_cljs$core$async28537.cljs$lang$ctorPrWriter = (function (this__16973__auto__,writer__16974__auto__,opt__16975__auto__){
return cljs.core._write.call(null,writer__16974__auto__,"cljs.core.async/t_cljs$core$async28537");
});

cljs.core.async.__GT_t_cljs$core$async28537 = (function cljs$core$async$fn_handler_$___GT_t_cljs$core$async28537(fn_handler__$1,f__$1,meta28538){
return (new cljs.core.async.t_cljs$core$async28537(fn_handler__$1,f__$1,meta28538));
});

}

return (new cljs.core.async.t_cljs$core$async28537(cljs$core$async$fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args28542 = [];
var len__17433__auto___28545 = arguments.length;
var i__17434__auto___28546 = (0);
while(true){
if((i__17434__auto___28546 < len__17433__auto___28545)){
args28542.push((arguments[i__17434__auto___28546]));

var G__28547 = (i__17434__auto___28546 + (1));
i__17434__auto___28546 = G__28547;
continue;
} else {
}
break;
}

var G__28544 = args28542.length;
switch (G__28544) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28542.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args28549 = [];
var len__17433__auto___28552 = arguments.length;
var i__17434__auto___28553 = (0);
while(true){
if((i__17434__auto___28553 < len__17433__auto___28552)){
args28549.push((arguments[i__17434__auto___28553]));

var G__28554 = (i__17434__auto___28553 + (1));
i__17434__auto___28553 = G__28554;
continue;
} else {
}
break;
}

var G__28551 = args28549.length;
switch (G__28551) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28549.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_28556 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_28556);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_28556,ret){
return (function (){
return fn1.call(null,val_28556);
});})(val_28556,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args28557 = [];
var len__17433__auto___28560 = arguments.length;
var i__17434__auto___28561 = (0);
while(true){
if((i__17434__auto___28561 < len__17433__auto___28560)){
args28557.push((arguments[i__17434__auto___28561]));

var G__28562 = (i__17434__auto___28561 + (1));
i__17434__auto___28561 = G__28562;
continue;
} else {
}
break;
}

var G__28559 = args28557.length;
switch (G__28559) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28557.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4423__auto__)){
var ret = temp__4423__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4423__auto__)){
var retb = temp__4423__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4423__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4423__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__17278__auto___28564 = n;
var x_28565 = (0);
while(true){
if((x_28565 < n__17278__auto___28564)){
(a[x_28565] = (0));

var G__28566 = (x_28565 + (1));
x_28565 = G__28566;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__28567 = (i + (1));
i = G__28567;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async28571 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28571 = (function (alt_flag,flag,meta28572){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta28572 = meta28572;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28571.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_28573,meta28572__$1){
var self__ = this;
var _28573__$1 = this;
return (new cljs.core.async.t_cljs$core$async28571(self__.alt_flag,self__.flag,meta28572__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async28571.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_28573){
var self__ = this;
var _28573__$1 = this;
return self__.meta28572;
});})(flag))
;

cljs.core.async.t_cljs$core$async28571.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async28571.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async28571.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async28571.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta28572","meta28572",185418834,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async28571.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28571.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28571";

cljs.core.async.t_cljs$core$async28571.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__16973__auto__,writer__16974__auto__,opt__16975__auto__){
return cljs.core._write.call(null,writer__16974__auto__,"cljs.core.async/t_cljs$core$async28571");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async28571 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async28571(alt_flag__$1,flag__$1,meta28572){
return (new cljs.core.async.t_cljs$core$async28571(alt_flag__$1,flag__$1,meta28572));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async28571(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async28577 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28577 = (function (alt_handler,flag,cb,meta28578){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta28578 = meta28578;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28577.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28579,meta28578__$1){
var self__ = this;
var _28579__$1 = this;
return (new cljs.core.async.t_cljs$core$async28577(self__.alt_handler,self__.flag,self__.cb,meta28578__$1));
});

cljs.core.async.t_cljs$core$async28577.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28579){
var self__ = this;
var _28579__$1 = this;
return self__.meta28578;
});

cljs.core.async.t_cljs$core$async28577.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async28577.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async28577.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async28577.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta28578","meta28578",1891737923,null)], null);
});

cljs.core.async.t_cljs$core$async28577.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28577.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28577";

cljs.core.async.t_cljs$core$async28577.cljs$lang$ctorPrWriter = (function (this__16973__auto__,writer__16974__auto__,opt__16975__auto__){
return cljs.core._write.call(null,writer__16974__auto__,"cljs.core.async/t_cljs$core$async28577");
});

cljs.core.async.__GT_t_cljs$core$async28577 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async28577(alt_handler__$1,flag__$1,cb__$1,meta28578){
return (new cljs.core.async.t_cljs$core$async28577(alt_handler__$1,flag__$1,cb__$1,meta28578));
});

}

return (new cljs.core.async.t_cljs$core$async28577(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__28580_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__28580_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__28581_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__28581_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__16375__auto__ = wport;
if(cljs.core.truth_(or__16375__auto__)){
return or__16375__auto__;
} else {
return port;
}
})()], null));
} else {
var G__28582 = (i + (1));
i = G__28582;
continue;
}
} else {
return null;
}
break;
}
})();
var or__16375__auto__ = ret;
if(cljs.core.truth_(or__16375__auto__)){
return or__16375__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__16363__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__16363__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__16363__auto__;
}
})();
if(cljs.core.truth_(temp__4425__auto__)){
var got = temp__4425__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__17440__auto__ = [];
var len__17433__auto___28588 = arguments.length;
var i__17434__auto___28589 = (0);
while(true){
if((i__17434__auto___28589 < len__17433__auto___28588)){
args__17440__auto__.push((arguments[i__17434__auto___28589]));

var G__28590 = (i__17434__auto___28589 + (1));
i__17434__auto___28589 = G__28590;
continue;
} else {
}
break;
}

var argseq__17441__auto__ = ((((1) < args__17440__auto__.length))?(new cljs.core.IndexedSeq(args__17440__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17441__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__28585){
var map__28586 = p__28585;
var map__28586__$1 = ((((!((map__28586 == null)))?((((map__28586.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28586.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28586):map__28586);
var opts = map__28586__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq28583){
var G__28584 = cljs.core.first.call(null,seq28583);
var seq28583__$1 = cljs.core.next.call(null,seq28583);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__28584,seq28583__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args28591 = [];
var len__17433__auto___28641 = arguments.length;
var i__17434__auto___28642 = (0);
while(true){
if((i__17434__auto___28642 < len__17433__auto___28641)){
args28591.push((arguments[i__17434__auto___28642]));

var G__28643 = (i__17434__auto___28642 + (1));
i__17434__auto___28642 = G__28643;
continue;
} else {
}
break;
}

var G__28593 = args28591.length;
switch (G__28593) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28591.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__20946__auto___28645 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20946__auto___28645){
return (function (){
var f__20947__auto__ = (function (){var switch__20881__auto__ = ((function (c__20946__auto___28645){
return (function (state_28617){
var state_val_28618 = (state_28617[(1)]);
if((state_val_28618 === (7))){
var inst_28613 = (state_28617[(2)]);
var state_28617__$1 = state_28617;
var statearr_28619_28646 = state_28617__$1;
(statearr_28619_28646[(2)] = inst_28613);

(statearr_28619_28646[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28618 === (1))){
var state_28617__$1 = state_28617;
var statearr_28620_28647 = state_28617__$1;
(statearr_28620_28647[(2)] = null);

(statearr_28620_28647[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28618 === (4))){
var inst_28596 = (state_28617[(7)]);
var inst_28596__$1 = (state_28617[(2)]);
var inst_28597 = (inst_28596__$1 == null);
var state_28617__$1 = (function (){var statearr_28621 = state_28617;
(statearr_28621[(7)] = inst_28596__$1);

return statearr_28621;
})();
if(cljs.core.truth_(inst_28597)){
var statearr_28622_28648 = state_28617__$1;
(statearr_28622_28648[(1)] = (5));

} else {
var statearr_28623_28649 = state_28617__$1;
(statearr_28623_28649[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28618 === (13))){
var state_28617__$1 = state_28617;
var statearr_28624_28650 = state_28617__$1;
(statearr_28624_28650[(2)] = null);

(statearr_28624_28650[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28618 === (6))){
var inst_28596 = (state_28617[(7)]);
var state_28617__$1 = state_28617;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28617__$1,(11),to,inst_28596);
} else {
if((state_val_28618 === (3))){
var inst_28615 = (state_28617[(2)]);
var state_28617__$1 = state_28617;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28617__$1,inst_28615);
} else {
if((state_val_28618 === (12))){
var state_28617__$1 = state_28617;
var statearr_28625_28651 = state_28617__$1;
(statearr_28625_28651[(2)] = null);

(statearr_28625_28651[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28618 === (2))){
var state_28617__$1 = state_28617;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28617__$1,(4),from);
} else {
if((state_val_28618 === (11))){
var inst_28606 = (state_28617[(2)]);
var state_28617__$1 = state_28617;
if(cljs.core.truth_(inst_28606)){
var statearr_28626_28652 = state_28617__$1;
(statearr_28626_28652[(1)] = (12));

} else {
var statearr_28627_28653 = state_28617__$1;
(statearr_28627_28653[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28618 === (9))){
var state_28617__$1 = state_28617;
var statearr_28628_28654 = state_28617__$1;
(statearr_28628_28654[(2)] = null);

(statearr_28628_28654[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28618 === (5))){
var state_28617__$1 = state_28617;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28629_28655 = state_28617__$1;
(statearr_28629_28655[(1)] = (8));

} else {
var statearr_28630_28656 = state_28617__$1;
(statearr_28630_28656[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28618 === (14))){
var inst_28611 = (state_28617[(2)]);
var state_28617__$1 = state_28617;
var statearr_28631_28657 = state_28617__$1;
(statearr_28631_28657[(2)] = inst_28611);

(statearr_28631_28657[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28618 === (10))){
var inst_28603 = (state_28617[(2)]);
var state_28617__$1 = state_28617;
var statearr_28632_28658 = state_28617__$1;
(statearr_28632_28658[(2)] = inst_28603);

(statearr_28632_28658[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28618 === (8))){
var inst_28600 = cljs.core.async.close_BANG_.call(null,to);
var state_28617__$1 = state_28617;
var statearr_28633_28659 = state_28617__$1;
(statearr_28633_28659[(2)] = inst_28600);

(statearr_28633_28659[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__20946__auto___28645))
;
return ((function (switch__20881__auto__,c__20946__auto___28645){
return (function() {
var cljs$core$async$state_machine__20882__auto__ = null;
var cljs$core$async$state_machine__20882__auto____0 = (function (){
var statearr_28637 = [null,null,null,null,null,null,null,null];
(statearr_28637[(0)] = cljs$core$async$state_machine__20882__auto__);

(statearr_28637[(1)] = (1));

return statearr_28637;
});
var cljs$core$async$state_machine__20882__auto____1 = (function (state_28617){
while(true){
var ret_value__20883__auto__ = (function (){try{while(true){
var result__20884__auto__ = switch__20881__auto__.call(null,state_28617);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20884__auto__;
}
break;
}
}catch (e28638){if((e28638 instanceof Object)){
var ex__20885__auto__ = e28638;
var statearr_28639_28660 = state_28617;
(statearr_28639_28660[(5)] = ex__20885__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28617);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28638;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20883__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28661 = state_28617;
state_28617 = G__28661;
continue;
} else {
return ret_value__20883__auto__;
}
break;
}
});
cljs$core$async$state_machine__20882__auto__ = function(state_28617){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20882__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20882__auto____1.call(this,state_28617);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20882__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20882__auto____0;
cljs$core$async$state_machine__20882__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20882__auto____1;
return cljs$core$async$state_machine__20882__auto__;
})()
;})(switch__20881__auto__,c__20946__auto___28645))
})();
var state__20948__auto__ = (function (){var statearr_28640 = f__20947__auto__.call(null);
(statearr_28640[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20946__auto___28645);

return statearr_28640;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20948__auto__);
});})(c__20946__auto___28645))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__28846){
var vec__28847 = p__28846;
var v = cljs.core.nth.call(null,vec__28847,(0),null);
var p = cljs.core.nth.call(null,vec__28847,(1),null);
var job = vec__28847;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__20946__auto___29029 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20946__auto___29029,res,vec__28847,v,p,job,jobs,results){
return (function (){
var f__20947__auto__ = (function (){var switch__20881__auto__ = ((function (c__20946__auto___29029,res,vec__28847,v,p,job,jobs,results){
return (function (state_28852){
var state_val_28853 = (state_28852[(1)]);
if((state_val_28853 === (1))){
var state_28852__$1 = state_28852;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28852__$1,(2),res,v);
} else {
if((state_val_28853 === (2))){
var inst_28849 = (state_28852[(2)]);
var inst_28850 = cljs.core.async.close_BANG_.call(null,res);
var state_28852__$1 = (function (){var statearr_28854 = state_28852;
(statearr_28854[(7)] = inst_28849);

return statearr_28854;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28852__$1,inst_28850);
} else {
return null;
}
}
});})(c__20946__auto___29029,res,vec__28847,v,p,job,jobs,results))
;
return ((function (switch__20881__auto__,c__20946__auto___29029,res,vec__28847,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20882__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20882__auto____0 = (function (){
var statearr_28858 = [null,null,null,null,null,null,null,null];
(statearr_28858[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20882__auto__);

(statearr_28858[(1)] = (1));

return statearr_28858;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20882__auto____1 = (function (state_28852){
while(true){
var ret_value__20883__auto__ = (function (){try{while(true){
var result__20884__auto__ = switch__20881__auto__.call(null,state_28852);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20884__auto__;
}
break;
}
}catch (e28859){if((e28859 instanceof Object)){
var ex__20885__auto__ = e28859;
var statearr_28860_29030 = state_28852;
(statearr_28860_29030[(5)] = ex__20885__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28852);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28859;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20883__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29031 = state_28852;
state_28852 = G__29031;
continue;
} else {
return ret_value__20883__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20882__auto__ = function(state_28852){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20882__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20882__auto____1.call(this,state_28852);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20882__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20882__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20882__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20882__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20882__auto__;
})()
;})(switch__20881__auto__,c__20946__auto___29029,res,vec__28847,v,p,job,jobs,results))
})();
var state__20948__auto__ = (function (){var statearr_28861 = f__20947__auto__.call(null);
(statearr_28861[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20946__auto___29029);

return statearr_28861;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20948__auto__);
});})(c__20946__auto___29029,res,vec__28847,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__28862){
var vec__28863 = p__28862;
var v = cljs.core.nth.call(null,vec__28863,(0),null);
var p = cljs.core.nth.call(null,vec__28863,(1),null);
var job = vec__28863;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__17278__auto___29032 = n;
var __29033 = (0);
while(true){
if((__29033 < n__17278__auto___29032)){
var G__28864_29034 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__28864_29034) {
case "compute":
var c__20946__auto___29036 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__29033,c__20946__auto___29036,G__28864_29034,n__17278__auto___29032,jobs,results,process,async){
return (function (){
var f__20947__auto__ = (function (){var switch__20881__auto__ = ((function (__29033,c__20946__auto___29036,G__28864_29034,n__17278__auto___29032,jobs,results,process,async){
return (function (state_28877){
var state_val_28878 = (state_28877[(1)]);
if((state_val_28878 === (1))){
var state_28877__$1 = state_28877;
var statearr_28879_29037 = state_28877__$1;
(statearr_28879_29037[(2)] = null);

(statearr_28879_29037[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28878 === (2))){
var state_28877__$1 = state_28877;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28877__$1,(4),jobs);
} else {
if((state_val_28878 === (3))){
var inst_28875 = (state_28877[(2)]);
var state_28877__$1 = state_28877;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28877__$1,inst_28875);
} else {
if((state_val_28878 === (4))){
var inst_28867 = (state_28877[(2)]);
var inst_28868 = process.call(null,inst_28867);
var state_28877__$1 = state_28877;
if(cljs.core.truth_(inst_28868)){
var statearr_28880_29038 = state_28877__$1;
(statearr_28880_29038[(1)] = (5));

} else {
var statearr_28881_29039 = state_28877__$1;
(statearr_28881_29039[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28878 === (5))){
var state_28877__$1 = state_28877;
var statearr_28882_29040 = state_28877__$1;
(statearr_28882_29040[(2)] = null);

(statearr_28882_29040[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28878 === (6))){
var state_28877__$1 = state_28877;
var statearr_28883_29041 = state_28877__$1;
(statearr_28883_29041[(2)] = null);

(statearr_28883_29041[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28878 === (7))){
var inst_28873 = (state_28877[(2)]);
var state_28877__$1 = state_28877;
var statearr_28884_29042 = state_28877__$1;
(statearr_28884_29042[(2)] = inst_28873);

(statearr_28884_29042[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__29033,c__20946__auto___29036,G__28864_29034,n__17278__auto___29032,jobs,results,process,async))
;
return ((function (__29033,switch__20881__auto__,c__20946__auto___29036,G__28864_29034,n__17278__auto___29032,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20882__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20882__auto____0 = (function (){
var statearr_28888 = [null,null,null,null,null,null,null];
(statearr_28888[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20882__auto__);

(statearr_28888[(1)] = (1));

return statearr_28888;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20882__auto____1 = (function (state_28877){
while(true){
var ret_value__20883__auto__ = (function (){try{while(true){
var result__20884__auto__ = switch__20881__auto__.call(null,state_28877);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20884__auto__;
}
break;
}
}catch (e28889){if((e28889 instanceof Object)){
var ex__20885__auto__ = e28889;
var statearr_28890_29043 = state_28877;
(statearr_28890_29043[(5)] = ex__20885__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28877);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28889;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20883__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29044 = state_28877;
state_28877 = G__29044;
continue;
} else {
return ret_value__20883__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20882__auto__ = function(state_28877){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20882__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20882__auto____1.call(this,state_28877);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20882__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20882__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20882__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20882__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20882__auto__;
})()
;})(__29033,switch__20881__auto__,c__20946__auto___29036,G__28864_29034,n__17278__auto___29032,jobs,results,process,async))
})();
var state__20948__auto__ = (function (){var statearr_28891 = f__20947__auto__.call(null);
(statearr_28891[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20946__auto___29036);

return statearr_28891;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20948__auto__);
});})(__29033,c__20946__auto___29036,G__28864_29034,n__17278__auto___29032,jobs,results,process,async))
);


break;
case "async":
var c__20946__auto___29045 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__29033,c__20946__auto___29045,G__28864_29034,n__17278__auto___29032,jobs,results,process,async){
return (function (){
var f__20947__auto__ = (function (){var switch__20881__auto__ = ((function (__29033,c__20946__auto___29045,G__28864_29034,n__17278__auto___29032,jobs,results,process,async){
return (function (state_28904){
var state_val_28905 = (state_28904[(1)]);
if((state_val_28905 === (1))){
var state_28904__$1 = state_28904;
var statearr_28906_29046 = state_28904__$1;
(statearr_28906_29046[(2)] = null);

(statearr_28906_29046[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28905 === (2))){
var state_28904__$1 = state_28904;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28904__$1,(4),jobs);
} else {
if((state_val_28905 === (3))){
var inst_28902 = (state_28904[(2)]);
var state_28904__$1 = state_28904;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28904__$1,inst_28902);
} else {
if((state_val_28905 === (4))){
var inst_28894 = (state_28904[(2)]);
var inst_28895 = async.call(null,inst_28894);
var state_28904__$1 = state_28904;
if(cljs.core.truth_(inst_28895)){
var statearr_28907_29047 = state_28904__$1;
(statearr_28907_29047[(1)] = (5));

} else {
var statearr_28908_29048 = state_28904__$1;
(statearr_28908_29048[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28905 === (5))){
var state_28904__$1 = state_28904;
var statearr_28909_29049 = state_28904__$1;
(statearr_28909_29049[(2)] = null);

(statearr_28909_29049[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28905 === (6))){
var state_28904__$1 = state_28904;
var statearr_28910_29050 = state_28904__$1;
(statearr_28910_29050[(2)] = null);

(statearr_28910_29050[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28905 === (7))){
var inst_28900 = (state_28904[(2)]);
var state_28904__$1 = state_28904;
var statearr_28911_29051 = state_28904__$1;
(statearr_28911_29051[(2)] = inst_28900);

(statearr_28911_29051[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__29033,c__20946__auto___29045,G__28864_29034,n__17278__auto___29032,jobs,results,process,async))
;
return ((function (__29033,switch__20881__auto__,c__20946__auto___29045,G__28864_29034,n__17278__auto___29032,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20882__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20882__auto____0 = (function (){
var statearr_28915 = [null,null,null,null,null,null,null];
(statearr_28915[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20882__auto__);

(statearr_28915[(1)] = (1));

return statearr_28915;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20882__auto____1 = (function (state_28904){
while(true){
var ret_value__20883__auto__ = (function (){try{while(true){
var result__20884__auto__ = switch__20881__auto__.call(null,state_28904);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20884__auto__;
}
break;
}
}catch (e28916){if((e28916 instanceof Object)){
var ex__20885__auto__ = e28916;
var statearr_28917_29052 = state_28904;
(statearr_28917_29052[(5)] = ex__20885__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28904);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28916;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20883__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29053 = state_28904;
state_28904 = G__29053;
continue;
} else {
return ret_value__20883__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20882__auto__ = function(state_28904){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20882__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20882__auto____1.call(this,state_28904);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20882__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20882__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20882__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20882__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20882__auto__;
})()
;})(__29033,switch__20881__auto__,c__20946__auto___29045,G__28864_29034,n__17278__auto___29032,jobs,results,process,async))
})();
var state__20948__auto__ = (function (){var statearr_28918 = f__20947__auto__.call(null);
(statearr_28918[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20946__auto___29045);

return statearr_28918;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20948__auto__);
});})(__29033,c__20946__auto___29045,G__28864_29034,n__17278__auto___29032,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__29054 = (__29033 + (1));
__29033 = G__29054;
continue;
} else {
}
break;
}

var c__20946__auto___29055 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20946__auto___29055,jobs,results,process,async){
return (function (){
var f__20947__auto__ = (function (){var switch__20881__auto__ = ((function (c__20946__auto___29055,jobs,results,process,async){
return (function (state_28940){
var state_val_28941 = (state_28940[(1)]);
if((state_val_28941 === (1))){
var state_28940__$1 = state_28940;
var statearr_28942_29056 = state_28940__$1;
(statearr_28942_29056[(2)] = null);

(statearr_28942_29056[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28941 === (2))){
var state_28940__$1 = state_28940;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28940__$1,(4),from);
} else {
if((state_val_28941 === (3))){
var inst_28938 = (state_28940[(2)]);
var state_28940__$1 = state_28940;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28940__$1,inst_28938);
} else {
if((state_val_28941 === (4))){
var inst_28921 = (state_28940[(7)]);
var inst_28921__$1 = (state_28940[(2)]);
var inst_28922 = (inst_28921__$1 == null);
var state_28940__$1 = (function (){var statearr_28943 = state_28940;
(statearr_28943[(7)] = inst_28921__$1);

return statearr_28943;
})();
if(cljs.core.truth_(inst_28922)){
var statearr_28944_29057 = state_28940__$1;
(statearr_28944_29057[(1)] = (5));

} else {
var statearr_28945_29058 = state_28940__$1;
(statearr_28945_29058[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28941 === (5))){
var inst_28924 = cljs.core.async.close_BANG_.call(null,jobs);
var state_28940__$1 = state_28940;
var statearr_28946_29059 = state_28940__$1;
(statearr_28946_29059[(2)] = inst_28924);

(statearr_28946_29059[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28941 === (6))){
var inst_28921 = (state_28940[(7)]);
var inst_28926 = (state_28940[(8)]);
var inst_28926__$1 = cljs.core.async.chan.call(null,(1));
var inst_28927 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_28928 = [inst_28921,inst_28926__$1];
var inst_28929 = (new cljs.core.PersistentVector(null,2,(5),inst_28927,inst_28928,null));
var state_28940__$1 = (function (){var statearr_28947 = state_28940;
(statearr_28947[(8)] = inst_28926__$1);

return statearr_28947;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28940__$1,(8),jobs,inst_28929);
} else {
if((state_val_28941 === (7))){
var inst_28936 = (state_28940[(2)]);
var state_28940__$1 = state_28940;
var statearr_28948_29060 = state_28940__$1;
(statearr_28948_29060[(2)] = inst_28936);

(statearr_28948_29060[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28941 === (8))){
var inst_28926 = (state_28940[(8)]);
var inst_28931 = (state_28940[(2)]);
var state_28940__$1 = (function (){var statearr_28949 = state_28940;
(statearr_28949[(9)] = inst_28931);

return statearr_28949;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28940__$1,(9),results,inst_28926);
} else {
if((state_val_28941 === (9))){
var inst_28933 = (state_28940[(2)]);
var state_28940__$1 = (function (){var statearr_28950 = state_28940;
(statearr_28950[(10)] = inst_28933);

return statearr_28950;
})();
var statearr_28951_29061 = state_28940__$1;
(statearr_28951_29061[(2)] = null);

(statearr_28951_29061[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__20946__auto___29055,jobs,results,process,async))
;
return ((function (switch__20881__auto__,c__20946__auto___29055,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20882__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20882__auto____0 = (function (){
var statearr_28955 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28955[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20882__auto__);

(statearr_28955[(1)] = (1));

return statearr_28955;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20882__auto____1 = (function (state_28940){
while(true){
var ret_value__20883__auto__ = (function (){try{while(true){
var result__20884__auto__ = switch__20881__auto__.call(null,state_28940);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20884__auto__;
}
break;
}
}catch (e28956){if((e28956 instanceof Object)){
var ex__20885__auto__ = e28956;
var statearr_28957_29062 = state_28940;
(statearr_28957_29062[(5)] = ex__20885__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28940);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28956;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20883__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29063 = state_28940;
state_28940 = G__29063;
continue;
} else {
return ret_value__20883__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20882__auto__ = function(state_28940){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20882__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20882__auto____1.call(this,state_28940);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20882__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20882__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20882__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20882__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20882__auto__;
})()
;})(switch__20881__auto__,c__20946__auto___29055,jobs,results,process,async))
})();
var state__20948__auto__ = (function (){var statearr_28958 = f__20947__auto__.call(null);
(statearr_28958[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20946__auto___29055);

return statearr_28958;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20948__auto__);
});})(c__20946__auto___29055,jobs,results,process,async))
);


var c__20946__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20946__auto__,jobs,results,process,async){
return (function (){
var f__20947__auto__ = (function (){var switch__20881__auto__ = ((function (c__20946__auto__,jobs,results,process,async){
return (function (state_28996){
var state_val_28997 = (state_28996[(1)]);
if((state_val_28997 === (7))){
var inst_28992 = (state_28996[(2)]);
var state_28996__$1 = state_28996;
var statearr_28998_29064 = state_28996__$1;
(statearr_28998_29064[(2)] = inst_28992);

(statearr_28998_29064[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28997 === (20))){
var state_28996__$1 = state_28996;
var statearr_28999_29065 = state_28996__$1;
(statearr_28999_29065[(2)] = null);

(statearr_28999_29065[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28997 === (1))){
var state_28996__$1 = state_28996;
var statearr_29000_29066 = state_28996__$1;
(statearr_29000_29066[(2)] = null);

(statearr_29000_29066[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28997 === (4))){
var inst_28961 = (state_28996[(7)]);
var inst_28961__$1 = (state_28996[(2)]);
var inst_28962 = (inst_28961__$1 == null);
var state_28996__$1 = (function (){var statearr_29001 = state_28996;
(statearr_29001[(7)] = inst_28961__$1);

return statearr_29001;
})();
if(cljs.core.truth_(inst_28962)){
var statearr_29002_29067 = state_28996__$1;
(statearr_29002_29067[(1)] = (5));

} else {
var statearr_29003_29068 = state_28996__$1;
(statearr_29003_29068[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28997 === (15))){
var inst_28974 = (state_28996[(8)]);
var state_28996__$1 = state_28996;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28996__$1,(18),to,inst_28974);
} else {
if((state_val_28997 === (21))){
var inst_28987 = (state_28996[(2)]);
var state_28996__$1 = state_28996;
var statearr_29004_29069 = state_28996__$1;
(statearr_29004_29069[(2)] = inst_28987);

(statearr_29004_29069[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28997 === (13))){
var inst_28989 = (state_28996[(2)]);
var state_28996__$1 = (function (){var statearr_29005 = state_28996;
(statearr_29005[(9)] = inst_28989);

return statearr_29005;
})();
var statearr_29006_29070 = state_28996__$1;
(statearr_29006_29070[(2)] = null);

(statearr_29006_29070[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28997 === (6))){
var inst_28961 = (state_28996[(7)]);
var state_28996__$1 = state_28996;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28996__$1,(11),inst_28961);
} else {
if((state_val_28997 === (17))){
var inst_28982 = (state_28996[(2)]);
var state_28996__$1 = state_28996;
if(cljs.core.truth_(inst_28982)){
var statearr_29007_29071 = state_28996__$1;
(statearr_29007_29071[(1)] = (19));

} else {
var statearr_29008_29072 = state_28996__$1;
(statearr_29008_29072[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28997 === (3))){
var inst_28994 = (state_28996[(2)]);
var state_28996__$1 = state_28996;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28996__$1,inst_28994);
} else {
if((state_val_28997 === (12))){
var inst_28971 = (state_28996[(10)]);
var state_28996__$1 = state_28996;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28996__$1,(14),inst_28971);
} else {
if((state_val_28997 === (2))){
var state_28996__$1 = state_28996;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28996__$1,(4),results);
} else {
if((state_val_28997 === (19))){
var state_28996__$1 = state_28996;
var statearr_29009_29073 = state_28996__$1;
(statearr_29009_29073[(2)] = null);

(statearr_29009_29073[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28997 === (11))){
var inst_28971 = (state_28996[(2)]);
var state_28996__$1 = (function (){var statearr_29010 = state_28996;
(statearr_29010[(10)] = inst_28971);

return statearr_29010;
})();
var statearr_29011_29074 = state_28996__$1;
(statearr_29011_29074[(2)] = null);

(statearr_29011_29074[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28997 === (9))){
var state_28996__$1 = state_28996;
var statearr_29012_29075 = state_28996__$1;
(statearr_29012_29075[(2)] = null);

(statearr_29012_29075[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28997 === (5))){
var state_28996__$1 = state_28996;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29013_29076 = state_28996__$1;
(statearr_29013_29076[(1)] = (8));

} else {
var statearr_29014_29077 = state_28996__$1;
(statearr_29014_29077[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28997 === (14))){
var inst_28976 = (state_28996[(11)]);
var inst_28974 = (state_28996[(8)]);
var inst_28974__$1 = (state_28996[(2)]);
var inst_28975 = (inst_28974__$1 == null);
var inst_28976__$1 = cljs.core.not.call(null,inst_28975);
var state_28996__$1 = (function (){var statearr_29015 = state_28996;
(statearr_29015[(11)] = inst_28976__$1);

(statearr_29015[(8)] = inst_28974__$1);

return statearr_29015;
})();
if(inst_28976__$1){
var statearr_29016_29078 = state_28996__$1;
(statearr_29016_29078[(1)] = (15));

} else {
var statearr_29017_29079 = state_28996__$1;
(statearr_29017_29079[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28997 === (16))){
var inst_28976 = (state_28996[(11)]);
var state_28996__$1 = state_28996;
var statearr_29018_29080 = state_28996__$1;
(statearr_29018_29080[(2)] = inst_28976);

(statearr_29018_29080[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28997 === (10))){
var inst_28968 = (state_28996[(2)]);
var state_28996__$1 = state_28996;
var statearr_29019_29081 = state_28996__$1;
(statearr_29019_29081[(2)] = inst_28968);

(statearr_29019_29081[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28997 === (18))){
var inst_28979 = (state_28996[(2)]);
var state_28996__$1 = state_28996;
var statearr_29020_29082 = state_28996__$1;
(statearr_29020_29082[(2)] = inst_28979);

(statearr_29020_29082[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28997 === (8))){
var inst_28965 = cljs.core.async.close_BANG_.call(null,to);
var state_28996__$1 = state_28996;
var statearr_29021_29083 = state_28996__$1;
(statearr_29021_29083[(2)] = inst_28965);

(statearr_29021_29083[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__20946__auto__,jobs,results,process,async))
;
return ((function (switch__20881__auto__,c__20946__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20882__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20882__auto____0 = (function (){
var statearr_29025 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29025[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20882__auto__);

(statearr_29025[(1)] = (1));

return statearr_29025;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20882__auto____1 = (function (state_28996){
while(true){
var ret_value__20883__auto__ = (function (){try{while(true){
var result__20884__auto__ = switch__20881__auto__.call(null,state_28996);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20884__auto__;
}
break;
}
}catch (e29026){if((e29026 instanceof Object)){
var ex__20885__auto__ = e29026;
var statearr_29027_29084 = state_28996;
(statearr_29027_29084[(5)] = ex__20885__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28996);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29026;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20883__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29085 = state_28996;
state_28996 = G__29085;
continue;
} else {
return ret_value__20883__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20882__auto__ = function(state_28996){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20882__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20882__auto____1.call(this,state_28996);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20882__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20882__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20882__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20882__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20882__auto__;
})()
;})(switch__20881__auto__,c__20946__auto__,jobs,results,process,async))
})();
var state__20948__auto__ = (function (){var statearr_29028 = f__20947__auto__.call(null);
(statearr_29028[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20946__auto__);

return statearr_29028;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20948__auto__);
});})(c__20946__auto__,jobs,results,process,async))
);

return c__20946__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args29086 = [];
var len__17433__auto___29089 = arguments.length;
var i__17434__auto___29090 = (0);
while(true){
if((i__17434__auto___29090 < len__17433__auto___29089)){
args29086.push((arguments[i__17434__auto___29090]));

var G__29091 = (i__17434__auto___29090 + (1));
i__17434__auto___29090 = G__29091;
continue;
} else {
}
break;
}

var G__29088 = args29086.length;
switch (G__29088) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29086.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args29093 = [];
var len__17433__auto___29096 = arguments.length;
var i__17434__auto___29097 = (0);
while(true){
if((i__17434__auto___29097 < len__17433__auto___29096)){
args29093.push((arguments[i__17434__auto___29097]));

var G__29098 = (i__17434__auto___29097 + (1));
i__17434__auto___29097 = G__29098;
continue;
} else {
}
break;
}

var G__29095 = args29093.length;
switch (G__29095) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29093.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args29100 = [];
var len__17433__auto___29153 = arguments.length;
var i__17434__auto___29154 = (0);
while(true){
if((i__17434__auto___29154 < len__17433__auto___29153)){
args29100.push((arguments[i__17434__auto___29154]));

var G__29155 = (i__17434__auto___29154 + (1));
i__17434__auto___29154 = G__29155;
continue;
} else {
}
break;
}

var G__29102 = args29100.length;
switch (G__29102) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29100.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__20946__auto___29157 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20946__auto___29157,tc,fc){
return (function (){
var f__20947__auto__ = (function (){var switch__20881__auto__ = ((function (c__20946__auto___29157,tc,fc){
return (function (state_29128){
var state_val_29129 = (state_29128[(1)]);
if((state_val_29129 === (7))){
var inst_29124 = (state_29128[(2)]);
var state_29128__$1 = state_29128;
var statearr_29130_29158 = state_29128__$1;
(statearr_29130_29158[(2)] = inst_29124);

(statearr_29130_29158[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29129 === (1))){
var state_29128__$1 = state_29128;
var statearr_29131_29159 = state_29128__$1;
(statearr_29131_29159[(2)] = null);

(statearr_29131_29159[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29129 === (4))){
var inst_29105 = (state_29128[(7)]);
var inst_29105__$1 = (state_29128[(2)]);
var inst_29106 = (inst_29105__$1 == null);
var state_29128__$1 = (function (){var statearr_29132 = state_29128;
(statearr_29132[(7)] = inst_29105__$1);

return statearr_29132;
})();
if(cljs.core.truth_(inst_29106)){
var statearr_29133_29160 = state_29128__$1;
(statearr_29133_29160[(1)] = (5));

} else {
var statearr_29134_29161 = state_29128__$1;
(statearr_29134_29161[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29129 === (13))){
var state_29128__$1 = state_29128;
var statearr_29135_29162 = state_29128__$1;
(statearr_29135_29162[(2)] = null);

(statearr_29135_29162[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29129 === (6))){
var inst_29105 = (state_29128[(7)]);
var inst_29111 = p.call(null,inst_29105);
var state_29128__$1 = state_29128;
if(cljs.core.truth_(inst_29111)){
var statearr_29136_29163 = state_29128__$1;
(statearr_29136_29163[(1)] = (9));

} else {
var statearr_29137_29164 = state_29128__$1;
(statearr_29137_29164[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29129 === (3))){
var inst_29126 = (state_29128[(2)]);
var state_29128__$1 = state_29128;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29128__$1,inst_29126);
} else {
if((state_val_29129 === (12))){
var state_29128__$1 = state_29128;
var statearr_29138_29165 = state_29128__$1;
(statearr_29138_29165[(2)] = null);

(statearr_29138_29165[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29129 === (2))){
var state_29128__$1 = state_29128;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29128__$1,(4),ch);
} else {
if((state_val_29129 === (11))){
var inst_29105 = (state_29128[(7)]);
var inst_29115 = (state_29128[(2)]);
var state_29128__$1 = state_29128;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29128__$1,(8),inst_29115,inst_29105);
} else {
if((state_val_29129 === (9))){
var state_29128__$1 = state_29128;
var statearr_29139_29166 = state_29128__$1;
(statearr_29139_29166[(2)] = tc);

(statearr_29139_29166[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29129 === (5))){
var inst_29108 = cljs.core.async.close_BANG_.call(null,tc);
var inst_29109 = cljs.core.async.close_BANG_.call(null,fc);
var state_29128__$1 = (function (){var statearr_29140 = state_29128;
(statearr_29140[(8)] = inst_29108);

return statearr_29140;
})();
var statearr_29141_29167 = state_29128__$1;
(statearr_29141_29167[(2)] = inst_29109);

(statearr_29141_29167[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29129 === (14))){
var inst_29122 = (state_29128[(2)]);
var state_29128__$1 = state_29128;
var statearr_29142_29168 = state_29128__$1;
(statearr_29142_29168[(2)] = inst_29122);

(statearr_29142_29168[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29129 === (10))){
var state_29128__$1 = state_29128;
var statearr_29143_29169 = state_29128__$1;
(statearr_29143_29169[(2)] = fc);

(statearr_29143_29169[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29129 === (8))){
var inst_29117 = (state_29128[(2)]);
var state_29128__$1 = state_29128;
if(cljs.core.truth_(inst_29117)){
var statearr_29144_29170 = state_29128__$1;
(statearr_29144_29170[(1)] = (12));

} else {
var statearr_29145_29171 = state_29128__$1;
(statearr_29145_29171[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__20946__auto___29157,tc,fc))
;
return ((function (switch__20881__auto__,c__20946__auto___29157,tc,fc){
return (function() {
var cljs$core$async$state_machine__20882__auto__ = null;
var cljs$core$async$state_machine__20882__auto____0 = (function (){
var statearr_29149 = [null,null,null,null,null,null,null,null,null];
(statearr_29149[(0)] = cljs$core$async$state_machine__20882__auto__);

(statearr_29149[(1)] = (1));

return statearr_29149;
});
var cljs$core$async$state_machine__20882__auto____1 = (function (state_29128){
while(true){
var ret_value__20883__auto__ = (function (){try{while(true){
var result__20884__auto__ = switch__20881__auto__.call(null,state_29128);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20884__auto__;
}
break;
}
}catch (e29150){if((e29150 instanceof Object)){
var ex__20885__auto__ = e29150;
var statearr_29151_29172 = state_29128;
(statearr_29151_29172[(5)] = ex__20885__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29128);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29150;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20883__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29173 = state_29128;
state_29128 = G__29173;
continue;
} else {
return ret_value__20883__auto__;
}
break;
}
});
cljs$core$async$state_machine__20882__auto__ = function(state_29128){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20882__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20882__auto____1.call(this,state_29128);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20882__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20882__auto____0;
cljs$core$async$state_machine__20882__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20882__auto____1;
return cljs$core$async$state_machine__20882__auto__;
})()
;})(switch__20881__auto__,c__20946__auto___29157,tc,fc))
})();
var state__20948__auto__ = (function (){var statearr_29152 = f__20947__auto__.call(null);
(statearr_29152[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20946__auto___29157);

return statearr_29152;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20948__auto__);
});})(c__20946__auto___29157,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__20946__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20946__auto__){
return (function (){
var f__20947__auto__ = (function (){var switch__20881__auto__ = ((function (c__20946__auto__){
return (function (state_29220){
var state_val_29221 = (state_29220[(1)]);
if((state_val_29221 === (1))){
var inst_29206 = init;
var state_29220__$1 = (function (){var statearr_29222 = state_29220;
(statearr_29222[(7)] = inst_29206);

return statearr_29222;
})();
var statearr_29223_29238 = state_29220__$1;
(statearr_29223_29238[(2)] = null);

(statearr_29223_29238[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29221 === (2))){
var state_29220__$1 = state_29220;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29220__$1,(4),ch);
} else {
if((state_val_29221 === (3))){
var inst_29218 = (state_29220[(2)]);
var state_29220__$1 = state_29220;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29220__$1,inst_29218);
} else {
if((state_val_29221 === (4))){
var inst_29209 = (state_29220[(8)]);
var inst_29209__$1 = (state_29220[(2)]);
var inst_29210 = (inst_29209__$1 == null);
var state_29220__$1 = (function (){var statearr_29224 = state_29220;
(statearr_29224[(8)] = inst_29209__$1);

return statearr_29224;
})();
if(cljs.core.truth_(inst_29210)){
var statearr_29225_29239 = state_29220__$1;
(statearr_29225_29239[(1)] = (5));

} else {
var statearr_29226_29240 = state_29220__$1;
(statearr_29226_29240[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29221 === (5))){
var inst_29206 = (state_29220[(7)]);
var state_29220__$1 = state_29220;
var statearr_29227_29241 = state_29220__$1;
(statearr_29227_29241[(2)] = inst_29206);

(statearr_29227_29241[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29221 === (6))){
var inst_29206 = (state_29220[(7)]);
var inst_29209 = (state_29220[(8)]);
var inst_29213 = f.call(null,inst_29206,inst_29209);
var inst_29206__$1 = inst_29213;
var state_29220__$1 = (function (){var statearr_29228 = state_29220;
(statearr_29228[(7)] = inst_29206__$1);

return statearr_29228;
})();
var statearr_29229_29242 = state_29220__$1;
(statearr_29229_29242[(2)] = null);

(statearr_29229_29242[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29221 === (7))){
var inst_29216 = (state_29220[(2)]);
var state_29220__$1 = state_29220;
var statearr_29230_29243 = state_29220__$1;
(statearr_29230_29243[(2)] = inst_29216);

(statearr_29230_29243[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__20946__auto__))
;
return ((function (switch__20881__auto__,c__20946__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__20882__auto__ = null;
var cljs$core$async$reduce_$_state_machine__20882__auto____0 = (function (){
var statearr_29234 = [null,null,null,null,null,null,null,null,null];
(statearr_29234[(0)] = cljs$core$async$reduce_$_state_machine__20882__auto__);

(statearr_29234[(1)] = (1));

return statearr_29234;
});
var cljs$core$async$reduce_$_state_machine__20882__auto____1 = (function (state_29220){
while(true){
var ret_value__20883__auto__ = (function (){try{while(true){
var result__20884__auto__ = switch__20881__auto__.call(null,state_29220);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20884__auto__;
}
break;
}
}catch (e29235){if((e29235 instanceof Object)){
var ex__20885__auto__ = e29235;
var statearr_29236_29244 = state_29220;
(statearr_29236_29244[(5)] = ex__20885__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29220);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29235;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20883__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29245 = state_29220;
state_29220 = G__29245;
continue;
} else {
return ret_value__20883__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__20882__auto__ = function(state_29220){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__20882__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__20882__auto____1.call(this,state_29220);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__20882__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__20882__auto____0;
cljs$core$async$reduce_$_state_machine__20882__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__20882__auto____1;
return cljs$core$async$reduce_$_state_machine__20882__auto__;
})()
;})(switch__20881__auto__,c__20946__auto__))
})();
var state__20948__auto__ = (function (){var statearr_29237 = f__20947__auto__.call(null);
(statearr_29237[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20946__auto__);

return statearr_29237;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20948__auto__);
});})(c__20946__auto__))
);

return c__20946__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args29246 = [];
var len__17433__auto___29298 = arguments.length;
var i__17434__auto___29299 = (0);
while(true){
if((i__17434__auto___29299 < len__17433__auto___29298)){
args29246.push((arguments[i__17434__auto___29299]));

var G__29300 = (i__17434__auto___29299 + (1));
i__17434__auto___29299 = G__29300;
continue;
} else {
}
break;
}

var G__29248 = args29246.length;
switch (G__29248) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29246.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__20946__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20946__auto__){
return (function (){
var f__20947__auto__ = (function (){var switch__20881__auto__ = ((function (c__20946__auto__){
return (function (state_29273){
var state_val_29274 = (state_29273[(1)]);
if((state_val_29274 === (7))){
var inst_29255 = (state_29273[(2)]);
var state_29273__$1 = state_29273;
var statearr_29275_29302 = state_29273__$1;
(statearr_29275_29302[(2)] = inst_29255);

(statearr_29275_29302[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29274 === (1))){
var inst_29249 = cljs.core.seq.call(null,coll);
var inst_29250 = inst_29249;
var state_29273__$1 = (function (){var statearr_29276 = state_29273;
(statearr_29276[(7)] = inst_29250);

return statearr_29276;
})();
var statearr_29277_29303 = state_29273__$1;
(statearr_29277_29303[(2)] = null);

(statearr_29277_29303[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29274 === (4))){
var inst_29250 = (state_29273[(7)]);
var inst_29253 = cljs.core.first.call(null,inst_29250);
var state_29273__$1 = state_29273;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29273__$1,(7),ch,inst_29253);
} else {
if((state_val_29274 === (13))){
var inst_29267 = (state_29273[(2)]);
var state_29273__$1 = state_29273;
var statearr_29278_29304 = state_29273__$1;
(statearr_29278_29304[(2)] = inst_29267);

(statearr_29278_29304[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29274 === (6))){
var inst_29258 = (state_29273[(2)]);
var state_29273__$1 = state_29273;
if(cljs.core.truth_(inst_29258)){
var statearr_29279_29305 = state_29273__$1;
(statearr_29279_29305[(1)] = (8));

} else {
var statearr_29280_29306 = state_29273__$1;
(statearr_29280_29306[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29274 === (3))){
var inst_29271 = (state_29273[(2)]);
var state_29273__$1 = state_29273;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29273__$1,inst_29271);
} else {
if((state_val_29274 === (12))){
var state_29273__$1 = state_29273;
var statearr_29281_29307 = state_29273__$1;
(statearr_29281_29307[(2)] = null);

(statearr_29281_29307[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29274 === (2))){
var inst_29250 = (state_29273[(7)]);
var state_29273__$1 = state_29273;
if(cljs.core.truth_(inst_29250)){
var statearr_29282_29308 = state_29273__$1;
(statearr_29282_29308[(1)] = (4));

} else {
var statearr_29283_29309 = state_29273__$1;
(statearr_29283_29309[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29274 === (11))){
var inst_29264 = cljs.core.async.close_BANG_.call(null,ch);
var state_29273__$1 = state_29273;
var statearr_29284_29310 = state_29273__$1;
(statearr_29284_29310[(2)] = inst_29264);

(statearr_29284_29310[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29274 === (9))){
var state_29273__$1 = state_29273;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29285_29311 = state_29273__$1;
(statearr_29285_29311[(1)] = (11));

} else {
var statearr_29286_29312 = state_29273__$1;
(statearr_29286_29312[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29274 === (5))){
var inst_29250 = (state_29273[(7)]);
var state_29273__$1 = state_29273;
var statearr_29287_29313 = state_29273__$1;
(statearr_29287_29313[(2)] = inst_29250);

(statearr_29287_29313[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29274 === (10))){
var inst_29269 = (state_29273[(2)]);
var state_29273__$1 = state_29273;
var statearr_29288_29314 = state_29273__$1;
(statearr_29288_29314[(2)] = inst_29269);

(statearr_29288_29314[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29274 === (8))){
var inst_29250 = (state_29273[(7)]);
var inst_29260 = cljs.core.next.call(null,inst_29250);
var inst_29250__$1 = inst_29260;
var state_29273__$1 = (function (){var statearr_29289 = state_29273;
(statearr_29289[(7)] = inst_29250__$1);

return statearr_29289;
})();
var statearr_29290_29315 = state_29273__$1;
(statearr_29290_29315[(2)] = null);

(statearr_29290_29315[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__20946__auto__))
;
return ((function (switch__20881__auto__,c__20946__auto__){
return (function() {
var cljs$core$async$state_machine__20882__auto__ = null;
var cljs$core$async$state_machine__20882__auto____0 = (function (){
var statearr_29294 = [null,null,null,null,null,null,null,null];
(statearr_29294[(0)] = cljs$core$async$state_machine__20882__auto__);

(statearr_29294[(1)] = (1));

return statearr_29294;
});
var cljs$core$async$state_machine__20882__auto____1 = (function (state_29273){
while(true){
var ret_value__20883__auto__ = (function (){try{while(true){
var result__20884__auto__ = switch__20881__auto__.call(null,state_29273);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20884__auto__;
}
break;
}
}catch (e29295){if((e29295 instanceof Object)){
var ex__20885__auto__ = e29295;
var statearr_29296_29316 = state_29273;
(statearr_29296_29316[(5)] = ex__20885__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29273);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29295;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20883__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29317 = state_29273;
state_29273 = G__29317;
continue;
} else {
return ret_value__20883__auto__;
}
break;
}
});
cljs$core$async$state_machine__20882__auto__ = function(state_29273){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20882__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20882__auto____1.call(this,state_29273);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20882__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20882__auto____0;
cljs$core$async$state_machine__20882__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20882__auto____1;
return cljs$core$async$state_machine__20882__auto__;
})()
;})(switch__20881__auto__,c__20946__auto__))
})();
var state__20948__auto__ = (function (){var statearr_29297 = f__20947__auto__.call(null);
(statearr_29297[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20946__auto__);

return statearr_29297;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20948__auto__);
});})(c__20946__auto__))
);

return c__20946__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__17030__auto__ = (((_ == null))?null:_);
var m__17031__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__17030__auto__)]);
if(!((m__17031__auto__ == null))){
return m__17031__auto__.call(null,_);
} else {
var m__17031__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__17031__auto____$1 == null))){
return m__17031__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__17030__auto__ = (((m == null))?null:m);
var m__17031__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__17030__auto__)]);
if(!((m__17031__auto__ == null))){
return m__17031__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__17031__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__17031__auto____$1 == null))){
return m__17031__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__17030__auto__ = (((m == null))?null:m);
var m__17031__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__17030__auto__)]);
if(!((m__17031__auto__ == null))){
return m__17031__auto__.call(null,m,ch);
} else {
var m__17031__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__17031__auto____$1 == null))){
return m__17031__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__17030__auto__ = (((m == null))?null:m);
var m__17031__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__17030__auto__)]);
if(!((m__17031__auto__ == null))){
return m__17031__auto__.call(null,m);
} else {
var m__17031__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__17031__auto____$1 == null))){
return m__17031__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async29539 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29539 = (function (mult,ch,cs,meta29540){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta29540 = meta29540;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29539.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_29541,meta29540__$1){
var self__ = this;
var _29541__$1 = this;
return (new cljs.core.async.t_cljs$core$async29539(self__.mult,self__.ch,self__.cs,meta29540__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async29539.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_29541){
var self__ = this;
var _29541__$1 = this;
return self__.meta29540;
});})(cs))
;

cljs.core.async.t_cljs$core$async29539.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async29539.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async29539.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async29539.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async29539.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async29539.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async29539.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta29540","meta29540",-829583437,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async29539.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29539.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29539";

cljs.core.async.t_cljs$core$async29539.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__16973__auto__,writer__16974__auto__,opt__16975__auto__){
return cljs.core._write.call(null,writer__16974__auto__,"cljs.core.async/t_cljs$core$async29539");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async29539 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async29539(mult__$1,ch__$1,cs__$1,meta29540){
return (new cljs.core.async.t_cljs$core$async29539(mult__$1,ch__$1,cs__$1,meta29540));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async29539(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__20946__auto___29760 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20946__auto___29760,cs,m,dchan,dctr,done){
return (function (){
var f__20947__auto__ = (function (){var switch__20881__auto__ = ((function (c__20946__auto___29760,cs,m,dchan,dctr,done){
return (function (state_29672){
var state_val_29673 = (state_29672[(1)]);
if((state_val_29673 === (7))){
var inst_29668 = (state_29672[(2)]);
var state_29672__$1 = state_29672;
var statearr_29674_29761 = state_29672__$1;
(statearr_29674_29761[(2)] = inst_29668);

(statearr_29674_29761[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29673 === (20))){
var inst_29573 = (state_29672[(7)]);
var inst_29583 = cljs.core.first.call(null,inst_29573);
var inst_29584 = cljs.core.nth.call(null,inst_29583,(0),null);
var inst_29585 = cljs.core.nth.call(null,inst_29583,(1),null);
var state_29672__$1 = (function (){var statearr_29675 = state_29672;
(statearr_29675[(8)] = inst_29584);

return statearr_29675;
})();
if(cljs.core.truth_(inst_29585)){
var statearr_29676_29762 = state_29672__$1;
(statearr_29676_29762[(1)] = (22));

} else {
var statearr_29677_29763 = state_29672__$1;
(statearr_29677_29763[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29673 === (27))){
var inst_29615 = (state_29672[(9)]);
var inst_29613 = (state_29672[(10)]);
var inst_29544 = (state_29672[(11)]);
var inst_29620 = (state_29672[(12)]);
var inst_29620__$1 = cljs.core._nth.call(null,inst_29613,inst_29615);
var inst_29621 = cljs.core.async.put_BANG_.call(null,inst_29620__$1,inst_29544,done);
var state_29672__$1 = (function (){var statearr_29678 = state_29672;
(statearr_29678[(12)] = inst_29620__$1);

return statearr_29678;
})();
if(cljs.core.truth_(inst_29621)){
var statearr_29679_29764 = state_29672__$1;
(statearr_29679_29764[(1)] = (30));

} else {
var statearr_29680_29765 = state_29672__$1;
(statearr_29680_29765[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29673 === (1))){
var state_29672__$1 = state_29672;
var statearr_29681_29766 = state_29672__$1;
(statearr_29681_29766[(2)] = null);

(statearr_29681_29766[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29673 === (24))){
var inst_29573 = (state_29672[(7)]);
var inst_29590 = (state_29672[(2)]);
var inst_29591 = cljs.core.next.call(null,inst_29573);
var inst_29553 = inst_29591;
var inst_29554 = null;
var inst_29555 = (0);
var inst_29556 = (0);
var state_29672__$1 = (function (){var statearr_29682 = state_29672;
(statearr_29682[(13)] = inst_29590);

(statearr_29682[(14)] = inst_29554);

(statearr_29682[(15)] = inst_29556);

(statearr_29682[(16)] = inst_29553);

(statearr_29682[(17)] = inst_29555);

return statearr_29682;
})();
var statearr_29683_29767 = state_29672__$1;
(statearr_29683_29767[(2)] = null);

(statearr_29683_29767[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29673 === (39))){
var state_29672__$1 = state_29672;
var statearr_29687_29768 = state_29672__$1;
(statearr_29687_29768[(2)] = null);

(statearr_29687_29768[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29673 === (4))){
var inst_29544 = (state_29672[(11)]);
var inst_29544__$1 = (state_29672[(2)]);
var inst_29545 = (inst_29544__$1 == null);
var state_29672__$1 = (function (){var statearr_29688 = state_29672;
(statearr_29688[(11)] = inst_29544__$1);

return statearr_29688;
})();
if(cljs.core.truth_(inst_29545)){
var statearr_29689_29769 = state_29672__$1;
(statearr_29689_29769[(1)] = (5));

} else {
var statearr_29690_29770 = state_29672__$1;
(statearr_29690_29770[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29673 === (15))){
var inst_29554 = (state_29672[(14)]);
var inst_29556 = (state_29672[(15)]);
var inst_29553 = (state_29672[(16)]);
var inst_29555 = (state_29672[(17)]);
var inst_29569 = (state_29672[(2)]);
var inst_29570 = (inst_29556 + (1));
var tmp29684 = inst_29554;
var tmp29685 = inst_29553;
var tmp29686 = inst_29555;
var inst_29553__$1 = tmp29685;
var inst_29554__$1 = tmp29684;
var inst_29555__$1 = tmp29686;
var inst_29556__$1 = inst_29570;
var state_29672__$1 = (function (){var statearr_29691 = state_29672;
(statearr_29691[(14)] = inst_29554__$1);

(statearr_29691[(15)] = inst_29556__$1);

(statearr_29691[(18)] = inst_29569);

(statearr_29691[(16)] = inst_29553__$1);

(statearr_29691[(17)] = inst_29555__$1);

return statearr_29691;
})();
var statearr_29692_29771 = state_29672__$1;
(statearr_29692_29771[(2)] = null);

(statearr_29692_29771[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29673 === (21))){
var inst_29594 = (state_29672[(2)]);
var state_29672__$1 = state_29672;
var statearr_29696_29772 = state_29672__$1;
(statearr_29696_29772[(2)] = inst_29594);

(statearr_29696_29772[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29673 === (31))){
var inst_29620 = (state_29672[(12)]);
var inst_29624 = done.call(null,null);
var inst_29625 = cljs.core.async.untap_STAR_.call(null,m,inst_29620);
var state_29672__$1 = (function (){var statearr_29697 = state_29672;
(statearr_29697[(19)] = inst_29624);

return statearr_29697;
})();
var statearr_29698_29773 = state_29672__$1;
(statearr_29698_29773[(2)] = inst_29625);

(statearr_29698_29773[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29673 === (32))){
var inst_29615 = (state_29672[(9)]);
var inst_29614 = (state_29672[(20)]);
var inst_29613 = (state_29672[(10)]);
var inst_29612 = (state_29672[(21)]);
var inst_29627 = (state_29672[(2)]);
var inst_29628 = (inst_29615 + (1));
var tmp29693 = inst_29614;
var tmp29694 = inst_29613;
var tmp29695 = inst_29612;
var inst_29612__$1 = tmp29695;
var inst_29613__$1 = tmp29694;
var inst_29614__$1 = tmp29693;
var inst_29615__$1 = inst_29628;
var state_29672__$1 = (function (){var statearr_29699 = state_29672;
(statearr_29699[(9)] = inst_29615__$1);

(statearr_29699[(20)] = inst_29614__$1);

(statearr_29699[(10)] = inst_29613__$1);

(statearr_29699[(21)] = inst_29612__$1);

(statearr_29699[(22)] = inst_29627);

return statearr_29699;
})();
var statearr_29700_29774 = state_29672__$1;
(statearr_29700_29774[(2)] = null);

(statearr_29700_29774[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29673 === (40))){
var inst_29640 = (state_29672[(23)]);
var inst_29644 = done.call(null,null);
var inst_29645 = cljs.core.async.untap_STAR_.call(null,m,inst_29640);
var state_29672__$1 = (function (){var statearr_29701 = state_29672;
(statearr_29701[(24)] = inst_29644);

return statearr_29701;
})();
var statearr_29702_29775 = state_29672__$1;
(statearr_29702_29775[(2)] = inst_29645);

(statearr_29702_29775[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29673 === (33))){
var inst_29631 = (state_29672[(25)]);
var inst_29633 = cljs.core.chunked_seq_QMARK_.call(null,inst_29631);
var state_29672__$1 = state_29672;
if(inst_29633){
var statearr_29703_29776 = state_29672__$1;
(statearr_29703_29776[(1)] = (36));

} else {
var statearr_29704_29777 = state_29672__$1;
(statearr_29704_29777[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29673 === (13))){
var inst_29563 = (state_29672[(26)]);
var inst_29566 = cljs.core.async.close_BANG_.call(null,inst_29563);
var state_29672__$1 = state_29672;
var statearr_29705_29778 = state_29672__$1;
(statearr_29705_29778[(2)] = inst_29566);

(statearr_29705_29778[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29673 === (22))){
var inst_29584 = (state_29672[(8)]);
var inst_29587 = cljs.core.async.close_BANG_.call(null,inst_29584);
var state_29672__$1 = state_29672;
var statearr_29706_29779 = state_29672__$1;
(statearr_29706_29779[(2)] = inst_29587);

(statearr_29706_29779[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29673 === (36))){
var inst_29631 = (state_29672[(25)]);
var inst_29635 = cljs.core.chunk_first.call(null,inst_29631);
var inst_29636 = cljs.core.chunk_rest.call(null,inst_29631);
var inst_29637 = cljs.core.count.call(null,inst_29635);
var inst_29612 = inst_29636;
var inst_29613 = inst_29635;
var inst_29614 = inst_29637;
var inst_29615 = (0);
var state_29672__$1 = (function (){var statearr_29707 = state_29672;
(statearr_29707[(9)] = inst_29615);

(statearr_29707[(20)] = inst_29614);

(statearr_29707[(10)] = inst_29613);

(statearr_29707[(21)] = inst_29612);

return statearr_29707;
})();
var statearr_29708_29780 = state_29672__$1;
(statearr_29708_29780[(2)] = null);

(statearr_29708_29780[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29673 === (41))){
var inst_29631 = (state_29672[(25)]);
var inst_29647 = (state_29672[(2)]);
var inst_29648 = cljs.core.next.call(null,inst_29631);
var inst_29612 = inst_29648;
var inst_29613 = null;
var inst_29614 = (0);
var inst_29615 = (0);
var state_29672__$1 = (function (){var statearr_29709 = state_29672;
(statearr_29709[(9)] = inst_29615);

(statearr_29709[(20)] = inst_29614);

(statearr_29709[(10)] = inst_29613);

(statearr_29709[(21)] = inst_29612);

(statearr_29709[(27)] = inst_29647);

return statearr_29709;
})();
var statearr_29710_29781 = state_29672__$1;
(statearr_29710_29781[(2)] = null);

(statearr_29710_29781[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29673 === (43))){
var state_29672__$1 = state_29672;
var statearr_29711_29782 = state_29672__$1;
(statearr_29711_29782[(2)] = null);

(statearr_29711_29782[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29673 === (29))){
var inst_29656 = (state_29672[(2)]);
var state_29672__$1 = state_29672;
var statearr_29712_29783 = state_29672__$1;
(statearr_29712_29783[(2)] = inst_29656);

(statearr_29712_29783[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29673 === (44))){
var inst_29665 = (state_29672[(2)]);
var state_29672__$1 = (function (){var statearr_29713 = state_29672;
(statearr_29713[(28)] = inst_29665);

return statearr_29713;
})();
var statearr_29714_29784 = state_29672__$1;
(statearr_29714_29784[(2)] = null);

(statearr_29714_29784[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29673 === (6))){
var inst_29604 = (state_29672[(29)]);
var inst_29603 = cljs.core.deref.call(null,cs);
var inst_29604__$1 = cljs.core.keys.call(null,inst_29603);
var inst_29605 = cljs.core.count.call(null,inst_29604__$1);
var inst_29606 = cljs.core.reset_BANG_.call(null,dctr,inst_29605);
var inst_29611 = cljs.core.seq.call(null,inst_29604__$1);
var inst_29612 = inst_29611;
var inst_29613 = null;
var inst_29614 = (0);
var inst_29615 = (0);
var state_29672__$1 = (function (){var statearr_29715 = state_29672;
(statearr_29715[(9)] = inst_29615);

(statearr_29715[(20)] = inst_29614);

(statearr_29715[(10)] = inst_29613);

(statearr_29715[(21)] = inst_29612);

(statearr_29715[(29)] = inst_29604__$1);

(statearr_29715[(30)] = inst_29606);

return statearr_29715;
})();
var statearr_29716_29785 = state_29672__$1;
(statearr_29716_29785[(2)] = null);

(statearr_29716_29785[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29673 === (28))){
var inst_29612 = (state_29672[(21)]);
var inst_29631 = (state_29672[(25)]);
var inst_29631__$1 = cljs.core.seq.call(null,inst_29612);
var state_29672__$1 = (function (){var statearr_29717 = state_29672;
(statearr_29717[(25)] = inst_29631__$1);

return statearr_29717;
})();
if(inst_29631__$1){
var statearr_29718_29786 = state_29672__$1;
(statearr_29718_29786[(1)] = (33));

} else {
var statearr_29719_29787 = state_29672__$1;
(statearr_29719_29787[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29673 === (25))){
var inst_29615 = (state_29672[(9)]);
var inst_29614 = (state_29672[(20)]);
var inst_29617 = (inst_29615 < inst_29614);
var inst_29618 = inst_29617;
var state_29672__$1 = state_29672;
if(cljs.core.truth_(inst_29618)){
var statearr_29720_29788 = state_29672__$1;
(statearr_29720_29788[(1)] = (27));

} else {
var statearr_29721_29789 = state_29672__$1;
(statearr_29721_29789[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29673 === (34))){
var state_29672__$1 = state_29672;
var statearr_29722_29790 = state_29672__$1;
(statearr_29722_29790[(2)] = null);

(statearr_29722_29790[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29673 === (17))){
var state_29672__$1 = state_29672;
var statearr_29723_29791 = state_29672__$1;
(statearr_29723_29791[(2)] = null);

(statearr_29723_29791[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29673 === (3))){
var inst_29670 = (state_29672[(2)]);
var state_29672__$1 = state_29672;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29672__$1,inst_29670);
} else {
if((state_val_29673 === (12))){
var inst_29599 = (state_29672[(2)]);
var state_29672__$1 = state_29672;
var statearr_29724_29792 = state_29672__$1;
(statearr_29724_29792[(2)] = inst_29599);

(statearr_29724_29792[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29673 === (2))){
var state_29672__$1 = state_29672;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29672__$1,(4),ch);
} else {
if((state_val_29673 === (23))){
var state_29672__$1 = state_29672;
var statearr_29725_29793 = state_29672__$1;
(statearr_29725_29793[(2)] = null);

(statearr_29725_29793[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29673 === (35))){
var inst_29654 = (state_29672[(2)]);
var state_29672__$1 = state_29672;
var statearr_29726_29794 = state_29672__$1;
(statearr_29726_29794[(2)] = inst_29654);

(statearr_29726_29794[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29673 === (19))){
var inst_29573 = (state_29672[(7)]);
var inst_29577 = cljs.core.chunk_first.call(null,inst_29573);
var inst_29578 = cljs.core.chunk_rest.call(null,inst_29573);
var inst_29579 = cljs.core.count.call(null,inst_29577);
var inst_29553 = inst_29578;
var inst_29554 = inst_29577;
var inst_29555 = inst_29579;
var inst_29556 = (0);
var state_29672__$1 = (function (){var statearr_29727 = state_29672;
(statearr_29727[(14)] = inst_29554);

(statearr_29727[(15)] = inst_29556);

(statearr_29727[(16)] = inst_29553);

(statearr_29727[(17)] = inst_29555);

return statearr_29727;
})();
var statearr_29728_29795 = state_29672__$1;
(statearr_29728_29795[(2)] = null);

(statearr_29728_29795[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29673 === (11))){
var inst_29573 = (state_29672[(7)]);
var inst_29553 = (state_29672[(16)]);
var inst_29573__$1 = cljs.core.seq.call(null,inst_29553);
var state_29672__$1 = (function (){var statearr_29729 = state_29672;
(statearr_29729[(7)] = inst_29573__$1);

return statearr_29729;
})();
if(inst_29573__$1){
var statearr_29730_29796 = state_29672__$1;
(statearr_29730_29796[(1)] = (16));

} else {
var statearr_29731_29797 = state_29672__$1;
(statearr_29731_29797[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29673 === (9))){
var inst_29601 = (state_29672[(2)]);
var state_29672__$1 = state_29672;
var statearr_29732_29798 = state_29672__$1;
(statearr_29732_29798[(2)] = inst_29601);

(statearr_29732_29798[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29673 === (5))){
var inst_29551 = cljs.core.deref.call(null,cs);
var inst_29552 = cljs.core.seq.call(null,inst_29551);
var inst_29553 = inst_29552;
var inst_29554 = null;
var inst_29555 = (0);
var inst_29556 = (0);
var state_29672__$1 = (function (){var statearr_29733 = state_29672;
(statearr_29733[(14)] = inst_29554);

(statearr_29733[(15)] = inst_29556);

(statearr_29733[(16)] = inst_29553);

(statearr_29733[(17)] = inst_29555);

return statearr_29733;
})();
var statearr_29734_29799 = state_29672__$1;
(statearr_29734_29799[(2)] = null);

(statearr_29734_29799[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29673 === (14))){
var state_29672__$1 = state_29672;
var statearr_29735_29800 = state_29672__$1;
(statearr_29735_29800[(2)] = null);

(statearr_29735_29800[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29673 === (45))){
var inst_29662 = (state_29672[(2)]);
var state_29672__$1 = state_29672;
var statearr_29736_29801 = state_29672__$1;
(statearr_29736_29801[(2)] = inst_29662);

(statearr_29736_29801[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29673 === (26))){
var inst_29604 = (state_29672[(29)]);
var inst_29658 = (state_29672[(2)]);
var inst_29659 = cljs.core.seq.call(null,inst_29604);
var state_29672__$1 = (function (){var statearr_29737 = state_29672;
(statearr_29737[(31)] = inst_29658);

return statearr_29737;
})();
if(inst_29659){
var statearr_29738_29802 = state_29672__$1;
(statearr_29738_29802[(1)] = (42));

} else {
var statearr_29739_29803 = state_29672__$1;
(statearr_29739_29803[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29673 === (16))){
var inst_29573 = (state_29672[(7)]);
var inst_29575 = cljs.core.chunked_seq_QMARK_.call(null,inst_29573);
var state_29672__$1 = state_29672;
if(inst_29575){
var statearr_29740_29804 = state_29672__$1;
(statearr_29740_29804[(1)] = (19));

} else {
var statearr_29741_29805 = state_29672__$1;
(statearr_29741_29805[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29673 === (38))){
var inst_29651 = (state_29672[(2)]);
var state_29672__$1 = state_29672;
var statearr_29742_29806 = state_29672__$1;
(statearr_29742_29806[(2)] = inst_29651);

(statearr_29742_29806[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29673 === (30))){
var state_29672__$1 = state_29672;
var statearr_29743_29807 = state_29672__$1;
(statearr_29743_29807[(2)] = null);

(statearr_29743_29807[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29673 === (10))){
var inst_29554 = (state_29672[(14)]);
var inst_29556 = (state_29672[(15)]);
var inst_29562 = cljs.core._nth.call(null,inst_29554,inst_29556);
var inst_29563 = cljs.core.nth.call(null,inst_29562,(0),null);
var inst_29564 = cljs.core.nth.call(null,inst_29562,(1),null);
var state_29672__$1 = (function (){var statearr_29744 = state_29672;
(statearr_29744[(26)] = inst_29563);

return statearr_29744;
})();
if(cljs.core.truth_(inst_29564)){
var statearr_29745_29808 = state_29672__$1;
(statearr_29745_29808[(1)] = (13));

} else {
var statearr_29746_29809 = state_29672__$1;
(statearr_29746_29809[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29673 === (18))){
var inst_29597 = (state_29672[(2)]);
var state_29672__$1 = state_29672;
var statearr_29747_29810 = state_29672__$1;
(statearr_29747_29810[(2)] = inst_29597);

(statearr_29747_29810[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29673 === (42))){
var state_29672__$1 = state_29672;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29672__$1,(45),dchan);
} else {
if((state_val_29673 === (37))){
var inst_29544 = (state_29672[(11)]);
var inst_29631 = (state_29672[(25)]);
var inst_29640 = (state_29672[(23)]);
var inst_29640__$1 = cljs.core.first.call(null,inst_29631);
var inst_29641 = cljs.core.async.put_BANG_.call(null,inst_29640__$1,inst_29544,done);
var state_29672__$1 = (function (){var statearr_29748 = state_29672;
(statearr_29748[(23)] = inst_29640__$1);

return statearr_29748;
})();
if(cljs.core.truth_(inst_29641)){
var statearr_29749_29811 = state_29672__$1;
(statearr_29749_29811[(1)] = (39));

} else {
var statearr_29750_29812 = state_29672__$1;
(statearr_29750_29812[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29673 === (8))){
var inst_29556 = (state_29672[(15)]);
var inst_29555 = (state_29672[(17)]);
var inst_29558 = (inst_29556 < inst_29555);
var inst_29559 = inst_29558;
var state_29672__$1 = state_29672;
if(cljs.core.truth_(inst_29559)){
var statearr_29751_29813 = state_29672__$1;
(statearr_29751_29813[(1)] = (10));

} else {
var statearr_29752_29814 = state_29672__$1;
(statearr_29752_29814[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__20946__auto___29760,cs,m,dchan,dctr,done))
;
return ((function (switch__20881__auto__,c__20946__auto___29760,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__20882__auto__ = null;
var cljs$core$async$mult_$_state_machine__20882__auto____0 = (function (){
var statearr_29756 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29756[(0)] = cljs$core$async$mult_$_state_machine__20882__auto__);

(statearr_29756[(1)] = (1));

return statearr_29756;
});
var cljs$core$async$mult_$_state_machine__20882__auto____1 = (function (state_29672){
while(true){
var ret_value__20883__auto__ = (function (){try{while(true){
var result__20884__auto__ = switch__20881__auto__.call(null,state_29672);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20884__auto__;
}
break;
}
}catch (e29757){if((e29757 instanceof Object)){
var ex__20885__auto__ = e29757;
var statearr_29758_29815 = state_29672;
(statearr_29758_29815[(5)] = ex__20885__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29672);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29757;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20883__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29816 = state_29672;
state_29672 = G__29816;
continue;
} else {
return ret_value__20883__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__20882__auto__ = function(state_29672){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__20882__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__20882__auto____1.call(this,state_29672);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__20882__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__20882__auto____0;
cljs$core$async$mult_$_state_machine__20882__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__20882__auto____1;
return cljs$core$async$mult_$_state_machine__20882__auto__;
})()
;})(switch__20881__auto__,c__20946__auto___29760,cs,m,dchan,dctr,done))
})();
var state__20948__auto__ = (function (){var statearr_29759 = f__20947__auto__.call(null);
(statearr_29759[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20946__auto___29760);

return statearr_29759;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20948__auto__);
});})(c__20946__auto___29760,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args29817 = [];
var len__17433__auto___29820 = arguments.length;
var i__17434__auto___29821 = (0);
while(true){
if((i__17434__auto___29821 < len__17433__auto___29820)){
args29817.push((arguments[i__17434__auto___29821]));

var G__29822 = (i__17434__auto___29821 + (1));
i__17434__auto___29821 = G__29822;
continue;
} else {
}
break;
}

var G__29819 = args29817.length;
switch (G__29819) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29817.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__17030__auto__ = (((m == null))?null:m);
var m__17031__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__17030__auto__)]);
if(!((m__17031__auto__ == null))){
return m__17031__auto__.call(null,m,ch);
} else {
var m__17031__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__17031__auto____$1 == null))){
return m__17031__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__17030__auto__ = (((m == null))?null:m);
var m__17031__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__17030__auto__)]);
if(!((m__17031__auto__ == null))){
return m__17031__auto__.call(null,m,ch);
} else {
var m__17031__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__17031__auto____$1 == null))){
return m__17031__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__17030__auto__ = (((m == null))?null:m);
var m__17031__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__17030__auto__)]);
if(!((m__17031__auto__ == null))){
return m__17031__auto__.call(null,m);
} else {
var m__17031__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__17031__auto____$1 == null))){
return m__17031__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__17030__auto__ = (((m == null))?null:m);
var m__17031__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__17030__auto__)]);
if(!((m__17031__auto__ == null))){
return m__17031__auto__.call(null,m,state_map);
} else {
var m__17031__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__17031__auto____$1 == null))){
return m__17031__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__17030__auto__ = (((m == null))?null:m);
var m__17031__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__17030__auto__)]);
if(!((m__17031__auto__ == null))){
return m__17031__auto__.call(null,m,mode);
} else {
var m__17031__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__17031__auto____$1 == null))){
return m__17031__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__17440__auto__ = [];
var len__17433__auto___29834 = arguments.length;
var i__17434__auto___29835 = (0);
while(true){
if((i__17434__auto___29835 < len__17433__auto___29834)){
args__17440__auto__.push((arguments[i__17434__auto___29835]));

var G__29836 = (i__17434__auto___29835 + (1));
i__17434__auto___29835 = G__29836;
continue;
} else {
}
break;
}

var argseq__17441__auto__ = ((((3) < args__17440__auto__.length))?(new cljs.core.IndexedSeq(args__17440__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17441__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__29828){
var map__29829 = p__29828;
var map__29829__$1 = ((((!((map__29829 == null)))?((((map__29829.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29829.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29829):map__29829);
var opts = map__29829__$1;
var statearr_29831_29837 = state;
(statearr_29831_29837[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__29829,map__29829__$1,opts){
return (function (val){
var statearr_29832_29838 = state;
(statearr_29832_29838[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__29829,map__29829__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_29833_29839 = state;
(statearr_29833_29839[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq29824){
var G__29825 = cljs.core.first.call(null,seq29824);
var seq29824__$1 = cljs.core.next.call(null,seq29824);
var G__29826 = cljs.core.first.call(null,seq29824__$1);
var seq29824__$2 = cljs.core.next.call(null,seq29824__$1);
var G__29827 = cljs.core.first.call(null,seq29824__$2);
var seq29824__$3 = cljs.core.next.call(null,seq29824__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__29825,G__29826,G__29827,seq29824__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async30003 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30003 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta30004){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta30004 = meta30004;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30003.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_30005,meta30004__$1){
var self__ = this;
var _30005__$1 = this;
return (new cljs.core.async.t_cljs$core$async30003(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta30004__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30003.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_30005){
var self__ = this;
var _30005__$1 = this;
return self__.meta30004;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30003.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async30003.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30003.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async30003.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30003.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30003.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30003.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30003.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30003.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta30004","meta30004",712511372,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30003.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30003.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30003";

cljs.core.async.t_cljs$core$async30003.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__16973__auto__,writer__16974__auto__,opt__16975__auto__){
return cljs.core._write.call(null,writer__16974__auto__,"cljs.core.async/t_cljs$core$async30003");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async30003 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async30003(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta30004){
return (new cljs.core.async.t_cljs$core$async30003(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta30004));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async30003(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__20946__auto___30166 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20946__auto___30166,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__20947__auto__ = (function (){var switch__20881__auto__ = ((function (c__20946__auto___30166,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_30103){
var state_val_30104 = (state_30103[(1)]);
if((state_val_30104 === (7))){
var inst_30021 = (state_30103[(2)]);
var state_30103__$1 = state_30103;
var statearr_30105_30167 = state_30103__$1;
(statearr_30105_30167[(2)] = inst_30021);

(statearr_30105_30167[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30104 === (20))){
var inst_30033 = (state_30103[(7)]);
var state_30103__$1 = state_30103;
var statearr_30106_30168 = state_30103__$1;
(statearr_30106_30168[(2)] = inst_30033);

(statearr_30106_30168[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30104 === (27))){
var state_30103__$1 = state_30103;
var statearr_30107_30169 = state_30103__$1;
(statearr_30107_30169[(2)] = null);

(statearr_30107_30169[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30104 === (1))){
var inst_30009 = (state_30103[(8)]);
var inst_30009__$1 = calc_state.call(null);
var inst_30011 = (inst_30009__$1 == null);
var inst_30012 = cljs.core.not.call(null,inst_30011);
var state_30103__$1 = (function (){var statearr_30108 = state_30103;
(statearr_30108[(8)] = inst_30009__$1);

return statearr_30108;
})();
if(inst_30012){
var statearr_30109_30170 = state_30103__$1;
(statearr_30109_30170[(1)] = (2));

} else {
var statearr_30110_30171 = state_30103__$1;
(statearr_30110_30171[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30104 === (24))){
var inst_30063 = (state_30103[(9)]);
var inst_30056 = (state_30103[(10)]);
var inst_30077 = (state_30103[(11)]);
var inst_30077__$1 = inst_30056.call(null,inst_30063);
var state_30103__$1 = (function (){var statearr_30111 = state_30103;
(statearr_30111[(11)] = inst_30077__$1);

return statearr_30111;
})();
if(cljs.core.truth_(inst_30077__$1)){
var statearr_30112_30172 = state_30103__$1;
(statearr_30112_30172[(1)] = (29));

} else {
var statearr_30113_30173 = state_30103__$1;
(statearr_30113_30173[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30104 === (4))){
var inst_30024 = (state_30103[(2)]);
var state_30103__$1 = state_30103;
if(cljs.core.truth_(inst_30024)){
var statearr_30114_30174 = state_30103__$1;
(statearr_30114_30174[(1)] = (8));

} else {
var statearr_30115_30175 = state_30103__$1;
(statearr_30115_30175[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30104 === (15))){
var inst_30050 = (state_30103[(2)]);
var state_30103__$1 = state_30103;
if(cljs.core.truth_(inst_30050)){
var statearr_30116_30176 = state_30103__$1;
(statearr_30116_30176[(1)] = (19));

} else {
var statearr_30117_30177 = state_30103__$1;
(statearr_30117_30177[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30104 === (21))){
var inst_30055 = (state_30103[(12)]);
var inst_30055__$1 = (state_30103[(2)]);
var inst_30056 = cljs.core.get.call(null,inst_30055__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_30057 = cljs.core.get.call(null,inst_30055__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_30058 = cljs.core.get.call(null,inst_30055__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_30103__$1 = (function (){var statearr_30118 = state_30103;
(statearr_30118[(10)] = inst_30056);

(statearr_30118[(13)] = inst_30057);

(statearr_30118[(12)] = inst_30055__$1);

return statearr_30118;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_30103__$1,(22),inst_30058);
} else {
if((state_val_30104 === (31))){
var inst_30085 = (state_30103[(2)]);
var state_30103__$1 = state_30103;
if(cljs.core.truth_(inst_30085)){
var statearr_30119_30178 = state_30103__$1;
(statearr_30119_30178[(1)] = (32));

} else {
var statearr_30120_30179 = state_30103__$1;
(statearr_30120_30179[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30104 === (32))){
var inst_30062 = (state_30103[(14)]);
var state_30103__$1 = state_30103;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30103__$1,(35),out,inst_30062);
} else {
if((state_val_30104 === (33))){
var inst_30055 = (state_30103[(12)]);
var inst_30033 = inst_30055;
var state_30103__$1 = (function (){var statearr_30121 = state_30103;
(statearr_30121[(7)] = inst_30033);

return statearr_30121;
})();
var statearr_30122_30180 = state_30103__$1;
(statearr_30122_30180[(2)] = null);

(statearr_30122_30180[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30104 === (13))){
var inst_30033 = (state_30103[(7)]);
var inst_30040 = inst_30033.cljs$lang$protocol_mask$partition0$;
var inst_30041 = (inst_30040 & (64));
var inst_30042 = inst_30033.cljs$core$ISeq$;
var inst_30043 = (inst_30041) || (inst_30042);
var state_30103__$1 = state_30103;
if(cljs.core.truth_(inst_30043)){
var statearr_30123_30181 = state_30103__$1;
(statearr_30123_30181[(1)] = (16));

} else {
var statearr_30124_30182 = state_30103__$1;
(statearr_30124_30182[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30104 === (22))){
var inst_30063 = (state_30103[(9)]);
var inst_30062 = (state_30103[(14)]);
var inst_30061 = (state_30103[(2)]);
var inst_30062__$1 = cljs.core.nth.call(null,inst_30061,(0),null);
var inst_30063__$1 = cljs.core.nth.call(null,inst_30061,(1),null);
var inst_30064 = (inst_30062__$1 == null);
var inst_30065 = cljs.core._EQ_.call(null,inst_30063__$1,change);
var inst_30066 = (inst_30064) || (inst_30065);
var state_30103__$1 = (function (){var statearr_30125 = state_30103;
(statearr_30125[(9)] = inst_30063__$1);

(statearr_30125[(14)] = inst_30062__$1);

return statearr_30125;
})();
if(cljs.core.truth_(inst_30066)){
var statearr_30126_30183 = state_30103__$1;
(statearr_30126_30183[(1)] = (23));

} else {
var statearr_30127_30184 = state_30103__$1;
(statearr_30127_30184[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30104 === (36))){
var inst_30055 = (state_30103[(12)]);
var inst_30033 = inst_30055;
var state_30103__$1 = (function (){var statearr_30128 = state_30103;
(statearr_30128[(7)] = inst_30033);

return statearr_30128;
})();
var statearr_30129_30185 = state_30103__$1;
(statearr_30129_30185[(2)] = null);

(statearr_30129_30185[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30104 === (29))){
var inst_30077 = (state_30103[(11)]);
var state_30103__$1 = state_30103;
var statearr_30130_30186 = state_30103__$1;
(statearr_30130_30186[(2)] = inst_30077);

(statearr_30130_30186[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30104 === (6))){
var state_30103__$1 = state_30103;
var statearr_30131_30187 = state_30103__$1;
(statearr_30131_30187[(2)] = false);

(statearr_30131_30187[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30104 === (28))){
var inst_30073 = (state_30103[(2)]);
var inst_30074 = calc_state.call(null);
var inst_30033 = inst_30074;
var state_30103__$1 = (function (){var statearr_30132 = state_30103;
(statearr_30132[(15)] = inst_30073);

(statearr_30132[(7)] = inst_30033);

return statearr_30132;
})();
var statearr_30133_30188 = state_30103__$1;
(statearr_30133_30188[(2)] = null);

(statearr_30133_30188[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30104 === (25))){
var inst_30099 = (state_30103[(2)]);
var state_30103__$1 = state_30103;
var statearr_30134_30189 = state_30103__$1;
(statearr_30134_30189[(2)] = inst_30099);

(statearr_30134_30189[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30104 === (34))){
var inst_30097 = (state_30103[(2)]);
var state_30103__$1 = state_30103;
var statearr_30135_30190 = state_30103__$1;
(statearr_30135_30190[(2)] = inst_30097);

(statearr_30135_30190[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30104 === (17))){
var state_30103__$1 = state_30103;
var statearr_30136_30191 = state_30103__$1;
(statearr_30136_30191[(2)] = false);

(statearr_30136_30191[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30104 === (3))){
var state_30103__$1 = state_30103;
var statearr_30137_30192 = state_30103__$1;
(statearr_30137_30192[(2)] = false);

(statearr_30137_30192[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30104 === (12))){
var inst_30101 = (state_30103[(2)]);
var state_30103__$1 = state_30103;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30103__$1,inst_30101);
} else {
if((state_val_30104 === (2))){
var inst_30009 = (state_30103[(8)]);
var inst_30014 = inst_30009.cljs$lang$protocol_mask$partition0$;
var inst_30015 = (inst_30014 & (64));
var inst_30016 = inst_30009.cljs$core$ISeq$;
var inst_30017 = (inst_30015) || (inst_30016);
var state_30103__$1 = state_30103;
if(cljs.core.truth_(inst_30017)){
var statearr_30138_30193 = state_30103__$1;
(statearr_30138_30193[(1)] = (5));

} else {
var statearr_30139_30194 = state_30103__$1;
(statearr_30139_30194[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30104 === (23))){
var inst_30062 = (state_30103[(14)]);
var inst_30068 = (inst_30062 == null);
var state_30103__$1 = state_30103;
if(cljs.core.truth_(inst_30068)){
var statearr_30140_30195 = state_30103__$1;
(statearr_30140_30195[(1)] = (26));

} else {
var statearr_30141_30196 = state_30103__$1;
(statearr_30141_30196[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30104 === (35))){
var inst_30088 = (state_30103[(2)]);
var state_30103__$1 = state_30103;
if(cljs.core.truth_(inst_30088)){
var statearr_30142_30197 = state_30103__$1;
(statearr_30142_30197[(1)] = (36));

} else {
var statearr_30143_30198 = state_30103__$1;
(statearr_30143_30198[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30104 === (19))){
var inst_30033 = (state_30103[(7)]);
var inst_30052 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30033);
var state_30103__$1 = state_30103;
var statearr_30144_30199 = state_30103__$1;
(statearr_30144_30199[(2)] = inst_30052);

(statearr_30144_30199[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30104 === (11))){
var inst_30033 = (state_30103[(7)]);
var inst_30037 = (inst_30033 == null);
var inst_30038 = cljs.core.not.call(null,inst_30037);
var state_30103__$1 = state_30103;
if(inst_30038){
var statearr_30145_30200 = state_30103__$1;
(statearr_30145_30200[(1)] = (13));

} else {
var statearr_30146_30201 = state_30103__$1;
(statearr_30146_30201[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30104 === (9))){
var inst_30009 = (state_30103[(8)]);
var state_30103__$1 = state_30103;
var statearr_30147_30202 = state_30103__$1;
(statearr_30147_30202[(2)] = inst_30009);

(statearr_30147_30202[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30104 === (5))){
var state_30103__$1 = state_30103;
var statearr_30148_30203 = state_30103__$1;
(statearr_30148_30203[(2)] = true);

(statearr_30148_30203[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30104 === (14))){
var state_30103__$1 = state_30103;
var statearr_30149_30204 = state_30103__$1;
(statearr_30149_30204[(2)] = false);

(statearr_30149_30204[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30104 === (26))){
var inst_30063 = (state_30103[(9)]);
var inst_30070 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_30063);
var state_30103__$1 = state_30103;
var statearr_30150_30205 = state_30103__$1;
(statearr_30150_30205[(2)] = inst_30070);

(statearr_30150_30205[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30104 === (16))){
var state_30103__$1 = state_30103;
var statearr_30151_30206 = state_30103__$1;
(statearr_30151_30206[(2)] = true);

(statearr_30151_30206[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30104 === (38))){
var inst_30093 = (state_30103[(2)]);
var state_30103__$1 = state_30103;
var statearr_30152_30207 = state_30103__$1;
(statearr_30152_30207[(2)] = inst_30093);

(statearr_30152_30207[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30104 === (30))){
var inst_30063 = (state_30103[(9)]);
var inst_30056 = (state_30103[(10)]);
var inst_30057 = (state_30103[(13)]);
var inst_30080 = cljs.core.empty_QMARK_.call(null,inst_30056);
var inst_30081 = inst_30057.call(null,inst_30063);
var inst_30082 = cljs.core.not.call(null,inst_30081);
var inst_30083 = (inst_30080) && (inst_30082);
var state_30103__$1 = state_30103;
var statearr_30153_30208 = state_30103__$1;
(statearr_30153_30208[(2)] = inst_30083);

(statearr_30153_30208[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30104 === (10))){
var inst_30009 = (state_30103[(8)]);
var inst_30029 = (state_30103[(2)]);
var inst_30030 = cljs.core.get.call(null,inst_30029,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_30031 = cljs.core.get.call(null,inst_30029,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_30032 = cljs.core.get.call(null,inst_30029,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_30033 = inst_30009;
var state_30103__$1 = (function (){var statearr_30154 = state_30103;
(statearr_30154[(16)] = inst_30032);

(statearr_30154[(7)] = inst_30033);

(statearr_30154[(17)] = inst_30031);

(statearr_30154[(18)] = inst_30030);

return statearr_30154;
})();
var statearr_30155_30209 = state_30103__$1;
(statearr_30155_30209[(2)] = null);

(statearr_30155_30209[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30104 === (18))){
var inst_30047 = (state_30103[(2)]);
var state_30103__$1 = state_30103;
var statearr_30156_30210 = state_30103__$1;
(statearr_30156_30210[(2)] = inst_30047);

(statearr_30156_30210[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30104 === (37))){
var state_30103__$1 = state_30103;
var statearr_30157_30211 = state_30103__$1;
(statearr_30157_30211[(2)] = null);

(statearr_30157_30211[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30104 === (8))){
var inst_30009 = (state_30103[(8)]);
var inst_30026 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30009);
var state_30103__$1 = state_30103;
var statearr_30158_30212 = state_30103__$1;
(statearr_30158_30212[(2)] = inst_30026);

(statearr_30158_30212[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__20946__auto___30166,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__20881__auto__,c__20946__auto___30166,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__20882__auto__ = null;
var cljs$core$async$mix_$_state_machine__20882__auto____0 = (function (){
var statearr_30162 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30162[(0)] = cljs$core$async$mix_$_state_machine__20882__auto__);

(statearr_30162[(1)] = (1));

return statearr_30162;
});
var cljs$core$async$mix_$_state_machine__20882__auto____1 = (function (state_30103){
while(true){
var ret_value__20883__auto__ = (function (){try{while(true){
var result__20884__auto__ = switch__20881__auto__.call(null,state_30103);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20884__auto__;
}
break;
}
}catch (e30163){if((e30163 instanceof Object)){
var ex__20885__auto__ = e30163;
var statearr_30164_30213 = state_30103;
(statearr_30164_30213[(5)] = ex__20885__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30103);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30163;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20883__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30214 = state_30103;
state_30103 = G__30214;
continue;
} else {
return ret_value__20883__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__20882__auto__ = function(state_30103){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__20882__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__20882__auto____1.call(this,state_30103);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__20882__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__20882__auto____0;
cljs$core$async$mix_$_state_machine__20882__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__20882__auto____1;
return cljs$core$async$mix_$_state_machine__20882__auto__;
})()
;})(switch__20881__auto__,c__20946__auto___30166,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__20948__auto__ = (function (){var statearr_30165 = f__20947__auto__.call(null);
(statearr_30165[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20946__auto___30166);

return statearr_30165;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20948__auto__);
});})(c__20946__auto___30166,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__17030__auto__ = (((p == null))?null:p);
var m__17031__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__17030__auto__)]);
if(!((m__17031__auto__ == null))){
return m__17031__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__17031__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__17031__auto____$1 == null))){
return m__17031__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__17030__auto__ = (((p == null))?null:p);
var m__17031__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__17030__auto__)]);
if(!((m__17031__auto__ == null))){
return m__17031__auto__.call(null,p,v,ch);
} else {
var m__17031__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__17031__auto____$1 == null))){
return m__17031__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args30215 = [];
var len__17433__auto___30218 = arguments.length;
var i__17434__auto___30219 = (0);
while(true){
if((i__17434__auto___30219 < len__17433__auto___30218)){
args30215.push((arguments[i__17434__auto___30219]));

var G__30220 = (i__17434__auto___30219 + (1));
i__17434__auto___30219 = G__30220;
continue;
} else {
}
break;
}

var G__30217 = args30215.length;
switch (G__30217) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30215.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__17030__auto__ = (((p == null))?null:p);
var m__17031__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__17030__auto__)]);
if(!((m__17031__auto__ == null))){
return m__17031__auto__.call(null,p);
} else {
var m__17031__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__17031__auto____$1 == null))){
return m__17031__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__17030__auto__ = (((p == null))?null:p);
var m__17031__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__17030__auto__)]);
if(!((m__17031__auto__ == null))){
return m__17031__auto__.call(null,p,v);
} else {
var m__17031__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__17031__auto____$1 == null))){
return m__17031__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args30223 = [];
var len__17433__auto___30348 = arguments.length;
var i__17434__auto___30349 = (0);
while(true){
if((i__17434__auto___30349 < len__17433__auto___30348)){
args30223.push((arguments[i__17434__auto___30349]));

var G__30350 = (i__17434__auto___30349 + (1));
i__17434__auto___30349 = G__30350;
continue;
} else {
}
break;
}

var G__30225 = args30223.length;
switch (G__30225) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30223.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__16375__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__16375__auto__)){
return or__16375__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__16375__auto__,mults){
return (function (p1__30222_SHARP_){
if(cljs.core.truth_(p1__30222_SHARP_.call(null,topic))){
return p1__30222_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__30222_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__16375__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async30226 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30226 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta30227){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta30227 = meta30227;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30226.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_30228,meta30227__$1){
var self__ = this;
var _30228__$1 = this;
return (new cljs.core.async.t_cljs$core$async30226(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta30227__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30226.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_30228){
var self__ = this;
var _30228__$1 = this;
return self__.meta30227;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30226.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async30226.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30226.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async30226.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30226.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4425__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4425__auto__)){
var m = temp__4425__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30226.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30226.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30226.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta30227","meta30227",-1157065423,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30226.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30226.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30226";

cljs.core.async.t_cljs$core$async30226.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__16973__auto__,writer__16974__auto__,opt__16975__auto__){
return cljs.core._write.call(null,writer__16974__auto__,"cljs.core.async/t_cljs$core$async30226");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async30226 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async30226(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta30227){
return (new cljs.core.async.t_cljs$core$async30226(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta30227));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async30226(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__20946__auto___30352 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20946__auto___30352,mults,ensure_mult,p){
return (function (){
var f__20947__auto__ = (function (){var switch__20881__auto__ = ((function (c__20946__auto___30352,mults,ensure_mult,p){
return (function (state_30300){
var state_val_30301 = (state_30300[(1)]);
if((state_val_30301 === (7))){
var inst_30296 = (state_30300[(2)]);
var state_30300__$1 = state_30300;
var statearr_30302_30353 = state_30300__$1;
(statearr_30302_30353[(2)] = inst_30296);

(statearr_30302_30353[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30301 === (20))){
var state_30300__$1 = state_30300;
var statearr_30303_30354 = state_30300__$1;
(statearr_30303_30354[(2)] = null);

(statearr_30303_30354[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30301 === (1))){
var state_30300__$1 = state_30300;
var statearr_30304_30355 = state_30300__$1;
(statearr_30304_30355[(2)] = null);

(statearr_30304_30355[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30301 === (24))){
var inst_30279 = (state_30300[(7)]);
var inst_30288 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_30279);
var state_30300__$1 = state_30300;
var statearr_30305_30356 = state_30300__$1;
(statearr_30305_30356[(2)] = inst_30288);

(statearr_30305_30356[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30301 === (4))){
var inst_30231 = (state_30300[(8)]);
var inst_30231__$1 = (state_30300[(2)]);
var inst_30232 = (inst_30231__$1 == null);
var state_30300__$1 = (function (){var statearr_30306 = state_30300;
(statearr_30306[(8)] = inst_30231__$1);

return statearr_30306;
})();
if(cljs.core.truth_(inst_30232)){
var statearr_30307_30357 = state_30300__$1;
(statearr_30307_30357[(1)] = (5));

} else {
var statearr_30308_30358 = state_30300__$1;
(statearr_30308_30358[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30301 === (15))){
var inst_30273 = (state_30300[(2)]);
var state_30300__$1 = state_30300;
var statearr_30309_30359 = state_30300__$1;
(statearr_30309_30359[(2)] = inst_30273);

(statearr_30309_30359[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30301 === (21))){
var inst_30293 = (state_30300[(2)]);
var state_30300__$1 = (function (){var statearr_30310 = state_30300;
(statearr_30310[(9)] = inst_30293);

return statearr_30310;
})();
var statearr_30311_30360 = state_30300__$1;
(statearr_30311_30360[(2)] = null);

(statearr_30311_30360[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30301 === (13))){
var inst_30255 = (state_30300[(10)]);
var inst_30257 = cljs.core.chunked_seq_QMARK_.call(null,inst_30255);
var state_30300__$1 = state_30300;
if(inst_30257){
var statearr_30312_30361 = state_30300__$1;
(statearr_30312_30361[(1)] = (16));

} else {
var statearr_30313_30362 = state_30300__$1;
(statearr_30313_30362[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30301 === (22))){
var inst_30285 = (state_30300[(2)]);
var state_30300__$1 = state_30300;
if(cljs.core.truth_(inst_30285)){
var statearr_30314_30363 = state_30300__$1;
(statearr_30314_30363[(1)] = (23));

} else {
var statearr_30315_30364 = state_30300__$1;
(statearr_30315_30364[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30301 === (6))){
var inst_30281 = (state_30300[(11)]);
var inst_30279 = (state_30300[(7)]);
var inst_30231 = (state_30300[(8)]);
var inst_30279__$1 = topic_fn.call(null,inst_30231);
var inst_30280 = cljs.core.deref.call(null,mults);
var inst_30281__$1 = cljs.core.get.call(null,inst_30280,inst_30279__$1);
var state_30300__$1 = (function (){var statearr_30316 = state_30300;
(statearr_30316[(11)] = inst_30281__$1);

(statearr_30316[(7)] = inst_30279__$1);

return statearr_30316;
})();
if(cljs.core.truth_(inst_30281__$1)){
var statearr_30317_30365 = state_30300__$1;
(statearr_30317_30365[(1)] = (19));

} else {
var statearr_30318_30366 = state_30300__$1;
(statearr_30318_30366[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30301 === (25))){
var inst_30290 = (state_30300[(2)]);
var state_30300__$1 = state_30300;
var statearr_30319_30367 = state_30300__$1;
(statearr_30319_30367[(2)] = inst_30290);

(statearr_30319_30367[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30301 === (17))){
var inst_30255 = (state_30300[(10)]);
var inst_30264 = cljs.core.first.call(null,inst_30255);
var inst_30265 = cljs.core.async.muxch_STAR_.call(null,inst_30264);
var inst_30266 = cljs.core.async.close_BANG_.call(null,inst_30265);
var inst_30267 = cljs.core.next.call(null,inst_30255);
var inst_30241 = inst_30267;
var inst_30242 = null;
var inst_30243 = (0);
var inst_30244 = (0);
var state_30300__$1 = (function (){var statearr_30320 = state_30300;
(statearr_30320[(12)] = inst_30242);

(statearr_30320[(13)] = inst_30243);

(statearr_30320[(14)] = inst_30266);

(statearr_30320[(15)] = inst_30244);

(statearr_30320[(16)] = inst_30241);

return statearr_30320;
})();
var statearr_30321_30368 = state_30300__$1;
(statearr_30321_30368[(2)] = null);

(statearr_30321_30368[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30301 === (3))){
var inst_30298 = (state_30300[(2)]);
var state_30300__$1 = state_30300;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30300__$1,inst_30298);
} else {
if((state_val_30301 === (12))){
var inst_30275 = (state_30300[(2)]);
var state_30300__$1 = state_30300;
var statearr_30322_30369 = state_30300__$1;
(statearr_30322_30369[(2)] = inst_30275);

(statearr_30322_30369[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30301 === (2))){
var state_30300__$1 = state_30300;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30300__$1,(4),ch);
} else {
if((state_val_30301 === (23))){
var state_30300__$1 = state_30300;
var statearr_30323_30370 = state_30300__$1;
(statearr_30323_30370[(2)] = null);

(statearr_30323_30370[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30301 === (19))){
var inst_30281 = (state_30300[(11)]);
var inst_30231 = (state_30300[(8)]);
var inst_30283 = cljs.core.async.muxch_STAR_.call(null,inst_30281);
var state_30300__$1 = state_30300;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30300__$1,(22),inst_30283,inst_30231);
} else {
if((state_val_30301 === (11))){
var inst_30255 = (state_30300[(10)]);
var inst_30241 = (state_30300[(16)]);
var inst_30255__$1 = cljs.core.seq.call(null,inst_30241);
var state_30300__$1 = (function (){var statearr_30324 = state_30300;
(statearr_30324[(10)] = inst_30255__$1);

return statearr_30324;
})();
if(inst_30255__$1){
var statearr_30325_30371 = state_30300__$1;
(statearr_30325_30371[(1)] = (13));

} else {
var statearr_30326_30372 = state_30300__$1;
(statearr_30326_30372[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30301 === (9))){
var inst_30277 = (state_30300[(2)]);
var state_30300__$1 = state_30300;
var statearr_30327_30373 = state_30300__$1;
(statearr_30327_30373[(2)] = inst_30277);

(statearr_30327_30373[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30301 === (5))){
var inst_30238 = cljs.core.deref.call(null,mults);
var inst_30239 = cljs.core.vals.call(null,inst_30238);
var inst_30240 = cljs.core.seq.call(null,inst_30239);
var inst_30241 = inst_30240;
var inst_30242 = null;
var inst_30243 = (0);
var inst_30244 = (0);
var state_30300__$1 = (function (){var statearr_30328 = state_30300;
(statearr_30328[(12)] = inst_30242);

(statearr_30328[(13)] = inst_30243);

(statearr_30328[(15)] = inst_30244);

(statearr_30328[(16)] = inst_30241);

return statearr_30328;
})();
var statearr_30329_30374 = state_30300__$1;
(statearr_30329_30374[(2)] = null);

(statearr_30329_30374[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30301 === (14))){
var state_30300__$1 = state_30300;
var statearr_30333_30375 = state_30300__$1;
(statearr_30333_30375[(2)] = null);

(statearr_30333_30375[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30301 === (16))){
var inst_30255 = (state_30300[(10)]);
var inst_30259 = cljs.core.chunk_first.call(null,inst_30255);
var inst_30260 = cljs.core.chunk_rest.call(null,inst_30255);
var inst_30261 = cljs.core.count.call(null,inst_30259);
var inst_30241 = inst_30260;
var inst_30242 = inst_30259;
var inst_30243 = inst_30261;
var inst_30244 = (0);
var state_30300__$1 = (function (){var statearr_30334 = state_30300;
(statearr_30334[(12)] = inst_30242);

(statearr_30334[(13)] = inst_30243);

(statearr_30334[(15)] = inst_30244);

(statearr_30334[(16)] = inst_30241);

return statearr_30334;
})();
var statearr_30335_30376 = state_30300__$1;
(statearr_30335_30376[(2)] = null);

(statearr_30335_30376[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30301 === (10))){
var inst_30242 = (state_30300[(12)]);
var inst_30243 = (state_30300[(13)]);
var inst_30244 = (state_30300[(15)]);
var inst_30241 = (state_30300[(16)]);
var inst_30249 = cljs.core._nth.call(null,inst_30242,inst_30244);
var inst_30250 = cljs.core.async.muxch_STAR_.call(null,inst_30249);
var inst_30251 = cljs.core.async.close_BANG_.call(null,inst_30250);
var inst_30252 = (inst_30244 + (1));
var tmp30330 = inst_30242;
var tmp30331 = inst_30243;
var tmp30332 = inst_30241;
var inst_30241__$1 = tmp30332;
var inst_30242__$1 = tmp30330;
var inst_30243__$1 = tmp30331;
var inst_30244__$1 = inst_30252;
var state_30300__$1 = (function (){var statearr_30336 = state_30300;
(statearr_30336[(12)] = inst_30242__$1);

(statearr_30336[(13)] = inst_30243__$1);

(statearr_30336[(17)] = inst_30251);

(statearr_30336[(15)] = inst_30244__$1);

(statearr_30336[(16)] = inst_30241__$1);

return statearr_30336;
})();
var statearr_30337_30377 = state_30300__$1;
(statearr_30337_30377[(2)] = null);

(statearr_30337_30377[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30301 === (18))){
var inst_30270 = (state_30300[(2)]);
var state_30300__$1 = state_30300;
var statearr_30338_30378 = state_30300__$1;
(statearr_30338_30378[(2)] = inst_30270);

(statearr_30338_30378[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30301 === (8))){
var inst_30243 = (state_30300[(13)]);
var inst_30244 = (state_30300[(15)]);
var inst_30246 = (inst_30244 < inst_30243);
var inst_30247 = inst_30246;
var state_30300__$1 = state_30300;
if(cljs.core.truth_(inst_30247)){
var statearr_30339_30379 = state_30300__$1;
(statearr_30339_30379[(1)] = (10));

} else {
var statearr_30340_30380 = state_30300__$1;
(statearr_30340_30380[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__20946__auto___30352,mults,ensure_mult,p))
;
return ((function (switch__20881__auto__,c__20946__auto___30352,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__20882__auto__ = null;
var cljs$core$async$state_machine__20882__auto____0 = (function (){
var statearr_30344 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30344[(0)] = cljs$core$async$state_machine__20882__auto__);

(statearr_30344[(1)] = (1));

return statearr_30344;
});
var cljs$core$async$state_machine__20882__auto____1 = (function (state_30300){
while(true){
var ret_value__20883__auto__ = (function (){try{while(true){
var result__20884__auto__ = switch__20881__auto__.call(null,state_30300);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20884__auto__;
}
break;
}
}catch (e30345){if((e30345 instanceof Object)){
var ex__20885__auto__ = e30345;
var statearr_30346_30381 = state_30300;
(statearr_30346_30381[(5)] = ex__20885__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30300);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30345;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20883__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30382 = state_30300;
state_30300 = G__30382;
continue;
} else {
return ret_value__20883__auto__;
}
break;
}
});
cljs$core$async$state_machine__20882__auto__ = function(state_30300){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20882__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20882__auto____1.call(this,state_30300);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20882__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20882__auto____0;
cljs$core$async$state_machine__20882__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20882__auto____1;
return cljs$core$async$state_machine__20882__auto__;
})()
;})(switch__20881__auto__,c__20946__auto___30352,mults,ensure_mult,p))
})();
var state__20948__auto__ = (function (){var statearr_30347 = f__20947__auto__.call(null);
(statearr_30347[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20946__auto___30352);

return statearr_30347;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20948__auto__);
});})(c__20946__auto___30352,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args30383 = [];
var len__17433__auto___30386 = arguments.length;
var i__17434__auto___30387 = (0);
while(true){
if((i__17434__auto___30387 < len__17433__auto___30386)){
args30383.push((arguments[i__17434__auto___30387]));

var G__30388 = (i__17434__auto___30387 + (1));
i__17434__auto___30387 = G__30388;
continue;
} else {
}
break;
}

var G__30385 = args30383.length;
switch (G__30385) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30383.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args30390 = [];
var len__17433__auto___30393 = arguments.length;
var i__17434__auto___30394 = (0);
while(true){
if((i__17434__auto___30394 < len__17433__auto___30393)){
args30390.push((arguments[i__17434__auto___30394]));

var G__30395 = (i__17434__auto___30394 + (1));
i__17434__auto___30394 = G__30395;
continue;
} else {
}
break;
}

var G__30392 = args30390.length;
switch (G__30392) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30390.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args30397 = [];
var len__17433__auto___30468 = arguments.length;
var i__17434__auto___30469 = (0);
while(true){
if((i__17434__auto___30469 < len__17433__auto___30468)){
args30397.push((arguments[i__17434__auto___30469]));

var G__30470 = (i__17434__auto___30469 + (1));
i__17434__auto___30469 = G__30470;
continue;
} else {
}
break;
}

var G__30399 = args30397.length;
switch (G__30399) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30397.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__20946__auto___30472 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20946__auto___30472,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__20947__auto__ = (function (){var switch__20881__auto__ = ((function (c__20946__auto___30472,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_30438){
var state_val_30439 = (state_30438[(1)]);
if((state_val_30439 === (7))){
var state_30438__$1 = state_30438;
var statearr_30440_30473 = state_30438__$1;
(statearr_30440_30473[(2)] = null);

(statearr_30440_30473[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30439 === (1))){
var state_30438__$1 = state_30438;
var statearr_30441_30474 = state_30438__$1;
(statearr_30441_30474[(2)] = null);

(statearr_30441_30474[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30439 === (4))){
var inst_30402 = (state_30438[(7)]);
var inst_30404 = (inst_30402 < cnt);
var state_30438__$1 = state_30438;
if(cljs.core.truth_(inst_30404)){
var statearr_30442_30475 = state_30438__$1;
(statearr_30442_30475[(1)] = (6));

} else {
var statearr_30443_30476 = state_30438__$1;
(statearr_30443_30476[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30439 === (15))){
var inst_30434 = (state_30438[(2)]);
var state_30438__$1 = state_30438;
var statearr_30444_30477 = state_30438__$1;
(statearr_30444_30477[(2)] = inst_30434);

(statearr_30444_30477[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30439 === (13))){
var inst_30427 = cljs.core.async.close_BANG_.call(null,out);
var state_30438__$1 = state_30438;
var statearr_30445_30478 = state_30438__$1;
(statearr_30445_30478[(2)] = inst_30427);

(statearr_30445_30478[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30439 === (6))){
var state_30438__$1 = state_30438;
var statearr_30446_30479 = state_30438__$1;
(statearr_30446_30479[(2)] = null);

(statearr_30446_30479[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30439 === (3))){
var inst_30436 = (state_30438[(2)]);
var state_30438__$1 = state_30438;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30438__$1,inst_30436);
} else {
if((state_val_30439 === (12))){
var inst_30424 = (state_30438[(8)]);
var inst_30424__$1 = (state_30438[(2)]);
var inst_30425 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_30424__$1);
var state_30438__$1 = (function (){var statearr_30447 = state_30438;
(statearr_30447[(8)] = inst_30424__$1);

return statearr_30447;
})();
if(cljs.core.truth_(inst_30425)){
var statearr_30448_30480 = state_30438__$1;
(statearr_30448_30480[(1)] = (13));

} else {
var statearr_30449_30481 = state_30438__$1;
(statearr_30449_30481[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30439 === (2))){
var inst_30401 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_30402 = (0);
var state_30438__$1 = (function (){var statearr_30450 = state_30438;
(statearr_30450[(9)] = inst_30401);

(statearr_30450[(7)] = inst_30402);

return statearr_30450;
})();
var statearr_30451_30482 = state_30438__$1;
(statearr_30451_30482[(2)] = null);

(statearr_30451_30482[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30439 === (11))){
var inst_30402 = (state_30438[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_30438,(10),Object,null,(9));
var inst_30411 = chs__$1.call(null,inst_30402);
var inst_30412 = done.call(null,inst_30402);
var inst_30413 = cljs.core.async.take_BANG_.call(null,inst_30411,inst_30412);
var state_30438__$1 = state_30438;
var statearr_30452_30483 = state_30438__$1;
(statearr_30452_30483[(2)] = inst_30413);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30438__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30439 === (9))){
var inst_30402 = (state_30438[(7)]);
var inst_30415 = (state_30438[(2)]);
var inst_30416 = (inst_30402 + (1));
var inst_30402__$1 = inst_30416;
var state_30438__$1 = (function (){var statearr_30453 = state_30438;
(statearr_30453[(10)] = inst_30415);

(statearr_30453[(7)] = inst_30402__$1);

return statearr_30453;
})();
var statearr_30454_30484 = state_30438__$1;
(statearr_30454_30484[(2)] = null);

(statearr_30454_30484[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30439 === (5))){
var inst_30422 = (state_30438[(2)]);
var state_30438__$1 = (function (){var statearr_30455 = state_30438;
(statearr_30455[(11)] = inst_30422);

return statearr_30455;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30438__$1,(12),dchan);
} else {
if((state_val_30439 === (14))){
var inst_30424 = (state_30438[(8)]);
var inst_30429 = cljs.core.apply.call(null,f,inst_30424);
var state_30438__$1 = state_30438;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30438__$1,(16),out,inst_30429);
} else {
if((state_val_30439 === (16))){
var inst_30431 = (state_30438[(2)]);
var state_30438__$1 = (function (){var statearr_30456 = state_30438;
(statearr_30456[(12)] = inst_30431);

return statearr_30456;
})();
var statearr_30457_30485 = state_30438__$1;
(statearr_30457_30485[(2)] = null);

(statearr_30457_30485[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30439 === (10))){
var inst_30406 = (state_30438[(2)]);
var inst_30407 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_30438__$1 = (function (){var statearr_30458 = state_30438;
(statearr_30458[(13)] = inst_30406);

return statearr_30458;
})();
var statearr_30459_30486 = state_30438__$1;
(statearr_30459_30486[(2)] = inst_30407);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30438__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30439 === (8))){
var inst_30420 = (state_30438[(2)]);
var state_30438__$1 = state_30438;
var statearr_30460_30487 = state_30438__$1;
(statearr_30460_30487[(2)] = inst_30420);

(statearr_30460_30487[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__20946__auto___30472,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__20881__auto__,c__20946__auto___30472,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__20882__auto__ = null;
var cljs$core$async$state_machine__20882__auto____0 = (function (){
var statearr_30464 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30464[(0)] = cljs$core$async$state_machine__20882__auto__);

(statearr_30464[(1)] = (1));

return statearr_30464;
});
var cljs$core$async$state_machine__20882__auto____1 = (function (state_30438){
while(true){
var ret_value__20883__auto__ = (function (){try{while(true){
var result__20884__auto__ = switch__20881__auto__.call(null,state_30438);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20884__auto__;
}
break;
}
}catch (e30465){if((e30465 instanceof Object)){
var ex__20885__auto__ = e30465;
var statearr_30466_30488 = state_30438;
(statearr_30466_30488[(5)] = ex__20885__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30438);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30465;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20883__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30489 = state_30438;
state_30438 = G__30489;
continue;
} else {
return ret_value__20883__auto__;
}
break;
}
});
cljs$core$async$state_machine__20882__auto__ = function(state_30438){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20882__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20882__auto____1.call(this,state_30438);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20882__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20882__auto____0;
cljs$core$async$state_machine__20882__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20882__auto____1;
return cljs$core$async$state_machine__20882__auto__;
})()
;})(switch__20881__auto__,c__20946__auto___30472,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__20948__auto__ = (function (){var statearr_30467 = f__20947__auto__.call(null);
(statearr_30467[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20946__auto___30472);

return statearr_30467;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20948__auto__);
});})(c__20946__auto___30472,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args30491 = [];
var len__17433__auto___30547 = arguments.length;
var i__17434__auto___30548 = (0);
while(true){
if((i__17434__auto___30548 < len__17433__auto___30547)){
args30491.push((arguments[i__17434__auto___30548]));

var G__30549 = (i__17434__auto___30548 + (1));
i__17434__auto___30548 = G__30549;
continue;
} else {
}
break;
}

var G__30493 = args30491.length;
switch (G__30493) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30491.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20946__auto___30551 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20946__auto___30551,out){
return (function (){
var f__20947__auto__ = (function (){var switch__20881__auto__ = ((function (c__20946__auto___30551,out){
return (function (state_30523){
var state_val_30524 = (state_30523[(1)]);
if((state_val_30524 === (7))){
var inst_30503 = (state_30523[(7)]);
var inst_30502 = (state_30523[(8)]);
var inst_30502__$1 = (state_30523[(2)]);
var inst_30503__$1 = cljs.core.nth.call(null,inst_30502__$1,(0),null);
var inst_30504 = cljs.core.nth.call(null,inst_30502__$1,(1),null);
var inst_30505 = (inst_30503__$1 == null);
var state_30523__$1 = (function (){var statearr_30525 = state_30523;
(statearr_30525[(7)] = inst_30503__$1);

(statearr_30525[(9)] = inst_30504);

(statearr_30525[(8)] = inst_30502__$1);

return statearr_30525;
})();
if(cljs.core.truth_(inst_30505)){
var statearr_30526_30552 = state_30523__$1;
(statearr_30526_30552[(1)] = (8));

} else {
var statearr_30527_30553 = state_30523__$1;
(statearr_30527_30553[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30524 === (1))){
var inst_30494 = cljs.core.vec.call(null,chs);
var inst_30495 = inst_30494;
var state_30523__$1 = (function (){var statearr_30528 = state_30523;
(statearr_30528[(10)] = inst_30495);

return statearr_30528;
})();
var statearr_30529_30554 = state_30523__$1;
(statearr_30529_30554[(2)] = null);

(statearr_30529_30554[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30524 === (4))){
var inst_30495 = (state_30523[(10)]);
var state_30523__$1 = state_30523;
return cljs.core.async.ioc_alts_BANG_.call(null,state_30523__$1,(7),inst_30495);
} else {
if((state_val_30524 === (6))){
var inst_30519 = (state_30523[(2)]);
var state_30523__$1 = state_30523;
var statearr_30530_30555 = state_30523__$1;
(statearr_30530_30555[(2)] = inst_30519);

(statearr_30530_30555[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30524 === (3))){
var inst_30521 = (state_30523[(2)]);
var state_30523__$1 = state_30523;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30523__$1,inst_30521);
} else {
if((state_val_30524 === (2))){
var inst_30495 = (state_30523[(10)]);
var inst_30497 = cljs.core.count.call(null,inst_30495);
var inst_30498 = (inst_30497 > (0));
var state_30523__$1 = state_30523;
if(cljs.core.truth_(inst_30498)){
var statearr_30532_30556 = state_30523__$1;
(statearr_30532_30556[(1)] = (4));

} else {
var statearr_30533_30557 = state_30523__$1;
(statearr_30533_30557[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30524 === (11))){
var inst_30495 = (state_30523[(10)]);
var inst_30512 = (state_30523[(2)]);
var tmp30531 = inst_30495;
var inst_30495__$1 = tmp30531;
var state_30523__$1 = (function (){var statearr_30534 = state_30523;
(statearr_30534[(10)] = inst_30495__$1);

(statearr_30534[(11)] = inst_30512);

return statearr_30534;
})();
var statearr_30535_30558 = state_30523__$1;
(statearr_30535_30558[(2)] = null);

(statearr_30535_30558[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30524 === (9))){
var inst_30503 = (state_30523[(7)]);
var state_30523__$1 = state_30523;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30523__$1,(11),out,inst_30503);
} else {
if((state_val_30524 === (5))){
var inst_30517 = cljs.core.async.close_BANG_.call(null,out);
var state_30523__$1 = state_30523;
var statearr_30536_30559 = state_30523__$1;
(statearr_30536_30559[(2)] = inst_30517);

(statearr_30536_30559[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30524 === (10))){
var inst_30515 = (state_30523[(2)]);
var state_30523__$1 = state_30523;
var statearr_30537_30560 = state_30523__$1;
(statearr_30537_30560[(2)] = inst_30515);

(statearr_30537_30560[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30524 === (8))){
var inst_30503 = (state_30523[(7)]);
var inst_30504 = (state_30523[(9)]);
var inst_30495 = (state_30523[(10)]);
var inst_30502 = (state_30523[(8)]);
var inst_30507 = (function (){var cs = inst_30495;
var vec__30500 = inst_30502;
var v = inst_30503;
var c = inst_30504;
return ((function (cs,vec__30500,v,c,inst_30503,inst_30504,inst_30495,inst_30502,state_val_30524,c__20946__auto___30551,out){
return (function (p1__30490_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__30490_SHARP_);
});
;})(cs,vec__30500,v,c,inst_30503,inst_30504,inst_30495,inst_30502,state_val_30524,c__20946__auto___30551,out))
})();
var inst_30508 = cljs.core.filterv.call(null,inst_30507,inst_30495);
var inst_30495__$1 = inst_30508;
var state_30523__$1 = (function (){var statearr_30538 = state_30523;
(statearr_30538[(10)] = inst_30495__$1);

return statearr_30538;
})();
var statearr_30539_30561 = state_30523__$1;
(statearr_30539_30561[(2)] = null);

(statearr_30539_30561[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__20946__auto___30551,out))
;
return ((function (switch__20881__auto__,c__20946__auto___30551,out){
return (function() {
var cljs$core$async$state_machine__20882__auto__ = null;
var cljs$core$async$state_machine__20882__auto____0 = (function (){
var statearr_30543 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30543[(0)] = cljs$core$async$state_machine__20882__auto__);

(statearr_30543[(1)] = (1));

return statearr_30543;
});
var cljs$core$async$state_machine__20882__auto____1 = (function (state_30523){
while(true){
var ret_value__20883__auto__ = (function (){try{while(true){
var result__20884__auto__ = switch__20881__auto__.call(null,state_30523);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20884__auto__;
}
break;
}
}catch (e30544){if((e30544 instanceof Object)){
var ex__20885__auto__ = e30544;
var statearr_30545_30562 = state_30523;
(statearr_30545_30562[(5)] = ex__20885__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30523);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30544;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20883__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30563 = state_30523;
state_30523 = G__30563;
continue;
} else {
return ret_value__20883__auto__;
}
break;
}
});
cljs$core$async$state_machine__20882__auto__ = function(state_30523){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20882__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20882__auto____1.call(this,state_30523);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20882__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20882__auto____0;
cljs$core$async$state_machine__20882__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20882__auto____1;
return cljs$core$async$state_machine__20882__auto__;
})()
;})(switch__20881__auto__,c__20946__auto___30551,out))
})();
var state__20948__auto__ = (function (){var statearr_30546 = f__20947__auto__.call(null);
(statearr_30546[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20946__auto___30551);

return statearr_30546;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20948__auto__);
});})(c__20946__auto___30551,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args30564 = [];
var len__17433__auto___30613 = arguments.length;
var i__17434__auto___30614 = (0);
while(true){
if((i__17434__auto___30614 < len__17433__auto___30613)){
args30564.push((arguments[i__17434__auto___30614]));

var G__30615 = (i__17434__auto___30614 + (1));
i__17434__auto___30614 = G__30615;
continue;
} else {
}
break;
}

var G__30566 = args30564.length;
switch (G__30566) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30564.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20946__auto___30617 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20946__auto___30617,out){
return (function (){
var f__20947__auto__ = (function (){var switch__20881__auto__ = ((function (c__20946__auto___30617,out){
return (function (state_30590){
var state_val_30591 = (state_30590[(1)]);
if((state_val_30591 === (7))){
var inst_30572 = (state_30590[(7)]);
var inst_30572__$1 = (state_30590[(2)]);
var inst_30573 = (inst_30572__$1 == null);
var inst_30574 = cljs.core.not.call(null,inst_30573);
var state_30590__$1 = (function (){var statearr_30592 = state_30590;
(statearr_30592[(7)] = inst_30572__$1);

return statearr_30592;
})();
if(inst_30574){
var statearr_30593_30618 = state_30590__$1;
(statearr_30593_30618[(1)] = (8));

} else {
var statearr_30594_30619 = state_30590__$1;
(statearr_30594_30619[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30591 === (1))){
var inst_30567 = (0);
var state_30590__$1 = (function (){var statearr_30595 = state_30590;
(statearr_30595[(8)] = inst_30567);

return statearr_30595;
})();
var statearr_30596_30620 = state_30590__$1;
(statearr_30596_30620[(2)] = null);

(statearr_30596_30620[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30591 === (4))){
var state_30590__$1 = state_30590;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30590__$1,(7),ch);
} else {
if((state_val_30591 === (6))){
var inst_30585 = (state_30590[(2)]);
var state_30590__$1 = state_30590;
var statearr_30597_30621 = state_30590__$1;
(statearr_30597_30621[(2)] = inst_30585);

(statearr_30597_30621[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30591 === (3))){
var inst_30587 = (state_30590[(2)]);
var inst_30588 = cljs.core.async.close_BANG_.call(null,out);
var state_30590__$1 = (function (){var statearr_30598 = state_30590;
(statearr_30598[(9)] = inst_30587);

return statearr_30598;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30590__$1,inst_30588);
} else {
if((state_val_30591 === (2))){
var inst_30567 = (state_30590[(8)]);
var inst_30569 = (inst_30567 < n);
var state_30590__$1 = state_30590;
if(cljs.core.truth_(inst_30569)){
var statearr_30599_30622 = state_30590__$1;
(statearr_30599_30622[(1)] = (4));

} else {
var statearr_30600_30623 = state_30590__$1;
(statearr_30600_30623[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30591 === (11))){
var inst_30567 = (state_30590[(8)]);
var inst_30577 = (state_30590[(2)]);
var inst_30578 = (inst_30567 + (1));
var inst_30567__$1 = inst_30578;
var state_30590__$1 = (function (){var statearr_30601 = state_30590;
(statearr_30601[(8)] = inst_30567__$1);

(statearr_30601[(10)] = inst_30577);

return statearr_30601;
})();
var statearr_30602_30624 = state_30590__$1;
(statearr_30602_30624[(2)] = null);

(statearr_30602_30624[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30591 === (9))){
var state_30590__$1 = state_30590;
var statearr_30603_30625 = state_30590__$1;
(statearr_30603_30625[(2)] = null);

(statearr_30603_30625[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30591 === (5))){
var state_30590__$1 = state_30590;
var statearr_30604_30626 = state_30590__$1;
(statearr_30604_30626[(2)] = null);

(statearr_30604_30626[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30591 === (10))){
var inst_30582 = (state_30590[(2)]);
var state_30590__$1 = state_30590;
var statearr_30605_30627 = state_30590__$1;
(statearr_30605_30627[(2)] = inst_30582);

(statearr_30605_30627[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30591 === (8))){
var inst_30572 = (state_30590[(7)]);
var state_30590__$1 = state_30590;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30590__$1,(11),out,inst_30572);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__20946__auto___30617,out))
;
return ((function (switch__20881__auto__,c__20946__auto___30617,out){
return (function() {
var cljs$core$async$state_machine__20882__auto__ = null;
var cljs$core$async$state_machine__20882__auto____0 = (function (){
var statearr_30609 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30609[(0)] = cljs$core$async$state_machine__20882__auto__);

(statearr_30609[(1)] = (1));

return statearr_30609;
});
var cljs$core$async$state_machine__20882__auto____1 = (function (state_30590){
while(true){
var ret_value__20883__auto__ = (function (){try{while(true){
var result__20884__auto__ = switch__20881__auto__.call(null,state_30590);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20884__auto__;
}
break;
}
}catch (e30610){if((e30610 instanceof Object)){
var ex__20885__auto__ = e30610;
var statearr_30611_30628 = state_30590;
(statearr_30611_30628[(5)] = ex__20885__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30590);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30610;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20883__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30629 = state_30590;
state_30590 = G__30629;
continue;
} else {
return ret_value__20883__auto__;
}
break;
}
});
cljs$core$async$state_machine__20882__auto__ = function(state_30590){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20882__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20882__auto____1.call(this,state_30590);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20882__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20882__auto____0;
cljs$core$async$state_machine__20882__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20882__auto____1;
return cljs$core$async$state_machine__20882__auto__;
})()
;})(switch__20881__auto__,c__20946__auto___30617,out))
})();
var state__20948__auto__ = (function (){var statearr_30612 = f__20947__auto__.call(null);
(statearr_30612[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20946__auto___30617);

return statearr_30612;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20948__auto__);
});})(c__20946__auto___30617,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async30637 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30637 = (function (map_LT_,f,ch,meta30638){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta30638 = meta30638;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30637.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30639,meta30638__$1){
var self__ = this;
var _30639__$1 = this;
return (new cljs.core.async.t_cljs$core$async30637(self__.map_LT_,self__.f,self__.ch,meta30638__$1));
});

cljs.core.async.t_cljs$core$async30637.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30639){
var self__ = this;
var _30639__$1 = this;
return self__.meta30638;
});

cljs.core.async.t_cljs$core$async30637.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async30637.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async30637.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async30637.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async30637.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async30640 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30640 = (function (map_LT_,f,ch,meta30638,_,fn1,meta30641){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta30638 = meta30638;
this._ = _;
this.fn1 = fn1;
this.meta30641 = meta30641;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30640.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_30642,meta30641__$1){
var self__ = this;
var _30642__$1 = this;
return (new cljs.core.async.t_cljs$core$async30640(self__.map_LT_,self__.f,self__.ch,self__.meta30638,self__._,self__.fn1,meta30641__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async30640.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_30642){
var self__ = this;
var _30642__$1 = this;
return self__.meta30641;
});})(___$1))
;

cljs.core.async.t_cljs$core$async30640.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async30640.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async30640.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__30630_SHARP_){
return f1.call(null,(((p1__30630_SHARP_ == null))?null:self__.f.call(null,p1__30630_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async30640.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30638","meta30638",21286449,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async30637","cljs.core.async/t_cljs$core$async30637",2096332972,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta30641","meta30641",-1661678359,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async30640.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30640.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30640";

cljs.core.async.t_cljs$core$async30640.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__16973__auto__,writer__16974__auto__,opt__16975__auto__){
return cljs.core._write.call(null,writer__16974__auto__,"cljs.core.async/t_cljs$core$async30640");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async30640 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async30640(map_LT___$1,f__$1,ch__$1,meta30638__$1,___$2,fn1__$1,meta30641){
return (new cljs.core.async.t_cljs$core$async30640(map_LT___$1,f__$1,ch__$1,meta30638__$1,___$2,fn1__$1,meta30641));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async30640(self__.map_LT_,self__.f,self__.ch,self__.meta30638,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__16363__auto__ = ret;
if(cljs.core.truth_(and__16363__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__16363__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async30637.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async30637.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async30637.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30638","meta30638",21286449,null)], null);
});

cljs.core.async.t_cljs$core$async30637.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30637.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30637";

cljs.core.async.t_cljs$core$async30637.cljs$lang$ctorPrWriter = (function (this__16973__auto__,writer__16974__auto__,opt__16975__auto__){
return cljs.core._write.call(null,writer__16974__auto__,"cljs.core.async/t_cljs$core$async30637");
});

cljs.core.async.__GT_t_cljs$core$async30637 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async30637(map_LT___$1,f__$1,ch__$1,meta30638){
return (new cljs.core.async.t_cljs$core$async30637(map_LT___$1,f__$1,ch__$1,meta30638));
});

}

return (new cljs.core.async.t_cljs$core$async30637(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async30646 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30646 = (function (map_GT_,f,ch,meta30647){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta30647 = meta30647;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30646.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30648,meta30647__$1){
var self__ = this;
var _30648__$1 = this;
return (new cljs.core.async.t_cljs$core$async30646(self__.map_GT_,self__.f,self__.ch,meta30647__$1));
});

cljs.core.async.t_cljs$core$async30646.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30648){
var self__ = this;
var _30648__$1 = this;
return self__.meta30647;
});

cljs.core.async.t_cljs$core$async30646.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async30646.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async30646.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async30646.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async30646.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async30646.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async30646.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30647","meta30647",323979582,null)], null);
});

cljs.core.async.t_cljs$core$async30646.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30646.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30646";

cljs.core.async.t_cljs$core$async30646.cljs$lang$ctorPrWriter = (function (this__16973__auto__,writer__16974__auto__,opt__16975__auto__){
return cljs.core._write.call(null,writer__16974__auto__,"cljs.core.async/t_cljs$core$async30646");
});

cljs.core.async.__GT_t_cljs$core$async30646 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async30646(map_GT___$1,f__$1,ch__$1,meta30647){
return (new cljs.core.async.t_cljs$core$async30646(map_GT___$1,f__$1,ch__$1,meta30647));
});

}

return (new cljs.core.async.t_cljs$core$async30646(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async30652 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30652 = (function (filter_GT_,p,ch,meta30653){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta30653 = meta30653;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30652.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30654,meta30653__$1){
var self__ = this;
var _30654__$1 = this;
return (new cljs.core.async.t_cljs$core$async30652(self__.filter_GT_,self__.p,self__.ch,meta30653__$1));
});

cljs.core.async.t_cljs$core$async30652.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30654){
var self__ = this;
var _30654__$1 = this;
return self__.meta30653;
});

cljs.core.async.t_cljs$core$async30652.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async30652.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async30652.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async30652.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async30652.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async30652.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async30652.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async30652.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30653","meta30653",1316082372,null)], null);
});

cljs.core.async.t_cljs$core$async30652.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30652.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30652";

cljs.core.async.t_cljs$core$async30652.cljs$lang$ctorPrWriter = (function (this__16973__auto__,writer__16974__auto__,opt__16975__auto__){
return cljs.core._write.call(null,writer__16974__auto__,"cljs.core.async/t_cljs$core$async30652");
});

cljs.core.async.__GT_t_cljs$core$async30652 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async30652(filter_GT___$1,p__$1,ch__$1,meta30653){
return (new cljs.core.async.t_cljs$core$async30652(filter_GT___$1,p__$1,ch__$1,meta30653));
});

}

return (new cljs.core.async.t_cljs$core$async30652(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args30655 = [];
var len__17433__auto___30699 = arguments.length;
var i__17434__auto___30700 = (0);
while(true){
if((i__17434__auto___30700 < len__17433__auto___30699)){
args30655.push((arguments[i__17434__auto___30700]));

var G__30701 = (i__17434__auto___30700 + (1));
i__17434__auto___30700 = G__30701;
continue;
} else {
}
break;
}

var G__30657 = args30655.length;
switch (G__30657) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30655.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20946__auto___30703 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20946__auto___30703,out){
return (function (){
var f__20947__auto__ = (function (){var switch__20881__auto__ = ((function (c__20946__auto___30703,out){
return (function (state_30678){
var state_val_30679 = (state_30678[(1)]);
if((state_val_30679 === (7))){
var inst_30674 = (state_30678[(2)]);
var state_30678__$1 = state_30678;
var statearr_30680_30704 = state_30678__$1;
(statearr_30680_30704[(2)] = inst_30674);

(statearr_30680_30704[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30679 === (1))){
var state_30678__$1 = state_30678;
var statearr_30681_30705 = state_30678__$1;
(statearr_30681_30705[(2)] = null);

(statearr_30681_30705[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30679 === (4))){
var inst_30660 = (state_30678[(7)]);
var inst_30660__$1 = (state_30678[(2)]);
var inst_30661 = (inst_30660__$1 == null);
var state_30678__$1 = (function (){var statearr_30682 = state_30678;
(statearr_30682[(7)] = inst_30660__$1);

return statearr_30682;
})();
if(cljs.core.truth_(inst_30661)){
var statearr_30683_30706 = state_30678__$1;
(statearr_30683_30706[(1)] = (5));

} else {
var statearr_30684_30707 = state_30678__$1;
(statearr_30684_30707[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30679 === (6))){
var inst_30660 = (state_30678[(7)]);
var inst_30665 = p.call(null,inst_30660);
var state_30678__$1 = state_30678;
if(cljs.core.truth_(inst_30665)){
var statearr_30685_30708 = state_30678__$1;
(statearr_30685_30708[(1)] = (8));

} else {
var statearr_30686_30709 = state_30678__$1;
(statearr_30686_30709[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30679 === (3))){
var inst_30676 = (state_30678[(2)]);
var state_30678__$1 = state_30678;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30678__$1,inst_30676);
} else {
if((state_val_30679 === (2))){
var state_30678__$1 = state_30678;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30678__$1,(4),ch);
} else {
if((state_val_30679 === (11))){
var inst_30668 = (state_30678[(2)]);
var state_30678__$1 = state_30678;
var statearr_30687_30710 = state_30678__$1;
(statearr_30687_30710[(2)] = inst_30668);

(statearr_30687_30710[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30679 === (9))){
var state_30678__$1 = state_30678;
var statearr_30688_30711 = state_30678__$1;
(statearr_30688_30711[(2)] = null);

(statearr_30688_30711[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30679 === (5))){
var inst_30663 = cljs.core.async.close_BANG_.call(null,out);
var state_30678__$1 = state_30678;
var statearr_30689_30712 = state_30678__$1;
(statearr_30689_30712[(2)] = inst_30663);

(statearr_30689_30712[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30679 === (10))){
var inst_30671 = (state_30678[(2)]);
var state_30678__$1 = (function (){var statearr_30690 = state_30678;
(statearr_30690[(8)] = inst_30671);

return statearr_30690;
})();
var statearr_30691_30713 = state_30678__$1;
(statearr_30691_30713[(2)] = null);

(statearr_30691_30713[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30679 === (8))){
var inst_30660 = (state_30678[(7)]);
var state_30678__$1 = state_30678;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30678__$1,(11),out,inst_30660);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__20946__auto___30703,out))
;
return ((function (switch__20881__auto__,c__20946__auto___30703,out){
return (function() {
var cljs$core$async$state_machine__20882__auto__ = null;
var cljs$core$async$state_machine__20882__auto____0 = (function (){
var statearr_30695 = [null,null,null,null,null,null,null,null,null];
(statearr_30695[(0)] = cljs$core$async$state_machine__20882__auto__);

(statearr_30695[(1)] = (1));

return statearr_30695;
});
var cljs$core$async$state_machine__20882__auto____1 = (function (state_30678){
while(true){
var ret_value__20883__auto__ = (function (){try{while(true){
var result__20884__auto__ = switch__20881__auto__.call(null,state_30678);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20884__auto__;
}
break;
}
}catch (e30696){if((e30696 instanceof Object)){
var ex__20885__auto__ = e30696;
var statearr_30697_30714 = state_30678;
(statearr_30697_30714[(5)] = ex__20885__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30678);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30696;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20883__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30715 = state_30678;
state_30678 = G__30715;
continue;
} else {
return ret_value__20883__auto__;
}
break;
}
});
cljs$core$async$state_machine__20882__auto__ = function(state_30678){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20882__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20882__auto____1.call(this,state_30678);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20882__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20882__auto____0;
cljs$core$async$state_machine__20882__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20882__auto____1;
return cljs$core$async$state_machine__20882__auto__;
})()
;})(switch__20881__auto__,c__20946__auto___30703,out))
})();
var state__20948__auto__ = (function (){var statearr_30698 = f__20947__auto__.call(null);
(statearr_30698[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20946__auto___30703);

return statearr_30698;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20948__auto__);
});})(c__20946__auto___30703,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args30716 = [];
var len__17433__auto___30719 = arguments.length;
var i__17434__auto___30720 = (0);
while(true){
if((i__17434__auto___30720 < len__17433__auto___30719)){
args30716.push((arguments[i__17434__auto___30720]));

var G__30721 = (i__17434__auto___30720 + (1));
i__17434__auto___30720 = G__30721;
continue;
} else {
}
break;
}

var G__30718 = args30716.length;
switch (G__30718) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30716.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__20946__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20946__auto__){
return (function (){
var f__20947__auto__ = (function (){var switch__20881__auto__ = ((function (c__20946__auto__){
return (function (state_30888){
var state_val_30889 = (state_30888[(1)]);
if((state_val_30889 === (7))){
var inst_30884 = (state_30888[(2)]);
var state_30888__$1 = state_30888;
var statearr_30890_30931 = state_30888__$1;
(statearr_30890_30931[(2)] = inst_30884);

(statearr_30890_30931[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30889 === (20))){
var inst_30854 = (state_30888[(7)]);
var inst_30865 = (state_30888[(2)]);
var inst_30866 = cljs.core.next.call(null,inst_30854);
var inst_30840 = inst_30866;
var inst_30841 = null;
var inst_30842 = (0);
var inst_30843 = (0);
var state_30888__$1 = (function (){var statearr_30891 = state_30888;
(statearr_30891[(8)] = inst_30841);

(statearr_30891[(9)] = inst_30842);

(statearr_30891[(10)] = inst_30840);

(statearr_30891[(11)] = inst_30843);

(statearr_30891[(12)] = inst_30865);

return statearr_30891;
})();
var statearr_30892_30932 = state_30888__$1;
(statearr_30892_30932[(2)] = null);

(statearr_30892_30932[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30889 === (1))){
var state_30888__$1 = state_30888;
var statearr_30893_30933 = state_30888__$1;
(statearr_30893_30933[(2)] = null);

(statearr_30893_30933[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30889 === (4))){
var inst_30829 = (state_30888[(13)]);
var inst_30829__$1 = (state_30888[(2)]);
var inst_30830 = (inst_30829__$1 == null);
var state_30888__$1 = (function (){var statearr_30894 = state_30888;
(statearr_30894[(13)] = inst_30829__$1);

return statearr_30894;
})();
if(cljs.core.truth_(inst_30830)){
var statearr_30895_30934 = state_30888__$1;
(statearr_30895_30934[(1)] = (5));

} else {
var statearr_30896_30935 = state_30888__$1;
(statearr_30896_30935[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30889 === (15))){
var state_30888__$1 = state_30888;
var statearr_30900_30936 = state_30888__$1;
(statearr_30900_30936[(2)] = null);

(statearr_30900_30936[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30889 === (21))){
var state_30888__$1 = state_30888;
var statearr_30901_30937 = state_30888__$1;
(statearr_30901_30937[(2)] = null);

(statearr_30901_30937[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30889 === (13))){
var inst_30841 = (state_30888[(8)]);
var inst_30842 = (state_30888[(9)]);
var inst_30840 = (state_30888[(10)]);
var inst_30843 = (state_30888[(11)]);
var inst_30850 = (state_30888[(2)]);
var inst_30851 = (inst_30843 + (1));
var tmp30897 = inst_30841;
var tmp30898 = inst_30842;
var tmp30899 = inst_30840;
var inst_30840__$1 = tmp30899;
var inst_30841__$1 = tmp30897;
var inst_30842__$1 = tmp30898;
var inst_30843__$1 = inst_30851;
var state_30888__$1 = (function (){var statearr_30902 = state_30888;
(statearr_30902[(8)] = inst_30841__$1);

(statearr_30902[(14)] = inst_30850);

(statearr_30902[(9)] = inst_30842__$1);

(statearr_30902[(10)] = inst_30840__$1);

(statearr_30902[(11)] = inst_30843__$1);

return statearr_30902;
})();
var statearr_30903_30938 = state_30888__$1;
(statearr_30903_30938[(2)] = null);

(statearr_30903_30938[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30889 === (22))){
var state_30888__$1 = state_30888;
var statearr_30904_30939 = state_30888__$1;
(statearr_30904_30939[(2)] = null);

(statearr_30904_30939[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30889 === (6))){
var inst_30829 = (state_30888[(13)]);
var inst_30838 = f.call(null,inst_30829);
var inst_30839 = cljs.core.seq.call(null,inst_30838);
var inst_30840 = inst_30839;
var inst_30841 = null;
var inst_30842 = (0);
var inst_30843 = (0);
var state_30888__$1 = (function (){var statearr_30905 = state_30888;
(statearr_30905[(8)] = inst_30841);

(statearr_30905[(9)] = inst_30842);

(statearr_30905[(10)] = inst_30840);

(statearr_30905[(11)] = inst_30843);

return statearr_30905;
})();
var statearr_30906_30940 = state_30888__$1;
(statearr_30906_30940[(2)] = null);

(statearr_30906_30940[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30889 === (17))){
var inst_30854 = (state_30888[(7)]);
var inst_30858 = cljs.core.chunk_first.call(null,inst_30854);
var inst_30859 = cljs.core.chunk_rest.call(null,inst_30854);
var inst_30860 = cljs.core.count.call(null,inst_30858);
var inst_30840 = inst_30859;
var inst_30841 = inst_30858;
var inst_30842 = inst_30860;
var inst_30843 = (0);
var state_30888__$1 = (function (){var statearr_30907 = state_30888;
(statearr_30907[(8)] = inst_30841);

(statearr_30907[(9)] = inst_30842);

(statearr_30907[(10)] = inst_30840);

(statearr_30907[(11)] = inst_30843);

return statearr_30907;
})();
var statearr_30908_30941 = state_30888__$1;
(statearr_30908_30941[(2)] = null);

(statearr_30908_30941[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30889 === (3))){
var inst_30886 = (state_30888[(2)]);
var state_30888__$1 = state_30888;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30888__$1,inst_30886);
} else {
if((state_val_30889 === (12))){
var inst_30874 = (state_30888[(2)]);
var state_30888__$1 = state_30888;
var statearr_30909_30942 = state_30888__$1;
(statearr_30909_30942[(2)] = inst_30874);

(statearr_30909_30942[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30889 === (2))){
var state_30888__$1 = state_30888;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30888__$1,(4),in$);
} else {
if((state_val_30889 === (23))){
var inst_30882 = (state_30888[(2)]);
var state_30888__$1 = state_30888;
var statearr_30910_30943 = state_30888__$1;
(statearr_30910_30943[(2)] = inst_30882);

(statearr_30910_30943[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30889 === (19))){
var inst_30869 = (state_30888[(2)]);
var state_30888__$1 = state_30888;
var statearr_30911_30944 = state_30888__$1;
(statearr_30911_30944[(2)] = inst_30869);

(statearr_30911_30944[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30889 === (11))){
var inst_30840 = (state_30888[(10)]);
var inst_30854 = (state_30888[(7)]);
var inst_30854__$1 = cljs.core.seq.call(null,inst_30840);
var state_30888__$1 = (function (){var statearr_30912 = state_30888;
(statearr_30912[(7)] = inst_30854__$1);

return statearr_30912;
})();
if(inst_30854__$1){
var statearr_30913_30945 = state_30888__$1;
(statearr_30913_30945[(1)] = (14));

} else {
var statearr_30914_30946 = state_30888__$1;
(statearr_30914_30946[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30889 === (9))){
var inst_30876 = (state_30888[(2)]);
var inst_30877 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_30888__$1 = (function (){var statearr_30915 = state_30888;
(statearr_30915[(15)] = inst_30876);

return statearr_30915;
})();
if(cljs.core.truth_(inst_30877)){
var statearr_30916_30947 = state_30888__$1;
(statearr_30916_30947[(1)] = (21));

} else {
var statearr_30917_30948 = state_30888__$1;
(statearr_30917_30948[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30889 === (5))){
var inst_30832 = cljs.core.async.close_BANG_.call(null,out);
var state_30888__$1 = state_30888;
var statearr_30918_30949 = state_30888__$1;
(statearr_30918_30949[(2)] = inst_30832);

(statearr_30918_30949[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30889 === (14))){
var inst_30854 = (state_30888[(7)]);
var inst_30856 = cljs.core.chunked_seq_QMARK_.call(null,inst_30854);
var state_30888__$1 = state_30888;
if(inst_30856){
var statearr_30919_30950 = state_30888__$1;
(statearr_30919_30950[(1)] = (17));

} else {
var statearr_30920_30951 = state_30888__$1;
(statearr_30920_30951[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30889 === (16))){
var inst_30872 = (state_30888[(2)]);
var state_30888__$1 = state_30888;
var statearr_30921_30952 = state_30888__$1;
(statearr_30921_30952[(2)] = inst_30872);

(statearr_30921_30952[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30889 === (10))){
var inst_30841 = (state_30888[(8)]);
var inst_30843 = (state_30888[(11)]);
var inst_30848 = cljs.core._nth.call(null,inst_30841,inst_30843);
var state_30888__$1 = state_30888;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30888__$1,(13),out,inst_30848);
} else {
if((state_val_30889 === (18))){
var inst_30854 = (state_30888[(7)]);
var inst_30863 = cljs.core.first.call(null,inst_30854);
var state_30888__$1 = state_30888;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30888__$1,(20),out,inst_30863);
} else {
if((state_val_30889 === (8))){
var inst_30842 = (state_30888[(9)]);
var inst_30843 = (state_30888[(11)]);
var inst_30845 = (inst_30843 < inst_30842);
var inst_30846 = inst_30845;
var state_30888__$1 = state_30888;
if(cljs.core.truth_(inst_30846)){
var statearr_30922_30953 = state_30888__$1;
(statearr_30922_30953[(1)] = (10));

} else {
var statearr_30923_30954 = state_30888__$1;
(statearr_30923_30954[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__20946__auto__))
;
return ((function (switch__20881__auto__,c__20946__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__20882__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__20882__auto____0 = (function (){
var statearr_30927 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30927[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__20882__auto__);

(statearr_30927[(1)] = (1));

return statearr_30927;
});
var cljs$core$async$mapcat_STAR__$_state_machine__20882__auto____1 = (function (state_30888){
while(true){
var ret_value__20883__auto__ = (function (){try{while(true){
var result__20884__auto__ = switch__20881__auto__.call(null,state_30888);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20884__auto__;
}
break;
}
}catch (e30928){if((e30928 instanceof Object)){
var ex__20885__auto__ = e30928;
var statearr_30929_30955 = state_30888;
(statearr_30929_30955[(5)] = ex__20885__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30888);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30928;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20883__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30956 = state_30888;
state_30888 = G__30956;
continue;
} else {
return ret_value__20883__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__20882__auto__ = function(state_30888){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__20882__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__20882__auto____1.call(this,state_30888);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__20882__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__20882__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__20882__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__20882__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__20882__auto__;
})()
;})(switch__20881__auto__,c__20946__auto__))
})();
var state__20948__auto__ = (function (){var statearr_30930 = f__20947__auto__.call(null);
(statearr_30930[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20946__auto__);

return statearr_30930;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20948__auto__);
});})(c__20946__auto__))
);

return c__20946__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args30957 = [];
var len__17433__auto___30960 = arguments.length;
var i__17434__auto___30961 = (0);
while(true){
if((i__17434__auto___30961 < len__17433__auto___30960)){
args30957.push((arguments[i__17434__auto___30961]));

var G__30962 = (i__17434__auto___30961 + (1));
i__17434__auto___30961 = G__30962;
continue;
} else {
}
break;
}

var G__30959 = args30957.length;
switch (G__30959) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30957.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args30964 = [];
var len__17433__auto___30967 = arguments.length;
var i__17434__auto___30968 = (0);
while(true){
if((i__17434__auto___30968 < len__17433__auto___30967)){
args30964.push((arguments[i__17434__auto___30968]));

var G__30969 = (i__17434__auto___30968 + (1));
i__17434__auto___30968 = G__30969;
continue;
} else {
}
break;
}

var G__30966 = args30964.length;
switch (G__30966) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30964.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args30971 = [];
var len__17433__auto___31022 = arguments.length;
var i__17434__auto___31023 = (0);
while(true){
if((i__17434__auto___31023 < len__17433__auto___31022)){
args30971.push((arguments[i__17434__auto___31023]));

var G__31024 = (i__17434__auto___31023 + (1));
i__17434__auto___31023 = G__31024;
continue;
} else {
}
break;
}

var G__30973 = args30971.length;
switch (G__30973) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30971.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20946__auto___31026 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20946__auto___31026,out){
return (function (){
var f__20947__auto__ = (function (){var switch__20881__auto__ = ((function (c__20946__auto___31026,out){
return (function (state_30997){
var state_val_30998 = (state_30997[(1)]);
if((state_val_30998 === (7))){
var inst_30992 = (state_30997[(2)]);
var state_30997__$1 = state_30997;
var statearr_30999_31027 = state_30997__$1;
(statearr_30999_31027[(2)] = inst_30992);

(statearr_30999_31027[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30998 === (1))){
var inst_30974 = null;
var state_30997__$1 = (function (){var statearr_31000 = state_30997;
(statearr_31000[(7)] = inst_30974);

return statearr_31000;
})();
var statearr_31001_31028 = state_30997__$1;
(statearr_31001_31028[(2)] = null);

(statearr_31001_31028[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30998 === (4))){
var inst_30977 = (state_30997[(8)]);
var inst_30977__$1 = (state_30997[(2)]);
var inst_30978 = (inst_30977__$1 == null);
var inst_30979 = cljs.core.not.call(null,inst_30978);
var state_30997__$1 = (function (){var statearr_31002 = state_30997;
(statearr_31002[(8)] = inst_30977__$1);

return statearr_31002;
})();
if(inst_30979){
var statearr_31003_31029 = state_30997__$1;
(statearr_31003_31029[(1)] = (5));

} else {
var statearr_31004_31030 = state_30997__$1;
(statearr_31004_31030[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30998 === (6))){
var state_30997__$1 = state_30997;
var statearr_31005_31031 = state_30997__$1;
(statearr_31005_31031[(2)] = null);

(statearr_31005_31031[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30998 === (3))){
var inst_30994 = (state_30997[(2)]);
var inst_30995 = cljs.core.async.close_BANG_.call(null,out);
var state_30997__$1 = (function (){var statearr_31006 = state_30997;
(statearr_31006[(9)] = inst_30994);

return statearr_31006;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30997__$1,inst_30995);
} else {
if((state_val_30998 === (2))){
var state_30997__$1 = state_30997;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30997__$1,(4),ch);
} else {
if((state_val_30998 === (11))){
var inst_30977 = (state_30997[(8)]);
var inst_30986 = (state_30997[(2)]);
var inst_30974 = inst_30977;
var state_30997__$1 = (function (){var statearr_31007 = state_30997;
(statearr_31007[(10)] = inst_30986);

(statearr_31007[(7)] = inst_30974);

return statearr_31007;
})();
var statearr_31008_31032 = state_30997__$1;
(statearr_31008_31032[(2)] = null);

(statearr_31008_31032[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30998 === (9))){
var inst_30977 = (state_30997[(8)]);
var state_30997__$1 = state_30997;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30997__$1,(11),out,inst_30977);
} else {
if((state_val_30998 === (5))){
var inst_30977 = (state_30997[(8)]);
var inst_30974 = (state_30997[(7)]);
var inst_30981 = cljs.core._EQ_.call(null,inst_30977,inst_30974);
var state_30997__$1 = state_30997;
if(inst_30981){
var statearr_31010_31033 = state_30997__$1;
(statearr_31010_31033[(1)] = (8));

} else {
var statearr_31011_31034 = state_30997__$1;
(statearr_31011_31034[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30998 === (10))){
var inst_30989 = (state_30997[(2)]);
var state_30997__$1 = state_30997;
var statearr_31012_31035 = state_30997__$1;
(statearr_31012_31035[(2)] = inst_30989);

(statearr_31012_31035[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30998 === (8))){
var inst_30974 = (state_30997[(7)]);
var tmp31009 = inst_30974;
var inst_30974__$1 = tmp31009;
var state_30997__$1 = (function (){var statearr_31013 = state_30997;
(statearr_31013[(7)] = inst_30974__$1);

return statearr_31013;
})();
var statearr_31014_31036 = state_30997__$1;
(statearr_31014_31036[(2)] = null);

(statearr_31014_31036[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__20946__auto___31026,out))
;
return ((function (switch__20881__auto__,c__20946__auto___31026,out){
return (function() {
var cljs$core$async$state_machine__20882__auto__ = null;
var cljs$core$async$state_machine__20882__auto____0 = (function (){
var statearr_31018 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31018[(0)] = cljs$core$async$state_machine__20882__auto__);

(statearr_31018[(1)] = (1));

return statearr_31018;
});
var cljs$core$async$state_machine__20882__auto____1 = (function (state_30997){
while(true){
var ret_value__20883__auto__ = (function (){try{while(true){
var result__20884__auto__ = switch__20881__auto__.call(null,state_30997);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20884__auto__;
}
break;
}
}catch (e31019){if((e31019 instanceof Object)){
var ex__20885__auto__ = e31019;
var statearr_31020_31037 = state_30997;
(statearr_31020_31037[(5)] = ex__20885__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30997);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31019;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20883__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31038 = state_30997;
state_30997 = G__31038;
continue;
} else {
return ret_value__20883__auto__;
}
break;
}
});
cljs$core$async$state_machine__20882__auto__ = function(state_30997){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20882__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20882__auto____1.call(this,state_30997);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20882__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20882__auto____0;
cljs$core$async$state_machine__20882__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20882__auto____1;
return cljs$core$async$state_machine__20882__auto__;
})()
;})(switch__20881__auto__,c__20946__auto___31026,out))
})();
var state__20948__auto__ = (function (){var statearr_31021 = f__20947__auto__.call(null);
(statearr_31021[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20946__auto___31026);

return statearr_31021;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20948__auto__);
});})(c__20946__auto___31026,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args31039 = [];
var len__17433__auto___31109 = arguments.length;
var i__17434__auto___31110 = (0);
while(true){
if((i__17434__auto___31110 < len__17433__auto___31109)){
args31039.push((arguments[i__17434__auto___31110]));

var G__31111 = (i__17434__auto___31110 + (1));
i__17434__auto___31110 = G__31111;
continue;
} else {
}
break;
}

var G__31041 = args31039.length;
switch (G__31041) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31039.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20946__auto___31113 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20946__auto___31113,out){
return (function (){
var f__20947__auto__ = (function (){var switch__20881__auto__ = ((function (c__20946__auto___31113,out){
return (function (state_31079){
var state_val_31080 = (state_31079[(1)]);
if((state_val_31080 === (7))){
var inst_31075 = (state_31079[(2)]);
var state_31079__$1 = state_31079;
var statearr_31081_31114 = state_31079__$1;
(statearr_31081_31114[(2)] = inst_31075);

(statearr_31081_31114[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31080 === (1))){
var inst_31042 = (new Array(n));
var inst_31043 = inst_31042;
var inst_31044 = (0);
var state_31079__$1 = (function (){var statearr_31082 = state_31079;
(statearr_31082[(7)] = inst_31044);

(statearr_31082[(8)] = inst_31043);

return statearr_31082;
})();
var statearr_31083_31115 = state_31079__$1;
(statearr_31083_31115[(2)] = null);

(statearr_31083_31115[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31080 === (4))){
var inst_31047 = (state_31079[(9)]);
var inst_31047__$1 = (state_31079[(2)]);
var inst_31048 = (inst_31047__$1 == null);
var inst_31049 = cljs.core.not.call(null,inst_31048);
var state_31079__$1 = (function (){var statearr_31084 = state_31079;
(statearr_31084[(9)] = inst_31047__$1);

return statearr_31084;
})();
if(inst_31049){
var statearr_31085_31116 = state_31079__$1;
(statearr_31085_31116[(1)] = (5));

} else {
var statearr_31086_31117 = state_31079__$1;
(statearr_31086_31117[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31080 === (15))){
var inst_31069 = (state_31079[(2)]);
var state_31079__$1 = state_31079;
var statearr_31087_31118 = state_31079__$1;
(statearr_31087_31118[(2)] = inst_31069);

(statearr_31087_31118[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31080 === (13))){
var state_31079__$1 = state_31079;
var statearr_31088_31119 = state_31079__$1;
(statearr_31088_31119[(2)] = null);

(statearr_31088_31119[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31080 === (6))){
var inst_31044 = (state_31079[(7)]);
var inst_31065 = (inst_31044 > (0));
var state_31079__$1 = state_31079;
if(cljs.core.truth_(inst_31065)){
var statearr_31089_31120 = state_31079__$1;
(statearr_31089_31120[(1)] = (12));

} else {
var statearr_31090_31121 = state_31079__$1;
(statearr_31090_31121[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31080 === (3))){
var inst_31077 = (state_31079[(2)]);
var state_31079__$1 = state_31079;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31079__$1,inst_31077);
} else {
if((state_val_31080 === (12))){
var inst_31043 = (state_31079[(8)]);
var inst_31067 = cljs.core.vec.call(null,inst_31043);
var state_31079__$1 = state_31079;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31079__$1,(15),out,inst_31067);
} else {
if((state_val_31080 === (2))){
var state_31079__$1 = state_31079;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31079__$1,(4),ch);
} else {
if((state_val_31080 === (11))){
var inst_31059 = (state_31079[(2)]);
var inst_31060 = (new Array(n));
var inst_31043 = inst_31060;
var inst_31044 = (0);
var state_31079__$1 = (function (){var statearr_31091 = state_31079;
(statearr_31091[(7)] = inst_31044);

(statearr_31091[(8)] = inst_31043);

(statearr_31091[(10)] = inst_31059);

return statearr_31091;
})();
var statearr_31092_31122 = state_31079__$1;
(statearr_31092_31122[(2)] = null);

(statearr_31092_31122[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31080 === (9))){
var inst_31043 = (state_31079[(8)]);
var inst_31057 = cljs.core.vec.call(null,inst_31043);
var state_31079__$1 = state_31079;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31079__$1,(11),out,inst_31057);
} else {
if((state_val_31080 === (5))){
var inst_31044 = (state_31079[(7)]);
var inst_31043 = (state_31079[(8)]);
var inst_31052 = (state_31079[(11)]);
var inst_31047 = (state_31079[(9)]);
var inst_31051 = (inst_31043[inst_31044] = inst_31047);
var inst_31052__$1 = (inst_31044 + (1));
var inst_31053 = (inst_31052__$1 < n);
var state_31079__$1 = (function (){var statearr_31093 = state_31079;
(statearr_31093[(12)] = inst_31051);

(statearr_31093[(11)] = inst_31052__$1);

return statearr_31093;
})();
if(cljs.core.truth_(inst_31053)){
var statearr_31094_31123 = state_31079__$1;
(statearr_31094_31123[(1)] = (8));

} else {
var statearr_31095_31124 = state_31079__$1;
(statearr_31095_31124[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31080 === (14))){
var inst_31072 = (state_31079[(2)]);
var inst_31073 = cljs.core.async.close_BANG_.call(null,out);
var state_31079__$1 = (function (){var statearr_31097 = state_31079;
(statearr_31097[(13)] = inst_31072);

return statearr_31097;
})();
var statearr_31098_31125 = state_31079__$1;
(statearr_31098_31125[(2)] = inst_31073);

(statearr_31098_31125[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31080 === (10))){
var inst_31063 = (state_31079[(2)]);
var state_31079__$1 = state_31079;
var statearr_31099_31126 = state_31079__$1;
(statearr_31099_31126[(2)] = inst_31063);

(statearr_31099_31126[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31080 === (8))){
var inst_31043 = (state_31079[(8)]);
var inst_31052 = (state_31079[(11)]);
var tmp31096 = inst_31043;
var inst_31043__$1 = tmp31096;
var inst_31044 = inst_31052;
var state_31079__$1 = (function (){var statearr_31100 = state_31079;
(statearr_31100[(7)] = inst_31044);

(statearr_31100[(8)] = inst_31043__$1);

return statearr_31100;
})();
var statearr_31101_31127 = state_31079__$1;
(statearr_31101_31127[(2)] = null);

(statearr_31101_31127[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__20946__auto___31113,out))
;
return ((function (switch__20881__auto__,c__20946__auto___31113,out){
return (function() {
var cljs$core$async$state_machine__20882__auto__ = null;
var cljs$core$async$state_machine__20882__auto____0 = (function (){
var statearr_31105 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31105[(0)] = cljs$core$async$state_machine__20882__auto__);

(statearr_31105[(1)] = (1));

return statearr_31105;
});
var cljs$core$async$state_machine__20882__auto____1 = (function (state_31079){
while(true){
var ret_value__20883__auto__ = (function (){try{while(true){
var result__20884__auto__ = switch__20881__auto__.call(null,state_31079);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20884__auto__;
}
break;
}
}catch (e31106){if((e31106 instanceof Object)){
var ex__20885__auto__ = e31106;
var statearr_31107_31128 = state_31079;
(statearr_31107_31128[(5)] = ex__20885__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31079);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31106;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20883__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31129 = state_31079;
state_31079 = G__31129;
continue;
} else {
return ret_value__20883__auto__;
}
break;
}
});
cljs$core$async$state_machine__20882__auto__ = function(state_31079){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20882__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20882__auto____1.call(this,state_31079);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20882__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20882__auto____0;
cljs$core$async$state_machine__20882__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20882__auto____1;
return cljs$core$async$state_machine__20882__auto__;
})()
;})(switch__20881__auto__,c__20946__auto___31113,out))
})();
var state__20948__auto__ = (function (){var statearr_31108 = f__20947__auto__.call(null);
(statearr_31108[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20946__auto___31113);

return statearr_31108;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20948__auto__);
});})(c__20946__auto___31113,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args31130 = [];
var len__17433__auto___31204 = arguments.length;
var i__17434__auto___31205 = (0);
while(true){
if((i__17434__auto___31205 < len__17433__auto___31204)){
args31130.push((arguments[i__17434__auto___31205]));

var G__31206 = (i__17434__auto___31205 + (1));
i__17434__auto___31205 = G__31206;
continue;
} else {
}
break;
}

var G__31132 = args31130.length;
switch (G__31132) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31130.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20946__auto___31208 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20946__auto___31208,out){
return (function (){
var f__20947__auto__ = (function (){var switch__20881__auto__ = ((function (c__20946__auto___31208,out){
return (function (state_31174){
var state_val_31175 = (state_31174[(1)]);
if((state_val_31175 === (7))){
var inst_31170 = (state_31174[(2)]);
var state_31174__$1 = state_31174;
var statearr_31176_31209 = state_31174__$1;
(statearr_31176_31209[(2)] = inst_31170);

(statearr_31176_31209[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31175 === (1))){
var inst_31133 = [];
var inst_31134 = inst_31133;
var inst_31135 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_31174__$1 = (function (){var statearr_31177 = state_31174;
(statearr_31177[(7)] = inst_31135);

(statearr_31177[(8)] = inst_31134);

return statearr_31177;
})();
var statearr_31178_31210 = state_31174__$1;
(statearr_31178_31210[(2)] = null);

(statearr_31178_31210[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31175 === (4))){
var inst_31138 = (state_31174[(9)]);
var inst_31138__$1 = (state_31174[(2)]);
var inst_31139 = (inst_31138__$1 == null);
var inst_31140 = cljs.core.not.call(null,inst_31139);
var state_31174__$1 = (function (){var statearr_31179 = state_31174;
(statearr_31179[(9)] = inst_31138__$1);

return statearr_31179;
})();
if(inst_31140){
var statearr_31180_31211 = state_31174__$1;
(statearr_31180_31211[(1)] = (5));

} else {
var statearr_31181_31212 = state_31174__$1;
(statearr_31181_31212[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31175 === (15))){
var inst_31164 = (state_31174[(2)]);
var state_31174__$1 = state_31174;
var statearr_31182_31213 = state_31174__$1;
(statearr_31182_31213[(2)] = inst_31164);

(statearr_31182_31213[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31175 === (13))){
var state_31174__$1 = state_31174;
var statearr_31183_31214 = state_31174__$1;
(statearr_31183_31214[(2)] = null);

(statearr_31183_31214[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31175 === (6))){
var inst_31134 = (state_31174[(8)]);
var inst_31159 = inst_31134.length;
var inst_31160 = (inst_31159 > (0));
var state_31174__$1 = state_31174;
if(cljs.core.truth_(inst_31160)){
var statearr_31184_31215 = state_31174__$1;
(statearr_31184_31215[(1)] = (12));

} else {
var statearr_31185_31216 = state_31174__$1;
(statearr_31185_31216[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31175 === (3))){
var inst_31172 = (state_31174[(2)]);
var state_31174__$1 = state_31174;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31174__$1,inst_31172);
} else {
if((state_val_31175 === (12))){
var inst_31134 = (state_31174[(8)]);
var inst_31162 = cljs.core.vec.call(null,inst_31134);
var state_31174__$1 = state_31174;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31174__$1,(15),out,inst_31162);
} else {
if((state_val_31175 === (2))){
var state_31174__$1 = state_31174;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31174__$1,(4),ch);
} else {
if((state_val_31175 === (11))){
var inst_31138 = (state_31174[(9)]);
var inst_31142 = (state_31174[(10)]);
var inst_31152 = (state_31174[(2)]);
var inst_31153 = [];
var inst_31154 = inst_31153.push(inst_31138);
var inst_31134 = inst_31153;
var inst_31135 = inst_31142;
var state_31174__$1 = (function (){var statearr_31186 = state_31174;
(statearr_31186[(7)] = inst_31135);

(statearr_31186[(8)] = inst_31134);

(statearr_31186[(11)] = inst_31152);

(statearr_31186[(12)] = inst_31154);

return statearr_31186;
})();
var statearr_31187_31217 = state_31174__$1;
(statearr_31187_31217[(2)] = null);

(statearr_31187_31217[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31175 === (9))){
var inst_31134 = (state_31174[(8)]);
var inst_31150 = cljs.core.vec.call(null,inst_31134);
var state_31174__$1 = state_31174;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31174__$1,(11),out,inst_31150);
} else {
if((state_val_31175 === (5))){
var inst_31135 = (state_31174[(7)]);
var inst_31138 = (state_31174[(9)]);
var inst_31142 = (state_31174[(10)]);
var inst_31142__$1 = f.call(null,inst_31138);
var inst_31143 = cljs.core._EQ_.call(null,inst_31142__$1,inst_31135);
var inst_31144 = cljs.core.keyword_identical_QMARK_.call(null,inst_31135,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_31145 = (inst_31143) || (inst_31144);
var state_31174__$1 = (function (){var statearr_31188 = state_31174;
(statearr_31188[(10)] = inst_31142__$1);

return statearr_31188;
})();
if(cljs.core.truth_(inst_31145)){
var statearr_31189_31218 = state_31174__$1;
(statearr_31189_31218[(1)] = (8));

} else {
var statearr_31190_31219 = state_31174__$1;
(statearr_31190_31219[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31175 === (14))){
var inst_31167 = (state_31174[(2)]);
var inst_31168 = cljs.core.async.close_BANG_.call(null,out);
var state_31174__$1 = (function (){var statearr_31192 = state_31174;
(statearr_31192[(13)] = inst_31167);

return statearr_31192;
})();
var statearr_31193_31220 = state_31174__$1;
(statearr_31193_31220[(2)] = inst_31168);

(statearr_31193_31220[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31175 === (10))){
var inst_31157 = (state_31174[(2)]);
var state_31174__$1 = state_31174;
var statearr_31194_31221 = state_31174__$1;
(statearr_31194_31221[(2)] = inst_31157);

(statearr_31194_31221[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31175 === (8))){
var inst_31134 = (state_31174[(8)]);
var inst_31138 = (state_31174[(9)]);
var inst_31142 = (state_31174[(10)]);
var inst_31147 = inst_31134.push(inst_31138);
var tmp31191 = inst_31134;
var inst_31134__$1 = tmp31191;
var inst_31135 = inst_31142;
var state_31174__$1 = (function (){var statearr_31195 = state_31174;
(statearr_31195[(7)] = inst_31135);

(statearr_31195[(14)] = inst_31147);

(statearr_31195[(8)] = inst_31134__$1);

return statearr_31195;
})();
var statearr_31196_31222 = state_31174__$1;
(statearr_31196_31222[(2)] = null);

(statearr_31196_31222[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__20946__auto___31208,out))
;
return ((function (switch__20881__auto__,c__20946__auto___31208,out){
return (function() {
var cljs$core$async$state_machine__20882__auto__ = null;
var cljs$core$async$state_machine__20882__auto____0 = (function (){
var statearr_31200 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31200[(0)] = cljs$core$async$state_machine__20882__auto__);

(statearr_31200[(1)] = (1));

return statearr_31200;
});
var cljs$core$async$state_machine__20882__auto____1 = (function (state_31174){
while(true){
var ret_value__20883__auto__ = (function (){try{while(true){
var result__20884__auto__ = switch__20881__auto__.call(null,state_31174);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20884__auto__;
}
break;
}
}catch (e31201){if((e31201 instanceof Object)){
var ex__20885__auto__ = e31201;
var statearr_31202_31223 = state_31174;
(statearr_31202_31223[(5)] = ex__20885__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31174);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31201;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20883__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31224 = state_31174;
state_31174 = G__31224;
continue;
} else {
return ret_value__20883__auto__;
}
break;
}
});
cljs$core$async$state_machine__20882__auto__ = function(state_31174){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20882__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20882__auto____1.call(this,state_31174);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20882__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20882__auto____0;
cljs$core$async$state_machine__20882__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20882__auto____1;
return cljs$core$async$state_machine__20882__auto__;
})()
;})(switch__20881__auto__,c__20946__auto___31208,out))
})();
var state__20948__auto__ = (function (){var statearr_31203 = f__20947__auto__.call(null);
(statearr_31203[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20946__auto___31208);

return statearr_31203;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20948__auto__);
});})(c__20946__auto___31208,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map