function ud(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const a in r)if(a!=="default"&&!(a in e)){const l=Object.getOwnPropertyDescriptor(r,a);l&&Object.defineProperty(e,a,l.get?l:{enumerable:!0,get:()=>r[a]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const s of l.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(a){if(a.ep)return;a.ep=!0;const l=n(a);fetch(a.href,l)}})();function cd(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Oi={exports:{}},wa={},Di={exports:{}},A={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fr=Symbol.for("react.element"),dd=Symbol.for("react.portal"),fd=Symbol.for("react.fragment"),pd=Symbol.for("react.strict_mode"),md=Symbol.for("react.profiler"),hd=Symbol.for("react.provider"),xd=Symbol.for("react.context"),gd=Symbol.for("react.forward_ref"),vd=Symbol.for("react.suspense"),yd=Symbol.for("react.memo"),bd=Symbol.for("react.lazy"),mo=Symbol.iterator;function wd(e){return e===null||typeof e!="object"?null:(e=mo&&e[mo]||e["@@iterator"],typeof e=="function"?e:null)}var Ui={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Bi=Object.assign,$i={};function wn(e,t,n){this.props=e,this.context=t,this.refs=$i,this.updater=n||Ui}wn.prototype.isReactComponent={};wn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};wn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Vi(){}Vi.prototype=wn.prototype;function us(e,t,n){this.props=e,this.context=t,this.refs=$i,this.updater=n||Ui}var cs=us.prototype=new Vi;cs.constructor=us;Bi(cs,wn.prototype);cs.isPureReactComponent=!0;var ho=Array.isArray,Hi=Object.prototype.hasOwnProperty,ds={current:null},Wi={key:!0,ref:!0,__self:!0,__source:!0};function Qi(e,t,n){var r,a={},l=null,s=null;if(t!=null)for(r in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(l=""+t.key),t)Hi.call(t,r)&&!Wi.hasOwnProperty(r)&&(a[r]=t[r]);var o=arguments.length-2;if(o===1)a.children=n;else if(1<o){for(var i=Array(o),u=0;u<o;u++)i[u]=arguments[u+2];a.children=i}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)a[r]===void 0&&(a[r]=o[r]);return{$$typeof:fr,type:e,key:l,ref:s,props:a,_owner:ds.current}}function kd(e,t){return{$$typeof:fr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function fs(e){return typeof e=="object"&&e!==null&&e.$$typeof===fr}function Sd(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var xo=/\/+/g;function Ua(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Sd(""+e.key):t.toString(36)}function Fr(e,t,n,r,a){var l=typeof e;(l==="undefined"||l==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(l){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case fr:case dd:s=!0}}if(s)return s=e,a=a(s),e=r===""?"."+Ua(s,0):r,ho(a)?(n="",e!=null&&(n=e.replace(xo,"$&/")+"/"),Fr(a,t,n,"",function(u){return u})):a!=null&&(fs(a)&&(a=kd(a,n+(!a.key||s&&s.key===a.key?"":(""+a.key).replace(xo,"$&/")+"/")+e)),t.push(a)),1;if(s=0,r=r===""?".":r+":",ho(e))for(var o=0;o<e.length;o++){l=e[o];var i=r+Ua(l,o);s+=Fr(l,t,n,i,a)}else if(i=wd(e),typeof i=="function")for(e=i.call(e),o=0;!(l=e.next()).done;)l=l.value,i=r+Ua(l,o++),s+=Fr(l,t,n,i,a);else if(l==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function br(e,t,n){if(e==null)return e;var r=[],a=0;return Fr(e,r,"","",function(l){return t.call(n,l,a++)}),r}function Cd(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var pe={current:null},Or={transition:null},Ed={ReactCurrentDispatcher:pe,ReactCurrentBatchConfig:Or,ReactCurrentOwner:ds};function Yi(){throw Error("act(...) is not supported in production builds of React.")}A.Children={map:br,forEach:function(e,t,n){br(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return br(e,function(){t++}),t},toArray:function(e){return br(e,function(t){return t})||[]},only:function(e){if(!fs(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};A.Component=wn;A.Fragment=fd;A.Profiler=md;A.PureComponent=us;A.StrictMode=pd;A.Suspense=vd;A.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ed;A.act=Yi;A.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Bi({},e.props),a=e.key,l=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(l=t.ref,s=ds.current),t.key!==void 0&&(a=""+t.key),e.type&&e.type.defaultProps)var o=e.type.defaultProps;for(i in t)Hi.call(t,i)&&!Wi.hasOwnProperty(i)&&(r[i]=t[i]===void 0&&o!==void 0?o[i]:t[i])}var i=arguments.length-2;if(i===1)r.children=n;else if(1<i){o=Array(i);for(var u=0;u<i;u++)o[u]=arguments[u+2];r.children=o}return{$$typeof:fr,type:e.type,key:a,ref:l,props:r,_owner:s}};A.createContext=function(e){return e={$$typeof:xd,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:hd,_context:e},e.Consumer=e};A.createElement=Qi;A.createFactory=function(e){var t=Qi.bind(null,e);return t.type=e,t};A.createRef=function(){return{current:null}};A.forwardRef=function(e){return{$$typeof:gd,render:e}};A.isValidElement=fs;A.lazy=function(e){return{$$typeof:bd,_payload:{_status:-1,_result:e},_init:Cd}};A.memo=function(e,t){return{$$typeof:yd,type:e,compare:t===void 0?null:t}};A.startTransition=function(e){var t=Or.transition;Or.transition={};try{e()}finally{Or.transition=t}};A.unstable_act=Yi;A.useCallback=function(e,t){return pe.current.useCallback(e,t)};A.useContext=function(e){return pe.current.useContext(e)};A.useDebugValue=function(){};A.useDeferredValue=function(e){return pe.current.useDeferredValue(e)};A.useEffect=function(e,t){return pe.current.useEffect(e,t)};A.useId=function(){return pe.current.useId()};A.useImperativeHandle=function(e,t,n){return pe.current.useImperativeHandle(e,t,n)};A.useInsertionEffect=function(e,t){return pe.current.useInsertionEffect(e,t)};A.useLayoutEffect=function(e,t){return pe.current.useLayoutEffect(e,t)};A.useMemo=function(e,t){return pe.current.useMemo(e,t)};A.useReducer=function(e,t,n){return pe.current.useReducer(e,t,n)};A.useRef=function(e){return pe.current.useRef(e)};A.useState=function(e){return pe.current.useState(e)};A.useSyncExternalStore=function(e,t,n){return pe.current.useSyncExternalStore(e,t,n)};A.useTransition=function(){return pe.current.useTransition()};A.version="18.3.1";Di.exports=A;var E=Di.exports;const Ki=cd(E),_d=ud({__proto__:null,default:Ki},[E]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Nd=E,jd=Symbol.for("react.element"),Pd=Symbol.for("react.fragment"),Ld=Object.prototype.hasOwnProperty,Td=Nd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Md={key:!0,ref:!0,__self:!0,__source:!0};function Ji(e,t,n){var r,a={},l=null,s=null;n!==void 0&&(l=""+n),t.key!==void 0&&(l=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)Ld.call(t,r)&&!Md.hasOwnProperty(r)&&(a[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)a[r]===void 0&&(a[r]=t[r]);return{$$typeof:jd,type:e,key:l,ref:s,props:a,_owner:Td.current}}wa.Fragment=Pd;wa.jsx=Ji;wa.jsxs=Ji;Oi.exports=wa;var x=Oi.exports,pl={},Gi={exports:{}},Ce={},Xi={exports:{}},qi={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(j,T){var M=j.length;j.push(T);e:for(;0<M;){var O=M-1>>>1,te=j[O];if(0<a(te,T))j[O]=T,j[M]=te,M=O;else break e}}function n(j){return j.length===0?null:j[0]}function r(j){if(j.length===0)return null;var T=j[0],M=j.pop();if(M!==T){j[0]=M;e:for(var O=0,te=j.length,vr=te>>>1;O<vr;){var Pt=2*(O+1)-1,Da=j[Pt],Lt=Pt+1,yr=j[Lt];if(0>a(Da,M))Lt<te&&0>a(yr,Da)?(j[O]=yr,j[Lt]=M,O=Lt):(j[O]=Da,j[Pt]=M,O=Pt);else if(Lt<te&&0>a(yr,M))j[O]=yr,j[Lt]=M,O=Lt;else break e}}return T}function a(j,T){var M=j.sortIndex-T.sortIndex;return M!==0?M:j.id-T.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;e.unstable_now=function(){return l.now()}}else{var s=Date,o=s.now();e.unstable_now=function(){return s.now()-o}}var i=[],u=[],h=1,p=null,f=3,g=!1,v=!1,y=!1,b=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(j){for(var T=n(u);T!==null;){if(T.callback===null)r(u);else if(T.startTime<=j)r(u),T.sortIndex=T.expirationTime,t(i,T);else break;T=n(u)}}function w(j){if(y=!1,m(j),!v)if(n(i)!==null)v=!0,De(k);else{var T=n(u);T!==null&&Ue(w,T.startTime-j)}}function k(j,T){v=!1,y&&(y=!1,d(N),N=-1),g=!0;var M=f;try{for(m(T),p=n(i);p!==null&&(!(p.expirationTime>T)||j&&!F());){var O=p.callback;if(typeof O=="function"){p.callback=null,f=p.priorityLevel;var te=O(p.expirationTime<=T);T=e.unstable_now(),typeof te=="function"?p.callback=te:p===n(i)&&r(i),m(T)}else r(i);p=n(i)}if(p!==null)var vr=!0;else{var Pt=n(u);Pt!==null&&Ue(w,Pt.startTime-T),vr=!1}return vr}finally{p=null,f=M,g=!1}}var _=!1,C=null,N=-1,z=5,L=-1;function F(){return!(e.unstable_now()-L<z)}function q(){if(C!==null){var j=e.unstable_now();L=j;var T=!0;try{T=C(!0,j)}finally{T?I():(_=!1,C=null)}}else _=!1}var I;if(typeof c=="function")I=function(){c(q)};else if(typeof MessageChannel<"u"){var H=new MessageChannel,rt=H.port2;H.port1.onmessage=q,I=function(){rt.postMessage(null)}}else I=function(){b(q,0)};function De(j){C=j,_||(_=!0,I())}function Ue(j,T){N=b(function(){j(e.unstable_now())},T)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(j){j.callback=null},e.unstable_continueExecution=function(){v||g||(v=!0,De(k))},e.unstable_forceFrameRate=function(j){0>j||125<j?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):z=0<j?Math.floor(1e3/j):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return n(i)},e.unstable_next=function(j){switch(f){case 1:case 2:case 3:var T=3;break;default:T=f}var M=f;f=T;try{return j()}finally{f=M}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(j,T){switch(j){case 1:case 2:case 3:case 4:case 5:break;default:j=3}var M=f;f=j;try{return T()}finally{f=M}},e.unstable_scheduleCallback=function(j,T,M){var O=e.unstable_now();switch(typeof M=="object"&&M!==null?(M=M.delay,M=typeof M=="number"&&0<M?O+M:O):M=O,j){case 1:var te=-1;break;case 2:te=250;break;case 5:te=1073741823;break;case 4:te=1e4;break;default:te=5e3}return te=M+te,j={id:h++,callback:T,priorityLevel:j,startTime:M,expirationTime:te,sortIndex:-1},M>O?(j.sortIndex=M,t(u,j),n(i)===null&&j===n(u)&&(y?(d(N),N=-1):y=!0,Ue(w,M-O))):(j.sortIndex=te,t(i,j),v||g||(v=!0,De(k))),j},e.unstable_shouldYield=F,e.unstable_wrapCallback=function(j){var T=f;return function(){var M=f;f=T;try{return j.apply(this,arguments)}finally{f=M}}}})(qi);Xi.exports=qi;var Ad=Xi.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Id=E,Se=Ad;function S(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Zi=new Set,Yn={};function Ht(e,t){mn(e,t),mn(e+"Capture",t)}function mn(e,t){for(Yn[e]=t,e=0;e<t.length;e++)Zi.add(t[e])}var qe=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ml=Object.prototype.hasOwnProperty,Rd=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,go={},vo={};function zd(e){return ml.call(vo,e)?!0:ml.call(go,e)?!1:Rd.test(e)?vo[e]=!0:(go[e]=!0,!1)}function Fd(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Od(e,t,n,r){if(t===null||typeof t>"u"||Fd(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function me(e,t,n,r,a,l,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=a,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=l,this.removeEmptyString=s}var se={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){se[e]=new me(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];se[t]=new me(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){se[e]=new me(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){se[e]=new me(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){se[e]=new me(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){se[e]=new me(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){se[e]=new me(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){se[e]=new me(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){se[e]=new me(e,5,!1,e.toLowerCase(),null,!1,!1)});var ps=/[\-:]([a-z])/g;function ms(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(ps,ms);se[t]=new me(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(ps,ms);se[t]=new me(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(ps,ms);se[t]=new me(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){se[e]=new me(e,1,!1,e.toLowerCase(),null,!1,!1)});se.xlinkHref=new me("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){se[e]=new me(e,1,!1,e.toLowerCase(),null,!0,!0)});function hs(e,t,n,r){var a=se.hasOwnProperty(t)?se[t]:null;(a!==null?a.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Od(t,n,a,r)&&(n=null),r||a===null?zd(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):a.mustUseProperty?e[a.propertyName]=n===null?a.type===3?!1:"":n:(t=a.attributeName,r=a.attributeNamespace,n===null?e.removeAttribute(t):(a=a.type,n=a===3||a===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var nt=Id.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,wr=Symbol.for("react.element"),Jt=Symbol.for("react.portal"),Gt=Symbol.for("react.fragment"),xs=Symbol.for("react.strict_mode"),hl=Symbol.for("react.profiler"),eu=Symbol.for("react.provider"),tu=Symbol.for("react.context"),gs=Symbol.for("react.forward_ref"),xl=Symbol.for("react.suspense"),gl=Symbol.for("react.suspense_list"),vs=Symbol.for("react.memo"),st=Symbol.for("react.lazy"),nu=Symbol.for("react.offscreen"),yo=Symbol.iterator;function _n(e){return e===null||typeof e!="object"?null:(e=yo&&e[yo]||e["@@iterator"],typeof e=="function"?e:null)}var Y=Object.assign,Ba;function In(e){if(Ba===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Ba=t&&t[1]||""}return`
`+Ba+e}var $a=!1;function Va(e,t){if(!e||$a)return"";$a=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var a=u.stack.split(`
`),l=r.stack.split(`
`),s=a.length-1,o=l.length-1;1<=s&&0<=o&&a[s]!==l[o];)o--;for(;1<=s&&0<=o;s--,o--)if(a[s]!==l[o]){if(s!==1||o!==1)do if(s--,o--,0>o||a[s]!==l[o]){var i=`
`+a[s].replace(" at new "," at ");return e.displayName&&i.includes("<anonymous>")&&(i=i.replace("<anonymous>",e.displayName)),i}while(1<=s&&0<=o);break}}}finally{$a=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?In(e):""}function Dd(e){switch(e.tag){case 5:return In(e.type);case 16:return In("Lazy");case 13:return In("Suspense");case 19:return In("SuspenseList");case 0:case 2:case 15:return e=Va(e.type,!1),e;case 11:return e=Va(e.type.render,!1),e;case 1:return e=Va(e.type,!0),e;default:return""}}function vl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Gt:return"Fragment";case Jt:return"Portal";case hl:return"Profiler";case xs:return"StrictMode";case xl:return"Suspense";case gl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case tu:return(e.displayName||"Context")+".Consumer";case eu:return(e._context.displayName||"Context")+".Provider";case gs:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case vs:return t=e.displayName||null,t!==null?t:vl(e.type)||"Memo";case st:t=e._payload,e=e._init;try{return vl(e(t))}catch{}}return null}function Ud(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return vl(t);case 8:return t===xs?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function kt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ru(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Bd(e){var t=ru(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var a=n.get,l=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(s){r=""+s,l.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function kr(e){e._valueTracker||(e._valueTracker=Bd(e))}function au(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=ru(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Jr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function yl(e,t){var n=t.checked;return Y({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function bo(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=kt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function lu(e,t){t=t.checked,t!=null&&hs(e,"checked",t,!1)}function bl(e,t){lu(e,t);var n=kt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?wl(e,t.type,n):t.hasOwnProperty("defaultValue")&&wl(e,t.type,kt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function wo(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function wl(e,t,n){(t!=="number"||Jr(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Rn=Array.isArray;function on(e,t,n,r){if(e=e.options,t){t={};for(var a=0;a<n.length;a++)t["$"+n[a]]=!0;for(n=0;n<e.length;n++)a=t.hasOwnProperty("$"+e[n].value),e[n].selected!==a&&(e[n].selected=a),a&&r&&(e[n].defaultSelected=!0)}else{for(n=""+kt(n),t=null,a=0;a<e.length;a++){if(e[a].value===n){e[a].selected=!0,r&&(e[a].defaultSelected=!0);return}t!==null||e[a].disabled||(t=e[a])}t!==null&&(t.selected=!0)}}function kl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(S(91));return Y({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ko(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(S(92));if(Rn(n)){if(1<n.length)throw Error(S(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:kt(n)}}function su(e,t){var n=kt(t.value),r=kt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function So(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function ou(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Sl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?ou(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Sr,iu=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,a){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,a)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Sr=Sr||document.createElement("div"),Sr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Sr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Kn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var On={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},$d=["Webkit","ms","Moz","O"];Object.keys(On).forEach(function(e){$d.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),On[t]=On[e]})});function uu(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||On.hasOwnProperty(e)&&On[e]?(""+t).trim():t+"px"}function cu(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,a=uu(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,a):e[n]=a}}var Vd=Y({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Cl(e,t){if(t){if(Vd[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(S(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(S(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(S(61))}if(t.style!=null&&typeof t.style!="object")throw Error(S(62))}}function El(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var _l=null;function ys(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Nl=null,un=null,cn=null;function Co(e){if(e=hr(e)){if(typeof Nl!="function")throw Error(S(280));var t=e.stateNode;t&&(t=_a(t),Nl(e.stateNode,e.type,t))}}function du(e){un?cn?cn.push(e):cn=[e]:un=e}function fu(){if(un){var e=un,t=cn;if(cn=un=null,Co(e),t)for(e=0;e<t.length;e++)Co(t[e])}}function pu(e,t){return e(t)}function mu(){}var Ha=!1;function hu(e,t,n){if(Ha)return e(t,n);Ha=!0;try{return pu(e,t,n)}finally{Ha=!1,(un!==null||cn!==null)&&(mu(),fu())}}function Jn(e,t){var n=e.stateNode;if(n===null)return null;var r=_a(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(S(231,t,typeof n));return n}var jl=!1;if(qe)try{var Nn={};Object.defineProperty(Nn,"passive",{get:function(){jl=!0}}),window.addEventListener("test",Nn,Nn),window.removeEventListener("test",Nn,Nn)}catch{jl=!1}function Hd(e,t,n,r,a,l,s,o,i){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(h){this.onError(h)}}var Dn=!1,Gr=null,Xr=!1,Pl=null,Wd={onError:function(e){Dn=!0,Gr=e}};function Qd(e,t,n,r,a,l,s,o,i){Dn=!1,Gr=null,Hd.apply(Wd,arguments)}function Yd(e,t,n,r,a,l,s,o,i){if(Qd.apply(this,arguments),Dn){if(Dn){var u=Gr;Dn=!1,Gr=null}else throw Error(S(198));Xr||(Xr=!0,Pl=u)}}function Wt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function xu(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Eo(e){if(Wt(e)!==e)throw Error(S(188))}function Kd(e){var t=e.alternate;if(!t){if(t=Wt(e),t===null)throw Error(S(188));return t!==e?null:e}for(var n=e,r=t;;){var a=n.return;if(a===null)break;var l=a.alternate;if(l===null){if(r=a.return,r!==null){n=r;continue}break}if(a.child===l.child){for(l=a.child;l;){if(l===n)return Eo(a),e;if(l===r)return Eo(a),t;l=l.sibling}throw Error(S(188))}if(n.return!==r.return)n=a,r=l;else{for(var s=!1,o=a.child;o;){if(o===n){s=!0,n=a,r=l;break}if(o===r){s=!0,r=a,n=l;break}o=o.sibling}if(!s){for(o=l.child;o;){if(o===n){s=!0,n=l,r=a;break}if(o===r){s=!0,r=l,n=a;break}o=o.sibling}if(!s)throw Error(S(189))}}if(n.alternate!==r)throw Error(S(190))}if(n.tag!==3)throw Error(S(188));return n.stateNode.current===n?e:t}function gu(e){return e=Kd(e),e!==null?vu(e):null}function vu(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=vu(e);if(t!==null)return t;e=e.sibling}return null}var yu=Se.unstable_scheduleCallback,_o=Se.unstable_cancelCallback,Jd=Se.unstable_shouldYield,Gd=Se.unstable_requestPaint,J=Se.unstable_now,Xd=Se.unstable_getCurrentPriorityLevel,bs=Se.unstable_ImmediatePriority,bu=Se.unstable_UserBlockingPriority,qr=Se.unstable_NormalPriority,qd=Se.unstable_LowPriority,wu=Se.unstable_IdlePriority,ka=null,He=null;function Zd(e){if(He&&typeof He.onCommitFiberRoot=="function")try{He.onCommitFiberRoot(ka,e,void 0,(e.current.flags&128)===128)}catch{}}var ze=Math.clz32?Math.clz32:nf,ef=Math.log,tf=Math.LN2;function nf(e){return e>>>=0,e===0?32:31-(ef(e)/tf|0)|0}var Cr=64,Er=4194304;function zn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Zr(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,a=e.suspendedLanes,l=e.pingedLanes,s=n&268435455;if(s!==0){var o=s&~a;o!==0?r=zn(o):(l&=s,l!==0&&(r=zn(l)))}else s=n&~a,s!==0?r=zn(s):l!==0&&(r=zn(l));if(r===0)return 0;if(t!==0&&t!==r&&!(t&a)&&(a=r&-r,l=t&-t,a>=l||a===16&&(l&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-ze(t),a=1<<n,r|=e[n],t&=~a;return r}function rf(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function af(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,a=e.expirationTimes,l=e.pendingLanes;0<l;){var s=31-ze(l),o=1<<s,i=a[s];i===-1?(!(o&n)||o&r)&&(a[s]=rf(o,t)):i<=t&&(e.expiredLanes|=o),l&=~o}}function Ll(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function ku(){var e=Cr;return Cr<<=1,!(Cr&4194240)&&(Cr=64),e}function Wa(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function pr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-ze(t),e[t]=n}function lf(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var a=31-ze(n),l=1<<a;t[a]=0,r[a]=-1,e[a]=-1,n&=~l}}function ws(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-ze(n),a=1<<r;a&t|e[r]&t&&(e[r]|=t),n&=~a}}var D=0;function Su(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Cu,ks,Eu,_u,Nu,Tl=!1,_r=[],pt=null,mt=null,ht=null,Gn=new Map,Xn=new Map,it=[],sf="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function No(e,t){switch(e){case"focusin":case"focusout":pt=null;break;case"dragenter":case"dragleave":mt=null;break;case"mouseover":case"mouseout":ht=null;break;case"pointerover":case"pointerout":Gn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Xn.delete(t.pointerId)}}function jn(e,t,n,r,a,l){return e===null||e.nativeEvent!==l?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:l,targetContainers:[a]},t!==null&&(t=hr(t),t!==null&&ks(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,a!==null&&t.indexOf(a)===-1&&t.push(a),e)}function of(e,t,n,r,a){switch(t){case"focusin":return pt=jn(pt,e,t,n,r,a),!0;case"dragenter":return mt=jn(mt,e,t,n,r,a),!0;case"mouseover":return ht=jn(ht,e,t,n,r,a),!0;case"pointerover":var l=a.pointerId;return Gn.set(l,jn(Gn.get(l)||null,e,t,n,r,a)),!0;case"gotpointercapture":return l=a.pointerId,Xn.set(l,jn(Xn.get(l)||null,e,t,n,r,a)),!0}return!1}function ju(e){var t=It(e.target);if(t!==null){var n=Wt(t);if(n!==null){if(t=n.tag,t===13){if(t=xu(n),t!==null){e.blockedOn=t,Nu(e.priority,function(){Eu(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Dr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Ml(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);_l=r,n.target.dispatchEvent(r),_l=null}else return t=hr(n),t!==null&&ks(t),e.blockedOn=n,!1;t.shift()}return!0}function jo(e,t,n){Dr(e)&&n.delete(t)}function uf(){Tl=!1,pt!==null&&Dr(pt)&&(pt=null),mt!==null&&Dr(mt)&&(mt=null),ht!==null&&Dr(ht)&&(ht=null),Gn.forEach(jo),Xn.forEach(jo)}function Pn(e,t){e.blockedOn===t&&(e.blockedOn=null,Tl||(Tl=!0,Se.unstable_scheduleCallback(Se.unstable_NormalPriority,uf)))}function qn(e){function t(a){return Pn(a,e)}if(0<_r.length){Pn(_r[0],e);for(var n=1;n<_r.length;n++){var r=_r[n];r.blockedOn===e&&(r.blockedOn=null)}}for(pt!==null&&Pn(pt,e),mt!==null&&Pn(mt,e),ht!==null&&Pn(ht,e),Gn.forEach(t),Xn.forEach(t),n=0;n<it.length;n++)r=it[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<it.length&&(n=it[0],n.blockedOn===null);)ju(n),n.blockedOn===null&&it.shift()}var dn=nt.ReactCurrentBatchConfig,ea=!0;function cf(e,t,n,r){var a=D,l=dn.transition;dn.transition=null;try{D=1,Ss(e,t,n,r)}finally{D=a,dn.transition=l}}function df(e,t,n,r){var a=D,l=dn.transition;dn.transition=null;try{D=4,Ss(e,t,n,r)}finally{D=a,dn.transition=l}}function Ss(e,t,n,r){if(ea){var a=Ml(e,t,n,r);if(a===null)tl(e,t,r,ta,n),No(e,r);else if(of(a,e,t,n,r))r.stopPropagation();else if(No(e,r),t&4&&-1<sf.indexOf(e)){for(;a!==null;){var l=hr(a);if(l!==null&&Cu(l),l=Ml(e,t,n,r),l===null&&tl(e,t,r,ta,n),l===a)break;a=l}a!==null&&r.stopPropagation()}else tl(e,t,r,null,n)}}var ta=null;function Ml(e,t,n,r){if(ta=null,e=ys(r),e=It(e),e!==null)if(t=Wt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=xu(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return ta=e,null}function Pu(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Xd()){case bs:return 1;case bu:return 4;case qr:case qd:return 16;case wu:return 536870912;default:return 16}default:return 16}}var ct=null,Cs=null,Ur=null;function Lu(){if(Ur)return Ur;var e,t=Cs,n=t.length,r,a="value"in ct?ct.value:ct.textContent,l=a.length;for(e=0;e<n&&t[e]===a[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===a[l-r];r++);return Ur=a.slice(e,1<r?1-r:void 0)}function Br(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Nr(){return!0}function Po(){return!1}function Ee(e){function t(n,r,a,l,s){this._reactName=n,this._targetInst=a,this.type=r,this.nativeEvent=l,this.target=s,this.currentTarget=null;for(var o in e)e.hasOwnProperty(o)&&(n=e[o],this[o]=n?n(l):l[o]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?Nr:Po,this.isPropagationStopped=Po,this}return Y(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Nr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Nr)},persist:function(){},isPersistent:Nr}),t}var kn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Es=Ee(kn),mr=Y({},kn,{view:0,detail:0}),ff=Ee(mr),Qa,Ya,Ln,Sa=Y({},mr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:_s,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ln&&(Ln&&e.type==="mousemove"?(Qa=e.screenX-Ln.screenX,Ya=e.screenY-Ln.screenY):Ya=Qa=0,Ln=e),Qa)},movementY:function(e){return"movementY"in e?e.movementY:Ya}}),Lo=Ee(Sa),pf=Y({},Sa,{dataTransfer:0}),mf=Ee(pf),hf=Y({},mr,{relatedTarget:0}),Ka=Ee(hf),xf=Y({},kn,{animationName:0,elapsedTime:0,pseudoElement:0}),gf=Ee(xf),vf=Y({},kn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),yf=Ee(vf),bf=Y({},kn,{data:0}),To=Ee(bf),wf={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},kf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Sf={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Cf(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Sf[e])?!!t[e]:!1}function _s(){return Cf}var Ef=Y({},mr,{key:function(e){if(e.key){var t=wf[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Br(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?kf[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:_s,charCode:function(e){return e.type==="keypress"?Br(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Br(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),_f=Ee(Ef),Nf=Y({},Sa,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Mo=Ee(Nf),jf=Y({},mr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:_s}),Pf=Ee(jf),Lf=Y({},kn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Tf=Ee(Lf),Mf=Y({},Sa,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Af=Ee(Mf),If=[9,13,27,32],Ns=qe&&"CompositionEvent"in window,Un=null;qe&&"documentMode"in document&&(Un=document.documentMode);var Rf=qe&&"TextEvent"in window&&!Un,Tu=qe&&(!Ns||Un&&8<Un&&11>=Un),Ao=" ",Io=!1;function Mu(e,t){switch(e){case"keyup":return If.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Au(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Xt=!1;function zf(e,t){switch(e){case"compositionend":return Au(t);case"keypress":return t.which!==32?null:(Io=!0,Ao);case"textInput":return e=t.data,e===Ao&&Io?null:e;default:return null}}function Ff(e,t){if(Xt)return e==="compositionend"||!Ns&&Mu(e,t)?(e=Lu(),Ur=Cs=ct=null,Xt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Tu&&t.locale!=="ko"?null:t.data;default:return null}}var Of={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ro(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Of[e.type]:t==="textarea"}function Iu(e,t,n,r){du(r),t=na(t,"onChange"),0<t.length&&(n=new Es("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Bn=null,Zn=null;function Df(e){Wu(e,0)}function Ca(e){var t=en(e);if(au(t))return e}function Uf(e,t){if(e==="change")return t}var Ru=!1;if(qe){var Ja;if(qe){var Ga="oninput"in document;if(!Ga){var zo=document.createElement("div");zo.setAttribute("oninput","return;"),Ga=typeof zo.oninput=="function"}Ja=Ga}else Ja=!1;Ru=Ja&&(!document.documentMode||9<document.documentMode)}function Fo(){Bn&&(Bn.detachEvent("onpropertychange",zu),Zn=Bn=null)}function zu(e){if(e.propertyName==="value"&&Ca(Zn)){var t=[];Iu(t,Zn,e,ys(e)),hu(Df,t)}}function Bf(e,t,n){e==="focusin"?(Fo(),Bn=t,Zn=n,Bn.attachEvent("onpropertychange",zu)):e==="focusout"&&Fo()}function $f(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ca(Zn)}function Vf(e,t){if(e==="click")return Ca(t)}function Hf(e,t){if(e==="input"||e==="change")return Ca(t)}function Wf(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Oe=typeof Object.is=="function"?Object.is:Wf;function er(e,t){if(Oe(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var a=n[r];if(!ml.call(t,a)||!Oe(e[a],t[a]))return!1}return!0}function Oo(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Do(e,t){var n=Oo(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Oo(n)}}function Fu(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Fu(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Ou(){for(var e=window,t=Jr();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Jr(e.document)}return t}function js(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Qf(e){var t=Ou(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Fu(n.ownerDocument.documentElement,n)){if(r!==null&&js(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var a=n.textContent.length,l=Math.min(r.start,a);r=r.end===void 0?l:Math.min(r.end,a),!e.extend&&l>r&&(a=r,r=l,l=a),a=Do(n,l);var s=Do(n,r);a&&s&&(e.rangeCount!==1||e.anchorNode!==a.node||e.anchorOffset!==a.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(a.node,a.offset),e.removeAllRanges(),l>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Yf=qe&&"documentMode"in document&&11>=document.documentMode,qt=null,Al=null,$n=null,Il=!1;function Uo(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Il||qt==null||qt!==Jr(r)||(r=qt,"selectionStart"in r&&js(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),$n&&er($n,r)||($n=r,r=na(Al,"onSelect"),0<r.length&&(t=new Es("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=qt)))}function jr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Zt={animationend:jr("Animation","AnimationEnd"),animationiteration:jr("Animation","AnimationIteration"),animationstart:jr("Animation","AnimationStart"),transitionend:jr("Transition","TransitionEnd")},Xa={},Du={};qe&&(Du=document.createElement("div").style,"AnimationEvent"in window||(delete Zt.animationend.animation,delete Zt.animationiteration.animation,delete Zt.animationstart.animation),"TransitionEvent"in window||delete Zt.transitionend.transition);function Ea(e){if(Xa[e])return Xa[e];if(!Zt[e])return e;var t=Zt[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Du)return Xa[e]=t[n];return e}var Uu=Ea("animationend"),Bu=Ea("animationiteration"),$u=Ea("animationstart"),Vu=Ea("transitionend"),Hu=new Map,Bo="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ct(e,t){Hu.set(e,t),Ht(t,[e])}for(var qa=0;qa<Bo.length;qa++){var Za=Bo[qa],Kf=Za.toLowerCase(),Jf=Za[0].toUpperCase()+Za.slice(1);Ct(Kf,"on"+Jf)}Ct(Uu,"onAnimationEnd");Ct(Bu,"onAnimationIteration");Ct($u,"onAnimationStart");Ct("dblclick","onDoubleClick");Ct("focusin","onFocus");Ct("focusout","onBlur");Ct(Vu,"onTransitionEnd");mn("onMouseEnter",["mouseout","mouseover"]);mn("onMouseLeave",["mouseout","mouseover"]);mn("onPointerEnter",["pointerout","pointerover"]);mn("onPointerLeave",["pointerout","pointerover"]);Ht("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ht("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ht("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ht("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ht("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ht("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Fn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Gf=new Set("cancel close invalid load scroll toggle".split(" ").concat(Fn));function $o(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Yd(r,t,void 0,e),e.currentTarget=null}function Wu(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],a=r.event;r=r.listeners;e:{var l=void 0;if(t)for(var s=r.length-1;0<=s;s--){var o=r[s],i=o.instance,u=o.currentTarget;if(o=o.listener,i!==l&&a.isPropagationStopped())break e;$o(a,o,u),l=i}else for(s=0;s<r.length;s++){if(o=r[s],i=o.instance,u=o.currentTarget,o=o.listener,i!==l&&a.isPropagationStopped())break e;$o(a,o,u),l=i}}}if(Xr)throw e=Pl,Xr=!1,Pl=null,e}function B(e,t){var n=t[Dl];n===void 0&&(n=t[Dl]=new Set);var r=e+"__bubble";n.has(r)||(Qu(t,e,2,!1),n.add(r))}function el(e,t,n){var r=0;t&&(r|=4),Qu(n,e,r,t)}var Pr="_reactListening"+Math.random().toString(36).slice(2);function tr(e){if(!e[Pr]){e[Pr]=!0,Zi.forEach(function(n){n!=="selectionchange"&&(Gf.has(n)||el(n,!1,e),el(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Pr]||(t[Pr]=!0,el("selectionchange",!1,t))}}function Qu(e,t,n,r){switch(Pu(t)){case 1:var a=cf;break;case 4:a=df;break;default:a=Ss}n=a.bind(null,t,n,e),a=void 0,!jl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(a=!0),r?a!==void 0?e.addEventListener(t,n,{capture:!0,passive:a}):e.addEventListener(t,n,!0):a!==void 0?e.addEventListener(t,n,{passive:a}):e.addEventListener(t,n,!1)}function tl(e,t,n,r,a){var l=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var o=r.stateNode.containerInfo;if(o===a||o.nodeType===8&&o.parentNode===a)break;if(s===4)for(s=r.return;s!==null;){var i=s.tag;if((i===3||i===4)&&(i=s.stateNode.containerInfo,i===a||i.nodeType===8&&i.parentNode===a))return;s=s.return}for(;o!==null;){if(s=It(o),s===null)return;if(i=s.tag,i===5||i===6){r=l=s;continue e}o=o.parentNode}}r=r.return}hu(function(){var u=l,h=ys(n),p=[];e:{var f=Hu.get(e);if(f!==void 0){var g=Es,v=e;switch(e){case"keypress":if(Br(n)===0)break e;case"keydown":case"keyup":g=_f;break;case"focusin":v="focus",g=Ka;break;case"focusout":v="blur",g=Ka;break;case"beforeblur":case"afterblur":g=Ka;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Lo;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=mf;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=Pf;break;case Uu:case Bu:case $u:g=gf;break;case Vu:g=Tf;break;case"scroll":g=ff;break;case"wheel":g=Af;break;case"copy":case"cut":case"paste":g=yf;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=Mo}var y=(t&4)!==0,b=!y&&e==="scroll",d=y?f!==null?f+"Capture":null:f;y=[];for(var c=u,m;c!==null;){m=c;var w=m.stateNode;if(m.tag===5&&w!==null&&(m=w,d!==null&&(w=Jn(c,d),w!=null&&y.push(nr(c,w,m)))),b)break;c=c.return}0<y.length&&(f=new g(f,v,null,n,h),p.push({event:f,listeners:y}))}}if(!(t&7)){e:{if(f=e==="mouseover"||e==="pointerover",g=e==="mouseout"||e==="pointerout",f&&n!==_l&&(v=n.relatedTarget||n.fromElement)&&(It(v)||v[Ze]))break e;if((g||f)&&(f=h.window===h?h:(f=h.ownerDocument)?f.defaultView||f.parentWindow:window,g?(v=n.relatedTarget||n.toElement,g=u,v=v?It(v):null,v!==null&&(b=Wt(v),v!==b||v.tag!==5&&v.tag!==6)&&(v=null)):(g=null,v=u),g!==v)){if(y=Lo,w="onMouseLeave",d="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(y=Mo,w="onPointerLeave",d="onPointerEnter",c="pointer"),b=g==null?f:en(g),m=v==null?f:en(v),f=new y(w,c+"leave",g,n,h),f.target=b,f.relatedTarget=m,w=null,It(h)===u&&(y=new y(d,c+"enter",v,n,h),y.target=m,y.relatedTarget=b,w=y),b=w,g&&v)t:{for(y=g,d=v,c=0,m=y;m;m=Yt(m))c++;for(m=0,w=d;w;w=Yt(w))m++;for(;0<c-m;)y=Yt(y),c--;for(;0<m-c;)d=Yt(d),m--;for(;c--;){if(y===d||d!==null&&y===d.alternate)break t;y=Yt(y),d=Yt(d)}y=null}else y=null;g!==null&&Vo(p,f,g,y,!1),v!==null&&b!==null&&Vo(p,b,v,y,!0)}}e:{if(f=u?en(u):window,g=f.nodeName&&f.nodeName.toLowerCase(),g==="select"||g==="input"&&f.type==="file")var k=Uf;else if(Ro(f))if(Ru)k=Hf;else{k=$f;var _=Bf}else(g=f.nodeName)&&g.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(k=Vf);if(k&&(k=k(e,u))){Iu(p,k,n,h);break e}_&&_(e,f,u),e==="focusout"&&(_=f._wrapperState)&&_.controlled&&f.type==="number"&&wl(f,"number",f.value)}switch(_=u?en(u):window,e){case"focusin":(Ro(_)||_.contentEditable==="true")&&(qt=_,Al=u,$n=null);break;case"focusout":$n=Al=qt=null;break;case"mousedown":Il=!0;break;case"contextmenu":case"mouseup":case"dragend":Il=!1,Uo(p,n,h);break;case"selectionchange":if(Yf)break;case"keydown":case"keyup":Uo(p,n,h)}var C;if(Ns)e:{switch(e){case"compositionstart":var N="onCompositionStart";break e;case"compositionend":N="onCompositionEnd";break e;case"compositionupdate":N="onCompositionUpdate";break e}N=void 0}else Xt?Mu(e,n)&&(N="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(N="onCompositionStart");N&&(Tu&&n.locale!=="ko"&&(Xt||N!=="onCompositionStart"?N==="onCompositionEnd"&&Xt&&(C=Lu()):(ct=h,Cs="value"in ct?ct.value:ct.textContent,Xt=!0)),_=na(u,N),0<_.length&&(N=new To(N,e,null,n,h),p.push({event:N,listeners:_}),C?N.data=C:(C=Au(n),C!==null&&(N.data=C)))),(C=Rf?zf(e,n):Ff(e,n))&&(u=na(u,"onBeforeInput"),0<u.length&&(h=new To("onBeforeInput","beforeinput",null,n,h),p.push({event:h,listeners:u}),h.data=C))}Wu(p,t)})}function nr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function na(e,t){for(var n=t+"Capture",r=[];e!==null;){var a=e,l=a.stateNode;a.tag===5&&l!==null&&(a=l,l=Jn(e,n),l!=null&&r.unshift(nr(e,l,a)),l=Jn(e,t),l!=null&&r.push(nr(e,l,a))),e=e.return}return r}function Yt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Vo(e,t,n,r,a){for(var l=t._reactName,s=[];n!==null&&n!==r;){var o=n,i=o.alternate,u=o.stateNode;if(i!==null&&i===r)break;o.tag===5&&u!==null&&(o=u,a?(i=Jn(n,l),i!=null&&s.unshift(nr(n,i,o))):a||(i=Jn(n,l),i!=null&&s.push(nr(n,i,o)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var Xf=/\r\n?/g,qf=/\u0000|\uFFFD/g;function Ho(e){return(typeof e=="string"?e:""+e).replace(Xf,`
`).replace(qf,"")}function Lr(e,t,n){if(t=Ho(t),Ho(e)!==t&&n)throw Error(S(425))}function ra(){}var Rl=null,zl=null;function Fl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ol=typeof setTimeout=="function"?setTimeout:void 0,Zf=typeof clearTimeout=="function"?clearTimeout:void 0,Wo=typeof Promise=="function"?Promise:void 0,ep=typeof queueMicrotask=="function"?queueMicrotask:typeof Wo<"u"?function(e){return Wo.resolve(null).then(e).catch(tp)}:Ol;function tp(e){setTimeout(function(){throw e})}function nl(e,t){var n=t,r=0;do{var a=n.nextSibling;if(e.removeChild(n),a&&a.nodeType===8)if(n=a.data,n==="/$"){if(r===0){e.removeChild(a),qn(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=a}while(n);qn(t)}function xt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Qo(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Sn=Math.random().toString(36).slice(2),Ve="__reactFiber$"+Sn,rr="__reactProps$"+Sn,Ze="__reactContainer$"+Sn,Dl="__reactEvents$"+Sn,np="__reactListeners$"+Sn,rp="__reactHandles$"+Sn;function It(e){var t=e[Ve];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ze]||n[Ve]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Qo(e);e!==null;){if(n=e[Ve])return n;e=Qo(e)}return t}e=n,n=e.parentNode}return null}function hr(e){return e=e[Ve]||e[Ze],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function en(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(S(33))}function _a(e){return e[rr]||null}var Ul=[],tn=-1;function Et(e){return{current:e}}function $(e){0>tn||(e.current=Ul[tn],Ul[tn]=null,tn--)}function U(e,t){tn++,Ul[tn]=e.current,e.current=t}var St={},ce=Et(St),ge=Et(!1),Dt=St;function hn(e,t){var n=e.type.contextTypes;if(!n)return St;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var a={},l;for(l in n)a[l]=t[l];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=a),a}function ve(e){return e=e.childContextTypes,e!=null}function aa(){$(ge),$(ce)}function Yo(e,t,n){if(ce.current!==St)throw Error(S(168));U(ce,t),U(ge,n)}function Yu(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var a in r)if(!(a in t))throw Error(S(108,Ud(e)||"Unknown",a));return Y({},n,r)}function la(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||St,Dt=ce.current,U(ce,e),U(ge,ge.current),!0}function Ko(e,t,n){var r=e.stateNode;if(!r)throw Error(S(169));n?(e=Yu(e,t,Dt),r.__reactInternalMemoizedMergedChildContext=e,$(ge),$(ce),U(ce,e)):$(ge),U(ge,n)}var Ye=null,Na=!1,rl=!1;function Ku(e){Ye===null?Ye=[e]:Ye.push(e)}function ap(e){Na=!0,Ku(e)}function _t(){if(!rl&&Ye!==null){rl=!0;var e=0,t=D;try{var n=Ye;for(D=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Ye=null,Na=!1}catch(a){throw Ye!==null&&(Ye=Ye.slice(e+1)),yu(bs,_t),a}finally{D=t,rl=!1}}return null}var nn=[],rn=0,sa=null,oa=0,_e=[],Ne=0,Ut=null,Je=1,Ge="";function Tt(e,t){nn[rn++]=oa,nn[rn++]=sa,sa=e,oa=t}function Ju(e,t,n){_e[Ne++]=Je,_e[Ne++]=Ge,_e[Ne++]=Ut,Ut=e;var r=Je;e=Ge;var a=32-ze(r)-1;r&=~(1<<a),n+=1;var l=32-ze(t)+a;if(30<l){var s=a-a%5;l=(r&(1<<s)-1).toString(32),r>>=s,a-=s,Je=1<<32-ze(t)+a|n<<a|r,Ge=l+e}else Je=1<<l|n<<a|r,Ge=e}function Ps(e){e.return!==null&&(Tt(e,1),Ju(e,1,0))}function Ls(e){for(;e===sa;)sa=nn[--rn],nn[rn]=null,oa=nn[--rn],nn[rn]=null;for(;e===Ut;)Ut=_e[--Ne],_e[Ne]=null,Ge=_e[--Ne],_e[Ne]=null,Je=_e[--Ne],_e[Ne]=null}var ke=null,we=null,V=!1,Re=null;function Gu(e,t){var n=je(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Jo(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ke=e,we=xt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ke=e,we=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Ut!==null?{id:Je,overflow:Ge}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=je(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,ke=e,we=null,!0):!1;default:return!1}}function Bl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function $l(e){if(V){var t=we;if(t){var n=t;if(!Jo(e,t)){if(Bl(e))throw Error(S(418));t=xt(n.nextSibling);var r=ke;t&&Jo(e,t)?Gu(r,n):(e.flags=e.flags&-4097|2,V=!1,ke=e)}}else{if(Bl(e))throw Error(S(418));e.flags=e.flags&-4097|2,V=!1,ke=e}}}function Go(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ke=e}function Tr(e){if(e!==ke)return!1;if(!V)return Go(e),V=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Fl(e.type,e.memoizedProps)),t&&(t=we)){if(Bl(e))throw Xu(),Error(S(418));for(;t;)Gu(e,t),t=xt(t.nextSibling)}if(Go(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(S(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){we=xt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}we=null}}else we=ke?xt(e.stateNode.nextSibling):null;return!0}function Xu(){for(var e=we;e;)e=xt(e.nextSibling)}function xn(){we=ke=null,V=!1}function Ts(e){Re===null?Re=[e]:Re.push(e)}var lp=nt.ReactCurrentBatchConfig;function Tn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(S(309));var r=n.stateNode}if(!r)throw Error(S(147,e));var a=r,l=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===l?t.ref:(t=function(s){var o=a.refs;s===null?delete o[l]:o[l]=s},t._stringRef=l,t)}if(typeof e!="string")throw Error(S(284));if(!n._owner)throw Error(S(290,e))}return e}function Mr(e,t){throw e=Object.prototype.toString.call(t),Error(S(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Xo(e){var t=e._init;return t(e._payload)}function qu(e){function t(d,c){if(e){var m=d.deletions;m===null?(d.deletions=[c],d.flags|=16):m.push(c)}}function n(d,c){if(!e)return null;for(;c!==null;)t(d,c),c=c.sibling;return null}function r(d,c){for(d=new Map;c!==null;)c.key!==null?d.set(c.key,c):d.set(c.index,c),c=c.sibling;return d}function a(d,c){return d=bt(d,c),d.index=0,d.sibling=null,d}function l(d,c,m){return d.index=m,e?(m=d.alternate,m!==null?(m=m.index,m<c?(d.flags|=2,c):m):(d.flags|=2,c)):(d.flags|=1048576,c)}function s(d){return e&&d.alternate===null&&(d.flags|=2),d}function o(d,c,m,w){return c===null||c.tag!==6?(c=cl(m,d.mode,w),c.return=d,c):(c=a(c,m),c.return=d,c)}function i(d,c,m,w){var k=m.type;return k===Gt?h(d,c,m.props.children,w,m.key):c!==null&&(c.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===st&&Xo(k)===c.type)?(w=a(c,m.props),w.ref=Tn(d,c,m),w.return=d,w):(w=Kr(m.type,m.key,m.props,null,d.mode,w),w.ref=Tn(d,c,m),w.return=d,w)}function u(d,c,m,w){return c===null||c.tag!==4||c.stateNode.containerInfo!==m.containerInfo||c.stateNode.implementation!==m.implementation?(c=dl(m,d.mode,w),c.return=d,c):(c=a(c,m.children||[]),c.return=d,c)}function h(d,c,m,w,k){return c===null||c.tag!==7?(c=Ot(m,d.mode,w,k),c.return=d,c):(c=a(c,m),c.return=d,c)}function p(d,c,m){if(typeof c=="string"&&c!==""||typeof c=="number")return c=cl(""+c,d.mode,m),c.return=d,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case wr:return m=Kr(c.type,c.key,c.props,null,d.mode,m),m.ref=Tn(d,null,c),m.return=d,m;case Jt:return c=dl(c,d.mode,m),c.return=d,c;case st:var w=c._init;return p(d,w(c._payload),m)}if(Rn(c)||_n(c))return c=Ot(c,d.mode,m,null),c.return=d,c;Mr(d,c)}return null}function f(d,c,m,w){var k=c!==null?c.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return k!==null?null:o(d,c,""+m,w);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case wr:return m.key===k?i(d,c,m,w):null;case Jt:return m.key===k?u(d,c,m,w):null;case st:return k=m._init,f(d,c,k(m._payload),w)}if(Rn(m)||_n(m))return k!==null?null:h(d,c,m,w,null);Mr(d,m)}return null}function g(d,c,m,w,k){if(typeof w=="string"&&w!==""||typeof w=="number")return d=d.get(m)||null,o(c,d,""+w,k);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case wr:return d=d.get(w.key===null?m:w.key)||null,i(c,d,w,k);case Jt:return d=d.get(w.key===null?m:w.key)||null,u(c,d,w,k);case st:var _=w._init;return g(d,c,m,_(w._payload),k)}if(Rn(w)||_n(w))return d=d.get(m)||null,h(c,d,w,k,null);Mr(c,w)}return null}function v(d,c,m,w){for(var k=null,_=null,C=c,N=c=0,z=null;C!==null&&N<m.length;N++){C.index>N?(z=C,C=null):z=C.sibling;var L=f(d,C,m[N],w);if(L===null){C===null&&(C=z);break}e&&C&&L.alternate===null&&t(d,C),c=l(L,c,N),_===null?k=L:_.sibling=L,_=L,C=z}if(N===m.length)return n(d,C),V&&Tt(d,N),k;if(C===null){for(;N<m.length;N++)C=p(d,m[N],w),C!==null&&(c=l(C,c,N),_===null?k=C:_.sibling=C,_=C);return V&&Tt(d,N),k}for(C=r(d,C);N<m.length;N++)z=g(C,d,N,m[N],w),z!==null&&(e&&z.alternate!==null&&C.delete(z.key===null?N:z.key),c=l(z,c,N),_===null?k=z:_.sibling=z,_=z);return e&&C.forEach(function(F){return t(d,F)}),V&&Tt(d,N),k}function y(d,c,m,w){var k=_n(m);if(typeof k!="function")throw Error(S(150));if(m=k.call(m),m==null)throw Error(S(151));for(var _=k=null,C=c,N=c=0,z=null,L=m.next();C!==null&&!L.done;N++,L=m.next()){C.index>N?(z=C,C=null):z=C.sibling;var F=f(d,C,L.value,w);if(F===null){C===null&&(C=z);break}e&&C&&F.alternate===null&&t(d,C),c=l(F,c,N),_===null?k=F:_.sibling=F,_=F,C=z}if(L.done)return n(d,C),V&&Tt(d,N),k;if(C===null){for(;!L.done;N++,L=m.next())L=p(d,L.value,w),L!==null&&(c=l(L,c,N),_===null?k=L:_.sibling=L,_=L);return V&&Tt(d,N),k}for(C=r(d,C);!L.done;N++,L=m.next())L=g(C,d,N,L.value,w),L!==null&&(e&&L.alternate!==null&&C.delete(L.key===null?N:L.key),c=l(L,c,N),_===null?k=L:_.sibling=L,_=L);return e&&C.forEach(function(q){return t(d,q)}),V&&Tt(d,N),k}function b(d,c,m,w){if(typeof m=="object"&&m!==null&&m.type===Gt&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case wr:e:{for(var k=m.key,_=c;_!==null;){if(_.key===k){if(k=m.type,k===Gt){if(_.tag===7){n(d,_.sibling),c=a(_,m.props.children),c.return=d,d=c;break e}}else if(_.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===st&&Xo(k)===_.type){n(d,_.sibling),c=a(_,m.props),c.ref=Tn(d,_,m),c.return=d,d=c;break e}n(d,_);break}else t(d,_);_=_.sibling}m.type===Gt?(c=Ot(m.props.children,d.mode,w,m.key),c.return=d,d=c):(w=Kr(m.type,m.key,m.props,null,d.mode,w),w.ref=Tn(d,c,m),w.return=d,d=w)}return s(d);case Jt:e:{for(_=m.key;c!==null;){if(c.key===_)if(c.tag===4&&c.stateNode.containerInfo===m.containerInfo&&c.stateNode.implementation===m.implementation){n(d,c.sibling),c=a(c,m.children||[]),c.return=d,d=c;break e}else{n(d,c);break}else t(d,c);c=c.sibling}c=dl(m,d.mode,w),c.return=d,d=c}return s(d);case st:return _=m._init,b(d,c,_(m._payload),w)}if(Rn(m))return v(d,c,m,w);if(_n(m))return y(d,c,m,w);Mr(d,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,c!==null&&c.tag===6?(n(d,c.sibling),c=a(c,m),c.return=d,d=c):(n(d,c),c=cl(m,d.mode,w),c.return=d,d=c),s(d)):n(d,c)}return b}var gn=qu(!0),Zu=qu(!1),ia=Et(null),ua=null,an=null,Ms=null;function As(){Ms=an=ua=null}function Is(e){var t=ia.current;$(ia),e._currentValue=t}function Vl(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function fn(e,t){ua=e,Ms=an=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(xe=!0),e.firstContext=null)}function Le(e){var t=e._currentValue;if(Ms!==e)if(e={context:e,memoizedValue:t,next:null},an===null){if(ua===null)throw Error(S(308));an=e,ua.dependencies={lanes:0,firstContext:e}}else an=an.next=e;return t}var Rt=null;function Rs(e){Rt===null?Rt=[e]:Rt.push(e)}function ec(e,t,n,r){var a=t.interleaved;return a===null?(n.next=n,Rs(t)):(n.next=a.next,a.next=n),t.interleaved=n,et(e,r)}function et(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var ot=!1;function zs(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function tc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Xe(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function gt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,R&2){var a=r.pending;return a===null?t.next=t:(t.next=a.next,a.next=t),r.pending=t,et(e,n)}return a=r.interleaved,a===null?(t.next=t,Rs(r)):(t.next=a.next,a.next=t),r.interleaved=t,et(e,n)}function $r(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ws(e,n)}}function qo(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var a=null,l=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};l===null?a=l=s:l=l.next=s,n=n.next}while(n!==null);l===null?a=l=t:l=l.next=t}else a=l=t;n={baseState:r.baseState,firstBaseUpdate:a,lastBaseUpdate:l,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function ca(e,t,n,r){var a=e.updateQueue;ot=!1;var l=a.firstBaseUpdate,s=a.lastBaseUpdate,o=a.shared.pending;if(o!==null){a.shared.pending=null;var i=o,u=i.next;i.next=null,s===null?l=u:s.next=u,s=i;var h=e.alternate;h!==null&&(h=h.updateQueue,o=h.lastBaseUpdate,o!==s&&(o===null?h.firstBaseUpdate=u:o.next=u,h.lastBaseUpdate=i))}if(l!==null){var p=a.baseState;s=0,h=u=i=null,o=l;do{var f=o.lane,g=o.eventTime;if((r&f)===f){h!==null&&(h=h.next={eventTime:g,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var v=e,y=o;switch(f=t,g=n,y.tag){case 1:if(v=y.payload,typeof v=="function"){p=v.call(g,p,f);break e}p=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=y.payload,f=typeof v=="function"?v.call(g,p,f):v,f==null)break e;p=Y({},p,f);break e;case 2:ot=!0}}o.callback!==null&&o.lane!==0&&(e.flags|=64,f=a.effects,f===null?a.effects=[o]:f.push(o))}else g={eventTime:g,lane:f,tag:o.tag,payload:o.payload,callback:o.callback,next:null},h===null?(u=h=g,i=p):h=h.next=g,s|=f;if(o=o.next,o===null){if(o=a.shared.pending,o===null)break;f=o,o=f.next,f.next=null,a.lastBaseUpdate=f,a.shared.pending=null}}while(!0);if(h===null&&(i=p),a.baseState=i,a.firstBaseUpdate=u,a.lastBaseUpdate=h,t=a.shared.interleaved,t!==null){a=t;do s|=a.lane,a=a.next;while(a!==t)}else l===null&&(a.shared.lanes=0);$t|=s,e.lanes=s,e.memoizedState=p}}function Zo(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],a=r.callback;if(a!==null){if(r.callback=null,r=n,typeof a!="function")throw Error(S(191,a));a.call(r)}}}var xr={},We=Et(xr),ar=Et(xr),lr=Et(xr);function zt(e){if(e===xr)throw Error(S(174));return e}function Fs(e,t){switch(U(lr,t),U(ar,e),U(We,xr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Sl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Sl(t,e)}$(We),U(We,t)}function vn(){$(We),$(ar),$(lr)}function nc(e){zt(lr.current);var t=zt(We.current),n=Sl(t,e.type);t!==n&&(U(ar,e),U(We,n))}function Os(e){ar.current===e&&($(We),$(ar))}var W=Et(0);function da(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var al=[];function Ds(){for(var e=0;e<al.length;e++)al[e]._workInProgressVersionPrimary=null;al.length=0}var Vr=nt.ReactCurrentDispatcher,ll=nt.ReactCurrentBatchConfig,Bt=0,Q=null,Z=null,ne=null,fa=!1,Vn=!1,sr=0,sp=0;function oe(){throw Error(S(321))}function Us(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Oe(e[n],t[n]))return!1;return!0}function Bs(e,t,n,r,a,l){if(Bt=l,Q=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Vr.current=e===null||e.memoizedState===null?cp:dp,e=n(r,a),Vn){l=0;do{if(Vn=!1,sr=0,25<=l)throw Error(S(301));l+=1,ne=Z=null,t.updateQueue=null,Vr.current=fp,e=n(r,a)}while(Vn)}if(Vr.current=pa,t=Z!==null&&Z.next!==null,Bt=0,ne=Z=Q=null,fa=!1,t)throw Error(S(300));return e}function $s(){var e=sr!==0;return sr=0,e}function $e(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ne===null?Q.memoizedState=ne=e:ne=ne.next=e,ne}function Te(){if(Z===null){var e=Q.alternate;e=e!==null?e.memoizedState:null}else e=Z.next;var t=ne===null?Q.memoizedState:ne.next;if(t!==null)ne=t,Z=e;else{if(e===null)throw Error(S(310));Z=e,e={memoizedState:Z.memoizedState,baseState:Z.baseState,baseQueue:Z.baseQueue,queue:Z.queue,next:null},ne===null?Q.memoizedState=ne=e:ne=ne.next=e}return ne}function or(e,t){return typeof t=="function"?t(e):t}function sl(e){var t=Te(),n=t.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=e;var r=Z,a=r.baseQueue,l=n.pending;if(l!==null){if(a!==null){var s=a.next;a.next=l.next,l.next=s}r.baseQueue=a=l,n.pending=null}if(a!==null){l=a.next,r=r.baseState;var o=s=null,i=null,u=l;do{var h=u.lane;if((Bt&h)===h)i!==null&&(i=i.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var p={lane:h,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};i===null?(o=i=p,s=r):i=i.next=p,Q.lanes|=h,$t|=h}u=u.next}while(u!==null&&u!==l);i===null?s=r:i.next=o,Oe(r,t.memoizedState)||(xe=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=i,n.lastRenderedState=r}if(e=n.interleaved,e!==null){a=e;do l=a.lane,Q.lanes|=l,$t|=l,a=a.next;while(a!==e)}else a===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function ol(e){var t=Te(),n=t.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,l=t.memoizedState;if(a!==null){n.pending=null;var s=a=a.next;do l=e(l,s.action),s=s.next;while(s!==a);Oe(l,t.memoizedState)||(xe=!0),t.memoizedState=l,t.baseQueue===null&&(t.baseState=l),n.lastRenderedState=l}return[l,r]}function rc(){}function ac(e,t){var n=Q,r=Te(),a=t(),l=!Oe(r.memoizedState,a);if(l&&(r.memoizedState=a,xe=!0),r=r.queue,Vs(oc.bind(null,n,r,e),[e]),r.getSnapshot!==t||l||ne!==null&&ne.memoizedState.tag&1){if(n.flags|=2048,ir(9,sc.bind(null,n,r,a,t),void 0,null),re===null)throw Error(S(349));Bt&30||lc(n,t,a)}return a}function lc(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Q.updateQueue,t===null?(t={lastEffect:null,stores:null},Q.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function sc(e,t,n,r){t.value=n,t.getSnapshot=r,ic(t)&&uc(e)}function oc(e,t,n){return n(function(){ic(t)&&uc(e)})}function ic(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Oe(e,n)}catch{return!0}}function uc(e){var t=et(e,1);t!==null&&Fe(t,e,1,-1)}function ei(e){var t=$e();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:or,lastRenderedState:e},t.queue=e,e=e.dispatch=up.bind(null,Q,e),[t.memoizedState,e]}function ir(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Q.updateQueue,t===null?(t={lastEffect:null,stores:null},Q.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function cc(){return Te().memoizedState}function Hr(e,t,n,r){var a=$e();Q.flags|=e,a.memoizedState=ir(1|t,n,void 0,r===void 0?null:r)}function ja(e,t,n,r){var a=Te();r=r===void 0?null:r;var l=void 0;if(Z!==null){var s=Z.memoizedState;if(l=s.destroy,r!==null&&Us(r,s.deps)){a.memoizedState=ir(t,n,l,r);return}}Q.flags|=e,a.memoizedState=ir(1|t,n,l,r)}function ti(e,t){return Hr(8390656,8,e,t)}function Vs(e,t){return ja(2048,8,e,t)}function dc(e,t){return ja(4,2,e,t)}function fc(e,t){return ja(4,4,e,t)}function pc(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function mc(e,t,n){return n=n!=null?n.concat([e]):null,ja(4,4,pc.bind(null,t,e),n)}function Hs(){}function hc(e,t){var n=Te();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Us(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function xc(e,t){var n=Te();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Us(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function gc(e,t,n){return Bt&21?(Oe(n,t)||(n=ku(),Q.lanes|=n,$t|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,xe=!0),e.memoizedState=n)}function op(e,t){var n=D;D=n!==0&&4>n?n:4,e(!0);var r=ll.transition;ll.transition={};try{e(!1),t()}finally{D=n,ll.transition=r}}function vc(){return Te().memoizedState}function ip(e,t,n){var r=yt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},yc(e))bc(t,n);else if(n=ec(e,t,n,r),n!==null){var a=fe();Fe(n,e,r,a),wc(n,t,r)}}function up(e,t,n){var r=yt(e),a={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(yc(e))bc(t,a);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=t.lastRenderedReducer,l!==null))try{var s=t.lastRenderedState,o=l(s,n);if(a.hasEagerState=!0,a.eagerState=o,Oe(o,s)){var i=t.interleaved;i===null?(a.next=a,Rs(t)):(a.next=i.next,i.next=a),t.interleaved=a;return}}catch{}finally{}n=ec(e,t,a,r),n!==null&&(a=fe(),Fe(n,e,r,a),wc(n,t,r))}}function yc(e){var t=e.alternate;return e===Q||t!==null&&t===Q}function bc(e,t){Vn=fa=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function wc(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ws(e,n)}}var pa={readContext:Le,useCallback:oe,useContext:oe,useEffect:oe,useImperativeHandle:oe,useInsertionEffect:oe,useLayoutEffect:oe,useMemo:oe,useReducer:oe,useRef:oe,useState:oe,useDebugValue:oe,useDeferredValue:oe,useTransition:oe,useMutableSource:oe,useSyncExternalStore:oe,useId:oe,unstable_isNewReconciler:!1},cp={readContext:Le,useCallback:function(e,t){return $e().memoizedState=[e,t===void 0?null:t],e},useContext:Le,useEffect:ti,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Hr(4194308,4,pc.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Hr(4194308,4,e,t)},useInsertionEffect:function(e,t){return Hr(4,2,e,t)},useMemo:function(e,t){var n=$e();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=$e();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=ip.bind(null,Q,e),[r.memoizedState,e]},useRef:function(e){var t=$e();return e={current:e},t.memoizedState=e},useState:ei,useDebugValue:Hs,useDeferredValue:function(e){return $e().memoizedState=e},useTransition:function(){var e=ei(!1),t=e[0];return e=op.bind(null,e[1]),$e().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Q,a=$e();if(V){if(n===void 0)throw Error(S(407));n=n()}else{if(n=t(),re===null)throw Error(S(349));Bt&30||lc(r,t,n)}a.memoizedState=n;var l={value:n,getSnapshot:t};return a.queue=l,ti(oc.bind(null,r,l,e),[e]),r.flags|=2048,ir(9,sc.bind(null,r,l,n,t),void 0,null),n},useId:function(){var e=$e(),t=re.identifierPrefix;if(V){var n=Ge,r=Je;n=(r&~(1<<32-ze(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=sr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=sp++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},dp={readContext:Le,useCallback:hc,useContext:Le,useEffect:Vs,useImperativeHandle:mc,useInsertionEffect:dc,useLayoutEffect:fc,useMemo:xc,useReducer:sl,useRef:cc,useState:function(){return sl(or)},useDebugValue:Hs,useDeferredValue:function(e){var t=Te();return gc(t,Z.memoizedState,e)},useTransition:function(){var e=sl(or)[0],t=Te().memoizedState;return[e,t]},useMutableSource:rc,useSyncExternalStore:ac,useId:vc,unstable_isNewReconciler:!1},fp={readContext:Le,useCallback:hc,useContext:Le,useEffect:Vs,useImperativeHandle:mc,useInsertionEffect:dc,useLayoutEffect:fc,useMemo:xc,useReducer:ol,useRef:cc,useState:function(){return ol(or)},useDebugValue:Hs,useDeferredValue:function(e){var t=Te();return Z===null?t.memoizedState=e:gc(t,Z.memoizedState,e)},useTransition:function(){var e=ol(or)[0],t=Te().memoizedState;return[e,t]},useMutableSource:rc,useSyncExternalStore:ac,useId:vc,unstable_isNewReconciler:!1};function Ae(e,t){if(e&&e.defaultProps){t=Y({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Hl(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Y({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Pa={isMounted:function(e){return(e=e._reactInternals)?Wt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=fe(),a=yt(e),l=Xe(r,a);l.payload=t,n!=null&&(l.callback=n),t=gt(e,l,a),t!==null&&(Fe(t,e,a,r),$r(t,e,a))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=fe(),a=yt(e),l=Xe(r,a);l.tag=1,l.payload=t,n!=null&&(l.callback=n),t=gt(e,l,a),t!==null&&(Fe(t,e,a,r),$r(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=fe(),r=yt(e),a=Xe(n,r);a.tag=2,t!=null&&(a.callback=t),t=gt(e,a,r),t!==null&&(Fe(t,e,r,n),$r(t,e,r))}};function ni(e,t,n,r,a,l,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,l,s):t.prototype&&t.prototype.isPureReactComponent?!er(n,r)||!er(a,l):!0}function kc(e,t,n){var r=!1,a=St,l=t.contextType;return typeof l=="object"&&l!==null?l=Le(l):(a=ve(t)?Dt:ce.current,r=t.contextTypes,l=(r=r!=null)?hn(e,a):St),t=new t(n,l),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Pa,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=a,e.__reactInternalMemoizedMaskedChildContext=l),t}function ri(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Pa.enqueueReplaceState(t,t.state,null)}function Wl(e,t,n,r){var a=e.stateNode;a.props=n,a.state=e.memoizedState,a.refs={},zs(e);var l=t.contextType;typeof l=="object"&&l!==null?a.context=Le(l):(l=ve(t)?Dt:ce.current,a.context=hn(e,l)),a.state=e.memoizedState,l=t.getDerivedStateFromProps,typeof l=="function"&&(Hl(e,t,l,n),a.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(t=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),t!==a.state&&Pa.enqueueReplaceState(a,a.state,null),ca(e,n,a,r),a.state=e.memoizedState),typeof a.componentDidMount=="function"&&(e.flags|=4194308)}function yn(e,t){try{var n="",r=t;do n+=Dd(r),r=r.return;while(r);var a=n}catch(l){a=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:t,stack:a,digest:null}}function il(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Ql(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var pp=typeof WeakMap=="function"?WeakMap:Map;function Sc(e,t,n){n=Xe(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){ha||(ha=!0,ns=r),Ql(e,t)},n}function Cc(e,t,n){n=Xe(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var a=t.value;n.payload=function(){return r(a)},n.callback=function(){Ql(e,t)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(n.callback=function(){Ql(e,t),typeof r!="function"&&(vt===null?vt=new Set([this]):vt.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function ai(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new pp;var a=new Set;r.set(t,a)}else a=r.get(t),a===void 0&&(a=new Set,r.set(t,a));a.has(n)||(a.add(n),e=Np.bind(null,e,t,n),t.then(e,e))}function li(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function si(e,t,n,r,a){return e.mode&1?(e.flags|=65536,e.lanes=a,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Xe(-1,1),t.tag=2,gt(n,t,1))),n.lanes|=1),e)}var mp=nt.ReactCurrentOwner,xe=!1;function de(e,t,n,r){t.child=e===null?Zu(t,null,n,r):gn(t,e.child,n,r)}function oi(e,t,n,r,a){n=n.render;var l=t.ref;return fn(t,a),r=Bs(e,t,n,r,l,a),n=$s(),e!==null&&!xe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,tt(e,t,a)):(V&&n&&Ps(t),t.flags|=1,de(e,t,r,a),t.child)}function ii(e,t,n,r,a){if(e===null){var l=n.type;return typeof l=="function"&&!qs(l)&&l.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=l,Ec(e,t,l,r,a)):(e=Kr(n.type,null,r,t,t.mode,a),e.ref=t.ref,e.return=t,t.child=e)}if(l=e.child,!(e.lanes&a)){var s=l.memoizedProps;if(n=n.compare,n=n!==null?n:er,n(s,r)&&e.ref===t.ref)return tt(e,t,a)}return t.flags|=1,e=bt(l,r),e.ref=t.ref,e.return=t,t.child=e}function Ec(e,t,n,r,a){if(e!==null){var l=e.memoizedProps;if(er(l,r)&&e.ref===t.ref)if(xe=!1,t.pendingProps=r=l,(e.lanes&a)!==0)e.flags&131072&&(xe=!0);else return t.lanes=e.lanes,tt(e,t,a)}return Yl(e,t,n,r,a)}function _c(e,t,n){var r=t.pendingProps,a=r.children,l=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},U(sn,be),be|=n;else{if(!(n&1073741824))return e=l!==null?l.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,U(sn,be),be|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=l!==null?l.baseLanes:n,U(sn,be),be|=r}else l!==null?(r=l.baseLanes|n,t.memoizedState=null):r=n,U(sn,be),be|=r;return de(e,t,a,n),t.child}function Nc(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Yl(e,t,n,r,a){var l=ve(n)?Dt:ce.current;return l=hn(t,l),fn(t,a),n=Bs(e,t,n,r,l,a),r=$s(),e!==null&&!xe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,tt(e,t,a)):(V&&r&&Ps(t),t.flags|=1,de(e,t,n,a),t.child)}function ui(e,t,n,r,a){if(ve(n)){var l=!0;la(t)}else l=!1;if(fn(t,a),t.stateNode===null)Wr(e,t),kc(t,n,r),Wl(t,n,r,a),r=!0;else if(e===null){var s=t.stateNode,o=t.memoizedProps;s.props=o;var i=s.context,u=n.contextType;typeof u=="object"&&u!==null?u=Le(u):(u=ve(n)?Dt:ce.current,u=hn(t,u));var h=n.getDerivedStateFromProps,p=typeof h=="function"||typeof s.getSnapshotBeforeUpdate=="function";p||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(o!==r||i!==u)&&ri(t,s,r,u),ot=!1;var f=t.memoizedState;s.state=f,ca(t,r,s,a),i=t.memoizedState,o!==r||f!==i||ge.current||ot?(typeof h=="function"&&(Hl(t,n,h,r),i=t.memoizedState),(o=ot||ni(t,n,o,r,f,i,u))?(p||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=i),s.props=r,s.state=i,s.context=u,r=o):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,tc(e,t),o=t.memoizedProps,u=t.type===t.elementType?o:Ae(t.type,o),s.props=u,p=t.pendingProps,f=s.context,i=n.contextType,typeof i=="object"&&i!==null?i=Le(i):(i=ve(n)?Dt:ce.current,i=hn(t,i));var g=n.getDerivedStateFromProps;(h=typeof g=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(o!==p||f!==i)&&ri(t,s,r,i),ot=!1,f=t.memoizedState,s.state=f,ca(t,r,s,a);var v=t.memoizedState;o!==p||f!==v||ge.current||ot?(typeof g=="function"&&(Hl(t,n,g,r),v=t.memoizedState),(u=ot||ni(t,n,u,r,f,v,i)||!1)?(h||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,v,i),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,v,i)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=v),s.props=r,s.state=v,s.context=i,r=u):(typeof s.componentDidUpdate!="function"||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return Kl(e,t,n,r,l,a)}function Kl(e,t,n,r,a,l){Nc(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return a&&Ko(t,n,!1),tt(e,t,l);r=t.stateNode,mp.current=t;var o=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=gn(t,e.child,null,l),t.child=gn(t,null,o,l)):de(e,t,o,l),t.memoizedState=r.state,a&&Ko(t,n,!0),t.child}function jc(e){var t=e.stateNode;t.pendingContext?Yo(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Yo(e,t.context,!1),Fs(e,t.containerInfo)}function ci(e,t,n,r,a){return xn(),Ts(a),t.flags|=256,de(e,t,n,r),t.child}var Jl={dehydrated:null,treeContext:null,retryLane:0};function Gl(e){return{baseLanes:e,cachePool:null,transitions:null}}function Pc(e,t,n){var r=t.pendingProps,a=W.current,l=!1,s=(t.flags&128)!==0,o;if((o=s)||(o=e!==null&&e.memoizedState===null?!1:(a&2)!==0),o?(l=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(a|=1),U(W,a&1),e===null)return $l(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=r.children,e=r.fallback,l?(r=t.mode,l=t.child,s={mode:"hidden",children:s},!(r&1)&&l!==null?(l.childLanes=0,l.pendingProps=s):l=Ma(s,r,0,null),e=Ot(e,r,n,null),l.return=t,e.return=t,l.sibling=e,t.child=l,t.child.memoizedState=Gl(n),t.memoizedState=Jl,e):Ws(t,s));if(a=e.memoizedState,a!==null&&(o=a.dehydrated,o!==null))return hp(e,t,s,r,o,a,n);if(l){l=r.fallback,s=t.mode,a=e.child,o=a.sibling;var i={mode:"hidden",children:r.children};return!(s&1)&&t.child!==a?(r=t.child,r.childLanes=0,r.pendingProps=i,t.deletions=null):(r=bt(a,i),r.subtreeFlags=a.subtreeFlags&14680064),o!==null?l=bt(o,l):(l=Ot(l,s,n,null),l.flags|=2),l.return=t,r.return=t,r.sibling=l,t.child=r,r=l,l=t.child,s=e.child.memoizedState,s=s===null?Gl(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},l.memoizedState=s,l.childLanes=e.childLanes&~n,t.memoizedState=Jl,r}return l=e.child,e=l.sibling,r=bt(l,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Ws(e,t){return t=Ma({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Ar(e,t,n,r){return r!==null&&Ts(r),gn(t,e.child,null,n),e=Ws(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function hp(e,t,n,r,a,l,s){if(n)return t.flags&256?(t.flags&=-257,r=il(Error(S(422))),Ar(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(l=r.fallback,a=t.mode,r=Ma({mode:"visible",children:r.children},a,0,null),l=Ot(l,a,s,null),l.flags|=2,r.return=t,l.return=t,r.sibling=l,t.child=r,t.mode&1&&gn(t,e.child,null,s),t.child.memoizedState=Gl(s),t.memoizedState=Jl,l);if(!(t.mode&1))return Ar(e,t,s,null);if(a.data==="$!"){if(r=a.nextSibling&&a.nextSibling.dataset,r)var o=r.dgst;return r=o,l=Error(S(419)),r=il(l,r,void 0),Ar(e,t,s,r)}if(o=(s&e.childLanes)!==0,xe||o){if(r=re,r!==null){switch(s&-s){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}a=a&(r.suspendedLanes|s)?0:a,a!==0&&a!==l.retryLane&&(l.retryLane=a,et(e,a),Fe(r,e,a,-1))}return Xs(),r=il(Error(S(421))),Ar(e,t,s,r)}return a.data==="$?"?(t.flags|=128,t.child=e.child,t=jp.bind(null,e),a._reactRetry=t,null):(e=l.treeContext,we=xt(a.nextSibling),ke=t,V=!0,Re=null,e!==null&&(_e[Ne++]=Je,_e[Ne++]=Ge,_e[Ne++]=Ut,Je=e.id,Ge=e.overflow,Ut=t),t=Ws(t,r.children),t.flags|=4096,t)}function di(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Vl(e.return,t,n)}function ul(e,t,n,r,a){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:a}:(l.isBackwards=t,l.rendering=null,l.renderingStartTime=0,l.last=r,l.tail=n,l.tailMode=a)}function Lc(e,t,n){var r=t.pendingProps,a=r.revealOrder,l=r.tail;if(de(e,t,r.children,n),r=W.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&di(e,n,t);else if(e.tag===19)di(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(U(W,r),!(t.mode&1))t.memoizedState=null;else switch(a){case"forwards":for(n=t.child,a=null;n!==null;)e=n.alternate,e!==null&&da(e)===null&&(a=n),n=n.sibling;n=a,n===null?(a=t.child,t.child=null):(a=n.sibling,n.sibling=null),ul(t,!1,a,n,l);break;case"backwards":for(n=null,a=t.child,t.child=null;a!==null;){if(e=a.alternate,e!==null&&da(e)===null){t.child=a;break}e=a.sibling,a.sibling=n,n=a,a=e}ul(t,!0,n,null,l);break;case"together":ul(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Wr(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function tt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),$t|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(S(153));if(t.child!==null){for(e=t.child,n=bt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=bt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function xp(e,t,n){switch(t.tag){case 3:jc(t),xn();break;case 5:nc(t);break;case 1:ve(t.type)&&la(t);break;case 4:Fs(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,a=t.memoizedProps.value;U(ia,r._currentValue),r._currentValue=a;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(U(W,W.current&1),t.flags|=128,null):n&t.child.childLanes?Pc(e,t,n):(U(W,W.current&1),e=tt(e,t,n),e!==null?e.sibling:null);U(W,W.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Lc(e,t,n);t.flags|=128}if(a=t.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),U(W,W.current),r)break;return null;case 22:case 23:return t.lanes=0,_c(e,t,n)}return tt(e,t,n)}var Tc,Xl,Mc,Ac;Tc=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Xl=function(){};Mc=function(e,t,n,r){var a=e.memoizedProps;if(a!==r){e=t.stateNode,zt(We.current);var l=null;switch(n){case"input":a=yl(e,a),r=yl(e,r),l=[];break;case"select":a=Y({},a,{value:void 0}),r=Y({},r,{value:void 0}),l=[];break;case"textarea":a=kl(e,a),r=kl(e,r),l=[];break;default:typeof a.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=ra)}Cl(n,r);var s;n=null;for(u in a)if(!r.hasOwnProperty(u)&&a.hasOwnProperty(u)&&a[u]!=null)if(u==="style"){var o=a[u];for(s in o)o.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Yn.hasOwnProperty(u)?l||(l=[]):(l=l||[]).push(u,null));for(u in r){var i=r[u];if(o=a!=null?a[u]:void 0,r.hasOwnProperty(u)&&i!==o&&(i!=null||o!=null))if(u==="style")if(o){for(s in o)!o.hasOwnProperty(s)||i&&i.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in i)i.hasOwnProperty(s)&&o[s]!==i[s]&&(n||(n={}),n[s]=i[s])}else n||(l||(l=[]),l.push(u,n)),n=i;else u==="dangerouslySetInnerHTML"?(i=i?i.__html:void 0,o=o?o.__html:void 0,i!=null&&o!==i&&(l=l||[]).push(u,i)):u==="children"?typeof i!="string"&&typeof i!="number"||(l=l||[]).push(u,""+i):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Yn.hasOwnProperty(u)?(i!=null&&u==="onScroll"&&B("scroll",e),l||o===i||(l=[])):(l=l||[]).push(u,i))}n&&(l=l||[]).push("style",n);var u=l;(t.updateQueue=u)&&(t.flags|=4)}};Ac=function(e,t,n,r){n!==r&&(t.flags|=4)};function Mn(e,t){if(!V)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ie(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var a=e.child;a!==null;)n|=a.lanes|a.childLanes,r|=a.subtreeFlags&14680064,r|=a.flags&14680064,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)n|=a.lanes|a.childLanes,r|=a.subtreeFlags,r|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function gp(e,t,n){var r=t.pendingProps;switch(Ls(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ie(t),null;case 1:return ve(t.type)&&aa(),ie(t),null;case 3:return r=t.stateNode,vn(),$(ge),$(ce),Ds(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Tr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Re!==null&&(ls(Re),Re=null))),Xl(e,t),ie(t),null;case 5:Os(t);var a=zt(lr.current);if(n=t.type,e!==null&&t.stateNode!=null)Mc(e,t,n,r,a),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(S(166));return ie(t),null}if(e=zt(We.current),Tr(t)){r=t.stateNode,n=t.type;var l=t.memoizedProps;switch(r[Ve]=t,r[rr]=l,e=(t.mode&1)!==0,n){case"dialog":B("cancel",r),B("close",r);break;case"iframe":case"object":case"embed":B("load",r);break;case"video":case"audio":for(a=0;a<Fn.length;a++)B(Fn[a],r);break;case"source":B("error",r);break;case"img":case"image":case"link":B("error",r),B("load",r);break;case"details":B("toggle",r);break;case"input":bo(r,l),B("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!l.multiple},B("invalid",r);break;case"textarea":ko(r,l),B("invalid",r)}Cl(n,l),a=null;for(var s in l)if(l.hasOwnProperty(s)){var o=l[s];s==="children"?typeof o=="string"?r.textContent!==o&&(l.suppressHydrationWarning!==!0&&Lr(r.textContent,o,e),a=["children",o]):typeof o=="number"&&r.textContent!==""+o&&(l.suppressHydrationWarning!==!0&&Lr(r.textContent,o,e),a=["children",""+o]):Yn.hasOwnProperty(s)&&o!=null&&s==="onScroll"&&B("scroll",r)}switch(n){case"input":kr(r),wo(r,l,!0);break;case"textarea":kr(r),So(r);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(r.onclick=ra)}r=a,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=a.nodeType===9?a:a.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=ou(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[Ve]=t,e[rr]=r,Tc(e,t,!1,!1),t.stateNode=e;e:{switch(s=El(n,r),n){case"dialog":B("cancel",e),B("close",e),a=r;break;case"iframe":case"object":case"embed":B("load",e),a=r;break;case"video":case"audio":for(a=0;a<Fn.length;a++)B(Fn[a],e);a=r;break;case"source":B("error",e),a=r;break;case"img":case"image":case"link":B("error",e),B("load",e),a=r;break;case"details":B("toggle",e),a=r;break;case"input":bo(e,r),a=yl(e,r),B("invalid",e);break;case"option":a=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},a=Y({},r,{value:void 0}),B("invalid",e);break;case"textarea":ko(e,r),a=kl(e,r),B("invalid",e);break;default:a=r}Cl(n,a),o=a;for(l in o)if(o.hasOwnProperty(l)){var i=o[l];l==="style"?cu(e,i):l==="dangerouslySetInnerHTML"?(i=i?i.__html:void 0,i!=null&&iu(e,i)):l==="children"?typeof i=="string"?(n!=="textarea"||i!=="")&&Kn(e,i):typeof i=="number"&&Kn(e,""+i):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(Yn.hasOwnProperty(l)?i!=null&&l==="onScroll"&&B("scroll",e):i!=null&&hs(e,l,i,s))}switch(n){case"input":kr(e),wo(e,r,!1);break;case"textarea":kr(e),So(e);break;case"option":r.value!=null&&e.setAttribute("value",""+kt(r.value));break;case"select":e.multiple=!!r.multiple,l=r.value,l!=null?on(e,!!r.multiple,l,!1):r.defaultValue!=null&&on(e,!!r.multiple,r.defaultValue,!0);break;default:typeof a.onClick=="function"&&(e.onclick=ra)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ie(t),null;case 6:if(e&&t.stateNode!=null)Ac(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(S(166));if(n=zt(lr.current),zt(We.current),Tr(t)){if(r=t.stateNode,n=t.memoizedProps,r[Ve]=t,(l=r.nodeValue!==n)&&(e=ke,e!==null))switch(e.tag){case 3:Lr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Lr(r.nodeValue,n,(e.mode&1)!==0)}l&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Ve]=t,t.stateNode=r}return ie(t),null;case 13:if($(W),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(V&&we!==null&&t.mode&1&&!(t.flags&128))Xu(),xn(),t.flags|=98560,l=!1;else if(l=Tr(t),r!==null&&r.dehydrated!==null){if(e===null){if(!l)throw Error(S(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(S(317));l[Ve]=t}else xn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ie(t),l=!1}else Re!==null&&(ls(Re),Re=null),l=!0;if(!l)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||W.current&1?ee===0&&(ee=3):Xs())),t.updateQueue!==null&&(t.flags|=4),ie(t),null);case 4:return vn(),Xl(e,t),e===null&&tr(t.stateNode.containerInfo),ie(t),null;case 10:return Is(t.type._context),ie(t),null;case 17:return ve(t.type)&&aa(),ie(t),null;case 19:if($(W),l=t.memoizedState,l===null)return ie(t),null;if(r=(t.flags&128)!==0,s=l.rendering,s===null)if(r)Mn(l,!1);else{if(ee!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=da(e),s!==null){for(t.flags|=128,Mn(l,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)l=n,e=r,l.flags&=14680066,s=l.alternate,s===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=s.childLanes,l.lanes=s.lanes,l.child=s.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=s.memoizedProps,l.memoizedState=s.memoizedState,l.updateQueue=s.updateQueue,l.type=s.type,e=s.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return U(W,W.current&1|2),t.child}e=e.sibling}l.tail!==null&&J()>bn&&(t.flags|=128,r=!0,Mn(l,!1),t.lanes=4194304)}else{if(!r)if(e=da(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Mn(l,!0),l.tail===null&&l.tailMode==="hidden"&&!s.alternate&&!V)return ie(t),null}else 2*J()-l.renderingStartTime>bn&&n!==1073741824&&(t.flags|=128,r=!0,Mn(l,!1),t.lanes=4194304);l.isBackwards?(s.sibling=t.child,t.child=s):(n=l.last,n!==null?n.sibling=s:t.child=s,l.last=s)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=J(),t.sibling=null,n=W.current,U(W,r?n&1|2:n&1),t):(ie(t),null);case 22:case 23:return Gs(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?be&1073741824&&(ie(t),t.subtreeFlags&6&&(t.flags|=8192)):ie(t),null;case 24:return null;case 25:return null}throw Error(S(156,t.tag))}function vp(e,t){switch(Ls(t),t.tag){case 1:return ve(t.type)&&aa(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return vn(),$(ge),$(ce),Ds(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Os(t),null;case 13:if($(W),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(S(340));xn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return $(W),null;case 4:return vn(),null;case 10:return Is(t.type._context),null;case 22:case 23:return Gs(),null;case 24:return null;default:return null}}var Ir=!1,ue=!1,yp=typeof WeakSet=="function"?WeakSet:Set,P=null;function ln(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){K(e,t,r)}else n.current=null}function ql(e,t,n){try{n()}catch(r){K(e,t,r)}}var fi=!1;function bp(e,t){if(Rl=ea,e=Ou(),js(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var a=r.anchorOffset,l=r.focusNode;r=r.focusOffset;try{n.nodeType,l.nodeType}catch{n=null;break e}var s=0,o=-1,i=-1,u=0,h=0,p=e,f=null;t:for(;;){for(var g;p!==n||a!==0&&p.nodeType!==3||(o=s+a),p!==l||r!==0&&p.nodeType!==3||(i=s+r),p.nodeType===3&&(s+=p.nodeValue.length),(g=p.firstChild)!==null;)f=p,p=g;for(;;){if(p===e)break t;if(f===n&&++u===a&&(o=s),f===l&&++h===r&&(i=s),(g=p.nextSibling)!==null)break;p=f,f=p.parentNode}p=g}n=o===-1||i===-1?null:{start:o,end:i}}else n=null}n=n||{start:0,end:0}}else n=null;for(zl={focusedElem:e,selectionRange:n},ea=!1,P=t;P!==null;)if(t=P,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,P=e;else for(;P!==null;){t=P;try{var v=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var y=v.memoizedProps,b=v.memoizedState,d=t.stateNode,c=d.getSnapshotBeforeUpdate(t.elementType===t.type?y:Ae(t.type,y),b);d.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var m=t.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(S(163))}}catch(w){K(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,P=e;break}P=t.return}return v=fi,fi=!1,v}function Hn(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var a=r=r.next;do{if((a.tag&e)===e){var l=a.destroy;a.destroy=void 0,l!==void 0&&ql(t,n,l)}a=a.next}while(a!==r)}}function La(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Zl(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Ic(e){var t=e.alternate;t!==null&&(e.alternate=null,Ic(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Ve],delete t[rr],delete t[Dl],delete t[np],delete t[rp])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Rc(e){return e.tag===5||e.tag===3||e.tag===4}function pi(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Rc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function es(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ra));else if(r!==4&&(e=e.child,e!==null))for(es(e,t,n),e=e.sibling;e!==null;)es(e,t,n),e=e.sibling}function ts(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(ts(e,t,n),e=e.sibling;e!==null;)ts(e,t,n),e=e.sibling}var ae=null,Ie=!1;function at(e,t,n){for(n=n.child;n!==null;)zc(e,t,n),n=n.sibling}function zc(e,t,n){if(He&&typeof He.onCommitFiberUnmount=="function")try{He.onCommitFiberUnmount(ka,n)}catch{}switch(n.tag){case 5:ue||ln(n,t);case 6:var r=ae,a=Ie;ae=null,at(e,t,n),ae=r,Ie=a,ae!==null&&(Ie?(e=ae,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ae.removeChild(n.stateNode));break;case 18:ae!==null&&(Ie?(e=ae,n=n.stateNode,e.nodeType===8?nl(e.parentNode,n):e.nodeType===1&&nl(e,n),qn(e)):nl(ae,n.stateNode));break;case 4:r=ae,a=Ie,ae=n.stateNode.containerInfo,Ie=!0,at(e,t,n),ae=r,Ie=a;break;case 0:case 11:case 14:case 15:if(!ue&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){a=r=r.next;do{var l=a,s=l.destroy;l=l.tag,s!==void 0&&(l&2||l&4)&&ql(n,t,s),a=a.next}while(a!==r)}at(e,t,n);break;case 1:if(!ue&&(ln(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(o){K(n,t,o)}at(e,t,n);break;case 21:at(e,t,n);break;case 22:n.mode&1?(ue=(r=ue)||n.memoizedState!==null,at(e,t,n),ue=r):at(e,t,n);break;default:at(e,t,n)}}function mi(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new yp),t.forEach(function(r){var a=Pp.bind(null,e,r);n.has(r)||(n.add(r),r.then(a,a))})}}function Me(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var a=n[r];try{var l=e,s=t,o=s;e:for(;o!==null;){switch(o.tag){case 5:ae=o.stateNode,Ie=!1;break e;case 3:ae=o.stateNode.containerInfo,Ie=!0;break e;case 4:ae=o.stateNode.containerInfo,Ie=!0;break e}o=o.return}if(ae===null)throw Error(S(160));zc(l,s,a),ae=null,Ie=!1;var i=a.alternate;i!==null&&(i.return=null),a.return=null}catch(u){K(a,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Fc(t,e),t=t.sibling}function Fc(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Me(t,e),Be(e),r&4){try{Hn(3,e,e.return),La(3,e)}catch(y){K(e,e.return,y)}try{Hn(5,e,e.return)}catch(y){K(e,e.return,y)}}break;case 1:Me(t,e),Be(e),r&512&&n!==null&&ln(n,n.return);break;case 5:if(Me(t,e),Be(e),r&512&&n!==null&&ln(n,n.return),e.flags&32){var a=e.stateNode;try{Kn(a,"")}catch(y){K(e,e.return,y)}}if(r&4&&(a=e.stateNode,a!=null)){var l=e.memoizedProps,s=n!==null?n.memoizedProps:l,o=e.type,i=e.updateQueue;if(e.updateQueue=null,i!==null)try{o==="input"&&l.type==="radio"&&l.name!=null&&lu(a,l),El(o,s);var u=El(o,l);for(s=0;s<i.length;s+=2){var h=i[s],p=i[s+1];h==="style"?cu(a,p):h==="dangerouslySetInnerHTML"?iu(a,p):h==="children"?Kn(a,p):hs(a,h,p,u)}switch(o){case"input":bl(a,l);break;case"textarea":su(a,l);break;case"select":var f=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!l.multiple;var g=l.value;g!=null?on(a,!!l.multiple,g,!1):f!==!!l.multiple&&(l.defaultValue!=null?on(a,!!l.multiple,l.defaultValue,!0):on(a,!!l.multiple,l.multiple?[]:"",!1))}a[rr]=l}catch(y){K(e,e.return,y)}}break;case 6:if(Me(t,e),Be(e),r&4){if(e.stateNode===null)throw Error(S(162));a=e.stateNode,l=e.memoizedProps;try{a.nodeValue=l}catch(y){K(e,e.return,y)}}break;case 3:if(Me(t,e),Be(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{qn(t.containerInfo)}catch(y){K(e,e.return,y)}break;case 4:Me(t,e),Be(e);break;case 13:Me(t,e),Be(e),a=e.child,a.flags&8192&&(l=a.memoizedState!==null,a.stateNode.isHidden=l,!l||a.alternate!==null&&a.alternate.memoizedState!==null||(Ks=J())),r&4&&mi(e);break;case 22:if(h=n!==null&&n.memoizedState!==null,e.mode&1?(ue=(u=ue)||h,Me(t,e),ue=u):Me(t,e),Be(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!h&&e.mode&1)for(P=e,h=e.child;h!==null;){for(p=P=h;P!==null;){switch(f=P,g=f.child,f.tag){case 0:case 11:case 14:case 15:Hn(4,f,f.return);break;case 1:ln(f,f.return);var v=f.stateNode;if(typeof v.componentWillUnmount=="function"){r=f,n=f.return;try{t=r,v.props=t.memoizedProps,v.state=t.memoizedState,v.componentWillUnmount()}catch(y){K(r,n,y)}}break;case 5:ln(f,f.return);break;case 22:if(f.memoizedState!==null){xi(p);continue}}g!==null?(g.return=f,P=g):xi(p)}h=h.sibling}e:for(h=null,p=e;;){if(p.tag===5){if(h===null){h=p;try{a=p.stateNode,u?(l=a.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(o=p.stateNode,i=p.memoizedProps.style,s=i!=null&&i.hasOwnProperty("display")?i.display:null,o.style.display=uu("display",s))}catch(y){K(e,e.return,y)}}}else if(p.tag===6){if(h===null)try{p.stateNode.nodeValue=u?"":p.memoizedProps}catch(y){K(e,e.return,y)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;h===p&&(h=null),p=p.return}h===p&&(h=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Me(t,e),Be(e),r&4&&mi(e);break;case 21:break;default:Me(t,e),Be(e)}}function Be(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Rc(n)){var r=n;break e}n=n.return}throw Error(S(160))}switch(r.tag){case 5:var a=r.stateNode;r.flags&32&&(Kn(a,""),r.flags&=-33);var l=pi(e);ts(e,l,a);break;case 3:case 4:var s=r.stateNode.containerInfo,o=pi(e);es(e,o,s);break;default:throw Error(S(161))}}catch(i){K(e,e.return,i)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function wp(e,t,n){P=e,Oc(e)}function Oc(e,t,n){for(var r=(e.mode&1)!==0;P!==null;){var a=P,l=a.child;if(a.tag===22&&r){var s=a.memoizedState!==null||Ir;if(!s){var o=a.alternate,i=o!==null&&o.memoizedState!==null||ue;o=Ir;var u=ue;if(Ir=s,(ue=i)&&!u)for(P=a;P!==null;)s=P,i=s.child,s.tag===22&&s.memoizedState!==null?gi(a):i!==null?(i.return=s,P=i):gi(a);for(;l!==null;)P=l,Oc(l),l=l.sibling;P=a,Ir=o,ue=u}hi(e)}else a.subtreeFlags&8772&&l!==null?(l.return=a,P=l):hi(e)}}function hi(e){for(;P!==null;){var t=P;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ue||La(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ue)if(n===null)r.componentDidMount();else{var a=t.elementType===t.type?n.memoizedProps:Ae(t.type,n.memoizedProps);r.componentDidUpdate(a,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var l=t.updateQueue;l!==null&&Zo(t,l,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Zo(t,s,n)}break;case 5:var o=t.stateNode;if(n===null&&t.flags&4){n=o;var i=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":i.autoFocus&&n.focus();break;case"img":i.src&&(n.src=i.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var h=u.memoizedState;if(h!==null){var p=h.dehydrated;p!==null&&qn(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(S(163))}ue||t.flags&512&&Zl(t)}catch(f){K(t,t.return,f)}}if(t===e){P=null;break}if(n=t.sibling,n!==null){n.return=t.return,P=n;break}P=t.return}}function xi(e){for(;P!==null;){var t=P;if(t===e){P=null;break}var n=t.sibling;if(n!==null){n.return=t.return,P=n;break}P=t.return}}function gi(e){for(;P!==null;){var t=P;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{La(4,t)}catch(i){K(t,n,i)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var a=t.return;try{r.componentDidMount()}catch(i){K(t,a,i)}}var l=t.return;try{Zl(t)}catch(i){K(t,l,i)}break;case 5:var s=t.return;try{Zl(t)}catch(i){K(t,s,i)}}}catch(i){K(t,t.return,i)}if(t===e){P=null;break}var o=t.sibling;if(o!==null){o.return=t.return,P=o;break}P=t.return}}var kp=Math.ceil,ma=nt.ReactCurrentDispatcher,Qs=nt.ReactCurrentOwner,Pe=nt.ReactCurrentBatchConfig,R=0,re=null,X=null,le=0,be=0,sn=Et(0),ee=0,ur=null,$t=0,Ta=0,Ys=0,Wn=null,he=null,Ks=0,bn=1/0,Qe=null,ha=!1,ns=null,vt=null,Rr=!1,dt=null,xa=0,Qn=0,rs=null,Qr=-1,Yr=0;function fe(){return R&6?J():Qr!==-1?Qr:Qr=J()}function yt(e){return e.mode&1?R&2&&le!==0?le&-le:lp.transition!==null?(Yr===0&&(Yr=ku()),Yr):(e=D,e!==0||(e=window.event,e=e===void 0?16:Pu(e.type)),e):1}function Fe(e,t,n,r){if(50<Qn)throw Qn=0,rs=null,Error(S(185));pr(e,n,r),(!(R&2)||e!==re)&&(e===re&&(!(R&2)&&(Ta|=n),ee===4&&ut(e,le)),ye(e,r),n===1&&R===0&&!(t.mode&1)&&(bn=J()+500,Na&&_t()))}function ye(e,t){var n=e.callbackNode;af(e,t);var r=Zr(e,e===re?le:0);if(r===0)n!==null&&_o(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&_o(n),t===1)e.tag===0?ap(vi.bind(null,e)):Ku(vi.bind(null,e)),ep(function(){!(R&6)&&_t()}),n=null;else{switch(Su(r)){case 1:n=bs;break;case 4:n=bu;break;case 16:n=qr;break;case 536870912:n=wu;break;default:n=qr}n=Qc(n,Dc.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Dc(e,t){if(Qr=-1,Yr=0,R&6)throw Error(S(327));var n=e.callbackNode;if(pn()&&e.callbackNode!==n)return null;var r=Zr(e,e===re?le:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=ga(e,r);else{t=r;var a=R;R|=2;var l=Bc();(re!==e||le!==t)&&(Qe=null,bn=J()+500,Ft(e,t));do try{Ep();break}catch(o){Uc(e,o)}while(!0);As(),ma.current=l,R=a,X!==null?t=0:(re=null,le=0,t=ee)}if(t!==0){if(t===2&&(a=Ll(e),a!==0&&(r=a,t=as(e,a))),t===1)throw n=ur,Ft(e,0),ut(e,r),ye(e,J()),n;if(t===6)ut(e,r);else{if(a=e.current.alternate,!(r&30)&&!Sp(a)&&(t=ga(e,r),t===2&&(l=Ll(e),l!==0&&(r=l,t=as(e,l))),t===1))throw n=ur,Ft(e,0),ut(e,r),ye(e,J()),n;switch(e.finishedWork=a,e.finishedLanes=r,t){case 0:case 1:throw Error(S(345));case 2:Mt(e,he,Qe);break;case 3:if(ut(e,r),(r&130023424)===r&&(t=Ks+500-J(),10<t)){if(Zr(e,0)!==0)break;if(a=e.suspendedLanes,(a&r)!==r){fe(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=Ol(Mt.bind(null,e,he,Qe),t);break}Mt(e,he,Qe);break;case 4:if(ut(e,r),(r&4194240)===r)break;for(t=e.eventTimes,a=-1;0<r;){var s=31-ze(r);l=1<<s,s=t[s],s>a&&(a=s),r&=~l}if(r=a,r=J()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*kp(r/1960))-r,10<r){e.timeoutHandle=Ol(Mt.bind(null,e,he,Qe),r);break}Mt(e,he,Qe);break;case 5:Mt(e,he,Qe);break;default:throw Error(S(329))}}}return ye(e,J()),e.callbackNode===n?Dc.bind(null,e):null}function as(e,t){var n=Wn;return e.current.memoizedState.isDehydrated&&(Ft(e,t).flags|=256),e=ga(e,t),e!==2&&(t=he,he=n,t!==null&&ls(t)),e}function ls(e){he===null?he=e:he.push.apply(he,e)}function Sp(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var a=n[r],l=a.getSnapshot;a=a.value;try{if(!Oe(l(),a))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ut(e,t){for(t&=~Ys,t&=~Ta,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-ze(t),r=1<<n;e[n]=-1,t&=~r}}function vi(e){if(R&6)throw Error(S(327));pn();var t=Zr(e,0);if(!(t&1))return ye(e,J()),null;var n=ga(e,t);if(e.tag!==0&&n===2){var r=Ll(e);r!==0&&(t=r,n=as(e,r))}if(n===1)throw n=ur,Ft(e,0),ut(e,t),ye(e,J()),n;if(n===6)throw Error(S(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Mt(e,he,Qe),ye(e,J()),null}function Js(e,t){var n=R;R|=1;try{return e(t)}finally{R=n,R===0&&(bn=J()+500,Na&&_t())}}function Vt(e){dt!==null&&dt.tag===0&&!(R&6)&&pn();var t=R;R|=1;var n=Pe.transition,r=D;try{if(Pe.transition=null,D=1,e)return e()}finally{D=r,Pe.transition=n,R=t,!(R&6)&&_t()}}function Gs(){be=sn.current,$(sn)}function Ft(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Zf(n)),X!==null)for(n=X.return;n!==null;){var r=n;switch(Ls(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&aa();break;case 3:vn(),$(ge),$(ce),Ds();break;case 5:Os(r);break;case 4:vn();break;case 13:$(W);break;case 19:$(W);break;case 10:Is(r.type._context);break;case 22:case 23:Gs()}n=n.return}if(re=e,X=e=bt(e.current,null),le=be=t,ee=0,ur=null,Ys=Ta=$t=0,he=Wn=null,Rt!==null){for(t=0;t<Rt.length;t++)if(n=Rt[t],r=n.interleaved,r!==null){n.interleaved=null;var a=r.next,l=n.pending;if(l!==null){var s=l.next;l.next=a,r.next=s}n.pending=r}Rt=null}return e}function Uc(e,t){do{var n=X;try{if(As(),Vr.current=pa,fa){for(var r=Q.memoizedState;r!==null;){var a=r.queue;a!==null&&(a.pending=null),r=r.next}fa=!1}if(Bt=0,ne=Z=Q=null,Vn=!1,sr=0,Qs.current=null,n===null||n.return===null){ee=1,ur=t,X=null;break}e:{var l=e,s=n.return,o=n,i=t;if(t=le,o.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){var u=i,h=o,p=h.tag;if(!(h.mode&1)&&(p===0||p===11||p===15)){var f=h.alternate;f?(h.updateQueue=f.updateQueue,h.memoizedState=f.memoizedState,h.lanes=f.lanes):(h.updateQueue=null,h.memoizedState=null)}var g=li(s);if(g!==null){g.flags&=-257,si(g,s,o,l,t),g.mode&1&&ai(l,u,t),t=g,i=u;var v=t.updateQueue;if(v===null){var y=new Set;y.add(i),t.updateQueue=y}else v.add(i);break e}else{if(!(t&1)){ai(l,u,t),Xs();break e}i=Error(S(426))}}else if(V&&o.mode&1){var b=li(s);if(b!==null){!(b.flags&65536)&&(b.flags|=256),si(b,s,o,l,t),Ts(yn(i,o));break e}}l=i=yn(i,o),ee!==4&&(ee=2),Wn===null?Wn=[l]:Wn.push(l),l=s;do{switch(l.tag){case 3:l.flags|=65536,t&=-t,l.lanes|=t;var d=Sc(l,i,t);qo(l,d);break e;case 1:o=i;var c=l.type,m=l.stateNode;if(!(l.flags&128)&&(typeof c.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(vt===null||!vt.has(m)))){l.flags|=65536,t&=-t,l.lanes|=t;var w=Cc(l,o,t);qo(l,w);break e}}l=l.return}while(l!==null)}Vc(n)}catch(k){t=k,X===n&&n!==null&&(X=n=n.return);continue}break}while(!0)}function Bc(){var e=ma.current;return ma.current=pa,e===null?pa:e}function Xs(){(ee===0||ee===3||ee===2)&&(ee=4),re===null||!($t&268435455)&&!(Ta&268435455)||ut(re,le)}function ga(e,t){var n=R;R|=2;var r=Bc();(re!==e||le!==t)&&(Qe=null,Ft(e,t));do try{Cp();break}catch(a){Uc(e,a)}while(!0);if(As(),R=n,ma.current=r,X!==null)throw Error(S(261));return re=null,le=0,ee}function Cp(){for(;X!==null;)$c(X)}function Ep(){for(;X!==null&&!Jd();)$c(X)}function $c(e){var t=Wc(e.alternate,e,be);e.memoizedProps=e.pendingProps,t===null?Vc(e):X=t,Qs.current=null}function Vc(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=vp(n,t),n!==null){n.flags&=32767,X=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ee=6,X=null;return}}else if(n=gp(n,t,be),n!==null){X=n;return}if(t=t.sibling,t!==null){X=t;return}X=t=e}while(t!==null);ee===0&&(ee=5)}function Mt(e,t,n){var r=D,a=Pe.transition;try{Pe.transition=null,D=1,_p(e,t,n,r)}finally{Pe.transition=a,D=r}return null}function _p(e,t,n,r){do pn();while(dt!==null);if(R&6)throw Error(S(327));n=e.finishedWork;var a=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(S(177));e.callbackNode=null,e.callbackPriority=0;var l=n.lanes|n.childLanes;if(lf(e,l),e===re&&(X=re=null,le=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Rr||(Rr=!0,Qc(qr,function(){return pn(),null})),l=(n.flags&15990)!==0,n.subtreeFlags&15990||l){l=Pe.transition,Pe.transition=null;var s=D;D=1;var o=R;R|=4,Qs.current=null,bp(e,n),Fc(n,e),Qf(zl),ea=!!Rl,zl=Rl=null,e.current=n,wp(n),Gd(),R=o,D=s,Pe.transition=l}else e.current=n;if(Rr&&(Rr=!1,dt=e,xa=a),l=e.pendingLanes,l===0&&(vt=null),Zd(n.stateNode),ye(e,J()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)a=t[n],r(a.value,{componentStack:a.stack,digest:a.digest});if(ha)throw ha=!1,e=ns,ns=null,e;return xa&1&&e.tag!==0&&pn(),l=e.pendingLanes,l&1?e===rs?Qn++:(Qn=0,rs=e):Qn=0,_t(),null}function pn(){if(dt!==null){var e=Su(xa),t=Pe.transition,n=D;try{if(Pe.transition=null,D=16>e?16:e,dt===null)var r=!1;else{if(e=dt,dt=null,xa=0,R&6)throw Error(S(331));var a=R;for(R|=4,P=e.current;P!==null;){var l=P,s=l.child;if(P.flags&16){var o=l.deletions;if(o!==null){for(var i=0;i<o.length;i++){var u=o[i];for(P=u;P!==null;){var h=P;switch(h.tag){case 0:case 11:case 15:Hn(8,h,l)}var p=h.child;if(p!==null)p.return=h,P=p;else for(;P!==null;){h=P;var f=h.sibling,g=h.return;if(Ic(h),h===u){P=null;break}if(f!==null){f.return=g,P=f;break}P=g}}}var v=l.alternate;if(v!==null){var y=v.child;if(y!==null){v.child=null;do{var b=y.sibling;y.sibling=null,y=b}while(y!==null)}}P=l}}if(l.subtreeFlags&2064&&s!==null)s.return=l,P=s;else e:for(;P!==null;){if(l=P,l.flags&2048)switch(l.tag){case 0:case 11:case 15:Hn(9,l,l.return)}var d=l.sibling;if(d!==null){d.return=l.return,P=d;break e}P=l.return}}var c=e.current;for(P=c;P!==null;){s=P;var m=s.child;if(s.subtreeFlags&2064&&m!==null)m.return=s,P=m;else e:for(s=c;P!==null;){if(o=P,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:La(9,o)}}catch(k){K(o,o.return,k)}if(o===s){P=null;break e}var w=o.sibling;if(w!==null){w.return=o.return,P=w;break e}P=o.return}}if(R=a,_t(),He&&typeof He.onPostCommitFiberRoot=="function")try{He.onPostCommitFiberRoot(ka,e)}catch{}r=!0}return r}finally{D=n,Pe.transition=t}}return!1}function yi(e,t,n){t=yn(n,t),t=Sc(e,t,1),e=gt(e,t,1),t=fe(),e!==null&&(pr(e,1,t),ye(e,t))}function K(e,t,n){if(e.tag===3)yi(e,e,n);else for(;t!==null;){if(t.tag===3){yi(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(vt===null||!vt.has(r))){e=yn(n,e),e=Cc(t,e,1),t=gt(t,e,1),e=fe(),t!==null&&(pr(t,1,e),ye(t,e));break}}t=t.return}}function Np(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=fe(),e.pingedLanes|=e.suspendedLanes&n,re===e&&(le&n)===n&&(ee===4||ee===3&&(le&130023424)===le&&500>J()-Ks?Ft(e,0):Ys|=n),ye(e,t)}function Hc(e,t){t===0&&(e.mode&1?(t=Er,Er<<=1,!(Er&130023424)&&(Er=4194304)):t=1);var n=fe();e=et(e,t),e!==null&&(pr(e,t,n),ye(e,n))}function jp(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Hc(e,n)}function Pp(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(S(314))}r!==null&&r.delete(t),Hc(e,n)}var Wc;Wc=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||ge.current)xe=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return xe=!1,xp(e,t,n);xe=!!(e.flags&131072)}else xe=!1,V&&t.flags&1048576&&Ju(t,oa,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Wr(e,t),e=t.pendingProps;var a=hn(t,ce.current);fn(t,n),a=Bs(null,t,r,e,a,n);var l=$s();return t.flags|=1,typeof a=="object"&&a!==null&&typeof a.render=="function"&&a.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ve(r)?(l=!0,la(t)):l=!1,t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,zs(t),a.updater=Pa,t.stateNode=a,a._reactInternals=t,Wl(t,r,e,n),t=Kl(null,t,r,!0,l,n)):(t.tag=0,V&&l&&Ps(t),de(null,t,a,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Wr(e,t),e=t.pendingProps,a=r._init,r=a(r._payload),t.type=r,a=t.tag=Tp(r),e=Ae(r,e),a){case 0:t=Yl(null,t,r,e,n);break e;case 1:t=ui(null,t,r,e,n);break e;case 11:t=oi(null,t,r,e,n);break e;case 14:t=ii(null,t,r,Ae(r.type,e),n);break e}throw Error(S(306,r,""))}return t;case 0:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:Ae(r,a),Yl(e,t,r,a,n);case 1:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:Ae(r,a),ui(e,t,r,a,n);case 3:e:{if(jc(t),e===null)throw Error(S(387));r=t.pendingProps,l=t.memoizedState,a=l.element,tc(e,t),ca(t,r,null,n);var s=t.memoizedState;if(r=s.element,l.isDehydrated)if(l={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=l,t.memoizedState=l,t.flags&256){a=yn(Error(S(423)),t),t=ci(e,t,r,n,a);break e}else if(r!==a){a=yn(Error(S(424)),t),t=ci(e,t,r,n,a);break e}else for(we=xt(t.stateNode.containerInfo.firstChild),ke=t,V=!0,Re=null,n=Zu(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(xn(),r===a){t=tt(e,t,n);break e}de(e,t,r,n)}t=t.child}return t;case 5:return nc(t),e===null&&$l(t),r=t.type,a=t.pendingProps,l=e!==null?e.memoizedProps:null,s=a.children,Fl(r,a)?s=null:l!==null&&Fl(r,l)&&(t.flags|=32),Nc(e,t),de(e,t,s,n),t.child;case 6:return e===null&&$l(t),null;case 13:return Pc(e,t,n);case 4:return Fs(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=gn(t,null,r,n):de(e,t,r,n),t.child;case 11:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:Ae(r,a),oi(e,t,r,a,n);case 7:return de(e,t,t.pendingProps,n),t.child;case 8:return de(e,t,t.pendingProps.children,n),t.child;case 12:return de(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,a=t.pendingProps,l=t.memoizedProps,s=a.value,U(ia,r._currentValue),r._currentValue=s,l!==null)if(Oe(l.value,s)){if(l.children===a.children&&!ge.current){t=tt(e,t,n);break e}}else for(l=t.child,l!==null&&(l.return=t);l!==null;){var o=l.dependencies;if(o!==null){s=l.child;for(var i=o.firstContext;i!==null;){if(i.context===r){if(l.tag===1){i=Xe(-1,n&-n),i.tag=2;var u=l.updateQueue;if(u!==null){u=u.shared;var h=u.pending;h===null?i.next=i:(i.next=h.next,h.next=i),u.pending=i}}l.lanes|=n,i=l.alternate,i!==null&&(i.lanes|=n),Vl(l.return,n,t),o.lanes|=n;break}i=i.next}}else if(l.tag===10)s=l.type===t.type?null:l.child;else if(l.tag===18){if(s=l.return,s===null)throw Error(S(341));s.lanes|=n,o=s.alternate,o!==null&&(o.lanes|=n),Vl(s,n,t),s=l.sibling}else s=l.child;if(s!==null)s.return=l;else for(s=l;s!==null;){if(s===t){s=null;break}if(l=s.sibling,l!==null){l.return=s.return,s=l;break}s=s.return}l=s}de(e,t,a.children,n),t=t.child}return t;case 9:return a=t.type,r=t.pendingProps.children,fn(t,n),a=Le(a),r=r(a),t.flags|=1,de(e,t,r,n),t.child;case 14:return r=t.type,a=Ae(r,t.pendingProps),a=Ae(r.type,a),ii(e,t,r,a,n);case 15:return Ec(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:Ae(r,a),Wr(e,t),t.tag=1,ve(r)?(e=!0,la(t)):e=!1,fn(t,n),kc(t,r,a),Wl(t,r,a,n),Kl(null,t,r,!0,e,n);case 19:return Lc(e,t,n);case 22:return _c(e,t,n)}throw Error(S(156,t.tag))};function Qc(e,t){return yu(e,t)}function Lp(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function je(e,t,n,r){return new Lp(e,t,n,r)}function qs(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Tp(e){if(typeof e=="function")return qs(e)?1:0;if(e!=null){if(e=e.$$typeof,e===gs)return 11;if(e===vs)return 14}return 2}function bt(e,t){var n=e.alternate;return n===null?(n=je(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Kr(e,t,n,r,a,l){var s=2;if(r=e,typeof e=="function")qs(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case Gt:return Ot(n.children,a,l,t);case xs:s=8,a|=8;break;case hl:return e=je(12,n,t,a|2),e.elementType=hl,e.lanes=l,e;case xl:return e=je(13,n,t,a),e.elementType=xl,e.lanes=l,e;case gl:return e=je(19,n,t,a),e.elementType=gl,e.lanes=l,e;case nu:return Ma(n,a,l,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case eu:s=10;break e;case tu:s=9;break e;case gs:s=11;break e;case vs:s=14;break e;case st:s=16,r=null;break e}throw Error(S(130,e==null?e:typeof e,""))}return t=je(s,n,t,a),t.elementType=e,t.type=r,t.lanes=l,t}function Ot(e,t,n,r){return e=je(7,e,r,t),e.lanes=n,e}function Ma(e,t,n,r){return e=je(22,e,r,t),e.elementType=nu,e.lanes=n,e.stateNode={isHidden:!1},e}function cl(e,t,n){return e=je(6,e,null,t),e.lanes=n,e}function dl(e,t,n){return t=je(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Mp(e,t,n,r,a){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Wa(0),this.expirationTimes=Wa(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Wa(0),this.identifierPrefix=r,this.onRecoverableError=a,this.mutableSourceEagerHydrationData=null}function Zs(e,t,n,r,a,l,s,o,i){return e=new Mp(e,t,n,o,i),t===1?(t=1,l===!0&&(t|=8)):t=0,l=je(3,null,null,t),e.current=l,l.stateNode=e,l.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},zs(l),e}function Ap(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Jt,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Yc(e){if(!e)return St;e=e._reactInternals;e:{if(Wt(e)!==e||e.tag!==1)throw Error(S(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ve(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(S(171))}if(e.tag===1){var n=e.type;if(ve(n))return Yu(e,n,t)}return t}function Kc(e,t,n,r,a,l,s,o,i){return e=Zs(n,r,!0,e,a,l,s,o,i),e.context=Yc(null),n=e.current,r=fe(),a=yt(n),l=Xe(r,a),l.callback=t??null,gt(n,l,a),e.current.lanes=a,pr(e,a,r),ye(e,r),e}function Aa(e,t,n,r){var a=t.current,l=fe(),s=yt(a);return n=Yc(n),t.context===null?t.context=n:t.pendingContext=n,t=Xe(l,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=gt(a,t,s),e!==null&&(Fe(e,a,s,l),$r(e,a,s)),s}function va(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function bi(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function eo(e,t){bi(e,t),(e=e.alternate)&&bi(e,t)}function Ip(){return null}var Jc=typeof reportError=="function"?reportError:function(e){console.error(e)};function to(e){this._internalRoot=e}Ia.prototype.render=to.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(S(409));Aa(e,t,null,null)};Ia.prototype.unmount=to.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Vt(function(){Aa(null,e,null,null)}),t[Ze]=null}};function Ia(e){this._internalRoot=e}Ia.prototype.unstable_scheduleHydration=function(e){if(e){var t=_u();e={blockedOn:null,target:e,priority:t};for(var n=0;n<it.length&&t!==0&&t<it[n].priority;n++);it.splice(n,0,e),n===0&&ju(e)}};function no(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ra(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function wi(){}function Rp(e,t,n,r,a){if(a){if(typeof r=="function"){var l=r;r=function(){var u=va(s);l.call(u)}}var s=Kc(t,r,e,0,null,!1,!1,"",wi);return e._reactRootContainer=s,e[Ze]=s.current,tr(e.nodeType===8?e.parentNode:e),Vt(),s}for(;a=e.lastChild;)e.removeChild(a);if(typeof r=="function"){var o=r;r=function(){var u=va(i);o.call(u)}}var i=Zs(e,0,!1,null,null,!1,!1,"",wi);return e._reactRootContainer=i,e[Ze]=i.current,tr(e.nodeType===8?e.parentNode:e),Vt(function(){Aa(t,i,n,r)}),i}function za(e,t,n,r,a){var l=n._reactRootContainer;if(l){var s=l;if(typeof a=="function"){var o=a;a=function(){var i=va(s);o.call(i)}}Aa(t,s,e,a)}else s=Rp(n,t,e,a,r);return va(s)}Cu=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=zn(t.pendingLanes);n!==0&&(ws(t,n|1),ye(t,J()),!(R&6)&&(bn=J()+500,_t()))}break;case 13:Vt(function(){var r=et(e,1);if(r!==null){var a=fe();Fe(r,e,1,a)}}),eo(e,1)}};ks=function(e){if(e.tag===13){var t=et(e,134217728);if(t!==null){var n=fe();Fe(t,e,134217728,n)}eo(e,134217728)}};Eu=function(e){if(e.tag===13){var t=yt(e),n=et(e,t);if(n!==null){var r=fe();Fe(n,e,t,r)}eo(e,t)}};_u=function(){return D};Nu=function(e,t){var n=D;try{return D=e,t()}finally{D=n}};Nl=function(e,t,n){switch(t){case"input":if(bl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=_a(r);if(!a)throw Error(S(90));au(r),bl(r,a)}}}break;case"textarea":su(e,n);break;case"select":t=n.value,t!=null&&on(e,!!n.multiple,t,!1)}};pu=Js;mu=Vt;var zp={usingClientEntryPoint:!1,Events:[hr,en,_a,du,fu,Js]},An={findFiberByHostInstance:It,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Fp={bundleType:An.bundleType,version:An.version,rendererPackageName:An.rendererPackageName,rendererConfig:An.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:nt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=gu(e),e===null?null:e.stateNode},findFiberByHostInstance:An.findFiberByHostInstance||Ip,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var zr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!zr.isDisabled&&zr.supportsFiber)try{ka=zr.inject(Fp),He=zr}catch{}}Ce.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=zp;Ce.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!no(t))throw Error(S(200));return Ap(e,t,null,n)};Ce.createRoot=function(e,t){if(!no(e))throw Error(S(299));var n=!1,r="",a=Jc;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),t=Zs(e,1,!1,null,null,n,!1,r,a),e[Ze]=t.current,tr(e.nodeType===8?e.parentNode:e),new to(t)};Ce.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(S(188)):(e=Object.keys(e).join(","),Error(S(268,e)));return e=gu(t),e=e===null?null:e.stateNode,e};Ce.flushSync=function(e){return Vt(e)};Ce.hydrate=function(e,t,n){if(!Ra(t))throw Error(S(200));return za(null,e,t,!0,n)};Ce.hydrateRoot=function(e,t,n){if(!no(e))throw Error(S(405));var r=n!=null&&n.hydratedSources||null,a=!1,l="",s=Jc;if(n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=Kc(t,null,e,1,n??null,a,!1,l,s),e[Ze]=t.current,tr(e),r)for(e=0;e<r.length;e++)n=r[e],a=n._getVersion,a=a(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,a]:t.mutableSourceEagerHydrationData.push(n,a);return new Ia(t)};Ce.render=function(e,t,n){if(!Ra(t))throw Error(S(200));return za(null,e,t,!1,n)};Ce.unmountComponentAtNode=function(e){if(!Ra(e))throw Error(S(40));return e._reactRootContainer?(Vt(function(){za(null,null,e,!1,function(){e._reactRootContainer=null,e[Ze]=null})}),!0):!1};Ce.unstable_batchedUpdates=Js;Ce.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Ra(n))throw Error(S(200));if(e==null||e._reactInternals===void 0)throw Error(S(38));return za(e,t,n,!1,r)};Ce.version="18.3.1-next-f1338f8080-20240426";function Gc(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Gc)}catch(e){console.error(e)}}Gc(),Gi.exports=Ce;var Op=Gi.exports,ki=Op;pl.createRoot=ki.createRoot,pl.hydrateRoot=ki.hydrateRoot;/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function cr(){return cr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},cr.apply(this,arguments)}var ft;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(ft||(ft={}));const Si="popstate";function Dp(e){e===void 0&&(e={});function t(a,l){let{pathname:s="/",search:o="",hash:i=""}=Qt(a.location.hash.substr(1));return!s.startsWith("/")&&!s.startsWith(".")&&(s="/"+s),ss("",{pathname:s,search:o,hash:i},l.state&&l.state.usr||null,l.state&&l.state.key||"default")}function n(a,l){let s=a.document.querySelector("base"),o="";if(s&&s.getAttribute("href")){let i=a.location.href,u=i.indexOf("#");o=u===-1?i:i.slice(0,u)}return o+"#"+(typeof l=="string"?l:ya(l))}function r(a,l){Fa(a.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(l)+")")}return Bp(t,n,r,e)}function G(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Fa(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Up(){return Math.random().toString(36).substr(2,8)}function Ci(e,t){return{usr:e.state,key:e.key,idx:t}}function ss(e,t,n,r){return n===void 0&&(n=null),cr({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Qt(t):t,{state:n,key:t&&t.key||r||Up()})}function ya(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Qt(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function Bp(e,t,n,r){r===void 0&&(r={});let{window:a=document.defaultView,v5Compat:l=!1}=r,s=a.history,o=ft.Pop,i=null,u=h();u==null&&(u=0,s.replaceState(cr({},s.state,{idx:u}),""));function h(){return(s.state||{idx:null}).idx}function p(){o=ft.Pop;let b=h(),d=b==null?null:b-u;u=b,i&&i({action:o,location:y.location,delta:d})}function f(b,d){o=ft.Push;let c=ss(y.location,b,d);n&&n(c,b),u=h()+1;let m=Ci(c,u),w=y.createHref(c);try{s.pushState(m,"",w)}catch(k){if(k instanceof DOMException&&k.name==="DataCloneError")throw k;a.location.assign(w)}l&&i&&i({action:o,location:y.location,delta:1})}function g(b,d){o=ft.Replace;let c=ss(y.location,b,d);n&&n(c,b),u=h();let m=Ci(c,u),w=y.createHref(c);s.replaceState(m,"",w),l&&i&&i({action:o,location:y.location,delta:0})}function v(b){let d=a.location.origin!=="null"?a.location.origin:a.location.href,c=typeof b=="string"?b:ya(b);return c=c.replace(/ $/,"%20"),G(d,"No window.location.(origin|href) available to create URL for href: "+c),new URL(c,d)}let y={get action(){return o},get location(){return e(a,s)},listen(b){if(i)throw new Error("A history only accepts one active listener");return a.addEventListener(Si,p),i=b,()=>{a.removeEventListener(Si,p),i=null}},createHref(b){return t(a,b)},createURL:v,encodeLocation(b){let d=v(b);return{pathname:d.pathname,search:d.search,hash:d.hash}},push:f,replace:g,go(b){return s.go(b)}};return y}var Ei;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Ei||(Ei={}));function $p(e,t,n){return n===void 0&&(n="/"),Vp(e,t,n)}function Vp(e,t,n,r){let a=typeof t=="string"?Qt(t):t,l=ro(a.pathname||"/",n);if(l==null)return null;let s=Xc(e);Hp(s);let o=null;for(let i=0;o==null&&i<s.length;++i){let u=nm(l);o=Zp(s[i],u)}return o}function Xc(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let a=(l,s,o)=>{let i={relativePath:o===void 0?l.path||"":o,caseSensitive:l.caseSensitive===!0,childrenIndex:s,route:l};i.relativePath.startsWith("/")&&(G(i.relativePath.startsWith(r),'Absolute route path "'+i.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),i.relativePath=i.relativePath.slice(r.length));let u=wt([r,i.relativePath]),h=n.concat(i);l.children&&l.children.length>0&&(G(l.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Xc(l.children,t,h,u)),!(l.path==null&&!l.index)&&t.push({path:u,score:Xp(u,l.index),routesMeta:h})};return e.forEach((l,s)=>{var o;if(l.path===""||!((o=l.path)!=null&&o.includes("?")))a(l,s);else for(let i of qc(l.path))a(l,s,i)}),t}function qc(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,a=n.endsWith("?"),l=n.replace(/\?$/,"");if(r.length===0)return a?[l,""]:[l];let s=qc(r.join("/")),o=[];return o.push(...s.map(i=>i===""?l:[l,i].join("/"))),a&&o.push(...s),o.map(i=>e.startsWith("/")&&i===""?"/":i)}function Hp(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:qp(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Wp=/^:[\w-]+$/,Qp=3,Yp=2,Kp=1,Jp=10,Gp=-2,_i=e=>e==="*";function Xp(e,t){let n=e.split("/"),r=n.length;return n.some(_i)&&(r+=Gp),t&&(r+=Yp),n.filter(a=>!_i(a)).reduce((a,l)=>a+(Wp.test(l)?Qp:l===""?Kp:Jp),r)}function qp(e,t){return e.length===t.length&&e.slice(0,-1).every((r,a)=>r===t[a])?e[e.length-1]-t[t.length-1]:0}function Zp(e,t,n){let{routesMeta:r}=e,a={},l="/",s=[];for(let o=0;o<r.length;++o){let i=r[o],u=o===r.length-1,h=l==="/"?t:t.slice(l.length)||"/",p=em({path:i.relativePath,caseSensitive:i.caseSensitive,end:u},h),f=i.route;if(!p)return null;Object.assign(a,p.params),s.push({params:a,pathname:wt([l,p.pathname]),pathnameBase:om(wt([l,p.pathnameBase])),route:f}),p.pathnameBase!=="/"&&(l=wt([l,p.pathnameBase]))}return s}function em(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=tm(e.path,e.caseSensitive,e.end),a=t.match(n);if(!a)return null;let l=a[0],s=l.replace(/(.)\/+$/,"$1"),o=a.slice(1);return{params:r.reduce((u,h,p)=>{let{paramName:f,isOptional:g}=h;if(f==="*"){let y=o[p]||"";s=l.slice(0,l.length-y.length).replace(/(.)\/+$/,"$1")}const v=o[p];return g&&!v?u[f]=void 0:u[f]=(v||"").replace(/%2F/g,"/"),u},{}),pathname:l,pathnameBase:s,pattern:e}}function tm(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Fa(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],a="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(s,o,i)=>(r.push({paramName:o,isOptional:i!=null}),i?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),a+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?a+="\\/*$":e!==""&&e!=="/"&&(a+="(?:(?=\\/|$))"),[new RegExp(a,t?void 0:"i"),r]}function nm(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Fa(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function ro(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}const rm=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,am=e=>rm.test(e);function lm(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:a=""}=typeof e=="string"?Qt(e):e,l;if(n)if(am(n))l=n;else{if(n.includes("//")){let s=n;n=n.replace(/\/\/+/g,"/"),Fa(!1,"Pathnames cannot have embedded double slashes - normalizing "+(s+" -> "+n))}n.startsWith("/")?l=Ni(n.substring(1),"/"):l=Ni(n,t)}else l=t;return{pathname:l,search:im(r),hash:um(a)}}function Ni(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(a=>{a===".."?n.length>1&&n.pop():a!=="."&&n.push(a)}),n.length>1?n.join("/"):"/"}function fl(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function sm(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function ao(e,t){let n=sm(e);return t?n.map((r,a)=>a===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function lo(e,t,n,r){r===void 0&&(r=!1);let a;typeof e=="string"?a=Qt(e):(a=cr({},e),G(!a.pathname||!a.pathname.includes("?"),fl("?","pathname","search",a)),G(!a.pathname||!a.pathname.includes("#"),fl("#","pathname","hash",a)),G(!a.search||!a.search.includes("#"),fl("#","search","hash",a)));let l=e===""||a.pathname==="",s=l?"/":a.pathname,o;if(s==null)o=n;else{let p=t.length-1;if(!r&&s.startsWith("..")){let f=s.split("/");for(;f[0]==="..";)f.shift(),p-=1;a.pathname=f.join("/")}o=p>=0?t[p]:"/"}let i=lm(a,o),u=s&&s!=="/"&&s.endsWith("/"),h=(l||s===".")&&n.endsWith("/");return!i.pathname.endsWith("/")&&(u||h)&&(i.pathname+="/"),i}const wt=e=>e.join("/").replace(/\/\/+/g,"/"),om=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),im=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,um=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function cm(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Zc=["post","put","patch","delete"];new Set(Zc);const dm=["get",...Zc];new Set(dm);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function dr(){return dr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},dr.apply(this,arguments)}const so=E.createContext(null),fm=E.createContext(null),Nt=E.createContext(null),Oa=E.createContext(null),jt=E.createContext({outlet:null,matches:[],isDataRoute:!1}),ed=E.createContext(null);function pm(e,t){let{relative:n}=t===void 0?{}:t;Cn()||G(!1);let{basename:r,navigator:a}=E.useContext(Nt),{hash:l,pathname:s,search:o}=nd(e,{relative:n}),i=s;return r!=="/"&&(i=s==="/"?r:wt([r,s])),a.createHref({pathname:i,search:o,hash:l})}function Cn(){return E.useContext(Oa)!=null}function En(){return Cn()||G(!1),E.useContext(Oa).location}function td(e){E.useContext(Nt).static||E.useLayoutEffect(e)}function gr(){let{isDataRoute:e}=E.useContext(jt);return e?_m():mm()}function mm(){Cn()||G(!1);let e=E.useContext(so),{basename:t,future:n,navigator:r}=E.useContext(Nt),{matches:a}=E.useContext(jt),{pathname:l}=En(),s=JSON.stringify(ao(a,n.v7_relativeSplatPath)),o=E.useRef(!1);return td(()=>{o.current=!0}),E.useCallback(function(u,h){if(h===void 0&&(h={}),!o.current)return;if(typeof u=="number"){r.go(u);return}let p=lo(u,JSON.parse(s),l,h.relative==="path");e==null&&t!=="/"&&(p.pathname=p.pathname==="/"?t:wt([t,p.pathname])),(h.replace?r.replace:r.push)(p,h.state,h)},[t,r,s,l,e])}function nd(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=E.useContext(Nt),{matches:a}=E.useContext(jt),{pathname:l}=En(),s=JSON.stringify(ao(a,r.v7_relativeSplatPath));return E.useMemo(()=>lo(e,JSON.parse(s),l,n==="path"),[e,s,l,n])}function hm(e,t){return xm(e,t)}function xm(e,t,n,r){Cn()||G(!1);let{navigator:a}=E.useContext(Nt),{matches:l}=E.useContext(jt),s=l[l.length-1],o=s?s.params:{};s&&s.pathname;let i=s?s.pathnameBase:"/";s&&s.route;let u=En(),h;if(t){var p;let b=typeof t=="string"?Qt(t):t;i==="/"||(p=b.pathname)!=null&&p.startsWith(i)||G(!1),h=b}else h=u;let f=h.pathname||"/",g=f;if(i!=="/"){let b=i.replace(/^\//,"").split("/");g="/"+f.replace(/^\//,"").split("/").slice(b.length).join("/")}let v=$p(e,{pathname:g}),y=wm(v&&v.map(b=>Object.assign({},b,{params:Object.assign({},o,b.params),pathname:wt([i,a.encodeLocation?a.encodeLocation(b.pathname).pathname:b.pathname]),pathnameBase:b.pathnameBase==="/"?i:wt([i,a.encodeLocation?a.encodeLocation(b.pathnameBase).pathname:b.pathnameBase])})),l,n,r);return t&&y?E.createElement(Oa.Provider,{value:{location:dr({pathname:"/",search:"",hash:"",state:null,key:"default"},h),navigationType:ft.Pop}},y):y}function gm(){let e=Em(),t=cm(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,a={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return E.createElement(E.Fragment,null,E.createElement("h2",null,"Unexpected Application Error!"),E.createElement("h3",{style:{fontStyle:"italic"}},t),n?E.createElement("pre",{style:a},n):null,null)}const vm=E.createElement(gm,null);class ym extends E.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?E.createElement(jt.Provider,{value:this.props.routeContext},E.createElement(ed.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function bm(e){let{routeContext:t,match:n,children:r}=e,a=E.useContext(so);return a&&a.static&&a.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=n.route.id),E.createElement(jt.Provider,{value:t},r)}function wm(e,t,n,r){var a;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var l;if(!n)return null;if(n.errors)e=n.matches;else if((l=r)!=null&&l.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let s=e,o=(a=n)==null?void 0:a.errors;if(o!=null){let h=s.findIndex(p=>p.route.id&&(o==null?void 0:o[p.route.id])!==void 0);h>=0||G(!1),s=s.slice(0,Math.min(s.length,h+1))}let i=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let h=0;h<s.length;h++){let p=s[h];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(u=h),p.route.id){let{loaderData:f,errors:g}=n,v=p.route.loader&&f[p.route.id]===void 0&&(!g||g[p.route.id]===void 0);if(p.route.lazy||v){i=!0,u>=0?s=s.slice(0,u+1):s=[s[0]];break}}}return s.reduceRight((h,p,f)=>{let g,v=!1,y=null,b=null;n&&(g=o&&p.route.id?o[p.route.id]:void 0,y=p.route.errorElement||vm,i&&(u<0&&f===0?(Nm("route-fallback"),v=!0,b=null):u===f&&(v=!0,b=p.route.hydrateFallbackElement||null)));let d=t.concat(s.slice(0,f+1)),c=()=>{let m;return g?m=y:v?m=b:p.route.Component?m=E.createElement(p.route.Component,null):p.route.element?m=p.route.element:m=h,E.createElement(bm,{match:p,routeContext:{outlet:h,matches:d,isDataRoute:n!=null},children:m})};return n&&(p.route.ErrorBoundary||p.route.errorElement||f===0)?E.createElement(ym,{location:n.location,revalidation:n.revalidation,component:y,error:g,children:c(),routeContext:{outlet:null,matches:d,isDataRoute:!0}}):c()},null)}var rd=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(rd||{}),ad=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(ad||{});function km(e){let t=E.useContext(so);return t||G(!1),t}function Sm(e){let t=E.useContext(fm);return t||G(!1),t}function Cm(e){let t=E.useContext(jt);return t||G(!1),t}function ld(e){let t=Cm(),n=t.matches[t.matches.length-1];return n.route.id||G(!1),n.route.id}function Em(){var e;let t=E.useContext(ed),n=Sm(),r=ld();return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function _m(){let{router:e}=km(rd.UseNavigateStable),t=ld(ad.UseNavigateStable),n=E.useRef(!1);return td(()=>{n.current=!0}),E.useCallback(function(a,l){l===void 0&&(l={}),n.current&&(typeof a=="number"?e.navigate(a):e.navigate(a,dr({fromRouteId:t},l)))},[e,t])}const ji={};function Nm(e,t,n){ji[e]||(ji[e]=!0)}function jm(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function ba(e){let{to:t,replace:n,state:r,relative:a}=e;Cn()||G(!1);let{future:l,static:s}=E.useContext(Nt),{matches:o}=E.useContext(jt),{pathname:i}=En(),u=gr(),h=lo(t,ao(o,l.v7_relativeSplatPath),i,a==="path"),p=JSON.stringify(h);return E.useEffect(()=>u(JSON.parse(p),{replace:n,state:r,relative:a}),[u,p,a,n,r]),null}function At(e){G(!1)}function Pm(e){let{basename:t="/",children:n=null,location:r,navigationType:a=ft.Pop,navigator:l,static:s=!1,future:o}=e;Cn()&&G(!1);let i=t.replace(/^\/*/,"/"),u=E.useMemo(()=>({basename:i,navigator:l,static:s,future:dr({v7_relativeSplatPath:!1},o)}),[i,o,l,s]);typeof r=="string"&&(r=Qt(r));let{pathname:h="/",search:p="",hash:f="",state:g=null,key:v="default"}=r,y=E.useMemo(()=>{let b=ro(h,i);return b==null?null:{location:{pathname:b,search:p,hash:f,state:g,key:v},navigationType:a}},[i,h,p,f,g,v,a]);return y==null?null:E.createElement(Nt.Provider,{value:u},E.createElement(Oa.Provider,{children:n,value:y}))}function Lm(e){let{children:t,location:n}=e;return hm(os(t),n)}new Promise(()=>{});function os(e,t){t===void 0&&(t=[]);let n=[];return E.Children.forEach(e,(r,a)=>{if(!E.isValidElement(r))return;let l=[...t,a];if(r.type===E.Fragment){n.push.apply(n,os(r.props.children,l));return}r.type!==At&&G(!1),!r.props.index||!r.props.children||G(!1);let s={id:r.props.id||l.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(s.children=os(r.props.children,l)),n.push(s)}),n}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function is(){return is=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},is.apply(this,arguments)}function Tm(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,l;for(l=0;l<r.length;l++)a=r[l],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function Mm(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Am(e,t){return e.button===0&&(!t||t==="_self")&&!Mm(e)}const Im=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],Rm="6";try{window.__reactRouterVersion=Rm}catch{}const zm="startTransition",Pi=_d[zm];function Fm(e){let{basename:t,children:n,future:r,window:a}=e,l=E.useRef();l.current==null&&(l.current=Dp({window:a,v5Compat:!0}));let s=l.current,[o,i]=E.useState({action:s.action,location:s.location}),{v7_startTransition:u}=r||{},h=E.useCallback(p=>{u&&Pi?Pi(()=>i(p)):i(p)},[i,u]);return E.useLayoutEffect(()=>s.listen(h),[s,h]),E.useEffect(()=>jm(r),[r]),E.createElement(Pm,{basename:t,children:n,location:o.location,navigationType:o.action,navigator:s,future:r})}const Om=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Dm=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,oo=E.forwardRef(function(t,n){let{onClick:r,relative:a,reloadDocument:l,replace:s,state:o,target:i,to:u,preventScrollReset:h,viewTransition:p}=t,f=Tm(t,Im),{basename:g}=E.useContext(Nt),v,y=!1;if(typeof u=="string"&&Dm.test(u)&&(v=u,Om))try{let m=new URL(window.location.href),w=u.startsWith("//")?new URL(m.protocol+u):new URL(u),k=ro(w.pathname,g);w.origin===m.origin&&k!=null?u=k+w.search+w.hash:y=!0}catch{}let b=pm(u,{relative:a}),d=Um(u,{replace:s,state:o,target:i,preventScrollReset:h,relative:a,viewTransition:p});function c(m){r&&r(m),m.defaultPrevented||d(m)}return E.createElement("a",is({},f,{href:v||b,onClick:y||l?r:c,ref:n,target:i}))});var Li;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Li||(Li={}));var Ti;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Ti||(Ti={}));function Um(e,t){let{target:n,replace:r,state:a,preventScrollReset:l,relative:s,viewTransition:o}=t===void 0?{}:t,i=gr(),u=En(),h=nd(e,{relative:s});return E.useCallback(p=>{if(Am(p,n)){p.preventDefault();let f=r!==void 0?r:ya(u)===ya(h);i(e,{replace:f,state:a,preventScrollReset:l,relative:s,viewTransition:o})}},[u,i,h,r,a,n,e,l,s,o])}const Bm="http://localhost:5000/api/v1";async function io(e,t={}){const n=await fetch(`${Bm}${e}`,{headers:{"Content-Type":"application/json",...t.headers||{}},...t}),r=n.headers.get("Content-Type")||"",l=r.includes("application/json")||r.includes("application/problem+json")?await n.json():null;if(!n.ok){const s=(l==null?void 0:l.detail)||(l==null?void 0:l.message)||`Request failed with status ${n.status}`;throw new Error(s)}return l}async function $m({fullName:e,email:t,password:n}){return io("/auth/register",{method:"POST",body:JSON.stringify({full_name:e,email:t,password:n})})}async function Vm({email:e,password:t}){return io("/auth/login",{method:"POST",body:JSON.stringify({email:e,password:t})})}async function Hm({refreshToken:e}){return io("/auth/logout",{method:"POST",body:JSON.stringify({refresh_token:e})})}const uo="architectAccessToken",co="architectRefreshToken",sd="architectUserName",od="architectUserEmail";function Wm(){return localStorage.getItem(uo)||""}function Qm(){return localStorage.getItem(co)||""}function fo(){return!!Wm()}function id({accessToken:e,refreshToken:t,fullName:n,email:r}){e&&localStorage.setItem(uo,e),t&&localStorage.setItem(co,t),n&&localStorage.setItem(sd,n),r&&localStorage.setItem(od,r)}function Ym(){localStorage.removeItem(uo),localStorage.removeItem(co),localStorage.removeItem(sd),localStorage.removeItem(od)}const po="architectImportedCsvRows";function lt(e){return String(e||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\"/g,"&quot;").replace(/'/g,"&#039;")}function Mi(e){const t=String(e||"").replace(/[^0-9+-.]/g,""),n=Number.parseFloat(t);return Number.isFinite(n)?n:0}function Km(e){const t=String(e||"").trim();if(!t)return[];const n=[];let r="",a=[],l=!1;for(let i=0;i<t.length;i+=1){const u=t[i],h=t[i+1];if(u==='"'){l&&h==='"'?(r+='"',i+=1):l=!l;continue}if(!l&&u===","){a.push(r.trim()),r="";continue}if(!l&&(u===`
`||u==="\r")){u==="\r"&&h===`
`&&(i+=1),a.push(r.trim()),a.some(p=>p.length>0)&&n.push(a),a=[],r="";continue}r+=u}if((r.length>0||a.length>0)&&(a.push(r.trim()),a.some(i=>i.length>0)&&n.push(a)),n.length<2)return[];const s=n[0].map(i=>i.toLowerCase().trim());return n.slice(1).map(i=>{const u=(...m)=>{for(const w of m){const k=s.findIndex(_=>_===w);if(k>=0)return i[k]||""}return""},h=u("amount","value","price","total"),p=u("budget","limit","allocated","cap"),f=u("type","kind","transaction_type").toLowerCase(),g=u("status")||"Completed";let v=Mi(h);const y=/^\s*-/.test(String(h||"")),b=/^\s*\+/.test(String(h||"")),d=/expense|debit|spend|purchase|payment|withdraw/.test(f),c=/income|credit|deposit|salary|refund/.test(f);return y&&v>0&&(v*=-1),d&&v>0&&(v*=-1),c&&v<0&&(v*=-1),!d&&!c&&!y&&!b&&v>0&&(v*=-1),{date:u("date","transaction_date")||"N/A",description:u("description","merchant","name","title")||"Transaction",category:u("category","group","tag")||"General",amount:v,budget:Mi(p),status:g}}).filter(i=>i.description||i.amount)}function Ke(e){const t=Number.isFinite(e)?e:0;return new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(t)}function Jm(){try{const e=localStorage.getItem(po),t=JSON.parse(e||"[]");return Array.isArray(t)?t:[]}catch{return[]}}function Gm(e){localStorage.setItem(po,JSON.stringify(e))}function Xm(){localStorage.removeItem(po)}function qm(e){const t=new Map;e.forEach(l=>{if(l.amount>=0)return;const s=l.category||"General",o=t.get(s)||{category:s,spent:0,budget:0};o.spent+=Math.abs(l.amount),Number.isFinite(l.budget)&&l.budget>0&&(o.budget+=l.budget),t.set(s,o)});const n=Array.from(t.values()).map(l=>({...l,budget:l.budget>0?l.budget:l.spent*1.25})).sort((l,s)=>s.spent-l.spent),r=n.reduce((l,s)=>l+s.spent,0),a=n.reduce((l,s)=>l+s.budget,0);return{categories:n,totalSpent:r,totalBudget:a}}function Ai(e,t){var g,v,y;const n=Array.from(e.querySelectorAll("svg .pie-segment"));n.forEach(b=>{b.setAttribute("stroke-dasharray","0 999"),b.setAttribute("stroke-dashoffset","0")});const r=(v=(g=Array.from(e.querySelectorAll("h3")).find(b=>/spending categories/i.test(b.textContent||"")))==null?void 0:g.closest("div"))==null?void 0:v.querySelectorAll(".space-y-4 > .flex.items-center.justify-between.text-sm");if(!t||!t.length){r&&r.length&&Array.from(r).forEach((c,m)=>{if(m===0){c.style.display="flex";const w=c.querySelector("span.font-medium"),k=c.querySelector("span.text-on-surface-variant");w&&(w.textContent="No Data"),k&&(k.textContent="0%")}else c.style.display="none"});const b=Array.from(e.querySelectorAll("span")).find(c=>(c.textContent||"").trim().toLowerCase()==="total"),d=b==null?void 0:b.nextElementSibling;d&&(d.textContent=Ke(0));return}const a=Array.from(e.querySelectorAll("span")).find(b=>(b.textContent||"").trim().toLowerCase()==="total"),l=a==null?void 0:a.nextElementSibling;l&&(l.textContent=Ke(0));const{categories:s,totalSpent:o}=qm(t);if(!s.length||o<=0)return;const i=s.slice(0,3),u=i.reduce((b,d)=>b+d.spent,0);if(u<=0)return;const h=Number.parseFloat(((y=n[0])==null?void 0:y.getAttribute("r"))||"40"),p=2*Math.PI*h;let f=0;n.forEach((b,d)=>{const c=i[d];if(!c){b.setAttribute("stroke-dasharray",`0 ${p.toFixed(1)}`),b.setAttribute("stroke-dashoffset","0");return}const m=c.spent/u*p;b.setAttribute("stroke-dasharray",`${m.toFixed(1)} ${(p-m).toFixed(1)}`),b.setAttribute("stroke-dashoffset",`${(-f).toFixed(1)}`),f+=m}),r&&r.length&&Array.from(r).forEach((b,d)=>{const c=i[d],m=b.querySelector("span.font-medium"),w=b.querySelector("span.text-on-surface-variant");if(!c){b.style.display="none";return}if(b.style.display="flex",m&&(m.textContent=c.category),w){const k=Math.round(c.spent/u*100);w.textContent=`${k}%`}}),l&&(l.textContent=Ke(o))}function Zm({title:e,html:t}){const n=E.useRef(null),r=gr();E.useEffect(()=>{document.title=`${e} | Expense Tracker React`},[e]);const a=f=>/\bfull report\b/.test(f)?"/spending-report":/\bsettings\b/.test(f)||/\bperson\b/.test(f)?"/settings":/\btransactions?\b/.test(f)||/\bactivity\b/.test(f)?"/transactions-list":/\bbudgets?\b/.test(f)||/\baccounts?\b/.test(f)?"/budgets-categories":/\bdashboard\b/.test(f)||/\bhome\b/.test(f)?"/dashboard-3":/\badd expense\b/.test(f)?"/add-expense":null,l=f=>{Array.from(f.querySelectorAll("span, p, a, div")).filter(y=>(y.textContent||"").trim().toLowerCase()==="analytics").forEach(y=>{const b=y.closest("a, button, div");b&&b.remove()}),Array.from(f.querySelectorAll(".material-symbols-outlined")).filter(y=>(y.textContent||"").trim().toLowerCase()==="bar_chart").forEach(y=>{const b=y.closest("a, button, div");b&&/analytics/i.test(b.textContent||"")&&b.remove()})},s=f=>{const g=localStorage.getItem("architectUserName")||"",v=localStorage.getItem("architectUserEmail")||"";if(!g&&!v)return;Array.from(f.querySelectorAll("*")).forEach(b=>{if(b.children.length>0)return;const d=(b.textContent||"").trim();g&&d==="Alex Sterling"&&(b.textContent=g),v&&d==="alex.sterling@architect-finance.com"&&(b.textContent=v)})},o=(f,g)=>{var L,F,q;const v=g.filter(I=>I.amount>0).reduce((I,H)=>I+H.amount,0),y=g.filter(I=>I.amount<0).reduce((I,H)=>I+Math.abs(H.amount),0),b=v-y,d=Array.from(f.querySelectorAll("h2")).find(I=>/financial architecture summary/i.test(I.textContent||"")),c=d==null?void 0:d.nextElementSibling;c&&(c.textContent=Ke(b));const m=Array.from(f.querySelectorAll("p")).find(I=>(I.textContent||"").trim().toLowerCase()==="monthly income"),w=(L=m==null?void 0:m.parentElement)==null?void 0:L.querySelector("p.text-3xl");w&&(w.textContent=`+${Ke(v)}`);const k=Array.from(f.querySelectorAll("p")).find(I=>(I.textContent||"").trim().toLowerCase()==="monthly spending"),_=(F=k==null?void 0:k.parentElement)==null?void 0:F.querySelector("p.text-3xl");_&&(_.textContent=`-${Ke(y)}`);const C=Array.from(f.querySelectorAll("h3")).find(I=>/recent transactions/i.test(I.textContent||"")),N=(q=C==null?void 0:C.parentElement)==null?void 0:q.nextElementSibling;if(!N)return;if(!g.length){N.innerHTML='<div class="bg-surface-container-lowest p-4 rounded-2xl text-on-surface-variant text-sm">No CSV transactions imported yet.</div>',Ai(f,[]);return}const z=g.slice(0,6);N.innerHTML=z.map(I=>{const H=I.amount>=0;return`<div class="bg-surface-container-lowest p-4 rounded-2xl flex items-center justify-between transition-transform hover:scale-[1.01] cursor-pointer">
  <div>
    <p class="font-bold text-on-surface">${lt(I.description)}</p>
    <p class="text-xs text-on-surface-variant">${lt(I.date)} • ${lt(I.category)}</p>
  </div>
  <div class="text-right">
    <p class="font-bold ${H?"text-tertiary":"text-on-surface"}">${H?"+":"-"}${Ke(Math.abs(I.amount))}</p>
    <span class="inline-block px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-tighter ${H?"bg-tertiary-container text-on-tertiary-container":"bg-error-container text-on-error-container"}">${H?"Income":"Expense"}</span>
  </div>
</div>`}).join(""),Ai(f,g)},i=(f,g)=>{const y=Array.isArray(g)?g:[];let b=[...y];const d={currentPage:1,totalPages:Math.max(1,Math.ceil(b.length/10))},c=(k,_)=>{if(_<=7)return Array.from({length:_},(L,F)=>F+1);const C=[1],N=Math.max(2,k-1),z=Math.min(_-1,k+1);N>2&&C.push("...");for(let L=N;L<=z;L+=1)C.push(L);return z<_-1&&C.push("..."),C.push(_),C},m=()=>{var L;d.totalPages=Math.max(1,Math.ceil(b.length/10)),d.currentPage=Math.min(Math.max(d.currentPage,1),d.totalPages);const k=f.querySelector("tbody");if(k){const F=(d.currentPage-1)*10,q=Math.min(F+10,b.length),I=b.slice(F,q);I.length?k.innerHTML=I.map(H=>{const rt=H.amount>=0;return`<tr class="hover:bg-surface-container-low/40 transition-colors group">
  <td class="px-8 py-6"><span class="text-sm font-bold text-on-surface">${lt(H.date)}</span></td>
  <td class="px-8 py-6"><span class="text-sm font-bold text-on-surface">${lt(H.description)}</span></td>
  <td class="px-8 py-6"><span class="px-3 py-1 bg-surface-container-high rounded-full text-[11px] font-bold text-on-primary-fixed-variant">${lt(H.category)}</span></td>
  <td class="px-8 py-6 text-right"><span class="px-3 py-1 bg-tertiary-container/20 text-tertiary text-[11px] font-bold rounded-full">${lt(H.status||"Completed")}</span></td>
  <td class="px-8 py-6 text-right"><span class="text-sm font-extrabold ${rt?"text-tertiary":"text-on-surface"}">${rt?"+":"-"}${Ke(Math.abs(H.amount))}</span></td>
  <td class="px-8 py-6"></td>
</tr>`}).join(""):k.innerHTML='<tr><td colspan="6" class="px-8 py-10 text-center text-on-surface-variant">No transactions found for the selected category.</td></tr>'}const _=Array.from(f.querySelectorAll("span")).find(F=>{const q=(F.textContent||"").trim().toLowerCase();return q.startsWith("showing")&&q.includes("transactions")}),C=_==null?void 0:_.closest("div");if(C&&_){const F=b.length,q=F===0?0:(d.currentPage-1)*10+1,I=F===0?0:Math.min(d.currentPage*10,F);_.textContent=`Showing ${q}-${I} of ${F} transactions`;const H=C.querySelector("div.flex.items-center.gap-1");if(H){H.innerHTML="";const rt=({text:De,page:Ue,disabled:j=!1,isActive:T=!1,icon:M=""})=>{const O=f.createElement("button");O.className=T?"w-10 h-10 rounded-xl flex items-center justify-center bg-primary text-on-primary text-xs font-bold":"w-10 h-10 rounded-xl flex items-center justify-center hover:bg-surface-container-high text-xs font-bold transition-colors",M?O.innerHTML=`<span class="material-symbols-outlined text-sm">${M}</span>`:O.textContent=String(De),O.disabled=j,j&&(O.className+=" opacity-40 cursor-not-allowed"),!j&&typeof Ue=="number"&&O.addEventListener("click",()=>{d.currentPage=Ue,m()}),H.appendChild(O)};rt({icon:"chevron_left",page:d.currentPage-1,disabled:d.currentPage===1}),c(d.currentPage,d.totalPages).forEach(De=>{if(De==="..."){const Ue=f.createElement("span");Ue.className="px-2 text-on-surface-variant",Ue.textContent="...",H.appendChild(Ue);return}rt({text:De,page:De,isActive:De===d.currentPage})}),rt({icon:"chevron_right",page:d.currentPage+1,disabled:d.currentPage===d.totalPages})}}const N=Array.from(f.querySelectorAll("span")).find(F=>/total spending/i.test(F.textContent||"")),z=(L=N==null?void 0:N.parentElement)==null?void 0:L.querySelector("h2");if(z){const F=b.filter(q=>q.amount<0).reduce((q,I)=>q+Math.abs(I.amount),0);z.textContent=Ke(F)}},w=Array.from(f.querySelectorAll("select")).find(k=>Array.from(k.options).some(_=>(_.textContent||"").trim().toLowerCase()==="all categories"));if(w){const k=new Map;y.forEach(C=>{const N=String(C.category||"General").trim()||"General",z=N.toLowerCase();k.has(z)||k.set(z,N)});const _=Array.from(k.values()).sort((C,N)=>C.localeCompare(N));w.innerHTML=["All Categories",..._].map(C=>`<option>${lt(C)}</option>`).join(""),w.addEventListener("change",()=>{const C=(w.value||"All Categories").trim().toLowerCase();b=C==="all categories"?[...y]:y.filter(N=>String(N.category||"General").trim().toLowerCase()===C),d.currentPage=1,m()})}m()},u=(f,g,v)=>{/dashboard/i.test(g)&&o(f,v),/transactions/i.test(g)&&i(f,v)},h=(f,g)=>{if(!/dashboard/i.test(g)||f.getElementById("architect-csv-importer"))return;const v=f.querySelector("header .flex.items-center.gap-4")||f.querySelector("header .flex.items-center");if(!v)return;const y=f.createElement("input");y.type="file",y.accept=".csv,text/csv",y.style.display="none",y.id="architect-csv-file";const b=f.createElement("button");b.type="button",b.id="architect-csv-importer",b.className="bg-primary hover:bg-primary-container text-on-primary px-4 py-2 rounded-xl font-manrope text-sm font-semibold tracking-tight transition-all active:scale-95 duration-200 ease-in-out",b.textContent="Add CSV";const d=f.createElement("button");d.type="button",d.id="architect-csv-remover",d.className="bg-error-container hover:opacity-90 text-on-error-container px-4 py-2 rounded-xl font-manrope text-sm font-semibold tracking-tight transition-all active:scale-95 duration-200 ease-in-out",d.textContent="Remove CSV",b.addEventListener("click",()=>{y.click()}),d.addEventListener("click",()=>{var c;Xm(),u(f,g,[]),(c=f.defaultView)==null||c.alert("CSV data removed.")}),y.addEventListener("change",async()=>{var k,_,C;const c=(k=y.files)==null?void 0:k[0];if(!c)return;const m=await c.text(),w=Km(m);if(!w.length){(_=f.defaultView)==null||_.alert("Could not read CSV data. Expected headers like date, description, category, amount.");return}Gm(w),u(f,g,w),(C=f.defaultView)==null||C.alert(`Imported ${w.length} transactions from CSV.`),y.value=""}),v.insertBefore(d,v.firstChild),v.insertBefore(b,v.firstChild),f.body.appendChild(y)},p=()=>{const f=n.current;if(!f||!f.contentDocument)return;f.__cleanupBridge&&f.__cleanupBridge();const g=f.contentDocument;l(g),s(g),h(g,e);const v=Jm();u(g,e,v);const y=async b=>{var C;const d=b.target.closest("a, button, div");if(!d)return;const c=d.getAttribute("href"),m=(d.textContent||"").toLowerCase(),w=(((C=d.querySelector(".material-symbols-outlined"))==null?void 0:C.textContent)||"").toLowerCase(),k=`${m} ${w}`;if(/\blogout\b|\bsign out\b/.test(k)){b.preventDefault();const N=Qm();if(N)try{await Hm({refreshToken:N})}catch{}Ym(),r("/login");return}const _=a(k);_&&(c==="#"||d.tagName==="BUTTON"||d.tagName==="DIV")&&(b.preventDefault(),r(_))};g.addEventListener("click",y),f.__cleanupBridge=()=>g.removeEventListener("click",y)};return x.jsx("div",{className:"legacy-page",children:x.jsx("iframe",{ref:n,title:e,className:"legacy-iframe",srcDoc:t,sandbox:"allow-forms allow-modals allow-popups allow-same-origin allow-scripts",onLoad:p})})}function eh(){const e=gr(),[t,n]=E.useState(""),[r,a]=E.useState(""),[l,s]=E.useState(!1),[o,i]=E.useState(!1),[u,h]=E.useState("");E.useEffect(()=>{document.title="Login | Expense Tracker React"},[]);const p=async f=>{var v,y;if(f.preventDefault(),o)return;const g=t.trim();h(""),i(!0);try{const b=await Vm({email:g,password:r});id({accessToken:b.access_token,refreshToken:b.refresh_token,fullName:(v=b.user)==null?void 0:v.full_name,email:(y=b.user)==null?void 0:y.email}),e("/dashboard-3")}catch(b){h(b.message||"Unable to sign in. Please try again.")}finally{i(!1)}};return x.jsxs("div",{className:"relative min-h-screen overflow-hidden bg-background px-6 py-12 font-body text-on-surface antialiased selection:bg-primary/30",children:[x.jsxs("div",{className:"absolute inset-0 z-0 overflow-hidden",children:[x.jsx("div",{className:"absolute left-[-10%] top-[-10%] h-[50%] w-[50%] rounded-full bg-primary/5 blur-[120px]"}),x.jsx("div",{className:"absolute bottom-[-10%] right-[-10%] h-[50%] w-[50%] rounded-full bg-tertiary/5 blur-[120px]"}),x.jsx("div",{className:"absolute inset-0 opacity-20 mix-blend-overlay",children:x.jsx("img",{alt:"Architectural skyscraper detail",className:"h-full w-full object-cover",src:"https://lh3.googleusercontent.com/aida-public/AB6AXuA48QYAS8tMiV2OzMwBUCVv_aK8pVacsNGqsvygBgyn7a9WjQng5iKgDlmVfDujUphsXgeqtGkprCVS4O1dfh1Yb6cKxn677incNxdlRsOcSYMSjr8-ZX6ohOeWOW5wCfS20Eferbxtj2munJJHb0mUv8twoNag7Y5nwVCtN-JvdQBlnW6DPkPMtZfUUgvC9eWMO933Pz_F-FM4UlOvloRWUAZVpsF8DdW04RwuJCTEYbXS0EKXJ7BaZ05prB0MUpuFYi25_0pMhxc"})})]}),x.jsx("main",{className:"relative z-10 mx-auto flex min-h-screen w-full max-w-md items-center justify-center",children:x.jsxs("div",{className:"w-full",children:[x.jsxs("div",{className:"glass-card rounded-xl border border-outline-variant/10 p-10 shadow-[0_40px_100px_rgba(0,0,0,0.4)] xl:p-12",children:[x.jsxs("div",{className:"mb-10 text-center",children:[x.jsx("div",{className:"mb-6 inline-flex items-center justify-center rounded-xl bg-surface-container-highest p-3",children:x.jsx("span",{className:"material-symbols-outlined text-3xl text-primary",children:"account_balance"})}),x.jsx("h1",{className:"mb-2 font-headline text-3xl font-black tracking-tight text-on-surface",children:"Architect"}),x.jsx("p",{className:"font-label text-sm font-medium uppercase tracking-widest text-on-surface-variant",children:"Wealth Management"})]}),x.jsxs("form",{className:"space-y-6",onSubmit:p,autoComplete:"off",children:[x.jsxs("div",{className:"space-y-2",children:[x.jsx("label",{className:"ml-1 block font-label text-xs font-semibold text-on-surface-variant",htmlFor:"email",children:"EMAIL ADDRESS"}),x.jsxs("div",{className:"group relative",children:[x.jsx("div",{className:"pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4",children:x.jsx("span",{className:"material-symbols-outlined text-lg text-on-surface-variant",children:"mail"})}),x.jsx("input",{id:"email",name:"login_email_field",type:"email",value:t,onChange:f=>n(f.target.value),autoComplete:"off",placeholder:"name@company.com",className:"block w-full rounded-xl border-none bg-surface-container-high py-4 pl-12 pr-4 text-on-surface placeholder:text-outline/50 transition-all duration-300 focus:ring-2 focus:ring-primary/20"})]})]}),x.jsxs("div",{className:"space-y-2",children:[x.jsxs("div",{className:"ml-1 flex items-center justify-between",children:[x.jsx("label",{className:"block font-label text-xs font-semibold text-on-surface-variant",htmlFor:"password",children:"PASSWORD"}),x.jsx("a",{className:"text-xs font-semibold text-primary transition-colors hover:text-primary-fixed",href:"#",children:"Forgot Password?"})]}),x.jsxs("div",{className:"group relative",children:[x.jsx("div",{className:"pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4",children:x.jsx("span",{className:"material-symbols-outlined text-lg text-on-surface-variant",children:"lock"})}),x.jsx("input",{id:"password",name:"login_password_field",type:l?"text":"password",value:r,onChange:f=>a(f.target.value),autoComplete:"new-password",placeholder:"••••••••",className:"block w-full rounded-xl border-none bg-surface-container-high py-4 pl-12 pr-12 text-on-surface placeholder:text-outline/50 transition-all duration-300 focus:ring-2 focus:ring-primary/20"}),x.jsx("button",{className:"absolute inset-y-0 right-0 flex items-center pr-4 text-on-surface-variant transition-colors hover:text-on-surface",type:"button",onClick:()=>s(f=>!f),"aria-label":l?"Hide password":"Show password",children:x.jsx("span",{className:"material-symbols-outlined text-lg",children:l?"visibility_off":"visibility"})})]})]}),x.jsx("div",{className:"pt-2",children:x.jsx("button",{className:"editorial-gradient w-full rounded-xl py-4 font-headline font-bold text-on-primary-fixed shadow-lg transition-all duration-200 hover:scale-[1.01] hover:shadow-primary/20 active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-70",type:"submit",disabled:o,children:o?"Signing in...":"Sign In"})}),u?x.jsx("p",{className:"text-sm text-error",children:u}):null]}),x.jsx("div",{className:"mt-10 text-center",children:x.jsxs("p",{className:"text-sm text-on-surface-variant",children:["New to Architect?"," ",x.jsx(oo,{className:"font-bold text-primary transition-colors hover:text-primary-fixed",to:"/signup",children:"Create your account"})]})})]}),x.jsxs("div",{className:"mt-8 flex justify-center space-x-6 text-xs font-label uppercase tracking-widest text-outline opacity-50",children:[x.jsx("a",{className:"transition-colors hover:text-on-surface",href:"#",children:"Privacy Policy"}),x.jsx("a",{className:"transition-colors hover:text-on-surface",href:"#",children:"Terms of Service"}),x.jsx("a",{className:"transition-colors hover:text-on-surface",href:"#",children:"System Status"})]})]})}),x.jsx("div",{className:"pointer-events-none fixed bottom-0 left-0 z-20 h-32 w-full bg-gradient-to-t from-background to-transparent"})]})}function th(){const e=gr(),[t,n]=E.useState(""),[r,a]=E.useState(""),[l,s]=E.useState(""),[o,i]=E.useState(!1),[u,h]=E.useState("");E.useEffect(()=>{document.title="Sign Up | Expense Tracker React"},[]);const p=async f=>{if(f.preventDefault(),o)return;const g=t.trim(),v=r.trim();h(""),i(!0);try{await $m({fullName:g,email:v,password:l}),id({fullName:g,email:v}),e("/dashboard-3")}catch(y){h(y.message||"Unable to create account. Please try again.")}finally{i(!1)}};return x.jsxs("div",{className:"min-h-screen bg-background text-on-background selection:bg-primary-container selection:text-on-primary-container",children:[x.jsxs("header",{className:"fixed top-0 z-50 flex w-full items-center justify-between px-6 py-8",children:[x.jsxs("div",{className:"flex items-center gap-2",children:[x.jsx("div",{className:"flex h-8 w-8 items-center justify-center rounded-lg bg-primary",children:x.jsx("span",{className:"material-symbols-outlined text-xl text-on-primary",style:{fontVariationSettings:"'FILL' 1"},children:"architecture"})}),x.jsx("span",{className:"font-headline text-2xl font-bold tracking-tighter text-slate-50",children:"Architect"})]}),x.jsx("div",{children:x.jsx("a",{className:"font-label text-sm font-medium text-on-surface-variant transition-colors hover:text-primary",href:"#",children:"Help Center"})})]}),x.jsxs("main",{className:"relative flex flex-grow items-center justify-center overflow-hidden px-6 py-24",children:[x.jsx("div",{className:"pointer-events-none absolute right-[-5%] top-[-10%] h-[600px] w-[600px] rounded-full bg-primary/10 blur-[120px]"}),x.jsx("div",{className:"pointer-events-none absolute bottom-[-10%] left-[-5%] h-[500px] w-[500px] rounded-full bg-tertiary/5 blur-[100px]"}),x.jsxs("div",{className:"z-10 w-full max-w-[480px]",children:[x.jsxs("div",{className:"glass-panel rounded-xl p-8 shadow-2xl md:p-12",children:[x.jsxs("div",{className:"mb-10",children:[x.jsx("h1",{className:"mb-2 font-headline text-3xl font-extrabold tracking-tight text-on-surface",children:"Build your future."}),x.jsx("p",{className:"body-md text-on-surface-variant",children:"Secure wealth management for the modern era."})]}),x.jsxs("form",{className:"space-y-6",onSubmit:p,autoComplete:"off",children:[x.jsxs("div",{className:"space-y-2",children:[x.jsx("label",{className:"ml-1 block font-label text-xs font-semibold uppercase tracking-wider text-on-surface-variant",htmlFor:"full-name",children:"Full Name"}),x.jsxs("div",{className:"relative",children:[x.jsx("div",{className:"pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4",children:x.jsx("span",{className:"material-symbols-outlined text-lg text-outline",children:"person"})}),x.jsx("input",{id:"full-name",name:"signup_full_name_field",type:"text",value:t,onChange:f=>n(f.target.value),autoComplete:"off",placeholder:"Johnathan Sterling",className:"w-full rounded-xl border-none bg-surface-container-high py-4 pl-12 pr-4 font-body text-on-surface placeholder:text-outline-variant transition-all focus:ring-2 focus:ring-primary/20"})]})]}),x.jsxs("div",{className:"space-y-2",children:[x.jsx("label",{className:"ml-1 block font-label text-xs font-semibold uppercase tracking-wider text-on-surface-variant",htmlFor:"email",children:"Email Address"}),x.jsxs("div",{className:"relative",children:[x.jsx("div",{className:"pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4",children:x.jsx("span",{className:"material-symbols-outlined text-lg text-outline",children:"mail"})}),x.jsx("input",{id:"email",name:"signup_email_field",type:"email",value:r,onChange:f=>a(f.target.value),autoComplete:"off",placeholder:"john@architect.com",className:"w-full rounded-xl border-none bg-surface-container-high py-4 pl-12 pr-4 font-body text-on-surface placeholder:text-outline-variant transition-all focus:ring-2 focus:ring-primary/20"})]})]}),x.jsxs("div",{className:"space-y-2",children:[x.jsx("label",{className:"ml-1 block font-label text-xs font-semibold uppercase tracking-wider text-on-surface-variant",htmlFor:"password",children:"Password"}),x.jsxs("div",{className:"relative",children:[x.jsx("div",{className:"pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4",children:x.jsx("span",{className:"material-symbols-outlined text-lg text-outline",children:"lock"})}),x.jsx("input",{id:"password",name:"signup_password_field",type:"password",value:l,onChange:f=>s(f.target.value),autoComplete:"new-password",placeholder:"••••••••••••",className:"w-full rounded-xl border-none bg-surface-container-high py-4 pl-12 pr-4 font-body text-on-surface placeholder:text-outline-variant transition-all focus:ring-2 focus:ring-primary/20"})]})]}),x.jsx("div",{className:"pt-2",children:x.jsx("button",{className:"bg-architect-gradient w-full rounded-xl py-4 font-headline text-lg font-bold text-slate-50 shadow-lg shadow-primary/10 transition-all hover:opacity-90 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-70",type:"submit",disabled:o,children:o?"Creating account...":"Create Account"})}),u?x.jsx("p",{className:"text-sm text-error",children:u}):null]}),x.jsxs("p",{className:"mt-10 text-center font-body text-sm text-on-surface-variant",children:["Already have an account?"," ",x.jsx(oo,{className:"ml-1 font-bold text-primary hover:underline",to:"/login",children:"Sign in"})]})]}),x.jsxs("div",{className:"mt-8 flex items-center justify-center gap-6 opacity-40",children:[x.jsxs("div",{className:"flex items-center gap-2",children:[x.jsx("span",{className:"material-symbols-outlined text-sm",children:"security"}),x.jsx("span",{className:"text-[10px] font-bold uppercase tracking-tighter",children:"Bank-Grade Encryption"})]}),x.jsxs("div",{className:"flex items-center gap-2",children:[x.jsx("span",{className:"material-symbols-outlined text-sm",children:"verified_user"}),x.jsx("span",{className:"text-[10px] font-bold uppercase tracking-tighter",children:"SIPC Protected"})]})]})]})]}),x.jsxs("footer",{className:"mt-auto flex w-full flex-col items-center gap-4 bg-slate-950 py-8 text-center",children:[x.jsx("p",{className:"font-inter text-xs uppercase tracking-wide text-slate-500",children:"© 2024 Architect Financial. Structural Serenity."}),x.jsxs("div",{className:"flex gap-6",children:[x.jsx("a",{className:"font-inter text-xs uppercase tracking-wide text-slate-500 transition-colors hover:text-slate-300",href:"#",children:"Terms"}),x.jsx("a",{className:"font-inter text-xs uppercase tracking-wide text-slate-500 transition-colors hover:text-slate-300",href:"#",children:"Privacy"}),x.jsx("a",{className:"font-inter text-xs uppercase tracking-wide text-slate-500 transition-colors hover:text-slate-300",href:"#",children:"Security"})]})]})]})}const nh="architectImportedCsvRows",Ii=["#a8b7ec","#d8bceb","#fb9b43","#6dd3ce","#f07178","#63b3ed","#f6e05e","#68d391","#f687b3","#9f7aea","#4fd1c5","#fc8181"];function rh(){try{const e=localStorage.getItem(nh),t=JSON.parse(e||"[]");return Array.isArray(t)?t:[]}catch{return[]}}function Ri(e){const t=Number.isFinite(e)?e:0;return new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(t)}function ah(e){const t=new Map;e.forEach(a=>{const l=Number(a==null?void 0:a.amount)||0;if(l>=0)return;const s=String((a==null?void 0:a.category)||"General").trim()||"General",o=t.get(s)||0;t.set(s,o+Math.abs(l))});const n=Array.from(t.entries()).map(([a,l])=>({category:a,spent:l})).sort((a,l)=>l.spent-a.spent),r=n.reduce((a,l)=>a+l.spent,0);return{categories:n,totalSpent:r}}function lh(){const[e,t]=E.useState(null),n=rh(),{categories:r,totalSpent:a}=ah(n),l=44,s=18,o=2*Math.PI*l;let i=0;const u=r.map((p,f)=>{const g=a>0?p.spent/a:0,v=g*o,y={...p,color:Ii[f%Ii.length],percent:g*100,dashArray:`${v.toFixed(2)} ${(o-v).toFixed(2)}`,dashOffset:`${(-i).toFixed(2)}`};return i+=v,y}),h=u.find(p=>p.category===e)||null;return x.jsx("div",{className:"min-h-screen bg-background px-6 py-8 text-on-surface",children:x.jsxs("div",{className:"mx-auto w-full max-w-6xl",children:[x.jsxs("div",{className:"mb-8 flex items-center justify-between",children:[x.jsxs("div",{children:[x.jsx("p",{className:"text-xs font-bold uppercase tracking-[0.2em] text-on-surface-variant",children:"CSV Expense Insights"}),x.jsx("h1",{className:"mt-2 text-4xl font-black",children:"Full Spending Report"})]}),x.jsx(oo,{className:"rounded-xl bg-surface-container-high px-4 py-2 text-sm font-semibold text-on-surface transition-colors hover:bg-surface-container-highest",to:"/dashboard-3",children:"Back to Dashboard"})]}),u.length?x.jsxs("div",{className:"grid gap-6 lg:grid-cols-[380px,1fr]",children:[x.jsxs("div",{className:"rounded-3xl bg-surface-container p-6",children:[x.jsx("h2",{className:"text-xl font-bold",children:"All Expense Categories"}),x.jsxs("div",{className:"relative mx-auto mt-6 h-72 w-72",children:[x.jsx("svg",{className:"h-full w-full -rotate-90",viewBox:"0 0 120 120",children:u.map(p=>{const f=(h==null?void 0:h.category)===p.category,g=!!h&&!f;return x.jsx("circle",{cx:"60",cy:"60",r:l,fill:"transparent",stroke:p.color,strokeWidth:f?s+4:s,strokeDasharray:p.dashArray,strokeDashoffset:p.dashOffset,style:{opacity:g?.35:1,cursor:"pointer",transition:"opacity 180ms ease, stroke-width 180ms ease"},onMouseEnter:()=>t(p.category),onMouseLeave:()=>t(null)},p.category)})}),x.jsxs("div",{className:"absolute inset-0 flex flex-col items-center justify-center text-center",children:[x.jsx("p",{className:"text-xs font-bold uppercase tracking-[0.2em] text-on-surface-variant",children:h?h.category:"Total Expenses"}),x.jsx("p",{className:"mt-1 text-3xl font-black",children:Ri(h?h.spent:a)}),x.jsx("p",{className:"mt-1 text-xs text-on-surface-variant",children:h?`${h.percent.toFixed(2)}% of total`:`${u.length} categories`})]})]})]}),x.jsxs("div",{className:"rounded-3xl bg-surface-container p-6",children:[x.jsx("h2",{className:"text-xl font-bold",children:"Category Breakdown"}),x.jsx("div",{className:"mt-4 space-y-3",children:u.map(p=>{const f=(h==null?void 0:h.category)===p.category;return x.jsxs("div",{className:`flex items-center justify-between rounded-xl p-4 transition-all duration-200 ${f?"bg-surface-container-highest ring-1 ring-primary/35":"bg-surface-container-high hover:bg-surface-container-highest"}`,onMouseEnter:()=>t(p.category),onMouseLeave:()=>t(null),role:"button",tabIndex:0,onFocus:()=>t(p.category),onBlur:()=>t(null),children:[x.jsxs("div",{className:"flex items-center gap-3",children:[x.jsx("span",{className:"h-3 w-3 rounded-full",style:{backgroundColor:p.color,boxShadow:f?`0 0 0 6px ${p.color}33`:"none"}}),x.jsx("span",{className:"font-semibold",children:p.category})]}),x.jsxs("div",{className:"text-right",children:[x.jsx("p",{className:"font-bold",children:Ri(p.spent)}),x.jsxs("p",{className:"text-xs text-on-surface-variant",children:[p.percent.toFixed(2),"%"]})]})]},p.category)})})]})]}):x.jsxs("div",{className:"rounded-2xl bg-surface-container p-8",children:[x.jsx("h2",{className:"text-2xl font-bold",children:"No Expense Data Found"}),x.jsx("p",{className:"mt-3 text-on-surface-variant",children:"Upload a CSV from dashboard using Add CSV to generate this report."})]})]})})}const sh=`<!DOCTYPE html>\r
\r
<html class="dark" lang="en"><head>\r
<meta charset="utf-8"/>\r
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>\r
<title>Add Expense | Financial Architect</title>\r
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"><\/script>\r
<link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&amp;family=Inter:wght@400;500;600&amp;display=swap" rel="stylesheet"/>\r
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>\r
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>\r
<script id="tailwind-config">tailwind.config = {darkMode: "class", theme: {extend: {colors: {"on-surface-variant": "#aaaab5", background: "#0d0e12", "on-tertiary-fixed-variant": "#604a71", "on-primary-fixed-variant": "#384775", outline: "#74757f", "outline-variant": "#464750", "on-primary-fixed": "#1a2a56", "on-error-container": "#ff9993", "surface-dim": "#0d0e12", "surface-bright": "#2a2c34", "on-secondary-fixed": "#393f51", "tertiary-container": "#e6cafa", "on-secondary-fixed-variant": "#565b6f", "primary-fixed": "#b6c5fb", "on-tertiary-fixed": "#422d53", "inverse-on-surface": "#54555a", "tertiary-fixed": "#e6cafa", "on-primary": "#2f3e6b", tertiary: "#f1daff", "secondary-container": "#363b4d", "secondary-fixed-dim": "#cfd3eb", "primary-container": "#42517f", primary: "#b6c5fb", "on-tertiary-container": "#564067", "on-background": "#e4e4f0", "tertiary-fixed-dim": "#d8bceb", "on-primary-container": "#dce2ff", "surface-tint": "#b6c5fb", "secondary-fixed": "#dde1f9", "error-container": "#871f21", secondary: "#c1c5dd", error: "#fa746f", "surface-variant": "#23252e", "on-secondary": "#3a4052", "inverse-surface": "#faf8fe", "primary-fixed-dim": "#a8b7ec", "on-secondary-container": "#babed5", "surface-container-lowest": "#000000", "inverse-primary": "#4e5d8c", "surface-container-highest": "#23252e", surface: "#0d0e12", "on-tertiary": "#5f4971", "on-surface": "#e4e4f0", "surface-container": "#181920", "surface-container-low": "#121318", "surface-container-high": "#1e1f26", "on-error": "#490006", "primary-dim": "#a8b7ec", "error-dim": "#c54d4a", "tertiary-dim": "#d8bceb", "secondary-dim": "#b3b8cf"}, borderRadius: {DEFAULT: "0.125rem", lg: "0.25rem", xl: "0.5rem", full: "0.75rem"}, fontFamily: {headline: ["Manrope"], body: ["Inter"], label: ["Inter"], display: "Manrope"}}}};<\/script>\r
<style>\r
        .material-symbols-outlined {\r
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;\r
        }\r
        body {\r
            font-family: 'Inter', sans-serif;\r
        }\r
        h1, h2, .font-headline {\r
            font-family: 'Manrope', sans-serif;\r
        }\r
        input:focus, select:focus, textarea:focus {\r
            outline: none;\r
            box-shadow: 0 0 0 2px rgba(43, 75, 185, 0.2);\r
        }\r
    </style>\r
</head>\r
<body class="bg-surface text-on-surface min-h-screen">\r
<!-- Top Navigation Anchor -->\r
<nav class="bg-[#faf8ff]/80 dark:bg-slate-950/80 backdrop-blur-xl docked top-0 w-full z-40 sticky shadow-[0_20px_40px_rgba(43,75,185,0.06)]">\r
<div class="flex justify-between items-center w-full px-8 py-3 max-w-[1920px] mx-auto">\r
<div class="flex items-center gap-8">\r
<span class="text-2xl font-black text-[#131b2e] dark:text-slate-50 font-manrope">Financial Architect</span>\r
<div class="hidden md:flex gap-6 items-center">\r
<a class="text-[#434655] dark:text-slate-400 font-medium font-manrope text-sm tracking-tight hover:bg-[#e2e7ff] transition-colors px-3 py-1.5 rounded-lg" href="#">Dashboard</a>\r
<a class="text-blue-700 dark:text-blue-300 font-bold border-b-2 border-blue-700 font-manrope text-sm tracking-tight px-3 py-1.5" href="#">Transactions</a>\r
<a class="text-[#434655] dark:text-slate-400 font-medium font-manrope text-sm tracking-tight hover:bg-[#e2e7ff] transition-colors px-3 py-1.5 rounded-lg" href="#">Budgets</a>\r
</div>\r
</div>\r
<div class="flex items-center gap-4">\r
<button class="material-symbols-outlined text-on-surface-variant hover:bg-surface-container-high p-2 rounded-full transition-colors">notifications</button>\r
<button class="material-symbols-outlined text-on-surface-variant hover:bg-surface-container-high p-2 rounded-full transition-colors">settings</button>\r
<img alt="User Profile Avatar" class="w-10 h-10 rounded-full object-cover ring-2 ring-surface-variant" data-alt="Close-up portrait of a professional man with a friendly expression in a brightly lit modern office environment" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAi3JFt99kpszMwZl5cSryv8S6yJgAM2nJilSEy_fesrv2_GNpDTURkbge88SbN_7bo2prq9sQmv-AZkp0h5bNI956BU0hcQ7JQEOKMVs4T_AwwqsOZ41aFE36_iBNieloTS4n8rb253MFedk8WsF2_h17FHba8X6ROHXgS30_1_g60eLLIZDX__ksQ7ACwLIKLHCjJpsqQ8L3v80xkIIQv5fjJClLWTnO4V8RDWNsMZkyhF0cODYniUpmJlYkrmr-F0YVLNrA6PEs"/>\r
</div>\r
</div>\r
</nav>\r
<main class="max-w-4xl mx-auto px-6 py-12">\r
<!-- Breadcrumb / Header Area -->\r
<header class="mb-12">\r
<div class="flex items-center gap-2 mb-4">\r
<button class="flex items-center text-primary font-medium hover:underline text-sm">\r
<span class="material-symbols-outlined text-sm mr-1">arrow_back</span>\r
                    Back to Transactions\r
                </button>\r
</div>\r
<h1 class="text-4xl font-extrabold tracking-tight text-on-surface mb-2">Add Expense</h1>\r
<p class="text-on-surface-variant max-w-lg">Input your transaction details with precision. Your financial architecture updates in real-time.</p>\r
</header>\r
<!-- Transaction Form - Bento-ish Layout -->\r
<form class="grid grid-cols-1 md:grid-cols-12 gap-8">\r
<!-- Amount Section (Large & Prominent) -->\r
<div class="md:col-span-8 bg-surface-container-lowest rounded-2xl p-8 shadow-[0_20px_40px_rgba(43,75,185,0.06)] flex flex-col justify-center min-h-[220px]">\r
<label class="text-on-surface-variant font-medium text-sm mb-4 flex items-center">\r
<span class="material-symbols-outlined mr-2" style="font-variation-settings: 'FILL' 1;">payments</span>\r
                    Transaction Amount\r
                </label>\r
<div class="flex items-baseline border-b-2 border-surface-variant focus-within:border-primary transition-colors pb-4">\r
<span class="text-4xl font-bold text-on-surface-variant mr-4">$</span>\r
<input class="w-full text-6xl md:text-7xl font-extrabold bg-transparent border-none p-0 focus:ring-0 placeholder:text-surface-variant text-on-surface font-headline" placeholder="0.00" required="" step="0.01" type="number"/>\r
</div>\r
</div>\r
<!-- Date Selection -->\r
<div class="md:col-span-4 bg-surface-container-low rounded-2xl p-8 flex flex-col justify-between">\r
<div>\r
<label class="text-on-surface-variant font-medium text-sm mb-4 block">Transaction Date</label>\r
<input class="w-full bg-surface-container-lowest border-none rounded-xl px-4 py-3 text-on-surface font-medium" type="date" value="2024-05-20"/>\r
</div>\r
<div class="mt-6 flex items-center gap-3">\r
<span class="w-2 h-2 rounded-full bg-tertiary"></span>\r
<span class="text-xs font-semibold text-tertiary uppercase tracking-wider">Verified Logic</span>\r
</div>\r
</div>\r
<!-- Merchant & Category Grid -->\r
<div class="md:col-span-12 grid grid-cols-1 md:grid-cols-2 gap-8">\r
<!-- Merchant Info -->\r
<div class="bg-surface-container-low rounded-2xl p-8">\r
<label class="text-on-surface-variant font-medium text-sm mb-4 block">Merchant Name</label>\r
<div class="relative">\r
<span class="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant">store</span>\r
<input class="w-full bg-surface-container-lowest border-none rounded-xl pl-12 pr-4 py-4 text-on-surface placeholder:text-on-surface-variant/50" placeholder="e.g. Blue Bottle Coffee" type="text"/>\r
</div>\r
<div class="mt-8">\r
<label class="text-on-surface-variant font-medium text-sm mb-4 block">Recent Merchants</label>\r
<div class="flex flex-wrap gap-2">\r
<button class="px-4 py-2 rounded-full bg-surface-container-highest text-on-primary-fixed-variant text-xs font-semibold hover:bg-primary hover:text-white transition-all" type="button">Amazon</button>\r
<button class="px-4 py-2 rounded-full bg-surface-container-highest text-on-primary-fixed-variant text-xs font-semibold hover:bg-primary hover:text-white transition-all" type="button">Uber</button>\r
<button class="px-4 py-2 rounded-full bg-surface-container-highest text-on-primary-fixed-variant text-xs font-semibold hover:bg-primary hover:text-white transition-all" type="button">Apple</button>\r
</div>\r
</div>\r
</div>\r
<!-- Category Selector -->\r
<div class="bg-surface-container-low rounded-2xl p-8">\r
<label class="text-on-surface-variant font-medium text-sm mb-4 block">Select Category</label>\r
<div class="grid grid-cols-3 gap-3">\r
<button class="flex flex-col items-center justify-center p-4 bg-surface-container-lowest rounded-xl border-2 border-transparent hover:border-primary group transition-all" type="button">\r
<span class="material-symbols-outlined text-primary mb-2">restaurant</span>\r
<span class="text-[10px] font-bold uppercase tracking-tighter text-on-surface-variant group-hover:text-primary">Dining</span>\r
</button>\r
<button class="flex flex-col items-center justify-center p-4 bg-surface-container-lowest rounded-xl border-2 border-primary group transition-all ring-4 ring-primary/10" type="button">\r
<span class="material-symbols-outlined text-primary mb-2" style="font-variation-settings: 'FILL' 1;">shopping_cart</span>\r
<span class="text-[10px] font-bold uppercase tracking-tighter text-primary">Shopping</span>\r
</button>\r
<button class="flex flex-col items-center justify-center p-4 bg-surface-container-lowest rounded-xl border-2 border-transparent hover:border-primary group transition-all" type="button">\r
<span class="material-symbols-outlined text-primary mb-2">commute</span>\r
<span class="text-[10px] font-bold uppercase tracking-tighter text-on-surface-variant group-hover:text-primary">Transport</span>\r
</button>\r
<button class="flex flex-col items-center justify-center p-4 bg-surface-container-lowest rounded-xl border-2 border-transparent hover:border-primary group transition-all" type="button">\r
<span class="material-symbols-outlined text-primary mb-2">home</span>\r
<span class="text-[10px] font-bold uppercase tracking-tighter text-on-surface-variant group-hover:text-primary">Housing</span>\r
</button>\r
<button class="flex flex-col items-center justify-center p-4 bg-surface-container-lowest rounded-xl border-2 border-transparent hover:border-primary group transition-all" type="button">\r
<span class="material-symbols-outlined text-primary mb-2">movie</span>\r
<span class="text-[10px] font-bold uppercase tracking-tighter text-on-surface-variant group-hover:text-primary">Leisure</span>\r
</button>\r
<button class="flex flex-col items-center justify-center p-4 bg-surface-container-lowest rounded-xl border-2 border-transparent hover:border-primary group transition-all" type="button">\r
<span class="material-symbols-outlined text-primary mb-2">more_horiz</span>\r
<span class="text-[10px] font-bold uppercase tracking-tighter text-on-surface-variant group-hover:text-primary">Other</span>\r
</button>\r
</div>\r
</div>\r
</div>\r
<!-- Notes & Attachments -->\r
<div class="md:col-span-12 bg-surface-container-low rounded-2xl p-8">\r
<div class="flex flex-col md:flex-row gap-8">\r
<div class="flex-1">\r
<label class="text-on-surface-variant font-medium text-sm mb-4 block">Note (Optional)</label>\r
<textarea class="w-full bg-surface-container-lowest border-none rounded-xl p-4 text-on-surface resize-none placeholder:text-on-surface-variant/50" placeholder="Add details about this purchase..." rows="3"></textarea>\r
</div>\r
<div class="w-full md:w-64">\r
<label class="text-on-surface-variant font-medium text-sm mb-4 block">Receipt</label>\r
<div class="h-[104px] border-2 border-dashed border-outline-variant/30 rounded-xl flex flex-col items-center justify-center bg-surface-container-lowest/50 hover:bg-surface-container-highest/30 cursor-pointer transition-all">\r
<span class="material-symbols-outlined text-on-surface-variant mb-1">add_a_photo</span>\r
<span class="text-xs font-semibold text-on-surface-variant">Attach Image</span>\r
</div>\r
</div>\r
</div>\r
</div>\r
<!-- Action Button -->\r
<div class="md:col-span-12 flex justify-end mt-4">\r
<button class="w-full md:w-auto px-12 py-5 bg-gradient-to-br from-primary to-primary-container text-white rounded-xl font-bold text-lg shadow-[0_10px_20px_rgba(43,75,185,0.2)] active:scale-95 transition-transform" type="submit">\r
                    Save Transaction\r
                </button>\r
</div>\r
</form>\r
</main>\r
<!-- Side Navigation Shell (Hidden on mobile) -->\r
<aside class="hidden xl:flex fixed left-0 top-0 h-full w-64 bg-[#faf8ff] dark:bg-slate-950 flex-col p-6 space-y-2 border-r border-slate-100 dark:border-slate-800 z-50">\r
<div class="flex items-center gap-3 mb-8 px-2">\r
<div class="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">\r
<span class="material-symbols-outlined text-white" style="font-variation-settings: 'FILL' 1;">architecture</span>\r
</div>\r
<div>\r
<h3 class="text-xl font-bold text-blue-800 dark:text-blue-300 font-manrope leading-tight">Architect</h3>\r
<p class="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant/60">Wealth Management</p>\r
</div>\r
</div>\r
<nav class="flex-1 space-y-1">\r
<a class="text-[#434655] dark:text-slate-400 px-4 py-3 hover:bg-slate-50 dark:hover:bg-slate-900 rounded-lg flex items-center gap-3 group transition-transform duration-200 hover:translate-x-1" href="#">\r
<span class="material-symbols-outlined">dashboard</span>\r
<span class="font-medium text-sm font-inter">Dashboard</span>\r
</a>\r
<a class="bg-[#dae2fd] dark:bg-blue-900/40 text-[#173bab] dark:text-blue-100 rounded-lg px-4 py-3 font-semibold flex items-center gap-3 group transition-transform duration-200 hover:translate-x-1" href="#">\r
<span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">receipt_long</span>\r
<span class="font-semibold text-sm font-inter">Transactions</span>\r
</a>\r
<a class="text-[#434655] dark:text-slate-400 px-4 py-3 hover:bg-slate-50 dark:hover:bg-slate-900 rounded-lg flex items-center gap-3 group transition-transform duration-200 hover:translate-x-1" href="#">\r
<span class="material-symbols-outlined">account_balance_wallet</span>\r
<span class="font-medium text-sm font-inter">Budgets</span>\r
</a>\r
<a class="text-[#434655] dark:text-slate-400 px-4 py-3 hover:bg-slate-50 dark:hover:bg-slate-900 rounded-lg flex items-center gap-3 group transition-transform duration-200 hover:translate-x-1" href="#">\r
<span class="material-symbols-outlined">bar_chart</span>\r
<span class="font-medium text-sm font-inter">Analytics</span>\r
</a>\r
<a class="text-[#434655] dark:text-slate-400 px-4 py-3 hover:bg-slate-50 dark:hover:bg-slate-900 rounded-lg flex items-center gap-3 group transition-transform duration-200 hover:translate-x-1" href="#">\r
<span class="material-symbols-outlined">settings</span>\r
<span class="font-medium text-sm font-inter">Settings</span>\r
</a>\r
</nav>\r
<div class="pt-6 border-t border-slate-100 dark:border-slate-800 space-y-1">\r
<div class="p-4 bg-surface-container-high rounded-xl mb-4">\r
<p class="text-[10px] font-bold uppercase text-primary mb-1">Upgrade</p>\r
<p class="text-xs font-semibold text-on-surface mb-2">Premium Access</p>\r
<div class="w-full h-1 bg-surface-variant rounded-full overflow-hidden">\r
<div class="w-2/3 h-full bg-primary"></div>\r
</div>\r
</div>\r
<a class="text-[#434655] dark:text-slate-400 px-4 py-3 hover:bg-slate-50 dark:hover:bg-slate-900 rounded-lg flex items-center gap-3 group transition-transform duration-200 hover:translate-x-1" href="#">\r
<span class="material-symbols-outlined">help</span>\r
<span class="font-medium text-sm font-inter">Help Center</span>\r
</a>\r
<a class="text-error px-4 py-3 hover:bg-error-container/20 rounded-lg flex items-center gap-3 group transition-transform duration-200 hover:translate-x-1" href="#">\r
<span class="material-symbols-outlined">logout</span>\r
<span class="font-medium text-sm font-inter">Sign Out</span>\r
</a>\r
</div>\r
</aside>\r
<div class="md:hidden fixed bottom-0 left-0 w-full bg-surface-container-lowest/80 backdrop-blur-xl px-6 py-4 flex justify-between items-center z-50 border-t border-surface-variant/20">\r
<button class="flex flex-col items-center gap-1 text-on-surface-variant">\r
<span class="material-symbols-outlined">dashboard</span>\r
<span class="text-[10px] font-bold uppercase">Home</span>\r
</button>\r
<button class="flex flex-col items-center gap-1 text-primary">\r
<span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">receipt_long</span>\r
<span class="text-[10px] font-bold uppercase">Activity</span>\r
</button>\r
<div class="relative -top-8">\r
<button class="w-14 h-14 bg-primary text-white rounded-full shadow-[0_10px_20px_rgba(43,75,185,0.3)] flex items-center justify-center">\r
<span class="material-symbols-outlined text-3xl">add</span>\r
</button>\r
</div>\r
<button class="flex flex-col items-center gap-1 text-on-surface-variant">\r
<span class="material-symbols-outlined">bar_chart</span>\r
<span class="text-[10px] font-bold uppercase">Stats</span>\r
</button>\r
<button class="flex flex-col items-center gap-1 text-on-surface-variant">\r
<span class="material-symbols-outlined">person</span>\r
<span class="text-[10px] font-bold uppercase">Profile</span>\r
</button>\r
</div>\r
</body></html>`,oh=`<!DOCTYPE html>\r
\r
<html class="dark" lang="en"><head>\r
<meta charset="utf-8"/>\r
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>\r
<title>Add Expense | Financial Architect</title>\r
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"><\/script>\r
<link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&amp;family=Inter:wght@400;500;600&amp;display=swap" rel="stylesheet"/>\r
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>\r
<script id="tailwind-config">\r
        tailwind.config = {\r
            darkMode: "class",\r
            theme: {\r
                extend: {\r
                    colors: {\r
                        "on-surface-variant": "#aaaab5",\r
                        background: "#0d0e12",\r
                        "on-tertiary-fixed-variant": "#604a71",\r
                        "on-primary-fixed-variant": "#384775",\r
                        outline: "#74757f",\r
                        "outline-variant": "#464750",\r
                        "on-primary-fixed": "#1a2a56",\r
                        "on-error-container": "#ff9993",\r
                        "surface-dim": "#0d0e12",\r
                        "surface-bright": "#2a2c34",\r
                        "on-secondary-fixed": "#393f51",\r
                        "tertiary-container": "#e6cafa",\r
                        "on-secondary-fixed-variant": "#565b6f",\r
                        "primary-fixed": "#b6c5fb",\r
                        "on-tertiary-fixed": "#422d53",\r
                        "inverse-on-surface": "#54555a",\r
                        "tertiary-fixed": "#e6cafa",\r
                        "on-primary": "#2f3e6b",\r
                        tertiary: "#f1daff",\r
                        "secondary-container": "#363b4d",\r
                        "secondary-fixed-dim": "#cfd3eb",\r
                        "primary-container": "#42517f",\r
                        primary: "#b6c5fb",\r
                        "on-tertiary-container": "#564067",\r
                        "on-background": "#e4e4f0",\r
                        "tertiary-fixed-dim": "#d8bceb",\r
                        "on-primary-container": "#dce2ff",\r
                        "surface-tint": "#b6c5fb",\r
                        "secondary-fixed": "#dde1f9",\r
                        "error-container": "#871f21",\r
                        secondary: "#c1c5dd",\r
                        error: "#fa746f",\r
                        "surface-variant": "#23252e",\r
                        "on-secondary": "#3a4052",\r
                        "inverse-surface": "#faf8fe",\r
                        "primary-fixed-dim": "#a8b7ec",\r
                        "on-secondary-container": "#babed5",\r
                        "surface-container-lowest": "#000000",\r
                        "inverse-primary": "#4e5d8c",\r
                        "surface-container-highest": "#23252e",\r
                        surface: "#0d0e12",\r
                        "on-tertiary": "#5f4971",\r
                        "on-surface": "#e4e4f0",\r
                        "surface-container": "#181920",\r
                        "surface-container-low": "#121318",\r
                        "surface-container-high": "#1e1f26",\r
                        "on-error": "#490006",\r
                        "primary-dim": "#a8b7ec",\r
                        "error-dim": "#c54d4a",\r
                        "tertiary-dim": "#d8bceb",\r
                        "secondary-dim": "#b3b8cf"\r
                    },\r
                    borderRadius: {\r
                        DEFAULT: "0.125rem",\r
                        lg: "0.25rem",\r
                        xl: "0.5rem",\r
                        full: "0.75rem"\r
                    },\r
                    fontFamily: {\r
                        headline: ["Manrope"],\r
                        body: ["Inter"],\r
                        label: ["Inter"],\r
                        display: "Manrope"\r
                    }\r
                }\r
            }\r
        };\r
    <\/script>\r
<style>\r
        .material-symbols-outlined {\r
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;\r
        }\r
        body {\r
            font-family: 'Inter', sans-serif;\r
        }\r
        h1, h2, .font-headline {\r
            font-family: 'Manrope', sans-serif;\r
        }\r
        input:focus, select:focus, textarea:focus {\r
            outline: none;\r
            box-shadow: 0 0 0 2px rgba(43, 75, 185, 0.2);\r
        }\r
    </style>\r
</head>\r
<body class="bg-surface text-on-surface min-h-screen">\r
<!-- Side Navigation (Fixed on Large Screens) -->\r
<aside class="hidden xl:flex fixed left-0 top-0 h-full w-64 bg-[#faf8ff] dark:bg-slate-950 flex-col p-6 space-y-2 border-r border-slate-100 dark:border-slate-800 z-50">\r
<div class="flex items-center gap-3 mb-8 px-2">\r
<div class="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">\r
<span class="material-symbols-outlined text-white" style="font-variation-settings: 'FILL' 1;">architecture</span>\r
</div>\r
<div>\r
<h3 class="text-xl font-bold text-blue-800 dark:text-blue-300 font-manrope leading-tight">Architect</h3>\r
<p class="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant/60">Wealth Management</p>\r
</div>\r
</div>\r
<nav class="flex-1 space-y-1">\r
<a class="text-[#434655] dark:text-slate-400 px-4 py-3 hover:bg-slate-50 dark:hover:bg-slate-900 rounded-lg flex items-center gap-3 group transition-transform duration-200 hover:translate-x-1" href="#">\r
<span class="material-symbols-outlined">dashboard</span>\r
<span class="font-medium text-sm font-inter">Dashboard</span>\r
</a>\r
<a class="bg-[#dae2fd] dark:bg-blue-900/40 text-[#173bab] dark:text-blue-100 rounded-lg px-4 py-3 font-semibold flex items-center gap-3 group transition-transform duration-200 hover:translate-x-1" href="#">\r
<span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">receipt_long</span>\r
<span class="font-semibold text-sm font-inter">Transactions</span>\r
</a>\r
<a class="text-[#434655] dark:text-slate-400 px-4 py-3 hover:bg-slate-50 dark:hover:bg-slate-900 rounded-lg flex items-center gap-3 group transition-transform duration-200 hover:translate-x-1" href="#">\r
<span class="material-symbols-outlined">account_balance_wallet</span>\r
<span class="font-medium text-sm font-inter">Budgets</span>\r
</a>\r
<a class="text-[#434655] dark:text-slate-400 px-4 py-3 hover:bg-slate-50 dark:hover:bg-slate-900 rounded-lg flex items-center gap-3 group transition-transform duration-200 hover:translate-x-1" href="#">\r
<span class="material-symbols-outlined">bar_chart</span>\r
<span class="font-medium text-sm font-inter">Analytics</span>\r
</a>\r
<a class="text-[#434655] dark:text-slate-400 px-4 py-3 hover:bg-slate-50 dark:hover:bg-slate-900 rounded-lg flex items-center gap-3 group transition-transform duration-200 hover:translate-x-1" href="#">\r
<span class="material-symbols-outlined">settings</span>\r
<span class="font-medium text-sm font-inter">Settings</span>\r
</a>\r
</nav>\r
<div class="pt-6 border-t border-slate-100 dark:border-slate-800 space-y-1">\r
<div class="p-4 bg-surface-container-high rounded-xl mb-4">\r
<p class="text-[10px] font-bold uppercase text-primary mb-1">Upgrade</p>\r
<p class="text-xs font-semibold text-on-surface mb-2">Premium Access</p>\r
<div class="w-full h-1 bg-surface-variant rounded-full overflow-hidden">\r
<div class="w-2/3 h-full bg-primary"></div>\r
</div>\r
</div>\r
<a class="text-[#434655] dark:text-slate-400 px-4 py-3 hover:bg-slate-50 dark:hover:bg-slate-900 rounded-lg flex items-center gap-3 group transition-transform duration-200 hover:translate-x-1" href="#">\r
<span class="material-symbols-outlined">help</span>\r
<span class="font-medium text-sm font-inter">Help Center</span>\r
</a>\r
<a class="text-error px-4 py-3 hover:bg-error-container/20 rounded-lg flex items-center gap-3 group transition-transform duration-200 hover:translate-x-1" href="#">\r
<span class="material-symbols-outlined">logout</span>\r
<span class="font-medium text-sm font-inter">Sign Out</span>\r
</a>\r
</div>\r
</aside>\r
<!-- Main Wrapper (Adds margin for sidebar on XL screens) -->\r
<div class="xl:ml-64 min-h-screen flex flex-col">\r
<!-- Top Navigation -->\r
<nav class="bg-[#faf8ff]/80 dark:bg-slate-950/80 backdrop-blur-xl top-0 w-full z-40 sticky shadow-[0_20px_40px_rgba(43,75,185,0.06)]">\r
<div class="flex justify-between items-center w-full px-8 py-3 max-w-[1920px] mx-auto">\r
<div class="flex items-center gap-8">\r
<span class="text-2xl font-black text-[#131b2e] dark:text-slate-50 font-manrope xl:hidden">Financial Architect</span>\r
<div class="hidden md:flex gap-6 items-center">\r
<a class="text-[#434655] dark:text-slate-400 font-medium font-manrope text-sm tracking-tight hover:bg-[#e2e7ff] transition-colors px-3 py-1.5 rounded-lg" href="#">Dashboard</a>\r
<a class="text-blue-700 dark:text-blue-300 font-bold border-b-2 border-blue-700 font-manrope text-sm tracking-tight px-3 py-1.5" href="#">Transactions</a>\r
<a class="text-[#434655] dark:text-slate-400 font-medium font-manrope text-sm tracking-tight hover:bg-[#e2e7ff] transition-colors px-3 py-1.5 rounded-lg" href="#">Budgets</a>\r
</div>\r
</div>\r
<div class="flex items-center gap-4">\r
<button class="material-symbols-outlined text-on-surface-variant hover:bg-surface-container-high p-2 rounded-full transition-colors">notifications</button>\r
<button class="material-symbols-outlined text-on-surface-variant hover:bg-surface-container-high p-2 rounded-full transition-colors">settings</button>\r
<img alt="User Profile Avatar" class="w-10 h-10 rounded-full object-cover ring-2 ring-surface-variant" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAi3JFt99kpszMwZl5cSryv8S6yJgAM2nJilSEy_fesrv2_GNpDTURkbge88SbN_7bo2prq9sQmv-AZkp0h5bNI956BU0hcQ7JQEOKMVs4T_AwwqsOZ41aFE36_iBNieloTS4n8rb253MFedk8WsF2_h17FHba8X6ROHXgS30_1_g60eLLIZDX__ksQ7ACwLIKLHCjJpsqQ8L3v80xkIIQv5fjJClLWTnO4V8RDWNsMZkyhF0cODYniUpmJlYkrmr-F0YVLNrA6PEs"/>\r
</div>\r
</div>\r
</nav>\r
<main class="flex-1 max-w-5xl mx-auto w-full px-6 py-12">\r
<!-- Breadcrumb / Header Area -->\r
<header class="mb-12">\r
<div class="flex items-center gap-2 mb-4">\r
<button class="flex items-center text-primary font-medium hover:underline text-sm">\r
<span class="material-symbols-outlined text-sm mr-1">arrow_back</span>\r
                    Back to Transactions\r
                </button>\r
</div>\r
<h1 class="text-4xl font-extrabold tracking-tight text-on-surface mb-2">Add Expense</h1>\r
<p class="text-on-surface-variant max-w-lg">Input your transaction details with precision. Your financial architecture updates in real-time.</p>\r
</header>\r
<!-- Transaction Form - Bento-ish Layout -->\r
<form class="grid grid-cols-1 md:grid-cols-12 gap-8 mb-20 md:mb-12">\r
<!-- Amount Section -->\r
<div class="md:col-span-8 bg-surface-container-lowest rounded-2xl p-8 shadow-[0_20px_40px_rgba(43,75,185,0.06)] flex flex-col justify-center min-h-[220px]">\r
<label class="text-on-surface-variant font-medium text-sm mb-4 flex items-center">\r
<span class="material-symbols-outlined mr-2" style="font-variation-settings: 'FILL' 1;">payments</span>\r
                    Transaction Amount\r
                </label>\r
<div class="flex items-baseline border-b-2 border-surface-variant focus-within:border-primary transition-colors pb-4">\r
<span class="text-4xl font-bold text-on-surface-variant mr-4">$</span>\r
<input class="w-full text-6xl md:text-7xl font-extrabold bg-transparent border-none p-0 focus:ring-0 placeholder:text-surface-variant text-on-surface font-headline" placeholder="0.00" required="" step="0.01" type="number"/>\r
</div>\r
</div>\r
<!-- Date Selection -->\r
<div class="md:col-span-4 bg-surface-container-low rounded-2xl p-8 flex flex-col justify-between">\r
<div>\r
<label class="text-on-surface-variant font-medium text-sm mb-4 block">Transaction Date</label>\r
<input class="w-full bg-surface-container-lowest border-none rounded-xl px-4 py-3 text-on-surface font-medium" type="date" value="2024-05-20"/>\r
</div>\r
<div class="mt-6 flex items-center gap-3">\r
<span class="w-2 h-2 rounded-full bg-tertiary"></span>\r
<span class="text-xs font-semibold text-tertiary uppercase tracking-wider">Verified Logic</span>\r
</div>\r
</div>\r
<!-- Merchant & Category Grid -->\r
<div class="md:col-span-12 grid grid-cols-1 md:grid-cols-2 gap-8">\r
<!-- Merchant Info -->\r
<div class="bg-surface-container-low rounded-2xl p-8">\r
<label class="text-on-surface-variant font-medium text-sm mb-4 block">Merchant Name</label>\r
<div class="relative">\r
<span class="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant">store</span>\r
<input class="w-full bg-surface-container-lowest border-none rounded-xl pl-12 pr-4 py-4 text-on-surface placeholder:text-on-surface-variant/50" placeholder="e.g. Blue Bottle Coffee" type="text"/>\r
</div>\r
<div class="mt-8">\r
<label class="text-on-surface-variant font-medium text-sm mb-4 block">Recent Merchants</label>\r
<div class="flex flex-wrap gap-2">\r
<button class="px-4 py-2 rounded-full bg-surface-container-highest text-on-primary-fixed-variant text-xs font-semibold hover:bg-primary hover:text-white transition-all" type="button">Amazon</button>\r
<button class="px-4 py-2 rounded-full bg-surface-container-highest text-on-primary-fixed-variant text-xs font-semibold hover:bg-primary hover:text-white transition-all" type="button">Uber</button>\r
<button class="px-4 py-2 rounded-full bg-surface-container-highest text-on-primary-fixed-variant text-xs font-semibold hover:bg-primary hover:text-white transition-all" type="button">Apple</button>\r
</div>\r
</div>\r
</div>\r
<!-- Category Selector -->\r
<div class="bg-surface-container-low rounded-2xl p-8">\r
<label class="text-on-surface-variant font-medium text-sm mb-4 block">Select Category</label>\r
<div class="grid grid-cols-3 gap-3">\r
<button class="flex flex-col items-center justify-center p-4 bg-surface-container-lowest rounded-xl border-2 border-transparent hover:border-primary group transition-all" type="button">\r
<span class="material-symbols-outlined text-primary mb-2">restaurant</span>\r
<span class="text-[10px] font-bold uppercase tracking-tighter text-on-surface-variant group-hover:text-primary">Dining</span>\r
</button>\r
<button class="flex flex-col items-center justify-center p-4 bg-surface-container-lowest rounded-xl border-2 border-primary group transition-all ring-4 ring-primary/10" type="button">\r
<span class="material-symbols-outlined text-primary mb-2" style="font-variation-settings: 'FILL' 1;">shopping_cart</span>\r
<span class="text-[10px] font-bold uppercase tracking-tighter text-primary">Shopping</span>\r
</button>\r
<button class="flex flex-col items-center justify-center p-4 bg-surface-container-lowest rounded-xl border-2 border-transparent hover:border-primary group transition-all" type="button">\r
<span class="material-symbols-outlined text-primary mb-2">commute</span>\r
<span class="text-[10px] font-bold uppercase tracking-tighter text-on-surface-variant group-hover:text-primary">Transport</span>\r
</button>\r
<button class="flex flex-col items-center justify-center p-4 bg-surface-container-lowest rounded-xl border-2 border-transparent hover:border-primary group transition-all" type="button">\r
<span class="material-symbols-outlined text-primary mb-2">home</span>\r
<span class="text-[10px] font-bold uppercase tracking-tighter text-on-surface-variant group-hover:text-primary">Housing</span>\r
</button>\r
<button class="flex flex-col items-center justify-center p-4 bg-surface-container-lowest rounded-xl border-2 border-transparent hover:border-primary group transition-all" type="button">\r
<span class="material-symbols-outlined text-primary mb-2">movie</span>\r
<span class="text-[10px] font-bold uppercase tracking-tighter text-on-surface-variant group-hover:text-primary">Leisure</span>\r
</button>\r
<button class="flex flex-col items-center justify-center p-4 bg-surface-container-lowest rounded-xl border-2 border-transparent hover:border-primary group transition-all" type="button">\r
<span class="material-symbols-outlined text-primary mb-2">more_horiz</span>\r
<span class="text-[10px] font-bold uppercase tracking-tighter text-on-surface-variant group-hover:text-primary">Other</span>\r
</button>\r
</div>\r
</div>\r
</div>\r
<!-- Notes & Attachments -->\r
<div class="md:col-span-12 bg-surface-container-low rounded-2xl p-8">\r
<div class="flex flex-col md:flex-row gap-8">\r
<div class="flex-1">\r
<label class="text-on-surface-variant font-medium text-sm mb-4 block">Note (Optional)</label>\r
<textarea class="w-full bg-surface-container-lowest border-none rounded-xl p-4 text-on-surface resize-none placeholder:text-on-surface-variant/50" placeholder="Add details about this purchase..." rows="3"></textarea>\r
</div>\r
<div class="w-full md:w-64">\r
<label class="text-on-surface-variant font-medium text-sm mb-4 block">Receipt</label>\r
<div class="h-[104px] border-2 border-dashed border-outline-variant/30 rounded-xl flex flex-col items-center justify-center bg-surface-container-lowest/50 hover:bg-surface-container-highest/30 cursor-pointer transition-all">\r
<span class="material-symbols-outlined text-on-surface-variant mb-1">add_a_photo</span>\r
<span class="text-xs font-semibold text-on-surface-variant">Attach Image</span>\r
</div>\r
</div>\r
</div>\r
</div>\r
<!-- Action Button -->\r
<div class="md:col-span-12 flex justify-end mt-4">\r
<button class="w-full md:w-auto px-12 py-5 bg-gradient-to-br from-primary to-primary-container text-white rounded-xl font-bold text-lg shadow-[0_10px_20px_rgba(43,75,185,0.2)] active:scale-95 transition-transform" type="submit">\r
                    Save Transaction\r
                </button>\r
</div>\r
</form>\r
</main>\r
</div>\r
<!-- Mobile Bottom Navigation -->\r
<div class="md:hidden fixed bottom-0 left-0 w-full bg-surface-container-lowest/80 backdrop-blur-xl px-6 py-4 flex justify-between items-center z-50 border-t border-surface-variant/20">\r
<button class="flex flex-col items-center gap-1 text-on-surface-variant">\r
<span class="material-symbols-outlined">dashboard</span>\r
<span class="text-[10px] font-bold uppercase">Home</span>\r
</button>\r
<button class="flex flex-col items-center gap-1 text-primary">\r
<span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">receipt_long</span>\r
<span class="text-[10px] font-bold uppercase">Activity</span>\r
</button>\r
<div class="relative -top-8">\r
<button class="w-14 h-14 bg-primary text-white rounded-full shadow-[0_10px_20px_rgba(43,75,185,0.3)] flex items-center justify-center">\r
<span class="material-symbols-outlined text-3xl">add</span>\r
</button>\r
</div>\r
<button class="flex flex-col items-center gap-1 text-on-surface-variant">\r
<span class="material-symbols-outlined">bar_chart</span>\r
<span class="text-[10px] font-bold uppercase">Stats</span>\r
</button>\r
<button class="flex flex-col items-center gap-1 text-on-surface-variant">\r
<span class="material-symbols-outlined">person</span>\r
<span class="text-[10px] font-bold uppercase">Profile</span>\r
</button>\r
</div>\r
</body></html>`,ih=`<!DOCTYPE html>\r
\r
<html class="dark" lang="en"><head>\r
<meta charset="utf-8"/>\r
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>\r
<title>Budgets &amp; Categories | Financial Architect</title>\r
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"><\/script>\r
<link href="https://fonts.googleapis.com/css2?family=Manrope:wght@200;400;500;600;700;800&amp;family=Inter:wght@300;400;500;600&amp;display=swap" rel="stylesheet"/>\r
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>\r
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>\r
<script id="tailwind-config">tailwind.config = {darkMode: "class", theme: {extend: {colors: {"on-surface-variant": "#aaaab5", background: "#0d0e12", "on-tertiary-fixed-variant": "#604a71", "on-primary-fixed-variant": "#384775", outline: "#74757f", "outline-variant": "#464750", "on-primary-fixed": "#1a2a56", "on-error-container": "#ff9993", "surface-dim": "#0d0e12", "surface-bright": "#2a2c34", "on-secondary-fixed": "#393f51", "tertiary-container": "#e6cafa", "on-secondary-fixed-variant": "#565b6f", "primary-fixed": "#b6c5fb", "on-tertiary-fixed": "#422d53", "inverse-on-surface": "#54555a", "tertiary-fixed": "#e6cafa", "on-primary": "#2f3e6b", tertiary: "#f1daff", "secondary-container": "#363b4d", "secondary-fixed-dim": "#cfd3eb", "primary-container": "#42517f", primary: "#b6c5fb", "on-tertiary-container": "#564067", "on-background": "#e4e4f0", "tertiary-fixed-dim": "#d8bceb", "on-primary-container": "#dce2ff", "surface-tint": "#b6c5fb", "secondary-fixed": "#dde1f9", "error-container": "#871f21", secondary: "#c1c5dd", error: "#fa746f", "surface-variant": "#23252e", "on-secondary": "#3a4052", "inverse-surface": "#faf8fe", "primary-fixed-dim": "#a8b7ec", "on-secondary-container": "#babed5", "surface-container-lowest": "#000000", "inverse-primary": "#4e5d8c", "surface-container-highest": "#23252e", surface: "#0d0e12", "on-tertiary": "#5f4971", "on-surface": "#e4e4f0", "surface-container": "#181920", "surface-container-low": "#121318", "surface-container-high": "#1e1f26", "on-error": "#490006", "primary-dim": "#a8b7ec", "error-dim": "#c54d4a", "tertiary-dim": "#d8bceb", "secondary-dim": "#b3b8cf"}, borderRadius: {DEFAULT: "0.125rem", lg: "0.25rem", xl: "0.5rem", full: "0.75rem"}, fontFamily: {headline: ["Manrope"], body: ["Inter"], label: ["Inter"], display: "Manrope"}}}};<\/script>\r
<style>\r
        .material-symbols-outlined {\r
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;\r
        }\r
        body {\r
            font-family: 'Inter', sans-serif;\r
            background-color: #faf8ff;\r
            color: #131b2e;\r
        }\r
        .font-manrope { font-family: 'Manrope', sans-serif; }\r
        .glass-nav {\r
            backdrop-filter: blur(40px);\r
            -webkit-backdrop-filter: blur(40px);\r
        }\r
    </style>\r
</head>\r
<body class="bg-surface text-on-surface antialiased">\r
<!-- SideNavBar (Authority: JSON) -->\r
<aside class="fixed left-0 top-0 h-full w-64 flex flex-col p-6 space-y-2 bg-[#faf8ff] dark:bg-slate-950 border-r border-slate-100 dark:border-slate-800 z-50 md:flex hidden">\r
<div class="mb-10 px-4">\r
<h1 class="text-xl font-bold text-blue-800 dark:text-blue-300 font-manrope">Architect</h1>\r
<p class="text-xs text-on-surface-variant font-medium">Wealth Management</p>\r
</div>\r
<nav class="flex-1 space-y-1">\r
<a class="text-[#434655] dark:text-slate-400 px-4 py-3 hover:bg-slate-50 dark:hover:bg-slate-900 rounded-lg flex items-center gap-3 transition-transform duration-200 hover:translate-x-1" href="#">\r
<span class="material-symbols-outlined">dashboard</span>\r
<span class="font-inter text-sm font-medium">Dashboard</span>\r
</a>\r
<a class="text-[#434655] dark:text-slate-400 px-4 py-3 hover:bg-slate-50 dark:hover:bg-slate-900 rounded-lg flex items-center gap-3 transition-transform duration-200 hover:translate-x-1" href="#">\r
<span class="material-symbols-outlined">receipt_long</span>\r
<span class="font-inter text-sm font-medium">Transactions</span>\r
</a>\r
<a class="bg-[#dae2fd] dark:bg-blue-900/40 text-[#173bab] dark:text-blue-100 rounded-lg px-4 py-3 font-semibold flex items-center gap-3 transition-transform duration-200 hover:translate-x-1" href="#">\r
<span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">account_balance_wallet</span>\r
<span class="font-inter text-sm font-medium">Budgets</span>\r
</a>\r
<a class="text-[#434655] dark:text-slate-400 px-4 py-3 hover:bg-slate-50 dark:hover:bg-slate-900 rounded-lg flex items-center gap-3 transition-transform duration-200 hover:translate-x-1" href="#">\r
<span class="material-symbols-outlined">bar_chart</span>\r
<span class="font-inter text-sm font-medium">Analytics</span>\r
</a>\r
<a class="text-[#434655] dark:text-slate-400 px-4 py-3 hover:bg-slate-50 dark:hover:bg-slate-900 rounded-lg flex items-center gap-3 transition-transform duration-200 hover:translate-x-1" href="#">\r
<span class="material-symbols-outlined">settings</span>\r
<span class="font-inter text-sm font-medium">Settings</span>\r
</a>\r
</nav>\r
<div class="pt-6 border-t border-slate-100 dark:border-slate-800 space-y-1">\r
<div class="bg-primary-container/10 p-4 rounded-xl mb-4">\r
<p class="text-xs font-bold text-primary mb-1">Premium Access</p>\r
<p class="text-[10px] text-on-surface-variant">Unlock architectural insights.</p>\r
</div>\r
<a class="text-[#434655] px-4 py-2 flex items-center gap-3 text-sm font-medium hover:bg-slate-50 rounded-lg" href="#">\r
<span class="material-symbols-outlined text-lg">help</span>\r
                Help Center\r
            </a>\r
<a class="text-[#434655] px-4 py-2 flex items-center gap-3 text-sm font-medium hover:bg-slate-50 rounded-lg" href="#">\r
<span class="material-symbols-outlined text-lg">logout</span>\r
                Sign Out\r
            </a>\r
</div>\r
</aside>\r
<!-- Main Content Canvas -->\r
<main class="md:ml-64 min-h-screen relative">\r
<!-- TopNavBar (Authority: JSON) -->\r
<header class="docked top-0 w-full z-40 sticky bg-[#faf8ff]/80 dark:bg-slate-950/80 backdrop-blur-xl shadow-[0_20px_40px_rgba(43,75,185,0.06)]">\r
<div class="flex justify-between items-center w-full px-8 py-3 max-w-[1920px] mx-auto">\r
<div class="flex items-center gap-6">\r
<span class="text-2xl font-black text-[#131b2e] dark:text-slate-50 font-manrope">Financial Architect</span>\r
<div class="hidden lg:flex items-center bg-[#f2f3ff] dark:bg-slate-900 rounded-full px-4 py-1.5 gap-2">\r
<span class="material-symbols-outlined text-outline text-sm">search</span>\r
<input class="bg-transparent border-none focus:ring-0 text-xs w-48 font-medium" placeholder="Search insights..." type="text"/>\r
</div>\r
</div>\r
<div class="flex items-center gap-4">\r
<button class="flex items-center gap-2 bg-gradient-to-br from-primary to-primary-container text-white px-5 py-2 rounded-xl text-sm font-semibold shadow-sm active:scale-95 duration-200 ease-in-out">\r
<span class="material-symbols-outlined text-sm">add</span>\r
                        Add Expense\r
                    </button>\r
<div class="flex items-center gap-2">\r
<span class="material-symbols-outlined p-2 text-on-surface-variant hover:bg-[#e2e7ff] rounded-full cursor-pointer transition-colors">notifications</span>\r
<span class="material-symbols-outlined p-2 text-on-surface-variant hover:bg-[#e2e7ff] rounded-full cursor-pointer transition-colors">settings</span>\r
</div>\r
<div class="h-10 w-10 rounded-full bg-surface-container-high overflow-hidden border-2 border-white shadow-sm">\r
<img alt="User Profile Avatar" class="h-full w-full object-cover" data-alt="professional portrait of a confident man with a slight smile in high-end office lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDBEQSbistsRlzv-dmXeJi6idrLu4nFNvQVZ1YMvQdDZjvAAbdLP-8XArWh7tS6KCxAYtpQEqgTiZjrGjljWwxNJu_mRlj3RRki6q8Q_MQsJ05YBycEtXcdaMBKHzDGn05xEaPxcxYRd2VxQ37H6ug3KHtUhd6DWyUWSK1BPzvrbTODy5VwgZKNn5vctkL8sTlYjlKjkd0VS8tSO_iYJfFcedA6a-sI03s6BuIYdH_Q-jrD12jEidkKTIYqb9V_YzZWyeKiL1sxLRY"/>\r
</div>\r
</div>\r
</div>\r
</header>\r
<div class="p-8 max-w-[1400px] mx-auto">\r
<!-- Hero Display (Asymmetric / Editorial) -->\r
<section class="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">\r
<div class="max-w-2xl">\r
<p class="text-primary font-bold tracking-widest text-xs uppercase mb-4">Monthly Overview</p>\r
<h2 class="font-manrope text-5xl font-extrabold text-on-surface mb-4 leading-tight">Architecture of <br/><span class="text-primary">Your Wealth.</span></h2>\r
<p class="text-on-surface-variant text-lg leading-relaxed max-w-md">Precision budgeting isn't about restriction; it's about structural integrity. Your current allocation is at 64% of the monthly ceiling.</p>\r
</div>\r
<div class="bg-surface-container-low p-8 rounded-[2rem] flex flex-col items-center justify-center min-w-[280px] text-center border-b-4 border-primary">\r
<span class="text-on-surface-variant label-md mb-2">Total Monthly Budget</span>\r
<span class="font-manrope text-4xl font-black text-on-surface">$12,450.00</span>\r
<button class="mt-6 flex items-center gap-2 text-primary font-bold text-sm hover:underline">\r
<span class="material-symbols-outlined text-sm">edit</span>\r
                        Edit Budget\r
                    </button>\r
</div>\r
</section>\r
<!-- Bento Grid - Category Cards -->\r
<div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">\r
<!-- Large Card (Housing) -->\r
<div class="md:col-span-2 md:row-span-2 bg-surface-container-lowest rounded-[2rem] p-8 flex flex-col justify-between group transition-all duration-300 hover:shadow-[0_20px_60px_rgba(43,75,185,0.08)] border border-outline-variant/10">\r
<div>\r
<div class="flex justify-between items-start mb-10">\r
<div class="h-14 w-14 rounded-2xl bg-primary-container/10 flex items-center justify-center text-primary">\r
<span class="material-symbols-outlined text-3xl" style="font-variation-settings: 'FILL' 1;">home</span>\r
</div>\r
<span class="bg-tertiary-container/10 text-tertiary px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">On Track</span>\r
</div>\r
<h3 class="font-manrope text-3xl font-bold mb-2">Housing &amp; Utilities</h3>\r
<p class="text-on-surface-variant text-sm mb-8">Mortgage, Insurance, Water, &amp; Electricity</p>\r
</div>\r
<div>\r
<div class="flex justify-between items-end mb-3">\r
<div>\r
<span class="text-xs text-on-surface-variant font-medium">Spent</span>\r
<p class="text-2xl font-black font-manrope">$3,200.00</p>\r
</div>\r
<div class="text-right">\r
<span class="text-xs text-on-surface-variant font-medium">Limit</span>\r
<p class="text-lg font-bold text-outline-variant">$4,500.00</p>\r
</div>\r
</div>\r
<div class="w-full h-3 bg-surface-container-low rounded-full overflow-hidden">\r
<div class="h-full bg-gradient-to-r from-primary to-primary-container rounded-full" style="width: 71%"></div>\r
</div>\r
</div>\r
</div>\r
<!-- Medium Card (Food) -->\r
<div class="bg-surface-container-lowest rounded-[2rem] p-6 border border-outline-variant/10 hover:shadow-lg transition-shadow">\r
<div class="flex items-center gap-4 mb-6">\r
<div class="h-10 w-10 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center">\r
<span class="material-symbols-outlined text-xl" style="font-variation-settings: 'FILL' 1;">restaurant</span>\r
</div>\r
<span class="font-bold text-on-surface">Food &amp; Dining</span>\r
</div>\r
<p class="text-2xl font-manrope font-extrabold mb-4">$842.50 <span class="text-xs text-on-surface-variant font-normal">/ $1,200</span></p>\r
<div class="w-full h-2 bg-surface-container-low rounded-full overflow-hidden mb-2">\r
<div class="h-full bg-orange-500 rounded-full" style="width: 70%"></div>\r
</div>\r
<span class="text-[10px] text-on-surface-variant font-semibold">70% CONSUMED</span>\r
</div>\r
<!-- Medium Card (Entertainment) -->\r
<div class="bg-surface-container-lowest rounded-[2rem] p-6 border border-outline-variant/10 hover:shadow-lg transition-shadow">\r
<div class="flex items-center gap-4 mb-6">\r
<div class="h-10 w-10 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center">\r
<span class="material-symbols-outlined text-xl" style="font-variation-settings: 'FILL' 1;">movie</span>\r
</div>\r
<span class="font-bold text-on-surface">Entertainment</span>\r
</div>\r
<p class="text-2xl font-manrope font-extrabold mb-4">$590.00 <span class="text-xs text-on-surface-variant font-normal">/ $600</span></p>\r
<div class="w-full h-2 bg-surface-container-low rounded-full overflow-hidden mb-2">\r
<div class="h-full bg-error rounded-full" style="width: 98%"></div>\r
</div>\r
<span class="text-[10px] text-error font-bold">98% - NEAR LIMIT</span>\r
</div>\r
<!-- Medium Card (Transport) -->\r
<div class="bg-surface-container-lowest rounded-[2rem] p-6 border border-outline-variant/10 hover:shadow-lg transition-shadow">\r
<div class="flex items-center gap-4 mb-6">\r
<div class="h-10 w-10 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center">\r
<span class="material-symbols-outlined text-xl" style="font-variation-settings: 'FILL' 1;">directions_car</span>\r
</div>\r
<span class="font-bold text-on-surface">Transport</span>\r
</div>\r
<p class="text-2xl font-manrope font-extrabold mb-4">$410.00 <span class="text-xs text-on-surface-variant font-normal">/ $850</span></p>\r
<div class="w-full h-2 bg-surface-container-low rounded-full overflow-hidden mb-2">\r
<div class="h-full bg-blue-600 rounded-full" style="width: 48%"></div>\r
</div>\r
<span class="text-[10px] text-tertiary font-bold">48% - HEALTHY</span>\r
</div>\r
<!-- Medium Card (Health) -->\r
<div class="bg-surface-container-lowest rounded-[2rem] p-6 border border-outline-variant/10 hover:shadow-lg transition-shadow">\r
<div class="flex items-center gap-4 mb-6">\r
<div class="h-10 w-10 rounded-xl bg-green-100 text-green-600 flex items-center justify-center">\r
<span class="material-symbols-outlined text-xl" style="font-variation-settings: 'FILL' 1;">monitor_heart</span>\r
</div>\r
<span class="font-bold text-on-surface">Health</span>\r
</div>\r
<p class="text-2xl font-manrope font-extrabold mb-4">$220.00 <span class="text-xs text-on-surface-variant font-normal">/ $500</span></p>\r
<div class="w-full h-2 bg-surface-container-low rounded-full overflow-hidden mb-2">\r
<div class="h-full bg-tertiary rounded-full" style="width: 44%"></div>\r
</div>\r
<span class="text-[10px] text-on-surface-variant font-semibold">44% CONSUMED</span>\r
</div>\r
<!-- Custom CTA Card (Glassmorphism inspired) -->\r
<div class="md:col-span-2 relative overflow-hidden bg-[#131b2e] rounded-[2rem] p-8 text-white flex items-center justify-between">\r
<div class="relative z-10">\r
<h3 class="text-2xl font-manrope font-bold mb-2">Unallocated Resources</h3>\r
<p class="text-slate-400 text-sm max-w-xs mb-6">You have $2,450.00 remaining this month. Would you like to optimize your savings architecture?</p>\r
<button class="bg-white text-on-surface px-6 py-2.5 rounded-xl text-sm font-bold shadow-xl active:scale-95 transition-transform">Optimize Now</button>\r
</div>\r
<div class="absolute right-0 top-0 bottom-0 w-1/2 opacity-40">\r
<img alt="Abstract Financial Growth" class="h-full w-full object-cover" data-alt="abstract flowing blue and teal gradients representing financial movement and growth with a clean futuristic aesthetic" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC_JnG9fltmA6tCfcWXMrQPj2zi8rKiKUW13n1Y6aA5zDc1JprM4zogG2k38MQwfmMYxZbFFMBmZV2w88S-0_EqQB9l9dyxqTgln4O__-Nr0GYctxVJY2sgs_SkmTIL2IwZ4iot7H6Q-nJ_aCs3JDj1yCrjmjtU4qgiSgH30UD9CDBQZ8PLzZD_fNqfJkEFXIeTMCeDXD2wEzsVqzm3jncbusUMl_NK9XXeBWu5LQ9b78rl0xpoTI_QXuHY8H9kxyXm-5kQcYJpBh0"/>\r
</div>\r
<div class="absolute inset-0 bg-gradient-to-r from-[#131b2e] via-[#131b2e]/90 to-transparent"></div>\r
</div>\r
</div>\r
<!-- Transaction Highlights (Tonal Layering no lines) -->\r
<section class="mt-16">\r
<div class="flex justify-between items-center mb-8">\r
<h4 class="font-manrope text-2xl font-bold">Category Adjustments</h4>\r
<span class="text-primary text-sm font-semibold cursor-pointer">View All Activity</span>\r
</div>\r
<div class="space-y-4">\r
<div class="bg-surface-container-low p-5 rounded-2xl flex items-center justify-between hover:bg-surface-container-high transition-colors cursor-pointer">\r
<div class="flex items-center gap-4">\r
<div class="h-12 w-12 rounded-full bg-surface-container-lowest flex items-center justify-center">\r
<span class="material-symbols-outlined text-primary">trending_up</span>\r
</div>\r
<div>\r
<p class="font-bold text-on-surface">Budget Increase: Food</p>\r
<p class="text-xs text-on-surface-variant">Allocated +$200 from Miscellaneous</p>\r
</div>\r
</div>\r
<div class="text-right">\r
<p class="font-bold text-on-surface">Today</p>\r
<p class="text-xs text-tertiary">Balance Secured</p>\r
</div>\r
</div>\r
<div class="bg-surface-container-low p-5 rounded-2xl flex items-center justify-between hover:bg-surface-container-high transition-colors cursor-pointer">\r
<div class="flex items-center gap-4">\r
<div class="h-12 w-12 rounded-full bg-surface-container-lowest flex items-center justify-center">\r
<span class="material-symbols-outlined text-on-tertiary-fixed-variant">savings</span>\r
</div>\r
<div>\r
<p class="font-bold text-on-surface">Automated Surplus Transfer</p>\r
<p class="text-xs text-on-surface-variant">Moved $450 to High-Yield Architect Fund</p>\r
</div>\r
</div>\r
<div class="text-right">\r
<p class="font-bold text-on-surface">Yesterday</p>\r
<p class="text-xs text-primary">Success</p>\r
</div>\r
</div>\r
</div>\r
</section>\r
</div>\r
<!-- Footer / Responsive Spacer -->\r
<div class="h-24 md:hidden"></div>\r
</main>\r
<!-- BottomNavBar (Mobile Only - Authority: JSON) -->\r
<nav class="md:hidden fixed bottom-0 w-full bg-[#faf8ff]/90 backdrop-blur-xl border-t-0 flex justify-around items-center py-4 px-6 z-50 shadow-[0_-10px_30px_rgba(43,75,185,0.06)]">\r
<div class="flex flex-col items-center gap-1 text-[#434655]">\r
<span class="material-symbols-outlined">dashboard</span>\r
<span class="text-[10px] font-medium">Dashboard</span>\r
</div>\r
<div class="flex flex-col items-center gap-1 text-[#434655]">\r
<span class="material-symbols-outlined">receipt_long</span>\r
<span class="text-[10px] font-medium">Transactions</span>\r
</div>\r
<div class="flex flex-col items-center gap-1 text-blue-700">\r
<span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">account_balance_wallet</span>\r
<span class="text-[10px] font-bold">Budgets</span>\r
</div>\r
<div class="flex flex-col items-center gap-1 text-[#434655]">\r
<span class="material-symbols-outlined">bar_chart</span>\r
<span class="text-[10px] font-medium">Analytics</span>\r
</div>\r
<div class="flex flex-col items-center gap-1 text-[#434655]">\r
<span class="material-symbols-outlined">settings</span>\r
<span class="text-[10px] font-medium">Settings</span>\r
</div>\r
</nav>\r
<!-- FAB (Contextual - Only on Primary screens) -->\r
<button class="fixed bottom-8 right-8 h-16 w-16 bg-gradient-to-br from-primary to-primary-container text-white rounded-full shadow-[0_20px_40px_rgba(43,75,185,0.3)] flex items-center justify-center active:scale-90 transition-transform z-40 md:flex hidden">\r
<span class="material-symbols-outlined text-3xl">add</span>\r
</button>\r
</body></html>`,uh=`<!DOCTYPE html>\r
\r
<html class="light dark" lang="en"><head>\r
<meta charset="utf-8"/>\r
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>\r
<link href="https://fonts.googleapis.com/css2?family=Manrope:wght@200;400;600;700;800&amp;family=Inter:wght@300;400;500;600&amp;display=swap" rel="stylesheet"/>\r
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>\r
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"><\/script>\r
<script id="tailwind-config">\r
        tailwind.config = {\r
            darkMode: "class",\r
            theme: {\r
                extend: {\r
                    colors: {\r
                        "on-surface-variant": "#aaaab5",\r
                        background: "#0d0e12",\r
                        "on-tertiary-fixed-variant": "#604a71",\r
                        "on-primary-fixed-variant": "#384775",\r
                        outline: "#74757f",\r
                        "outline-variant": "#464750",\r
                        "on-primary-fixed": "#1a2a56",\r
                        "on-error-container": "#ff9993",\r
                        "surface-dim": "#0d0e12",\r
                        "surface-bright": "#2a2c34",\r
                        "on-secondary-fixed": "#393f51",\r
                        "tertiary-container": "#e6cafa",\r
                        "on-secondary-fixed-variant": "#565b6f",\r
                        "primary-fixed": "#b6c5fb",\r
                        "on-tertiary-fixed": "#422d53",\r
                        "inverse-on-surface": "#54555a",\r
                        "tertiary-fixed": "#e6cafa",\r
                        "on-primary": "#2f3e6b",\r
                        tertiary: "#f1daff",\r
                        "secondary-container": "#363b4d",\r
                        "secondary-fixed-dim": "#cfd3eb",\r
                        "primary-container": "#42517f",\r
                        primary: "#b6c5fb",\r
                        "on-tertiary-container": "#564067",\r
                        "on-background": "#e4e4f0",\r
                        "tertiary-fixed-dim": "#d8bceb",\r
                        "on-primary-container": "#dce2ff",\r
                        "surface-tint": "#b6c5fb",\r
                        "secondary-fixed": "#dde1f9",\r
                        "error-container": "#871f21",\r
                        secondary: "#c1c5dd",\r
                        error: "#fa746f",\r
                        "surface-variant": "#23252e",\r
                        "on-secondary": "#3a4052",\r
                        "inverse-surface": "#faf8fe",\r
                        "primary-fixed-dim": "#a8b7ec",\r
                        "on-secondary-container": "#babed5",\r
                        "surface-container-lowest": "#000000",\r
                        "inverse-primary": "#4e5d8c",\r
                        "surface-container-highest": "#23252e",\r
                        surface: "#0d0e12",\r
                        "on-tertiary": "#5f4971",\r
                        "on-surface": "#e4e4f0",\r
                        "surface-container": "#181920",\r
                        "surface-container-low": "#121318",\r
                        "surface-container-high": "#1e1f26",\r
                        "on-error": "#490006",\r
                        "primary-dim": "#a8b7ec",\r
                        "error-dim": "#c54d4a",\r
                        "tertiary-dim": "#d8bceb",\r
                        "secondary-dim": "#b3b8cf"\r
                    },\r
                    borderRadius: {\r
                        DEFAULT: "0.125rem",\r
                        lg: "0.25rem",\r
                        xl: "0.5rem",\r
                        full: "0.75rem"\r
                    },\r
                    fontFamily: {\r
                        headline: ["Manrope"],\r
                        body: ["Inter"],\r
                        label: ["Inter"],\r
                        display: "Manrope"\r
                    }\r
                }\r
            }\r
        };\r
    <\/script>\r
<style>\r
        .material-symbols-outlined {\r
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;\r
        }\r
        body { font-family: 'Inter', sans-serif; }\r
        h1, h2, h3 { font-family: 'Manrope', sans-serif; }\r
        .pie-segment {\r
            transition: stroke-width 0.3s ease;\r
        }\r
        .pie-segment:hover {\r
            stroke-width: 24;\r
        }\r
    </style>\r
</head>\r
<body class="bg-surface text-on-surface selection:bg-primary-fixed">\r
<aside class="fixed left-0 top-0 h-full flex flex-col p-6 space-y-2 bg-[#faf8ff] dark:bg-slate-950 w-64 border-r border-slate-100 dark:border-slate-800 z-50">\r
<div class="mb-10 px-4">\r
<h1 class="text-xl font-bold text-blue-800 dark:text-blue-300 font-manrope">Architect</h1>\r
<p class="text-xs font-label text-on-surface-variant/70 uppercase tracking-widest">Wealth Management</p>\r
</div>\r
<nav class="flex-1 space-y-1">\r
<a class="bg-[#dae2fd] dark:bg-blue-900/40 text-[#173bab] dark:text-blue-100 rounded-lg px-4 py-3 font-semibold flex items-center gap-3" href="#">\r
<span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">dashboard</span>\r
                Dashboard\r
            </a>\r
<a class="text-[#434655] dark:text-slate-400 px-4 py-3 hover:bg-slate-50 dark:hover:bg-slate-900 rounded-lg flex items-center gap-3 transition-transform duration-200 hover:translate-x-1" href="#">\r
<span class="material-symbols-outlined">receipt_long</span>\r
                Transactions\r
            </a>\r
<a class="text-[#434655] dark:text-slate-400 px-4 py-3 hover:bg-slate-50 dark:hover:bg-slate-900 rounded-lg flex items-center gap-3 transition-transform duration-200 hover:translate-x-1" href="#">\r
<span class="material-symbols-outlined">account_balance_wallet</span>\r
                Budgets\r
            </a>\r
<a class="text-[#434655] dark:text-slate-400 px-4 py-3 hover:bg-slate-50 dark:hover:bg-slate-900 rounded-lg flex items-center gap-3 transition-transform duration-200 hover:translate-x-1" href="#">\r
<span class="material-symbols-outlined">bar_chart</span>\r
                Analytics\r
            </a>\r
<a class="text-[#434655] dark:text-slate-400 px-4 py-3 hover:bg-slate-50 dark:hover:bg-slate-900 rounded-lg flex items-center gap-3 transition-transform duration-200 hover:translate-x-1" href="#">\r
<span class="material-symbols-outlined">settings</span>\r
                Settings\r
            </a>\r
</nav>\r
<div class="pt-6 border-t border-outline-variant/20 space-y-1">\r
<div class="px-4 py-3 mb-4 rounded-xl bg-primary-container text-on-primary-container relative overflow-hidden group cursor-pointer">\r
<div class="relative z-10">\r
<p class="text-xs font-bold opacity-80">Premium Access</p>\r
<p class="text-[10px] mt-1 leading-tight opacity-70">Unlock advanced fiscal architecture tools.</p>\r
</div>\r
<div class="absolute -right-4 -bottom-4 w-16 h-16 bg-white/10 rounded-full blur-xl group-hover:scale-150 transition-transform duration-500"></div>\r
</div>\r
<a class="text-[#434655] dark:text-slate-400 px-4 py-3 hover:bg-slate-50 dark:hover:bg-slate-900 rounded-lg flex items-center gap-3 transition-transform duration-200 hover:translate-x-1" href="#">\r
<span class="material-symbols-outlined">help</span>\r
                Help Center\r
            </a>\r
<a class="text-[#434655] dark:text-slate-400 px-4 py-3 hover:bg-slate-50 dark:hover:bg-slate-900 rounded-lg flex items-center gap-3 transition-transform duration-200 hover:translate-x-1" href="#">\r
<span class="material-symbols-outlined">logout</span>\r
                Sign Out\r
            </a>\r
</div>\r
</aside>\r
<main class="ml-64 min-h-screen">\r
<header class="bg-[#faf8ff]/80 dark:bg-slate-950/80 backdrop-blur-xl sticky top-0 w-full z-40 shadow-[0_20px_40px_rgba(43,75,185,0.06)]">\r
<div class="flex justify-between items-center w-full px-8 py-3 max-w-[1920px] mx-auto">\r
<div class="flex items-center gap-6">\r
<div class="relative">\r
<span class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline">search</span>\r
<input class="bg-surface-container-high border-none rounded-full py-2 pl-10 pr-4 text-sm w-64 focus:ring-2 focus:ring-primary/20 placeholder:text-on-surface-variant/50" placeholder="Search architecture..." type="text"/>\r
</div>\r
</div>\r
<div class="flex items-center gap-4">\r
<button class="p-2 rounded-full hover:bg-surface-container-high transition-colors">\r
<span class="material-symbols-outlined text-on-surface-variant">notifications</span>\r
</button>\r
<button class="p-2 rounded-full hover:bg-surface-container-high transition-colors">\r
<span class="material-symbols-outlined text-on-surface-variant">settings</span>\r
</button>\r
<div class="h-8 w-8 rounded-full overflow-hidden border-2 border-surface-container-highest">\r
<img alt="User Profile Avatar" data-alt="professional portrait of a man in business attire with a confident smile against a neutral studio background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA3VxLYsSkW7yqI6GdSTOJUQ-YAcNyj9ZhD_GdDNJuAHLvd1K9_e7Faol9I44CAwQTYdd-LTJJKvaHwaT9zlK7bYELzrO7kfRsrXB9z6LN9nue2u54zvNIsfrB6wC_spKoEu7tC2GgN_OOcvQws1e2_PFNG2HypHx8ta-7grMzb-kC1YrGKEkruNtoE891VBgukQFnPAfCyeM87H0mOpcrCWU1A6GuATlCwdgmcKJctMWqPGGRopm4yroJmtVDKg5g4mlKpKFjWMxM"/>\r
</div>\r
<button class="bg-primary hover:bg-primary-container text-on-primary px-6 py-2 rounded-xl font-manrope text-sm font-semibold tracking-tight transition-all active:scale-95 duration-200 ease-in-out">\r
                        Add Expense\r
                    </button>\r
</div>\r
</div>\r
</header>\r
<div class="p-8 max-w-[1600px] mx-auto">\r
<section class="grid grid-cols-12 gap-6 mb-10">\r
<div class="col-span-12 lg:col-span-8 flex flex-col justify-between">\r
<div>\r
<h2 class="text-on-surface-variant text-sm font-label uppercase tracking-widest mb-1">Financial Architecture Summary</h2>\r
<h1 class="text-5xl font-extrabold text-on-surface font-headline tracking-tighter mb-8">\r
                            $42,850.24\r
                        </h1>\r
</div>\r
<div class="grid grid-cols-2 gap-4">\r
<div class="bg-surface-container-low rounded-[2rem] p-8 relative overflow-hidden">\r
<div class="relative z-10">\r
<p class="text-on-surface-variant text-xs font-semibold mb-2">Monthly Income</p>\r
<p class="text-3xl font-bold text-tertiary">+$12,400.00</p>\r
<div class="mt-4 flex items-center gap-2 text-xs font-medium text-tertiary">\r
<span class="material-symbols-outlined text-sm">trending_up</span>\r
<span>8.2% vs last month</span>\r
</div>\r
</div>\r
<div class="absolute top-0 right-0 p-4 opacity-10">\r
<span class="material-symbols-outlined text-6xl">account_balance</span>\r
</div>\r
</div>\r
<div class="bg-surface-container-low rounded-[2rem] p-8 relative overflow-hidden">\r
<div class="relative z-10">\r
<p class="text-on-surface-variant text-xs font-semibold mb-2">Monthly Spending</p>\r
<p class="text-3xl font-bold text-error">-$4,120.50</p>\r
<div class="mt-4 flex items-center gap-2 text-xs font-medium text-error">\r
<span class="material-symbols-outlined text-sm">trending_down</span>\r
<span>2.4% vs last month</span>\r
</div>\r
</div>\r
<div class="absolute top-0 right-0 p-4 opacity-10">\r
<span class="material-symbols-outlined text-6xl">payments</span>\r
</div>\r
</div>\r
</div>\r
</div>\r
<div class="col-span-12 lg:col-span-4">\r
<div class="bg-surface-container-lowest border-none rounded-[2rem] p-8 h-full shadow-[0_20px_40px_rgba(43,75,185,0.06)] flex flex-col">\r
<div class="flex justify-between items-center mb-6">\r
<h3 class="font-bold text-lg">Spending Categories</h3>\r
<button class="text-primary text-xs font-bold hover:underline">Full Report</button>\r
</div>\r
<div class="relative flex-1 flex items-center justify-center py-4">\r
<!-- Circular Pie Chart using SVG -->\r
<svg class="w-48 h-48 -rotate-90" viewbox="0 0 100 100">\r
<!-- Housing 45% -->\r
<circle class="pie-segment stroke-primary" cx="50" cy="50" fill="transparent" r="40" stroke-dasharray="113.1 138.2" stroke-dashoffset="0" stroke-width="20"></circle>\r
<!-- Lifestyle 30% -->\r
<circle class="pie-segment stroke-tertiary" cx="50" cy="50" fill="transparent" r="40" stroke-dasharray="75.4 175.9" stroke-dashoffset="-113.1" stroke-width="20"></circle>\r
<!-- Dining 25% -->\r
<circle class="pie-segment stroke-orange-400" cx="50" cy="50" fill="transparent" r="40" stroke-dasharray="62.8 188.5" stroke-dashoffset="-188.5" stroke-width="20"></circle>\r
</svg>\r
<!-- Center text overlay -->\r
<div class="absolute flex flex-col items-center justify-center">\r
<span class="text-[10px] text-on-surface-variant font-bold uppercase tracking-wider">Total</span>\r
<span class="text-lg font-bold text-on-surface">$4,120</span>\r
</div>\r
</div>\r
<div class="space-y-4 mt-6 pt-4 border-t border-outline-variant/10">\r
<div class="flex items-center justify-between text-sm">\r
<div class="flex items-center gap-3">\r
<div class="w-3 h-3 rounded-full bg-primary"></div>\r
<span class="font-medium">Housing</span>\r
</div>\r
<span class="text-on-surface-variant">45%</span>\r
</div>\r
<div class="flex items-center justify-between text-sm">\r
<div class="flex items-center gap-3">\r
<div class="w-3 h-3 rounded-full bg-tertiary"></div>\r
<span class="font-medium">Lifestyle</span>\r
</div>\r
<span class="text-on-surface-variant">30%</span>\r
</div>\r
<div class="flex items-center justify-between text-sm">\r
<div class="flex items-center gap-3">\r
<div class="w-3 h-3 rounded-full bg-orange-400"></div>\r
<span class="font-medium">Dining</span>\r
</div>\r
<span class="text-on-surface-variant">25%</span>\r
</div>\r
</div>\r
</div>\r
</div>\r
</section>\r
<section class="grid grid-cols-12 gap-6">\r
<div class="col-span-12 lg:col-span-8">\r
<div class="bg-surface-container-low rounded-[2rem] p-8">\r
<div class="flex justify-between items-center mb-8">\r
<h3 class="text-xl font-bold">Recent Transactions</h3>\r
<div class="flex gap-2">\r
<button class="px-4 py-2 bg-surface-container-lowest rounded-xl text-xs font-bold text-primary shadow-sm hover:bg-primary hover:text-white transition-all">All</button>\r
<button class="px-4 py-2 text-xs font-bold text-on-surface-variant hover:bg-surface-container-high rounded-xl transition-all">Income</button>\r
<button class="px-4 py-2 text-xs font-bold text-on-surface-variant hover:bg-surface-container-high rounded-xl transition-all">Expenses</button>\r
</div>\r
</div>\r
<div class="space-y-4">\r
<div class="bg-surface-container-lowest p-4 rounded-2xl flex items-center justify-between transition-transform hover:scale-[1.01] cursor-pointer">\r
<div class="flex items-center gap-4">\r
<div class="w-12 h-12 bg-surface-container-high rounded-full flex items-center justify-center text-primary">\r
<span class="material-symbols-outlined">shopping_cart</span>\r
</div>\r
<div>\r
<p class="font-bold text-on-surface">Whole Foods Market</p>\r
<p class="text-xs text-on-surface-variant">Today • 12:45 PM • Groceries</p>\r
</div>\r
</div>\r
<div class="text-right">\r
<p class="font-bold text-on-surface">-$184.20</p>\r
<span class="inline-block px-2 py-0.5 rounded-full bg-error-container text-[10px] text-on-error-container font-bold uppercase tracking-tighter">Expense</span>\r
</div>\r
</div>\r
<div class="bg-surface-container-lowest p-4 rounded-2xl flex items-center justify-between transition-transform hover:scale-[1.01] cursor-pointer">\r
<div class="flex items-center gap-4">\r
<div class="w-12 h-12 bg-surface-container-high rounded-full flex items-center justify-center text-tertiary">\r
<span class="material-symbols-outlined">work</span>\r
</div>\r
<div>\r
<p class="font-bold text-on-surface">Tech Solutions Inc.</p>\r
<p class="text-xs text-on-surface-variant">Yesterday • 09:00 AM • Salary</p>\r
</div>\r
</div>\r
<div class="text-right">\r
<p class="font-bold text-tertiary">+$8,500.00</p>\r
<span class="inline-block px-2 py-0.5 rounded-full bg-tertiary-container text-[10px] text-on-tertiary-container font-bold uppercase tracking-tighter">Income</span>\r
</div>\r
</div>\r
<div class="bg-surface-container-lowest p-4 rounded-2xl flex items-center justify-between transition-transform hover:scale-[1.01] cursor-pointer">\r
<div class="flex items-center gap-4">\r
<div class="w-12 h-12 bg-surface-container-high rounded-full flex items-center justify-center text-blue-500">\r
<span class="material-symbols-outlined">flight_takeoff</span>\r
</div>\r
<div>\r
<p class="font-bold text-on-surface">Delta Airlines</p>\r
<p class="text-xs text-on-surface-variant">Oct 24, 2023 • 03:15 PM • Travel</p>\r
</div>\r
</div>\r
<div class="text-right">\r
<p class="font-bold text-on-surface">-$642.00</p>\r
<span class="inline-block px-2 py-0.5 rounded-full bg-error-container text-[10px] text-on-error-container font-bold uppercase tracking-tighter">Expense</span>\r
</div>\r
</div>\r
<div class="bg-surface-container-lowest p-4 rounded-2xl flex items-center justify-between transition-transform hover:scale-[1.01] cursor-pointer">\r
<div class="flex items-center gap-4">\r
<div class="w-12 h-12 bg-surface-container-high rounded-full flex items-center justify-center text-purple-500">\r
<span class="material-symbols-outlined">subscriptions</span>\r
</div>\r
<div>\r
<p class="font-bold text-on-surface">Adobe Creative Cloud</p>\r
<p class="text-xs text-on-surface-variant">Oct 22, 2023 • 10:00 AM • Software</p>\r
</div>\r
</div>\r
<div class="text-right">\r
<p class="font-bold text-on-surface">-$52.99</p>\r
<span class="inline-block px-2 py-0.5 rounded-full bg-error-container text-[10px] text-on-error-container font-bold uppercase tracking-tighter">Expense</span>\r
</div>\r
</div>\r
</div>\r
</div>\r
</div>\r
<div class="col-span-12 lg:col-span-4 flex flex-col gap-6">\r
<div class="bg-surface-container-lowest rounded-[2rem] p-8 shadow-[0_20px_40px_rgba(43,75,185,0.06)] relative overflow-hidden flex-1 min-h-[300px]">\r
<div class="relative z-10">\r
<h3 class="text-xl font-bold mb-6">Financial Goal</h3>\r
<div class="mb-4">\r
<div class="flex justify-between items-end mb-2">\r
<p class="text-xs font-bold text-on-surface-variant uppercase tracking-widest">New Home Downpayment</p>\r
<p class="text-lg font-bold text-primary">65%</p>\r
</div>\r
<div class="w-full h-3 bg-surface-container-high rounded-full overflow-hidden">\r
<div class="h-full bg-gradient-to-r from-primary to-primary-container w-[65%] rounded-full"></div>\r
</div>\r
</div>\r
<p class="text-sm text-on-surface-variant leading-relaxed">You're only <span class="font-bold text-on-surface">$17,500</span> away from your dream architectural project. Keep up the momentum!</p>\r
</div>\r
<div class="absolute -right-10 -bottom-10 opacity-20">\r
<span class="material-symbols-outlined text-[120px] text-primary">architecture</span>\r
</div>\r
</div>\r
<div class="bg-primary-container text-on-primary-container rounded-[2rem] p-8 flex flex-col justify-between items-start">\r
<div>\r
<span class="material-symbols-outlined text-4xl mb-4">auto_awesome</span>\r
<h3 class="text-lg font-bold leading-tight mb-2">Smart Saving Insight</h3>\r
<p class="text-xs opacity-80 leading-relaxed mb-6">Switching your energy provider could architect a saving of $42/month based on your current utility spending.</p>\r
</div>\r
<button class="bg-white text-primary px-6 py-2.5 rounded-xl text-xs font-bold hover:bg-opacity-90 transition-all">Explore Savings</button>\r
</div>\r
</div>\r
</section>\r
</div>\r
</main>\r
<button class="fixed bottom-8 right-8 w-16 h-16 bg-primary rounded-full flex items-center justify-center text-on-primary shadow-[0_15px_30px_rgba(43,75,185,0.3)] hover:scale-110 active:scale-95 transition-all z-50 group">\r
<span class="material-symbols-outlined text-3xl group-hover:rotate-90 transition-transform duration-300">add</span>\r
</button>\r
</body></html>`,ch=`<!DOCTYPE html>\r
\r
<html class="dark" lang="en"><head>\r
<meta charset="utf-8"/>\r
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>\r
<title>Architect Finance | Settings</title>\r
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"><\/script>\r
<link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;600;700;800&amp;family=Inter:wght@400;500;600&amp;display=swap" rel="stylesheet"/>\r
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>\r
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>\r
<script id="tailwind-config">\r
      tailwind.config = {\r
        darkMode: "class",\r
        theme: {\r
          extend: {\r
            "colors": {\r
                    "error-dim": "#c54d4a",\r
                    "surface-variant": "#23252e",\r
                    "on-tertiary-fixed-variant": "#604a71",\r
                    "surface-container-low": "#121318",\r
                    "on-tertiary-container": "#564067",\r
                    "error": "#fa746f",\r
                    "surface-container": "#181920",\r
                    "on-secondary-fixed": "#393f51",\r
                    "background": "#0d0e12",\r
                    "surface-container-high": "#1e1f26",\r
                    "secondary-dim": "#b3b8cf",\r
                    "secondary": "#c1c5dd",\r
                    "on-surface-variant": "#aaaab5",\r
                    "on-primary-fixed-variant": "#384775",\r
                    "on-primary": "#2f3e6b",\r
                    "primary-container": "#42517f",\r
                    "on-primary-container": "#dce2ff",\r
                    "inverse-on-surface": "#54555a",\r
                    "tertiary-dim": "#d8bceb",\r
                    "surface-tint": "#b6c5fb",\r
                    "outline": "#74757f",\r
                    "on-error": "#490006",\r
                    "inverse-primary": "#4e5d8c",\r
                    "primary-fixed": "#b6c5fb",\r
                    "surface-bright": "#2a2c34",\r
                    "surface-dim": "#0d0e12",\r
                    "on-primary-fixed": "#1a2a56",\r
                    "on-background": "#e4e4f0",\r
                    "error-container": "#871f21",\r
                    "tertiary": "#f1daff",\r
                    "inverse-surface": "#faf8fe",\r
                    "on-tertiary": "#5f4971",\r
                    "on-error-container": "#ff9993",\r
                    "on-secondary-fixed-variant": "#565b6f",\r
                    "outline-variant": "#464750",\r
                    "primary-dim": "#a8b7ec",\r
                    "surface": "#0d0e12",\r
                    "on-tertiary-fixed": "#422d53",\r
                    "secondary-container": "#363b4d",\r
                    "on-secondary-container": "#babed5",\r
                    "tertiary-container": "#e6cafa",\r
                    "on-surface": "#e4e4f0",\r
                    "tertiary-fixed-dim": "#d8bceb",\r
                    "surface-container-highest": "#23252e",\r
                    "tertiary-fixed": "#e6cafa",\r
                    "primary": "#b6c5fb",\r
                    "primary-fixed-dim": "#a8b7ec",\r
                    "secondary-fixed-dim": "#cfd3eb",\r
                    "on-secondary": "#3a4052",\r
                    "secondary-fixed": "#dde1f9",\r
                    "surface-container-lowest": "#000000"\r
            },\r
            "borderRadius": {\r
                    "DEFAULT": "0.125rem",\r
                    "lg": "0.25rem",\r
                    "xl": "0.5rem",\r
                    "full": "0.75rem"\r
            },\r
            "fontFamily": {\r
                    "headline": ["Manrope"],\r
                    "body": ["Inter"],\r
                    "label": ["Inter"]\r
            }\r
          },\r
        },\r
      }\r
    <\/script>\r
<style>\r
        body { font-family: 'Inter', sans-serif; }\r
        .font-headline { font-family: 'Manrope', sans-serif; }\r
        .material-symbols-outlined {\r
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;\r
        }\r
    </style>\r
</head>\r
<body class="bg-background text-on-surface">\r
<aside class="h-screen w-64 fixed left-0 top-0 bg-slate-950 flex flex-col py-8 z-50 hidden md:flex">\r
<div class="px-8 mb-10">\r
<h1 class="text-2xl font-black text-slate-50 font-headline tracking-tight">Architect</h1>\r
</div>\r
<nav class="flex-1 space-y-2">\r
<div class="flex items-center px-8 py-3 text-slate-500 hover:text-slate-300 transition-all cursor-pointer font-manrope text-sm active:scale-95 duration-150 group">\r
<span class="material-symbols-outlined mr-4" data-icon="dashboard">dashboard</span>\r
<span>Dashboard</span>\r
</div>\r
<div class="flex items-center px-8 py-3 text-slate-500 hover:text-slate-300 transition-all cursor-pointer font-manrope text-sm active:scale-95 duration-150 group">\r
<span class="material-symbols-outlined mr-4" data-icon="receipt_long">receipt_long</span>\r
<span>Transactions</span>\r
</div>\r
<div class="flex items-center px-8 py-3 text-slate-500 hover:text-slate-300 transition-all cursor-pointer font-manrope text-sm active:scale-95 duration-150 group">\r
<span class="material-symbols-outlined mr-4" data-icon="account_balance_wallet">account_balance_wallet</span>\r
<span>Budgets</span>\r
</div>\r
<div class="flex items-center px-8 py-3 text-blue-400 border-r-2 border-blue-500 font-bold bg-blue-500/5 transition-all cursor-pointer font-manrope text-sm active:scale-95 duration-150 group">\r
<span class="material-symbols-outlined mr-4" data-icon="settings" style="font-variation-settings: 'FILL' 1;">settings</span>\r
<span>Settings</span>\r
</div>\r
</nav>\r
<div class="mt-auto px-8 py-6 bg-slate-900 mx-4 rounded-xl border border-white/5">\r
<div class="flex items-center mb-4">\r
<img alt="User Profile" class="w-10 h-10 rounded-full object-cover mr-3 border border-blue-500/30" data-alt="Close up portrait of a professional man with a confident expression, soft studio lighting, high-end corporate style" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBi7_qIoJZ5d6RwdvXbz_WkfD1Wg1yLq_JdY2xFVYI2Ap41uN23PoQ_ziODINeK9mYWcC9NAik53dgqQ82SWn3vNUrr-OCqjfqY_U24HhN2XEL5PMbrqRSxq3FubB2kpveR7CHSQIZuVc9Xm8MQfUh2L9RJcXppLQElnrZ4xlDEKmkgCOhLkE60BxGyQUMbPV0LMk3UdkSJkWMOYmVal150hyr_N4V75eVH_2Y7Lyhib-PNGPx1rOJydE4uvPs8Ggx_xJzQqUFakJs"/>\r
<div class="overflow-hidden">\r
<p class="text-sm font-bold text-slate-50 truncate">Alex Sterling</p>\r
<p class="text-[10px] text-blue-400 uppercase tracking-widest font-bold">Premium Member</p>\r
</div>\r
</div>\r
<button class="w-full py-2 bg-gradient-to-br from-primary-container to-on-primary-fixed-variant text-white text-xs font-bold rounded-lg transition-transform active:scale-95">\r
                Upgrade Plan\r
            </button>\r
</div>\r
</aside>\r
<main class="md:ml-64 min-h-screen">\r
<header class="w-full sticky top-0 z-40 bg-slate-900/80 backdrop-blur-xl flex items-center justify-between px-6 h-16 w-full font-manrope tracking-tight">\r
<div class="flex items-center gap-4">\r
<div class="md:hidden">\r
<span class="material-symbols-outlined text-on-surface" data-icon="menu">menu</span>\r
</div>\r
<h2 class="text-xl font-bold text-slate-100">Settings</h2>\r
</div>\r
<div class="flex items-center gap-4">\r
<div class="hidden sm:flex bg-slate-800/50 rounded-full px-4 py-1.5 items-center gap-2">\r
<span class="material-symbols-outlined text-slate-400 text-sm" data-icon="search">search</span>\r
<input class="bg-transparent border-none text-xs text-on-surface focus:ring-0 w-32 md:w-48 placeholder:text-slate-500" placeholder="Search settings..." type="text"/>\r
</div>\r
<div class="flex items-center gap-3">\r
<button class="p-2 text-slate-400 hover:bg-slate-800/80 transition-colors rounded-full relative">\r
<span class="material-symbols-outlined" data-icon="notifications">notifications</span>\r
<span class="absolute top-2 right-2 w-2 h-2 bg-blue-500 rounded-full border-2 border-slate-900"></span>\r
</button>\r
<button class="p-2 text-slate-400 hover:bg-slate-800/80 transition-colors rounded-full">\r
<span class="material-symbols-outlined" data-icon="settings">settings</span>\r
</button>\r
</div>\r
</div>\r
</header>\r
<div class="p-6 md:p-12 max-w-5xl mx-auto space-y-12">\r
<section class="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">\r
<div class="md:col-span-4">\r
<h3 class="text-2xl font-headline font-extrabold text-on-surface mb-2">Profile Information</h3>\r
<p class="text-on-surface-variant text-sm leading-relaxed">Manage your public identity and personal details.</p>\r
</div>\r
<div class="md:col-span-8 bg-surface-container-high rounded-xl p-8 space-y-8">\r
<div class="flex flex-col sm:flex-row items-center gap-6">\r
<div class="relative group">\r
<img alt="User profile avatar" class="w-24 h-24 rounded-full object-cover border-4 border-surface-variant" data-alt="Professional studio portrait of a man in his early 40s, warm lighting, neutral dark gray background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB2vq2LgdXdom7dI7V54tylZ_11utCYr8E9zAng_LYqIO8vXOuEE3mwmpX00sTHn7Q4CIxpQKIuVB3VWIzbfemiA4rQey3ig7TXGmRCStqbK4EFtv3IRuBbpznQMoiJDAUdSqzHJwhiHS8BtvCNQetiQcnMIPJniWILWVsYlxTbdTMJ95zNWVBiPJwDfX4ekWNaGtrX9Kbzn1rOwnB-xfHH_vCPtfTx9Og3FfWuzI6JE1l38R8kAJ_gTSo5zszfBbX3C11gikFe3oo"/>\r
<button class="absolute bottom-0 right-0 p-2 bg-primary rounded-full text-on-primary shadow-lg hover:scale-110 transition-transform">\r
<span class="material-symbols-outlined text-sm" data-icon="edit">edit</span>\r
</button>\r
</div>\r
<div class="text-center sm:text-left flex-1">\r
<h4 class="text-xl font-bold font-headline">Alex Sterling</h4>\r
<p class="text-on-surface-variant text-sm mb-4">alex.sterling@architect-finance.com</p>\r
<button class="px-6 py-2 bg-surface-container-highest text-primary font-semibold text-sm rounded-lg hover:bg-surface-variant transition-colors">\r
                                Edit Profile\r
                            </button>\r
</div>\r
</div>\r
</div>\r
</section>\r
<section class="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">\r
<div class="md:col-span-4">\r
<h3 class="text-2xl font-headline font-extrabold text-on-surface mb-2">Security</h3>\r
<p class="text-on-surface-variant text-sm leading-relaxed">Protect your financial data with enterprise-grade security tools.</p>\r
</div>\r
<div class="md:col-span-8 space-y-4">\r
<div class="bg-surface-container-high rounded-xl p-6 flex items-center justify-between group cursor-pointer hover:bg-surface-variant transition-colors">\r
<div class="flex items-center gap-4">\r
<div class="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">\r
<span class="material-symbols-outlined" data-icon="lock">lock</span>\r
</div>\r
<div>\r
<p class="font-bold text-on-surface">Change Password</p>\r
<p class="text-xs text-on-surface-variant">Last updated 3 months ago</p>\r
</div>\r
</div>\r
<span class="material-symbols-outlined text-on-surface-variant group-hover:translate-x-1 transition-transform" data-icon="chevron_right">chevron_right</span>\r
</div>\r
<div class="bg-surface-container-high rounded-xl p-6 flex items-start sm:items-center justify-between gap-4">\r
<div class="flex items-center gap-4">\r
<div class="w-10 h-10 rounded-full bg-tertiary/10 flex items-center justify-center text-tertiary">\r
<span class="material-symbols-outlined" data-icon="verified_user">verified_user</span>\r
</div>\r
<div>\r
<p class="font-bold text-on-surface">Two-Factor Authentication</p>\r
<p class="text-xs text-on-surface-variant">Secure your login with a mobile device</p>\r
</div>\r
</div>\r
<label class="relative inline-flex items-center cursor-pointer shrink-0 ml-4">\r
<input checked="" class="sr-only peer" type="checkbox"/>\r
<div class="w-11 h-6 bg-surface-variant peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>\r
</label>\r
</div>\r
</div>\r
</section>\r
<section class="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">\r
<div class="md:col-span-4">\r
<h3 class="text-2xl font-headline font-extrabold text-on-surface mb-2">Notifications</h3>\r
<p class="text-on-surface-variant text-sm leading-relaxed">Stay updated on your wealth progression and spending activity.</p>\r
</div>\r
<div class="md:col-span-8 bg-surface-container-high rounded-xl divide-y divide-white/5 overflow-hidden">\r
<div class="p-6 flex items-start sm:items-center justify-between gap-4">\r
<div>\r
<p class="font-bold text-on-surface">Spending Alerts</p>\r
<p class="text-xs text-on-surface-variant">Instant notification when a large purchase is made</p>\r
</div>\r
<label class="relative inline-flex items-center cursor-pointer shrink-0 ml-4">\r
<input checked="" class="sr-only peer" type="checkbox"/>\r
<div class="w-11 h-6 bg-surface-variant peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>\r
</label>\r
</div>\r
<div class="p-6 flex items-start sm:items-center justify-between gap-4">\r
<div>\r
<p class="font-bold text-on-surface">Budget Milestones</p>\r
<p class="text-xs text-on-surface-variant">Alerts when you reach 80% of your monthly budget</p>\r
</div>\r
<label class="relative inline-flex items-center cursor-pointer shrink-0 ml-4">\r
<input checked="" class="sr-only peer" type="checkbox"/>\r
<div class="w-11 h-6 bg-surface-variant peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>\r
</label>\r
</div>\r
<div class="p-6 flex items-start sm:items-center justify-between gap-4">\r
<div>\r
<p class="font-bold text-on-surface">Weekly Reports</p>\r
<p class="text-xs text-on-surface-variant">Summarized digest of your financial health every Monday</p>\r
</div>\r
<label class="relative inline-flex items-center cursor-pointer shrink-0 ml-4">\r
<input class="sr-only peer" type="checkbox"/>\r
<div class="w-11 h-6 bg-surface-variant peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>\r
</label>\r
</div>\r
</div>\r
</section>\r
<section class="grid grid-cols-1 md:grid-cols-12 gap-8 items-start pb-20">\r
<div class="md:col-span-4">\r
<h3 class="text-2xl font-headline font-extrabold text-on-surface mb-2">App Preferences</h3>\r
<p class="text-on-surface-variant text-sm leading-relaxed">Customize your viewing experience and regional formats.</p>\r
</div>\r
<div class="md:col-span-8 bg-surface-container-high rounded-xl p-8 space-y-8">\r
<div class="space-y-2">\r
<label class="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Primary Currency</label>\r
<div class="relative">\r
<select class="w-full appearance-none bg-surface-container-highest border-none rounded-lg py-3 pl-4 pr-12 text-on-surface focus:ring-2 focus:ring-primary/20 cursor-pointer leading-6">\r
<option value="USD">USD - United States Dollar</option>\r
<option value="EUR">EUR - Euro</option>\r
<option value="GBP">GBP - British Pound</option>\r
</select>\r
<span class="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-on-surface-variant" data-icon="expand_more">expand_more</span>\r
</div>\r
</div>\r
<div class="flex items-start sm:items-center justify-between gap-4 pt-4">\r
<div class="flex items-center gap-4">\r
<div class="w-10 h-10 rounded-full bg-on-surface-variant/10 flex items-center justify-center text-on-surface">\r
<span class="material-symbols-outlined" data-icon="dark_mode">dark_mode</span>\r
</div>\r
<div>\r
<p class="font-bold text-on-surface">Dark Mode</p>\r
<p class="text-xs text-on-surface-variant">Switch between light and dark theme</p>\r
</div>\r
</div>\r
<label class="relative inline-flex items-center cursor-pointer shrink-0 ml-4">\r
<input checked="" class="sr-only peer" type="checkbox"/>\r
<div class="w-11 h-6 bg-surface-variant peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>\r
</label>\r
</div>\r
</div>\r
</section>\r
</div>\r
</main>\r
<nav class="md:hidden fixed bottom-0 left-0 right-0 bg-slate-900 border-t border-white/5 px-6 h-16 flex items-center justify-between z-50">\r
<div class="flex flex-col items-center text-slate-400">\r
<span class="material-symbols-outlined" data-icon="dashboard">dashboard</span>\r
<span class="text-[10px] font-bold">Dash</span>\r
</div>\r
<div class="flex flex-col items-center text-slate-400">\r
<span class="material-symbols-outlined" data-icon="receipt_long">receipt_long</span>\r
<span class="text-[10px] font-bold">Trans</span>\r
</div>\r
<div class="flex flex-col items-center text-slate-400">\r
<span class="material-symbols-outlined" data-icon="account_balance_wallet">account_balance_wallet</span>\r
<span class="text-[10px] font-bold">Budgets</span>\r
</div>\r
<div class="flex flex-col items-center text-blue-400">\r
<span class="material-symbols-outlined" data-icon="settings" style="font-variation-settings: 'FILL' 1;">settings</span>\r
<span class="text-[10px] font-bold">Setup</span>\r
</div>\r
</nav>\r
</body></html>`,dh=`<!DOCTYPE html>\r
\r
<html class="light dark" lang="en"><head>\r
<meta charset="utf-8"/>\r
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>\r
<title>Transactions | Financial Architect</title>\r
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"><\/script>\r
<link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&amp;family=Inter:wght@400;500;600&amp;family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>\r
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>\r
<script id="tailwind-config">tailwind.config = {darkMode: "class", theme: {extend: {colors: {"on-surface-variant": "#aaaab5", background: "#0d0e12", "on-tertiary-fixed-variant": "#604a71", "on-primary-fixed-variant": "#384775", outline: "#74757f", "outline-variant": "#464750", "on-primary-fixed": "#1a2a56", "on-error-container": "#ff9993", "surface-dim": "#0d0e12", "surface-bright": "#2a2c34", "on-secondary-fixed": "#393f51", "tertiary-container": "#e6cafa", "on-secondary-fixed-variant": "#565b6f", "primary-fixed": "#b6c5fb", "on-tertiary-fixed": "#422d53", "inverse-on-surface": "#54555a", "tertiary-fixed": "#e6cafa", "on-primary": "#2f3e6b", tertiary: "#f1daff", "secondary-container": "#363b4d", "secondary-fixed-dim": "#cfd3eb", "primary-container": "#42517f", primary: "#b6c5fb", "on-tertiary-container": "#564067", "on-background": "#e4e4f0", "tertiary-fixed-dim": "#d8bceb", "on-primary-container": "#dce2ff", "surface-tint": "#b6c5fb", "secondary-fixed": "#dde1f9", "error-container": "#871f21", secondary: "#c1c5dd", error: "#fa746f", "surface-variant": "#23252e", "on-secondary": "#3a4052", "inverse-surface": "#faf8fe", "primary-fixed-dim": "#a8b7ec", "on-secondary-container": "#babed5", "surface-container-lowest": "#000000", "inverse-primary": "#4e5d8c", "surface-container-highest": "#23252e", surface: "#0d0e12", "on-tertiary": "#5f4971", "on-surface": "#e4e4f0", "surface-container": "#181920", "surface-container-low": "#121318", "surface-container-high": "#1e1f26", "on-error": "#490006", "primary-dim": "#a8b7ec", "error-dim": "#c54d4a", "tertiary-dim": "#d8bceb", "secondary-dim": "#b3b8cf"}, borderRadius: {DEFAULT: "0.125rem", lg: "0.25rem", xl: "0.5rem", full: "0.75rem"}, fontFamily: {headline: ["Manrope"], body: ["Inter"], label: ["Inter"], display: "Manrope"}}}};<\/script>\r
<style>\r
        .material-symbols-outlined {\r
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;\r
        }\r
        body { font-family: 'Inter', sans-serif; }\r
        h1, h2, h3, .font-manrope { font-family: 'Manrope', sans-serif; }\r
    </style>\r
</head>\r
<body class="bg-background text-on-background antialiased">\r
<!-- TopNavBar -->\r
<header class="docked top-0 w-full z-40 sticky bg-[#faf8ff]/80 dark:bg-slate-950/80 backdrop-blur-xl shadow-[0_20px_40px_rgba(43,75,185,0.06)]">\r
<div class="flex justify-between items-center w-full px-8 py-3 max-w-[1920px] mx-auto">\r
<div class="flex items-center gap-8">\r
<span class="text-2xl font-black text-[#131b2e] dark:text-slate-50 font-manrope">Financial Architect</span>\r
<nav class="hidden md:flex gap-6">\r
<a class="text-[#434655] dark:text-slate-400 font-medium font-manrope text-sm tracking-tight hover:bg-[#e2e7ff] px-3 py-1.5 rounded-lg transition-colors" href="#">Dashboard</a>\r
<a class="text-blue-700 dark:text-blue-300 font-bold border-b-2 border-blue-700 font-manrope text-sm tracking-tight px-3 py-1.5 transition-colors" href="#">Transactions</a>\r
<a class="text-[#434655] dark:text-slate-400 font-medium font-manrope text-sm tracking-tight hover:bg-[#e2e7ff] px-3 py-1.5 rounded-lg transition-colors" href="#">Budgets</a>\r
<a class="text-[#434655] dark:text-slate-400 font-medium font-manrope text-sm tracking-tight hover:bg-[#e2e7ff] px-3 py-1.5 rounded-lg transition-colors" href="#">Analytics</a>\r
</nav>\r
</div>\r
<div class="flex items-center gap-4">\r
<div class="hidden lg:flex items-center bg-surface-container-high px-4 py-2 rounded-xl focus-within:ring-2 ring-primary/20 transition-all">\r
<span class="material-symbols-outlined text-outline mr-2 text-sm">search</span>\r
<input class="bg-transparent border-none focus:ring-0 text-sm text-on-surface w-64" placeholder="Search transactions..." type="text"/>\r
</div>\r
<button class="flex items-center gap-2 bg-gradient-to-br from-primary to-primary-container text-on-primary px-5 py-2.5 rounded-xl font-semibold text-sm active:scale-95 duration-200 ease-in-out">\r
<span class="material-symbols-outlined text-[20px]">add</span>\r
                    Add Expense\r
                </button>\r
<div class="flex items-center gap-2 ml-4">\r
<button class="p-2 text-on-surface-variant hover:bg-surface-container-high rounded-full transition-colors">\r
<span class="material-symbols-outlined" data-icon="notifications">notifications</span>\r
</button>\r
<button class="p-2 text-on-surface-variant hover:bg-surface-container-high rounded-full transition-colors">\r
<span class="material-symbols-outlined" data-icon="settings">settings</span>\r
</button>\r
<img alt="User Profile Avatar" class="w-10 h-10 rounded-full border-2 border-white object-cover" data-alt="Close up portrait of a professional man with a friendly expression in a modern office setting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDtpTkQ9bDNGtUuse_N6Kuzayg1yD1TvS8TkoDUQySv_5gHVVkH5gBTXi03q4xZZXt_7F09CjyWeCDobbqFZjCSEK0M6G5i0u_aexqvxqQHcq5qJXpMoQMjvYRIRWs4sSIsSbs1jQY3JWq5vr-hMyz77wHOlAXQbFVMQtfAPByvLfQFb021VqBw3GRurngTXX6ZLDTFdyPZdq_OnF4ym1mbajoSd5OJgcIqZSBt8x_LTR-qt9tF-j4-7MbatlhLhSJYmyrD7LSW3Jo"/>\r
</div>\r
</div>\r
</div>\r
</header>\r
<div class="flex min-h-[calc(100vh-64px)]">\r
<!-- SideNavBar -->\r
<aside class="fixed left-0 top-0 h-full flex flex-col p-6 space-y-2 docked left-0 w-64 border-r border-slate-100 dark:border-slate-800 bg-[#faf8ff] dark:bg-slate-950 z-30 pt-20">\r
<div class="mb-8 px-4">\r
<div class="flex items-center gap-3">\r
<div class="w-10 h-10 bg-primary-fixed rounded-lg flex items-center justify-center">\r
<span class="material-symbols-outlined text-primary font-bold" data-icon="account_balance">account_balance</span>\r
</div>\r
<div>\r
<h2 class="text-xl font-bold text-blue-800 dark:text-blue-300 font-manrope">Architect</h2>\r
<p class="text-xs text-on-surface-variant font-inter">Wealth Management</p>\r
</div>\r
</div>\r
</div>\r
<nav class="flex-1 space-y-1">\r
<div class="text-[#434655] dark:text-slate-400 px-4 py-3 hover:bg-slate-50 dark:hover:bg-slate-900 rounded-lg cursor-pointer hover:translate-x-1 transition-transform duration-200 flex items-center gap-3 font-inter text-sm font-medium">\r
<span class="material-symbols-outlined" data-icon="dashboard">dashboard</span>\r
                    Dashboard\r
                </div>\r
<div class="bg-[#dae2fd] dark:bg-blue-900/40 text-[#173bab] dark:text-blue-100 rounded-lg px-4 py-3 font-semibold cursor-pointer flex items-center gap-3 font-inter text-sm">\r
<span class="material-symbols-outlined" data-icon="receipt_long">receipt_long</span>\r
                    Transactions\r
                </div>\r
<div class="text-[#434655] dark:text-slate-400 px-4 py-3 hover:bg-slate-50 dark:hover:bg-slate-900 rounded-lg cursor-pointer hover:translate-x-1 transition-transform duration-200 flex items-center gap-3 font-inter text-sm font-medium">\r
<span class="material-symbols-outlined" data-icon="account_balance_wallet">account_balance_wallet</span>\r
                    Budgets\r
                </div>\r
<div class="text-[#434655] dark:text-slate-400 px-4 py-3 hover:bg-slate-50 dark:hover:bg-slate-900 rounded-lg cursor-pointer hover:translate-x-1 transition-transform duration-200 flex items-center gap-3 font-inter text-sm font-medium">\r
<span class="material-symbols-outlined" data-icon="bar_chart">bar_chart</span>\r
                    Analytics\r
                </div>\r
<div class="text-[#434655] dark:text-slate-400 px-4 py-3 hover:bg-slate-50 dark:hover:bg-slate-900 rounded-lg cursor-pointer hover:translate-x-1 transition-transform duration-200 flex items-center gap-3 font-inter text-sm font-medium">\r
<span class="material-symbols-outlined" data-icon="settings">settings</span>\r
                    Settings\r
                </div>\r
</nav>\r
<div class="pt-6 border-t border-slate-100 dark:border-slate-800">\r
<div class="bg-primary-fixed/30 p-4 rounded-2xl mb-4">\r
<p class="text-xs font-bold text-on-surface mb-2">UPGRADE PLAN</p>\r
<p class="text-xs text-on-surface-variant mb-3">Get advanced insights and multi-currency support.</p>\r
<button class="w-full bg-primary text-on-primary py-2 rounded-lg text-xs font-bold">Premium Access</button>\r
</div>\r
<div class="text-[#434655] dark:text-slate-400 px-4 py-3 hover:bg-slate-50 dark:hover:bg-slate-900 rounded-lg cursor-pointer flex items-center gap-3 font-inter text-sm font-medium">\r
<span class="material-symbols-outlined" data-icon="help">help</span>\r
                    Help Center\r
                </div>\r
<div class="text-[#434655] dark:text-slate-400 px-4 py-3 hover:bg-slate-50 dark:hover:bg-slate-900 rounded-lg cursor-pointer flex items-center gap-3 font-inter text-sm font-medium">\r
<span class="material-symbols-outlined" data-icon="logout">logout</span>\r
                    Sign Out\r
                </div>\r
</div>\r
</aside>\r
<!-- Main Content Canvas -->\r
<main class="ml-64 flex-1 p-10 bg-surface-container-low min-h-screen">\r
<!-- Header Section -->\r
<div class="mb-10">\r
<div class="flex justify-between items-end">\r
<div>\r
<h1 class="text-[3.5rem] font-extrabold text-on-surface font-manrope leading-tight tracking-tight">Transactions</h1>\r
<p class="text-on-surface-variant font-inter max-w-lg mt-2">Manage your cash flow with precision. Review, filter, and audit your financial footprint.</p>\r
</div>\r
</div>\r
</div>\r
<!-- Filter Bento Grid -->\r
<div class="grid grid-cols-12 gap-6 mb-8">\r
<!-- Search & Logic -->\r
<div class="col-span-12 lg:col-span-8 bg-surface-container-lowest p-6 rounded-[2rem] shadow-[0_20px_40px_rgba(43,75,185,0.04)]">\r
<div class="flex flex-col md:flex-row gap-4 items-center">\r
<div class="flex-1 relative w-full">\r
<span class="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline">search</span>\r
<input class="w-full bg-surface-container-high border-none rounded-2xl py-3.5 pl-12 pr-4 focus:ring-2 ring-primary/20 text-on-surface font-inter text-sm" placeholder="Search by merchant, ID, or description..." type="text"/>\r
</div>\r
<div class="flex gap-4 w-full md:w-auto">\r
<div class="relative min-w-[160px]">\r
<select class="w-full appearance-none bg-surface-container-high border-none rounded-2xl py-3.5 px-4 focus:ring-2 ring-primary/20 text-on-surface font-inter text-sm">\r
<option>All Categories</option>\r
<option>Housing</option>\r
<option>Transportation</option>\r
<option>Food &amp; Dining</option>\r
<option>Subscriptions</option>\r
</select>\r
<span class="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-outline text-sm">expand_more</span>\r
</div>\r
<div class="relative min-w-[160px]">\r
<select class="w-full appearance-none bg-surface-container-high border-none rounded-2xl py-3.5 px-4 focus:ring-2 ring-primary/20 text-on-surface font-inter text-sm">\r
<option>Last 30 Days</option>\r
<option>This Month</option>\r
<option>Last Quarter</option>\r
<option>Custom Range</option>\r
</select>\r
<span class="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-outline text-sm">calendar_month</span>\r
</div>\r
</div>\r
</div>\r
</div>\r
<!-- Summary Micro-Card -->\r
<div class="col-span-12 lg:col-span-4 bg-gradient-to-br from-primary to-primary-container p-6 rounded-[2rem] text-on-primary flex flex-col justify-between">\r
<div>\r
<span class="text-xs font-bold uppercase tracking-widest opacity-80">Total Spending (Period)</span>\r
<h2 class="text-3xl font-black font-manrope mt-1">$12,482.50</h2>\r
</div>\r
<div class="flex items-center gap-2 mt-4">\r
<span class="bg-white/20 px-2 py-1 rounded-full text-[10px] font-bold">↑ 4.2% VS LAST MONTH</span>\r
</div>\r
</div>\r
</div>\r
<!-- Transaction Table Container -->\r
<div class="bg-surface-container-lowest rounded-[2.5rem] shadow-[0_40px_80px_rgba(43,75,185,0.06)] overflow-hidden">\r
<div class="overflow-x-auto">\r
<table class="w-full border-collapse">\r
<thead>\r
<tr class="bg-surface-container-high/50">\r
<th class="px-8 py-5 text-left text-[11px] font-extrabold uppercase tracking-widest text-on-surface-variant font-inter">\r
                                    Date\r
                                </th>\r
<th class="px-8 py-5 text-left text-[11px] font-extrabold uppercase tracking-widest text-on-surface-variant font-inter">\r
                                    Merchant / Description\r
                                </th>\r
<th class="px-8 py-5 text-left text-[11px] font-extrabold uppercase tracking-widest text-on-surface-variant font-inter">\r
                                    Category\r
                                </th>\r
<th class="px-8 py-5 text-right text-[11px] font-extrabold uppercase tracking-widest text-on-surface-variant font-inter">\r
                                    Status\r
                                </th>\r
<th class="px-8 py-5 text-right text-[11px] font-extrabold uppercase tracking-widest text-on-surface-variant font-inter">\r
                                    Amount\r
                                </th>\r
<th class="px-8 py-5"></th>\r
</tr>\r
</thead>\r
<tbody class="divide-y divide-slate-50 dark:divide-slate-900">\r
<!-- Transaction Item -->\r
<tr class="hover:bg-surface-container-low/40 transition-colors group">\r
<td class="px-8 py-6">\r
<div class="flex flex-col">\r
<span class="text-sm font-bold text-on-surface">Oct 24, 2023</span>\r
<span class="text-[11px] text-on-surface-variant">10:45 AM</span>\r
</div>\r
</td>\r
<td class="px-8 py-6">\r
<div class="flex items-center gap-4">\r
<div class="w-10 h-10 rounded-xl bg-surface-container-high flex items-center justify-center">\r
<span class="material-symbols-outlined text-primary" data-icon="shopping_bag">shopping_bag</span>\r
</div>\r
<div class="flex flex-col">\r
<span class="text-sm font-bold text-on-surface">Apple Store Soho</span>\r
<span class="text-[11px] text-on-surface-variant">Purchase ID: #88291</span>\r
</div>\r
</div>\r
</td>\r
<td class="px-8 py-6">\r
<span class="px-3 py-1 bg-surface-container-high rounded-full text-[11px] font-bold text-on-primary-fixed-variant">Technology</span>\r
</td>\r
<td class="px-8 py-6 text-right">\r
<span class="px-3 py-1 bg-tertiary-container/20 text-tertiary text-[11px] font-bold rounded-full">Completed</span>\r
</td>\r
<td class="px-8 py-6 text-right">\r
<span class="text-sm font-extrabold text-on-surface">-$1,299.00</span>\r
</td>\r
<td class="px-8 py-6 text-right">\r
<button class="p-2 opacity-0 group-hover:opacity-100 transition-opacity">\r
<span class="material-symbols-outlined text-on-surface-variant">more_vert</span>\r
</button>\r
</td>\r
</tr>\r
<!-- Transaction Item -->\r
<tr class="hover:bg-surface-container-low/40 transition-colors group">\r
<td class="px-8 py-6">\r
<div class="flex flex-col">\r
<span class="text-sm font-bold text-on-surface">Oct 22, 2023</span>\r
<span class="text-[11px] text-on-surface-variant">08:12 PM</span>\r
</div>\r
</td>\r
<td class="px-8 py-6">\r
<div class="flex items-center gap-4">\r
<div class="w-10 h-10 rounded-xl bg-surface-container-high flex items-center justify-center">\r
<span class="material-symbols-outlined text-primary" data-icon="restaurant">restaurant</span>\r
</div>\r
<div class="flex flex-col">\r
<span class="text-sm font-bold text-on-surface">Blue Hill Restaurant</span>\r
<span class="text-[11px] text-on-surface-variant">Fine Dining</span>\r
</div>\r
</div>\r
</td>\r
<td class="px-8 py-6">\r
<span class="px-3 py-1 bg-surface-container-high rounded-full text-[11px] font-bold text-on-primary-fixed-variant">Food &amp; Dining</span>\r
</td>\r
<td class="px-8 py-6 text-right">\r
<span class="px-3 py-1 bg-tertiary-container/20 text-tertiary text-[11px] font-bold rounded-full">Completed</span>\r
</td>\r
<td class="px-8 py-6 text-right">\r
<span class="text-sm font-extrabold text-on-surface">-$245.50</span>\r
</td>\r
<td class="px-8 py-6 text-right">\r
<button class="p-2 opacity-0 group-hover:opacity-100 transition-opacity">\r
<span class="material-symbols-outlined text-on-surface-variant">more_vert</span>\r
</button>\r
</td>\r
</tr>\r
<!-- Transaction Item (Income) -->\r
<tr class="hover:bg-surface-container-low/40 transition-colors group">\r
<td class="px-8 py-6">\r
<div class="flex flex-col">\r
<span class="text-sm font-bold text-on-surface">Oct 20, 2023</span>\r
<span class="text-[11px] text-on-surface-variant">09:00 AM</span>\r
</div>\r
</td>\r
<td class="px-8 py-6">\r
<div class="flex items-center gap-4">\r
<div class="w-10 h-10 rounded-xl bg-tertiary-container/10 flex items-center justify-center">\r
<span class="material-symbols-outlined text-tertiary" data-icon="payments">payments</span>\r
</div>\r
<div class="flex flex-col">\r
<span class="text-sm font-bold text-on-surface">Monthly Salary</span>\r
<span class="text-[11px] text-on-surface-variant">Architectural Firm Corp</span>\r
</div>\r
</div>\r
</td>\r
<td class="px-8 py-6">\r
<span class="px-3 py-1 bg-tertiary-container/10 rounded-full text-[11px] font-bold text-tertiary">Income</span>\r
</td>\r
<td class="px-8 py-6 text-right">\r
<span class="px-3 py-1 bg-tertiary-container/20 text-tertiary text-[11px] font-bold rounded-full">Completed</span>\r
</td>\r
<td class="px-8 py-6 text-right">\r
<span class="text-sm font-extrabold text-tertiary">+$8,500.00</span>\r
</td>\r
<td class="px-8 py-6 text-right">\r
<button class="p-2 opacity-0 group-hover:opacity-100 transition-opacity">\r
<span class="material-symbols-outlined text-on-surface-variant">more_vert</span>\r
</button>\r
</td>\r
</tr>\r
<!-- Transaction Item (Pending) -->\r
<tr class="hover:bg-surface-container-low/40 transition-colors group">\r
<td class="px-8 py-6">\r
<div class="flex flex-col">\r
<span class="text-sm font-bold text-on-surface">Oct 19, 2023</span>\r
<span class="text-[11px] text-on-surface-variant">02:30 PM</span>\r
</div>\r
</td>\r
<td class="px-8 py-6">\r
<div class="flex items-center gap-4">\r
<div class="w-10 h-10 rounded-xl bg-surface-container-high flex items-center justify-center">\r
<span class="material-symbols-outlined text-primary" data-icon="directions_car">directions_car</span>\r
</div>\r
<div class="flex flex-col">\r
<span class="text-sm font-bold text-on-surface">Uber Trip</span>\r
<span class="text-[11px] text-on-surface-variant">Transportation</span>\r
</div>\r
</div>\r
</td>\r
<td class="px-8 py-6">\r
<span class="px-3 py-1 bg-surface-container-high rounded-full text-[11px] font-bold text-on-primary-fixed-variant">Transport</span>\r
</td>\r
<td class="px-8 py-6 text-right">\r
<span class="px-3 py-1 bg-surface-container-high text-on-surface-variant text-[11px] font-bold rounded-full">Pending</span>\r
</td>\r
<td class="px-8 py-6 text-right">\r
<span class="text-sm font-extrabold text-on-surface">-$32.18</span>\r
</td>\r
<td class="px-8 py-6 text-right">\r
<button class="p-2 opacity-0 group-hover:opacity-100 transition-opacity">\r
<span class="material-symbols-outlined text-on-surface-variant">more_vert</span>\r
</button>\r
</td>\r
</tr>\r
<!-- Transaction Item -->\r
<tr class="hover:bg-surface-container-low/40 transition-colors group">\r
<td class="px-8 py-6">\r
<div class="flex flex-col">\r
<span class="text-sm font-bold text-on-surface">Oct 18, 2023</span>\r
<span class="text-[11px] text-on-surface-variant">11:15 AM</span>\r
</div>\r
</td>\r
<td class="px-8 py-6">\r
<div class="flex items-center gap-4">\r
<div class="w-10 h-10 rounded-xl bg-surface-container-high flex items-center justify-center">\r
<span class="material-symbols-outlined text-primary" data-icon="fitness_center">fitness_center</span>\r
</div>\r
<div class="flex flex-col">\r
<span class="text-sm font-bold text-on-surface">Equinox Gym</span>\r
<span class="text-[11px] text-on-surface-variant">Monthly Membership</span>\r
</div>\r
</div>\r
</td>\r
<td class="px-8 py-6">\r
<span class="px-3 py-1 bg-surface-container-high rounded-full text-[11px] font-bold text-on-primary-fixed-variant">Wellness</span>\r
</td>\r
<td class="px-8 py-6 text-right">\r
<span class="px-3 py-1 bg-tertiary-container/20 text-tertiary text-[11px] font-bold rounded-full">Completed</span>\r
</td>\r
<td class="px-8 py-6 text-right">\r
<span class="text-sm font-extrabold text-on-surface">-$185.00</span>\r
</td>\r
<td class="px-8 py-6 text-right">\r
<button class="p-2 opacity-0 group-hover:opacity-100 transition-opacity">\r
<span class="material-symbols-outlined text-on-surface-variant">more_vert</span>\r
</button>\r
</td>\r
</tr>\r
</tbody>\r
</table>\r
</div>\r
<!-- Pagination Footer -->\r
<div class="px-8 py-6 flex items-center justify-between bg-surface-container-high/20">\r
<span class="text-[11px] font-bold text-on-surface-variant uppercase tracking-widest">Showing 1-10 of 482 transactions</span>\r
<div class="flex items-center gap-1">\r
<button class="w-10 h-10 rounded-xl flex items-center justify-center hover:bg-surface-container-high transition-colors">\r
<span class="material-symbols-outlined text-sm">chevron_left</span>\r
</button>\r
<button class="w-10 h-10 rounded-xl flex items-center justify-center bg-primary text-on-primary text-xs font-bold">1</button>\r
<button class="w-10 h-10 rounded-xl flex items-center justify-center hover:bg-surface-container-high text-xs font-bold transition-colors">2</button>\r
<button class="w-10 h-10 rounded-xl flex items-center justify-center hover:bg-surface-container-high text-xs font-bold transition-colors">3</button>\r
<span class="px-2 text-on-surface-variant">...</span>\r
<button class="w-10 h-10 rounded-xl flex items-center justify-center hover:bg-surface-container-high text-xs font-bold transition-colors">48</button>\r
<button class="w-10 h-10 rounded-xl flex items-center justify-center hover:bg-surface-container-high transition-colors">\r
<span class="material-symbols-outlined text-sm">chevron_right</span>\r
</button>\r
</div>\r
</div>\r
</div>\r
</main>\r
</div>\r
<!-- Contextual FAB (Hidden on Transactions List as per instructions, but kept as reference for system capability) -->\r
<!-- Suppression logic: Screen primary purpose is auditing/review, not a simple task creation like "Book a Walk" -->\r
</body></html>`,fh=e=>e.replace(/\sdata-alt="[^"]*"/g,"").replace(/\sdata-icon="[^"]*"/g,""),Kt=(e,t)=>({title:e,html:fh(t)}),ph={"/dashboard-3":Kt("Dashboard 3",uh),"/add-expense":Kt("Add Expense",sh),"/add-expense-fixed-layout":Kt("Add Expense Fixed Layout",oh),"/budgets-categories":Kt("Budgets & Categories",ih),"/settings":Kt("Settings",ch),"/transactions-list":Kt("Transactions",dh)};function zi({children:e}){return fo()?e:x.jsx(ba,{to:"/login",replace:!0})}function Fi({children:e}){return fo()?x.jsx(ba,{to:"/dashboard-3",replace:!0}):e}function mh(){const e=En(),[t,n]=E.useState(!1),r=E.useRef(!0);return E.useEffect(()=>{if(r.current){r.current=!1;return}n(!0);const a=setTimeout(()=>{n(!1)},550);return()=>clearTimeout(a)},[e.pathname]),x.jsxs(x.Fragment,{children:[t?x.jsx("div",{className:"route-loader-overlay",role:"status","aria-live":"polite","aria-label":"Loading next page",children:x.jsxs("div",{className:"route-loader-card",children:[x.jsx("div",{className:"route-loader-spinner"}),x.jsx("p",{className:"route-loader-text",children:"Loading workspace..."})]})}):null,x.jsxs(Lm,{children:[x.jsx(At,{path:"/",element:x.jsx(ba,{to:fo()?"/dashboard-3":"/login",replace:!0})}),x.jsx(At,{path:"/login",element:x.jsx(Fi,{children:x.jsx(eh,{})})}),x.jsx(At,{path:"/signup",element:x.jsx(Fi,{children:x.jsx(th,{})})}),x.jsx(At,{path:"/spending-report",element:x.jsx(zi,{children:x.jsx(lh,{})})}),Object.entries(ph).map(([a,l])=>x.jsx(At,{path:a,element:x.jsx(zi,{children:x.jsx(Zm,{title:l.title,html:l.html})})},a)),x.jsx(At,{path:"*",element:x.jsx(ba,{to:"/login",replace:!0})})]})]})}pl.createRoot(document.getElementById("root")).render(x.jsx(Ki.StrictMode,{children:x.jsx(Fm,{children:x.jsx(mh,{})})}));
