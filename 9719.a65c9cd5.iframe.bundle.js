"use strict";(self.webpackChunkkeycloakify=self.webpackChunkkeycloakify||[]).push([[9719],{"./dist/login/pages/LoginOauthGrant.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>LoginOauthGrant});__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/core-js/modules/es.function.name.js"),__webpack_require__("./node_modules/core-js/modules/es.array.map.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_login_lib_kcClsx__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./dist/login/lib/kcClsx.js");function LoginOauthGrant(props){var kcContext=props.kcContext,i18n=props.i18n,doUseDefaultCss=props.doUseDefaultCss,classes=props.classes,Template=props.Template,url=kcContext.url,oauth=kcContext.oauth,client=kcContext.client,msg=i18n.msg,msgStr=i18n.msgStr,advancedMsg=i18n.advancedMsg,advancedMsgStr=i18n.advancedMsgStr,kcClsx=(0,_login_lib_kcClsx__WEBPACK_IMPORTED_MODULE_4__.$)({doUseDefaultCss,classes}).kcClsx;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(Template,Object.assign({kcContext,i18n,doUseDefaultCss,classes,bodyClassName:"oauth",headerNode:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment,{children:[client.attributes.logoUri&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("img",{src:client.attributes.logoUri}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p",{children:client.name?msg("oauthGrantTitle",advancedMsgStr(client.name)):msg("oauthGrantTitle",client.clientId)})]})},{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div",Object.assign({id:"kc-oauth",className:"content-area"},{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h3",{children:msg("oauthGrantRequest")}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("ul",{children:oauth.clientScopesRequested.map((function(clientScope){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("li",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("span",{children:[advancedMsg(clientScope.consentScreenText),clientScope.dynamicScopeParameter&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment,{children:[": ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("b",{children:clientScope.dynamicScopeParameter})]})]})},clientScope.consentScreenText)}))}),client.attributes.policyUri||client.attributes.tosUri&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("h3",{children:[client.name?msg("oauthGrantInformation",advancedMsgStr(client.name)):msg("oauthGrantInformation",client.clientId),client.attributes.tosUri&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment,{children:[msg("oauthGrantReview"),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("a",Object.assign({href:client.attributes.tosUri,target:"_blank"},{children:msg("oauthGrantTos")}))]}),client.attributes.policyUri&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment,{children:[msg("oauthGrantReview"),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("a",Object.assign({href:client.attributes.policyUri,target:"_blank"},{children:msg("oauthGrantPolicy")}))]})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("form",Object.assign({className:"form-actions",action:url.oauthAction,method:"POST"},{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("input",{type:"hidden",name:"code",value:oauth.code}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div",Object.assign({className:kcClsx("kcFormGroupClass")},{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",Object.assign({id:"kc-form-options"},{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{className:kcClsx("kcFormOptionsWrapperClass")})})),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",Object.assign({id:"kc-form-buttons"},{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div",Object.assign({className:kcClsx("kcFormButtonsWrapperClass")},{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("input",{className:kcClsx("kcButtonClass","kcButtonPrimaryClass","kcButtonLargeClass"),name:"accept",id:"kc-login",type:"submit",value:msgStr("doYes")}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("input",{className:kcClsx("kcButtonClass","kcButtonDefaultClass","kcButtonLargeClass"),name:"cancel",id:"kc-cancel",type:"submit",value:msgStr("doNo")})]}))}))]}))]})),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{className:"clearfix"})]}))}))}}}]);