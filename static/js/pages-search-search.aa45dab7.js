(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-search-search"],{"222e":function(t,e,n){"use strict";n.r(e);var i=n("a145"),a=n.n(i);for(var s in i)"default"!==s&&function(t){n.d(e,t,(function(){return i[t]}))}(s);e["default"]=a.a},"3fa2":function(t,e,n){"use strict";n.r(e);var i=n("58996"),a=n("d29b");for(var s in a)"default"!==s&&function(t){n.d(e,t,(function(){return a[t]}))}(s);var r,c=n("f0c5"),o=Object(c["a"])(a["default"],i["b"],i["c"],!1,null,"0ec06344",null,!1,i["a"],r);e["default"]=o.exports},5818:function(t,e,n){"use strict";n.r(e);var i=n("8f35"),a=n("222e");for(var s in a)"default"!==s&&function(t){n.d(e,t,(function(){return a[t]}))}(s);var r,c=n("f0c5"),o=Object(c["a"])(a["default"],i["b"],i["c"],!1,null,"4944effa",null,!1,i["a"],r);e["default"]=o.exports},58996:function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return s})),n.d(e,"a",(function(){return i}));var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"flex align-center py-2 border-bottom",staticStyle:{width:"750rpx","box-sizing":"border-box"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.open.apply(void 0,arguments)}}},[n("v-uni-image",{staticClass:"rounded-lg mx-2 flex-shrink",staticStyle:{width:"260rpx",height:"160rpx"},attrs:{src:t.item.cover}}),n("v-uni-view",{staticClass:"flex-1 flex flex-column"},[n("v-uni-text",{staticClass:"font",staticStyle:{"line-height":"1.2"}},[t._v(t._s(t.item.title))]),n("v-uni-text",{staticClass:"font-sm text-light-muted mt-auto"},[t._v(t._s(t.item.create_time))]),n("v-uni-view",{staticClass:"flex align-center justify-between text-muted line-h"},[n("v-uni-view",{staticClass:"line-h"},[n("v-uni-text",{staticClass:"iconfont iconbofangshu font-md mx-1"}),n("v-uni-text",{staticClass:"font-sm"},[t._v(t._s(t.item.play_count))])],1),n("v-uni-view",{staticClass:"line-h"},[n("v-uni-text",{staticClass:"iconfont icondanmushu font-md mx-1"}),n("v-uni-text",{staticClass:"font-sm"},[t._v(t._s(t.item.danmu_count))])],1),n("v-uni-text",{staticClass:"iconfont icongengduo"})],1)],1)],1)},s=[]},"8f35":function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return s})),n.d(e,"a",(function(){return i}));var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[t._l(t.list,(function(t,e){return n("media-list",{key:e,attrs:{item:t,index:e}})})),0===t.list.length?n("v-uni-view",{staticClass:"flex align-center justify-center text-secondary",staticStyle:{height:"200rpx"}},[t._v("暂无数据")]):t.list.length>10?n("v-uni-view",{staticClass:"flex align-center justify-center font-md text-secondary",staticStyle:{height:"80rpx"},attrs:{"hover-class":"bg-light"}},[t._v(t._s(t.loadText))]):t._e()],2)},s=[]},a145:function(t,e,n){"use strict";var i=n("4ea4");n("99af"),n("ac1f"),n("841c"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i(n("2909")),s=i(n("3fa2")),r={components:{mediaList:s.default},data:function(){return{keyword:"",page:1,list:[],loadText:"上拉加载更多"}},onNavigationBarSearchInputChanged:function(t){this.keyword=t.text},onNavigationBarButtonTap:function(){this.handleSearch()},onReachBottom:function(){"上拉加载更多"===this.loadText&&(this.loadText="正在加载中...",this.page=this.page+1,this.search())},methods:{handleSearch:function(){if(""===this.keyword)return uni.showToast({title:"关键词不能为空",icon:"none"});this.page=1,this.search()},search:function(){var t=this,e=this.page;this.$H.get("/video_search/".concat(this.page,"?keyword=").concat(this.keyword)).then((function(n){t.list=1===e?n:[].concat((0,a.default)(t.list),(0,a.default)(n)),t.loadText=10===n.length?"上拉加载更多":"没有更多了"})).catch((function(n){e>1&&(t.page--,t.loadText="上拉加载更多")}))}}};e.default=r},c4ab:function(t,e,n){"use strict";n("c740"),n("a434"),n("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={props:{item:Object,index:[String,Number]},methods:{toFirst:function(t,e){return 0!=e&&t.unshift(t.splice(e,1)[0]),t},open:function(){var t=this;uni.navigateTo({url:"/pages/detail-video/detail-video?id="+this.item.id});var e=uni.getStorageSync("history");e=e?JSON.parse(e):[];var n=e.findIndex((function(e){return e.id===t.item.id}));-1===n?e.unshift(this.item):this.toFirst(e,n),uni.setStorage({key:"history",data:JSON.stringify(e)})}}};e.default=i},d29b:function(t,e,n){"use strict";n.r(e);var i=n("c4ab"),a=n.n(i);for(var s in i)"default"!==s&&function(t){n.d(e,t,(function(){return i[t]}))}(s);e["default"]=a.a}}]);