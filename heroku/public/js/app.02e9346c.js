(function(e){function t(t){for(var r,o,c=t[0],i=t[1],s=t[2],l=0,f=[];l<c.length;l++)o=c[l],a[o]&&f.push(a[o][0]),a[o]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);p&&p(t);while(f.length)f.shift()();return u.push.apply(u,s||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],r=!0,o=1;o<n.length;o++){var c=n[o];0!==a[c]&&(r=!1)}r&&(u.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={app:0},a={app:0},u=[];function c(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-20f6ba20":"145ceba6","chunk-2d0b3a2b":"d49ee4a2","chunk-61d20384":"23558d49","chunk-f222cca0":"6446997a"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-20f6ba20":1,"chunk-61d20384":1,"chunk-f222cca0":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise(function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-20f6ba20":"80739fa2","chunk-2d0b3a2b":"31d6cfe0","chunk-61d20384":"44a41c24","chunk-f222cca0":"33148958"}[e]+".css",o=i.p+r,a=document.getElementsByTagName("link"),u=0;u<a.length;u++){var c=a[u],s=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(s===r||s===o))return t()}var l=document.getElementsByTagName("style");for(u=0;u<l.length;u++){c=l[u],s=c.getAttribute("data-href");if(s===r||s===o)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||o,a=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");a.request=r,n(a)},f.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(f)}).then(function(){o[e]=0}));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var u=new Promise(function(t,n){r=a[e]=[t,n]});t.push(r[2]=u);var s,l=document.getElementsByTagName("head")[0],f=document.createElement("script");f.charset="utf-8",f.timeout=120,i.nc&&f.setAttribute("nonce",i.nc),f.src=c(e),s=function(t){f.onerror=f.onload=null,clearTimeout(p);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src,u=new Error("Loading chunk "+e+" failed.\n("+r+": "+o+")");u.type=r,u.request=o,n[1](u)}a[e]=void 0}};var p=setTimeout(function(){s({type:"timeout",target:f})},12e4);f.onerror=f.onload=s,l.appendChild(f)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var f=0;f<s.length;f++)t(s[f]);var p=l;u.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0957":function(e,t,n){},1914:function(e,t,n){},"1a4b":function(e,t,n){"use strict";var r=n("0957"),o=n.n(r);o.a},"21bb":function(e,t,n){"use strict";var r=n("1914"),o=n.n(r);o.a},2856:function(e,t,n){},"42e4":function(e,t,n){"use strict";var r=n("725e"),o=n.n(r);o.a},"56d7":function(e,t,n){"use strict";n.r(t);var r={};n.r(r),n.d(r,"logout",function(){return z}),n.d(r,"signIn",function(){return Q}),n.d(r,"signUp",function(){return X});var o={};n.r(o),n.d(o,"getFullname",function(){return ne}),n.d(o,"getAvatar",function(){return re}),n.d(o,"getIsStudent",function(){return oe});n("ac6a"),n("cadf"),n("551c"),n("097d");var a=n("2b0e"),u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},c=[],i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"notification-container"},[n("div",{staticClass:"notification-list"},[n("notification"),n("notification",{attrs:{type:"success"}})],1)])},s=[],l=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},f=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"notification"},[n("p",[e._v("NOTIFICATION")])])}],p=n("2877"),h={},v=Object(p["a"])(h,l,f,!1,null,null,null);v.options.__file="Notification.vue";var d=v.exports,g={components:{Notification:d}},b=g,m=(n("1a4b"),Object(p["a"])(b,i,s,!1,null,null,null));m.options.__file="NotificationContainer.vue";var _=m.exports,k={components:{NotificationContainer:_}},E=k,j=(n("5c0b"),Object(p["a"])(E,u,c,!1,null,null,null));j.options.__file="App.vue";var w=j.exports,S=n("8c4f"),y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"})},N=[],O=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hello"},[n("h1",[e._v(e._s(e.msg))]),e._m(0),n("h3",[e._v("Installed CLI Plugins")]),e._m(1),n("h3",[e._v("Essential Links")]),e._m(2),n("h3",[e._v("Ecosystem")]),e._m(3)])},C=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("\n    For guide and recipes on how to configure / customize this project,"),n("br"),e._v("\n    check out the\n    "),n("a",{attrs:{href:"https://cli.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-cli documentation")]),e._v(".\n  ")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",[n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel",target:"_blank",rel:"noopener"}},[e._v("babel")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa",target:"_blank",rel:"noopener"}},[e._v("pwa")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-unit-jest",target:"_blank",rel:"noopener"}},[e._v("unit-jest")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-e2e-nightwatch",target:"_blank",rel:"noopener"}},[e._v("e2e-nightwatch")])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",[n("li",[n("a",{attrs:{href:"https://vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Core Docs")])]),n("li",[n("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Forum")])]),n("li",[n("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Community Chat")])]),n("li",[n("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank",rel:"noopener"}},[e._v("Twitter")])]),n("li",[n("a",{attrs:{href:"https://news.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("News")])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",[n("li",[n("a",{attrs:{href:"https://router.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-router")])]),n("li",[n("a",{attrs:{href:"https://vuex.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vuex")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-devtools#vue-devtools",target:"_blank",rel:"noopener"}},[e._v("vue-devtools")])]),n("li",[n("a",{attrs:{href:"https://vue-loader.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-loader")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank",rel:"noopener"}},[e._v("awesome-vue")])])])}],I={name:"HelloWorld",props:{msg:String}},x=I,L=(n("42e4"),Object(p["a"])(x,O,C,!1,null,"09481d1e",null));L.options.__file="HelloWorld.vue";var A=L.exports,P={name:"home",components:{HelloWorld:A},methods:{onTap:function(){console.log("TAP")}}},D=P,T=(n("21bb"),Object(p["a"])(D,y,N,!1,null,null,null));T.options.__file="Home.vue";T.exports;a["a"].use(S["a"]);var F=[{path:"/",name:"index",component:function(){return n.e("chunk-61d20384").then(n.bind(null,"b831"))}},{path:"/dashboard",component:function(){return n.e("chunk-20f6ba20").then(n.bind(null,"4129"))},children:[{path:"",name:"dashboard",component:function(){return n.e("chunk-f222cca0").then(n.bind(null,"6c12"))}},{path:"grades",component:function(){return n.e("chunk-2d0b3a2b").then(n.bind(null,"28e4"))}}]}],G=new S["a"]({mode:"history",base:"/",routes:F}),U=G,$=n("2f62"),R=(n("96cf"),n("3040")),B=n("bc3a"),H=n.n(B),M={SUCCESS:"[LOGIN] SUCCESS",FAILED:"[LOGIN] FAILED",PENDING:"[LOGIN] PENDING"},q={PENDING:"[LOGOUT] PENDING",SUCCESS:"[LOGOUT] SUCCESS",FAILED:"[LOGOUT] FAILED"},W="http://localhost:7000",J="".concat(W,"/auth");function z(e){return K.apply(this,arguments)}function K(){return K=Object(R["a"])(regeneratorRuntime.mark(function e(t){var n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,n(q.PENDING),e.prev=2,n(q.SUCCESS),e.abrupt("return",!0);case 7:return e.prev=7,e.t0=e["catch"](2),n(q.FAILED),e.abrupt("return",!1);case 11:case"end":return e.stop()}},e,this,[[2,7]])})),K.apply(this,arguments)}function Q(e,t){return V.apply(this,arguments)}function V(){return V=Object(R["a"])(regeneratorRuntime.mark(function e(t,n){var r,o,a;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=t.commit,r(M.PENDING),e.prev=2,e.next=5,H.a.post("".concat(J,"/signin"),n);case 5:o=e.sent,a=o.data,r(M.SUCCESS,a),e.next=14;break;case 10:return e.prev=10,e.t0=e["catch"](2),r(M.FAILED),e.abrupt("return",e.t0.response);case 14:case"end":return e.stop()}},e,this,[[2,10]])})),V.apply(this,arguments)}function X(e,t){return Y.apply(this,arguments)}function Y(){return Y=Object(R["a"])(regeneratorRuntime.mark(function e(t,n){var r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t.commit,e.prev=1,e.next=4,H.a.post("".concat(J,"/signup"),n);case 4:r=e.sent,console.log(r),e.next=12;break;case 8:return e.prev=8,e.t0=e["catch"](1),console.log(e.t0.response),e.abrupt("return",e.t0.response.data);case 12:case"end":return e.stop()}},e,this,[[1,8]])})),Y.apply(this,arguments)}var Z,ee=n("a322"),te=(Z={},Object(ee["a"])(Z,M.PENDING,function(e){console.log("PENDING")}),Object(ee["a"])(Z,M.SUCCESS,function(e,t){console.log("SUCESS"),localStorage.setItem("token",t.token),console.log(t),e.user=t.user,e.isLoggedIn=!0}),Object(ee["a"])(Z,M.FAILED,function(e){console.log("FAILED")}),Object(ee["a"])(Z,q.PENDING,function(e){}),Object(ee["a"])(Z,q.SUCCESS,function(e){e.user=null,e.isLoggedIn=!1,localStorage.removeItem("token")}),Object(ee["a"])(Z,q.FAILED,function(e){}),Z);function ne(e){if(console.log(e.user),e.user)return"".concat(e.user.firstName," ").concat(e.user.lastName)}function re(e){if(e.user)return e.user.avatar}function oe(e){if(e.user)return e.user.isStudent}a["a"].use($["a"]);var ae=new $["a"].Store({state:{user:null,isLoggedIn:!1},mutations:te,actions:r,getters:o}),ue=n("9483");Object(ue["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},cached:function(){console.log("Content has been cached for offline use.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var ce=n("d2bb"),ie=n.n(ce),se=n("8055"),le=n.n(se),fe=n("3a81"),pe=n("7bb1"),he=n("ad3d"),ve=n("ecee"),de=n("c074"),ge=n("b702"),be=[de["b"],de["c"],de["d"],de["f"],de["h"],de["e"],de["a"],de["g"],ge["c"],ge["a"],ge["b"]];be.forEach(function(e){return ve["c"].add(e)}),a["a"].config.productionTip=!1,a["a"].use(ie.a,le()("http://localhost:7001"),ae),a["a"].use(fe["a"]),a["a"].use(pe["a"]),a["a"].component("f-icon",he["a"]),new a["a"]({router:U,store:ae,render:function(e){return e(w)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var r=n("2856"),o=n.n(r);o.a},6:function(e,t){},"725e":function(e,t,n){}});
//# sourceMappingURL=app.02e9346c.js.map