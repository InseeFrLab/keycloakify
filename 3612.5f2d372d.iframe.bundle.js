"use strict";(self.webpackChunkkeycloakify=self.webpackChunkkeycloakify||[]).push([[3612],{"./dist/lib/useGetClassName.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{a:()=>createUseClassName});var _tools_clsx__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./dist/tools/clsx.js"),_tools_useConstCallback__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./dist/tools/useConstCallback.js");function createUseClassName(params){var defaultClasses=params.defaultClasses;return{useGetClassName:function useGetClassName(params){var classes=params.classes;return{getClassName:(0,_tools_useConstCallback__WEBPACK_IMPORTED_MODULE_1__.O)((function(classKey){return(0,_tools_clsx__WEBPACK_IMPORTED_MODULE_0__.W)(classKey,defaultClasses[classKey],null==classes?void 0:classes[classKey])}))}}}}},"./dist/login/lib/useGetClassName.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{v:()=>useGetClassName});var useGetClassName=(0,__webpack_require__("./dist/lib/useGetClassName.js").a)({defaultClasses:{kcBodyClass:void 0,kcHtmlClass:"login-pf",kcLoginClass:"login-pf-page",kcContentWrapperClass:"row",kcHeaderClass:"login-pf-page-header",kcHeaderWrapperClass:void 0,kcFormCardClass:"card-pf",kcFormCardAccountClass:"login-pf-accounts",kcFormSocialAccountClass:"login-pf-social-section",kcFormSocialAccountContentClass:"col-xs-12 col-sm-6",kcFormHeaderClass:"login-pf-header",kcLocaleWrapperClass:void 0,kcFeedbackErrorIcon:"pficon pficon-error-circle-o",kcFeedbackWarningIcon:"pficon pficon-warning-triangle-o",kcFeedbackSuccessIcon:"pficon pficon-ok",kcFeedbackInfoIcon:"pficon pficon-info",kcResetFlowIcon:"pficon pficon-arrow fa-2x",kcFormGroupClass:"form-group",kcLabelWrapperClass:"col-xs-12 col-sm-12 col-md-12 col-lg-12",kcSignUpClass:"login-pf-signup",kcInfoAreaWrapperClass:void 0,kcLogoClass:"login-pf-brand",kcContainerClass:"container-fluid",kcContentClass:"col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 col-lg-6 col-lg-offset-3",kcFeedbackAreaClass:"col-md-12",kcLocaleClass:"col-xs-12 col-sm-1",kcAlertIconClasserror:"pficon pficon-error-circle-o",kcFormAreaClass:"col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2 col-lg-8 col-lg-offset-2",kcFormSocialAccountListClass:"login-pf-social list-unstyled login-pf-social-all",kcFormSocialAccountDoubleListClass:"login-pf-social-double-col",kcFormSocialAccountListLinkClass:"login-pf-social-link",kcWebAuthnKeyIcon:"pficon pficon-key",kcWebAuthnDefaultIcon:"pficon pficon-key",kcFormClass:"form-horizontal",kcFormGroupErrorClass:"has-error",kcLabelClass:"control-label",kcInputClass:"form-control",kcInputErrorMessageClass:"pf-c-form__helper-text pf-m-error required kc-feedback-text",kcInputWrapperClass:"col-xs-12 col-sm-12 col-md-12 col-lg-12",kcFormButtonsWrapperClass:void 0,kcFormOptionsClass:"col-xs-12 col-sm-12 col-md-12 col-lg-12",kcFormButtonsClass:"col-xs-12 col-sm-12 col-md-12 col-lg-12",kcFormSettingClass:"login-pf-settings",kcTextareaClass:"form-control",kcInfoAreaClass:"col-xs-12 col-sm-4 col-md-4 col-lg-5 details",kcFormGroupHeader:"pf-c-form__group",kcButtonClass:"btn",kcButtonPrimaryClass:"btn-primary",kcButtonDefaultClass:"btn-default",kcButtonLargeClass:"btn-lg",kcButtonBlockClass:"btn-block",kcInputLargeClass:"input-lg",kcInputGroup:"pf-c-input-group",kcSrOnlyClass:"sr-only",kcSelectAuthListClass:"list-group list-view-pf",kcSelectAuthListItemClass:"list-group-item list-view-pf-stacked",kcSelectAuthListItemFillClass:"pf-l-split__item pf-m-fill",kcSelectAuthListItemIconPropertyClass:"fa-2x select-auth-box-icon-properties",kcSelectAuthListItemIconClass:"pf-l-split__item select-auth-box-icon",kcSelectAuthListItemTitle:"select-auth-box-paragraph",kcSelectAuthListItemInfoClass:"list-view-pf-main-info",kcSelectAuthListItemLeftClass:"list-view-pf-left",kcSelectAuthListItemBodyClass:"list-view-pf-body",kcSelectAuthListItemDescriptionClass:"list-view-pf-description",kcSelectAuthListItemHeadingClass:"list-group-item-heading",kcSelectAuthListItemHelpTextClass:"list-group-item-text",kcAuthenticatorDefaultClass:"fa list-view-pf-icon-lg",kcAuthenticatorPasswordClass:"fa fa-unlock list-view-pf-icon-lg",kcAuthenticatorOTPClass:"fa fa-mobile list-view-pf-icon-lg",kcAuthenticatorWebAuthnClass:"fa fa-key list-view-pf-icon-lg",kcAuthenticatorWebAuthnPasswordlessClass:"fa fa-key list-view-pf-icon-lg",kcSelectOTPListClass:"card-pf card-pf-view card-pf-view-select card-pf-view-single-select",kcSelectOTPListItemClass:"card-pf-body card-pf-top-element",kcAuthenticatorOtpCircleClass:"fa fa-mobile card-pf-icon-circle",kcSelectOTPItemHeadingClass:"card-pf-title text-center",kcFormOptionsWrapperClass:void 0}}).useGetClassName},"./dist/login/pages/SelectAuthenticator.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>SelectAuthenticator});__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/core-js/modules/es.array.map.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_login_lib_useGetClassName__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./dist/login/lib/useGetClassName.js"),react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/index.js"),_tools_useConstCallback__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./dist/tools/useConstCallback.js");function SelectAuthenticator(props){var kcContext=props.kcContext,i18n=props.i18n,doUseDefaultCss=props.doUseDefaultCss,Template=props.Template,classes=props.classes,url=kcContext.url,auth=kcContext.auth,getClassName=(0,_login_lib_useGetClassName__WEBPACK_IMPORTED_MODULE_3__.v)({doUseDefaultCss,classes}).getClassName,msg=i18n.msg,selectCredentialsForm=(0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)(null),authExecIdInput=(0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)(null),submitForm=(0,_tools_useConstCallback__WEBPACK_IMPORTED_MODULE_5__.O)((function(){var _a;null===(_a=selectCredentialsForm.current)||void 0===_a||_a.submit()})),onSelectedAuthenticator=(0,_tools_useConstCallback__WEBPACK_IMPORTED_MODULE_5__.O)((function(event){var authExecId=event.currentTarget.dataset.authExecId;authExecIdInput.current&&authExecId&&(authExecIdInput.current.value=authExecId,submitForm())}));return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Template,Object.assign({},{kcContext,i18n,doUseDefaultCss,classes},{headerNode:msg("loginChooseAuthenticator")},{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("form",Object.assign({id:"kc-select-credential-form",className:getClassName("kcFormClass"),ref:selectCredentialsForm,action:url.loginAction,method:"post"},{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",Object.assign({className:getClassName("kcSelectAuthListClass")},{children:[auth.authenticationSelections.map((function(authenticationSelection,index){var _a;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",Object.assign({className:getClassName("kcSelectAuthListItemClass")},{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",Object.assign({style:{cursor:"pointer"},onClick:onSelectedAuthenticator,"data-auth-exec-id":authenticationSelection.authExecId,className:getClassName("kcSelectAuthListItemInfoClass")},{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",Object.assign({className:getClassName("kcSelectAuthListItemLeftClass")},{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span",{className:getClassName(null!==(_a=authenticationSelection.iconCssClass)&&void 0!==_a?_a:"kcAuthenticatorDefaultClass")})})),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",Object.assign({className:getClassName("kcSelectAuthListItemBodyClass")},{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",Object.assign({className:getClassName("kcSelectAuthListItemDescriptionClass")},{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",Object.assign({className:getClassName("kcSelectAuthListItemHeadingClass")},{children:msg(authenticationSelection.displayName)})),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",Object.assign({className:getClassName("kcSelectAuthListItemHelpTextClass")},{children:msg(authenticationSelection.helpText)}))]}))}))]}))}),index)})),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("input",{type:"hidden",id:"authexec-hidden-input",name:"authenticationExecution",ref:authExecIdInput})]}))}))}))}},"./dist/tools/clsx.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{W:()=>clsx});__webpack_require__("./node_modules/core-js/modules/es.array.is-array.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.string.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.array.iterator.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.array.from.js"),__webpack_require__("./node_modules/core-js/modules/es.array.slice.js"),__webpack_require__("./node_modules/core-js/modules/es.function.name.js");var tsafe_assert__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("./node_modules/tsafe/esm/assert.mjs"),tsafe_typeGuard__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__("./node_modules/tsafe/esm/typeGuard.mjs");function _toConsumableArray(arr){return function _arrayWithoutHoles(arr){if(Array.isArray(arr))return _arrayLikeToArray(arr)}(arr)||function _iterableToArray(iter){if("undefined"!=typeof Symbol&&null!=iter[Symbol.iterator]||null!=iter["@@iterator"])return Array.from(iter)}(arr)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr)||function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var clsx=function clsx(){for(var len=arguments.length,i=0,cls="";i<len;i++){var arg=i<0||arguments.length<=i?void 0:arguments[i];if(null!=arg){var toAdd=void 0;switch(typeof arg){case"boolean":break;case"object":if(Array.isArray(arg))toAdd=clsx.apply(void 0,_toConsumableArray(arg));else for(var k in(0,tsafe_assert__WEBPACK_IMPORTED_MODULE_11__.h)(!(0,tsafe_typeGuard__WEBPACK_IMPORTED_MODULE_12__.z)(arg,!1)),toAdd="",arg)arg[k]&&k&&(toAdd&&(toAdd+=" "),toAdd+=k);break;default:toAdd=arg}toAdd&&(cls&&(cls+=" "),cls+=toAdd)}}return cls}},"./node_modules/tsafe/esm/typeGuard.mjs":(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__)=>{function typeGuard(_value,isMatched){return isMatched}__webpack_require__.d(__webpack_exports__,{z:()=>typeGuard})}}]);