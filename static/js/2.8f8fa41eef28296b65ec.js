webpackJsonp([2],{AWOI:function(t,s){},GfWN:function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e={props:{item:Object}},i={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("li",[a("router-link",{attrs:{to:"/getOneProduct/"+t.item.newsid}},[a("div",{staticClass:"box2"},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.item.thumb,expression:"item.thumb"}],attrs:{alt:""}})]),t._v(" "),a("div",{staticClass:"box"},[a("p",[t._v("借款期限")]),t._v(" "),a("div",{staticClass:"details"},[a("div",{staticClass:"row-3"},[a("p",{staticClass:"light"},[t._v("额度（元)")]),t._v(" "),a("p",{staticClass:"col-red"},[t._v("1000-10000")])]),t._v(" "),a("div",{staticClass:"row-3"},[a("div",{staticClass:"center border-both"},[a("p",{staticClass:"light"},[t._v("借款期限")]),t._v(" "),a("p",{staticClass:"col-red"},[t._v("3-12个月")])])]),t._v(" "),a("div",{staticClass:"row-3"},[a("div",{staticClass:"center"},[a("p",{staticClass:"light"},[t._v("日利率")]),t._v(" "),a("p",{staticClass:"col-red"},[t._v("0.027%")])])])])])])],1)},staticRenderFns:[]};var r={components:{ClassifyItem:a("VU/8")(e,i,!1,function(t){a("AWOI")},"data-v-9c2de728",null).exports},props:{productCategoryList:Array}},c={render:function(){var t=this.$createElement,s=this._self._c||t;return s("ul",this._l(this.productCategoryList,function(t,a){return s("ClassifyItem",{key:a,attrs:{item:t}})}))},staticRenderFns:[]};var o={components:{ClassifyList:a("VU/8")(r,c,!1,function(t){a("HFel")},"data-v-02f4b5da",null).exports},data:function(){return{id:this.$route.params.id,productCategoryList:[]}},created:function(){this.getData()},methods:{getData:function(){var t=this;this.$axios.get("getProductCategory/"+this.$route.params.id,{}).then(function(s){200===s.data.code?t.productCategoryList=s.data.data:console.log("**********code is not 200 ***********")}).catch(function(s){t.code=404,console.log(s),console.log("**********code is 404 ***********")})},back:function(){this.$router.go(-1)}}},n={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",[s("div",{staticClass:"headline"},[this._v("精选专题\n    "),s("div",{staticClass:"goback",on:{click:this.back}},[s("img",{attrs:{src:"/static/img/back.png",alt:""}})])]),this._v(" "),s("ClassifyList",{attrs:{productCategoryList:this.productCategoryList}})],1)},staticRenderFns:[]};var l=a("VU/8")(o,n,!1,function(t){a("XAzQ")},"data-v-19f06e57",null);s.default=l.exports},HFel:function(t,s){},XAzQ:function(t,s){}});
//# sourceMappingURL=2.8f8fa41eef28296b65ec.js.map