(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-user-video-list-user-video-list"],{"13c5":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={props:{label:{type:String,default:"标题"},rightIcon:{type:Boolean,default:!1}}};e.default=n},"1a30":function(t,e,i){"use strict";i.r(e);var n=i("77ce"),s=i("928e");for(var a in s)"default"!==a&&function(t){i.d(e,t,(function(){return s[t]}))}(a);var o,l=i("f0c5"),c=Object(l["a"])(s["default"],n["b"],n["c"],!1,null,"0e5d0038",null,!1,n["a"],o);e["default"]=c.exports},2980:function(t,e,i){"use strict";(function(t){var n=i("4ea4");i("4de4"),i("d81d"),i("a9e3"),i("d3b7"),i("25f0"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s=n(i("96b1")),a={components:{formItem:s.default},data:function(){return{id:0,list:[]}},computed:{showButton:function(){var t=this.list.filter((function(t){return t.isedit}));return 0===t.length}},onLoad:function(t){if(!t.id)return uni.navigateBack({delta:1}),uni.showToast({title:"非法参数",icon:"none"});this.id=t.id,this.getData()},methods:{getData:function(){var t=this;this.$H.get("/video_detail/"+this.id).then((function(e){t.list=e.map((function(t){return t.isedit=!1,t.video=t.url,t}))}))},submit:function(t){var e=this;if(!t.video)return uni.showToast({title:"视频不能为空",icon:"none"});if(!t.title)return uni.showToast({title:"标题不能为空",icon:"none"});var i=t.id?"/video_detail/"+t.id:"/video_detail",n=t.id?"修改":"创建";this.$H.post(i,{title:t.title,url:t.video,video_id:this.id,desc:t.desc},{token:!0}).then((function(i){t.isedit=!1,uni.showToast({title:n+"成功",icon:"none"}),e.getData()}))},deleteItem:function(e){var i=this;t("log",e," at pages/user-video-list/user-video-list.vue:129"),uni.showModal({content:"是否要删除该视频？",success:function(t){t.confirm&&i.$H.post("/video_detail/destroy",{id:e.id},{token:!0}).then((function(t){i.getData(),uni.showToast({title:"删除成功",icon:"none"})}))}})},add:function(){this.list.push({video:"",title:"",desc:"",isedit:!0})},upload:function(e){var i=this;uni.chooseVideo({count:1,sourceType:["camera","album"],success:function(n){var s=function(t){return i.$H.post("/vod/sign",{},{token:!0}).then((function(t){return t}))};i.genID(12);uni.showLoading({title:"上传中...",mask:!1});var a=new TcVod.default({getSignature:s}),o=a.upload({mediaFile:n.tempFile});o.on("media_progress",(function(e){t("log",e.percent," at pages/user-video-list/user-video-list.vue:200")})),o.done().then((function(t){e.video=t.video.url,uni.hideLoading()})).catch((function(t){uni.hideLoading(),uni.showToast({title:"上传失败",icon:"none"})}))}})},openEdit:function(t){t.isedit=!0},genID:function(t){return Number(Math.random().toString().substr(3,t)+Date.now()).toString(36)}}};e.default=a}).call(this,i("0de9")["log"])},"77ce":function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return s})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return n}));var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"bg-light",staticStyle:{"min-height":"100vh"}},[t._l(t.list,(function(e,n){return[e.isedit?i("v-uni-view",{staticClass:"bg-white"},[i("v-uni-view",{staticClass:"bg-light position-relative",staticStyle:{height:"350rpx"},attrs:{"hover-class":"bg-hover-light"}},[e.video?i("v-uni-video",{staticStyle:{height:"350rpx",width:"100%"},attrs:{src:e.video,controls:!0}}):t._e(),e.video?t._e():i("v-uni-view",{staticClass:"position-absolute left-0 right-0 top-0 bottom-0 flex flex-column align-center justify-center",staticStyle:{"background-color":"rgba(255,255,255,0.2)"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.upload(e)}}},[i("v-uni-text",{staticClass:"iconfont iconjia",staticStyle:{"font-size":"50rpx"}}),i("v-uni-text",{staticClass:"font text-muted"},[t._v("点击添加视频")])],1)],1),e.video?i("v-uni-view",{staticClass:"flex align-center justify-center font border-bottom border-top",staticStyle:{height:"100rpx"},attrs:{"hover-class":"bg-light"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.upload(e)}}},[t._v("点击切换视频")]):t._e(),i("form-item",{attrs:{label:"标题"}},[i("v-uni-input",{staticClass:"w-100 pr-5",attrs:{type:"text",placeholder:"请填写视频标题","placeholder-class":"text-light-muted"},model:{value:e.title,callback:function(i){t.$set(e,"title",i)},expression:"item.title"}})],1),i("form-item",{attrs:{label:"描述"}},[i("v-uni-textarea",{staticClass:"py-3",staticStyle:{width:"550rpx"},attrs:{placeholder:"请填写视频描述"},model:{value:e.desc,callback:function(i){t.$set(e,"desc",i)},expression:"item.desc"}})],1),i("v-uni-view",{staticClass:"flex",staticStyle:{height:"100rpx"}},[i("v-uni-view",{staticClass:"flex-1 font flex align-center justify-center bg-main text-white",attrs:{"hover-class":"bg-main-hover"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.submit(e)}}},[t._v("完成")]),i("v-uni-view",{staticClass:"flex-1 font flex align-center justify-center",attrs:{"hover-class":"bg-light"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.deleteItem(n)}}},[t._v("删除")])],1)],1):i("v-uni-view",{key:n+"_0",staticClass:"bg-white"},[i("v-uni-video",{staticStyle:{height:"350rpx",width:"100%"},attrs:{src:e.video,controls:!0}}),i("form-item",{attrs:{label:"标题"}},[i("v-uni-text",{staticClass:"font"},[t._v(t._s(e.title))])],1),i("v-uni-view",{staticClass:"flex",staticStyle:{height:"100rpx"}},[i("v-uni-view",{staticClass:"flex-1 font flex align-center justify-center",attrs:{"hover-class":"bg-light"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.openEdit(e)}}},[t._v("修改")]),i("v-uni-view",{staticClass:"flex-1 font flex align-center justify-center",attrs:{"hover-class":"bg-light"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.deleteItem(e)}}},[t._v("删除")])],1)],1),i("v-uni-view",{key:n+"_1",staticClass:"f-divider"})]})),t.showButton?i("v-uni-view",{staticClass:"flex align-center justify-center bg-main text-white font",staticStyle:{height:"100rpx"},attrs:{"hover-class":"bg-main-hover"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.add.apply(void 0,arguments)}}},[t._v("+ 添加新章节")]):t._e()],2)},a=[]},"928e":function(t,e,i){"use strict";i.r(e);var n=i("2980"),s=i.n(n);for(var a in n)"default"!==a&&function(t){i.d(e,t,(function(){return n[t]}))}(a);e["default"]=s.a},"96b1":function(t,e,i){"use strict";i.r(e);var n=i("c243"),s=i("fbf5");for(var a in s)"default"!==a&&function(t){i.d(e,t,(function(){return s[t]}))}(a);var o,l=i("f0c5"),c=Object(l["a"])(s["default"],n["b"],n["c"],!1,null,"85da6446",null,!1,n["a"],o);e["default"]=c.exports},c243:function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return s})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return n}));var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"flex border-bottom border-light-secondary",staticStyle:{"min-height":"100rpx"}},[i("v-uni-view",{staticClass:"flex align-center justify-center font-md",staticStyle:{width:"120rpx",height:"100rpx"}},[t._v(t._s(t.label))]),i("v-uni-view",{staticClass:"flex-1 flex align-center"},[t._t("default")],2),t.rightIcon?i("v-uni-view",{staticClass:"flex align-center justify-center",staticStyle:{height:"100rpx",width:"80rpx"}},[i("v-uni-text",{staticClass:"iconfont iconjinru text-muted"})],1):t._e()],1)},a=[]},fbf5:function(t,e,i){"use strict";i.r(e);var n=i("13c5"),s=i.n(n);for(var a in n)"default"!==a&&function(t){i.d(e,t,(function(){return n[t]}))}(a);e["default"]=s.a}}]);