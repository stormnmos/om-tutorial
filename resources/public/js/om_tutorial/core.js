// Compiled by ClojureScript 1.7.145 {}
goog.provide('om_tutorial.core');
goog.require('cljs.core');
goog.require('storm_blog.db');
goog.require('goog.dom');
goog.require('secretary.core');
goog.require('om.dom');
goog.require('sablono.core');
goog.require('ext.chessboard');
goog.require('datascript.core');
goog.require('om.next');
cljs.core.enable_console_print_BANG_.call(null);
secretary.core.set_config_BANG_.call(null,new cljs.core.Keyword(null,"prefix","prefix",-265908465),"#");
om_tutorial.core.conn = datascript.core.create_conn.call(null,cljs.core.PersistentArrayMap.EMPTY);
om_tutorial.core.testa = storm_blog.db.populate_db_BANG_.call(null,om_tutorial.core.conn);
om_tutorial.core.make_boards = (function om_tutorial$core$make_boards(){
ChessBoard("board1",{"draggable": true, "dropOffBoard": "trash", "snapSpeed": (100), "position": "start"});

return ChessBoard("board2",{"draggable": true, "dropOffBoard": "trash", "snapSpeed": (100), "position": "start", "orientation": "black"});
});
datascript.core.transact_BANG_.call(null,om_tutorial.core.conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("db","id","db/id",-1388397098),(-1),new cljs.core.Keyword("app","title","app/title",636408784),"Hello, Datascript!",new cljs.core.Keyword("app","count","app/count",2145591446),(0)], null)], null));
if(typeof om_tutorial.core.read !== 'undefined'){
} else {
om_tutorial.core.read = (function (){var method_table__17288__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__17289__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__17290__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__17291__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__17292__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"om-tutorial.core","read"),om.next.dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__17292__auto__,method_table__17288__auto__,prefer_table__17289__auto__,method_cache__17290__auto__,cached_hierarchy__17291__auto__));
})();
}
cljs.core._add_method.call(null,om_tutorial.core.read,new cljs.core.Keyword("app","board","app/board",-1907708238),(function (p__26031,_,___$1){
var map__26032 = p__26031;
var map__26032__$1 = ((((!((map__26032 == null)))?((((map__26032.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26032.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26032):map__26032);
var state = cljs.core.get.call(null,map__26032__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var selector = cljs.core.get.call(null,map__26032__$1,new cljs.core.Keyword(null,"selector","selector",762528866));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),datascript.core.q.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"pull","pull",779986722,null),new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Symbol(null,"?selector","?selector",-185122333,null)),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?selector","?selector",-185122333,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("app","board","app/board",-1907708238)], null)], null),datascript.core.db.call(null,state),selector)], null);
}));
cljs.core._add_method.call(null,om_tutorial.core.read,new cljs.core.Keyword("app","counter","app/counter",804038354),(function (p__26034,_,___$1){
var map__26035 = p__26034;
var map__26035__$1 = ((((!((map__26035 == null)))?((((map__26035.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26035.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26035):map__26035);
var state = cljs.core.get.call(null,map__26035__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var selector = cljs.core.get.call(null,map__26035__$1,new cljs.core.Keyword(null,"selector","selector",762528866));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),datascript.core.q.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"pull","pull",779986722,null),new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Symbol(null,"?selector","?selector",-185122333,null)),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?selector","?selector",-185122333,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("app","title","app/title",636408784)], null)], null),datascript.core.db.call(null,state),selector)], null);
}));
cljs.core._add_method.call(null,om_tutorial.core.read,new cljs.core.Keyword("app","header","app/header",119406797),(function (p__26037,_,___$1){
var map__26038 = p__26037;
var map__26038__$1 = ((((!((map__26038 == null)))?((((map__26038.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26038.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26038):map__26038);
var state = cljs.core.get.call(null,map__26038__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var selector = cljs.core.get.call(null,map__26038__$1,new cljs.core.Keyword(null,"selector","selector",762528866));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),datascript.core.q.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"pull","pull",779986722,null),new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Symbol(null,"?selector","?selector",-185122333,null)),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?selector","?selector",-185122333,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("widget","type","widget/type",-1894308144),new cljs.core.Keyword(null,"header","header",119441134)], null)], null),datascript.core.db.call(null,state),selector)], null);
}));
if(typeof om_tutorial.core.mutate !== 'undefined'){
} else {
om_tutorial.core.mutate = (function (){var method_table__17288__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__17289__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__17290__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__17291__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__17292__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"om-tutorial.core","mutate"),om.next.dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__17292__auto__,method_table__17288__auto__,prefer_table__17289__auto__,method_cache__17290__auto__,cached_hierarchy__17291__auto__));
})();
}
cljs.core._add_method.call(null,om_tutorial.core.mutate,new cljs.core.Symbol("app","increment","app/increment",81538792,null),(function (p__26040,_,entity){
var map__26041 = p__26040;
var map__26041__$1 = ((((!((map__26041 == null)))?((((map__26041.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26041.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26041):map__26041);
var state = cljs.core.get.call(null,map__26041__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app","counter","app/counter",804038354)], null),new cljs.core.Keyword(null,"action","action",-811238024),((function (map__26041,map__26041__$1,state){
return (function (){
return datascript.core.transact_BANG_.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,entity,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app","count","app/count",2145591446)], null),cljs.core.inc)], null));
});})(map__26041,map__26041__$1,state))
], null);
}));
cljs.core._add_method.call(null,om_tutorial.core.mutate,new cljs.core.Symbol("app","add-game","app/add-game",1595269091,null),(function (p__26043,_,p__26044){
var map__26045 = p__26043;
var map__26045__$1 = ((((!((map__26045 == null)))?((((map__26045.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26045.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26045):map__26045);
var state = cljs.core.get.call(null,map__26045__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__26046 = p__26044;
var map__26046__$1 = ((((!((map__26046 == null)))?((((map__26046.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26046.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26046):map__26046);
var entity = cljs.core.get.call(null,map__26046__$1,new cljs.core.Keyword(null,"entity","entity",-450970276));
var game = cljs.core.get.call(null,map__26046__$1,new cljs.core.Keyword(null,"game","game",-441523833));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app","board","app/board",-1907708238)], null),new cljs.core.Keyword(null,"action","action",-811238024),((function (map__26045,map__26045__$1,state,map__26046,map__26046__$1,entity,game){
return (function (){
return datascript.core.transact_BANG_.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc_in.call(null,entity,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("board","game","board/game",402899437)], null),[cljs.core.str(game)].join(''))], null));
});})(map__26045,map__26045__$1,state,map__26046,map__26046__$1,entity,game))
], null);
}));
cljs.core._add_method.call(null,om_tutorial.core.mutate,new cljs.core.Symbol("app","set-game","app/set-game",-1091073737,null),(function (p__26049,_,p__26050){
var map__26051 = p__26049;
var map__26051__$1 = ((((!((map__26051 == null)))?((((map__26051.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26051.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26051):map__26051);
var state = cljs.core.get.call(null,map__26051__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__26052 = p__26050;
var map__26052__$1 = ((((!((map__26052 == null)))?((((map__26052.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26052.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26052):map__26052);
var entity = cljs.core.get.call(null,map__26052__$1,new cljs.core.Keyword(null,"entity","entity",-450970276));
var fem = cljs.core.get.call(null,map__26052__$1,new cljs.core.Keyword(null,"fem","fem",-4892633));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app","board","app/board",-1907708238)], null),new cljs.core.Keyword(null,"action","action",-811238024),((function (map__26051,map__26051__$1,state,map__26052,map__26052__$1,entity,fem){
return (function (){
return datascript.core.transact_BANG_.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc_in.call(null,entity,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("board","fem","board/fem",-98810071)], null),fem)], null));
});})(map__26051,map__26051__$1,state,map__26052,map__26052__$1,entity,fem))
], null);
}));
cljs.core._add_method.call(null,om_tutorial.core.mutate,new cljs.core.Symbol("app","change-board","app/change-board",1547873620,null),(function (p__26055,_,entity){
var map__26056 = p__26055;
var map__26056__$1 = ((((!((map__26056 == null)))?((((map__26056.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26056.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26056):map__26056);
var state = cljs.core.get.call(null,map__26056__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app","game","app/game",-441616472)], null)], null);
}));
/**
 * @constructor
 */
om_tutorial.core.Header = (function om_tutorial$core$Header(){
var this__21695__auto__ = this;
React.Component.apply(this__21695__auto__,arguments);

if(!((this__21695__auto__.getInitialState == null))){
this__21695__auto__.state = this__21695__auto__.getInitialState();
} else {
this__21695__auto__.state = {};
}

return this__21695__auto__;
});

om_tutorial.core.Header.prototype = goog.object.clone(React.Component.prototype);

var x26062_26075 = om_tutorial.core.Header.prototype;
x26062_26075.componentWillUpdate = ((function (x26062_26075){
return (function (next_props__21636__auto__,next_state__21637__auto__){
var this__21635__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__21635__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__21635__auto__);
});})(x26062_26075))
;

x26062_26075.shouldComponentUpdate = ((function (x26062_26075){
return (function (next_props__21636__auto__,next_state__21637__auto__){
var this__21635__auto__ = this;
var or__16375__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__21635__auto__),goog.object.get(next_props__21636__auto__,"omcljs$value"));
if(or__16375__auto__){
return or__16375__auto__;
} else {
var and__16363__auto__ = this__21635__auto__.state;
if(cljs.core.truth_(and__16363__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__21635__auto__.state,"omcljs$state"),goog.object.get(next_state__21637__auto__,"omcljs$state"));
} else {
return and__16363__auto__;
}
}
});})(x26062_26075))
;

x26062_26075.componentWillUnmount = ((function (x26062_26075){
return (function (){
var this__21635__auto__ = this;
var r__21641__auto__ = om.next.get_reconciler.call(null,this__21635__auto__);
var cfg__21642__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__21641__auto__);
var st__21643__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__21642__auto__);
var indexer__21640__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__21642__auto__);
if((st__21643__auto__ == null)){
} else {
cljs.core.swap_BANG_.call(null,st__21643__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__21635__auto__);
}

if((indexer__21640__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__21640__auto__,this__21635__auto__);
}
});})(x26062_26075))
;

x26062_26075.componentDidUpdate = ((function (x26062_26075){
return (function (prev_props__21638__auto__,prev_state__21639__auto__){
var this__21635__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__21635__auto__);
});})(x26062_26075))
;

x26062_26075.isMounted = ((function (x26062_26075){
return (function (){
var this__21635__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__21635__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x26062_26075))
;

x26062_26075.componentWillMount = ((function (x26062_26075){
return (function (){
var this__21635__auto__ = this;
var indexer__21640__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__21635__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__21640__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__21640__auto__,this__21635__auto__);
}
});})(x26062_26075))
;

x26062_26075.render = ((function (x26062_26075){
return (function (){
var this$ = this;
var _STAR_reconciler_STAR_26063 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_26064 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_26065 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_26066 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_26067 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this$);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this$) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this$);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this$);

om.next._STAR_parent_STAR_ = this$;

try{var map__26068 = cljs.core.get_in.call(null,om.next.props.call(null,this$),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app","counter","app/counter",804038354),(0)], null));
var map__26068__$1 = ((((!((map__26068 == null)))?((((map__26068.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26068.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26068):map__26068);
var entity = map__26068__$1;
var title = cljs.core.get.call(null,map__26068__$1,new cljs.core.Keyword("header","title","header/title",2088479860));
return React.createElement("header",{"role": "banner", "className": "navbar navbar-default navbar-static-top"},React.createElement("div",{"className": "container"},React.createElement("div",{"className": "navbar-header"},React.createElement("button",{"type": "button", "data-toggle": "collapse", "data-target": ".navbar-collapse", "className": "navbar-toggle"},React.createElement("span",{"className": "sr-only"},"Toggle Navigation"),sablono.interpreter.interpret.call(null,cljs.core.map.call(null,((function (map__26068,map__26068__$1,entity,title,_STAR_reconciler_STAR_26063,_STAR_depth_STAR_26064,_STAR_shared_STAR_26065,_STAR_instrument_STAR_26066,_STAR_parent_STAR_26067,this$,x26062_26075){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.icon-bar","span.icon-bar",618689172)], null);
});})(map__26068,map__26068__$1,entity,title,_STAR_reconciler_STAR_26063,_STAR_depth_STAR_26064,_STAR_shared_STAR_26065,_STAR_instrument_STAR_26066,_STAR_parent_STAR_26067,this$,x26062_26075))
,cljs.core.range.call(null,(3))))),React.createElement("a",{"href": "#/article/1", "className": "navbar-brand"},sablono.interpreter.interpret.call(null,title))),React.createElement("nav",{"role": "navigation", "className": "collapse navbar-collapse"},(function (){var attrs26072 = cljs.core.map.call(null,((function (map__26068,map__26068__$1,entity,title,_STAR_reconciler_STAR_26063,_STAR_depth_STAR_26064,_STAR_shared_STAR_26065,_STAR_instrument_STAR_26066,_STAR_parent_STAR_26067,this$,x26062_26075){
return (function (title__$1){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#/article/1"], null),title__$1], null)], null);
});})(map__26068,map__26068__$1,entity,title,_STAR_reconciler_STAR_26063,_STAR_depth_STAR_26064,_STAR_shared_STAR_26065,_STAR_instrument_STAR_26066,_STAR_parent_STAR_26067,this$,x26062_26075))
,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Get Started","Edit","Visualize","Prototype"], null));
return cljs.core.apply.call(null,React.createElement,"ul",((cljs.core.map_QMARK_.call(null,attrs26072))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["nav","navbar-nav"], null)], null),attrs26072)):{"className": "nav navbar-nav"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs26072))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs26072)], null))));
})())));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_26067;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_26066;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_26065;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_26064;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_26063;
}});})(x26062_26075))
;


