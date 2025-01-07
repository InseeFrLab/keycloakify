"use strict";(self.webpackChunkkeycloakify=self.webpackChunkkeycloakify||[]).push([[6056],{"./dist/login/pages/LoginPassword.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>LoginPassword});__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/core-js/modules/es.array.is-array.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.string.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.array.iterator.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.array.slice.js"),__webpack_require__("./node_modules/core-js/modules/es.function.name.js"),__webpack_require__("./node_modules/core-js/modules/es.array.from.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__("./node_modules/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__("./node_modules/react/index.js"),_lib_kcSanitize__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__("./dist/lib/kcSanitize/index.js"),_tools_clsx__WEBPACK_IMPORTED_MODULE_15__=__webpack_require__("./dist/tools/clsx.js"),_tools_useIsPasswordRevealed__WEBPACK_IMPORTED_MODULE_16__=__webpack_require__("./dist/tools/useIsPasswordRevealed.js"),_login_lib_kcClsx__WEBPACK_IMPORTED_MODULE_17__=__webpack_require__("./dist/login/lib/kcClsx.js");function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_x,_r,_arr=[],_n=!0,_d=!1;try{if(_x=(_i=_i.call(arr)).next,0===i){if(Object(_i)!==_i)return;_n=!1}else for(;!(_n=(_s=_x.call(_i)).done)&&(_arr.push(_s.value),_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{if(!_n&&null!=_i.return&&(_r=_i.return(),Object(_r)!==_r))return}finally{if(_d)throw _e}}return _arr}}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function LoginPassword(props){var kcContext=props.kcContext,i18n=props.i18n,doUseDefaultCss=props.doUseDefaultCss,Template=props.Template,classes=props.classes,kcClsx=(0,_login_lib_kcClsx__WEBPACK_IMPORTED_MODULE_17__.$)({doUseDefaultCss,classes}).kcClsx,realm=kcContext.realm,url=kcContext.url,messagesPerField=kcContext.messagesPerField,msg=i18n.msg,msgStr=i18n.msgStr,_useState2=_slicedToArray((0,react__WEBPACK_IMPORTED_MODULE_13__.useState)(!1),2),isLoginButtonDisabled=_useState2[0],setIsLoginButtonDisabled=_useState2[1];return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(Template,Object.assign({kcContext,i18n,doUseDefaultCss,classes,headerNode:msg("doLogIn"),displayMessage:!messagesPerField.existsError("password")},{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("div",Object.assign({id:"kc-form"},{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("div",Object.assign({id:"kc-form-wrapper"},{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("form",Object.assign({id:"kc-form-login",onSubmit:function onSubmit(){return setIsLoginButtonDisabled(!0),!0},action:url.loginAction,method:"post"},{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("div",Object.assign({className:(0,_tools_clsx__WEBPACK_IMPORTED_MODULE_15__.W)(kcClsx("kcFormGroupClass"),"no-bottom-margin")},{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("hr",{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("label",Object.assign({htmlFor:"password",className:kcClsx("kcLabelClass")},{children:msg("password")})),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(PasswordWrapper,Object.assign({kcClsx,i18n,passwordInputId:"password"},{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("input",{tabIndex:2,id:"password",className:kcClsx("kcInputClass"),name:"password",type:"password",autoFocus:!0,autoComplete:"on","aria-invalid":messagesPerField.existsError("username","password")})})),messagesPerField.existsError("password")&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("span",{id:"input-error-password",className:kcClsx("kcInputErrorMessageClass"),"aria-live":"polite",dangerouslySetInnerHTML:{__html:(0,_lib_kcSanitize__WEBPACK_IMPORTED_MODULE_14__.p)(messagesPerField.get("password"))}})]})),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("div",Object.assign({className:kcClsx("kcFormGroupClass","kcFormSettingClass")},{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("div",{id:"kc-form-options"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("div",Object.assign({className:kcClsx("kcFormOptionsWrapperClass")},{children:realm.resetPasswordAllowed&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("span",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("a",Object.assign({tabIndex:5,href:url.loginResetCredentialsUrl},{children:msg("doForgotPassword")}))})}))]})),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("div",Object.assign({id:"kc-form-buttons",className:kcClsx("kcFormGroupClass")},{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("input",{tabIndex:4,className:kcClsx("kcButtonClass","kcButtonPrimaryClass","kcButtonBlockClass","kcButtonLargeClass"),name:"login",id:"kc-login",type:"submit",value:msgStr("doLogIn"),disabled:isLoginButtonDisabled})}))]}))}))}))}))}function PasswordWrapper(props){var kcClsx=props.kcClsx,i18n=props.i18n,passwordInputId=props.passwordInputId,children=props.children,msgStr=i18n.msgStr,_useIsPasswordReveale=(0,_tools_useIsPasswordRevealed__WEBPACK_IMPORTED_MODULE_16__.c)({passwordInputId}),isPasswordRevealed=_useIsPasswordReveale.isPasswordRevealed,toggleIsPasswordRevealed=_useIsPasswordReveale.toggleIsPasswordRevealed;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("div",Object.assign({className:kcClsx("kcInputGroup")},{children:[children,(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("button",Object.assign({type:"button",className:kcClsx("kcFormPasswordVisibilityButtonClass"),"aria-label":msgStr(isPasswordRevealed?"hidePassword":"showPassword"),"aria-controls":passwordInputId,onClick:toggleIsPasswordRevealed},{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("i",{className:kcClsx(isPasswordRevealed?"kcFormPasswordVisibilityIconHide":"kcFormPasswordVisibilityIconShow"),"aria-hidden":!0})}))]}))}}}]);