_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[12],{"0iIO":function(e,t,r){"use strict";(function(e){function r(e,t){for(var r=0;r<t.length;r++){var _=t[r];_.enumerable=_.enumerable||!1,_.configurable=!0,"value"in _&&(_.writable=!0),Object.defineProperty(e,_.key,_)}}t.__esModule=!0,t.default=void 0;var _="undefined"!==typeof e&&e.env&&!0,n=function(e){return"[object String]"===Object.prototype.toString.call(e)},s=function(){function e(e){var t=void 0===e?{}:e,r=t.name,s=void 0===r?"stylesheet":r,o=t.optimizeForSpeed,u=void 0===o?_:o,a=t.isBrowser,c=void 0===a?"undefined"!==typeof window:a;i(n(s),"`name` must be a string"),this._name=s,this._deletedRulePlaceholder="#"+s+"-deleted-rule____{}",i("boolean"===typeof u,"`optimizeForSpeed` must be a boolean"),this._optimizeForSpeed=u,this._isBrowser=c,this._serverSheet=void 0,this._tags=[],this._injected=!1,this._rulesCount=0;var l=this._isBrowser&&document.querySelector('meta[property="csp-nonce"]');this._nonce=l?l.getAttribute("content"):null}var t,s,o,u=e.prototype;return u.setOptimizeForSpeed=function(e){i("boolean"===typeof e,"`setOptimizeForSpeed` accepts a boolean"),i(0===this._rulesCount,"optimizeForSpeed cannot be when rules have already been inserted"),this.flush(),this._optimizeForSpeed=e,this.inject()},u.isOptimizeForSpeed=function(){return this._optimizeForSpeed},u.inject=function(){var e=this;if(i(!this._injected,"sheet already injected"),this._injected=!0,this._isBrowser&&this._optimizeForSpeed)return this._tags[0]=this.makeStyleTag(this._name),this._optimizeForSpeed="insertRule"in this.getSheet(),void(this._optimizeForSpeed||(_||console.warn("StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."),this.flush(),this._injected=!0));this._serverSheet={cssRules:[],insertRule:function(t,r){return"number"===typeof r?e._serverSheet.cssRules[r]={cssText:t}:e._serverSheet.cssRules.push({cssText:t}),r},deleteRule:function(t){e._serverSheet.cssRules[t]=null}}},u.getSheetForTag=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]},u.getSheet=function(){return this.getSheetForTag(this._tags[this._tags.length-1])},u.insertRule=function(e,t){if(i(n(e),"`insertRule` accepts only strings"),!this._isBrowser)return"number"!==typeof t&&(t=this._serverSheet.cssRules.length),this._serverSheet.insertRule(e,t),this._rulesCount++;if(this._optimizeForSpeed){var r=this.getSheet();"number"!==typeof t&&(t=r.cssRules.length);try{r.insertRule(e,t)}catch(o){return _||console.warn("StyleSheet: illegal rule: \n\n"+e+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),-1}}else{var s=this._tags[t];this._tags.push(this.makeStyleTag(this._name,e,s))}return this._rulesCount++},u.replaceRule=function(e,t){if(this._optimizeForSpeed||!this._isBrowser){var r=this._isBrowser?this.getSheet():this._serverSheet;if(t.trim()||(t=this._deletedRulePlaceholder),!r.cssRules[e])return e;r.deleteRule(e);try{r.insertRule(t,e)}catch(s){_||console.warn("StyleSheet: illegal rule: \n\n"+t+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),r.insertRule(this._deletedRulePlaceholder,e)}}else{var n=this._tags[e];i(n,"old rule at index `"+e+"` not found"),n.textContent=t}return e},u.deleteRule=function(e){if(this._isBrowser)if(this._optimizeForSpeed)this.replaceRule(e,"");else{var t=this._tags[e];i(t,"rule at index `"+e+"` not found"),t.parentNode.removeChild(t),this._tags[e]=null}else this._serverSheet.deleteRule(e)},u.flush=function(){this._injected=!1,this._rulesCount=0,this._isBrowser?(this._tags.forEach((function(e){return e&&e.parentNode.removeChild(e)})),this._tags=[]):this._serverSheet.cssRules=[]},u.cssRules=function(){var e=this;return this._isBrowser?this._tags.reduce((function(t,r){return r?t=t.concat(Array.prototype.map.call(e.getSheetForTag(r).cssRules,(function(t){return t.cssText===e._deletedRulePlaceholder?null:t}))):t.push(null),t}),[]):this._serverSheet.cssRules},u.makeStyleTag=function(e,t,r){t&&i(n(t),"makeStyleTag acceps only strings as second parameter");var _=document.createElement("style");this._nonce&&_.setAttribute("nonce",this._nonce),_.type="text/css",_.setAttribute("data-"+e,""),t&&_.appendChild(document.createTextNode(t));var s=document.head||document.getElementsByTagName("head")[0];return r?s.insertBefore(_,r):s.appendChild(_),_},t=e,(s=[{key:"length",get:function(){return this._rulesCount}}])&&r(t.prototype,s),o&&r(t,o),e}();function i(e,t){if(!e)throw new Error("StyleSheet: "+t+".")}t.default=s}).call(this,r("F63i"))},"9xhc":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"default",(function(){return PlayGround})),__webpack_require__.d(__webpack_exports__,"ErrorBoundary",(function(){return ErrorBoundary}));var _Users_kishore_MINE_fjv_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("9fIP"),_Users_kishore_MINE_fjv_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("MMYH"),_Users_kishore_MINE_fjv_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("pWxA"),_Users_kishore_MINE_fjv_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("8K1b"),_Users_kishore_MINE_fjv_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("K/z8"),_Users_kishore_MINE_fjv_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("sRHE"),_Users_kishore_MINE_fjv_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("zjfJ"),styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("yFcC"),styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default=__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__),flowjv_react__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("8o++"),flowjv_react__WEBPACK_IMPORTED_MODULE_8___default=__webpack_require__.n(flowjv_react__WEBPACK_IMPORTED_MODULE_8__),flowjv_react_custom__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("dRtc"),flowjv_react_custom__WEBPACK_IMPORTED_MODULE_9___default=__webpack_require__.n(flowjv_react_custom__WEBPACK_IMPORTED_MODULE_9__),react__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("ERkP"),react__WEBPACK_IMPORTED_MODULE_10___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__),_utils_editor__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("sQQS"),classnames__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__("O94r"),classnames__WEBPACK_IMPORTED_MODULE_12___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_12__),next_link__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__("jvFD"),next_link__WEBPACK_IMPORTED_MODULE_13___default=__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_13__),_material_ui_core__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__("gBNo"),_material_ui_icons_ArrowBack__WEBPACK_IMPORTED_MODULE_15__=__webpack_require__("AR11"),_material_ui_icons_ArrowBack__WEBPACK_IMPORTED_MODULE_15___default=__webpack_require__.n(_material_ui_icons_ArrowBack__WEBPACK_IMPORTED_MODULE_15__),__jsx=react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement;function _createSuper(e){var t=_isNativeReflectConstruct();return function(){var r,_=Object(_Users_kishore_MINE_fjv_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__.a)(e);if(t){var n=Object(_Users_kishore_MINE_fjv_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__.a)(this).constructor;r=Reflect.construct(_,arguments,n)}else r=_.apply(this,arguments);return Object(_Users_kishore_MINE_fjv_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__.a)(this,r)}}function _isNativeReflectConstruct(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function PlayGround(){var ref=Object(react__WEBPACK_IMPORTED_MODULE_10__.useRef)(null),_useState=Object(react__WEBPACK_IMPORTED_MODULE_10__.useState)({}),value=_useState[0],setValue=_useState[1],_useState2=Object(react__WEBPACK_IMPORTED_MODULE_10__.useState)(!1),error=_useState2[0],setError=_useState2[1];return Object(react__WEBPACK_IMPORTED_MODULE_10__.useEffect)((function(){if(ref.current)return Object(_utils_editor__WEBPACK_IMPORTED_MODULE_11__.a)(ref.current,{assetPrefix:"",onChange:function onChange(v){setError(!1);try{var json;eval("json = ".concat(v)),setValue(json)}catch(e){console.log("VALUE : ",v,e),setError(!0)}}}),function(){try{monaco.editor.getModels().forEach((function(e){return e.dispose()}))}catch(e){}}}),[]),__jsx("div",{className:"jsx-2688429646 p-5 overflow-y-auto"},__jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a,{id:"2688429646"},["body{background:#eeeeee;}"]),__jsx("div",{className:"jsx-2688429646 w-1/2"},__jsx("div",{className:"jsx-2688429646 "+(classnames__WEBPACK_IMPORTED_MODULE_12___default()("mx-auto max-w-sm shadow-lg p-5 self-center overflow-y-auto","bg-white my-10 rounded-sm")||"")},__jsx("div",{className:"jsx-2688429646 -ml-3"},__jsx(next_link__WEBPACK_IMPORTED_MODULE_13___default.a,{href:"".concat("","/")},__jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_14__.a,null,__jsx(_material_ui_icons_ArrowBack__WEBPACK_IMPORTED_MODULE_15___default.a,{className:"mr-2"}),"Go Back To Home"))),__jsx("div",{className:"jsx-2688429646 flex items-center py-3"},__jsx("h2",{className:"jsx-2688429646 flex-grow my-0"},"PlayGround"),error&&__jsx("div",{className:"jsx-2688429646 uppercase text-red-600"},"schema error")),__jsx(ErrorBoundary,{value:value}))),__jsx("div",{className:"jsx-2688429646 "+(classnames__WEBPACK_IMPORTED_MODULE_12___default()("flex flex-col w-1/2 fixed bottom-3 right-0 top-3 py-4","border border-solid box-border","border-gray-400 bg-white")||"")},__jsx("div",{ref:ref,className:"jsx-2688429646 "+(classnames__WEBPACK_IMPORTED_MODULE_12___default()("flex-grow ")||"")})))}var ErrorBoundary=function(e){Object(_Users_kishore_MINE_fjv_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__.a)(r,e);var t=_createSuper(r);function r(){var e;Object(_Users_kishore_MINE_fjv_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.a)(this,r);for(var _=arguments.length,n=new Array(_),s=0;s<_;s++)n[s]=arguments[s];return e=t.call.apply(t,[this].concat(n)),Object(_Users_kishore_MINE_fjv_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__.a)(Object(_Users_kishore_MINE_fjv_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__.a)(e),"state",{hasError:!1}),Object(_Users_kishore_MINE_fjv_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__.a)(Object(_Users_kishore_MINE_fjv_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__.a)(e),"i",0),Object(_Users_kishore_MINE_fjv_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__.a)(Object(_Users_kishore_MINE_fjv_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__.a)(e),"data",{}),Object(_Users_kishore_MINE_fjv_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__.a)(Object(_Users_kishore_MINE_fjv_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__.a)(e),"timeout",!1),e}return Object(_Users_kishore_MINE_fjv_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.a)(r,[{key:"componentDidUpdate",value:function(){var e=this;this.state.hasError&&!this.timeout&&(this.timeout=setTimeout((function(){e.timeout=!1,e.setState({hasError:!1})}),1e3))}},{key:"render",value:function(){var e=this;return this.state.hasError?__jsx("div",{className:"text-center my-4"},__jsx("h1",{className:"text-red-600"},"Something went wrong.")):__jsx("div",null,__jsx(flowjv_react_custom__WEBPACK_IMPORTED_MODULE_9__.FlowJVForm,{schema:this.props.value,initialData:this.data,onChange:function(t){var r=t.data;return e.data=r},key:this.i++},__jsx(flowjv_react__WEBPACK_IMPORTED_MODULE_8__.AutoFlow,null),__jsx(flowjv_react_custom__WEBPACK_IMPORTED_MODULE_9__.SubmitButton,null)))}}],[{key:"getDerivedStateFromError",value:function(){return{hasError:!0}}}]),r}(react__WEBPACK_IMPORTED_MODULE_10___default.a.Component)},AR11:function(e,t,r){"use strict";var _=r("IGGJ"),n=r("yWCo");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=n(r("ERkP")),i=(0,_(r("H5Iu")).default)(s.createElement("path",{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"}),"ArrowBack");t.default=i},DLdB:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/playground",function(){return r("9xhc")}])},F63i:function(e,t){var r,_,n=e.exports={};function s(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function o(e){if(r===setTimeout)return setTimeout(e,0);if((r===s||!r)&&setTimeout)return r=setTimeout,setTimeout(e,0);try{return r(e,0)}catch(t){try{return r.call(null,e,0)}catch(t){return r.call(this,e,0)}}}!function(){try{r="function"===typeof setTimeout?setTimeout:s}catch(e){r=s}try{_="function"===typeof clearTimeout?clearTimeout:i}catch(e){_=i}}();var u,a=[],c=!1,l=-1;function f(){c&&u&&(c=!1,u.length?a=u.concat(a):l=-1,a.length&&d())}function d(){if(!c){var e=o(f);c=!0;for(var t=a.length;t;){for(u=a,a=[];++l<t;)u&&u[l].run();l=-1,t=a.length}u=null,c=!1,function(e){if(_===clearTimeout)return clearTimeout(e);if((_===i||!_)&&clearTimeout)return _=clearTimeout,clearTimeout(e);try{_(e)}catch(t){try{return _.call(null,e)}catch(t){return _.call(this,e)}}}(e)}}function h(e,t){this.fun=e,this.array=t}function p(){}n.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];a.push(new h(e,t)),1!==a.length||c||o(d)},h.prototype.run=function(){this.fun.apply(null,this.array)},n.title="browser",n.browser=!0,n.env={},n.argv=[],n.version="",n.versions={},n.on=p,n.addListener=p,n.once=p,n.off=p,n.removeListener=p,n.removeAllListeners=p,n.emit=p,n.prependListener=p,n.prependOnceListener=p,n.listeners=function(e){return[]},n.binding=function(e){throw new Error("process.binding is not supported")},n.cwd=function(){return"/"},n.chdir=function(e){throw new Error("process.chdir is not supported")},n.umask=function(){return 0}},HOTy:function(e,t,r){"use strict";var _=r("ddV6");t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,r=e.disabled||!i,u=(0,n.useRef)(),a=(0,n.useState)(!1),c=_(a,2),l=c[0],f=c[1],d=(0,n.useCallback)((function(e){u.current&&(u.current(),u.current=void 0),r||l||e&&e.tagName&&(u.current=function(e,t,r){var _=function(e){var t=e.rootMargin||"",r=o.get(t);if(r)return r;var _=new Map,n=new IntersectionObserver((function(e){e.forEach((function(e){var t=_.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)}))}),e);return o.set(t,r={id:t,observer:n,elements:_}),r}(r),n=_.id,s=_.observer,i=_.elements;return i.set(e,t),s.observe(e),function(){i.delete(e),s.unobserve(e),0===i.size&&(s.disconnect(),o.delete(n))}}(e,(function(e){return e&&f(e)}),{rootMargin:t}))}),[r,t,l]);return(0,n.useEffect)((function(){if(!i&&!l){var e=(0,s.requestIdleCallback)((function(){return f(!0)}));return function(){return(0,s.cancelIdleCallback)(e)}}}),[l]),[d,l]};var n=r("ERkP"),s=r("ZeW2"),i="undefined"!==typeof IntersectionObserver;var o=new Map},KeDb:function(e,t,r){"use strict";var _=r("ddV6"),n=r("yWCo");t.__esModule=!0,t.default=void 0;var s=n(r("ERkP")),i=r("L9lV"),o=r("7xIC"),u=r("HOTy"),a={};function c(e,t,r,_){if(e&&(0,i.isLocalURL)(t)){e.prefetch(t,r,_).catch((function(e){0}));var n=_&&"undefined"!==typeof _.locale?_.locale:e&&e.locale;a[t+"%"+r+(n?"%"+n:"")]=!0}}var l=function(e){var t=!1!==e.prefetch,r=(0,o.useRouter)(),n=r&&r.pathname||"/",l=s.default.useMemo((function(){var t=(0,i.resolveHref)(n,e.href,!0),r=_(t,2),s=r[0],o=r[1];return{href:s,as:e.as?(0,i.resolveHref)(n,e.as):o||s}}),[n,e.href,e.as]),f=l.href,d=l.as,h=e.children,p=e.replace,m=e.shallow,v=e.scroll,E=e.locale;"string"===typeof h&&(h=s.default.createElement("a",null,h));var y=s.Children.only(h),b=y&&"object"===typeof y&&y.ref,O=(0,u.useIntersection)({rootMargin:"200px"}),M=_(O,2),P=M[0],D=M[1],g=s.default.useCallback((function(e){P(e),b&&("function"===typeof b?b(e):"object"===typeof b&&(b.current=e))}),[b,P]);(0,s.useEffect)((function(){var e=D&&t&&(0,i.isLocalURL)(f),_="undefined"!==typeof E?E:r&&r.locale,n=a[f+"%"+d+(_?"%"+_:"")];e&&!n&&c(r,f,d,{locale:_})}),[d,f,D,E,t,r]);var w={ref:g,onClick:function(e){y.props&&"function"===typeof y.props.onClick&&y.props.onClick(e),e.defaultPrevented||function(e,t,r,_,n,s,o,u){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,i.isLocalURL)(r))&&(e.preventDefault(),null==o&&(o=_.indexOf("#")<0),t[n?"replace":"push"](r,_,{shallow:s,locale:u,scroll:o}).then((function(e){e&&o&&document.body.focus()})))}(e,r,f,d,p,m,v,E)},onMouseEnter:function(e){(0,i.isLocalURL)(f)&&(y.props&&"function"===typeof y.props.onMouseEnter&&y.props.onMouseEnter(e),c(r,f,d,{priority:!0}))}};if(e.passHref||"a"===y.type&&!("href"in y.props)){var C="undefined"!==typeof E?E:r&&r.locale,R=r&&r.isLocaleDomain&&(0,i.getDomainLocale)(d,C,r&&r.locales,r&&r.domainLocales);w.href=R||(0,i.addBasePath)((0,i.addLocale)(d,C,r&&r.defaultLocale))}return s.default.cloneElement(y,w)};t.default=l},O94r:function(e,t,r){var _;!function(){"use strict";var r={}.hasOwnProperty;function n(){for(var e=[],t=0;t<arguments.length;t++){var _=arguments[t];if(_){var s=typeof _;if("string"===s||"number"===s)e.push(_);else if(Array.isArray(_)&&_.length){var i=n.apply(null,_);i&&e.push(i)}else if("object"===s)for(var o in _)r.call(_,o)&&_[o]&&e.push(o)}}return e.join(" ")}e.exports?(n.default=n,e.exports=n):void 0===(_=function(){return n}.apply(t,[]))||(e.exports=_)}()},TBv3:function(e,t,r){"use strict";e.exports=function(e){for(var t=5381,r=e.length;r;)t=33*t^e.charCodeAt(--r);return t>>>0}},iKkk:function(e,t,r){"use strict";t.__esModule=!0,t.flush=function(){var e=s.cssRules();return s.flush(),e},t.default=void 0;var _,n=r("ERkP");var s=new(((_=r("icap"))&&_.__esModule?_:{default:_}).default),i=function(e){var t,r;function _(t){var r;return(r=e.call(this,t)||this).prevProps={},r}r=e,(t=_).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,_.dynamic=function(e){return e.map((function(e){var t=e[0],r=e[1];return s.computeId(t,r)})).join(" ")};var n=_.prototype;return n.shouldComponentUpdate=function(e){return this.props.id!==e.id||String(this.props.dynamic)!==String(e.dynamic)},n.componentWillUnmount=function(){s.remove(this.props)},n.render=function(){return this.shouldComponentUpdate(this.prevProps)&&(this.prevProps.id&&s.remove(this.prevProps),s.add(this.props),this.prevProps=this.props),null},_}(n.Component);t.default=i},icap:function(e,t,r){"use strict";t.__esModule=!0,t.default=void 0;var _=s(r("TBv3")),n=s(r("0iIO"));function s(e){return e&&e.__esModule?e:{default:e}}var i=function(){function e(e){var t=void 0===e?{}:e,r=t.styleSheet,_=void 0===r?null:r,s=t.optimizeForSpeed,i=void 0!==s&&s,o=t.isBrowser,u=void 0===o?"undefined"!==typeof window:o;this._sheet=_||new n.default({name:"styled-jsx",optimizeForSpeed:i}),this._sheet.inject(),_&&"boolean"===typeof i&&(this._sheet.setOptimizeForSpeed(i),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._isBrowser=u,this._fromServer=void 0,this._indices={},this._instancesCounts={},this.computeId=this.createComputeId(),this.computeSelector=this.createComputeSelector()}var t=e.prototype;return t.add=function(e){var t=this;void 0===this._optimizeForSpeed&&(this._optimizeForSpeed=Array.isArray(e.children),this._sheet.setOptimizeForSpeed(this._optimizeForSpeed),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._isBrowser&&!this._fromServer&&(this._fromServer=this.selectFromServer(),this._instancesCounts=Object.keys(this._fromServer).reduce((function(e,t){return e[t]=0,e}),{}));var r=this.getIdAndRules(e),_=r.styleId,n=r.rules;if(_ in this._instancesCounts)this._instancesCounts[_]+=1;else{var s=n.map((function(e){return t._sheet.insertRule(e)})).filter((function(e){return-1!==e}));this._indices[_]=s,this._instancesCounts[_]=1}},t.remove=function(e){var t=this,r=this.getIdAndRules(e).styleId;if(function(e,t){if(!e)throw new Error("StyleSheetRegistry: "+t+".")}(r in this._instancesCounts,"styleId: `"+r+"` not found"),this._instancesCounts[r]-=1,this._instancesCounts[r]<1){var _=this._fromServer&&this._fromServer[r];_?(_.parentNode.removeChild(_),delete this._fromServer[r]):(this._indices[r].forEach((function(e){return t._sheet.deleteRule(e)})),delete this._indices[r]),delete this._instancesCounts[r]}},t.update=function(e,t){this.add(t),this.remove(e)},t.flush=function(){this._sheet.flush(),this._sheet.inject(),this._fromServer=void 0,this._indices={},this._instancesCounts={},this.computeId=this.createComputeId(),this.computeSelector=this.createComputeSelector()},t.cssRules=function(){var e=this,t=this._fromServer?Object.keys(this._fromServer).map((function(t){return[t,e._fromServer[t]]})):[],r=this._sheet.cssRules();return t.concat(Object.keys(this._indices).map((function(t){return[t,e._indices[t].map((function(e){return r[e].cssText})).join(e._optimizeForSpeed?"":"\n")]})).filter((function(e){return Boolean(e[1])})))},t.createComputeId=function(){var e={};return function(t,r){if(!r)return"jsx-"+t;var n=String(r),s=t+n;return e[s]||(e[s]="jsx-"+(0,_.default)(t+"-"+n)),e[s]}},t.createComputeSelector=function(e){void 0===e&&(e=/__jsx-style-dynamic-selector/g);var t={};return function(r,_){this._isBrowser||(_=_.replace(/\/style/gi,"\\/style"));var n=r+_;return t[n]||(t[n]=_.replace(e,r)),t[n]}},t.getIdAndRules=function(e){var t=this,r=e.children,_=e.dynamic,n=e.id;if(_){var s=this.computeId(n,_);return{styleId:s,rules:Array.isArray(r)?r.map((function(e){return t.computeSelector(s,e)})):[this.computeSelector(s,r)]}}return{styleId:this.computeId(n),rules:Array.isArray(r)?r:[r]}},t.selectFromServer=function(){return Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]')).reduce((function(e,t){return e[t.id.slice(2)]=t,e}),{})},e}();t.default=i},jvFD:function(e,t,r){e.exports=r("KeDb")},rni4:function(e,t,r){var _,n,s;n=[],void 0===(s="function"===typeof(_=function(){var e=function(){},t={},r={},_={};function n(e,t){e=e.push?e:[e];var n,s,i,o=[],u=e.length,a=u;for(n=function(e,r){r.length&&o.push(e),--a||t(o)};u--;)s=e[u],(i=r[s])?n(s,i):(_[s]=_[s]||[]).push(n)}function s(e,t){if(e){var n=_[e];if(r[e]=t,n)for(;n.length;)n[0](e,t),n.splice(0,1)}}function i(t,r){t.call&&(t={success:t}),r.length?(t.error||e)(r):(t.success||e)(t)}function o(t,r,_,n){var s,i,u=document,a=_.async,c=(_.numRetries||0)+1,l=_.before||e,f=t.replace(/[\?|#].*$/,""),d=t.replace(/^(css|img)!/,"");n=n||0,/(^css!|\.css$)/.test(f)?((i=u.createElement("link")).rel="stylesheet",i.href=d,(s="hideFocus"in i)&&i.relList&&(s=0,i.rel="preload",i.as="style")):/(^img!|\.(png|gif|jpg|svg|webp)$)/.test(f)?(i=u.createElement("img")).src=d:((i=u.createElement("script")).src=t,i.async=void 0===a||a),i.onload=i.onerror=i.onbeforeload=function(e){var u=e.type[0];if(s)try{i.sheet.cssText.length||(u="e")}catch(a){18!=a.code&&(u="e")}if("e"==u){if((n+=1)<c)return o(t,r,_,n)}else if("preload"==i.rel&&"style"==i.as)return i.rel="stylesheet";r(t,u,e.defaultPrevented)},!1!==l(t,i)&&u.head.appendChild(i)}function u(e,t,r){var _,n,s=(e=e.push?e:[e]).length,i=s,u=[];for(_=function(e,r,_){if("e"==r&&u.push(e),"b"==r){if(!_)return;u.push(e)}--s||t(u)},n=0;n<i;n++)o(e[n],_,r)}function a(e,r,_){var n,o;if(r&&r.trim&&(n=r),o=(n?_:r)||{},n){if(n in t)throw"LoadJS";t[n]=!0}function a(t,r){u(e,(function(e){i(o,e),t&&i({success:t,error:r},e),s(n,e)}),o)}if(o.returnPromise)return new Promise(a);a()}return a.ready=function(e,t){return n(e,(function(e){i(t,e)})),a},a.done=function(e){s(e,[])},a.reset=function(){t={},r={},_={}},a.isDefined=function(e){return e in t},a})?_.apply(t,n):_)||(e.exports=s)},sQQS:function(e,t,r){"use strict";r.d(t,"a",(function(){return l}));var _=r("VtSi"),n=r.n(_);function s(e,t,r,_,n,s,i){try{var o=e[s](i),u=o.value}catch(a){return void r(a)}o.done?t(u):Promise.resolve(u).then(_,n)}var i=r("rni4"),o=r.n(i),u=!1,a=function(e){return new Promise((function(t){if(u)return t();u=!0,o()(["".concat(e,"/monaco-editor/min/vs/loader.js")],(function(){window.require.config({paths:{vs:"monaco-editor/min/vs"}}),window.require(["vs/editor/editor.main.nls","vs/editor/editor.main"],t),monaco.editor.defineTheme("myTheme",{base:"vs",inherit:!0,rules:[],colors:{"editor.lineHighlightBackground":"#00000000","editor.lineHighlightBorder":"#00000000"}})}))}))},c=["const data: IUIFlowSchema = ","","{",'   type: "object",',"   properties: [","      {}","   ]","}"].join("\n"),l=function(){var e,t=(e=n.a.mark((function e(t,r){var _,s,i,o,u,l,f,d;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=r.assetPrefix,i=void 0===s?"":s,o=r.onChange,(u=function(e){e&&(null===o||void 0===o||o(e.substr(e.indexOf("{"),e.length)))})(c),e.next=5,a(i);case 5:if(t){e.next=7;break}return e.abrupt("return");case 7:return e.next=9,fetch("".concat(i,"/playground.d.ts")).then((function(e){return e.text()}));case 9:l=e.sent,monaco.languages.typescript.typescriptDefaults.addExtraLib(l,"index.d.ts"),f=[c].join("\n"),d=monaco.editor.create(t,{quickSuggestions:!0,model:monaco.editor.createModel(f,"typescript",monaco.Uri.parse("inmemory://model/main.ts")),theme:"myTheme",lineNumbers:"on",minimap:{enabled:!1},scrollBeyondLastLine:!1,fontSize:16,automaticLayout:!0,tabSize:3,insertSpaces:!0,formatOnType:!0}),u(null===(_=d.getModel())||void 0===_?void 0:_.getValue()),d.onDidChangeCursorPosition((function(e){e.position.lineNumber<=2&&d.setPosition({lineNumber:3,column:1})})),d.onDidChangeModelContent((function(){u()}));case 16:case"end":return e.stop()}}),e)})),function(){var t=this,r=arguments;return new Promise((function(_,n){var i=e.apply(t,r);function o(e){s(i,_,n,o,u,"next",e)}function u(e){s(i,_,n,o,u,"throw",e)}o(void 0)}))});return function(e,r){return t.apply(this,arguments)}}()},yFcC:function(e,t,r){e.exports=r("iKkk")}},[["DLdB",0,1,2,4,3,5]]]);