om_tutorial.core.Header.prototype.constructor = om_tutorial.core.Header;

om_tutorial.core.Header.prototype.om$isComponent = true;

var x26073_26076 = om_tutorial.core.Header;
x26073_26076.om$next$IQuery$ = true;

x26073_26076.om$next$IQuery$query$arity$1 = ((function (x26073_26076){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("app","header","app/header",119406797),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("header","title","header/title",2088479860)], null)], null)], null);
});})(x26073_26076))
;


var x26074_26077 = om_tutorial.core.Header.prototype;
x26074_26077.om$next$IQuery$ = true;

x26074_26077.om$next$IQuery$query$arity$1 = ((function (x26074_26077){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("app","header","app/header",119406797),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("header","title","header/title",2088479860)], null)], null)], null);
});})(x26074_26077))
;


om_tutorial.core.Header.cljs$lang$type = true;

om_tutorial.core.Header.cljs$lang$ctorStr = "om-tutorial.core/Header";

om_tutorial.core.Header.cljs$lang$ctorPrWriter = (function (this__21697__auto__,writer__21698__auto__,opt__21699__auto__){
return cljs.core._write.call(null,writer__21698__auto__,"om-tutorial.core/Header");
});
/**
 * @constructor
 */
om_tutorial.core.Counter = (function om_tutorial$core$Counter(){
var this__21695__auto__ = this;
React.Component.apply(this__21695__auto__,arguments);

if(!((this__21695__auto__.getInitialState == null))){
this__21695__auto__.state = this__21695__auto__.getInitialState();
} else {
this__21695__auto__.state = {};
}

return this__21695__auto__;
});

