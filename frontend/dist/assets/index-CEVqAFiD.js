function Yc(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const a in r)if(a!=="default"&&!(a in e)){const l=Object.getOwnPropertyDescriptor(r,a);l&&Object.defineProperty(e,a,l.get?l:{enumerable:!0,get:()=>r[a]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const s of l.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(a){if(a.ep)return;a.ep=!0;const l=n(a);fetch(a.href,l)}})();function Kc(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var So={exports:{}},ma={},_o={exports:{}},z={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sr=Symbol.for("react.element"),Xc=Symbol.for("react.portal"),Jc=Symbol.for("react.fragment"),Gc=Symbol.for("react.strict_mode"),Zc=Symbol.for("react.profiler"),qc=Symbol.for("react.provider"),ed=Symbol.for("react.context"),td=Symbol.for("react.forward_ref"),nd=Symbol.for("react.suspense"),rd=Symbol.for("react.memo"),ad=Symbol.for("react.lazy"),ri=Symbol.iterator;function ld(e){return e===null||typeof e!="object"?null:(e=ri&&e[ri]||e["@@iterator"],typeof e=="function"?e:null)}var Eo={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Co=Object.assign,No={};function fn(e,t,n){this.props=e,this.context=t,this.refs=No,this.updater=n||Eo}fn.prototype.isReactComponent={};fn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};fn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function jo(){}jo.prototype=fn.prototype;function rs(e,t,n){this.props=e,this.context=t,this.refs=No,this.updater=n||Eo}var as=rs.prototype=new jo;as.constructor=rs;Co(as,fn.prototype);as.isPureReactComponent=!0;var ai=Array.isArray,Lo=Object.prototype.hasOwnProperty,ls={current:null},Po={key:!0,ref:!0,__self:!0,__source:!0};function To(e,t,n){var r,a={},l=null,s=null;if(t!=null)for(r in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(l=""+t.key),t)Lo.call(t,r)&&!Po.hasOwnProperty(r)&&(a[r]=t[r]);var o=arguments.length-2;if(o===1)a.children=n;else if(1<o){for(var i=Array(o),u=0;u<o;u++)i[u]=arguments[u+2];a.children=i}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)a[r]===void 0&&(a[r]=o[r]);return{$$typeof:sr,type:e,key:l,ref:s,props:a,_owner:ls.current}}function sd(e,t){return{$$typeof:sr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function ss(e){return typeof e=="object"&&e!==null&&e.$$typeof===sr}function id(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var li=/\/+/g;function Ia(e,t){return typeof e=="object"&&e!==null&&e.key!=null?id(""+e.key):t.toString(36)}function Tr(e,t,n,r,a){var l=typeof e;(l==="undefined"||l==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(l){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case sr:case Xc:s=!0}}if(s)return s=e,a=a(s),e=r===""?"."+Ia(s,0):r,ai(a)?(n="",e!=null&&(n=e.replace(li,"$&/")+"/"),Tr(a,t,n,"",function(u){return u})):a!=null&&(ss(a)&&(a=sd(a,n+(!a.key||s&&s.key===a.key?"":(""+a.key).replace(li,"$&/")+"/")+e)),t.push(a)),1;if(s=0,r=r===""?".":r+":",ai(e))for(var o=0;o<e.length;o++){l=e[o];var i=r+Ia(l,o);s+=Tr(l,t,n,i,a)}else if(i=ld(e),typeof i=="function")for(e=i.call(e),o=0;!(l=e.next()).done;)l=l.value,i=r+Ia(l,o++),s+=Tr(l,t,n,i,a);else if(l==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function mr(e,t,n){if(e==null)return e;var r=[],a=0;return Tr(e,r,"","",function(l){return t.call(n,l,a++)}),r}function od(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ue={current:null},zr={transition:null},ud={ReactCurrentDispatcher:ue,ReactCurrentBatchConfig:zr,ReactCurrentOwner:ls};function zo(){throw Error("act(...) is not supported in production builds of React.")}z.Children={map:mr,forEach:function(e,t,n){mr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return mr(e,function(){t++}),t},toArray:function(e){return mr(e,function(t){return t})||[]},only:function(e){if(!ss(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};z.Component=fn;z.Fragment=Jc;z.Profiler=Zc;z.PureComponent=rs;z.StrictMode=Gc;z.Suspense=nd;z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ud;z.act=zo;z.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Co({},e.props),a=e.key,l=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(l=t.ref,s=ls.current),t.key!==void 0&&(a=""+t.key),e.type&&e.type.defaultProps)var o=e.type.defaultProps;for(i in t)Lo.call(t,i)&&!Po.hasOwnProperty(i)&&(r[i]=t[i]===void 0&&o!==void 0?o[i]:t[i])}var i=arguments.length-2;if(i===1)r.children=n;else if(1<i){o=Array(i);for(var u=0;u<i;u++)o[u]=arguments[u+2];r.children=o}return{$$typeof:sr,type:e.type,key:a,ref:l,props:r,_owner:s}};z.createContext=function(e){return e={$$typeof:ed,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:qc,_context:e},e.Consumer=e};z.createElement=To;z.createFactory=function(e){var t=To.bind(null,e);return t.type=e,t};z.createRef=function(){return{current:null}};z.forwardRef=function(e){return{$$typeof:td,render:e}};z.isValidElement=ss;z.lazy=function(e){return{$$typeof:ad,_payload:{_status:-1,_result:e},_init:od}};z.memo=function(e,t){return{$$typeof:rd,type:e,compare:t===void 0?null:t}};z.startTransition=function(e){var t=zr.transition;zr.transition={};try{e()}finally{zr.transition=t}};z.unstable_act=zo;z.useCallback=function(e,t){return ue.current.useCallback(e,t)};z.useContext=function(e){return ue.current.useContext(e)};z.useDebugValue=function(){};z.useDeferredValue=function(e){return ue.current.useDeferredValue(e)};z.useEffect=function(e,t){return ue.current.useEffect(e,t)};z.useId=function(){return ue.current.useId()};z.useImperativeHandle=function(e,t,n){return ue.current.useImperativeHandle(e,t,n)};z.useInsertionEffect=function(e,t){return ue.current.useInsertionEffect(e,t)};z.useLayoutEffect=function(e,t){return ue.current.useLayoutEffect(e,t)};z.useMemo=function(e,t){return ue.current.useMemo(e,t)};z.useReducer=function(e,t,n){return ue.current.useReducer(e,t,n)};z.useRef=function(e){return ue.current.useRef(e)};z.useState=function(e){return ue.current.useState(e)};z.useSyncExternalStore=function(e,t,n){return ue.current.useSyncExternalStore(e,t,n)};z.useTransition=function(){return ue.current.useTransition()};z.version="18.3.1";_o.exports=z;var k=_o.exports;const Mo=Kc(k),cd=Yc({__proto__:null,default:Mo},[k]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dd=k,fd=Symbol.for("react.element"),pd=Symbol.for("react.fragment"),md=Object.prototype.hasOwnProperty,hd=dd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,vd={key:!0,ref:!0,__self:!0,__source:!0};function Io(e,t,n){var r,a={},l=null,s=null;n!==void 0&&(l=""+n),t.key!==void 0&&(l=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)md.call(t,r)&&!vd.hasOwnProperty(r)&&(a[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)a[r]===void 0&&(a[r]=t[r]);return{$$typeof:fd,type:e,key:l,ref:s,props:a,_owner:hd.current}}ma.Fragment=pd;ma.jsx=Io;ma.jsxs=Io;So.exports=ma;var v=So.exports,il={},Ro={exports:{}},be={},Fo={exports:{}},Oo={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(C,P){var T=C.length;C.push(P);e:for(;0<T;){var $=T-1>>>1,G=C[$];if(0<a(G,P))C[$]=P,C[T]=G,T=$;else break e}}function n(C){return C.length===0?null:C[0]}function r(C){if(C.length===0)return null;var P=C[0],T=C.pop();if(T!==P){C[0]=T;e:for(var $=0,G=C.length,fr=G>>>1;$<fr;){var wt=2*($+1)-1,Ma=C[wt],kt=wt+1,pr=C[kt];if(0>a(Ma,T))kt<G&&0>a(pr,Ma)?(C[$]=pr,C[kt]=T,$=kt):(C[$]=Ma,C[wt]=T,$=wt);else if(kt<G&&0>a(pr,T))C[$]=pr,C[kt]=T,$=kt;else break e}}return P}function a(C,P){var T=C.sortIndex-P.sortIndex;return T!==0?T:C.id-P.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;e.unstable_now=function(){return l.now()}}else{var s=Date,o=s.now();e.unstable_now=function(){return s.now()-o}}var i=[],u=[],h=1,f=null,m=3,g=!1,y=!1,b=!1,_=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(C){for(var P=n(u);P!==null;){if(P.callback===null)r(u);else if(P.startTime<=C)r(u),P.sortIndex=P.expirationTime,t(i,P);else break;P=n(u)}}function x(C){if(b=!1,p(C),!y)if(n(i)!==null)y=!0,Ta(S);else{var P=n(u);P!==null&&za(x,P.startTime-C)}}function S(C,P){y=!1,b&&(b=!1,d(L),L=-1),g=!0;var T=m;try{for(p(P),f=n(i);f!==null&&(!(f.expirationTime>P)||C&&!je());){var $=f.callback;if(typeof $=="function"){f.callback=null,m=f.priorityLevel;var G=$(f.expirationTime<=P);P=e.unstable_now(),typeof G=="function"?f.callback=G:f===n(i)&&r(i),p(P)}else r(i);f=n(i)}if(f!==null)var fr=!0;else{var wt=n(u);wt!==null&&za(x,wt.startTime-P),fr=!1}return fr}finally{f=null,m=T,g=!1}}var N=!1,j=null,L=-1,H=5,M=-1;function je(){return!(e.unstable_now()-M<H)}function gn(){if(j!==null){var C=e.unstable_now();M=C;var P=!0;try{P=j(!0,C)}finally{P?yn():(N=!1,j=null)}}else N=!1}var yn;if(typeof c=="function")yn=function(){c(gn)};else if(typeof MessageChannel<"u"){var ni=new MessageChannel,Qc=ni.port2;ni.port1.onmessage=gn,yn=function(){Qc.postMessage(null)}}else yn=function(){_(gn,0)};function Ta(C){j=C,N||(N=!0,yn())}function za(C,P){L=_(function(){C(e.unstable_now())},P)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(C){C.callback=null},e.unstable_continueExecution=function(){y||g||(y=!0,Ta(S))},e.unstable_forceFrameRate=function(C){0>C||125<C?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):H=0<C?Math.floor(1e3/C):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return n(i)},e.unstable_next=function(C){switch(m){case 1:case 2:case 3:var P=3;break;default:P=m}var T=m;m=P;try{return C()}finally{m=T}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(C,P){switch(C){case 1:case 2:case 3:case 4:case 5:break;default:C=3}var T=m;m=C;try{return P()}finally{m=T}},e.unstable_scheduleCallback=function(C,P,T){var $=e.unstable_now();switch(typeof T=="object"&&T!==null?(T=T.delay,T=typeof T=="number"&&0<T?$+T:$):T=$,C){case 1:var G=-1;break;case 2:G=250;break;case 5:G=1073741823;break;case 4:G=1e4;break;default:G=5e3}return G=T+G,C={id:h++,callback:P,priorityLevel:C,startTime:T,expirationTime:G,sortIndex:-1},T>$?(C.sortIndex=T,t(u,C),n(i)===null&&C===n(u)&&(b?(d(L),L=-1):b=!0,za(x,T-$))):(C.sortIndex=G,t(i,C),y||g||(y=!0,Ta(S))),C},e.unstable_shouldYield=je,e.unstable_wrapCallback=function(C){var P=m;return function(){var T=m;m=P;try{return C.apply(this,arguments)}finally{m=T}}}})(Oo);Fo.exports=Oo;var xd=Fo.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gd=k,ye=xd;function w(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Ao=new Set,Bn={};function Rt(e,t){an(e,t),an(e+"Capture",t)}function an(e,t){for(Bn[e]=t,e=0;e<t.length;e++)Ao.add(t[e])}var Qe=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ol=Object.prototype.hasOwnProperty,yd=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,si={},ii={};function bd(e){return ol.call(ii,e)?!0:ol.call(si,e)?!1:yd.test(e)?ii[e]=!0:(si[e]=!0,!1)}function wd(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function kd(e,t,n,r){if(t===null||typeof t>"u"||wd(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ce(e,t,n,r,a,l,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=a,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=l,this.removeEmptyString=s}var ne={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ne[e]=new ce(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ne[t]=new ce(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ne[e]=new ce(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ne[e]=new ce(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ne[e]=new ce(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ne[e]=new ce(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ne[e]=new ce(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ne[e]=new ce(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ne[e]=new ce(e,5,!1,e.toLowerCase(),null,!1,!1)});var is=/[\-:]([a-z])/g;function os(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(is,os);ne[t]=new ce(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(is,os);ne[t]=new ce(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(is,os);ne[t]=new ce(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ne[e]=new ce(e,1,!1,e.toLowerCase(),null,!1,!1)});ne.xlinkHref=new ce("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ne[e]=new ce(e,1,!1,e.toLowerCase(),null,!0,!0)});function us(e,t,n,r){var a=ne.hasOwnProperty(t)?ne[t]:null;(a!==null?a.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(kd(t,n,a,r)&&(n=null),r||a===null?bd(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):a.mustUseProperty?e[a.propertyName]=n===null?a.type===3?!1:"":n:(t=a.attributeName,r=a.attributeNamespace,n===null?e.removeAttribute(t):(a=a.type,n=a===3||a===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Je=gd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,hr=Symbol.for("react.element"),Ut=Symbol.for("react.portal"),Bt=Symbol.for("react.fragment"),cs=Symbol.for("react.strict_mode"),ul=Symbol.for("react.profiler"),Do=Symbol.for("react.provider"),Uo=Symbol.for("react.context"),ds=Symbol.for("react.forward_ref"),cl=Symbol.for("react.suspense"),dl=Symbol.for("react.suspense_list"),fs=Symbol.for("react.memo"),Ze=Symbol.for("react.lazy"),Bo=Symbol.for("react.offscreen"),oi=Symbol.iterator;function bn(e){return e===null||typeof e!="object"?null:(e=oi&&e[oi]||e["@@iterator"],typeof e=="function"?e:null)}var W=Object.assign,Ra;function jn(e){if(Ra===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Ra=t&&t[1]||""}return`
`+Ra+e}var Fa=!1;function Oa(e,t){if(!e||Fa)return"";Fa=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var a=u.stack.split(`
`),l=r.stack.split(`
`),s=a.length-1,o=l.length-1;1<=s&&0<=o&&a[s]!==l[o];)o--;for(;1<=s&&0<=o;s--,o--)if(a[s]!==l[o]){if(s!==1||o!==1)do if(s--,o--,0>o||a[s]!==l[o]){var i=`
`+a[s].replace(" at new "," at ");return e.displayName&&i.includes("<anonymous>")&&(i=i.replace("<anonymous>",e.displayName)),i}while(1<=s&&0<=o);break}}}finally{Fa=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?jn(e):""}function Sd(e){switch(e.tag){case 5:return jn(e.type);case 16:return jn("Lazy");case 13:return jn("Suspense");case 19:return jn("SuspenseList");case 0:case 2:case 15:return e=Oa(e.type,!1),e;case 11:return e=Oa(e.type.render,!1),e;case 1:return e=Oa(e.type,!0),e;default:return""}}function fl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Bt:return"Fragment";case Ut:return"Portal";case ul:return"Profiler";case cs:return"StrictMode";case cl:return"Suspense";case dl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Uo:return(e.displayName||"Context")+".Consumer";case Do:return(e._context.displayName||"Context")+".Provider";case ds:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case fs:return t=e.displayName||null,t!==null?t:fl(e.type)||"Memo";case Ze:t=e._payload,e=e._init;try{return fl(e(t))}catch{}}return null}function _d(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return fl(t);case 8:return t===cs?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function mt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Wo(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Ed(e){var t=Wo(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var a=n.get,l=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(s){r=""+s,l.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function vr(e){e._valueTracker||(e._valueTracker=Ed(e))}function Vo(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Wo(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Vr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function pl(e,t){var n=t.checked;return W({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function ui(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=mt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Ho(e,t){t=t.checked,t!=null&&us(e,"checked",t,!1)}function ml(e,t){Ho(e,t);var n=mt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?hl(e,t.type,n):t.hasOwnProperty("defaultValue")&&hl(e,t.type,mt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function ci(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function hl(e,t,n){(t!=="number"||Vr(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Ln=Array.isArray;function Zt(e,t,n,r){if(e=e.options,t){t={};for(var a=0;a<n.length;a++)t["$"+n[a]]=!0;for(n=0;n<e.length;n++)a=t.hasOwnProperty("$"+e[n].value),e[n].selected!==a&&(e[n].selected=a),a&&r&&(e[n].defaultSelected=!0)}else{for(n=""+mt(n),t=null,a=0;a<e.length;a++){if(e[a].value===n){e[a].selected=!0,r&&(e[a].defaultSelected=!0);return}t!==null||e[a].disabled||(t=e[a])}t!==null&&(t.selected=!0)}}function vl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(w(91));return W({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function di(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(w(92));if(Ln(n)){if(1<n.length)throw Error(w(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:mt(n)}}function $o(e,t){var n=mt(t.value),r=mt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function fi(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Qo(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function xl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Qo(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var xr,Yo=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,a){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,a)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(xr=xr||document.createElement("div"),xr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=xr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Wn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var zn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Cd=["Webkit","ms","Moz","O"];Object.keys(zn).forEach(function(e){Cd.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),zn[t]=zn[e]})});function Ko(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||zn.hasOwnProperty(e)&&zn[e]?(""+t).trim():t+"px"}function Xo(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,a=Ko(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,a):e[n]=a}}var Nd=W({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function gl(e,t){if(t){if(Nd[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(w(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(w(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(w(61))}if(t.style!=null&&typeof t.style!="object")throw Error(w(62))}}function yl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var bl=null;function ps(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var wl=null,qt=null,en=null;function pi(e){if(e=ur(e)){if(typeof wl!="function")throw Error(w(280));var t=e.stateNode;t&&(t=ya(t),wl(e.stateNode,e.type,t))}}function Jo(e){qt?en?en.push(e):en=[e]:qt=e}function Go(){if(qt){var e=qt,t=en;if(en=qt=null,pi(e),t)for(e=0;e<t.length;e++)pi(t[e])}}function Zo(e,t){return e(t)}function qo(){}var Aa=!1;function eu(e,t,n){if(Aa)return e(t,n);Aa=!0;try{return Zo(e,t,n)}finally{Aa=!1,(qt!==null||en!==null)&&(qo(),Go())}}function Vn(e,t){var n=e.stateNode;if(n===null)return null;var r=ya(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(w(231,t,typeof n));return n}var kl=!1;if(Qe)try{var wn={};Object.defineProperty(wn,"passive",{get:function(){kl=!0}}),window.addEventListener("test",wn,wn),window.removeEventListener("test",wn,wn)}catch{kl=!1}function jd(e,t,n,r,a,l,s,o,i){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(h){this.onError(h)}}var Mn=!1,Hr=null,$r=!1,Sl=null,Ld={onError:function(e){Mn=!0,Hr=e}};function Pd(e,t,n,r,a,l,s,o,i){Mn=!1,Hr=null,jd.apply(Ld,arguments)}function Td(e,t,n,r,a,l,s,o,i){if(Pd.apply(this,arguments),Mn){if(Mn){var u=Hr;Mn=!1,Hr=null}else throw Error(w(198));$r||($r=!0,Sl=u)}}function Ft(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function tu(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function mi(e){if(Ft(e)!==e)throw Error(w(188))}function zd(e){var t=e.alternate;if(!t){if(t=Ft(e),t===null)throw Error(w(188));return t!==e?null:e}for(var n=e,r=t;;){var a=n.return;if(a===null)break;var l=a.alternate;if(l===null){if(r=a.return,r!==null){n=r;continue}break}if(a.child===l.child){for(l=a.child;l;){if(l===n)return mi(a),e;if(l===r)return mi(a),t;l=l.sibling}throw Error(w(188))}if(n.return!==r.return)n=a,r=l;else{for(var s=!1,o=a.child;o;){if(o===n){s=!0,n=a,r=l;break}if(o===r){s=!0,r=a,n=l;break}o=o.sibling}if(!s){for(o=l.child;o;){if(o===n){s=!0,n=l,r=a;break}if(o===r){s=!0,r=l,n=a;break}o=o.sibling}if(!s)throw Error(w(189))}}if(n.alternate!==r)throw Error(w(190))}if(n.tag!==3)throw Error(w(188));return n.stateNode.current===n?e:t}function nu(e){return e=zd(e),e!==null?ru(e):null}function ru(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=ru(e);if(t!==null)return t;e=e.sibling}return null}var au=ye.unstable_scheduleCallback,hi=ye.unstable_cancelCallback,Md=ye.unstable_shouldYield,Id=ye.unstable_requestPaint,Q=ye.unstable_now,Rd=ye.unstable_getCurrentPriorityLevel,ms=ye.unstable_ImmediatePriority,lu=ye.unstable_UserBlockingPriority,Qr=ye.unstable_NormalPriority,Fd=ye.unstable_LowPriority,su=ye.unstable_IdlePriority,ha=null,De=null;function Od(e){if(De&&typeof De.onCommitFiberRoot=="function")try{De.onCommitFiberRoot(ha,e,void 0,(e.current.flags&128)===128)}catch{}}var Me=Math.clz32?Math.clz32:Ud,Ad=Math.log,Dd=Math.LN2;function Ud(e){return e>>>=0,e===0?32:31-(Ad(e)/Dd|0)|0}var gr=64,yr=4194304;function Pn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Yr(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,a=e.suspendedLanes,l=e.pingedLanes,s=n&268435455;if(s!==0){var o=s&~a;o!==0?r=Pn(o):(l&=s,l!==0&&(r=Pn(l)))}else s=n&~a,s!==0?r=Pn(s):l!==0&&(r=Pn(l));if(r===0)return 0;if(t!==0&&t!==r&&!(t&a)&&(a=r&-r,l=t&-t,a>=l||a===16&&(l&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Me(t),a=1<<n,r|=e[n],t&=~a;return r}function Bd(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Wd(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,a=e.expirationTimes,l=e.pendingLanes;0<l;){var s=31-Me(l),o=1<<s,i=a[s];i===-1?(!(o&n)||o&r)&&(a[s]=Bd(o,t)):i<=t&&(e.expiredLanes|=o),l&=~o}}function _l(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function iu(){var e=gr;return gr<<=1,!(gr&4194240)&&(gr=64),e}function Da(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function ir(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Me(t),e[t]=n}function Vd(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var a=31-Me(n),l=1<<a;t[a]=0,r[a]=-1,e[a]=-1,n&=~l}}function hs(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Me(n),a=1<<r;a&t|e[r]&t&&(e[r]|=t),n&=~a}}var R=0;function ou(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var uu,vs,cu,du,fu,El=!1,br=[],lt=null,st=null,it=null,Hn=new Map,$n=new Map,et=[],Hd="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function vi(e,t){switch(e){case"focusin":case"focusout":lt=null;break;case"dragenter":case"dragleave":st=null;break;case"mouseover":case"mouseout":it=null;break;case"pointerover":case"pointerout":Hn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":$n.delete(t.pointerId)}}function kn(e,t,n,r,a,l){return e===null||e.nativeEvent!==l?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:l,targetContainers:[a]},t!==null&&(t=ur(t),t!==null&&vs(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,a!==null&&t.indexOf(a)===-1&&t.push(a),e)}function $d(e,t,n,r,a){switch(t){case"focusin":return lt=kn(lt,e,t,n,r,a),!0;case"dragenter":return st=kn(st,e,t,n,r,a),!0;case"mouseover":return it=kn(it,e,t,n,r,a),!0;case"pointerover":var l=a.pointerId;return Hn.set(l,kn(Hn.get(l)||null,e,t,n,r,a)),!0;case"gotpointercapture":return l=a.pointerId,$n.set(l,kn($n.get(l)||null,e,t,n,r,a)),!0}return!1}function pu(e){var t=Et(e.target);if(t!==null){var n=Ft(t);if(n!==null){if(t=n.tag,t===13){if(t=tu(n),t!==null){e.blockedOn=t,fu(e.priority,function(){cu(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Mr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Cl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);bl=r,n.target.dispatchEvent(r),bl=null}else return t=ur(n),t!==null&&vs(t),e.blockedOn=n,!1;t.shift()}return!0}function xi(e,t,n){Mr(e)&&n.delete(t)}function Qd(){El=!1,lt!==null&&Mr(lt)&&(lt=null),st!==null&&Mr(st)&&(st=null),it!==null&&Mr(it)&&(it=null),Hn.forEach(xi),$n.forEach(xi)}function Sn(e,t){e.blockedOn===t&&(e.blockedOn=null,El||(El=!0,ye.unstable_scheduleCallback(ye.unstable_NormalPriority,Qd)))}function Qn(e){function t(a){return Sn(a,e)}if(0<br.length){Sn(br[0],e);for(var n=1;n<br.length;n++){var r=br[n];r.blockedOn===e&&(r.blockedOn=null)}}for(lt!==null&&Sn(lt,e),st!==null&&Sn(st,e),it!==null&&Sn(it,e),Hn.forEach(t),$n.forEach(t),n=0;n<et.length;n++)r=et[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<et.length&&(n=et[0],n.blockedOn===null);)pu(n),n.blockedOn===null&&et.shift()}var tn=Je.ReactCurrentBatchConfig,Kr=!0;function Yd(e,t,n,r){var a=R,l=tn.transition;tn.transition=null;try{R=1,xs(e,t,n,r)}finally{R=a,tn.transition=l}}function Kd(e,t,n,r){var a=R,l=tn.transition;tn.transition=null;try{R=4,xs(e,t,n,r)}finally{R=a,tn.transition=l}}function xs(e,t,n,r){if(Kr){var a=Cl(e,t,n,r);if(a===null)Xa(e,t,r,Xr,n),vi(e,r);else if($d(a,e,t,n,r))r.stopPropagation();else if(vi(e,r),t&4&&-1<Hd.indexOf(e)){for(;a!==null;){var l=ur(a);if(l!==null&&uu(l),l=Cl(e,t,n,r),l===null&&Xa(e,t,r,Xr,n),l===a)break;a=l}a!==null&&r.stopPropagation()}else Xa(e,t,r,null,n)}}var Xr=null;function Cl(e,t,n,r){if(Xr=null,e=ps(r),e=Et(e),e!==null)if(t=Ft(e),t===null)e=null;else if(n=t.tag,n===13){if(e=tu(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Xr=e,null}function mu(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Rd()){case ms:return 1;case lu:return 4;case Qr:case Fd:return 16;case su:return 536870912;default:return 16}default:return 16}}var nt=null,gs=null,Ir=null;function hu(){if(Ir)return Ir;var e,t=gs,n=t.length,r,a="value"in nt?nt.value:nt.textContent,l=a.length;for(e=0;e<n&&t[e]===a[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===a[l-r];r++);return Ir=a.slice(e,1<r?1-r:void 0)}function Rr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function wr(){return!0}function gi(){return!1}function we(e){function t(n,r,a,l,s){this._reactName=n,this._targetInst=a,this.type=r,this.nativeEvent=l,this.target=s,this.currentTarget=null;for(var o in e)e.hasOwnProperty(o)&&(n=e[o],this[o]=n?n(l):l[o]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?wr:gi,this.isPropagationStopped=gi,this}return W(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=wr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=wr)},persist:function(){},isPersistent:wr}),t}var pn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ys=we(pn),or=W({},pn,{view:0,detail:0}),Xd=we(or),Ua,Ba,_n,va=W({},or,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:bs,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==_n&&(_n&&e.type==="mousemove"?(Ua=e.screenX-_n.screenX,Ba=e.screenY-_n.screenY):Ba=Ua=0,_n=e),Ua)},movementY:function(e){return"movementY"in e?e.movementY:Ba}}),yi=we(va),Jd=W({},va,{dataTransfer:0}),Gd=we(Jd),Zd=W({},or,{relatedTarget:0}),Wa=we(Zd),qd=W({},pn,{animationName:0,elapsedTime:0,pseudoElement:0}),ef=we(qd),tf=W({},pn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),nf=we(tf),rf=W({},pn,{data:0}),bi=we(rf),af={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},lf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},sf={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function of(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=sf[e])?!!t[e]:!1}function bs(){return of}var uf=W({},or,{key:function(e){if(e.key){var t=af[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Rr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?lf[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:bs,charCode:function(e){return e.type==="keypress"?Rr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Rr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),cf=we(uf),df=W({},va,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),wi=we(df),ff=W({},or,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:bs}),pf=we(ff),mf=W({},pn,{propertyName:0,elapsedTime:0,pseudoElement:0}),hf=we(mf),vf=W({},va,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),xf=we(vf),gf=[9,13,27,32],ws=Qe&&"CompositionEvent"in window,In=null;Qe&&"documentMode"in document&&(In=document.documentMode);var yf=Qe&&"TextEvent"in window&&!In,vu=Qe&&(!ws||In&&8<In&&11>=In),ki=" ",Si=!1;function xu(e,t){switch(e){case"keyup":return gf.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function gu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Wt=!1;function bf(e,t){switch(e){case"compositionend":return gu(t);case"keypress":return t.which!==32?null:(Si=!0,ki);case"textInput":return e=t.data,e===ki&&Si?null:e;default:return null}}function wf(e,t){if(Wt)return e==="compositionend"||!ws&&xu(e,t)?(e=hu(),Ir=gs=nt=null,Wt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return vu&&t.locale!=="ko"?null:t.data;default:return null}}var kf={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function _i(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!kf[e.type]:t==="textarea"}function yu(e,t,n,r){Jo(r),t=Jr(t,"onChange"),0<t.length&&(n=new ys("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Rn=null,Yn=null;function Sf(e){Pu(e,0)}function xa(e){var t=$t(e);if(Vo(t))return e}function _f(e,t){if(e==="change")return t}var bu=!1;if(Qe){var Va;if(Qe){var Ha="oninput"in document;if(!Ha){var Ei=document.createElement("div");Ei.setAttribute("oninput","return;"),Ha=typeof Ei.oninput=="function"}Va=Ha}else Va=!1;bu=Va&&(!document.documentMode||9<document.documentMode)}function Ci(){Rn&&(Rn.detachEvent("onpropertychange",wu),Yn=Rn=null)}function wu(e){if(e.propertyName==="value"&&xa(Yn)){var t=[];yu(t,Yn,e,ps(e)),eu(Sf,t)}}function Ef(e,t,n){e==="focusin"?(Ci(),Rn=t,Yn=n,Rn.attachEvent("onpropertychange",wu)):e==="focusout"&&Ci()}function Cf(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return xa(Yn)}function Nf(e,t){if(e==="click")return xa(t)}function jf(e,t){if(e==="input"||e==="change")return xa(t)}function Lf(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Re=typeof Object.is=="function"?Object.is:Lf;function Kn(e,t){if(Re(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var a=n[r];if(!ol.call(t,a)||!Re(e[a],t[a]))return!1}return!0}function Ni(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ji(e,t){var n=Ni(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ni(n)}}function ku(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?ku(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Su(){for(var e=window,t=Vr();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Vr(e.document)}return t}function ks(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Pf(e){var t=Su(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&ku(n.ownerDocument.documentElement,n)){if(r!==null&&ks(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var a=n.textContent.length,l=Math.min(r.start,a);r=r.end===void 0?l:Math.min(r.end,a),!e.extend&&l>r&&(a=r,r=l,l=a),a=ji(n,l);var s=ji(n,r);a&&s&&(e.rangeCount!==1||e.anchorNode!==a.node||e.anchorOffset!==a.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(a.node,a.offset),e.removeAllRanges(),l>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Tf=Qe&&"documentMode"in document&&11>=document.documentMode,Vt=null,Nl=null,Fn=null,jl=!1;function Li(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;jl||Vt==null||Vt!==Vr(r)||(r=Vt,"selectionStart"in r&&ks(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Fn&&Kn(Fn,r)||(Fn=r,r=Jr(Nl,"onSelect"),0<r.length&&(t=new ys("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Vt)))}function kr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Ht={animationend:kr("Animation","AnimationEnd"),animationiteration:kr("Animation","AnimationIteration"),animationstart:kr("Animation","AnimationStart"),transitionend:kr("Transition","TransitionEnd")},$a={},_u={};Qe&&(_u=document.createElement("div").style,"AnimationEvent"in window||(delete Ht.animationend.animation,delete Ht.animationiteration.animation,delete Ht.animationstart.animation),"TransitionEvent"in window||delete Ht.transitionend.transition);function ga(e){if($a[e])return $a[e];if(!Ht[e])return e;var t=Ht[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in _u)return $a[e]=t[n];return e}var Eu=ga("animationend"),Cu=ga("animationiteration"),Nu=ga("animationstart"),ju=ga("transitionend"),Lu=new Map,Pi="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function vt(e,t){Lu.set(e,t),Rt(t,[e])}for(var Qa=0;Qa<Pi.length;Qa++){var Ya=Pi[Qa],zf=Ya.toLowerCase(),Mf=Ya[0].toUpperCase()+Ya.slice(1);vt(zf,"on"+Mf)}vt(Eu,"onAnimationEnd");vt(Cu,"onAnimationIteration");vt(Nu,"onAnimationStart");vt("dblclick","onDoubleClick");vt("focusin","onFocus");vt("focusout","onBlur");vt(ju,"onTransitionEnd");an("onMouseEnter",["mouseout","mouseover"]);an("onMouseLeave",["mouseout","mouseover"]);an("onPointerEnter",["pointerout","pointerover"]);an("onPointerLeave",["pointerout","pointerover"]);Rt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Rt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Rt("onBeforeInput",["compositionend","keypress","textInput","paste"]);Rt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Rt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Rt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Tn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),If=new Set("cancel close invalid load scroll toggle".split(" ").concat(Tn));function Ti(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Td(r,t,void 0,e),e.currentTarget=null}function Pu(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],a=r.event;r=r.listeners;e:{var l=void 0;if(t)for(var s=r.length-1;0<=s;s--){var o=r[s],i=o.instance,u=o.currentTarget;if(o=o.listener,i!==l&&a.isPropagationStopped())break e;Ti(a,o,u),l=i}else for(s=0;s<r.length;s++){if(o=r[s],i=o.instance,u=o.currentTarget,o=o.listener,i!==l&&a.isPropagationStopped())break e;Ti(a,o,u),l=i}}}if($r)throw e=Sl,$r=!1,Sl=null,e}function O(e,t){var n=t[Ml];n===void 0&&(n=t[Ml]=new Set);var r=e+"__bubble";n.has(r)||(Tu(t,e,2,!1),n.add(r))}function Ka(e,t,n){var r=0;t&&(r|=4),Tu(n,e,r,t)}var Sr="_reactListening"+Math.random().toString(36).slice(2);function Xn(e){if(!e[Sr]){e[Sr]=!0,Ao.forEach(function(n){n!=="selectionchange"&&(If.has(n)||Ka(n,!1,e),Ka(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Sr]||(t[Sr]=!0,Ka("selectionchange",!1,t))}}function Tu(e,t,n,r){switch(mu(t)){case 1:var a=Yd;break;case 4:a=Kd;break;default:a=xs}n=a.bind(null,t,n,e),a=void 0,!kl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(a=!0),r?a!==void 0?e.addEventListener(t,n,{capture:!0,passive:a}):e.addEventListener(t,n,!0):a!==void 0?e.addEventListener(t,n,{passive:a}):e.addEventListener(t,n,!1)}function Xa(e,t,n,r,a){var l=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var o=r.stateNode.containerInfo;if(o===a||o.nodeType===8&&o.parentNode===a)break;if(s===4)for(s=r.return;s!==null;){var i=s.tag;if((i===3||i===4)&&(i=s.stateNode.containerInfo,i===a||i.nodeType===8&&i.parentNode===a))return;s=s.return}for(;o!==null;){if(s=Et(o),s===null)return;if(i=s.tag,i===5||i===6){r=l=s;continue e}o=o.parentNode}}r=r.return}eu(function(){var u=l,h=ps(n),f=[];e:{var m=Lu.get(e);if(m!==void 0){var g=ys,y=e;switch(e){case"keypress":if(Rr(n)===0)break e;case"keydown":case"keyup":g=cf;break;case"focusin":y="focus",g=Wa;break;case"focusout":y="blur",g=Wa;break;case"beforeblur":case"afterblur":g=Wa;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=yi;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=Gd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=pf;break;case Eu:case Cu:case Nu:g=ef;break;case ju:g=hf;break;case"scroll":g=Xd;break;case"wheel":g=xf;break;case"copy":case"cut":case"paste":g=nf;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=wi}var b=(t&4)!==0,_=!b&&e==="scroll",d=b?m!==null?m+"Capture":null:m;b=[];for(var c=u,p;c!==null;){p=c;var x=p.stateNode;if(p.tag===5&&x!==null&&(p=x,d!==null&&(x=Vn(c,d),x!=null&&b.push(Jn(c,x,p)))),_)break;c=c.return}0<b.length&&(m=new g(m,y,null,n,h),f.push({event:m,listeners:b}))}}if(!(t&7)){e:{if(m=e==="mouseover"||e==="pointerover",g=e==="mouseout"||e==="pointerout",m&&n!==bl&&(y=n.relatedTarget||n.fromElement)&&(Et(y)||y[Ye]))break e;if((g||m)&&(m=h.window===h?h:(m=h.ownerDocument)?m.defaultView||m.parentWindow:window,g?(y=n.relatedTarget||n.toElement,g=u,y=y?Et(y):null,y!==null&&(_=Ft(y),y!==_||y.tag!==5&&y.tag!==6)&&(y=null)):(g=null,y=u),g!==y)){if(b=yi,x="onMouseLeave",d="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(b=wi,x="onPointerLeave",d="onPointerEnter",c="pointer"),_=g==null?m:$t(g),p=y==null?m:$t(y),m=new b(x,c+"leave",g,n,h),m.target=_,m.relatedTarget=p,x=null,Et(h)===u&&(b=new b(d,c+"enter",y,n,h),b.target=p,b.relatedTarget=_,x=b),_=x,g&&y)t:{for(b=g,d=y,c=0,p=b;p;p=Ot(p))c++;for(p=0,x=d;x;x=Ot(x))p++;for(;0<c-p;)b=Ot(b),c--;for(;0<p-c;)d=Ot(d),p--;for(;c--;){if(b===d||d!==null&&b===d.alternate)break t;b=Ot(b),d=Ot(d)}b=null}else b=null;g!==null&&zi(f,m,g,b,!1),y!==null&&_!==null&&zi(f,_,y,b,!0)}}e:{if(m=u?$t(u):window,g=m.nodeName&&m.nodeName.toLowerCase(),g==="select"||g==="input"&&m.type==="file")var S=_f;else if(_i(m))if(bu)S=jf;else{S=Cf;var N=Ef}else(g=m.nodeName)&&g.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(S=Nf);if(S&&(S=S(e,u))){yu(f,S,n,h);break e}N&&N(e,m,u),e==="focusout"&&(N=m._wrapperState)&&N.controlled&&m.type==="number"&&hl(m,"number",m.value)}switch(N=u?$t(u):window,e){case"focusin":(_i(N)||N.contentEditable==="true")&&(Vt=N,Nl=u,Fn=null);break;case"focusout":Fn=Nl=Vt=null;break;case"mousedown":jl=!0;break;case"contextmenu":case"mouseup":case"dragend":jl=!1,Li(f,n,h);break;case"selectionchange":if(Tf)break;case"keydown":case"keyup":Li(f,n,h)}var j;if(ws)e:{switch(e){case"compositionstart":var L="onCompositionStart";break e;case"compositionend":L="onCompositionEnd";break e;case"compositionupdate":L="onCompositionUpdate";break e}L=void 0}else Wt?xu(e,n)&&(L="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(L="onCompositionStart");L&&(vu&&n.locale!=="ko"&&(Wt||L!=="onCompositionStart"?L==="onCompositionEnd"&&Wt&&(j=hu()):(nt=h,gs="value"in nt?nt.value:nt.textContent,Wt=!0)),N=Jr(u,L),0<N.length&&(L=new bi(L,e,null,n,h),f.push({event:L,listeners:N}),j?L.data=j:(j=gu(n),j!==null&&(L.data=j)))),(j=yf?bf(e,n):wf(e,n))&&(u=Jr(u,"onBeforeInput"),0<u.length&&(h=new bi("onBeforeInput","beforeinput",null,n,h),f.push({event:h,listeners:u}),h.data=j))}Pu(f,t)})}function Jn(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Jr(e,t){for(var n=t+"Capture",r=[];e!==null;){var a=e,l=a.stateNode;a.tag===5&&l!==null&&(a=l,l=Vn(e,n),l!=null&&r.unshift(Jn(e,l,a)),l=Vn(e,t),l!=null&&r.push(Jn(e,l,a))),e=e.return}return r}function Ot(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function zi(e,t,n,r,a){for(var l=t._reactName,s=[];n!==null&&n!==r;){var o=n,i=o.alternate,u=o.stateNode;if(i!==null&&i===r)break;o.tag===5&&u!==null&&(o=u,a?(i=Vn(n,l),i!=null&&s.unshift(Jn(n,i,o))):a||(i=Vn(n,l),i!=null&&s.push(Jn(n,i,o)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var Rf=/\r\n?/g,Ff=/\u0000|\uFFFD/g;function Mi(e){return(typeof e=="string"?e:""+e).replace(Rf,`
`).replace(Ff,"")}function _r(e,t,n){if(t=Mi(t),Mi(e)!==t&&n)throw Error(w(425))}function Gr(){}var Ll=null,Pl=null;function Tl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var zl=typeof setTimeout=="function"?setTimeout:void 0,Of=typeof clearTimeout=="function"?clearTimeout:void 0,Ii=typeof Promise=="function"?Promise:void 0,Af=typeof queueMicrotask=="function"?queueMicrotask:typeof Ii<"u"?function(e){return Ii.resolve(null).then(e).catch(Df)}:zl;function Df(e){setTimeout(function(){throw e})}function Ja(e,t){var n=t,r=0;do{var a=n.nextSibling;if(e.removeChild(n),a&&a.nodeType===8)if(n=a.data,n==="/$"){if(r===0){e.removeChild(a),Qn(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=a}while(n);Qn(t)}function ot(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Ri(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var mn=Math.random().toString(36).slice(2),Ae="__reactFiber$"+mn,Gn="__reactProps$"+mn,Ye="__reactContainer$"+mn,Ml="__reactEvents$"+mn,Uf="__reactListeners$"+mn,Bf="__reactHandles$"+mn;function Et(e){var t=e[Ae];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ye]||n[Ae]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Ri(e);e!==null;){if(n=e[Ae])return n;e=Ri(e)}return t}e=n,n=e.parentNode}return null}function ur(e){return e=e[Ae]||e[Ye],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function $t(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(w(33))}function ya(e){return e[Gn]||null}var Il=[],Qt=-1;function xt(e){return{current:e}}function A(e){0>Qt||(e.current=Il[Qt],Il[Qt]=null,Qt--)}function F(e,t){Qt++,Il[Qt]=e.current,e.current=t}var ht={},se=xt(ht),pe=xt(!1),Pt=ht;function ln(e,t){var n=e.type.contextTypes;if(!n)return ht;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var a={},l;for(l in n)a[l]=t[l];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=a),a}function me(e){return e=e.childContextTypes,e!=null}function Zr(){A(pe),A(se)}function Fi(e,t,n){if(se.current!==ht)throw Error(w(168));F(se,t),F(pe,n)}function zu(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var a in r)if(!(a in t))throw Error(w(108,_d(e)||"Unknown",a));return W({},n,r)}function qr(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||ht,Pt=se.current,F(se,e),F(pe,pe.current),!0}function Oi(e,t,n){var r=e.stateNode;if(!r)throw Error(w(169));n?(e=zu(e,t,Pt),r.__reactInternalMemoizedMergedChildContext=e,A(pe),A(se),F(se,e)):A(pe),F(pe,n)}var We=null,ba=!1,Ga=!1;function Mu(e){We===null?We=[e]:We.push(e)}function Wf(e){ba=!0,Mu(e)}function gt(){if(!Ga&&We!==null){Ga=!0;var e=0,t=R;try{var n=We;for(R=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}We=null,ba=!1}catch(a){throw We!==null&&(We=We.slice(e+1)),au(ms,gt),a}finally{R=t,Ga=!1}}return null}var Yt=[],Kt=0,ea=null,ta=0,ke=[],Se=0,Tt=null,Ve=1,He="";function St(e,t){Yt[Kt++]=ta,Yt[Kt++]=ea,ea=e,ta=t}function Iu(e,t,n){ke[Se++]=Ve,ke[Se++]=He,ke[Se++]=Tt,Tt=e;var r=Ve;e=He;var a=32-Me(r)-1;r&=~(1<<a),n+=1;var l=32-Me(t)+a;if(30<l){var s=a-a%5;l=(r&(1<<s)-1).toString(32),r>>=s,a-=s,Ve=1<<32-Me(t)+a|n<<a|r,He=l+e}else Ve=1<<l|n<<a|r,He=e}function Ss(e){e.return!==null&&(St(e,1),Iu(e,1,0))}function _s(e){for(;e===ea;)ea=Yt[--Kt],Yt[Kt]=null,ta=Yt[--Kt],Yt[Kt]=null;for(;e===Tt;)Tt=ke[--Se],ke[Se]=null,He=ke[--Se],ke[Se]=null,Ve=ke[--Se],ke[Se]=null}var ge=null,xe=null,D=!1,ze=null;function Ru(e,t){var n=_e(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Ai(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ge=e,xe=ot(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ge=e,xe=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Tt!==null?{id:Ve,overflow:He}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=_e(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,ge=e,xe=null,!0):!1;default:return!1}}function Rl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Fl(e){if(D){var t=xe;if(t){var n=t;if(!Ai(e,t)){if(Rl(e))throw Error(w(418));t=ot(n.nextSibling);var r=ge;t&&Ai(e,t)?Ru(r,n):(e.flags=e.flags&-4097|2,D=!1,ge=e)}}else{if(Rl(e))throw Error(w(418));e.flags=e.flags&-4097|2,D=!1,ge=e}}}function Di(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ge=e}function Er(e){if(e!==ge)return!1;if(!D)return Di(e),D=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Tl(e.type,e.memoizedProps)),t&&(t=xe)){if(Rl(e))throw Fu(),Error(w(418));for(;t;)Ru(e,t),t=ot(t.nextSibling)}if(Di(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(w(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){xe=ot(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}xe=null}}else xe=ge?ot(e.stateNode.nextSibling):null;return!0}function Fu(){for(var e=xe;e;)e=ot(e.nextSibling)}function sn(){xe=ge=null,D=!1}function Es(e){ze===null?ze=[e]:ze.push(e)}var Vf=Je.ReactCurrentBatchConfig;function En(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(w(309));var r=n.stateNode}if(!r)throw Error(w(147,e));var a=r,l=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===l?t.ref:(t=function(s){var o=a.refs;s===null?delete o[l]:o[l]=s},t._stringRef=l,t)}if(typeof e!="string")throw Error(w(284));if(!n._owner)throw Error(w(290,e))}return e}function Cr(e,t){throw e=Object.prototype.toString.call(t),Error(w(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Ui(e){var t=e._init;return t(e._payload)}function Ou(e){function t(d,c){if(e){var p=d.deletions;p===null?(d.deletions=[c],d.flags|=16):p.push(c)}}function n(d,c){if(!e)return null;for(;c!==null;)t(d,c),c=c.sibling;return null}function r(d,c){for(d=new Map;c!==null;)c.key!==null?d.set(c.key,c):d.set(c.index,c),c=c.sibling;return d}function a(d,c){return d=ft(d,c),d.index=0,d.sibling=null,d}function l(d,c,p){return d.index=p,e?(p=d.alternate,p!==null?(p=p.index,p<c?(d.flags|=2,c):p):(d.flags|=2,c)):(d.flags|=1048576,c)}function s(d){return e&&d.alternate===null&&(d.flags|=2),d}function o(d,c,p,x){return c===null||c.tag!==6?(c=al(p,d.mode,x),c.return=d,c):(c=a(c,p),c.return=d,c)}function i(d,c,p,x){var S=p.type;return S===Bt?h(d,c,p.props.children,x,p.key):c!==null&&(c.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Ze&&Ui(S)===c.type)?(x=a(c,p.props),x.ref=En(d,c,p),x.return=d,x):(x=Wr(p.type,p.key,p.props,null,d.mode,x),x.ref=En(d,c,p),x.return=d,x)}function u(d,c,p,x){return c===null||c.tag!==4||c.stateNode.containerInfo!==p.containerInfo||c.stateNode.implementation!==p.implementation?(c=ll(p,d.mode,x),c.return=d,c):(c=a(c,p.children||[]),c.return=d,c)}function h(d,c,p,x,S){return c===null||c.tag!==7?(c=Lt(p,d.mode,x,S),c.return=d,c):(c=a(c,p),c.return=d,c)}function f(d,c,p){if(typeof c=="string"&&c!==""||typeof c=="number")return c=al(""+c,d.mode,p),c.return=d,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case hr:return p=Wr(c.type,c.key,c.props,null,d.mode,p),p.ref=En(d,null,c),p.return=d,p;case Ut:return c=ll(c,d.mode,p),c.return=d,c;case Ze:var x=c._init;return f(d,x(c._payload),p)}if(Ln(c)||bn(c))return c=Lt(c,d.mode,p,null),c.return=d,c;Cr(d,c)}return null}function m(d,c,p,x){var S=c!==null?c.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return S!==null?null:o(d,c,""+p,x);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case hr:return p.key===S?i(d,c,p,x):null;case Ut:return p.key===S?u(d,c,p,x):null;case Ze:return S=p._init,m(d,c,S(p._payload),x)}if(Ln(p)||bn(p))return S!==null?null:h(d,c,p,x,null);Cr(d,p)}return null}function g(d,c,p,x,S){if(typeof x=="string"&&x!==""||typeof x=="number")return d=d.get(p)||null,o(c,d,""+x,S);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case hr:return d=d.get(x.key===null?p:x.key)||null,i(c,d,x,S);case Ut:return d=d.get(x.key===null?p:x.key)||null,u(c,d,x,S);case Ze:var N=x._init;return g(d,c,p,N(x._payload),S)}if(Ln(x)||bn(x))return d=d.get(p)||null,h(c,d,x,S,null);Cr(c,x)}return null}function y(d,c,p,x){for(var S=null,N=null,j=c,L=c=0,H=null;j!==null&&L<p.length;L++){j.index>L?(H=j,j=null):H=j.sibling;var M=m(d,j,p[L],x);if(M===null){j===null&&(j=H);break}e&&j&&M.alternate===null&&t(d,j),c=l(M,c,L),N===null?S=M:N.sibling=M,N=M,j=H}if(L===p.length)return n(d,j),D&&St(d,L),S;if(j===null){for(;L<p.length;L++)j=f(d,p[L],x),j!==null&&(c=l(j,c,L),N===null?S=j:N.sibling=j,N=j);return D&&St(d,L),S}for(j=r(d,j);L<p.length;L++)H=g(j,d,L,p[L],x),H!==null&&(e&&H.alternate!==null&&j.delete(H.key===null?L:H.key),c=l(H,c,L),N===null?S=H:N.sibling=H,N=H);return e&&j.forEach(function(je){return t(d,je)}),D&&St(d,L),S}function b(d,c,p,x){var S=bn(p);if(typeof S!="function")throw Error(w(150));if(p=S.call(p),p==null)throw Error(w(151));for(var N=S=null,j=c,L=c=0,H=null,M=p.next();j!==null&&!M.done;L++,M=p.next()){j.index>L?(H=j,j=null):H=j.sibling;var je=m(d,j,M.value,x);if(je===null){j===null&&(j=H);break}e&&j&&je.alternate===null&&t(d,j),c=l(je,c,L),N===null?S=je:N.sibling=je,N=je,j=H}if(M.done)return n(d,j),D&&St(d,L),S;if(j===null){for(;!M.done;L++,M=p.next())M=f(d,M.value,x),M!==null&&(c=l(M,c,L),N===null?S=M:N.sibling=M,N=M);return D&&St(d,L),S}for(j=r(d,j);!M.done;L++,M=p.next())M=g(j,d,L,M.value,x),M!==null&&(e&&M.alternate!==null&&j.delete(M.key===null?L:M.key),c=l(M,c,L),N===null?S=M:N.sibling=M,N=M);return e&&j.forEach(function(gn){return t(d,gn)}),D&&St(d,L),S}function _(d,c,p,x){if(typeof p=="object"&&p!==null&&p.type===Bt&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case hr:e:{for(var S=p.key,N=c;N!==null;){if(N.key===S){if(S=p.type,S===Bt){if(N.tag===7){n(d,N.sibling),c=a(N,p.props.children),c.return=d,d=c;break e}}else if(N.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Ze&&Ui(S)===N.type){n(d,N.sibling),c=a(N,p.props),c.ref=En(d,N,p),c.return=d,d=c;break e}n(d,N);break}else t(d,N);N=N.sibling}p.type===Bt?(c=Lt(p.props.children,d.mode,x,p.key),c.return=d,d=c):(x=Wr(p.type,p.key,p.props,null,d.mode,x),x.ref=En(d,c,p),x.return=d,d=x)}return s(d);case Ut:e:{for(N=p.key;c!==null;){if(c.key===N)if(c.tag===4&&c.stateNode.containerInfo===p.containerInfo&&c.stateNode.implementation===p.implementation){n(d,c.sibling),c=a(c,p.children||[]),c.return=d,d=c;break e}else{n(d,c);break}else t(d,c);c=c.sibling}c=ll(p,d.mode,x),c.return=d,d=c}return s(d);case Ze:return N=p._init,_(d,c,N(p._payload),x)}if(Ln(p))return y(d,c,p,x);if(bn(p))return b(d,c,p,x);Cr(d,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,c!==null&&c.tag===6?(n(d,c.sibling),c=a(c,p),c.return=d,d=c):(n(d,c),c=al(p,d.mode,x),c.return=d,d=c),s(d)):n(d,c)}return _}var on=Ou(!0),Au=Ou(!1),na=xt(null),ra=null,Xt=null,Cs=null;function Ns(){Cs=Xt=ra=null}function js(e){var t=na.current;A(na),e._currentValue=t}function Ol(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function nn(e,t){ra=e,Cs=Xt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(fe=!0),e.firstContext=null)}function Ce(e){var t=e._currentValue;if(Cs!==e)if(e={context:e,memoizedValue:t,next:null},Xt===null){if(ra===null)throw Error(w(308));Xt=e,ra.dependencies={lanes:0,firstContext:e}}else Xt=Xt.next=e;return t}var Ct=null;function Ls(e){Ct===null?Ct=[e]:Ct.push(e)}function Du(e,t,n,r){var a=t.interleaved;return a===null?(n.next=n,Ls(t)):(n.next=a.next,a.next=n),t.interleaved=n,Ke(e,r)}function Ke(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var qe=!1;function Ps(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Uu(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function $e(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function ut(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,I&2){var a=r.pending;return a===null?t.next=t:(t.next=a.next,a.next=t),r.pending=t,Ke(e,n)}return a=r.interleaved,a===null?(t.next=t,Ls(r)):(t.next=a.next,a.next=t),r.interleaved=t,Ke(e,n)}function Fr(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,hs(e,n)}}function Bi(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var a=null,l=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};l===null?a=l=s:l=l.next=s,n=n.next}while(n!==null);l===null?a=l=t:l=l.next=t}else a=l=t;n={baseState:r.baseState,firstBaseUpdate:a,lastBaseUpdate:l,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function aa(e,t,n,r){var a=e.updateQueue;qe=!1;var l=a.firstBaseUpdate,s=a.lastBaseUpdate,o=a.shared.pending;if(o!==null){a.shared.pending=null;var i=o,u=i.next;i.next=null,s===null?l=u:s.next=u,s=i;var h=e.alternate;h!==null&&(h=h.updateQueue,o=h.lastBaseUpdate,o!==s&&(o===null?h.firstBaseUpdate=u:o.next=u,h.lastBaseUpdate=i))}if(l!==null){var f=a.baseState;s=0,h=u=i=null,o=l;do{var m=o.lane,g=o.eventTime;if((r&m)===m){h!==null&&(h=h.next={eventTime:g,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var y=e,b=o;switch(m=t,g=n,b.tag){case 1:if(y=b.payload,typeof y=="function"){f=y.call(g,f,m);break e}f=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=b.payload,m=typeof y=="function"?y.call(g,f,m):y,m==null)break e;f=W({},f,m);break e;case 2:qe=!0}}o.callback!==null&&o.lane!==0&&(e.flags|=64,m=a.effects,m===null?a.effects=[o]:m.push(o))}else g={eventTime:g,lane:m,tag:o.tag,payload:o.payload,callback:o.callback,next:null},h===null?(u=h=g,i=f):h=h.next=g,s|=m;if(o=o.next,o===null){if(o=a.shared.pending,o===null)break;m=o,o=m.next,m.next=null,a.lastBaseUpdate=m,a.shared.pending=null}}while(!0);if(h===null&&(i=f),a.baseState=i,a.firstBaseUpdate=u,a.lastBaseUpdate=h,t=a.shared.interleaved,t!==null){a=t;do s|=a.lane,a=a.next;while(a!==t)}else l===null&&(a.shared.lanes=0);Mt|=s,e.lanes=s,e.memoizedState=f}}function Wi(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],a=r.callback;if(a!==null){if(r.callback=null,r=n,typeof a!="function")throw Error(w(191,a));a.call(r)}}}var cr={},Ue=xt(cr),Zn=xt(cr),qn=xt(cr);function Nt(e){if(e===cr)throw Error(w(174));return e}function Ts(e,t){switch(F(qn,t),F(Zn,e),F(Ue,cr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:xl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=xl(t,e)}A(Ue),F(Ue,t)}function un(){A(Ue),A(Zn),A(qn)}function Bu(e){Nt(qn.current);var t=Nt(Ue.current),n=xl(t,e.type);t!==n&&(F(Zn,e),F(Ue,n))}function zs(e){Zn.current===e&&(A(Ue),A(Zn))}var U=xt(0);function la(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Za=[];function Ms(){for(var e=0;e<Za.length;e++)Za[e]._workInProgressVersionPrimary=null;Za.length=0}var Or=Je.ReactCurrentDispatcher,qa=Je.ReactCurrentBatchConfig,zt=0,B=null,X=null,Z=null,sa=!1,On=!1,er=0,Hf=0;function re(){throw Error(w(321))}function Is(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Re(e[n],t[n]))return!1;return!0}function Rs(e,t,n,r,a,l){if(zt=l,B=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Or.current=e===null||e.memoizedState===null?Kf:Xf,e=n(r,a),On){l=0;do{if(On=!1,er=0,25<=l)throw Error(w(301));l+=1,Z=X=null,t.updateQueue=null,Or.current=Jf,e=n(r,a)}while(On)}if(Or.current=ia,t=X!==null&&X.next!==null,zt=0,Z=X=B=null,sa=!1,t)throw Error(w(300));return e}function Fs(){var e=er!==0;return er=0,e}function Oe(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Z===null?B.memoizedState=Z=e:Z=Z.next=e,Z}function Ne(){if(X===null){var e=B.alternate;e=e!==null?e.memoizedState:null}else e=X.next;var t=Z===null?B.memoizedState:Z.next;if(t!==null)Z=t,X=e;else{if(e===null)throw Error(w(310));X=e,e={memoizedState:X.memoizedState,baseState:X.baseState,baseQueue:X.baseQueue,queue:X.queue,next:null},Z===null?B.memoizedState=Z=e:Z=Z.next=e}return Z}function tr(e,t){return typeof t=="function"?t(e):t}function el(e){var t=Ne(),n=t.queue;if(n===null)throw Error(w(311));n.lastRenderedReducer=e;var r=X,a=r.baseQueue,l=n.pending;if(l!==null){if(a!==null){var s=a.next;a.next=l.next,l.next=s}r.baseQueue=a=l,n.pending=null}if(a!==null){l=a.next,r=r.baseState;var o=s=null,i=null,u=l;do{var h=u.lane;if((zt&h)===h)i!==null&&(i=i.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var f={lane:h,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};i===null?(o=i=f,s=r):i=i.next=f,B.lanes|=h,Mt|=h}u=u.next}while(u!==null&&u!==l);i===null?s=r:i.next=o,Re(r,t.memoizedState)||(fe=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=i,n.lastRenderedState=r}if(e=n.interleaved,e!==null){a=e;do l=a.lane,B.lanes|=l,Mt|=l,a=a.next;while(a!==e)}else a===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function tl(e){var t=Ne(),n=t.queue;if(n===null)throw Error(w(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,l=t.memoizedState;if(a!==null){n.pending=null;var s=a=a.next;do l=e(l,s.action),s=s.next;while(s!==a);Re(l,t.memoizedState)||(fe=!0),t.memoizedState=l,t.baseQueue===null&&(t.baseState=l),n.lastRenderedState=l}return[l,r]}function Wu(){}function Vu(e,t){var n=B,r=Ne(),a=t(),l=!Re(r.memoizedState,a);if(l&&(r.memoizedState=a,fe=!0),r=r.queue,Os(Qu.bind(null,n,r,e),[e]),r.getSnapshot!==t||l||Z!==null&&Z.memoizedState.tag&1){if(n.flags|=2048,nr(9,$u.bind(null,n,r,a,t),void 0,null),q===null)throw Error(w(349));zt&30||Hu(n,t,a)}return a}function Hu(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=B.updateQueue,t===null?(t={lastEffect:null,stores:null},B.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function $u(e,t,n,r){t.value=n,t.getSnapshot=r,Yu(t)&&Ku(e)}function Qu(e,t,n){return n(function(){Yu(t)&&Ku(e)})}function Yu(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Re(e,n)}catch{return!0}}function Ku(e){var t=Ke(e,1);t!==null&&Ie(t,e,1,-1)}function Vi(e){var t=Oe();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:tr,lastRenderedState:e},t.queue=e,e=e.dispatch=Yf.bind(null,B,e),[t.memoizedState,e]}function nr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=B.updateQueue,t===null?(t={lastEffect:null,stores:null},B.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Xu(){return Ne().memoizedState}function Ar(e,t,n,r){var a=Oe();B.flags|=e,a.memoizedState=nr(1|t,n,void 0,r===void 0?null:r)}function wa(e,t,n,r){var a=Ne();r=r===void 0?null:r;var l=void 0;if(X!==null){var s=X.memoizedState;if(l=s.destroy,r!==null&&Is(r,s.deps)){a.memoizedState=nr(t,n,l,r);return}}B.flags|=e,a.memoizedState=nr(1|t,n,l,r)}function Hi(e,t){return Ar(8390656,8,e,t)}function Os(e,t){return wa(2048,8,e,t)}function Ju(e,t){return wa(4,2,e,t)}function Gu(e,t){return wa(4,4,e,t)}function Zu(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function qu(e,t,n){return n=n!=null?n.concat([e]):null,wa(4,4,Zu.bind(null,t,e),n)}function As(){}function ec(e,t){var n=Ne();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Is(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function tc(e,t){var n=Ne();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Is(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function nc(e,t,n){return zt&21?(Re(n,t)||(n=iu(),B.lanes|=n,Mt|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,fe=!0),e.memoizedState=n)}function $f(e,t){var n=R;R=n!==0&&4>n?n:4,e(!0);var r=qa.transition;qa.transition={};try{e(!1),t()}finally{R=n,qa.transition=r}}function rc(){return Ne().memoizedState}function Qf(e,t,n){var r=dt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},ac(e))lc(t,n);else if(n=Du(e,t,n,r),n!==null){var a=oe();Ie(n,e,r,a),sc(n,t,r)}}function Yf(e,t,n){var r=dt(e),a={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(ac(e))lc(t,a);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=t.lastRenderedReducer,l!==null))try{var s=t.lastRenderedState,o=l(s,n);if(a.hasEagerState=!0,a.eagerState=o,Re(o,s)){var i=t.interleaved;i===null?(a.next=a,Ls(t)):(a.next=i.next,i.next=a),t.interleaved=a;return}}catch{}finally{}n=Du(e,t,a,r),n!==null&&(a=oe(),Ie(n,e,r,a),sc(n,t,r))}}function ac(e){var t=e.alternate;return e===B||t!==null&&t===B}function lc(e,t){On=sa=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function sc(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,hs(e,n)}}var ia={readContext:Ce,useCallback:re,useContext:re,useEffect:re,useImperativeHandle:re,useInsertionEffect:re,useLayoutEffect:re,useMemo:re,useReducer:re,useRef:re,useState:re,useDebugValue:re,useDeferredValue:re,useTransition:re,useMutableSource:re,useSyncExternalStore:re,useId:re,unstable_isNewReconciler:!1},Kf={readContext:Ce,useCallback:function(e,t){return Oe().memoizedState=[e,t===void 0?null:t],e},useContext:Ce,useEffect:Hi,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Ar(4194308,4,Zu.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ar(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ar(4,2,e,t)},useMemo:function(e,t){var n=Oe();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Oe();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Qf.bind(null,B,e),[r.memoizedState,e]},useRef:function(e){var t=Oe();return e={current:e},t.memoizedState=e},useState:Vi,useDebugValue:As,useDeferredValue:function(e){return Oe().memoizedState=e},useTransition:function(){var e=Vi(!1),t=e[0];return e=$f.bind(null,e[1]),Oe().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=B,a=Oe();if(D){if(n===void 0)throw Error(w(407));n=n()}else{if(n=t(),q===null)throw Error(w(349));zt&30||Hu(r,t,n)}a.memoizedState=n;var l={value:n,getSnapshot:t};return a.queue=l,Hi(Qu.bind(null,r,l,e),[e]),r.flags|=2048,nr(9,$u.bind(null,r,l,n,t),void 0,null),n},useId:function(){var e=Oe(),t=q.identifierPrefix;if(D){var n=He,r=Ve;n=(r&~(1<<32-Me(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=er++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Hf++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Xf={readContext:Ce,useCallback:ec,useContext:Ce,useEffect:Os,useImperativeHandle:qu,useInsertionEffect:Ju,useLayoutEffect:Gu,useMemo:tc,useReducer:el,useRef:Xu,useState:function(){return el(tr)},useDebugValue:As,useDeferredValue:function(e){var t=Ne();return nc(t,X.memoizedState,e)},useTransition:function(){var e=el(tr)[0],t=Ne().memoizedState;return[e,t]},useMutableSource:Wu,useSyncExternalStore:Vu,useId:rc,unstable_isNewReconciler:!1},Jf={readContext:Ce,useCallback:ec,useContext:Ce,useEffect:Os,useImperativeHandle:qu,useInsertionEffect:Ju,useLayoutEffect:Gu,useMemo:tc,useReducer:tl,useRef:Xu,useState:function(){return tl(tr)},useDebugValue:As,useDeferredValue:function(e){var t=Ne();return X===null?t.memoizedState=e:nc(t,X.memoizedState,e)},useTransition:function(){var e=tl(tr)[0],t=Ne().memoizedState;return[e,t]},useMutableSource:Wu,useSyncExternalStore:Vu,useId:rc,unstable_isNewReconciler:!1};function Pe(e,t){if(e&&e.defaultProps){t=W({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Al(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:W({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ka={isMounted:function(e){return(e=e._reactInternals)?Ft(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=oe(),a=dt(e),l=$e(r,a);l.payload=t,n!=null&&(l.callback=n),t=ut(e,l,a),t!==null&&(Ie(t,e,a,r),Fr(t,e,a))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=oe(),a=dt(e),l=$e(r,a);l.tag=1,l.payload=t,n!=null&&(l.callback=n),t=ut(e,l,a),t!==null&&(Ie(t,e,a,r),Fr(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=oe(),r=dt(e),a=$e(n,r);a.tag=2,t!=null&&(a.callback=t),t=ut(e,a,r),t!==null&&(Ie(t,e,r,n),Fr(t,e,r))}};function $i(e,t,n,r,a,l,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,l,s):t.prototype&&t.prototype.isPureReactComponent?!Kn(n,r)||!Kn(a,l):!0}function ic(e,t,n){var r=!1,a=ht,l=t.contextType;return typeof l=="object"&&l!==null?l=Ce(l):(a=me(t)?Pt:se.current,r=t.contextTypes,l=(r=r!=null)?ln(e,a):ht),t=new t(n,l),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ka,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=a,e.__reactInternalMemoizedMaskedChildContext=l),t}function Qi(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&ka.enqueueReplaceState(t,t.state,null)}function Dl(e,t,n,r){var a=e.stateNode;a.props=n,a.state=e.memoizedState,a.refs={},Ps(e);var l=t.contextType;typeof l=="object"&&l!==null?a.context=Ce(l):(l=me(t)?Pt:se.current,a.context=ln(e,l)),a.state=e.memoizedState,l=t.getDerivedStateFromProps,typeof l=="function"&&(Al(e,t,l,n),a.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(t=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),t!==a.state&&ka.enqueueReplaceState(a,a.state,null),aa(e,n,a,r),a.state=e.memoizedState),typeof a.componentDidMount=="function"&&(e.flags|=4194308)}function cn(e,t){try{var n="",r=t;do n+=Sd(r),r=r.return;while(r);var a=n}catch(l){a=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:t,stack:a,digest:null}}function nl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Ul(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Gf=typeof WeakMap=="function"?WeakMap:Map;function oc(e,t,n){n=$e(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){ua||(ua=!0,Jl=r),Ul(e,t)},n}function uc(e,t,n){n=$e(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var a=t.value;n.payload=function(){return r(a)},n.callback=function(){Ul(e,t)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(n.callback=function(){Ul(e,t),typeof r!="function"&&(ct===null?ct=new Set([this]):ct.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function Yi(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Gf;var a=new Set;r.set(t,a)}else a=r.get(t),a===void 0&&(a=new Set,r.set(t,a));a.has(n)||(a.add(n),e=dp.bind(null,e,t,n),t.then(e,e))}function Ki(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Xi(e,t,n,r,a){return e.mode&1?(e.flags|=65536,e.lanes=a,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=$e(-1,1),t.tag=2,ut(n,t,1))),n.lanes|=1),e)}var Zf=Je.ReactCurrentOwner,fe=!1;function ie(e,t,n,r){t.child=e===null?Au(t,null,n,r):on(t,e.child,n,r)}function Ji(e,t,n,r,a){n=n.render;var l=t.ref;return nn(t,a),r=Rs(e,t,n,r,l,a),n=Fs(),e!==null&&!fe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,Xe(e,t,a)):(D&&n&&Ss(t),t.flags|=1,ie(e,t,r,a),t.child)}function Gi(e,t,n,r,a){if(e===null){var l=n.type;return typeof l=="function"&&!Qs(l)&&l.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=l,cc(e,t,l,r,a)):(e=Wr(n.type,null,r,t,t.mode,a),e.ref=t.ref,e.return=t,t.child=e)}if(l=e.child,!(e.lanes&a)){var s=l.memoizedProps;if(n=n.compare,n=n!==null?n:Kn,n(s,r)&&e.ref===t.ref)return Xe(e,t,a)}return t.flags|=1,e=ft(l,r),e.ref=t.ref,e.return=t,t.child=e}function cc(e,t,n,r,a){if(e!==null){var l=e.memoizedProps;if(Kn(l,r)&&e.ref===t.ref)if(fe=!1,t.pendingProps=r=l,(e.lanes&a)!==0)e.flags&131072&&(fe=!0);else return t.lanes=e.lanes,Xe(e,t,a)}return Bl(e,t,n,r,a)}function dc(e,t,n){var r=t.pendingProps,a=r.children,l=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},F(Gt,ve),ve|=n;else{if(!(n&1073741824))return e=l!==null?l.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,F(Gt,ve),ve|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=l!==null?l.baseLanes:n,F(Gt,ve),ve|=r}else l!==null?(r=l.baseLanes|n,t.memoizedState=null):r=n,F(Gt,ve),ve|=r;return ie(e,t,a,n),t.child}function fc(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Bl(e,t,n,r,a){var l=me(n)?Pt:se.current;return l=ln(t,l),nn(t,a),n=Rs(e,t,n,r,l,a),r=Fs(),e!==null&&!fe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,Xe(e,t,a)):(D&&r&&Ss(t),t.flags|=1,ie(e,t,n,a),t.child)}function Zi(e,t,n,r,a){if(me(n)){var l=!0;qr(t)}else l=!1;if(nn(t,a),t.stateNode===null)Dr(e,t),ic(t,n,r),Dl(t,n,r,a),r=!0;else if(e===null){var s=t.stateNode,o=t.memoizedProps;s.props=o;var i=s.context,u=n.contextType;typeof u=="object"&&u!==null?u=Ce(u):(u=me(n)?Pt:se.current,u=ln(t,u));var h=n.getDerivedStateFromProps,f=typeof h=="function"||typeof s.getSnapshotBeforeUpdate=="function";f||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(o!==r||i!==u)&&Qi(t,s,r,u),qe=!1;var m=t.memoizedState;s.state=m,aa(t,r,s,a),i=t.memoizedState,o!==r||m!==i||pe.current||qe?(typeof h=="function"&&(Al(t,n,h,r),i=t.memoizedState),(o=qe||$i(t,n,o,r,m,i,u))?(f||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=i),s.props=r,s.state=i,s.context=u,r=o):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,Uu(e,t),o=t.memoizedProps,u=t.type===t.elementType?o:Pe(t.type,o),s.props=u,f=t.pendingProps,m=s.context,i=n.contextType,typeof i=="object"&&i!==null?i=Ce(i):(i=me(n)?Pt:se.current,i=ln(t,i));var g=n.getDerivedStateFromProps;(h=typeof g=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(o!==f||m!==i)&&Qi(t,s,r,i),qe=!1,m=t.memoizedState,s.state=m,aa(t,r,s,a);var y=t.memoizedState;o!==f||m!==y||pe.current||qe?(typeof g=="function"&&(Al(t,n,g,r),y=t.memoizedState),(u=qe||$i(t,n,u,r,m,y,i)||!1)?(h||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,y,i),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,y,i)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||o===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=y),s.props=r,s.state=y,s.context=i,r=u):(typeof s.componentDidUpdate!="function"||o===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),r=!1)}return Wl(e,t,n,r,l,a)}function Wl(e,t,n,r,a,l){fc(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return a&&Oi(t,n,!1),Xe(e,t,l);r=t.stateNode,Zf.current=t;var o=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=on(t,e.child,null,l),t.child=on(t,null,o,l)):ie(e,t,o,l),t.memoizedState=r.state,a&&Oi(t,n,!0),t.child}function pc(e){var t=e.stateNode;t.pendingContext?Fi(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Fi(e,t.context,!1),Ts(e,t.containerInfo)}function qi(e,t,n,r,a){return sn(),Es(a),t.flags|=256,ie(e,t,n,r),t.child}var Vl={dehydrated:null,treeContext:null,retryLane:0};function Hl(e){return{baseLanes:e,cachePool:null,transitions:null}}function mc(e,t,n){var r=t.pendingProps,a=U.current,l=!1,s=(t.flags&128)!==0,o;if((o=s)||(o=e!==null&&e.memoizedState===null?!1:(a&2)!==0),o?(l=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(a|=1),F(U,a&1),e===null)return Fl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=r.children,e=r.fallback,l?(r=t.mode,l=t.child,s={mode:"hidden",children:s},!(r&1)&&l!==null?(l.childLanes=0,l.pendingProps=s):l=Ea(s,r,0,null),e=Lt(e,r,n,null),l.return=t,e.return=t,l.sibling=e,t.child=l,t.child.memoizedState=Hl(n),t.memoizedState=Vl,e):Ds(t,s));if(a=e.memoizedState,a!==null&&(o=a.dehydrated,o!==null))return qf(e,t,s,r,o,a,n);if(l){l=r.fallback,s=t.mode,a=e.child,o=a.sibling;var i={mode:"hidden",children:r.children};return!(s&1)&&t.child!==a?(r=t.child,r.childLanes=0,r.pendingProps=i,t.deletions=null):(r=ft(a,i),r.subtreeFlags=a.subtreeFlags&14680064),o!==null?l=ft(o,l):(l=Lt(l,s,n,null),l.flags|=2),l.return=t,r.return=t,r.sibling=l,t.child=r,r=l,l=t.child,s=e.child.memoizedState,s=s===null?Hl(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},l.memoizedState=s,l.childLanes=e.childLanes&~n,t.memoizedState=Vl,r}return l=e.child,e=l.sibling,r=ft(l,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Ds(e,t){return t=Ea({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Nr(e,t,n,r){return r!==null&&Es(r),on(t,e.child,null,n),e=Ds(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function qf(e,t,n,r,a,l,s){if(n)return t.flags&256?(t.flags&=-257,r=nl(Error(w(422))),Nr(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(l=r.fallback,a=t.mode,r=Ea({mode:"visible",children:r.children},a,0,null),l=Lt(l,a,s,null),l.flags|=2,r.return=t,l.return=t,r.sibling=l,t.child=r,t.mode&1&&on(t,e.child,null,s),t.child.memoizedState=Hl(s),t.memoizedState=Vl,l);if(!(t.mode&1))return Nr(e,t,s,null);if(a.data==="$!"){if(r=a.nextSibling&&a.nextSibling.dataset,r)var o=r.dgst;return r=o,l=Error(w(419)),r=nl(l,r,void 0),Nr(e,t,s,r)}if(o=(s&e.childLanes)!==0,fe||o){if(r=q,r!==null){switch(s&-s){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}a=a&(r.suspendedLanes|s)?0:a,a!==0&&a!==l.retryLane&&(l.retryLane=a,Ke(e,a),Ie(r,e,a,-1))}return $s(),r=nl(Error(w(421))),Nr(e,t,s,r)}return a.data==="$?"?(t.flags|=128,t.child=e.child,t=fp.bind(null,e),a._reactRetry=t,null):(e=l.treeContext,xe=ot(a.nextSibling),ge=t,D=!0,ze=null,e!==null&&(ke[Se++]=Ve,ke[Se++]=He,ke[Se++]=Tt,Ve=e.id,He=e.overflow,Tt=t),t=Ds(t,r.children),t.flags|=4096,t)}function eo(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Ol(e.return,t,n)}function rl(e,t,n,r,a){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:a}:(l.isBackwards=t,l.rendering=null,l.renderingStartTime=0,l.last=r,l.tail=n,l.tailMode=a)}function hc(e,t,n){var r=t.pendingProps,a=r.revealOrder,l=r.tail;if(ie(e,t,r.children,n),r=U.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&eo(e,n,t);else if(e.tag===19)eo(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(F(U,r),!(t.mode&1))t.memoizedState=null;else switch(a){case"forwards":for(n=t.child,a=null;n!==null;)e=n.alternate,e!==null&&la(e)===null&&(a=n),n=n.sibling;n=a,n===null?(a=t.child,t.child=null):(a=n.sibling,n.sibling=null),rl(t,!1,a,n,l);break;case"backwards":for(n=null,a=t.child,t.child=null;a!==null;){if(e=a.alternate,e!==null&&la(e)===null){t.child=a;break}e=a.sibling,a.sibling=n,n=a,a=e}rl(t,!0,n,null,l);break;case"together":rl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Dr(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Xe(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Mt|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(w(153));if(t.child!==null){for(e=t.child,n=ft(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=ft(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function ep(e,t,n){switch(t.tag){case 3:pc(t),sn();break;case 5:Bu(t);break;case 1:me(t.type)&&qr(t);break;case 4:Ts(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,a=t.memoizedProps.value;F(na,r._currentValue),r._currentValue=a;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(F(U,U.current&1),t.flags|=128,null):n&t.child.childLanes?mc(e,t,n):(F(U,U.current&1),e=Xe(e,t,n),e!==null?e.sibling:null);F(U,U.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return hc(e,t,n);t.flags|=128}if(a=t.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),F(U,U.current),r)break;return null;case 22:case 23:return t.lanes=0,dc(e,t,n)}return Xe(e,t,n)}var vc,$l,xc,gc;vc=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};$l=function(){};xc=function(e,t,n,r){var a=e.memoizedProps;if(a!==r){e=t.stateNode,Nt(Ue.current);var l=null;switch(n){case"input":a=pl(e,a),r=pl(e,r),l=[];break;case"select":a=W({},a,{value:void 0}),r=W({},r,{value:void 0}),l=[];break;case"textarea":a=vl(e,a),r=vl(e,r),l=[];break;default:typeof a.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Gr)}gl(n,r);var s;n=null;for(u in a)if(!r.hasOwnProperty(u)&&a.hasOwnProperty(u)&&a[u]!=null)if(u==="style"){var o=a[u];for(s in o)o.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Bn.hasOwnProperty(u)?l||(l=[]):(l=l||[]).push(u,null));for(u in r){var i=r[u];if(o=a!=null?a[u]:void 0,r.hasOwnProperty(u)&&i!==o&&(i!=null||o!=null))if(u==="style")if(o){for(s in o)!o.hasOwnProperty(s)||i&&i.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in i)i.hasOwnProperty(s)&&o[s]!==i[s]&&(n||(n={}),n[s]=i[s])}else n||(l||(l=[]),l.push(u,n)),n=i;else u==="dangerouslySetInnerHTML"?(i=i?i.__html:void 0,o=o?o.__html:void 0,i!=null&&o!==i&&(l=l||[]).push(u,i)):u==="children"?typeof i!="string"&&typeof i!="number"||(l=l||[]).push(u,""+i):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Bn.hasOwnProperty(u)?(i!=null&&u==="onScroll"&&O("scroll",e),l||o===i||(l=[])):(l=l||[]).push(u,i))}n&&(l=l||[]).push("style",n);var u=l;(t.updateQueue=u)&&(t.flags|=4)}};gc=function(e,t,n,r){n!==r&&(t.flags|=4)};function Cn(e,t){if(!D)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ae(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var a=e.child;a!==null;)n|=a.lanes|a.childLanes,r|=a.subtreeFlags&14680064,r|=a.flags&14680064,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)n|=a.lanes|a.childLanes,r|=a.subtreeFlags,r|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function tp(e,t,n){var r=t.pendingProps;switch(_s(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ae(t),null;case 1:return me(t.type)&&Zr(),ae(t),null;case 3:return r=t.stateNode,un(),A(pe),A(se),Ms(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Er(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,ze!==null&&(ql(ze),ze=null))),$l(e,t),ae(t),null;case 5:zs(t);var a=Nt(qn.current);if(n=t.type,e!==null&&t.stateNode!=null)xc(e,t,n,r,a),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(w(166));return ae(t),null}if(e=Nt(Ue.current),Er(t)){r=t.stateNode,n=t.type;var l=t.memoizedProps;switch(r[Ae]=t,r[Gn]=l,e=(t.mode&1)!==0,n){case"dialog":O("cancel",r),O("close",r);break;case"iframe":case"object":case"embed":O("load",r);break;case"video":case"audio":for(a=0;a<Tn.length;a++)O(Tn[a],r);break;case"source":O("error",r);break;case"img":case"image":case"link":O("error",r),O("load",r);break;case"details":O("toggle",r);break;case"input":ui(r,l),O("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!l.multiple},O("invalid",r);break;case"textarea":di(r,l),O("invalid",r)}gl(n,l),a=null;for(var s in l)if(l.hasOwnProperty(s)){var o=l[s];s==="children"?typeof o=="string"?r.textContent!==o&&(l.suppressHydrationWarning!==!0&&_r(r.textContent,o,e),a=["children",o]):typeof o=="number"&&r.textContent!==""+o&&(l.suppressHydrationWarning!==!0&&_r(r.textContent,o,e),a=["children",""+o]):Bn.hasOwnProperty(s)&&o!=null&&s==="onScroll"&&O("scroll",r)}switch(n){case"input":vr(r),ci(r,l,!0);break;case"textarea":vr(r),fi(r);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(r.onclick=Gr)}r=a,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=a.nodeType===9?a:a.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Qo(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[Ae]=t,e[Gn]=r,vc(e,t,!1,!1),t.stateNode=e;e:{switch(s=yl(n,r),n){case"dialog":O("cancel",e),O("close",e),a=r;break;case"iframe":case"object":case"embed":O("load",e),a=r;break;case"video":case"audio":for(a=0;a<Tn.length;a++)O(Tn[a],e);a=r;break;case"source":O("error",e),a=r;break;case"img":case"image":case"link":O("error",e),O("load",e),a=r;break;case"details":O("toggle",e),a=r;break;case"input":ui(e,r),a=pl(e,r),O("invalid",e);break;case"option":a=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},a=W({},r,{value:void 0}),O("invalid",e);break;case"textarea":di(e,r),a=vl(e,r),O("invalid",e);break;default:a=r}gl(n,a),o=a;for(l in o)if(o.hasOwnProperty(l)){var i=o[l];l==="style"?Xo(e,i):l==="dangerouslySetInnerHTML"?(i=i?i.__html:void 0,i!=null&&Yo(e,i)):l==="children"?typeof i=="string"?(n!=="textarea"||i!=="")&&Wn(e,i):typeof i=="number"&&Wn(e,""+i):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(Bn.hasOwnProperty(l)?i!=null&&l==="onScroll"&&O("scroll",e):i!=null&&us(e,l,i,s))}switch(n){case"input":vr(e),ci(e,r,!1);break;case"textarea":vr(e),fi(e);break;case"option":r.value!=null&&e.setAttribute("value",""+mt(r.value));break;case"select":e.multiple=!!r.multiple,l=r.value,l!=null?Zt(e,!!r.multiple,l,!1):r.defaultValue!=null&&Zt(e,!!r.multiple,r.defaultValue,!0);break;default:typeof a.onClick=="function"&&(e.onclick=Gr)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ae(t),null;case 6:if(e&&t.stateNode!=null)gc(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(w(166));if(n=Nt(qn.current),Nt(Ue.current),Er(t)){if(r=t.stateNode,n=t.memoizedProps,r[Ae]=t,(l=r.nodeValue!==n)&&(e=ge,e!==null))switch(e.tag){case 3:_r(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&_r(r.nodeValue,n,(e.mode&1)!==0)}l&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Ae]=t,t.stateNode=r}return ae(t),null;case 13:if(A(U),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(D&&xe!==null&&t.mode&1&&!(t.flags&128))Fu(),sn(),t.flags|=98560,l=!1;else if(l=Er(t),r!==null&&r.dehydrated!==null){if(e===null){if(!l)throw Error(w(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(w(317));l[Ae]=t}else sn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ae(t),l=!1}else ze!==null&&(ql(ze),ze=null),l=!0;if(!l)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||U.current&1?J===0&&(J=3):$s())),t.updateQueue!==null&&(t.flags|=4),ae(t),null);case 4:return un(),$l(e,t),e===null&&Xn(t.stateNode.containerInfo),ae(t),null;case 10:return js(t.type._context),ae(t),null;case 17:return me(t.type)&&Zr(),ae(t),null;case 19:if(A(U),l=t.memoizedState,l===null)return ae(t),null;if(r=(t.flags&128)!==0,s=l.rendering,s===null)if(r)Cn(l,!1);else{if(J!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=la(e),s!==null){for(t.flags|=128,Cn(l,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)l=n,e=r,l.flags&=14680066,s=l.alternate,s===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=s.childLanes,l.lanes=s.lanes,l.child=s.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=s.memoizedProps,l.memoizedState=s.memoizedState,l.updateQueue=s.updateQueue,l.type=s.type,e=s.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return F(U,U.current&1|2),t.child}e=e.sibling}l.tail!==null&&Q()>dn&&(t.flags|=128,r=!0,Cn(l,!1),t.lanes=4194304)}else{if(!r)if(e=la(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Cn(l,!0),l.tail===null&&l.tailMode==="hidden"&&!s.alternate&&!D)return ae(t),null}else 2*Q()-l.renderingStartTime>dn&&n!==1073741824&&(t.flags|=128,r=!0,Cn(l,!1),t.lanes=4194304);l.isBackwards?(s.sibling=t.child,t.child=s):(n=l.last,n!==null?n.sibling=s:t.child=s,l.last=s)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=Q(),t.sibling=null,n=U.current,F(U,r?n&1|2:n&1),t):(ae(t),null);case 22:case 23:return Hs(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?ve&1073741824&&(ae(t),t.subtreeFlags&6&&(t.flags|=8192)):ae(t),null;case 24:return null;case 25:return null}throw Error(w(156,t.tag))}function np(e,t){switch(_s(t),t.tag){case 1:return me(t.type)&&Zr(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return un(),A(pe),A(se),Ms(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return zs(t),null;case 13:if(A(U),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(w(340));sn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return A(U),null;case 4:return un(),null;case 10:return js(t.type._context),null;case 22:case 23:return Hs(),null;case 24:return null;default:return null}}var jr=!1,le=!1,rp=typeof WeakSet=="function"?WeakSet:Set,E=null;function Jt(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){V(e,t,r)}else n.current=null}function Ql(e,t,n){try{n()}catch(r){V(e,t,r)}}var to=!1;function ap(e,t){if(Ll=Kr,e=Su(),ks(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var a=r.anchorOffset,l=r.focusNode;r=r.focusOffset;try{n.nodeType,l.nodeType}catch{n=null;break e}var s=0,o=-1,i=-1,u=0,h=0,f=e,m=null;t:for(;;){for(var g;f!==n||a!==0&&f.nodeType!==3||(o=s+a),f!==l||r!==0&&f.nodeType!==3||(i=s+r),f.nodeType===3&&(s+=f.nodeValue.length),(g=f.firstChild)!==null;)m=f,f=g;for(;;){if(f===e)break t;if(m===n&&++u===a&&(o=s),m===l&&++h===r&&(i=s),(g=f.nextSibling)!==null)break;f=m,m=f.parentNode}f=g}n=o===-1||i===-1?null:{start:o,end:i}}else n=null}n=n||{start:0,end:0}}else n=null;for(Pl={focusedElem:e,selectionRange:n},Kr=!1,E=t;E!==null;)if(t=E,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,E=e;else for(;E!==null;){t=E;try{var y=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var b=y.memoizedProps,_=y.memoizedState,d=t.stateNode,c=d.getSnapshotBeforeUpdate(t.elementType===t.type?b:Pe(t.type,b),_);d.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var p=t.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(w(163))}}catch(x){V(t,t.return,x)}if(e=t.sibling,e!==null){e.return=t.return,E=e;break}E=t.return}return y=to,to=!1,y}function An(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var a=r=r.next;do{if((a.tag&e)===e){var l=a.destroy;a.destroy=void 0,l!==void 0&&Ql(t,n,l)}a=a.next}while(a!==r)}}function Sa(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Yl(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function yc(e){var t=e.alternate;t!==null&&(e.alternate=null,yc(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Ae],delete t[Gn],delete t[Ml],delete t[Uf],delete t[Bf])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function bc(e){return e.tag===5||e.tag===3||e.tag===4}function no(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||bc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Kl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Gr));else if(r!==4&&(e=e.child,e!==null))for(Kl(e,t,n),e=e.sibling;e!==null;)Kl(e,t,n),e=e.sibling}function Xl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Xl(e,t,n),e=e.sibling;e!==null;)Xl(e,t,n),e=e.sibling}var ee=null,Te=!1;function Ge(e,t,n){for(n=n.child;n!==null;)wc(e,t,n),n=n.sibling}function wc(e,t,n){if(De&&typeof De.onCommitFiberUnmount=="function")try{De.onCommitFiberUnmount(ha,n)}catch{}switch(n.tag){case 5:le||Jt(n,t);case 6:var r=ee,a=Te;ee=null,Ge(e,t,n),ee=r,Te=a,ee!==null&&(Te?(e=ee,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ee.removeChild(n.stateNode));break;case 18:ee!==null&&(Te?(e=ee,n=n.stateNode,e.nodeType===8?Ja(e.parentNode,n):e.nodeType===1&&Ja(e,n),Qn(e)):Ja(ee,n.stateNode));break;case 4:r=ee,a=Te,ee=n.stateNode.containerInfo,Te=!0,Ge(e,t,n),ee=r,Te=a;break;case 0:case 11:case 14:case 15:if(!le&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){a=r=r.next;do{var l=a,s=l.destroy;l=l.tag,s!==void 0&&(l&2||l&4)&&Ql(n,t,s),a=a.next}while(a!==r)}Ge(e,t,n);break;case 1:if(!le&&(Jt(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(o){V(n,t,o)}Ge(e,t,n);break;case 21:Ge(e,t,n);break;case 22:n.mode&1?(le=(r=le)||n.memoizedState!==null,Ge(e,t,n),le=r):Ge(e,t,n);break;default:Ge(e,t,n)}}function ro(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new rp),t.forEach(function(r){var a=pp.bind(null,e,r);n.has(r)||(n.add(r),r.then(a,a))})}}function Le(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var a=n[r];try{var l=e,s=t,o=s;e:for(;o!==null;){switch(o.tag){case 5:ee=o.stateNode,Te=!1;break e;case 3:ee=o.stateNode.containerInfo,Te=!0;break e;case 4:ee=o.stateNode.containerInfo,Te=!0;break e}o=o.return}if(ee===null)throw Error(w(160));wc(l,s,a),ee=null,Te=!1;var i=a.alternate;i!==null&&(i.return=null),a.return=null}catch(u){V(a,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)kc(t,e),t=t.sibling}function kc(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Le(t,e),Fe(e),r&4){try{An(3,e,e.return),Sa(3,e)}catch(b){V(e,e.return,b)}try{An(5,e,e.return)}catch(b){V(e,e.return,b)}}break;case 1:Le(t,e),Fe(e),r&512&&n!==null&&Jt(n,n.return);break;case 5:if(Le(t,e),Fe(e),r&512&&n!==null&&Jt(n,n.return),e.flags&32){var a=e.stateNode;try{Wn(a,"")}catch(b){V(e,e.return,b)}}if(r&4&&(a=e.stateNode,a!=null)){var l=e.memoizedProps,s=n!==null?n.memoizedProps:l,o=e.type,i=e.updateQueue;if(e.updateQueue=null,i!==null)try{o==="input"&&l.type==="radio"&&l.name!=null&&Ho(a,l),yl(o,s);var u=yl(o,l);for(s=0;s<i.length;s+=2){var h=i[s],f=i[s+1];h==="style"?Xo(a,f):h==="dangerouslySetInnerHTML"?Yo(a,f):h==="children"?Wn(a,f):us(a,h,f,u)}switch(o){case"input":ml(a,l);break;case"textarea":$o(a,l);break;case"select":var m=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!l.multiple;var g=l.value;g!=null?Zt(a,!!l.multiple,g,!1):m!==!!l.multiple&&(l.defaultValue!=null?Zt(a,!!l.multiple,l.defaultValue,!0):Zt(a,!!l.multiple,l.multiple?[]:"",!1))}a[Gn]=l}catch(b){V(e,e.return,b)}}break;case 6:if(Le(t,e),Fe(e),r&4){if(e.stateNode===null)throw Error(w(162));a=e.stateNode,l=e.memoizedProps;try{a.nodeValue=l}catch(b){V(e,e.return,b)}}break;case 3:if(Le(t,e),Fe(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Qn(t.containerInfo)}catch(b){V(e,e.return,b)}break;case 4:Le(t,e),Fe(e);break;case 13:Le(t,e),Fe(e),a=e.child,a.flags&8192&&(l=a.memoizedState!==null,a.stateNode.isHidden=l,!l||a.alternate!==null&&a.alternate.memoizedState!==null||(Ws=Q())),r&4&&ro(e);break;case 22:if(h=n!==null&&n.memoizedState!==null,e.mode&1?(le=(u=le)||h,Le(t,e),le=u):Le(t,e),Fe(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!h&&e.mode&1)for(E=e,h=e.child;h!==null;){for(f=E=h;E!==null;){switch(m=E,g=m.child,m.tag){case 0:case 11:case 14:case 15:An(4,m,m.return);break;case 1:Jt(m,m.return);var y=m.stateNode;if(typeof y.componentWillUnmount=="function"){r=m,n=m.return;try{t=r,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(b){V(r,n,b)}}break;case 5:Jt(m,m.return);break;case 22:if(m.memoizedState!==null){lo(f);continue}}g!==null?(g.return=m,E=g):lo(f)}h=h.sibling}e:for(h=null,f=e;;){if(f.tag===5){if(h===null){h=f;try{a=f.stateNode,u?(l=a.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(o=f.stateNode,i=f.memoizedProps.style,s=i!=null&&i.hasOwnProperty("display")?i.display:null,o.style.display=Ko("display",s))}catch(b){V(e,e.return,b)}}}else if(f.tag===6){if(h===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(b){V(e,e.return,b)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;h===f&&(h=null),f=f.return}h===f&&(h=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Le(t,e),Fe(e),r&4&&ro(e);break;case 21:break;default:Le(t,e),Fe(e)}}function Fe(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(bc(n)){var r=n;break e}n=n.return}throw Error(w(160))}switch(r.tag){case 5:var a=r.stateNode;r.flags&32&&(Wn(a,""),r.flags&=-33);var l=no(e);Xl(e,l,a);break;case 3:case 4:var s=r.stateNode.containerInfo,o=no(e);Kl(e,o,s);break;default:throw Error(w(161))}}catch(i){V(e,e.return,i)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function lp(e,t,n){E=e,Sc(e)}function Sc(e,t,n){for(var r=(e.mode&1)!==0;E!==null;){var a=E,l=a.child;if(a.tag===22&&r){var s=a.memoizedState!==null||jr;if(!s){var o=a.alternate,i=o!==null&&o.memoizedState!==null||le;o=jr;var u=le;if(jr=s,(le=i)&&!u)for(E=a;E!==null;)s=E,i=s.child,s.tag===22&&s.memoizedState!==null?so(a):i!==null?(i.return=s,E=i):so(a);for(;l!==null;)E=l,Sc(l),l=l.sibling;E=a,jr=o,le=u}ao(e)}else a.subtreeFlags&8772&&l!==null?(l.return=a,E=l):ao(e)}}function ao(e){for(;E!==null;){var t=E;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:le||Sa(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!le)if(n===null)r.componentDidMount();else{var a=t.elementType===t.type?n.memoizedProps:Pe(t.type,n.memoizedProps);r.componentDidUpdate(a,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var l=t.updateQueue;l!==null&&Wi(t,l,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Wi(t,s,n)}break;case 5:var o=t.stateNode;if(n===null&&t.flags&4){n=o;var i=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":i.autoFocus&&n.focus();break;case"img":i.src&&(n.src=i.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var h=u.memoizedState;if(h!==null){var f=h.dehydrated;f!==null&&Qn(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(w(163))}le||t.flags&512&&Yl(t)}catch(m){V(t,t.return,m)}}if(t===e){E=null;break}if(n=t.sibling,n!==null){n.return=t.return,E=n;break}E=t.return}}function lo(e){for(;E!==null;){var t=E;if(t===e){E=null;break}var n=t.sibling;if(n!==null){n.return=t.return,E=n;break}E=t.return}}function so(e){for(;E!==null;){var t=E;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Sa(4,t)}catch(i){V(t,n,i)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var a=t.return;try{r.componentDidMount()}catch(i){V(t,a,i)}}var l=t.return;try{Yl(t)}catch(i){V(t,l,i)}break;case 5:var s=t.return;try{Yl(t)}catch(i){V(t,s,i)}}}catch(i){V(t,t.return,i)}if(t===e){E=null;break}var o=t.sibling;if(o!==null){o.return=t.return,E=o;break}E=t.return}}var sp=Math.ceil,oa=Je.ReactCurrentDispatcher,Us=Je.ReactCurrentOwner,Ee=Je.ReactCurrentBatchConfig,I=0,q=null,K=null,te=0,ve=0,Gt=xt(0),J=0,rr=null,Mt=0,_a=0,Bs=0,Dn=null,de=null,Ws=0,dn=1/0,Be=null,ua=!1,Jl=null,ct=null,Lr=!1,rt=null,ca=0,Un=0,Gl=null,Ur=-1,Br=0;function oe(){return I&6?Q():Ur!==-1?Ur:Ur=Q()}function dt(e){return e.mode&1?I&2&&te!==0?te&-te:Vf.transition!==null?(Br===0&&(Br=iu()),Br):(e=R,e!==0||(e=window.event,e=e===void 0?16:mu(e.type)),e):1}function Ie(e,t,n,r){if(50<Un)throw Un=0,Gl=null,Error(w(185));ir(e,n,r),(!(I&2)||e!==q)&&(e===q&&(!(I&2)&&(_a|=n),J===4&&tt(e,te)),he(e,r),n===1&&I===0&&!(t.mode&1)&&(dn=Q()+500,ba&&gt()))}function he(e,t){var n=e.callbackNode;Wd(e,t);var r=Yr(e,e===q?te:0);if(r===0)n!==null&&hi(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&hi(n),t===1)e.tag===0?Wf(io.bind(null,e)):Mu(io.bind(null,e)),Af(function(){!(I&6)&&gt()}),n=null;else{switch(ou(r)){case 1:n=ms;break;case 4:n=lu;break;case 16:n=Qr;break;case 536870912:n=su;break;default:n=Qr}n=Tc(n,_c.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function _c(e,t){if(Ur=-1,Br=0,I&6)throw Error(w(327));var n=e.callbackNode;if(rn()&&e.callbackNode!==n)return null;var r=Yr(e,e===q?te:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=da(e,r);else{t=r;var a=I;I|=2;var l=Cc();(q!==e||te!==t)&&(Be=null,dn=Q()+500,jt(e,t));do try{up();break}catch(o){Ec(e,o)}while(!0);Ns(),oa.current=l,I=a,K!==null?t=0:(q=null,te=0,t=J)}if(t!==0){if(t===2&&(a=_l(e),a!==0&&(r=a,t=Zl(e,a))),t===1)throw n=rr,jt(e,0),tt(e,r),he(e,Q()),n;if(t===6)tt(e,r);else{if(a=e.current.alternate,!(r&30)&&!ip(a)&&(t=da(e,r),t===2&&(l=_l(e),l!==0&&(r=l,t=Zl(e,l))),t===1))throw n=rr,jt(e,0),tt(e,r),he(e,Q()),n;switch(e.finishedWork=a,e.finishedLanes=r,t){case 0:case 1:throw Error(w(345));case 2:_t(e,de,Be);break;case 3:if(tt(e,r),(r&130023424)===r&&(t=Ws+500-Q(),10<t)){if(Yr(e,0)!==0)break;if(a=e.suspendedLanes,(a&r)!==r){oe(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=zl(_t.bind(null,e,de,Be),t);break}_t(e,de,Be);break;case 4:if(tt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,a=-1;0<r;){var s=31-Me(r);l=1<<s,s=t[s],s>a&&(a=s),r&=~l}if(r=a,r=Q()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*sp(r/1960))-r,10<r){e.timeoutHandle=zl(_t.bind(null,e,de,Be),r);break}_t(e,de,Be);break;case 5:_t(e,de,Be);break;default:throw Error(w(329))}}}return he(e,Q()),e.callbackNode===n?_c.bind(null,e):null}function Zl(e,t){var n=Dn;return e.current.memoizedState.isDehydrated&&(jt(e,t).flags|=256),e=da(e,t),e!==2&&(t=de,de=n,t!==null&&ql(t)),e}function ql(e){de===null?de=e:de.push.apply(de,e)}function ip(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var a=n[r],l=a.getSnapshot;a=a.value;try{if(!Re(l(),a))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function tt(e,t){for(t&=~Bs,t&=~_a,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Me(t),r=1<<n;e[n]=-1,t&=~r}}function io(e){if(I&6)throw Error(w(327));rn();var t=Yr(e,0);if(!(t&1))return he(e,Q()),null;var n=da(e,t);if(e.tag!==0&&n===2){var r=_l(e);r!==0&&(t=r,n=Zl(e,r))}if(n===1)throw n=rr,jt(e,0),tt(e,t),he(e,Q()),n;if(n===6)throw Error(w(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,_t(e,de,Be),he(e,Q()),null}function Vs(e,t){var n=I;I|=1;try{return e(t)}finally{I=n,I===0&&(dn=Q()+500,ba&&gt())}}function It(e){rt!==null&&rt.tag===0&&!(I&6)&&rn();var t=I;I|=1;var n=Ee.transition,r=R;try{if(Ee.transition=null,R=1,e)return e()}finally{R=r,Ee.transition=n,I=t,!(I&6)&&gt()}}function Hs(){ve=Gt.current,A(Gt)}function jt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Of(n)),K!==null)for(n=K.return;n!==null;){var r=n;switch(_s(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Zr();break;case 3:un(),A(pe),A(se),Ms();break;case 5:zs(r);break;case 4:un();break;case 13:A(U);break;case 19:A(U);break;case 10:js(r.type._context);break;case 22:case 23:Hs()}n=n.return}if(q=e,K=e=ft(e.current,null),te=ve=t,J=0,rr=null,Bs=_a=Mt=0,de=Dn=null,Ct!==null){for(t=0;t<Ct.length;t++)if(n=Ct[t],r=n.interleaved,r!==null){n.interleaved=null;var a=r.next,l=n.pending;if(l!==null){var s=l.next;l.next=a,r.next=s}n.pending=r}Ct=null}return e}function Ec(e,t){do{var n=K;try{if(Ns(),Or.current=ia,sa){for(var r=B.memoizedState;r!==null;){var a=r.queue;a!==null&&(a.pending=null),r=r.next}sa=!1}if(zt=0,Z=X=B=null,On=!1,er=0,Us.current=null,n===null||n.return===null){J=1,rr=t,K=null;break}e:{var l=e,s=n.return,o=n,i=t;if(t=te,o.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){var u=i,h=o,f=h.tag;if(!(h.mode&1)&&(f===0||f===11||f===15)){var m=h.alternate;m?(h.updateQueue=m.updateQueue,h.memoizedState=m.memoizedState,h.lanes=m.lanes):(h.updateQueue=null,h.memoizedState=null)}var g=Ki(s);if(g!==null){g.flags&=-257,Xi(g,s,o,l,t),g.mode&1&&Yi(l,u,t),t=g,i=u;var y=t.updateQueue;if(y===null){var b=new Set;b.add(i),t.updateQueue=b}else y.add(i);break e}else{if(!(t&1)){Yi(l,u,t),$s();break e}i=Error(w(426))}}else if(D&&o.mode&1){var _=Ki(s);if(_!==null){!(_.flags&65536)&&(_.flags|=256),Xi(_,s,o,l,t),Es(cn(i,o));break e}}l=i=cn(i,o),J!==4&&(J=2),Dn===null?Dn=[l]:Dn.push(l),l=s;do{switch(l.tag){case 3:l.flags|=65536,t&=-t,l.lanes|=t;var d=oc(l,i,t);Bi(l,d);break e;case 1:o=i;var c=l.type,p=l.stateNode;if(!(l.flags&128)&&(typeof c.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(ct===null||!ct.has(p)))){l.flags|=65536,t&=-t,l.lanes|=t;var x=uc(l,o,t);Bi(l,x);break e}}l=l.return}while(l!==null)}jc(n)}catch(S){t=S,K===n&&n!==null&&(K=n=n.return);continue}break}while(!0)}function Cc(){var e=oa.current;return oa.current=ia,e===null?ia:e}function $s(){(J===0||J===3||J===2)&&(J=4),q===null||!(Mt&268435455)&&!(_a&268435455)||tt(q,te)}function da(e,t){var n=I;I|=2;var r=Cc();(q!==e||te!==t)&&(Be=null,jt(e,t));do try{op();break}catch(a){Ec(e,a)}while(!0);if(Ns(),I=n,oa.current=r,K!==null)throw Error(w(261));return q=null,te=0,J}function op(){for(;K!==null;)Nc(K)}function up(){for(;K!==null&&!Md();)Nc(K)}function Nc(e){var t=Pc(e.alternate,e,ve);e.memoizedProps=e.pendingProps,t===null?jc(e):K=t,Us.current=null}function jc(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=np(n,t),n!==null){n.flags&=32767,K=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{J=6,K=null;return}}else if(n=tp(n,t,ve),n!==null){K=n;return}if(t=t.sibling,t!==null){K=t;return}K=t=e}while(t!==null);J===0&&(J=5)}function _t(e,t,n){var r=R,a=Ee.transition;try{Ee.transition=null,R=1,cp(e,t,n,r)}finally{Ee.transition=a,R=r}return null}function cp(e,t,n,r){do rn();while(rt!==null);if(I&6)throw Error(w(327));n=e.finishedWork;var a=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(w(177));e.callbackNode=null,e.callbackPriority=0;var l=n.lanes|n.childLanes;if(Vd(e,l),e===q&&(K=q=null,te=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Lr||(Lr=!0,Tc(Qr,function(){return rn(),null})),l=(n.flags&15990)!==0,n.subtreeFlags&15990||l){l=Ee.transition,Ee.transition=null;var s=R;R=1;var o=I;I|=4,Us.current=null,ap(e,n),kc(n,e),Pf(Pl),Kr=!!Ll,Pl=Ll=null,e.current=n,lp(n),Id(),I=o,R=s,Ee.transition=l}else e.current=n;if(Lr&&(Lr=!1,rt=e,ca=a),l=e.pendingLanes,l===0&&(ct=null),Od(n.stateNode),he(e,Q()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)a=t[n],r(a.value,{componentStack:a.stack,digest:a.digest});if(ua)throw ua=!1,e=Jl,Jl=null,e;return ca&1&&e.tag!==0&&rn(),l=e.pendingLanes,l&1?e===Gl?Un++:(Un=0,Gl=e):Un=0,gt(),null}function rn(){if(rt!==null){var e=ou(ca),t=Ee.transition,n=R;try{if(Ee.transition=null,R=16>e?16:e,rt===null)var r=!1;else{if(e=rt,rt=null,ca=0,I&6)throw Error(w(331));var a=I;for(I|=4,E=e.current;E!==null;){var l=E,s=l.child;if(E.flags&16){var o=l.deletions;if(o!==null){for(var i=0;i<o.length;i++){var u=o[i];for(E=u;E!==null;){var h=E;switch(h.tag){case 0:case 11:case 15:An(8,h,l)}var f=h.child;if(f!==null)f.return=h,E=f;else for(;E!==null;){h=E;var m=h.sibling,g=h.return;if(yc(h),h===u){E=null;break}if(m!==null){m.return=g,E=m;break}E=g}}}var y=l.alternate;if(y!==null){var b=y.child;if(b!==null){y.child=null;do{var _=b.sibling;b.sibling=null,b=_}while(b!==null)}}E=l}}if(l.subtreeFlags&2064&&s!==null)s.return=l,E=s;else e:for(;E!==null;){if(l=E,l.flags&2048)switch(l.tag){case 0:case 11:case 15:An(9,l,l.return)}var d=l.sibling;if(d!==null){d.return=l.return,E=d;break e}E=l.return}}var c=e.current;for(E=c;E!==null;){s=E;var p=s.child;if(s.subtreeFlags&2064&&p!==null)p.return=s,E=p;else e:for(s=c;E!==null;){if(o=E,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:Sa(9,o)}}catch(S){V(o,o.return,S)}if(o===s){E=null;break e}var x=o.sibling;if(x!==null){x.return=o.return,E=x;break e}E=o.return}}if(I=a,gt(),De&&typeof De.onPostCommitFiberRoot=="function")try{De.onPostCommitFiberRoot(ha,e)}catch{}r=!0}return r}finally{R=n,Ee.transition=t}}return!1}function oo(e,t,n){t=cn(n,t),t=oc(e,t,1),e=ut(e,t,1),t=oe(),e!==null&&(ir(e,1,t),he(e,t))}function V(e,t,n){if(e.tag===3)oo(e,e,n);else for(;t!==null;){if(t.tag===3){oo(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(ct===null||!ct.has(r))){e=cn(n,e),e=uc(t,e,1),t=ut(t,e,1),e=oe(),t!==null&&(ir(t,1,e),he(t,e));break}}t=t.return}}function dp(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=oe(),e.pingedLanes|=e.suspendedLanes&n,q===e&&(te&n)===n&&(J===4||J===3&&(te&130023424)===te&&500>Q()-Ws?jt(e,0):Bs|=n),he(e,t)}function Lc(e,t){t===0&&(e.mode&1?(t=yr,yr<<=1,!(yr&130023424)&&(yr=4194304)):t=1);var n=oe();e=Ke(e,t),e!==null&&(ir(e,t,n),he(e,n))}function fp(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Lc(e,n)}function pp(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(w(314))}r!==null&&r.delete(t),Lc(e,n)}var Pc;Pc=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||pe.current)fe=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return fe=!1,ep(e,t,n);fe=!!(e.flags&131072)}else fe=!1,D&&t.flags&1048576&&Iu(t,ta,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Dr(e,t),e=t.pendingProps;var a=ln(t,se.current);nn(t,n),a=Rs(null,t,r,e,a,n);var l=Fs();return t.flags|=1,typeof a=="object"&&a!==null&&typeof a.render=="function"&&a.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,me(r)?(l=!0,qr(t)):l=!1,t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,Ps(t),a.updater=ka,t.stateNode=a,a._reactInternals=t,Dl(t,r,e,n),t=Wl(null,t,r,!0,l,n)):(t.tag=0,D&&l&&Ss(t),ie(null,t,a,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Dr(e,t),e=t.pendingProps,a=r._init,r=a(r._payload),t.type=r,a=t.tag=hp(r),e=Pe(r,e),a){case 0:t=Bl(null,t,r,e,n);break e;case 1:t=Zi(null,t,r,e,n);break e;case 11:t=Ji(null,t,r,e,n);break e;case 14:t=Gi(null,t,r,Pe(r.type,e),n);break e}throw Error(w(306,r,""))}return t;case 0:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:Pe(r,a),Bl(e,t,r,a,n);case 1:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:Pe(r,a),Zi(e,t,r,a,n);case 3:e:{if(pc(t),e===null)throw Error(w(387));r=t.pendingProps,l=t.memoizedState,a=l.element,Uu(e,t),aa(t,r,null,n);var s=t.memoizedState;if(r=s.element,l.isDehydrated)if(l={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=l,t.memoizedState=l,t.flags&256){a=cn(Error(w(423)),t),t=qi(e,t,r,n,a);break e}else if(r!==a){a=cn(Error(w(424)),t),t=qi(e,t,r,n,a);break e}else for(xe=ot(t.stateNode.containerInfo.firstChild),ge=t,D=!0,ze=null,n=Au(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(sn(),r===a){t=Xe(e,t,n);break e}ie(e,t,r,n)}t=t.child}return t;case 5:return Bu(t),e===null&&Fl(t),r=t.type,a=t.pendingProps,l=e!==null?e.memoizedProps:null,s=a.children,Tl(r,a)?s=null:l!==null&&Tl(r,l)&&(t.flags|=32),fc(e,t),ie(e,t,s,n),t.child;case 6:return e===null&&Fl(t),null;case 13:return mc(e,t,n);case 4:return Ts(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=on(t,null,r,n):ie(e,t,r,n),t.child;case 11:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:Pe(r,a),Ji(e,t,r,a,n);case 7:return ie(e,t,t.pendingProps,n),t.child;case 8:return ie(e,t,t.pendingProps.children,n),t.child;case 12:return ie(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,a=t.pendingProps,l=t.memoizedProps,s=a.value,F(na,r._currentValue),r._currentValue=s,l!==null)if(Re(l.value,s)){if(l.children===a.children&&!pe.current){t=Xe(e,t,n);break e}}else for(l=t.child,l!==null&&(l.return=t);l!==null;){var o=l.dependencies;if(o!==null){s=l.child;for(var i=o.firstContext;i!==null;){if(i.context===r){if(l.tag===1){i=$e(-1,n&-n),i.tag=2;var u=l.updateQueue;if(u!==null){u=u.shared;var h=u.pending;h===null?i.next=i:(i.next=h.next,h.next=i),u.pending=i}}l.lanes|=n,i=l.alternate,i!==null&&(i.lanes|=n),Ol(l.return,n,t),o.lanes|=n;break}i=i.next}}else if(l.tag===10)s=l.type===t.type?null:l.child;else if(l.tag===18){if(s=l.return,s===null)throw Error(w(341));s.lanes|=n,o=s.alternate,o!==null&&(o.lanes|=n),Ol(s,n,t),s=l.sibling}else s=l.child;if(s!==null)s.return=l;else for(s=l;s!==null;){if(s===t){s=null;break}if(l=s.sibling,l!==null){l.return=s.return,s=l;break}s=s.return}l=s}ie(e,t,a.children,n),t=t.child}return t;case 9:return a=t.type,r=t.pendingProps.children,nn(t,n),a=Ce(a),r=r(a),t.flags|=1,ie(e,t,r,n),t.child;case 14:return r=t.type,a=Pe(r,t.pendingProps),a=Pe(r.type,a),Gi(e,t,r,a,n);case 15:return cc(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:Pe(r,a),Dr(e,t),t.tag=1,me(r)?(e=!0,qr(t)):e=!1,nn(t,n),ic(t,r,a),Dl(t,r,a,n),Wl(null,t,r,!0,e,n);case 19:return hc(e,t,n);case 22:return dc(e,t,n)}throw Error(w(156,t.tag))};function Tc(e,t){return au(e,t)}function mp(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function _e(e,t,n,r){return new mp(e,t,n,r)}function Qs(e){return e=e.prototype,!(!e||!e.isReactComponent)}function hp(e){if(typeof e=="function")return Qs(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ds)return 11;if(e===fs)return 14}return 2}function ft(e,t){var n=e.alternate;return n===null?(n=_e(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Wr(e,t,n,r,a,l){var s=2;if(r=e,typeof e=="function")Qs(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case Bt:return Lt(n.children,a,l,t);case cs:s=8,a|=8;break;case ul:return e=_e(12,n,t,a|2),e.elementType=ul,e.lanes=l,e;case cl:return e=_e(13,n,t,a),e.elementType=cl,e.lanes=l,e;case dl:return e=_e(19,n,t,a),e.elementType=dl,e.lanes=l,e;case Bo:return Ea(n,a,l,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Do:s=10;break e;case Uo:s=9;break e;case ds:s=11;break e;case fs:s=14;break e;case Ze:s=16,r=null;break e}throw Error(w(130,e==null?e:typeof e,""))}return t=_e(s,n,t,a),t.elementType=e,t.type=r,t.lanes=l,t}function Lt(e,t,n,r){return e=_e(7,e,r,t),e.lanes=n,e}function Ea(e,t,n,r){return e=_e(22,e,r,t),e.elementType=Bo,e.lanes=n,e.stateNode={isHidden:!1},e}function al(e,t,n){return e=_e(6,e,null,t),e.lanes=n,e}function ll(e,t,n){return t=_e(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function vp(e,t,n,r,a){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Da(0),this.expirationTimes=Da(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Da(0),this.identifierPrefix=r,this.onRecoverableError=a,this.mutableSourceEagerHydrationData=null}function Ys(e,t,n,r,a,l,s,o,i){return e=new vp(e,t,n,o,i),t===1?(t=1,l===!0&&(t|=8)):t=0,l=_e(3,null,null,t),e.current=l,l.stateNode=e,l.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ps(l),e}function xp(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ut,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function zc(e){if(!e)return ht;e=e._reactInternals;e:{if(Ft(e)!==e||e.tag!==1)throw Error(w(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(me(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(w(171))}if(e.tag===1){var n=e.type;if(me(n))return zu(e,n,t)}return t}function Mc(e,t,n,r,a,l,s,o,i){return e=Ys(n,r,!0,e,a,l,s,o,i),e.context=zc(null),n=e.current,r=oe(),a=dt(n),l=$e(r,a),l.callback=t??null,ut(n,l,a),e.current.lanes=a,ir(e,a,r),he(e,r),e}function Ca(e,t,n,r){var a=t.current,l=oe(),s=dt(a);return n=zc(n),t.context===null?t.context=n:t.pendingContext=n,t=$e(l,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=ut(a,t,s),e!==null&&(Ie(e,a,s,l),Fr(e,a,s)),s}function fa(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function uo(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Ks(e,t){uo(e,t),(e=e.alternate)&&uo(e,t)}function gp(){return null}var Ic=typeof reportError=="function"?reportError:function(e){console.error(e)};function Xs(e){this._internalRoot=e}Na.prototype.render=Xs.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(w(409));Ca(e,t,null,null)};Na.prototype.unmount=Xs.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;It(function(){Ca(null,e,null,null)}),t[Ye]=null}};function Na(e){this._internalRoot=e}Na.prototype.unstable_scheduleHydration=function(e){if(e){var t=du();e={blockedOn:null,target:e,priority:t};for(var n=0;n<et.length&&t!==0&&t<et[n].priority;n++);et.splice(n,0,e),n===0&&pu(e)}};function Js(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ja(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function co(){}function yp(e,t,n,r,a){if(a){if(typeof r=="function"){var l=r;r=function(){var u=fa(s);l.call(u)}}var s=Mc(t,r,e,0,null,!1,!1,"",co);return e._reactRootContainer=s,e[Ye]=s.current,Xn(e.nodeType===8?e.parentNode:e),It(),s}for(;a=e.lastChild;)e.removeChild(a);if(typeof r=="function"){var o=r;r=function(){var u=fa(i);o.call(u)}}var i=Ys(e,0,!1,null,null,!1,!1,"",co);return e._reactRootContainer=i,e[Ye]=i.current,Xn(e.nodeType===8?e.parentNode:e),It(function(){Ca(t,i,n,r)}),i}function La(e,t,n,r,a){var l=n._reactRootContainer;if(l){var s=l;if(typeof a=="function"){var o=a;a=function(){var i=fa(s);o.call(i)}}Ca(t,s,e,a)}else s=yp(n,t,e,a,r);return fa(s)}uu=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Pn(t.pendingLanes);n!==0&&(hs(t,n|1),he(t,Q()),!(I&6)&&(dn=Q()+500,gt()))}break;case 13:It(function(){var r=Ke(e,1);if(r!==null){var a=oe();Ie(r,e,1,a)}}),Ks(e,1)}};vs=function(e){if(e.tag===13){var t=Ke(e,134217728);if(t!==null){var n=oe();Ie(t,e,134217728,n)}Ks(e,134217728)}};cu=function(e){if(e.tag===13){var t=dt(e),n=Ke(e,t);if(n!==null){var r=oe();Ie(n,e,t,r)}Ks(e,t)}};du=function(){return R};fu=function(e,t){var n=R;try{return R=e,t()}finally{R=n}};wl=function(e,t,n){switch(t){case"input":if(ml(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=ya(r);if(!a)throw Error(w(90));Vo(r),ml(r,a)}}}break;case"textarea":$o(e,n);break;case"select":t=n.value,t!=null&&Zt(e,!!n.multiple,t,!1)}};Zo=Vs;qo=It;var bp={usingClientEntryPoint:!1,Events:[ur,$t,ya,Jo,Go,Vs]},Nn={findFiberByHostInstance:Et,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},wp={bundleType:Nn.bundleType,version:Nn.version,rendererPackageName:Nn.rendererPackageName,rendererConfig:Nn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Je.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=nu(e),e===null?null:e.stateNode},findFiberByHostInstance:Nn.findFiberByHostInstance||gp,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Pr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Pr.isDisabled&&Pr.supportsFiber)try{ha=Pr.inject(wp),De=Pr}catch{}}be.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=bp;be.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Js(t))throw Error(w(200));return xp(e,t,null,n)};be.createRoot=function(e,t){if(!Js(e))throw Error(w(299));var n=!1,r="",a=Ic;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),t=Ys(e,1,!1,null,null,n,!1,r,a),e[Ye]=t.current,Xn(e.nodeType===8?e.parentNode:e),new Xs(t)};be.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(w(188)):(e=Object.keys(e).join(","),Error(w(268,e)));return e=nu(t),e=e===null?null:e.stateNode,e};be.flushSync=function(e){return It(e)};be.hydrate=function(e,t,n){if(!ja(t))throw Error(w(200));return La(null,e,t,!0,n)};be.hydrateRoot=function(e,t,n){if(!Js(e))throw Error(w(405));var r=n!=null&&n.hydratedSources||null,a=!1,l="",s=Ic;if(n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=Mc(t,null,e,1,n??null,a,!1,l,s),e[Ye]=t.current,Xn(e),r)for(e=0;e<r.length;e++)n=r[e],a=n._getVersion,a=a(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,a]:t.mutableSourceEagerHydrationData.push(n,a);return new Na(t)};be.render=function(e,t,n){if(!ja(t))throw Error(w(200));return La(null,e,t,!1,n)};be.unmountComponentAtNode=function(e){if(!ja(e))throw Error(w(40));return e._reactRootContainer?(It(function(){La(null,null,e,!1,function(){e._reactRootContainer=null,e[Ye]=null})}),!0):!1};be.unstable_batchedUpdates=Vs;be.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!ja(n))throw Error(w(200));if(e==null||e._reactInternals===void 0)throw Error(w(38));return La(e,t,n,!1,r)};be.version="18.3.1-next-f1338f8080-20240426";function Rc(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Rc)}catch(e){console.error(e)}}Rc(),Ro.exports=be;var kp=Ro.exports,fo=kp;il.createRoot=fo.createRoot,il.hydrateRoot=fo.hydrateRoot;/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ar(){return ar=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ar.apply(this,arguments)}var at;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(at||(at={}));const po="popstate";function Sp(e){e===void 0&&(e={});function t(r,a){let{pathname:l,search:s,hash:o}=r.location;return es("",{pathname:l,search:s,hash:o},a.state&&a.state.usr||null,a.state&&a.state.key||"default")}function n(r,a){return typeof a=="string"?a:pa(a)}return Ep(t,n,null,e)}function Y(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Gs(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function _p(){return Math.random().toString(36).substr(2,8)}function mo(e,t){return{usr:e.state,key:e.key,idx:t}}function es(e,t,n,r){return n===void 0&&(n=null),ar({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?hn(t):t,{state:n,key:t&&t.key||r||_p()})}function pa(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function hn(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function Ep(e,t,n,r){r===void 0&&(r={});let{window:a=document.defaultView,v5Compat:l=!1}=r,s=a.history,o=at.Pop,i=null,u=h();u==null&&(u=0,s.replaceState(ar({},s.state,{idx:u}),""));function h(){return(s.state||{idx:null}).idx}function f(){o=at.Pop;let _=h(),d=_==null?null:_-u;u=_,i&&i({action:o,location:b.location,delta:d})}function m(_,d){o=at.Push;let c=es(b.location,_,d);u=h()+1;let p=mo(c,u),x=b.createHref(c);try{s.pushState(p,"",x)}catch(S){if(S instanceof DOMException&&S.name==="DataCloneError")throw S;a.location.assign(x)}l&&i&&i({action:o,location:b.location,delta:1})}function g(_,d){o=at.Replace;let c=es(b.location,_,d);u=h();let p=mo(c,u),x=b.createHref(c);s.replaceState(p,"",x),l&&i&&i({action:o,location:b.location,delta:0})}function y(_){let d=a.location.origin!=="null"?a.location.origin:a.location.href,c=typeof _=="string"?_:pa(_);return c=c.replace(/ $/,"%20"),Y(d,"No window.location.(origin|href) available to create URL for href: "+c),new URL(c,d)}let b={get action(){return o},get location(){return e(a,s)},listen(_){if(i)throw new Error("A history only accepts one active listener");return a.addEventListener(po,f),i=_,()=>{a.removeEventListener(po,f),i=null}},createHref(_){return t(a,_)},createURL:y,encodeLocation(_){let d=y(_);return{pathname:d.pathname,search:d.search,hash:d.hash}},push:m,replace:g,go(_){return s.go(_)}};return b}var ho;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(ho||(ho={}));function Cp(e,t,n){return n===void 0&&(n="/"),Np(e,t,n)}function Np(e,t,n,r){let a=typeof t=="string"?hn(t):t,l=Zs(a.pathname||"/",n);if(l==null)return null;let s=Fc(e);jp(s);let o=null;for(let i=0;o==null&&i<s.length;++i){let u=Up(l);o=Op(s[i],u)}return o}function Fc(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let a=(l,s,o)=>{let i={relativePath:o===void 0?l.path||"":o,caseSensitive:l.caseSensitive===!0,childrenIndex:s,route:l};i.relativePath.startsWith("/")&&(Y(i.relativePath.startsWith(r),'Absolute route path "'+i.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),i.relativePath=i.relativePath.slice(r.length));let u=pt([r,i.relativePath]),h=n.concat(i);l.children&&l.children.length>0&&(Y(l.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Fc(l.children,t,h,u)),!(l.path==null&&!l.index)&&t.push({path:u,score:Rp(u,l.index),routesMeta:h})};return e.forEach((l,s)=>{var o;if(l.path===""||!((o=l.path)!=null&&o.includes("?")))a(l,s);else for(let i of Oc(l.path))a(l,s,i)}),t}function Oc(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,a=n.endsWith("?"),l=n.replace(/\?$/,"");if(r.length===0)return a?[l,""]:[l];let s=Oc(r.join("/")),o=[];return o.push(...s.map(i=>i===""?l:[l,i].join("/"))),a&&o.push(...s),o.map(i=>e.startsWith("/")&&i===""?"/":i)}function jp(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:Fp(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Lp=/^:[\w-]+$/,Pp=3,Tp=2,zp=1,Mp=10,Ip=-2,vo=e=>e==="*";function Rp(e,t){let n=e.split("/"),r=n.length;return n.some(vo)&&(r+=Ip),t&&(r+=Tp),n.filter(a=>!vo(a)).reduce((a,l)=>a+(Lp.test(l)?Pp:l===""?zp:Mp),r)}function Fp(e,t){return e.length===t.length&&e.slice(0,-1).every((r,a)=>r===t[a])?e[e.length-1]-t[t.length-1]:0}function Op(e,t,n){let{routesMeta:r}=e,a={},l="/",s=[];for(let o=0;o<r.length;++o){let i=r[o],u=o===r.length-1,h=l==="/"?t:t.slice(l.length)||"/",f=Ap({path:i.relativePath,caseSensitive:i.caseSensitive,end:u},h),m=i.route;if(!f)return null;Object.assign(a,f.params),s.push({params:a,pathname:pt([l,f.pathname]),pathnameBase:$p(pt([l,f.pathnameBase])),route:m}),f.pathnameBase!=="/"&&(l=pt([l,f.pathnameBase]))}return s}function Ap(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Dp(e.path,e.caseSensitive,e.end),a=t.match(n);if(!a)return null;let l=a[0],s=l.replace(/(.)\/+$/,"$1"),o=a.slice(1);return{params:r.reduce((u,h,f)=>{let{paramName:m,isOptional:g}=h;if(m==="*"){let b=o[f]||"";s=l.slice(0,l.length-b.length).replace(/(.)\/+$/,"$1")}const y=o[f];return g&&!y?u[m]=void 0:u[m]=(y||"").replace(/%2F/g,"/"),u},{}),pathname:l,pathnameBase:s,pattern:e}}function Dp(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Gs(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],a="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(s,o,i)=>(r.push({paramName:o,isOptional:i!=null}),i?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),a+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?a+="\\/*$":e!==""&&e!=="/"&&(a+="(?:(?=\\/|$))"),[new RegExp(a,t?void 0:"i"),r]}function Up(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Gs(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Zs(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}const Bp=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Wp=e=>Bp.test(e);function Vp(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:a=""}=typeof e=="string"?hn(e):e,l;if(n)if(Wp(n))l=n;else{if(n.includes("//")){let s=n;n=n.replace(/\/\/+/g,"/"),Gs(!1,"Pathnames cannot have embedded double slashes - normalizing "+(s+" -> "+n))}n.startsWith("/")?l=xo(n.substring(1),"/"):l=xo(n,t)}else l=t;return{pathname:l,search:Qp(r),hash:Yp(a)}}function xo(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(a=>{a===".."?n.length>1&&n.pop():a!=="."&&n.push(a)}),n.length>1?n.join("/"):"/"}function sl(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Hp(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function qs(e,t){let n=Hp(e);return t?n.map((r,a)=>a===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function ei(e,t,n,r){r===void 0&&(r=!1);let a;typeof e=="string"?a=hn(e):(a=ar({},e),Y(!a.pathname||!a.pathname.includes("?"),sl("?","pathname","search",a)),Y(!a.pathname||!a.pathname.includes("#"),sl("#","pathname","hash",a)),Y(!a.search||!a.search.includes("#"),sl("#","search","hash",a)));let l=e===""||a.pathname==="",s=l?"/":a.pathname,o;if(s==null)o=n;else{let f=t.length-1;if(!r&&s.startsWith("..")){let m=s.split("/");for(;m[0]==="..";)m.shift(),f-=1;a.pathname=m.join("/")}o=f>=0?t[f]:"/"}let i=Vp(a,o),u=s&&s!=="/"&&s.endsWith("/"),h=(l||s===".")&&n.endsWith("/");return!i.pathname.endsWith("/")&&(u||h)&&(i.pathname+="/"),i}const pt=e=>e.join("/").replace(/\/\/+/g,"/"),$p=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Qp=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Yp=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Kp(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Ac=["post","put","patch","delete"];new Set(Ac);const Xp=["get",...Ac];new Set(Xp);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function lr(){return lr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},lr.apply(this,arguments)}const ti=k.createContext(null),Jp=k.createContext(null),yt=k.createContext(null),Pa=k.createContext(null),bt=k.createContext({outlet:null,matches:[],isDataRoute:!1}),Dc=k.createContext(null);function Gp(e,t){let{relative:n}=t===void 0?{}:t;vn()||Y(!1);let{basename:r,navigator:a}=k.useContext(yt),{hash:l,pathname:s,search:o}=Bc(e,{relative:n}),i=s;return r!=="/"&&(i=s==="/"?r:pt([r,s])),a.createHref({pathname:i,search:o,hash:l})}function vn(){return k.useContext(Pa)!=null}function xn(){return vn()||Y(!1),k.useContext(Pa).location}function Uc(e){k.useContext(yt).static||k.useLayoutEffect(e)}function dr(){let{isDataRoute:e}=k.useContext(bt);return e?cm():Zp()}function Zp(){vn()||Y(!1);let e=k.useContext(ti),{basename:t,future:n,navigator:r}=k.useContext(yt),{matches:a}=k.useContext(bt),{pathname:l}=xn(),s=JSON.stringify(qs(a,n.v7_relativeSplatPath)),o=k.useRef(!1);return Uc(()=>{o.current=!0}),k.useCallback(function(u,h){if(h===void 0&&(h={}),!o.current)return;if(typeof u=="number"){r.go(u);return}let f=ei(u,JSON.parse(s),l,h.relative==="path");e==null&&t!=="/"&&(f.pathname=f.pathname==="/"?t:pt([t,f.pathname])),(h.replace?r.replace:r.push)(f,h.state,h)},[t,r,s,l,e])}function Bc(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=k.useContext(yt),{matches:a}=k.useContext(bt),{pathname:l}=xn(),s=JSON.stringify(qs(a,r.v7_relativeSplatPath));return k.useMemo(()=>ei(e,JSON.parse(s),l,n==="path"),[e,s,l,n])}function qp(e,t){return em(e,t)}function em(e,t,n,r){vn()||Y(!1);let{navigator:a}=k.useContext(yt),{matches:l}=k.useContext(bt),s=l[l.length-1],o=s?s.params:{};s&&s.pathname;let i=s?s.pathnameBase:"/";s&&s.route;let u=xn(),h;if(t){var f;let _=typeof t=="string"?hn(t):t;i==="/"||(f=_.pathname)!=null&&f.startsWith(i)||Y(!1),h=_}else h=u;let m=h.pathname||"/",g=m;if(i!=="/"){let _=i.replace(/^\//,"").split("/");g="/"+m.replace(/^\//,"").split("/").slice(_.length).join("/")}let y=Cp(e,{pathname:g}),b=lm(y&&y.map(_=>Object.assign({},_,{params:Object.assign({},o,_.params),pathname:pt([i,a.encodeLocation?a.encodeLocation(_.pathname).pathname:_.pathname]),pathnameBase:_.pathnameBase==="/"?i:pt([i,a.encodeLocation?a.encodeLocation(_.pathnameBase).pathname:_.pathnameBase])})),l,n,r);return t&&b?k.createElement(Pa.Provider,{value:{location:lr({pathname:"/",search:"",hash:"",state:null,key:"default"},h),navigationType:at.Pop}},b):b}function tm(){let e=um(),t=Kp(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,a={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return k.createElement(k.Fragment,null,k.createElement("h2",null,"Unexpected Application Error!"),k.createElement("h3",{style:{fontStyle:"italic"}},t),n?k.createElement("pre",{style:a},n):null,null)}const nm=k.createElement(tm,null);class rm extends k.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?k.createElement(bt.Provider,{value:this.props.routeContext},k.createElement(Dc.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function am(e){let{routeContext:t,match:n,children:r}=e,a=k.useContext(ti);return a&&a.static&&a.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=n.route.id),k.createElement(bt.Provider,{value:t},r)}function lm(e,t,n,r){var a;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var l;if(!n)return null;if(n.errors)e=n.matches;else if((l=r)!=null&&l.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let s=e,o=(a=n)==null?void 0:a.errors;if(o!=null){let h=s.findIndex(f=>f.route.id&&(o==null?void 0:o[f.route.id])!==void 0);h>=0||Y(!1),s=s.slice(0,Math.min(s.length,h+1))}let i=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let h=0;h<s.length;h++){let f=s[h];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(u=h),f.route.id){let{loaderData:m,errors:g}=n,y=f.route.loader&&m[f.route.id]===void 0&&(!g||g[f.route.id]===void 0);if(f.route.lazy||y){i=!0,u>=0?s=s.slice(0,u+1):s=[s[0]];break}}}return s.reduceRight((h,f,m)=>{let g,y=!1,b=null,_=null;n&&(g=o&&f.route.id?o[f.route.id]:void 0,b=f.route.errorElement||nm,i&&(u<0&&m===0?(dm("route-fallback"),y=!0,_=null):u===m&&(y=!0,_=f.route.hydrateFallbackElement||null)));let d=t.concat(s.slice(0,m+1)),c=()=>{let p;return g?p=b:y?p=_:f.route.Component?p=k.createElement(f.route.Component,null):f.route.element?p=f.route.element:p=h,k.createElement(am,{match:f,routeContext:{outlet:h,matches:d,isDataRoute:n!=null},children:p})};return n&&(f.route.ErrorBoundary||f.route.errorElement||m===0)?k.createElement(rm,{location:n.location,revalidation:n.revalidation,component:b,error:g,children:c(),routeContext:{outlet:null,matches:d,isDataRoute:!0}}):c()},null)}var Wc=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Wc||{}),Vc=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Vc||{});function sm(e){let t=k.useContext(ti);return t||Y(!1),t}function im(e){let t=k.useContext(Jp);return t||Y(!1),t}function om(e){let t=k.useContext(bt);return t||Y(!1),t}function Hc(e){let t=om(),n=t.matches[t.matches.length-1];return n.route.id||Y(!1),n.route.id}function um(){var e;let t=k.useContext(Dc),n=im(),r=Hc();return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function cm(){let{router:e}=sm(Wc.UseNavigateStable),t=Hc(Vc.UseNavigateStable),n=k.useRef(!1);return Uc(()=>{n.current=!0}),k.useCallback(function(a,l){l===void 0&&(l={}),n.current&&(typeof a=="number"?e.navigate(a):e.navigate(a,lr({fromRouteId:t},l)))},[e,t])}const go={};function dm(e,t,n){go[e]||(go[e]=!0)}function fm(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function yo(e){let{to:t,replace:n,state:r,relative:a}=e;vn()||Y(!1);let{future:l,static:s}=k.useContext(yt),{matches:o}=k.useContext(bt),{pathname:i}=xn(),u=dr(),h=ei(t,qs(o,l.v7_relativeSplatPath),i,a==="path"),f=JSON.stringify(h);return k.useEffect(()=>u(JSON.parse(f),{replace:n,state:r,relative:a}),[u,f,a,n,r]),null}function Dt(e){Y(!1)}function pm(e){let{basename:t="/",children:n=null,location:r,navigationType:a=at.Pop,navigator:l,static:s=!1,future:o}=e;vn()&&Y(!1);let i=t.replace(/^\/*/,"/"),u=k.useMemo(()=>({basename:i,navigator:l,static:s,future:lr({v7_relativeSplatPath:!1},o)}),[i,o,l,s]);typeof r=="string"&&(r=hn(r));let{pathname:h="/",search:f="",hash:m="",state:g=null,key:y="default"}=r,b=k.useMemo(()=>{let _=Zs(h,i);return _==null?null:{location:{pathname:_,search:f,hash:m,state:g,key:y},navigationType:a}},[i,h,f,m,g,y,a]);return b==null?null:k.createElement(yt.Provider,{value:u},k.createElement(Pa.Provider,{children:n,value:b}))}function mm(e){let{children:t,location:n}=e;return qp(ts(t),n)}new Promise(()=>{});function ts(e,t){t===void 0&&(t=[]);let n=[];return k.Children.forEach(e,(r,a)=>{if(!k.isValidElement(r))return;let l=[...t,a];if(r.type===k.Fragment){n.push.apply(n,ts(r.props.children,l));return}r.type!==Dt&&Y(!1),!r.props.index||!r.props.children||Y(!1);let s={id:r.props.id||l.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(s.children=ts(r.props.children,l)),n.push(s)}),n}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ns(){return ns=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ns.apply(this,arguments)}function hm(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,l;for(l=0;l<r.length;l++)a=r[l],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function vm(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function xm(e,t){return e.button===0&&(!t||t==="_self")&&!vm(e)}const gm=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],ym="6";try{window.__reactRouterVersion=ym}catch{}const bm="startTransition",bo=cd[bm];function wm(e){let{basename:t,children:n,future:r,window:a}=e,l=k.useRef();l.current==null&&(l.current=Sp({window:a,v5Compat:!0}));let s=l.current,[o,i]=k.useState({action:s.action,location:s.location}),{v7_startTransition:u}=r||{},h=k.useCallback(f=>{u&&bo?bo(()=>i(f)):i(f)},[i,u]);return k.useLayoutEffect(()=>s.listen(h),[s,h]),k.useEffect(()=>fm(r),[r]),k.createElement(pm,{basename:t,children:n,location:o.location,navigationType:o.action,navigator:s,future:r})}const km=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Sm=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,$c=k.forwardRef(function(t,n){let{onClick:r,relative:a,reloadDocument:l,replace:s,state:o,target:i,to:u,preventScrollReset:h,viewTransition:f}=t,m=hm(t,gm),{basename:g}=k.useContext(yt),y,b=!1;if(typeof u=="string"&&Sm.test(u)&&(y=u,km))try{let p=new URL(window.location.href),x=u.startsWith("//")?new URL(p.protocol+u):new URL(u),S=Zs(x.pathname,g);x.origin===p.origin&&S!=null?u=S+x.search+x.hash:b=!0}catch{}let _=Gp(u,{relative:a}),d=_m(u,{replace:s,state:o,target:i,preventScrollReset:h,relative:a,viewTransition:f});function c(p){r&&r(p),p.defaultPrevented||d(p)}return k.createElement("a",ns({},m,{href:y||_,onClick:b||l?r:c,ref:n,target:i}))});var wo;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(wo||(wo={}));var ko;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(ko||(ko={}));function _m(e,t){let{target:n,replace:r,state:a,preventScrollReset:l,relative:s,viewTransition:o}=t===void 0?{}:t,i=dr(),u=xn(),h=Bc(e,{relative:s});return k.useCallback(f=>{if(xm(f,n)){f.preventDefault();let m=r!==void 0?r:pa(u)===pa(h);i(e,{replace:m,state:a,preventScrollReset:l,relative:s,viewTransition:o})}},[u,i,h,r,a,n,e,l,s,o])}function Em({title:e,html:t}){const n=k.useRef(null),r=dr();k.useEffect(()=>{document.title=`${e} | Expense Tracker React`},[e]);const a=i=>/\bsettings\b/.test(i)||/\bperson\b/.test(i)?"/settings":/\btransactions?\b/.test(i)||/\bactivity\b/.test(i)?"/transactions-list":/\bbudgets?\b/.test(i)||/\baccounts?\b/.test(i)?"/budgets-categories":/\bdashboard\b/.test(i)||/\bhome\b/.test(i)?"/dashboard-3":/\badd expense\b/.test(i)?"/add-expense":null,l=i=>{Array.from(i.querySelectorAll("span, p, a, div")).filter(f=>(f.textContent||"").trim().toLowerCase()==="analytics").forEach(f=>{const m=f.closest("a, button, div");m&&m.remove()}),Array.from(i.querySelectorAll(".material-symbols-outlined")).filter(f=>(f.textContent||"").trim().toLowerCase()==="bar_chart").forEach(f=>{const m=f.closest("a, button, div");m&&/analytics/i.test(m.textContent||"")&&m.remove()})},s=i=>{const u=localStorage.getItem("architectUserName")||"",h=localStorage.getItem("architectUserEmail")||"";if(!u&&!h)return;Array.from(i.querySelectorAll("*")).forEach(m=>{if(m.children.length>0)return;const g=(m.textContent||"").trim();u&&g==="Alex Sterling"&&(m.textContent=u),h&&g==="alex.sterling@architect-finance.com"&&(m.textContent=h)})},o=()=>{const i=n.current;if(!i||!i.contentDocument)return;i.__cleanupBridge&&i.__cleanupBridge();const u=i.contentDocument;l(u),s(u);const h=f=>{var c;const m=f.target.closest("a, button, div");if(!m)return;const g=m.getAttribute("href"),y=(m.textContent||"").toLowerCase(),b=(((c=m.querySelector(".material-symbols-outlined"))==null?void 0:c.textContent)||"").toLowerCase(),_=`${y} ${b}`,d=a(_);d&&(g==="#"||m.tagName==="BUTTON"||m.tagName==="DIV")&&(f.preventDefault(),r(d))};u.addEventListener("click",h),i.__cleanupBridge=()=>u.removeEventListener("click",h)};return v.jsx("div",{className:"legacy-page",children:v.jsx("iframe",{ref:n,title:e,className:"legacy-iframe",srcDoc:t,sandbox:"allow-forms allow-modals allow-popups allow-same-origin allow-scripts",onLoad:o})})}function Cm(){const e=dr();k.useEffect(()=>{document.title="Login | Expense Tracker React"},[]);const t=n=>{n.preventDefault(),e("/dashboard-3")};return v.jsxs("div",{className:"relative min-h-screen overflow-hidden bg-background px-6 py-12 font-body text-on-surface antialiased selection:bg-primary/30",children:[v.jsxs("div",{className:"absolute inset-0 z-0 overflow-hidden",children:[v.jsx("div",{className:"absolute left-[-10%] top-[-10%] h-[50%] w-[50%] rounded-full bg-primary/5 blur-[120px]"}),v.jsx("div",{className:"absolute bottom-[-10%] right-[-10%] h-[50%] w-[50%] rounded-full bg-tertiary/5 blur-[120px]"}),v.jsx("div",{className:"absolute inset-0 opacity-20 mix-blend-overlay",children:v.jsx("img",{alt:"Architectural skyscraper detail",className:"h-full w-full object-cover",src:"https://lh3.googleusercontent.com/aida-public/AB6AXuA48QYAS8tMiV2OzMwBUCVv_aK8pVacsNGqsvygBgyn7a9WjQng5iKgDlmVfDujUphsXgeqtGkprCVS4O1dfh1Yb6cKxn677incNxdlRsOcSYMSjr8-ZX6ohOeWOW5wCfS20Eferbxtj2munJJHb0mUv8twoNag7Y5nwVCtN-JvdQBlnW6DPkPMtZfUUgvC9eWMO933Pz_F-FM4UlOvloRWUAZVpsF8DdW04RwuJCTEYbXS0EKXJ7BaZ05prB0MUpuFYi25_0pMhxc"})})]}),v.jsx("main",{className:"relative z-10 mx-auto flex min-h-screen w-full max-w-md items-center justify-center",children:v.jsxs("div",{className:"w-full",children:[v.jsxs("div",{className:"glass-card rounded-xl border border-outline-variant/10 p-10 shadow-[0_40px_100px_rgba(0,0,0,0.4)] xl:p-12",children:[v.jsxs("div",{className:"mb-10 text-center",children:[v.jsx("div",{className:"mb-6 inline-flex items-center justify-center rounded-xl bg-surface-container-highest p-3",children:v.jsx("span",{className:"material-symbols-outlined text-3xl text-primary",children:"account_balance"})}),v.jsx("h1",{className:"mb-2 font-headline text-3xl font-black tracking-tight text-on-surface",children:"Architect"}),v.jsx("p",{className:"font-label text-sm font-medium uppercase tracking-widest text-on-surface-variant",children:"Wealth Management"})]}),v.jsxs("form",{className:"space-y-6",onSubmit:t,children:[v.jsxs("div",{className:"space-y-2",children:[v.jsx("label",{className:"ml-1 block font-label text-xs font-semibold text-on-surface-variant",htmlFor:"email",children:"EMAIL ADDRESS"}),v.jsxs("div",{className:"group relative",children:[v.jsx("div",{className:"pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4",children:v.jsx("span",{className:"material-symbols-outlined text-lg text-on-surface-variant",children:"mail"})}),v.jsx("input",{id:"email",name:"email",type:"email",placeholder:"name@company.com",className:"block w-full rounded-xl border-none bg-surface-container-high py-4 pl-12 pr-4 text-on-surface placeholder:text-outline/50 transition-all duration-300 focus:ring-2 focus:ring-primary/20"})]})]}),v.jsxs("div",{className:"space-y-2",children:[v.jsxs("div",{className:"ml-1 flex items-center justify-between",children:[v.jsx("label",{className:"block font-label text-xs font-semibold text-on-surface-variant",htmlFor:"password",children:"PASSWORD"}),v.jsx("a",{className:"text-xs font-semibold text-primary transition-colors hover:text-primary-fixed",href:"#",children:"Forgot Password?"})]}),v.jsxs("div",{className:"group relative",children:[v.jsx("div",{className:"pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4",children:v.jsx("span",{className:"material-symbols-outlined text-lg text-on-surface-variant",children:"lock"})}),v.jsx("input",{id:"password",name:"password",type:"password",placeholder:"••••••••",className:"block w-full rounded-xl border-none bg-surface-container-high py-4 pl-12 pr-12 text-on-surface placeholder:text-outline/50 transition-all duration-300 focus:ring-2 focus:ring-primary/20"}),v.jsx("button",{className:"absolute inset-y-0 right-0 flex items-center pr-4 text-on-surface-variant transition-colors hover:text-on-surface",type:"button",children:v.jsx("span",{className:"material-symbols-outlined text-lg",children:"visibility"})})]})]}),v.jsx("div",{className:"pt-2",children:v.jsx("button",{className:"editorial-gradient w-full rounded-xl py-4 font-headline font-bold text-on-primary-fixed shadow-lg transition-all duration-200 hover:scale-[1.01] hover:shadow-primary/20 active:scale-[0.99]",type:"submit",children:"Sign In"})})]}),v.jsx("div",{className:"mt-10 text-center",children:v.jsxs("p",{className:"text-sm text-on-surface-variant",children:["New to Architect?"," ",v.jsx($c,{className:"font-bold text-primary transition-colors hover:text-primary-fixed",to:"/signup",children:"Create your account"})]})})]}),v.jsxs("div",{className:"mt-8 flex justify-center space-x-6 text-xs font-label uppercase tracking-widest text-outline opacity-50",children:[v.jsx("a",{className:"transition-colors hover:text-on-surface",href:"#",children:"Privacy Policy"}),v.jsx("a",{className:"transition-colors hover:text-on-surface",href:"#",children:"Terms of Service"}),v.jsx("a",{className:"transition-colors hover:text-on-surface",href:"#",children:"System Status"})]})]})}),v.jsx("div",{className:"pointer-events-none fixed bottom-0 left-0 z-20 h-32 w-full bg-gradient-to-t from-background to-transparent"})]})}function Nm(){const e=dr();k.useEffect(()=>{document.title="Sign Up | Expense Tracker React"},[]);const t=n=>{n.preventDefault();const r=new FormData(n.currentTarget),a=String(r.get("full-name")||"").trim(),l=String(r.get("email")||"").trim();a&&localStorage.setItem("architectUserName",a),l&&localStorage.setItem("architectUserEmail",l),e("/dashboard-3")};return v.jsxs("div",{className:"min-h-screen bg-background text-on-background selection:bg-primary-container selection:text-on-primary-container",children:[v.jsxs("header",{className:"fixed top-0 z-50 flex w-full items-center justify-between px-6 py-8",children:[v.jsxs("div",{className:"flex items-center gap-2",children:[v.jsx("div",{className:"flex h-8 w-8 items-center justify-center rounded-lg bg-primary",children:v.jsx("span",{className:"material-symbols-outlined text-xl text-on-primary",style:{fontVariationSettings:"'FILL' 1"},children:"architecture"})}),v.jsx("span",{className:"font-headline text-2xl font-bold tracking-tighter text-slate-50",children:"Architect"})]}),v.jsx("div",{children:v.jsx("a",{className:"font-label text-sm font-medium text-on-surface-variant transition-colors hover:text-primary",href:"#",children:"Help Center"})})]}),v.jsxs("main",{className:"relative flex flex-grow items-center justify-center overflow-hidden px-6 py-24",children:[v.jsx("div",{className:"pointer-events-none absolute right-[-5%] top-[-10%] h-[600px] w-[600px] rounded-full bg-primary/10 blur-[120px]"}),v.jsx("div",{className:"pointer-events-none absolute bottom-[-10%] left-[-5%] h-[500px] w-[500px] rounded-full bg-tertiary/5 blur-[100px]"}),v.jsxs("div",{className:"z-10 w-full max-w-[480px]",children:[v.jsxs("div",{className:"glass-panel rounded-xl p-8 shadow-2xl md:p-12",children:[v.jsxs("div",{className:"mb-10",children:[v.jsx("h1",{className:"mb-2 font-headline text-3xl font-extrabold tracking-tight text-on-surface",children:"Build your future."}),v.jsx("p",{className:"body-md text-on-surface-variant",children:"Secure wealth management for the modern era."})]}),v.jsxs("form",{className:"space-y-6",onSubmit:t,children:[v.jsxs("div",{className:"space-y-2",children:[v.jsx("label",{className:"ml-1 block font-label text-xs font-semibold uppercase tracking-wider text-on-surface-variant",htmlFor:"full-name",children:"Full Name"}),v.jsxs("div",{className:"relative",children:[v.jsx("div",{className:"pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4",children:v.jsx("span",{className:"material-symbols-outlined text-lg text-outline",children:"person"})}),v.jsx("input",{id:"full-name",name:"full-name",type:"text",placeholder:"Johnathan Sterling",className:"w-full rounded-xl border-none bg-surface-container-high py-4 pl-12 pr-4 font-body text-on-surface placeholder:text-outline-variant transition-all focus:ring-2 focus:ring-primary/20"})]})]}),v.jsxs("div",{className:"space-y-2",children:[v.jsx("label",{className:"ml-1 block font-label text-xs font-semibold uppercase tracking-wider text-on-surface-variant",htmlFor:"email",children:"Email Address"}),v.jsxs("div",{className:"relative",children:[v.jsx("div",{className:"pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4",children:v.jsx("span",{className:"material-symbols-outlined text-lg text-outline",children:"mail"})}),v.jsx("input",{id:"email",name:"email",type:"email",placeholder:"john@architect.com",className:"w-full rounded-xl border-none bg-surface-container-high py-4 pl-12 pr-4 font-body text-on-surface placeholder:text-outline-variant transition-all focus:ring-2 focus:ring-primary/20"})]})]}),v.jsxs("div",{className:"space-y-2",children:[v.jsx("label",{className:"ml-1 block font-label text-xs font-semibold uppercase tracking-wider text-on-surface-variant",htmlFor:"password",children:"Password"}),v.jsxs("div",{className:"relative",children:[v.jsx("div",{className:"pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4",children:v.jsx("span",{className:"material-symbols-outlined text-lg text-outline",children:"lock"})}),v.jsx("input",{id:"password",name:"password",type:"password",placeholder:"••••••••••••",className:"w-full rounded-xl border-none bg-surface-container-high py-4 pl-12 pr-4 font-body text-on-surface placeholder:text-outline-variant transition-all focus:ring-2 focus:ring-primary/20"})]})]}),v.jsx("div",{className:"pt-2",children:v.jsx("button",{className:"bg-architect-gradient w-full rounded-xl py-4 font-headline text-lg font-bold text-slate-50 shadow-lg shadow-primary/10 transition-all hover:opacity-90 active:scale-[0.98]",type:"submit",children:"Create Account"})})]}),v.jsxs("p",{className:"mt-10 text-center font-body text-sm text-on-surface-variant",children:["Already have an account?"," ",v.jsx($c,{className:"ml-1 font-bold text-primary hover:underline",to:"/login",children:"Sign in"})]})]}),v.jsxs("div",{className:"mt-8 flex items-center justify-center gap-6 opacity-40",children:[v.jsxs("div",{className:"flex items-center gap-2",children:[v.jsx("span",{className:"material-symbols-outlined text-sm",children:"security"}),v.jsx("span",{className:"text-[10px] font-bold uppercase tracking-tighter",children:"Bank-Grade Encryption"})]}),v.jsxs("div",{className:"flex items-center gap-2",children:[v.jsx("span",{className:"material-symbols-outlined text-sm",children:"verified_user"}),v.jsx("span",{className:"text-[10px] font-bold uppercase tracking-tighter",children:"SIPC Protected"})]})]})]})]}),v.jsxs("footer",{className:"mt-auto flex w-full flex-col items-center gap-4 bg-slate-950 py-8 text-center",children:[v.jsx("p",{className:"font-inter text-xs uppercase tracking-wide text-slate-500",children:"© 2024 Architect Financial. Structural Serenity."}),v.jsxs("div",{className:"flex gap-6",children:[v.jsx("a",{className:"font-inter text-xs uppercase tracking-wide text-slate-500 transition-colors hover:text-slate-300",href:"#",children:"Terms"}),v.jsx("a",{className:"font-inter text-xs uppercase tracking-wide text-slate-500 transition-colors hover:text-slate-300",href:"#",children:"Privacy"}),v.jsx("a",{className:"font-inter text-xs uppercase tracking-wide text-slate-500 transition-colors hover:text-slate-300",href:"#",children:"Security"})]})]})]})}const jm=`<!DOCTYPE html>

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
</body></html>`,Lm=`<!DOCTYPE html>

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
</body></html>`,Pm=`<!DOCTYPE html>

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
</body></html>`,Tm=`<!DOCTYPE html>

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
</body></html>`,zm=`<!DOCTYPE html>

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
</body></html>`,Mm=`<!DOCTYPE html>

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
</body></html>`,Im=e=>e.replace(/\sdata-alt="[^"]*"/g,"").replace(/\sdata-icon="[^"]*"/g,""),At=(e,t)=>({title:e,html:Im(t)}),Rm={"/dashboard-3":At("Dashboard 3",Tm),"/add-expense":At("Add Expense",jm),"/add-expense-fixed-layout":At("Add Expense Fixed Layout",Lm),"/budgets-categories":At("Budgets & Categories",Pm),"/settings":At("Settings",zm),"/transactions-list":At("Transactions",Mm)};function Fm(){const e=xn(),[t,n]=k.useState(!1),r=k.useRef(!0);return k.useEffect(()=>{if(r.current){r.current=!1;return}n(!0);const a=setTimeout(()=>{n(!1)},550);return()=>clearTimeout(a)},[e.pathname]),v.jsxs(v.Fragment,{children:[t?v.jsx("div",{className:"route-loader-overlay",role:"status","aria-live":"polite","aria-label":"Loading next page",children:v.jsxs("div",{className:"route-loader-card",children:[v.jsx("div",{className:"route-loader-spinner"}),v.jsx("p",{className:"route-loader-text",children:"Loading workspace..."})]})}):null,v.jsxs(mm,{children:[v.jsx(Dt,{path:"/",element:v.jsx(yo,{to:"/login",replace:!0})}),v.jsx(Dt,{path:"/login",element:v.jsx(Cm,{})}),v.jsx(Dt,{path:"/signup",element:v.jsx(Nm,{})}),Object.entries(Rm).map(([a,l])=>v.jsx(Dt,{path:a,element:v.jsx(Em,{title:l.title,html:l.html})},a)),v.jsx(Dt,{path:"*",element:v.jsx(yo,{to:"/login",replace:!0})})]})]})}il.createRoot(document.getElementById("root")).render(v.jsx(Mo.StrictMode,{children:v.jsx(wm,{children:v.jsx(Fm,{})})}));
