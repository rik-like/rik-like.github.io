import{_ as H}from"./YunFooter.vue_vue_type_script_setup_true_lang-BBAXWEdh.js";import{d as f,o as t,e as a,h as i,r as C,B as S,C as b,X as L,t as g,g as _,_ as M,ao as V,m as d,s as w,F as B,k as z,n as Y,f as v,c as $,l as k,ap as A,L as D,aq as E,a as F,q as R,ac as P}from"./app-5HKzKzrr.js";const q={class:"yun-notice m-auto"},G=["innerHTML"],I=f({__name:"YunNotice",props:{content:{}},setup(p){return(n,o)=>(t(),a("div",q,[i("span",{innerHTML:n.content},null,8,G),C(n.$slots,"default")]))}}),j={class:"say"},O={key:0,class:"say-content animate-fade-in animate-iteration-1"},W={key:1,class:"say-author"},X={key:2,class:"say-from"},J=f({__name:"YunSay",setup(p){const n=S(),o=b(""),s=b(""),u=b("");function h(){const c=n.value.say.hitokoto.enable?n.value.say.hitokoto.api:n.value.say.api;c&&fetch(c).then(e=>{if(e.ok)e.json().then(r=>{if(n.value.say.hitokoto.enable)o.value=r.hitokoto,s.value=r.from_who,u.value=r.from;else{const l=r[Math.floor(Math.random()*r.length)];l.content?(o.value=l.content,s.value=l.author,u.value=l.from):o.value=l}});else throw new Error(`${n.value.say.api}, HTTP error, status = ${e.status}`)}).catch(e=>{console.error(e.message)})}return L(()=>{h()}),(c,e)=>(t(),a("div",j,[o.value?(t(),a("span",O,g(o.value),1)):_("v-if",!0),s.value?(t(),a("span",W,g(s.value),1)):_("v-if",!0),u.value?(t(),a("span",X,g(u.value),1)):_("v-if",!0)]))}}),K=i("div",{"i-ri-arrow-down-s-line":"","inline-flex":""},null,-1),Q=[K],U=f({__name:"YunGoDown",setup(p){function n(){const o=document.getElementById("yun-banner");o&&window.scrollTo({top:o.clientHeight,behavior:"smooth"})}return(o,s)=>(t(),a("button",{class:"go-down","aria-label":"go-down",onClick:n},Q))}}),Z={},ee={class:"yun-cloud"},ne=V('<svg class="waves" viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto"><defs><path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" fill="var(--yun-c-cloud)"></path></defs><g class="parallax"><use xlink:href="#gentle-wave" x="48" y="0"></use><use xlink:href="#gentle-wave" x="48" y="3"></use><use xlink:href="#gentle-wave" x="48" y="5"></use><use xlink:href="#gentle-wave" x="48" y="7"></use></g></svg>',1),te=[ne];function oe(p,n){return t(),a("div",ee,te)}const se=M(Z,[["render",oe]]),ae={class:"banner-line-container"},ce={class:"banner-char-container"},re={class:"char"},le={class:"banner-line-container bottom"},ie=f({__name:"YunBanner",setup(p){const n=S(),o=d(()=>{const c=[];for(let e=0;e<n.value.banner.title.length;e++){const r=A(1.5,3.5);c.push(r)}return c}),s=d(()=>o.value.reduce((c,e)=>c+e,0)/2),u=d(()=>({"--banner-line-height":`calc(var(--banner-height, 100vh) / 2 - ${s.value}rem)`})),h=b(!0);return(c,e)=>{var y;const r=se,l=U;return t(),a("div",{id:"yun-banner",style:Y(u.value)},[i("div",ae,[i("div",{class:w(["banner-line vertical-line-top",{active:h.value}])},null,2)]),i("div",ce,[(t(!0),a(B,null,z(v(n).banner.title,(x,m)=>(t(),a("div",{key:m,class:"char-box"},[i("span",{class:w([m%2!==0?"char-right":"char-left"]),style:Y({"--banner-char-size":`${o.value[m]}rem`})},[i("span",re,g(x),1)],6)]))),128))]),i("div",le,[i("div",{class:w(["banner-line vertical-line-bottom",{active:h.value}])},null,2)]),(y=v(n).banner.cloud)!=null&&y.enable?(t(),$(r,{key:0})):_("v-if",!0),k(l)],4)}}}),he=f({__name:"home",setup(p){const n=D(),o=E("home"),s=S(),u=F(),h=d(()=>u.path.startsWith("/page")),c=d(()=>{const e=s.value.notice;return e.enable&&(h.value?!e.hideInPages:!0)});return(e,r)=>{const l=P,y=ie,x=J,m=I,N=R("RouterView"),T=H;return t(),a("main",{class:w(["yun-main flex-center",v(o)&&!v(n).isSidebarOpen?"pl-0":"md:pl-$va-sidebar-width"]),flex:"~ col",w:"full"},[k(l,{"show-hamburger":!0}),h.value?_("v-if",!0):(t(),a(B,{key:0},[v(s).banner.enable?(t(),$(y,{key:0})):_("v-if",!0),v(s).say.enable?(t(),$(x,{key:1,w:"full"})):_("v-if",!0)],64)),c.value?(t(),$(m,{key:1,content:v(s).notice.content,mt:"4"},null,8,["content"])):_("v-if",!0),C(e.$slots,"board"),C(e.$slots,"default",{},()=>[k(N)]),k(T)],2)}}});export{he as default};