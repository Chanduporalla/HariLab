(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const i of l)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(l){const i={};return l.integrity&&(i.integrity=l.integrity),l.referrerPolicy&&(i.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?i.credentials="include":l.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(l){if(l.ep)return;l.ep=!0;const i=n(l);fetch(l.href,i)}})();var $u={exports:{}},tl={},Gu={exports:{}},L={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kn=Symbol.for("react.element"),ic=Symbol.for("react.portal"),oc=Symbol.for("react.fragment"),uc=Symbol.for("react.strict_mode"),sc=Symbol.for("react.profiler"),ac=Symbol.for("react.provider"),cc=Symbol.for("react.context"),dc=Symbol.for("react.forward_ref"),fc=Symbol.for("react.suspense"),pc=Symbol.for("react.memo"),mc=Symbol.for("react.lazy"),Oo=Symbol.iterator;function hc(e){return e===null||typeof e!="object"?null:(e=Oo&&e[Oo]||e["@@iterator"],typeof e=="function"?e:null)}var Qu={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Zu=Object.assign,Yu={};function on(e,t,n){this.props=e,this.context=t,this.refs=Yu,this.updater=n||Qu}on.prototype.isReactComponent={};on.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};on.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Ku(){}Ku.prototype=on.prototype;function Ai(e,t,n){this.props=e,this.context=t,this.refs=Yu,this.updater=n||Qu}var Ui=Ai.prototype=new Ku;Ui.constructor=Ai;Zu(Ui,on.prototype);Ui.isPureReactComponent=!0;var Ho=Array.isArray,Xu=Object.prototype.hasOwnProperty,zi={current:null},Ju={key:!0,ref:!0,__self:!0,__source:!0};function qu(e,t,n){var r,l={},i=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(i=""+t.key),t)Xu.call(t,r)&&!Ju.hasOwnProperty(r)&&(l[r]=t[r]);var u=arguments.length-2;if(u===1)l.children=n;else if(1<u){for(var s=Array(u),c=0;c<u;c++)s[c]=arguments[c+2];l.children=s}if(e&&e.defaultProps)for(r in u=e.defaultProps,u)l[r]===void 0&&(l[r]=u[r]);return{$$typeof:Kn,type:e,key:i,ref:o,props:l,_owner:zi.current}}function gc(e,t){return{$$typeof:Kn,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function ji(e){return typeof e=="object"&&e!==null&&e.$$typeof===Kn}function vc(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Ro=/\/+/g;function El(e,t){return typeof e=="object"&&e!==null&&e.key!=null?vc(""+e.key):t.toString(36)}function Sr(e,t,n,r,l){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case Kn:case ic:o=!0}}if(o)return o=e,l=l(o),e=r===""?"."+El(o,0):r,Ho(l)?(n="",e!=null&&(n=e.replace(Ro,"$&/")+"/"),Sr(l,t,n,"",function(c){return c})):l!=null&&(ji(l)&&(l=gc(l,n+(!l.key||o&&o.key===l.key?"":(""+l.key).replace(Ro,"$&/")+"/")+e)),t.push(l)),1;if(o=0,r=r===""?".":r+":",Ho(e))for(var u=0;u<e.length;u++){i=e[u];var s=r+El(i,u);o+=Sr(i,t,n,s,l)}else if(s=hc(e),typeof s=="function")for(e=s.call(e),u=0;!(i=e.next()).done;)i=i.value,s=r+El(i,u++),o+=Sr(i,t,n,s,l);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function nr(e,t,n){if(e==null)return e;var r=[],l=0;return Sr(e,r,"","",function(i){return t.call(n,i,l++)}),r}function yc(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ue={current:null},Er={transition:null},Sc={ReactCurrentDispatcher:ue,ReactCurrentBatchConfig:Er,ReactCurrentOwner:zi};function bu(){throw Error("act(...) is not supported in production builds of React.")}L.Children={map:nr,forEach:function(e,t,n){nr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return nr(e,function(){t++}),t},toArray:function(e){return nr(e,function(t){return t})||[]},only:function(e){if(!ji(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};L.Component=on;L.Fragment=oc;L.Profiler=sc;L.PureComponent=Ai;L.StrictMode=uc;L.Suspense=fc;L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Sc;L.act=bu;L.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Zu({},e.props),l=e.key,i=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,o=zi.current),t.key!==void 0&&(l=""+t.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(s in t)Xu.call(t,s)&&!Ju.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&u!==void 0?u[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){u=Array(s);for(var c=0;c<s;c++)u[c]=arguments[c+2];r.children=u}return{$$typeof:Kn,type:e.type,key:l,ref:i,props:r,_owner:o}};L.createContext=function(e){return e={$$typeof:cc,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:ac,_context:e},e.Consumer=e};L.createElement=qu;L.createFactory=function(e){var t=qu.bind(null,e);return t.type=e,t};L.createRef=function(){return{current:null}};L.forwardRef=function(e){return{$$typeof:dc,render:e}};L.isValidElement=ji;L.lazy=function(e){return{$$typeof:mc,_payload:{_status:-1,_result:e},_init:yc}};L.memo=function(e,t){return{$$typeof:pc,type:e,compare:t===void 0?null:t}};L.startTransition=function(e){var t=Er.transition;Er.transition={};try{e()}finally{Er.transition=t}};L.unstable_act=bu;L.useCallback=function(e,t){return ue.current.useCallback(e,t)};L.useContext=function(e){return ue.current.useContext(e)};L.useDebugValue=function(){};L.useDeferredValue=function(e){return ue.current.useDeferredValue(e)};L.useEffect=function(e,t){return ue.current.useEffect(e,t)};L.useId=function(){return ue.current.useId()};L.useImperativeHandle=function(e,t,n){return ue.current.useImperativeHandle(e,t,n)};L.useInsertionEffect=function(e,t){return ue.current.useInsertionEffect(e,t)};L.useLayoutEffect=function(e,t){return ue.current.useLayoutEffect(e,t)};L.useMemo=function(e,t){return ue.current.useMemo(e,t)};L.useReducer=function(e,t,n){return ue.current.useReducer(e,t,n)};L.useRef=function(e){return ue.current.useRef(e)};L.useState=function(e){return ue.current.useState(e)};L.useSyncExternalStore=function(e,t,n){return ue.current.useSyncExternalStore(e,t,n)};L.useTransition=function(){return ue.current.useTransition()};L.version="18.3.1";Gu.exports=L;var Pt=Gu.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ec=Pt,_c=Symbol.for("react.element"),Pc=Symbol.for("react.fragment"),wc=Object.prototype.hasOwnProperty,Nc=Ec.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Cc={key:!0,ref:!0,__self:!0,__source:!0};function es(e,t,n){var r,l={},i=null,o=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)wc.call(t,r)&&!Cc.hasOwnProperty(r)&&(l[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)l[r]===void 0&&(l[r]=t[r]);return{$$typeof:_c,type:e,key:i,ref:o,props:l,_owner:Nc.current}}tl.Fragment=Pc;tl.jsx=es;tl.jsxs=es;$u.exports=tl;var M=$u.exports,ts={exports:{}},ye={},ns={exports:{}},rs={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(w,T){var I=w.length;w.push(T);e:for(;0<I;){var $=I-1>>>1,K=w[$];if(0<l(K,T))w[$]=T,w[I]=K,I=$;else break e}}function n(w){return w.length===0?null:w[0]}function r(w){if(w.length===0)return null;var T=w[0],I=w.pop();if(I!==T){w[0]=I;e:for(var $=0,K=w.length,er=K>>>1;$<er;){var ht=2*($+1)-1,Sl=w[ht],gt=ht+1,tr=w[gt];if(0>l(Sl,I))gt<K&&0>l(tr,Sl)?(w[$]=tr,w[gt]=I,$=gt):(w[$]=Sl,w[ht]=I,$=ht);else if(gt<K&&0>l(tr,I))w[$]=tr,w[gt]=I,$=gt;else break e}}return T}function l(w,T){var I=w.sortIndex-T.sortIndex;return I!==0?I:w.id-T.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var o=Date,u=o.now();e.unstable_now=function(){return o.now()-u}}var s=[],c=[],h=1,m=null,p=3,y=!1,S=!1,E=!1,W=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,a=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function f(w){for(var T=n(c);T!==null;){if(T.callback===null)r(c);else if(T.startTime<=w)r(c),T.sortIndex=T.expirationTime,t(s,T);else break;T=n(c)}}function g(w){if(E=!1,f(w),!S)if(n(s)!==null)S=!0,vl(P);else{var T=n(c);T!==null&&yl(g,T.startTime-w)}}function P(w,T){S=!1,E&&(E=!1,d(k),k=-1),y=!0;var I=p;try{for(f(T),m=n(s);m!==null&&(!(m.expirationTime>T)||w&&!ke());){var $=m.callback;if(typeof $=="function"){m.callback=null,p=m.priorityLevel;var K=$(m.expirationTime<=T);T=e.unstable_now(),typeof K=="function"?m.callback=K:m===n(s)&&r(s),f(T)}else r(s);m=n(s)}if(m!==null)var er=!0;else{var ht=n(c);ht!==null&&yl(g,ht.startTime-T),er=!1}return er}finally{m=null,p=I,y=!1}}var N=!1,C=null,k=-1,B=5,D=-1;function ke(){return!(e.unstable_now()-D<B)}function an(){if(C!==null){var w=e.unstable_now();D=w;var T=!0;try{T=C(!0,w)}finally{T?cn():(N=!1,C=null)}}else N=!1}var cn;if(typeof a=="function")cn=function(){a(an)};else if(typeof MessageChannel<"u"){var xo=new MessageChannel,lc=xo.port2;xo.port1.onmessage=an,cn=function(){lc.postMessage(null)}}else cn=function(){W(an,0)};function vl(w){C=w,N||(N=!0,cn())}function yl(w,T){k=W(function(){w(e.unstable_now())},T)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(w){w.callback=null},e.unstable_continueExecution=function(){S||y||(S=!0,vl(P))},e.unstable_forceFrameRate=function(w){0>w||125<w?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):B=0<w?Math.floor(1e3/w):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function(w){switch(p){case 1:case 2:case 3:var T=3;break;default:T=p}var I=p;p=T;try{return w()}finally{p=I}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(w,T){switch(w){case 1:case 2:case 3:case 4:case 5:break;default:w=3}var I=p;p=w;try{return T()}finally{p=I}},e.unstable_scheduleCallback=function(w,T,I){var $=e.unstable_now();switch(typeof I=="object"&&I!==null?(I=I.delay,I=typeof I=="number"&&0<I?$+I:$):I=$,w){case 1:var K=-1;break;case 2:K=250;break;case 5:K=1073741823;break;case 4:K=1e4;break;default:K=5e3}return K=I+K,w={id:h++,callback:T,priorityLevel:w,startTime:I,expirationTime:K,sortIndex:-1},I>$?(w.sortIndex=I,t(c,w),n(s)===null&&w===n(c)&&(E?(d(k),k=-1):E=!0,yl(g,I-$))):(w.sortIndex=K,t(s,w),S||y||(S=!0,vl(P))),w},e.unstable_shouldYield=ke,e.unstable_wrapCallback=function(w){var T=p;return function(){var I=p;p=T;try{return w.apply(this,arguments)}finally{p=I}}}})(rs);ns.exports=rs;var kc=ns.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tc=Pt,ve=kc;function v(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ls=new Set,Mn={};function Dt(e,t){qt(e,t),qt(e+"Capture",t)}function qt(e,t){for(Mn[e]=t,e=0;e<t.length;e++)ls.add(t[e])}var $e=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ql=Object.prototype.hasOwnProperty,Ic=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Wo={},Ao={};function Lc(e){return Ql.call(Ao,e)?!0:Ql.call(Wo,e)?!1:Ic.test(e)?Ao[e]=!0:(Wo[e]=!0,!1)}function Dc(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Fc(e,t,n,r){if(t===null||typeof t>"u"||Dc(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function se(e,t,n,r,l,i,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=l,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=o}var ee={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ee[e]=new se(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ee[t]=new se(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ee[e]=new se(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ee[e]=new se(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ee[e]=new se(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ee[e]=new se(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ee[e]=new se(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ee[e]=new se(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ee[e]=new se(e,5,!1,e.toLowerCase(),null,!1,!1)});var Vi=/[\-:]([a-z])/g;function Bi(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Vi,Bi);ee[t]=new se(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Vi,Bi);ee[t]=new se(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Vi,Bi);ee[t]=new se(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ee[e]=new se(e,1,!1,e.toLowerCase(),null,!1,!1)});ee.xlinkHref=new se("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ee[e]=new se(e,1,!1,e.toLowerCase(),null,!0,!0)});function $i(e,t,n,r){var l=ee.hasOwnProperty(t)?ee[t]:null;(l!==null?l.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Fc(t,n,l,r)&&(n=null),r||l===null?Lc(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):l.mustUseProperty?e[l.propertyName]=n===null?l.type===3?!1:"":n:(t=l.attributeName,r=l.attributeNamespace,n===null?e.removeAttribute(t):(l=l.type,n=l===3||l===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Ye=Tc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,rr=Symbol.for("react.element"),Ot=Symbol.for("react.portal"),Ht=Symbol.for("react.fragment"),Gi=Symbol.for("react.strict_mode"),Zl=Symbol.for("react.profiler"),is=Symbol.for("react.provider"),os=Symbol.for("react.context"),Qi=Symbol.for("react.forward_ref"),Yl=Symbol.for("react.suspense"),Kl=Symbol.for("react.suspense_list"),Zi=Symbol.for("react.memo"),Xe=Symbol.for("react.lazy"),us=Symbol.for("react.offscreen"),Uo=Symbol.iterator;function dn(e){return e===null||typeof e!="object"?null:(e=Uo&&e[Uo]||e["@@iterator"],typeof e=="function"?e:null)}var j=Object.assign,_l;function Sn(e){if(_l===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);_l=t&&t[1]||""}return`
`+_l+e}var Pl=!1;function wl(e,t){if(!e||Pl)return"";Pl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var l=c.stack.split(`
`),i=r.stack.split(`
`),o=l.length-1,u=i.length-1;1<=o&&0<=u&&l[o]!==i[u];)u--;for(;1<=o&&0<=u;o--,u--)if(l[o]!==i[u]){if(o!==1||u!==1)do if(o--,u--,0>u||l[o]!==i[u]){var s=`
`+l[o].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=o&&0<=u);break}}}finally{Pl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Sn(e):""}function Mc(e){switch(e.tag){case 5:return Sn(e.type);case 16:return Sn("Lazy");case 13:return Sn("Suspense");case 19:return Sn("SuspenseList");case 0:case 2:case 15:return e=wl(e.type,!1),e;case 11:return e=wl(e.type.render,!1),e;case 1:return e=wl(e.type,!0),e;default:return""}}function Xl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Ht:return"Fragment";case Ot:return"Portal";case Zl:return"Profiler";case Gi:return"StrictMode";case Yl:return"Suspense";case Kl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case os:return(e.displayName||"Context")+".Consumer";case is:return(e._context.displayName||"Context")+".Provider";case Qi:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Zi:return t=e.displayName||null,t!==null?t:Xl(e.type)||"Memo";case Xe:t=e._payload,e=e._init;try{return Xl(e(t))}catch{}}return null}function xc(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Xl(t);case 8:return t===Gi?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function ct(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ss(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Oc(e){var t=ss(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(o){r=""+o,i.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function lr(e){e._valueTracker||(e._valueTracker=Oc(e))}function as(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=ss(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Fr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Jl(e,t){var n=t.checked;return j({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function zo(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=ct(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function cs(e,t){t=t.checked,t!=null&&$i(e,"checked",t,!1)}function ql(e,t){cs(e,t);var n=ct(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?bl(e,t.type,n):t.hasOwnProperty("defaultValue")&&bl(e,t.type,ct(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function jo(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function bl(e,t,n){(t!=="number"||Fr(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var En=Array.isArray;function Qt(e,t,n,r){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&r&&(e[n].defaultSelected=!0)}else{for(n=""+ct(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function ei(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(v(91));return j({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Vo(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(v(92));if(En(n)){if(1<n.length)throw Error(v(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:ct(n)}}function ds(e,t){var n=ct(t.value),r=ct(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Bo(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function fs(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ti(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?fs(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ir,ps=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,l){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,l)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(ir=ir||document.createElement("div"),ir.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ir.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function xn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var wn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Hc=["Webkit","ms","Moz","O"];Object.keys(wn).forEach(function(e){Hc.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),wn[t]=wn[e]})});function ms(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||wn.hasOwnProperty(e)&&wn[e]?(""+t).trim():t+"px"}function hs(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,l=ms(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,l):e[n]=l}}var Rc=j({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ni(e,t){if(t){if(Rc[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(v(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(v(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(v(61))}if(t.style!=null&&typeof t.style!="object")throw Error(v(62))}}function ri(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var li=null;function Yi(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ii=null,Zt=null,Yt=null;function $o(e){if(e=qn(e)){if(typeof ii!="function")throw Error(v(280));var t=e.stateNode;t&&(t=ol(t),ii(e.stateNode,e.type,t))}}function gs(e){Zt?Yt?Yt.push(e):Yt=[e]:Zt=e}function vs(){if(Zt){var e=Zt,t=Yt;if(Yt=Zt=null,$o(e),t)for(e=0;e<t.length;e++)$o(t[e])}}function ys(e,t){return e(t)}function Ss(){}var Nl=!1;function Es(e,t,n){if(Nl)return e(t,n);Nl=!0;try{return ys(e,t,n)}finally{Nl=!1,(Zt!==null||Yt!==null)&&(Ss(),vs())}}function On(e,t){var n=e.stateNode;if(n===null)return null;var r=ol(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(v(231,t,typeof n));return n}var oi=!1;if($e)try{var fn={};Object.defineProperty(fn,"passive",{get:function(){oi=!0}}),window.addEventListener("test",fn,fn),window.removeEventListener("test",fn,fn)}catch{oi=!1}function Wc(e,t,n,r,l,i,o,u,s){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(h){this.onError(h)}}var Nn=!1,Mr=null,xr=!1,ui=null,Ac={onError:function(e){Nn=!0,Mr=e}};function Uc(e,t,n,r,l,i,o,u,s){Nn=!1,Mr=null,Wc.apply(Ac,arguments)}function zc(e,t,n,r,l,i,o,u,s){if(Uc.apply(this,arguments),Nn){if(Nn){var c=Mr;Nn=!1,Mr=null}else throw Error(v(198));xr||(xr=!0,ui=c)}}function Ft(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function _s(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Go(e){if(Ft(e)!==e)throw Error(v(188))}function jc(e){var t=e.alternate;if(!t){if(t=Ft(e),t===null)throw Error(v(188));return t!==e?null:e}for(var n=e,r=t;;){var l=n.return;if(l===null)break;var i=l.alternate;if(i===null){if(r=l.return,r!==null){n=r;continue}break}if(l.child===i.child){for(i=l.child;i;){if(i===n)return Go(l),e;if(i===r)return Go(l),t;i=i.sibling}throw Error(v(188))}if(n.return!==r.return)n=l,r=i;else{for(var o=!1,u=l.child;u;){if(u===n){o=!0,n=l,r=i;break}if(u===r){o=!0,r=l,n=i;break}u=u.sibling}if(!o){for(u=i.child;u;){if(u===n){o=!0,n=i,r=l;break}if(u===r){o=!0,r=i,n=l;break}u=u.sibling}if(!o)throw Error(v(189))}}if(n.alternate!==r)throw Error(v(190))}if(n.tag!==3)throw Error(v(188));return n.stateNode.current===n?e:t}function Ps(e){return e=jc(e),e!==null?ws(e):null}function ws(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=ws(e);if(t!==null)return t;e=e.sibling}return null}var Ns=ve.unstable_scheduleCallback,Qo=ve.unstable_cancelCallback,Vc=ve.unstable_shouldYield,Bc=ve.unstable_requestPaint,G=ve.unstable_now,$c=ve.unstable_getCurrentPriorityLevel,Ki=ve.unstable_ImmediatePriority,Cs=ve.unstable_UserBlockingPriority,Or=ve.unstable_NormalPriority,Gc=ve.unstable_LowPriority,ks=ve.unstable_IdlePriority,nl=null,We=null;function Qc(e){if(We&&typeof We.onCommitFiberRoot=="function")try{We.onCommitFiberRoot(nl,e,void 0,(e.current.flags&128)===128)}catch{}}var Fe=Math.clz32?Math.clz32:Kc,Zc=Math.log,Yc=Math.LN2;function Kc(e){return e>>>=0,e===0?32:31-(Zc(e)/Yc|0)|0}var or=64,ur=4194304;function _n(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Hr(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,l=e.suspendedLanes,i=e.pingedLanes,o=n&268435455;if(o!==0){var u=o&~l;u!==0?r=_n(u):(i&=o,i!==0&&(r=_n(i)))}else o=n&~l,o!==0?r=_n(o):i!==0&&(r=_n(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&l)&&(l=r&-r,i=t&-t,l>=i||l===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Fe(t),l=1<<n,r|=e[n],t&=~l;return r}function Xc(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Jc(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,i=e.pendingLanes;0<i;){var o=31-Fe(i),u=1<<o,s=l[o];s===-1?(!(u&n)||u&r)&&(l[o]=Xc(u,t)):s<=t&&(e.expiredLanes|=u),i&=~u}}function si(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Ts(){var e=or;return or<<=1,!(or&4194240)&&(or=64),e}function Cl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Xn(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Fe(t),e[t]=n}function qc(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var l=31-Fe(n),i=1<<l;t[l]=0,r[l]=-1,e[l]=-1,n&=~i}}function Xi(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Fe(n),l=1<<r;l&t|e[r]&t&&(e[r]|=t),n&=~l}}var x=0;function Is(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Ls,Ji,Ds,Fs,Ms,ai=!1,sr=[],nt=null,rt=null,lt=null,Hn=new Map,Rn=new Map,qe=[],bc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Zo(e,t){switch(e){case"focusin":case"focusout":nt=null;break;case"dragenter":case"dragleave":rt=null;break;case"mouseover":case"mouseout":lt=null;break;case"pointerover":case"pointerout":Hn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Rn.delete(t.pointerId)}}function pn(e,t,n,r,l,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[l]},t!==null&&(t=qn(t),t!==null&&Ji(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function ed(e,t,n,r,l){switch(t){case"focusin":return nt=pn(nt,e,t,n,r,l),!0;case"dragenter":return rt=pn(rt,e,t,n,r,l),!0;case"mouseover":return lt=pn(lt,e,t,n,r,l),!0;case"pointerover":var i=l.pointerId;return Hn.set(i,pn(Hn.get(i)||null,e,t,n,r,l)),!0;case"gotpointercapture":return i=l.pointerId,Rn.set(i,pn(Rn.get(i)||null,e,t,n,r,l)),!0}return!1}function xs(e){var t=St(e.target);if(t!==null){var n=Ft(t);if(n!==null){if(t=n.tag,t===13){if(t=_s(n),t!==null){e.blockedOn=t,Ms(e.priority,function(){Ds(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function _r(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=ci(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);li=r,n.target.dispatchEvent(r),li=null}else return t=qn(n),t!==null&&Ji(t),e.blockedOn=n,!1;t.shift()}return!0}function Yo(e,t,n){_r(e)&&n.delete(t)}function td(){ai=!1,nt!==null&&_r(nt)&&(nt=null),rt!==null&&_r(rt)&&(rt=null),lt!==null&&_r(lt)&&(lt=null),Hn.forEach(Yo),Rn.forEach(Yo)}function mn(e,t){e.blockedOn===t&&(e.blockedOn=null,ai||(ai=!0,ve.unstable_scheduleCallback(ve.unstable_NormalPriority,td)))}function Wn(e){function t(l){return mn(l,e)}if(0<sr.length){mn(sr[0],e);for(var n=1;n<sr.length;n++){var r=sr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(nt!==null&&mn(nt,e),rt!==null&&mn(rt,e),lt!==null&&mn(lt,e),Hn.forEach(t),Rn.forEach(t),n=0;n<qe.length;n++)r=qe[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<qe.length&&(n=qe[0],n.blockedOn===null);)xs(n),n.blockedOn===null&&qe.shift()}var Kt=Ye.ReactCurrentBatchConfig,Rr=!0;function nd(e,t,n,r){var l=x,i=Kt.transition;Kt.transition=null;try{x=1,qi(e,t,n,r)}finally{x=l,Kt.transition=i}}function rd(e,t,n,r){var l=x,i=Kt.transition;Kt.transition=null;try{x=4,qi(e,t,n,r)}finally{x=l,Kt.transition=i}}function qi(e,t,n,r){if(Rr){var l=ci(e,t,n,r);if(l===null)Hl(e,t,r,Wr,n),Zo(e,r);else if(ed(l,e,t,n,r))r.stopPropagation();else if(Zo(e,r),t&4&&-1<bc.indexOf(e)){for(;l!==null;){var i=qn(l);if(i!==null&&Ls(i),i=ci(e,t,n,r),i===null&&Hl(e,t,r,Wr,n),i===l)break;l=i}l!==null&&r.stopPropagation()}else Hl(e,t,r,null,n)}}var Wr=null;function ci(e,t,n,r){if(Wr=null,e=Yi(r),e=St(e),e!==null)if(t=Ft(e),t===null)e=null;else if(n=t.tag,n===13){if(e=_s(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Wr=e,null}function Os(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch($c()){case Ki:return 1;case Cs:return 4;case Or:case Gc:return 16;case ks:return 536870912;default:return 16}default:return 16}}var et=null,bi=null,Pr=null;function Hs(){if(Pr)return Pr;var e,t=bi,n=t.length,r,l="value"in et?et.value:et.textContent,i=l.length;for(e=0;e<n&&t[e]===l[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===l[i-r];r++);return Pr=l.slice(e,1<r?1-r:void 0)}function wr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ar(){return!0}function Ko(){return!1}function Se(e){function t(n,r,l,i,o){this._reactName=n,this._targetInst=l,this.type=r,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var u in e)e.hasOwnProperty(u)&&(n=e[u],this[u]=n?n(i):i[u]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?ar:Ko,this.isPropagationStopped=Ko,this}return j(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ar)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ar)},persist:function(){},isPersistent:ar}),t}var un={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},eo=Se(un),Jn=j({},un,{view:0,detail:0}),ld=Se(Jn),kl,Tl,hn,rl=j({},Jn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:to,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==hn&&(hn&&e.type==="mousemove"?(kl=e.screenX-hn.screenX,Tl=e.screenY-hn.screenY):Tl=kl=0,hn=e),kl)},movementY:function(e){return"movementY"in e?e.movementY:Tl}}),Xo=Se(rl),id=j({},rl,{dataTransfer:0}),od=Se(id),ud=j({},Jn,{relatedTarget:0}),Il=Se(ud),sd=j({},un,{animationName:0,elapsedTime:0,pseudoElement:0}),ad=Se(sd),cd=j({},un,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),dd=Se(cd),fd=j({},un,{data:0}),Jo=Se(fd),pd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},md={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},hd={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function gd(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=hd[e])?!!t[e]:!1}function to(){return gd}var vd=j({},Jn,{key:function(e){if(e.key){var t=pd[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=wr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?md[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:to,charCode:function(e){return e.type==="keypress"?wr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?wr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),yd=Se(vd),Sd=j({},rl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),qo=Se(Sd),Ed=j({},Jn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:to}),_d=Se(Ed),Pd=j({},un,{propertyName:0,elapsedTime:0,pseudoElement:0}),wd=Se(Pd),Nd=j({},rl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Cd=Se(Nd),kd=[9,13,27,32],no=$e&&"CompositionEvent"in window,Cn=null;$e&&"documentMode"in document&&(Cn=document.documentMode);var Td=$e&&"TextEvent"in window&&!Cn,Rs=$e&&(!no||Cn&&8<Cn&&11>=Cn),bo=" ",eu=!1;function Ws(e,t){switch(e){case"keyup":return kd.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function As(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Rt=!1;function Id(e,t){switch(e){case"compositionend":return As(t);case"keypress":return t.which!==32?null:(eu=!0,bo);case"textInput":return e=t.data,e===bo&&eu?null:e;default:return null}}function Ld(e,t){if(Rt)return e==="compositionend"||!no&&Ws(e,t)?(e=Hs(),Pr=bi=et=null,Rt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Rs&&t.locale!=="ko"?null:t.data;default:return null}}var Dd={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function tu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Dd[e.type]:t==="textarea"}function Us(e,t,n,r){gs(r),t=Ar(t,"onChange"),0<t.length&&(n=new eo("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var kn=null,An=null;function Fd(e){Xs(e,0)}function ll(e){var t=Ut(e);if(as(t))return e}function Md(e,t){if(e==="change")return t}var zs=!1;if($e){var Ll;if($e){var Dl="oninput"in document;if(!Dl){var nu=document.createElement("div");nu.setAttribute("oninput","return;"),Dl=typeof nu.oninput=="function"}Ll=Dl}else Ll=!1;zs=Ll&&(!document.documentMode||9<document.documentMode)}function ru(){kn&&(kn.detachEvent("onpropertychange",js),An=kn=null)}function js(e){if(e.propertyName==="value"&&ll(An)){var t=[];Us(t,An,e,Yi(e)),Es(Fd,t)}}function xd(e,t,n){e==="focusin"?(ru(),kn=t,An=n,kn.attachEvent("onpropertychange",js)):e==="focusout"&&ru()}function Od(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ll(An)}function Hd(e,t){if(e==="click")return ll(t)}function Rd(e,t){if(e==="input"||e==="change")return ll(t)}function Wd(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var xe=typeof Object.is=="function"?Object.is:Wd;function Un(e,t){if(xe(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var l=n[r];if(!Ql.call(t,l)||!xe(e[l],t[l]))return!1}return!0}function lu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function iu(e,t){var n=lu(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=lu(n)}}function Vs(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Vs(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Bs(){for(var e=window,t=Fr();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Fr(e.document)}return t}function ro(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Ad(e){var t=Bs(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Vs(n.ownerDocument.documentElement,n)){if(r!==null&&ro(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var l=n.textContent.length,i=Math.min(r.start,l);r=r.end===void 0?i:Math.min(r.end,l),!e.extend&&i>r&&(l=r,r=i,i=l),l=iu(n,i);var o=iu(n,r);l&&o&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(l.node,l.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Ud=$e&&"documentMode"in document&&11>=document.documentMode,Wt=null,di=null,Tn=null,fi=!1;function ou(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;fi||Wt==null||Wt!==Fr(r)||(r=Wt,"selectionStart"in r&&ro(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Tn&&Un(Tn,r)||(Tn=r,r=Ar(di,"onSelect"),0<r.length&&(t=new eo("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Wt)))}function cr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var At={animationend:cr("Animation","AnimationEnd"),animationiteration:cr("Animation","AnimationIteration"),animationstart:cr("Animation","AnimationStart"),transitionend:cr("Transition","TransitionEnd")},Fl={},$s={};$e&&($s=document.createElement("div").style,"AnimationEvent"in window||(delete At.animationend.animation,delete At.animationiteration.animation,delete At.animationstart.animation),"TransitionEvent"in window||delete At.transitionend.transition);function il(e){if(Fl[e])return Fl[e];if(!At[e])return e;var t=At[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in $s)return Fl[e]=t[n];return e}var Gs=il("animationend"),Qs=il("animationiteration"),Zs=il("animationstart"),Ys=il("transitionend"),Ks=new Map,uu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ft(e,t){Ks.set(e,t),Dt(t,[e])}for(var Ml=0;Ml<uu.length;Ml++){var xl=uu[Ml],zd=xl.toLowerCase(),jd=xl[0].toUpperCase()+xl.slice(1);ft(zd,"on"+jd)}ft(Gs,"onAnimationEnd");ft(Qs,"onAnimationIteration");ft(Zs,"onAnimationStart");ft("dblclick","onDoubleClick");ft("focusin","onFocus");ft("focusout","onBlur");ft(Ys,"onTransitionEnd");qt("onMouseEnter",["mouseout","mouseover"]);qt("onMouseLeave",["mouseout","mouseover"]);qt("onPointerEnter",["pointerout","pointerover"]);qt("onPointerLeave",["pointerout","pointerover"]);Dt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Dt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Dt("onBeforeInput",["compositionend","keypress","textInput","paste"]);Dt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Dt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Dt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Pn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Vd=new Set("cancel close invalid load scroll toggle".split(" ").concat(Pn));function su(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,zc(r,t,void 0,e),e.currentTarget=null}function Xs(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],l=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var o=r.length-1;0<=o;o--){var u=r[o],s=u.instance,c=u.currentTarget;if(u=u.listener,s!==i&&l.isPropagationStopped())break e;su(l,u,c),i=s}else for(o=0;o<r.length;o++){if(u=r[o],s=u.instance,c=u.currentTarget,u=u.listener,s!==i&&l.isPropagationStopped())break e;su(l,u,c),i=s}}}if(xr)throw e=ui,xr=!1,ui=null,e}function H(e,t){var n=t[vi];n===void 0&&(n=t[vi]=new Set);var r=e+"__bubble";n.has(r)||(Js(t,e,2,!1),n.add(r))}function Ol(e,t,n){var r=0;t&&(r|=4),Js(n,e,r,t)}var dr="_reactListening"+Math.random().toString(36).slice(2);function zn(e){if(!e[dr]){e[dr]=!0,ls.forEach(function(n){n!=="selectionchange"&&(Vd.has(n)||Ol(n,!1,e),Ol(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[dr]||(t[dr]=!0,Ol("selectionchange",!1,t))}}function Js(e,t,n,r){switch(Os(t)){case 1:var l=nd;break;case 4:l=rd;break;default:l=qi}n=l.bind(null,t,n,e),l=void 0,!oi||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function Hl(e,t,n,r,l){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var u=r.stateNode.containerInfo;if(u===l||u.nodeType===8&&u.parentNode===l)break;if(o===4)for(o=r.return;o!==null;){var s=o.tag;if((s===3||s===4)&&(s=o.stateNode.containerInfo,s===l||s.nodeType===8&&s.parentNode===l))return;o=o.return}for(;u!==null;){if(o=St(u),o===null)return;if(s=o.tag,s===5||s===6){r=i=o;continue e}u=u.parentNode}}r=r.return}Es(function(){var c=i,h=Yi(n),m=[];e:{var p=Ks.get(e);if(p!==void 0){var y=eo,S=e;switch(e){case"keypress":if(wr(n)===0)break e;case"keydown":case"keyup":y=yd;break;case"focusin":S="focus",y=Il;break;case"focusout":S="blur",y=Il;break;case"beforeblur":case"afterblur":y=Il;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=Xo;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=od;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=_d;break;case Gs:case Qs:case Zs:y=ad;break;case Ys:y=wd;break;case"scroll":y=ld;break;case"wheel":y=Cd;break;case"copy":case"cut":case"paste":y=dd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=qo}var E=(t&4)!==0,W=!E&&e==="scroll",d=E?p!==null?p+"Capture":null:p;E=[];for(var a=c,f;a!==null;){f=a;var g=f.stateNode;if(f.tag===5&&g!==null&&(f=g,d!==null&&(g=On(a,d),g!=null&&E.push(jn(a,g,f)))),W)break;a=a.return}0<E.length&&(p=new y(p,S,null,n,h),m.push({event:p,listeners:E}))}}if(!(t&7)){e:{if(p=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",p&&n!==li&&(S=n.relatedTarget||n.fromElement)&&(St(S)||S[Ge]))break e;if((y||p)&&(p=h.window===h?h:(p=h.ownerDocument)?p.defaultView||p.parentWindow:window,y?(S=n.relatedTarget||n.toElement,y=c,S=S?St(S):null,S!==null&&(W=Ft(S),S!==W||S.tag!==5&&S.tag!==6)&&(S=null)):(y=null,S=c),y!==S)){if(E=Xo,g="onMouseLeave",d="onMouseEnter",a="mouse",(e==="pointerout"||e==="pointerover")&&(E=qo,g="onPointerLeave",d="onPointerEnter",a="pointer"),W=y==null?p:Ut(y),f=S==null?p:Ut(S),p=new E(g,a+"leave",y,n,h),p.target=W,p.relatedTarget=f,g=null,St(h)===c&&(E=new E(d,a+"enter",S,n,h),E.target=f,E.relatedTarget=W,g=E),W=g,y&&S)t:{for(E=y,d=S,a=0,f=E;f;f=Mt(f))a++;for(f=0,g=d;g;g=Mt(g))f++;for(;0<a-f;)E=Mt(E),a--;for(;0<f-a;)d=Mt(d),f--;for(;a--;){if(E===d||d!==null&&E===d.alternate)break t;E=Mt(E),d=Mt(d)}E=null}else E=null;y!==null&&au(m,p,y,E,!1),S!==null&&W!==null&&au(m,W,S,E,!0)}}e:{if(p=c?Ut(c):window,y=p.nodeName&&p.nodeName.toLowerCase(),y==="select"||y==="input"&&p.type==="file")var P=Md;else if(tu(p))if(zs)P=Rd;else{P=Od;var N=xd}else(y=p.nodeName)&&y.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(P=Hd);if(P&&(P=P(e,c))){Us(m,P,n,h);break e}N&&N(e,p,c),e==="focusout"&&(N=p._wrapperState)&&N.controlled&&p.type==="number"&&bl(p,"number",p.value)}switch(N=c?Ut(c):window,e){case"focusin":(tu(N)||N.contentEditable==="true")&&(Wt=N,di=c,Tn=null);break;case"focusout":Tn=di=Wt=null;break;case"mousedown":fi=!0;break;case"contextmenu":case"mouseup":case"dragend":fi=!1,ou(m,n,h);break;case"selectionchange":if(Ud)break;case"keydown":case"keyup":ou(m,n,h)}var C;if(no)e:{switch(e){case"compositionstart":var k="onCompositionStart";break e;case"compositionend":k="onCompositionEnd";break e;case"compositionupdate":k="onCompositionUpdate";break e}k=void 0}else Rt?Ws(e,n)&&(k="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(k="onCompositionStart");k&&(Rs&&n.locale!=="ko"&&(Rt||k!=="onCompositionStart"?k==="onCompositionEnd"&&Rt&&(C=Hs()):(et=h,bi="value"in et?et.value:et.textContent,Rt=!0)),N=Ar(c,k),0<N.length&&(k=new Jo(k,e,null,n,h),m.push({event:k,listeners:N}),C?k.data=C:(C=As(n),C!==null&&(k.data=C)))),(C=Td?Id(e,n):Ld(e,n))&&(c=Ar(c,"onBeforeInput"),0<c.length&&(h=new Jo("onBeforeInput","beforeinput",null,n,h),m.push({event:h,listeners:c}),h.data=C))}Xs(m,t)})}function jn(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ar(e,t){for(var n=t+"Capture",r=[];e!==null;){var l=e,i=l.stateNode;l.tag===5&&i!==null&&(l=i,i=On(e,n),i!=null&&r.unshift(jn(e,i,l)),i=On(e,t),i!=null&&r.push(jn(e,i,l))),e=e.return}return r}function Mt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function au(e,t,n,r,l){for(var i=t._reactName,o=[];n!==null&&n!==r;){var u=n,s=u.alternate,c=u.stateNode;if(s!==null&&s===r)break;u.tag===5&&c!==null&&(u=c,l?(s=On(n,i),s!=null&&o.unshift(jn(n,s,u))):l||(s=On(n,i),s!=null&&o.push(jn(n,s,u)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var Bd=/\r\n?/g,$d=/\u0000|\uFFFD/g;function cu(e){return(typeof e=="string"?e:""+e).replace(Bd,`
`).replace($d,"")}function fr(e,t,n){if(t=cu(t),cu(e)!==t&&n)throw Error(v(425))}function Ur(){}var pi=null,mi=null;function hi(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var gi=typeof setTimeout=="function"?setTimeout:void 0,Gd=typeof clearTimeout=="function"?clearTimeout:void 0,du=typeof Promise=="function"?Promise:void 0,Qd=typeof queueMicrotask=="function"?queueMicrotask:typeof du<"u"?function(e){return du.resolve(null).then(e).catch(Zd)}:gi;function Zd(e){setTimeout(function(){throw e})}function Rl(e,t){var n=t,r=0;do{var l=n.nextSibling;if(e.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(r===0){e.removeChild(l),Wn(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=l}while(n);Wn(t)}function it(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function fu(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var sn=Math.random().toString(36).slice(2),Re="__reactFiber$"+sn,Vn="__reactProps$"+sn,Ge="__reactContainer$"+sn,vi="__reactEvents$"+sn,Yd="__reactListeners$"+sn,Kd="__reactHandles$"+sn;function St(e){var t=e[Re];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ge]||n[Re]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=fu(e);e!==null;){if(n=e[Re])return n;e=fu(e)}return t}e=n,n=e.parentNode}return null}function qn(e){return e=e[Re]||e[Ge],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Ut(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(v(33))}function ol(e){return e[Vn]||null}var yi=[],zt=-1;function pt(e){return{current:e}}function R(e){0>zt||(e.current=yi[zt],yi[zt]=null,zt--)}function O(e,t){zt++,yi[zt]=e.current,e.current=t}var dt={},le=pt(dt),de=pt(!1),Ct=dt;function bt(e,t){var n=e.type.contextTypes;if(!n)return dt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var l={},i;for(i in n)l[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=l),l}function fe(e){return e=e.childContextTypes,e!=null}function zr(){R(de),R(le)}function pu(e,t,n){if(le.current!==dt)throw Error(v(168));O(le,t),O(de,n)}function qs(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var l in r)if(!(l in t))throw Error(v(108,xc(e)||"Unknown",l));return j({},n,r)}function jr(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||dt,Ct=le.current,O(le,e),O(de,de.current),!0}function mu(e,t,n){var r=e.stateNode;if(!r)throw Error(v(169));n?(e=qs(e,t,Ct),r.__reactInternalMemoizedMergedChildContext=e,R(de),R(le),O(le,e)):R(de),O(de,n)}var ze=null,ul=!1,Wl=!1;function bs(e){ze===null?ze=[e]:ze.push(e)}function Xd(e){ul=!0,bs(e)}function mt(){if(!Wl&&ze!==null){Wl=!0;var e=0,t=x;try{var n=ze;for(x=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}ze=null,ul=!1}catch(l){throw ze!==null&&(ze=ze.slice(e+1)),Ns(Ki,mt),l}finally{x=t,Wl=!1}}return null}var jt=[],Vt=0,Vr=null,Br=0,Ee=[],_e=0,kt=null,je=1,Ve="";function vt(e,t){jt[Vt++]=Br,jt[Vt++]=Vr,Vr=e,Br=t}function ea(e,t,n){Ee[_e++]=je,Ee[_e++]=Ve,Ee[_e++]=kt,kt=e;var r=je;e=Ve;var l=32-Fe(r)-1;r&=~(1<<l),n+=1;var i=32-Fe(t)+l;if(30<i){var o=l-l%5;i=(r&(1<<o)-1).toString(32),r>>=o,l-=o,je=1<<32-Fe(t)+l|n<<l|r,Ve=i+e}else je=1<<i|n<<l|r,Ve=e}function lo(e){e.return!==null&&(vt(e,1),ea(e,1,0))}function io(e){for(;e===Vr;)Vr=jt[--Vt],jt[Vt]=null,Br=jt[--Vt],jt[Vt]=null;for(;e===kt;)kt=Ee[--_e],Ee[_e]=null,Ve=Ee[--_e],Ee[_e]=null,je=Ee[--_e],Ee[_e]=null}var ge=null,he=null,A=!1,De=null;function ta(e,t){var n=Pe(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function hu(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ge=e,he=it(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ge=e,he=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=kt!==null?{id:je,overflow:Ve}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Pe(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,ge=e,he=null,!0):!1;default:return!1}}function Si(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ei(e){if(A){var t=he;if(t){var n=t;if(!hu(e,t)){if(Si(e))throw Error(v(418));t=it(n.nextSibling);var r=ge;t&&hu(e,t)?ta(r,n):(e.flags=e.flags&-4097|2,A=!1,ge=e)}}else{if(Si(e))throw Error(v(418));e.flags=e.flags&-4097|2,A=!1,ge=e}}}function gu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ge=e}function pr(e){if(e!==ge)return!1;if(!A)return gu(e),A=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!hi(e.type,e.memoizedProps)),t&&(t=he)){if(Si(e))throw na(),Error(v(418));for(;t;)ta(e,t),t=it(t.nextSibling)}if(gu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(v(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){he=it(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}he=null}}else he=ge?it(e.stateNode.nextSibling):null;return!0}function na(){for(var e=he;e;)e=it(e.nextSibling)}function en(){he=ge=null,A=!1}function oo(e){De===null?De=[e]:De.push(e)}var Jd=Ye.ReactCurrentBatchConfig;function gn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(v(309));var r=n.stateNode}if(!r)throw Error(v(147,e));var l=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(o){var u=l.refs;o===null?delete u[i]:u[i]=o},t._stringRef=i,t)}if(typeof e!="string")throw Error(v(284));if(!n._owner)throw Error(v(290,e))}return e}function mr(e,t){throw e=Object.prototype.toString.call(t),Error(v(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function vu(e){var t=e._init;return t(e._payload)}function ra(e){function t(d,a){if(e){var f=d.deletions;f===null?(d.deletions=[a],d.flags|=16):f.push(a)}}function n(d,a){if(!e)return null;for(;a!==null;)t(d,a),a=a.sibling;return null}function r(d,a){for(d=new Map;a!==null;)a.key!==null?d.set(a.key,a):d.set(a.index,a),a=a.sibling;return d}function l(d,a){return d=at(d,a),d.index=0,d.sibling=null,d}function i(d,a,f){return d.index=f,e?(f=d.alternate,f!==null?(f=f.index,f<a?(d.flags|=2,a):f):(d.flags|=2,a)):(d.flags|=1048576,a)}function o(d){return e&&d.alternate===null&&(d.flags|=2),d}function u(d,a,f,g){return a===null||a.tag!==6?(a=$l(f,d.mode,g),a.return=d,a):(a=l(a,f),a.return=d,a)}function s(d,a,f,g){var P=f.type;return P===Ht?h(d,a,f.props.children,g,f.key):a!==null&&(a.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===Xe&&vu(P)===a.type)?(g=l(a,f.props),g.ref=gn(d,a,f),g.return=d,g):(g=Dr(f.type,f.key,f.props,null,d.mode,g),g.ref=gn(d,a,f),g.return=d,g)}function c(d,a,f,g){return a===null||a.tag!==4||a.stateNode.containerInfo!==f.containerInfo||a.stateNode.implementation!==f.implementation?(a=Gl(f,d.mode,g),a.return=d,a):(a=l(a,f.children||[]),a.return=d,a)}function h(d,a,f,g,P){return a===null||a.tag!==7?(a=Nt(f,d.mode,g,P),a.return=d,a):(a=l(a,f),a.return=d,a)}function m(d,a,f){if(typeof a=="string"&&a!==""||typeof a=="number")return a=$l(""+a,d.mode,f),a.return=d,a;if(typeof a=="object"&&a!==null){switch(a.$$typeof){case rr:return f=Dr(a.type,a.key,a.props,null,d.mode,f),f.ref=gn(d,null,a),f.return=d,f;case Ot:return a=Gl(a,d.mode,f),a.return=d,a;case Xe:var g=a._init;return m(d,g(a._payload),f)}if(En(a)||dn(a))return a=Nt(a,d.mode,f,null),a.return=d,a;mr(d,a)}return null}function p(d,a,f,g){var P=a!==null?a.key:null;if(typeof f=="string"&&f!==""||typeof f=="number")return P!==null?null:u(d,a,""+f,g);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case rr:return f.key===P?s(d,a,f,g):null;case Ot:return f.key===P?c(d,a,f,g):null;case Xe:return P=f._init,p(d,a,P(f._payload),g)}if(En(f)||dn(f))return P!==null?null:h(d,a,f,g,null);mr(d,f)}return null}function y(d,a,f,g,P){if(typeof g=="string"&&g!==""||typeof g=="number")return d=d.get(f)||null,u(a,d,""+g,P);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case rr:return d=d.get(g.key===null?f:g.key)||null,s(a,d,g,P);case Ot:return d=d.get(g.key===null?f:g.key)||null,c(a,d,g,P);case Xe:var N=g._init;return y(d,a,f,N(g._payload),P)}if(En(g)||dn(g))return d=d.get(f)||null,h(a,d,g,P,null);mr(a,g)}return null}function S(d,a,f,g){for(var P=null,N=null,C=a,k=a=0,B=null;C!==null&&k<f.length;k++){C.index>k?(B=C,C=null):B=C.sibling;var D=p(d,C,f[k],g);if(D===null){C===null&&(C=B);break}e&&C&&D.alternate===null&&t(d,C),a=i(D,a,k),N===null?P=D:N.sibling=D,N=D,C=B}if(k===f.length)return n(d,C),A&&vt(d,k),P;if(C===null){for(;k<f.length;k++)C=m(d,f[k],g),C!==null&&(a=i(C,a,k),N===null?P=C:N.sibling=C,N=C);return A&&vt(d,k),P}for(C=r(d,C);k<f.length;k++)B=y(C,d,k,f[k],g),B!==null&&(e&&B.alternate!==null&&C.delete(B.key===null?k:B.key),a=i(B,a,k),N===null?P=B:N.sibling=B,N=B);return e&&C.forEach(function(ke){return t(d,ke)}),A&&vt(d,k),P}function E(d,a,f,g){var P=dn(f);if(typeof P!="function")throw Error(v(150));if(f=P.call(f),f==null)throw Error(v(151));for(var N=P=null,C=a,k=a=0,B=null,D=f.next();C!==null&&!D.done;k++,D=f.next()){C.index>k?(B=C,C=null):B=C.sibling;var ke=p(d,C,D.value,g);if(ke===null){C===null&&(C=B);break}e&&C&&ke.alternate===null&&t(d,C),a=i(ke,a,k),N===null?P=ke:N.sibling=ke,N=ke,C=B}if(D.done)return n(d,C),A&&vt(d,k),P;if(C===null){for(;!D.done;k++,D=f.next())D=m(d,D.value,g),D!==null&&(a=i(D,a,k),N===null?P=D:N.sibling=D,N=D);return A&&vt(d,k),P}for(C=r(d,C);!D.done;k++,D=f.next())D=y(C,d,k,D.value,g),D!==null&&(e&&D.alternate!==null&&C.delete(D.key===null?k:D.key),a=i(D,a,k),N===null?P=D:N.sibling=D,N=D);return e&&C.forEach(function(an){return t(d,an)}),A&&vt(d,k),P}function W(d,a,f,g){if(typeof f=="object"&&f!==null&&f.type===Ht&&f.key===null&&(f=f.props.children),typeof f=="object"&&f!==null){switch(f.$$typeof){case rr:e:{for(var P=f.key,N=a;N!==null;){if(N.key===P){if(P=f.type,P===Ht){if(N.tag===7){n(d,N.sibling),a=l(N,f.props.children),a.return=d,d=a;break e}}else if(N.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===Xe&&vu(P)===N.type){n(d,N.sibling),a=l(N,f.props),a.ref=gn(d,N,f),a.return=d,d=a;break e}n(d,N);break}else t(d,N);N=N.sibling}f.type===Ht?(a=Nt(f.props.children,d.mode,g,f.key),a.return=d,d=a):(g=Dr(f.type,f.key,f.props,null,d.mode,g),g.ref=gn(d,a,f),g.return=d,d=g)}return o(d);case Ot:e:{for(N=f.key;a!==null;){if(a.key===N)if(a.tag===4&&a.stateNode.containerInfo===f.containerInfo&&a.stateNode.implementation===f.implementation){n(d,a.sibling),a=l(a,f.children||[]),a.return=d,d=a;break e}else{n(d,a);break}else t(d,a);a=a.sibling}a=Gl(f,d.mode,g),a.return=d,d=a}return o(d);case Xe:return N=f._init,W(d,a,N(f._payload),g)}if(En(f))return S(d,a,f,g);if(dn(f))return E(d,a,f,g);mr(d,f)}return typeof f=="string"&&f!==""||typeof f=="number"?(f=""+f,a!==null&&a.tag===6?(n(d,a.sibling),a=l(a,f),a.return=d,d=a):(n(d,a),a=$l(f,d.mode,g),a.return=d,d=a),o(d)):n(d,a)}return W}var tn=ra(!0),la=ra(!1),$r=pt(null),Gr=null,Bt=null,uo=null;function so(){uo=Bt=Gr=null}function ao(e){var t=$r.current;R($r),e._currentValue=t}function _i(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Xt(e,t){Gr=e,uo=Bt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(ce=!0),e.firstContext=null)}function Ne(e){var t=e._currentValue;if(uo!==e)if(e={context:e,memoizedValue:t,next:null},Bt===null){if(Gr===null)throw Error(v(308));Bt=e,Gr.dependencies={lanes:0,firstContext:e}}else Bt=Bt.next=e;return t}var Et=null;function co(e){Et===null?Et=[e]:Et.push(e)}function ia(e,t,n,r){var l=t.interleaved;return l===null?(n.next=n,co(t)):(n.next=l.next,l.next=n),t.interleaved=n,Qe(e,r)}function Qe(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Je=!1;function fo(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function oa(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Be(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function ot(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,F&2){var l=r.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),r.pending=t,Qe(e,n)}return l=r.interleaved,l===null?(t.next=t,co(r)):(t.next=l.next,l.next=t),r.interleaved=t,Qe(e,n)}function Nr(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Xi(e,n)}}function yu(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var l=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?l=i=o:i=i.next=o,n=n.next}while(n!==null);i===null?l=i=t:i=i.next=t}else l=i=t;n={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Qr(e,t,n,r){var l=e.updateQueue;Je=!1;var i=l.firstBaseUpdate,o=l.lastBaseUpdate,u=l.shared.pending;if(u!==null){l.shared.pending=null;var s=u,c=s.next;s.next=null,o===null?i=c:o.next=c,o=s;var h=e.alternate;h!==null&&(h=h.updateQueue,u=h.lastBaseUpdate,u!==o&&(u===null?h.firstBaseUpdate=c:u.next=c,h.lastBaseUpdate=s))}if(i!==null){var m=l.baseState;o=0,h=c=s=null,u=i;do{var p=u.lane,y=u.eventTime;if((r&p)===p){h!==null&&(h=h.next={eventTime:y,lane:0,tag:u.tag,payload:u.payload,callback:u.callback,next:null});e:{var S=e,E=u;switch(p=t,y=n,E.tag){case 1:if(S=E.payload,typeof S=="function"){m=S.call(y,m,p);break e}m=S;break e;case 3:S.flags=S.flags&-65537|128;case 0:if(S=E.payload,p=typeof S=="function"?S.call(y,m,p):S,p==null)break e;m=j({},m,p);break e;case 2:Je=!0}}u.callback!==null&&u.lane!==0&&(e.flags|=64,p=l.effects,p===null?l.effects=[u]:p.push(u))}else y={eventTime:y,lane:p,tag:u.tag,payload:u.payload,callback:u.callback,next:null},h===null?(c=h=y,s=m):h=h.next=y,o|=p;if(u=u.next,u===null){if(u=l.shared.pending,u===null)break;p=u,u=p.next,p.next=null,l.lastBaseUpdate=p,l.shared.pending=null}}while(!0);if(h===null&&(s=m),l.baseState=s,l.firstBaseUpdate=c,l.lastBaseUpdate=h,t=l.shared.interleaved,t!==null){l=t;do o|=l.lane,l=l.next;while(l!==t)}else i===null&&(l.shared.lanes=0);It|=o,e.lanes=o,e.memoizedState=m}}function Su(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],l=r.callback;if(l!==null){if(r.callback=null,r=n,typeof l!="function")throw Error(v(191,l));l.call(r)}}}var bn={},Ae=pt(bn),Bn=pt(bn),$n=pt(bn);function _t(e){if(e===bn)throw Error(v(174));return e}function po(e,t){switch(O($n,t),O(Bn,e),O(Ae,bn),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:ti(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=ti(t,e)}R(Ae),O(Ae,t)}function nn(){R(Ae),R(Bn),R($n)}function ua(e){_t($n.current);var t=_t(Ae.current),n=ti(t,e.type);t!==n&&(O(Bn,e),O(Ae,n))}function mo(e){Bn.current===e&&(R(Ae),R(Bn))}var U=pt(0);function Zr(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Al=[];function ho(){for(var e=0;e<Al.length;e++)Al[e]._workInProgressVersionPrimary=null;Al.length=0}var Cr=Ye.ReactCurrentDispatcher,Ul=Ye.ReactCurrentBatchConfig,Tt=0,z=null,Z=null,X=null,Yr=!1,In=!1,Gn=0,qd=0;function te(){throw Error(v(321))}function go(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!xe(e[n],t[n]))return!1;return!0}function vo(e,t,n,r,l,i){if(Tt=i,z=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Cr.current=e===null||e.memoizedState===null?nf:rf,e=n(r,l),In){i=0;do{if(In=!1,Gn=0,25<=i)throw Error(v(301));i+=1,X=Z=null,t.updateQueue=null,Cr.current=lf,e=n(r,l)}while(In)}if(Cr.current=Kr,t=Z!==null&&Z.next!==null,Tt=0,X=Z=z=null,Yr=!1,t)throw Error(v(300));return e}function yo(){var e=Gn!==0;return Gn=0,e}function He(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return X===null?z.memoizedState=X=e:X=X.next=e,X}function Ce(){if(Z===null){var e=z.alternate;e=e!==null?e.memoizedState:null}else e=Z.next;var t=X===null?z.memoizedState:X.next;if(t!==null)X=t,Z=e;else{if(e===null)throw Error(v(310));Z=e,e={memoizedState:Z.memoizedState,baseState:Z.baseState,baseQueue:Z.baseQueue,queue:Z.queue,next:null},X===null?z.memoizedState=X=e:X=X.next=e}return X}function Qn(e,t){return typeof t=="function"?t(e):t}function zl(e){var t=Ce(),n=t.queue;if(n===null)throw Error(v(311));n.lastRenderedReducer=e;var r=Z,l=r.baseQueue,i=n.pending;if(i!==null){if(l!==null){var o=l.next;l.next=i.next,i.next=o}r.baseQueue=l=i,n.pending=null}if(l!==null){i=l.next,r=r.baseState;var u=o=null,s=null,c=i;do{var h=c.lane;if((Tt&h)===h)s!==null&&(s=s.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var m={lane:h,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};s===null?(u=s=m,o=r):s=s.next=m,z.lanes|=h,It|=h}c=c.next}while(c!==null&&c!==i);s===null?o=r:s.next=u,xe(r,t.memoizedState)||(ce=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){l=e;do i=l.lane,z.lanes|=i,It|=i,l=l.next;while(l!==e)}else l===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function jl(e){var t=Ce(),n=t.queue;if(n===null)throw Error(v(311));n.lastRenderedReducer=e;var r=n.dispatch,l=n.pending,i=t.memoizedState;if(l!==null){n.pending=null;var o=l=l.next;do i=e(i,o.action),o=o.next;while(o!==l);xe(i,t.memoizedState)||(ce=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function sa(){}function aa(e,t){var n=z,r=Ce(),l=t(),i=!xe(r.memoizedState,l);if(i&&(r.memoizedState=l,ce=!0),r=r.queue,So(fa.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||X!==null&&X.memoizedState.tag&1){if(n.flags|=2048,Zn(9,da.bind(null,n,r,l,t),void 0,null),J===null)throw Error(v(349));Tt&30||ca(n,t,l)}return l}function ca(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=z.updateQueue,t===null?(t={lastEffect:null,stores:null},z.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function da(e,t,n,r){t.value=n,t.getSnapshot=r,pa(t)&&ma(e)}function fa(e,t,n){return n(function(){pa(t)&&ma(e)})}function pa(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!xe(e,n)}catch{return!0}}function ma(e){var t=Qe(e,1);t!==null&&Me(t,e,1,-1)}function Eu(e){var t=He();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Qn,lastRenderedState:e},t.queue=e,e=e.dispatch=tf.bind(null,z,e),[t.memoizedState,e]}function Zn(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=z.updateQueue,t===null?(t={lastEffect:null,stores:null},z.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function ha(){return Ce().memoizedState}function kr(e,t,n,r){var l=He();z.flags|=e,l.memoizedState=Zn(1|t,n,void 0,r===void 0?null:r)}function sl(e,t,n,r){var l=Ce();r=r===void 0?null:r;var i=void 0;if(Z!==null){var o=Z.memoizedState;if(i=o.destroy,r!==null&&go(r,o.deps)){l.memoizedState=Zn(t,n,i,r);return}}z.flags|=e,l.memoizedState=Zn(1|t,n,i,r)}function _u(e,t){return kr(8390656,8,e,t)}function So(e,t){return sl(2048,8,e,t)}function ga(e,t){return sl(4,2,e,t)}function va(e,t){return sl(4,4,e,t)}function ya(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Sa(e,t,n){return n=n!=null?n.concat([e]):null,sl(4,4,ya.bind(null,t,e),n)}function Eo(){}function Ea(e,t){var n=Ce();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&go(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function _a(e,t){var n=Ce();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&go(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Pa(e,t,n){return Tt&21?(xe(n,t)||(n=Ts(),z.lanes|=n,It|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,ce=!0),e.memoizedState=n)}function bd(e,t){var n=x;x=n!==0&&4>n?n:4,e(!0);var r=Ul.transition;Ul.transition={};try{e(!1),t()}finally{x=n,Ul.transition=r}}function wa(){return Ce().memoizedState}function ef(e,t,n){var r=st(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Na(e))Ca(t,n);else if(n=ia(e,t,n,r),n!==null){var l=oe();Me(n,e,r,l),ka(n,t,r)}}function tf(e,t,n){var r=st(e),l={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Na(e))Ca(t,l);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var o=t.lastRenderedState,u=i(o,n);if(l.hasEagerState=!0,l.eagerState=u,xe(u,o)){var s=t.interleaved;s===null?(l.next=l,co(t)):(l.next=s.next,s.next=l),t.interleaved=l;return}}catch{}finally{}n=ia(e,t,l,r),n!==null&&(l=oe(),Me(n,e,r,l),ka(n,t,r))}}function Na(e){var t=e.alternate;return e===z||t!==null&&t===z}function Ca(e,t){In=Yr=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function ka(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Xi(e,n)}}var Kr={readContext:Ne,useCallback:te,useContext:te,useEffect:te,useImperativeHandle:te,useInsertionEffect:te,useLayoutEffect:te,useMemo:te,useReducer:te,useRef:te,useState:te,useDebugValue:te,useDeferredValue:te,useTransition:te,useMutableSource:te,useSyncExternalStore:te,useId:te,unstable_isNewReconciler:!1},nf={readContext:Ne,useCallback:function(e,t){return He().memoizedState=[e,t===void 0?null:t],e},useContext:Ne,useEffect:_u,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,kr(4194308,4,ya.bind(null,t,e),n)},useLayoutEffect:function(e,t){return kr(4194308,4,e,t)},useInsertionEffect:function(e,t){return kr(4,2,e,t)},useMemo:function(e,t){var n=He();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=He();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=ef.bind(null,z,e),[r.memoizedState,e]},useRef:function(e){var t=He();return e={current:e},t.memoizedState=e},useState:Eu,useDebugValue:Eo,useDeferredValue:function(e){return He().memoizedState=e},useTransition:function(){var e=Eu(!1),t=e[0];return e=bd.bind(null,e[1]),He().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=z,l=He();if(A){if(n===void 0)throw Error(v(407));n=n()}else{if(n=t(),J===null)throw Error(v(349));Tt&30||ca(r,t,n)}l.memoizedState=n;var i={value:n,getSnapshot:t};return l.queue=i,_u(fa.bind(null,r,i,e),[e]),r.flags|=2048,Zn(9,da.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=He(),t=J.identifierPrefix;if(A){var n=Ve,r=je;n=(r&~(1<<32-Fe(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Gn++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=qd++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},rf={readContext:Ne,useCallback:Ea,useContext:Ne,useEffect:So,useImperativeHandle:Sa,useInsertionEffect:ga,useLayoutEffect:va,useMemo:_a,useReducer:zl,useRef:ha,useState:function(){return zl(Qn)},useDebugValue:Eo,useDeferredValue:function(e){var t=Ce();return Pa(t,Z.memoizedState,e)},useTransition:function(){var e=zl(Qn)[0],t=Ce().memoizedState;return[e,t]},useMutableSource:sa,useSyncExternalStore:aa,useId:wa,unstable_isNewReconciler:!1},lf={readContext:Ne,useCallback:Ea,useContext:Ne,useEffect:So,useImperativeHandle:Sa,useInsertionEffect:ga,useLayoutEffect:va,useMemo:_a,useReducer:jl,useRef:ha,useState:function(){return jl(Qn)},useDebugValue:Eo,useDeferredValue:function(e){var t=Ce();return Z===null?t.memoizedState=e:Pa(t,Z.memoizedState,e)},useTransition:function(){var e=jl(Qn)[0],t=Ce().memoizedState;return[e,t]},useMutableSource:sa,useSyncExternalStore:aa,useId:wa,unstable_isNewReconciler:!1};function Ie(e,t){if(e&&e.defaultProps){t=j({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Pi(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:j({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var al={isMounted:function(e){return(e=e._reactInternals)?Ft(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=oe(),l=st(e),i=Be(r,l);i.payload=t,n!=null&&(i.callback=n),t=ot(e,i,l),t!==null&&(Me(t,e,l,r),Nr(t,e,l))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=oe(),l=st(e),i=Be(r,l);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=ot(e,i,l),t!==null&&(Me(t,e,l,r),Nr(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=oe(),r=st(e),l=Be(n,r);l.tag=2,t!=null&&(l.callback=t),t=ot(e,l,r),t!==null&&(Me(t,e,r,n),Nr(t,e,r))}};function Pu(e,t,n,r,l,i,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,o):t.prototype&&t.prototype.isPureReactComponent?!Un(n,r)||!Un(l,i):!0}function Ta(e,t,n){var r=!1,l=dt,i=t.contextType;return typeof i=="object"&&i!==null?i=Ne(i):(l=fe(t)?Ct:le.current,r=t.contextTypes,i=(r=r!=null)?bt(e,l):dt),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=al,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=i),t}function wu(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&al.enqueueReplaceState(t,t.state,null)}function wi(e,t,n,r){var l=e.stateNode;l.props=n,l.state=e.memoizedState,l.refs={},fo(e);var i=t.contextType;typeof i=="object"&&i!==null?l.context=Ne(i):(i=fe(t)?Ct:le.current,l.context=bt(e,i)),l.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Pi(e,t,i,n),l.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(t=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),t!==l.state&&al.enqueueReplaceState(l,l.state,null),Qr(e,n,l,r),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function rn(e,t){try{var n="",r=t;do n+=Mc(r),r=r.return;while(r);var l=n}catch(i){l=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:l,digest:null}}function Vl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Ni(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var of=typeof WeakMap=="function"?WeakMap:Map;function Ia(e,t,n){n=Be(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Jr||(Jr=!0,Oi=r),Ni(e,t)},n}function La(e,t,n){n=Be(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var l=t.value;n.payload=function(){return r(l)},n.callback=function(){Ni(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Ni(e,t),typeof r!="function"&&(ut===null?ut=new Set([this]):ut.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function Nu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new of;var l=new Set;r.set(t,l)}else l=r.get(t),l===void 0&&(l=new Set,r.set(t,l));l.has(n)||(l.add(n),e=Ef.bind(null,e,t,n),t.then(e,e))}function Cu(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function ku(e,t,n,r,l){return e.mode&1?(e.flags|=65536,e.lanes=l,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Be(-1,1),t.tag=2,ot(n,t,1))),n.lanes|=1),e)}var uf=Ye.ReactCurrentOwner,ce=!1;function ie(e,t,n,r){t.child=e===null?la(t,null,n,r):tn(t,e.child,n,r)}function Tu(e,t,n,r,l){n=n.render;var i=t.ref;return Xt(t,l),r=vo(e,t,n,r,i,l),n=yo(),e!==null&&!ce?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,Ze(e,t,l)):(A&&n&&lo(t),t.flags|=1,ie(e,t,r,l),t.child)}function Iu(e,t,n,r,l){if(e===null){var i=n.type;return typeof i=="function"&&!Io(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,Da(e,t,i,r,l)):(e=Dr(n.type,null,r,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&l)){var o=i.memoizedProps;if(n=n.compare,n=n!==null?n:Un,n(o,r)&&e.ref===t.ref)return Ze(e,t,l)}return t.flags|=1,e=at(i,r),e.ref=t.ref,e.return=t,t.child=e}function Da(e,t,n,r,l){if(e!==null){var i=e.memoizedProps;if(Un(i,r)&&e.ref===t.ref)if(ce=!1,t.pendingProps=r=i,(e.lanes&l)!==0)e.flags&131072&&(ce=!0);else return t.lanes=e.lanes,Ze(e,t,l)}return Ci(e,t,n,r,l)}function Fa(e,t,n){var r=t.pendingProps,l=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},O(Gt,me),me|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,O(Gt,me),me|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,O(Gt,me),me|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,O(Gt,me),me|=r;return ie(e,t,l,n),t.child}function Ma(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Ci(e,t,n,r,l){var i=fe(n)?Ct:le.current;return i=bt(t,i),Xt(t,l),n=vo(e,t,n,r,i,l),r=yo(),e!==null&&!ce?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,Ze(e,t,l)):(A&&r&&lo(t),t.flags|=1,ie(e,t,n,l),t.child)}function Lu(e,t,n,r,l){if(fe(n)){var i=!0;jr(t)}else i=!1;if(Xt(t,l),t.stateNode===null)Tr(e,t),Ta(t,n,r),wi(t,n,r,l),r=!0;else if(e===null){var o=t.stateNode,u=t.memoizedProps;o.props=u;var s=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Ne(c):(c=fe(n)?Ct:le.current,c=bt(t,c));var h=n.getDerivedStateFromProps,m=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function";m||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(u!==r||s!==c)&&wu(t,o,r,c),Je=!1;var p=t.memoizedState;o.state=p,Qr(t,r,o,l),s=t.memoizedState,u!==r||p!==s||de.current||Je?(typeof h=="function"&&(Pi(t,n,h,r),s=t.memoizedState),(u=Je||Pu(t,n,u,r,p,s,c))?(m||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),o.props=r,o.state=s,o.context=c,r=u):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,oa(e,t),u=t.memoizedProps,c=t.type===t.elementType?u:Ie(t.type,u),o.props=c,m=t.pendingProps,p=o.context,s=n.contextType,typeof s=="object"&&s!==null?s=Ne(s):(s=fe(n)?Ct:le.current,s=bt(t,s));var y=n.getDerivedStateFromProps;(h=typeof y=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(u!==m||p!==s)&&wu(t,o,r,s),Je=!1,p=t.memoizedState,o.state=p,Qr(t,r,o,l);var S=t.memoizedState;u!==m||p!==S||de.current||Je?(typeof y=="function"&&(Pi(t,n,y,r),S=t.memoizedState),(c=Je||Pu(t,n,c,r,p,S,s)||!1)?(h||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,S,s),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,S,s)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||u===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=S),o.props=r,o.state=S,o.context=s,r=c):(typeof o.componentDidUpdate!="function"||u===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),r=!1)}return ki(e,t,n,r,i,l)}function ki(e,t,n,r,l,i){Ma(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return l&&mu(t,n,!1),Ze(e,t,i);r=t.stateNode,uf.current=t;var u=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=tn(t,e.child,null,i),t.child=tn(t,null,u,i)):ie(e,t,u,i),t.memoizedState=r.state,l&&mu(t,n,!0),t.child}function xa(e){var t=e.stateNode;t.pendingContext?pu(e,t.pendingContext,t.pendingContext!==t.context):t.context&&pu(e,t.context,!1),po(e,t.containerInfo)}function Du(e,t,n,r,l){return en(),oo(l),t.flags|=256,ie(e,t,n,r),t.child}var Ti={dehydrated:null,treeContext:null,retryLane:0};function Ii(e){return{baseLanes:e,cachePool:null,transitions:null}}function Oa(e,t,n){var r=t.pendingProps,l=U.current,i=!1,o=(t.flags&128)!==0,u;if((u=o)||(u=e!==null&&e.memoizedState===null?!1:(l&2)!==0),u?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),O(U,l&1),e===null)return Ei(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,i?(r=t.mode,i=t.child,o={mode:"hidden",children:o},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=o):i=fl(o,r,0,null),e=Nt(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=Ii(n),t.memoizedState=Ti,e):_o(t,o));if(l=e.memoizedState,l!==null&&(u=l.dehydrated,u!==null))return sf(e,t,o,r,u,l,n);if(i){i=r.fallback,o=t.mode,l=e.child,u=l.sibling;var s={mode:"hidden",children:r.children};return!(o&1)&&t.child!==l?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=at(l,s),r.subtreeFlags=l.subtreeFlags&14680064),u!==null?i=at(u,i):(i=Nt(i,o,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,o=e.child.memoizedState,o=o===null?Ii(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=e.childLanes&~n,t.memoizedState=Ti,r}return i=e.child,e=i.sibling,r=at(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function _o(e,t){return t=fl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function hr(e,t,n,r){return r!==null&&oo(r),tn(t,e.child,null,n),e=_o(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function sf(e,t,n,r,l,i,o){if(n)return t.flags&256?(t.flags&=-257,r=Vl(Error(v(422))),hr(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,l=t.mode,r=fl({mode:"visible",children:r.children},l,0,null),i=Nt(i,l,o,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&tn(t,e.child,null,o),t.child.memoizedState=Ii(o),t.memoizedState=Ti,i);if(!(t.mode&1))return hr(e,t,o,null);if(l.data==="$!"){if(r=l.nextSibling&&l.nextSibling.dataset,r)var u=r.dgst;return r=u,i=Error(v(419)),r=Vl(i,r,void 0),hr(e,t,o,r)}if(u=(o&e.childLanes)!==0,ce||u){if(r=J,r!==null){switch(o&-o){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=l&(r.suspendedLanes|o)?0:l,l!==0&&l!==i.retryLane&&(i.retryLane=l,Qe(e,l),Me(r,e,l,-1))}return To(),r=Vl(Error(v(421))),hr(e,t,o,r)}return l.data==="$?"?(t.flags|=128,t.child=e.child,t=_f.bind(null,e),l._reactRetry=t,null):(e=i.treeContext,he=it(l.nextSibling),ge=t,A=!0,De=null,e!==null&&(Ee[_e++]=je,Ee[_e++]=Ve,Ee[_e++]=kt,je=e.id,Ve=e.overflow,kt=t),t=_o(t,r.children),t.flags|=4096,t)}function Fu(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),_i(e.return,t,n)}function Bl(e,t,n,r,l){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:l}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=l)}function Ha(e,t,n){var r=t.pendingProps,l=r.revealOrder,i=r.tail;if(ie(e,t,r.children,n),r=U.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Fu(e,n,t);else if(e.tag===19)Fu(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(O(U,r),!(t.mode&1))t.memoizedState=null;else switch(l){case"forwards":for(n=t.child,l=null;n!==null;)e=n.alternate,e!==null&&Zr(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),Bl(t,!1,l,n,i);break;case"backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&Zr(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}Bl(t,!0,n,null,i);break;case"together":Bl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Tr(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Ze(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),It|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(v(153));if(t.child!==null){for(e=t.child,n=at(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=at(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function af(e,t,n){switch(t.tag){case 3:xa(t),en();break;case 5:ua(t);break;case 1:fe(t.type)&&jr(t);break;case 4:po(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,l=t.memoizedProps.value;O($r,r._currentValue),r._currentValue=l;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(O(U,U.current&1),t.flags|=128,null):n&t.child.childLanes?Oa(e,t,n):(O(U,U.current&1),e=Ze(e,t,n),e!==null?e.sibling:null);O(U,U.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Ha(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),O(U,U.current),r)break;return null;case 22:case 23:return t.lanes=0,Fa(e,t,n)}return Ze(e,t,n)}var Ra,Li,Wa,Aa;Ra=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Li=function(){};Wa=function(e,t,n,r){var l=e.memoizedProps;if(l!==r){e=t.stateNode,_t(Ae.current);var i=null;switch(n){case"input":l=Jl(e,l),r=Jl(e,r),i=[];break;case"select":l=j({},l,{value:void 0}),r=j({},r,{value:void 0}),i=[];break;case"textarea":l=ei(e,l),r=ei(e,r),i=[];break;default:typeof l.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Ur)}ni(n,r);var o;n=null;for(c in l)if(!r.hasOwnProperty(c)&&l.hasOwnProperty(c)&&l[c]!=null)if(c==="style"){var u=l[c];for(o in u)u.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Mn.hasOwnProperty(c)?i||(i=[]):(i=i||[]).push(c,null));for(c in r){var s=r[c];if(u=l!=null?l[c]:void 0,r.hasOwnProperty(c)&&s!==u&&(s!=null||u!=null))if(c==="style")if(u){for(o in u)!u.hasOwnProperty(o)||s&&s.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in s)s.hasOwnProperty(o)&&u[o]!==s[o]&&(n||(n={}),n[o]=s[o])}else n||(i||(i=[]),i.push(c,n)),n=s;else c==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,u=u?u.__html:void 0,s!=null&&u!==s&&(i=i||[]).push(c,s)):c==="children"?typeof s!="string"&&typeof s!="number"||(i=i||[]).push(c,""+s):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Mn.hasOwnProperty(c)?(s!=null&&c==="onScroll"&&H("scroll",e),i||u===s||(i=[])):(i=i||[]).push(c,s))}n&&(i=i||[]).push("style",n);var c=i;(t.updateQueue=c)&&(t.flags|=4)}};Aa=function(e,t,n,r){n!==r&&(t.flags|=4)};function vn(e,t){if(!A)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ne(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags&14680064,r|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function cf(e,t,n){var r=t.pendingProps;switch(io(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ne(t),null;case 1:return fe(t.type)&&zr(),ne(t),null;case 3:return r=t.stateNode,nn(),R(de),R(le),ho(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(pr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,De!==null&&(Wi(De),De=null))),Li(e,t),ne(t),null;case 5:mo(t);var l=_t($n.current);if(n=t.type,e!==null&&t.stateNode!=null)Wa(e,t,n,r,l),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(v(166));return ne(t),null}if(e=_t(Ae.current),pr(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[Re]=t,r[Vn]=i,e=(t.mode&1)!==0,n){case"dialog":H("cancel",r),H("close",r);break;case"iframe":case"object":case"embed":H("load",r);break;case"video":case"audio":for(l=0;l<Pn.length;l++)H(Pn[l],r);break;case"source":H("error",r);break;case"img":case"image":case"link":H("error",r),H("load",r);break;case"details":H("toggle",r);break;case"input":zo(r,i),H("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},H("invalid",r);break;case"textarea":Vo(r,i),H("invalid",r)}ni(n,i),l=null;for(var o in i)if(i.hasOwnProperty(o)){var u=i[o];o==="children"?typeof u=="string"?r.textContent!==u&&(i.suppressHydrationWarning!==!0&&fr(r.textContent,u,e),l=["children",u]):typeof u=="number"&&r.textContent!==""+u&&(i.suppressHydrationWarning!==!0&&fr(r.textContent,u,e),l=["children",""+u]):Mn.hasOwnProperty(o)&&u!=null&&o==="onScroll"&&H("scroll",r)}switch(n){case"input":lr(r),jo(r,i,!0);break;case"textarea":lr(r),Bo(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Ur)}r=l,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=fs(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[Re]=t,e[Vn]=r,Ra(e,t,!1,!1),t.stateNode=e;e:{switch(o=ri(n,r),n){case"dialog":H("cancel",e),H("close",e),l=r;break;case"iframe":case"object":case"embed":H("load",e),l=r;break;case"video":case"audio":for(l=0;l<Pn.length;l++)H(Pn[l],e);l=r;break;case"source":H("error",e),l=r;break;case"img":case"image":case"link":H("error",e),H("load",e),l=r;break;case"details":H("toggle",e),l=r;break;case"input":zo(e,r),l=Jl(e,r),H("invalid",e);break;case"option":l=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},l=j({},r,{value:void 0}),H("invalid",e);break;case"textarea":Vo(e,r),l=ei(e,r),H("invalid",e);break;default:l=r}ni(n,l),u=l;for(i in u)if(u.hasOwnProperty(i)){var s=u[i];i==="style"?hs(e,s):i==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&ps(e,s)):i==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&xn(e,s):typeof s=="number"&&xn(e,""+s):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Mn.hasOwnProperty(i)?s!=null&&i==="onScroll"&&H("scroll",e):s!=null&&$i(e,i,s,o))}switch(n){case"input":lr(e),jo(e,r,!1);break;case"textarea":lr(e),Bo(e);break;case"option":r.value!=null&&e.setAttribute("value",""+ct(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?Qt(e,!!r.multiple,i,!1):r.defaultValue!=null&&Qt(e,!!r.multiple,r.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=Ur)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ne(t),null;case 6:if(e&&t.stateNode!=null)Aa(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(v(166));if(n=_t($n.current),_t(Ae.current),pr(t)){if(r=t.stateNode,n=t.memoizedProps,r[Re]=t,(i=r.nodeValue!==n)&&(e=ge,e!==null))switch(e.tag){case 3:fr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&fr(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Re]=t,t.stateNode=r}return ne(t),null;case 13:if(R(U),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(A&&he!==null&&t.mode&1&&!(t.flags&128))na(),en(),t.flags|=98560,i=!1;else if(i=pr(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(v(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(v(317));i[Re]=t}else en(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ne(t),i=!1}else De!==null&&(Wi(De),De=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||U.current&1?Y===0&&(Y=3):To())),t.updateQueue!==null&&(t.flags|=4),ne(t),null);case 4:return nn(),Li(e,t),e===null&&zn(t.stateNode.containerInfo),ne(t),null;case 10:return ao(t.type._context),ne(t),null;case 17:return fe(t.type)&&zr(),ne(t),null;case 19:if(R(U),i=t.memoizedState,i===null)return ne(t),null;if(r=(t.flags&128)!==0,o=i.rendering,o===null)if(r)vn(i,!1);else{if(Y!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=Zr(e),o!==null){for(t.flags|=128,vn(i,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,e=o.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return O(U,U.current&1|2),t.child}e=e.sibling}i.tail!==null&&G()>ln&&(t.flags|=128,r=!0,vn(i,!1),t.lanes=4194304)}else{if(!r)if(e=Zr(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),vn(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!A)return ne(t),null}else 2*G()-i.renderingStartTime>ln&&n!==1073741824&&(t.flags|=128,r=!0,vn(i,!1),t.lanes=4194304);i.isBackwards?(o.sibling=t.child,t.child=o):(n=i.last,n!==null?n.sibling=o:t.child=o,i.last=o)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=G(),t.sibling=null,n=U.current,O(U,r?n&1|2:n&1),t):(ne(t),null);case 22:case 23:return ko(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?me&1073741824&&(ne(t),t.subtreeFlags&6&&(t.flags|=8192)):ne(t),null;case 24:return null;case 25:return null}throw Error(v(156,t.tag))}function df(e,t){switch(io(t),t.tag){case 1:return fe(t.type)&&zr(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return nn(),R(de),R(le),ho(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return mo(t),null;case 13:if(R(U),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(v(340));en()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return R(U),null;case 4:return nn(),null;case 10:return ao(t.type._context),null;case 22:case 23:return ko(),null;case 24:return null;default:return null}}var gr=!1,re=!1,ff=typeof WeakSet=="function"?WeakSet:Set,_=null;function $t(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){V(e,t,r)}else n.current=null}function Di(e,t,n){try{n()}catch(r){V(e,t,r)}}var Mu=!1;function pf(e,t){if(pi=Rr,e=Bs(),ro(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var l=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var o=0,u=-1,s=-1,c=0,h=0,m=e,p=null;t:for(;;){for(var y;m!==n||l!==0&&m.nodeType!==3||(u=o+l),m!==i||r!==0&&m.nodeType!==3||(s=o+r),m.nodeType===3&&(o+=m.nodeValue.length),(y=m.firstChild)!==null;)p=m,m=y;for(;;){if(m===e)break t;if(p===n&&++c===l&&(u=o),p===i&&++h===r&&(s=o),(y=m.nextSibling)!==null)break;m=p,p=m.parentNode}m=y}n=u===-1||s===-1?null:{start:u,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(mi={focusedElem:e,selectionRange:n},Rr=!1,_=t;_!==null;)if(t=_,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,_=e;else for(;_!==null;){t=_;try{var S=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(S!==null){var E=S.memoizedProps,W=S.memoizedState,d=t.stateNode,a=d.getSnapshotBeforeUpdate(t.elementType===t.type?E:Ie(t.type,E),W);d.__reactInternalSnapshotBeforeUpdate=a}break;case 3:var f=t.stateNode.containerInfo;f.nodeType===1?f.textContent="":f.nodeType===9&&f.documentElement&&f.removeChild(f.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(v(163))}}catch(g){V(t,t.return,g)}if(e=t.sibling,e!==null){e.return=t.return,_=e;break}_=t.return}return S=Mu,Mu=!1,S}function Ln(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&e)===e){var i=l.destroy;l.destroy=void 0,i!==void 0&&Di(t,n,i)}l=l.next}while(l!==r)}}function cl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Fi(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Ua(e){var t=e.alternate;t!==null&&(e.alternate=null,Ua(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Re],delete t[Vn],delete t[vi],delete t[Yd],delete t[Kd])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function za(e){return e.tag===5||e.tag===3||e.tag===4}function xu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||za(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Mi(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Ur));else if(r!==4&&(e=e.child,e!==null))for(Mi(e,t,n),e=e.sibling;e!==null;)Mi(e,t,n),e=e.sibling}function xi(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(xi(e,t,n),e=e.sibling;e!==null;)xi(e,t,n),e=e.sibling}var q=null,Le=!1;function Ke(e,t,n){for(n=n.child;n!==null;)ja(e,t,n),n=n.sibling}function ja(e,t,n){if(We&&typeof We.onCommitFiberUnmount=="function")try{We.onCommitFiberUnmount(nl,n)}catch{}switch(n.tag){case 5:re||$t(n,t);case 6:var r=q,l=Le;q=null,Ke(e,t,n),q=r,Le=l,q!==null&&(Le?(e=q,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):q.removeChild(n.stateNode));break;case 18:q!==null&&(Le?(e=q,n=n.stateNode,e.nodeType===8?Rl(e.parentNode,n):e.nodeType===1&&Rl(e,n),Wn(e)):Rl(q,n.stateNode));break;case 4:r=q,l=Le,q=n.stateNode.containerInfo,Le=!0,Ke(e,t,n),q=r,Le=l;break;case 0:case 11:case 14:case 15:if(!re&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){l=r=r.next;do{var i=l,o=i.destroy;i=i.tag,o!==void 0&&(i&2||i&4)&&Di(n,t,o),l=l.next}while(l!==r)}Ke(e,t,n);break;case 1:if(!re&&($t(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(u){V(n,t,u)}Ke(e,t,n);break;case 21:Ke(e,t,n);break;case 22:n.mode&1?(re=(r=re)||n.memoizedState!==null,Ke(e,t,n),re=r):Ke(e,t,n);break;default:Ke(e,t,n)}}function Ou(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new ff),t.forEach(function(r){var l=Pf.bind(null,e,r);n.has(r)||(n.add(r),r.then(l,l))})}}function Te(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var l=n[r];try{var i=e,o=t,u=o;e:for(;u!==null;){switch(u.tag){case 5:q=u.stateNode,Le=!1;break e;case 3:q=u.stateNode.containerInfo,Le=!0;break e;case 4:q=u.stateNode.containerInfo,Le=!0;break e}u=u.return}if(q===null)throw Error(v(160));ja(i,o,l),q=null,Le=!1;var s=l.alternate;s!==null&&(s.return=null),l.return=null}catch(c){V(l,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Va(t,e),t=t.sibling}function Va(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Te(t,e),Oe(e),r&4){try{Ln(3,e,e.return),cl(3,e)}catch(E){V(e,e.return,E)}try{Ln(5,e,e.return)}catch(E){V(e,e.return,E)}}break;case 1:Te(t,e),Oe(e),r&512&&n!==null&&$t(n,n.return);break;case 5:if(Te(t,e),Oe(e),r&512&&n!==null&&$t(n,n.return),e.flags&32){var l=e.stateNode;try{xn(l,"")}catch(E){V(e,e.return,E)}}if(r&4&&(l=e.stateNode,l!=null)){var i=e.memoizedProps,o=n!==null?n.memoizedProps:i,u=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{u==="input"&&i.type==="radio"&&i.name!=null&&cs(l,i),ri(u,o);var c=ri(u,i);for(o=0;o<s.length;o+=2){var h=s[o],m=s[o+1];h==="style"?hs(l,m):h==="dangerouslySetInnerHTML"?ps(l,m):h==="children"?xn(l,m):$i(l,h,m,c)}switch(u){case"input":ql(l,i);break;case"textarea":ds(l,i);break;case"select":var p=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!i.multiple;var y=i.value;y!=null?Qt(l,!!i.multiple,y,!1):p!==!!i.multiple&&(i.defaultValue!=null?Qt(l,!!i.multiple,i.defaultValue,!0):Qt(l,!!i.multiple,i.multiple?[]:"",!1))}l[Vn]=i}catch(E){V(e,e.return,E)}}break;case 6:if(Te(t,e),Oe(e),r&4){if(e.stateNode===null)throw Error(v(162));l=e.stateNode,i=e.memoizedProps;try{l.nodeValue=i}catch(E){V(e,e.return,E)}}break;case 3:if(Te(t,e),Oe(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Wn(t.containerInfo)}catch(E){V(e,e.return,E)}break;case 4:Te(t,e),Oe(e);break;case 13:Te(t,e),Oe(e),l=e.child,l.flags&8192&&(i=l.memoizedState!==null,l.stateNode.isHidden=i,!i||l.alternate!==null&&l.alternate.memoizedState!==null||(No=G())),r&4&&Ou(e);break;case 22:if(h=n!==null&&n.memoizedState!==null,e.mode&1?(re=(c=re)||h,Te(t,e),re=c):Te(t,e),Oe(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!h&&e.mode&1)for(_=e,h=e.child;h!==null;){for(m=_=h;_!==null;){switch(p=_,y=p.child,p.tag){case 0:case 11:case 14:case 15:Ln(4,p,p.return);break;case 1:$t(p,p.return);var S=p.stateNode;if(typeof S.componentWillUnmount=="function"){r=p,n=p.return;try{t=r,S.props=t.memoizedProps,S.state=t.memoizedState,S.componentWillUnmount()}catch(E){V(r,n,E)}}break;case 5:$t(p,p.return);break;case 22:if(p.memoizedState!==null){Ru(m);continue}}y!==null?(y.return=p,_=y):Ru(m)}h=h.sibling}e:for(h=null,m=e;;){if(m.tag===5){if(h===null){h=m;try{l=m.stateNode,c?(i=l.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(u=m.stateNode,s=m.memoizedProps.style,o=s!=null&&s.hasOwnProperty("display")?s.display:null,u.style.display=ms("display",o))}catch(E){V(e,e.return,E)}}}else if(m.tag===6){if(h===null)try{m.stateNode.nodeValue=c?"":m.memoizedProps}catch(E){V(e,e.return,E)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===e)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===e)break e;for(;m.sibling===null;){if(m.return===null||m.return===e)break e;h===m&&(h=null),m=m.return}h===m&&(h=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:Te(t,e),Oe(e),r&4&&Ou(e);break;case 21:break;default:Te(t,e),Oe(e)}}function Oe(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(za(n)){var r=n;break e}n=n.return}throw Error(v(160))}switch(r.tag){case 5:var l=r.stateNode;r.flags&32&&(xn(l,""),r.flags&=-33);var i=xu(e);xi(e,i,l);break;case 3:case 4:var o=r.stateNode.containerInfo,u=xu(e);Mi(e,u,o);break;default:throw Error(v(161))}}catch(s){V(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function mf(e,t,n){_=e,Ba(e)}function Ba(e,t,n){for(var r=(e.mode&1)!==0;_!==null;){var l=_,i=l.child;if(l.tag===22&&r){var o=l.memoizedState!==null||gr;if(!o){var u=l.alternate,s=u!==null&&u.memoizedState!==null||re;u=gr;var c=re;if(gr=o,(re=s)&&!c)for(_=l;_!==null;)o=_,s=o.child,o.tag===22&&o.memoizedState!==null?Wu(l):s!==null?(s.return=o,_=s):Wu(l);for(;i!==null;)_=i,Ba(i),i=i.sibling;_=l,gr=u,re=c}Hu(e)}else l.subtreeFlags&8772&&i!==null?(i.return=l,_=i):Hu(e)}}function Hu(e){for(;_!==null;){var t=_;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:re||cl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!re)if(n===null)r.componentDidMount();else{var l=t.elementType===t.type?n.memoizedProps:Ie(t.type,n.memoizedProps);r.componentDidUpdate(l,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&Su(t,i,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Su(t,o,n)}break;case 5:var u=t.stateNode;if(n===null&&t.flags&4){n=u;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var h=c.memoizedState;if(h!==null){var m=h.dehydrated;m!==null&&Wn(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(v(163))}re||t.flags&512&&Fi(t)}catch(p){V(t,t.return,p)}}if(t===e){_=null;break}if(n=t.sibling,n!==null){n.return=t.return,_=n;break}_=t.return}}function Ru(e){for(;_!==null;){var t=_;if(t===e){_=null;break}var n=t.sibling;if(n!==null){n.return=t.return,_=n;break}_=t.return}}function Wu(e){for(;_!==null;){var t=_;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{cl(4,t)}catch(s){V(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var l=t.return;try{r.componentDidMount()}catch(s){V(t,l,s)}}var i=t.return;try{Fi(t)}catch(s){V(t,i,s)}break;case 5:var o=t.return;try{Fi(t)}catch(s){V(t,o,s)}}}catch(s){V(t,t.return,s)}if(t===e){_=null;break}var u=t.sibling;if(u!==null){u.return=t.return,_=u;break}_=t.return}}var hf=Math.ceil,Xr=Ye.ReactCurrentDispatcher,Po=Ye.ReactCurrentOwner,we=Ye.ReactCurrentBatchConfig,F=0,J=null,Q=null,b=0,me=0,Gt=pt(0),Y=0,Yn=null,It=0,dl=0,wo=0,Dn=null,ae=null,No=0,ln=1/0,Ue=null,Jr=!1,Oi=null,ut=null,vr=!1,tt=null,qr=0,Fn=0,Hi=null,Ir=-1,Lr=0;function oe(){return F&6?G():Ir!==-1?Ir:Ir=G()}function st(e){return e.mode&1?F&2&&b!==0?b&-b:Jd.transition!==null?(Lr===0&&(Lr=Ts()),Lr):(e=x,e!==0||(e=window.event,e=e===void 0?16:Os(e.type)),e):1}function Me(e,t,n,r){if(50<Fn)throw Fn=0,Hi=null,Error(v(185));Xn(e,n,r),(!(F&2)||e!==J)&&(e===J&&(!(F&2)&&(dl|=n),Y===4&&be(e,b)),pe(e,r),n===1&&F===0&&!(t.mode&1)&&(ln=G()+500,ul&&mt()))}function pe(e,t){var n=e.callbackNode;Jc(e,t);var r=Hr(e,e===J?b:0);if(r===0)n!==null&&Qo(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Qo(n),t===1)e.tag===0?Xd(Au.bind(null,e)):bs(Au.bind(null,e)),Qd(function(){!(F&6)&&mt()}),n=null;else{switch(Is(r)){case 1:n=Ki;break;case 4:n=Cs;break;case 16:n=Or;break;case 536870912:n=ks;break;default:n=Or}n=Ja(n,$a.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function $a(e,t){if(Ir=-1,Lr=0,F&6)throw Error(v(327));var n=e.callbackNode;if(Jt()&&e.callbackNode!==n)return null;var r=Hr(e,e===J?b:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=br(e,r);else{t=r;var l=F;F|=2;var i=Qa();(J!==e||b!==t)&&(Ue=null,ln=G()+500,wt(e,t));do try{yf();break}catch(u){Ga(e,u)}while(!0);so(),Xr.current=i,F=l,Q!==null?t=0:(J=null,b=0,t=Y)}if(t!==0){if(t===2&&(l=si(e),l!==0&&(r=l,t=Ri(e,l))),t===1)throw n=Yn,wt(e,0),be(e,r),pe(e,G()),n;if(t===6)be(e,r);else{if(l=e.current.alternate,!(r&30)&&!gf(l)&&(t=br(e,r),t===2&&(i=si(e),i!==0&&(r=i,t=Ri(e,i))),t===1))throw n=Yn,wt(e,0),be(e,r),pe(e,G()),n;switch(e.finishedWork=l,e.finishedLanes=r,t){case 0:case 1:throw Error(v(345));case 2:yt(e,ae,Ue);break;case 3:if(be(e,r),(r&130023424)===r&&(t=No+500-G(),10<t)){if(Hr(e,0)!==0)break;if(l=e.suspendedLanes,(l&r)!==r){oe(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=gi(yt.bind(null,e,ae,Ue),t);break}yt(e,ae,Ue);break;case 4:if(be(e,r),(r&4194240)===r)break;for(t=e.eventTimes,l=-1;0<r;){var o=31-Fe(r);i=1<<o,o=t[o],o>l&&(l=o),r&=~i}if(r=l,r=G()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*hf(r/1960))-r,10<r){e.timeoutHandle=gi(yt.bind(null,e,ae,Ue),r);break}yt(e,ae,Ue);break;case 5:yt(e,ae,Ue);break;default:throw Error(v(329))}}}return pe(e,G()),e.callbackNode===n?$a.bind(null,e):null}function Ri(e,t){var n=Dn;return e.current.memoizedState.isDehydrated&&(wt(e,t).flags|=256),e=br(e,t),e!==2&&(t=ae,ae=n,t!==null&&Wi(t)),e}function Wi(e){ae===null?ae=e:ae.push.apply(ae,e)}function gf(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var l=n[r],i=l.getSnapshot;l=l.value;try{if(!xe(i(),l))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function be(e,t){for(t&=~wo,t&=~dl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Fe(t),r=1<<n;e[n]=-1,t&=~r}}function Au(e){if(F&6)throw Error(v(327));Jt();var t=Hr(e,0);if(!(t&1))return pe(e,G()),null;var n=br(e,t);if(e.tag!==0&&n===2){var r=si(e);r!==0&&(t=r,n=Ri(e,r))}if(n===1)throw n=Yn,wt(e,0),be(e,t),pe(e,G()),n;if(n===6)throw Error(v(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,yt(e,ae,Ue),pe(e,G()),null}function Co(e,t){var n=F;F|=1;try{return e(t)}finally{F=n,F===0&&(ln=G()+500,ul&&mt())}}function Lt(e){tt!==null&&tt.tag===0&&!(F&6)&&Jt();var t=F;F|=1;var n=we.transition,r=x;try{if(we.transition=null,x=1,e)return e()}finally{x=r,we.transition=n,F=t,!(F&6)&&mt()}}function ko(){me=Gt.current,R(Gt)}function wt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Gd(n)),Q!==null)for(n=Q.return;n!==null;){var r=n;switch(io(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&zr();break;case 3:nn(),R(de),R(le),ho();break;case 5:mo(r);break;case 4:nn();break;case 13:R(U);break;case 19:R(U);break;case 10:ao(r.type._context);break;case 22:case 23:ko()}n=n.return}if(J=e,Q=e=at(e.current,null),b=me=t,Y=0,Yn=null,wo=dl=It=0,ae=Dn=null,Et!==null){for(t=0;t<Et.length;t++)if(n=Et[t],r=n.interleaved,r!==null){n.interleaved=null;var l=r.next,i=n.pending;if(i!==null){var o=i.next;i.next=l,r.next=o}n.pending=r}Et=null}return e}function Ga(e,t){do{var n=Q;try{if(so(),Cr.current=Kr,Yr){for(var r=z.memoizedState;r!==null;){var l=r.queue;l!==null&&(l.pending=null),r=r.next}Yr=!1}if(Tt=0,X=Z=z=null,In=!1,Gn=0,Po.current=null,n===null||n.return===null){Y=1,Yn=t,Q=null;break}e:{var i=e,o=n.return,u=n,s=t;if(t=b,u.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var c=s,h=u,m=h.tag;if(!(h.mode&1)&&(m===0||m===11||m===15)){var p=h.alternate;p?(h.updateQueue=p.updateQueue,h.memoizedState=p.memoizedState,h.lanes=p.lanes):(h.updateQueue=null,h.memoizedState=null)}var y=Cu(o);if(y!==null){y.flags&=-257,ku(y,o,u,i,t),y.mode&1&&Nu(i,c,t),t=y,s=c;var S=t.updateQueue;if(S===null){var E=new Set;E.add(s),t.updateQueue=E}else S.add(s);break e}else{if(!(t&1)){Nu(i,c,t),To();break e}s=Error(v(426))}}else if(A&&u.mode&1){var W=Cu(o);if(W!==null){!(W.flags&65536)&&(W.flags|=256),ku(W,o,u,i,t),oo(rn(s,u));break e}}i=s=rn(s,u),Y!==4&&(Y=2),Dn===null?Dn=[i]:Dn.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var d=Ia(i,s,t);yu(i,d);break e;case 1:u=s;var a=i.type,f=i.stateNode;if(!(i.flags&128)&&(typeof a.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(ut===null||!ut.has(f)))){i.flags|=65536,t&=-t,i.lanes|=t;var g=La(i,u,t);yu(i,g);break e}}i=i.return}while(i!==null)}Ya(n)}catch(P){t=P,Q===n&&n!==null&&(Q=n=n.return);continue}break}while(!0)}function Qa(){var e=Xr.current;return Xr.current=Kr,e===null?Kr:e}function To(){(Y===0||Y===3||Y===2)&&(Y=4),J===null||!(It&268435455)&&!(dl&268435455)||be(J,b)}function br(e,t){var n=F;F|=2;var r=Qa();(J!==e||b!==t)&&(Ue=null,wt(e,t));do try{vf();break}catch(l){Ga(e,l)}while(!0);if(so(),F=n,Xr.current=r,Q!==null)throw Error(v(261));return J=null,b=0,Y}function vf(){for(;Q!==null;)Za(Q)}function yf(){for(;Q!==null&&!Vc();)Za(Q)}function Za(e){var t=Xa(e.alternate,e,me);e.memoizedProps=e.pendingProps,t===null?Ya(e):Q=t,Po.current=null}function Ya(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=df(n,t),n!==null){n.flags&=32767,Q=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Y=6,Q=null;return}}else if(n=cf(n,t,me),n!==null){Q=n;return}if(t=t.sibling,t!==null){Q=t;return}Q=t=e}while(t!==null);Y===0&&(Y=5)}function yt(e,t,n){var r=x,l=we.transition;try{we.transition=null,x=1,Sf(e,t,n,r)}finally{we.transition=l,x=r}return null}function Sf(e,t,n,r){do Jt();while(tt!==null);if(F&6)throw Error(v(327));n=e.finishedWork;var l=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(v(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(qc(e,i),e===J&&(Q=J=null,b=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||vr||(vr=!0,Ja(Or,function(){return Jt(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=we.transition,we.transition=null;var o=x;x=1;var u=F;F|=4,Po.current=null,pf(e,n),Va(n,e),Ad(mi),Rr=!!pi,mi=pi=null,e.current=n,mf(n),Bc(),F=u,x=o,we.transition=i}else e.current=n;if(vr&&(vr=!1,tt=e,qr=l),i=e.pendingLanes,i===0&&(ut=null),Qc(n.stateNode),pe(e,G()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)l=t[n],r(l.value,{componentStack:l.stack,digest:l.digest});if(Jr)throw Jr=!1,e=Oi,Oi=null,e;return qr&1&&e.tag!==0&&Jt(),i=e.pendingLanes,i&1?e===Hi?Fn++:(Fn=0,Hi=e):Fn=0,mt(),null}function Jt(){if(tt!==null){var e=Is(qr),t=we.transition,n=x;try{if(we.transition=null,x=16>e?16:e,tt===null)var r=!1;else{if(e=tt,tt=null,qr=0,F&6)throw Error(v(331));var l=F;for(F|=4,_=e.current;_!==null;){var i=_,o=i.child;if(_.flags&16){var u=i.deletions;if(u!==null){for(var s=0;s<u.length;s++){var c=u[s];for(_=c;_!==null;){var h=_;switch(h.tag){case 0:case 11:case 15:Ln(8,h,i)}var m=h.child;if(m!==null)m.return=h,_=m;else for(;_!==null;){h=_;var p=h.sibling,y=h.return;if(Ua(h),h===c){_=null;break}if(p!==null){p.return=y,_=p;break}_=y}}}var S=i.alternate;if(S!==null){var E=S.child;if(E!==null){S.child=null;do{var W=E.sibling;E.sibling=null,E=W}while(E!==null)}}_=i}}if(i.subtreeFlags&2064&&o!==null)o.return=i,_=o;else e:for(;_!==null;){if(i=_,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Ln(9,i,i.return)}var d=i.sibling;if(d!==null){d.return=i.return,_=d;break e}_=i.return}}var a=e.current;for(_=a;_!==null;){o=_;var f=o.child;if(o.subtreeFlags&2064&&f!==null)f.return=o,_=f;else e:for(o=a;_!==null;){if(u=_,u.flags&2048)try{switch(u.tag){case 0:case 11:case 15:cl(9,u)}}catch(P){V(u,u.return,P)}if(u===o){_=null;break e}var g=u.sibling;if(g!==null){g.return=u.return,_=g;break e}_=u.return}}if(F=l,mt(),We&&typeof We.onPostCommitFiberRoot=="function")try{We.onPostCommitFiberRoot(nl,e)}catch{}r=!0}return r}finally{x=n,we.transition=t}}return!1}function Uu(e,t,n){t=rn(n,t),t=Ia(e,t,1),e=ot(e,t,1),t=oe(),e!==null&&(Xn(e,1,t),pe(e,t))}function V(e,t,n){if(e.tag===3)Uu(e,e,n);else for(;t!==null;){if(t.tag===3){Uu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(ut===null||!ut.has(r))){e=rn(n,e),e=La(t,e,1),t=ot(t,e,1),e=oe(),t!==null&&(Xn(t,1,e),pe(t,e));break}}t=t.return}}function Ef(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=oe(),e.pingedLanes|=e.suspendedLanes&n,J===e&&(b&n)===n&&(Y===4||Y===3&&(b&130023424)===b&&500>G()-No?wt(e,0):wo|=n),pe(e,t)}function Ka(e,t){t===0&&(e.mode&1?(t=ur,ur<<=1,!(ur&130023424)&&(ur=4194304)):t=1);var n=oe();e=Qe(e,t),e!==null&&(Xn(e,t,n),pe(e,n))}function _f(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Ka(e,n)}function Pf(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(v(314))}r!==null&&r.delete(t),Ka(e,n)}var Xa;Xa=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||de.current)ce=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return ce=!1,af(e,t,n);ce=!!(e.flags&131072)}else ce=!1,A&&t.flags&1048576&&ea(t,Br,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Tr(e,t),e=t.pendingProps;var l=bt(t,le.current);Xt(t,n),l=vo(null,t,r,e,l,n);var i=yo();return t.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,fe(r)?(i=!0,jr(t)):i=!1,t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,fo(t),l.updater=al,t.stateNode=l,l._reactInternals=t,wi(t,r,e,n),t=ki(null,t,r,!0,i,n)):(t.tag=0,A&&i&&lo(t),ie(null,t,l,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Tr(e,t),e=t.pendingProps,l=r._init,r=l(r._payload),t.type=r,l=t.tag=Nf(r),e=Ie(r,e),l){case 0:t=Ci(null,t,r,e,n);break e;case 1:t=Lu(null,t,r,e,n);break e;case 11:t=Tu(null,t,r,e,n);break e;case 14:t=Iu(null,t,r,Ie(r.type,e),n);break e}throw Error(v(306,r,""))}return t;case 0:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Ie(r,l),Ci(e,t,r,l,n);case 1:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Ie(r,l),Lu(e,t,r,l,n);case 3:e:{if(xa(t),e===null)throw Error(v(387));r=t.pendingProps,i=t.memoizedState,l=i.element,oa(e,t),Qr(t,r,null,n);var o=t.memoizedState;if(r=o.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){l=rn(Error(v(423)),t),t=Du(e,t,r,n,l);break e}else if(r!==l){l=rn(Error(v(424)),t),t=Du(e,t,r,n,l);break e}else for(he=it(t.stateNode.containerInfo.firstChild),ge=t,A=!0,De=null,n=la(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(en(),r===l){t=Ze(e,t,n);break e}ie(e,t,r,n)}t=t.child}return t;case 5:return ua(t),e===null&&Ei(t),r=t.type,l=t.pendingProps,i=e!==null?e.memoizedProps:null,o=l.children,hi(r,l)?o=null:i!==null&&hi(r,i)&&(t.flags|=32),Ma(e,t),ie(e,t,o,n),t.child;case 6:return e===null&&Ei(t),null;case 13:return Oa(e,t,n);case 4:return po(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=tn(t,null,r,n):ie(e,t,r,n),t.child;case 11:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Ie(r,l),Tu(e,t,r,l,n);case 7:return ie(e,t,t.pendingProps,n),t.child;case 8:return ie(e,t,t.pendingProps.children,n),t.child;case 12:return ie(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,l=t.pendingProps,i=t.memoizedProps,o=l.value,O($r,r._currentValue),r._currentValue=o,i!==null)if(xe(i.value,o)){if(i.children===l.children&&!de.current){t=Ze(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var u=i.dependencies;if(u!==null){o=i.child;for(var s=u.firstContext;s!==null;){if(s.context===r){if(i.tag===1){s=Be(-1,n&-n),s.tag=2;var c=i.updateQueue;if(c!==null){c=c.shared;var h=c.pending;h===null?s.next=s:(s.next=h.next,h.next=s),c.pending=s}}i.lanes|=n,s=i.alternate,s!==null&&(s.lanes|=n),_i(i.return,n,t),u.lanes|=n;break}s=s.next}}else if(i.tag===10)o=i.type===t.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(v(341));o.lanes|=n,u=o.alternate,u!==null&&(u.lanes|=n),_i(o,n,t),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===t){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}ie(e,t,l.children,n),t=t.child}return t;case 9:return l=t.type,r=t.pendingProps.children,Xt(t,n),l=Ne(l),r=r(l),t.flags|=1,ie(e,t,r,n),t.child;case 14:return r=t.type,l=Ie(r,t.pendingProps),l=Ie(r.type,l),Iu(e,t,r,l,n);case 15:return Da(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Ie(r,l),Tr(e,t),t.tag=1,fe(r)?(e=!0,jr(t)):e=!1,Xt(t,n),Ta(t,r,l),wi(t,r,l,n),ki(null,t,r,!0,e,n);case 19:return Ha(e,t,n);case 22:return Fa(e,t,n)}throw Error(v(156,t.tag))};function Ja(e,t){return Ns(e,t)}function wf(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Pe(e,t,n,r){return new wf(e,t,n,r)}function Io(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Nf(e){if(typeof e=="function")return Io(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Qi)return 11;if(e===Zi)return 14}return 2}function at(e,t){var n=e.alternate;return n===null?(n=Pe(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Dr(e,t,n,r,l,i){var o=2;if(r=e,typeof e=="function")Io(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Ht:return Nt(n.children,l,i,t);case Gi:o=8,l|=8;break;case Zl:return e=Pe(12,n,t,l|2),e.elementType=Zl,e.lanes=i,e;case Yl:return e=Pe(13,n,t,l),e.elementType=Yl,e.lanes=i,e;case Kl:return e=Pe(19,n,t,l),e.elementType=Kl,e.lanes=i,e;case us:return fl(n,l,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case is:o=10;break e;case os:o=9;break e;case Qi:o=11;break e;case Zi:o=14;break e;case Xe:o=16,r=null;break e}throw Error(v(130,e==null?e:typeof e,""))}return t=Pe(o,n,t,l),t.elementType=e,t.type=r,t.lanes=i,t}function Nt(e,t,n,r){return e=Pe(7,e,r,t),e.lanes=n,e}function fl(e,t,n,r){return e=Pe(22,e,r,t),e.elementType=us,e.lanes=n,e.stateNode={isHidden:!1},e}function $l(e,t,n){return e=Pe(6,e,null,t),e.lanes=n,e}function Gl(e,t,n){return t=Pe(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Cf(e,t,n,r,l){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Cl(0),this.expirationTimes=Cl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Cl(0),this.identifierPrefix=r,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function Lo(e,t,n,r,l,i,o,u,s){return e=new Cf(e,t,n,u,s),t===1?(t=1,i===!0&&(t|=8)):t=0,i=Pe(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},fo(i),e}function kf(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ot,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function qa(e){if(!e)return dt;e=e._reactInternals;e:{if(Ft(e)!==e||e.tag!==1)throw Error(v(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(fe(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(v(171))}if(e.tag===1){var n=e.type;if(fe(n))return qs(e,n,t)}return t}function ba(e,t,n,r,l,i,o,u,s){return e=Lo(n,r,!0,e,l,i,o,u,s),e.context=qa(null),n=e.current,r=oe(),l=st(n),i=Be(r,l),i.callback=t??null,ot(n,i,l),e.current.lanes=l,Xn(e,l,r),pe(e,r),e}function pl(e,t,n,r){var l=t.current,i=oe(),o=st(l);return n=qa(n),t.context===null?t.context=n:t.pendingContext=n,t=Be(i,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=ot(l,t,o),e!==null&&(Me(e,l,o,i),Nr(e,l,o)),o}function el(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function zu(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Do(e,t){zu(e,t),(e=e.alternate)&&zu(e,t)}function Tf(){return null}var ec=typeof reportError=="function"?reportError:function(e){console.error(e)};function Fo(e){this._internalRoot=e}ml.prototype.render=Fo.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(v(409));pl(e,t,null,null)};ml.prototype.unmount=Fo.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Lt(function(){pl(null,e,null,null)}),t[Ge]=null}};function ml(e){this._internalRoot=e}ml.prototype.unstable_scheduleHydration=function(e){if(e){var t=Fs();e={blockedOn:null,target:e,priority:t};for(var n=0;n<qe.length&&t!==0&&t<qe[n].priority;n++);qe.splice(n,0,e),n===0&&xs(e)}};function Mo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function hl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function ju(){}function If(e,t,n,r,l){if(l){if(typeof r=="function"){var i=r;r=function(){var c=el(o);i.call(c)}}var o=ba(t,r,e,0,null,!1,!1,"",ju);return e._reactRootContainer=o,e[Ge]=o.current,zn(e.nodeType===8?e.parentNode:e),Lt(),o}for(;l=e.lastChild;)e.removeChild(l);if(typeof r=="function"){var u=r;r=function(){var c=el(s);u.call(c)}}var s=Lo(e,0,!1,null,null,!1,!1,"",ju);return e._reactRootContainer=s,e[Ge]=s.current,zn(e.nodeType===8?e.parentNode:e),Lt(function(){pl(t,s,n,r)}),s}function gl(e,t,n,r,l){var i=n._reactRootContainer;if(i){var o=i;if(typeof l=="function"){var u=l;l=function(){var s=el(o);u.call(s)}}pl(t,o,e,l)}else o=If(n,t,e,l,r);return el(o)}Ls=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=_n(t.pendingLanes);n!==0&&(Xi(t,n|1),pe(t,G()),!(F&6)&&(ln=G()+500,mt()))}break;case 13:Lt(function(){var r=Qe(e,1);if(r!==null){var l=oe();Me(r,e,1,l)}}),Do(e,1)}};Ji=function(e){if(e.tag===13){var t=Qe(e,134217728);if(t!==null){var n=oe();Me(t,e,134217728,n)}Do(e,134217728)}};Ds=function(e){if(e.tag===13){var t=st(e),n=Qe(e,t);if(n!==null){var r=oe();Me(n,e,t,r)}Do(e,t)}};Fs=function(){return x};Ms=function(e,t){var n=x;try{return x=e,t()}finally{x=n}};ii=function(e,t,n){switch(t){case"input":if(ql(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var l=ol(r);if(!l)throw Error(v(90));as(r),ql(r,l)}}}break;case"textarea":ds(e,n);break;case"select":t=n.value,t!=null&&Qt(e,!!n.multiple,t,!1)}};ys=Co;Ss=Lt;var Lf={usingClientEntryPoint:!1,Events:[qn,Ut,ol,gs,vs,Co]},yn={findFiberByHostInstance:St,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Df={bundleType:yn.bundleType,version:yn.version,rendererPackageName:yn.rendererPackageName,rendererConfig:yn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ye.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Ps(e),e===null?null:e.stateNode},findFiberByHostInstance:yn.findFiberByHostInstance||Tf,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var yr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!yr.isDisabled&&yr.supportsFiber)try{nl=yr.inject(Df),We=yr}catch{}}ye.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Lf;ye.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Mo(t))throw Error(v(200));return kf(e,t,null,n)};ye.createRoot=function(e,t){if(!Mo(e))throw Error(v(299));var n=!1,r="",l=ec;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),t=Lo(e,1,!1,null,null,n,!1,r,l),e[Ge]=t.current,zn(e.nodeType===8?e.parentNode:e),new Fo(t)};ye.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(v(188)):(e=Object.keys(e).join(","),Error(v(268,e)));return e=Ps(t),e=e===null?null:e.stateNode,e};ye.flushSync=function(e){return Lt(e)};ye.hydrate=function(e,t,n){if(!hl(t))throw Error(v(200));return gl(null,e,t,!0,n)};ye.hydrateRoot=function(e,t,n){if(!Mo(e))throw Error(v(405));var r=n!=null&&n.hydratedSources||null,l=!1,i="",o=ec;if(n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=ba(t,null,e,1,n??null,l,!1,i,o),e[Ge]=t.current,zn(e),r)for(e=0;e<r.length;e++)n=r[e],l=n._getVersion,l=l(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,l]:t.mutableSourceEagerHydrationData.push(n,l);return new ml(t)};ye.render=function(e,t,n){if(!hl(t))throw Error(v(200));return gl(null,e,t,!1,n)};ye.unmountComponentAtNode=function(e){if(!hl(e))throw Error(v(40));return e._reactRootContainer?(Lt(function(){gl(null,null,e,!1,function(){e._reactRootContainer=null,e[Ge]=null})}),!0):!1};ye.unstable_batchedUpdates=Co;ye.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!hl(n))throw Error(v(200));if(e==null||e._reactInternals===void 0)throw Error(v(38));return gl(e,t,n,!1,r)};ye.version="18.3.1-next-f1338f8080-20240426";function tc(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(tc)}catch(e){console.error(e)}}tc(),ts.exports=ye;var Ff=ts.exports,nc,Vu=Ff;nc=Vu.createRoot,Vu.hydrateRoot;/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Mf={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xf=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),rc=(e,t)=>{const n=Pt.forwardRef(({color:r="currentColor",size:l=24,strokeWidth:i=2,absoluteStrokeWidth:o,className:u="",children:s,...c},h)=>Pt.createElement("svg",{ref:h,...Mf,width:l,height:l,stroke:r,strokeWidth:o?Number(i)*24/Number(l):i,className:["lucide",`lucide-${xf(e)}`,u].join(" "),...c},[...t.map(([m,p])=>Pt.createElement(m,p)),...Array.isArray(s)?s:[s]]));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Of=rc("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hf=rc("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]),xt={comment:/\/\/.*|\/\*[\s\S]*?\*\/|#.*/g,string:/"(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*'|`(?:[^`\\]|\\.)*`/g,keyword:/\b(const|let|var|function|return|if|else|for|while|class|import|export|from|default|async|await|new|this|try|catch|throw|typeof|instanceof|extends|implements|interface|type|enum|public|private|protected|static|void|null|undefined|true|false|break|continue|switch|case|do|in|of|package|def|lambda|yield|with|as|pass|raise|finally|assert|del|global|nonlocal|exec|print|select|insert|update|delete|create|table|database|drop|alter|where|join|inner|outer|left|right|on|group|by|having|order|limit|offset|union|distinct|count|sum|avg|min|max)\b/g,number:/\b\d+\.?\d*([eE][+-]?\d+)?\b/g,operator:/[+\-*/%=<>!&|^~?:]+|&&|\|\||<<|>>|==|!=|<=|>=|=>|\.\.\./g,function:/\b[a-zA-Z_$][a-zA-Z0-9_$]*(?=\s*\()/g,punctuation:/[{}[\]();,.:]/g};function Rf(e,t){let n=Bu(e);const r=[];return[{type:"comment",regex:xt.comment},{type:"string",regex:xt.string},{type:"keyword",regex:xt.keyword},{type:"number",regex:xt.number},{type:"function",regex:xt.function},{type:"operator",regex:xt.operator}].forEach(({type:i,regex:o})=>{Array.from(n.matchAll(new RegExp(o.source,"g"))).forEach(s=>{if(s.index!==void 0){const c=s.index,h=c+s[0].length,m=s[0];r.some(y=>c>=y.start&&c<y.end||h>y.start&&h<=y.end)||r.push({start:c,end:h,html:`<span class="token-${i}">${Bu(m)}</span>`})}})}),r.sort((i,o)=>o.start-i.start),r.forEach(({start:i,end:o,html:u})=>{n=n.slice(0,i)+u+n.slice(o)}),n}function Bu(e){const t={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"};return e.replace(/[&<>"']/g,n=>t[n])}function Wf({title:e,description:t,code:n,language:r}){const[l,i]=Pt.useState(!1),o=async()=>{try{await navigator.clipboard.writeText(n),i(!0),setTimeout(()=>i(!1),2e3)}catch(s){console.error("Failed to copy code:",s)}},u=Rf(n);return M.jsxs("div",{className:"bg-gray-800 rounded-lg overflow-hidden shadow-xl border border-gray-700 transition-all hover:border-gray-600",children:[(e||t)&&M.jsxs("div",{className:"px-6 py-4 border-b border-gray-700",children:[e&&M.jsx("h2",{className:"text-xl font-semibold text-gray-100 mb-1",children:e}),t&&M.jsx("p",{className:"text-gray-400 text-sm",children:t})]}),M.jsxs("div",{className:"relative",children:[M.jsx("div",{className:"absolute top-3 right-3 z-10",children:M.jsx("button",{onClick:o,className:"flex items-center gap-2 px-3 py-2 bg-gray-700 hover:bg-gray-600 text-gray-200 rounded-md transition-colors text-sm font-medium","aria-label":"Copy code",children:l?M.jsxs(M.Fragment,{children:[M.jsx(Of,{size:16}),M.jsx("span",{children:"Copied!"})]}):M.jsxs(M.Fragment,{children:[M.jsx(Hf,{size:16}),M.jsx("span",{children:"Copy"})]})})}),M.jsx("div",{className:"overflow-x-auto",children:M.jsx("pre",{className:"p-6 text-sm md:text-base",children:M.jsx("code",{className:`language-${r}`,dangerouslySetInnerHTML:{__html:u}})})})]}),M.jsx("div",{className:"px-6 py-2 bg-gray-750 border-t border-gray-700",children:M.jsx("span",{className:"text-xs text-gray-500 font-mono uppercase tracking-wider",children:r})})]})}const Af=[{id:1,title:"Smart Street Light with LDR and Ultrasonic Sensor",language:"cpp",code:`#include <Wire.h>
#include <LiquidCrystal_I2C.h>

LiquidCrystal_I2C lcd(0x27, 16, 2); // Adjust to 0x3F if your LCD doesn't display text

// Pin connections
const int trigPin = 9;     // Ultrasonic Trigger
const int echoPin = 8;     // Ultrasonic Echo
const int ledPin = 3;      // Street Light (PWM pin)
const int ldrPin = A3;     // LDR Analog input

void setup() {
  Serial.begin(9600);

  lcd.init();
  lcd.backlight();

  pinMode(trigPin, OUTPUT);
  pinMode(echoPin, INPUT);
  pinMode(ledPin, OUTPUT);

  lcd.setCursor(0, 0);
  lcd.print("Smart Light Sys");
  delay(1000);
  lcd.clear();
}

void loop() {
  // --- LDR Reading ---
  int ldrValue = analogRead(ldrPin); // 0 (dark) to 1023 (bright)
  Serial.print("LDR Value: ");
  Serial.println(ldrValue);

  // --- Ultrasonic Distance Measurement ---
  long duration, distance;
  digitalWrite(trigPin, LOW);
  delayMicroseconds(2);
  digitalWrite(trigPin, HIGH);
  delayMicroseconds(5);
  digitalWrite(trigPin, LOW);

  duration = pulseIn(echoPin, HIGH);
  distance = duration * 0.035 / 2; // Convert to cm

  Serial.print("Distance: ");
  Serial.print(distance);
  Serial.println(" cm");

  // --- LCD Display ---
  lcd.clear();
  
  // --- Logic for Smart Lighting ---
  if (ldrValue > 535) {
    // Daytime → light OFF
    analogWrite(ledPin, 0);
    lcd.setCursor(0, 0);
    lcd.print("Status: OFF");
  } else {
    // Nighttime
    if (distance < 150) {
      // Object detected → Bright
      digitalWrite(ledPin, 1);
      lcd.setCursor(0, 0);
      lcd.print("Status: BRIGHT");
    } else {
      // No object → Dim light
      analogWrite(ledPin, 20);
      lcd.setCursor(0, 0);
      lcd.print("Status: DIM");
    }
  }

  // --- Show sensor values on 2nd line ---
  lcd.setCursor(0, 1);
  lcd.print("L:");
  lcd.print(ldrValue);
  lcd.print(" D:");
  lcd.print(distance);
  lcd.print("cm");

  delay(500);
}`},{id:2,title:"Gradual LDR-based Street Lighting",language:"cpp",code:`#include <Wire.h>
#include <LiquidCrystal_I2C.h>

LiquidCrystal_I2C lcd(0x27,16,2);

int ldrPin = A0; 
int ldrValue = 0;
int threshold1 = 800; 
int threshold2 = 600; 
int threshold3 = 400; 
int threshold4 = 200; 
int threshold5 = 100;

int ledPins[5] = {2,3,4,5,6};

void setup(){
  Serial.begin(9600);
  lcd.init();
  lcd.backlight();
  lcd.clear();
  lcd.setCursor(0,0);
  lcd.print("LDR Light Test");
  delay(1000);

  for(int i=0;i<5;i++){
    pinMode(ledPins[i],OUTPUT);
    digitalWrite(ledPins[i],LOW);
  }
}

void loop(){
  ldrValue = analogRead(ldrPin);
  Serial.print("LDR Value: "); Serial.println(ldrValue);

  lcd.clear();
  lcd.setCursor(0,0);
  lcd.print("LDR: "); lcd.print(ldrValue);
  lcd.setCursor(0,1);

  if(ldrValue<threshold5){
    for(int i=0;i<5;i++) digitalWrite(ledPins[i],HIGH);
    lcd.print("Very Dark");
  }
  else if(ldrValue<threshold4){
    for(int i=0;i<4;i++) digitalWrite(ledPins[i],HIGH);
    digitalWrite(ledPins[4],LOW);
    lcd.print("Dark");
  }
  else if(ldrValue<threshold3){
    for(int i=0;i<3;i++) digitalWrite(ledPins[i],HIGH);
    digitalWrite(ledPins[3],LOW);
    digitalWrite(ledPins[4],LOW);
    lcd.print("Sunset");
  }
  else if(ldrValue<threshold2){
    for(int i=0;i<2;i++) digitalWrite(ledPins[i],HIGH);
    for(int i=2;i<5;i++) digitalWrite(ledPins[i],LOW);
    lcd.print("Evening");
  }
  else if(ldrValue<threshold1){
    digitalWrite(ledPins[0],HIGH);
    for(int i=1;i<5;i++) digitalWrite(ledPins[i],LOW);
    lcd.print("Bright");
  } else {
    for(int i=0;i<5;i++) digitalWrite(ledPins[i],LOW);
    lcd.print("Daylight");
  }

  delay(500);
}`},{id:3,title:"Soil Moisture Sensor with I2C LCD",language:"cpp",code:`#include <Wire.h>
#include <LiquidCrystal_I2C.h>

const int SOIL_SENSOR_PIN = A0;
const int DRY_VALUE = 950;
const int WET_VALUE = 400;

LiquidCrystal_I2C lcd(0x27,16,2);

void setup(){
  Serial.begin(9600);
  lcd.init();
  lcd.backlight();
  lcd.setCursor(0,0);
  lcd.print("Soil Moisture");
  lcd.setCursor(0,1);
  lcd.print("Starting...");
  delay(2000);
  lcd.clear();
}

void loop(){
  int sensorValue = analogRead(SOIL_SENSOR_PIN);
  int moisturePercent = map(sensorValue, DRY_VALUE, WET_VALUE, 0, 100);
  moisturePercent = constrain(moisturePercent,0,100);

  Serial.print("Raw: "); Serial.print(sensorValue);
  Serial.print(" | Moisture: "); Serial.println(moisturePercent);

  lcd.clear();
  lcd.setCursor(0,0); lcd.print("Moisture Level:");
  lcd.setCursor(0,1); lcd.print(moisturePercent); lcd.print("%");

  delay(1000);
}`},{id:4,title:"Soil Pump Controller with DHT11",language:"cpp",code:`#include <DHT.h>

#define DHTPIN 15
#define DHTTYPE DHT11
#define SOIL_PIN 34
#define LED_PIN 13

DHT dht(DHTPIN,DHTTYPE);

void setup(){
  Serial.begin(115200);
  dht.begin();
  pinMode(SOIL_PIN,INPUT);
  pinMode(LED_PIN,OUTPUT);
  digitalWrite(LED_PIN,LOW);
}

void loop(){
  int soilValue = analogRead(SOIL_PIN);
  float temp = dht.readTemperature();
  float hum = dht.readHumidity();

  Serial.print("Soil Value: "); Serial.print(soilValue);
  Serial.print(" | Temp: "); Serial.print(temp);
  Serial.print("°C | Humidity: "); Serial.print(hum); Serial.println("%");

  if(soilValue<1800){
    digitalWrite(LED_PIN,HIGH);
    Serial.println("Pump ON - Soil is Dry!");
  } else {
    digitalWrite(LED_PIN,LOW);
    Serial.println("Pump OFF - Soil is Wet!");
  }
  Serial.println("------------------------------------");
  delay(2000);
}`},{id:5,title:"TMP36 Temperature Controlled Motor",language:"cpp",code:`#include <LiquidCrystal_I2C.h>

LiquidCrystal_I2C lcd(0x27,16,2);

const int tempPin = A0;
const int motorPin1 = 9;
const int motorPin2 = 8;
const int enablePin = 10;

void setup(){
  pinMode(motorPin1,OUTPUT);
  pinMode(motorPin2,OUTPUT);
  pinMode(enablePin,OUTPUT);
  Serial.begin(9600);
  lcd.init();
  lcd.backlight();
}

void loop(){
  int sensorVal = analogRead(tempPin);
  float voltage = sensorVal*(5.0/1023.0);
  float tempC = (voltage-0.5)*100.0;

  int speed = 0;
  String direction = "OFF";
  String mode = "";

  if(tempC<15){
    digitalWrite(motorPin1,LOW);
    digitalWrite(motorPin2,HIGH);
    speed=150;
    direction="REVERSE";
    mode="";
  }
  else if(tempC>=24 && tempC<30){
    digitalWrite(motorPin1,HIGH);
    digitalWrite(motorPin2,LOW);
    speed=85;
    direction="FORWARD";
    mode="MODE 1";
  }
  else if(tempC>=30 && tempC<36){
    digitalWrite(motorPin1,HIGH);
    digitalWrite(motorPin2,LOW);
    speed=170;
    direction="FORWARD";
    mode="MODE 2";
  }
  else if(tempC>=36){
    digitalWrite(motorPin1,HIGH);
    digitalWrite(motorPin2,LOW);
    speed=255;
    direction="FORWARD";
    mode="MODE 3";
  } else{
    speed=0;
    direction="OFF";
    mode="----------------";
  }

  analogWrite(enablePin,speed);

  Serial.print("Temp: "); Serial.print(tempC); Serial.print(" °C | Dir: ");
  Serial.print(direction); Serial.print(" | Mode: "); Serial.println(mode);

  lcd.setCursor(0,0); lcd.print("Temp: "); lcd.print(tempC,1); lcd.print(" C   ");
  lcd.setCursor(0,1); lcd.print(direction); lcd.print(" "); lcd.print(mode); lcd.print("        ");

  delay(500);
}`},{id:6,title:"Temperature Controlled Fan with DHT11 and LCD",language:"cpp",code:`#include <Wire.h>
#include <LiquidCrystal_I2C.h>
#include <DHT.h>

#define DHTTYPE DHT11
#define DHT_PIN 7
#define BUZZER_PIN 8
#define ENA_PIN 3
#define IN1_PIN 4
#define IN2_PIN 5

const int TEMP_LOW_THRESHOLD = 26;
const float TEMP_HIGH_THRESHOLD = 34.5;
const int HUMI_HIGH_THRESHOLD = 70;

const int FAN_SPEED_OFF=0;
const int FAN_SPEED_LOW=100;
const int FAN_SPEED_MEDIUM=170;
const int FAN_SPEED_ADJUSTED=200;
const int FAN_SPEED_HIGH=255;
const int SCROLL_DELAY_MS=500;
const float MAX_FAN_RPM=5000.0;

byte fanChar[8]={0b00100,0b01010,0b11111,0b01010,0b00100,0b00000,0b00000,0b00000};

LiquidCrystal_I2C lcd(0x3f,16,2);
DHT dht(DHT_PIN,DHTTYPE);
int currentFanSpeed=FAN_SPEED_OFF;

void setFanSpeed(int speed){
  digitalWrite(IN1_PIN,HIGH);
  digitalWrite(IN2_PIN,LOW);
  analogWrite(ENA_PIN,speed);
}

void stopFan(){
  digitalWrite(IN1_PIN,LOW);
  digitalWrite(IN2_PIN,LOW);
  analogWrite(ENA_PIN,0);
}

void scrollMessage(String message,int delayTime){
  message="    "+message+"        ";
  int len=message.length();
  for(int i=0;i<len-16;i++){
    lcd.setCursor(0,0);
    lcd.print(message.substring(i,i+16));
    delay(delayTime);
  }
}

void setup(){
  Serial.begin(9600);
  lcd.init();
  lcd.backlight();
  lcd.createChar(0,fanChar);
  lcd.setCursor(0,0); lcd.print("Temp Control Fan");
  lcd.setCursor(0,1); lcd.print("Initializing...");
  dht.begin();
  pinMode(BUZZER_PIN,OUTPUT);
  pinMode(ENA_PIN,OUTPUT);
  pinMode(IN1_PIN,OUTPUT);
  pinMode(IN2_PIN,OUTPUT);
  digitalWrite(BUZZER_PIN,LOW);
  stopFan();
  delay(500); lcd.clear();
}

void loop(){
  float humidity=dht.readHumidity();
  float temperature=dht.readTemperature();
  if(isnan(humidity)||isnan(temperature)){
    Serial.println("Failed to read from DHT sensor!");
    lcd.clear();
    lcd.setCursor(0,0);
    lcd.print("Sensor Error!");
    delay(1000);
    return;
  }
  String modeMessage="";
  if(temperature>=TEMP_HIGH_THRESHOLD){
    currentFanSpeed=FAN_SPEED_HIGH;
    modeMessage="DANGER! HIGH HEAT. FAN: HIGH";
    digitalWrite(BUZZER_PIN,HIGH);
  }
  else if(temperature>TEMP_LOW_THRESHOLD){
    digitalWrite(BUZZER_PIN,LOW);
    if(humidity>=HUMI_HIGH_THRESHOLD){
      currentFanSpeed=FAN_SPEED_ADJUSTED;
      modeMessage="Warm & Humid. FAN: Adjusted Medium";
    } else{
      currentFanSpeed=FAN_SPEED_MEDIUM;
      modeMessage="Warm. FAN: Medium Speed";
    }
  }
  else{
    digitalWrite(BUZZER_PIN,LOW);
    if(humidity>=HUMI_HIGH_THRESHOLD){
      currentFanSpeed=FAN_SPEED_LOW;
      modeMessage="Cool but Stuffy. FAN: Low Speed";
    } else{
      currentFanSpeed=FAN_SPEED_OFF;
      modeMessage="Cool & Comfortable. Fan OFF";
    }
  }
  if(currentFanSpeed==FAN_SPEED_OFF) stopFan();
  else setFanSpeed(currentFanSpeed);

  int estimatedRPM=0;
  if(currentFanSpeed>0) estimatedRPM=(int)(((float)currentFanSpeed/255.0)*MAX_FAN_RPM);

  lcd.setCursor(0,1);
  lcd.print("T:"); lcd.print(temperature,1); lcd.print((char)223); lcd.print("C H:"); lcd.print((int)humidity); lcd.print("% ");

  int fanBars=0;
  if(currentFanSpeed==FAN_SPEED_LOW) fanBars=1;
  else if(currentFanSpeed==FAN_SPEED_MEDIUM) fanBars=2;
  else if(currentFanSpeed==FAN_SPEED_ADJUSTED) fanBars=3;
  else if(currentFanSpeed==FAN_SPEED_HIGH) fanBars=4;

  for(int i=0;i<4;i++){
    lcd.setCursor(12+i,1);
    if(i<fanBars) lcd.write((byte)0);
    else lcd.print(" ");
  }

  if(estimatedRPM>0) modeMessage=modeMessage+" ("+String(estimatedRPM)+" RPM)";
  else modeMessage=modeMessage+" (0 RPM)";
  scrollMessage(modeMessage,SCROLL_DELAY_MS);

  Serial.print("Humidity: "); Serial.print(humidity);
  Serial.print("% | Temperature: "); Serial.print(temperature);
  Serial.print("°C | Fan Speed: "); Serial.print(currentFanSpeed);
  Serial.print(" ("); Serial.print(estimatedRPM); Serial.println(" RPM)");

  delay(500);
}`},{id:7,title:"Simple Soil Moisture Sensor with LCD",language:"cpp",code:`#include <Wire.h>
#include <LiquidCrystal_I2C.h>

const int SOIL_SENSOR_PIN = A0;
const int DRY_VALUE = 950;
const int WET_VALUE = 400;

LiquidCrystal_I2C lcd(0x27,16,2);

void setup() {
  Serial.begin(9600);
  lcd.init();
  lcd.backlight();
}

void loop() {
  int sensorValue = analogRead(SOIL_SENSOR_PIN);
  int moisturePercent = map(sensorValue, DRY_VALUE, WET_VALUE, 0, 100);
  moisturePercent = constrain(moisturePercent,0,100);

  Serial.print("Raw: "); Serial.print(sensorValue);
  Serial.print(" | Moisture: "); Serial.println(moisturePercent);

  lcd.clear();
  lcd.setCursor(0,0);
  lcd.print("Moisture Level:");
  lcd.setCursor(0,1);
  lcd.print(moisturePercent);
  lcd.print("%");

  delay(1000);
}`},{id:8,title:"Soil Moisture with Pump Control DHT11",language:"cpp",code:`#include <DHT.h>

#define DHTPIN 15
#define DHTTYPE DHT11
#define SOIL_PIN 34
#define LED_PIN 13

DHT dht(DHTPIN,DHTTYPE);

void setup() {
  Serial.begin(115200);
  dht.begin();
  pinMode(SOIL_PIN,INPUT);
  pinMode(LED_PIN,OUTPUT);
  digitalWrite(LED_PIN,LOW);
}

void loop() {
  int soilValue = analogRead(SOIL_PIN);
  float temp = dht.readTemperature();
  float hum = dht.readHumidity();

  Serial.print("Soil Value: "); Serial.print(soilValue);
  Serial.print(" | Temp: "); Serial.print(temp);
  Serial.print("°C | Humidity: "); Serial.print(hum); Serial.println("%");

  if(soilValue<1800){
    digitalWrite(LED_PIN,HIGH);
    Serial.println("Pump ON - Soil is Dry!");
  } else {
    digitalWrite(LED_PIN,LOW);
    Serial.println("Pump OFF - Soil is Wet!");
  }
  Serial.println("------------------------------------");
  delay(2000);
}`},{id:9,title:"Temperature Controlled Motor TMP36",language:"cpp",code:`#include <LiquidCrystal_I2C.h>

LiquidCrystal_I2C lcd(0x27,16,2);

const int tempPin = A0;
const int motorPin1 = 9;
const int motorPin2 = 8;
const int enablePin = 10;

void setup(){
  pinMode(motorPin1,OUTPUT);
  pinMode(motorPin2,OUTPUT);
  pinMode(enablePin,OUTPUT);
  Serial.begin(9600);
  lcd.init();
  lcd.backlight();
}

void loop(){
  int sensorVal = analogRead(tempPin);
  float voltage = sensorVal*(5.0/1023.0);
  float tempC = (voltage-0.5)*100.0;

  int speed = 0;
  String direction = "OFF";
  String mode = "";

  if(tempC<15){
    digitalWrite(motorPin1,LOW);
    digitalWrite(motorPin2,HIGH);
    speed=150;
    direction="REVERSE";
    mode="";
  }
  else if(tempC>=24 && tempC<30){
    digitalWrite(motorPin1,HIGH);
    digitalWrite(motorPin2,LOW);
    speed=85;
    direction="FORWARD";
    mode="MODE 1";
  }
  else if(tempC>=30 && tempC<36){
    digitalWrite(motorPin1,HIGH);
    digitalWrite(motorPin2,LOW);
    speed=170;
    direction="FORWARD";
    mode="MODE 2";
  }
  else if(tempC>=36){
    digitalWrite(motorPin1,HIGH);
    digitalWrite(motorPin2,LOW);
    speed=255;
    direction="FORWARD";
    mode="MODE 3";
  } else{
    speed=0;
    direction="OFF";
    mode="----------------";
  }

  analogWrite(enablePin,speed);

  Serial.print("Temp: "); Serial.print(tempC); Serial.print(" °C | Dir: ");
  Serial.print(direction); Serial.print(" | Mode: "); Serial.println(mode);

  lcd.setCursor(0,0); lcd.print("Temp: "); lcd.print(tempC,1); lcd.print(" C   ");
  lcd.setCursor(0,1); lcd.print(direction); lcd.print(" "); lcd.print(mode); lcd.print("        ");

  delay(500);
}`},{id:10,title:"DHT11 Fan Controller with LCD & Buzzer",language:"cpp",code:`#include <Wire.h>
#include <LiquidCrystal_I2C.h>
#include <DHT.h>

#define DHTTYPE DHT11
#define DHT_PIN 7
#define BUZZER_PIN 8
#define ENA_PIN 3
#define IN1_PIN 4
#define IN2_PIN 5

const int TEMP_LOW_THRESHOLD = 26;
const float TEMP_HIGH_THRESHOLD = 34.5;
const int HUMI_HIGH_THRESHOLD = 70;

const int FAN_SPEED_OFF = 0;
const int FAN_SPEED_LOW = 100;
const int FAN_SPEED_MEDIUM = 170;
const int FAN_SPEED_ADJUSTED = 200;
const int FAN_SPEED_HIGH = 255;

const int SCROLL_DELAY_MS = 500;
const float MAX_FAN_RPM = 5000.0;

byte fanChar[8] = {
  0b00100,
  0b01010,
  0b11111,
  0b01010,
  0b00100,
  0b00000,
  0b00000,
  0b00000
};

LiquidCrystal_I2C lcd(0x3f,16,2);
DHT dht(DHT_PIN,DHTTYPE);

int currentFanSpeed = FAN_SPEED_OFF;

void setFanSpeed(int speed);
void stopFan();
void scrollMessage(String message, int delayTime);

void setup(){
  Serial.begin(9600);
  lcd.init(); lcd.backlight();
  lcd.createChar(0,fanChar);
  lcd.setCursor(0,0); lcd.print("Temp Control Fan");
  lcd.setCursor(0,1); lcd.print("Initializing...");
  dht.begin();
  pinMode(BUZZER_PIN,OUTPUT);
  pinMode(ENA_PIN,OUTPUT);
  pinMode(IN1_PIN,OUTPUT);
  pinMode(IN2_PIN,OUTPUT);
  digitalWrite(BUZZER_PIN,LOW);
  stopFan();
  delay(500); lcd.clear();
}

void loop(){
  float humidity=dht.readHumidity();
  float temperature=dht.readTemperature();
  if(isnan(humidity) || isnan(temperature)){
    Serial.println("Failed to read from DHT sensor!");
    lcd.clear(); lcd.setCursor(0,0); lcd.print("Sensor Error!");
    delay(1000); return;
  }

  String modeMessage="";
  if(temperature>=TEMP_HIGH_THRESHOLD){
    currentFanSpeed=FAN_SPEED_HIGH;
    modeMessage="DANGER! HIGH HEAT. FAN: HIGH";
    digitalWrite(BUZZER_PIN,HIGH);
  } else if(temperature>TEMP_LOW_THRESHOLD){
    digitalWrite(BUZZER_PIN,LOW);
    if(humidity>=HUMI_HIGH_THRESHOLD){
      currentFanSpeed=FAN_SPEED_ADJUSTED;
      modeMessage="Warm & Humid. FAN: Adjusted Medium";
    } else{
      currentFanSpeed=FAN_SPEED_MEDIUM;
      modeMessage="Warm. FAN: Medium Speed";
    }
  } else{
    digitalWrite(BUZZER_PIN,LOW);
    if(humidity>=HUMI_HIGH_THRESHOLD){
      currentFanSpeed=FAN_SPEED_LOW;
      modeMessage="Cool but Stuffy. FAN: Low Speed";
    } else{
      currentFanSpeed=FAN_SPEED_OFF;
      modeMessage="Cool & Comfortable. Fan OFF";
    }
  }

  if(currentFanSpeed==FAN_SPEED_OFF) stopFan();
  else setFanSpeed(currentFanSpeed);

  int estimatedRPM=0;
  if(currentFanSpeed>0) estimatedRPM=(int)(((float)currentFanSpeed/255.0)*MAX_FAN_RPM);

  lcd.setCursor(0,1);
  lcd.print("T:"); lcd.print(temperature,1);
  lcd.print((char)223); lcd.print("C H:"); lcd.print((int)humidity); lcd.print("% ");

  int fanBars=0;
  if(currentFanSpeed==FAN_SPEED_LOW) fanBars=1;
  else if(currentFanSpeed==FAN_SPEED_MEDIUM) fanBars=2;
  else if(currentFanSpeed==FAN_SPEED_ADJUSTED) fanBars=3;
  else if(currentFanSpeed==FAN_SPEED_HIGH) fanBars=4;

  for(int i=0;i<4;i++){
    lcd.setCursor(12+i,1);
    if(i<fanBars) lcd.write((byte)0);
    else lcd.print(" ");
  }

  if(estimatedRPM>0) modeMessage=modeMessage+" ("+String(estimatedRPM)+" RPM)";
  else modeMessage=modeMessage+" (0 RPM)";

  scrollMessage(modeMessage,SCROLL_DELAY_MS);

  Serial.print("Humidity: "); Serial.print(humidity);
  Serial.print("% | Temperature: "); Serial.print(temperature);
  Serial.print("°C | Fan Speed: "); Serial.print(currentFanSpeed);
  Serial.print(" ("); Serial.print(estimatedRPM); Serial.println(" RPM)");

  delay(500);
}

void setFanSpeed(int speed){
  digitalWrite(IN1_PIN,HIGH);
  digitalWrite(IN2_PIN,LOW);
  analogWrite(ENA_PIN,speed);
}

void stopFan(){
  digitalWrite(IN1_PIN,LOW);
  digitalWrite(IN2_PIN,LOW);
  analogWrite(ENA_PIN,0);
}

void scrollMessage(String message,int delayTime){
  message="    "+message+"        ";
  int len=message.length();
  for(int i=0;i<len-16;i++){
    lcd.setCursor(0,0); lcd.print(message.substring(i,i+16));
    delay(delayTime);
  }
}`},{id:11,title:"Smart Street Light with Ultrasonic and LDR",language:"cpp",code:`#include <Wire.h>
#include <LiquidCrystal_I2C.h>

LiquidCrystal_I2C lcd(0x27,16,2);

const int trigPin = 9;
const int echoPin = 8;
const int ledPin = 3;
const int ldrPin = A3;

void setup(){
  Serial.begin(9600);
  lcd.init();
  lcd.backlight();
  pinMode(trigPin,OUTPUT);
  pinMode(echoPin,INPUT);
  pinMode(ledPin,OUTPUT);
  lcd.setCursor(0,0); lcd.print("Smart Light Sys");
  delay(1000); lcd.clear();
}

void loop(){
  int ldrValue=analogRead(ldrPin);
  Serial.print("LDR Value: "); Serial.println(ldrValue);

  long duration,distance;
  digitalWrite(trigPin,LOW); delayMicroseconds(2);
  digitalWrite(trigPin,HIGH); delayMicroseconds(5);
  digitalWrite(trigPin,LOW);
  duration=pulseIn(echoPin,HIGH);
  distance=duration*0.035/2;
  Serial.print("Distance: "); Serial.print(distance); Serial.println(" cm");

  lcd.clear();
  if(ldrValue>535){
    analogWrite(ledPin,0);
    lcd.setCursor(0,0); lcd.print("Status: OFF");
  } else {
    if(distance<150){
      digitalWrite(ledPin,1);
      lcd.setCursor(0,0); lcd.print("Status: BRIGHT");
    } else{
      analogWrite(ledPin,20);
      lcd.setCursor(0,0); lcd.print("Status: DIM");
    }
  }

  lcd.setCursor(0,1);
  lcd.print("L:"); lcd.print(ldrValue);
  lcd.print(" D:"); lcd.print(distance); lcd.print("cm");

  delay(500);
}`},{id:12,title:"LDR Controlled 5 LEDs",language:"cpp",code:`#include <Wire.h>
#include <LiquidCrystal_I2C.h>

LiquidCrystal_I2C lcd(0x27,16,2);

int ldrPin = A0;
int ldrValue = 0;
int threshold1=800, threshold2=600, threshold3=400, threshold4=200, threshold5=100;
int ledPins[5]={2,3,4,5,6};

void setup(){
  Serial.begin(9600);
  lcd.init();
  lcd.backlight();
  lcd.clear(); lcd.setCursor(0,0); lcd.print("LDR Light Test"); delay(1000);
  for(int i=0;i<5;i++){
    pinMode(ledPins[i],OUTPUT); digitalWrite(ledPins[i],LOW);
  }
}

void loop(){
  ldrValue=analogRead(ldrPin);
  Serial.print("LDR Value: "); Serial.println(ldrValue);
  lcd.clear(); lcd.setCursor(0,0); lcd.print("LDR: "); lcd.print(ldrValue); lcd.setCursor(0,1);

  if(ldrValue<threshold5){
    for(int i=0;i<5;i++) digitalWrite(ledPins[i],HIGH);
    lcd.print("Very Dark");
  } else if(ldrValue<threshold4){
    for(int i=0;i<4;i++) digitalWrite(ledPins[i],HIGH);
    digitalWrite(ledPins[4],LOW); lcd.print("Dark");
  } else if(ldrValue<threshold3){
    for(int i=0;i<3;i++) digitalWrite(ledPins[i],HIGH);
    for(int i=3;i<5;i++) digitalWrite(ledPins[i],LOW); lcd.print("Sunset");
  } else if(ldrValue<threshold2){
    for(int i=0;i<2;i++) digitalWrite(ledPins[i],HIGH);
    for(int i=2;i<5;i++) digitalWrite(ledPins[i],LOW); lcd.print("Evening");
  } else if(ldrValue<threshold1){
    digitalWrite(ledPins[0],HIGH);
    for(int i=1;i<5;i++) digitalWrite(ledPins[i],LOW); lcd.print("Bright");
  } else{
    for(int i=0;i<5;i++) digitalWrite(ledPins[i],LOW); lcd.print("Daylight");
  }
  delay(500);
}`},{id:13,title:"Soil Moisture LCD Sensor",language:"cpp",code:`#include <Wire.h>
#include <LiquidCrystal_I2C.h>

const int SOIL_SENSOR_PIN = A0;
const int DRY_VALUE = 950;
const int WET_VALUE = 400;

LiquidCrystal_I2C lcd(0x27,16,2);

void setup(){
  Serial.begin(9600);
  lcd.init();
  lcd.backlight();
}

void loop(){
  int sensorValue = analogRead(SOIL_SENSOR_PIN);
  int moisturePercent = map(sensorValue, DRY_VALUE, WET_VALUE, 0, 100);
  moisturePercent = constrain(moisturePercent,0,100);

  Serial.print("Raw: "); Serial.print(sensorValue);
  Serial.print(" | Moisture: "); Serial.println(moisturePercent);

  lcd.clear();
  lcd.setCursor(0,0); lcd.print("Moisture Level:");
  lcd.setCursor(0,1); lcd.print(moisturePercent); lcd.print("%");
  delay(1000);
}`},{id:14,title:"Soil Pump with DHT11",language:"cpp",code:`#include <DHT.h>

#define DHTPIN 15
#define DHTTYPE DHT11
#define SOIL_PIN 34
#define LED_PIN 13

DHT dht(DHTPIN,DHTTYPE);

void setup(){
  Serial.begin(115200); dht.begin();
  pinMode(SOIL_PIN,INPUT); pinMode(LED_PIN,OUTPUT); digitalWrite(LED_PIN,LOW);
}

void loop(){
  int soilValue=analogRead(SOIL_PIN);
  float temp=dht.readTemperature();
  float hum=dht.readHumidity();

  Serial.print("Soil Value: "); Serial.print(soilValue);
  Serial.print(" | Temp: "); Serial.print(temp);
  Serial.print("°C | Humidity: "); Serial.print(hum); Serial.println("%");

  if(soilValue<1800){ digitalWrite(LED_PIN,HIGH); Serial.println("Pump ON - Soil is Dry!"); }
  else{ digitalWrite(LED_PIN,LOW); Serial.println("Pump OFF - Soil is Wet!"); }

  Serial.println("------------------------------------"); delay(2000);
}`},{id:15,title:"Temperature Controlled Motor",language:"cpp",code:`#include <LiquidCrystal_I2C.h>

LiquidCrystal_I2C lcd(0x27,16,2);

const int tempPin=A0;
const int motorPin1=9;
const int motorPin2=8;
const int enablePin=10;

void setup(){
  pinMode(motorPin1,OUTPUT); pinMode(motorPin2,OUTPUT); pinMode(enablePin,OUTPUT);
  Serial.begin(9600); lcd.init(); lcd.backlight();
}

void loop(){
  int sensorVal=analogRead(tempPin);
  float voltage=sensorVal*(5.0/1023.0);
  float tempC=(voltage-0.5)*100.0;
  int speed=0; String direction="OFF"; String mode="";

  if(tempC<15){ digitalWrite(motorPin1,LOW); digitalWrite(motorPin2,HIGH); speed=150; direction="REVERSE"; mode=""; }
  else if(tempC>=24 && tempC<30){ digitalWrite(motorPin1,HIGH); digitalWrite(motorPin2,LOW); speed=85; direction="FORWARD"; mode="MODE 1"; }
  else if(tempC>=30 && tempC<36){ digitalWrite(motorPin1,HIGH); digitalWrite(motorPin2,LOW); speed=170; direction="FORWARD"; mode="MODE 2"; }
  else if(tempC>=36){ digitalWrite(motorPin1,HIGH); digitalWrite(motorPin2,LOW); speed=255; direction="FORWARD"; mode="MODE 3"; }
  else{ speed=0; direction="OFF"; mode="----------------"; }

  analogWrite(enablePin,speed);

  Serial.print("Temp: "); Serial.print(tempC); Serial.print(" °C | Dir: ");
  Serial.print(direction); Serial.print(" | Mode: "); Serial.println(mode);

  lcd.setCursor(0,0); lcd.print("Temp: "); lcd.print(tempC,1); lcd.print(" C   ");
  lcd.setCursor(0,1); lcd.print(direction); lcd.print(" "); lcd.print(mode); lcd.print("        ");

  delay(500);
}`},{id:16,title:"Full DHT11 Fan Controller System",language:"cpp",code:`#include <Wire.h>
#include <LiquidCrystal_I2C.h>
#include <DHT.h>

#define DHTTYPE DHT11
#define DHT_PIN 7
#define BUZZER_PIN 8
#define ENA_PIN 3
#define IN1_PIN 4
#define IN2_PIN 5

const int TEMP_LOW_THRESHOLD = 26;
const float TEMP_HIGH_THRESHOLD = 34.5;
const int HUMI_HIGH_THRESHOLD = 70;

const int FAN_SPEED_OFF = 0;
const int FAN_SPEED_LOW = 100;
const int FAN_SPEED_MEDIUM = 170;
const int FAN_SPEED_ADJUSTED = 200;
const int FAN_SPEED_HIGH = 255;

const int SCROLL_DELAY_MS = 500;
const float MAX_FAN_RPM = 5000.0;

byte fanChar[8] = {
  0b00100,
  0b01010,
  0b11111,
  0b01010,
  0b00100,
  0b00000,
  0b00000,
  0b00000
};

LiquidCrystal_I2C lcd(0x3f,16,2);
DHT dht(DHT_PIN,DHTTYPE);

int currentFanSpeed = FAN_SPEED_OFF;

void setFanSpeed(int speed);
void stopFan();
void scrollMessage(String message, int delayTime);

void setup(){
  Serial.begin(9600);
  lcd.init(); lcd.backlight();
  lcd.createChar(0,fanChar);
  lcd.setCursor(0,0); lcd.print("Temp Control Fan");
  lcd.setCursor(0,1); lcd.print("Initializing...");
  dht.begin();
  pinMode(BUZZER_PIN,OUTPUT);
  pinMode(ENA_PIN,OUTPUT);
  pinMode(IN1_PIN,OUTPUT);
  pinMode(IN2_PIN,OUTPUT);
  digitalWrite(BUZZER_PIN,LOW);
  stopFan();
  delay(500); lcd.clear();
}

void loop(){
  float humidity=dht.readHumidity();
  float temperature=dht.readTemperature();
  if(isnan(humidity) || isnan(temperature)){
    Serial.println("Failed to read from DHT sensor!");
    lcd.clear(); lcd.setCursor(0,0); lcd.print("Sensor Error!");
    delay(1000); return;
  }

  String modeMessage="";
  if(temperature>=TEMP_HIGH_THRESHOLD){
    currentFanSpeed=FAN_SPEED_HIGH;
    modeMessage="DANGER! HIGH HEAT. FAN: HIGH";
    digitalWrite(BUZZER_PIN,HIGH);
  } else if(temperature>TEMP_LOW_THRESHOLD){
    digitalWrite(BUZZER_PIN,LOW);
    if(humidity>=HUMI_HIGH_THRESHOLD){
      currentFanSpeed=FAN_SPEED_ADJUSTED;
      modeMessage="Warm & Humid. FAN: Adjusted Medium";
    } else{
      currentFanSpeed=FAN_SPEED_MEDIUM;
      modeMessage="Warm. FAN: Medium Speed";
    }
  } else{
    digitalWrite(BUZZER_PIN,LOW);
    if(humidity>=HUMI_HIGH_THRESHOLD){
      currentFanSpeed=FAN_SPEED_LOW;
      modeMessage="Cool but Stuffy. FAN: Low Speed";
    } else{
      currentFanSpeed=FAN_SPEED_OFF;
      modeMessage="Cool & Comfortable. Fan OFF";
    }
  }

  if(currentFanSpeed==FAN_SPEED_OFF) stopFan();
  else setFanSpeed(currentFanSpeed);

  int estimatedRPM=0;
  if(currentFanSpeed>0) estimatedRPM=(int)(((float)currentFanSpeed/255.0)*MAX_FAN_RPM);

  lcd.setCursor(0,1);
  lcd.print("T:"); lcd.print(temperature,1);
  lcd.print((char)223); lcd.print("C H:"); lcd.print((int)humidity); lcd.print("% ");

  int fanBars=0;
  if(currentFanSpeed==FAN_SPEED_LOW) fanBars=1;
  else if(currentFanSpeed==FAN_SPEED_MEDIUM) fanBars=2;
  else if(currentFanSpeed==FAN_SPEED_ADJUSTED) fanBars=3;
  else if(currentFanSpeed==FAN_SPEED_HIGH) fanBars=4;

  for(int i=0;i<4;i++){
    lcd.setCursor(12+i,1);
    if(i<fanBars) lcd.write((byte)0);
    else lcd.print(" ");
  }

  if(estimatedRPM>0) modeMessage=modeMessage+" ("+String(estimatedRPM)+" RPM)";
  else modeMessage=modeMessage+" (0 RPM)";

  scrollMessage(modeMessage,SCROLL_DELAY_MS);

  Serial.print("Humidity: "); Serial.print(humidity);
  Serial.print("% | Temperature: "); Serial.print(temperature);
  Serial.print("°C | Fan Speed: "); Serial.print(currentFanSpeed);
  Serial.print(" ("); Serial.print(estimatedRPM); Serial.println(" RPM)");

  delay(500);
}

void setFanSpeed(int speed){
  digitalWrite(IN1_PIN,HIGH);
  digitalWrite(IN2_PIN,LOW);
  analogWrite(ENA_PIN,speed);
}

void stopFan(){
  digitalWrite(IN1_PIN,LOW);
  digitalWrite(IN2_PIN,LOW);
  analogWrite(ENA_PIN,0);
}

void scrollMessage(String message,int delayTime){
  message="    "+message+"        ";
  int len=message.length();
  for(int i=0;i<len-16;i++){
    lcd.setCursor(0,0); lcd.print(message.substring(i,i+16));
    delay(delayTime);
  }
}`},{id:17,title:"Smart Fan & LCD System Integration",language:"cpp",code:`#include <Wire.h>
#include <LiquidCrystal_I2C.h>
#include <DHT.h>

#define DHTTYPE DHT11
#define DHT_PIN 7
#define BUZZER_PIN 8
#define ENA_PIN 3
#define IN1_PIN 4
#define IN2_PIN 5

const int TEMP_LOW_THRESHOLD = 26;
const float TEMP_HIGH_THRESHOLD = 34.5;
const int HUMI_HIGH_THRESHOLD = 70;

const int FAN_SPEED_OFF = 0;
const int FAN_SPEED_LOW = 100;
const int FAN_SPEED_MEDIUM = 170;
const int FAN_SPEED_ADJUSTED = 200;
const int FAN_SPEED_HIGH = 255;

const int SCROLL_DELAY_MS = 500;
const float MAX_FAN_RPM = 5000.0;

byte fanChar[8] = {
  0b00100,
  0b01010,
  0b11111,
  0b01010,
  0b00100,
  0b00000,
  0b00000,
  0b00000
};

LiquidCrystal_I2C lcd(0x3f,16,2);
DHT dht(DHT_PIN,DHTTYPE);

int currentFanSpeed = FAN_SPEED_OFF;

void setFanSpeed(int speed);
void stopFan();
void scrollMessage(String message, int delayTime);

void setup(){
  Serial.begin(9600);
  lcd.init(); lcd.backlight();
  lcd.createChar(0,fanChar);
  lcd.setCursor(0,0); lcd.print("Temp Control Fan");
  lcd.setCursor(0,1); lcd.print("Initializing...");
  dht.begin();
  pinMode(BUZZER_PIN,OUTPUT);
  pinMode(ENA_PIN,OUTPUT);
  pinMode(IN1_PIN,OUTPUT);
  pinMode(IN2_PIN,OUTPUT);
  digitalWrite(BUZZER_PIN,LOW);
  stopFan();
  delay(500); lcd.clear();
}

void loop(){
  float humidity=dht.readHumidity();
  float temperature=dht.readTemperature();
  if(isnan(humidity) || isnan(temperature)){
    Serial.println("Failed to read from DHT sensor!");
    lcd.clear(); lcd.setCursor(0,0); lcd.print("Sensor Error!");
    delay(1000); return;
  }

  String modeMessage="";
  if(temperature>=TEMP_HIGH_THRESHOLD){
    currentFanSpeed=FAN_SPEED_HIGH;
    modeMessage="DANGER! HIGH HEAT. FAN: HIGH";
    digitalWrite(BUZZER_PIN,HIGH);
  } else if(temperature>TEMP_LOW_THRESHOLD){
    digitalWrite(BUZZER_PIN,LOW);
    if(humidity>=HUMI_HIGH_THRESHOLD){
      currentFanSpeed=FAN_SPEED_ADJUSTED;
      modeMessage="Warm & Humid. FAN: Adjusted Medium";
    } else{
      currentFanSpeed=FAN_SPEED_MEDIUM;
      modeMessage="Warm. FAN: Medium Speed";
    }
  } else{
    digitalWrite(BUZZER_PIN,LOW);
    if(humidity>=HUMI_HIGH_THRESHOLD){
      currentFanSpeed=FAN_SPEED_LOW;
      modeMessage="Cool but Stuffy. FAN: Low Speed";
    } else{
      currentFanSpeed=FAN_SPEED_OFF;
      modeMessage="Cool & Comfortable. Fan OFF";
    }
  }

  if(currentFanSpeed==FAN_SPEED_OFF) stopFan();
  else setFanSpeed(currentFanSpeed);

  int estimatedRPM=0;
  if(currentFanSpeed>0) estimatedRPM=(int)(((float)currentFanSpeed/255.0)*MAX_FAN_RPM);

  lcd.setCursor(0,1);
  lcd.print("T:"); lcd.print(temperature,1);
  lcd.print((char)223); lcd.print("C H:"); lcd.print((int)humidity); lcd.print("% ");

  int fanBars=0;
  if(currentFanSpeed==FAN_SPEED_LOW) fanBars=1;
  else if(currentFanSpeed==FAN_SPEED_MEDIUM) fanBars=2;
  else if(currentFanSpeed==FAN_SPEED_ADJUSTED) fanBars=3;
  else if(currentFanSpeed==FAN_SPEED_HIGH) fanBars=4;

  for(int i=0;i<4;i++){
    lcd.setCursor(12+i,1);
    if(i<fanBars) lcd.write((byte)0);
    else lcd.print(" ");
  }

  if(estimatedRPM>0) modeMessage=modeMessage+" ("+String(estimatedRPM)+" RPM)";
  else modeMessage=modeMessage+" (0 RPM)";

  scrollMessage(modeMessage,SCROLL_DELAY_MS);

  Serial.print("Humidity: "); Serial.print(humidity);
  Serial.print("% | Temperature: "); Serial.print(temperature);
  Serial.print("°C | Fan Speed: "); Serial.print(currentFanSpeed);
  Serial.print(" ("); Serial.print(estimatedRPM); Serial.println(" RPM)");

  delay(500);
}

void setFanSpeed(int speed){
  digitalWrite(IN1_PIN,HIGH);
  digitalWrite(IN2_PIN,LOW);
  analogWrite(ENA_PIN,speed);
}

void stopFan(){
  digitalWrite(IN1_PIN,LOW);
  digitalWrite(IN2_PIN,LOW);
  analogWrite(ENA_PIN,0);
}

void scrollMessage(String message,int delayTime){
  message="    "+message+"        ";
  int len=message.length();
  for(int i=0;i<len-16;i++){
    lcd.setCursor(0,0); lcd.print(message.substring(i,i+16));
    delay(delayTime);
  }
}`}];function Uf(){return M.jsx("div",{className:"min-h-screen bg-gray-900 text-gray-100",children:M.jsxs("div",{className:"container mx-auto px-4 py-12 max-w-5xl",children:[M.jsxs("header",{className:"mb-12 text-center",children:[M.jsx("h1",{className:"text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent",children:"Code Snippets"}),M.jsx("p",{className:"text-gray-400 text-lg",children:"A collection of useful code examples with syntax highlighting"})]}),M.jsx("div",{className:"space-y-8",children:Af.map(e=>M.jsx(Wf,{title:e.title,description:e.description,code:e.code,language:e.language},e.id))}),M.jsx("footer",{className:"mt-16 text-center text-gray-500 text-sm",children:M.jsx("p",{children:"Built with React, TypeScript, and Tailwind CSS"})})]})})}nc(document.getElementById("root")).render(M.jsx(Pt.StrictMode,{children:M.jsx(Uf,{})}));
