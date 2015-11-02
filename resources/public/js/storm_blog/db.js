// Compiled by ClojureScript 1.7.145 {}
goog.provide('storm_blog.db');
goog.require('cljs.core');
goog.require('datascript.core');
goog.require('storm_blog.mock_data');
storm_blog.db.create_db = (function storm_blog$db$create_db(){
return datascript.core.create_conn.call(null,storm_blog.mock_data.schema);
});
storm_blog.db.populate_db_BANG_ = (function storm_blog$db$populate_db_BANG_(conn){
return datascript.core.transact_BANG_.call(null,conn,storm_blog.mock_data.fixtures);
});
storm_blog.db.pea = (function storm_blog$db$pea(db,att){
return datascript.core.q.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),cljs.core.list(new cljs.core.Symbol(null,"pull","pull",779986722,null),new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null)),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?a","?a",1314302913,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Symbol(null,"?a","?a",1314302913,null)], null)], null),db,att);
});
storm_blog.db.pvea = (function storm_blog$db$pvea(db,eid,att){
return datascript.core.q.call(null,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),cljs.core.list(new cljs.core.Symbol(null,"pull","pull",779986722,null),new cljs.core.Symbol(null,"?v","?v",-464183118,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null)),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Symbol(null,"?a","?a",1314302913,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Symbol(null,"?a","?a",1314302913,null),new cljs.core.Symbol(null,"?v","?v",-464183118,null)], null)], null),db,eid,att);
});
storm_blog.db.vea = (function storm_blog$db$vea(db,eid,att){
return datascript.core.q.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?v","?v",-464183118,null),new cljs.core.Symbol(null,".",".",1975675962,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Symbol(null,"?a","?a",1314302913,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Symbol(null,"?a","?a",1314302913,null),new cljs.core.Symbol(null,"?v","?v",-464183118,null)], null)], null),db,eid,att);
});
storm_blog.db.eav = (function storm_blog$db$eav(db,att,v){
return datascript.core.q.call(null,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?a","?a",1314302913,null),new cljs.core.Symbol(null,"?v","?v",-464183118,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Symbol(null,"?a","?a",1314302913,null),new cljs.core.Symbol(null,"?v","?v",-464183118,null)], null)], null),db,att,v);
});
storm_blog.db.g = (function storm_blog$db$g(db,att,eid){
return att.call(null,datascript.core.pull.call(null,db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [att], null),eid));
});
storm_blog.db.gv = (function storm_blog$db$gv(db,atts,eid){
return cljs.core.map.call(null,(function (att){
return storm_blog.db.g.call(null,db,att,eid);
}),atts);
});
storm_blog.db.children = (function storm_blog$db$children(var_args){
var args22725 = [];
var len__17433__auto___22728 = arguments.length;
var i__17434__auto___22729 = (0);
while(true){
if((i__17434__auto___22729 < len__17433__auto___22728)){
args22725.push((arguments[i__17434__auto___22729]));

var G__22730 = (i__17434__auto___22729 + (1));
i__17434__auto___22729 = G__22730;
continue;
} else {
}
break;
}

var G__22727 = args22725.length;
switch (G__22727) {
case 2:
return storm_blog.db.children.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return storm_blog.db.children.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22725.length)].join('')));

}
});

storm_blog.db.children.cljs$core$IFn$_invoke$arity$2 = (function (db,eid){
return cljs.core.map.call(null,cljs.core.conj,storm_blog.db.eav.call(null,db,new cljs.core.Keyword("widget","owner","widget/owner",329289057),eid),cljs.core.repeat.call(null,db));
});

storm_blog.db.children.cljs$core$IFn$_invoke$arity$3 = (function (db,vals,eid){
return null;
});

storm_blog.db.children.cljs$lang$maxFixedArity = 3;
storm_blog.db.ordered_children = (function storm_blog$db$ordered_children(db,eid){
return cljs.core.apply.call(null,cljs.core.map,cljs.core.vector,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.call(null,new cljs.core.Keyword("db","id","db/id",-1388397098),cljs.core.sort_by.call(null,new cljs.core.Keyword("widget","order","widget/order",1613776692),new cljs.core.Keyword("widget","_owner","widget/_owner",-809445944).cljs$core$IFn$_invoke$arity$1(datascript.core.pull.call(null,db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("widget","_owner","widget/_owner",-809445944),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("widget","order","widget/order",1613776692)], null)], null)], null),eid)))),cljs.core.repeat.call(null,db)], null));
});
storm_blog.db.get_widgets = (function storm_blog$db$get_widgets(db,type){
return cljs.core.map.call(null,cljs.core.conj,datascript.core.q.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?v","?v",-464183118,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("widget","type","widget/type",-1894308144),new cljs.core.Symbol(null,"?v","?v",-464183118,null)], null)], null),db,type),cljs.core.repeat.call(null,db));
});
storm_blog.db.get_widget = (function storm_blog$db$get_widget(db,type){
return cljs.core.first.call(null,storm_blog.db.get_widgets.call(null,db,type));
});
storm_blog.db.get_ui_att = (function storm_blog$db$get_ui_att(db,att){
return storm_blog.db.g.call(null,db,att,(0));
});
storm_blog.db.set_att = (function storm_blog$db$set_att(eid,att,val){
return cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword("db","id","db/id",-1388397098),eid,att,val], true, false);
});
storm_blog.db.set_content = (function storm_blog$db$set_content(eid,content){
return storm_blog.db.set_att.call(null,eid,new cljs.core.Keyword("widget","content","widget/content",-1276503492),content);
});
storm_blog.db.get_att = (function storm_blog$db$get_att(db,att){
return datascript.core.q.call(null,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?v","?v",-464183118,null),new cljs.core.Symbol(null,".",".",1975675962,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?a","?a",1314302913,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"?a","?a",1314302913,null),new cljs.core.Symbol(null,"?v","?v",-464183118,null)], null)], null),db,att);
});

//# sourceMappingURL=db.js.map