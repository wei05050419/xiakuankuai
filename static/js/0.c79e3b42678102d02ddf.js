webpackJsonp([0],{"3H9D":function(t,e){},"58Z+":function(t,e){},DFF2:function(t,e){},E6eR:function(t,e){},GWkM:function(t,e){},"Hc+b":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s={props:{topList:Array}},r={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"broadcast"},[e("mt-swipe",{attrs:{auto:0}},this._l(this.topList,function(t,i){return e("mt-swipe-item",{key:i},[e("router-link",{attrs:{to:"/getOneProduct/"+t.link}},[e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.src,expression:"item.src"}],attrs:{alt:""}})])],1)}))],1)},staticRenderFns:[]};var a=i("VU/8")(s,r,!1,function(t){i("mdYe")},"data-v-30b69fa3",null).exports,n={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"divide"},[e("div",{staticClass:"slide"}),this._v(" "),e("p",[this._v(this._s(this.title))])])},staticRenderFns:[]};var c=i("VU/8")({props:{title:""}},n,!1,function(t){i("GWkM")},"data-v-202802fa",null).exports,o={props:{item:Object}},l={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("router-link",{attrs:{to:"/getOneProduct/"+t.item.newsid}},[i("div",{staticClass:"img-div"},[i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.item.thumb,expression:"item.thumb"}],attrs:{alt:""}})]),t._v(" "),i("p",[t._v(t._s(t.item.title))]),t._v(" "),i("p",{staticClass:"light"},[t._v(t._s(t.item.success_num))])])},staticRenderFns:[]};var d={components:{FirstItem:i("VU/8")(o,l,!1,function(t){i("58Z+")},"data-v-e4669604",null).exports},props:{firstList:Array}},u={render:function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",this._l(this.firstList,function(t,i){return e("FirstItem",{key:i,attrs:{item:t}})}))])},staticRenderFns:[]};var v=i("VU/8")(d,u,!1,function(t){i("NrmK")},"data-v-7415c418",null).exports,m={props:{item:Object}},f={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("router-link",{attrs:{to:"/getOneProduct/"+t.item.newsid}},[i("div",{staticClass:"img-div"},[i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.item.thumb,expression:"item.thumb"}],attrs:{alt:""}})]),t._v(" "),i("p",[t._v(t._s(t.item.title))]),t._v(" "),i("p",{staticClass:"light"},[t._v(t._s(t.item.success_num))])])},staticRenderFns:[]};var h={components:{SecondItem:i("VU/8")(m,f,!1,function(t){i("DFF2")},"data-v-7a4116d8",null).exports},props:{secondList:Array}},_={render:function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",this._l(this.secondList,function(t,i){return e("SecondItem",{key:i,attrs:{item:t}})}))])},staticRenderFns:[]};var p=i("VU/8")(h,_,!1,function(t){i("VFDh")},"data-v-59baf010",null).exports,g={props:{item:Object}},L={render:function(){var t=this.$createElement,e=this._self._c||t;return e("router-link",{attrs:{to:"/getProductCategory/"+this.item.link}},[e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:this.item.src,expression:"item.src"}],attrs:{alt:""}})])},staticRenderFns:[]};var y={components:{CategoryItem:i("VU/8")(g,L,!1,function(t){i("E6eR")},"data-v-2a5be352",null).exports},props:{categoryList:Array}},C={render:function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",this._l(this.categoryList,function(t,i){return e("CategoryItem",{key:i,attrs:{item:t}})}))])},staticRenderFns:[]};var x=i("VU/8")(y,C,!1,function(t){i("NTdE")},"data-v-2410a5ea",null).exports,F={props:{item:Object}},b={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("li",[i("router-link",{attrs:{to:"/getOneProduct/"+t.item.newsid}},[i("div",{staticClass:"box2"},[i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.item.thumb,expression:"item.thumb"}],attrs:{alt:""}})]),t._v(" "),i("div",{staticClass:"box"},[i("p",[t._v(t._s(t.item.title))]),t._v(" "),i("div",{staticClass:"details"},[i("div",{staticClass:"row-3"},[i("p",{staticClass:"light"},[t._v("额度（元)")]),t._v(" "),i("p",{staticClass:"col-red"},[t._v(t._s(t.item.price_min)+"-"+t._s(t.item.price_max))])]),t._v(" "),i("div",{staticClass:"row-3"},[i("div",{staticClass:"center border-both"},[i("p",{staticClass:"light"},[t._v("借款期限")]),t._v(" "),i("p",{staticClass:"col-red"},[t._v(t._s(t.item.date))])])]),t._v(" "),i("div",{staticClass:"row-3"},[i("div",{staticClass:"center"},[i("p",{staticClass:"light"},[t._v("日利率")]),t._v(" "),i("p",{staticClass:"col-red"},[t._v(t._s(t.item.interest))])])])])])])],1)},staticRenderFns:[]};var k={components:{ThirdItem2:i("VU/8")(F,b,!1,function(t){i("qNaL")},"data-v-389f2cff",null).exports},props:{thirdList:Array,addThirdList:Function},data:function(){return{pageVal:0,loading:!1}},methods:{loadMore:function(){var t=this;0===this.pageVal?this.pageVal++:(this.loading=!0,this.pageVal++,this.$axios.get("getPage/"+this.pageVal,{}).then(function(e){200===e.data.code?t.addThirdList(e.data.data):console.log("**********code is not found ***********")}).catch(function(e){if(e.response)switch(e.response.status){case 416:console.log(e.response.data.msg),t.loading=!0}else console.log("Error",e.message)}),this.loading=!1)}}},V={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ul",t._l(t.thirdList,function(e,s){return i("ThirdItem2",{directives:[{name:"infinite-scroll",rawName:"v-infinite-scroll",value:t.loadMore,expression:"loadMore"}],key:s,attrs:{item:e,"infinite-scroll-disabled":"loading","infinite-scroll-distance":"10"}})}))},staticRenderFns:[]};var w={components:{Top:a,Divide:c,FirstList:v,SecondList:p,CategoryList:x,ThirdList2:i("VU/8")(k,V,!1,function(t){i("m41i")},"data-v-3fb6caa0",null).exports},data:function(){return{first:"今日热门",second:"本周上新",category:"精选专题",third:"热门产品",topList:[],categoryList:[],firstList:[],secondList:[],thirdList:[]}},created:function(){this.getAllBanner(),this.getAllProduct()},methods:{getAllBanner:function(){var t=this;this.$axios.get("getAllBanner",{}).then(function(e){200===e.data.code?(t.topList=e.data.data.top.map(function(t){return{src:t.src,link:t.link}}),t.categoryList=e.data.data.category.map(function(t){return{src:t.src,link:t.link}})):console.log("**********code is not 200 ***********")}).catch(function(t){console.log(t)})},getAllProduct:function(){var t=this;this.$axios.get("getAllProduct",{}).then(function(e){if(200===e.data.code){var i=[];i=e.data.data.first;for(var s=0;s<i.length;s++)i[s].success_num/=1e4,i[s].success_num=i[s].success_num.toFixed(1)+"万人申请";t.firstList=i;var r=[];r=e.data.data.second;for(s=0;s<r.length;s++)r[s].success_num/=1e4,r[s].success_num=r[s].success_num.toFixed(1)+"万人申请";t.secondList=r,t.thirdList=e.data.data.third}else console.log("**********code is not 200 ***********")}).catch(function(t){console.log(t)})},addThirdList:function(t){this.thirdList=this.thirdList.concat(t)}}},E={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("Top",{attrs:{topList:t.topList}}),t._v(" "),i("Divide",{attrs:{title:t.first}}),t._v(" "),i("FirstList",{attrs:{firstList:t.firstList}}),t._v(" "),i("Divide",{attrs:{title:t.second}}),t._v(" "),i("SecondList",{attrs:{secondList:t.secondList}}),t._v(" "),i("Divide",{attrs:{title:t.category}}),t._v(" "),i("CategoryList",{attrs:{categoryList:t.categoryList}}),t._v(" "),i("Divide",{attrs:{title:t.third}}),t._v(" "),i("ThirdList2",{attrs:{thirdList:t.thirdList,addThirdList:t.addThirdList}})],1)},staticRenderFns:[]};var $=i("VU/8")(w,E,!1,function(t){i("3H9D")},"data-v-084500c5",null);e.default=$.exports},NTdE:function(t,e){},NrmK:function(t,e){},VFDh:function(t,e){},m41i:function(t,e){},mdYe:function(t,e){},qNaL:function(t,e){}});
//# sourceMappingURL=0.c79e3b42678102d02ddf.js.map