om_tutorial.core.Counter.prototype = goog.object.clone(React.Component.prototype);

var x26082_26094 = om_tutorial.core.Counter.prototype;
x26082_26094.componentWillUpdate = ((function (x26082_26094){
return (function (next_props__21636__auto__,next_state__21637__auto__){
var this__21635__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__21635__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__21635__auto__);
});})(x26082_26094))
;

x26082_26094.shouldComponentUpdate = ((function (x26082_26094){
return (function (next_props__21636__auto__,next_state__21637__auto__){
var this__21635__auto__ = this;
var or__16375__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__21635__auto__),goog.object.get(next_props__21636__auto__,"omcljs$value"));
if(or__16375__auto__){
return or__16375__auto__;
} else {
var and__16363__auto__ = this__21635__auto__.state;
if(cljs.core.truth_(and__16363__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__21635__auto__.state,"omcljs$state"),goog.object.get(next_state__21637__auto__,"omcljs$state"));
} else {
return and__16363__auto__;
}
}
});})(x26082_26094))
;

x26082_26094.componentWillUnmount = ((function (x26082_26094){
return (function (){
var this__21635__auto__ = this;
var r__21641__auto__ = om.next.get_reconciler.call(null,this__21635__auto__);
var cfg__21642__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__21641__auto__);
var st__21643__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__21642__auto__);
var indexer__21640__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__21642__auto__);
if((st__21643__auto__ == null)){
} else {
cljs.core.swap_BANG_.call(null,st__21643__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__21635__auto__);
}

if((indexer__21640__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__21640__auto__,this__21635__auto__);
}
});})(x26082_26094))
;

