(function(e){function t(t){for(var c,i,a=t[0],l=t[1],u=t[2],b=0,d=[];b<a.length;b++)i=a[b],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&d.push(o[i][0]),o[i]=0;for(c in l)Object.prototype.hasOwnProperty.call(l,c)&&(e[c]=l[c]);s&&s(t);while(d.length)d.shift()();return r.push.apply(r,u||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],c=!0,a=1;a<n.length;a++){var l=n[a];0!==o[l]&&(c=!1)}c&&(r.splice(t--,1),e=i(i.s=n[0]))}return e}var c={},o={app:0},r=[];function i(t){if(c[t])return c[t].exports;var n=c[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=c,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)i.d(n,c,function(t){return e[t]}.bind(null,c));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],l=a.push.bind(a);a.push=t,a=a.slice();for(var u=0;u<a.length;u++)t(a[u]);var s=l;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"14aa":function(e){e.exports=JSON.parse('{"home":{"name":"홈","hidden":false,"path":"/","icon":"el-icon-s-home","children":[]},"history":{"name":"지난 회의 이력","hidden":false,"path":"/history","icon":"el-icon-s-order","children":[]}}')},2867:function(e,t,n){"use strict";n("f1e4")},"2c4b":function(e,t,n){"use strict";n("7af7")},"32bf":function(e,t,n){},"3a03":function(e,t,n){"use strict";n("c65e")},"3b30":function(e,t,n){},"48cb":function(e,t,n){"use strict";n("d224")},"56d7":function(e,t,n){"use strict";n.r(t);var c={};n.r(c),n.d(c,"getIsDesktopPlatform",(function(){return d})),n.d(c,"getMenus",(function(){return f})),n.d(c,"getActiveMenuIndex",(function(){return p}));var o={};n.r(o),n.d(o,"setPlatform",(function(){return j})),n.d(o,"setMenuActive",(function(){return O})),n.d(o,"setMenuActiveMenuName",(function(){return m}));var r={};n.r(r),n.d(r,"requestLogin",(function(){return h}));n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("159b"),n("b0c0");var i=n("7a23"),a=n("5502"),l=n("14aa");function u(){var e=window.navigator.userAgent,t=window.navigator.platform,n=["Macintosh","MacIntel","MacPPC","Mac68K"],c=["Win32","Win64","Windows","WinCE"],o=["iPhone","iPad","iPod"],r=null;return-1!==n.indexOf(t)||-1===o.indexOf(t)&&(-1!==c.indexOf(t)||!/Android/.test(e)&&(!(r||!/Linux/.test(t))||r))}var s=u(),b={isDesktopPlatform:s,activeMenu:"home",menus:l};n("b64b"),n("c740");function d(e){return e.isDesktopPlatform}function f(e){return e.menus}function p(e){var t=Object.keys(e.menus);return t.findIndex((function(t){return t===e.activeMenu}))}function j(e,t){e.isDesktopPlatform=t}function O(e,t){console.log("setMenuActive",e,t);var n=Object.keys(e.menus);e.activeMenu=n[t]}function m(e,t){e.activeMenu=t}var g=n("bc3a"),v=n.n(g);function h(e,t){var n=e.state;console.log("requestLogin",n,t);var c="/auth/login",o=t;return v.a.post(c,o)}var y={namespaced:!0,state:b,getters:c,mutations:o,actions:r},L=y,k=Object(a["a"])({modules:{root:L}}),w=n("3fd4"),x={ElementPlus:w["Hb"]};function M(e,t,n,c,o,r){var a=Object(i["L"])("Main");return Object(i["E"])(),Object(i["j"])(a)}function C(e,t,n,c,o,r){var a=Object(i["L"])("main-header"),l=Object(i["L"])("main-sidebar"),u=Object(i["L"])("el-aside"),s=Object(i["L"])("router-view"),b=Object(i["L"])("el-main"),d=Object(i["L"])("el-container"),f=Object(i["L"])("main-footer"),p=Object(i["L"])("login-dialog");return Object(i["E"])(),Object(i["j"])(i["b"],null,[Object(i["n"])(d,{class:"main-wrapper"},{default:Object(i["ab"])((function(){return[Object(i["n"])(a,{height:"70px",onOpenLoginDialog:r.onOpenLoginDialog},null,8,["onOpenLoginDialog"]),Object(i["n"])(d,{class:"main-container"},{default:Object(i["ab"])((function(){return[Object(i["n"])(u,{class:"hide-on-small",width:"240px"},{default:Object(i["ab"])((function(){return[Object(i["n"])(l,{width:"240px"})]})),_:1}),Object(i["n"])(b,null,{default:Object(i["ab"])((function(){return[Object(i["n"])(s)]})),_:1})]})),_:1}),Object(i["n"])(f,{height:"110px"})]})),_:1}),Object(i["n"])(p,{open:o.loginDialogOpen,onCloseLoginDialog:r.onCloseLoginDialog},null,8,["open","onCloseLoginDialog"])],64)}var I={class:"dialog-footer"},_=Object(i["m"])("로그인");function P(e,t,n,c,o,r){var a=Object(i["L"])("el-input"),l=Object(i["L"])("el-form-item"),u=Object(i["L"])("el-form"),s=Object(i["L"])("el-button"),b=Object(i["L"])("el-dialog");return Object(i["E"])(),Object(i["j"])(b,{"custom-class":"login-dialog",title:"로그인",modelValue:c.state.dialogVisible,"onUpdate:modelValue":t[3]||(t[3]=function(e){return c.state.dialogVisible=e}),onClose:c.handleClose},{footer:Object(i["ab"])((function(){return[Object(i["n"])("span",I,[Object(i["n"])(s,{type:"primary",onClick:c.clickLogin},{default:Object(i["ab"])((function(){return[_]})),_:1},8,["onClick"])])]})),default:Object(i["ab"])((function(){return[Object(i["n"])(u,{model:c.state.form,rules:c.state.rules,ref:"loginForm","label-position":c.state.form.align},{default:Object(i["ab"])((function(){return[Object(i["n"])(l,{prop:"id",label:"아이디","label-width":c.state.formLabelWidth},{default:Object(i["ab"])((function(){return[Object(i["n"])(a,{modelValue:c.state.form.id,"onUpdate:modelValue":t[1]||(t[1]=function(e){return c.state.form.id=e}),autocomplete:"off"},null,8,["modelValue"])]})),_:1},8,["label-width"]),Object(i["n"])(l,{prop:"password",label:"비밀번호","label-width":c.state.formLabelWidth},{default:Object(i["ab"])((function(){return[Object(i["n"])(a,{modelValue:c.state.form.password,"onUpdate:modelValue":t[2]||(t[2]=function(e){return c.state.form.password=e}),autocomplete:"off","show-password":""},null,8,["modelValue"])]})),_:1},8,["label-width"])]})),_:1},8,["model","rules","label-position"])]})),_:1},8,["modelValue","onClose"])}var S={name:"login-dialog",props:{open:{type:Boolean,default:!1}},setup:function(e,t){var n=t.emit,c=Object(a["b"])(),o=Object(i["H"])(null),r=Object(i["G"])({form:{id:"",password:"",align:"left"},rules:{id:[{required:!0,message:"Please input ID",trigger:"blur"}],password:[{required:!0,message:"Please input password",trigger:"blur"}]},dialogVisible:Object(i["h"])((function(){return e.open})),formLabelWidth:"120px"});Object(i["B"])((function(){}));var l=function(){o.value.validate((function(e){e?(console.log("submit"),c.dispatch("root/requestLogin",{id:r.form.id,password:r.form.password}).then((function(e){alert("accessToken: "+e.data.accessToken)})).catch((function(e){alert(e)}))):alert("Validate error!")}))},u=function(){r.form.id="",r.form.password="",n("closeLoginDialog")};return{loginForm:o,state:r,clickLogin:l,handleClose:u}}},E=(n("2c4b"),n("d959")),A=n.n(E);const D=A()(S,[["render",P]]);var V=D,G=(n("d3b7"),n("25f0"),{class:"hide-on-small"}),q=Object(i["n"])("div",{class:"ic ic-logo"},null,-1),W={class:"tool-wrapper"},H={class:"search-field"},J={class:"button-wrapper"},U=Object(i["m"])("회원가입"),B=Object(i["m"])("로그인"),N={class:"hide-on-big"},T=Object(i["n"])("i",{class:"el-icon-menu"},null,-1),F=Object(i["n"])("div",{class:"ic ic-logo"},null,-1),R=Object(i["n"])("div",{class:"menu-icon-wrapper"},[Object(i["n"])("i",{class:"el-icon-search"})],-1),z={key:0,class:"mobile-sidebar-wrapper"},K={class:"mobile-sidebar"},Q={class:"mobile-sidebar-tool-wrapper"},X=Object(i["n"])("div",{class:"logo-wrapper"},[Object(i["n"])("div",{class:"ic ic-logo"})],-1),Y=Object(i["m"])("로그인"),Z=Object(i["m"])("회원가입");function $(e,t,n,c,o,r){var a=Object(i["L"])("el-input"),l=Object(i["L"])("el-button"),u=Object(i["L"])("el-menu-item"),s=Object(i["L"])("el-menu"),b=Object(i["L"])("el-row");return Object(i["E"])(),Object(i["j"])(b,{class:"main-header",gutter:10,style:{height:n.height}},{default:Object(i["ab"])((function(){return[Object(i["n"])("div",G,[Object(i["n"])("div",{class:"logo-wrapper",onClick:t[1]||(t[1]=function(){return c.clickLogo&&c.clickLogo.apply(c,arguments)})},[q]),Object(i["n"])("div",W,[Object(i["n"])("div",H,[Object(i["n"])(a,{placeholder:"검색","prefix-icon":"el-icon-search",modelValue:c.state.searchValue,"onUpdate:modelValue":t[2]||(t[2]=function(e){return c.state.searchValue=e})},null,8,["modelValue"])]),Object(i["n"])("div",J,[Object(i["n"])(l,null,{default:Object(i["ab"])((function(){return[U]})),_:1}),Object(i["n"])(l,{type:"primary",onClick:c.clickLogin},{default:Object(i["ab"])((function(){return[B]})),_:1},8,["onClick"])])])]),Object(i["n"])("div",N,[Object(i["n"])("div",{class:"menu-icon-wrapper",onClick:t[3]||(t[3]=function(){return c.changeCollapse&&c.changeCollapse.apply(c,arguments)})},[T]),Object(i["n"])("div",{class:"logo-wrapper",onClick:t[4]||(t[4]=function(){return c.clickLogo&&c.clickLogo.apply(c,arguments)})},[F]),R,c.state.isCollapse?Object(i["k"])("",!0):(Object(i["E"])(),Object(i["j"])("div",z,[Object(i["n"])("div",K,[Object(i["n"])("div",Q,[X,Object(i["n"])(l,{type:"primary",class:"mobile-sidebar-btn login-btn",onClick:c.clickLogin},{default:Object(i["ab"])((function(){return[Y]})),_:1},8,["onClick"]),Object(i["n"])(l,{class:"mobile-sidebar-btn register-btn"},{default:Object(i["ab"])((function(){return[Z]})),_:1})]),Object(i["n"])(s,{"default-active":String(c.state.activeIndex),"active-text-color":"#ffd04b",class:"el-menu-vertical-demo",onSelect:c.menuSelect},{default:Object(i["ab"])((function(){return[(Object(i["E"])(!0),Object(i["j"])(i["b"],null,Object(i["J"])(c.state.menuItems,(function(e,t){return Object(i["E"])(),Object(i["j"])(u,{key:t,index:t.toString()},{default:Object(i["ab"])((function(){return[e.icon?(Object(i["E"])(),Object(i["j"])("i",{key:0,class:["ic",e.icon]},null,2)):Object(i["k"])("",!0),Object(i["n"])("span",null,Object(i["P"])(e.title),1)]})),_:2},1032,["index"])})),128))]})),_:1},8,["default-active","onSelect"])]),Object(i["n"])("div",{class:"mobile-sidebar-backdrop",onClick:t[5]||(t[5]=function(){return c.changeCollapse&&c.changeCollapse.apply(c,arguments)})})]))])]})),_:1},8,["style"])}var ee=n("6c02"),te={name:"main-header",props:{height:{type:String,default:"70px"}},setup:function(e,t){var n=t.emit,c=Object(a["b"])(),o=Object(ee["d"])(),r=Object(i["G"])({searchValue:null,isCollapse:!0,menuItems:Object(i["h"])((function(){for(var e=c.getters["root/getMenus"],t=Object.keys(e),n=[],o=0;o<t.length;++o){var r={};r.icon=e[t[o]].icon,r.title=e[t[o]].name,n.push(r)}return n})),activeIndex:Object(i["h"])((function(){return c.getters["root/getActiveMenuIndex"]}))});-1===r.activeIndex&&(r.activeIndex=0,c.commit("root/setMenuActive",0));var l=function(e){c.commit("root/setMenuActive",e);var t=c.getters["root/getMenus"],n=Object.keys(t);o.push({name:n[e]})},u=function(){c.commit("root/setMenuActive",0);var e=c.getters["root/getMenus"],t=Object.keys(e);o.push({name:t[0]})},s=function(){n("openLoginDialog")},b=function(){r.isCollapse=!r.isCollapse};return{state:r,menuSelect:l,clickLogo:u,clickLogin:s,changeCollapse:b}}};n("3a03");const ne=A()(te,[["render",$]]);var ce=ne,oe={class:"hide-on-small"};function re(e,t,n,c,o,r){var a=Object(i["L"])("el-menu-item"),l=Object(i["L"])("el-menu"),u=Object(i["L"])("el-row");return Object(i["E"])(),Object(i["j"])(u,{class:"main-sidebar",gutter:10,style:{width:n.width}},{default:Object(i["ab"])((function(){return[Object(i["n"])("div",oe,[Object(i["n"])(l,{"default-active":String(c.state.activeIndex),"active-text-color":"#ffd04b",class:"el-menu-vertical-demo",onSelect:c.menuSelect},{default:Object(i["ab"])((function(){return[(Object(i["E"])(!0),Object(i["j"])(i["b"],null,Object(i["J"])(c.state.menuItems,(function(e,t){return Object(i["E"])(),Object(i["j"])(a,{key:t,index:t.toString()},{default:Object(i["ab"])((function(){return[e.icon?(Object(i["E"])(),Object(i["j"])("i",{key:0,class:["ic",e.icon]},null,2)):Object(i["k"])("",!0),Object(i["n"])("span",null,Object(i["P"])(e.title),1)]})),_:2},1032,["index"])})),128))]})),_:1},8,["default-active","onSelect"])])]})),_:1},8,["style"])}var ie={name:"main-header",props:{width:{type:String,default:"240px"}},setup:function(){var e=Object(a["b"])(),t=Object(ee["d"])(),n=Object(i["G"])({searchValue:null,menuItems:Object(i["h"])((function(){for(var t=e.getters["root/getMenus"],n=Object.keys(t),c=[],o=0;o<n.length;++o){var r={};r.icon=t[n[o]].icon,r.title=t[n[o]].name,c.push(r)}return c})),activeIndex:Object(i["h"])((function(){return e.getters["root/getActiveMenuIndex"]}))});-1===n.activeIndex&&(n.activeIndex=0,e.commit("root/setMenuActive",0));var c=function(n){e.commit("root/setMenuActive",n);var c=e.getters["root/getMenus"],o=Object.keys(c);t.push({name:o[n]})};return{state:n,menuSelect:c}}};n("958b");const ae=A()(ie,[["render",re]]);var le=ae,ue=Object(i["n"])("div",{class:"contents"}," Copyright © SAMSUNG All Rights Reserved. ",-1);function se(e,t,n,c,o,r){var a=Object(i["L"])("el-row");return Object(i["E"])(),Object(i["j"])(a,{class:"main-footer",gutter:10},{default:Object(i["ab"])((function(){return[ue]})),_:1})}var be={name:"main-footer",props:{height:{type:String,default:"110px"}},setup:function(){var e=Object(i["G"])({});return{state:e}}};n("48cb");const de=A()(be,[["render",se]]);var fe=de,pe={name:"Main",components:{MainHeader:ce,MainSidebar:le,MainFooter:fe,LoginDialog:V},data:function(){return{loginDialogOpen:!1}},methods:{onOpenLoginDialog:function(){this.loginDialogOpen=!0},onCloseLoginDialog:function(){this.loginDialogOpen=!1}}};n("2867");const je=A()(pe,[["render",C]]);var Oe=je,me={name:"App",components:{Main:Oe},data:function(){return{}}};const ge=A()(me,[["render",M]]);var ve=ge,he=n("2106"),ye=n.n(he),Le="/api/v1",ke="application/json";v.a.defaults.baseURL=Le,v.a.defaults.headers["Content-Type"]=ke;var we={VueAxios:ye.a,axios:v.a},xe=n("47e2"),Me=Object(xe["a"])({}),Ce={i18n:Me},Ie=(n("d81d"),n("4de4"),{class:"infinite-list",style:{overflow:"auto"}});function _e(e,t,n,c,o,r){var a=Object(i["L"])("conference"),l=Object(i["M"])("infinite-scroll");return Object(i["bb"])((Object(i["E"])(),Object(i["j"])("ul",Ie,[(Object(i["E"])(!0),Object(i["j"])(i["b"],null,Object(i["J"])(c.state.count,(function(e){return Object(i["E"])(),Object(i["j"])("li",{onClick:function(t){return c.clickConference(e)},class:"infinite-list-item",key:e},[Object(i["n"])(a)],8,["onClick"])})),128))],512)),[[l,c.load]])}var Pe={class:"image-wrapper"},Se={style:{"text-align":"left",padding:"14px"}},Ee={class:"title"},Ae={class:"bottom"};function De(e,t,n,c,o,r){var a=Object(i["L"])("el-skeleton-item"),l=Object(i["L"])("el-skeleton"),u=Object(i["L"])("el-card");return Object(i["E"])(),Object(i["j"])(u,{"body-style":{padding:"0px"}},{default:Object(i["ab"])((function(){return[Object(i["n"])("div",Pe,[Object(i["n"])(l,{style:{width:"100%"}},{template:Object(i["ab"])((function(){return[Object(i["n"])(a,{variant:"image",style:{width:"100%",height:"190px"}})]})),_:1})]),Object(i["n"])("div",Se,[Object(i["n"])("span",Ee,Object(i["P"])(n.title),1),Object(i["n"])("div",Ae,[Object(i["n"])("span",null,Object(i["P"])(n.desc),1)])])]})),_:1})}var Ve={name:"Home",props:{title:{type:String,default:"제목"},desc:{type:String,default:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}},setup:function(){}};n("7694");const Ge=A()(Ve,[["render",De]]);var qe=Ge,We={name:"Home",components:{Conference:qe},setup:function(){var e=Object(ee["d"])(),t=Object(i["G"])({count:12}),n=function(){t.count+=4},c=function(t){e.push({name:"conference-detail",params:{conferenceId:t}})};return{state:t,load:n,clickConference:c}}};n("b2c1");const He=A()(We,[["render",_e]]);var Je=He;function Ue(e,t,n,c,o,r){return Object(i["P"])(e.$route.params.conferenceId+"번 방 상세 보기 페이지")}var Be={name:"conference-detail",setup:function(){var e=Object(ee["c"])(),t=Object(a["b"])(),n=Object(i["G"])({conferenceId:""});return Object(i["B"])((function(){n.conferenceId=e.params.conferenceId,t.commit("root/setMenuActiveMenuName","home")})),Object(i["C"])((function(){n.conferenceId=""})),{state:n}}};const Ne=A()(Be,[["render",Ue]]);var Te=Ne,Fe=Object(i["m"])(" 지난 회의 이력 페이지 ");function Re(e,t,n,c,o,r){var a=Object(i["L"])("el-container");return Object(i["E"])(),Object(i["j"])(a,null,{default:Object(i["ab"])((function(){return[Fe]})),_:1})}var ze={name:"History",setup:function(){var e=Object(a["b"])();Object(i["B"])((function(){e.commit("root/setMenuActiveMenuName","history")}))}};const Ke=A()(ze,[["render",Re]]);var Qe=Ke,Xe=n("14aa");function Ye(){var e=Object.keys(Xe).map((function(e){return"home"===e?{path:Xe[e].path,name:e,component:Je}:"history"===e?{path:Xe[e].path,name:e,component:Qe}:null}));return e=e.filter((function(e){return e})),e.push({path:"/conferences/:conferenceId",name:"conference-detail",component:Te}),e}var Ze=Ye(),$e=Object(ee["a"])({history:Object(ee["b"])(),routes:Ze});$e.afterEach((function(e){console.log(e)}));var et=$e,tt=(n("0dd1"),[w["a"],w["b"],w["c"],w["d"],w["e"],w["f"],w["g"],w["h"],w["i"],w["j"],w["k"],w["l"],w["m"],w["n"],w["o"],w["p"],w["q"],w["r"],w["s"],w["t"],w["u"],w["v"],w["w"],w["x"],w["y"],w["z"],w["A"],w["B"],w["C"],w["D"],w["E"],w["F"],w["G"],w["H"],w["I"],w["J"],w["K"],w["L"],w["N"],w["O"],w["P"],w["R"],w["S"],w["T"],w["U"],w["Y"],w["Z"],w["ab"],w["bb"],w["cb"],w["db"],w["eb"],w["fb"],w["gb"],w["hb"],w["ib"],w["jb"],w["kb"],w["lb"],w["mb"],w["nb"],w["ob"],w["pb"],w["qb"],w["rb"],w["sb"],w["tb"],w["ub"],w["vb"],w["wb"],w["xb"],w["yb"],w["zb"],w["Ab"],w["Bb"],w["Cb"],w["Db"],w["Eb"],w["Fb"],w["Gb"]]),nt=[w["M"],w["Q"],w["V"],w["W"],w["X"]],ct=Object(i["i"])({render:function(){return Object(i["q"])(ve)}});ct.use(x),ct.use(we,we),ct.use(k),ct.use(Ce),ct.use(et),tt.forEach((function(e){ct.component(e.name,e)})),nt.forEach((function(e){ct.use(e)})),ct.mount("#app")},"6aee":function(e,t,n){},7694:function(e,t,n){"use strict";n("32bf")},"7af7":function(e,t,n){},"958b":function(e,t,n){"use strict";n("3b30")},b2c1:function(e,t,n){"use strict";n("6aee")},c65e:function(e,t,n){},d224:function(e,t,n){},f1e4:function(e,t,n){}});
//# sourceMappingURL=app.20aae0ff.js.map