const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./Scenario.stories-oXTebtJN.js","./index-BwDkhjyp.js","./_commonjsHelpers-BosuxZz1.js","./entry-preview-CrpzurQr.js","./react-18-CzKcEif8.js","./entry-preview-docs-ClT6ZbrP.js","./_getPrototype-C0MsqmOH.js","./index-DrFu-skq.js","./preview-BJPLiuSt.js","./index-D-8MO0q_.js","./preview-BEBQg86I.js","./preview-BcxrGG1y.js","./preview-BAz7FMXc.js","./preview-B4ivyPbD.js"])))=>i.map(i=>d[i]);
import"../sb-preview/runtime.js";(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))u(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&u(n)}).observe(document,{childList:!0,subtree:!0});function l(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function u(e){if(e.ep)return;e.ep=!0;const t=l(e);fetch(e.href,t)}})();const R="modulepreload",w=function(s,c){return new URL(s,c).href},f={},o=function(c,l,u){let e=Promise.resolve();if(l&&l.length>0){const n=document.getElementsByTagName("link"),r=document.querySelector("meta[property=csp-nonce]"),E=(r==null?void 0:r.nonce)||(r==null?void 0:r.getAttribute("nonce"));e=Promise.allSettled(l.map(i=>{if(i=w(i,u),i in f)return;f[i]=!0;const a=i.endsWith(".css"),p=a?'[rel="stylesheet"]':"";if(!!u)for(let O=n.length-1;O>=0;O--){const m=n[O];if(m.href===i&&(!a||m.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${p}`))return;const _=document.createElement("link");if(_.rel=a?"stylesheet":R,a||(_.as="script"),_.crossOrigin="",_.href=i,E&&_.setAttribute("nonce",E),document.head.appendChild(_),a)return new Promise((O,m)=>{_.addEventListener("load",O),_.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${i}`)))})}))}function t(n){const r=new Event("vite:preloadError",{cancelable:!0});if(r.payload=n,window.dispatchEvent(r),!r.defaultPrevented)throw n}return e.then(n=>{for(const r of n||[])r.status==="rejected"&&t(r.reason);return c().catch(t)})},{createBrowserChannel:P}=__STORYBOOK_MODULE_CHANNELS__,{addons:T}=__STORYBOOK_MODULE_PREVIEW_API__,d=P({page:"preview"});T.setChannel(d);window.__STORYBOOK_ADDONS_CHANNEL__=d;window.CONFIG_TYPE==="DEVELOPMENT"&&(window.__STORYBOOK_SERVER_CHANNEL__=d);const S={"./src/components/Scenario/Scenario.stories.tsx":async()=>o(()=>import("./Scenario.stories-oXTebtJN.js"),__vite__mapDeps([0,1,2]),import.meta.url)};async function L(s){return S[s]()}const{composeConfigs:h,PreviewWeb:I,ClientApi:v}=__STORYBOOK_MODULE_PREVIEW_API__,A=async()=>{const s=await Promise.all([o(()=>import("./entry-preview-CrpzurQr.js"),__vite__mapDeps([3,1,2,4]),import.meta.url),o(()=>import("./entry-preview-docs-ClT6ZbrP.js"),__vite__mapDeps([5,6,2,7,1]),import.meta.url),o(()=>import("./preview-BJPLiuSt.js"),__vite__mapDeps([8,9]),import.meta.url),o(()=>import("./preview-DF4Wb99z.js"),[],import.meta.url),o(()=>import("./preview-BEBQg86I.js"),__vite__mapDeps([10,7]),import.meta.url),o(()=>import("./preview-BcxrGG1y.js"),__vite__mapDeps([11,7]),import.meta.url),o(()=>import("./preview-Db4Idchh.js"),[],import.meta.url),o(()=>import("./preview-BAz7FMXc.js"),__vite__mapDeps([12,7]),import.meta.url),o(()=>import("./preview-Cv3rAi2i.js"),[],import.meta.url),o(()=>import("./preview-B4ivyPbD.js"),__vite__mapDeps([13,2]),import.meta.url),o(()=>import("./preview-CIwosuWp.js"),[],import.meta.url)]);return h(s)};window.__STORYBOOK_PREVIEW__=window.__STORYBOOK_PREVIEW__||new I;window.__STORYBOOK_STORY_STORE__=window.__STORYBOOK_STORY_STORE__||window.__STORYBOOK_PREVIEW__.storyStore;window.__STORYBOOK_CLIENT_API__=window.__STORYBOOK_CLIENT_API__||new v({storyStore:window.__STORYBOOK_PREVIEW__.storyStore});window.__STORYBOOK_PREVIEW__.initialize({importFn:L,getProjectAnnotations:A});export{o as _};