x26082_26094.componentDidUpdate = ((function (x26082_26094){
return (function (prev_props__21638__auto__,prev_state__21639__auto__){
var this__21635__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__21635__auto__);
});})(x26082_26094))
;

x26082_26094.isMounted = ((function (x26082_26094){
return (function (){
var this__21635__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__21635__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x26082_26094))
;

x26082_26094.componentWillMount = ((function (x26082_26094){
return (function (){
var this__21635__auto__ = this;
var indexer__21640__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__21635__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__21640__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__21640__auto__,this__21635__auto__);
}
});})(x26082_26094))
;

x26082_26094.render = ((function (x26082_26094){
return (function (){
var this$ = this;
var _STAR_reconciler_STAR_26083 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_26084 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_26085 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_26086 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_26087 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this$);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this$) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this$);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this$);

om.next._STAR_parent_STAR_ = this$;

try{var map__26088 = cljs.core.get_in.call(null,om.next.props.call(null,this$),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app","counter","app/counter",804038354),(0)], null));
var map__26088__$1 = ((((!((map__26088 == null)))?((((map__26088.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26088.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26088):map__26088);
var entity = map__26088__$1;
var title = cljs.core.get.call(null,map__26088__$1,new cljs.core.Keyword("app","title","app/title",636408784));
var count = cljs.core.get.call(null,map__26088__$1,new cljs.core.Keyword("app","count","app/count",2145591446));
return React.createElement("div",null,(function (){var attrs26090 = title;
return cljs.core.apply.call(null,React.createElement,"h2",((cljs.core.map_QMARK_.call(null,attrs26090))?sablono.interpreter.attributes.call(null,attrs26090):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs26090))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs26090)], null))));
})(),(function (){var attrs26091 = [cljs.core.str("Count: "),cljs.core.str(count)].join('');
return cljs.core.apply.call(null,React.createElement,"span",((cljs.core.map_QMARK_.call(null,attrs26091))?sablono.interpreter.attributes.call(null,attrs26091):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs26091))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs26091)], null))));
})(),React.createElement("button",{"onClick": ((function (map__26088,map__26088__$1,entity,title,count,_STAR_reconciler_STAR_26083,_STAR_depth_STAR_26084,_STAR_shared_STAR_26085,_STAR_instrument_STAR_26086,_STAR_parent_STAR_26087,this$,x26082_26094){
return (function (e){
return om.next.transact_BANG_.call(null,this$,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("app","increment","app/increment",81538792,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,entity))))))))));
});})(map__26088,map__26088__$1,entity,title,count,_STAR_reconciler_STAR_26083,_STAR_depth_STAR_26084,_STAR_shared_STAR_26085,_STAR_instrument_STAR_26086,_STAR_parent_STAR_26087,this$,x26082_26094))
},"Click me"));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_26087;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_26086;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_26085;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_26084;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_26083;
}});})(x26082_26094))
;


