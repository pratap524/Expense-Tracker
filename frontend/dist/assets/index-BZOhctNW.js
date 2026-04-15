function id(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const a in r)if(a!=="default"&&!(a in e)){const l=Object.getOwnPropertyDescriptor(r,a);l&&Object.defineProperty(e,a,l.get?l:{enumerable:!0,get:()=>r[a]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const s of l.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(a){if(a.ep)return;a.ep=!0;const l=n(a);fetch(a.href,l)}})();function ud(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var zi={exports:{}},wa={},Fi={exports:{}},A={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fr=Symbol.for("react.element"),cd=Symbol.for("react.portal"),dd=Symbol.for("react.fragment"),fd=Symbol.for("react.strict_mode"),pd=Symbol.for("react.profiler"),md=Symbol.for("react.provider"),hd=Symbol.for("react.context"),xd=Symbol.for("react.forward_ref"),gd=Symbol.for("react.suspense"),vd=Symbol.for("react.memo"),yd=Symbol.for("react.lazy"),po=Symbol.iterator;function bd(e){return e===null||typeof e!="object"?null:(e=po&&e[po]||e["@@iterator"],typeof e=="function"?e:null)}var Oi={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Di=Object.assign,Ui={};function bn(e,t,n){this.props=e,this.context=t,this.refs=Ui,this.updater=n||Oi}bn.prototype.isReactComponent={};bn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};bn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Bi(){}Bi.prototype=bn.prototype;function is(e,t,n){this.props=e,this.context=t,this.refs=Ui,this.updater=n||Oi}var us=is.prototype=new Bi;us.constructor=is;Di(us,bn.prototype);us.isPureReactComponent=!0;var mo=Array.isArray,$i=Object.prototype.hasOwnProperty,cs={current:null},Vi={key:!0,ref:!0,__self:!0,__source:!0};function Hi(e,t,n){var r,a={},l=null,s=null;if(t!=null)for(r in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(l=""+t.key),t)$i.call(t,r)&&!Vi.hasOwnProperty(r)&&(a[r]=t[r]);var o=arguments.length-2;if(o===1)a.children=n;else if(1<o){for(var i=Array(o),u=0;u<o;u++)i[u]=arguments[u+2];a.children=i}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)a[r]===void 0&&(a[r]=o[r]);return{$$typeof:fr,type:e,key:l,ref:s,props:a,_owner:cs.current}}function wd(e,t){return{$$typeof:fr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function ds(e){return typeof e=="object"&&e!==null&&e.$$typeof===fr}function kd(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var ho=/\/+/g;function Da(e,t){return typeof e=="object"&&e!==null&&e.key!=null?kd(""+e.key):t.toString(36)}function Fr(e,t,n,r,a){var l=typeof e;(l==="undefined"||l==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(l){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case fr:case cd:s=!0}}if(s)return s=e,a=a(s),e=r===""?"."+Da(s,0):r,mo(a)?(n="",e!=null&&(n=e.replace(ho,"$&/")+"/"),Fr(a,t,n,"",function(u){return u})):a!=null&&(ds(a)&&(a=wd(a,n+(!a.key||s&&s.key===a.key?"":(""+a.key).replace(ho,"$&/")+"/")+e)),t.push(a)),1;if(s=0,r=r===""?".":r+":",mo(e))for(var o=0;o<e.length;o++){l=e[o];var i=r+Da(l,o);s+=Fr(l,t,n,i,a)}else if(i=bd(e),typeof i=="function")for(e=i.call(e),o=0;!(l=e.next()).done;)l=l.value,i=r+Da(l,o++),s+=Fr(l,t,n,i,a);else if(l==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function br(e,t,n){if(e==null)return e;var r=[],a=0;return Fr(e,r,"","",function(l){return t.call(n,l,a++)}),r}function Sd(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var pe={current:null},Or={transition:null},Cd={ReactCurrentDispatcher:pe,ReactCurrentBatchConfig:Or,ReactCurrentOwner:cs};function Wi(){throw Error("act(...) is not supported in production builds of React.")}A.Children={map:br,forEach:function(e,t,n){br(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return br(e,function(){t++}),t},toArray:function(e){return br(e,function(t){return t})||[]},only:function(e){if(!ds(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};A.Component=bn;A.Fragment=dd;A.Profiler=pd;A.PureComponent=is;A.StrictMode=fd;A.Suspense=gd;A.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Cd;A.act=Wi;A.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Di({},e.props),a=e.key,l=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(l=t.ref,s=cs.current),t.key!==void 0&&(a=""+t.key),e.type&&e.type.defaultProps)var o=e.type.defaultProps;for(i in t)$i.call(t,i)&&!Vi.hasOwnProperty(i)&&(r[i]=t[i]===void 0&&o!==void 0?o[i]:t[i])}var i=arguments.length-2;if(i===1)r.children=n;else if(1<i){o=Array(i);for(var u=0;u<i;u++)o[u]=arguments[u+2];r.children=o}return{$$typeof:fr,type:e.type,key:a,ref:l,props:r,_owner:s}};A.createContext=function(e){return e={$$typeof:hd,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:md,_context:e},e.Consumer=e};A.createElement=Hi;A.createFactory=function(e){var t=Hi.bind(null,e);return t.type=e,t};A.createRef=function(){return{current:null}};A.forwardRef=function(e){return{$$typeof:xd,render:e}};A.isValidElement=ds;A.lazy=function(e){return{$$typeof:yd,_payload:{_status:-1,_result:e},_init:Sd}};A.memo=function(e,t){return{$$typeof:vd,type:e,compare:t===void 0?null:t}};A.startTransition=function(e){var t=Or.transition;Or.transition={};try{e()}finally{Or.transition=t}};A.unstable_act=Wi;A.useCallback=function(e,t){return pe.current.useCallback(e,t)};A.useContext=function(e){return pe.current.useContext(e)};A.useDebugValue=function(){};A.useDeferredValue=function(e){return pe.current.useDeferredValue(e)};A.useEffect=function(e,t){return pe.current.useEffect(e,t)};A.useId=function(){return pe.current.useId()};A.useImperativeHandle=function(e,t,n){return pe.current.useImperativeHandle(e,t,n)};A.useInsertionEffect=function(e,t){return pe.current.useInsertionEffect(e,t)};A.useLayoutEffect=function(e,t){return pe.current.useLayoutEffect(e,t)};A.useMemo=function(e,t){return pe.current.useMemo(e,t)};A.useReducer=function(e,t,n){return pe.current.useReducer(e,t,n)};A.useRef=function(e){return pe.current.useRef(e)};A.useState=function(e){return pe.current.useState(e)};A.useSyncExternalStore=function(e,t,n){return pe.current.useSyncExternalStore(e,t,n)};A.useTransition=function(){return pe.current.useTransition()};A.version="18.3.1";Fi.exports=A;var E=Fi.exports;const Qi=ud(E),Ed=id({__proto__:null,default:Qi},[E]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _d=E,Nd=Symbol.for("react.element"),jd=Symbol.for("react.fragment"),Pd=Object.prototype.hasOwnProperty,Ld=_d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Td={key:!0,ref:!0,__self:!0,__source:!0};function Yi(e,t,n){var r,a={},l=null,s=null;n!==void 0&&(l=""+n),t.key!==void 0&&(l=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)Pd.call(t,r)&&!Td.hasOwnProperty(r)&&(a[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)a[r]===void 0&&(a[r]=t[r]);return{$$typeof:Nd,type:e,key:l,ref:s,props:a,_owner:Ld.current}}wa.Fragment=jd;wa.jsx=Yi;wa.jsxs=Yi;zi.exports=wa;var x=zi.exports,fl={},Ki={exports:{}},Ce={},Ji={exports:{}},Gi={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(j,M){var T=j.length;j.push(M);e:for(;0<T;){var Y=T-1>>>1,ee=j[Y];if(0<a(ee,M))j[Y]=M,j[T]=ee,T=Y;else break e}}function n(j){return j.length===0?null:j[0]}function r(j){if(j.length===0)return null;var M=j[0],T=j.pop();if(T!==M){j[0]=T;e:for(var Y=0,ee=j.length,vr=ee>>>1;Y<vr;){var jt=2*(Y+1)-1,Oa=j[jt],Pt=jt+1,yr=j[Pt];if(0>a(Oa,T))Pt<ee&&0>a(yr,Oa)?(j[Y]=yr,j[Pt]=T,Y=Pt):(j[Y]=Oa,j[jt]=T,Y=jt);else if(Pt<ee&&0>a(yr,T))j[Y]=yr,j[Pt]=T,Y=Pt;else break e}}return M}function a(j,M){var T=j.sortIndex-M.sortIndex;return T!==0?T:j.id-M.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;e.unstable_now=function(){return l.now()}}else{var s=Date,o=s.now();e.unstable_now=function(){return s.now()-o}}var i=[],u=[],h=1,p=null,d=3,v=!1,g=!1,y=!1,b=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(j){for(var M=n(u);M!==null;){if(M.callback===null)r(u);else if(M.startTime<=j)r(u),M.sortIndex=M.expirationTime,t(i,M);else break;M=n(u)}}function w(j){if(y=!1,m(j),!g)if(n(i)!==null)g=!0,De(k);else{var M=n(u);M!==null&&Nt(w,M.startTime-j)}}function k(j,M){g=!1,y&&(y=!1,f(N),N=-1),v=!0;var T=d;try{for(m(M),p=n(i);p!==null&&(!(p.expirationTime>M)||j&&!D());){var Y=p.callback;if(typeof Y=="function"){p.callback=null,d=p.priorityLevel;var ee=Y(p.expirationTime<=M);M=e.unstable_now(),typeof ee=="function"?p.callback=ee:p===n(i)&&r(i),m(M)}else r(i);p=n(i)}if(p!==null)var vr=!0;else{var jt=n(u);jt!==null&&Nt(w,jt.startTime-M),vr=!1}return vr}finally{p=null,d=T,v=!1}}var C=!1,_=null,N=-1,z=5,L=-1;function D(){return!(e.unstable_now()-L<z)}function ce(){if(_!==null){var j=e.unstable_now();L=j;var M=!0;try{M=_(!0,j)}finally{M?I():(C=!1,_=null)}}else C=!1}var I;if(typeof c=="function")I=function(){c(ce)};else if(typeof MessageChannel<"u"){var Z=new MessageChannel,tt=Z.port2;Z.port1.onmessage=ce,I=function(){tt.postMessage(null)}}else I=function(){b(ce,0)};function De(j){_=j,C||(C=!0,I())}function Nt(j,M){N=b(function(){j(e.unstable_now())},M)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(j){j.callback=null},e.unstable_continueExecution=function(){g||v||(g=!0,De(k))},e.unstable_forceFrameRate=function(j){0>j||125<j?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):z=0<j?Math.floor(1e3/j):5},e.unstable_getCurrentPriorityLevel=function(){return d},e.unstable_getFirstCallbackNode=function(){return n(i)},e.unstable_next=function(j){switch(d){case 1:case 2:case 3:var M=3;break;default:M=d}var T=d;d=M;try{return j()}finally{d=T}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(j,M){switch(j){case 1:case 2:case 3:case 4:case 5:break;default:j=3}var T=d;d=j;try{return M()}finally{d=T}},e.unstable_scheduleCallback=function(j,M,T){var Y=e.unstable_now();switch(typeof T=="object"&&T!==null?(T=T.delay,T=typeof T=="number"&&0<T?Y+T:Y):T=Y,j){case 1:var ee=-1;break;case 2:ee=250;break;case 5:ee=1073741823;break;case 4:ee=1e4;break;default:ee=5e3}return ee=T+ee,j={id:h++,callback:M,priorityLevel:j,startTime:T,expirationTime:ee,sortIndex:-1},T>Y?(j.sortIndex=T,t(u,j),n(i)===null&&j===n(u)&&(y?(f(N),N=-1):y=!0,Nt(w,T-Y))):(j.sortIndex=ee,t(i,j),g||v||(g=!0,De(k))),j},e.unstable_shouldYield=D,e.unstable_wrapCallback=function(j){var M=d;return function(){var T=d;d=M;try{return j.apply(this,arguments)}finally{d=T}}}})(Gi);Ji.exports=Gi;var Md=Ji.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Id=E,Se=Md;function S(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Xi=new Set,Yn={};function Ht(e,t){pn(e,t),pn(e+"Capture",t)}function pn(e,t){for(Yn[e]=t,e=0;e<t.length;e++)Xi.add(t[e])}var Ge=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),pl=Object.prototype.hasOwnProperty,Ad=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,xo={},go={};function Rd(e){return pl.call(go,e)?!0:pl.call(xo,e)?!1:Ad.test(e)?go[e]=!0:(xo[e]=!0,!1)}function zd(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Fd(e,t,n,r){if(t===null||typeof t>"u"||zd(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function me(e,t,n,r,a,l,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=a,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=l,this.removeEmptyString=s}var le={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){le[e]=new me(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];le[t]=new me(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){le[e]=new me(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){le[e]=new me(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){le[e]=new me(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){le[e]=new me(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){le[e]=new me(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){le[e]=new me(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){le[e]=new me(e,5,!1,e.toLowerCase(),null,!1,!1)});var fs=/[\-:]([a-z])/g;function ps(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(fs,ps);le[t]=new me(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(fs,ps);le[t]=new me(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(fs,ps);le[t]=new me(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){le[e]=new me(e,1,!1,e.toLowerCase(),null,!1,!1)});le.xlinkHref=new me("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){le[e]=new me(e,1,!1,e.toLowerCase(),null,!0,!0)});function ms(e,t,n,r){var a=le.hasOwnProperty(t)?le[t]:null;(a!==null?a.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Fd(t,n,a,r)&&(n=null),r||a===null?Rd(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):a.mustUseProperty?e[a.propertyName]=n===null?a.type===3?!1:"":n:(t=a.attributeName,r=a.attributeNamespace,n===null?e.removeAttribute(t):(a=a.type,n=a===3||a===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var et=Id.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,wr=Symbol.for("react.element"),Kt=Symbol.for("react.portal"),Jt=Symbol.for("react.fragment"),hs=Symbol.for("react.strict_mode"),ml=Symbol.for("react.profiler"),qi=Symbol.for("react.provider"),Zi=Symbol.for("react.context"),xs=Symbol.for("react.forward_ref"),hl=Symbol.for("react.suspense"),xl=Symbol.for("react.suspense_list"),gs=Symbol.for("react.memo"),at=Symbol.for("react.lazy"),eu=Symbol.for("react.offscreen"),vo=Symbol.iterator;function _n(e){return e===null||typeof e!="object"?null:(e=vo&&e[vo]||e["@@iterator"],typeof e=="function"?e:null)}var W=Object.assign,Ua;function An(e){if(Ua===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Ua=t&&t[1]||""}return`
`+Ua+e}var Ba=!1;function $a(e,t){if(!e||Ba)return"";Ba=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var a=u.stack.split(`
`),l=r.stack.split(`
`),s=a.length-1,o=l.length-1;1<=s&&0<=o&&a[s]!==l[o];)o--;for(;1<=s&&0<=o;s--,o--)if(a[s]!==l[o]){if(s!==1||o!==1)do if(s--,o--,0>o||a[s]!==l[o]){var i=`
`+a[s].replace(" at new "," at ");return e.displayName&&i.includes("<anonymous>")&&(i=i.replace("<anonymous>",e.displayName)),i}while(1<=s&&0<=o);break}}}finally{Ba=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?An(e):""}function Od(e){switch(e.tag){case 5:return An(e.type);case 16:return An("Lazy");case 13:return An("Suspense");case 19:return An("SuspenseList");case 0:case 2:case 15:return e=$a(e.type,!1),e;case 11:return e=$a(e.type.render,!1),e;case 1:return e=$a(e.type,!0),e;default:return""}}function gl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Jt:return"Fragment";case Kt:return"Portal";case ml:return"Profiler";case hs:return"StrictMode";case hl:return"Suspense";case xl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Zi:return(e.displayName||"Context")+".Consumer";case qi:return(e._context.displayName||"Context")+".Provider";case xs:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case gs:return t=e.displayName||null,t!==null?t:gl(e.type)||"Memo";case at:t=e._payload,e=e._init;try{return gl(e(t))}catch{}}return null}function Dd(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return gl(t);case 8:return t===hs?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function bt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function tu(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Ud(e){var t=tu(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var a=n.get,l=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(s){r=""+s,l.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function kr(e){e._valueTracker||(e._valueTracker=Ud(e))}function nu(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=tu(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Jr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function vl(e,t){var n=t.checked;return W({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function yo(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=bt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function ru(e,t){t=t.checked,t!=null&&ms(e,"checked",t,!1)}function yl(e,t){ru(e,t);var n=bt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?bl(e,t.type,n):t.hasOwnProperty("defaultValue")&&bl(e,t.type,bt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function bo(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function bl(e,t,n){(t!=="number"||Jr(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Rn=Array.isArray;function sn(e,t,n,r){if(e=e.options,t){t={};for(var a=0;a<n.length;a++)t["$"+n[a]]=!0;for(n=0;n<e.length;n++)a=t.hasOwnProperty("$"+e[n].value),e[n].selected!==a&&(e[n].selected=a),a&&r&&(e[n].defaultSelected=!0)}else{for(n=""+bt(n),t=null,a=0;a<e.length;a++){if(e[a].value===n){e[a].selected=!0,r&&(e[a].defaultSelected=!0);return}t!==null||e[a].disabled||(t=e[a])}t!==null&&(t.selected=!0)}}function wl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(S(91));return W({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function wo(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(S(92));if(Rn(n)){if(1<n.length)throw Error(S(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:bt(n)}}function au(e,t){var n=bt(t.value),r=bt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function ko(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function lu(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function kl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?lu(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Sr,su=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,a){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,a)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Sr=Sr||document.createElement("div"),Sr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Sr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Kn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var On={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Bd=["Webkit","ms","Moz","O"];Object.keys(On).forEach(function(e){Bd.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),On[t]=On[e]})});function ou(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||On.hasOwnProperty(e)&&On[e]?(""+t).trim():t+"px"}function iu(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,a=ou(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,a):e[n]=a}}var $d=W({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Sl(e,t){if(t){if($d[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(S(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(S(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(S(61))}if(t.style!=null&&typeof t.style!="object")throw Error(S(62))}}function Cl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var El=null;function vs(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var _l=null,on=null,un=null;function So(e){if(e=hr(e)){if(typeof _l!="function")throw Error(S(280));var t=e.stateNode;t&&(t=_a(t),_l(e.stateNode,e.type,t))}}function uu(e){on?un?un.push(e):un=[e]:on=e}function cu(){if(on){var e=on,t=un;if(un=on=null,So(e),t)for(e=0;e<t.length;e++)So(t[e])}}function du(e,t){return e(t)}function fu(){}var Va=!1;function pu(e,t,n){if(Va)return e(t,n);Va=!0;try{return du(e,t,n)}finally{Va=!1,(on!==null||un!==null)&&(fu(),cu())}}function Jn(e,t){var n=e.stateNode;if(n===null)return null;var r=_a(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(S(231,t,typeof n));return n}var Nl=!1;if(Ge)try{var Nn={};Object.defineProperty(Nn,"passive",{get:function(){Nl=!0}}),window.addEventListener("test",Nn,Nn),window.removeEventListener("test",Nn,Nn)}catch{Nl=!1}function Vd(e,t,n,r,a,l,s,o,i){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(h){this.onError(h)}}var Dn=!1,Gr=null,Xr=!1,jl=null,Hd={onError:function(e){Dn=!0,Gr=e}};function Wd(e,t,n,r,a,l,s,o,i){Dn=!1,Gr=null,Vd.apply(Hd,arguments)}function Qd(e,t,n,r,a,l,s,o,i){if(Wd.apply(this,arguments),Dn){if(Dn){var u=Gr;Dn=!1,Gr=null}else throw Error(S(198));Xr||(Xr=!0,jl=u)}}function Wt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function mu(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Co(e){if(Wt(e)!==e)throw Error(S(188))}function Yd(e){var t=e.alternate;if(!t){if(t=Wt(e),t===null)throw Error(S(188));return t!==e?null:e}for(var n=e,r=t;;){var a=n.return;if(a===null)break;var l=a.alternate;if(l===null){if(r=a.return,r!==null){n=r;continue}break}if(a.child===l.child){for(l=a.child;l;){if(l===n)return Co(a),e;if(l===r)return Co(a),t;l=l.sibling}throw Error(S(188))}if(n.return!==r.return)n=a,r=l;else{for(var s=!1,o=a.child;o;){if(o===n){s=!0,n=a,r=l;break}if(o===r){s=!0,r=a,n=l;break}o=o.sibling}if(!s){for(o=l.child;o;){if(o===n){s=!0,n=l,r=a;break}if(o===r){s=!0,r=l,n=a;break}o=o.sibling}if(!s)throw Error(S(189))}}if(n.alternate!==r)throw Error(S(190))}if(n.tag!==3)throw Error(S(188));return n.stateNode.current===n?e:t}function hu(e){return e=Yd(e),e!==null?xu(e):null}function xu(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=xu(e);if(t!==null)return t;e=e.sibling}return null}var gu=Se.unstable_scheduleCallback,Eo=Se.unstable_cancelCallback,Kd=Se.unstable_shouldYield,Jd=Se.unstable_requestPaint,K=Se.unstable_now,Gd=Se.unstable_getCurrentPriorityLevel,ys=Se.unstable_ImmediatePriority,vu=Se.unstable_UserBlockingPriority,qr=Se.unstable_NormalPriority,Xd=Se.unstable_LowPriority,yu=Se.unstable_IdlePriority,ka=null,Ve=null;function qd(e){if(Ve&&typeof Ve.onCommitFiberRoot=="function")try{Ve.onCommitFiberRoot(ka,e,void 0,(e.current.flags&128)===128)}catch{}}var ze=Math.clz32?Math.clz32:tf,Zd=Math.log,ef=Math.LN2;function tf(e){return e>>>=0,e===0?32:31-(Zd(e)/ef|0)|0}var Cr=64,Er=4194304;function zn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Zr(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,a=e.suspendedLanes,l=e.pingedLanes,s=n&268435455;if(s!==0){var o=s&~a;o!==0?r=zn(o):(l&=s,l!==0&&(r=zn(l)))}else s=n&~a,s!==0?r=zn(s):l!==0&&(r=zn(l));if(r===0)return 0;if(t!==0&&t!==r&&!(t&a)&&(a=r&-r,l=t&-t,a>=l||a===16&&(l&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-ze(t),a=1<<n,r|=e[n],t&=~a;return r}function nf(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function rf(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,a=e.expirationTimes,l=e.pendingLanes;0<l;){var s=31-ze(l),o=1<<s,i=a[s];i===-1?(!(o&n)||o&r)&&(a[s]=nf(o,t)):i<=t&&(e.expiredLanes|=o),l&=~o}}function Pl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function bu(){var e=Cr;return Cr<<=1,!(Cr&4194240)&&(Cr=64),e}function Ha(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function pr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-ze(t),e[t]=n}function af(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var a=31-ze(n),l=1<<a;t[a]=0,r[a]=-1,e[a]=-1,n&=~l}}function bs(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-ze(n),a=1<<r;a&t|e[r]&t&&(e[r]|=t),n&=~a}}var F=0;function wu(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var ku,ws,Su,Cu,Eu,Ll=!1,_r=[],dt=null,ft=null,pt=null,Gn=new Map,Xn=new Map,st=[],lf="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function _o(e,t){switch(e){case"focusin":case"focusout":dt=null;break;case"dragenter":case"dragleave":ft=null;break;case"mouseover":case"mouseout":pt=null;break;case"pointerover":case"pointerout":Gn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Xn.delete(t.pointerId)}}function jn(e,t,n,r,a,l){return e===null||e.nativeEvent!==l?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:l,targetContainers:[a]},t!==null&&(t=hr(t),t!==null&&ws(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,a!==null&&t.indexOf(a)===-1&&t.push(a),e)}function sf(e,t,n,r,a){switch(t){case"focusin":return dt=jn(dt,e,t,n,r,a),!0;case"dragenter":return ft=jn(ft,e,t,n,r,a),!0;case"mouseover":return pt=jn(pt,e,t,n,r,a),!0;case"pointerover":var l=a.pointerId;return Gn.set(l,jn(Gn.get(l)||null,e,t,n,r,a)),!0;case"gotpointercapture":return l=a.pointerId,Xn.set(l,jn(Xn.get(l)||null,e,t,n,r,a)),!0}return!1}function _u(e){var t=At(e.target);if(t!==null){var n=Wt(t);if(n!==null){if(t=n.tag,t===13){if(t=mu(n),t!==null){e.blockedOn=t,Eu(e.priority,function(){Su(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Dr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Tl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);El=r,n.target.dispatchEvent(r),El=null}else return t=hr(n),t!==null&&ws(t),e.blockedOn=n,!1;t.shift()}return!0}function No(e,t,n){Dr(e)&&n.delete(t)}function of(){Ll=!1,dt!==null&&Dr(dt)&&(dt=null),ft!==null&&Dr(ft)&&(ft=null),pt!==null&&Dr(pt)&&(pt=null),Gn.forEach(No),Xn.forEach(No)}function Pn(e,t){e.blockedOn===t&&(e.blockedOn=null,Ll||(Ll=!0,Se.unstable_scheduleCallback(Se.unstable_NormalPriority,of)))}function qn(e){function t(a){return Pn(a,e)}if(0<_r.length){Pn(_r[0],e);for(var n=1;n<_r.length;n++){var r=_r[n];r.blockedOn===e&&(r.blockedOn=null)}}for(dt!==null&&Pn(dt,e),ft!==null&&Pn(ft,e),pt!==null&&Pn(pt,e),Gn.forEach(t),Xn.forEach(t),n=0;n<st.length;n++)r=st[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<st.length&&(n=st[0],n.blockedOn===null);)_u(n),n.blockedOn===null&&st.shift()}var cn=et.ReactCurrentBatchConfig,ea=!0;function uf(e,t,n,r){var a=F,l=cn.transition;cn.transition=null;try{F=1,ks(e,t,n,r)}finally{F=a,cn.transition=l}}function cf(e,t,n,r){var a=F,l=cn.transition;cn.transition=null;try{F=4,ks(e,t,n,r)}finally{F=a,cn.transition=l}}function ks(e,t,n,r){if(ea){var a=Tl(e,t,n,r);if(a===null)el(e,t,r,ta,n),_o(e,r);else if(sf(a,e,t,n,r))r.stopPropagation();else if(_o(e,r),t&4&&-1<lf.indexOf(e)){for(;a!==null;){var l=hr(a);if(l!==null&&ku(l),l=Tl(e,t,n,r),l===null&&el(e,t,r,ta,n),l===a)break;a=l}a!==null&&r.stopPropagation()}else el(e,t,r,null,n)}}var ta=null;function Tl(e,t,n,r){if(ta=null,e=vs(r),e=At(e),e!==null)if(t=Wt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=mu(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return ta=e,null}function Nu(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Gd()){case ys:return 1;case vu:return 4;case qr:case Xd:return 16;case yu:return 536870912;default:return 16}default:return 16}}var it=null,Ss=null,Ur=null;function ju(){if(Ur)return Ur;var e,t=Ss,n=t.length,r,a="value"in it?it.value:it.textContent,l=a.length;for(e=0;e<n&&t[e]===a[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===a[l-r];r++);return Ur=a.slice(e,1<r?1-r:void 0)}function Br(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Nr(){return!0}function jo(){return!1}function Ee(e){function t(n,r,a,l,s){this._reactName=n,this._targetInst=a,this.type=r,this.nativeEvent=l,this.target=s,this.currentTarget=null;for(var o in e)e.hasOwnProperty(o)&&(n=e[o],this[o]=n?n(l):l[o]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?Nr:jo,this.isPropagationStopped=jo,this}return W(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Nr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Nr)},persist:function(){},isPersistent:Nr}),t}var wn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Cs=Ee(wn),mr=W({},wn,{view:0,detail:0}),df=Ee(mr),Wa,Qa,Ln,Sa=W({},mr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Es,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ln&&(Ln&&e.type==="mousemove"?(Wa=e.screenX-Ln.screenX,Qa=e.screenY-Ln.screenY):Qa=Wa=0,Ln=e),Wa)},movementY:function(e){return"movementY"in e?e.movementY:Qa}}),Po=Ee(Sa),ff=W({},Sa,{dataTransfer:0}),pf=Ee(ff),mf=W({},mr,{relatedTarget:0}),Ya=Ee(mf),hf=W({},wn,{animationName:0,elapsedTime:0,pseudoElement:0}),xf=Ee(hf),gf=W({},wn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),vf=Ee(gf),yf=W({},wn,{data:0}),Lo=Ee(yf),bf={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},wf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},kf={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Sf(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=kf[e])?!!t[e]:!1}function Es(){return Sf}var Cf=W({},mr,{key:function(e){if(e.key){var t=bf[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Br(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?wf[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Es,charCode:function(e){return e.type==="keypress"?Br(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Br(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Ef=Ee(Cf),_f=W({},Sa,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),To=Ee(_f),Nf=W({},mr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Es}),jf=Ee(Nf),Pf=W({},wn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Lf=Ee(Pf),Tf=W({},Sa,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Mf=Ee(Tf),If=[9,13,27,32],_s=Ge&&"CompositionEvent"in window,Un=null;Ge&&"documentMode"in document&&(Un=document.documentMode);var Af=Ge&&"TextEvent"in window&&!Un,Pu=Ge&&(!_s||Un&&8<Un&&11>=Un),Mo=" ",Io=!1;function Lu(e,t){switch(e){case"keyup":return If.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Tu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Gt=!1;function Rf(e,t){switch(e){case"compositionend":return Tu(t);case"keypress":return t.which!==32?null:(Io=!0,Mo);case"textInput":return e=t.data,e===Mo&&Io?null:e;default:return null}}function zf(e,t){if(Gt)return e==="compositionend"||!_s&&Lu(e,t)?(e=ju(),Ur=Ss=it=null,Gt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Pu&&t.locale!=="ko"?null:t.data;default:return null}}var Ff={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ao(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Ff[e.type]:t==="textarea"}function Mu(e,t,n,r){uu(r),t=na(t,"onChange"),0<t.length&&(n=new Cs("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Bn=null,Zn=null;function Of(e){Vu(e,0)}function Ca(e){var t=Zt(e);if(nu(t))return e}function Df(e,t){if(e==="change")return t}var Iu=!1;if(Ge){var Ka;if(Ge){var Ja="oninput"in document;if(!Ja){var Ro=document.createElement("div");Ro.setAttribute("oninput","return;"),Ja=typeof Ro.oninput=="function"}Ka=Ja}else Ka=!1;Iu=Ka&&(!document.documentMode||9<document.documentMode)}function zo(){Bn&&(Bn.detachEvent("onpropertychange",Au),Zn=Bn=null)}function Au(e){if(e.propertyName==="value"&&Ca(Zn)){var t=[];Mu(t,Zn,e,vs(e)),pu(Of,t)}}function Uf(e,t,n){e==="focusin"?(zo(),Bn=t,Zn=n,Bn.attachEvent("onpropertychange",Au)):e==="focusout"&&zo()}function Bf(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ca(Zn)}function $f(e,t){if(e==="click")return Ca(t)}function Vf(e,t){if(e==="input"||e==="change")return Ca(t)}function Hf(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Oe=typeof Object.is=="function"?Object.is:Hf;function er(e,t){if(Oe(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var a=n[r];if(!pl.call(t,a)||!Oe(e[a],t[a]))return!1}return!0}function Fo(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Oo(e,t){var n=Fo(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Fo(n)}}function Ru(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Ru(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function zu(){for(var e=window,t=Jr();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Jr(e.document)}return t}function Ns(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Wf(e){var t=zu(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Ru(n.ownerDocument.documentElement,n)){if(r!==null&&Ns(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var a=n.textContent.length,l=Math.min(r.start,a);r=r.end===void 0?l:Math.min(r.end,a),!e.extend&&l>r&&(a=r,r=l,l=a),a=Oo(n,l);var s=Oo(n,r);a&&s&&(e.rangeCount!==1||e.anchorNode!==a.node||e.anchorOffset!==a.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(a.node,a.offset),e.removeAllRanges(),l>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Qf=Ge&&"documentMode"in document&&11>=document.documentMode,Xt=null,Ml=null,$n=null,Il=!1;function Do(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Il||Xt==null||Xt!==Jr(r)||(r=Xt,"selectionStart"in r&&Ns(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),$n&&er($n,r)||($n=r,r=na(Ml,"onSelect"),0<r.length&&(t=new Cs("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Xt)))}function jr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var qt={animationend:jr("Animation","AnimationEnd"),animationiteration:jr("Animation","AnimationIteration"),animationstart:jr("Animation","AnimationStart"),transitionend:jr("Transition","TransitionEnd")},Ga={},Fu={};Ge&&(Fu=document.createElement("div").style,"AnimationEvent"in window||(delete qt.animationend.animation,delete qt.animationiteration.animation,delete qt.animationstart.animation),"TransitionEvent"in window||delete qt.transitionend.transition);function Ea(e){if(Ga[e])return Ga[e];if(!qt[e])return e;var t=qt[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Fu)return Ga[e]=t[n];return e}var Ou=Ea("animationend"),Du=Ea("animationiteration"),Uu=Ea("animationstart"),Bu=Ea("transitionend"),$u=new Map,Uo="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function kt(e,t){$u.set(e,t),Ht(t,[e])}for(var Xa=0;Xa<Uo.length;Xa++){var qa=Uo[Xa],Yf=qa.toLowerCase(),Kf=qa[0].toUpperCase()+qa.slice(1);kt(Yf,"on"+Kf)}kt(Ou,"onAnimationEnd");kt(Du,"onAnimationIteration");kt(Uu,"onAnimationStart");kt("dblclick","onDoubleClick");kt("focusin","onFocus");kt("focusout","onBlur");kt(Bu,"onTransitionEnd");pn("onMouseEnter",["mouseout","mouseover"]);pn("onMouseLeave",["mouseout","mouseover"]);pn("onPointerEnter",["pointerout","pointerover"]);pn("onPointerLeave",["pointerout","pointerover"]);Ht("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ht("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ht("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ht("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ht("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ht("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Fn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Jf=new Set("cancel close invalid load scroll toggle".split(" ").concat(Fn));function Bo(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Qd(r,t,void 0,e),e.currentTarget=null}function Vu(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],a=r.event;r=r.listeners;e:{var l=void 0;if(t)for(var s=r.length-1;0<=s;s--){var o=r[s],i=o.instance,u=o.currentTarget;if(o=o.listener,i!==l&&a.isPropagationStopped())break e;Bo(a,o,u),l=i}else for(s=0;s<r.length;s++){if(o=r[s],i=o.instance,u=o.currentTarget,o=o.listener,i!==l&&a.isPropagationStopped())break e;Bo(a,o,u),l=i}}}if(Xr)throw e=jl,Xr=!1,jl=null,e}function U(e,t){var n=t[Ol];n===void 0&&(n=t[Ol]=new Set);var r=e+"__bubble";n.has(r)||(Hu(t,e,2,!1),n.add(r))}function Za(e,t,n){var r=0;t&&(r|=4),Hu(n,e,r,t)}var Pr="_reactListening"+Math.random().toString(36).slice(2);function tr(e){if(!e[Pr]){e[Pr]=!0,Xi.forEach(function(n){n!=="selectionchange"&&(Jf.has(n)||Za(n,!1,e),Za(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Pr]||(t[Pr]=!0,Za("selectionchange",!1,t))}}function Hu(e,t,n,r){switch(Nu(t)){case 1:var a=uf;break;case 4:a=cf;break;default:a=ks}n=a.bind(null,t,n,e),a=void 0,!Nl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(a=!0),r?a!==void 0?e.addEventListener(t,n,{capture:!0,passive:a}):e.addEventListener(t,n,!0):a!==void 0?e.addEventListener(t,n,{passive:a}):e.addEventListener(t,n,!1)}function el(e,t,n,r,a){var l=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var o=r.stateNode.containerInfo;if(o===a||o.nodeType===8&&o.parentNode===a)break;if(s===4)for(s=r.return;s!==null;){var i=s.tag;if((i===3||i===4)&&(i=s.stateNode.containerInfo,i===a||i.nodeType===8&&i.parentNode===a))return;s=s.return}for(;o!==null;){if(s=At(o),s===null)return;if(i=s.tag,i===5||i===6){r=l=s;continue e}o=o.parentNode}}r=r.return}pu(function(){var u=l,h=vs(n),p=[];e:{var d=$u.get(e);if(d!==void 0){var v=Cs,g=e;switch(e){case"keypress":if(Br(n)===0)break e;case"keydown":case"keyup":v=Ef;break;case"focusin":g="focus",v=Ya;break;case"focusout":g="blur",v=Ya;break;case"beforeblur":case"afterblur":v=Ya;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=Po;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=pf;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=jf;break;case Ou:case Du:case Uu:v=xf;break;case Bu:v=Lf;break;case"scroll":v=df;break;case"wheel":v=Mf;break;case"copy":case"cut":case"paste":v=vf;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=To}var y=(t&4)!==0,b=!y&&e==="scroll",f=y?d!==null?d+"Capture":null:d;y=[];for(var c=u,m;c!==null;){m=c;var w=m.stateNode;if(m.tag===5&&w!==null&&(m=w,f!==null&&(w=Jn(c,f),w!=null&&y.push(nr(c,w,m)))),b)break;c=c.return}0<y.length&&(d=new v(d,g,null,n,h),p.push({event:d,listeners:y}))}}if(!(t&7)){e:{if(d=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",d&&n!==El&&(g=n.relatedTarget||n.fromElement)&&(At(g)||g[Xe]))break e;if((v||d)&&(d=h.window===h?h:(d=h.ownerDocument)?d.defaultView||d.parentWindow:window,v?(g=n.relatedTarget||n.toElement,v=u,g=g?At(g):null,g!==null&&(b=Wt(g),g!==b||g.tag!==5&&g.tag!==6)&&(g=null)):(v=null,g=u),v!==g)){if(y=Po,w="onMouseLeave",f="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(y=To,w="onPointerLeave",f="onPointerEnter",c="pointer"),b=v==null?d:Zt(v),m=g==null?d:Zt(g),d=new y(w,c+"leave",v,n,h),d.target=b,d.relatedTarget=m,w=null,At(h)===u&&(y=new y(f,c+"enter",g,n,h),y.target=m,y.relatedTarget=b,w=y),b=w,v&&g)t:{for(y=v,f=g,c=0,m=y;m;m=Qt(m))c++;for(m=0,w=f;w;w=Qt(w))m++;for(;0<c-m;)y=Qt(y),c--;for(;0<m-c;)f=Qt(f),m--;for(;c--;){if(y===f||f!==null&&y===f.alternate)break t;y=Qt(y),f=Qt(f)}y=null}else y=null;v!==null&&$o(p,d,v,y,!1),g!==null&&b!==null&&$o(p,b,g,y,!0)}}e:{if(d=u?Zt(u):window,v=d.nodeName&&d.nodeName.toLowerCase(),v==="select"||v==="input"&&d.type==="file")var k=Df;else if(Ao(d))if(Iu)k=Vf;else{k=Bf;var C=Uf}else(v=d.nodeName)&&v.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(k=$f);if(k&&(k=k(e,u))){Mu(p,k,n,h);break e}C&&C(e,d,u),e==="focusout"&&(C=d._wrapperState)&&C.controlled&&d.type==="number"&&bl(d,"number",d.value)}switch(C=u?Zt(u):window,e){case"focusin":(Ao(C)||C.contentEditable==="true")&&(Xt=C,Ml=u,$n=null);break;case"focusout":$n=Ml=Xt=null;break;case"mousedown":Il=!0;break;case"contextmenu":case"mouseup":case"dragend":Il=!1,Do(p,n,h);break;case"selectionchange":if(Qf)break;case"keydown":case"keyup":Do(p,n,h)}var _;if(_s)e:{switch(e){case"compositionstart":var N="onCompositionStart";break e;case"compositionend":N="onCompositionEnd";break e;case"compositionupdate":N="onCompositionUpdate";break e}N=void 0}else Gt?Lu(e,n)&&(N="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(N="onCompositionStart");N&&(Pu&&n.locale!=="ko"&&(Gt||N!=="onCompositionStart"?N==="onCompositionEnd"&&Gt&&(_=ju()):(it=h,Ss="value"in it?it.value:it.textContent,Gt=!0)),C=na(u,N),0<C.length&&(N=new Lo(N,e,null,n,h),p.push({event:N,listeners:C}),_?N.data=_:(_=Tu(n),_!==null&&(N.data=_)))),(_=Af?Rf(e,n):zf(e,n))&&(u=na(u,"onBeforeInput"),0<u.length&&(h=new Lo("onBeforeInput","beforeinput",null,n,h),p.push({event:h,listeners:u}),h.data=_))}Vu(p,t)})}function nr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function na(e,t){for(var n=t+"Capture",r=[];e!==null;){var a=e,l=a.stateNode;a.tag===5&&l!==null&&(a=l,l=Jn(e,n),l!=null&&r.unshift(nr(e,l,a)),l=Jn(e,t),l!=null&&r.push(nr(e,l,a))),e=e.return}return r}function Qt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function $o(e,t,n,r,a){for(var l=t._reactName,s=[];n!==null&&n!==r;){var o=n,i=o.alternate,u=o.stateNode;if(i!==null&&i===r)break;o.tag===5&&u!==null&&(o=u,a?(i=Jn(n,l),i!=null&&s.unshift(nr(n,i,o))):a||(i=Jn(n,l),i!=null&&s.push(nr(n,i,o)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var Gf=/\r\n?/g,Xf=/\u0000|\uFFFD/g;function Vo(e){return(typeof e=="string"?e:""+e).replace(Gf,`
`).replace(Xf,"")}function Lr(e,t,n){if(t=Vo(t),Vo(e)!==t&&n)throw Error(S(425))}function ra(){}var Al=null,Rl=null;function zl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Fl=typeof setTimeout=="function"?setTimeout:void 0,qf=typeof clearTimeout=="function"?clearTimeout:void 0,Ho=typeof Promise=="function"?Promise:void 0,Zf=typeof queueMicrotask=="function"?queueMicrotask:typeof Ho<"u"?function(e){return Ho.resolve(null).then(e).catch(ep)}:Fl;function ep(e){setTimeout(function(){throw e})}function tl(e,t){var n=t,r=0;do{var a=n.nextSibling;if(e.removeChild(n),a&&a.nodeType===8)if(n=a.data,n==="/$"){if(r===0){e.removeChild(a),qn(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=a}while(n);qn(t)}function mt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Wo(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var kn=Math.random().toString(36).slice(2),$e="__reactFiber$"+kn,rr="__reactProps$"+kn,Xe="__reactContainer$"+kn,Ol="__reactEvents$"+kn,tp="__reactListeners$"+kn,np="__reactHandles$"+kn;function At(e){var t=e[$e];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Xe]||n[$e]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Wo(e);e!==null;){if(n=e[$e])return n;e=Wo(e)}return t}e=n,n=e.parentNode}return null}function hr(e){return e=e[$e]||e[Xe],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Zt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(S(33))}function _a(e){return e[rr]||null}var Dl=[],en=-1;function St(e){return{current:e}}function B(e){0>en||(e.current=Dl[en],Dl[en]=null,en--)}function O(e,t){en++,Dl[en]=e.current,e.current=t}var wt={},ue=St(wt),ge=St(!1),Dt=wt;function mn(e,t){var n=e.type.contextTypes;if(!n)return wt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var a={},l;for(l in n)a[l]=t[l];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=a),a}function ve(e){return e=e.childContextTypes,e!=null}function aa(){B(ge),B(ue)}function Qo(e,t,n){if(ue.current!==wt)throw Error(S(168));O(ue,t),O(ge,n)}function Wu(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var a in r)if(!(a in t))throw Error(S(108,Dd(e)||"Unknown",a));return W({},n,r)}function la(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||wt,Dt=ue.current,O(ue,e),O(ge,ge.current),!0}function Yo(e,t,n){var r=e.stateNode;if(!r)throw Error(S(169));n?(e=Wu(e,t,Dt),r.__reactInternalMemoizedMergedChildContext=e,B(ge),B(ue),O(ue,e)):B(ge),O(ge,n)}var Qe=null,Na=!1,nl=!1;function Qu(e){Qe===null?Qe=[e]:Qe.push(e)}function rp(e){Na=!0,Qu(e)}function Ct(){if(!nl&&Qe!==null){nl=!0;var e=0,t=F;try{var n=Qe;for(F=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Qe=null,Na=!1}catch(a){throw Qe!==null&&(Qe=Qe.slice(e+1)),gu(ys,Ct),a}finally{F=t,nl=!1}}return null}var tn=[],nn=0,sa=null,oa=0,_e=[],Ne=0,Ut=null,Ye=1,Ke="";function Lt(e,t){tn[nn++]=oa,tn[nn++]=sa,sa=e,oa=t}function Yu(e,t,n){_e[Ne++]=Ye,_e[Ne++]=Ke,_e[Ne++]=Ut,Ut=e;var r=Ye;e=Ke;var a=32-ze(r)-1;r&=~(1<<a),n+=1;var l=32-ze(t)+a;if(30<l){var s=a-a%5;l=(r&(1<<s)-1).toString(32),r>>=s,a-=s,Ye=1<<32-ze(t)+a|n<<a|r,Ke=l+e}else Ye=1<<l|n<<a|r,Ke=e}function js(e){e.return!==null&&(Lt(e,1),Yu(e,1,0))}function Ps(e){for(;e===sa;)sa=tn[--nn],tn[nn]=null,oa=tn[--nn],tn[nn]=null;for(;e===Ut;)Ut=_e[--Ne],_e[Ne]=null,Ke=_e[--Ne],_e[Ne]=null,Ye=_e[--Ne],_e[Ne]=null}var ke=null,we=null,$=!1,Re=null;function Ku(e,t){var n=je(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Ko(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ke=e,we=mt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ke=e,we=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Ut!==null?{id:Ye,overflow:Ke}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=je(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,ke=e,we=null,!0):!1;default:return!1}}function Ul(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Bl(e){if($){var t=we;if(t){var n=t;if(!Ko(e,t)){if(Ul(e))throw Error(S(418));t=mt(n.nextSibling);var r=ke;t&&Ko(e,t)?Ku(r,n):(e.flags=e.flags&-4097|2,$=!1,ke=e)}}else{if(Ul(e))throw Error(S(418));e.flags=e.flags&-4097|2,$=!1,ke=e}}}function Jo(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ke=e}function Tr(e){if(e!==ke)return!1;if(!$)return Jo(e),$=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!zl(e.type,e.memoizedProps)),t&&(t=we)){if(Ul(e))throw Ju(),Error(S(418));for(;t;)Ku(e,t),t=mt(t.nextSibling)}if(Jo(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(S(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){we=mt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}we=null}}else we=ke?mt(e.stateNode.nextSibling):null;return!0}function Ju(){for(var e=we;e;)e=mt(e.nextSibling)}function hn(){we=ke=null,$=!1}function Ls(e){Re===null?Re=[e]:Re.push(e)}var ap=et.ReactCurrentBatchConfig;function Tn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(S(309));var r=n.stateNode}if(!r)throw Error(S(147,e));var a=r,l=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===l?t.ref:(t=function(s){var o=a.refs;s===null?delete o[l]:o[l]=s},t._stringRef=l,t)}if(typeof e!="string")throw Error(S(284));if(!n._owner)throw Error(S(290,e))}return e}function Mr(e,t){throw e=Object.prototype.toString.call(t),Error(S(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Go(e){var t=e._init;return t(e._payload)}function Gu(e){function t(f,c){if(e){var m=f.deletions;m===null?(f.deletions=[c],f.flags|=16):m.push(c)}}function n(f,c){if(!e)return null;for(;c!==null;)t(f,c),c=c.sibling;return null}function r(f,c){for(f=new Map;c!==null;)c.key!==null?f.set(c.key,c):f.set(c.index,c),c=c.sibling;return f}function a(f,c){return f=vt(f,c),f.index=0,f.sibling=null,f}function l(f,c,m){return f.index=m,e?(m=f.alternate,m!==null?(m=m.index,m<c?(f.flags|=2,c):m):(f.flags|=2,c)):(f.flags|=1048576,c)}function s(f){return e&&f.alternate===null&&(f.flags|=2),f}function o(f,c,m,w){return c===null||c.tag!==6?(c=ul(m,f.mode,w),c.return=f,c):(c=a(c,m),c.return=f,c)}function i(f,c,m,w){var k=m.type;return k===Jt?h(f,c,m.props.children,w,m.key):c!==null&&(c.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===at&&Go(k)===c.type)?(w=a(c,m.props),w.ref=Tn(f,c,m),w.return=f,w):(w=Kr(m.type,m.key,m.props,null,f.mode,w),w.ref=Tn(f,c,m),w.return=f,w)}function u(f,c,m,w){return c===null||c.tag!==4||c.stateNode.containerInfo!==m.containerInfo||c.stateNode.implementation!==m.implementation?(c=cl(m,f.mode,w),c.return=f,c):(c=a(c,m.children||[]),c.return=f,c)}function h(f,c,m,w,k){return c===null||c.tag!==7?(c=Ot(m,f.mode,w,k),c.return=f,c):(c=a(c,m),c.return=f,c)}function p(f,c,m){if(typeof c=="string"&&c!==""||typeof c=="number")return c=ul(""+c,f.mode,m),c.return=f,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case wr:return m=Kr(c.type,c.key,c.props,null,f.mode,m),m.ref=Tn(f,null,c),m.return=f,m;case Kt:return c=cl(c,f.mode,m),c.return=f,c;case at:var w=c._init;return p(f,w(c._payload),m)}if(Rn(c)||_n(c))return c=Ot(c,f.mode,m,null),c.return=f,c;Mr(f,c)}return null}function d(f,c,m,w){var k=c!==null?c.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return k!==null?null:o(f,c,""+m,w);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case wr:return m.key===k?i(f,c,m,w):null;case Kt:return m.key===k?u(f,c,m,w):null;case at:return k=m._init,d(f,c,k(m._payload),w)}if(Rn(m)||_n(m))return k!==null?null:h(f,c,m,w,null);Mr(f,m)}return null}function v(f,c,m,w,k){if(typeof w=="string"&&w!==""||typeof w=="number")return f=f.get(m)||null,o(c,f,""+w,k);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case wr:return f=f.get(w.key===null?m:w.key)||null,i(c,f,w,k);case Kt:return f=f.get(w.key===null?m:w.key)||null,u(c,f,w,k);case at:var C=w._init;return v(f,c,m,C(w._payload),k)}if(Rn(w)||_n(w))return f=f.get(m)||null,h(c,f,w,k,null);Mr(c,w)}return null}function g(f,c,m,w){for(var k=null,C=null,_=c,N=c=0,z=null;_!==null&&N<m.length;N++){_.index>N?(z=_,_=null):z=_.sibling;var L=d(f,_,m[N],w);if(L===null){_===null&&(_=z);break}e&&_&&L.alternate===null&&t(f,_),c=l(L,c,N),C===null?k=L:C.sibling=L,C=L,_=z}if(N===m.length)return n(f,_),$&&Lt(f,N),k;if(_===null){for(;N<m.length;N++)_=p(f,m[N],w),_!==null&&(c=l(_,c,N),C===null?k=_:C.sibling=_,C=_);return $&&Lt(f,N),k}for(_=r(f,_);N<m.length;N++)z=v(_,f,N,m[N],w),z!==null&&(e&&z.alternate!==null&&_.delete(z.key===null?N:z.key),c=l(z,c,N),C===null?k=z:C.sibling=z,C=z);return e&&_.forEach(function(D){return t(f,D)}),$&&Lt(f,N),k}function y(f,c,m,w){var k=_n(m);if(typeof k!="function")throw Error(S(150));if(m=k.call(m),m==null)throw Error(S(151));for(var C=k=null,_=c,N=c=0,z=null,L=m.next();_!==null&&!L.done;N++,L=m.next()){_.index>N?(z=_,_=null):z=_.sibling;var D=d(f,_,L.value,w);if(D===null){_===null&&(_=z);break}e&&_&&D.alternate===null&&t(f,_),c=l(D,c,N),C===null?k=D:C.sibling=D,C=D,_=z}if(L.done)return n(f,_),$&&Lt(f,N),k;if(_===null){for(;!L.done;N++,L=m.next())L=p(f,L.value,w),L!==null&&(c=l(L,c,N),C===null?k=L:C.sibling=L,C=L);return $&&Lt(f,N),k}for(_=r(f,_);!L.done;N++,L=m.next())L=v(_,f,N,L.value,w),L!==null&&(e&&L.alternate!==null&&_.delete(L.key===null?N:L.key),c=l(L,c,N),C===null?k=L:C.sibling=L,C=L);return e&&_.forEach(function(ce){return t(f,ce)}),$&&Lt(f,N),k}function b(f,c,m,w){if(typeof m=="object"&&m!==null&&m.type===Jt&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case wr:e:{for(var k=m.key,C=c;C!==null;){if(C.key===k){if(k=m.type,k===Jt){if(C.tag===7){n(f,C.sibling),c=a(C,m.props.children),c.return=f,f=c;break e}}else if(C.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===at&&Go(k)===C.type){n(f,C.sibling),c=a(C,m.props),c.ref=Tn(f,C,m),c.return=f,f=c;break e}n(f,C);break}else t(f,C);C=C.sibling}m.type===Jt?(c=Ot(m.props.children,f.mode,w,m.key),c.return=f,f=c):(w=Kr(m.type,m.key,m.props,null,f.mode,w),w.ref=Tn(f,c,m),w.return=f,f=w)}return s(f);case Kt:e:{for(C=m.key;c!==null;){if(c.key===C)if(c.tag===4&&c.stateNode.containerInfo===m.containerInfo&&c.stateNode.implementation===m.implementation){n(f,c.sibling),c=a(c,m.children||[]),c.return=f,f=c;break e}else{n(f,c);break}else t(f,c);c=c.sibling}c=cl(m,f.mode,w),c.return=f,f=c}return s(f);case at:return C=m._init,b(f,c,C(m._payload),w)}if(Rn(m))return g(f,c,m,w);if(_n(m))return y(f,c,m,w);Mr(f,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,c!==null&&c.tag===6?(n(f,c.sibling),c=a(c,m),c.return=f,f=c):(n(f,c),c=ul(m,f.mode,w),c.return=f,f=c),s(f)):n(f,c)}return b}var xn=Gu(!0),Xu=Gu(!1),ia=St(null),ua=null,rn=null,Ts=null;function Ms(){Ts=rn=ua=null}function Is(e){var t=ia.current;B(ia),e._currentValue=t}function $l(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function dn(e,t){ua=e,Ts=rn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(xe=!0),e.firstContext=null)}function Le(e){var t=e._currentValue;if(Ts!==e)if(e={context:e,memoizedValue:t,next:null},rn===null){if(ua===null)throw Error(S(308));rn=e,ua.dependencies={lanes:0,firstContext:e}}else rn=rn.next=e;return t}var Rt=null;function As(e){Rt===null?Rt=[e]:Rt.push(e)}function qu(e,t,n,r){var a=t.interleaved;return a===null?(n.next=n,As(t)):(n.next=a.next,a.next=n),t.interleaved=n,qe(e,r)}function qe(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var lt=!1;function Rs(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Zu(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Je(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function ht(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,R&2){var a=r.pending;return a===null?t.next=t:(t.next=a.next,a.next=t),r.pending=t,qe(e,n)}return a=r.interleaved,a===null?(t.next=t,As(r)):(t.next=a.next,a.next=t),r.interleaved=t,qe(e,n)}function $r(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,bs(e,n)}}function Xo(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var a=null,l=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};l===null?a=l=s:l=l.next=s,n=n.next}while(n!==null);l===null?a=l=t:l=l.next=t}else a=l=t;n={baseState:r.baseState,firstBaseUpdate:a,lastBaseUpdate:l,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function ca(e,t,n,r){var a=e.updateQueue;lt=!1;var l=a.firstBaseUpdate,s=a.lastBaseUpdate,o=a.shared.pending;if(o!==null){a.shared.pending=null;var i=o,u=i.next;i.next=null,s===null?l=u:s.next=u,s=i;var h=e.alternate;h!==null&&(h=h.updateQueue,o=h.lastBaseUpdate,o!==s&&(o===null?h.firstBaseUpdate=u:o.next=u,h.lastBaseUpdate=i))}if(l!==null){var p=a.baseState;s=0,h=u=i=null,o=l;do{var d=o.lane,v=o.eventTime;if((r&d)===d){h!==null&&(h=h.next={eventTime:v,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var g=e,y=o;switch(d=t,v=n,y.tag){case 1:if(g=y.payload,typeof g=="function"){p=g.call(v,p,d);break e}p=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=y.payload,d=typeof g=="function"?g.call(v,p,d):g,d==null)break e;p=W({},p,d);break e;case 2:lt=!0}}o.callback!==null&&o.lane!==0&&(e.flags|=64,d=a.effects,d===null?a.effects=[o]:d.push(o))}else v={eventTime:v,lane:d,tag:o.tag,payload:o.payload,callback:o.callback,next:null},h===null?(u=h=v,i=p):h=h.next=v,s|=d;if(o=o.next,o===null){if(o=a.shared.pending,o===null)break;d=o,o=d.next,d.next=null,a.lastBaseUpdate=d,a.shared.pending=null}}while(!0);if(h===null&&(i=p),a.baseState=i,a.firstBaseUpdate=u,a.lastBaseUpdate=h,t=a.shared.interleaved,t!==null){a=t;do s|=a.lane,a=a.next;while(a!==t)}else l===null&&(a.shared.lanes=0);$t|=s,e.lanes=s,e.memoizedState=p}}function qo(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],a=r.callback;if(a!==null){if(r.callback=null,r=n,typeof a!="function")throw Error(S(191,a));a.call(r)}}}var xr={},He=St(xr),ar=St(xr),lr=St(xr);function zt(e){if(e===xr)throw Error(S(174));return e}function zs(e,t){switch(O(lr,t),O(ar,e),O(He,xr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:kl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=kl(t,e)}B(He),O(He,t)}function gn(){B(He),B(ar),B(lr)}function ec(e){zt(lr.current);var t=zt(He.current),n=kl(t,e.type);t!==n&&(O(ar,e),O(He,n))}function Fs(e){ar.current===e&&(B(He),B(ar))}var V=St(0);function da(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var rl=[];function Os(){for(var e=0;e<rl.length;e++)rl[e]._workInProgressVersionPrimary=null;rl.length=0}var Vr=et.ReactCurrentDispatcher,al=et.ReactCurrentBatchConfig,Bt=0,H=null,X=null,te=null,fa=!1,Vn=!1,sr=0,lp=0;function se(){throw Error(S(321))}function Ds(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Oe(e[n],t[n]))return!1;return!0}function Us(e,t,n,r,a,l){if(Bt=l,H=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Vr.current=e===null||e.memoizedState===null?up:cp,e=n(r,a),Vn){l=0;do{if(Vn=!1,sr=0,25<=l)throw Error(S(301));l+=1,te=X=null,t.updateQueue=null,Vr.current=dp,e=n(r,a)}while(Vn)}if(Vr.current=pa,t=X!==null&&X.next!==null,Bt=0,te=X=H=null,fa=!1,t)throw Error(S(300));return e}function Bs(){var e=sr!==0;return sr=0,e}function Be(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return te===null?H.memoizedState=te=e:te=te.next=e,te}function Te(){if(X===null){var e=H.alternate;e=e!==null?e.memoizedState:null}else e=X.next;var t=te===null?H.memoizedState:te.next;if(t!==null)te=t,X=e;else{if(e===null)throw Error(S(310));X=e,e={memoizedState:X.memoizedState,baseState:X.baseState,baseQueue:X.baseQueue,queue:X.queue,next:null},te===null?H.memoizedState=te=e:te=te.next=e}return te}function or(e,t){return typeof t=="function"?t(e):t}function ll(e){var t=Te(),n=t.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=e;var r=X,a=r.baseQueue,l=n.pending;if(l!==null){if(a!==null){var s=a.next;a.next=l.next,l.next=s}r.baseQueue=a=l,n.pending=null}if(a!==null){l=a.next,r=r.baseState;var o=s=null,i=null,u=l;do{var h=u.lane;if((Bt&h)===h)i!==null&&(i=i.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var p={lane:h,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};i===null?(o=i=p,s=r):i=i.next=p,H.lanes|=h,$t|=h}u=u.next}while(u!==null&&u!==l);i===null?s=r:i.next=o,Oe(r,t.memoizedState)||(xe=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=i,n.lastRenderedState=r}if(e=n.interleaved,e!==null){a=e;do l=a.lane,H.lanes|=l,$t|=l,a=a.next;while(a!==e)}else a===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function sl(e){var t=Te(),n=t.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,l=t.memoizedState;if(a!==null){n.pending=null;var s=a=a.next;do l=e(l,s.action),s=s.next;while(s!==a);Oe(l,t.memoizedState)||(xe=!0),t.memoizedState=l,t.baseQueue===null&&(t.baseState=l),n.lastRenderedState=l}return[l,r]}function tc(){}function nc(e,t){var n=H,r=Te(),a=t(),l=!Oe(r.memoizedState,a);if(l&&(r.memoizedState=a,xe=!0),r=r.queue,$s(lc.bind(null,n,r,e),[e]),r.getSnapshot!==t||l||te!==null&&te.memoizedState.tag&1){if(n.flags|=2048,ir(9,ac.bind(null,n,r,a,t),void 0,null),ne===null)throw Error(S(349));Bt&30||rc(n,t,a)}return a}function rc(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=H.updateQueue,t===null?(t={lastEffect:null,stores:null},H.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function ac(e,t,n,r){t.value=n,t.getSnapshot=r,sc(t)&&oc(e)}function lc(e,t,n){return n(function(){sc(t)&&oc(e)})}function sc(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Oe(e,n)}catch{return!0}}function oc(e){var t=qe(e,1);t!==null&&Fe(t,e,1,-1)}function Zo(e){var t=Be();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:or,lastRenderedState:e},t.queue=e,e=e.dispatch=ip.bind(null,H,e),[t.memoizedState,e]}function ir(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=H.updateQueue,t===null?(t={lastEffect:null,stores:null},H.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function ic(){return Te().memoizedState}function Hr(e,t,n,r){var a=Be();H.flags|=e,a.memoizedState=ir(1|t,n,void 0,r===void 0?null:r)}function ja(e,t,n,r){var a=Te();r=r===void 0?null:r;var l=void 0;if(X!==null){var s=X.memoizedState;if(l=s.destroy,r!==null&&Ds(r,s.deps)){a.memoizedState=ir(t,n,l,r);return}}H.flags|=e,a.memoizedState=ir(1|t,n,l,r)}function ei(e,t){return Hr(8390656,8,e,t)}function $s(e,t){return ja(2048,8,e,t)}function uc(e,t){return ja(4,2,e,t)}function cc(e,t){return ja(4,4,e,t)}function dc(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function fc(e,t,n){return n=n!=null?n.concat([e]):null,ja(4,4,dc.bind(null,t,e),n)}function Vs(){}function pc(e,t){var n=Te();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ds(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function mc(e,t){var n=Te();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ds(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function hc(e,t,n){return Bt&21?(Oe(n,t)||(n=bu(),H.lanes|=n,$t|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,xe=!0),e.memoizedState=n)}function sp(e,t){var n=F;F=n!==0&&4>n?n:4,e(!0);var r=al.transition;al.transition={};try{e(!1),t()}finally{F=n,al.transition=r}}function xc(){return Te().memoizedState}function op(e,t,n){var r=gt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},gc(e))vc(t,n);else if(n=qu(e,t,n,r),n!==null){var a=fe();Fe(n,e,r,a),yc(n,t,r)}}function ip(e,t,n){var r=gt(e),a={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(gc(e))vc(t,a);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=t.lastRenderedReducer,l!==null))try{var s=t.lastRenderedState,o=l(s,n);if(a.hasEagerState=!0,a.eagerState=o,Oe(o,s)){var i=t.interleaved;i===null?(a.next=a,As(t)):(a.next=i.next,i.next=a),t.interleaved=a;return}}catch{}finally{}n=qu(e,t,a,r),n!==null&&(a=fe(),Fe(n,e,r,a),yc(n,t,r))}}function gc(e){var t=e.alternate;return e===H||t!==null&&t===H}function vc(e,t){Vn=fa=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function yc(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,bs(e,n)}}var pa={readContext:Le,useCallback:se,useContext:se,useEffect:se,useImperativeHandle:se,useInsertionEffect:se,useLayoutEffect:se,useMemo:se,useReducer:se,useRef:se,useState:se,useDebugValue:se,useDeferredValue:se,useTransition:se,useMutableSource:se,useSyncExternalStore:se,useId:se,unstable_isNewReconciler:!1},up={readContext:Le,useCallback:function(e,t){return Be().memoizedState=[e,t===void 0?null:t],e},useContext:Le,useEffect:ei,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Hr(4194308,4,dc.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Hr(4194308,4,e,t)},useInsertionEffect:function(e,t){return Hr(4,2,e,t)},useMemo:function(e,t){var n=Be();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Be();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=op.bind(null,H,e),[r.memoizedState,e]},useRef:function(e){var t=Be();return e={current:e},t.memoizedState=e},useState:Zo,useDebugValue:Vs,useDeferredValue:function(e){return Be().memoizedState=e},useTransition:function(){var e=Zo(!1),t=e[0];return e=sp.bind(null,e[1]),Be().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=H,a=Be();if($){if(n===void 0)throw Error(S(407));n=n()}else{if(n=t(),ne===null)throw Error(S(349));Bt&30||rc(r,t,n)}a.memoizedState=n;var l={value:n,getSnapshot:t};return a.queue=l,ei(lc.bind(null,r,l,e),[e]),r.flags|=2048,ir(9,ac.bind(null,r,l,n,t),void 0,null),n},useId:function(){var e=Be(),t=ne.identifierPrefix;if($){var n=Ke,r=Ye;n=(r&~(1<<32-ze(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=sr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=lp++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},cp={readContext:Le,useCallback:pc,useContext:Le,useEffect:$s,useImperativeHandle:fc,useInsertionEffect:uc,useLayoutEffect:cc,useMemo:mc,useReducer:ll,useRef:ic,useState:function(){return ll(or)},useDebugValue:Vs,useDeferredValue:function(e){var t=Te();return hc(t,X.memoizedState,e)},useTransition:function(){var e=ll(or)[0],t=Te().memoizedState;return[e,t]},useMutableSource:tc,useSyncExternalStore:nc,useId:xc,unstable_isNewReconciler:!1},dp={readContext:Le,useCallback:pc,useContext:Le,useEffect:$s,useImperativeHandle:fc,useInsertionEffect:uc,useLayoutEffect:cc,useMemo:mc,useReducer:sl,useRef:ic,useState:function(){return sl(or)},useDebugValue:Vs,useDeferredValue:function(e){var t=Te();return X===null?t.memoizedState=e:hc(t,X.memoizedState,e)},useTransition:function(){var e=sl(or)[0],t=Te().memoizedState;return[e,t]},useMutableSource:tc,useSyncExternalStore:nc,useId:xc,unstable_isNewReconciler:!1};function Ie(e,t){if(e&&e.defaultProps){t=W({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Vl(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:W({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Pa={isMounted:function(e){return(e=e._reactInternals)?Wt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=fe(),a=gt(e),l=Je(r,a);l.payload=t,n!=null&&(l.callback=n),t=ht(e,l,a),t!==null&&(Fe(t,e,a,r),$r(t,e,a))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=fe(),a=gt(e),l=Je(r,a);l.tag=1,l.payload=t,n!=null&&(l.callback=n),t=ht(e,l,a),t!==null&&(Fe(t,e,a,r),$r(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=fe(),r=gt(e),a=Je(n,r);a.tag=2,t!=null&&(a.callback=t),t=ht(e,a,r),t!==null&&(Fe(t,e,r,n),$r(t,e,r))}};function ti(e,t,n,r,a,l,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,l,s):t.prototype&&t.prototype.isPureReactComponent?!er(n,r)||!er(a,l):!0}function bc(e,t,n){var r=!1,a=wt,l=t.contextType;return typeof l=="object"&&l!==null?l=Le(l):(a=ve(t)?Dt:ue.current,r=t.contextTypes,l=(r=r!=null)?mn(e,a):wt),t=new t(n,l),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Pa,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=a,e.__reactInternalMemoizedMaskedChildContext=l),t}function ni(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Pa.enqueueReplaceState(t,t.state,null)}function Hl(e,t,n,r){var a=e.stateNode;a.props=n,a.state=e.memoizedState,a.refs={},Rs(e);var l=t.contextType;typeof l=="object"&&l!==null?a.context=Le(l):(l=ve(t)?Dt:ue.current,a.context=mn(e,l)),a.state=e.memoizedState,l=t.getDerivedStateFromProps,typeof l=="function"&&(Vl(e,t,l,n),a.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(t=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),t!==a.state&&Pa.enqueueReplaceState(a,a.state,null),ca(e,n,a,r),a.state=e.memoizedState),typeof a.componentDidMount=="function"&&(e.flags|=4194308)}function vn(e,t){try{var n="",r=t;do n+=Od(r),r=r.return;while(r);var a=n}catch(l){a=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:t,stack:a,digest:null}}function ol(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Wl(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var fp=typeof WeakMap=="function"?WeakMap:Map;function wc(e,t,n){n=Je(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){ha||(ha=!0,ts=r),Wl(e,t)},n}function kc(e,t,n){n=Je(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var a=t.value;n.payload=function(){return r(a)},n.callback=function(){Wl(e,t)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(n.callback=function(){Wl(e,t),typeof r!="function"&&(xt===null?xt=new Set([this]):xt.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function ri(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new fp;var a=new Set;r.set(t,a)}else a=r.get(t),a===void 0&&(a=new Set,r.set(t,a));a.has(n)||(a.add(n),e=_p.bind(null,e,t,n),t.then(e,e))}function ai(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function li(e,t,n,r,a){return e.mode&1?(e.flags|=65536,e.lanes=a,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Je(-1,1),t.tag=2,ht(n,t,1))),n.lanes|=1),e)}var pp=et.ReactCurrentOwner,xe=!1;function de(e,t,n,r){t.child=e===null?Xu(t,null,n,r):xn(t,e.child,n,r)}function si(e,t,n,r,a){n=n.render;var l=t.ref;return dn(t,a),r=Us(e,t,n,r,l,a),n=Bs(),e!==null&&!xe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,Ze(e,t,a)):($&&n&&js(t),t.flags|=1,de(e,t,r,a),t.child)}function oi(e,t,n,r,a){if(e===null){var l=n.type;return typeof l=="function"&&!Xs(l)&&l.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=l,Sc(e,t,l,r,a)):(e=Kr(n.type,null,r,t,t.mode,a),e.ref=t.ref,e.return=t,t.child=e)}if(l=e.child,!(e.lanes&a)){var s=l.memoizedProps;if(n=n.compare,n=n!==null?n:er,n(s,r)&&e.ref===t.ref)return Ze(e,t,a)}return t.flags|=1,e=vt(l,r),e.ref=t.ref,e.return=t,t.child=e}function Sc(e,t,n,r,a){if(e!==null){var l=e.memoizedProps;if(er(l,r)&&e.ref===t.ref)if(xe=!1,t.pendingProps=r=l,(e.lanes&a)!==0)e.flags&131072&&(xe=!0);else return t.lanes=e.lanes,Ze(e,t,a)}return Ql(e,t,n,r,a)}function Cc(e,t,n){var r=t.pendingProps,a=r.children,l=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},O(ln,be),be|=n;else{if(!(n&1073741824))return e=l!==null?l.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,O(ln,be),be|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=l!==null?l.baseLanes:n,O(ln,be),be|=r}else l!==null?(r=l.baseLanes|n,t.memoizedState=null):r=n,O(ln,be),be|=r;return de(e,t,a,n),t.child}function Ec(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Ql(e,t,n,r,a){var l=ve(n)?Dt:ue.current;return l=mn(t,l),dn(t,a),n=Us(e,t,n,r,l,a),r=Bs(),e!==null&&!xe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,Ze(e,t,a)):($&&r&&js(t),t.flags|=1,de(e,t,n,a),t.child)}function ii(e,t,n,r,a){if(ve(n)){var l=!0;la(t)}else l=!1;if(dn(t,a),t.stateNode===null)Wr(e,t),bc(t,n,r),Hl(t,n,r,a),r=!0;else if(e===null){var s=t.stateNode,o=t.memoizedProps;s.props=o;var i=s.context,u=n.contextType;typeof u=="object"&&u!==null?u=Le(u):(u=ve(n)?Dt:ue.current,u=mn(t,u));var h=n.getDerivedStateFromProps,p=typeof h=="function"||typeof s.getSnapshotBeforeUpdate=="function";p||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(o!==r||i!==u)&&ni(t,s,r,u),lt=!1;var d=t.memoizedState;s.state=d,ca(t,r,s,a),i=t.memoizedState,o!==r||d!==i||ge.current||lt?(typeof h=="function"&&(Vl(t,n,h,r),i=t.memoizedState),(o=lt||ti(t,n,o,r,d,i,u))?(p||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=i),s.props=r,s.state=i,s.context=u,r=o):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,Zu(e,t),o=t.memoizedProps,u=t.type===t.elementType?o:Ie(t.type,o),s.props=u,p=t.pendingProps,d=s.context,i=n.contextType,typeof i=="object"&&i!==null?i=Le(i):(i=ve(n)?Dt:ue.current,i=mn(t,i));var v=n.getDerivedStateFromProps;(h=typeof v=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(o!==p||d!==i)&&ni(t,s,r,i),lt=!1,d=t.memoizedState,s.state=d,ca(t,r,s,a);var g=t.memoizedState;o!==p||d!==g||ge.current||lt?(typeof v=="function"&&(Vl(t,n,v,r),g=t.memoizedState),(u=lt||ti(t,n,u,r,d,g,i)||!1)?(h||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,g,i),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,g,i)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||o===e.memoizedProps&&d===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&d===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=g),s.props=r,s.state=g,s.context=i,r=u):(typeof s.componentDidUpdate!="function"||o===e.memoizedProps&&d===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&d===e.memoizedState||(t.flags|=1024),r=!1)}return Yl(e,t,n,r,l,a)}function Yl(e,t,n,r,a,l){Ec(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return a&&Yo(t,n,!1),Ze(e,t,l);r=t.stateNode,pp.current=t;var o=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=xn(t,e.child,null,l),t.child=xn(t,null,o,l)):de(e,t,o,l),t.memoizedState=r.state,a&&Yo(t,n,!0),t.child}function _c(e){var t=e.stateNode;t.pendingContext?Qo(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Qo(e,t.context,!1),zs(e,t.containerInfo)}function ui(e,t,n,r,a){return hn(),Ls(a),t.flags|=256,de(e,t,n,r),t.child}var Kl={dehydrated:null,treeContext:null,retryLane:0};function Jl(e){return{baseLanes:e,cachePool:null,transitions:null}}function Nc(e,t,n){var r=t.pendingProps,a=V.current,l=!1,s=(t.flags&128)!==0,o;if((o=s)||(o=e!==null&&e.memoizedState===null?!1:(a&2)!==0),o?(l=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(a|=1),O(V,a&1),e===null)return Bl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=r.children,e=r.fallback,l?(r=t.mode,l=t.child,s={mode:"hidden",children:s},!(r&1)&&l!==null?(l.childLanes=0,l.pendingProps=s):l=Ma(s,r,0,null),e=Ot(e,r,n,null),l.return=t,e.return=t,l.sibling=e,t.child=l,t.child.memoizedState=Jl(n),t.memoizedState=Kl,e):Hs(t,s));if(a=e.memoizedState,a!==null&&(o=a.dehydrated,o!==null))return mp(e,t,s,r,o,a,n);if(l){l=r.fallback,s=t.mode,a=e.child,o=a.sibling;var i={mode:"hidden",children:r.children};return!(s&1)&&t.child!==a?(r=t.child,r.childLanes=0,r.pendingProps=i,t.deletions=null):(r=vt(a,i),r.subtreeFlags=a.subtreeFlags&14680064),o!==null?l=vt(o,l):(l=Ot(l,s,n,null),l.flags|=2),l.return=t,r.return=t,r.sibling=l,t.child=r,r=l,l=t.child,s=e.child.memoizedState,s=s===null?Jl(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},l.memoizedState=s,l.childLanes=e.childLanes&~n,t.memoizedState=Kl,r}return l=e.child,e=l.sibling,r=vt(l,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Hs(e,t){return t=Ma({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Ir(e,t,n,r){return r!==null&&Ls(r),xn(t,e.child,null,n),e=Hs(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function mp(e,t,n,r,a,l,s){if(n)return t.flags&256?(t.flags&=-257,r=ol(Error(S(422))),Ir(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(l=r.fallback,a=t.mode,r=Ma({mode:"visible",children:r.children},a,0,null),l=Ot(l,a,s,null),l.flags|=2,r.return=t,l.return=t,r.sibling=l,t.child=r,t.mode&1&&xn(t,e.child,null,s),t.child.memoizedState=Jl(s),t.memoizedState=Kl,l);if(!(t.mode&1))return Ir(e,t,s,null);if(a.data==="$!"){if(r=a.nextSibling&&a.nextSibling.dataset,r)var o=r.dgst;return r=o,l=Error(S(419)),r=ol(l,r,void 0),Ir(e,t,s,r)}if(o=(s&e.childLanes)!==0,xe||o){if(r=ne,r!==null){switch(s&-s){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}a=a&(r.suspendedLanes|s)?0:a,a!==0&&a!==l.retryLane&&(l.retryLane=a,qe(e,a),Fe(r,e,a,-1))}return Gs(),r=ol(Error(S(421))),Ir(e,t,s,r)}return a.data==="$?"?(t.flags|=128,t.child=e.child,t=Np.bind(null,e),a._reactRetry=t,null):(e=l.treeContext,we=mt(a.nextSibling),ke=t,$=!0,Re=null,e!==null&&(_e[Ne++]=Ye,_e[Ne++]=Ke,_e[Ne++]=Ut,Ye=e.id,Ke=e.overflow,Ut=t),t=Hs(t,r.children),t.flags|=4096,t)}function ci(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),$l(e.return,t,n)}function il(e,t,n,r,a){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:a}:(l.isBackwards=t,l.rendering=null,l.renderingStartTime=0,l.last=r,l.tail=n,l.tailMode=a)}function jc(e,t,n){var r=t.pendingProps,a=r.revealOrder,l=r.tail;if(de(e,t,r.children,n),r=V.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ci(e,n,t);else if(e.tag===19)ci(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(O(V,r),!(t.mode&1))t.memoizedState=null;else switch(a){case"forwards":for(n=t.child,a=null;n!==null;)e=n.alternate,e!==null&&da(e)===null&&(a=n),n=n.sibling;n=a,n===null?(a=t.child,t.child=null):(a=n.sibling,n.sibling=null),il(t,!1,a,n,l);break;case"backwards":for(n=null,a=t.child,t.child=null;a!==null;){if(e=a.alternate,e!==null&&da(e)===null){t.child=a;break}e=a.sibling,a.sibling=n,n=a,a=e}il(t,!0,n,null,l);break;case"together":il(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Wr(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Ze(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),$t|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(S(153));if(t.child!==null){for(e=t.child,n=vt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=vt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function hp(e,t,n){switch(t.tag){case 3:_c(t),hn();break;case 5:ec(t);break;case 1:ve(t.type)&&la(t);break;case 4:zs(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,a=t.memoizedProps.value;O(ia,r._currentValue),r._currentValue=a;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(O(V,V.current&1),t.flags|=128,null):n&t.child.childLanes?Nc(e,t,n):(O(V,V.current&1),e=Ze(e,t,n),e!==null?e.sibling:null);O(V,V.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return jc(e,t,n);t.flags|=128}if(a=t.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),O(V,V.current),r)break;return null;case 22:case 23:return t.lanes=0,Cc(e,t,n)}return Ze(e,t,n)}var Pc,Gl,Lc,Tc;Pc=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Gl=function(){};Lc=function(e,t,n,r){var a=e.memoizedProps;if(a!==r){e=t.stateNode,zt(He.current);var l=null;switch(n){case"input":a=vl(e,a),r=vl(e,r),l=[];break;case"select":a=W({},a,{value:void 0}),r=W({},r,{value:void 0}),l=[];break;case"textarea":a=wl(e,a),r=wl(e,r),l=[];break;default:typeof a.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=ra)}Sl(n,r);var s;n=null;for(u in a)if(!r.hasOwnProperty(u)&&a.hasOwnProperty(u)&&a[u]!=null)if(u==="style"){var o=a[u];for(s in o)o.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Yn.hasOwnProperty(u)?l||(l=[]):(l=l||[]).push(u,null));for(u in r){var i=r[u];if(o=a!=null?a[u]:void 0,r.hasOwnProperty(u)&&i!==o&&(i!=null||o!=null))if(u==="style")if(o){for(s in o)!o.hasOwnProperty(s)||i&&i.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in i)i.hasOwnProperty(s)&&o[s]!==i[s]&&(n||(n={}),n[s]=i[s])}else n||(l||(l=[]),l.push(u,n)),n=i;else u==="dangerouslySetInnerHTML"?(i=i?i.__html:void 0,o=o?o.__html:void 0,i!=null&&o!==i&&(l=l||[]).push(u,i)):u==="children"?typeof i!="string"&&typeof i!="number"||(l=l||[]).push(u,""+i):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Yn.hasOwnProperty(u)?(i!=null&&u==="onScroll"&&U("scroll",e),l||o===i||(l=[])):(l=l||[]).push(u,i))}n&&(l=l||[]).push("style",n);var u=l;(t.updateQueue=u)&&(t.flags|=4)}};Tc=function(e,t,n,r){n!==r&&(t.flags|=4)};function Mn(e,t){if(!$)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function oe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var a=e.child;a!==null;)n|=a.lanes|a.childLanes,r|=a.subtreeFlags&14680064,r|=a.flags&14680064,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)n|=a.lanes|a.childLanes,r|=a.subtreeFlags,r|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function xp(e,t,n){var r=t.pendingProps;switch(Ps(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return oe(t),null;case 1:return ve(t.type)&&aa(),oe(t),null;case 3:return r=t.stateNode,gn(),B(ge),B(ue),Os(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Tr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Re!==null&&(as(Re),Re=null))),Gl(e,t),oe(t),null;case 5:Fs(t);var a=zt(lr.current);if(n=t.type,e!==null&&t.stateNode!=null)Lc(e,t,n,r,a),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(S(166));return oe(t),null}if(e=zt(He.current),Tr(t)){r=t.stateNode,n=t.type;var l=t.memoizedProps;switch(r[$e]=t,r[rr]=l,e=(t.mode&1)!==0,n){case"dialog":U("cancel",r),U("close",r);break;case"iframe":case"object":case"embed":U("load",r);break;case"video":case"audio":for(a=0;a<Fn.length;a++)U(Fn[a],r);break;case"source":U("error",r);break;case"img":case"image":case"link":U("error",r),U("load",r);break;case"details":U("toggle",r);break;case"input":yo(r,l),U("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!l.multiple},U("invalid",r);break;case"textarea":wo(r,l),U("invalid",r)}Sl(n,l),a=null;for(var s in l)if(l.hasOwnProperty(s)){var o=l[s];s==="children"?typeof o=="string"?r.textContent!==o&&(l.suppressHydrationWarning!==!0&&Lr(r.textContent,o,e),a=["children",o]):typeof o=="number"&&r.textContent!==""+o&&(l.suppressHydrationWarning!==!0&&Lr(r.textContent,o,e),a=["children",""+o]):Yn.hasOwnProperty(s)&&o!=null&&s==="onScroll"&&U("scroll",r)}switch(n){case"input":kr(r),bo(r,l,!0);break;case"textarea":kr(r),ko(r);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(r.onclick=ra)}r=a,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=a.nodeType===9?a:a.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=lu(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[$e]=t,e[rr]=r,Pc(e,t,!1,!1),t.stateNode=e;e:{switch(s=Cl(n,r),n){case"dialog":U("cancel",e),U("close",e),a=r;break;case"iframe":case"object":case"embed":U("load",e),a=r;break;case"video":case"audio":for(a=0;a<Fn.length;a++)U(Fn[a],e);a=r;break;case"source":U("error",e),a=r;break;case"img":case"image":case"link":U("error",e),U("load",e),a=r;break;case"details":U("toggle",e),a=r;break;case"input":yo(e,r),a=vl(e,r),U("invalid",e);break;case"option":a=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},a=W({},r,{value:void 0}),U("invalid",e);break;case"textarea":wo(e,r),a=wl(e,r),U("invalid",e);break;default:a=r}Sl(n,a),o=a;for(l in o)if(o.hasOwnProperty(l)){var i=o[l];l==="style"?iu(e,i):l==="dangerouslySetInnerHTML"?(i=i?i.__html:void 0,i!=null&&su(e,i)):l==="children"?typeof i=="string"?(n!=="textarea"||i!=="")&&Kn(e,i):typeof i=="number"&&Kn(e,""+i):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(Yn.hasOwnProperty(l)?i!=null&&l==="onScroll"&&U("scroll",e):i!=null&&ms(e,l,i,s))}switch(n){case"input":kr(e),bo(e,r,!1);break;case"textarea":kr(e),ko(e);break;case"option":r.value!=null&&e.setAttribute("value",""+bt(r.value));break;case"select":e.multiple=!!r.multiple,l=r.value,l!=null?sn(e,!!r.multiple,l,!1):r.defaultValue!=null&&sn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof a.onClick=="function"&&(e.onclick=ra)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return oe(t),null;case 6:if(e&&t.stateNode!=null)Tc(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(S(166));if(n=zt(lr.current),zt(He.current),Tr(t)){if(r=t.stateNode,n=t.memoizedProps,r[$e]=t,(l=r.nodeValue!==n)&&(e=ke,e!==null))switch(e.tag){case 3:Lr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Lr(r.nodeValue,n,(e.mode&1)!==0)}l&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[$e]=t,t.stateNode=r}return oe(t),null;case 13:if(B(V),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if($&&we!==null&&t.mode&1&&!(t.flags&128))Ju(),hn(),t.flags|=98560,l=!1;else if(l=Tr(t),r!==null&&r.dehydrated!==null){if(e===null){if(!l)throw Error(S(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(S(317));l[$e]=t}else hn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;oe(t),l=!1}else Re!==null&&(as(Re),Re=null),l=!0;if(!l)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||V.current&1?q===0&&(q=3):Gs())),t.updateQueue!==null&&(t.flags|=4),oe(t),null);case 4:return gn(),Gl(e,t),e===null&&tr(t.stateNode.containerInfo),oe(t),null;case 10:return Is(t.type._context),oe(t),null;case 17:return ve(t.type)&&aa(),oe(t),null;case 19:if(B(V),l=t.memoizedState,l===null)return oe(t),null;if(r=(t.flags&128)!==0,s=l.rendering,s===null)if(r)Mn(l,!1);else{if(q!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=da(e),s!==null){for(t.flags|=128,Mn(l,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)l=n,e=r,l.flags&=14680066,s=l.alternate,s===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=s.childLanes,l.lanes=s.lanes,l.child=s.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=s.memoizedProps,l.memoizedState=s.memoizedState,l.updateQueue=s.updateQueue,l.type=s.type,e=s.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return O(V,V.current&1|2),t.child}e=e.sibling}l.tail!==null&&K()>yn&&(t.flags|=128,r=!0,Mn(l,!1),t.lanes=4194304)}else{if(!r)if(e=da(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Mn(l,!0),l.tail===null&&l.tailMode==="hidden"&&!s.alternate&&!$)return oe(t),null}else 2*K()-l.renderingStartTime>yn&&n!==1073741824&&(t.flags|=128,r=!0,Mn(l,!1),t.lanes=4194304);l.isBackwards?(s.sibling=t.child,t.child=s):(n=l.last,n!==null?n.sibling=s:t.child=s,l.last=s)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=K(),t.sibling=null,n=V.current,O(V,r?n&1|2:n&1),t):(oe(t),null);case 22:case 23:return Js(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?be&1073741824&&(oe(t),t.subtreeFlags&6&&(t.flags|=8192)):oe(t),null;case 24:return null;case 25:return null}throw Error(S(156,t.tag))}function gp(e,t){switch(Ps(t),t.tag){case 1:return ve(t.type)&&aa(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return gn(),B(ge),B(ue),Os(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Fs(t),null;case 13:if(B(V),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(S(340));hn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return B(V),null;case 4:return gn(),null;case 10:return Is(t.type._context),null;case 22:case 23:return Js(),null;case 24:return null;default:return null}}var Ar=!1,ie=!1,vp=typeof WeakSet=="function"?WeakSet:Set,P=null;function an(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Q(e,t,r)}else n.current=null}function Xl(e,t,n){try{n()}catch(r){Q(e,t,r)}}var di=!1;function yp(e,t){if(Al=ea,e=zu(),Ns(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var a=r.anchorOffset,l=r.focusNode;r=r.focusOffset;try{n.nodeType,l.nodeType}catch{n=null;break e}var s=0,o=-1,i=-1,u=0,h=0,p=e,d=null;t:for(;;){for(var v;p!==n||a!==0&&p.nodeType!==3||(o=s+a),p!==l||r!==0&&p.nodeType!==3||(i=s+r),p.nodeType===3&&(s+=p.nodeValue.length),(v=p.firstChild)!==null;)d=p,p=v;for(;;){if(p===e)break t;if(d===n&&++u===a&&(o=s),d===l&&++h===r&&(i=s),(v=p.nextSibling)!==null)break;p=d,d=p.parentNode}p=v}n=o===-1||i===-1?null:{start:o,end:i}}else n=null}n=n||{start:0,end:0}}else n=null;for(Rl={focusedElem:e,selectionRange:n},ea=!1,P=t;P!==null;)if(t=P,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,P=e;else for(;P!==null;){t=P;try{var g=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var y=g.memoizedProps,b=g.memoizedState,f=t.stateNode,c=f.getSnapshotBeforeUpdate(t.elementType===t.type?y:Ie(t.type,y),b);f.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var m=t.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(S(163))}}catch(w){Q(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,P=e;break}P=t.return}return g=di,di=!1,g}function Hn(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var a=r=r.next;do{if((a.tag&e)===e){var l=a.destroy;a.destroy=void 0,l!==void 0&&Xl(t,n,l)}a=a.next}while(a!==r)}}function La(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function ql(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Mc(e){var t=e.alternate;t!==null&&(e.alternate=null,Mc(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[$e],delete t[rr],delete t[Ol],delete t[tp],delete t[np])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Ic(e){return e.tag===5||e.tag===3||e.tag===4}function fi(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Ic(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Zl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ra));else if(r!==4&&(e=e.child,e!==null))for(Zl(e,t,n),e=e.sibling;e!==null;)Zl(e,t,n),e=e.sibling}function es(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(es(e,t,n),e=e.sibling;e!==null;)es(e,t,n),e=e.sibling}var re=null,Ae=!1;function nt(e,t,n){for(n=n.child;n!==null;)Ac(e,t,n),n=n.sibling}function Ac(e,t,n){if(Ve&&typeof Ve.onCommitFiberUnmount=="function")try{Ve.onCommitFiberUnmount(ka,n)}catch{}switch(n.tag){case 5:ie||an(n,t);case 6:var r=re,a=Ae;re=null,nt(e,t,n),re=r,Ae=a,re!==null&&(Ae?(e=re,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):re.removeChild(n.stateNode));break;case 18:re!==null&&(Ae?(e=re,n=n.stateNode,e.nodeType===8?tl(e.parentNode,n):e.nodeType===1&&tl(e,n),qn(e)):tl(re,n.stateNode));break;case 4:r=re,a=Ae,re=n.stateNode.containerInfo,Ae=!0,nt(e,t,n),re=r,Ae=a;break;case 0:case 11:case 14:case 15:if(!ie&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){a=r=r.next;do{var l=a,s=l.destroy;l=l.tag,s!==void 0&&(l&2||l&4)&&Xl(n,t,s),a=a.next}while(a!==r)}nt(e,t,n);break;case 1:if(!ie&&(an(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(o){Q(n,t,o)}nt(e,t,n);break;case 21:nt(e,t,n);break;case 22:n.mode&1?(ie=(r=ie)||n.memoizedState!==null,nt(e,t,n),ie=r):nt(e,t,n);break;default:nt(e,t,n)}}function pi(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new vp),t.forEach(function(r){var a=jp.bind(null,e,r);n.has(r)||(n.add(r),r.then(a,a))})}}function Me(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var a=n[r];try{var l=e,s=t,o=s;e:for(;o!==null;){switch(o.tag){case 5:re=o.stateNode,Ae=!1;break e;case 3:re=o.stateNode.containerInfo,Ae=!0;break e;case 4:re=o.stateNode.containerInfo,Ae=!0;break e}o=o.return}if(re===null)throw Error(S(160));Ac(l,s,a),re=null,Ae=!1;var i=a.alternate;i!==null&&(i.return=null),a.return=null}catch(u){Q(a,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Rc(t,e),t=t.sibling}function Rc(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Me(t,e),Ue(e),r&4){try{Hn(3,e,e.return),La(3,e)}catch(y){Q(e,e.return,y)}try{Hn(5,e,e.return)}catch(y){Q(e,e.return,y)}}break;case 1:Me(t,e),Ue(e),r&512&&n!==null&&an(n,n.return);break;case 5:if(Me(t,e),Ue(e),r&512&&n!==null&&an(n,n.return),e.flags&32){var a=e.stateNode;try{Kn(a,"")}catch(y){Q(e,e.return,y)}}if(r&4&&(a=e.stateNode,a!=null)){var l=e.memoizedProps,s=n!==null?n.memoizedProps:l,o=e.type,i=e.updateQueue;if(e.updateQueue=null,i!==null)try{o==="input"&&l.type==="radio"&&l.name!=null&&ru(a,l),Cl(o,s);var u=Cl(o,l);for(s=0;s<i.length;s+=2){var h=i[s],p=i[s+1];h==="style"?iu(a,p):h==="dangerouslySetInnerHTML"?su(a,p):h==="children"?Kn(a,p):ms(a,h,p,u)}switch(o){case"input":yl(a,l);break;case"textarea":au(a,l);break;case"select":var d=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!l.multiple;var v=l.value;v!=null?sn(a,!!l.multiple,v,!1):d!==!!l.multiple&&(l.defaultValue!=null?sn(a,!!l.multiple,l.defaultValue,!0):sn(a,!!l.multiple,l.multiple?[]:"",!1))}a[rr]=l}catch(y){Q(e,e.return,y)}}break;case 6:if(Me(t,e),Ue(e),r&4){if(e.stateNode===null)throw Error(S(162));a=e.stateNode,l=e.memoizedProps;try{a.nodeValue=l}catch(y){Q(e,e.return,y)}}break;case 3:if(Me(t,e),Ue(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{qn(t.containerInfo)}catch(y){Q(e,e.return,y)}break;case 4:Me(t,e),Ue(e);break;case 13:Me(t,e),Ue(e),a=e.child,a.flags&8192&&(l=a.memoizedState!==null,a.stateNode.isHidden=l,!l||a.alternate!==null&&a.alternate.memoizedState!==null||(Ys=K())),r&4&&pi(e);break;case 22:if(h=n!==null&&n.memoizedState!==null,e.mode&1?(ie=(u=ie)||h,Me(t,e),ie=u):Me(t,e),Ue(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!h&&e.mode&1)for(P=e,h=e.child;h!==null;){for(p=P=h;P!==null;){switch(d=P,v=d.child,d.tag){case 0:case 11:case 14:case 15:Hn(4,d,d.return);break;case 1:an(d,d.return);var g=d.stateNode;if(typeof g.componentWillUnmount=="function"){r=d,n=d.return;try{t=r,g.props=t.memoizedProps,g.state=t.memoizedState,g.componentWillUnmount()}catch(y){Q(r,n,y)}}break;case 5:an(d,d.return);break;case 22:if(d.memoizedState!==null){hi(p);continue}}v!==null?(v.return=d,P=v):hi(p)}h=h.sibling}e:for(h=null,p=e;;){if(p.tag===5){if(h===null){h=p;try{a=p.stateNode,u?(l=a.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(o=p.stateNode,i=p.memoizedProps.style,s=i!=null&&i.hasOwnProperty("display")?i.display:null,o.style.display=ou("display",s))}catch(y){Q(e,e.return,y)}}}else if(p.tag===6){if(h===null)try{p.stateNode.nodeValue=u?"":p.memoizedProps}catch(y){Q(e,e.return,y)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;h===p&&(h=null),p=p.return}h===p&&(h=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Me(t,e),Ue(e),r&4&&pi(e);break;case 21:break;default:Me(t,e),Ue(e)}}function Ue(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Ic(n)){var r=n;break e}n=n.return}throw Error(S(160))}switch(r.tag){case 5:var a=r.stateNode;r.flags&32&&(Kn(a,""),r.flags&=-33);var l=fi(e);es(e,l,a);break;case 3:case 4:var s=r.stateNode.containerInfo,o=fi(e);Zl(e,o,s);break;default:throw Error(S(161))}}catch(i){Q(e,e.return,i)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function bp(e,t,n){P=e,zc(e)}function zc(e,t,n){for(var r=(e.mode&1)!==0;P!==null;){var a=P,l=a.child;if(a.tag===22&&r){var s=a.memoizedState!==null||Ar;if(!s){var o=a.alternate,i=o!==null&&o.memoizedState!==null||ie;o=Ar;var u=ie;if(Ar=s,(ie=i)&&!u)for(P=a;P!==null;)s=P,i=s.child,s.tag===22&&s.memoizedState!==null?xi(a):i!==null?(i.return=s,P=i):xi(a);for(;l!==null;)P=l,zc(l),l=l.sibling;P=a,Ar=o,ie=u}mi(e)}else a.subtreeFlags&8772&&l!==null?(l.return=a,P=l):mi(e)}}function mi(e){for(;P!==null;){var t=P;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ie||La(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ie)if(n===null)r.componentDidMount();else{var a=t.elementType===t.type?n.memoizedProps:Ie(t.type,n.memoizedProps);r.componentDidUpdate(a,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var l=t.updateQueue;l!==null&&qo(t,l,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}qo(t,s,n)}break;case 5:var o=t.stateNode;if(n===null&&t.flags&4){n=o;var i=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":i.autoFocus&&n.focus();break;case"img":i.src&&(n.src=i.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var h=u.memoizedState;if(h!==null){var p=h.dehydrated;p!==null&&qn(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(S(163))}ie||t.flags&512&&ql(t)}catch(d){Q(t,t.return,d)}}if(t===e){P=null;break}if(n=t.sibling,n!==null){n.return=t.return,P=n;break}P=t.return}}function hi(e){for(;P!==null;){var t=P;if(t===e){P=null;break}var n=t.sibling;if(n!==null){n.return=t.return,P=n;break}P=t.return}}function xi(e){for(;P!==null;){var t=P;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{La(4,t)}catch(i){Q(t,n,i)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var a=t.return;try{r.componentDidMount()}catch(i){Q(t,a,i)}}var l=t.return;try{ql(t)}catch(i){Q(t,l,i)}break;case 5:var s=t.return;try{ql(t)}catch(i){Q(t,s,i)}}}catch(i){Q(t,t.return,i)}if(t===e){P=null;break}var o=t.sibling;if(o!==null){o.return=t.return,P=o;break}P=t.return}}var wp=Math.ceil,ma=et.ReactCurrentDispatcher,Ws=et.ReactCurrentOwner,Pe=et.ReactCurrentBatchConfig,R=0,ne=null,G=null,ae=0,be=0,ln=St(0),q=0,ur=null,$t=0,Ta=0,Qs=0,Wn=null,he=null,Ys=0,yn=1/0,We=null,ha=!1,ts=null,xt=null,Rr=!1,ut=null,xa=0,Qn=0,ns=null,Qr=-1,Yr=0;function fe(){return R&6?K():Qr!==-1?Qr:Qr=K()}function gt(e){return e.mode&1?R&2&&ae!==0?ae&-ae:ap.transition!==null?(Yr===0&&(Yr=bu()),Yr):(e=F,e!==0||(e=window.event,e=e===void 0?16:Nu(e.type)),e):1}function Fe(e,t,n,r){if(50<Qn)throw Qn=0,ns=null,Error(S(185));pr(e,n,r),(!(R&2)||e!==ne)&&(e===ne&&(!(R&2)&&(Ta|=n),q===4&&ot(e,ae)),ye(e,r),n===1&&R===0&&!(t.mode&1)&&(yn=K()+500,Na&&Ct()))}function ye(e,t){var n=e.callbackNode;rf(e,t);var r=Zr(e,e===ne?ae:0);if(r===0)n!==null&&Eo(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Eo(n),t===1)e.tag===0?rp(gi.bind(null,e)):Qu(gi.bind(null,e)),Zf(function(){!(R&6)&&Ct()}),n=null;else{switch(wu(r)){case 1:n=ys;break;case 4:n=vu;break;case 16:n=qr;break;case 536870912:n=yu;break;default:n=qr}n=Hc(n,Fc.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Fc(e,t){if(Qr=-1,Yr=0,R&6)throw Error(S(327));var n=e.callbackNode;if(fn()&&e.callbackNode!==n)return null;var r=Zr(e,e===ne?ae:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=ga(e,r);else{t=r;var a=R;R|=2;var l=Dc();(ne!==e||ae!==t)&&(We=null,yn=K()+500,Ft(e,t));do try{Cp();break}catch(o){Oc(e,o)}while(!0);Ms(),ma.current=l,R=a,G!==null?t=0:(ne=null,ae=0,t=q)}if(t!==0){if(t===2&&(a=Pl(e),a!==0&&(r=a,t=rs(e,a))),t===1)throw n=ur,Ft(e,0),ot(e,r),ye(e,K()),n;if(t===6)ot(e,r);else{if(a=e.current.alternate,!(r&30)&&!kp(a)&&(t=ga(e,r),t===2&&(l=Pl(e),l!==0&&(r=l,t=rs(e,l))),t===1))throw n=ur,Ft(e,0),ot(e,r),ye(e,K()),n;switch(e.finishedWork=a,e.finishedLanes=r,t){case 0:case 1:throw Error(S(345));case 2:Tt(e,he,We);break;case 3:if(ot(e,r),(r&130023424)===r&&(t=Ys+500-K(),10<t)){if(Zr(e,0)!==0)break;if(a=e.suspendedLanes,(a&r)!==r){fe(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=Fl(Tt.bind(null,e,he,We),t);break}Tt(e,he,We);break;case 4:if(ot(e,r),(r&4194240)===r)break;for(t=e.eventTimes,a=-1;0<r;){var s=31-ze(r);l=1<<s,s=t[s],s>a&&(a=s),r&=~l}if(r=a,r=K()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*wp(r/1960))-r,10<r){e.timeoutHandle=Fl(Tt.bind(null,e,he,We),r);break}Tt(e,he,We);break;case 5:Tt(e,he,We);break;default:throw Error(S(329))}}}return ye(e,K()),e.callbackNode===n?Fc.bind(null,e):null}function rs(e,t){var n=Wn;return e.current.memoizedState.isDehydrated&&(Ft(e,t).flags|=256),e=ga(e,t),e!==2&&(t=he,he=n,t!==null&&as(t)),e}function as(e){he===null?he=e:he.push.apply(he,e)}function kp(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var a=n[r],l=a.getSnapshot;a=a.value;try{if(!Oe(l(),a))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ot(e,t){for(t&=~Qs,t&=~Ta,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-ze(t),r=1<<n;e[n]=-1,t&=~r}}function gi(e){if(R&6)throw Error(S(327));fn();var t=Zr(e,0);if(!(t&1))return ye(e,K()),null;var n=ga(e,t);if(e.tag!==0&&n===2){var r=Pl(e);r!==0&&(t=r,n=rs(e,r))}if(n===1)throw n=ur,Ft(e,0),ot(e,t),ye(e,K()),n;if(n===6)throw Error(S(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Tt(e,he,We),ye(e,K()),null}function Ks(e,t){var n=R;R|=1;try{return e(t)}finally{R=n,R===0&&(yn=K()+500,Na&&Ct())}}function Vt(e){ut!==null&&ut.tag===0&&!(R&6)&&fn();var t=R;R|=1;var n=Pe.transition,r=F;try{if(Pe.transition=null,F=1,e)return e()}finally{F=r,Pe.transition=n,R=t,!(R&6)&&Ct()}}function Js(){be=ln.current,B(ln)}function Ft(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,qf(n)),G!==null)for(n=G.return;n!==null;){var r=n;switch(Ps(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&aa();break;case 3:gn(),B(ge),B(ue),Os();break;case 5:Fs(r);break;case 4:gn();break;case 13:B(V);break;case 19:B(V);break;case 10:Is(r.type._context);break;case 22:case 23:Js()}n=n.return}if(ne=e,G=e=vt(e.current,null),ae=be=t,q=0,ur=null,Qs=Ta=$t=0,he=Wn=null,Rt!==null){for(t=0;t<Rt.length;t++)if(n=Rt[t],r=n.interleaved,r!==null){n.interleaved=null;var a=r.next,l=n.pending;if(l!==null){var s=l.next;l.next=a,r.next=s}n.pending=r}Rt=null}return e}function Oc(e,t){do{var n=G;try{if(Ms(),Vr.current=pa,fa){for(var r=H.memoizedState;r!==null;){var a=r.queue;a!==null&&(a.pending=null),r=r.next}fa=!1}if(Bt=0,te=X=H=null,Vn=!1,sr=0,Ws.current=null,n===null||n.return===null){q=1,ur=t,G=null;break}e:{var l=e,s=n.return,o=n,i=t;if(t=ae,o.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){var u=i,h=o,p=h.tag;if(!(h.mode&1)&&(p===0||p===11||p===15)){var d=h.alternate;d?(h.updateQueue=d.updateQueue,h.memoizedState=d.memoizedState,h.lanes=d.lanes):(h.updateQueue=null,h.memoizedState=null)}var v=ai(s);if(v!==null){v.flags&=-257,li(v,s,o,l,t),v.mode&1&&ri(l,u,t),t=v,i=u;var g=t.updateQueue;if(g===null){var y=new Set;y.add(i),t.updateQueue=y}else g.add(i);break e}else{if(!(t&1)){ri(l,u,t),Gs();break e}i=Error(S(426))}}else if($&&o.mode&1){var b=ai(s);if(b!==null){!(b.flags&65536)&&(b.flags|=256),li(b,s,o,l,t),Ls(vn(i,o));break e}}l=i=vn(i,o),q!==4&&(q=2),Wn===null?Wn=[l]:Wn.push(l),l=s;do{switch(l.tag){case 3:l.flags|=65536,t&=-t,l.lanes|=t;var f=wc(l,i,t);Xo(l,f);break e;case 1:o=i;var c=l.type,m=l.stateNode;if(!(l.flags&128)&&(typeof c.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(xt===null||!xt.has(m)))){l.flags|=65536,t&=-t,l.lanes|=t;var w=kc(l,o,t);Xo(l,w);break e}}l=l.return}while(l!==null)}Bc(n)}catch(k){t=k,G===n&&n!==null&&(G=n=n.return);continue}break}while(!0)}function Dc(){var e=ma.current;return ma.current=pa,e===null?pa:e}function Gs(){(q===0||q===3||q===2)&&(q=4),ne===null||!($t&268435455)&&!(Ta&268435455)||ot(ne,ae)}function ga(e,t){var n=R;R|=2;var r=Dc();(ne!==e||ae!==t)&&(We=null,Ft(e,t));do try{Sp();break}catch(a){Oc(e,a)}while(!0);if(Ms(),R=n,ma.current=r,G!==null)throw Error(S(261));return ne=null,ae=0,q}function Sp(){for(;G!==null;)Uc(G)}function Cp(){for(;G!==null&&!Kd();)Uc(G)}function Uc(e){var t=Vc(e.alternate,e,be);e.memoizedProps=e.pendingProps,t===null?Bc(e):G=t,Ws.current=null}function Bc(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=gp(n,t),n!==null){n.flags&=32767,G=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{q=6,G=null;return}}else if(n=xp(n,t,be),n!==null){G=n;return}if(t=t.sibling,t!==null){G=t;return}G=t=e}while(t!==null);q===0&&(q=5)}function Tt(e,t,n){var r=F,a=Pe.transition;try{Pe.transition=null,F=1,Ep(e,t,n,r)}finally{Pe.transition=a,F=r}return null}function Ep(e,t,n,r){do fn();while(ut!==null);if(R&6)throw Error(S(327));n=e.finishedWork;var a=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(S(177));e.callbackNode=null,e.callbackPriority=0;var l=n.lanes|n.childLanes;if(af(e,l),e===ne&&(G=ne=null,ae=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Rr||(Rr=!0,Hc(qr,function(){return fn(),null})),l=(n.flags&15990)!==0,n.subtreeFlags&15990||l){l=Pe.transition,Pe.transition=null;var s=F;F=1;var o=R;R|=4,Ws.current=null,yp(e,n),Rc(n,e),Wf(Rl),ea=!!Al,Rl=Al=null,e.current=n,bp(n),Jd(),R=o,F=s,Pe.transition=l}else e.current=n;if(Rr&&(Rr=!1,ut=e,xa=a),l=e.pendingLanes,l===0&&(xt=null),qd(n.stateNode),ye(e,K()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)a=t[n],r(a.value,{componentStack:a.stack,digest:a.digest});if(ha)throw ha=!1,e=ts,ts=null,e;return xa&1&&e.tag!==0&&fn(),l=e.pendingLanes,l&1?e===ns?Qn++:(Qn=0,ns=e):Qn=0,Ct(),null}function fn(){if(ut!==null){var e=wu(xa),t=Pe.transition,n=F;try{if(Pe.transition=null,F=16>e?16:e,ut===null)var r=!1;else{if(e=ut,ut=null,xa=0,R&6)throw Error(S(331));var a=R;for(R|=4,P=e.current;P!==null;){var l=P,s=l.child;if(P.flags&16){var o=l.deletions;if(o!==null){for(var i=0;i<o.length;i++){var u=o[i];for(P=u;P!==null;){var h=P;switch(h.tag){case 0:case 11:case 15:Hn(8,h,l)}var p=h.child;if(p!==null)p.return=h,P=p;else for(;P!==null;){h=P;var d=h.sibling,v=h.return;if(Mc(h),h===u){P=null;break}if(d!==null){d.return=v,P=d;break}P=v}}}var g=l.alternate;if(g!==null){var y=g.child;if(y!==null){g.child=null;do{var b=y.sibling;y.sibling=null,y=b}while(y!==null)}}P=l}}if(l.subtreeFlags&2064&&s!==null)s.return=l,P=s;else e:for(;P!==null;){if(l=P,l.flags&2048)switch(l.tag){case 0:case 11:case 15:Hn(9,l,l.return)}var f=l.sibling;if(f!==null){f.return=l.return,P=f;break e}P=l.return}}var c=e.current;for(P=c;P!==null;){s=P;var m=s.child;if(s.subtreeFlags&2064&&m!==null)m.return=s,P=m;else e:for(s=c;P!==null;){if(o=P,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:La(9,o)}}catch(k){Q(o,o.return,k)}if(o===s){P=null;break e}var w=o.sibling;if(w!==null){w.return=o.return,P=w;break e}P=o.return}}if(R=a,Ct(),Ve&&typeof Ve.onPostCommitFiberRoot=="function")try{Ve.onPostCommitFiberRoot(ka,e)}catch{}r=!0}return r}finally{F=n,Pe.transition=t}}return!1}function vi(e,t,n){t=vn(n,t),t=wc(e,t,1),e=ht(e,t,1),t=fe(),e!==null&&(pr(e,1,t),ye(e,t))}function Q(e,t,n){if(e.tag===3)vi(e,e,n);else for(;t!==null;){if(t.tag===3){vi(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(xt===null||!xt.has(r))){e=vn(n,e),e=kc(t,e,1),t=ht(t,e,1),e=fe(),t!==null&&(pr(t,1,e),ye(t,e));break}}t=t.return}}function _p(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=fe(),e.pingedLanes|=e.suspendedLanes&n,ne===e&&(ae&n)===n&&(q===4||q===3&&(ae&130023424)===ae&&500>K()-Ys?Ft(e,0):Qs|=n),ye(e,t)}function $c(e,t){t===0&&(e.mode&1?(t=Er,Er<<=1,!(Er&130023424)&&(Er=4194304)):t=1);var n=fe();e=qe(e,t),e!==null&&(pr(e,t,n),ye(e,n))}function Np(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),$c(e,n)}function jp(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(S(314))}r!==null&&r.delete(t),$c(e,n)}var Vc;Vc=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||ge.current)xe=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return xe=!1,hp(e,t,n);xe=!!(e.flags&131072)}else xe=!1,$&&t.flags&1048576&&Yu(t,oa,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Wr(e,t),e=t.pendingProps;var a=mn(t,ue.current);dn(t,n),a=Us(null,t,r,e,a,n);var l=Bs();return t.flags|=1,typeof a=="object"&&a!==null&&typeof a.render=="function"&&a.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ve(r)?(l=!0,la(t)):l=!1,t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,Rs(t),a.updater=Pa,t.stateNode=a,a._reactInternals=t,Hl(t,r,e,n),t=Yl(null,t,r,!0,l,n)):(t.tag=0,$&&l&&js(t),de(null,t,a,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Wr(e,t),e=t.pendingProps,a=r._init,r=a(r._payload),t.type=r,a=t.tag=Lp(r),e=Ie(r,e),a){case 0:t=Ql(null,t,r,e,n);break e;case 1:t=ii(null,t,r,e,n);break e;case 11:t=si(null,t,r,e,n);break e;case 14:t=oi(null,t,r,Ie(r.type,e),n);break e}throw Error(S(306,r,""))}return t;case 0:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:Ie(r,a),Ql(e,t,r,a,n);case 1:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:Ie(r,a),ii(e,t,r,a,n);case 3:e:{if(_c(t),e===null)throw Error(S(387));r=t.pendingProps,l=t.memoizedState,a=l.element,Zu(e,t),ca(t,r,null,n);var s=t.memoizedState;if(r=s.element,l.isDehydrated)if(l={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=l,t.memoizedState=l,t.flags&256){a=vn(Error(S(423)),t),t=ui(e,t,r,n,a);break e}else if(r!==a){a=vn(Error(S(424)),t),t=ui(e,t,r,n,a);break e}else for(we=mt(t.stateNode.containerInfo.firstChild),ke=t,$=!0,Re=null,n=Xu(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(hn(),r===a){t=Ze(e,t,n);break e}de(e,t,r,n)}t=t.child}return t;case 5:return ec(t),e===null&&Bl(t),r=t.type,a=t.pendingProps,l=e!==null?e.memoizedProps:null,s=a.children,zl(r,a)?s=null:l!==null&&zl(r,l)&&(t.flags|=32),Ec(e,t),de(e,t,s,n),t.child;case 6:return e===null&&Bl(t),null;case 13:return Nc(e,t,n);case 4:return zs(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=xn(t,null,r,n):de(e,t,r,n),t.child;case 11:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:Ie(r,a),si(e,t,r,a,n);case 7:return de(e,t,t.pendingProps,n),t.child;case 8:return de(e,t,t.pendingProps.children,n),t.child;case 12:return de(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,a=t.pendingProps,l=t.memoizedProps,s=a.value,O(ia,r._currentValue),r._currentValue=s,l!==null)if(Oe(l.value,s)){if(l.children===a.children&&!ge.current){t=Ze(e,t,n);break e}}else for(l=t.child,l!==null&&(l.return=t);l!==null;){var o=l.dependencies;if(o!==null){s=l.child;for(var i=o.firstContext;i!==null;){if(i.context===r){if(l.tag===1){i=Je(-1,n&-n),i.tag=2;var u=l.updateQueue;if(u!==null){u=u.shared;var h=u.pending;h===null?i.next=i:(i.next=h.next,h.next=i),u.pending=i}}l.lanes|=n,i=l.alternate,i!==null&&(i.lanes|=n),$l(l.return,n,t),o.lanes|=n;break}i=i.next}}else if(l.tag===10)s=l.type===t.type?null:l.child;else if(l.tag===18){if(s=l.return,s===null)throw Error(S(341));s.lanes|=n,o=s.alternate,o!==null&&(o.lanes|=n),$l(s,n,t),s=l.sibling}else s=l.child;if(s!==null)s.return=l;else for(s=l;s!==null;){if(s===t){s=null;break}if(l=s.sibling,l!==null){l.return=s.return,s=l;break}s=s.return}l=s}de(e,t,a.children,n),t=t.child}return t;case 9:return a=t.type,r=t.pendingProps.children,dn(t,n),a=Le(a),r=r(a),t.flags|=1,de(e,t,r,n),t.child;case 14:return r=t.type,a=Ie(r,t.pendingProps),a=Ie(r.type,a),oi(e,t,r,a,n);case 15:return Sc(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:Ie(r,a),Wr(e,t),t.tag=1,ve(r)?(e=!0,la(t)):e=!1,dn(t,n),bc(t,r,a),Hl(t,r,a,n),Yl(null,t,r,!0,e,n);case 19:return jc(e,t,n);case 22:return Cc(e,t,n)}throw Error(S(156,t.tag))};function Hc(e,t){return gu(e,t)}function Pp(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function je(e,t,n,r){return new Pp(e,t,n,r)}function Xs(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Lp(e){if(typeof e=="function")return Xs(e)?1:0;if(e!=null){if(e=e.$$typeof,e===xs)return 11;if(e===gs)return 14}return 2}function vt(e,t){var n=e.alternate;return n===null?(n=je(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Kr(e,t,n,r,a,l){var s=2;if(r=e,typeof e=="function")Xs(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case Jt:return Ot(n.children,a,l,t);case hs:s=8,a|=8;break;case ml:return e=je(12,n,t,a|2),e.elementType=ml,e.lanes=l,e;case hl:return e=je(13,n,t,a),e.elementType=hl,e.lanes=l,e;case xl:return e=je(19,n,t,a),e.elementType=xl,e.lanes=l,e;case eu:return Ma(n,a,l,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case qi:s=10;break e;case Zi:s=9;break e;case xs:s=11;break e;case gs:s=14;break e;case at:s=16,r=null;break e}throw Error(S(130,e==null?e:typeof e,""))}return t=je(s,n,t,a),t.elementType=e,t.type=r,t.lanes=l,t}function Ot(e,t,n,r){return e=je(7,e,r,t),e.lanes=n,e}function Ma(e,t,n,r){return e=je(22,e,r,t),e.elementType=eu,e.lanes=n,e.stateNode={isHidden:!1},e}function ul(e,t,n){return e=je(6,e,null,t),e.lanes=n,e}function cl(e,t,n){return t=je(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Tp(e,t,n,r,a){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ha(0),this.expirationTimes=Ha(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ha(0),this.identifierPrefix=r,this.onRecoverableError=a,this.mutableSourceEagerHydrationData=null}function qs(e,t,n,r,a,l,s,o,i){return e=new Tp(e,t,n,o,i),t===1?(t=1,l===!0&&(t|=8)):t=0,l=je(3,null,null,t),e.current=l,l.stateNode=e,l.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Rs(l),e}function Mp(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Kt,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Wc(e){if(!e)return wt;e=e._reactInternals;e:{if(Wt(e)!==e||e.tag!==1)throw Error(S(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ve(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(S(171))}if(e.tag===1){var n=e.type;if(ve(n))return Wu(e,n,t)}return t}function Qc(e,t,n,r,a,l,s,o,i){return e=qs(n,r,!0,e,a,l,s,o,i),e.context=Wc(null),n=e.current,r=fe(),a=gt(n),l=Je(r,a),l.callback=t??null,ht(n,l,a),e.current.lanes=a,pr(e,a,r),ye(e,r),e}function Ia(e,t,n,r){var a=t.current,l=fe(),s=gt(a);return n=Wc(n),t.context===null?t.context=n:t.pendingContext=n,t=Je(l,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=ht(a,t,s),e!==null&&(Fe(e,a,s,l),$r(e,a,s)),s}function va(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function yi(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Zs(e,t){yi(e,t),(e=e.alternate)&&yi(e,t)}function Ip(){return null}var Yc=typeof reportError=="function"?reportError:function(e){console.error(e)};function eo(e){this._internalRoot=e}Aa.prototype.render=eo.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(S(409));Ia(e,t,null,null)};Aa.prototype.unmount=eo.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Vt(function(){Ia(null,e,null,null)}),t[Xe]=null}};function Aa(e){this._internalRoot=e}Aa.prototype.unstable_scheduleHydration=function(e){if(e){var t=Cu();e={blockedOn:null,target:e,priority:t};for(var n=0;n<st.length&&t!==0&&t<st[n].priority;n++);st.splice(n,0,e),n===0&&_u(e)}};function to(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ra(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function bi(){}function Ap(e,t,n,r,a){if(a){if(typeof r=="function"){var l=r;r=function(){var u=va(s);l.call(u)}}var s=Qc(t,r,e,0,null,!1,!1,"",bi);return e._reactRootContainer=s,e[Xe]=s.current,tr(e.nodeType===8?e.parentNode:e),Vt(),s}for(;a=e.lastChild;)e.removeChild(a);if(typeof r=="function"){var o=r;r=function(){var u=va(i);o.call(u)}}var i=qs(e,0,!1,null,null,!1,!1,"",bi);return e._reactRootContainer=i,e[Xe]=i.current,tr(e.nodeType===8?e.parentNode:e),Vt(function(){Ia(t,i,n,r)}),i}function za(e,t,n,r,a){var l=n._reactRootContainer;if(l){var s=l;if(typeof a=="function"){var o=a;a=function(){var i=va(s);o.call(i)}}Ia(t,s,e,a)}else s=Ap(n,t,e,a,r);return va(s)}ku=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=zn(t.pendingLanes);n!==0&&(bs(t,n|1),ye(t,K()),!(R&6)&&(yn=K()+500,Ct()))}break;case 13:Vt(function(){var r=qe(e,1);if(r!==null){var a=fe();Fe(r,e,1,a)}}),Zs(e,1)}};ws=function(e){if(e.tag===13){var t=qe(e,134217728);if(t!==null){var n=fe();Fe(t,e,134217728,n)}Zs(e,134217728)}};Su=function(e){if(e.tag===13){var t=gt(e),n=qe(e,t);if(n!==null){var r=fe();Fe(n,e,t,r)}Zs(e,t)}};Cu=function(){return F};Eu=function(e,t){var n=F;try{return F=e,t()}finally{F=n}};_l=function(e,t,n){switch(t){case"input":if(yl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=_a(r);if(!a)throw Error(S(90));nu(r),yl(r,a)}}}break;case"textarea":au(e,n);break;case"select":t=n.value,t!=null&&sn(e,!!n.multiple,t,!1)}};du=Ks;fu=Vt;var Rp={usingClientEntryPoint:!1,Events:[hr,Zt,_a,uu,cu,Ks]},In={findFiberByHostInstance:At,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},zp={bundleType:In.bundleType,version:In.version,rendererPackageName:In.rendererPackageName,rendererConfig:In.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:et.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=hu(e),e===null?null:e.stateNode},findFiberByHostInstance:In.findFiberByHostInstance||Ip,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var zr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!zr.isDisabled&&zr.supportsFiber)try{ka=zr.inject(zp),Ve=zr}catch{}}Ce.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Rp;Ce.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!to(t))throw Error(S(200));return Mp(e,t,null,n)};Ce.createRoot=function(e,t){if(!to(e))throw Error(S(299));var n=!1,r="",a=Yc;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),t=qs(e,1,!1,null,null,n,!1,r,a),e[Xe]=t.current,tr(e.nodeType===8?e.parentNode:e),new eo(t)};Ce.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(S(188)):(e=Object.keys(e).join(","),Error(S(268,e)));return e=hu(t),e=e===null?null:e.stateNode,e};Ce.flushSync=function(e){return Vt(e)};Ce.hydrate=function(e,t,n){if(!Ra(t))throw Error(S(200));return za(null,e,t,!0,n)};Ce.hydrateRoot=function(e,t,n){if(!to(e))throw Error(S(405));var r=n!=null&&n.hydratedSources||null,a=!1,l="",s=Yc;if(n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=Qc(t,null,e,1,n??null,a,!1,l,s),e[Xe]=t.current,tr(e),r)for(e=0;e<r.length;e++)n=r[e],a=n._getVersion,a=a(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,a]:t.mutableSourceEagerHydrationData.push(n,a);return new Aa(t)};Ce.render=function(e,t,n){if(!Ra(t))throw Error(S(200));return za(null,e,t,!1,n)};Ce.unmountComponentAtNode=function(e){if(!Ra(e))throw Error(S(40));return e._reactRootContainer?(Vt(function(){za(null,null,e,!1,function(){e._reactRootContainer=null,e[Xe]=null})}),!0):!1};Ce.unstable_batchedUpdates=Ks;Ce.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Ra(n))throw Error(S(200));if(e==null||e._reactInternals===void 0)throw Error(S(38));return za(e,t,n,!1,r)};Ce.version="18.3.1-next-f1338f8080-20240426";function Kc(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Kc)}catch(e){console.error(e)}}Kc(),Ki.exports=Ce;var Fp=Ki.exports,wi=Fp;fl.createRoot=wi.createRoot,fl.hydrateRoot=wi.hydrateRoot;/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function cr(){return cr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},cr.apply(this,arguments)}var ct;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(ct||(ct={}));const ki="popstate";function Op(e){e===void 0&&(e={});function t(r,a){let{pathname:l,search:s,hash:o}=r.location;return ls("",{pathname:l,search:s,hash:o},a.state&&a.state.usr||null,a.state&&a.state.key||"default")}function n(r,a){return typeof a=="string"?a:ya(a)}return Up(t,n,null,e)}function J(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function no(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Dp(){return Math.random().toString(36).substr(2,8)}function Si(e,t){return{usr:e.state,key:e.key,idx:t}}function ls(e,t,n,r){return n===void 0&&(n=null),cr({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Sn(t):t,{state:n,key:t&&t.key||r||Dp()})}function ya(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Sn(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function Up(e,t,n,r){r===void 0&&(r={});let{window:a=document.defaultView,v5Compat:l=!1}=r,s=a.history,o=ct.Pop,i=null,u=h();u==null&&(u=0,s.replaceState(cr({},s.state,{idx:u}),""));function h(){return(s.state||{idx:null}).idx}function p(){o=ct.Pop;let b=h(),f=b==null?null:b-u;u=b,i&&i({action:o,location:y.location,delta:f})}function d(b,f){o=ct.Push;let c=ls(y.location,b,f);u=h()+1;let m=Si(c,u),w=y.createHref(c);try{s.pushState(m,"",w)}catch(k){if(k instanceof DOMException&&k.name==="DataCloneError")throw k;a.location.assign(w)}l&&i&&i({action:o,location:y.location,delta:1})}function v(b,f){o=ct.Replace;let c=ls(y.location,b,f);u=h();let m=Si(c,u),w=y.createHref(c);s.replaceState(m,"",w),l&&i&&i({action:o,location:y.location,delta:0})}function g(b){let f=a.location.origin!=="null"?a.location.origin:a.location.href,c=typeof b=="string"?b:ya(b);return c=c.replace(/ $/,"%20"),J(f,"No window.location.(origin|href) available to create URL for href: "+c),new URL(c,f)}let y={get action(){return o},get location(){return e(a,s)},listen(b){if(i)throw new Error("A history only accepts one active listener");return a.addEventListener(ki,p),i=b,()=>{a.removeEventListener(ki,p),i=null}},createHref(b){return t(a,b)},createURL:g,encodeLocation(b){let f=g(b);return{pathname:f.pathname,search:f.search,hash:f.hash}},push:d,replace:v,go(b){return s.go(b)}};return y}var Ci;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Ci||(Ci={}));function Bp(e,t,n){return n===void 0&&(n="/"),$p(e,t,n)}function $p(e,t,n,r){let a=typeof t=="string"?Sn(t):t,l=ro(a.pathname||"/",n);if(l==null)return null;let s=Jc(e);Vp(s);let o=null;for(let i=0;o==null&&i<s.length;++i){let u=tm(l);o=qp(s[i],u)}return o}function Jc(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let a=(l,s,o)=>{let i={relativePath:o===void 0?l.path||"":o,caseSensitive:l.caseSensitive===!0,childrenIndex:s,route:l};i.relativePath.startsWith("/")&&(J(i.relativePath.startsWith(r),'Absolute route path "'+i.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),i.relativePath=i.relativePath.slice(r.length));let u=yt([r,i.relativePath]),h=n.concat(i);l.children&&l.children.length>0&&(J(l.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Jc(l.children,t,h,u)),!(l.path==null&&!l.index)&&t.push({path:u,score:Gp(u,l.index),routesMeta:h})};return e.forEach((l,s)=>{var o;if(l.path===""||!((o=l.path)!=null&&o.includes("?")))a(l,s);else for(let i of Gc(l.path))a(l,s,i)}),t}function Gc(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,a=n.endsWith("?"),l=n.replace(/\?$/,"");if(r.length===0)return a?[l,""]:[l];let s=Gc(r.join("/")),o=[];return o.push(...s.map(i=>i===""?l:[l,i].join("/"))),a&&o.push(...s),o.map(i=>e.startsWith("/")&&i===""?"/":i)}function Vp(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:Xp(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Hp=/^:[\w-]+$/,Wp=3,Qp=2,Yp=1,Kp=10,Jp=-2,Ei=e=>e==="*";function Gp(e,t){let n=e.split("/"),r=n.length;return n.some(Ei)&&(r+=Jp),t&&(r+=Qp),n.filter(a=>!Ei(a)).reduce((a,l)=>a+(Hp.test(l)?Wp:l===""?Yp:Kp),r)}function Xp(e,t){return e.length===t.length&&e.slice(0,-1).every((r,a)=>r===t[a])?e[e.length-1]-t[t.length-1]:0}function qp(e,t,n){let{routesMeta:r}=e,a={},l="/",s=[];for(let o=0;o<r.length;++o){let i=r[o],u=o===r.length-1,h=l==="/"?t:t.slice(l.length)||"/",p=Zp({path:i.relativePath,caseSensitive:i.caseSensitive,end:u},h),d=i.route;if(!p)return null;Object.assign(a,p.params),s.push({params:a,pathname:yt([l,p.pathname]),pathnameBase:sm(yt([l,p.pathnameBase])),route:d}),p.pathnameBase!=="/"&&(l=yt([l,p.pathnameBase]))}return s}function Zp(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=em(e.path,e.caseSensitive,e.end),a=t.match(n);if(!a)return null;let l=a[0],s=l.replace(/(.)\/+$/,"$1"),o=a.slice(1);return{params:r.reduce((u,h,p)=>{let{paramName:d,isOptional:v}=h;if(d==="*"){let y=o[p]||"";s=l.slice(0,l.length-y.length).replace(/(.)\/+$/,"$1")}const g=o[p];return v&&!g?u[d]=void 0:u[d]=(g||"").replace(/%2F/g,"/"),u},{}),pathname:l,pathnameBase:s,pattern:e}}function em(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),no(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],a="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(s,o,i)=>(r.push({paramName:o,isOptional:i!=null}),i?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),a+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?a+="\\/*$":e!==""&&e!=="/"&&(a+="(?:(?=\\/|$))"),[new RegExp(a,t?void 0:"i"),r]}function tm(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return no(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function ro(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}const nm=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,rm=e=>nm.test(e);function am(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:a=""}=typeof e=="string"?Sn(e):e,l;if(n)if(rm(n))l=n;else{if(n.includes("//")){let s=n;n=n.replace(/\/\/+/g,"/"),no(!1,"Pathnames cannot have embedded double slashes - normalizing "+(s+" -> "+n))}n.startsWith("/")?l=_i(n.substring(1),"/"):l=_i(n,t)}else l=t;return{pathname:l,search:om(r),hash:im(a)}}function _i(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(a=>{a===".."?n.length>1&&n.pop():a!=="."&&n.push(a)}),n.length>1?n.join("/"):"/"}function dl(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function lm(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function ao(e,t){let n=lm(e);return t?n.map((r,a)=>a===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function lo(e,t,n,r){r===void 0&&(r=!1);let a;typeof e=="string"?a=Sn(e):(a=cr({},e),J(!a.pathname||!a.pathname.includes("?"),dl("?","pathname","search",a)),J(!a.pathname||!a.pathname.includes("#"),dl("#","pathname","hash",a)),J(!a.search||!a.search.includes("#"),dl("#","search","hash",a)));let l=e===""||a.pathname==="",s=l?"/":a.pathname,o;if(s==null)o=n;else{let p=t.length-1;if(!r&&s.startsWith("..")){let d=s.split("/");for(;d[0]==="..";)d.shift(),p-=1;a.pathname=d.join("/")}o=p>=0?t[p]:"/"}let i=am(a,o),u=s&&s!=="/"&&s.endsWith("/"),h=(l||s===".")&&n.endsWith("/");return!i.pathname.endsWith("/")&&(u||h)&&(i.pathname+="/"),i}const yt=e=>e.join("/").replace(/\/\/+/g,"/"),sm=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),om=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,im=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function um(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Xc=["post","put","patch","delete"];new Set(Xc);const cm=["get",...Xc];new Set(cm);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function dr(){return dr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},dr.apply(this,arguments)}const so=E.createContext(null),dm=E.createContext(null),Et=E.createContext(null),Fa=E.createContext(null),_t=E.createContext({outlet:null,matches:[],isDataRoute:!1}),qc=E.createContext(null);function fm(e,t){let{relative:n}=t===void 0?{}:t;Cn()||J(!1);let{basename:r,navigator:a}=E.useContext(Et),{hash:l,pathname:s,search:o}=ed(e,{relative:n}),i=s;return r!=="/"&&(i=s==="/"?r:yt([r,s])),a.createHref({pathname:i,search:o,hash:l})}function Cn(){return E.useContext(Fa)!=null}function En(){return Cn()||J(!1),E.useContext(Fa).location}function Zc(e){E.useContext(Et).static||E.useLayoutEffect(e)}function gr(){let{isDataRoute:e}=E.useContext(_t);return e?Em():pm()}function pm(){Cn()||J(!1);let e=E.useContext(so),{basename:t,future:n,navigator:r}=E.useContext(Et),{matches:a}=E.useContext(_t),{pathname:l}=En(),s=JSON.stringify(ao(a,n.v7_relativeSplatPath)),o=E.useRef(!1);return Zc(()=>{o.current=!0}),E.useCallback(function(u,h){if(h===void 0&&(h={}),!o.current)return;if(typeof u=="number"){r.go(u);return}let p=lo(u,JSON.parse(s),l,h.relative==="path");e==null&&t!=="/"&&(p.pathname=p.pathname==="/"?t:yt([t,p.pathname])),(h.replace?r.replace:r.push)(p,h.state,h)},[t,r,s,l,e])}function ed(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=E.useContext(Et),{matches:a}=E.useContext(_t),{pathname:l}=En(),s=JSON.stringify(ao(a,r.v7_relativeSplatPath));return E.useMemo(()=>lo(e,JSON.parse(s),l,n==="path"),[e,s,l,n])}function mm(e,t){return hm(e,t)}function hm(e,t,n,r){Cn()||J(!1);let{navigator:a}=E.useContext(Et),{matches:l}=E.useContext(_t),s=l[l.length-1],o=s?s.params:{};s&&s.pathname;let i=s?s.pathnameBase:"/";s&&s.route;let u=En(),h;if(t){var p;let b=typeof t=="string"?Sn(t):t;i==="/"||(p=b.pathname)!=null&&p.startsWith(i)||J(!1),h=b}else h=u;let d=h.pathname||"/",v=d;if(i!=="/"){let b=i.replace(/^\//,"").split("/");v="/"+d.replace(/^\//,"").split("/").slice(b.length).join("/")}let g=Bp(e,{pathname:v}),y=bm(g&&g.map(b=>Object.assign({},b,{params:Object.assign({},o,b.params),pathname:yt([i,a.encodeLocation?a.encodeLocation(b.pathname).pathname:b.pathname]),pathnameBase:b.pathnameBase==="/"?i:yt([i,a.encodeLocation?a.encodeLocation(b.pathnameBase).pathname:b.pathnameBase])})),l,n,r);return t&&y?E.createElement(Fa.Provider,{value:{location:dr({pathname:"/",search:"",hash:"",state:null,key:"default"},h),navigationType:ct.Pop}},y):y}function xm(){let e=Cm(),t=um(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,a={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return E.createElement(E.Fragment,null,E.createElement("h2",null,"Unexpected Application Error!"),E.createElement("h3",{style:{fontStyle:"italic"}},t),n?E.createElement("pre",{style:a},n):null,null)}const gm=E.createElement(xm,null);class vm extends E.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?E.createElement(_t.Provider,{value:this.props.routeContext},E.createElement(qc.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function ym(e){let{routeContext:t,match:n,children:r}=e,a=E.useContext(so);return a&&a.static&&a.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=n.route.id),E.createElement(_t.Provider,{value:t},r)}function bm(e,t,n,r){var a;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var l;if(!n)return null;if(n.errors)e=n.matches;else if((l=r)!=null&&l.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let s=e,o=(a=n)==null?void 0:a.errors;if(o!=null){let h=s.findIndex(p=>p.route.id&&(o==null?void 0:o[p.route.id])!==void 0);h>=0||J(!1),s=s.slice(0,Math.min(s.length,h+1))}let i=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let h=0;h<s.length;h++){let p=s[h];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(u=h),p.route.id){let{loaderData:d,errors:v}=n,g=p.route.loader&&d[p.route.id]===void 0&&(!v||v[p.route.id]===void 0);if(p.route.lazy||g){i=!0,u>=0?s=s.slice(0,u+1):s=[s[0]];break}}}return s.reduceRight((h,p,d)=>{let v,g=!1,y=null,b=null;n&&(v=o&&p.route.id?o[p.route.id]:void 0,y=p.route.errorElement||gm,i&&(u<0&&d===0?(_m("route-fallback"),g=!0,b=null):u===d&&(g=!0,b=p.route.hydrateFallbackElement||null)));let f=t.concat(s.slice(0,d+1)),c=()=>{let m;return v?m=y:g?m=b:p.route.Component?m=E.createElement(p.route.Component,null):p.route.element?m=p.route.element:m=h,E.createElement(ym,{match:p,routeContext:{outlet:h,matches:f,isDataRoute:n!=null},children:m})};return n&&(p.route.ErrorBoundary||p.route.errorElement||d===0)?E.createElement(vm,{location:n.location,revalidation:n.revalidation,component:y,error:v,children:c(),routeContext:{outlet:null,matches:f,isDataRoute:!0}}):c()},null)}var td=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(td||{}),nd=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(nd||{});function wm(e){let t=E.useContext(so);return t||J(!1),t}function km(e){let t=E.useContext(dm);return t||J(!1),t}function Sm(e){let t=E.useContext(_t);return t||J(!1),t}function rd(e){let t=Sm(),n=t.matches[t.matches.length-1];return n.route.id||J(!1),n.route.id}function Cm(){var e;let t=E.useContext(qc),n=km(),r=rd();return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function Em(){let{router:e}=wm(td.UseNavigateStable),t=rd(nd.UseNavigateStable),n=E.useRef(!1);return Zc(()=>{n.current=!0}),E.useCallback(function(a,l){l===void 0&&(l={}),n.current&&(typeof a=="number"?e.navigate(a):e.navigate(a,dr({fromRouteId:t},l)))},[e,t])}const Ni={};function _m(e,t,n){Ni[e]||(Ni[e]=!0)}function Nm(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function ba(e){let{to:t,replace:n,state:r,relative:a}=e;Cn()||J(!1);let{future:l,static:s}=E.useContext(Et),{matches:o}=E.useContext(_t),{pathname:i}=En(),u=gr(),h=lo(t,ao(o,l.v7_relativeSplatPath),i,a==="path"),p=JSON.stringify(h);return E.useEffect(()=>u(JSON.parse(p),{replace:n,state:r,relative:a}),[u,p,a,n,r]),null}function Mt(e){J(!1)}function jm(e){let{basename:t="/",children:n=null,location:r,navigationType:a=ct.Pop,navigator:l,static:s=!1,future:o}=e;Cn()&&J(!1);let i=t.replace(/^\/*/,"/"),u=E.useMemo(()=>({basename:i,navigator:l,static:s,future:dr({v7_relativeSplatPath:!1},o)}),[i,o,l,s]);typeof r=="string"&&(r=Sn(r));let{pathname:h="/",search:p="",hash:d="",state:v=null,key:g="default"}=r,y=E.useMemo(()=>{let b=ro(h,i);return b==null?null:{location:{pathname:b,search:p,hash:d,state:v,key:g},navigationType:a}},[i,h,p,d,v,g,a]);return y==null?null:E.createElement(Et.Provider,{value:u},E.createElement(Fa.Provider,{children:n,value:y}))}function Pm(e){let{children:t,location:n}=e;return mm(ss(t),n)}new Promise(()=>{});function ss(e,t){t===void 0&&(t=[]);let n=[];return E.Children.forEach(e,(r,a)=>{if(!E.isValidElement(r))return;let l=[...t,a];if(r.type===E.Fragment){n.push.apply(n,ss(r.props.children,l));return}r.type!==Mt&&J(!1),!r.props.index||!r.props.children||J(!1);let s={id:r.props.id||l.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(s.children=ss(r.props.children,l)),n.push(s)}),n}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function os(){return os=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},os.apply(this,arguments)}function Lm(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,l;for(l=0;l<r.length;l++)a=r[l],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function Tm(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Mm(e,t){return e.button===0&&(!t||t==="_self")&&!Tm(e)}const Im=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],Am="6";try{window.__reactRouterVersion=Am}catch{}const Rm="startTransition",ji=Ed[Rm];function zm(e){let{basename:t,children:n,future:r,window:a}=e,l=E.useRef();l.current==null&&(l.current=Op({window:a,v5Compat:!0}));let s=l.current,[o,i]=E.useState({action:s.action,location:s.location}),{v7_startTransition:u}=r||{},h=E.useCallback(p=>{u&&ji?ji(()=>i(p)):i(p)},[i,u]);return E.useLayoutEffect(()=>s.listen(h),[s,h]),E.useEffect(()=>Nm(r),[r]),E.createElement(jm,{basename:t,children:n,location:o.location,navigationType:o.action,navigator:s,future:r})}const Fm=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Om=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,oo=E.forwardRef(function(t,n){let{onClick:r,relative:a,reloadDocument:l,replace:s,state:o,target:i,to:u,preventScrollReset:h,viewTransition:p}=t,d=Lm(t,Im),{basename:v}=E.useContext(Et),g,y=!1;if(typeof u=="string"&&Om.test(u)&&(g=u,Fm))try{let m=new URL(window.location.href),w=u.startsWith("//")?new URL(m.protocol+u):new URL(u),k=ro(w.pathname,v);w.origin===m.origin&&k!=null?u=k+w.search+w.hash:y=!0}catch{}let b=fm(u,{relative:a}),f=Dm(u,{replace:s,state:o,target:i,preventScrollReset:h,relative:a,viewTransition:p});function c(m){r&&r(m),m.defaultPrevented||f(m)}return E.createElement("a",os({},d,{href:g||b,onClick:y||l?r:c,ref:n,target:i}))});var Pi;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Pi||(Pi={}));var Li;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Li||(Li={}));function Dm(e,t){let{target:n,replace:r,state:a,preventScrollReset:l,relative:s,viewTransition:o}=t===void 0?{}:t,i=gr(),u=En(),h=ed(e,{relative:s});return E.useCallback(p=>{if(Mm(p,n)){p.preventDefault();let d=r!==void 0?r:ya(u)===ya(h);i(e,{replace:d,state:a,preventScrollReset:l,relative:s,viewTransition:o})}},[u,i,h,r,a,n,e,l,s,o])}const Um="http://localhost:5000/api/v1";async function io(e,t={}){const n=await fetch(`${Um}${e}`,{headers:{"Content-Type":"application/json",...t.headers||{}},...t}),r=n.headers.get("Content-Type")||"",l=r.includes("application/json")||r.includes("application/problem+json")?await n.json():null;if(!n.ok){const s=(l==null?void 0:l.detail)||(l==null?void 0:l.message)||`Request failed with status ${n.status}`;throw new Error(s)}return l}async function Bm({fullName:e,email:t,password:n}){return io("/auth/register",{method:"POST",body:JSON.stringify({full_name:e,email:t,password:n})})}async function $m({email:e,password:t}){return io("/auth/login",{method:"POST",body:JSON.stringify({email:e,password:t})})}async function Vm({refreshToken:e}){return io("/auth/logout",{method:"POST",body:JSON.stringify({refresh_token:e})})}const uo="architectAccessToken",co="architectRefreshToken",ad="architectUserName",ld="architectUserEmail";function Hm(){return localStorage.getItem(uo)||""}function Wm(){return localStorage.getItem(co)||""}function fo(){return!!Hm()}function sd({accessToken:e,refreshToken:t,fullName:n,email:r}){e&&localStorage.setItem(uo,e),t&&localStorage.setItem(co,t),n&&localStorage.setItem(ad,n),r&&localStorage.setItem(ld,r)}function Qm(){localStorage.removeItem(uo),localStorage.removeItem(co),localStorage.removeItem(ad),localStorage.removeItem(ld)}const od="architectImportedCsvRows";function rt(e){return String(e||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\"/g,"&quot;").replace(/'/g,"&#039;")}function Ti(e){const t=String(e||"").replace(/[^0-9+-.]/g,""),n=Number.parseFloat(t);return Number.isFinite(n)?n:0}function Ym(e){const t=String(e||"").trim();if(!t)return[];const n=[];let r="",a=[],l=!1;for(let i=0;i<t.length;i+=1){const u=t[i],h=t[i+1];if(u==='"'){l&&h==='"'?(r+='"',i+=1):l=!l;continue}if(!l&&u===","){a.push(r.trim()),r="";continue}if(!l&&(u===`
`||u==="\r")){u==="\r"&&h===`
`&&(i+=1),a.push(r.trim()),a.some(p=>p.length>0)&&n.push(a),a=[],r="";continue}r+=u}if((r.length>0||a.length>0)&&(a.push(r.trim()),a.some(i=>i.length>0)&&n.push(a)),n.length<2)return[];const s=n[0].map(i=>i.toLowerCase().trim());return n.slice(1).map(i=>{const u=(...m)=>{for(const w of m){const k=s.findIndex(C=>C===w);if(k>=0)return i[k]||""}return""},h=u("amount","value","price","total"),p=u("budget","limit","allocated","cap"),d=u("type","kind","transaction_type").toLowerCase(),v=u("status")||"Completed";let g=Ti(h);const y=/^\s*-/.test(String(h||"")),b=/^\s*\+/.test(String(h||"")),f=/expense|debit|spend|purchase|payment|withdraw/.test(d),c=/income|credit|deposit|salary|refund/.test(d);return y&&g>0&&(g*=-1),f&&g>0&&(g*=-1),c&&g<0&&(g*=-1),!f&&!c&&!y&&!b&&g>0&&(g*=-1),{date:u("date","transaction_date")||"N/A",description:u("description","merchant","name","title")||"Transaction",category:u("category","group","tag")||"General",amount:g,budget:Ti(p),status:v}}).filter(i=>i.description||i.amount)}function It(e){const t=Number.isFinite(e)?e:0;return new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(t)}function Km(){try{const e=localStorage.getItem(od),t=JSON.parse(e||"[]");return Array.isArray(t)?t:[]}catch{return[]}}function Jm(e){localStorage.setItem(od,JSON.stringify(e))}function Gm(e){const t=new Map;e.forEach(l=>{if(l.amount>=0)return;const s=l.category||"General",o=t.get(s)||{category:s,spent:0,budget:0};o.spent+=Math.abs(l.amount),Number.isFinite(l.budget)&&l.budget>0&&(o.budget+=l.budget),t.set(s,o)});const n=Array.from(t.values()).map(l=>({...l,budget:l.budget>0?l.budget:l.spent*1.25})).sort((l,s)=>s.spent-l.spent),r=n.reduce((l,s)=>l+s.spent,0),a=n.reduce((l,s)=>l+s.budget,0);return{categories:n,totalSpent:r,totalBudget:a}}function Xm(e,t){var v,g,y;const{categories:n,totalSpent:r}=Gm(t);if(!n.length||r<=0)return;const a=n.slice(0,3),l=a.reduce((b,f)=>b+f.spent,0);if(l<=0)return;const s=Array.from(e.querySelectorAll("svg .pie-segment")),o=(g=(v=Array.from(e.querySelectorAll("h3")).find(b=>/spending categories/i.test(b.textContent||"")))==null?void 0:v.closest("div"))==null?void 0:g.querySelectorAll(".space-y-4 > .flex.items-center.justify-between.text-sm"),i=Number.parseFloat(((y=s[0])==null?void 0:y.getAttribute("r"))||"40"),u=2*Math.PI*i;let h=0;s.forEach((b,f)=>{const c=a[f];if(!c){b.setAttribute("stroke-dasharray",`0 ${u.toFixed(1)}`),b.setAttribute("stroke-dashoffset","0");return}const m=c.spent/l*u;b.setAttribute("stroke-dasharray",`${m.toFixed(1)} ${(u-m).toFixed(1)}`),b.setAttribute("stroke-dashoffset",`${(-h).toFixed(1)}`),h+=m}),o&&o.length&&Array.from(o).forEach((b,f)=>{const c=a[f],m=b.querySelector("span.font-medium"),w=b.querySelector("span.text-on-surface-variant");if(!c){b.style.display="none";return}if(b.style.display="flex",m&&(m.textContent=c.category),w){const k=Math.round(c.spent/l*100);w.textContent=`${k}%`}});const p=Array.from(e.querySelectorAll("span")).find(b=>(b.textContent||"").trim().toLowerCase()==="total"),d=p==null?void 0:p.nextElementSibling;d&&(d.textContent=It(r))}function qm({title:e,html:t}){const n=E.useRef(null),r=gr();E.useEffect(()=>{document.title=`${e} | Expense Tracker React`},[e]);const a=d=>/\bfull report\b/.test(d)?"/spending-report":/\bsettings\b/.test(d)||/\bperson\b/.test(d)?"/settings":/\btransactions?\b/.test(d)||/\bactivity\b/.test(d)?"/transactions-list":/\bbudgets?\b/.test(d)||/\baccounts?\b/.test(d)?"/budgets-categories":/\bdashboard\b/.test(d)||/\bhome\b/.test(d)?"/dashboard-3":/\badd expense\b/.test(d)?"/add-expense":null,l=d=>{Array.from(d.querySelectorAll("span, p, a, div")).filter(y=>(y.textContent||"").trim().toLowerCase()==="analytics").forEach(y=>{const b=y.closest("a, button, div");b&&b.remove()}),Array.from(d.querySelectorAll(".material-symbols-outlined")).filter(y=>(y.textContent||"").trim().toLowerCase()==="bar_chart").forEach(y=>{const b=y.closest("a, button, div");b&&/analytics/i.test(b.textContent||"")&&b.remove()})},s=d=>{const v=localStorage.getItem("architectUserName")||"",g=localStorage.getItem("architectUserEmail")||"";if(!v&&!g)return;Array.from(d.querySelectorAll("*")).forEach(b=>{if(b.children.length>0)return;const f=(b.textContent||"").trim();v&&f==="Alex Sterling"&&(b.textContent=v),g&&f==="alex.sterling@architect-finance.com"&&(b.textContent=g)})},o=(d,v)=>{var L,D,ce;if(!v.length)return;const g=v.filter(I=>I.amount>0).reduce((I,Z)=>I+Z.amount,0),y=v.filter(I=>I.amount<0).reduce((I,Z)=>I+Math.abs(Z.amount),0),b=g-y,f=Array.from(d.querySelectorAll("h2")).find(I=>/financial architecture summary/i.test(I.textContent||"")),c=f==null?void 0:f.nextElementSibling;c&&(c.textContent=It(b));const m=Array.from(d.querySelectorAll("p")).find(I=>(I.textContent||"").trim().toLowerCase()==="monthly income"),w=(L=m==null?void 0:m.parentElement)==null?void 0:L.querySelector("p.text-3xl");w&&(w.textContent=`+${It(g)}`);const k=Array.from(d.querySelectorAll("p")).find(I=>(I.textContent||"").trim().toLowerCase()==="monthly spending"),C=(D=k==null?void 0:k.parentElement)==null?void 0:D.querySelector("p.text-3xl");C&&(C.textContent=`-${It(y)}`);const _=Array.from(d.querySelectorAll("h3")).find(I=>/recent transactions/i.test(I.textContent||"")),N=(ce=_==null?void 0:_.parentElement)==null?void 0:ce.nextElementSibling;if(!N)return;const z=v.slice(0,6);N.innerHTML=z.map(I=>{const Z=I.amount>=0;return`<div class="bg-surface-container-lowest p-4 rounded-2xl flex items-center justify-between transition-transform hover:scale-[1.01] cursor-pointer">
  <div>
    <p class="font-bold text-on-surface">${rt(I.description)}</p>
    <p class="text-xs text-on-surface-variant">${rt(I.date)} • ${rt(I.category)}</p>
  </div>
  <div class="text-right">
    <p class="font-bold ${Z?"text-tertiary":"text-on-surface"}">${Z?"+":"-"}${It(Math.abs(I.amount))}</p>
    <span class="inline-block px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-tighter ${Z?"bg-tertiary-container text-on-tertiary-container":"bg-error-container text-on-error-container"}">${Z?"Income":"Expense"}</span>
  </div>
</div>`}).join(""),Xm(d,v)},i=(d,v)=>{if(!v.length)return;const g=10;let y=[...v];const b={currentPage:1,totalPages:Math.max(1,Math.ceil(y.length/g))},f=(w,k)=>{if(k<=7)return Array.from({length:k},(z,L)=>L+1);const C=[1],_=Math.max(2,w-1),N=Math.min(k-1,w+1);_>2&&C.push("...");for(let z=_;z<=N;z+=1)C.push(z);return N<k-1&&C.push("..."),C.push(k),C},c=()=>{var z;b.totalPages=Math.max(1,Math.ceil(y.length/g)),b.currentPage=Math.min(Math.max(b.currentPage,1),b.totalPages);const w=d.querySelector("tbody");if(w){const L=(b.currentPage-1)*g,D=Math.min(L+g,y.length),ce=y.slice(L,D);ce.length?w.innerHTML=ce.map(I=>{const Z=I.amount>=0;return`<tr class="hover:bg-surface-container-low/40 transition-colors group">
  <td class="px-8 py-6"><span class="text-sm font-bold text-on-surface">${rt(I.date)}</span></td>
  <td class="px-8 py-6"><span class="text-sm font-bold text-on-surface">${rt(I.description)}</span></td>
  <td class="px-8 py-6"><span class="px-3 py-1 bg-surface-container-high rounded-full text-[11px] font-bold text-on-primary-fixed-variant">${rt(I.category)}</span></td>
  <td class="px-8 py-6 text-right"><span class="px-3 py-1 bg-tertiary-container/20 text-tertiary text-[11px] font-bold rounded-full">${rt(I.status||"Completed")}</span></td>
  <td class="px-8 py-6 text-right"><span class="text-sm font-extrabold ${Z?"text-tertiary":"text-on-surface"}">${Z?"+":"-"}${It(Math.abs(I.amount))}</span></td>
  <td class="px-8 py-6"></td>
</tr>`}).join(""):w.innerHTML='<tr><td colspan="6" class="px-8 py-10 text-center text-on-surface-variant">No transactions found for the selected category.</td></tr>'}const k=Array.from(d.querySelectorAll("span")).find(L=>{const D=(L.textContent||"").trim().toLowerCase();return D.startsWith("showing")&&D.includes("transactions")}),C=k==null?void 0:k.closest("div");if(C&&k){const L=y.length,D=L===0?0:(b.currentPage-1)*g+1,ce=L===0?0:Math.min(b.currentPage*g,L);k.textContent=`Showing ${D}-${ce} of ${L} transactions`;const I=C.querySelector("div.flex.items-center.gap-1");if(I){I.innerHTML="";const Z=({text:tt,page:De,disabled:Nt=!1,isActive:j=!1,icon:M=""})=>{const T=d.createElement("button");T.className=j?"w-10 h-10 rounded-xl flex items-center justify-center bg-primary text-on-primary text-xs font-bold":"w-10 h-10 rounded-xl flex items-center justify-center hover:bg-surface-container-high text-xs font-bold transition-colors",M?T.innerHTML=`<span class="material-symbols-outlined text-sm">${M}</span>`:T.textContent=String(tt),T.disabled=Nt,Nt&&(T.className+=" opacity-40 cursor-not-allowed"),!Nt&&typeof De=="number"&&T.addEventListener("click",()=>{b.currentPage=De,c()}),I.appendChild(T)};Z({icon:"chevron_left",page:b.currentPage-1,disabled:b.currentPage===1}),f(b.currentPage,b.totalPages).forEach(tt=>{if(tt==="..."){const De=d.createElement("span");De.className="px-2 text-on-surface-variant",De.textContent="...",I.appendChild(De);return}Z({text:tt,page:tt,isActive:tt===b.currentPage})}),Z({icon:"chevron_right",page:b.currentPage+1,disabled:b.currentPage===b.totalPages})}}const _=Array.from(d.querySelectorAll("span")).find(L=>/total spending/i.test(L.textContent||"")),N=(z=_==null?void 0:_.parentElement)==null?void 0:z.querySelector("h2");if(N){const L=y.filter(D=>D.amount<0).reduce((D,ce)=>D+Math.abs(ce.amount),0);N.textContent=It(L)}},m=Array.from(d.querySelectorAll("select")).find(w=>Array.from(w.options).some(k=>(k.textContent||"").trim().toLowerCase()==="all categories"));if(m){const w=new Map;v.forEach(C=>{const _=String(C.category||"General").trim()||"General",N=_.toLowerCase();w.has(N)||w.set(N,_)});const k=Array.from(w.values()).sort((C,_)=>C.localeCompare(_));m.innerHTML=["All Categories",...k].map(C=>`<option>${rt(C)}</option>`).join(""),m.addEventListener("change",()=>{const C=(m.value||"All Categories").trim().toLowerCase();y=C==="all categories"?[...v]:v.filter(_=>String(_.category||"General").trim().toLowerCase()===C),b.currentPage=1,c()})}c()},u=(d,v,g)=>{/dashboard/i.test(v)&&o(d,g),/transactions/i.test(v)&&i(d,g)},h=(d,v)=>{if(!/dashboard/i.test(v)||d.getElementById("architect-csv-importer"))return;const g=d.querySelector("header .flex.items-center.gap-4")||d.querySelector("header .flex.items-center");if(!g)return;const y=d.createElement("input");y.type="file",y.accept=".csv,text/csv",y.style.display="none",y.id="architect-csv-file";const b=d.createElement("button");b.type="button",b.id="architect-csv-importer",b.className="bg-primary hover:bg-primary-container text-on-primary px-4 py-2 rounded-xl font-manrope text-sm font-semibold tracking-tight transition-all active:scale-95 duration-200 ease-in-out",b.textContent="Add CSV",b.addEventListener("click",()=>{y.click()}),y.addEventListener("change",async()=>{var w,k,C;const f=(w=y.files)==null?void 0:w[0];if(!f)return;const c=await f.text(),m=Ym(c);if(!m.length){(k=d.defaultView)==null||k.alert("Could not read CSV data. Expected headers like date, description, category, amount.");return}Jm(m),u(d,v,m),(C=d.defaultView)==null||C.alert(`Imported ${m.length} transactions from CSV.`),y.value=""}),g.insertBefore(b,g.firstChild),d.body.appendChild(y)},p=()=>{const d=n.current;if(!d||!d.contentDocument)return;d.__cleanupBridge&&d.__cleanupBridge();const v=d.contentDocument;l(v),s(v),h(v,e);const g=Km();u(v,e,g);const y=async b=>{var _;const f=b.target.closest("a, button, div");if(!f)return;const c=f.getAttribute("href"),m=(f.textContent||"").toLowerCase(),w=(((_=f.querySelector(".material-symbols-outlined"))==null?void 0:_.textContent)||"").toLowerCase(),k=`${m} ${w}`;if(/\blogout\b|\bsign out\b/.test(k)){b.preventDefault();const N=Wm();if(N)try{await Vm({refreshToken:N})}catch{}Qm(),r("/login");return}const C=a(k);C&&(c==="#"||f.tagName==="BUTTON"||f.tagName==="DIV")&&(b.preventDefault(),r(C))};v.addEventListener("click",y),d.__cleanupBridge=()=>v.removeEventListener("click",y)};return x.jsx("div",{className:"legacy-page",children:x.jsx("iframe",{ref:n,title:e,className:"legacy-iframe",srcDoc:t,sandbox:"allow-forms allow-modals allow-popups allow-same-origin allow-scripts",onLoad:p})})}function Zm(){const e=gr(),[t,n]=E.useState(""),[r,a]=E.useState(""),[l,s]=E.useState(!1),[o,i]=E.useState(!1),[u,h]=E.useState("");E.useEffect(()=>{document.title="Login | Expense Tracker React"},[]);const p=async d=>{var g,y;if(d.preventDefault(),o)return;const v=t.trim();h(""),i(!0);try{const b=await $m({email:v,password:r});sd({accessToken:b.access_token,refreshToken:b.refresh_token,fullName:(g=b.user)==null?void 0:g.full_name,email:(y=b.user)==null?void 0:y.email}),e("/dashboard-3")}catch(b){h(b.message||"Unable to sign in. Please try again.")}finally{i(!1)}};return x.jsxs("div",{className:"relative min-h-screen overflow-hidden bg-background px-6 py-12 font-body text-on-surface antialiased selection:bg-primary/30",children:[x.jsxs("div",{className:"absolute inset-0 z-0 overflow-hidden",children:[x.jsx("div",{className:"absolute left-[-10%] top-[-10%] h-[50%] w-[50%] rounded-full bg-primary/5 blur-[120px]"}),x.jsx("div",{className:"absolute bottom-[-10%] right-[-10%] h-[50%] w-[50%] rounded-full bg-tertiary/5 blur-[120px]"}),x.jsx("div",{className:"absolute inset-0 opacity-20 mix-blend-overlay",children:x.jsx("img",{alt:"Architectural skyscraper detail",className:"h-full w-full object-cover",src:"https://lh3.googleusercontent.com/aida-public/AB6AXuA48QYAS8tMiV2OzMwBUCVv_aK8pVacsNGqsvygBgyn7a9WjQng5iKgDlmVfDujUphsXgeqtGkprCVS4O1dfh1Yb6cKxn677incNxdlRsOcSYMSjr8-ZX6ohOeWOW5wCfS20Eferbxtj2munJJHb0mUv8twoNag7Y5nwVCtN-JvdQBlnW6DPkPMtZfUUgvC9eWMO933Pz_F-FM4UlOvloRWUAZVpsF8DdW04RwuJCTEYbXS0EKXJ7BaZ05prB0MUpuFYi25_0pMhxc"})})]}),x.jsx("main",{className:"relative z-10 mx-auto flex min-h-screen w-full max-w-md items-center justify-center",children:x.jsxs("div",{className:"w-full",children:[x.jsxs("div",{className:"glass-card rounded-xl border border-outline-variant/10 p-10 shadow-[0_40px_100px_rgba(0,0,0,0.4)] xl:p-12",children:[x.jsxs("div",{className:"mb-10 text-center",children:[x.jsx("div",{className:"mb-6 inline-flex items-center justify-center rounded-xl bg-surface-container-highest p-3",children:x.jsx("span",{className:"material-symbols-outlined text-3xl text-primary",children:"account_balance"})}),x.jsx("h1",{className:"mb-2 font-headline text-3xl font-black tracking-tight text-on-surface",children:"Architect"}),x.jsx("p",{className:"font-label text-sm font-medium uppercase tracking-widest text-on-surface-variant",children:"Wealth Management"})]}),x.jsxs("form",{className:"space-y-6",onSubmit:p,autoComplete:"off",children:[x.jsxs("div",{className:"space-y-2",children:[x.jsx("label",{className:"ml-1 block font-label text-xs font-semibold text-on-surface-variant",htmlFor:"email",children:"EMAIL ADDRESS"}),x.jsxs("div",{className:"group relative",children:[x.jsx("div",{className:"pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4",children:x.jsx("span",{className:"material-symbols-outlined text-lg text-on-surface-variant",children:"mail"})}),x.jsx("input",{id:"email",name:"login_email_field",type:"email",value:t,onChange:d=>n(d.target.value),autoComplete:"off",placeholder:"name@company.com",className:"block w-full rounded-xl border-none bg-surface-container-high py-4 pl-12 pr-4 text-on-surface placeholder:text-outline/50 transition-all duration-300 focus:ring-2 focus:ring-primary/20"})]})]}),x.jsxs("div",{className:"space-y-2",children:[x.jsxs("div",{className:"ml-1 flex items-center justify-between",children:[x.jsx("label",{className:"block font-label text-xs font-semibold text-on-surface-variant",htmlFor:"password",children:"PASSWORD"}),x.jsx("a",{className:"text-xs font-semibold text-primary transition-colors hover:text-primary-fixed",href:"#",children:"Forgot Password?"})]}),x.jsxs("div",{className:"group relative",children:[x.jsx("div",{className:"pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4",children:x.jsx("span",{className:"material-symbols-outlined text-lg text-on-surface-variant",children:"lock"})}),x.jsx("input",{id:"password",name:"login_password_field",type:l?"text":"password",value:r,onChange:d=>a(d.target.value),autoComplete:"new-password",placeholder:"••••••••",className:"block w-full rounded-xl border-none bg-surface-container-high py-4 pl-12 pr-12 text-on-surface placeholder:text-outline/50 transition-all duration-300 focus:ring-2 focus:ring-primary/20"}),x.jsx("button",{className:"absolute inset-y-0 right-0 flex items-center pr-4 text-on-surface-variant transition-colors hover:text-on-surface",type:"button",onClick:()=>s(d=>!d),"aria-label":l?"Hide password":"Show password",children:x.jsx("span",{className:"material-symbols-outlined text-lg",children:l?"visibility_off":"visibility"})})]})]}),x.jsx("div",{className:"pt-2",children:x.jsx("button",{className:"editorial-gradient w-full rounded-xl py-4 font-headline font-bold text-on-primary-fixed shadow-lg transition-all duration-200 hover:scale-[1.01] hover:shadow-primary/20 active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-70",type:"submit",disabled:o,children:o?"Signing in...":"Sign In"})}),u?x.jsx("p",{className:"text-sm text-error",children:u}):null]}),x.jsx("div",{className:"mt-10 text-center",children:x.jsxs("p",{className:"text-sm text-on-surface-variant",children:["New to Architect?"," ",x.jsx(oo,{className:"font-bold text-primary transition-colors hover:text-primary-fixed",to:"/signup",children:"Create your account"})]})})]}),x.jsxs("div",{className:"mt-8 flex justify-center space-x-6 text-xs font-label uppercase tracking-widest text-outline opacity-50",children:[x.jsx("a",{className:"transition-colors hover:text-on-surface",href:"#",children:"Privacy Policy"}),x.jsx("a",{className:"transition-colors hover:text-on-surface",href:"#",children:"Terms of Service"}),x.jsx("a",{className:"transition-colors hover:text-on-surface",href:"#",children:"System Status"})]})]})}),x.jsx("div",{className:"pointer-events-none fixed bottom-0 left-0 z-20 h-32 w-full bg-gradient-to-t from-background to-transparent"})]})}function eh(){const e=gr(),[t,n]=E.useState(""),[r,a]=E.useState(""),[l,s]=E.useState(""),[o,i]=E.useState(!1),[u,h]=E.useState("");E.useEffect(()=>{document.title="Sign Up | Expense Tracker React"},[]);const p=async d=>{if(d.preventDefault(),o)return;const v=t.trim(),g=r.trim();h(""),i(!0);try{await Bm({fullName:v,email:g,password:l}),sd({fullName:v,email:g}),e("/dashboard-3")}catch(y){h(y.message||"Unable to create account. Please try again.")}finally{i(!1)}};return x.jsxs("div",{className:"min-h-screen bg-background text-on-background selection:bg-primary-container selection:text-on-primary-container",children:[x.jsxs("header",{className:"fixed top-0 z-50 flex w-full items-center justify-between px-6 py-8",children:[x.jsxs("div",{className:"flex items-center gap-2",children:[x.jsx("div",{className:"flex h-8 w-8 items-center justify-center rounded-lg bg-primary",children:x.jsx("span",{className:"material-symbols-outlined text-xl text-on-primary",style:{fontVariationSettings:"'FILL' 1"},children:"architecture"})}),x.jsx("span",{className:"font-headline text-2xl font-bold tracking-tighter text-slate-50",children:"Architect"})]}),x.jsx("div",{children:x.jsx("a",{className:"font-label text-sm font-medium text-on-surface-variant transition-colors hover:text-primary",href:"#",children:"Help Center"})})]}),x.jsxs("main",{className:"relative flex flex-grow items-center justify-center overflow-hidden px-6 py-24",children:[x.jsx("div",{className:"pointer-events-none absolute right-[-5%] top-[-10%] h-[600px] w-[600px] rounded-full bg-primary/10 blur-[120px]"}),x.jsx("div",{className:"pointer-events-none absolute bottom-[-10%] left-[-5%] h-[500px] w-[500px] rounded-full bg-tertiary/5 blur-[100px]"}),x.jsxs("div",{className:"z-10 w-full max-w-[480px]",children:[x.jsxs("div",{className:"glass-panel rounded-xl p-8 shadow-2xl md:p-12",children:[x.jsxs("div",{className:"mb-10",children:[x.jsx("h1",{className:"mb-2 font-headline text-3xl font-extrabold tracking-tight text-on-surface",children:"Build your future."}),x.jsx("p",{className:"body-md text-on-surface-variant",children:"Secure wealth management for the modern era."})]}),x.jsxs("form",{className:"space-y-6",onSubmit:p,autoComplete:"off",children:[x.jsxs("div",{className:"space-y-2",children:[x.jsx("label",{className:"ml-1 block font-label text-xs font-semibold uppercase tracking-wider text-on-surface-variant",htmlFor:"full-name",children:"Full Name"}),x.jsxs("div",{className:"relative",children:[x.jsx("div",{className:"pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4",children:x.jsx("span",{className:"material-symbols-outlined text-lg text-outline",children:"person"})}),x.jsx("input",{id:"full-name",name:"signup_full_name_field",type:"text",value:t,onChange:d=>n(d.target.value),autoComplete:"off",placeholder:"Johnathan Sterling",className:"w-full rounded-xl border-none bg-surface-container-high py-4 pl-12 pr-4 font-body text-on-surface placeholder:text-outline-variant transition-all focus:ring-2 focus:ring-primary/20"})]})]}),x.jsxs("div",{className:"space-y-2",children:[x.jsx("label",{className:"ml-1 block font-label text-xs font-semibold uppercase tracking-wider text-on-surface-variant",htmlFor:"email",children:"Email Address"}),x.jsxs("div",{className:"relative",children:[x.jsx("div",{className:"pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4",children:x.jsx("span",{className:"material-symbols-outlined text-lg text-outline",children:"mail"})}),x.jsx("input",{id:"email",name:"signup_email_field",type:"email",value:r,onChange:d=>a(d.target.value),autoComplete:"off",placeholder:"john@architect.com",className:"w-full rounded-xl border-none bg-surface-container-high py-4 pl-12 pr-4 font-body text-on-surface placeholder:text-outline-variant transition-all focus:ring-2 focus:ring-primary/20"})]})]}),x.jsxs("div",{className:"space-y-2",children:[x.jsx("label",{className:"ml-1 block font-label text-xs font-semibold uppercase tracking-wider text-on-surface-variant",htmlFor:"password",children:"Password"}),x.jsxs("div",{className:"relative",children:[x.jsx("div",{className:"pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4",children:x.jsx("span",{className:"material-symbols-outlined text-lg text-outline",children:"lock"})}),x.jsx("input",{id:"password",name:"signup_password_field",type:"password",value:l,onChange:d=>s(d.target.value),autoComplete:"new-password",placeholder:"••••••••••••",className:"w-full rounded-xl border-none bg-surface-container-high py-4 pl-12 pr-4 font-body text-on-surface placeholder:text-outline-variant transition-all focus:ring-2 focus:ring-primary/20"})]})]}),x.jsx("div",{className:"pt-2",children:x.jsx("button",{className:"bg-architect-gradient w-full rounded-xl py-4 font-headline text-lg font-bold text-slate-50 shadow-lg shadow-primary/10 transition-all hover:opacity-90 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-70",type:"submit",disabled:o,children:o?"Creating account...":"Create Account"})}),u?x.jsx("p",{className:"text-sm text-error",children:u}):null]}),x.jsxs("p",{className:"mt-10 text-center font-body text-sm text-on-surface-variant",children:["Already have an account?"," ",x.jsx(oo,{className:"ml-1 font-bold text-primary hover:underline",to:"/login",children:"Sign in"})]})]}),x.jsxs("div",{className:"mt-8 flex items-center justify-center gap-6 opacity-40",children:[x.jsxs("div",{className:"flex items-center gap-2",children:[x.jsx("span",{className:"material-symbols-outlined text-sm",children:"security"}),x.jsx("span",{className:"text-[10px] font-bold uppercase tracking-tighter",children:"Bank-Grade Encryption"})]}),x.jsxs("div",{className:"flex items-center gap-2",children:[x.jsx("span",{className:"material-symbols-outlined text-sm",children:"verified_user"}),x.jsx("span",{className:"text-[10px] font-bold uppercase tracking-tighter",children:"SIPC Protected"})]})]})]})]}),x.jsxs("footer",{className:"mt-auto flex w-full flex-col items-center gap-4 bg-slate-950 py-8 text-center",children:[x.jsx("p",{className:"font-inter text-xs uppercase tracking-wide text-slate-500",children:"© 2024 Architect Financial. Structural Serenity."}),x.jsxs("div",{className:"flex gap-6",children:[x.jsx("a",{className:"font-inter text-xs uppercase tracking-wide text-slate-500 transition-colors hover:text-slate-300",href:"#",children:"Terms"}),x.jsx("a",{className:"font-inter text-xs uppercase tracking-wide text-slate-500 transition-colors hover:text-slate-300",href:"#",children:"Privacy"}),x.jsx("a",{className:"font-inter text-xs uppercase tracking-wide text-slate-500 transition-colors hover:text-slate-300",href:"#",children:"Security"})]})]})]})}const th="architectImportedCsvRows",Mi=["#a8b7ec","#d8bceb","#fb9b43","#6dd3ce","#f07178","#63b3ed","#f6e05e","#68d391","#f687b3","#9f7aea","#4fd1c5","#fc8181"];function nh(){try{const e=localStorage.getItem(th),t=JSON.parse(e||"[]");return Array.isArray(t)?t:[]}catch{return[]}}function Ii(e){const t=Number.isFinite(e)?e:0;return new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(t)}function rh(e){const t=new Map;e.forEach(a=>{const l=Number(a==null?void 0:a.amount)||0;if(l>=0)return;const s=String((a==null?void 0:a.category)||"General").trim()||"General",o=t.get(s)||0;t.set(s,o+Math.abs(l))});const n=Array.from(t.entries()).map(([a,l])=>({category:a,spent:l})).sort((a,l)=>l.spent-a.spent),r=n.reduce((a,l)=>a+l.spent,0);return{categories:n,totalSpent:r}}function ah(){const[e,t]=E.useState(null),n=nh(),{categories:r,totalSpent:a}=rh(n),l=44,s=18,o=2*Math.PI*l;let i=0;const u=r.map((p,d)=>{const v=a>0?p.spent/a:0,g=v*o,y={...p,color:Mi[d%Mi.length],percent:v*100,dashArray:`${g.toFixed(2)} ${(o-g).toFixed(2)}`,dashOffset:`${(-i).toFixed(2)}`};return i+=g,y}),h=u.find(p=>p.category===e)||null;return x.jsx("div",{className:"min-h-screen bg-background px-6 py-8 text-on-surface",children:x.jsxs("div",{className:"mx-auto w-full max-w-6xl",children:[x.jsxs("div",{className:"mb-8 flex items-center justify-between",children:[x.jsxs("div",{children:[x.jsx("p",{className:"text-xs font-bold uppercase tracking-[0.2em] text-on-surface-variant",children:"CSV Expense Insights"}),x.jsx("h1",{className:"mt-2 text-4xl font-black",children:"Full Spending Report"})]}),x.jsx(oo,{className:"rounded-xl bg-surface-container-high px-4 py-2 text-sm font-semibold text-on-surface transition-colors hover:bg-surface-container-highest",to:"/dashboard-3",children:"Back to Dashboard"})]}),u.length?x.jsxs("div",{className:"grid gap-6 lg:grid-cols-[380px,1fr]",children:[x.jsxs("div",{className:"rounded-3xl bg-surface-container p-6",children:[x.jsx("h2",{className:"text-xl font-bold",children:"All Expense Categories"}),x.jsxs("div",{className:"relative mx-auto mt-6 h-72 w-72",children:[x.jsx("svg",{className:"h-full w-full -rotate-90",viewBox:"0 0 120 120",children:u.map(p=>{const d=(h==null?void 0:h.category)===p.category,v=!!h&&!d;return x.jsx("circle",{cx:"60",cy:"60",r:l,fill:"transparent",stroke:p.color,strokeWidth:d?s+4:s,strokeDasharray:p.dashArray,strokeDashoffset:p.dashOffset,style:{opacity:v?.35:1,cursor:"pointer",transition:"opacity 180ms ease, stroke-width 180ms ease"},onMouseEnter:()=>t(p.category),onMouseLeave:()=>t(null)},p.category)})}),x.jsxs("div",{className:"absolute inset-0 flex flex-col items-center justify-center text-center",children:[x.jsx("p",{className:"text-xs font-bold uppercase tracking-[0.2em] text-on-surface-variant",children:h?h.category:"Total Expenses"}),x.jsx("p",{className:"mt-1 text-3xl font-black",children:Ii(h?h.spent:a)}),x.jsx("p",{className:"mt-1 text-xs text-on-surface-variant",children:h?`${h.percent.toFixed(2)}% of total`:`${u.length} categories`})]})]})]}),x.jsxs("div",{className:"rounded-3xl bg-surface-container p-6",children:[x.jsx("h2",{className:"text-xl font-bold",children:"Category Breakdown"}),x.jsx("div",{className:"mt-4 space-y-3",children:u.map(p=>{const d=(h==null?void 0:h.category)===p.category;return x.jsxs("div",{className:`flex items-center justify-between rounded-xl p-4 transition-all duration-200 ${d?"bg-surface-container-highest ring-1 ring-primary/35":"bg-surface-container-high hover:bg-surface-container-highest"}`,onMouseEnter:()=>t(p.category),onMouseLeave:()=>t(null),role:"button",tabIndex:0,onFocus:()=>t(p.category),onBlur:()=>t(null),children:[x.jsxs("div",{className:"flex items-center gap-3",children:[x.jsx("span",{className:"h-3 w-3 rounded-full",style:{backgroundColor:p.color,boxShadow:d?`0 0 0 6px ${p.color}33`:"none"}}),x.jsx("span",{className:"font-semibold",children:p.category})]}),x.jsxs("div",{className:"text-right",children:[x.jsx("p",{className:"font-bold",children:Ii(p.spent)}),x.jsxs("p",{className:"text-xs text-on-surface-variant",children:[p.percent.toFixed(2),"%"]})]})]},p.category)})})]})]}):x.jsxs("div",{className:"rounded-2xl bg-surface-container p-8",children:[x.jsx("h2",{className:"text-2xl font-bold",children:"No Expense Data Found"}),x.jsx("p",{className:"mt-3 text-on-surface-variant",children:"Upload a CSV from dashboard using Add CSV to generate this report."})]})]})})}const lh=`<!DOCTYPE html>\r
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
</body></html>`,sh=`<!DOCTYPE html>\r
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
</body></html>`,oh=`<!DOCTYPE html>\r
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
</body></html>`,ih=`<!DOCTYPE html>\r
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
</body></html>`,uh=`<!DOCTYPE html>\r
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
</body></html>`,ch=`<!DOCTYPE html>\r
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
</body></html>`,dh=e=>e.replace(/\sdata-alt="[^"]*"/g,"").replace(/\sdata-icon="[^"]*"/g,""),Yt=(e,t)=>({title:e,html:dh(t)}),fh={"/dashboard-3":Yt("Dashboard 3",ih),"/add-expense":Yt("Add Expense",lh),"/add-expense-fixed-layout":Yt("Add Expense Fixed Layout",sh),"/budgets-categories":Yt("Budgets & Categories",oh),"/settings":Yt("Settings",uh),"/transactions-list":Yt("Transactions",ch)};function Ai({children:e}){return fo()?e:x.jsx(ba,{to:"/login",replace:!0})}function Ri({children:e}){return fo()?x.jsx(ba,{to:"/dashboard-3",replace:!0}):e}function ph(){const e=En(),[t,n]=E.useState(!1),r=E.useRef(!0);return E.useEffect(()=>{if(r.current){r.current=!1;return}n(!0);const a=setTimeout(()=>{n(!1)},550);return()=>clearTimeout(a)},[e.pathname]),x.jsxs(x.Fragment,{children:[t?x.jsx("div",{className:"route-loader-overlay",role:"status","aria-live":"polite","aria-label":"Loading next page",children:x.jsxs("div",{className:"route-loader-card",children:[x.jsx("div",{className:"route-loader-spinner"}),x.jsx("p",{className:"route-loader-text",children:"Loading workspace..."})]})}):null,x.jsxs(Pm,{children:[x.jsx(Mt,{path:"/",element:x.jsx(ba,{to:fo()?"/dashboard-3":"/login",replace:!0})}),x.jsx(Mt,{path:"/login",element:x.jsx(Ri,{children:x.jsx(Zm,{})})}),x.jsx(Mt,{path:"/signup",element:x.jsx(Ri,{children:x.jsx(eh,{})})}),x.jsx(Mt,{path:"/spending-report",element:x.jsx(Ai,{children:x.jsx(ah,{})})}),Object.entries(fh).map(([a,l])=>x.jsx(Mt,{path:a,element:x.jsx(Ai,{children:x.jsx(qm,{title:l.title,html:l.html})})},a)),x.jsx(Mt,{path:"*",element:x.jsx(ba,{to:"/login",replace:!0})})]})]})}fl.createRoot(document.getElementById("root")).render(x.jsx(Qi.StrictMode,{children:x.jsx(zm,{children:x.jsx(ph,{})})}));
