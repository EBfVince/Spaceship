(window.webpackJsonp=window.webpackJsonp||[]).push([[13,9],{475:function(t,n,e){var content=e(495);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(23).default)("8383740c",content,!0,{sourceMap:!1})},476:function(t,n,e){"use strict";e.r(n);var o=e(126),r=e(470),l={props:{inscription:{type:Boolean,default:!1}},data:function(){return{loading:!0}},computed:Object(o.c)({authUser:function(t){return t.auth.authUser}}),watch:{authUser:function(t){console.log("ok",t),null!==t&&this.openAppPage()}},mounted:function(){var t=e(471),n=t.auth.AuthUI.getInstance()||new t.auth.AuthUI(this.$fire.auth),o={Google:this.$fireModule.auth.GoogleAuthProvider.PROVIDER_ID,Email:this.$fireModule.auth.EmailAuthProvider.PROVIDER_ID},l=Object(r.desktop)()?"popup":"redirect",c={credentialHelper:t.auth.CredentialHelper.NONE,signInOptions:[o.Google,o.Email],signInFlow:l,tosUrl:!0===this.inscription?"/tos":void 0,privacyPolicyUrl:!0===this.inscription?"/privacy-policy":void 0,callbacks:{signInSuccessWithAuthResult:this.signInResult,signInFailure:this.signInError,uiShown:this.uiShown}};n.disableAutoSignIn(),this.authUser?this.openAppPage():n.start("#firebaseui-auth-container",c)},methods:{signInResult:function(t,n){return this.loading=!0,console.log("signInResult"),!1},signInError:function(t){console.error(t)},uiShown:function(){this.loading=!1,console.log("uiShown")},openAppPage:function(){this.$router.push({path:"/app"})}}},c=(e(473),e(93)),h=e(133),d=e.n(h),f=e(189),component=Object(c.a)(l,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("div",{attrs:{id:"firebaseui-auth-container"}}),t._v(" "),t.loading?e("v-progress-circular",{attrs:{indeterminate:"",color:"primary"}}):t._e()],1)}),[],!1,null,null,null);n.default=component.exports;d()(component,{VProgressCircular:f.a})},494:function(t,n,e){"use strict";e(475)},495:function(t,n,e){var o=e(22)(!1);o.push([t.i,"li{list-style-type:none}",""]),t.exports=o},506:function(t,n,e){"use strict";e.r(n);var o={name:"Login",components:{"yop-ui":e(476).default}},r=(e(494),e(93)),l=e(133),c=e.n(l),h=e(438),component=Object(r.a)(o,(function(){var t=this.$createElement,n=this._self._c||t;return n("v-container",[n("client-only",[n("yop-ui")],1)],1)}),[],!1,null,null,null);n.default=component.exports;c()(component,{VContainer:h.a})}}]);