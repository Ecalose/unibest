import{d as t,j as a,a as e,c as s,w as l,h as i,b as r,k as n,l as u,u as p,F as d,f as o,e as f,t as c,m as h,p as m,_ as g}from"./index-4b101180.js";import{p as b}from"./pages.06d55f38.js";const v=t({name:"TestIndex"}),_=g(t({...v,setup(t){const g=b.pages.filter((t=>t.path.startsWith("pages/demo/base"))).map((t=>{var a;return{title:(null==(a=t.style)?void 0:a.navigationBarTitleText)||"默认页面标题",path:t.path}})),v=b.pages.filter((t=>t.path.startsWith("pages/demo/page"))).map((t=>{var a;return{title:(null==(a=t.style)?void 0:a.navigationBarTitleText)||"默认页面标题",path:t.path}})),_=a([{id:1,title:"基础功能",list:g},{id:2,title:"页面功能",list:v}]);return(t,a)=>{const g=o,b=m,v=i("layout-default-uni");return e(),s(v,null,{default:l((()=>[r(g,{class:"bg-slate-100 p-4"},{default:l((()=>[(e(!0),n(d,null,u(p(_),(t=>(e(),s(g,{class:"bg-slate-100 w-full",key:t.id},{default:l((()=>[r(g,{class:"font-800"},{default:l((()=>[f(c(t.title),1)])),_:2},1024),(e(!0),n(d,null,u(t.list,(t=>(e(),s(g,{key:t.path,class:"mt-3"},{default:l((()=>[r(g,{class:"flex bg-white items-center justify-between p-3 mb-2",onClick:a=>{return e=t.path,void h({url:`/${e}`});var e}},{default:l((()=>[r(b,{class:"flex-1 text-4 text-dark"},{default:l((()=>[f(c(t.title),1)])),_:2},1024),r(b,{class:"i-carbon-chevron-right"})])),_:2},1032,["onClick"])])),_:2},1024)))),128))])),_:2},1024)))),128))])),_:1})])),_:1})}}}),[["__scopeId","data-v-ffbb6d10"]]);export{_ as default};