om_tutorial.core.Counter.prototype.constructor = om_tutorial.core.Counter;

om_tutorial.core.Counter.prototype.om$isComponent = true;

var x26092_26095 = om_tutorial.core.Counter;
x26092_26095.om$next$IQuery$ = true;

x26092_26095.om$next$IQuery$query$arity$1 = ((function (x26092_26095){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("app","counter","app/counter",804038354),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("app","title","app/title",636408784),new cljs.core.Keyword("app","count","app/count",2145591446)], null)], null)], null);
});})(x26092_26095))
;


var x26093_26096 = om_tutorial.core.Counter.prototype;
x26093_26096.om$next$IQuery$ = true;

x26093_26096.om$next$IQuery$query$arity$1 = ((function (x26093_26096){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("app","counter","app/counter",804038354),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("app","title","app/title",636408784),new cljs.core.Keyword("app","count","app/count",2145591446)], null)], null)], null);
});})(x26093_26096))
;


om_tutorial.core.Counter.cljs$lang$type = true;

om_tutorial.core.Counter.cljs$lang$ctorStr = "om-tutorial.core/Counter";

om_tutorial.core.Counter.cljs$lang$ctorPrWriter = (function (this__21697__auto__,writer__21698__auto__,opt__21699__auto__){
return cljs.core._write.call(null,writer__21698__auto__,"om-tutorial.core/Counter");
});
om_tutorial.core.make_board = (function om_tutorial$core$make_board(id,f){
return ChessBoard(id,{"draggable": true, "dropOffBoard": "trash", "snapSpeed": (100), "position": "start", "onChange": f});
});
/**
 * @constructor
 */
