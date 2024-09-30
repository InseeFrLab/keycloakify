"use strict";(self.webpackChunkkeycloakify=self.webpackChunkkeycloakify||[]).push([[7901],{"./dist/account/lib/useGetClassName.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{v:()=>useGetClassName});var useGetClassName=(0,__webpack_require__("./dist/lib/useGetClassName.js").a)({defaultClasses:{kcHtmlClass:void 0,kcBodyClass:void 0,kcButtonClass:"btn",kcButtonPrimaryClass:"btn-primary",kcButtonLargeClass:"btn-lg",kcButtonDefaultClass:"btn-default"}}).useGetClassName},"./dist/account/pages/Account.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>Account});__webpack_require__("./node_modules/core-js/modules/es.object.assign.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_tools_clsx__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./dist/tools/clsx.js"),_account_lib_useGetClassName__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./dist/account/lib/useGetClassName.js");function Account(props){var _a,_b,_c,_d,kcContext=props.kcContext,i18n=props.i18n,doUseDefaultCss=props.doUseDefaultCss,Template=props.Template,classes=props.classes,getClassName=(0,_account_lib_useGetClassName__WEBPACK_IMPORTED_MODULE_3__.v)({doUseDefaultCss,classes:Object.assign(Object.assign({},classes),{kcBodyClass:(0,_tools_clsx__WEBPACK_IMPORTED_MODULE_2__.W)(null==classes?void 0:classes.kcBodyClass,"user")})}).getClassName,url=kcContext.url,realm=kcContext.realm,messagesPerField=kcContext.messagesPerField,stateChecker=kcContext.stateChecker,account=kcContext.account,referrer=kcContext.referrer,msg=i18n.msg;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(Template,Object.assign({},{kcContext,i18n,doUseDefaultCss,classes},{active:"account"},{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",Object.assign({className:"row"},{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",Object.assign({className:"col-md-10"},{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h2",{children:msg("editAccountHtmlTitle")})})),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",Object.assign({className:"col-md-2 subtitle"},{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("span",Object.assign({className:"subtitle"},{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span",Object.assign({className:"required"},{children:"*"}))," ",msg("requiredFields")]}))}))]})),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("form",Object.assign({action:url.accountUrl,className:"form-horizontal",method:"post"},{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("input",{type:"hidden",id:"stateChecker",name:"stateChecker",value:stateChecker}),!realm.registrationEmailAsUsername&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",Object.assign({className:(0,_tools_clsx__WEBPACK_IMPORTED_MODULE_2__.W)("form-group",messagesPerField.printIfExists("username","has-error"))},{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",Object.assign({className:"col-sm-2 col-md-2"},{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("label",Object.assign({htmlFor:"username",className:"control-label"},{children:msg("username")})),realm.editUsernameAllowed&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span",Object.assign({className:"required"},{children:"*"}))]})),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",Object.assign({className:"col-sm-10 col-md-10"},{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("input",{type:"text",className:"form-control",id:"username",name:"username",disabled:!realm.editUsernameAllowed,defaultValue:null!==(_a=account.username)&&void 0!==_a?_a:""})}))]})),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",Object.assign({className:(0,_tools_clsx__WEBPACK_IMPORTED_MODULE_2__.W)("form-group",messagesPerField.printIfExists("email","has-error"))},{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",Object.assign({className:"col-sm-2 col-md-2"},{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("label",Object.assign({htmlFor:"email",className:"control-label"},{children:msg("email")}))," ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span",Object.assign({className:"required"},{children:"*"}))]})),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",Object.assign({className:"col-sm-10 col-md-10"},{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("input",{type:"text",className:"form-control",id:"email",name:"email",autoFocus:!0,defaultValue:null!==(_b=account.email)&&void 0!==_b?_b:""})}))]})),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",Object.assign({className:(0,_tools_clsx__WEBPACK_IMPORTED_MODULE_2__.W)("form-group",messagesPerField.printIfExists("firstName","has-error"))},{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",Object.assign({className:"col-sm-2 col-md-2"},{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("label",Object.assign({htmlFor:"firstName",className:"control-label"},{children:msg("firstName")}))," ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span",Object.assign({className:"required"},{children:"*"}))]})),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",Object.assign({className:"col-sm-10 col-md-10"},{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("input",{type:"text",className:"form-control",id:"firstName",name:"firstName",defaultValue:null!==(_c=account.firstName)&&void 0!==_c?_c:""})}))]})),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",Object.assign({className:(0,_tools_clsx__WEBPACK_IMPORTED_MODULE_2__.W)("form-group",messagesPerField.printIfExists("lastName","has-error"))},{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",Object.assign({className:"col-sm-2 col-md-2"},{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("label",Object.assign({htmlFor:"lastName",className:"control-label"},{children:msg("lastName")}))," ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span",Object.assign({className:"required"},{children:"*"}))]})),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",Object.assign({className:"col-sm-10 col-md-10"},{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("input",{type:"text",className:"form-control",id:"lastName",name:"lastName",defaultValue:null!==(_d=account.lastName)&&void 0!==_d?_d:""})}))]})),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",Object.assign({className:"form-group"},{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",Object.assign({id:"kc-form-buttons",className:"col-md-offset-2 col-md-10 submit"},{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{children:[void 0!==referrer&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("a",Object.assign({href:null==referrer?void 0:referrer.url},{children:msg("backToApplication")})),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button",Object.assign({type:"submit",className:(0,_tools_clsx__WEBPACK_IMPORTED_MODULE_2__.W)(getClassName("kcButtonClass"),getClassName("kcButtonPrimaryClass"),getClassName("kcButtonLargeClass")),name:"submitAction",value:"Save"},{children:msg("doSave")})),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button",Object.assign({type:"submit",className:(0,_tools_clsx__WEBPACK_IMPORTED_MODULE_2__.W)(getClassName("kcButtonClass"),getClassName("kcButtonDefaultClass"),getClassName("kcButtonLargeClass")),name:"submitAction",value:"Cancel"},{children:msg("doCancel")}))]})}))}))]}))]}))}},"./dist/lib/useGetClassName.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{a:()=>createUseClassName});var _tools_clsx__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./dist/tools/clsx.js"),_tools_useConstCallback__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./dist/tools/useConstCallback.js");function createUseClassName(params){var defaultClasses=params.defaultClasses;return{useGetClassName:function useGetClassName(params){var classes=params.classes;return{getClassName:(0,_tools_useConstCallback__WEBPACK_IMPORTED_MODULE_1__.O)((function(classKey){return(0,_tools_clsx__WEBPACK_IMPORTED_MODULE_0__.W)(classKey,defaultClasses[classKey],null==classes?void 0:classes[classKey])}))}}}}},"./dist/tools/clsx.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{W:()=>clsx});__webpack_require__("./node_modules/core-js/modules/es.array.is-array.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.string.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.array.iterator.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.array.from.js"),__webpack_require__("./node_modules/core-js/modules/es.array.slice.js"),__webpack_require__("./node_modules/core-js/modules/es.function.name.js");var tsafe_assert__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("./node_modules/tsafe/esm/assert.mjs"),tsafe_typeGuard__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__("./node_modules/tsafe/esm/typeGuard.mjs");function _toConsumableArray(arr){return function _arrayWithoutHoles(arr){if(Array.isArray(arr))return _arrayLikeToArray(arr)}(arr)||function _iterableToArray(iter){if("undefined"!=typeof Symbol&&null!=iter[Symbol.iterator]||null!=iter["@@iterator"])return Array.from(iter)}(arr)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr)||function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var clsx=function clsx(){for(var len=arguments.length,i=0,cls="";i<len;i++){var arg=i<0||arguments.length<=i?void 0:arguments[i];if(null!=arg){var toAdd=void 0;switch(typeof arg){case"boolean":break;case"object":if(Array.isArray(arg))toAdd=clsx.apply(void 0,_toConsumableArray(arg));else for(var k in(0,tsafe_assert__WEBPACK_IMPORTED_MODULE_11__.h)(!(0,tsafe_typeGuard__WEBPACK_IMPORTED_MODULE_12__.z)(arg,!1)),toAdd="",arg)arg[k]&&k&&(toAdd&&(toAdd+=" "),toAdd+=k);break;default:toAdd=arg}toAdd&&(cls&&(cls+=" "),cls+=toAdd)}}return cls}},"./node_modules/tsafe/esm/typeGuard.mjs":(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__)=>{function typeGuard(_value,isMatched){return isMatched}__webpack_require__.d(__webpack_exports__,{z:()=>typeGuard})}}]);