import{d as v,h as I,g as j,i as k,c as r,e as s,f as l,t as d,F as p,r as f,a as y,j as w,k as M,l as L,m as P,q as T,s as x,v as B,w as C,o as _,p as H,b as S,_ as N}from"./index-1454e061.js";const i=a=>(H("data-v-6fbbf82a"),a=a(),S(),a),V={class:"wrapper"},$={class:"info"},D={class:"image"},F=["src"],O={class:"summary"},U={class:"name"},q=i(()=>s("br",null,null,-1)),A=i(()=>s("div",{class:"nav-tab"},[s("a",{class:"tab1",href:"#feature"},"產品特色"),s("a",{class:"tab2",href:"#file"},"相關檔案")],-1)),E=["innerHTML"],K=i(()=>s("h3",{id:"feature"},"產品特色",-1)),R={class:"bullet"},z=["innerHTML"],G=i(()=>s("hr",null,null,-1)),J=i(()=>s("h3",{id:"file"},"相關檔案",-1)),Q={class:"bullet"},W=["href"],X=v({__name:"ProductInfoItem",props:{productInfo:{}},setup(a){const u=a;let c;const e=I({id:"",name:"",img:"",type:"",description:"",bulletInfo:[],fileList:[]});j(async()=>{c=await(await fetch("/moonstar-meter//data/product_info.json")).json(),console.log(c),g(u.productInfo.id),window.scrollTo(0,0),console.log(u.productInfo)});function g(n){for(let t=0;t<c.length;t++)if(c[t].id===n){e.value=c[t];break}}function m(){w.push("/products")}function h(n){if(n)return new URL(Object.assign({"/src/assets/images/products/A66.jpg":M,"/src/assets/images/products/KC.jpg":L,"/src/assets/images/products/M40.jpg":P,"/src/assets/images/products/M40_O.jpg":T,"/src/assets/images/products/M60.jpg":x,"/src/assets/images/products/M66.jpg":B,"/src/assets/images/products/MT.jpg":C})[`/src/assets/images/products/${n}.jpg`],self.location).href}return(n,t)=>{const b=k("font-awesome-icon");return _(),r("div",V,[s("div",$,[s("div",D,[s("img",{src:h(e.value.img)},null,8,F)]),s("div",O,[s("h2",U,[l(d(e.value.id),1),q,l(d(e.value.name),1)]),A,s("p",{innerHTML:e.value.description},null,8,E)])]),s("section",null,[K,s("ul",R,[(_(!0),r(p,null,f(e.value.bulletInfo,o=>(_(),r("li",{key:o,innerHTML:o},null,8,z))),128))]),G,J,s("ul",Q,[(_(!0),r(p,null,f(e.value.fileList,o=>(_(),r("li",{key:o.link},[s("a",{class:"",href:o.link,target:"_blank"},d(o.name),9,W)]))),128))])]),s("button",{class:"btn back",type:"button",onClick:t[0]||(t[0]=o=>m())},[y(b,{icon:"angles-left"}),l(" 回上頁 ")])])}}});const ss=N(X,[["__scopeId","data-v-6fbbf82a"]]);export{ss as default};