om_tutorial.core.ChessBoard = (function om_tutorial$core$ChessBoard(){
var this__21695__auto__ = this;
React.Component.apply(this__21695__auto__,arguments);

if(!((this__21695__auto__.getInitialState == null))){
this__21695__auto__.state = this__21695__auto__.getInitialState();
} else {
this__21695__auto__.state = {};
}

return this__21695__auto__;
});

om_tutorial.core.ChessBoard.prototype = goog.object.clone(React.Component.prototype);

var x26101_26115 = om_tutorial.core.ChessBoard.prototype;
x26101_26115.shouldComponentUpdate = ((function (x26101_26115){
return (function (next_props__21636__auto__,next_state__21637__auto__){
var this__21635__auto__ = this;
var or__16375__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__21635__auto__),goog.object.get(next_props__21636__auto__,"omcljs$value"));
if(or__16375__auto__){
return or__16375__auto__;
} else {
var and__16363__auto__ = this__21635__auto__.state;
if(cljs.core.truth_(and__16363__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__21635__auto__.state,"omcljs$state"),goog.object.get(next_state__21637__auto__,"omcljs$state"));
} else {
return and__16363__auto__;
}
}
});})(x26101_26115))
;

x26101_26115.componentWillUnmount = ((function (x26101_26115){
return (function (){
var this__21635__auto__ = this;
var r__21641__auto__ = om.next.get_reconciler.call(null,this__21635__auto__);
var cfg__21642__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__21641__auto__);
var st__21643__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__21642__auto__);
var indexer__21640__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__21642__auto__);
if((st__21643__auto__ == null)){
} else {
cljs.core.swap_BANG_.call(null,st__21643__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__21635__auto__);
}

if((indexer__21640__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__21640__auto__,this__21635__auto__);
}
});})(x26101_26115))
;

x26101_26115.componentDidUpdate = ((function (x26101_26115){
return (function (prev_props__21638__auto__,prev_state__21639__auto__){
var this__21635__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__21635__auto__);
});})(x26101_26115))
;

x26101_26115.isMounted = ((function (x26101_26115){
return (function (){
var this__21635__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__21635__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x26101_26115))
;

x26101_26115.componentWillMount = ((function (x26101_26115){
return (function (){
var this__21635__auto__ = this;
var indexer__21640__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__21635__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__21640__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__21640__auto__,this__21635__auto__);
}
});})(x26101_26115))
;

x26101_26115.render = ((function (x26101_26115){
return (function (){
var this$ = this;
var _STAR_reconciler_STAR_26102 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_26103 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_26104 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_26105 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_26106 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this$);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this$) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this$);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this$);

om.next._STAR_parent_STAR_ = this$;

try{return React.createElement("div",{"className": "boards"},React.createElement("div",{"id": "board1", "style": {"width": "400px"}},"Board-1"),React.createElement("div",{"id": "board2", "style": {"width": "400px"}},"Board-2"));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_26106;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_26105;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_26104;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_26103;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_26102;
}});})(x26101_26115))
;

