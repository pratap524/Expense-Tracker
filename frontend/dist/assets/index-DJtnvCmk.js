function td(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const a in r)if(a!=="default"&&!(a in e)){const l=Object.getOwnPropertyDescriptor(r,a);l&&Object.defineProperty(e,a,l.get?l:{enumerable:!0,get:()=>r[a]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const s of l.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(a){if(a.ep)return;a.ep=!0;const l=n(a);fetch(a.href,l)}})();function nd(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var jo={exports:{}},ha={},Po={exports:{}},M={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sr=Symbol.for("react.element"),rd=Symbol.for("react.portal"),ad=Symbol.for("react.fragment"),ld=Symbol.for("react.strict_mode"),sd=Symbol.for("react.profiler"),id=Symbol.for("react.provider"),od=Symbol.for("react.context"),ud=Symbol.for("react.forward_ref"),cd=Symbol.for("react.suspense"),dd=Symbol.for("react.memo"),fd=Symbol.for("react.lazy"),oi=Symbol.iterator;function pd(e){return e===null||typeof e!="object"?null:(e=oi&&e[oi]||e["@@iterator"],typeof e=="function"?e:null)}var Lo={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},To=Object.assign,Mo={};function fn(e,t,n){this.props=e,this.context=t,this.refs=Mo,this.updater=n||Lo}fn.prototype.isReactComponent={};fn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};fn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function zo(){}zo.prototype=fn.prototype;function as(e,t,n){this.props=e,this.context=t,this.refs=Mo,this.updater=n||Lo}var ls=as.prototype=new zo;ls.constructor=as;To(ls,fn.prototype);ls.isPureReactComponent=!0;var ui=Array.isArray,Io=Object.prototype.hasOwnProperty,ss={current:null},Ro={key:!0,ref:!0,__self:!0,__source:!0};function Oo(e,t,n){var r,a={},l=null,s=null;if(t!=null)for(r in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(l=""+t.key),t)Io.call(t,r)&&!Ro.hasOwnProperty(r)&&(a[r]=t[r]);var i=arguments.length-2;if(i===1)a.children=n;else if(1<i){for(var o=Array(i),u=0;u<i;u++)o[u]=arguments[u+2];a.children=o}if(e&&e.defaultProps)for(r in i=e.defaultProps,i)a[r]===void 0&&(a[r]=i[r]);return{$$typeof:sr,type:e,key:l,ref:s,props:a,_owner:ss.current}}function md(e,t){return{$$typeof:sr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function is(e){return typeof e=="object"&&e!==null&&e.$$typeof===sr}function hd(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var ci=/\/+/g;function Ra(e,t){return typeof e=="object"&&e!==null&&e.key!=null?hd(""+e.key):t.toString(36)}function Tr(e,t,n,r,a){var l=typeof e;(l==="undefined"||l==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(l){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case sr:case rd:s=!0}}if(s)return s=e,a=a(s),e=r===""?"."+Ra(s,0):r,ui(a)?(n="",e!=null&&(n=e.replace(ci,"$&/")+"/"),Tr(a,t,n,"",function(u){return u})):a!=null&&(is(a)&&(a=md(a,n+(!a.key||s&&s.key===a.key?"":(""+a.key).replace(ci,"$&/")+"/")+e)),t.push(a)),1;if(s=0,r=r===""?".":r+":",ui(e))for(var i=0;i<e.length;i++){l=e[i];var o=r+Ra(l,i);s+=Tr(l,t,n,o,a)}else if(o=pd(e),typeof o=="function")for(e=o.call(e),i=0;!(l=e.next()).done;)l=l.value,o=r+Ra(l,i++),s+=Tr(l,t,n,o,a);else if(l==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function mr(e,t,n){if(e==null)return e;var r=[],a=0;return Tr(e,r,"","",function(l){return t.call(n,l,a++)}),r}function vd(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ue={current:null},Mr={transition:null},xd={ReactCurrentDispatcher:ue,ReactCurrentBatchConfig:Mr,ReactCurrentOwner:ss};function Fo(){throw Error("act(...) is not supported in production builds of React.")}M.Children={map:mr,forEach:function(e,t,n){mr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return mr(e,function(){t++}),t},toArray:function(e){return mr(e,function(t){return t})||[]},only:function(e){if(!is(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};M.Component=fn;M.Fragment=ad;M.Profiler=sd;M.PureComponent=as;M.StrictMode=ld;M.Suspense=cd;M.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=xd;M.act=Fo;M.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=To({},e.props),a=e.key,l=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(l=t.ref,s=ss.current),t.key!==void 0&&(a=""+t.key),e.type&&e.type.defaultProps)var i=e.type.defaultProps;for(o in t)Io.call(t,o)&&!Ro.hasOwnProperty(o)&&(r[o]=t[o]===void 0&&i!==void 0?i[o]:t[o])}var o=arguments.length-2;if(o===1)r.children=n;else if(1<o){i=Array(o);for(var u=0;u<o;u++)i[u]=arguments[u+2];r.children=i}return{$$typeof:sr,type:e.type,key:a,ref:l,props:r,_owner:s}};M.createContext=function(e){return e={$$typeof:od,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:id,_context:e},e.Consumer=e};M.createElement=Oo;M.createFactory=function(e){var t=Oo.bind(null,e);return t.type=e,t};M.createRef=function(){return{current:null}};M.forwardRef=function(e){return{$$typeof:ud,render:e}};M.isValidElement=is;M.lazy=function(e){return{$$typeof:fd,_payload:{_status:-1,_result:e},_init:vd}};M.memo=function(e,t){return{$$typeof:dd,type:e,compare:t===void 0?null:t}};M.startTransition=function(e){var t=Mr.transition;Mr.transition={};try{e()}finally{Mr.transition=t}};M.unstable_act=Fo;M.useCallback=function(e,t){return ue.current.useCallback(e,t)};M.useContext=function(e){return ue.current.useContext(e)};M.useDebugValue=function(){};M.useDeferredValue=function(e){return ue.current.useDeferredValue(e)};M.useEffect=function(e,t){return ue.current.useEffect(e,t)};M.useId=function(){return ue.current.useId()};M.useImperativeHandle=function(e,t,n){return ue.current.useImperativeHandle(e,t,n)};M.useInsertionEffect=function(e,t){return ue.current.useInsertionEffect(e,t)};M.useLayoutEffect=function(e,t){return ue.current.useLayoutEffect(e,t)};M.useMemo=function(e,t){return ue.current.useMemo(e,t)};M.useReducer=function(e,t,n){return ue.current.useReducer(e,t,n)};M.useRef=function(e){return ue.current.useRef(e)};M.useState=function(e){return ue.current.useState(e)};M.useSyncExternalStore=function(e,t,n){return ue.current.useSyncExternalStore(e,t,n)};M.useTransition=function(){return ue.current.useTransition()};M.version="18.3.1";Po.exports=M;var k=Po.exports;const Ao=nd(k),gd=td({__proto__:null,default:Ao},[k]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yd=k,bd=Symbol.for("react.element"),wd=Symbol.for("react.fragment"),kd=Object.prototype.hasOwnProperty,Sd=yd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,_d={key:!0,ref:!0,__self:!0,__source:!0};function Do(e,t,n){var r,a={},l=null,s=null;n!==void 0&&(l=""+n),t.key!==void 0&&(l=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)kd.call(t,r)&&!_d.hasOwnProperty(r)&&(a[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)a[r]===void 0&&(a[r]=t[r]);return{$$typeof:bd,type:e,key:l,ref:s,props:a,_owner:Sd.current}}ha.Fragment=wd;ha.jsx=Do;ha.jsxs=Do;jo.exports=ha;var v=jo.exports,ol={},Uo={exports:{}},be={},Bo={exports:{}},Wo={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(C,L){var T=C.length;C.push(L);e:for(;0<T;){var $=T-1>>>1,G=C[$];if(0<a(G,L))C[$]=L,C[T]=G,T=$;else break e}}function n(C){return C.length===0?null:C[0]}function r(C){if(C.length===0)return null;var L=C[0],T=C.pop();if(T!==L){C[0]=T;e:for(var $=0,G=C.length,fr=G>>>1;$<fr;){var wt=2*($+1)-1,Ia=C[wt],kt=wt+1,pr=C[kt];if(0>a(Ia,T))kt<G&&0>a(pr,Ia)?(C[$]=pr,C[kt]=T,$=kt):(C[$]=Ia,C[wt]=T,$=wt);else if(kt<G&&0>a(pr,T))C[$]=pr,C[kt]=T,$=kt;else break e}}return L}function a(C,L){var T=C.sortIndex-L.sortIndex;return T!==0?T:C.id-L.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;e.unstable_now=function(){return l.now()}}else{var s=Date,i=s.now();e.unstable_now=function(){return s.now()-i}}var o=[],u=[],h=1,d=null,m=3,g=!1,y=!1,b=!1,_=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(C){for(var L=n(u);L!==null;){if(L.callback===null)r(u);else if(L.startTime<=C)r(u),L.sortIndex=L.expirationTime,t(o,L);else break;L=n(u)}}function x(C){if(b=!1,p(C),!y)if(n(o)!==null)y=!0,Ma(S);else{var L=n(u);L!==null&&za(x,L.startTime-C)}}function S(C,L){y=!1,b&&(b=!1,f(P),P=-1),g=!0;var T=m;try{for(p(L),d=n(o);d!==null&&(!(d.expirationTime>L)||C&&!je());){var $=d.callback;if(typeof $=="function"){d.callback=null,m=d.priorityLevel;var G=$(d.expirationTime<=L);L=e.unstable_now(),typeof G=="function"?d.callback=G:d===n(o)&&r(o),p(L)}else r(o);d=n(o)}if(d!==null)var fr=!0;else{var wt=n(u);wt!==null&&za(x,wt.startTime-L),fr=!1}return fr}finally{d=null,m=T,g=!1}}var N=!1,j=null,P=-1,V=5,z=-1;function je(){return!(e.unstable_now()-z<V)}function gn(){if(j!==null){var C=e.unstable_now();z=C;var L=!0;try{L=j(!0,C)}finally{L?yn():(N=!1,j=null)}}else N=!1}var yn;if(typeof c=="function")yn=function(){c(gn)};else if(typeof MessageChannel<"u"){var ii=new MessageChannel,ed=ii.port2;ii.port1.onmessage=gn,yn=function(){ed.postMessage(null)}}else yn=function(){_(gn,0)};function Ma(C){j=C,N||(N=!0,yn())}function za(C,L){P=_(function(){C(e.unstable_now())},L)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(C){C.callback=null},e.unstable_continueExecution=function(){y||g||(y=!0,Ma(S))},e.unstable_forceFrameRate=function(C){0>C||125<C?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):V=0<C?Math.floor(1e3/C):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return n(o)},e.unstable_next=function(C){switch(m){case 1:case 2:case 3:var L=3;break;default:L=m}var T=m;m=L;try{return C()}finally{m=T}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(C,L){switch(C){case 1:case 2:case 3:case 4:case 5:break;default:C=3}var T=m;m=C;try{return L()}finally{m=T}},e.unstable_scheduleCallback=function(C,L,T){var $=e.unstable_now();switch(typeof T=="object"&&T!==null?(T=T.delay,T=typeof T=="number"&&0<T?$+T:$):T=$,C){case 1:var G=-1;break;case 2:G=250;break;case 5:G=1073741823;break;case 4:G=1e4;break;default:G=5e3}return G=T+G,C={id:h++,callback:L,priorityLevel:C,startTime:T,expirationTime:G,sortIndex:-1},T>$?(C.sortIndex=T,t(u,C),n(o)===null&&C===n(u)&&(b?(f(P),P=-1):b=!0,za(x,T-$))):(C.sortIndex=G,t(o,C),y||g||(y=!0,Ma(S))),C},e.unstable_shouldYield=je,e.unstable_wrapCallback=function(C){var L=m;return function(){var T=m;m=L;try{return C.apply(this,arguments)}finally{m=T}}}})(Wo);Bo.exports=Wo;var Ed=Bo.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cd=k,ye=Ed;function w(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Ho=new Set,Bn={};function Rt(e,t){an(e,t),an(e+"Capture",t)}function an(e,t){for(Bn[e]=t,e=0;e<t.length;e++)Ho.add(t[e])}var Qe=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ul=Object.prototype.hasOwnProperty,Nd=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,di={},fi={};function jd(e){return ul.call(fi,e)?!0:ul.call(di,e)?!1:Nd.test(e)?fi[e]=!0:(di[e]=!0,!1)}function Pd(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Ld(e,t,n,r){if(t===null||typeof t>"u"||Pd(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ce(e,t,n,r,a,l,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=a,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=l,this.removeEmptyString=s}var ne={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ne[e]=new ce(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ne[t]=new ce(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ne[e]=new ce(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ne[e]=new ce(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ne[e]=new ce(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ne[e]=new ce(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ne[e]=new ce(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ne[e]=new ce(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ne[e]=new ce(e,5,!1,e.toLowerCase(),null,!1,!1)});var os=/[\-:]([a-z])/g;function us(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(os,us);ne[t]=new ce(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(os,us);ne[t]=new ce(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(os,us);ne[t]=new ce(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ne[e]=new ce(e,1,!1,e.toLowerCase(),null,!1,!1)});ne.xlinkHref=new ce("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ne[e]=new ce(e,1,!1,e.toLowerCase(),null,!0,!0)});function cs(e,t,n,r){var a=ne.hasOwnProperty(t)?ne[t]:null;(a!==null?a.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Ld(t,n,a,r)&&(n=null),r||a===null?jd(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):a.mustUseProperty?e[a.propertyName]=n===null?a.type===3?!1:"":n:(t=a.attributeName,r=a.attributeNamespace,n===null?e.removeAttribute(t):(a=a.type,n=a===3||a===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Xe=Cd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,hr=Symbol.for("react.element"),Ut=Symbol.for("react.portal"),Bt=Symbol.for("react.fragment"),ds=Symbol.for("react.strict_mode"),cl=Symbol.for("react.profiler"),Vo=Symbol.for("react.provider"),$o=Symbol.for("react.context"),fs=Symbol.for("react.forward_ref"),dl=Symbol.for("react.suspense"),fl=Symbol.for("react.suspense_list"),ps=Symbol.for("react.memo"),Ze=Symbol.for("react.lazy"),Qo=Symbol.for("react.offscreen"),pi=Symbol.iterator;function bn(e){return e===null||typeof e!="object"?null:(e=pi&&e[pi]||e["@@iterator"],typeof e=="function"?e:null)}var W=Object.assign,Oa;function jn(e){if(Oa===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Oa=t&&t[1]||""}return`
`+Oa+e}var Fa=!1;function Aa(e,t){if(!e||Fa)return"";Fa=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var a=u.stack.split(`
`),l=r.stack.split(`
`),s=a.length-1,i=l.length-1;1<=s&&0<=i&&a[s]!==l[i];)i--;for(;1<=s&&0<=i;s--,i--)if(a[s]!==l[i]){if(s!==1||i!==1)do if(s--,i--,0>i||a[s]!==l[i]){var o=`
`+a[s].replace(" at new "," at ");return e.displayName&&o.includes("<anonymous>")&&(o=o.replace("<anonymous>",e.displayName)),o}while(1<=s&&0<=i);break}}}finally{Fa=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?jn(e):""}function Td(e){switch(e.tag){case 5:return jn(e.type);case 16:return jn("Lazy");case 13:return jn("Suspense");case 19:return jn("SuspenseList");case 0:case 2:case 15:return e=Aa(e.type,!1),e;case 11:return e=Aa(e.type.render,!1),e;case 1:return e=Aa(e.type,!0),e;default:return""}}function pl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Bt:return"Fragment";case Ut:return"Portal";case cl:return"Profiler";case ds:return"StrictMode";case dl:return"Suspense";case fl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case $o:return(e.displayName||"Context")+".Consumer";case Vo:return(e._context.displayName||"Context")+".Provider";case fs:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ps:return t=e.displayName||null,t!==null?t:pl(e.type)||"Memo";case Ze:t=e._payload,e=e._init;try{return pl(e(t))}catch{}}return null}function Md(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return pl(t);case 8:return t===ds?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function mt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Yo(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function zd(e){var t=Yo(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var a=n.get,l=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(s){r=""+s,l.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function vr(e){e._valueTracker||(e._valueTracker=zd(e))}function Ko(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Yo(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Hr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ml(e,t){var n=t.checked;return W({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function mi(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=mt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Jo(e,t){t=t.checked,t!=null&&cs(e,"checked",t,!1)}function hl(e,t){Jo(e,t);var n=mt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?vl(e,t.type,n):t.hasOwnProperty("defaultValue")&&vl(e,t.type,mt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function hi(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function vl(e,t,n){(t!=="number"||Hr(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Pn=Array.isArray;function Zt(e,t,n,r){if(e=e.options,t){t={};for(var a=0;a<n.length;a++)t["$"+n[a]]=!0;for(n=0;n<e.length;n++)a=t.hasOwnProperty("$"+e[n].value),e[n].selected!==a&&(e[n].selected=a),a&&r&&(e[n].defaultSelected=!0)}else{for(n=""+mt(n),t=null,a=0;a<e.length;a++){if(e[a].value===n){e[a].selected=!0,r&&(e[a].defaultSelected=!0);return}t!==null||e[a].disabled||(t=e[a])}t!==null&&(t.selected=!0)}}function xl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(w(91));return W({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function vi(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(w(92));if(Pn(n)){if(1<n.length)throw Error(w(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:mt(n)}}function Xo(e,t){var n=mt(t.value),r=mt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function xi(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Go(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function gl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Go(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var xr,Zo=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,a){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,a)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(xr=xr||document.createElement("div"),xr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=xr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Wn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Mn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Id=["Webkit","ms","Moz","O"];Object.keys(Mn).forEach(function(e){Id.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Mn[t]=Mn[e]})});function qo(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Mn.hasOwnProperty(e)&&Mn[e]?(""+t).trim():t+"px"}function eu(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,a=qo(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,a):e[n]=a}}var Rd=W({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function yl(e,t){if(t){if(Rd[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(w(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(w(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(w(61))}if(t.style!=null&&typeof t.style!="object")throw Error(w(62))}}function bl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var wl=null;function ms(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var kl=null,qt=null,en=null;function gi(e){if(e=ur(e)){if(typeof kl!="function")throw Error(w(280));var t=e.stateNode;t&&(t=ba(t),kl(e.stateNode,e.type,t))}}function tu(e){qt?en?en.push(e):en=[e]:qt=e}function nu(){if(qt){var e=qt,t=en;if(en=qt=null,gi(e),t)for(e=0;e<t.length;e++)gi(t[e])}}function ru(e,t){return e(t)}function au(){}var Da=!1;function lu(e,t,n){if(Da)return e(t,n);Da=!0;try{return ru(e,t,n)}finally{Da=!1,(qt!==null||en!==null)&&(au(),nu())}}function Hn(e,t){var n=e.stateNode;if(n===null)return null;var r=ba(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(w(231,t,typeof n));return n}var Sl=!1;if(Qe)try{var wn={};Object.defineProperty(wn,"passive",{get:function(){Sl=!0}}),window.addEventListener("test",wn,wn),window.removeEventListener("test",wn,wn)}catch{Sl=!1}function Od(e,t,n,r,a,l,s,i,o){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(h){this.onError(h)}}var zn=!1,Vr=null,$r=!1,_l=null,Fd={onError:function(e){zn=!0,Vr=e}};function Ad(e,t,n,r,a,l,s,i,o){zn=!1,Vr=null,Od.apply(Fd,arguments)}function Dd(e,t,n,r,a,l,s,i,o){if(Ad.apply(this,arguments),zn){if(zn){var u=Vr;zn=!1,Vr=null}else throw Error(w(198));$r||($r=!0,_l=u)}}function Ot(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function su(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function yi(e){if(Ot(e)!==e)throw Error(w(188))}function Ud(e){var t=e.alternate;if(!t){if(t=Ot(e),t===null)throw Error(w(188));return t!==e?null:e}for(var n=e,r=t;;){var a=n.return;if(a===null)break;var l=a.alternate;if(l===null){if(r=a.return,r!==null){n=r;continue}break}if(a.child===l.child){for(l=a.child;l;){if(l===n)return yi(a),e;if(l===r)return yi(a),t;l=l.sibling}throw Error(w(188))}if(n.return!==r.return)n=a,r=l;else{for(var s=!1,i=a.child;i;){if(i===n){s=!0,n=a,r=l;break}if(i===r){s=!0,r=a,n=l;break}i=i.sibling}if(!s){for(i=l.child;i;){if(i===n){s=!0,n=l,r=a;break}if(i===r){s=!0,r=l,n=a;break}i=i.sibling}if(!s)throw Error(w(189))}}if(n.alternate!==r)throw Error(w(190))}if(n.tag!==3)throw Error(w(188));return n.stateNode.current===n?e:t}function iu(e){return e=Ud(e),e!==null?ou(e):null}function ou(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=ou(e);if(t!==null)return t;e=e.sibling}return null}var uu=ye.unstable_scheduleCallback,bi=ye.unstable_cancelCallback,Bd=ye.unstable_shouldYield,Wd=ye.unstable_requestPaint,Q=ye.unstable_now,Hd=ye.unstable_getCurrentPriorityLevel,hs=ye.unstable_ImmediatePriority,cu=ye.unstable_UserBlockingPriority,Qr=ye.unstable_NormalPriority,Vd=ye.unstable_LowPriority,du=ye.unstable_IdlePriority,va=null,De=null;function $d(e){if(De&&typeof De.onCommitFiberRoot=="function")try{De.onCommitFiberRoot(va,e,void 0,(e.current.flags&128)===128)}catch{}}var ze=Math.clz32?Math.clz32:Kd,Qd=Math.log,Yd=Math.LN2;function Kd(e){return e>>>=0,e===0?32:31-(Qd(e)/Yd|0)|0}var gr=64,yr=4194304;function Ln(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Yr(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,a=e.suspendedLanes,l=e.pingedLanes,s=n&268435455;if(s!==0){var i=s&~a;i!==0?r=Ln(i):(l&=s,l!==0&&(r=Ln(l)))}else s=n&~a,s!==0?r=Ln(s):l!==0&&(r=Ln(l));if(r===0)return 0;if(t!==0&&t!==r&&!(t&a)&&(a=r&-r,l=t&-t,a>=l||a===16&&(l&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-ze(t),a=1<<n,r|=e[n],t&=~a;return r}function Jd(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Xd(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,a=e.expirationTimes,l=e.pendingLanes;0<l;){var s=31-ze(l),i=1<<s,o=a[s];o===-1?(!(i&n)||i&r)&&(a[s]=Jd(i,t)):o<=t&&(e.expiredLanes|=i),l&=~i}}function El(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function fu(){var e=gr;return gr<<=1,!(gr&4194240)&&(gr=64),e}function Ua(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function ir(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-ze(t),e[t]=n}function Gd(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var a=31-ze(n),l=1<<a;t[a]=0,r[a]=-1,e[a]=-1,n&=~l}}function vs(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-ze(n),a=1<<r;a&t|e[r]&t&&(e[r]|=t),n&=~a}}var R=0;function pu(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var mu,xs,hu,vu,xu,Cl=!1,br=[],lt=null,st=null,it=null,Vn=new Map,$n=new Map,et=[],Zd="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function wi(e,t){switch(e){case"focusin":case"focusout":lt=null;break;case"dragenter":case"dragleave":st=null;break;case"mouseover":case"mouseout":it=null;break;case"pointerover":case"pointerout":Vn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":$n.delete(t.pointerId)}}function kn(e,t,n,r,a,l){return e===null||e.nativeEvent!==l?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:l,targetContainers:[a]},t!==null&&(t=ur(t),t!==null&&xs(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,a!==null&&t.indexOf(a)===-1&&t.push(a),e)}function qd(e,t,n,r,a){switch(t){case"focusin":return lt=kn(lt,e,t,n,r,a),!0;case"dragenter":return st=kn(st,e,t,n,r,a),!0;case"mouseover":return it=kn(it,e,t,n,r,a),!0;case"pointerover":var l=a.pointerId;return Vn.set(l,kn(Vn.get(l)||null,e,t,n,r,a)),!0;case"gotpointercapture":return l=a.pointerId,$n.set(l,kn($n.get(l)||null,e,t,n,r,a)),!0}return!1}function gu(e){var t=Et(e.target);if(t!==null){var n=Ot(t);if(n!==null){if(t=n.tag,t===13){if(t=su(n),t!==null){e.blockedOn=t,xu(e.priority,function(){hu(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function zr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Nl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);wl=r,n.target.dispatchEvent(r),wl=null}else return t=ur(n),t!==null&&xs(t),e.blockedOn=n,!1;t.shift()}return!0}function ki(e,t,n){zr(e)&&n.delete(t)}function ef(){Cl=!1,lt!==null&&zr(lt)&&(lt=null),st!==null&&zr(st)&&(st=null),it!==null&&zr(it)&&(it=null),Vn.forEach(ki),$n.forEach(ki)}function Sn(e,t){e.blockedOn===t&&(e.blockedOn=null,Cl||(Cl=!0,ye.unstable_scheduleCallback(ye.unstable_NormalPriority,ef)))}function Qn(e){function t(a){return Sn(a,e)}if(0<br.length){Sn(br[0],e);for(var n=1;n<br.length;n++){var r=br[n];r.blockedOn===e&&(r.blockedOn=null)}}for(lt!==null&&Sn(lt,e),st!==null&&Sn(st,e),it!==null&&Sn(it,e),Vn.forEach(t),$n.forEach(t),n=0;n<et.length;n++)r=et[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<et.length&&(n=et[0],n.blockedOn===null);)gu(n),n.blockedOn===null&&et.shift()}var tn=Xe.ReactCurrentBatchConfig,Kr=!0;function tf(e,t,n,r){var a=R,l=tn.transition;tn.transition=null;try{R=1,gs(e,t,n,r)}finally{R=a,tn.transition=l}}function nf(e,t,n,r){var a=R,l=tn.transition;tn.transition=null;try{R=4,gs(e,t,n,r)}finally{R=a,tn.transition=l}}function gs(e,t,n,r){if(Kr){var a=Nl(e,t,n,r);if(a===null)Xa(e,t,r,Jr,n),wi(e,r);else if(qd(a,e,t,n,r))r.stopPropagation();else if(wi(e,r),t&4&&-1<Zd.indexOf(e)){for(;a!==null;){var l=ur(a);if(l!==null&&mu(l),l=Nl(e,t,n,r),l===null&&Xa(e,t,r,Jr,n),l===a)break;a=l}a!==null&&r.stopPropagation()}else Xa(e,t,r,null,n)}}var Jr=null;function Nl(e,t,n,r){if(Jr=null,e=ms(r),e=Et(e),e!==null)if(t=Ot(e),t===null)e=null;else if(n=t.tag,n===13){if(e=su(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Jr=e,null}function yu(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Hd()){case hs:return 1;case cu:return 4;case Qr:case Vd:return 16;case du:return 536870912;default:return 16}default:return 16}}var nt=null,ys=null,Ir=null;function bu(){if(Ir)return Ir;var e,t=ys,n=t.length,r,a="value"in nt?nt.value:nt.textContent,l=a.length;for(e=0;e<n&&t[e]===a[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===a[l-r];r++);return Ir=a.slice(e,1<r?1-r:void 0)}function Rr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function wr(){return!0}function Si(){return!1}function we(e){function t(n,r,a,l,s){this._reactName=n,this._targetInst=a,this.type=r,this.nativeEvent=l,this.target=s,this.currentTarget=null;for(var i in e)e.hasOwnProperty(i)&&(n=e[i],this[i]=n?n(l):l[i]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?wr:Si,this.isPropagationStopped=Si,this}return W(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=wr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=wr)},persist:function(){},isPersistent:wr}),t}var pn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},bs=we(pn),or=W({},pn,{view:0,detail:0}),rf=we(or),Ba,Wa,_n,xa=W({},or,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ws,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==_n&&(_n&&e.type==="mousemove"?(Ba=e.screenX-_n.screenX,Wa=e.screenY-_n.screenY):Wa=Ba=0,_n=e),Ba)},movementY:function(e){return"movementY"in e?e.movementY:Wa}}),_i=we(xa),af=W({},xa,{dataTransfer:0}),lf=we(af),sf=W({},or,{relatedTarget:0}),Ha=we(sf),of=W({},pn,{animationName:0,elapsedTime:0,pseudoElement:0}),uf=we(of),cf=W({},pn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),df=we(cf),ff=W({},pn,{data:0}),Ei=we(ff),pf={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},mf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},hf={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function vf(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=hf[e])?!!t[e]:!1}function ws(){return vf}var xf=W({},or,{key:function(e){if(e.key){var t=pf[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Rr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?mf[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ws,charCode:function(e){return e.type==="keypress"?Rr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Rr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),gf=we(xf),yf=W({},xa,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ci=we(yf),bf=W({},or,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ws}),wf=we(bf),kf=W({},pn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Sf=we(kf),_f=W({},xa,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Ef=we(_f),Cf=[9,13,27,32],ks=Qe&&"CompositionEvent"in window,In=null;Qe&&"documentMode"in document&&(In=document.documentMode);var Nf=Qe&&"TextEvent"in window&&!In,wu=Qe&&(!ks||In&&8<In&&11>=In),Ni=" ",ji=!1;function ku(e,t){switch(e){case"keyup":return Cf.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Su(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Wt=!1;function jf(e,t){switch(e){case"compositionend":return Su(t);case"keypress":return t.which!==32?null:(ji=!0,Ni);case"textInput":return e=t.data,e===Ni&&ji?null:e;default:return null}}function Pf(e,t){if(Wt)return e==="compositionend"||!ks&&ku(e,t)?(e=bu(),Ir=ys=nt=null,Wt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return wu&&t.locale!=="ko"?null:t.data;default:return null}}var Lf={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Pi(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Lf[e.type]:t==="textarea"}function _u(e,t,n,r){tu(r),t=Xr(t,"onChange"),0<t.length&&(n=new bs("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Rn=null,Yn=null;function Tf(e){Ru(e,0)}function ga(e){var t=$t(e);if(Ko(t))return e}function Mf(e,t){if(e==="change")return t}var Eu=!1;if(Qe){var Va;if(Qe){var $a="oninput"in document;if(!$a){var Li=document.createElement("div");Li.setAttribute("oninput","return;"),$a=typeof Li.oninput=="function"}Va=$a}else Va=!1;Eu=Va&&(!document.documentMode||9<document.documentMode)}function Ti(){Rn&&(Rn.detachEvent("onpropertychange",Cu),Yn=Rn=null)}function Cu(e){if(e.propertyName==="value"&&ga(Yn)){var t=[];_u(t,Yn,e,ms(e)),lu(Tf,t)}}function zf(e,t,n){e==="focusin"?(Ti(),Rn=t,Yn=n,Rn.attachEvent("onpropertychange",Cu)):e==="focusout"&&Ti()}function If(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ga(Yn)}function Rf(e,t){if(e==="click")return ga(t)}function Of(e,t){if(e==="input"||e==="change")return ga(t)}function Ff(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Re=typeof Object.is=="function"?Object.is:Ff;function Kn(e,t){if(Re(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var a=n[r];if(!ul.call(t,a)||!Re(e[a],t[a]))return!1}return!0}function Mi(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function zi(e,t){var n=Mi(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Mi(n)}}function Nu(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Nu(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function ju(){for(var e=window,t=Hr();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Hr(e.document)}return t}function Ss(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Af(e){var t=ju(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Nu(n.ownerDocument.documentElement,n)){if(r!==null&&Ss(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var a=n.textContent.length,l=Math.min(r.start,a);r=r.end===void 0?l:Math.min(r.end,a),!e.extend&&l>r&&(a=r,r=l,l=a),a=zi(n,l);var s=zi(n,r);a&&s&&(e.rangeCount!==1||e.anchorNode!==a.node||e.anchorOffset!==a.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(a.node,a.offset),e.removeAllRanges(),l>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Df=Qe&&"documentMode"in document&&11>=document.documentMode,Ht=null,jl=null,On=null,Pl=!1;function Ii(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Pl||Ht==null||Ht!==Hr(r)||(r=Ht,"selectionStart"in r&&Ss(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),On&&Kn(On,r)||(On=r,r=Xr(jl,"onSelect"),0<r.length&&(t=new bs("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Ht)))}function kr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Vt={animationend:kr("Animation","AnimationEnd"),animationiteration:kr("Animation","AnimationIteration"),animationstart:kr("Animation","AnimationStart"),transitionend:kr("Transition","TransitionEnd")},Qa={},Pu={};Qe&&(Pu=document.createElement("div").style,"AnimationEvent"in window||(delete Vt.animationend.animation,delete Vt.animationiteration.animation,delete Vt.animationstart.animation),"TransitionEvent"in window||delete Vt.transitionend.transition);function ya(e){if(Qa[e])return Qa[e];if(!Vt[e])return e;var t=Vt[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Pu)return Qa[e]=t[n];return e}var Lu=ya("animationend"),Tu=ya("animationiteration"),Mu=ya("animationstart"),zu=ya("transitionend"),Iu=new Map,Ri="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function vt(e,t){Iu.set(e,t),Rt(t,[e])}for(var Ya=0;Ya<Ri.length;Ya++){var Ka=Ri[Ya],Uf=Ka.toLowerCase(),Bf=Ka[0].toUpperCase()+Ka.slice(1);vt(Uf,"on"+Bf)}vt(Lu,"onAnimationEnd");vt(Tu,"onAnimationIteration");vt(Mu,"onAnimationStart");vt("dblclick","onDoubleClick");vt("focusin","onFocus");vt("focusout","onBlur");vt(zu,"onTransitionEnd");an("onMouseEnter",["mouseout","mouseover"]);an("onMouseLeave",["mouseout","mouseover"]);an("onPointerEnter",["pointerout","pointerover"]);an("onPointerLeave",["pointerout","pointerover"]);Rt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Rt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Rt("onBeforeInput",["compositionend","keypress","textInput","paste"]);Rt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Rt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Rt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Tn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Wf=new Set("cancel close invalid load scroll toggle".split(" ").concat(Tn));function Oi(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Dd(r,t,void 0,e),e.currentTarget=null}function Ru(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],a=r.event;r=r.listeners;e:{var l=void 0;if(t)for(var s=r.length-1;0<=s;s--){var i=r[s],o=i.instance,u=i.currentTarget;if(i=i.listener,o!==l&&a.isPropagationStopped())break e;Oi(a,i,u),l=o}else for(s=0;s<r.length;s++){if(i=r[s],o=i.instance,u=i.currentTarget,i=i.listener,o!==l&&a.isPropagationStopped())break e;Oi(a,i,u),l=o}}}if($r)throw e=_l,$r=!1,_l=null,e}function F(e,t){var n=t[Il];n===void 0&&(n=t[Il]=new Set);var r=e+"__bubble";n.has(r)||(Ou(t,e,2,!1),n.add(r))}function Ja(e,t,n){var r=0;t&&(r|=4),Ou(n,e,r,t)}var Sr="_reactListening"+Math.random().toString(36).slice(2);function Jn(e){if(!e[Sr]){e[Sr]=!0,Ho.forEach(function(n){n!=="selectionchange"&&(Wf.has(n)||Ja(n,!1,e),Ja(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Sr]||(t[Sr]=!0,Ja("selectionchange",!1,t))}}function Ou(e,t,n,r){switch(yu(t)){case 1:var a=tf;break;case 4:a=nf;break;default:a=gs}n=a.bind(null,t,n,e),a=void 0,!Sl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(a=!0),r?a!==void 0?e.addEventListener(t,n,{capture:!0,passive:a}):e.addEventListener(t,n,!0):a!==void 0?e.addEventListener(t,n,{passive:a}):e.addEventListener(t,n,!1)}function Xa(e,t,n,r,a){var l=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var i=r.stateNode.containerInfo;if(i===a||i.nodeType===8&&i.parentNode===a)break;if(s===4)for(s=r.return;s!==null;){var o=s.tag;if((o===3||o===4)&&(o=s.stateNode.containerInfo,o===a||o.nodeType===8&&o.parentNode===a))return;s=s.return}for(;i!==null;){if(s=Et(i),s===null)return;if(o=s.tag,o===5||o===6){r=l=s;continue e}i=i.parentNode}}r=r.return}lu(function(){var u=l,h=ms(n),d=[];e:{var m=Iu.get(e);if(m!==void 0){var g=bs,y=e;switch(e){case"keypress":if(Rr(n)===0)break e;case"keydown":case"keyup":g=gf;break;case"focusin":y="focus",g=Ha;break;case"focusout":y="blur",g=Ha;break;case"beforeblur":case"afterblur":g=Ha;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=_i;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=lf;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=wf;break;case Lu:case Tu:case Mu:g=uf;break;case zu:g=Sf;break;case"scroll":g=rf;break;case"wheel":g=Ef;break;case"copy":case"cut":case"paste":g=df;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=Ci}var b=(t&4)!==0,_=!b&&e==="scroll",f=b?m!==null?m+"Capture":null:m;b=[];for(var c=u,p;c!==null;){p=c;var x=p.stateNode;if(p.tag===5&&x!==null&&(p=x,f!==null&&(x=Hn(c,f),x!=null&&b.push(Xn(c,x,p)))),_)break;c=c.return}0<b.length&&(m=new g(m,y,null,n,h),d.push({event:m,listeners:b}))}}if(!(t&7)){e:{if(m=e==="mouseover"||e==="pointerover",g=e==="mouseout"||e==="pointerout",m&&n!==wl&&(y=n.relatedTarget||n.fromElement)&&(Et(y)||y[Ye]))break e;if((g||m)&&(m=h.window===h?h:(m=h.ownerDocument)?m.defaultView||m.parentWindow:window,g?(y=n.relatedTarget||n.toElement,g=u,y=y?Et(y):null,y!==null&&(_=Ot(y),y!==_||y.tag!==5&&y.tag!==6)&&(y=null)):(g=null,y=u),g!==y)){if(b=_i,x="onMouseLeave",f="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(b=Ci,x="onPointerLeave",f="onPointerEnter",c="pointer"),_=g==null?m:$t(g),p=y==null?m:$t(y),m=new b(x,c+"leave",g,n,h),m.target=_,m.relatedTarget=p,x=null,Et(h)===u&&(b=new b(f,c+"enter",y,n,h),b.target=p,b.relatedTarget=_,x=b),_=x,g&&y)t:{for(b=g,f=y,c=0,p=b;p;p=Ft(p))c++;for(p=0,x=f;x;x=Ft(x))p++;for(;0<c-p;)b=Ft(b),c--;for(;0<p-c;)f=Ft(f),p--;for(;c--;){if(b===f||f!==null&&b===f.alternate)break t;b=Ft(b),f=Ft(f)}b=null}else b=null;g!==null&&Fi(d,m,g,b,!1),y!==null&&_!==null&&Fi(d,_,y,b,!0)}}e:{if(m=u?$t(u):window,g=m.nodeName&&m.nodeName.toLowerCase(),g==="select"||g==="input"&&m.type==="file")var S=Mf;else if(Pi(m))if(Eu)S=Of;else{S=If;var N=zf}else(g=m.nodeName)&&g.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(S=Rf);if(S&&(S=S(e,u))){_u(d,S,n,h);break e}N&&N(e,m,u),e==="focusout"&&(N=m._wrapperState)&&N.controlled&&m.type==="number"&&vl(m,"number",m.value)}switch(N=u?$t(u):window,e){case"focusin":(Pi(N)||N.contentEditable==="true")&&(Ht=N,jl=u,On=null);break;case"focusout":On=jl=Ht=null;break;case"mousedown":Pl=!0;break;case"contextmenu":case"mouseup":case"dragend":Pl=!1,Ii(d,n,h);break;case"selectionchange":if(Df)break;case"keydown":case"keyup":Ii(d,n,h)}var j;if(ks)e:{switch(e){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else Wt?ku(e,n)&&(P="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(wu&&n.locale!=="ko"&&(Wt||P!=="onCompositionStart"?P==="onCompositionEnd"&&Wt&&(j=bu()):(nt=h,ys="value"in nt?nt.value:nt.textContent,Wt=!0)),N=Xr(u,P),0<N.length&&(P=new Ei(P,e,null,n,h),d.push({event:P,listeners:N}),j?P.data=j:(j=Su(n),j!==null&&(P.data=j)))),(j=Nf?jf(e,n):Pf(e,n))&&(u=Xr(u,"onBeforeInput"),0<u.length&&(h=new Ei("onBeforeInput","beforeinput",null,n,h),d.push({event:h,listeners:u}),h.data=j))}Ru(d,t)})}function Xn(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Xr(e,t){for(var n=t+"Capture",r=[];e!==null;){var a=e,l=a.stateNode;a.tag===5&&l!==null&&(a=l,l=Hn(e,n),l!=null&&r.unshift(Xn(e,l,a)),l=Hn(e,t),l!=null&&r.push(Xn(e,l,a))),e=e.return}return r}function Ft(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Fi(e,t,n,r,a){for(var l=t._reactName,s=[];n!==null&&n!==r;){var i=n,o=i.alternate,u=i.stateNode;if(o!==null&&o===r)break;i.tag===5&&u!==null&&(i=u,a?(o=Hn(n,l),o!=null&&s.unshift(Xn(n,o,i))):a||(o=Hn(n,l),o!=null&&s.push(Xn(n,o,i)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var Hf=/\r\n?/g,Vf=/\u0000|\uFFFD/g;function Ai(e){return(typeof e=="string"?e:""+e).replace(Hf,`
`).replace(Vf,"")}function _r(e,t,n){if(t=Ai(t),Ai(e)!==t&&n)throw Error(w(425))}function Gr(){}var Ll=null,Tl=null;function Ml(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var zl=typeof setTimeout=="function"?setTimeout:void 0,$f=typeof clearTimeout=="function"?clearTimeout:void 0,Di=typeof Promise=="function"?Promise:void 0,Qf=typeof queueMicrotask=="function"?queueMicrotask:typeof Di<"u"?function(e){return Di.resolve(null).then(e).catch(Yf)}:zl;function Yf(e){setTimeout(function(){throw e})}function Ga(e,t){var n=t,r=0;do{var a=n.nextSibling;if(e.removeChild(n),a&&a.nodeType===8)if(n=a.data,n==="/$"){if(r===0){e.removeChild(a),Qn(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=a}while(n);Qn(t)}function ot(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Ui(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var mn=Math.random().toString(36).slice(2),Ae="__reactFiber$"+mn,Gn="__reactProps$"+mn,Ye="__reactContainer$"+mn,Il="__reactEvents$"+mn,Kf="__reactListeners$"+mn,Jf="__reactHandles$"+mn;function Et(e){var t=e[Ae];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ye]||n[Ae]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Ui(e);e!==null;){if(n=e[Ae])return n;e=Ui(e)}return t}e=n,n=e.parentNode}return null}function ur(e){return e=e[Ae]||e[Ye],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function $t(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(w(33))}function ba(e){return e[Gn]||null}var Rl=[],Qt=-1;function xt(e){return{current:e}}function A(e){0>Qt||(e.current=Rl[Qt],Rl[Qt]=null,Qt--)}function O(e,t){Qt++,Rl[Qt]=e.current,e.current=t}var ht={},se=xt(ht),pe=xt(!1),Lt=ht;function ln(e,t){var n=e.type.contextTypes;if(!n)return ht;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var a={},l;for(l in n)a[l]=t[l];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=a),a}function me(e){return e=e.childContextTypes,e!=null}function Zr(){A(pe),A(se)}function Bi(e,t,n){if(se.current!==ht)throw Error(w(168));O(se,t),O(pe,n)}function Fu(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var a in r)if(!(a in t))throw Error(w(108,Md(e)||"Unknown",a));return W({},n,r)}function qr(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||ht,Lt=se.current,O(se,e),O(pe,pe.current),!0}function Wi(e,t,n){var r=e.stateNode;if(!r)throw Error(w(169));n?(e=Fu(e,t,Lt),r.__reactInternalMemoizedMergedChildContext=e,A(pe),A(se),O(se,e)):A(pe),O(pe,n)}var We=null,wa=!1,Za=!1;function Au(e){We===null?We=[e]:We.push(e)}function Xf(e){wa=!0,Au(e)}function gt(){if(!Za&&We!==null){Za=!0;var e=0,t=R;try{var n=We;for(R=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}We=null,wa=!1}catch(a){throw We!==null&&(We=We.slice(e+1)),uu(hs,gt),a}finally{R=t,Za=!1}}return null}var Yt=[],Kt=0,ea=null,ta=0,ke=[],Se=0,Tt=null,He=1,Ve="";function St(e,t){Yt[Kt++]=ta,Yt[Kt++]=ea,ea=e,ta=t}function Du(e,t,n){ke[Se++]=He,ke[Se++]=Ve,ke[Se++]=Tt,Tt=e;var r=He;e=Ve;var a=32-ze(r)-1;r&=~(1<<a),n+=1;var l=32-ze(t)+a;if(30<l){var s=a-a%5;l=(r&(1<<s)-1).toString(32),r>>=s,a-=s,He=1<<32-ze(t)+a|n<<a|r,Ve=l+e}else He=1<<l|n<<a|r,Ve=e}function _s(e){e.return!==null&&(St(e,1),Du(e,1,0))}function Es(e){for(;e===ea;)ea=Yt[--Kt],Yt[Kt]=null,ta=Yt[--Kt],Yt[Kt]=null;for(;e===Tt;)Tt=ke[--Se],ke[Se]=null,Ve=ke[--Se],ke[Se]=null,He=ke[--Se],ke[Se]=null}var ge=null,xe=null,D=!1,Me=null;function Uu(e,t){var n=_e(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Hi(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ge=e,xe=ot(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ge=e,xe=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Tt!==null?{id:He,overflow:Ve}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=_e(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,ge=e,xe=null,!0):!1;default:return!1}}function Ol(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Fl(e){if(D){var t=xe;if(t){var n=t;if(!Hi(e,t)){if(Ol(e))throw Error(w(418));t=ot(n.nextSibling);var r=ge;t&&Hi(e,t)?Uu(r,n):(e.flags=e.flags&-4097|2,D=!1,ge=e)}}else{if(Ol(e))throw Error(w(418));e.flags=e.flags&-4097|2,D=!1,ge=e}}}function Vi(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ge=e}function Er(e){if(e!==ge)return!1;if(!D)return Vi(e),D=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Ml(e.type,e.memoizedProps)),t&&(t=xe)){if(Ol(e))throw Bu(),Error(w(418));for(;t;)Uu(e,t),t=ot(t.nextSibling)}if(Vi(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(w(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){xe=ot(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}xe=null}}else xe=ge?ot(e.stateNode.nextSibling):null;return!0}function Bu(){for(var e=xe;e;)e=ot(e.nextSibling)}function sn(){xe=ge=null,D=!1}function Cs(e){Me===null?Me=[e]:Me.push(e)}var Gf=Xe.ReactCurrentBatchConfig;function En(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(w(309));var r=n.stateNode}if(!r)throw Error(w(147,e));var a=r,l=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===l?t.ref:(t=function(s){var i=a.refs;s===null?delete i[l]:i[l]=s},t._stringRef=l,t)}if(typeof e!="string")throw Error(w(284));if(!n._owner)throw Error(w(290,e))}return e}function Cr(e,t){throw e=Object.prototype.toString.call(t),Error(w(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function $i(e){var t=e._init;return t(e._payload)}function Wu(e){function t(f,c){if(e){var p=f.deletions;p===null?(f.deletions=[c],f.flags|=16):p.push(c)}}function n(f,c){if(!e)return null;for(;c!==null;)t(f,c),c=c.sibling;return null}function r(f,c){for(f=new Map;c!==null;)c.key!==null?f.set(c.key,c):f.set(c.index,c),c=c.sibling;return f}function a(f,c){return f=ft(f,c),f.index=0,f.sibling=null,f}function l(f,c,p){return f.index=p,e?(p=f.alternate,p!==null?(p=p.index,p<c?(f.flags|=2,c):p):(f.flags|=2,c)):(f.flags|=1048576,c)}function s(f){return e&&f.alternate===null&&(f.flags|=2),f}function i(f,c,p,x){return c===null||c.tag!==6?(c=ll(p,f.mode,x),c.return=f,c):(c=a(c,p),c.return=f,c)}function o(f,c,p,x){var S=p.type;return S===Bt?h(f,c,p.props.children,x,p.key):c!==null&&(c.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Ze&&$i(S)===c.type)?(x=a(c,p.props),x.ref=En(f,c,p),x.return=f,x):(x=Wr(p.type,p.key,p.props,null,f.mode,x),x.ref=En(f,c,p),x.return=f,x)}function u(f,c,p,x){return c===null||c.tag!==4||c.stateNode.containerInfo!==p.containerInfo||c.stateNode.implementation!==p.implementation?(c=sl(p,f.mode,x),c.return=f,c):(c=a(c,p.children||[]),c.return=f,c)}function h(f,c,p,x,S){return c===null||c.tag!==7?(c=Pt(p,f.mode,x,S),c.return=f,c):(c=a(c,p),c.return=f,c)}function d(f,c,p){if(typeof c=="string"&&c!==""||typeof c=="number")return c=ll(""+c,f.mode,p),c.return=f,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case hr:return p=Wr(c.type,c.key,c.props,null,f.mode,p),p.ref=En(f,null,c),p.return=f,p;case Ut:return c=sl(c,f.mode,p),c.return=f,c;case Ze:var x=c._init;return d(f,x(c._payload),p)}if(Pn(c)||bn(c))return c=Pt(c,f.mode,p,null),c.return=f,c;Cr(f,c)}return null}function m(f,c,p,x){var S=c!==null?c.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return S!==null?null:i(f,c,""+p,x);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case hr:return p.key===S?o(f,c,p,x):null;case Ut:return p.key===S?u(f,c,p,x):null;case Ze:return S=p._init,m(f,c,S(p._payload),x)}if(Pn(p)||bn(p))return S!==null?null:h(f,c,p,x,null);Cr(f,p)}return null}function g(f,c,p,x,S){if(typeof x=="string"&&x!==""||typeof x=="number")return f=f.get(p)||null,i(c,f,""+x,S);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case hr:return f=f.get(x.key===null?p:x.key)||null,o(c,f,x,S);case Ut:return f=f.get(x.key===null?p:x.key)||null,u(c,f,x,S);case Ze:var N=x._init;return g(f,c,p,N(x._payload),S)}if(Pn(x)||bn(x))return f=f.get(p)||null,h(c,f,x,S,null);Cr(c,x)}return null}function y(f,c,p,x){for(var S=null,N=null,j=c,P=c=0,V=null;j!==null&&P<p.length;P++){j.index>P?(V=j,j=null):V=j.sibling;var z=m(f,j,p[P],x);if(z===null){j===null&&(j=V);break}e&&j&&z.alternate===null&&t(f,j),c=l(z,c,P),N===null?S=z:N.sibling=z,N=z,j=V}if(P===p.length)return n(f,j),D&&St(f,P),S;if(j===null){for(;P<p.length;P++)j=d(f,p[P],x),j!==null&&(c=l(j,c,P),N===null?S=j:N.sibling=j,N=j);return D&&St(f,P),S}for(j=r(f,j);P<p.length;P++)V=g(j,f,P,p[P],x),V!==null&&(e&&V.alternate!==null&&j.delete(V.key===null?P:V.key),c=l(V,c,P),N===null?S=V:N.sibling=V,N=V);return e&&j.forEach(function(je){return t(f,je)}),D&&St(f,P),S}function b(f,c,p,x){var S=bn(p);if(typeof S!="function")throw Error(w(150));if(p=S.call(p),p==null)throw Error(w(151));for(var N=S=null,j=c,P=c=0,V=null,z=p.next();j!==null&&!z.done;P++,z=p.next()){j.index>P?(V=j,j=null):V=j.sibling;var je=m(f,j,z.value,x);if(je===null){j===null&&(j=V);break}e&&j&&je.alternate===null&&t(f,j),c=l(je,c,P),N===null?S=je:N.sibling=je,N=je,j=V}if(z.done)return n(f,j),D&&St(f,P),S;if(j===null){for(;!z.done;P++,z=p.next())z=d(f,z.value,x),z!==null&&(c=l(z,c,P),N===null?S=z:N.sibling=z,N=z);return D&&St(f,P),S}for(j=r(f,j);!z.done;P++,z=p.next())z=g(j,f,P,z.value,x),z!==null&&(e&&z.alternate!==null&&j.delete(z.key===null?P:z.key),c=l(z,c,P),N===null?S=z:N.sibling=z,N=z);return e&&j.forEach(function(gn){return t(f,gn)}),D&&St(f,P),S}function _(f,c,p,x){if(typeof p=="object"&&p!==null&&p.type===Bt&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case hr:e:{for(var S=p.key,N=c;N!==null;){if(N.key===S){if(S=p.type,S===Bt){if(N.tag===7){n(f,N.sibling),c=a(N,p.props.children),c.return=f,f=c;break e}}else if(N.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Ze&&$i(S)===N.type){n(f,N.sibling),c=a(N,p.props),c.ref=En(f,N,p),c.return=f,f=c;break e}n(f,N);break}else t(f,N);N=N.sibling}p.type===Bt?(c=Pt(p.props.children,f.mode,x,p.key),c.return=f,f=c):(x=Wr(p.type,p.key,p.props,null,f.mode,x),x.ref=En(f,c,p),x.return=f,f=x)}return s(f);case Ut:e:{for(N=p.key;c!==null;){if(c.key===N)if(c.tag===4&&c.stateNode.containerInfo===p.containerInfo&&c.stateNode.implementation===p.implementation){n(f,c.sibling),c=a(c,p.children||[]),c.return=f,f=c;break e}else{n(f,c);break}else t(f,c);c=c.sibling}c=sl(p,f.mode,x),c.return=f,f=c}return s(f);case Ze:return N=p._init,_(f,c,N(p._payload),x)}if(Pn(p))return y(f,c,p,x);if(bn(p))return b(f,c,p,x);Cr(f,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,c!==null&&c.tag===6?(n(f,c.sibling),c=a(c,p),c.return=f,f=c):(n(f,c),c=ll(p,f.mode,x),c.return=f,f=c),s(f)):n(f,c)}return _}var on=Wu(!0),Hu=Wu(!1),na=xt(null),ra=null,Jt=null,Ns=null;function js(){Ns=Jt=ra=null}function Ps(e){var t=na.current;A(na),e._currentValue=t}function Al(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function nn(e,t){ra=e,Ns=Jt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(fe=!0),e.firstContext=null)}function Ce(e){var t=e._currentValue;if(Ns!==e)if(e={context:e,memoizedValue:t,next:null},Jt===null){if(ra===null)throw Error(w(308));Jt=e,ra.dependencies={lanes:0,firstContext:e}}else Jt=Jt.next=e;return t}var Ct=null;function Ls(e){Ct===null?Ct=[e]:Ct.push(e)}function Vu(e,t,n,r){var a=t.interleaved;return a===null?(n.next=n,Ls(t)):(n.next=a.next,a.next=n),t.interleaved=n,Ke(e,r)}function Ke(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var qe=!1;function Ts(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function $u(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function $e(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function ut(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,I&2){var a=r.pending;return a===null?t.next=t:(t.next=a.next,a.next=t),r.pending=t,Ke(e,n)}return a=r.interleaved,a===null?(t.next=t,Ls(r)):(t.next=a.next,a.next=t),r.interleaved=t,Ke(e,n)}function Or(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,vs(e,n)}}function Qi(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var a=null,l=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};l===null?a=l=s:l=l.next=s,n=n.next}while(n!==null);l===null?a=l=t:l=l.next=t}else a=l=t;n={baseState:r.baseState,firstBaseUpdate:a,lastBaseUpdate:l,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function aa(e,t,n,r){var a=e.updateQueue;qe=!1;var l=a.firstBaseUpdate,s=a.lastBaseUpdate,i=a.shared.pending;if(i!==null){a.shared.pending=null;var o=i,u=o.next;o.next=null,s===null?l=u:s.next=u,s=o;var h=e.alternate;h!==null&&(h=h.updateQueue,i=h.lastBaseUpdate,i!==s&&(i===null?h.firstBaseUpdate=u:i.next=u,h.lastBaseUpdate=o))}if(l!==null){var d=a.baseState;s=0,h=u=o=null,i=l;do{var m=i.lane,g=i.eventTime;if((r&m)===m){h!==null&&(h=h.next={eventTime:g,lane:0,tag:i.tag,payload:i.payload,callback:i.callback,next:null});e:{var y=e,b=i;switch(m=t,g=n,b.tag){case 1:if(y=b.payload,typeof y=="function"){d=y.call(g,d,m);break e}d=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=b.payload,m=typeof y=="function"?y.call(g,d,m):y,m==null)break e;d=W({},d,m);break e;case 2:qe=!0}}i.callback!==null&&i.lane!==0&&(e.flags|=64,m=a.effects,m===null?a.effects=[i]:m.push(i))}else g={eventTime:g,lane:m,tag:i.tag,payload:i.payload,callback:i.callback,next:null},h===null?(u=h=g,o=d):h=h.next=g,s|=m;if(i=i.next,i===null){if(i=a.shared.pending,i===null)break;m=i,i=m.next,m.next=null,a.lastBaseUpdate=m,a.shared.pending=null}}while(!0);if(h===null&&(o=d),a.baseState=o,a.firstBaseUpdate=u,a.lastBaseUpdate=h,t=a.shared.interleaved,t!==null){a=t;do s|=a.lane,a=a.next;while(a!==t)}else l===null&&(a.shared.lanes=0);zt|=s,e.lanes=s,e.memoizedState=d}}function Yi(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],a=r.callback;if(a!==null){if(r.callback=null,r=n,typeof a!="function")throw Error(w(191,a));a.call(r)}}}var cr={},Ue=xt(cr),Zn=xt(cr),qn=xt(cr);function Nt(e){if(e===cr)throw Error(w(174));return e}function Ms(e,t){switch(O(qn,t),O(Zn,e),O(Ue,cr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:gl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=gl(t,e)}A(Ue),O(Ue,t)}function un(){A(Ue),A(Zn),A(qn)}function Qu(e){Nt(qn.current);var t=Nt(Ue.current),n=gl(t,e.type);t!==n&&(O(Zn,e),O(Ue,n))}function zs(e){Zn.current===e&&(A(Ue),A(Zn))}var U=xt(0);function la(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var qa=[];function Is(){for(var e=0;e<qa.length;e++)qa[e]._workInProgressVersionPrimary=null;qa.length=0}var Fr=Xe.ReactCurrentDispatcher,el=Xe.ReactCurrentBatchConfig,Mt=0,B=null,J=null,Z=null,sa=!1,Fn=!1,er=0,Zf=0;function re(){throw Error(w(321))}function Rs(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Re(e[n],t[n]))return!1;return!0}function Os(e,t,n,r,a,l){if(Mt=l,B=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Fr.current=e===null||e.memoizedState===null?np:rp,e=n(r,a),Fn){l=0;do{if(Fn=!1,er=0,25<=l)throw Error(w(301));l+=1,Z=J=null,t.updateQueue=null,Fr.current=ap,e=n(r,a)}while(Fn)}if(Fr.current=ia,t=J!==null&&J.next!==null,Mt=0,Z=J=B=null,sa=!1,t)throw Error(w(300));return e}function Fs(){var e=er!==0;return er=0,e}function Fe(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Z===null?B.memoizedState=Z=e:Z=Z.next=e,Z}function Ne(){if(J===null){var e=B.alternate;e=e!==null?e.memoizedState:null}else e=J.next;var t=Z===null?B.memoizedState:Z.next;if(t!==null)Z=t,J=e;else{if(e===null)throw Error(w(310));J=e,e={memoizedState:J.memoizedState,baseState:J.baseState,baseQueue:J.baseQueue,queue:J.queue,next:null},Z===null?B.memoizedState=Z=e:Z=Z.next=e}return Z}function tr(e,t){return typeof t=="function"?t(e):t}function tl(e){var t=Ne(),n=t.queue;if(n===null)throw Error(w(311));n.lastRenderedReducer=e;var r=J,a=r.baseQueue,l=n.pending;if(l!==null){if(a!==null){var s=a.next;a.next=l.next,l.next=s}r.baseQueue=a=l,n.pending=null}if(a!==null){l=a.next,r=r.baseState;var i=s=null,o=null,u=l;do{var h=u.lane;if((Mt&h)===h)o!==null&&(o=o.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var d={lane:h,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};o===null?(i=o=d,s=r):o=o.next=d,B.lanes|=h,zt|=h}u=u.next}while(u!==null&&u!==l);o===null?s=r:o.next=i,Re(r,t.memoizedState)||(fe=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=o,n.lastRenderedState=r}if(e=n.interleaved,e!==null){a=e;do l=a.lane,B.lanes|=l,zt|=l,a=a.next;while(a!==e)}else a===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function nl(e){var t=Ne(),n=t.queue;if(n===null)throw Error(w(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,l=t.memoizedState;if(a!==null){n.pending=null;var s=a=a.next;do l=e(l,s.action),s=s.next;while(s!==a);Re(l,t.memoizedState)||(fe=!0),t.memoizedState=l,t.baseQueue===null&&(t.baseState=l),n.lastRenderedState=l}return[l,r]}function Yu(){}function Ku(e,t){var n=B,r=Ne(),a=t(),l=!Re(r.memoizedState,a);if(l&&(r.memoizedState=a,fe=!0),r=r.queue,As(Gu.bind(null,n,r,e),[e]),r.getSnapshot!==t||l||Z!==null&&Z.memoizedState.tag&1){if(n.flags|=2048,nr(9,Xu.bind(null,n,r,a,t),void 0,null),q===null)throw Error(w(349));Mt&30||Ju(n,t,a)}return a}function Ju(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=B.updateQueue,t===null?(t={lastEffect:null,stores:null},B.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Xu(e,t,n,r){t.value=n,t.getSnapshot=r,Zu(t)&&qu(e)}function Gu(e,t,n){return n(function(){Zu(t)&&qu(e)})}function Zu(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Re(e,n)}catch{return!0}}function qu(e){var t=Ke(e,1);t!==null&&Ie(t,e,1,-1)}function Ki(e){var t=Fe();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:tr,lastRenderedState:e},t.queue=e,e=e.dispatch=tp.bind(null,B,e),[t.memoizedState,e]}function nr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=B.updateQueue,t===null?(t={lastEffect:null,stores:null},B.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function ec(){return Ne().memoizedState}function Ar(e,t,n,r){var a=Fe();B.flags|=e,a.memoizedState=nr(1|t,n,void 0,r===void 0?null:r)}function ka(e,t,n,r){var a=Ne();r=r===void 0?null:r;var l=void 0;if(J!==null){var s=J.memoizedState;if(l=s.destroy,r!==null&&Rs(r,s.deps)){a.memoizedState=nr(t,n,l,r);return}}B.flags|=e,a.memoizedState=nr(1|t,n,l,r)}function Ji(e,t){return Ar(8390656,8,e,t)}function As(e,t){return ka(2048,8,e,t)}function tc(e,t){return ka(4,2,e,t)}function nc(e,t){return ka(4,4,e,t)}function rc(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function ac(e,t,n){return n=n!=null?n.concat([e]):null,ka(4,4,rc.bind(null,t,e),n)}function Ds(){}function lc(e,t){var n=Ne();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Rs(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function sc(e,t){var n=Ne();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Rs(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function ic(e,t,n){return Mt&21?(Re(n,t)||(n=fu(),B.lanes|=n,zt|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,fe=!0),e.memoizedState=n)}function qf(e,t){var n=R;R=n!==0&&4>n?n:4,e(!0);var r=el.transition;el.transition={};try{e(!1),t()}finally{R=n,el.transition=r}}function oc(){return Ne().memoizedState}function ep(e,t,n){var r=dt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},uc(e))cc(t,n);else if(n=Vu(e,t,n,r),n!==null){var a=oe();Ie(n,e,r,a),dc(n,t,r)}}function tp(e,t,n){var r=dt(e),a={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(uc(e))cc(t,a);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=t.lastRenderedReducer,l!==null))try{var s=t.lastRenderedState,i=l(s,n);if(a.hasEagerState=!0,a.eagerState=i,Re(i,s)){var o=t.interleaved;o===null?(a.next=a,Ls(t)):(a.next=o.next,o.next=a),t.interleaved=a;return}}catch{}finally{}n=Vu(e,t,a,r),n!==null&&(a=oe(),Ie(n,e,r,a),dc(n,t,r))}}function uc(e){var t=e.alternate;return e===B||t!==null&&t===B}function cc(e,t){Fn=sa=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function dc(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,vs(e,n)}}var ia={readContext:Ce,useCallback:re,useContext:re,useEffect:re,useImperativeHandle:re,useInsertionEffect:re,useLayoutEffect:re,useMemo:re,useReducer:re,useRef:re,useState:re,useDebugValue:re,useDeferredValue:re,useTransition:re,useMutableSource:re,useSyncExternalStore:re,useId:re,unstable_isNewReconciler:!1},np={readContext:Ce,useCallback:function(e,t){return Fe().memoizedState=[e,t===void 0?null:t],e},useContext:Ce,useEffect:Ji,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Ar(4194308,4,rc.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ar(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ar(4,2,e,t)},useMemo:function(e,t){var n=Fe();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Fe();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=ep.bind(null,B,e),[r.memoizedState,e]},useRef:function(e){var t=Fe();return e={current:e},t.memoizedState=e},useState:Ki,useDebugValue:Ds,useDeferredValue:function(e){return Fe().memoizedState=e},useTransition:function(){var e=Ki(!1),t=e[0];return e=qf.bind(null,e[1]),Fe().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=B,a=Fe();if(D){if(n===void 0)throw Error(w(407));n=n()}else{if(n=t(),q===null)throw Error(w(349));Mt&30||Ju(r,t,n)}a.memoizedState=n;var l={value:n,getSnapshot:t};return a.queue=l,Ji(Gu.bind(null,r,l,e),[e]),r.flags|=2048,nr(9,Xu.bind(null,r,l,n,t),void 0,null),n},useId:function(){var e=Fe(),t=q.identifierPrefix;if(D){var n=Ve,r=He;n=(r&~(1<<32-ze(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=er++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Zf++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},rp={readContext:Ce,useCallback:lc,useContext:Ce,useEffect:As,useImperativeHandle:ac,useInsertionEffect:tc,useLayoutEffect:nc,useMemo:sc,useReducer:tl,useRef:ec,useState:function(){return tl(tr)},useDebugValue:Ds,useDeferredValue:function(e){var t=Ne();return ic(t,J.memoizedState,e)},useTransition:function(){var e=tl(tr)[0],t=Ne().memoizedState;return[e,t]},useMutableSource:Yu,useSyncExternalStore:Ku,useId:oc,unstable_isNewReconciler:!1},ap={readContext:Ce,useCallback:lc,useContext:Ce,useEffect:As,useImperativeHandle:ac,useInsertionEffect:tc,useLayoutEffect:nc,useMemo:sc,useReducer:nl,useRef:ec,useState:function(){return nl(tr)},useDebugValue:Ds,useDeferredValue:function(e){var t=Ne();return J===null?t.memoizedState=e:ic(t,J.memoizedState,e)},useTransition:function(){var e=nl(tr)[0],t=Ne().memoizedState;return[e,t]},useMutableSource:Yu,useSyncExternalStore:Ku,useId:oc,unstable_isNewReconciler:!1};function Le(e,t){if(e&&e.defaultProps){t=W({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Dl(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:W({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Sa={isMounted:function(e){return(e=e._reactInternals)?Ot(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=oe(),a=dt(e),l=$e(r,a);l.payload=t,n!=null&&(l.callback=n),t=ut(e,l,a),t!==null&&(Ie(t,e,a,r),Or(t,e,a))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=oe(),a=dt(e),l=$e(r,a);l.tag=1,l.payload=t,n!=null&&(l.callback=n),t=ut(e,l,a),t!==null&&(Ie(t,e,a,r),Or(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=oe(),r=dt(e),a=$e(n,r);a.tag=2,t!=null&&(a.callback=t),t=ut(e,a,r),t!==null&&(Ie(t,e,r,n),Or(t,e,r))}};function Xi(e,t,n,r,a,l,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,l,s):t.prototype&&t.prototype.isPureReactComponent?!Kn(n,r)||!Kn(a,l):!0}function fc(e,t,n){var r=!1,a=ht,l=t.contextType;return typeof l=="object"&&l!==null?l=Ce(l):(a=me(t)?Lt:se.current,r=t.contextTypes,l=(r=r!=null)?ln(e,a):ht),t=new t(n,l),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Sa,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=a,e.__reactInternalMemoizedMaskedChildContext=l),t}function Gi(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Sa.enqueueReplaceState(t,t.state,null)}function Ul(e,t,n,r){var a=e.stateNode;a.props=n,a.state=e.memoizedState,a.refs={},Ts(e);var l=t.contextType;typeof l=="object"&&l!==null?a.context=Ce(l):(l=me(t)?Lt:se.current,a.context=ln(e,l)),a.state=e.memoizedState,l=t.getDerivedStateFromProps,typeof l=="function"&&(Dl(e,t,l,n),a.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(t=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),t!==a.state&&Sa.enqueueReplaceState(a,a.state,null),aa(e,n,a,r),a.state=e.memoizedState),typeof a.componentDidMount=="function"&&(e.flags|=4194308)}function cn(e,t){try{var n="",r=t;do n+=Td(r),r=r.return;while(r);var a=n}catch(l){a=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:t,stack:a,digest:null}}function rl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Bl(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var lp=typeof WeakMap=="function"?WeakMap:Map;function pc(e,t,n){n=$e(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){ua||(ua=!0,Gl=r),Bl(e,t)},n}function mc(e,t,n){n=$e(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var a=t.value;n.payload=function(){return r(a)},n.callback=function(){Bl(e,t)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(n.callback=function(){Bl(e,t),typeof r!="function"&&(ct===null?ct=new Set([this]):ct.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function Zi(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new lp;var a=new Set;r.set(t,a)}else a=r.get(t),a===void 0&&(a=new Set,r.set(t,a));a.has(n)||(a.add(n),e=yp.bind(null,e,t,n),t.then(e,e))}function qi(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function eo(e,t,n,r,a){return e.mode&1?(e.flags|=65536,e.lanes=a,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=$e(-1,1),t.tag=2,ut(n,t,1))),n.lanes|=1),e)}var sp=Xe.ReactCurrentOwner,fe=!1;function ie(e,t,n,r){t.child=e===null?Hu(t,null,n,r):on(t,e.child,n,r)}function to(e,t,n,r,a){n=n.render;var l=t.ref;return nn(t,a),r=Os(e,t,n,r,l,a),n=Fs(),e!==null&&!fe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,Je(e,t,a)):(D&&n&&_s(t),t.flags|=1,ie(e,t,r,a),t.child)}function no(e,t,n,r,a){if(e===null){var l=n.type;return typeof l=="function"&&!Ys(l)&&l.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=l,hc(e,t,l,r,a)):(e=Wr(n.type,null,r,t,t.mode,a),e.ref=t.ref,e.return=t,t.child=e)}if(l=e.child,!(e.lanes&a)){var s=l.memoizedProps;if(n=n.compare,n=n!==null?n:Kn,n(s,r)&&e.ref===t.ref)return Je(e,t,a)}return t.flags|=1,e=ft(l,r),e.ref=t.ref,e.return=t,t.child=e}function hc(e,t,n,r,a){if(e!==null){var l=e.memoizedProps;if(Kn(l,r)&&e.ref===t.ref)if(fe=!1,t.pendingProps=r=l,(e.lanes&a)!==0)e.flags&131072&&(fe=!0);else return t.lanes=e.lanes,Je(e,t,a)}return Wl(e,t,n,r,a)}function vc(e,t,n){var r=t.pendingProps,a=r.children,l=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},O(Gt,ve),ve|=n;else{if(!(n&1073741824))return e=l!==null?l.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,O(Gt,ve),ve|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=l!==null?l.baseLanes:n,O(Gt,ve),ve|=r}else l!==null?(r=l.baseLanes|n,t.memoizedState=null):r=n,O(Gt,ve),ve|=r;return ie(e,t,a,n),t.child}function xc(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Wl(e,t,n,r,a){var l=me(n)?Lt:se.current;return l=ln(t,l),nn(t,a),n=Os(e,t,n,r,l,a),r=Fs(),e!==null&&!fe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,Je(e,t,a)):(D&&r&&_s(t),t.flags|=1,ie(e,t,n,a),t.child)}function ro(e,t,n,r,a){if(me(n)){var l=!0;qr(t)}else l=!1;if(nn(t,a),t.stateNode===null)Dr(e,t),fc(t,n,r),Ul(t,n,r,a),r=!0;else if(e===null){var s=t.stateNode,i=t.memoizedProps;s.props=i;var o=s.context,u=n.contextType;typeof u=="object"&&u!==null?u=Ce(u):(u=me(n)?Lt:se.current,u=ln(t,u));var h=n.getDerivedStateFromProps,d=typeof h=="function"||typeof s.getSnapshotBeforeUpdate=="function";d||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(i!==r||o!==u)&&Gi(t,s,r,u),qe=!1;var m=t.memoizedState;s.state=m,aa(t,r,s,a),o=t.memoizedState,i!==r||m!==o||pe.current||qe?(typeof h=="function"&&(Dl(t,n,h,r),o=t.memoizedState),(i=qe||Xi(t,n,i,r,m,o,u))?(d||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=o),s.props=r,s.state=o,s.context=u,r=i):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,$u(e,t),i=t.memoizedProps,u=t.type===t.elementType?i:Le(t.type,i),s.props=u,d=t.pendingProps,m=s.context,o=n.contextType,typeof o=="object"&&o!==null?o=Ce(o):(o=me(n)?Lt:se.current,o=ln(t,o));var g=n.getDerivedStateFromProps;(h=typeof g=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(i!==d||m!==o)&&Gi(t,s,r,o),qe=!1,m=t.memoizedState,s.state=m,aa(t,r,s,a);var y=t.memoizedState;i!==d||m!==y||pe.current||qe?(typeof g=="function"&&(Dl(t,n,g,r),y=t.memoizedState),(u=qe||Xi(t,n,u,r,m,y,o)||!1)?(h||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,y,o),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,y,o)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||i===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||i===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=y),s.props=r,s.state=y,s.context=o,r=u):(typeof s.componentDidUpdate!="function"||i===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||i===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),r=!1)}return Hl(e,t,n,r,l,a)}function Hl(e,t,n,r,a,l){xc(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return a&&Wi(t,n,!1),Je(e,t,l);r=t.stateNode,sp.current=t;var i=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=on(t,e.child,null,l),t.child=on(t,null,i,l)):ie(e,t,i,l),t.memoizedState=r.state,a&&Wi(t,n,!0),t.child}function gc(e){var t=e.stateNode;t.pendingContext?Bi(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Bi(e,t.context,!1),Ms(e,t.containerInfo)}function ao(e,t,n,r,a){return sn(),Cs(a),t.flags|=256,ie(e,t,n,r),t.child}var Vl={dehydrated:null,treeContext:null,retryLane:0};function $l(e){return{baseLanes:e,cachePool:null,transitions:null}}function yc(e,t,n){var r=t.pendingProps,a=U.current,l=!1,s=(t.flags&128)!==0,i;if((i=s)||(i=e!==null&&e.memoizedState===null?!1:(a&2)!==0),i?(l=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(a|=1),O(U,a&1),e===null)return Fl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=r.children,e=r.fallback,l?(r=t.mode,l=t.child,s={mode:"hidden",children:s},!(r&1)&&l!==null?(l.childLanes=0,l.pendingProps=s):l=Ca(s,r,0,null),e=Pt(e,r,n,null),l.return=t,e.return=t,l.sibling=e,t.child=l,t.child.memoizedState=$l(n),t.memoizedState=Vl,e):Us(t,s));if(a=e.memoizedState,a!==null&&(i=a.dehydrated,i!==null))return ip(e,t,s,r,i,a,n);if(l){l=r.fallback,s=t.mode,a=e.child,i=a.sibling;var o={mode:"hidden",children:r.children};return!(s&1)&&t.child!==a?(r=t.child,r.childLanes=0,r.pendingProps=o,t.deletions=null):(r=ft(a,o),r.subtreeFlags=a.subtreeFlags&14680064),i!==null?l=ft(i,l):(l=Pt(l,s,n,null),l.flags|=2),l.return=t,r.return=t,r.sibling=l,t.child=r,r=l,l=t.child,s=e.child.memoizedState,s=s===null?$l(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},l.memoizedState=s,l.childLanes=e.childLanes&~n,t.memoizedState=Vl,r}return l=e.child,e=l.sibling,r=ft(l,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Us(e,t){return t=Ca({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Nr(e,t,n,r){return r!==null&&Cs(r),on(t,e.child,null,n),e=Us(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function ip(e,t,n,r,a,l,s){if(n)return t.flags&256?(t.flags&=-257,r=rl(Error(w(422))),Nr(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(l=r.fallback,a=t.mode,r=Ca({mode:"visible",children:r.children},a,0,null),l=Pt(l,a,s,null),l.flags|=2,r.return=t,l.return=t,r.sibling=l,t.child=r,t.mode&1&&on(t,e.child,null,s),t.child.memoizedState=$l(s),t.memoizedState=Vl,l);if(!(t.mode&1))return Nr(e,t,s,null);if(a.data==="$!"){if(r=a.nextSibling&&a.nextSibling.dataset,r)var i=r.dgst;return r=i,l=Error(w(419)),r=rl(l,r,void 0),Nr(e,t,s,r)}if(i=(s&e.childLanes)!==0,fe||i){if(r=q,r!==null){switch(s&-s){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}a=a&(r.suspendedLanes|s)?0:a,a!==0&&a!==l.retryLane&&(l.retryLane=a,Ke(e,a),Ie(r,e,a,-1))}return Qs(),r=rl(Error(w(421))),Nr(e,t,s,r)}return a.data==="$?"?(t.flags|=128,t.child=e.child,t=bp.bind(null,e),a._reactRetry=t,null):(e=l.treeContext,xe=ot(a.nextSibling),ge=t,D=!0,Me=null,e!==null&&(ke[Se++]=He,ke[Se++]=Ve,ke[Se++]=Tt,He=e.id,Ve=e.overflow,Tt=t),t=Us(t,r.children),t.flags|=4096,t)}function lo(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Al(e.return,t,n)}function al(e,t,n,r,a){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:a}:(l.isBackwards=t,l.rendering=null,l.renderingStartTime=0,l.last=r,l.tail=n,l.tailMode=a)}function bc(e,t,n){var r=t.pendingProps,a=r.revealOrder,l=r.tail;if(ie(e,t,r.children,n),r=U.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&lo(e,n,t);else if(e.tag===19)lo(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(O(U,r),!(t.mode&1))t.memoizedState=null;else switch(a){case"forwards":for(n=t.child,a=null;n!==null;)e=n.alternate,e!==null&&la(e)===null&&(a=n),n=n.sibling;n=a,n===null?(a=t.child,t.child=null):(a=n.sibling,n.sibling=null),al(t,!1,a,n,l);break;case"backwards":for(n=null,a=t.child,t.child=null;a!==null;){if(e=a.alternate,e!==null&&la(e)===null){t.child=a;break}e=a.sibling,a.sibling=n,n=a,a=e}al(t,!0,n,null,l);break;case"together":al(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Dr(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Je(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),zt|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(w(153));if(t.child!==null){for(e=t.child,n=ft(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=ft(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function op(e,t,n){switch(t.tag){case 3:gc(t),sn();break;case 5:Qu(t);break;case 1:me(t.type)&&qr(t);break;case 4:Ms(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,a=t.memoizedProps.value;O(na,r._currentValue),r._currentValue=a;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(O(U,U.current&1),t.flags|=128,null):n&t.child.childLanes?yc(e,t,n):(O(U,U.current&1),e=Je(e,t,n),e!==null?e.sibling:null);O(U,U.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return bc(e,t,n);t.flags|=128}if(a=t.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),O(U,U.current),r)break;return null;case 22:case 23:return t.lanes=0,vc(e,t,n)}return Je(e,t,n)}var wc,Ql,kc,Sc;wc=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ql=function(){};kc=function(e,t,n,r){var a=e.memoizedProps;if(a!==r){e=t.stateNode,Nt(Ue.current);var l=null;switch(n){case"input":a=ml(e,a),r=ml(e,r),l=[];break;case"select":a=W({},a,{value:void 0}),r=W({},r,{value:void 0}),l=[];break;case"textarea":a=xl(e,a),r=xl(e,r),l=[];break;default:typeof a.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Gr)}yl(n,r);var s;n=null;for(u in a)if(!r.hasOwnProperty(u)&&a.hasOwnProperty(u)&&a[u]!=null)if(u==="style"){var i=a[u];for(s in i)i.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Bn.hasOwnProperty(u)?l||(l=[]):(l=l||[]).push(u,null));for(u in r){var o=r[u];if(i=a!=null?a[u]:void 0,r.hasOwnProperty(u)&&o!==i&&(o!=null||i!=null))if(u==="style")if(i){for(s in i)!i.hasOwnProperty(s)||o&&o.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in o)o.hasOwnProperty(s)&&i[s]!==o[s]&&(n||(n={}),n[s]=o[s])}else n||(l||(l=[]),l.push(u,n)),n=o;else u==="dangerouslySetInnerHTML"?(o=o?o.__html:void 0,i=i?i.__html:void 0,o!=null&&i!==o&&(l=l||[]).push(u,o)):u==="children"?typeof o!="string"&&typeof o!="number"||(l=l||[]).push(u,""+o):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Bn.hasOwnProperty(u)?(o!=null&&u==="onScroll"&&F("scroll",e),l||i===o||(l=[])):(l=l||[]).push(u,o))}n&&(l=l||[]).push("style",n);var u=l;(t.updateQueue=u)&&(t.flags|=4)}};Sc=function(e,t,n,r){n!==r&&(t.flags|=4)};function Cn(e,t){if(!D)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ae(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var a=e.child;a!==null;)n|=a.lanes|a.childLanes,r|=a.subtreeFlags&14680064,r|=a.flags&14680064,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)n|=a.lanes|a.childLanes,r|=a.subtreeFlags,r|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function up(e,t,n){var r=t.pendingProps;switch(Es(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ae(t),null;case 1:return me(t.type)&&Zr(),ae(t),null;case 3:return r=t.stateNode,un(),A(pe),A(se),Is(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Er(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Me!==null&&(es(Me),Me=null))),Ql(e,t),ae(t),null;case 5:zs(t);var a=Nt(qn.current);if(n=t.type,e!==null&&t.stateNode!=null)kc(e,t,n,r,a),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(w(166));return ae(t),null}if(e=Nt(Ue.current),Er(t)){r=t.stateNode,n=t.type;var l=t.memoizedProps;switch(r[Ae]=t,r[Gn]=l,e=(t.mode&1)!==0,n){case"dialog":F("cancel",r),F("close",r);break;case"iframe":case"object":case"embed":F("load",r);break;case"video":case"audio":for(a=0;a<Tn.length;a++)F(Tn[a],r);break;case"source":F("error",r);break;case"img":case"image":case"link":F("error",r),F("load",r);break;case"details":F("toggle",r);break;case"input":mi(r,l),F("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!l.multiple},F("invalid",r);break;case"textarea":vi(r,l),F("invalid",r)}yl(n,l),a=null;for(var s in l)if(l.hasOwnProperty(s)){var i=l[s];s==="children"?typeof i=="string"?r.textContent!==i&&(l.suppressHydrationWarning!==!0&&_r(r.textContent,i,e),a=["children",i]):typeof i=="number"&&r.textContent!==""+i&&(l.suppressHydrationWarning!==!0&&_r(r.textContent,i,e),a=["children",""+i]):Bn.hasOwnProperty(s)&&i!=null&&s==="onScroll"&&F("scroll",r)}switch(n){case"input":vr(r),hi(r,l,!0);break;case"textarea":vr(r),xi(r);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(r.onclick=Gr)}r=a,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=a.nodeType===9?a:a.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Go(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[Ae]=t,e[Gn]=r,wc(e,t,!1,!1),t.stateNode=e;e:{switch(s=bl(n,r),n){case"dialog":F("cancel",e),F("close",e),a=r;break;case"iframe":case"object":case"embed":F("load",e),a=r;break;case"video":case"audio":for(a=0;a<Tn.length;a++)F(Tn[a],e);a=r;break;case"source":F("error",e),a=r;break;case"img":case"image":case"link":F("error",e),F("load",e),a=r;break;case"details":F("toggle",e),a=r;break;case"input":mi(e,r),a=ml(e,r),F("invalid",e);break;case"option":a=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},a=W({},r,{value:void 0}),F("invalid",e);break;case"textarea":vi(e,r),a=xl(e,r),F("invalid",e);break;default:a=r}yl(n,a),i=a;for(l in i)if(i.hasOwnProperty(l)){var o=i[l];l==="style"?eu(e,o):l==="dangerouslySetInnerHTML"?(o=o?o.__html:void 0,o!=null&&Zo(e,o)):l==="children"?typeof o=="string"?(n!=="textarea"||o!=="")&&Wn(e,o):typeof o=="number"&&Wn(e,""+o):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(Bn.hasOwnProperty(l)?o!=null&&l==="onScroll"&&F("scroll",e):o!=null&&cs(e,l,o,s))}switch(n){case"input":vr(e),hi(e,r,!1);break;case"textarea":vr(e),xi(e);break;case"option":r.value!=null&&e.setAttribute("value",""+mt(r.value));break;case"select":e.multiple=!!r.multiple,l=r.value,l!=null?Zt(e,!!r.multiple,l,!1):r.defaultValue!=null&&Zt(e,!!r.multiple,r.defaultValue,!0);break;default:typeof a.onClick=="function"&&(e.onclick=Gr)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ae(t),null;case 6:if(e&&t.stateNode!=null)Sc(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(w(166));if(n=Nt(qn.current),Nt(Ue.current),Er(t)){if(r=t.stateNode,n=t.memoizedProps,r[Ae]=t,(l=r.nodeValue!==n)&&(e=ge,e!==null))switch(e.tag){case 3:_r(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&_r(r.nodeValue,n,(e.mode&1)!==0)}l&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Ae]=t,t.stateNode=r}return ae(t),null;case 13:if(A(U),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(D&&xe!==null&&t.mode&1&&!(t.flags&128))Bu(),sn(),t.flags|=98560,l=!1;else if(l=Er(t),r!==null&&r.dehydrated!==null){if(e===null){if(!l)throw Error(w(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(w(317));l[Ae]=t}else sn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ae(t),l=!1}else Me!==null&&(es(Me),Me=null),l=!0;if(!l)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||U.current&1?X===0&&(X=3):Qs())),t.updateQueue!==null&&(t.flags|=4),ae(t),null);case 4:return un(),Ql(e,t),e===null&&Jn(t.stateNode.containerInfo),ae(t),null;case 10:return Ps(t.type._context),ae(t),null;case 17:return me(t.type)&&Zr(),ae(t),null;case 19:if(A(U),l=t.memoizedState,l===null)return ae(t),null;if(r=(t.flags&128)!==0,s=l.rendering,s===null)if(r)Cn(l,!1);else{if(X!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=la(e),s!==null){for(t.flags|=128,Cn(l,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)l=n,e=r,l.flags&=14680066,s=l.alternate,s===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=s.childLanes,l.lanes=s.lanes,l.child=s.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=s.memoizedProps,l.memoizedState=s.memoizedState,l.updateQueue=s.updateQueue,l.type=s.type,e=s.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return O(U,U.current&1|2),t.child}e=e.sibling}l.tail!==null&&Q()>dn&&(t.flags|=128,r=!0,Cn(l,!1),t.lanes=4194304)}else{if(!r)if(e=la(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Cn(l,!0),l.tail===null&&l.tailMode==="hidden"&&!s.alternate&&!D)return ae(t),null}else 2*Q()-l.renderingStartTime>dn&&n!==1073741824&&(t.flags|=128,r=!0,Cn(l,!1),t.lanes=4194304);l.isBackwards?(s.sibling=t.child,t.child=s):(n=l.last,n!==null?n.sibling=s:t.child=s,l.last=s)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=Q(),t.sibling=null,n=U.current,O(U,r?n&1|2:n&1),t):(ae(t),null);case 22:case 23:return $s(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?ve&1073741824&&(ae(t),t.subtreeFlags&6&&(t.flags|=8192)):ae(t),null;case 24:return null;case 25:return null}throw Error(w(156,t.tag))}function cp(e,t){switch(Es(t),t.tag){case 1:return me(t.type)&&Zr(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return un(),A(pe),A(se),Is(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return zs(t),null;case 13:if(A(U),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(w(340));sn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return A(U),null;case 4:return un(),null;case 10:return Ps(t.type._context),null;case 22:case 23:return $s(),null;case 24:return null;default:return null}}var jr=!1,le=!1,dp=typeof WeakSet=="function"?WeakSet:Set,E=null;function Xt(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){H(e,t,r)}else n.current=null}function Yl(e,t,n){try{n()}catch(r){H(e,t,r)}}var so=!1;function fp(e,t){if(Ll=Kr,e=ju(),Ss(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var a=r.anchorOffset,l=r.focusNode;r=r.focusOffset;try{n.nodeType,l.nodeType}catch{n=null;break e}var s=0,i=-1,o=-1,u=0,h=0,d=e,m=null;t:for(;;){for(var g;d!==n||a!==0&&d.nodeType!==3||(i=s+a),d!==l||r!==0&&d.nodeType!==3||(o=s+r),d.nodeType===3&&(s+=d.nodeValue.length),(g=d.firstChild)!==null;)m=d,d=g;for(;;){if(d===e)break t;if(m===n&&++u===a&&(i=s),m===l&&++h===r&&(o=s),(g=d.nextSibling)!==null)break;d=m,m=d.parentNode}d=g}n=i===-1||o===-1?null:{start:i,end:o}}else n=null}n=n||{start:0,end:0}}else n=null;for(Tl={focusedElem:e,selectionRange:n},Kr=!1,E=t;E!==null;)if(t=E,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,E=e;else for(;E!==null;){t=E;try{var y=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var b=y.memoizedProps,_=y.memoizedState,f=t.stateNode,c=f.getSnapshotBeforeUpdate(t.elementType===t.type?b:Le(t.type,b),_);f.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var p=t.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(w(163))}}catch(x){H(t,t.return,x)}if(e=t.sibling,e!==null){e.return=t.return,E=e;break}E=t.return}return y=so,so=!1,y}function An(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var a=r=r.next;do{if((a.tag&e)===e){var l=a.destroy;a.destroy=void 0,l!==void 0&&Yl(t,n,l)}a=a.next}while(a!==r)}}function _a(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Kl(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function _c(e){var t=e.alternate;t!==null&&(e.alternate=null,_c(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Ae],delete t[Gn],delete t[Il],delete t[Kf],delete t[Jf])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Ec(e){return e.tag===5||e.tag===3||e.tag===4}function io(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Ec(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Jl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Gr));else if(r!==4&&(e=e.child,e!==null))for(Jl(e,t,n),e=e.sibling;e!==null;)Jl(e,t,n),e=e.sibling}function Xl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Xl(e,t,n),e=e.sibling;e!==null;)Xl(e,t,n),e=e.sibling}var ee=null,Te=!1;function Ge(e,t,n){for(n=n.child;n!==null;)Cc(e,t,n),n=n.sibling}function Cc(e,t,n){if(De&&typeof De.onCommitFiberUnmount=="function")try{De.onCommitFiberUnmount(va,n)}catch{}switch(n.tag){case 5:le||Xt(n,t);case 6:var r=ee,a=Te;ee=null,Ge(e,t,n),ee=r,Te=a,ee!==null&&(Te?(e=ee,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ee.removeChild(n.stateNode));break;case 18:ee!==null&&(Te?(e=ee,n=n.stateNode,e.nodeType===8?Ga(e.parentNode,n):e.nodeType===1&&Ga(e,n),Qn(e)):Ga(ee,n.stateNode));break;case 4:r=ee,a=Te,ee=n.stateNode.containerInfo,Te=!0,Ge(e,t,n),ee=r,Te=a;break;case 0:case 11:case 14:case 15:if(!le&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){a=r=r.next;do{var l=a,s=l.destroy;l=l.tag,s!==void 0&&(l&2||l&4)&&Yl(n,t,s),a=a.next}while(a!==r)}Ge(e,t,n);break;case 1:if(!le&&(Xt(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(i){H(n,t,i)}Ge(e,t,n);break;case 21:Ge(e,t,n);break;case 22:n.mode&1?(le=(r=le)||n.memoizedState!==null,Ge(e,t,n),le=r):Ge(e,t,n);break;default:Ge(e,t,n)}}function oo(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new dp),t.forEach(function(r){var a=wp.bind(null,e,r);n.has(r)||(n.add(r),r.then(a,a))})}}function Pe(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var a=n[r];try{var l=e,s=t,i=s;e:for(;i!==null;){switch(i.tag){case 5:ee=i.stateNode,Te=!1;break e;case 3:ee=i.stateNode.containerInfo,Te=!0;break e;case 4:ee=i.stateNode.containerInfo,Te=!0;break e}i=i.return}if(ee===null)throw Error(w(160));Cc(l,s,a),ee=null,Te=!1;var o=a.alternate;o!==null&&(o.return=null),a.return=null}catch(u){H(a,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Nc(t,e),t=t.sibling}function Nc(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Pe(t,e),Oe(e),r&4){try{An(3,e,e.return),_a(3,e)}catch(b){H(e,e.return,b)}try{An(5,e,e.return)}catch(b){H(e,e.return,b)}}break;case 1:Pe(t,e),Oe(e),r&512&&n!==null&&Xt(n,n.return);break;case 5:if(Pe(t,e),Oe(e),r&512&&n!==null&&Xt(n,n.return),e.flags&32){var a=e.stateNode;try{Wn(a,"")}catch(b){H(e,e.return,b)}}if(r&4&&(a=e.stateNode,a!=null)){var l=e.memoizedProps,s=n!==null?n.memoizedProps:l,i=e.type,o=e.updateQueue;if(e.updateQueue=null,o!==null)try{i==="input"&&l.type==="radio"&&l.name!=null&&Jo(a,l),bl(i,s);var u=bl(i,l);for(s=0;s<o.length;s+=2){var h=o[s],d=o[s+1];h==="style"?eu(a,d):h==="dangerouslySetInnerHTML"?Zo(a,d):h==="children"?Wn(a,d):cs(a,h,d,u)}switch(i){case"input":hl(a,l);break;case"textarea":Xo(a,l);break;case"select":var m=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!l.multiple;var g=l.value;g!=null?Zt(a,!!l.multiple,g,!1):m!==!!l.multiple&&(l.defaultValue!=null?Zt(a,!!l.multiple,l.defaultValue,!0):Zt(a,!!l.multiple,l.multiple?[]:"",!1))}a[Gn]=l}catch(b){H(e,e.return,b)}}break;case 6:if(Pe(t,e),Oe(e),r&4){if(e.stateNode===null)throw Error(w(162));a=e.stateNode,l=e.memoizedProps;try{a.nodeValue=l}catch(b){H(e,e.return,b)}}break;case 3:if(Pe(t,e),Oe(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Qn(t.containerInfo)}catch(b){H(e,e.return,b)}break;case 4:Pe(t,e),Oe(e);break;case 13:Pe(t,e),Oe(e),a=e.child,a.flags&8192&&(l=a.memoizedState!==null,a.stateNode.isHidden=l,!l||a.alternate!==null&&a.alternate.memoizedState!==null||(Hs=Q())),r&4&&oo(e);break;case 22:if(h=n!==null&&n.memoizedState!==null,e.mode&1?(le=(u=le)||h,Pe(t,e),le=u):Pe(t,e),Oe(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!h&&e.mode&1)for(E=e,h=e.child;h!==null;){for(d=E=h;E!==null;){switch(m=E,g=m.child,m.tag){case 0:case 11:case 14:case 15:An(4,m,m.return);break;case 1:Xt(m,m.return);var y=m.stateNode;if(typeof y.componentWillUnmount=="function"){r=m,n=m.return;try{t=r,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(b){H(r,n,b)}}break;case 5:Xt(m,m.return);break;case 22:if(m.memoizedState!==null){co(d);continue}}g!==null?(g.return=m,E=g):co(d)}h=h.sibling}e:for(h=null,d=e;;){if(d.tag===5){if(h===null){h=d;try{a=d.stateNode,u?(l=a.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(i=d.stateNode,o=d.memoizedProps.style,s=o!=null&&o.hasOwnProperty("display")?o.display:null,i.style.display=qo("display",s))}catch(b){H(e,e.return,b)}}}else if(d.tag===6){if(h===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(b){H(e,e.return,b)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;h===d&&(h=null),d=d.return}h===d&&(h=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Pe(t,e),Oe(e),r&4&&oo(e);break;case 21:break;default:Pe(t,e),Oe(e)}}function Oe(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Ec(n)){var r=n;break e}n=n.return}throw Error(w(160))}switch(r.tag){case 5:var a=r.stateNode;r.flags&32&&(Wn(a,""),r.flags&=-33);var l=io(e);Xl(e,l,a);break;case 3:case 4:var s=r.stateNode.containerInfo,i=io(e);Jl(e,i,s);break;default:throw Error(w(161))}}catch(o){H(e,e.return,o)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function pp(e,t,n){E=e,jc(e)}function jc(e,t,n){for(var r=(e.mode&1)!==0;E!==null;){var a=E,l=a.child;if(a.tag===22&&r){var s=a.memoizedState!==null||jr;if(!s){var i=a.alternate,o=i!==null&&i.memoizedState!==null||le;i=jr;var u=le;if(jr=s,(le=o)&&!u)for(E=a;E!==null;)s=E,o=s.child,s.tag===22&&s.memoizedState!==null?fo(a):o!==null?(o.return=s,E=o):fo(a);for(;l!==null;)E=l,jc(l),l=l.sibling;E=a,jr=i,le=u}uo(e)}else a.subtreeFlags&8772&&l!==null?(l.return=a,E=l):uo(e)}}function uo(e){for(;E!==null;){var t=E;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:le||_a(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!le)if(n===null)r.componentDidMount();else{var a=t.elementType===t.type?n.memoizedProps:Le(t.type,n.memoizedProps);r.componentDidUpdate(a,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var l=t.updateQueue;l!==null&&Yi(t,l,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Yi(t,s,n)}break;case 5:var i=t.stateNode;if(n===null&&t.flags&4){n=i;var o=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":o.autoFocus&&n.focus();break;case"img":o.src&&(n.src=o.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var h=u.memoizedState;if(h!==null){var d=h.dehydrated;d!==null&&Qn(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(w(163))}le||t.flags&512&&Kl(t)}catch(m){H(t,t.return,m)}}if(t===e){E=null;break}if(n=t.sibling,n!==null){n.return=t.return,E=n;break}E=t.return}}function co(e){for(;E!==null;){var t=E;if(t===e){E=null;break}var n=t.sibling;if(n!==null){n.return=t.return,E=n;break}E=t.return}}function fo(e){for(;E!==null;){var t=E;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{_a(4,t)}catch(o){H(t,n,o)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var a=t.return;try{r.componentDidMount()}catch(o){H(t,a,o)}}var l=t.return;try{Kl(t)}catch(o){H(t,l,o)}break;case 5:var s=t.return;try{Kl(t)}catch(o){H(t,s,o)}}}catch(o){H(t,t.return,o)}if(t===e){E=null;break}var i=t.sibling;if(i!==null){i.return=t.return,E=i;break}E=t.return}}var mp=Math.ceil,oa=Xe.ReactCurrentDispatcher,Bs=Xe.ReactCurrentOwner,Ee=Xe.ReactCurrentBatchConfig,I=0,q=null,K=null,te=0,ve=0,Gt=xt(0),X=0,rr=null,zt=0,Ea=0,Ws=0,Dn=null,de=null,Hs=0,dn=1/0,Be=null,ua=!1,Gl=null,ct=null,Pr=!1,rt=null,ca=0,Un=0,Zl=null,Ur=-1,Br=0;function oe(){return I&6?Q():Ur!==-1?Ur:Ur=Q()}function dt(e){return e.mode&1?I&2&&te!==0?te&-te:Gf.transition!==null?(Br===0&&(Br=fu()),Br):(e=R,e!==0||(e=window.event,e=e===void 0?16:yu(e.type)),e):1}function Ie(e,t,n,r){if(50<Un)throw Un=0,Zl=null,Error(w(185));ir(e,n,r),(!(I&2)||e!==q)&&(e===q&&(!(I&2)&&(Ea|=n),X===4&&tt(e,te)),he(e,r),n===1&&I===0&&!(t.mode&1)&&(dn=Q()+500,wa&&gt()))}function he(e,t){var n=e.callbackNode;Xd(e,t);var r=Yr(e,e===q?te:0);if(r===0)n!==null&&bi(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&bi(n),t===1)e.tag===0?Xf(po.bind(null,e)):Au(po.bind(null,e)),Qf(function(){!(I&6)&&gt()}),n=null;else{switch(pu(r)){case 1:n=hs;break;case 4:n=cu;break;case 16:n=Qr;break;case 536870912:n=du;break;default:n=Qr}n=Oc(n,Pc.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Pc(e,t){if(Ur=-1,Br=0,I&6)throw Error(w(327));var n=e.callbackNode;if(rn()&&e.callbackNode!==n)return null;var r=Yr(e,e===q?te:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=da(e,r);else{t=r;var a=I;I|=2;var l=Tc();(q!==e||te!==t)&&(Be=null,dn=Q()+500,jt(e,t));do try{xp();break}catch(i){Lc(e,i)}while(!0);js(),oa.current=l,I=a,K!==null?t=0:(q=null,te=0,t=X)}if(t!==0){if(t===2&&(a=El(e),a!==0&&(r=a,t=ql(e,a))),t===1)throw n=rr,jt(e,0),tt(e,r),he(e,Q()),n;if(t===6)tt(e,r);else{if(a=e.current.alternate,!(r&30)&&!hp(a)&&(t=da(e,r),t===2&&(l=El(e),l!==0&&(r=l,t=ql(e,l))),t===1))throw n=rr,jt(e,0),tt(e,r),he(e,Q()),n;switch(e.finishedWork=a,e.finishedLanes=r,t){case 0:case 1:throw Error(w(345));case 2:_t(e,de,Be);break;case 3:if(tt(e,r),(r&130023424)===r&&(t=Hs+500-Q(),10<t)){if(Yr(e,0)!==0)break;if(a=e.suspendedLanes,(a&r)!==r){oe(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=zl(_t.bind(null,e,de,Be),t);break}_t(e,de,Be);break;case 4:if(tt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,a=-1;0<r;){var s=31-ze(r);l=1<<s,s=t[s],s>a&&(a=s),r&=~l}if(r=a,r=Q()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*mp(r/1960))-r,10<r){e.timeoutHandle=zl(_t.bind(null,e,de,Be),r);break}_t(e,de,Be);break;case 5:_t(e,de,Be);break;default:throw Error(w(329))}}}return he(e,Q()),e.callbackNode===n?Pc.bind(null,e):null}function ql(e,t){var n=Dn;return e.current.memoizedState.isDehydrated&&(jt(e,t).flags|=256),e=da(e,t),e!==2&&(t=de,de=n,t!==null&&es(t)),e}function es(e){de===null?de=e:de.push.apply(de,e)}function hp(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var a=n[r],l=a.getSnapshot;a=a.value;try{if(!Re(l(),a))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function tt(e,t){for(t&=~Ws,t&=~Ea,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-ze(t),r=1<<n;e[n]=-1,t&=~r}}function po(e){if(I&6)throw Error(w(327));rn();var t=Yr(e,0);if(!(t&1))return he(e,Q()),null;var n=da(e,t);if(e.tag!==0&&n===2){var r=El(e);r!==0&&(t=r,n=ql(e,r))}if(n===1)throw n=rr,jt(e,0),tt(e,t),he(e,Q()),n;if(n===6)throw Error(w(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,_t(e,de,Be),he(e,Q()),null}function Vs(e,t){var n=I;I|=1;try{return e(t)}finally{I=n,I===0&&(dn=Q()+500,wa&&gt())}}function It(e){rt!==null&&rt.tag===0&&!(I&6)&&rn();var t=I;I|=1;var n=Ee.transition,r=R;try{if(Ee.transition=null,R=1,e)return e()}finally{R=r,Ee.transition=n,I=t,!(I&6)&&gt()}}function $s(){ve=Gt.current,A(Gt)}function jt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,$f(n)),K!==null)for(n=K.return;n!==null;){var r=n;switch(Es(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Zr();break;case 3:un(),A(pe),A(se),Is();break;case 5:zs(r);break;case 4:un();break;case 13:A(U);break;case 19:A(U);break;case 10:Ps(r.type._context);break;case 22:case 23:$s()}n=n.return}if(q=e,K=e=ft(e.current,null),te=ve=t,X=0,rr=null,Ws=Ea=zt=0,de=Dn=null,Ct!==null){for(t=0;t<Ct.length;t++)if(n=Ct[t],r=n.interleaved,r!==null){n.interleaved=null;var a=r.next,l=n.pending;if(l!==null){var s=l.next;l.next=a,r.next=s}n.pending=r}Ct=null}return e}function Lc(e,t){do{var n=K;try{if(js(),Fr.current=ia,sa){for(var r=B.memoizedState;r!==null;){var a=r.queue;a!==null&&(a.pending=null),r=r.next}sa=!1}if(Mt=0,Z=J=B=null,Fn=!1,er=0,Bs.current=null,n===null||n.return===null){X=1,rr=t,K=null;break}e:{var l=e,s=n.return,i=n,o=t;if(t=te,i.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){var u=o,h=i,d=h.tag;if(!(h.mode&1)&&(d===0||d===11||d===15)){var m=h.alternate;m?(h.updateQueue=m.updateQueue,h.memoizedState=m.memoizedState,h.lanes=m.lanes):(h.updateQueue=null,h.memoizedState=null)}var g=qi(s);if(g!==null){g.flags&=-257,eo(g,s,i,l,t),g.mode&1&&Zi(l,u,t),t=g,o=u;var y=t.updateQueue;if(y===null){var b=new Set;b.add(o),t.updateQueue=b}else y.add(o);break e}else{if(!(t&1)){Zi(l,u,t),Qs();break e}o=Error(w(426))}}else if(D&&i.mode&1){var _=qi(s);if(_!==null){!(_.flags&65536)&&(_.flags|=256),eo(_,s,i,l,t),Cs(cn(o,i));break e}}l=o=cn(o,i),X!==4&&(X=2),Dn===null?Dn=[l]:Dn.push(l),l=s;do{switch(l.tag){case 3:l.flags|=65536,t&=-t,l.lanes|=t;var f=pc(l,o,t);Qi(l,f);break e;case 1:i=o;var c=l.type,p=l.stateNode;if(!(l.flags&128)&&(typeof c.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(ct===null||!ct.has(p)))){l.flags|=65536,t&=-t,l.lanes|=t;var x=mc(l,i,t);Qi(l,x);break e}}l=l.return}while(l!==null)}zc(n)}catch(S){t=S,K===n&&n!==null&&(K=n=n.return);continue}break}while(!0)}function Tc(){var e=oa.current;return oa.current=ia,e===null?ia:e}function Qs(){(X===0||X===3||X===2)&&(X=4),q===null||!(zt&268435455)&&!(Ea&268435455)||tt(q,te)}function da(e,t){var n=I;I|=2;var r=Tc();(q!==e||te!==t)&&(Be=null,jt(e,t));do try{vp();break}catch(a){Lc(e,a)}while(!0);if(js(),I=n,oa.current=r,K!==null)throw Error(w(261));return q=null,te=0,X}function vp(){for(;K!==null;)Mc(K)}function xp(){for(;K!==null&&!Bd();)Mc(K)}function Mc(e){var t=Rc(e.alternate,e,ve);e.memoizedProps=e.pendingProps,t===null?zc(e):K=t,Bs.current=null}function zc(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=cp(n,t),n!==null){n.flags&=32767,K=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{X=6,K=null;return}}else if(n=up(n,t,ve),n!==null){K=n;return}if(t=t.sibling,t!==null){K=t;return}K=t=e}while(t!==null);X===0&&(X=5)}function _t(e,t,n){var r=R,a=Ee.transition;try{Ee.transition=null,R=1,gp(e,t,n,r)}finally{Ee.transition=a,R=r}return null}function gp(e,t,n,r){do rn();while(rt!==null);if(I&6)throw Error(w(327));n=e.finishedWork;var a=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(w(177));e.callbackNode=null,e.callbackPriority=0;var l=n.lanes|n.childLanes;if(Gd(e,l),e===q&&(K=q=null,te=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Pr||(Pr=!0,Oc(Qr,function(){return rn(),null})),l=(n.flags&15990)!==0,n.subtreeFlags&15990||l){l=Ee.transition,Ee.transition=null;var s=R;R=1;var i=I;I|=4,Bs.current=null,fp(e,n),Nc(n,e),Af(Tl),Kr=!!Ll,Tl=Ll=null,e.current=n,pp(n),Wd(),I=i,R=s,Ee.transition=l}else e.current=n;if(Pr&&(Pr=!1,rt=e,ca=a),l=e.pendingLanes,l===0&&(ct=null),$d(n.stateNode),he(e,Q()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)a=t[n],r(a.value,{componentStack:a.stack,digest:a.digest});if(ua)throw ua=!1,e=Gl,Gl=null,e;return ca&1&&e.tag!==0&&rn(),l=e.pendingLanes,l&1?e===Zl?Un++:(Un=0,Zl=e):Un=0,gt(),null}function rn(){if(rt!==null){var e=pu(ca),t=Ee.transition,n=R;try{if(Ee.transition=null,R=16>e?16:e,rt===null)var r=!1;else{if(e=rt,rt=null,ca=0,I&6)throw Error(w(331));var a=I;for(I|=4,E=e.current;E!==null;){var l=E,s=l.child;if(E.flags&16){var i=l.deletions;if(i!==null){for(var o=0;o<i.length;o++){var u=i[o];for(E=u;E!==null;){var h=E;switch(h.tag){case 0:case 11:case 15:An(8,h,l)}var d=h.child;if(d!==null)d.return=h,E=d;else for(;E!==null;){h=E;var m=h.sibling,g=h.return;if(_c(h),h===u){E=null;break}if(m!==null){m.return=g,E=m;break}E=g}}}var y=l.alternate;if(y!==null){var b=y.child;if(b!==null){y.child=null;do{var _=b.sibling;b.sibling=null,b=_}while(b!==null)}}E=l}}if(l.subtreeFlags&2064&&s!==null)s.return=l,E=s;else e:for(;E!==null;){if(l=E,l.flags&2048)switch(l.tag){case 0:case 11:case 15:An(9,l,l.return)}var f=l.sibling;if(f!==null){f.return=l.return,E=f;break e}E=l.return}}var c=e.current;for(E=c;E!==null;){s=E;var p=s.child;if(s.subtreeFlags&2064&&p!==null)p.return=s,E=p;else e:for(s=c;E!==null;){if(i=E,i.flags&2048)try{switch(i.tag){case 0:case 11:case 15:_a(9,i)}}catch(S){H(i,i.return,S)}if(i===s){E=null;break e}var x=i.sibling;if(x!==null){x.return=i.return,E=x;break e}E=i.return}}if(I=a,gt(),De&&typeof De.onPostCommitFiberRoot=="function")try{De.onPostCommitFiberRoot(va,e)}catch{}r=!0}return r}finally{R=n,Ee.transition=t}}return!1}function mo(e,t,n){t=cn(n,t),t=pc(e,t,1),e=ut(e,t,1),t=oe(),e!==null&&(ir(e,1,t),he(e,t))}function H(e,t,n){if(e.tag===3)mo(e,e,n);else for(;t!==null;){if(t.tag===3){mo(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(ct===null||!ct.has(r))){e=cn(n,e),e=mc(t,e,1),t=ut(t,e,1),e=oe(),t!==null&&(ir(t,1,e),he(t,e));break}}t=t.return}}function yp(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=oe(),e.pingedLanes|=e.suspendedLanes&n,q===e&&(te&n)===n&&(X===4||X===3&&(te&130023424)===te&&500>Q()-Hs?jt(e,0):Ws|=n),he(e,t)}function Ic(e,t){t===0&&(e.mode&1?(t=yr,yr<<=1,!(yr&130023424)&&(yr=4194304)):t=1);var n=oe();e=Ke(e,t),e!==null&&(ir(e,t,n),he(e,n))}function bp(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Ic(e,n)}function wp(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(w(314))}r!==null&&r.delete(t),Ic(e,n)}var Rc;Rc=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||pe.current)fe=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return fe=!1,op(e,t,n);fe=!!(e.flags&131072)}else fe=!1,D&&t.flags&1048576&&Du(t,ta,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Dr(e,t),e=t.pendingProps;var a=ln(t,se.current);nn(t,n),a=Os(null,t,r,e,a,n);var l=Fs();return t.flags|=1,typeof a=="object"&&a!==null&&typeof a.render=="function"&&a.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,me(r)?(l=!0,qr(t)):l=!1,t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,Ts(t),a.updater=Sa,t.stateNode=a,a._reactInternals=t,Ul(t,r,e,n),t=Hl(null,t,r,!0,l,n)):(t.tag=0,D&&l&&_s(t),ie(null,t,a,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Dr(e,t),e=t.pendingProps,a=r._init,r=a(r._payload),t.type=r,a=t.tag=Sp(r),e=Le(r,e),a){case 0:t=Wl(null,t,r,e,n);break e;case 1:t=ro(null,t,r,e,n);break e;case 11:t=to(null,t,r,e,n);break e;case 14:t=no(null,t,r,Le(r.type,e),n);break e}throw Error(w(306,r,""))}return t;case 0:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:Le(r,a),Wl(e,t,r,a,n);case 1:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:Le(r,a),ro(e,t,r,a,n);case 3:e:{if(gc(t),e===null)throw Error(w(387));r=t.pendingProps,l=t.memoizedState,a=l.element,$u(e,t),aa(t,r,null,n);var s=t.memoizedState;if(r=s.element,l.isDehydrated)if(l={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=l,t.memoizedState=l,t.flags&256){a=cn(Error(w(423)),t),t=ao(e,t,r,n,a);break e}else if(r!==a){a=cn(Error(w(424)),t),t=ao(e,t,r,n,a);break e}else for(xe=ot(t.stateNode.containerInfo.firstChild),ge=t,D=!0,Me=null,n=Hu(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(sn(),r===a){t=Je(e,t,n);break e}ie(e,t,r,n)}t=t.child}return t;case 5:return Qu(t),e===null&&Fl(t),r=t.type,a=t.pendingProps,l=e!==null?e.memoizedProps:null,s=a.children,Ml(r,a)?s=null:l!==null&&Ml(r,l)&&(t.flags|=32),xc(e,t),ie(e,t,s,n),t.child;case 6:return e===null&&Fl(t),null;case 13:return yc(e,t,n);case 4:return Ms(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=on(t,null,r,n):ie(e,t,r,n),t.child;case 11:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:Le(r,a),to(e,t,r,a,n);case 7:return ie(e,t,t.pendingProps,n),t.child;case 8:return ie(e,t,t.pendingProps.children,n),t.child;case 12:return ie(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,a=t.pendingProps,l=t.memoizedProps,s=a.value,O(na,r._currentValue),r._currentValue=s,l!==null)if(Re(l.value,s)){if(l.children===a.children&&!pe.current){t=Je(e,t,n);break e}}else for(l=t.child,l!==null&&(l.return=t);l!==null;){var i=l.dependencies;if(i!==null){s=l.child;for(var o=i.firstContext;o!==null;){if(o.context===r){if(l.tag===1){o=$e(-1,n&-n),o.tag=2;var u=l.updateQueue;if(u!==null){u=u.shared;var h=u.pending;h===null?o.next=o:(o.next=h.next,h.next=o),u.pending=o}}l.lanes|=n,o=l.alternate,o!==null&&(o.lanes|=n),Al(l.return,n,t),i.lanes|=n;break}o=o.next}}else if(l.tag===10)s=l.type===t.type?null:l.child;else if(l.tag===18){if(s=l.return,s===null)throw Error(w(341));s.lanes|=n,i=s.alternate,i!==null&&(i.lanes|=n),Al(s,n,t),s=l.sibling}else s=l.child;if(s!==null)s.return=l;else for(s=l;s!==null;){if(s===t){s=null;break}if(l=s.sibling,l!==null){l.return=s.return,s=l;break}s=s.return}l=s}ie(e,t,a.children,n),t=t.child}return t;case 9:return a=t.type,r=t.pendingProps.children,nn(t,n),a=Ce(a),r=r(a),t.flags|=1,ie(e,t,r,n),t.child;case 14:return r=t.type,a=Le(r,t.pendingProps),a=Le(r.type,a),no(e,t,r,a,n);case 15:return hc(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:Le(r,a),Dr(e,t),t.tag=1,me(r)?(e=!0,qr(t)):e=!1,nn(t,n),fc(t,r,a),Ul(t,r,a,n),Hl(null,t,r,!0,e,n);case 19:return bc(e,t,n);case 22:return vc(e,t,n)}throw Error(w(156,t.tag))};function Oc(e,t){return uu(e,t)}function kp(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function _e(e,t,n,r){return new kp(e,t,n,r)}function Ys(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Sp(e){if(typeof e=="function")return Ys(e)?1:0;if(e!=null){if(e=e.$$typeof,e===fs)return 11;if(e===ps)return 14}return 2}function ft(e,t){var n=e.alternate;return n===null?(n=_e(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Wr(e,t,n,r,a,l){var s=2;if(r=e,typeof e=="function")Ys(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case Bt:return Pt(n.children,a,l,t);case ds:s=8,a|=8;break;case cl:return e=_e(12,n,t,a|2),e.elementType=cl,e.lanes=l,e;case dl:return e=_e(13,n,t,a),e.elementType=dl,e.lanes=l,e;case fl:return e=_e(19,n,t,a),e.elementType=fl,e.lanes=l,e;case Qo:return Ca(n,a,l,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Vo:s=10;break e;case $o:s=9;break e;case fs:s=11;break e;case ps:s=14;break e;case Ze:s=16,r=null;break e}throw Error(w(130,e==null?e:typeof e,""))}return t=_e(s,n,t,a),t.elementType=e,t.type=r,t.lanes=l,t}function Pt(e,t,n,r){return e=_e(7,e,r,t),e.lanes=n,e}function Ca(e,t,n,r){return e=_e(22,e,r,t),e.elementType=Qo,e.lanes=n,e.stateNode={isHidden:!1},e}function ll(e,t,n){return e=_e(6,e,null,t),e.lanes=n,e}function sl(e,t,n){return t=_e(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function _p(e,t,n,r,a){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ua(0),this.expirationTimes=Ua(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ua(0),this.identifierPrefix=r,this.onRecoverableError=a,this.mutableSourceEagerHydrationData=null}function Ks(e,t,n,r,a,l,s,i,o){return e=new _p(e,t,n,i,o),t===1?(t=1,l===!0&&(t|=8)):t=0,l=_e(3,null,null,t),e.current=l,l.stateNode=e,l.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ts(l),e}function Ep(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ut,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Fc(e){if(!e)return ht;e=e._reactInternals;e:{if(Ot(e)!==e||e.tag!==1)throw Error(w(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(me(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(w(171))}if(e.tag===1){var n=e.type;if(me(n))return Fu(e,n,t)}return t}function Ac(e,t,n,r,a,l,s,i,o){return e=Ks(n,r,!0,e,a,l,s,i,o),e.context=Fc(null),n=e.current,r=oe(),a=dt(n),l=$e(r,a),l.callback=t??null,ut(n,l,a),e.current.lanes=a,ir(e,a,r),he(e,r),e}function Na(e,t,n,r){var a=t.current,l=oe(),s=dt(a);return n=Fc(n),t.context===null?t.context=n:t.pendingContext=n,t=$e(l,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=ut(a,t,s),e!==null&&(Ie(e,a,s,l),Or(e,a,s)),s}function fa(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function ho(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Js(e,t){ho(e,t),(e=e.alternate)&&ho(e,t)}function Cp(){return null}var Dc=typeof reportError=="function"?reportError:function(e){console.error(e)};function Xs(e){this._internalRoot=e}ja.prototype.render=Xs.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(w(409));Na(e,t,null,null)};ja.prototype.unmount=Xs.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;It(function(){Na(null,e,null,null)}),t[Ye]=null}};function ja(e){this._internalRoot=e}ja.prototype.unstable_scheduleHydration=function(e){if(e){var t=vu();e={blockedOn:null,target:e,priority:t};for(var n=0;n<et.length&&t!==0&&t<et[n].priority;n++);et.splice(n,0,e),n===0&&gu(e)}};function Gs(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Pa(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function vo(){}function Np(e,t,n,r,a){if(a){if(typeof r=="function"){var l=r;r=function(){var u=fa(s);l.call(u)}}var s=Ac(t,r,e,0,null,!1,!1,"",vo);return e._reactRootContainer=s,e[Ye]=s.current,Jn(e.nodeType===8?e.parentNode:e),It(),s}for(;a=e.lastChild;)e.removeChild(a);if(typeof r=="function"){var i=r;r=function(){var u=fa(o);i.call(u)}}var o=Ks(e,0,!1,null,null,!1,!1,"",vo);return e._reactRootContainer=o,e[Ye]=o.current,Jn(e.nodeType===8?e.parentNode:e),It(function(){Na(t,o,n,r)}),o}function La(e,t,n,r,a){var l=n._reactRootContainer;if(l){var s=l;if(typeof a=="function"){var i=a;a=function(){var o=fa(s);i.call(o)}}Na(t,s,e,a)}else s=Np(n,t,e,a,r);return fa(s)}mu=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Ln(t.pendingLanes);n!==0&&(vs(t,n|1),he(t,Q()),!(I&6)&&(dn=Q()+500,gt()))}break;case 13:It(function(){var r=Ke(e,1);if(r!==null){var a=oe();Ie(r,e,1,a)}}),Js(e,1)}};xs=function(e){if(e.tag===13){var t=Ke(e,134217728);if(t!==null){var n=oe();Ie(t,e,134217728,n)}Js(e,134217728)}};hu=function(e){if(e.tag===13){var t=dt(e),n=Ke(e,t);if(n!==null){var r=oe();Ie(n,e,t,r)}Js(e,t)}};vu=function(){return R};xu=function(e,t){var n=R;try{return R=e,t()}finally{R=n}};kl=function(e,t,n){switch(t){case"input":if(hl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=ba(r);if(!a)throw Error(w(90));Ko(r),hl(r,a)}}}break;case"textarea":Xo(e,n);break;case"select":t=n.value,t!=null&&Zt(e,!!n.multiple,t,!1)}};ru=Vs;au=It;var jp={usingClientEntryPoint:!1,Events:[ur,$t,ba,tu,nu,Vs]},Nn={findFiberByHostInstance:Et,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Pp={bundleType:Nn.bundleType,version:Nn.version,rendererPackageName:Nn.rendererPackageName,rendererConfig:Nn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Xe.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=iu(e),e===null?null:e.stateNode},findFiberByHostInstance:Nn.findFiberByHostInstance||Cp,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Lr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Lr.isDisabled&&Lr.supportsFiber)try{va=Lr.inject(Pp),De=Lr}catch{}}be.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=jp;be.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Gs(t))throw Error(w(200));return Ep(e,t,null,n)};be.createRoot=function(e,t){if(!Gs(e))throw Error(w(299));var n=!1,r="",a=Dc;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),t=Ks(e,1,!1,null,null,n,!1,r,a),e[Ye]=t.current,Jn(e.nodeType===8?e.parentNode:e),new Xs(t)};be.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(w(188)):(e=Object.keys(e).join(","),Error(w(268,e)));return e=iu(t),e=e===null?null:e.stateNode,e};be.flushSync=function(e){return It(e)};be.hydrate=function(e,t,n){if(!Pa(t))throw Error(w(200));return La(null,e,t,!0,n)};be.hydrateRoot=function(e,t,n){if(!Gs(e))throw Error(w(405));var r=n!=null&&n.hydratedSources||null,a=!1,l="",s=Dc;if(n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=Ac(t,null,e,1,n??null,a,!1,l,s),e[Ye]=t.current,Jn(e),r)for(e=0;e<r.length;e++)n=r[e],a=n._getVersion,a=a(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,a]:t.mutableSourceEagerHydrationData.push(n,a);return new ja(t)};be.render=function(e,t,n){if(!Pa(t))throw Error(w(200));return La(null,e,t,!1,n)};be.unmountComponentAtNode=function(e){if(!Pa(e))throw Error(w(40));return e._reactRootContainer?(It(function(){La(null,null,e,!1,function(){e._reactRootContainer=null,e[Ye]=null})}),!0):!1};be.unstable_batchedUpdates=Vs;be.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Pa(n))throw Error(w(200));if(e==null||e._reactInternals===void 0)throw Error(w(38));return La(e,t,n,!1,r)};be.version="18.3.1-next-f1338f8080-20240426";function Uc(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Uc)}catch(e){console.error(e)}}Uc(),Uo.exports=be;var Lp=Uo.exports,xo=Lp;ol.createRoot=xo.createRoot,ol.hydrateRoot=xo.hydrateRoot;/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ar(){return ar=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ar.apply(this,arguments)}var at;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(at||(at={}));const go="popstate";function Tp(e){e===void 0&&(e={});function t(r,a){let{pathname:l,search:s,hash:i}=r.location;return ts("",{pathname:l,search:s,hash:i},a.state&&a.state.usr||null,a.state&&a.state.key||"default")}function n(r,a){return typeof a=="string"?a:pa(a)}return zp(t,n,null,e)}function Y(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Zs(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Mp(){return Math.random().toString(36).substr(2,8)}function yo(e,t){return{usr:e.state,key:e.key,idx:t}}function ts(e,t,n,r){return n===void 0&&(n=null),ar({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?hn(t):t,{state:n,key:t&&t.key||r||Mp()})}function pa(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function hn(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function zp(e,t,n,r){r===void 0&&(r={});let{window:a=document.defaultView,v5Compat:l=!1}=r,s=a.history,i=at.Pop,o=null,u=h();u==null&&(u=0,s.replaceState(ar({},s.state,{idx:u}),""));function h(){return(s.state||{idx:null}).idx}function d(){i=at.Pop;let _=h(),f=_==null?null:_-u;u=_,o&&o({action:i,location:b.location,delta:f})}function m(_,f){i=at.Push;let c=ts(b.location,_,f);u=h()+1;let p=yo(c,u),x=b.createHref(c);try{s.pushState(p,"",x)}catch(S){if(S instanceof DOMException&&S.name==="DataCloneError")throw S;a.location.assign(x)}l&&o&&o({action:i,location:b.location,delta:1})}function g(_,f){i=at.Replace;let c=ts(b.location,_,f);u=h();let p=yo(c,u),x=b.createHref(c);s.replaceState(p,"",x),l&&o&&o({action:i,location:b.location,delta:0})}function y(_){let f=a.location.origin!=="null"?a.location.origin:a.location.href,c=typeof _=="string"?_:pa(_);return c=c.replace(/ $/,"%20"),Y(f,"No window.location.(origin|href) available to create URL for href: "+c),new URL(c,f)}let b={get action(){return i},get location(){return e(a,s)},listen(_){if(o)throw new Error("A history only accepts one active listener");return a.addEventListener(go,d),o=_,()=>{a.removeEventListener(go,d),o=null}},createHref(_){return t(a,_)},createURL:y,encodeLocation(_){let f=y(_);return{pathname:f.pathname,search:f.search,hash:f.hash}},push:m,replace:g,go(_){return s.go(_)}};return b}var bo;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(bo||(bo={}));function Ip(e,t,n){return n===void 0&&(n="/"),Rp(e,t,n)}function Rp(e,t,n,r){let a=typeof t=="string"?hn(t):t,l=qs(a.pathname||"/",n);if(l==null)return null;let s=Bc(e);Op(s);let i=null;for(let o=0;i==null&&o<s.length;++o){let u=Kp(l);i=$p(s[o],u)}return i}function Bc(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let a=(l,s,i)=>{let o={relativePath:i===void 0?l.path||"":i,caseSensitive:l.caseSensitive===!0,childrenIndex:s,route:l};o.relativePath.startsWith("/")&&(Y(o.relativePath.startsWith(r),'Absolute route path "'+o.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),o.relativePath=o.relativePath.slice(r.length));let u=pt([r,o.relativePath]),h=n.concat(o);l.children&&l.children.length>0&&(Y(l.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Bc(l.children,t,h,u)),!(l.path==null&&!l.index)&&t.push({path:u,score:Hp(u,l.index),routesMeta:h})};return e.forEach((l,s)=>{var i;if(l.path===""||!((i=l.path)!=null&&i.includes("?")))a(l,s);else for(let o of Wc(l.path))a(l,s,o)}),t}function Wc(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,a=n.endsWith("?"),l=n.replace(/\?$/,"");if(r.length===0)return a?[l,""]:[l];let s=Wc(r.join("/")),i=[];return i.push(...s.map(o=>o===""?l:[l,o].join("/"))),a&&i.push(...s),i.map(o=>e.startsWith("/")&&o===""?"/":o)}function Op(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:Vp(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Fp=/^:[\w-]+$/,Ap=3,Dp=2,Up=1,Bp=10,Wp=-2,wo=e=>e==="*";function Hp(e,t){let n=e.split("/"),r=n.length;return n.some(wo)&&(r+=Wp),t&&(r+=Dp),n.filter(a=>!wo(a)).reduce((a,l)=>a+(Fp.test(l)?Ap:l===""?Up:Bp),r)}function Vp(e,t){return e.length===t.length&&e.slice(0,-1).every((r,a)=>r===t[a])?e[e.length-1]-t[t.length-1]:0}function $p(e,t,n){let{routesMeta:r}=e,a={},l="/",s=[];for(let i=0;i<r.length;++i){let o=r[i],u=i===r.length-1,h=l==="/"?t:t.slice(l.length)||"/",d=Qp({path:o.relativePath,caseSensitive:o.caseSensitive,end:u},h),m=o.route;if(!d)return null;Object.assign(a,d.params),s.push({params:a,pathname:pt([l,d.pathname]),pathnameBase:qp(pt([l,d.pathnameBase])),route:m}),d.pathnameBase!=="/"&&(l=pt([l,d.pathnameBase]))}return s}function Qp(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Yp(e.path,e.caseSensitive,e.end),a=t.match(n);if(!a)return null;let l=a[0],s=l.replace(/(.)\/+$/,"$1"),i=a.slice(1);return{params:r.reduce((u,h,d)=>{let{paramName:m,isOptional:g}=h;if(m==="*"){let b=i[d]||"";s=l.slice(0,l.length-b.length).replace(/(.)\/+$/,"$1")}const y=i[d];return g&&!y?u[m]=void 0:u[m]=(y||"").replace(/%2F/g,"/"),u},{}),pathname:l,pathnameBase:s,pattern:e}}function Yp(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Zs(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],a="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(s,i,o)=>(r.push({paramName:i,isOptional:o!=null}),o?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),a+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?a+="\\/*$":e!==""&&e!=="/"&&(a+="(?:(?=\\/|$))"),[new RegExp(a,t?void 0:"i"),r]}function Kp(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Zs(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function qs(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}const Jp=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Xp=e=>Jp.test(e);function Gp(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:a=""}=typeof e=="string"?hn(e):e,l;if(n)if(Xp(n))l=n;else{if(n.includes("//")){let s=n;n=n.replace(/\/\/+/g,"/"),Zs(!1,"Pathnames cannot have embedded double slashes - normalizing "+(s+" -> "+n))}n.startsWith("/")?l=ko(n.substring(1),"/"):l=ko(n,t)}else l=t;return{pathname:l,search:em(r),hash:tm(a)}}function ko(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(a=>{a===".."?n.length>1&&n.pop():a!=="."&&n.push(a)}),n.length>1?n.join("/"):"/"}function il(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Zp(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function ei(e,t){let n=Zp(e);return t?n.map((r,a)=>a===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function ti(e,t,n,r){r===void 0&&(r=!1);let a;typeof e=="string"?a=hn(e):(a=ar({},e),Y(!a.pathname||!a.pathname.includes("?"),il("?","pathname","search",a)),Y(!a.pathname||!a.pathname.includes("#"),il("#","pathname","hash",a)),Y(!a.search||!a.search.includes("#"),il("#","search","hash",a)));let l=e===""||a.pathname==="",s=l?"/":a.pathname,i;if(s==null)i=n;else{let d=t.length-1;if(!r&&s.startsWith("..")){let m=s.split("/");for(;m[0]==="..";)m.shift(),d-=1;a.pathname=m.join("/")}i=d>=0?t[d]:"/"}let o=Gp(a,i),u=s&&s!=="/"&&s.endsWith("/"),h=(l||s===".")&&n.endsWith("/");return!o.pathname.endsWith("/")&&(u||h)&&(o.pathname+="/"),o}const pt=e=>e.join("/").replace(/\/\/+/g,"/"),qp=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),em=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,tm=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function nm(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Hc=["post","put","patch","delete"];new Set(Hc);const rm=["get",...Hc];new Set(rm);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function lr(){return lr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},lr.apply(this,arguments)}const ni=k.createContext(null),am=k.createContext(null),yt=k.createContext(null),Ta=k.createContext(null),bt=k.createContext({outlet:null,matches:[],isDataRoute:!1}),Vc=k.createContext(null);function lm(e,t){let{relative:n}=t===void 0?{}:t;vn()||Y(!1);let{basename:r,navigator:a}=k.useContext(yt),{hash:l,pathname:s,search:i}=Qc(e,{relative:n}),o=s;return r!=="/"&&(o=s==="/"?r:pt([r,s])),a.createHref({pathname:o,search:i,hash:l})}function vn(){return k.useContext(Ta)!=null}function xn(){return vn()||Y(!1),k.useContext(Ta).location}function $c(e){k.useContext(yt).static||k.useLayoutEffect(e)}function dr(){let{isDataRoute:e}=k.useContext(bt);return e?gm():sm()}function sm(){vn()||Y(!1);let e=k.useContext(ni),{basename:t,future:n,navigator:r}=k.useContext(yt),{matches:a}=k.useContext(bt),{pathname:l}=xn(),s=JSON.stringify(ei(a,n.v7_relativeSplatPath)),i=k.useRef(!1);return $c(()=>{i.current=!0}),k.useCallback(function(u,h){if(h===void 0&&(h={}),!i.current)return;if(typeof u=="number"){r.go(u);return}let d=ti(u,JSON.parse(s),l,h.relative==="path");e==null&&t!=="/"&&(d.pathname=d.pathname==="/"?t:pt([t,d.pathname])),(h.replace?r.replace:r.push)(d,h.state,h)},[t,r,s,l,e])}function Qc(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=k.useContext(yt),{matches:a}=k.useContext(bt),{pathname:l}=xn(),s=JSON.stringify(ei(a,r.v7_relativeSplatPath));return k.useMemo(()=>ti(e,JSON.parse(s),l,n==="path"),[e,s,l,n])}function im(e,t){return om(e,t)}function om(e,t,n,r){vn()||Y(!1);let{navigator:a}=k.useContext(yt),{matches:l}=k.useContext(bt),s=l[l.length-1],i=s?s.params:{};s&&s.pathname;let o=s?s.pathnameBase:"/";s&&s.route;let u=xn(),h;if(t){var d;let _=typeof t=="string"?hn(t):t;o==="/"||(d=_.pathname)!=null&&d.startsWith(o)||Y(!1),h=_}else h=u;let m=h.pathname||"/",g=m;if(o!=="/"){let _=o.replace(/^\//,"").split("/");g="/"+m.replace(/^\//,"").split("/").slice(_.length).join("/")}let y=Ip(e,{pathname:g}),b=pm(y&&y.map(_=>Object.assign({},_,{params:Object.assign({},i,_.params),pathname:pt([o,a.encodeLocation?a.encodeLocation(_.pathname).pathname:_.pathname]),pathnameBase:_.pathnameBase==="/"?o:pt([o,a.encodeLocation?a.encodeLocation(_.pathnameBase).pathname:_.pathnameBase])})),l,n,r);return t&&b?k.createElement(Ta.Provider,{value:{location:lr({pathname:"/",search:"",hash:"",state:null,key:"default"},h),navigationType:at.Pop}},b):b}function um(){let e=xm(),t=nm(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,a={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return k.createElement(k.Fragment,null,k.createElement("h2",null,"Unexpected Application Error!"),k.createElement("h3",{style:{fontStyle:"italic"}},t),n?k.createElement("pre",{style:a},n):null,null)}const cm=k.createElement(um,null);class dm extends k.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?k.createElement(bt.Provider,{value:this.props.routeContext},k.createElement(Vc.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function fm(e){let{routeContext:t,match:n,children:r}=e,a=k.useContext(ni);return a&&a.static&&a.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=n.route.id),k.createElement(bt.Provider,{value:t},r)}function pm(e,t,n,r){var a;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var l;if(!n)return null;if(n.errors)e=n.matches;else if((l=r)!=null&&l.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let s=e,i=(a=n)==null?void 0:a.errors;if(i!=null){let h=s.findIndex(d=>d.route.id&&(i==null?void 0:i[d.route.id])!==void 0);h>=0||Y(!1),s=s.slice(0,Math.min(s.length,h+1))}let o=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let h=0;h<s.length;h++){let d=s[h];if((d.route.HydrateFallback||d.route.hydrateFallbackElement)&&(u=h),d.route.id){let{loaderData:m,errors:g}=n,y=d.route.loader&&m[d.route.id]===void 0&&(!g||g[d.route.id]===void 0);if(d.route.lazy||y){o=!0,u>=0?s=s.slice(0,u+1):s=[s[0]];break}}}return s.reduceRight((h,d,m)=>{let g,y=!1,b=null,_=null;n&&(g=i&&d.route.id?i[d.route.id]:void 0,b=d.route.errorElement||cm,o&&(u<0&&m===0?(ym("route-fallback"),y=!0,_=null):u===m&&(y=!0,_=d.route.hydrateFallbackElement||null)));let f=t.concat(s.slice(0,m+1)),c=()=>{let p;return g?p=b:y?p=_:d.route.Component?p=k.createElement(d.route.Component,null):d.route.element?p=d.route.element:p=h,k.createElement(fm,{match:d,routeContext:{outlet:h,matches:f,isDataRoute:n!=null},children:p})};return n&&(d.route.ErrorBoundary||d.route.errorElement||m===0)?k.createElement(dm,{location:n.location,revalidation:n.revalidation,component:b,error:g,children:c(),routeContext:{outlet:null,matches:f,isDataRoute:!0}}):c()},null)}var Yc=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Yc||{}),Kc=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Kc||{});function mm(e){let t=k.useContext(ni);return t||Y(!1),t}function hm(e){let t=k.useContext(am);return t||Y(!1),t}function vm(e){let t=k.useContext(bt);return t||Y(!1),t}function Jc(e){let t=vm(),n=t.matches[t.matches.length-1];return n.route.id||Y(!1),n.route.id}function xm(){var e;let t=k.useContext(Vc),n=hm(),r=Jc();return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function gm(){let{router:e}=mm(Yc.UseNavigateStable),t=Jc(Kc.UseNavigateStable),n=k.useRef(!1);return $c(()=>{n.current=!0}),k.useCallback(function(a,l){l===void 0&&(l={}),n.current&&(typeof a=="number"?e.navigate(a):e.navigate(a,lr({fromRouteId:t},l)))},[e,t])}const So={};function ym(e,t,n){So[e]||(So[e]=!0)}function bm(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function ma(e){let{to:t,replace:n,state:r,relative:a}=e;vn()||Y(!1);let{future:l,static:s}=k.useContext(yt),{matches:i}=k.useContext(bt),{pathname:o}=xn(),u=dr(),h=ti(t,ei(i,l.v7_relativeSplatPath),o,a==="path"),d=JSON.stringify(h);return k.useEffect(()=>u(JSON.parse(d),{replace:n,state:r,relative:a}),[u,d,a,n,r]),null}function Dt(e){Y(!1)}function wm(e){let{basename:t="/",children:n=null,location:r,navigationType:a=at.Pop,navigator:l,static:s=!1,future:i}=e;vn()&&Y(!1);let o=t.replace(/^\/*/,"/"),u=k.useMemo(()=>({basename:o,navigator:l,static:s,future:lr({v7_relativeSplatPath:!1},i)}),[o,i,l,s]);typeof r=="string"&&(r=hn(r));let{pathname:h="/",search:d="",hash:m="",state:g=null,key:y="default"}=r,b=k.useMemo(()=>{let _=qs(h,o);return _==null?null:{location:{pathname:_,search:d,hash:m,state:g,key:y},navigationType:a}},[o,h,d,m,g,y,a]);return b==null?null:k.createElement(yt.Provider,{value:u},k.createElement(Ta.Provider,{children:n,value:b}))}function km(e){let{children:t,location:n}=e;return im(ns(t),n)}new Promise(()=>{});function ns(e,t){t===void 0&&(t=[]);let n=[];return k.Children.forEach(e,(r,a)=>{if(!k.isValidElement(r))return;let l=[...t,a];if(r.type===k.Fragment){n.push.apply(n,ns(r.props.children,l));return}r.type!==Dt&&Y(!1),!r.props.index||!r.props.children||Y(!1);let s={id:r.props.id||l.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(s.children=ns(r.props.children,l)),n.push(s)}),n}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function rs(){return rs=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},rs.apply(this,arguments)}function Sm(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,l;for(l=0;l<r.length;l++)a=r[l],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function _m(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Em(e,t){return e.button===0&&(!t||t==="_self")&&!_m(e)}const Cm=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],Nm="6";try{window.__reactRouterVersion=Nm}catch{}const jm="startTransition",_o=gd[jm];function Pm(e){let{basename:t,children:n,future:r,window:a}=e,l=k.useRef();l.current==null&&(l.current=Tp({window:a,v5Compat:!0}));let s=l.current,[i,o]=k.useState({action:s.action,location:s.location}),{v7_startTransition:u}=r||{},h=k.useCallback(d=>{u&&_o?_o(()=>o(d)):o(d)},[o,u]);return k.useLayoutEffect(()=>s.listen(h),[s,h]),k.useEffect(()=>bm(r),[r]),k.createElement(wm,{basename:t,children:n,location:i.location,navigationType:i.action,navigator:s,future:r})}const Lm=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Tm=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Xc=k.forwardRef(function(t,n){let{onClick:r,relative:a,reloadDocument:l,replace:s,state:i,target:o,to:u,preventScrollReset:h,viewTransition:d}=t,m=Sm(t,Cm),{basename:g}=k.useContext(yt),y,b=!1;if(typeof u=="string"&&Tm.test(u)&&(y=u,Lm))try{let p=new URL(window.location.href),x=u.startsWith("//")?new URL(p.protocol+u):new URL(u),S=qs(x.pathname,g);x.origin===p.origin&&S!=null?u=S+x.search+x.hash:b=!0}catch{}let _=lm(u,{relative:a}),f=Mm(u,{replace:s,state:i,target:o,preventScrollReset:h,relative:a,viewTransition:d});function c(p){r&&r(p),p.defaultPrevented||f(p)}return k.createElement("a",rs({},m,{href:y||_,onClick:b||l?r:c,ref:n,target:o}))});var Eo;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Eo||(Eo={}));var Co;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Co||(Co={}));function Mm(e,t){let{target:n,replace:r,state:a,preventScrollReset:l,relative:s,viewTransition:i}=t===void 0?{}:t,o=dr(),u=xn(),h=Qc(e,{relative:s});return k.useCallback(d=>{if(Em(d,n)){d.preventDefault();let m=r!==void 0?r:pa(u)===pa(h);o(e,{replace:m,state:a,preventScrollReset:l,relative:s,viewTransition:i})}},[u,o,h,r,a,n,e,l,s,i])}const zm="http://localhost:5000/api/v1";async function ri(e,t={}){const n=await fetch(`${zm}${e}`,{headers:{"Content-Type":"application/json",...t.headers||{}},...t}),r=n.headers.get("Content-Type")||"",l=r.includes("application/json")||r.includes("application/problem+json")?await n.json():null;if(!n.ok){const s=(l==null?void 0:l.detail)||(l==null?void 0:l.message)||`Request failed with status ${n.status}`;throw new Error(s)}return l}async function Im({fullName:e,email:t,password:n}){return ri("/auth/register",{method:"POST",body:JSON.stringify({full_name:e,email:t,password:n})})}async function Rm({email:e,password:t}){return ri("/auth/login",{method:"POST",body:JSON.stringify({email:e,password:t})})}async function Om({refreshToken:e}){return ri("/auth/logout",{method:"POST",body:JSON.stringify({refresh_token:e})})}const ai="architectAccessToken",li="architectRefreshToken",Gc="architectUserName",Zc="architectUserEmail";function Fm(){return localStorage.getItem(ai)||""}function Am(){return localStorage.getItem(li)||""}function si(){return!!Fm()}function qc({accessToken:e,refreshToken:t,fullName:n,email:r}){e&&localStorage.setItem(ai,e),t&&localStorage.setItem(li,t),n&&localStorage.setItem(Gc,n),r&&localStorage.setItem(Zc,r)}function Dm(){localStorage.removeItem(ai),localStorage.removeItem(li),localStorage.removeItem(Gc),localStorage.removeItem(Zc)}function Um({title:e,html:t}){const n=k.useRef(null),r=dr();k.useEffect(()=>{document.title=`${e} | Expense Tracker React`},[e]);const a=o=>/\bsettings\b/.test(o)||/\bperson\b/.test(o)?"/settings":/\btransactions?\b/.test(o)||/\bactivity\b/.test(o)?"/transactions-list":/\bbudgets?\b/.test(o)||/\baccounts?\b/.test(o)?"/budgets-categories":/\bdashboard\b/.test(o)||/\bhome\b/.test(o)?"/dashboard-3":/\badd expense\b/.test(o)?"/add-expense":null,l=o=>{Array.from(o.querySelectorAll("span, p, a, div")).filter(d=>(d.textContent||"").trim().toLowerCase()==="analytics").forEach(d=>{const m=d.closest("a, button, div");m&&m.remove()}),Array.from(o.querySelectorAll(".material-symbols-outlined")).filter(d=>(d.textContent||"").trim().toLowerCase()==="bar_chart").forEach(d=>{const m=d.closest("a, button, div");m&&/analytics/i.test(m.textContent||"")&&m.remove()})},s=o=>{const u=localStorage.getItem("architectUserName")||"",h=localStorage.getItem("architectUserEmail")||"";if(!u&&!h)return;Array.from(o.querySelectorAll("*")).forEach(m=>{if(m.children.length>0)return;const g=(m.textContent||"").trim();u&&g==="Alex Sterling"&&(m.textContent=u),h&&g==="alex.sterling@architect-finance.com"&&(m.textContent=h)})},i=()=>{const o=n.current;if(!o||!o.contentDocument)return;o.__cleanupBridge&&o.__cleanupBridge();const u=o.contentDocument;l(u),s(u);const h=async d=>{var c;const m=d.target.closest("a, button, div");if(!m)return;const g=m.getAttribute("href"),y=(m.textContent||"").toLowerCase(),b=(((c=m.querySelector(".material-symbols-outlined"))==null?void 0:c.textContent)||"").toLowerCase(),_=`${y} ${b}`;if(/\blogout\b|\bsign out\b/.test(_)){d.preventDefault();const p=Am();if(p)try{await Om({refreshToken:p})}catch{}Dm(),r("/login");return}const f=a(_);f&&(g==="#"||m.tagName==="BUTTON"||m.tagName==="DIV")&&(d.preventDefault(),r(f))};u.addEventListener("click",h),o.__cleanupBridge=()=>u.removeEventListener("click",h)};return v.jsx("div",{className:"legacy-page",children:v.jsx("iframe",{ref:n,title:e,className:"legacy-iframe",srcDoc:t,sandbox:"allow-forms allow-modals allow-popups allow-same-origin allow-scripts",onLoad:i})})}function Bm(){const e=dr(),[t,n]=k.useState(!1),[r,a]=k.useState("");k.useEffect(()=>{document.title="Login | Expense Tracker React"},[]);const l=async s=>{var h,d;if(s.preventDefault(),t)return;const i=new FormData(s.currentTarget),o=String(i.get("email")||"").trim(),u=String(i.get("password")||"");a(""),n(!0);try{const m=await Rm({email:o,password:u});qc({accessToken:m.access_token,refreshToken:m.refresh_token,fullName:(h=m.user)==null?void 0:h.full_name,email:(d=m.user)==null?void 0:d.email}),e("/dashboard-3")}catch(m){a(m.message||"Unable to sign in. Please try again.")}finally{n(!1)}};return v.jsxs("div",{className:"relative min-h-screen overflow-hidden bg-background px-6 py-12 font-body text-on-surface antialiased selection:bg-primary/30",children:[v.jsxs("div",{className:"absolute inset-0 z-0 overflow-hidden",children:[v.jsx("div",{className:"absolute left-[-10%] top-[-10%] h-[50%] w-[50%] rounded-full bg-primary/5 blur-[120px]"}),v.jsx("div",{className:"absolute bottom-[-10%] right-[-10%] h-[50%] w-[50%] rounded-full bg-tertiary/5 blur-[120px]"}),v.jsx("div",{className:"absolute inset-0 opacity-20 mix-blend-overlay",children:v.jsx("img",{alt:"Architectural skyscraper detail",className:"h-full w-full object-cover",src:"https://lh3.googleusercontent.com/aida-public/AB6AXuA48QYAS8tMiV2OzMwBUCVv_aK8pVacsNGqsvygBgyn7a9WjQng5iKgDlmVfDujUphsXgeqtGkprCVS4O1dfh1Yb6cKxn677incNxdlRsOcSYMSjr8-ZX6ohOeWOW5wCfS20Eferbxtj2munJJHb0mUv8twoNag7Y5nwVCtN-JvdQBlnW6DPkPMtZfUUgvC9eWMO933Pz_F-FM4UlOvloRWUAZVpsF8DdW04RwuJCTEYbXS0EKXJ7BaZ05prB0MUpuFYi25_0pMhxc"})})]}),v.jsx("main",{className:"relative z-10 mx-auto flex min-h-screen w-full max-w-md items-center justify-center",children:v.jsxs("div",{className:"w-full",children:[v.jsxs("div",{className:"glass-card rounded-xl border border-outline-variant/10 p-10 shadow-[0_40px_100px_rgba(0,0,0,0.4)] xl:p-12",children:[v.jsxs("div",{className:"mb-10 text-center",children:[v.jsx("div",{className:"mb-6 inline-flex items-center justify-center rounded-xl bg-surface-container-highest p-3",children:v.jsx("span",{className:"material-symbols-outlined text-3xl text-primary",children:"account_balance"})}),v.jsx("h1",{className:"mb-2 font-headline text-3xl font-black tracking-tight text-on-surface",children:"Architect"}),v.jsx("p",{className:"font-label text-sm font-medium uppercase tracking-widest text-on-surface-variant",children:"Wealth Management"})]}),v.jsxs("form",{className:"space-y-6",onSubmit:l,children:[v.jsxs("div",{className:"space-y-2",children:[v.jsx("label",{className:"ml-1 block font-label text-xs font-semibold text-on-surface-variant",htmlFor:"email",children:"EMAIL ADDRESS"}),v.jsxs("div",{className:"group relative",children:[v.jsx("div",{className:"pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4",children:v.jsx("span",{className:"material-symbols-outlined text-lg text-on-surface-variant",children:"mail"})}),v.jsx("input",{id:"email",name:"email",type:"email",placeholder:"name@company.com",className:"block w-full rounded-xl border-none bg-surface-container-high py-4 pl-12 pr-4 text-on-surface placeholder:text-outline/50 transition-all duration-300 focus:ring-2 focus:ring-primary/20"})]})]}),v.jsxs("div",{className:"space-y-2",children:[v.jsxs("div",{className:"ml-1 flex items-center justify-between",children:[v.jsx("label",{className:"block font-label text-xs font-semibold text-on-surface-variant",htmlFor:"password",children:"PASSWORD"}),v.jsx("a",{className:"text-xs font-semibold text-primary transition-colors hover:text-primary-fixed",href:"#",children:"Forgot Password?"})]}),v.jsxs("div",{className:"group relative",children:[v.jsx("div",{className:"pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4",children:v.jsx("span",{className:"material-symbols-outlined text-lg text-on-surface-variant",children:"lock"})}),v.jsx("input",{id:"password",name:"password",type:"password",placeholder:"••••••••",className:"block w-full rounded-xl border-none bg-surface-container-high py-4 pl-12 pr-12 text-on-surface placeholder:text-outline/50 transition-all duration-300 focus:ring-2 focus:ring-primary/20"}),v.jsx("button",{className:"absolute inset-y-0 right-0 flex items-center pr-4 text-on-surface-variant transition-colors hover:text-on-surface",type:"button",children:v.jsx("span",{className:"material-symbols-outlined text-lg",children:"visibility"})})]})]}),v.jsx("div",{className:"pt-2",children:v.jsx("button",{className:"editorial-gradient w-full rounded-xl py-4 font-headline font-bold text-on-primary-fixed shadow-lg transition-all duration-200 hover:scale-[1.01] hover:shadow-primary/20 active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-70",type:"submit",disabled:t,children:t?"Signing in...":"Sign In"})}),r?v.jsx("p",{className:"text-sm text-error",children:r}):null]}),v.jsx("div",{className:"mt-10 text-center",children:v.jsxs("p",{className:"text-sm text-on-surface-variant",children:["New to Architect?"," ",v.jsx(Xc,{className:"font-bold text-primary transition-colors hover:text-primary-fixed",to:"/signup",children:"Create your account"})]})})]}),v.jsxs("div",{className:"mt-8 flex justify-center space-x-6 text-xs font-label uppercase tracking-widest text-outline opacity-50",children:[v.jsx("a",{className:"transition-colors hover:text-on-surface",href:"#",children:"Privacy Policy"}),v.jsx("a",{className:"transition-colors hover:text-on-surface",href:"#",children:"Terms of Service"}),v.jsx("a",{className:"transition-colors hover:text-on-surface",href:"#",children:"System Status"})]})]})}),v.jsx("div",{className:"pointer-events-none fixed bottom-0 left-0 z-20 h-32 w-full bg-gradient-to-t from-background to-transparent"})]})}function Wm(){const e=dr(),[t,n]=k.useState(!1),[r,a]=k.useState("");k.useEffect(()=>{document.title="Sign Up | Expense Tracker React"},[]);const l=async s=>{if(s.preventDefault(),t)return;const i=new FormData(s.currentTarget),o=String(i.get("full-name")||"").trim(),u=String(i.get("email")||"").trim(),h=String(i.get("password")||"");a(""),n(!0);try{await Im({fullName:o,email:u,password:h}),qc({fullName:o,email:u}),e("/dashboard-3")}catch(d){a(d.message||"Unable to create account. Please try again.")}finally{n(!1)}};return v.jsxs("div",{className:"min-h-screen bg-background text-on-background selection:bg-primary-container selection:text-on-primary-container",children:[v.jsxs("header",{className:"fixed top-0 z-50 flex w-full items-center justify-between px-6 py-8",children:[v.jsxs("div",{className:"flex items-center gap-2",children:[v.jsx("div",{className:"flex h-8 w-8 items-center justify-center rounded-lg bg-primary",children:v.jsx("span",{className:"material-symbols-outlined text-xl text-on-primary",style:{fontVariationSettings:"'FILL' 1"},children:"architecture"})}),v.jsx("span",{className:"font-headline text-2xl font-bold tracking-tighter text-slate-50",children:"Architect"})]}),v.jsx("div",{children:v.jsx("a",{className:"font-label text-sm font-medium text-on-surface-variant transition-colors hover:text-primary",href:"#",children:"Help Center"})})]}),v.jsxs("main",{className:"relative flex flex-grow items-center justify-center overflow-hidden px-6 py-24",children:[v.jsx("div",{className:"pointer-events-none absolute right-[-5%] top-[-10%] h-[600px] w-[600px] rounded-full bg-primary/10 blur-[120px]"}),v.jsx("div",{className:"pointer-events-none absolute bottom-[-10%] left-[-5%] h-[500px] w-[500px] rounded-full bg-tertiary/5 blur-[100px]"}),v.jsxs("div",{className:"z-10 w-full max-w-[480px]",children:[v.jsxs("div",{className:"glass-panel rounded-xl p-8 shadow-2xl md:p-12",children:[v.jsxs("div",{className:"mb-10",children:[v.jsx("h1",{className:"mb-2 font-headline text-3xl font-extrabold tracking-tight text-on-surface",children:"Build your future."}),v.jsx("p",{className:"body-md text-on-surface-variant",children:"Secure wealth management for the modern era."})]}),v.jsxs("form",{className:"space-y-6",onSubmit:l,children:[v.jsxs("div",{className:"space-y-2",children:[v.jsx("label",{className:"ml-1 block font-label text-xs font-semibold uppercase tracking-wider text-on-surface-variant",htmlFor:"full-name",children:"Full Name"}),v.jsxs("div",{className:"relative",children:[v.jsx("div",{className:"pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4",children:v.jsx("span",{className:"material-symbols-outlined text-lg text-outline",children:"person"})}),v.jsx("input",{id:"full-name",name:"full-name",type:"text",placeholder:"Johnathan Sterling",className:"w-full rounded-xl border-none bg-surface-container-high py-4 pl-12 pr-4 font-body text-on-surface placeholder:text-outline-variant transition-all focus:ring-2 focus:ring-primary/20"})]})]}),v.jsxs("div",{className:"space-y-2",children:[v.jsx("label",{className:"ml-1 block font-label text-xs font-semibold uppercase tracking-wider text-on-surface-variant",htmlFor:"email",children:"Email Address"}),v.jsxs("div",{className:"relative",children:[v.jsx("div",{className:"pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4",children:v.jsx("span",{className:"material-symbols-outlined text-lg text-outline",children:"mail"})}),v.jsx("input",{id:"email",name:"email",type:"email",placeholder:"john@architect.com",className:"w-full rounded-xl border-none bg-surface-container-high py-4 pl-12 pr-4 font-body text-on-surface placeholder:text-outline-variant transition-all focus:ring-2 focus:ring-primary/20"})]})]}),v.jsxs("div",{className:"space-y-2",children:[v.jsx("label",{className:"ml-1 block font-label text-xs font-semibold uppercase tracking-wider text-on-surface-variant",htmlFor:"password",children:"Password"}),v.jsxs("div",{className:"relative",children:[v.jsx("div",{className:"pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4",children:v.jsx("span",{className:"material-symbols-outlined text-lg text-outline",children:"lock"})}),v.jsx("input",{id:"password",name:"password",type:"password",placeholder:"••••••••••••",className:"w-full rounded-xl border-none bg-surface-container-high py-4 pl-12 pr-4 font-body text-on-surface placeholder:text-outline-variant transition-all focus:ring-2 focus:ring-primary/20"})]})]}),v.jsx("div",{className:"pt-2",children:v.jsx("button",{className:"bg-architect-gradient w-full rounded-xl py-4 font-headline text-lg font-bold text-slate-50 shadow-lg shadow-primary/10 transition-all hover:opacity-90 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-70",type:"submit",disabled:t,children:t?"Creating account...":"Create Account"})}),r?v.jsx("p",{className:"text-sm text-error",children:r}):null]}),v.jsxs("p",{className:"mt-10 text-center font-body text-sm text-on-surface-variant",children:["Already have an account?"," ",v.jsx(Xc,{className:"ml-1 font-bold text-primary hover:underline",to:"/login",children:"Sign in"})]})]}),v.jsxs("div",{className:"mt-8 flex items-center justify-center gap-6 opacity-40",children:[v.jsxs("div",{className:"flex items-center gap-2",children:[v.jsx("span",{className:"material-symbols-outlined text-sm",children:"security"}),v.jsx("span",{className:"text-[10px] font-bold uppercase tracking-tighter",children:"Bank-Grade Encryption"})]}),v.jsxs("div",{className:"flex items-center gap-2",children:[v.jsx("span",{className:"material-symbols-outlined text-sm",children:"verified_user"}),v.jsx("span",{className:"text-[10px] font-bold uppercase tracking-tighter",children:"SIPC Protected"})]})]})]})]}),v.jsxs("footer",{className:"mt-auto flex w-full flex-col items-center gap-4 bg-slate-950 py-8 text-center",children:[v.jsx("p",{className:"font-inter text-xs uppercase tracking-wide text-slate-500",children:"© 2024 Architect Financial. Structural Serenity."}),v.jsxs("div",{className:"flex gap-6",children:[v.jsx("a",{className:"font-inter text-xs uppercase tracking-wide text-slate-500 transition-colors hover:text-slate-300",href:"#",children:"Terms"}),v.jsx("a",{className:"font-inter text-xs uppercase tracking-wide text-slate-500 transition-colors hover:text-slate-300",href:"#",children:"Privacy"}),v.jsx("a",{className:"font-inter text-xs uppercase tracking-wide text-slate-500 transition-colors hover:text-slate-300",href:"#",children:"Security"})]})]})]})}const Hm=`<!DOCTYPE html>

<html class="dark" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Add Expense | Financial Architect</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"><\/script>
<link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&amp;family=Inter:wght@400;500;600&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script id="tailwind-config">tailwind.config = {darkMode: "class", theme: {extend: {colors: {"on-surface-variant": "#aaaab5", background: "#0d0e12", "on-tertiary-fixed-variant": "#604a71", "on-primary-fixed-variant": "#384775", outline: "#74757f", "outline-variant": "#464750", "on-primary-fixed": "#1a2a56", "on-error-container": "#ff9993", "surface-dim": "#0d0e12", "surface-bright": "#2a2c34", "on-secondary-fixed": "#393f51", "tertiary-container": "#e6cafa", "on-secondary-fixed-variant": "#565b6f", "primary-fixed": "#b6c5fb", "on-tertiary-fixed": "#422d53", "inverse-on-surface": "#54555a", "tertiary-fixed": "#e6cafa", "on-primary": "#2f3e6b", tertiary: "#f1daff", "secondary-container": "#363b4d", "secondary-fixed-dim": "#cfd3eb", "primary-container": "#42517f", primary: "#b6c5fb", "on-tertiary-container": "#564067", "on-background": "#e4e4f0", "tertiary-fixed-dim": "#d8bceb", "on-primary-container": "#dce2ff", "surface-tint": "#b6c5fb", "secondary-fixed": "#dde1f9", "error-container": "#871f21", secondary: "#c1c5dd", error: "#fa746f", "surface-variant": "#23252e", "on-secondary": "#3a4052", "inverse-surface": "#faf8fe", "primary-fixed-dim": "#a8b7ec", "on-secondary-container": "#babed5", "surface-container-lowest": "#000000", "inverse-primary": "#4e5d8c", "surface-container-highest": "#23252e", surface: "#0d0e12", "on-tertiary": "#5f4971", "on-surface": "#e4e4f0", "surface-container": "#181920", "surface-container-low": "#121318", "surface-container-high": "#1e1f26", "on-error": "#490006", "primary-dim": "#a8b7ec", "error-dim": "#c54d4a", "tertiary-dim": "#d8bceb", "secondary-dim": "#b3b8cf"}, borderRadius: {DEFAULT: "0.125rem", lg: "0.25rem", xl: "0.5rem", full: "0.75rem"}, fontFamily: {headline: ["Manrope"], body: ["Inter"], label: ["Inter"], display: "Manrope"}}}};<\/script>
<style>
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
        body {
            font-family: 'Inter', sans-serif;
        }
        h1, h2, .font-headline {
            font-family: 'Manrope', sans-serif;
        }
        input:focus, select:focus, textarea:focus {
            outline: none;
            box-shadow: 0 0 0 2px rgba(43, 75, 185, 0.2);
        }
    </style>
</head>
<body class="bg-surface text-on-surface min-h-screen">
<!-- Top Navigation Anchor -->
<nav class="bg-[#faf8ff]/80 dark:bg-slate-950/80 backdrop-blur-xl docked top-0 w-full z-40 sticky shadow-[0_20px_40px_rgba(43,75,185,0.06)]">
<div class="flex justify-between items-center w-full px-8 py-3 max-w-[1920px] mx-auto">
<div class="flex items-center gap-8">
<span class="text-2xl font-black text-[#131b2e] dark:text-slate-50 font-manrope">Financial Architect</span>
<div class="hidden md:flex gap-6 items-center">
<a class="text-[#434655] dark:text-slate-400 font-medium font-manrope text-sm tracking-tight hover:bg-[#e2e7ff] transition-colors px-3 py-1.5 rounded-lg" href="#">Dashboard</a>
<a class="text-blue-700 dark:text-blue-300 font-bold border-b-2 border-blue-700 font-manrope text-sm tracking-tight px-3 py-1.5" href="#">Transactions</a>
<a class="text-[#434655] dark:text-slate-400 font-medium font-manrope text-sm tracking-tight hover:bg-[#e2e7ff] transition-colors px-3 py-1.5 rounded-lg" href="#">Budgets</a>
</div>
</div>
<div class="flex items-center gap-4">
<button class="material-symbols-outlined text-on-surface-variant hover:bg-surface-container-high p-2 rounded-full transition-colors">notifications</button>
<button class="material-symbols-outlined text-on-surface-variant hover:bg-surface-container-high p-2 rounded-full transition-colors">settings</button>
<img alt="User Profile Avatar" class="w-10 h-10 rounded-full object-cover ring-2 ring-surface-variant" data-alt="Close-up portrait of a professional man with a friendly expression in a brightly lit modern office environment" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAi3JFt99kpszMwZl5cSryv8S6yJgAM2nJilSEy_fesrv2_GNpDTURkbge88SbN_7bo2prq9sQmv-AZkp0h5bNI956BU0hcQ7JQEOKMVs4T_AwwqsOZ41aFE36_iBNieloTS4n8rb253MFedk8WsF2_h17FHba8X6ROHXgS30_1_g60eLLIZDX__ksQ7ACwLIKLHCjJpsqQ8L3v80xkIIQv5fjJClLWTnO4V8RDWNsMZkyhF0cODYniUpmJlYkrmr-F0YVLNrA6PEs"/>
</div>
</div>
</nav>
<main class="max-w-4xl mx-auto px-6 py-12">
<!-- Breadcrumb / Header Area -->
<header class="mb-12">
<div class="flex items-center gap-2 mb-4">
<button class="flex items-center text-primary font-medium hover:underline text-sm">
<span class="material-symbols-outlined text-sm mr-1">arrow_back</span>
                    Back to Transactions
                </button>
</div>
<h1 class="text-4xl font-extrabold tracking-tight text-on-surface mb-2">Add Expense</h1>
<p class="text-on-surface-variant max-w-lg">Input your transaction details with precision. Your financial architecture updates in real-time.</p>
</header>
<!-- Transaction Form - Bento-ish Layout -->
<form class="grid grid-cols-1 md:grid-cols-12 gap-8">
<!-- Amount Section (Large & Prominent) -->
<div class="md:col-span-8 bg-surface-container-lowest rounded-2xl p-8 shadow-[0_20px_40px_rgba(43,75,185,0.06)] flex flex-col justify-center min-h-[220px]">
<label class="text-on-surface-variant font-medium text-sm mb-4 flex items-center">
<span class="material-symbols-outlined mr-2" style="font-variation-settings: 'FILL' 1;">payments</span>
                    Transaction Amount
                </label>
<div class="flex items-baseline border-b-2 border-surface-variant focus-within:border-primary transition-colors pb-4">
<span class="text-4xl font-bold text-on-surface-variant mr-4">$</span>
<input class="w-full text-6xl md:text-7xl font-extrabold bg-transparent border-none p-0 focus:ring-0 placeholder:text-surface-variant text-on-surface font-headline" placeholder="0.00" required="" step="0.01" type="number"/>
</div>
</div>
<!-- Date Selection -->
<div class="md:col-span-4 bg-surface-container-low rounded-2xl p-8 flex flex-col justify-between">
<div>
<label class="text-on-surface-variant font-medium text-sm mb-4 block">Transaction Date</label>
<input class="w-full bg-surface-container-lowest border-none rounded-xl px-4 py-3 text-on-surface font-medium" type="date" value="2024-05-20"/>
</div>
<div class="mt-6 flex items-center gap-3">
<span class="w-2 h-2 rounded-full bg-tertiary"></span>
<span class="text-xs font-semibold text-tertiary uppercase tracking-wider">Verified Logic</span>
</div>
</div>
<!-- Merchant & Category Grid -->
<div class="md:col-span-12 grid grid-cols-1 md:grid-cols-2 gap-8">
<!-- Merchant Info -->
<div class="bg-surface-container-low rounded-2xl p-8">
<label class="text-on-surface-variant font-medium text-sm mb-4 block">Merchant Name</label>
<div class="relative">
<span class="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant">store</span>
<input class="w-full bg-surface-container-lowest border-none rounded-xl pl-12 pr-4 py-4 text-on-surface placeholder:text-on-surface-variant/50" placeholder="e.g. Blue Bottle Coffee" type="text"/>
</div>
<div class="mt-8">
<label class="text-on-surface-variant font-medium text-sm mb-4 block">Recent Merchants</label>
<div class="flex flex-wrap gap-2">
<button class="px-4 py-2 rounded-full bg-surface-container-highest text-on-primary-fixed-variant text-xs font-semibold hover:bg-primary hover:text-white transition-all" type="button">Amazon</button>
<button class="px-4 py-2 rounded-full bg-surface-container-highest text-on-primary-fixed-variant text-xs font-semibold hover:bg-primary hover:text-white transition-all" type="button">Uber</button>
<button class="px-4 py-2 rounded-full bg-surface-container-highest text-on-primary-fixed-variant text-xs font-semibold hover:bg-primary hover:text-white transition-all" type="button">Apple</button>
</div>
</div>
</div>
<!-- Category Selector -->
<div class="bg-surface-container-low rounded-2xl p-8">
<label class="text-on-surface-variant font-medium text-sm mb-4 block">Select Category</label>
<div class="grid grid-cols-3 gap-3">
<button class="flex flex-col items-center justify-center p-4 bg-surface-container-lowest rounded-xl border-2 border-transparent hover:border-primary group transition-all" type="button">
<span class="material-symbols-outlined text-primary mb-2">restaurant</span>
<span class="text-[10px] font-bold uppercase tracking-tighter text-on-surface-variant group-hover:text-primary">Dining</span>
</button>
<button class="flex flex-col items-center justify-center p-4 bg-surface-container-lowest rounded-xl border-2 border-primary group transition-all ring-4 ring-primary/10" type="button">
<span class="material-symbols-outlined text-primary mb-2" style="font-variation-settings: 'FILL' 1;">shopping_cart</span>
<span class="text-[10px] font-bold uppercase tracking-tighter text-primary">Shopping</span>
</button>
<button class="flex flex-col items-center justify-center p-4 bg-surface-container-lowest rounded-xl border-2 border-transparent hover:border-primary group transition-all" type="button">
<span class="material-symbols-outlined text-primary mb-2">commute</span>
<span class="text-[10px] font-bold uppercase tracking-tighter text-on-surface-variant group-hover:text-primary">Transport</span>
</button>
<button class="flex flex-col items-center justify-center p-4 bg-surface-container-lowest rounded-xl border-2 border-transparent hover:border-primary group transition-all" type="button">
<span class="material-symbols-outlined text-primary mb-2">home</span>
<span class="text-[10px] font-bold uppercase tracking-tighter text-on-surface-variant group-hover:text-primary">Housing</span>
</button>
<button class="flex flex-col items-center justify-center p-4 bg-surface-container-lowest rounded-xl border-2 border-transparent hover:border-primary group transition-all" type="button">
<span class="material-symbols-outlined text-primary mb-2">movie</span>
<span class="text-[10px] font-bold uppercase tracking-tighter text-on-surface-variant group-hover:text-primary">Leisure</span>
</button>
<button class="flex flex-col items-center justify-center p-4 bg-surface-container-lowest rounded-xl border-2 border-transparent hover:border-primary group transition-all" type="button">
<span class="material-symbols-outlined text-primary mb-2">more_horiz</span>
<span class="text-[10px] font-bold uppercase tracking-tighter text-on-surface-variant group-hover:text-primary">Other</span>
</button>
</div>
</div>
</div>
<!-- Notes & Attachments -->
<div class="md:col-span-12 bg-surface-container-low rounded-2xl p-8">
<div class="flex flex-col md:flex-row gap-8">
<div class="flex-1">
<label class="text-on-surface-variant font-medium text-sm mb-4 block">Note (Optional)</label>
<textarea class="w-full bg-surface-container-lowest border-none rounded-xl p-4 text-on-surface resize-none placeholder:text-on-surface-variant/50" placeholder="Add details about this purchase..." rows="3"></textarea>
</div>
<div class="w-full md:w-64">
<label class="text-on-surface-variant font-medium text-sm mb-4 block">Receipt</label>
<div class="h-[104px] border-2 border-dashed border-outline-variant/30 rounded-xl flex flex-col items-center justify-center bg-surface-container-lowest/50 hover:bg-surface-container-highest/30 cursor-pointer transition-all">
<span class="material-symbols-outlined text-on-surface-variant mb-1">add_a_photo</span>
<span class="text-xs font-semibold text-on-surface-variant">Attach Image</span>
</div>
</div>
</div>
</div>
<!-- Action Button -->
<div class="md:col-span-12 flex justify-end mt-4">
<button class="w-full md:w-auto px-12 py-5 bg-gradient-to-br from-primary to-primary-container text-white rounded-xl font-bold text-lg shadow-[0_10px_20px_rgba(43,75,185,0.2)] active:scale-95 transition-transform" type="submit">
                    Save Transaction
                </button>
</div>
</form>
</main>
<!-- Side Navigation Shell (Hidden on mobile) -->
<aside class="hidden xl:flex fixed left-0 top-0 h-full w-64 bg-[#faf8ff] dark:bg-slate-950 flex-col p-6 space-y-2 border-r border-slate-100 dark:border-slate-800 z-50">
<div class="flex items-center gap-3 mb-8 px-2">
<div class="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
<span class="material-symbols-outlined text-white" style="font-variation-settings: 'FILL' 1;">architecture</span>
</div>
<div>
<h3 class="text-xl font-bold text-blue-800 dark:text-blue-300 font-manrope leading-tight">Architect</h3>
<p class="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant/60">Wealth Management</p>
</div>
</div>
<nav class="flex-1 space-y-1">
<a class="text-[#434655] dark:text-slate-400 px-4 py-3 hover:bg-slate-50 dark:hover:bg-slate-900 rounded-lg flex items-center gap-3 group transition-transform duration-200 hover:translate-x-1" href="#">
<span class="material-symbols-outlined">dashboard</span>
<span class="font-medium text-sm font-inter">Dashboard</span>
</a>
<a class="bg-[#dae2fd] dark:bg-blue-900/40 text-[#173bab] dark:text-blue-100 rounded-lg px-4 py-3 font-semibold flex items-center gap-3 group transition-transform duration-200 hover:translate-x-1" href="#">
<span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">receipt_long</span>
<span class="font-semibold text-sm font-inter">Transactions</span>
</a>
<a class="text-[#434655] dark:text-slate-400 px-4 py-3 hover:bg-slate-50 dark:hover:bg-slate-900 rounded-lg flex items-center gap-3 group transition-transform duration-200 hover:translate-x-1" href="#">
<span class="material-symbols-outlined">account_balance_wallet</span>
<span class="font-medium text-sm font-inter">Budgets</span>
</a>
<a class="text-[#434655] dark:text-slate-400 px-4 py-3 hover:bg-slate-50 dark:hover:bg-slate-900 rounded-lg flex items-center gap-3 group transition-transform duration-200 hover:translate-x-1" href="#">
<span class="material-symbols-outlined">bar_chart</span>
<span class="font-medium text-sm font-inter">Analytics</span>
</a>
<a class="text-[#434655] dark:text-slate-400 px-4 py-3 hover:bg-slate-50 dark:hover:bg-slate-900 rounded-lg flex items-center gap-3 group transition-transform duration-200 hover:translate-x-1" href="#">
<span class="material-symbols-outlined">settings</span>
<span class="font-medium text-sm font-inter">Settings</span>
</a>
</nav>
<div class="pt-6 border-t border-slate-100 dark:border-slate-800 space-y-1">
<div class="p-4 bg-surface-container-high rounded-xl mb-4">
<p class="text-[10px] font-bold uppercase text-primary mb-1">Upgrade</p>
<p class="text-xs font-semibold text-on-surface mb-2">Premium Access</p>
<div class="w-full h-1 bg-surface-variant rounded-full overflow-hidden">
<div class="w-2/3 h-full bg-primary"></div>
</div>
</div>
<a class="text-[#434655] dark:text-slate-400 px-4 py-3 hover:bg-slate-50 dark:hover:bg-slate-900 rounded-lg flex items-center gap-3 group transition-transform duration-200 hover:translate-x-1" href="#">
<span class="material-symbols-outlined">help</span>
<span class="font-medium text-sm font-inter">Help Center</span>
</a>
<a class="text-error px-4 py-3 hover:bg-error-container/20 rounded-lg flex items-center gap-3 group transition-transform duration-200 hover:translate-x-1" href="#">
<span class="material-symbols-outlined">logout</span>
<span class="font-medium text-sm font-inter">Sign Out</span>
</a>
</div>
</aside>
<div class="md:hidden fixed bottom-0 left-0 w-full bg-surface-container-lowest/80 backdrop-blur-xl px-6 py-4 flex justify-between items-center z-50 border-t border-surface-variant/20">
<button class="flex flex-col items-center gap-1 text-on-surface-variant">
<span class="material-symbols-outlined">dashboard</span>
<span class="text-[10px] font-bold uppercase">Home</span>
</button>
<button class="flex flex-col items-center gap-1 text-primary">
<span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">receipt_long</span>
<span class="text-[10px] font-bold uppercase">Activity</span>
</button>
<div class="relative -top-8">
<button class="w-14 h-14 bg-primary text-white rounded-full shadow-[0_10px_20px_rgba(43,75,185,0.3)] flex items-center justify-center">
<span class="material-symbols-outlined text-3xl">add</span>
</button>
</div>
<button class="flex flex-col items-center gap-1 text-on-surface-variant">
<span class="material-symbols-outlined">bar_chart</span>
<span class="text-[10px] font-bold uppercase">Stats</span>
</button>
<button class="flex flex-col items-center gap-1 text-on-surface-variant">
<span class="material-symbols-outlined">person</span>
<span class="text-[10px] font-bold uppercase">Profile</span>
</button>
</div>
</body></html>`,Vm=`<!DOCTYPE html>

<html class="dark" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Add Expense | Financial Architect</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"><\/script>
<link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&amp;family=Inter:wght@400;500;600&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    colors: {
                        "on-surface-variant": "#aaaab5",
                        background: "#0d0e12",
                        "on-tertiary-fixed-variant": "#604a71",
                        "on-primary-fixed-variant": "#384775",
                        outline: "#74757f",
                        "outline-variant": "#464750",
                        "on-primary-fixed": "#1a2a56",
                        "on-error-container": "#ff9993",
                        "surface-dim": "#0d0e12",
                        "surface-bright": "#2a2c34",
                        "on-secondary-fixed": "#393f51",
                        "tertiary-container": "#e6cafa",
                        "on-secondary-fixed-variant": "#565b6f",
                        "primary-fixed": "#b6c5fb",
                        "on-tertiary-fixed": "#422d53",
                        "inverse-on-surface": "#54555a",
                        "tertiary-fixed": "#e6cafa",
                        "on-primary": "#2f3e6b",
                        tertiary: "#f1daff",
                        "secondary-container": "#363b4d",
                        "secondary-fixed-dim": "#cfd3eb",
                        "primary-container": "#42517f",
                        primary: "#b6c5fb",
                        "on-tertiary-container": "#564067",
                        "on-background": "#e4e4f0",
                        "tertiary-fixed-dim": "#d8bceb",
                        "on-primary-container": "#dce2ff",
                        "surface-tint": "#b6c5fb",
                        "secondary-fixed": "#dde1f9",
                        "error-container": "#871f21",
                        secondary: "#c1c5dd",
                        error: "#fa746f",
                        "surface-variant": "#23252e",
                        "on-secondary": "#3a4052",
                        "inverse-surface": "#faf8fe",
                        "primary-fixed-dim": "#a8b7ec",
                        "on-secondary-container": "#babed5",
                        "surface-container-lowest": "#000000",
                        "inverse-primary": "#4e5d8c",
                        "surface-container-highest": "#23252e",
                        surface: "#0d0e12",
                        "on-tertiary": "#5f4971",
                        "on-surface": "#e4e4f0",
                        "surface-container": "#181920",
                        "surface-container-low": "#121318",
                        "surface-container-high": "#1e1f26",
                        "on-error": "#490006",
                        "primary-dim": "#a8b7ec",
                        "error-dim": "#c54d4a",
                        "tertiary-dim": "#d8bceb",
                        "secondary-dim": "#b3b8cf"
                    },
                    borderRadius: {
                        DEFAULT: "0.125rem",
                        lg: "0.25rem",
                        xl: "0.5rem",
                        full: "0.75rem"
                    },
                    fontFamily: {
                        headline: ["Manrope"],
                        body: ["Inter"],
                        label: ["Inter"],
                        display: "Manrope"
                    }
                }
            }
        };
    <\/script>
<style>
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
        body {
            font-family: 'Inter', sans-serif;
        }
        h1, h2, .font-headline {
            font-family: 'Manrope', sans-serif;
        }
        input:focus, select:focus, textarea:focus {
            outline: none;
            box-shadow: 0 0 0 2px rgba(43, 75, 185, 0.2);
        }
    </style>
</head>
<body class="bg-surface text-on-surface min-h-screen">
<!-- Side Navigation (Fixed on Large Screens) -->
<aside class="hidden xl:flex fixed left-0 top-0 h-full w-64 bg-[#faf8ff] dark:bg-slate-950 flex-col p-6 space-y-2 border-r border-slate-100 dark:border-slate-800 z-50">
<div class="flex items-center gap-3 mb-8 px-2">
<div class="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
<span class="material-symbols-outlined text-white" style="font-variation-settings: 'FILL' 1;">architecture</span>
</div>
<div>
<h3 class="text-xl font-bold text-blue-800 dark:text-blue-300 font-manrope leading-tight">Architect</h3>
<p class="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant/60">Wealth Management</p>
</div>
</div>
<nav class="flex-1 space-y-1">
<a class="text-[#434655] dark:text-slate-400 px-4 py-3 hover:bg-slate-50 dark:hover:bg-slate-900 rounded-lg flex items-center gap-3 group transition-transform duration-200 hover:translate-x-1" href="#">
<span class="material-symbols-outlined">dashboard</span>
<span class="font-medium text-sm font-inter">Dashboard</span>
</a>
<a class="bg-[#dae2fd] dark:bg-blue-900/40 text-[#173bab] dark:text-blue-100 rounded-lg px-4 py-3 font-semibold flex items-center gap-3 group transition-transform duration-200 hover:translate-x-1" href="#">
<span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">receipt_long</span>
<span class="font-semibold text-sm font-inter">Transactions</span>
</a>
<a class="text-[#434655] dark:text-slate-400 px-4 py-3 hover:bg-slate-50 dark:hover:bg-slate-900 rounded-lg flex items-center gap-3 group transition-transform duration-200 hover:translate-x-1" href="#">
<span class="material-symbols-outlined">account_balance_wallet</span>
<span class="font-medium text-sm font-inter">Budgets</span>
</a>
<a class="text-[#434655] dark:text-slate-400 px-4 py-3 hover:bg-slate-50 dark:hover:bg-slate-900 rounded-lg flex items-center gap-3 group transition-transform duration-200 hover:translate-x-1" href="#">
<span class="material-symbols-outlined">bar_chart</span>
<span class="font-medium text-sm font-inter">Analytics</span>
</a>
<a class="text-[#434655] dark:text-slate-400 px-4 py-3 hover:bg-slate-50 dark:hover:bg-slate-900 rounded-lg flex items-center gap-3 group transition-transform duration-200 hover:translate-x-1" href="#">
<span class="material-symbols-outlined">settings</span>
<span class="font-medium text-sm font-inter">Settings</span>
</a>
</nav>
<div class="pt-6 border-t border-slate-100 dark:border-slate-800 space-y-1">
<div class="p-4 bg-surface-container-high rounded-xl mb-4">
<p class="text-[10px] font-bold uppercase text-primary mb-1">Upgrade</p>
<p class="text-xs font-semibold text-on-surface mb-2">Premium Access</p>
<div class="w-full h-1 bg-surface-variant rounded-full overflow-hidden">
<div class="w-2/3 h-full bg-primary"></div>
</div>
</div>
<a class="text-[#434655] dark:text-slate-400 px-4 py-3 hover:bg-slate-50 dark:hover:bg-slate-900 rounded-lg flex items-center gap-3 group transition-transform duration-200 hover:translate-x-1" href="#">
<span class="material-symbols-outlined">help</span>
<span class="font-medium text-sm font-inter">Help Center</span>
</a>
<a class="text-error px-4 py-3 hover:bg-error-container/20 rounded-lg flex items-center gap-3 group transition-transform duration-200 hover:translate-x-1" href="#">
<span class="material-symbols-outlined">logout</span>
<span class="font-medium text-sm font-inter">Sign Out</span>
</a>
</div>
</aside>
<!-- Main Wrapper (Adds margin for sidebar on XL screens) -->
<div class="xl:ml-64 min-h-screen flex flex-col">
<!-- Top Navigation -->
<nav class="bg-[#faf8ff]/80 dark:bg-slate-950/80 backdrop-blur-xl top-0 w-full z-40 sticky shadow-[0_20px_40px_rgba(43,75,185,0.06)]">
<div class="flex justify-between items-center w-full px-8 py-3 max-w-[1920px] mx-auto">
<div class="flex items-center gap-8">
<span class="text-2xl font-black text-[#131b2e] dark:text-slate-50 font-manrope xl:hidden">Financial Architect</span>
<div class="hidden md:flex gap-6 items-center">
<a class="text-[#434655] dark:text-slate-400 font-medium font-manrope text-sm tracking-tight hover:bg-[#e2e7ff] transition-colors px-3 py-1.5 rounded-lg" href="#">Dashboard</a>
<a class="text-blue-700 dark:text-blue-300 font-bold border-b-2 border-blue-700 font-manrope text-sm tracking-tight px-3 py-1.5" href="#">Transactions</a>
<a class="text-[#434655] dark:text-slate-400 font-medium font-manrope text-sm tracking-tight hover:bg-[#e2e7ff] transition-colors px-3 py-1.5 rounded-lg" href="#">Budgets</a>
</div>
</div>
<div class="flex items-center gap-4">
<button class="material-symbols-outlined text-on-surface-variant hover:bg-surface-container-high p-2 rounded-full transition-colors">notifications</button>
<button class="material-symbols-outlined text-on-surface-variant hover:bg-surface-container-high p-2 rounded-full transition-colors">settings</button>
<img alt="User Profile Avatar" class="w-10 h-10 rounded-full object-cover ring-2 ring-surface-variant" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAi3JFt99kpszMwZl5cSryv8S6yJgAM2nJilSEy_fesrv2_GNpDTURkbge88SbN_7bo2prq9sQmv-AZkp0h5bNI956BU0hcQ7JQEOKMVs4T_AwwqsOZ41aFE36_iBNieloTS4n8rb253MFedk8WsF2_h17FHba8X6ROHXgS30_1_g60eLLIZDX__ksQ7ACwLIKLHCjJpsqQ8L3v80xkIIQv5fjJClLWTnO4V8RDWNsMZkyhF0cODYniUpmJlYkrmr-F0YVLNrA6PEs"/>
</div>
</div>
</nav>
<main class="flex-1 max-w-5xl mx-auto w-full px-6 py-12">
<!-- Breadcrumb / Header Area -->
<header class="mb-12">
<div class="flex items-center gap-2 mb-4">
<button class="flex items-center text-primary font-medium hover:underline text-sm">
<span class="material-symbols-outlined text-sm mr-1">arrow_back</span>
                    Back to Transactions
                </button>
</div>
<h1 class="text-4xl font-extrabold tracking-tight text-on-surface mb-2">Add Expense</h1>
<p class="text-on-surface-variant max-w-lg">Input your transaction details with precision. Your financial architecture updates in real-time.</p>
</header>
<!-- Transaction Form - Bento-ish Layout -->
<form class="grid grid-cols-1 md:grid-cols-12 gap-8 mb-20 md:mb-12">
<!-- Amount Section -->
<div class="md:col-span-8 bg-surface-container-lowest rounded-2xl p-8 shadow-[0_20px_40px_rgba(43,75,185,0.06)] flex flex-col justify-center min-h-[220px]">
<label class="text-on-surface-variant font-medium text-sm mb-4 flex items-center">
<span class="material-symbols-outlined mr-2" style="font-variation-settings: 'FILL' 1;">payments</span>
                    Transaction Amount
                </label>
<div class="flex items-baseline border-b-2 border-surface-variant focus-within:border-primary transition-colors pb-4">
<span class="text-4xl font-bold text-on-surface-variant mr-4">$</span>
<input class="w-full text-6xl md:text-7xl font-extrabold bg-transparent border-none p-0 focus:ring-0 placeholder:text-surface-variant text-on-surface font-headline" placeholder="0.00" required="" step="0.01" type="number"/>
</div>
</div>
<!-- Date Selection -->
<div class="md:col-span-4 bg-surface-container-low rounded-2xl p-8 flex flex-col justify-between">
<div>
<label class="text-on-surface-variant font-medium text-sm mb-4 block">Transaction Date</label>
<input class="w-full bg-surface-container-lowest border-none rounded-xl px-4 py-3 text-on-surface font-medium" type="date" value="2024-05-20"/>
</div>
<div class="mt-6 flex items-center gap-3">
<span class="w-2 h-2 rounded-full bg-tertiary"></span>
<span class="text-xs font-semibold text-tertiary uppercase tracking-wider">Verified Logic</span>
</div>
</div>
<!-- Merchant & Category Grid -->
<div class="md:col-span-12 grid grid-cols-1 md:grid-cols-2 gap-8">
<!-- Merchant Info -->
<div class="bg-surface-container-low rounded-2xl p-8">
<label class="text-on-surface-variant font-medium text-sm mb-4 block">Merchant Name</label>
<div class="relative">
<span class="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant">store</span>
<input class="w-full bg-surface-container-lowest border-none rounded-xl pl-12 pr-4 py-4 text-on-surface placeholder:text-on-surface-variant/50" placeholder="e.g. Blue Bottle Coffee" type="text"/>
</div>
<div class="mt-8">
<label class="text-on-surface-variant font-medium text-sm mb-4 block">Recent Merchants</label>
<div class="flex flex-wrap gap-2">
<button class="px-4 py-2 rounded-full bg-surface-container-highest text-on-primary-fixed-variant text-xs font-semibold hover:bg-primary hover:text-white transition-all" type="button">Amazon</button>
<button class="px-4 py-2 rounded-full bg-surface-container-highest text-on-primary-fixed-variant text-xs font-semibold hover:bg-primary hover:text-white transition-all" type="button">Uber</button>
<button class="px-4 py-2 rounded-full bg-surface-container-highest text-on-primary-fixed-variant text-xs font-semibold hover:bg-primary hover:text-white transition-all" type="button">Apple</button>
</div>
</div>
</div>
<!-- Category Selector -->
<div class="bg-surface-container-low rounded-2xl p-8">
<label class="text-on-surface-variant font-medium text-sm mb-4 block">Select Category</label>
<div class="grid grid-cols-3 gap-3">
<button class="flex flex-col items-center justify-center p-4 bg-surface-container-lowest rounded-xl border-2 border-transparent hover:border-primary group transition-all" type="button">
<span class="material-symbols-outlined text-primary mb-2">restaurant</span>
<span class="text-[10px] font-bold uppercase tracking-tighter text-on-surface-variant group-hover:text-primary">Dining</span>
</button>
<button class="flex flex-col items-center justify-center p-4 bg-surface-container-lowest rounded-xl border-2 border-primary group transition-all ring-4 ring-primary/10" type="button">
<span class="material-symbols-outlined text-primary mb-2" style="font-variation-settings: 'FILL' 1;">shopping_cart</span>
<span class="text-[10px] font-bold uppercase tracking-tighter text-primary">Shopping</span>
</button>
<button class="flex flex-col items-center justify-center p-4 bg-surface-container-lowest rounded-xl border-2 border-transparent hover:border-primary group transition-all" type="button">
<span class="material-symbols-outlined text-primary mb-2">commute</span>
<span class="text-[10px] font-bold uppercase tracking-tighter text-on-surface-variant group-hover:text-primary">Transport</span>
</button>
<button class="flex flex-col items-center justify-center p-4 bg-surface-container-lowest rounded-xl border-2 border-transparent hover:border-primary group transition-all" type="button">
<span class="material-symbols-outlined text-primary mb-2">home</span>
<span class="text-[10px] font-bold uppercase tracking-tighter text-on-surface-variant group-hover:text-primary">Housing</span>
</button>
<button class="flex flex-col items-center justify-center p-4 bg-surface-container-lowest rounded-xl border-2 border-transparent hover:border-primary group transition-all" type="button">
<span class="material-symbols-outlined text-primary mb-2">movie</span>
<span class="text-[10px] font-bold uppercase tracking-tighter text-on-surface-variant group-hover:text-primary">Leisure</span>
</button>
<button class="flex flex-col items-center justify-center p-4 bg-surface-container-lowest rounded-xl border-2 border-transparent hover:border-primary group transition-all" type="button">
<span class="material-symbols-outlined text-primary mb-2">more_horiz</span>
<span class="text-[10px] font-bold uppercase tracking-tighter text-on-surface-variant group-hover:text-primary">Other</span>
</button>
</div>
</div>
</div>
<!-- Notes & Attachments -->
<div class="md:col-span-12 bg-surface-container-low rounded-2xl p-8">
<div class="flex flex-col md:flex-row gap-8">
<div class="flex-1">
<label class="text-on-surface-variant font-medium text-sm mb-4 block">Note (Optional)</label>
<textarea class="w-full bg-surface-container-lowest border-none rounded-xl p-4 text-on-surface resize-none placeholder:text-on-surface-variant/50" placeholder="Add details about this purchase..." rows="3"></textarea>
</div>
<div class="w-full md:w-64">
<label class="text-on-surface-variant font-medium text-sm mb-4 block">Receipt</label>
<div class="h-[104px] border-2 border-dashed border-outline-variant/30 rounded-xl flex flex-col items-center justify-center bg-surface-container-lowest/50 hover:bg-surface-container-highest/30 cursor-pointer transition-all">
<span class="material-symbols-outlined text-on-surface-variant mb-1">add_a_photo</span>
<span class="text-xs font-semibold text-on-surface-variant">Attach Image</span>
</div>
</div>
</div>
</div>
<!-- Action Button -->
<div class="md:col-span-12 flex justify-end mt-4">
<button class="w-full md:w-auto px-12 py-5 bg-gradient-to-br from-primary to-primary-container text-white rounded-xl font-bold text-lg shadow-[0_10px_20px_rgba(43,75,185,0.2)] active:scale-95 transition-transform" type="submit">
                    Save Transaction
                </button>
</div>
</form>
</main>
</div>
<!-- Mobile Bottom Navigation -->
<div class="md:hidden fixed bottom-0 left-0 w-full bg-surface-container-lowest/80 backdrop-blur-xl px-6 py-4 flex justify-between items-center z-50 border-t border-surface-variant/20">
<button class="flex flex-col items-center gap-1 text-on-surface-variant">
<span class="material-symbols-outlined">dashboard</span>
<span class="text-[10px] font-bold uppercase">Home</span>
</button>
<button class="flex flex-col items-center gap-1 text-primary">
<span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">receipt_long</span>
<span class="text-[10px] font-bold uppercase">Activity</span>
</button>
<div class="relative -top-8">
<button class="w-14 h-14 bg-primary text-white rounded-full shadow-[0_10px_20px_rgba(43,75,185,0.3)] flex items-center justify-center">
<span class="material-symbols-outlined text-3xl">add</span>
</button>
</div>
<button class="flex flex-col items-center gap-1 text-on-surface-variant">
<span class="material-symbols-outlined">bar_chart</span>
<span class="text-[10px] font-bold uppercase">Stats</span>
</button>
<button class="flex flex-col items-center gap-1 text-on-surface-variant">
<span class="material-symbols-outlined">person</span>
<span class="text-[10px] font-bold uppercase">Profile</span>
</button>
</div>
</body></html>`,$m=`<!DOCTYPE html>

<html class="dark" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Budgets &amp; Categories | Financial Architect</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"><\/script>
<link href="https://fonts.googleapis.com/css2?family=Manrope:wght@200;400;500;600;700;800&amp;family=Inter:wght@300;400;500;600&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script id="tailwind-config">tailwind.config = {darkMode: "class", theme: {extend: {colors: {"on-surface-variant": "#aaaab5", background: "#0d0e12", "on-tertiary-fixed-variant": "#604a71", "on-primary-fixed-variant": "#384775", outline: "#74757f", "outline-variant": "#464750", "on-primary-fixed": "#1a2a56", "on-error-container": "#ff9993", "surface-dim": "#0d0e12", "surface-bright": "#2a2c34", "on-secondary-fixed": "#393f51", "tertiary-container": "#e6cafa", "on-secondary-fixed-variant": "#565b6f", "primary-fixed": "#b6c5fb", "on-tertiary-fixed": "#422d53", "inverse-on-surface": "#54555a", "tertiary-fixed": "#e6cafa", "on-primary": "#2f3e6b", tertiary: "#f1daff", "secondary-container": "#363b4d", "secondary-fixed-dim": "#cfd3eb", "primary-container": "#42517f", primary: "#b6c5fb", "on-tertiary-container": "#564067", "on-background": "#e4e4f0", "tertiary-fixed-dim": "#d8bceb", "on-primary-container": "#dce2ff", "surface-tint": "#b6c5fb", "secondary-fixed": "#dde1f9", "error-container": "#871f21", secondary: "#c1c5dd", error: "#fa746f", "surface-variant": "#23252e", "on-secondary": "#3a4052", "inverse-surface": "#faf8fe", "primary-fixed-dim": "#a8b7ec", "on-secondary-container": "#babed5", "surface-container-lowest": "#000000", "inverse-primary": "#4e5d8c", "surface-container-highest": "#23252e", surface: "#0d0e12", "on-tertiary": "#5f4971", "on-surface": "#e4e4f0", "surface-container": "#181920", "surface-container-low": "#121318", "surface-container-high": "#1e1f26", "on-error": "#490006", "primary-dim": "#a8b7ec", "error-dim": "#c54d4a", "tertiary-dim": "#d8bceb", "secondary-dim": "#b3b8cf"}, borderRadius: {DEFAULT: "0.125rem", lg: "0.25rem", xl: "0.5rem", full: "0.75rem"}, fontFamily: {headline: ["Manrope"], body: ["Inter"], label: ["Inter"], display: "Manrope"}}}};<\/script>
<style>
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
        body {
            font-family: 'Inter', sans-serif;
            background-color: #faf8ff;
            color: #131b2e;
        }
        .font-manrope { font-family: 'Manrope', sans-serif; }
        .glass-nav {
            backdrop-filter: blur(40px);
            -webkit-backdrop-filter: blur(40px);
        }
    </style>
</head>
<body class="bg-surface text-on-surface antialiased">
<!-- SideNavBar (Authority: JSON) -->
<aside class="fixed left-0 top-0 h-full w-64 flex flex-col p-6 space-y-2 bg-[#faf8ff] dark:bg-slate-950 border-r border-slate-100 dark:border-slate-800 z-50 md:flex hidden">
<div class="mb-10 px-4">
<h1 class="text-xl font-bold text-blue-800 dark:text-blue-300 font-manrope">Architect</h1>
<p class="text-xs text-on-surface-variant font-medium">Wealth Management</p>
</div>
<nav class="flex-1 space-y-1">
<a class="text-[#434655] dark:text-slate-400 px-4 py-3 hover:bg-slate-50 dark:hover:bg-slate-900 rounded-lg flex items-center gap-3 transition-transform duration-200 hover:translate-x-1" href="#">
<span class="material-symbols-outlined">dashboard</span>
<span class="font-inter text-sm font-medium">Dashboard</span>
</a>
<a class="text-[#434655] dark:text-slate-400 px-4 py-3 hover:bg-slate-50 dark:hover:bg-slate-900 rounded-lg flex items-center gap-3 transition-transform duration-200 hover:translate-x-1" href="#">
<span class="material-symbols-outlined">receipt_long</span>
<span class="font-inter text-sm font-medium">Transactions</span>
</a>
<a class="bg-[#dae2fd] dark:bg-blue-900/40 text-[#173bab] dark:text-blue-100 rounded-lg px-4 py-3 font-semibold flex items-center gap-3 transition-transform duration-200 hover:translate-x-1" href="#">
<span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">account_balance_wallet</span>
<span class="font-inter text-sm font-medium">Budgets</span>
</a>
<a class="text-[#434655] dark:text-slate-400 px-4 py-3 hover:bg-slate-50 dark:hover:bg-slate-900 rounded-lg flex items-center gap-3 transition-transform duration-200 hover:translate-x-1" href="#">
<span class="material-symbols-outlined">bar_chart</span>
<span class="font-inter text-sm font-medium">Analytics</span>
</a>
<a class="text-[#434655] dark:text-slate-400 px-4 py-3 hover:bg-slate-50 dark:hover:bg-slate-900 rounded-lg flex items-center gap-3 transition-transform duration-200 hover:translate-x-1" href="#">
<span class="material-symbols-outlined">settings</span>
<span class="font-inter text-sm font-medium">Settings</span>
</a>
</nav>
<div class="pt-6 border-t border-slate-100 dark:border-slate-800 space-y-1">
<div class="bg-primary-container/10 p-4 rounded-xl mb-4">
<p class="text-xs font-bold text-primary mb-1">Premium Access</p>
<p class="text-[10px] text-on-surface-variant">Unlock architectural insights.</p>
</div>
<a class="text-[#434655] px-4 py-2 flex items-center gap-3 text-sm font-medium hover:bg-slate-50 rounded-lg" href="#">
<span class="material-symbols-outlined text-lg">help</span>
                Help Center
            </a>
<a class="text-[#434655] px-4 py-2 flex items-center gap-3 text-sm font-medium hover:bg-slate-50 rounded-lg" href="#">
<span class="material-symbols-outlined text-lg">logout</span>
                Sign Out
            </a>
</div>
</aside>
<!-- Main Content Canvas -->
<main class="md:ml-64 min-h-screen relative">
<!-- TopNavBar (Authority: JSON) -->
<header class="docked top-0 w-full z-40 sticky bg-[#faf8ff]/80 dark:bg-slate-950/80 backdrop-blur-xl shadow-[0_20px_40px_rgba(43,75,185,0.06)]">
<div class="flex justify-between items-center w-full px-8 py-3 max-w-[1920px] mx-auto">
<div class="flex items-center gap-6">
<span class="text-2xl font-black text-[#131b2e] dark:text-slate-50 font-manrope">Financial Architect</span>
<div class="hidden lg:flex items-center bg-[#f2f3ff] dark:bg-slate-900 rounded-full px-4 py-1.5 gap-2">
<span class="material-symbols-outlined text-outline text-sm">search</span>
<input class="bg-transparent border-none focus:ring-0 text-xs w-48 font-medium" placeholder="Search insights..." type="text"/>
</div>
</div>
<div class="flex items-center gap-4">
<button class="flex items-center gap-2 bg-gradient-to-br from-primary to-primary-container text-white px-5 py-2 rounded-xl text-sm font-semibold shadow-sm active:scale-95 duration-200 ease-in-out">
<span class="material-symbols-outlined text-sm">add</span>
                        Add Expense
                    </button>
<div class="flex items-center gap-2">
<span class="material-symbols-outlined p-2 text-on-surface-variant hover:bg-[#e2e7ff] rounded-full cursor-pointer transition-colors">notifications</span>
<span class="material-symbols-outlined p-2 text-on-surface-variant hover:bg-[#e2e7ff] rounded-full cursor-pointer transition-colors">settings</span>
</div>
<div class="h-10 w-10 rounded-full bg-surface-container-high overflow-hidden border-2 border-white shadow-sm">
<img alt="User Profile Avatar" class="h-full w-full object-cover" data-alt="professional portrait of a confident man with a slight smile in high-end office lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDBEQSbistsRlzv-dmXeJi6idrLu4nFNvQVZ1YMvQdDZjvAAbdLP-8XArWh7tS6KCxAYtpQEqgTiZjrGjljWwxNJu_mRlj3RRki6q8Q_MQsJ05YBycEtXcdaMBKHzDGn05xEaPxcxYRd2VxQ37H6ug3KHtUhd6DWyUWSK1BPzvrbTODy5VwgZKNn5vctkL8sTlYjlKjkd0VS8tSO_iYJfFcedA6a-sI03s6BuIYdH_Q-jrD12jEidkKTIYqb9V_YzZWyeKiL1sxLRY"/>
</div>
</div>
</div>
</header>
<div class="p-8 max-w-[1400px] mx-auto">
<!-- Hero Display (Asymmetric / Editorial) -->
<section class="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
<div class="max-w-2xl">
<p class="text-primary font-bold tracking-widest text-xs uppercase mb-4">Monthly Overview</p>
<h2 class="font-manrope text-5xl font-extrabold text-on-surface mb-4 leading-tight">Architecture of <br/><span class="text-primary">Your Wealth.</span></h2>
<p class="text-on-surface-variant text-lg leading-relaxed max-w-md">Precision budgeting isn't about restriction; it's about structural integrity. Your current allocation is at 64% of the monthly ceiling.</p>
</div>
<div class="bg-surface-container-low p-8 rounded-[2rem] flex flex-col items-center justify-center min-w-[280px] text-center border-b-4 border-primary">
<span class="text-on-surface-variant label-md mb-2">Total Monthly Budget</span>
<span class="font-manrope text-4xl font-black text-on-surface">$12,450.00</span>
<button class="mt-6 flex items-center gap-2 text-primary font-bold text-sm hover:underline">
<span class="material-symbols-outlined text-sm">edit</span>
                        Edit Budget
                    </button>
</div>
</section>
<!-- Bento Grid - Category Cards -->
<div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
<!-- Large Card (Housing) -->
<div class="md:col-span-2 md:row-span-2 bg-surface-container-lowest rounded-[2rem] p-8 flex flex-col justify-between group transition-all duration-300 hover:shadow-[0_20px_60px_rgba(43,75,185,0.08)] border border-outline-variant/10">
<div>
<div class="flex justify-between items-start mb-10">
<div class="h-14 w-14 rounded-2xl bg-primary-container/10 flex items-center justify-center text-primary">
<span class="material-symbols-outlined text-3xl" style="font-variation-settings: 'FILL' 1;">home</span>
</div>
<span class="bg-tertiary-container/10 text-tertiary px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">On Track</span>
</div>
<h3 class="font-manrope text-3xl font-bold mb-2">Housing &amp; Utilities</h3>
<p class="text-on-surface-variant text-sm mb-8">Mortgage, Insurance, Water, &amp; Electricity</p>
</div>
<div>
<div class="flex justify-between items-end mb-3">
<div>
<span class="text-xs text-on-surface-variant font-medium">Spent</span>
<p class="text-2xl font-black font-manrope">$3,200.00</p>
</div>
<div class="text-right">
<span class="text-xs text-on-surface-variant font-medium">Limit</span>
<p class="text-lg font-bold text-outline-variant">$4,500.00</p>
</div>
</div>
<div class="w-full h-3 bg-surface-container-low rounded-full overflow-hidden">
<div class="h-full bg-gradient-to-r from-primary to-primary-container rounded-full" style="width: 71%"></div>
</div>
</div>
</div>
<!-- Medium Card (Food) -->
<div class="bg-surface-container-lowest rounded-[2rem] p-6 border border-outline-variant/10 hover:shadow-lg transition-shadow">
<div class="flex items-center gap-4 mb-6">
<div class="h-10 w-10 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center">
<span class="material-symbols-outlined text-xl" style="font-variation-settings: 'FILL' 1;">restaurant</span>
</div>
<span class="font-bold text-on-surface">Food &amp; Dining</span>
</div>
<p class="text-2xl font-manrope font-extrabold mb-4">$842.50 <span class="text-xs text-on-surface-variant font-normal">/ $1,200</span></p>
<div class="w-full h-2 bg-surface-container-low rounded-full overflow-hidden mb-2">
<div class="h-full bg-orange-500 rounded-full" style="width: 70%"></div>
</div>
<span class="text-[10px] text-on-surface-variant font-semibold">70% CONSUMED</span>
</div>
<!-- Medium Card (Entertainment) -->
<div class="bg-surface-container-lowest rounded-[2rem] p-6 border border-outline-variant/10 hover:shadow-lg transition-shadow">
<div class="flex items-center gap-4 mb-6">
<div class="h-10 w-10 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center">
<span class="material-symbols-outlined text-xl" style="font-variation-settings: 'FILL' 1;">movie</span>
</div>
<span class="font-bold text-on-surface">Entertainment</span>
</div>
<p class="text-2xl font-manrope font-extrabold mb-4">$590.00 <span class="text-xs text-on-surface-variant font-normal">/ $600</span></p>
<div class="w-full h-2 bg-surface-container-low rounded-full overflow-hidden mb-2">
<div class="h-full bg-error rounded-full" style="width: 98%"></div>
</div>
<span class="text-[10px] text-error font-bold">98% - NEAR LIMIT</span>
</div>
<!-- Medium Card (Transport) -->
<div class="bg-surface-container-lowest rounded-[2rem] p-6 border border-outline-variant/10 hover:shadow-lg transition-shadow">
<div class="flex items-center gap-4 mb-6">
<div class="h-10 w-10 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center">
<span class="material-symbols-outlined text-xl" style="font-variation-settings: 'FILL' 1;">directions_car</span>
</div>
<span class="font-bold text-on-surface">Transport</span>
</div>
<p class="text-2xl font-manrope font-extrabold mb-4">$410.00 <span class="text-xs text-on-surface-variant font-normal">/ $850</span></p>
<div class="w-full h-2 bg-surface-container-low rounded-full overflow-hidden mb-2">
<div class="h-full bg-blue-600 rounded-full" style="width: 48%"></div>
</div>
<span class="text-[10px] text-tertiary font-bold">48% - HEALTHY</span>
</div>
<!-- Medium Card (Health) -->
<div class="bg-surface-container-lowest rounded-[2rem] p-6 border border-outline-variant/10 hover:shadow-lg transition-shadow">
<div class="flex items-center gap-4 mb-6">
<div class="h-10 w-10 rounded-xl bg-green-100 text-green-600 flex items-center justify-center">
<span class="material-symbols-outlined text-xl" style="font-variation-settings: 'FILL' 1;">monitor_heart</span>
</div>
<span class="font-bold text-on-surface">Health</span>
</div>
<p class="text-2xl font-manrope font-extrabold mb-4">$220.00 <span class="text-xs text-on-surface-variant font-normal">/ $500</span></p>
<div class="w-full h-2 bg-surface-container-low rounded-full overflow-hidden mb-2">
<div class="h-full bg-tertiary rounded-full" style="width: 44%"></div>
</div>
<span class="text-[10px] text-on-surface-variant font-semibold">44% CONSUMED</span>
</div>
<!-- Custom CTA Card (Glassmorphism inspired) -->
<div class="md:col-span-2 relative overflow-hidden bg-[#131b2e] rounded-[2rem] p-8 text-white flex items-center justify-between">
<div class="relative z-10">
<h3 class="text-2xl font-manrope font-bold mb-2">Unallocated Resources</h3>
<p class="text-slate-400 text-sm max-w-xs mb-6">You have $2,450.00 remaining this month. Would you like to optimize your savings architecture?</p>
<button class="bg-white text-on-surface px-6 py-2.5 rounded-xl text-sm font-bold shadow-xl active:scale-95 transition-transform">Optimize Now</button>
</div>
<div class="absolute right-0 top-0 bottom-0 w-1/2 opacity-40">
<img alt="Abstract Financial Growth" class="h-full w-full object-cover" data-alt="abstract flowing blue and teal gradients representing financial movement and growth with a clean futuristic aesthetic" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC_JnG9fltmA6tCfcWXMrQPj2zi8rKiKUW13n1Y6aA5zDc1JprM4zogG2k38MQwfmMYxZbFFMBmZV2w88S-0_EqQB9l9dyxqTgln4O__-Nr0GYctxVJY2sgs_SkmTIL2IwZ4iot7H6Q-nJ_aCs3JDj1yCrjmjtU4qgiSgH30UD9CDBQZ8PLzZD_fNqfJkEFXIeTMCeDXD2wEzsVqzm3jncbusUMl_NK9XXeBWu5LQ9b78rl0xpoTI_QXuHY8H9kxyXm-5kQcYJpBh0"/>
</div>
<div class="absolute inset-0 bg-gradient-to-r from-[#131b2e] via-[#131b2e]/90 to-transparent"></div>
</div>
</div>
<!-- Transaction Highlights (Tonal Layering no lines) -->
<section class="mt-16">
<div class="flex justify-between items-center mb-8">
<h4 class="font-manrope text-2xl font-bold">Category Adjustments</h4>
<span class="text-primary text-sm font-semibold cursor-pointer">View All Activity</span>
</div>
<div class="space-y-4">
<div class="bg-surface-container-low p-5 rounded-2xl flex items-center justify-between hover:bg-surface-container-high transition-colors cursor-pointer">
<div class="flex items-center gap-4">
<div class="h-12 w-12 rounded-full bg-surface-container-lowest flex items-center justify-center">
<span class="material-symbols-outlined text-primary">trending_up</span>
</div>
<div>
<p class="font-bold text-on-surface">Budget Increase: Food</p>
<p class="text-xs text-on-surface-variant">Allocated +$200 from Miscellaneous</p>
</div>
</div>
<div class="text-right">
<p class="font-bold text-on-surface">Today</p>
<p class="text-xs text-tertiary">Balance Secured</p>
</div>
</div>
<div class="bg-surface-container-low p-5 rounded-2xl flex items-center justify-between hover:bg-surface-container-high transition-colors cursor-pointer">
<div class="flex items-center gap-4">
<div class="h-12 w-12 rounded-full bg-surface-container-lowest flex items-center justify-center">
<span class="material-symbols-outlined text-on-tertiary-fixed-variant">savings</span>
</div>
<div>
<p class="font-bold text-on-surface">Automated Surplus Transfer</p>
<p class="text-xs text-on-surface-variant">Moved $450 to High-Yield Architect Fund</p>
</div>
</div>
<div class="text-right">
<p class="font-bold text-on-surface">Yesterday</p>
<p class="text-xs text-primary">Success</p>
</div>
</div>
</div>
</section>
</div>
<!-- Footer / Responsive Spacer -->
<div class="h-24 md:hidden"></div>
</main>
<!-- BottomNavBar (Mobile Only - Authority: JSON) -->
<nav class="md:hidden fixed bottom-0 w-full bg-[#faf8ff]/90 backdrop-blur-xl border-t-0 flex justify-around items-center py-4 px-6 z-50 shadow-[0_-10px_30px_rgba(43,75,185,0.06)]">
<div class="flex flex-col items-center gap-1 text-[#434655]">
<span class="material-symbols-outlined">dashboard</span>
<span class="text-[10px] font-medium">Dashboard</span>
</div>
<div class="flex flex-col items-center gap-1 text-[#434655]">
<span class="material-symbols-outlined">receipt_long</span>
<span class="text-[10px] font-medium">Transactions</span>
</div>
<div class="flex flex-col items-center gap-1 text-blue-700">
<span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">account_balance_wallet</span>
<span class="text-[10px] font-bold">Budgets</span>
</div>
<div class="flex flex-col items-center gap-1 text-[#434655]">
<span class="material-symbols-outlined">bar_chart</span>
<span class="text-[10px] font-medium">Analytics</span>
</div>
<div class="flex flex-col items-center gap-1 text-[#434655]">
<span class="material-symbols-outlined">settings</span>
<span class="text-[10px] font-medium">Settings</span>
</div>
</nav>
<!-- FAB (Contextual - Only on Primary screens) -->
<button class="fixed bottom-8 right-8 h-16 w-16 bg-gradient-to-br from-primary to-primary-container text-white rounded-full shadow-[0_20px_40px_rgba(43,75,185,0.3)] flex items-center justify-center active:scale-90 transition-transform z-40 md:flex hidden">
<span class="material-symbols-outlined text-3xl">add</span>
</button>
</body></html>`,Qm=`<!DOCTYPE html>

<html class="light dark" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<link href="https://fonts.googleapis.com/css2?family=Manrope:wght@200;400;600;700;800&amp;family=Inter:wght@300;400;500;600&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"><\/script>
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    colors: {
                        "on-surface-variant": "#aaaab5",
                        background: "#0d0e12",
                        "on-tertiary-fixed-variant": "#604a71",
                        "on-primary-fixed-variant": "#384775",
                        outline: "#74757f",
                        "outline-variant": "#464750",
                        "on-primary-fixed": "#1a2a56",
                        "on-error-container": "#ff9993",
                        "surface-dim": "#0d0e12",
                        "surface-bright": "#2a2c34",
                        "on-secondary-fixed": "#393f51",
                        "tertiary-container": "#e6cafa",
                        "on-secondary-fixed-variant": "#565b6f",
                        "primary-fixed": "#b6c5fb",
                        "on-tertiary-fixed": "#422d53",
                        "inverse-on-surface": "#54555a",
                        "tertiary-fixed": "#e6cafa",
                        "on-primary": "#2f3e6b",
                        tertiary: "#f1daff",
                        "secondary-container": "#363b4d",
                        "secondary-fixed-dim": "#cfd3eb",
                        "primary-container": "#42517f",
                        primary: "#b6c5fb",
                        "on-tertiary-container": "#564067",
                        "on-background": "#e4e4f0",
                        "tertiary-fixed-dim": "#d8bceb",
                        "on-primary-container": "#dce2ff",
                        "surface-tint": "#b6c5fb",
                        "secondary-fixed": "#dde1f9",
                        "error-container": "#871f21",
                        secondary: "#c1c5dd",
                        error: "#fa746f",
                        "surface-variant": "#23252e",
                        "on-secondary": "#3a4052",
                        "inverse-surface": "#faf8fe",
                        "primary-fixed-dim": "#a8b7ec",
                        "on-secondary-container": "#babed5",
                        "surface-container-lowest": "#000000",
                        "inverse-primary": "#4e5d8c",
                        "surface-container-highest": "#23252e",
                        surface: "#0d0e12",
                        "on-tertiary": "#5f4971",
                        "on-surface": "#e4e4f0",
                        "surface-container": "#181920",
                        "surface-container-low": "#121318",
                        "surface-container-high": "#1e1f26",
                        "on-error": "#490006",
                        "primary-dim": "#a8b7ec",
                        "error-dim": "#c54d4a",
                        "tertiary-dim": "#d8bceb",
                        "secondary-dim": "#b3b8cf"
                    },
                    borderRadius: {
                        DEFAULT: "0.125rem",
                        lg: "0.25rem",
                        xl: "0.5rem",
                        full: "0.75rem"
                    },
                    fontFamily: {
                        headline: ["Manrope"],
                        body: ["Inter"],
                        label: ["Inter"],
                        display: "Manrope"
                    }
                }
            }
        };
    <\/script>
<style>
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
        body { font-family: 'Inter', sans-serif; }
        h1, h2, h3 { font-family: 'Manrope', sans-serif; }
        .pie-segment {
            transition: stroke-width 0.3s ease;
        }
        .pie-segment:hover {
            stroke-width: 24;
        }
    </style>
</head>
<body class="bg-surface text-on-surface selection:bg-primary-fixed">
<aside class="fixed left-0 top-0 h-full flex flex-col p-6 space-y-2 bg-[#faf8ff] dark:bg-slate-950 w-64 border-r border-slate-100 dark:border-slate-800 z-50">
<div class="mb-10 px-4">
<h1 class="text-xl font-bold text-blue-800 dark:text-blue-300 font-manrope">Architect</h1>
<p class="text-xs font-label text-on-surface-variant/70 uppercase tracking-widest">Wealth Management</p>
</div>
<nav class="flex-1 space-y-1">
<a class="bg-[#dae2fd] dark:bg-blue-900/40 text-[#173bab] dark:text-blue-100 rounded-lg px-4 py-3 font-semibold flex items-center gap-3" href="#">
<span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">dashboard</span>
                Dashboard
            </a>
<a class="text-[#434655] dark:text-slate-400 px-4 py-3 hover:bg-slate-50 dark:hover:bg-slate-900 rounded-lg flex items-center gap-3 transition-transform duration-200 hover:translate-x-1" href="#">
<span class="material-symbols-outlined">receipt_long</span>
                Transactions
            </a>
<a class="text-[#434655] dark:text-slate-400 px-4 py-3 hover:bg-slate-50 dark:hover:bg-slate-900 rounded-lg flex items-center gap-3 transition-transform duration-200 hover:translate-x-1" href="#">
<span class="material-symbols-outlined">account_balance_wallet</span>
                Budgets
            </a>
<a class="text-[#434655] dark:text-slate-400 px-4 py-3 hover:bg-slate-50 dark:hover:bg-slate-900 rounded-lg flex items-center gap-3 transition-transform duration-200 hover:translate-x-1" href="#">
<span class="material-symbols-outlined">bar_chart</span>
                Analytics
            </a>
<a class="text-[#434655] dark:text-slate-400 px-4 py-3 hover:bg-slate-50 dark:hover:bg-slate-900 rounded-lg flex items-center gap-3 transition-transform duration-200 hover:translate-x-1" href="#">
<span class="material-symbols-outlined">settings</span>
                Settings
            </a>
</nav>
<div class="pt-6 border-t border-outline-variant/20 space-y-1">
<div class="px-4 py-3 mb-4 rounded-xl bg-primary-container text-on-primary-container relative overflow-hidden group cursor-pointer">
<div class="relative z-10">
<p class="text-xs font-bold opacity-80">Premium Access</p>
<p class="text-[10px] mt-1 leading-tight opacity-70">Unlock advanced fiscal architecture tools.</p>
</div>
<div class="absolute -right-4 -bottom-4 w-16 h-16 bg-white/10 rounded-full blur-xl group-hover:scale-150 transition-transform duration-500"></div>
</div>
<a class="text-[#434655] dark:text-slate-400 px-4 py-3 hover:bg-slate-50 dark:hover:bg-slate-900 rounded-lg flex items-center gap-3 transition-transform duration-200 hover:translate-x-1" href="#">
<span class="material-symbols-outlined">help</span>
                Help Center
            </a>
<a class="text-[#434655] dark:text-slate-400 px-4 py-3 hover:bg-slate-50 dark:hover:bg-slate-900 rounded-lg flex items-center gap-3 transition-transform duration-200 hover:translate-x-1" href="#">
<span class="material-symbols-outlined">logout</span>
                Sign Out
            </a>
</div>
</aside>
<main class="ml-64 min-h-screen">
<header class="bg-[#faf8ff]/80 dark:bg-slate-950/80 backdrop-blur-xl sticky top-0 w-full z-40 shadow-[0_20px_40px_rgba(43,75,185,0.06)]">
<div class="flex justify-between items-center w-full px-8 py-3 max-w-[1920px] mx-auto">
<div class="flex items-center gap-6">
<div class="relative">
<span class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline">search</span>
<input class="bg-surface-container-high border-none rounded-full py-2 pl-10 pr-4 text-sm w-64 focus:ring-2 focus:ring-primary/20 placeholder:text-on-surface-variant/50" placeholder="Search architecture..." type="text"/>
</div>
</div>
<div class="flex items-center gap-4">
<button class="p-2 rounded-full hover:bg-surface-container-high transition-colors">
<span class="material-symbols-outlined text-on-surface-variant">notifications</span>
</button>
<button class="p-2 rounded-full hover:bg-surface-container-high transition-colors">
<span class="material-symbols-outlined text-on-surface-variant">settings</span>
</button>
<div class="h-8 w-8 rounded-full overflow-hidden border-2 border-surface-container-highest">
<img alt="User Profile Avatar" data-alt="professional portrait of a man in business attire with a confident smile against a neutral studio background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA3VxLYsSkW7yqI6GdSTOJUQ-YAcNyj9ZhD_GdDNJuAHLvd1K9_e7Faol9I44CAwQTYdd-LTJJKvaHwaT9zlK7bYELzrO7kfRsrXB9z6LN9nue2u54zvNIsfrB6wC_spKoEu7tC2GgN_OOcvQws1e2_PFNG2HypHx8ta-7grMzb-kC1YrGKEkruNtoE891VBgukQFnPAfCyeM87H0mOpcrCWU1A6GuATlCwdgmcKJctMWqPGGRopm4yroJmtVDKg5g4mlKpKFjWMxM"/>
</div>
<button class="bg-primary hover:bg-primary-container text-on-primary px-6 py-2 rounded-xl font-manrope text-sm font-semibold tracking-tight transition-all active:scale-95 duration-200 ease-in-out">
                        Add Expense
                    </button>
</div>
</div>
</header>
<div class="p-8 max-w-[1600px] mx-auto">
<section class="grid grid-cols-12 gap-6 mb-10">
<div class="col-span-12 lg:col-span-8 flex flex-col justify-between">
<div>
<h2 class="text-on-surface-variant text-sm font-label uppercase tracking-widest mb-1">Financial Architecture Summary</h2>
<h1 class="text-5xl font-extrabold text-on-surface font-headline tracking-tighter mb-8">
                            $42,850.24
                        </h1>
</div>
<div class="grid grid-cols-2 gap-4">
<div class="bg-surface-container-low rounded-[2rem] p-8 relative overflow-hidden">
<div class="relative z-10">
<p class="text-on-surface-variant text-xs font-semibold mb-2">Monthly Income</p>
<p class="text-3xl font-bold text-tertiary">+$12,400.00</p>
<div class="mt-4 flex items-center gap-2 text-xs font-medium text-tertiary">
<span class="material-symbols-outlined text-sm">trending_up</span>
<span>8.2% vs last month</span>
</div>
</div>
<div class="absolute top-0 right-0 p-4 opacity-10">
<span class="material-symbols-outlined text-6xl">account_balance</span>
</div>
</div>
<div class="bg-surface-container-low rounded-[2rem] p-8 relative overflow-hidden">
<div class="relative z-10">
<p class="text-on-surface-variant text-xs font-semibold mb-2">Monthly Spending</p>
<p class="text-3xl font-bold text-error">-$4,120.50</p>
<div class="mt-4 flex items-center gap-2 text-xs font-medium text-error">
<span class="material-symbols-outlined text-sm">trending_down</span>
<span>2.4% vs last month</span>
</div>
</div>
<div class="absolute top-0 right-0 p-4 opacity-10">
<span class="material-symbols-outlined text-6xl">payments</span>
</div>
</div>
</div>
</div>
<div class="col-span-12 lg:col-span-4">
<div class="bg-surface-container-lowest border-none rounded-[2rem] p-8 h-full shadow-[0_20px_40px_rgba(43,75,185,0.06)] flex flex-col">
<div class="flex justify-between items-center mb-6">
<h3 class="font-bold text-lg">Spending Categories</h3>
<button class="text-primary text-xs font-bold hover:underline">Full Report</button>
</div>
<div class="relative flex-1 flex items-center justify-center py-4">
<!-- Circular Pie Chart using SVG -->
<svg class="w-48 h-48 -rotate-90" viewbox="0 0 100 100">
<!-- Housing 45% -->
<circle class="pie-segment stroke-primary" cx="50" cy="50" fill="transparent" r="40" stroke-dasharray="113.1 138.2" stroke-dashoffset="0" stroke-width="20"></circle>
<!-- Lifestyle 30% -->
<circle class="pie-segment stroke-tertiary" cx="50" cy="50" fill="transparent" r="40" stroke-dasharray="75.4 175.9" stroke-dashoffset="-113.1" stroke-width="20"></circle>
<!-- Dining 25% -->
<circle class="pie-segment stroke-orange-400" cx="50" cy="50" fill="transparent" r="40" stroke-dasharray="62.8 188.5" stroke-dashoffset="-188.5" stroke-width="20"></circle>
</svg>
<!-- Center text overlay -->
<div class="absolute flex flex-col items-center justify-center">
<span class="text-[10px] text-on-surface-variant font-bold uppercase tracking-wider">Total</span>
<span class="text-lg font-bold text-on-surface">$4,120</span>
</div>
</div>
<div class="space-y-4 mt-6 pt-4 border-t border-outline-variant/10">
<div class="flex items-center justify-between text-sm">
<div class="flex items-center gap-3">
<div class="w-3 h-3 rounded-full bg-primary"></div>
<span class="font-medium">Housing</span>
</div>
<span class="text-on-surface-variant">45%</span>
</div>
<div class="flex items-center justify-between text-sm">
<div class="flex items-center gap-3">
<div class="w-3 h-3 rounded-full bg-tertiary"></div>
<span class="font-medium">Lifestyle</span>
</div>
<span class="text-on-surface-variant">30%</span>
</div>
<div class="flex items-center justify-between text-sm">
<div class="flex items-center gap-3">
<div class="w-3 h-3 rounded-full bg-orange-400"></div>
<span class="font-medium">Dining</span>
</div>
<span class="text-on-surface-variant">25%</span>
</div>
</div>
</div>
</div>
</section>
<section class="grid grid-cols-12 gap-6">
<div class="col-span-12 lg:col-span-8">
<div class="bg-surface-container-low rounded-[2rem] p-8">
<div class="flex justify-between items-center mb-8">
<h3 class="text-xl font-bold">Recent Transactions</h3>
<div class="flex gap-2">
<button class="px-4 py-2 bg-surface-container-lowest rounded-xl text-xs font-bold text-primary shadow-sm hover:bg-primary hover:text-white transition-all">All</button>
<button class="px-4 py-2 text-xs font-bold text-on-surface-variant hover:bg-surface-container-high rounded-xl transition-all">Income</button>
<button class="px-4 py-2 text-xs font-bold text-on-surface-variant hover:bg-surface-container-high rounded-xl transition-all">Expenses</button>
</div>
</div>
<div class="space-y-4">
<div class="bg-surface-container-lowest p-4 rounded-2xl flex items-center justify-between transition-transform hover:scale-[1.01] cursor-pointer">
<div class="flex items-center gap-4">
<div class="w-12 h-12 bg-surface-container-high rounded-full flex items-center justify-center text-primary">
<span class="material-symbols-outlined">shopping_cart</span>
</div>
<div>
<p class="font-bold text-on-surface">Whole Foods Market</p>
<p class="text-xs text-on-surface-variant">Today • 12:45 PM • Groceries</p>
</div>
</div>
<div class="text-right">
<p class="font-bold text-on-surface">-$184.20</p>
<span class="inline-block px-2 py-0.5 rounded-full bg-error-container text-[10px] text-on-error-container font-bold uppercase tracking-tighter">Expense</span>
</div>
</div>
<div class="bg-surface-container-lowest p-4 rounded-2xl flex items-center justify-between transition-transform hover:scale-[1.01] cursor-pointer">
<div class="flex items-center gap-4">
<div class="w-12 h-12 bg-surface-container-high rounded-full flex items-center justify-center text-tertiary">
<span class="material-symbols-outlined">work</span>
</div>
<div>
<p class="font-bold text-on-surface">Tech Solutions Inc.</p>
<p class="text-xs text-on-surface-variant">Yesterday • 09:00 AM • Salary</p>
</div>
</div>
<div class="text-right">
<p class="font-bold text-tertiary">+$8,500.00</p>
<span class="inline-block px-2 py-0.5 rounded-full bg-tertiary-container text-[10px] text-on-tertiary-container font-bold uppercase tracking-tighter">Income</span>
</div>
</div>
<div class="bg-surface-container-lowest p-4 rounded-2xl flex items-center justify-between transition-transform hover:scale-[1.01] cursor-pointer">
<div class="flex items-center gap-4">
<div class="w-12 h-12 bg-surface-container-high rounded-full flex items-center justify-center text-blue-500">
<span class="material-symbols-outlined">flight_takeoff</span>
</div>
<div>
<p class="font-bold text-on-surface">Delta Airlines</p>
<p class="text-xs text-on-surface-variant">Oct 24, 2023 • 03:15 PM • Travel</p>
</div>
</div>
<div class="text-right">
<p class="font-bold text-on-surface">-$642.00</p>
<span class="inline-block px-2 py-0.5 rounded-full bg-error-container text-[10px] text-on-error-container font-bold uppercase tracking-tighter">Expense</span>
</div>
</div>
<div class="bg-surface-container-lowest p-4 rounded-2xl flex items-center justify-between transition-transform hover:scale-[1.01] cursor-pointer">
<div class="flex items-center gap-4">
<div class="w-12 h-12 bg-surface-container-high rounded-full flex items-center justify-center text-purple-500">
<span class="material-symbols-outlined">subscriptions</span>
</div>
<div>
<p class="font-bold text-on-surface">Adobe Creative Cloud</p>
<p class="text-xs text-on-surface-variant">Oct 22, 2023 • 10:00 AM • Software</p>
</div>
</div>
<div class="text-right">
<p class="font-bold text-on-surface">-$52.99</p>
<span class="inline-block px-2 py-0.5 rounded-full bg-error-container text-[10px] text-on-error-container font-bold uppercase tracking-tighter">Expense</span>
</div>
</div>
</div>
</div>
</div>
<div class="col-span-12 lg:col-span-4 flex flex-col gap-6">
<div class="bg-surface-container-lowest rounded-[2rem] p-8 shadow-[0_20px_40px_rgba(43,75,185,0.06)] relative overflow-hidden flex-1 min-h-[300px]">
<div class="relative z-10">
<h3 class="text-xl font-bold mb-6">Financial Goal</h3>
<div class="mb-4">
<div class="flex justify-between items-end mb-2">
<p class="text-xs font-bold text-on-surface-variant uppercase tracking-widest">New Home Downpayment</p>
<p class="text-lg font-bold text-primary">65%</p>
</div>
<div class="w-full h-3 bg-surface-container-high rounded-full overflow-hidden">
<div class="h-full bg-gradient-to-r from-primary to-primary-container w-[65%] rounded-full"></div>
</div>
</div>
<p class="text-sm text-on-surface-variant leading-relaxed">You're only <span class="font-bold text-on-surface">$17,500</span> away from your dream architectural project. Keep up the momentum!</p>
</div>
<div class="absolute -right-10 -bottom-10 opacity-20">
<span class="material-symbols-outlined text-[120px] text-primary">architecture</span>
</div>
</div>
<div class="bg-primary-container text-on-primary-container rounded-[2rem] p-8 flex flex-col justify-between items-start">
<div>
<span class="material-symbols-outlined text-4xl mb-4">auto_awesome</span>
<h3 class="text-lg font-bold leading-tight mb-2">Smart Saving Insight</h3>
<p class="text-xs opacity-80 leading-relaxed mb-6">Switching your energy provider could architect a saving of $42/month based on your current utility spending.</p>
</div>
<button class="bg-white text-primary px-6 py-2.5 rounded-xl text-xs font-bold hover:bg-opacity-90 transition-all">Explore Savings</button>
</div>
</div>
</section>
</div>
</main>
<button class="fixed bottom-8 right-8 w-16 h-16 bg-primary rounded-full flex items-center justify-center text-on-primary shadow-[0_15px_30px_rgba(43,75,185,0.3)] hover:scale-110 active:scale-95 transition-all z-50 group">
<span class="material-symbols-outlined text-3xl group-hover:rotate-90 transition-transform duration-300">add</span>
</button>
</body></html>`,Ym=`<!DOCTYPE html>

<html class="dark" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Architect Finance | Settings</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"><\/script>
<link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;600;700;800&amp;family=Inter:wght@400;500;600&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script id="tailwind-config">
      tailwind.config = {
        darkMode: "class",
        theme: {
          extend: {
            "colors": {
                    "error-dim": "#c54d4a",
                    "surface-variant": "#23252e",
                    "on-tertiary-fixed-variant": "#604a71",
                    "surface-container-low": "#121318",
                    "on-tertiary-container": "#564067",
                    "error": "#fa746f",
                    "surface-container": "#181920",
                    "on-secondary-fixed": "#393f51",
                    "background": "#0d0e12",
                    "surface-container-high": "#1e1f26",
                    "secondary-dim": "#b3b8cf",
                    "secondary": "#c1c5dd",
                    "on-surface-variant": "#aaaab5",
                    "on-primary-fixed-variant": "#384775",
                    "on-primary": "#2f3e6b",
                    "primary-container": "#42517f",
                    "on-primary-container": "#dce2ff",
                    "inverse-on-surface": "#54555a",
                    "tertiary-dim": "#d8bceb",
                    "surface-tint": "#b6c5fb",
                    "outline": "#74757f",
                    "on-error": "#490006",
                    "inverse-primary": "#4e5d8c",
                    "primary-fixed": "#b6c5fb",
                    "surface-bright": "#2a2c34",
                    "surface-dim": "#0d0e12",
                    "on-primary-fixed": "#1a2a56",
                    "on-background": "#e4e4f0",
                    "error-container": "#871f21",
                    "tertiary": "#f1daff",
                    "inverse-surface": "#faf8fe",
                    "on-tertiary": "#5f4971",
                    "on-error-container": "#ff9993",
                    "on-secondary-fixed-variant": "#565b6f",
                    "outline-variant": "#464750",
                    "primary-dim": "#a8b7ec",
                    "surface": "#0d0e12",
                    "on-tertiary-fixed": "#422d53",
                    "secondary-container": "#363b4d",
                    "on-secondary-container": "#babed5",
                    "tertiary-container": "#e6cafa",
                    "on-surface": "#e4e4f0",
                    "tertiary-fixed-dim": "#d8bceb",
                    "surface-container-highest": "#23252e",
                    "tertiary-fixed": "#e6cafa",
                    "primary": "#b6c5fb",
                    "primary-fixed-dim": "#a8b7ec",
                    "secondary-fixed-dim": "#cfd3eb",
                    "on-secondary": "#3a4052",
                    "secondary-fixed": "#dde1f9",
                    "surface-container-lowest": "#000000"
            },
            "borderRadius": {
                    "DEFAULT": "0.125rem",
                    "lg": "0.25rem",
                    "xl": "0.5rem",
                    "full": "0.75rem"
            },
            "fontFamily": {
                    "headline": ["Manrope"],
                    "body": ["Inter"],
                    "label": ["Inter"]
            }
          },
        },
      }
    <\/script>
<style>
        body { font-family: 'Inter', sans-serif; }
        .font-headline { font-family: 'Manrope', sans-serif; }
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
    </style>
</head>
<body class="bg-background text-on-surface">
<aside class="h-screen w-64 fixed left-0 top-0 bg-slate-950 flex flex-col py-8 z-50 hidden md:flex">
<div class="px-8 mb-10">
<h1 class="text-2xl font-black text-slate-50 font-headline tracking-tight">Architect</h1>
</div>
<nav class="flex-1 space-y-2">
<div class="flex items-center px-8 py-3 text-slate-500 hover:text-slate-300 transition-all cursor-pointer font-manrope text-sm active:scale-95 duration-150 group">
<span class="material-symbols-outlined mr-4" data-icon="dashboard">dashboard</span>
<span>Dashboard</span>
</div>
<div class="flex items-center px-8 py-3 text-slate-500 hover:text-slate-300 transition-all cursor-pointer font-manrope text-sm active:scale-95 duration-150 group">
<span class="material-symbols-outlined mr-4" data-icon="receipt_long">receipt_long</span>
<span>Transactions</span>
</div>
<div class="flex items-center px-8 py-3 text-slate-500 hover:text-slate-300 transition-all cursor-pointer font-manrope text-sm active:scale-95 duration-150 group">
<span class="material-symbols-outlined mr-4" data-icon="account_balance_wallet">account_balance_wallet</span>
<span>Budgets</span>
</div>
<div class="flex items-center px-8 py-3 text-blue-400 border-r-2 border-blue-500 font-bold bg-blue-500/5 transition-all cursor-pointer font-manrope text-sm active:scale-95 duration-150 group">
<span class="material-symbols-outlined mr-4" data-icon="settings" style="font-variation-settings: 'FILL' 1;">settings</span>
<span>Settings</span>
</div>
</nav>
<div class="mt-auto px-8 py-6 bg-slate-900 mx-4 rounded-xl border border-white/5">
<div class="flex items-center mb-4">
<img alt="User Profile" class="w-10 h-10 rounded-full object-cover mr-3 border border-blue-500/30" data-alt="Close up portrait of a professional man with a confident expression, soft studio lighting, high-end corporate style" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBi7_qIoJZ5d6RwdvXbz_WkfD1Wg1yLq_JdY2xFVYI2Ap41uN23PoQ_ziODINeK9mYWcC9NAik53dgqQ82SWn3vNUrr-OCqjfqY_U24HhN2XEL5PMbrqRSxq3FubB2kpveR7CHSQIZuVc9Xm8MQfUh2L9RJcXppLQElnrZ4xlDEKmkgCOhLkE60BxGyQUMbPV0LMk3UdkSJkWMOYmVal150hyr_N4V75eVH_2Y7Lyhib-PNGPx1rOJydE4uvPs8Ggx_xJzQqUFakJs"/>
<div class="overflow-hidden">
<p class="text-sm font-bold text-slate-50 truncate">Alex Sterling</p>
<p class="text-[10px] text-blue-400 uppercase tracking-widest font-bold">Premium Member</p>
</div>
</div>
<button class="w-full py-2 bg-gradient-to-br from-primary-container to-on-primary-fixed-variant text-white text-xs font-bold rounded-lg transition-transform active:scale-95">
                Upgrade Plan
            </button>
</div>
</aside>
<main class="md:ml-64 min-h-screen">
<header class="w-full sticky top-0 z-40 bg-slate-900/80 backdrop-blur-xl flex items-center justify-between px-6 h-16 w-full font-manrope tracking-tight">
<div class="flex items-center gap-4">
<div class="md:hidden">
<span class="material-symbols-outlined text-on-surface" data-icon="menu">menu</span>
</div>
<h2 class="text-xl font-bold text-slate-100">Settings</h2>
</div>
<div class="flex items-center gap-4">
<div class="hidden sm:flex bg-slate-800/50 rounded-full px-4 py-1.5 items-center gap-2">
<span class="material-symbols-outlined text-slate-400 text-sm" data-icon="search">search</span>
<input class="bg-transparent border-none text-xs text-on-surface focus:ring-0 w-32 md:w-48 placeholder:text-slate-500" placeholder="Search settings..." type="text"/>
</div>
<div class="flex items-center gap-3">
<button class="p-2 text-slate-400 hover:bg-slate-800/80 transition-colors rounded-full relative">
<span class="material-symbols-outlined" data-icon="notifications">notifications</span>
<span class="absolute top-2 right-2 w-2 h-2 bg-blue-500 rounded-full border-2 border-slate-900"></span>
</button>
<button class="p-2 text-slate-400 hover:bg-slate-800/80 transition-colors rounded-full">
<span class="material-symbols-outlined" data-icon="settings">settings</span>
</button>
</div>
</div>
</header>
<div class="p-6 md:p-12 max-w-5xl mx-auto space-y-12">
<section class="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
<div class="md:col-span-4">
<h3 class="text-2xl font-headline font-extrabold text-on-surface mb-2">Profile Information</h3>
<p class="text-on-surface-variant text-sm leading-relaxed">Manage your public identity and personal details.</p>
</div>
<div class="md:col-span-8 bg-surface-container-high rounded-xl p-8 space-y-8">
<div class="flex flex-col sm:flex-row items-center gap-6">
<div class="relative group">
<img alt="User profile avatar" class="w-24 h-24 rounded-full object-cover border-4 border-surface-variant" data-alt="Professional studio portrait of a man in his early 40s, warm lighting, neutral dark gray background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB2vq2LgdXdom7dI7V54tylZ_11utCYr8E9zAng_LYqIO8vXOuEE3mwmpX00sTHn7Q4CIxpQKIuVB3VWIzbfemiA4rQey3ig7TXGmRCStqbK4EFtv3IRuBbpznQMoiJDAUdSqzHJwhiHS8BtvCNQetiQcnMIPJniWILWVsYlxTbdTMJ95zNWVBiPJwDfX4ekWNaGtrX9Kbzn1rOwnB-xfHH_vCPtfTx9Og3FfWuzI6JE1l38R8kAJ_gTSo5zszfBbX3C11gikFe3oo"/>
<button class="absolute bottom-0 right-0 p-2 bg-primary rounded-full text-on-primary shadow-lg hover:scale-110 transition-transform">
<span class="material-symbols-outlined text-sm" data-icon="edit">edit</span>
</button>
</div>
<div class="text-center sm:text-left flex-1">
<h4 class="text-xl font-bold font-headline">Alex Sterling</h4>
<p class="text-on-surface-variant text-sm mb-4">alex.sterling@architect-finance.com</p>
<button class="px-6 py-2 bg-surface-container-highest text-primary font-semibold text-sm rounded-lg hover:bg-surface-variant transition-colors">
                                Edit Profile
                            </button>
</div>
</div>
</div>
</section>
<section class="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
<div class="md:col-span-4">
<h3 class="text-2xl font-headline font-extrabold text-on-surface mb-2">Security</h3>
<p class="text-on-surface-variant text-sm leading-relaxed">Protect your financial data with enterprise-grade security tools.</p>
</div>
<div class="md:col-span-8 space-y-4">
<div class="bg-surface-container-high rounded-xl p-6 flex items-center justify-between group cursor-pointer hover:bg-surface-variant transition-colors">
<div class="flex items-center gap-4">
<div class="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
<span class="material-symbols-outlined" data-icon="lock">lock</span>
</div>
<div>
<p class="font-bold text-on-surface">Change Password</p>
<p class="text-xs text-on-surface-variant">Last updated 3 months ago</p>
</div>
</div>
<span class="material-symbols-outlined text-on-surface-variant group-hover:translate-x-1 transition-transform" data-icon="chevron_right">chevron_right</span>
</div>
<div class="bg-surface-container-high rounded-xl p-6 flex items-start sm:items-center justify-between gap-4">
<div class="flex items-center gap-4">
<div class="w-10 h-10 rounded-full bg-tertiary/10 flex items-center justify-center text-tertiary">
<span class="material-symbols-outlined" data-icon="verified_user">verified_user</span>
</div>
<div>
<p class="font-bold text-on-surface">Two-Factor Authentication</p>
<p class="text-xs text-on-surface-variant">Secure your login with a mobile device</p>
</div>
</div>
<label class="relative inline-flex items-center cursor-pointer shrink-0 ml-4">
<input checked="" class="sr-only peer" type="checkbox"/>
<div class="w-11 h-6 bg-surface-variant peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
</label>
</div>
</div>
</section>
<section class="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
<div class="md:col-span-4">
<h3 class="text-2xl font-headline font-extrabold text-on-surface mb-2">Notifications</h3>
<p class="text-on-surface-variant text-sm leading-relaxed">Stay updated on your wealth progression and spending activity.</p>
</div>
<div class="md:col-span-8 bg-surface-container-high rounded-xl divide-y divide-white/5 overflow-hidden">
<div class="p-6 flex items-start sm:items-center justify-between gap-4">
<div>
<p class="font-bold text-on-surface">Spending Alerts</p>
<p class="text-xs text-on-surface-variant">Instant notification when a large purchase is made</p>
</div>
<label class="relative inline-flex items-center cursor-pointer shrink-0 ml-4">
<input checked="" class="sr-only peer" type="checkbox"/>
<div class="w-11 h-6 bg-surface-variant peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
</label>
</div>
<div class="p-6 flex items-start sm:items-center justify-between gap-4">
<div>
<p class="font-bold text-on-surface">Budget Milestones</p>
<p class="text-xs text-on-surface-variant">Alerts when you reach 80% of your monthly budget</p>
</div>
<label class="relative inline-flex items-center cursor-pointer shrink-0 ml-4">
<input checked="" class="sr-only peer" type="checkbox"/>
<div class="w-11 h-6 bg-surface-variant peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
</label>
</div>
<div class="p-6 flex items-start sm:items-center justify-between gap-4">
<div>
<p class="font-bold text-on-surface">Weekly Reports</p>
<p class="text-xs text-on-surface-variant">Summarized digest of your financial health every Monday</p>
</div>
<label class="relative inline-flex items-center cursor-pointer shrink-0 ml-4">
<input class="sr-only peer" type="checkbox"/>
<div class="w-11 h-6 bg-surface-variant peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
</label>
</div>
</div>
</section>
<section class="grid grid-cols-1 md:grid-cols-12 gap-8 items-start pb-20">
<div class="md:col-span-4">
<h3 class="text-2xl font-headline font-extrabold text-on-surface mb-2">App Preferences</h3>
<p class="text-on-surface-variant text-sm leading-relaxed">Customize your viewing experience and regional formats.</p>
</div>
<div class="md:col-span-8 bg-surface-container-high rounded-xl p-8 space-y-8">
<div class="space-y-2">
<label class="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Primary Currency</label>
<div class="relative">
<select class="w-full appearance-none bg-surface-container-highest border-none rounded-lg py-3 pl-4 pr-12 text-on-surface focus:ring-2 focus:ring-primary/20 cursor-pointer leading-6">
<option value="USD">USD - United States Dollar</option>
<option value="EUR">EUR - Euro</option>
<option value="GBP">GBP - British Pound</option>
</select>
<span class="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-on-surface-variant" data-icon="expand_more">expand_more</span>
</div>
</div>
<div class="flex items-start sm:items-center justify-between gap-4 pt-4">
<div class="flex items-center gap-4">
<div class="w-10 h-10 rounded-full bg-on-surface-variant/10 flex items-center justify-center text-on-surface">
<span class="material-symbols-outlined" data-icon="dark_mode">dark_mode</span>
</div>
<div>
<p class="font-bold text-on-surface">Dark Mode</p>
<p class="text-xs text-on-surface-variant">Switch between light and dark theme</p>
</div>
</div>
<label class="relative inline-flex items-center cursor-pointer shrink-0 ml-4">
<input checked="" class="sr-only peer" type="checkbox"/>
<div class="w-11 h-6 bg-surface-variant peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
</label>
</div>
</div>
</section>
</div>
</main>
<nav class="md:hidden fixed bottom-0 left-0 right-0 bg-slate-900 border-t border-white/5 px-6 h-16 flex items-center justify-between z-50">
<div class="flex flex-col items-center text-slate-400">
<span class="material-symbols-outlined" data-icon="dashboard">dashboard</span>
<span class="text-[10px] font-bold">Dash</span>
</div>
<div class="flex flex-col items-center text-slate-400">
<span class="material-symbols-outlined" data-icon="receipt_long">receipt_long</span>
<span class="text-[10px] font-bold">Trans</span>
</div>
<div class="flex flex-col items-center text-slate-400">
<span class="material-symbols-outlined" data-icon="account_balance_wallet">account_balance_wallet</span>
<span class="text-[10px] font-bold">Budgets</span>
</div>
<div class="flex flex-col items-center text-blue-400">
<span class="material-symbols-outlined" data-icon="settings" style="font-variation-settings: 'FILL' 1;">settings</span>
<span class="text-[10px] font-bold">Setup</span>
</div>
</nav>
</body></html>`,Km=`<!DOCTYPE html>

<html class="light dark" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Transactions | Financial Architect</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"><\/script>
<link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&amp;family=Inter:wght@400;500;600&amp;family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script id="tailwind-config">tailwind.config = {darkMode: "class", theme: {extend: {colors: {"on-surface-variant": "#aaaab5", background: "#0d0e12", "on-tertiary-fixed-variant": "#604a71", "on-primary-fixed-variant": "#384775", outline: "#74757f", "outline-variant": "#464750", "on-primary-fixed": "#1a2a56", "on-error-container": "#ff9993", "surface-dim": "#0d0e12", "surface-bright": "#2a2c34", "on-secondary-fixed": "#393f51", "tertiary-container": "#e6cafa", "on-secondary-fixed-variant": "#565b6f", "primary-fixed": "#b6c5fb", "on-tertiary-fixed": "#422d53", "inverse-on-surface": "#54555a", "tertiary-fixed": "#e6cafa", "on-primary": "#2f3e6b", tertiary: "#f1daff", "secondary-container": "#363b4d", "secondary-fixed-dim": "#cfd3eb", "primary-container": "#42517f", primary: "#b6c5fb", "on-tertiary-container": "#564067", "on-background": "#e4e4f0", "tertiary-fixed-dim": "#d8bceb", "on-primary-container": "#dce2ff", "surface-tint": "#b6c5fb", "secondary-fixed": "#dde1f9", "error-container": "#871f21", secondary: "#c1c5dd", error: "#fa746f", "surface-variant": "#23252e", "on-secondary": "#3a4052", "inverse-surface": "#faf8fe", "primary-fixed-dim": "#a8b7ec", "on-secondary-container": "#babed5", "surface-container-lowest": "#000000", "inverse-primary": "#4e5d8c", "surface-container-highest": "#23252e", surface: "#0d0e12", "on-tertiary": "#5f4971", "on-surface": "#e4e4f0", "surface-container": "#181920", "surface-container-low": "#121318", "surface-container-high": "#1e1f26", "on-error": "#490006", "primary-dim": "#a8b7ec", "error-dim": "#c54d4a", "tertiary-dim": "#d8bceb", "secondary-dim": "#b3b8cf"}, borderRadius: {DEFAULT: "0.125rem", lg: "0.25rem", xl: "0.5rem", full: "0.75rem"}, fontFamily: {headline: ["Manrope"], body: ["Inter"], label: ["Inter"], display: "Manrope"}}}};<\/script>
<style>
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
        body { font-family: 'Inter', sans-serif; }
        h1, h2, h3, .font-manrope { font-family: 'Manrope', sans-serif; }
    </style>
</head>
<body class="bg-background text-on-background antialiased">
<!-- TopNavBar -->
<header class="docked top-0 w-full z-40 sticky bg-[#faf8ff]/80 dark:bg-slate-950/80 backdrop-blur-xl shadow-[0_20px_40px_rgba(43,75,185,0.06)]">
<div class="flex justify-between items-center w-full px-8 py-3 max-w-[1920px] mx-auto">
<div class="flex items-center gap-8">
<span class="text-2xl font-black text-[#131b2e] dark:text-slate-50 font-manrope">Financial Architect</span>
<nav class="hidden md:flex gap-6">
<a class="text-[#434655] dark:text-slate-400 font-medium font-manrope text-sm tracking-tight hover:bg-[#e2e7ff] px-3 py-1.5 rounded-lg transition-colors" href="#">Dashboard</a>
<a class="text-blue-700 dark:text-blue-300 font-bold border-b-2 border-blue-700 font-manrope text-sm tracking-tight px-3 py-1.5 transition-colors" href="#">Transactions</a>
<a class="text-[#434655] dark:text-slate-400 font-medium font-manrope text-sm tracking-tight hover:bg-[#e2e7ff] px-3 py-1.5 rounded-lg transition-colors" href="#">Budgets</a>
<a class="text-[#434655] dark:text-slate-400 font-medium font-manrope text-sm tracking-tight hover:bg-[#e2e7ff] px-3 py-1.5 rounded-lg transition-colors" href="#">Analytics</a>
</nav>
</div>
<div class="flex items-center gap-4">
<div class="hidden lg:flex items-center bg-surface-container-high px-4 py-2 rounded-xl focus-within:ring-2 ring-primary/20 transition-all">
<span class="material-symbols-outlined text-outline mr-2 text-sm">search</span>
<input class="bg-transparent border-none focus:ring-0 text-sm text-on-surface w-64" placeholder="Search transactions..." type="text"/>
</div>
<button class="flex items-center gap-2 bg-gradient-to-br from-primary to-primary-container text-on-primary px-5 py-2.5 rounded-xl font-semibold text-sm active:scale-95 duration-200 ease-in-out">
<span class="material-symbols-outlined text-[20px]">add</span>
                    Add Expense
                </button>
<div class="flex items-center gap-2 ml-4">
<button class="p-2 text-on-surface-variant hover:bg-surface-container-high rounded-full transition-colors">
<span class="material-symbols-outlined" data-icon="notifications">notifications</span>
</button>
<button class="p-2 text-on-surface-variant hover:bg-surface-container-high rounded-full transition-colors">
<span class="material-symbols-outlined" data-icon="settings">settings</span>
</button>
<img alt="User Profile Avatar" class="w-10 h-10 rounded-full border-2 border-white object-cover" data-alt="Close up portrait of a professional man with a friendly expression in a modern office setting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDtpTkQ9bDNGtUuse_N6Kuzayg1yD1TvS8TkoDUQySv_5gHVVkH5gBTXi03q4xZZXt_7F09CjyWeCDobbqFZjCSEK0M6G5i0u_aexqvxqQHcq5qJXpMoQMjvYRIRWs4sSIsSbs1jQY3JWq5vr-hMyz77wHOlAXQbFVMQtfAPByvLfQFb021VqBw3GRurngTXX6ZLDTFdyPZdq_OnF4ym1mbajoSd5OJgcIqZSBt8x_LTR-qt9tF-j4-7MbatlhLhSJYmyrD7LSW3Jo"/>
</div>
</div>
</div>
</header>
<div class="flex min-h-[calc(100vh-64px)]">
<!-- SideNavBar -->
<aside class="fixed left-0 top-0 h-full flex flex-col p-6 space-y-2 docked left-0 w-64 border-r border-slate-100 dark:border-slate-800 bg-[#faf8ff] dark:bg-slate-950 z-30 pt-20">
<div class="mb-8 px-4">
<div class="flex items-center gap-3">
<div class="w-10 h-10 bg-primary-fixed rounded-lg flex items-center justify-center">
<span class="material-symbols-outlined text-primary font-bold" data-icon="account_balance">account_balance</span>
</div>
<div>
<h2 class="text-xl font-bold text-blue-800 dark:text-blue-300 font-manrope">Architect</h2>
<p class="text-xs text-on-surface-variant font-inter">Wealth Management</p>
</div>
</div>
</div>
<nav class="flex-1 space-y-1">
<div class="text-[#434655] dark:text-slate-400 px-4 py-3 hover:bg-slate-50 dark:hover:bg-slate-900 rounded-lg cursor-pointer hover:translate-x-1 transition-transform duration-200 flex items-center gap-3 font-inter text-sm font-medium">
<span class="material-symbols-outlined" data-icon="dashboard">dashboard</span>
                    Dashboard
                </div>
<div class="bg-[#dae2fd] dark:bg-blue-900/40 text-[#173bab] dark:text-blue-100 rounded-lg px-4 py-3 font-semibold cursor-pointer flex items-center gap-3 font-inter text-sm">
<span class="material-symbols-outlined" data-icon="receipt_long">receipt_long</span>
                    Transactions
                </div>
<div class="text-[#434655] dark:text-slate-400 px-4 py-3 hover:bg-slate-50 dark:hover:bg-slate-900 rounded-lg cursor-pointer hover:translate-x-1 transition-transform duration-200 flex items-center gap-3 font-inter text-sm font-medium">
<span class="material-symbols-outlined" data-icon="account_balance_wallet">account_balance_wallet</span>
                    Budgets
                </div>
<div class="text-[#434655] dark:text-slate-400 px-4 py-3 hover:bg-slate-50 dark:hover:bg-slate-900 rounded-lg cursor-pointer hover:translate-x-1 transition-transform duration-200 flex items-center gap-3 font-inter text-sm font-medium">
<span class="material-symbols-outlined" data-icon="bar_chart">bar_chart</span>
                    Analytics
                </div>
<div class="text-[#434655] dark:text-slate-400 px-4 py-3 hover:bg-slate-50 dark:hover:bg-slate-900 rounded-lg cursor-pointer hover:translate-x-1 transition-transform duration-200 flex items-center gap-3 font-inter text-sm font-medium">
<span class="material-symbols-outlined" data-icon="settings">settings</span>
                    Settings
                </div>
</nav>
<div class="pt-6 border-t border-slate-100 dark:border-slate-800">
<div class="bg-primary-fixed/30 p-4 rounded-2xl mb-4">
<p class="text-xs font-bold text-on-surface mb-2">UPGRADE PLAN</p>
<p class="text-xs text-on-surface-variant mb-3">Get advanced insights and multi-currency support.</p>
<button class="w-full bg-primary text-on-primary py-2 rounded-lg text-xs font-bold">Premium Access</button>
</div>
<div class="text-[#434655] dark:text-slate-400 px-4 py-3 hover:bg-slate-50 dark:hover:bg-slate-900 rounded-lg cursor-pointer flex items-center gap-3 font-inter text-sm font-medium">
<span class="material-symbols-outlined" data-icon="help">help</span>
                    Help Center
                </div>
<div class="text-[#434655] dark:text-slate-400 px-4 py-3 hover:bg-slate-50 dark:hover:bg-slate-900 rounded-lg cursor-pointer flex items-center gap-3 font-inter text-sm font-medium">
<span class="material-symbols-outlined" data-icon="logout">logout</span>
                    Sign Out
                </div>
</div>
</aside>
<!-- Main Content Canvas -->
<main class="ml-64 flex-1 p-10 bg-surface-container-low min-h-screen">
<!-- Header Section -->
<div class="mb-10">
<div class="flex justify-between items-end">
<div>
<h1 class="text-[3.5rem] font-extrabold text-on-surface font-manrope leading-tight tracking-tight">Transactions</h1>
<p class="text-on-surface-variant font-inter max-w-lg mt-2">Manage your cash flow with precision. Review, filter, and audit your financial footprint.</p>
</div>
<div class="flex gap-3 mb-2">
<button class="bg-surface-container-highest text-on-primary-fixed-variant px-6 py-3 rounded-xl font-semibold text-sm flex items-center gap-2">
<span class="material-symbols-outlined text-sm">file_download</span>
                            Export CSV
                        </button>
<button class="bg-surface-container-highest text-on-primary-fixed-variant px-6 py-3 rounded-xl font-semibold text-sm flex items-center gap-2">
<span class="material-symbols-outlined text-sm">print</span>
                            Print Statement
                        </button>
</div>
</div>
</div>
<!-- Filter Bento Grid -->
<div class="grid grid-cols-12 gap-6 mb-8">
<!-- Search & Logic -->
<div class="col-span-12 lg:col-span-8 bg-surface-container-lowest p-6 rounded-[2rem] shadow-[0_20px_40px_rgba(43,75,185,0.04)]">
<div class="flex flex-col md:flex-row gap-4 items-center">
<div class="flex-1 relative w-full">
<span class="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline">search</span>
<input class="w-full bg-surface-container-high border-none rounded-2xl py-3.5 pl-12 pr-4 focus:ring-2 ring-primary/20 text-on-surface font-inter text-sm" placeholder="Search by merchant, ID, or description..." type="text"/>
</div>
<div class="flex gap-4 w-full md:w-auto">
<div class="relative min-w-[160px]">
<select class="w-full appearance-none bg-surface-container-high border-none rounded-2xl py-3.5 px-4 focus:ring-2 ring-primary/20 text-on-surface font-inter text-sm">
<option>All Categories</option>
<option>Housing</option>
<option>Transportation</option>
<option>Food &amp; Dining</option>
<option>Subscriptions</option>
</select>
<span class="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-outline text-sm">expand_more</span>
</div>
<div class="relative min-w-[160px]">
<select class="w-full appearance-none bg-surface-container-high border-none rounded-2xl py-3.5 px-4 focus:ring-2 ring-primary/20 text-on-surface font-inter text-sm">
<option>Last 30 Days</option>
<option>This Month</option>
<option>Last Quarter</option>
<option>Custom Range</option>
</select>
<span class="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-outline text-sm">calendar_month</span>
</div>
</div>
</div>
</div>
<!-- Summary Micro-Card -->
<div class="col-span-12 lg:col-span-4 bg-gradient-to-br from-primary to-primary-container p-6 rounded-[2rem] text-on-primary flex flex-col justify-between">
<div>
<span class="text-xs font-bold uppercase tracking-widest opacity-80">Total Spending (Period)</span>
<h2 class="text-3xl font-black font-manrope mt-1">$12,482.50</h2>
</div>
<div class="flex items-center gap-2 mt-4">
<span class="bg-white/20 px-2 py-1 rounded-full text-[10px] font-bold">↑ 4.2% VS LAST MONTH</span>
</div>
</div>
</div>
<!-- Transaction Table Container -->
<div class="bg-surface-container-lowest rounded-[2.5rem] shadow-[0_40px_80px_rgba(43,75,185,0.06)] overflow-hidden">
<div class="overflow-x-auto">
<table class="w-full border-collapse">
<thead>
<tr class="bg-surface-container-high/50">
<th class="px-8 py-5 text-left text-[11px] font-extrabold uppercase tracking-widest text-on-surface-variant font-inter">
                                    Date
                                </th>
<th class="px-8 py-5 text-left text-[11px] font-extrabold uppercase tracking-widest text-on-surface-variant font-inter">
                                    Merchant / Description
                                </th>
<th class="px-8 py-5 text-left text-[11px] font-extrabold uppercase tracking-widest text-on-surface-variant font-inter">
                                    Category
                                </th>
<th class="px-8 py-5 text-right text-[11px] font-extrabold uppercase tracking-widest text-on-surface-variant font-inter">
                                    Status
                                </th>
<th class="px-8 py-5 text-right text-[11px] font-extrabold uppercase tracking-widest text-on-surface-variant font-inter">
                                    Amount
                                </th>
<th class="px-8 py-5"></th>
</tr>
</thead>
<tbody class="divide-y divide-slate-50 dark:divide-slate-900">
<!-- Transaction Item -->
<tr class="hover:bg-surface-container-low/40 transition-colors group">
<td class="px-8 py-6">
<div class="flex flex-col">
<span class="text-sm font-bold text-on-surface">Oct 24, 2023</span>
<span class="text-[11px] text-on-surface-variant">10:45 AM</span>
</div>
</td>
<td class="px-8 py-6">
<div class="flex items-center gap-4">
<div class="w-10 h-10 rounded-xl bg-surface-container-high flex items-center justify-center">
<span class="material-symbols-outlined text-primary" data-icon="shopping_bag">shopping_bag</span>
</div>
<div class="flex flex-col">
<span class="text-sm font-bold text-on-surface">Apple Store Soho</span>
<span class="text-[11px] text-on-surface-variant">Purchase ID: #88291</span>
</div>
</div>
</td>
<td class="px-8 py-6">
<span class="px-3 py-1 bg-surface-container-high rounded-full text-[11px] font-bold text-on-primary-fixed-variant">Technology</span>
</td>
<td class="px-8 py-6 text-right">
<span class="px-3 py-1 bg-tertiary-container/20 text-tertiary text-[11px] font-bold rounded-full">Completed</span>
</td>
<td class="px-8 py-6 text-right">
<span class="text-sm font-extrabold text-on-surface">-$1,299.00</span>
</td>
<td class="px-8 py-6 text-right">
<button class="p-2 opacity-0 group-hover:opacity-100 transition-opacity">
<span class="material-symbols-outlined text-on-surface-variant">more_vert</span>
</button>
</td>
</tr>
<!-- Transaction Item -->
<tr class="hover:bg-surface-container-low/40 transition-colors group">
<td class="px-8 py-6">
<div class="flex flex-col">
<span class="text-sm font-bold text-on-surface">Oct 22, 2023</span>
<span class="text-[11px] text-on-surface-variant">08:12 PM</span>
</div>
</td>
<td class="px-8 py-6">
<div class="flex items-center gap-4">
<div class="w-10 h-10 rounded-xl bg-surface-container-high flex items-center justify-center">
<span class="material-symbols-outlined text-primary" data-icon="restaurant">restaurant</span>
</div>
<div class="flex flex-col">
<span class="text-sm font-bold text-on-surface">Blue Hill Restaurant</span>
<span class="text-[11px] text-on-surface-variant">Fine Dining</span>
</div>
</div>
</td>
<td class="px-8 py-6">
<span class="px-3 py-1 bg-surface-container-high rounded-full text-[11px] font-bold text-on-primary-fixed-variant">Food &amp; Dining</span>
</td>
<td class="px-8 py-6 text-right">
<span class="px-3 py-1 bg-tertiary-container/20 text-tertiary text-[11px] font-bold rounded-full">Completed</span>
</td>
<td class="px-8 py-6 text-right">
<span class="text-sm font-extrabold text-on-surface">-$245.50</span>
</td>
<td class="px-8 py-6 text-right">
<button class="p-2 opacity-0 group-hover:opacity-100 transition-opacity">
<span class="material-symbols-outlined text-on-surface-variant">more_vert</span>
</button>
</td>
</tr>
<!-- Transaction Item (Income) -->
<tr class="hover:bg-surface-container-low/40 transition-colors group">
<td class="px-8 py-6">
<div class="flex flex-col">
<span class="text-sm font-bold text-on-surface">Oct 20, 2023</span>
<span class="text-[11px] text-on-surface-variant">09:00 AM</span>
</div>
</td>
<td class="px-8 py-6">
<div class="flex items-center gap-4">
<div class="w-10 h-10 rounded-xl bg-tertiary-container/10 flex items-center justify-center">
<span class="material-symbols-outlined text-tertiary" data-icon="payments">payments</span>
</div>
<div class="flex flex-col">
<span class="text-sm font-bold text-on-surface">Monthly Salary</span>
<span class="text-[11px] text-on-surface-variant">Architectural Firm Corp</span>
</div>
</div>
</td>
<td class="px-8 py-6">
<span class="px-3 py-1 bg-tertiary-container/10 rounded-full text-[11px] font-bold text-tertiary">Income</span>
</td>
<td class="px-8 py-6 text-right">
<span class="px-3 py-1 bg-tertiary-container/20 text-tertiary text-[11px] font-bold rounded-full">Completed</span>
</td>
<td class="px-8 py-6 text-right">
<span class="text-sm font-extrabold text-tertiary">+$8,500.00</span>
</td>
<td class="px-8 py-6 text-right">
<button class="p-2 opacity-0 group-hover:opacity-100 transition-opacity">
<span class="material-symbols-outlined text-on-surface-variant">more_vert</span>
</button>
</td>
</tr>
<!-- Transaction Item (Pending) -->
<tr class="hover:bg-surface-container-low/40 transition-colors group">
<td class="px-8 py-6">
<div class="flex flex-col">
<span class="text-sm font-bold text-on-surface">Oct 19, 2023</span>
<span class="text-[11px] text-on-surface-variant">02:30 PM</span>
</div>
</td>
<td class="px-8 py-6">
<div class="flex items-center gap-4">
<div class="w-10 h-10 rounded-xl bg-surface-container-high flex items-center justify-center">
<span class="material-symbols-outlined text-primary" data-icon="directions_car">directions_car</span>
</div>
<div class="flex flex-col">
<span class="text-sm font-bold text-on-surface">Uber Trip</span>
<span class="text-[11px] text-on-surface-variant">Transportation</span>
</div>
</div>
</td>
<td class="px-8 py-6">
<span class="px-3 py-1 bg-surface-container-high rounded-full text-[11px] font-bold text-on-primary-fixed-variant">Transport</span>
</td>
<td class="px-8 py-6 text-right">
<span class="px-3 py-1 bg-surface-container-high text-on-surface-variant text-[11px] font-bold rounded-full">Pending</span>
</td>
<td class="px-8 py-6 text-right">
<span class="text-sm font-extrabold text-on-surface">-$32.18</span>
</td>
<td class="px-8 py-6 text-right">
<button class="p-2 opacity-0 group-hover:opacity-100 transition-opacity">
<span class="material-symbols-outlined text-on-surface-variant">more_vert</span>
</button>
</td>
</tr>
<!-- Transaction Item -->
<tr class="hover:bg-surface-container-low/40 transition-colors group">
<td class="px-8 py-6">
<div class="flex flex-col">
<span class="text-sm font-bold text-on-surface">Oct 18, 2023</span>
<span class="text-[11px] text-on-surface-variant">11:15 AM</span>
</div>
</td>
<td class="px-8 py-6">
<div class="flex items-center gap-4">
<div class="w-10 h-10 rounded-xl bg-surface-container-high flex items-center justify-center">
<span class="material-symbols-outlined text-primary" data-icon="fitness_center">fitness_center</span>
</div>
<div class="flex flex-col">
<span class="text-sm font-bold text-on-surface">Equinox Gym</span>
<span class="text-[11px] text-on-surface-variant">Monthly Membership</span>
</div>
</div>
</td>
<td class="px-8 py-6">
<span class="px-3 py-1 bg-surface-container-high rounded-full text-[11px] font-bold text-on-primary-fixed-variant">Wellness</span>
</td>
<td class="px-8 py-6 text-right">
<span class="px-3 py-1 bg-tertiary-container/20 text-tertiary text-[11px] font-bold rounded-full">Completed</span>
</td>
<td class="px-8 py-6 text-right">
<span class="text-sm font-extrabold text-on-surface">-$185.00</span>
</td>
<td class="px-8 py-6 text-right">
<button class="p-2 opacity-0 group-hover:opacity-100 transition-opacity">
<span class="material-symbols-outlined text-on-surface-variant">more_vert</span>
</button>
</td>
</tr>
</tbody>
</table>
</div>
<!-- Pagination Footer -->
<div class="px-8 py-6 flex items-center justify-between bg-surface-container-high/20">
<span class="text-[11px] font-bold text-on-surface-variant uppercase tracking-widest">Showing 1-10 of 482 transactions</span>
<div class="flex items-center gap-1">
<button class="w-10 h-10 rounded-xl flex items-center justify-center hover:bg-surface-container-high transition-colors">
<span class="material-symbols-outlined text-sm">chevron_left</span>
</button>
<button class="w-10 h-10 rounded-xl flex items-center justify-center bg-primary text-on-primary text-xs font-bold">1</button>
<button class="w-10 h-10 rounded-xl flex items-center justify-center hover:bg-surface-container-high text-xs font-bold transition-colors">2</button>
<button class="w-10 h-10 rounded-xl flex items-center justify-center hover:bg-surface-container-high text-xs font-bold transition-colors">3</button>
<span class="px-2 text-on-surface-variant">...</span>
<button class="w-10 h-10 rounded-xl flex items-center justify-center hover:bg-surface-container-high text-xs font-bold transition-colors">48</button>
<button class="w-10 h-10 rounded-xl flex items-center justify-center hover:bg-surface-container-high transition-colors">
<span class="material-symbols-outlined text-sm">chevron_right</span>
</button>
</div>
</div>
</div>
</main>
</div>
<!-- Contextual FAB (Hidden on Transactions List as per instructions, but kept as reference for system capability) -->
<!-- Suppression logic: Screen primary purpose is auditing/review, not a simple task creation like "Book a Walk" -->
</body></html>`,Jm=e=>e.replace(/\sdata-alt="[^"]*"/g,"").replace(/\sdata-icon="[^"]*"/g,""),At=(e,t)=>({title:e,html:Jm(t)}),Xm={"/dashboard-3":At("Dashboard 3",Qm),"/add-expense":At("Add Expense",Hm),"/add-expense-fixed-layout":At("Add Expense Fixed Layout",Vm),"/budgets-categories":At("Budgets & Categories",$m),"/settings":At("Settings",Ym),"/transactions-list":At("Transactions",Km)};function Gm({children:e}){return si()?e:v.jsx(ma,{to:"/login",replace:!0})}function No({children:e}){return si()?v.jsx(ma,{to:"/dashboard-3",replace:!0}):e}function Zm(){const e=xn(),[t,n]=k.useState(!1),r=k.useRef(!0);return k.useEffect(()=>{if(r.current){r.current=!1;return}n(!0);const a=setTimeout(()=>{n(!1)},550);return()=>clearTimeout(a)},[e.pathname]),v.jsxs(v.Fragment,{children:[t?v.jsx("div",{className:"route-loader-overlay",role:"status","aria-live":"polite","aria-label":"Loading next page",children:v.jsxs("div",{className:"route-loader-card",children:[v.jsx("div",{className:"route-loader-spinner"}),v.jsx("p",{className:"route-loader-text",children:"Loading workspace..."})]})}):null,v.jsxs(km,{children:[v.jsx(Dt,{path:"/",element:v.jsx(ma,{to:si()?"/dashboard-3":"/login",replace:!0})}),v.jsx(Dt,{path:"/login",element:v.jsx(No,{children:v.jsx(Bm,{})})}),v.jsx(Dt,{path:"/signup",element:v.jsx(No,{children:v.jsx(Wm,{})})}),Object.entries(Xm).map(([a,l])=>v.jsx(Dt,{path:a,element:v.jsx(Gm,{children:v.jsx(Um,{title:l.title,html:l.html})})},a)),v.jsx(Dt,{path:"*",element:v.jsx(ma,{to:"/login",replace:!0})})]})]})}ol.createRoot(document.getElementById("root")).render(v.jsx(Ao.StrictMode,{children:v.jsx(Pm,{children:v.jsx(Zm,{})})}));
