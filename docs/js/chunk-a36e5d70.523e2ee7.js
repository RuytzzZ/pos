(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a36e5d70"],{"16c0":function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"goods"},[s("div",{ref:"menuWrapper",staticClass:"menu-wrapper"},[s("ul",t._l(t.item1,(function(e,i){return s("li",{key:e,staticClass:"menu-item",class:{current:t.currentIndexnum===i},on:{click:function(e){return t.selectMenu(i,e)}}},[s("span",{staticClass:"text border-1px"},[t._v(t._s(e))])])})),0)]),s("div",{ref:"foodsWrapper",staticClass:"foods-wrapper"},[s("ul",t._l(t.item1,(function(e){return s("li",{key:e,staticClass:"food-list food-list-hook"},[s("h1",{staticClass:"title"},[t._v(t._s(e)+"dd")]),s("ul",t._l(t.item2,(function(e){return s("li",{key:e,staticClass:"food-item border-1px"},[t._v(" "+t._s(e)+" ")])})),0)])})),0)])])},l=[],n=s("1fba"),r={data:function(){return{cleartime:null,leftclick:!1,listHeight:[],currentIndexnum:0,scrollY:0,item1:[1,2,3,4,5,6,7,8,9,11,22,33,44,55,66,77,88],item2:["a","b","c","d","e","f"]}},watch:{currentIndexnum:function(t){console.log("watch"),this.scroolmenuitem(t-3)}},created:function(){var t=this;this.$nextTick((function(){t._initScroll(),t._calulateHeight()}))},methods:{_initScroll:function(){var t=this;this.menuScroll=new n["a"](this.$refs.menuWrapper,{click:!0}),this.foodsScroll=new n["a"](this.$refs.foodsWrapper,{click:!0,probeType:3}),this.foodsScroll.on("scroll",(function(e){if(!t.leftclick){t.scrollY=Math.abs(Math.round(e.y));for(var s=0;s<t.listHeight.length;s++){var i=t.listHeight[s],l=t.listHeight[s+1];t.scrollY>=i&&t.scrollY<l&&(t.currentIndexnum=s)}}}))},_calulateHeight:function(){var t=this.$refs.foodsWrapper.getElementsByClassName("food-list-hook"),e=0;this.listHeight.push(e);for(var s=0;s<t.length;s++){var i=t[s];e+=i.clientHeight,this.listHeight.push(e)}},scroolmenuitem:function(t){var e=this.$refs.menuWrapper.getElementsByClassName("menu-item"),s=e[t];this.menuScroll.scrollToElement(s,300)},leftclickfalse:function(){var t=this;return setTimeout((function(){t.leftclick=!1}),600)},selectMenu:function(t,e){if(e._constructed){this.leftclick=!0,this.foodsScroll.stop(),this.currentIndexnum=t;var s=this.$refs.foodsWrapper.getElementsByClassName("food-list-hook"),i=s[t];this.foodsScroll.scrollToElement(i,300),clearTimeout(this.cleartime),console.log(this.cleartime),this.cleartime=this.leftclickfalse()}}}},o=r,c=(s("3be1"),s("2877")),a=Object(c["a"])(o,i,l,!1,null,"0f878882",null);e["default"]=a.exports},"3be1":function(t,e,s){"use strict";var i=s("fad1"),l=s.n(i);l.a},fad1:function(t,e,s){}}]);
//# sourceMappingURL=chunk-a36e5d70.523e2ee7.js.map