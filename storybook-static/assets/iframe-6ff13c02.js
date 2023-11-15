import"../sb-preview/runtime.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const o of e.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&c(o)}).observe(document,{childList:!0,subtree:!0});function s(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function c(t){if(t.ep)return;t.ep=!0;const e=s(t);fetch(t.href,e)}})();const E="modulepreload",d=function(_,i){return new URL(_,i).href},O={},r=function(i,s,c){if(!s||s.length===0)return i();const t=document.getElementsByTagName("link");return Promise.all(s.map(e=>{if(e=d(e,c),e in O)return;O[e]=!0;const o=e.endsWith(".css"),m=o?'[rel="stylesheet"]':"";if(!!c)for(let l=t.length-1;l>=0;l--){const a=t[l];if(a.href===e&&(!o||a.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${e}"]${m}`))return;const n=document.createElement("link");if(n.rel=o?"stylesheet":E,o||(n.as="script",n.crossOrigin=""),n.href=e,document.head.appendChild(n),o)return new Promise((l,a)=>{n.addEventListener("load",l),n.addEventListener("error",()=>a(new Error(`Unable to preload CSS for ${e}`)))})})).then(()=>i()).catch(e=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=e,window.dispatchEvent(o),!o.defaultPrevented)throw e})},{createBrowserChannel:p}=__STORYBOOK_MODULE_CHANNELS__,{addons:f}=__STORYBOOK_MODULE_PREVIEW_API__,u=p({page:"preview"});f.setChannel(u);window.__STORYBOOK_ADDONS_CHANNEL__=u;window.CONFIG_TYPE==="DEVELOPMENT"&&(window.__STORYBOOK_SERVER_CHANNEL__=u);const R={"./src/components/TaskList.stories.jsx":async()=>r(()=>import("./TaskList.stories-75c3106b.js").then(_=>_.b),["./TaskList.stories-75c3106b.js","./Task.stories-468792f0.js","./index-76fb7be0.js","./_commonjsHelpers-de833af9.js","./index-8d47fad6.js","./index-d3ea75b5.js"],import.meta.url),"./src/components/Task.stories.jsx":async()=>r(()=>import("./Task.stories-468792f0.js").then(_=>_.b),["./Task.stories-468792f0.js","./index-76fb7be0.js","./_commonjsHelpers-de833af9.js","./index-8d47fad6.js"],import.meta.url),"./src/components/InboxScreen.stories.jsx":async()=>r(()=>import("./InboxScreen.stories-cd0a1684.js"),["./InboxScreen.stories-cd0a1684.js","./Task.stories-468792f0.js","./index-76fb7be0.js","./_commonjsHelpers-de833af9.js","./index-8d47fad6.js","./TaskList.stories-75c3106b.js","./index-d3ea75b5.js","./index-77955f96.js","./index-356e4a49.js"],import.meta.url)};async function T(_){return R[_]()}const{composeConfigs:w,PreviewWeb:P,ClientApi:L}=__STORYBOOK_MODULE_PREVIEW_API__,I=async()=>{const _=await Promise.all([r(()=>import("./config-e12572bb.js"),["./config-e12572bb.js","./index-76fb7be0.js","./_commonjsHelpers-de833af9.js","./_getPrototype-e1e43787.js","./index-d3ea75b5.js","./index-8d47fad6.js","./index-356e4a49.js"],import.meta.url),r(()=>import("./preview-87eac49b.js"),["./preview-87eac49b.js","./index-d37d4223.js"],import.meta.url),r(()=>import("./preview-ef1fbe7f.js"),[],import.meta.url),r(()=>import("./preview-bed967c6.js"),[],import.meta.url),r(()=>import("./preview-108c1c3c.js"),["./preview-108c1c3c.js","./index-356e4a49.js"],import.meta.url),r(()=>import("./preview-2059b184.js"),[],import.meta.url),r(()=>import("./preview-b8d6c68d.js"),["./preview-b8d6c68d.js","./index-356e4a49.js"],import.meta.url),r(()=>import("./preview-b3c37142.js"),[],import.meta.url),r(()=>import("./preview-6751e51d.js"),["./preview-6751e51d.js","./_commonjsHelpers-de833af9.js"],import.meta.url),r(()=>import("./preview-4a617788.js"),[],import.meta.url),r(()=>import("./preview-25c7684b.js"),["./preview-25c7684b.js","./_commonjsHelpers-de833af9.js","./_commonjs-dynamic-modules-302442b1.js","./index-77955f96.js","./index-da07a199.js","./preview-4f244d89.css"],import.meta.url)]);return w(_)};window.__STORYBOOK_PREVIEW__=window.__STORYBOOK_PREVIEW__||new P;window.__STORYBOOK_STORY_STORE__=window.__STORYBOOK_STORY_STORE__||window.__STORYBOOK_PREVIEW__.storyStore;window.__STORYBOOK_CLIENT_API__=window.__STORYBOOK_CLIENT_API__||new L({storyStore:window.__STORYBOOK_PREVIEW__.storyStore});window.__STORYBOOK_PREVIEW__.initialize({importFn:T,getProjectAnnotations:I});export{r as _};
//# sourceMappingURL=iframe-6ff13c02.js.map
