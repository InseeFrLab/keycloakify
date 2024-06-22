"use strict";(self.webpackChunkkeycloakify=self.webpackChunkkeycloakify||[]).push([[5119],{"./dist/login/pages/Login.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>Login});__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/core-js/modules/es.array.map.js"),__webpack_require__("./node_modules/core-js/modules/es.array.is-array.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.string.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.array.iterator.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.array.slice.js"),__webpack_require__("./node_modules/core-js/modules/es.function.name.js"),__webpack_require__("./node_modules/core-js/modules/es.array.from.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__("./node_modules/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__("./node_modules/react/index.js"),_tools_assert__WEBPACK_IMPORTED_MODULE_15__=__webpack_require__("./dist/tools/assert.js"),_tools_clsx__WEBPACK_IMPORTED_MODULE_16__=__webpack_require__("./dist/tools/clsx.js"),_login_lib_kcClsx__WEBPACK_IMPORTED_MODULE_17__=__webpack_require__("./dist/login/lib/kcClsx.js");function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_x,_r,_arr=[],_n=!0,_d=!1;try{if(_x=(_i=_i.call(arr)).next,0===i){if(Object(_i)!==_i)return;_n=!1}else for(;!(_n=(_s=_x.call(_i)).done)&&(_arr.push(_s.value),_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{if(!_n&&null!=_i.return&&(_r=_i.return(),Object(_r)!==_r))return}finally{if(_d)throw _e}}return _arr}}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function Login(props){var _a,_b,kcContext=props.kcContext,i18n=props.i18n,doUseDefaultCss=props.doUseDefaultCss,Template=props.Template,classes=props.classes,kcClsx=(0,_login_lib_kcClsx__WEBPACK_IMPORTED_MODULE_17__.$)({doUseDefaultCss,classes}).kcClsx,social=kcContext.social,realm=kcContext.realm,url=kcContext.url,usernameHidden=kcContext.usernameHidden,login=kcContext.login,auth=kcContext.auth,registrationDisabled=kcContext.registrationDisabled,messagesPerField=kcContext.messagesPerField,msg=i18n.msg,msgStr=i18n.msgStr,_useState2=_slicedToArray((0,react__WEBPACK_IMPORTED_MODULE_14__.useState)(!1),2),isLoginButtonDisabled=_useState2[0],setIsLoginButtonDisabled=_useState2[1];return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(Template,Object.assign({kcContext,i18n,doUseDefaultCss,classes,displayMessage:!messagesPerField.existsError("username","password"),headerNode:msg("loginAccountTitle"),displayInfo:realm.password&&realm.registrationAllowed&&!registrationDisabled,infoNode:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("div",Object.assign({id:"kc-registration-container"},{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("div",Object.assign({id:"kc-registration"},{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("span",{children:[msg("noAccount")," ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("a",Object.assign({tabIndex:8,href:url.registrationUrl},{children:msg("doRegister")}))]})}))})),socialProvidersNode:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.Fragment,{children:realm.password&&(null===(_a=social.providers)||void 0===_a?void 0:_a.length)&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div",Object.assign({id:"kc-social-providers",className:kcClsx("kcFormSocialAccountSectionClass")},{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("hr",{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("h2",{children:msg("identity-provider-login-label")}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("ul",Object.assign({className:kcClsx("kcFormSocialAccountListClass",social.providers.length>3&&"kcFormSocialAccountListGridClass")},{children:social.providers.map((function(){for(var _len=arguments.length,_ref=new Array(_len),_key=0;_key<_len;_key++)_ref[_key]=arguments[_key];var p=_ref[0],providers=_ref[2];return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("li",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("a",Object.assign({id:"social-"+p.alias,className:kcClsx("kcFormSocialAccountListButtonClass",providers.length>3&&"kcFormSocialAccountGridItem"),type:"button",href:p.loginUrl},{children:[p.iconClasses&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("i",{className:(0,_tools_clsx__WEBPACK_IMPORTED_MODULE_16__.W)(kcClsx("kcCommonLogoIdP"),p.iconClasses),"aria-hidden":"true"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("span",Object.assign({className:(0,_tools_clsx__WEBPACK_IMPORTED_MODULE_16__.W)(kcClsx("kcFormSocialAccountNameClass"),p.iconClasses&&"kc-social-icon-text")},{children:p.displayName}))]}))},p.alias)}))}))]}))})},{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("div",Object.assign({id:"kc-form"},{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("div",Object.assign({id:"kc-form-wrapper"},{children:realm.password&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("form",Object.assign({id:"kc-form-login",onSubmit:function onSubmit(){return setIsLoginButtonDisabled(!0),!0},action:url.loginAction,method:"post"},{children:[!usernameHidden&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div",Object.assign({className:kcClsx("kcFormGroupClass")},{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("label",Object.assign({htmlFor:"username",className:kcClsx("kcLabelClass")},{children:realm.loginWithEmailAllowed?realm.registrationEmailAsUsername?msg("email"):msg("usernameOrEmail"):msg("username")})),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("input",{tabIndex:2,id:"username",className:kcClsx("kcInputClass"),name:"username",defaultValue:null!==(_b=login.username)&&void 0!==_b?_b:"",type:"text",autoFocus:!0,autoComplete:"username","aria-invalid":messagesPerField.existsError("username","password")}),messagesPerField.existsError("username","password")&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("span",Object.assign({id:"input-error",className:kcClsx("kcInputErrorMessageClass"),"aria-live":"polite"},{children:messagesPerField.getFirstError("username","password")}))]})),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div",Object.assign({className:kcClsx("kcFormGroupClass")},{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("label",Object.assign({htmlFor:"password",className:kcClsx("kcLabelClass")},{children:msg("password")})),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(PasswordWrapper,Object.assign({kcClsx,i18n,passwordInputId:"password"},{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("input",{tabIndex:3,id:"password",className:kcClsx("kcInputClass"),name:"password",type:"password",autoComplete:"current-password","aria-invalid":messagesPerField.existsError("username","password")})})),usernameHidden&&messagesPerField.existsError("username","password")&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("span",Object.assign({id:"input-error",className:kcClsx("kcInputErrorMessageClass"),"aria-live":"polite"},{children:messagesPerField.getFirstError("username","password")}))]})),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div",Object.assign({className:kcClsx("kcFormGroupClass","kcFormSettingClass")},{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("div",Object.assign({id:"kc-form-options"},{children:realm.rememberMe&&!usernameHidden&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("div",Object.assign({className:"checkbox"},{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("label",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("input",{tabIndex:5,id:"rememberMe",name:"rememberMe",type:"checkbox",defaultChecked:!!login.rememberMe})," ",msg("rememberMe")]})}))})),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("div",Object.assign({className:kcClsx("kcFormOptionsWrapperClass")},{children:realm.resetPasswordAllowed&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("span",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("a",Object.assign({tabIndex:6,href:url.loginResetCredentialsUrl},{children:msg("doForgotPassword")}))})}))]})),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div",Object.assign({id:"kc-form-buttons",className:kcClsx("kcFormGroupClass")},{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("input",{type:"hidden",id:"id-hidden-input",name:"credentialId",value:auth.selectedCredential}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("input",{tabIndex:7,disabled:isLoginButtonDisabled,className:kcClsx("kcButtonClass","kcButtonPrimaryClass","kcButtonBlockClass","kcButtonLargeClass"),name:"login",id:"kc-login",type:"submit",value:msgStr("doLogIn")})]}))]}))}))}))}))}function PasswordWrapper(props){var kcClsx=props.kcClsx,i18n=props.i18n,passwordInputId=props.passwordInputId,children=props.children,msgStr=i18n.msgStr,_useReducer=(0,react__WEBPACK_IMPORTED_MODULE_14__.useReducer)((function(isPasswordRevealed){return!isPasswordRevealed}),!1),_useReducer2=_slicedToArray(_useReducer,2),isPasswordRevealed=_useReducer2[0],toggleIsPasswordRevealed=_useReducer2[1];return(0,react__WEBPACK_IMPORTED_MODULE_14__.useEffect)((function(){var passwordInputElement=document.getElementById(passwordInputId);(0,_tools_assert__WEBPACK_IMPORTED_MODULE_15__.h)(passwordInputElement instanceof HTMLInputElement),passwordInputElement.type=isPasswordRevealed?"text":"password"}),[isPasswordRevealed]),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div",Object.assign({className:kcClsx("kcInputGroup")},{children:[children,(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("button",Object.assign({type:"button",className:kcClsx("kcFormPasswordVisibilityButtonClass"),"aria-label":msgStr(isPasswordRevealed?"hidePassword":"showPassword"),"aria-controls":passwordInputId,onClick:toggleIsPasswordRevealed},{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("i",{className:kcClsx(isPasswordRevealed?"kcFormPasswordVisibilityIconHide":"kcFormPasswordVisibilityIconShow"),"aria-hidden":!0})}))]}))}}}]);