(window.webpackJsonp=window.webpackJsonp||[]).push([[9,18,19],{446:function(n,t){function e(n){var t=new Error("Cannot find module '"+n+"'");throw t.code="MODULE_NOT_FOUND",t}e.keys=function(){return[]},e.resolve=e,n.exports=e,e.id=446},477:function(n,t,e){"use strict";e.r(t);var o=e(126),r=e(471),l={props:{inscription:{type:Boolean,default:!1}},data:function(){return{loading:!0}},computed:Object(o.c)({authUser:function(n){return n.auth.authUser}}),watch:{authUser:function(n){console.log("ok",n),null!==n&&this.openAppPage()}},mounted:function(){var n=e(472),t=n.auth.AuthUI.getInstance()||new n.auth.AuthUI(this.$fire.auth),o={Google:this.$fireModule.auth.GoogleAuthProvider.PROVIDER_ID,Email:this.$fireModule.auth.EmailAuthProvider.PROVIDER_ID},l=Object(r.desktop)()?"popup":"redirect",c={credentialHelper:n.auth.CredentialHelper.NONE,signInOptions:[o.Google,o.Email],signInFlow:l,tosUrl:!0===this.inscription?"/tos":void 0,privacyPolicyUrl:!0===this.inscription?"/privacy-policy":void 0,callbacks:{signInSuccessWithAuthResult:this.signInResult,signInFailure:this.signInError,uiShown:this.uiShown}};t.disableAutoSignIn(),this.authUser?this.openAppPage():t.start("#firebaseui-auth-container",c)},methods:{signInResult:function(n,t){return this.loading=!0,console.log("signInResult"),!1},signInError:function(n){console.error(n)},uiShown:function(){this.loading=!1,console.log("uiShown")},openAppPage:function(){this.$router.push({path:"/app"})}}},c=(e(474),e(93)),h=e(133),d=e.n(h),f=e(189),component=Object(c.a)(l,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",[e("div",{attrs:{id:"firebaseui-auth-container"}}),n._v(" "),n.loading?e("v-progress-circular",{attrs:{indeterminate:"",color:"primary"}}):n._e()],1)}),[],!1,null,null,null);t.default=component.exports;d()(component,{VProgressCircular:f.a})}}]);