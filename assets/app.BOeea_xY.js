function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{j as o,Gq as p,Gr as u,Gs as l,Gt as c,Gu as f,Gv as d,Gw as m,Gx as h,Gy as A,Gz as G,a2 as g,d as v,u as P,l as _,z as w,GA as y,GB as C,GC as R,a8 as E}from"./chunks/framework.rmdIeVjb.js";import{R as T}from"./chunks/theme.C8zaFohG.js";function i(e){if(e.extends){const t=i(e.extends);return{...t,...e,async enhanceApp(a){t.enhanceApp&&await t.enhanceApp(a),e.enhanceApp&&await e.enhanceApp(a)}}}return e}const s=i(T),b=v({name:"VitePressApp",setup(){const{site:e,lang:t,dir:a}=P();return _(()=>{w(()=>{document.documentElement.lang=t.value,document.documentElement.dir=a.value})}),e.value.router.prefetchLinks&&y(),C(),R(),s.setup&&s.setup(),()=>E(s.Layout)}});async function S(){globalThis.__VITEPRESS__=!0;const e=j(),t=D();t.provide(u,e);const a=l(e.route);return t.provide(c,a),t.component("Content",f),t.component("ClientOnly",d),Object.defineProperties(t.config.globalProperties,{$frontmatter:{get(){return a.frontmatter.value}},$params:{get(){return a.page.value.params}}}),s.enhanceApp&&await s.enhanceApp({app:t,router:e,siteData:m}),{app:t,router:e,data:a}}function D(){return h(b)}function j(){let e=o,t;return A(a=>{let n=G(a),r=null;return n&&(e&&(t=n),(e||t===n)&&(n=n.replace(/\.js$/,".lean.js")),r=g(()=>import(n),__vite__mapDeps([]))),o&&(e=!1),r},s.NotFound)}o&&S().then(({app:e,router:t,data:a})=>{t.go().then(()=>{p(t.route,a.site),e.mount("#app")})});export{S as createApp};