x26101_26115.componentDidMount = ((function (x26101_26115){
return (function (){
var this$ = this;
var map__26109 = cljs.core.get_in.call(null,om.next.props.call(null,this$),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app","board","app/board",-1907708238),(0)], null));
var map__26109__$1 = ((((!((map__26109 == null)))?((((map__26109.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26109.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26109):map__26109);
var entity = map__26109__$1;
var fem = cljs.core.get.call(null,map__26109__$1,new cljs.core.Keyword("board","fem","board/fem",-98810071));
var game = om_tutorial.core.make_board.call(null,"board2",((function (map__26109,map__26109__$1,entity,fem,this$,x26101_26115){
return (function (old,new$){
return om.next.transact_BANG_.call(null,this$,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("app","set-game","app/set-game",-1091073737,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"entity","entity",-450970276)),cljs.core._conj.call(null,cljs.core.List.EMPTY,entity),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"fem","fem",-4892633)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".objToFen",".objToFen",-1361011686,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","ChessBoard","js/ChessBoard",566835941,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new$)))))))))))))))))));
});})(map__26109,map__26109__$1,entity,fem,this$,x26101_26115))
);
ChessBoard("board1",{"draggable": true, "dropOffBoard": "trash", "snapSpeed": (100), "position": fem});

return om.next.transact_BANG_.call(null,this$,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("app","add-game","app/add-game",1595269091,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"entity","entity",-450970276)),cljs.core._conj.call(null,cljs.core.List.EMPTY,entity),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"game","game",-441523833)),cljs.core._conj.call(null,cljs.core.List.EMPTY,game)))))))))))))));
});})(x26101_26115))
;

x26101_26115.componentWillUpdate = ((function (x26101_26115){
return (function (n_props,n_state){
var this$ = this;
var n_props__$1 = om.next._next_props.call(null,n_props,this$);
var n_state__$1 = goog.object.get(n_state,"omcljs$pendingState");
var ret__21629__auto__ = (function (){var map__26111 = cljs.core.get_in.call(null,n_props__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app","board","app/board",-1907708238),(0)], null));
var map__26111__$1 = ((((!((map__26111 == null)))?((((map__26111.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26111.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26111):map__26111);
var entity = map__26111__$1;
var fem = cljs.core.get.call(null,map__26111__$1,new cljs.core.Keyword("board","fem","board/fem",-98810071));
var game = cljs.core.get.call(null,map__26111__$1,new cljs.core.Keyword("board","game","board/game",402899437));
return game.position(fem,true);
})();
om.next.merge_pending_props_BANG_.call(null,this$);

om.next.merge_pending_state_BANG_.call(null,this$);

return ret__21629__auto__;
});})(x26101_26115))
;


om_tutorial.core.ChessBoard.prototype.constructor = om_tutorial.core.ChessBoard;

om_tutorial.core.ChessBoard.prototype.om$isComponent = true;

var x26113_26116 = om_tutorial.core.ChessBoard;
x26113_26116.om$next$IQuery$ = true;

x26113_26116.om$next$IQuery$query$arity$1 = ((function (x26113_26116){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("app","board","app/board",-1907708238),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("board","title","board/title",710385941),new cljs.core.Keyword("board","fem","board/fem",-98810071),new cljs.core.Keyword("board","game","board/game",402899437)], null)], null)], null);
});})(x26113_26116))
;


var x26114_26117 = om_tutorial.core.ChessBoard.prototype;
x26114_26117.om$next$IQuery$ = true;

x26114_26117.om$next$IQuery$query$arity$1 = ((function (x26114_26117){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("app","board","app/board",-1907708238),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("board","title","board/title",710385941),new cljs.core.Keyword("board","fem","board/fem",-98810071),new cljs.core.Keyword("board","game","board/game",402899437)], null)], null)], null);
});})(x26114_26117))
;


om_tutorial.core.ChessBoard.cljs$lang$type = true;

om_tutorial.core.ChessBoard.cljs$lang$ctorStr = "om-tutorial.core/ChessBoard";

om_tutorial.core.ChessBoard.cljs$lang$ctorPrWriter = (function (this__21697__auto__,writer__21698__auto__,opt__21699__auto__){
return cljs.core._write.call(null,writer__21698__auto__,"om-tutorial.core/ChessBoard");
});
om_tutorial.core.reconciler = om.next.reconciler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),om_tutorial.core.conn,new cljs.core.Keyword(null,"parser","parser",-1543495310),om.next.parser.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read","read",1140058661),om_tutorial.core.read,new cljs.core.Keyword(null,"mutate","mutate",1422419038),om_tutorial.core.mutate], null))], null));
om.next.add_root_BANG_.call(null,om_tutorial.core.reconciler,om_tutorial.core.ChessBoard,goog.dom.getElement("app"));
om_tutorial.core.cb_start_BANG_ = (function om_tutorial$core$cb_start_BANG_(board){
return board.start();
});
om_tutorial.core.cb_position_BANG_ = (function om_tutorial$core$cb_position_BANG_(board,fem){
return board.position(fem,true);
});

//# sourceMappingURL=core.js.map