import{p as w}from"./PageTitleItem-3be5e50e.js";import{d as f,g as I,c as u,e as t,F as h,r as C,o as _,n as A,t as b,p as S,b as V,_ as g,h as p,i as x,a as d,u as v,j as m}from"./index-a51f94c8.js";const y=o=>(S("data-v-fe1232cd"),o=o(),V(),o),B={class:"wrapper"},k=y(()=>t("div",{id:"title"},[t("h2",null,"產品類別"),t("hr")],-1)),$={class:""},P=["onClick"],D=y(()=>t("div",{class:"bottom-line"},null,-1)),F=f({__name:"SideBarItem",props:{currentCategory:{}},emits:["switch"],setup(o,{emit:l}){const a=o;I(()=>c(a.currentCategory));function c(i){l("switch",i);for(let e=0;e<s.length;e++)s[e].id===i.id?s[e].isActive=!0:s[e].isActive=!1}const s=[{id:"AI",name:"類比表",isActive:!0},{id:"C",name:"計數器",isActive:!1},{id:"SI",name:"速度表",isActive:!1},{id:"TC",name:"張力控制器",isActive:!1}];return(i,e)=>(_(),u("div",B,[k,t("ul",$,[(_(),u(h,null,C(s,n=>t("li",{key:n.id},[t("a",{onClick:r=>c(n),class:A([n.isActive?"active":"not-active"])},b(n.name),11,P),D])),64))])]))}});const N=g(F,[["__scopeId","data-v-fe1232cd"]]),R={class:"container"},T=f({__name:"ProductView",setup(o){let l="產品介紹";const a=p({id:"AI",name:""}),c=p();function s(i){m.push(`products/${i}`)}return(i,e)=>{const n=x("RouterView");return _(),u(h,null,[d(w,{title:v(l)},null,8,["title"]),t("div",R,[t("aside",null,[d(N,{"current-category":a.value,onSwitch:e[0]||(e[0]=r=>{a.value=r,v(m).push("/products")})},null,8,["current-category"])]),t("main",null,[d(n,{category:a.value,onDisplay:e[1]||(e[1]=r=>{c.value=r,s(r.id)}),"product-info":c.value},null,8,["category","product-info"])])])],64)}}});const E=g(T,[["__scopeId","data-v-b0eb860b"]]);export{E as default};
