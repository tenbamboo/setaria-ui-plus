import{o as e,c as o,b as n,a as t,d as s,f as p,h as c}from"./app.a753a604.js";const l=n("h1",{id:"server-side-rendering-ssr",tabindex:"-1"},[s("Server-Side Rendering (SSR) "),n("a",{class:"header-anchor vp-link",href:"#server-side-rendering-ssr","aria-hidden":"true"},"#")],-1),u=n("p",null,"When using Element Plus for SSR development, you need to carry out special handling during SSR to avoid hydrate errors.",-1),i={class:"tip custom-block"},r=n("p",{class:"custom-block-title"},"TIP",-1),k=s("For Nuxt users, we provide a "),d={href:"https://github.com/element-plus/element-plus-nuxt",class:"vp-link",target:"_blank",rel:"noopener noreferrer"},g=s("Nuxt module"),h=s(" that contains these special processes. You only need to install it."),m=p(`<h2 id="provide-an-id" tabindex="-1">Provide an ID <a class="header-anchor vp-link" href="#provide-an-id" aria-hidden="true">#</a></h2><p>The provided value is used to generate the unique ID in Element Plus. Because the different IDs are prone to hydrate errors in SSR, in order to ensure that the server side and client side generate the same ID, we need to inject the <code>ID_injection_key</code> into Vue.</p><div class="language-ts"><pre><code><span class="token comment">// src/main.js (irrelevant code omitted)</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> createApp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> <span class="token constant">ID_INJECTION_KEY</span> <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;element-plus&#39;</span>
<span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">&#39;./App.vue&#39;</span>

<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span>
app<span class="token punctuation">.</span><span class="token function">provide</span><span class="token punctuation">(</span><span class="token constant">ID_INJECTION_KEY</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  prefix<span class="token operator">:</span> <span class="token number">1024</span><span class="token punctuation">,</span>
  current<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><h2 id="teleports" tabindex="-1">Teleports <a class="header-anchor vp-link" href="#teleports" aria-hidden="true">#</a></h2>`,4),_={href:"https://vuejs.org/guide/scaling-up/ssr.html#teleports",class:"vp-link",target:"_blank",rel:"noopener noreferrer"},v=s("Teleport"),y=s(" is used internally by multiple components in Element Plus (eg. ElDialog, ElDrawer, ElTooltip, ElDropdown, ElSelect, ElDatePicker ...), so special handling is required during SSR."),f=p(`<h3 id="render-the-teleport-on-the-mount" tabindex="-1">Render the Teleport on the mount <a class="header-anchor vp-link" href="#render-the-teleport-on-the-mount" aria-hidden="true">#</a></h3><p>An easier solution is to conditionally render the Teleport on the mount.</p><p>For example, use the <code>ClientOnly</code> component in Nuxt.</p><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>client-only</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-tooltip</span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>the tooltip content<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-button</span><span class="token punctuation">&gt;</span></span>tooltip<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-button</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-tooltip</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>client-only</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p>or</p><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>

<span class="token keyword">const</span> isClient <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>

<span class="token function">onMounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  isClient<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-tooltip</span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>isClient<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>the tooltip content<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-button</span><span class="token punctuation">&gt;</span></span>tooltip<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-button</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-tooltip</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h3 id="inject-the-teleport-markup" tabindex="-1">Inject the teleport markup <a class="header-anchor vp-link" href="#inject-the-teleport-markup" aria-hidden="true">#</a></h3><p>Another way is to inject the teleport markup into the correct location in your final page HTML.</p>`,8),b={class:"warning custom-block"},w=n("p",{class:"custom-block-title"},"WARNING",-1),T=s("There may be some "),S={href:"https://github.com/vuejs/core/issues?q=is%3Aissue+is%3Aopen+ssr+teleport+",class:"vp-link",target:"_blank",rel:"noopener noreferrer"},q=s("SSR problems with teleport"),x=s(", so you should pay attention to the following precautions."),I=n("ol",null,[n("li",null,[s("The "),n("code",null,"teleported"),s(" attribute in all components based on ElTooltip should be consistent, it is recommended to use the default value.")]),n("li",null,[s("The "),n("code",null,"append-to-body"),s(" attribute value of ElDialog and ElDrawer should be consistent, it is recommended to enable the "),n("code",null,"append-to-body"),s(".")]),n("li",null,[s("When the ElSubMenu component has a multi-layer popup, It is recommended to enable the "),n("code",null,"popper-append-to-body")])],-1),E=p(`<p>You need to inject the teleport markup close to the <code>&lt;body&gt;</code> tag.</p><div class="language-html"><pre><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>en<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>Element Plus<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!--preload-links--&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!--app-teleports--&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>app<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token comment">&lt;!--app-html--&gt;</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>module<span class="token punctuation">&quot;</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/src/entry-client.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>If you modify the <a href="./namespace.html" class="vp-link">Namespace</a> or <code>append-to</code> attribute, you need to adjust the <code>#el-popper-container-</code> value.</p></div><div class="language-js"><pre><code><span class="token comment">// src/entry-server.js (irrelevant code omitted)</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> renderToString <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue/server-renderer&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> createApp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./main&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">render</span><span class="token punctuation">(</span><span class="token parameter">url<span class="token punctuation">,</span> manifest</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
  <span class="token keyword">const</span> ctx <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token keyword">const</span> html <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">renderToString</span><span class="token punctuation">(</span>app<span class="token punctuation">,</span> ctx<span class="token punctuation">)</span>
  <span class="token keyword">const</span> preloadLinks <span class="token operator">=</span> <span class="token function">renderPreloadLinks</span><span class="token punctuation">(</span>ctx<span class="token punctuation">.</span>modules<span class="token punctuation">,</span> manifest<span class="token punctuation">)</span>
  <span class="token keyword">const</span> teleports <span class="token operator">=</span> <span class="token function">renderTeleports</span><span class="token punctuation">(</span>ctx<span class="token punctuation">.</span>teleports<span class="token punctuation">)</span>

  <span class="token keyword">return</span> <span class="token punctuation">[</span>html<span class="token punctuation">,</span> preloadLinks<span class="token punctuation">,</span> teleports<span class="token punctuation">]</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">renderTeleports</span><span class="token punctuation">(</span><span class="token parameter">teleports</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>teleports<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token string">&#39;&#39;</span>
  <span class="token keyword">return</span> Object<span class="token punctuation">.</span><span class="token function">entries</span><span class="token punctuation">(</span>teleports<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">all<span class="token punctuation">,</span> <span class="token punctuation">[</span>key<span class="token punctuation">,</span> value<span class="token punctuation">]</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>key<span class="token punctuation">.</span><span class="token function">startsWith</span><span class="token punctuation">(</span><span class="token string">&#39;#el-popper-container-&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>all<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&lt;div id=&quot;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>key<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&quot;&gt;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>value<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&lt;/div&gt;</span><span class="token template-punctuation string">\`</span></span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> all
  <span class="token punctuation">}</span><span class="token punctuation">,</span> teleports<span class="token punctuation">.</span>body <span class="token operator">||</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><div class="language-js"><pre><code><span class="token comment">// server.js or prerender.js (irrelevant code omitted)</span>
<span class="token keyword">const</span> <span class="token punctuation">[</span>appHtml<span class="token punctuation">,</span> preloadLinks<span class="token punctuation">,</span> teleports<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">render</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span> manifest<span class="token punctuation">)</span>

<span class="token keyword">const</span> html <span class="token operator">=</span> template
  <span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token string">&#39;&lt;!--preload-links--&gt;&#39;</span><span class="token punctuation">,</span> preloadLinks<span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token string">&#39;&lt;!--app-html--&gt;&#39;</span><span class="token punctuation">,</span> appHtml<span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">(\\n|\\r\\n)\\s*&lt;!--app-teleports--&gt;</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> teleports<span class="token punctuation">)</span>
</code></pre></div>`,5),R='{"title":"SSR","description":"","frontmatter":{"title":"SSR","lang":"en-US"},"headers":[{"level":2,"title":"Provide an ID","slug":"provide-an-id"},{"level":2,"title":"Teleports","slug":"teleports"},{"level":3,"title":"Render the Teleport on the mount","slug":"render-the-teleport-on-the-mount"},{"level":3,"title":"Inject the teleport markup","slug":"inject-the-teleport-markup"}],"relativePath":"en-US/guide/ssr.md","lastUpdated":1676386386000}',j={},C=Object.assign(j,{__name:"ssr",setup(A){return(D,P)=>{const a=c;return e(),o("div",null,[l,u,n("div",i,[r,n("p",null,[k,n("a",d,[g,t(a,{class:"link-icon"})]),h])]),m,n("p",null,[n("a",_,[v,t(a,{class:"link-icon"})]),y]),f,n("div",b,[w,n("p",null,[T,n("a",S,[q,t(a,{class:"link-icon"})]),x]),I]),E])}}});export{R as __pageData,C as default};
