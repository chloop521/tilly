(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-create-create"],{"0a3a":function(t,e,n){"use strict";n.r(e);var i=n("d4fa"),a=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);e["default"]=a.a},"13c5":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={props:{label:{type:String,default:"标题"},rightIcon:{type:Boolean,default:!1}}};e.default=i},"192e":function(t,e,n){"use strict";n.r(e);var i=n("7efc"),a=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);e["default"]=a.a},"62a5":function(t,e,n){"use strict";n.r(e);var i=n("b96a"),a=n("192e");for(var r in a)"default"!==r&&function(t){n.d(e,t,(function(){return a[t]}))}(r);var c,o=n("f0c5"),u=Object(o["a"])(a["default"],i["b"],i["c"],!1,null,"2aa5f289",null,!1,i["a"],c);e["default"]=u.exports},"7efc":function(t,e,n){"use strict";var i=n("4ea4");n("c740"),n("d81d"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i(n("96b1")),r=i(n("8c71")),c={components:{formItem:a.default,mainBigButton:r.default},data:function(){return{id:0,form:{cover:"",title:"",category_id:0,desc:""},category:[],range:[]}},onLoad:function(t){var e=this;if(t.data){var n=JSON.parse(decodeURIComponent(t.data));this.form={cover:n.cover,title:n.title,category_id:n.category_id,desc:n.desc},this.id=n.id}this.$H.get("/category").then((function(t){e.category=t,e.range=t.map((function(t){return t.title}))}))},onNavigationBarButtonTap:function(){this.submit()},computed:{categroyTitle:function(){var t=this,e=this.category.findIndex((function(e){return e.id===t.form.category_id}));return-1===e?"":this.category[e].title}},methods:{upload:function(){var t=this;uni.chooseImage({count:1,sizeType:["compressed"],success:function(e){t.$H.upload("/upload",{filePath:e.tempFilePaths[0]}).then((function(e){t.form.cover=e.url,uni.showToast({title:"上传成功",icon:"none"})}))}})},change:function(t){this.form.category_id=this.category[t.detail.value].id},submit:function(){var t=0===this.id?"/video":"/video/"+this.id,e=0===this.id?"发布":"修改";this.$H.post(t,this.form,{token:!0}).then((function(t){uni.showToast({title:e+"成功",icon:"none"}),uni.navigateBack({delta:1})}))}}};e.default=c},"8c71":function(t,e,n){"use strict";n.r(e);var i=n("cb01"),a=n("0a3a");for(var r in a)"default"!==r&&function(t){n.d(e,t,(function(){return a[t]}))}(r);var c,o=n("f0c5"),u=Object(o["a"])(a["default"],i["b"],i["c"],!1,null,"0baa7a52",null,!1,i["a"],c);e["default"]=u.exports},"96b1":function(t,e,n){"use strict";n.r(e);var i=n("c243"),a=n("fbf5");for(var r in a)"default"!==r&&function(t){n.d(e,t,(function(){return a[t]}))}(r);var c,o=n("f0c5"),u=Object(o["a"])(a["default"],i["b"],i["c"],!1,null,"85da6446",null,!1,i["a"],c);e["default"]=u.exports},b96a:function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return i}));var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("v-uni-view",{staticClass:"bg-light position-relative",staticStyle:{height:"350rpx"},attrs:{"hover-class":"bg-hover-light"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.upload.apply(void 0,arguments)}}},[t.form.cover?n("v-uni-image",{staticStyle:{width:"750rpx",height:"350rpx"},attrs:{src:t.form.cover,mode:"aspectFill"}}):t._e(),n("v-uni-view",{staticClass:"position-absolute left-0 right-0 top-0 bottom-0 flex flex-column align-center justify-center",staticStyle:{"background-color":"rgba(255,255,255,0.2)"}},[t.form.cover?t._e():n("v-uni-text",{staticClass:"iconfont iconjia",staticStyle:{"font-size":"50rpx"}}),n("v-uni-text",{staticClass:"font text-muted"},[t._v("点击"+t._s(t.form.cover?"切换":"添加")+"封面图")])],1)],1),n("form-item",{attrs:{label:"标题"}},[n("v-uni-input",{staticClass:"w-100 pr-5",attrs:{type:"text",placeholder:"请填写视频标题","placeholder-class":"text-light-muted"},model:{value:t.form.title,callback:function(e){t.$set(t.form,"title",e)},expression:"form.title"}})],1),n("v-uni-picker",{attrs:{mode:"selector",range:t.range},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.change.apply(void 0,arguments)}}},[n("form-item",{attrs:{label:"分类",rightIcon:!0}},[n("v-uni-input",{staticClass:"w-100 pr-5",attrs:{type:"text",placeholder:"请填写视频标题","placeholder-class":"text-light-muted",disabled:!0},model:{value:t.categroyTitle,callback:function(e){t.categroyTitle=e},expression:"categroyTitle"}})],1)],1),n("form-item",{attrs:{label:"描述"}},[n("v-uni-textarea",{staticClass:"py-3",staticStyle:{width:"550rpx"},attrs:{placeholder:"请填写视频描述"},model:{value:t.form.desc,callback:function(e){t.$set(t.form,"desc",e)},expression:"form.desc"}})],1)],1)},r=[]},c243:function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return i}));var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"flex border-bottom border-light-secondary",staticStyle:{"min-height":"100rpx"}},[n("v-uni-view",{staticClass:"flex align-center justify-center font-md",staticStyle:{width:"120rpx",height:"100rpx"}},[t._v(t._s(t.label))]),n("v-uni-view",{staticClass:"flex-1 flex align-center"},[t._t("default")],2),t.rightIcon?n("v-uni-view",{staticClass:"flex align-center justify-center",staticStyle:{height:"100rpx",width:"80rpx"}},[n("v-uni-text",{staticClass:"iconfont iconjinru text-muted"})],1):t._e()],1)},r=[]},cb01:function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return i}));var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"py-3 rounded-circle bg-main flex align-center justify-center font-md text-white",attrs:{"hover-class":"bg-main-hover"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.$emit("click")}}},[t._t("default")],2)},r=[]},d4fa:function(t,e){},fbf5:function(t,e,n){"use strict";n.r(e);var i=n("13c5"),a=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);e["default"]=a.a}}]);