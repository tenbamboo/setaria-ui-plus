import{g as _,i as a,r,o as m,e as i,c,a as p,F as b}from"../app.a753a604.js";const v=_({__name:"basic",setup(s){const e=a(1),t=l=>{console.log(l)};return(l,o)=>{const n=r("el-input-number");return m(),i(n,{modelValue:e.value,"onUpdate:modelValue":o[0]||(o[0]=u=>e.value=u),min:1,max:10,onChange:t},null,8,["modelValue"])}}});var S=Object.freeze(Object.defineProperty({__proto__:null,default:v},Symbol.toStringTag,{value:"Module"}));const g=_({__name:"controlled",setup(s){const e=a(1),t=l=>{console.log(l)};return(l,o)=>{const n=r("el-input-number");return m(),c(b,null,[p(n,{modelValue:e.value,"onUpdate:modelValue":o[0]||(o[0]=u=>e.value=u),min:1,max:10,"controls-position":"right",size:"large",onChange:t},null,8,["modelValue"]),p(n,{modelValue:e.value,"onUpdate:modelValue":o[1]||(o[1]=u=>e.value=u),class:"mx-4",min:1,max:10,"controls-position":"right",onChange:t},null,8,["modelValue"]),p(n,{modelValue:e.value,"onUpdate:modelValue":o[2]||(o[2]=u=>e.value=u),min:1,max:10,size:"small","controls-position":"right",onChange:t},null,8,["modelValue"])],64)}}});var z=Object.freeze(Object.defineProperty({__proto__:null,default:g},Symbol.toStringTag,{value:"Module"}));const V=_({__name:"disabled",setup(s){const e=a(1);return(t,l)=>{const o=r("el-input-number");return m(),i(o,{modelValue:e.value,"onUpdate:modelValue":l[0]||(l[0]=n=>e.value=n),disabled:!0},null,8,["modelValue"])}}});var U=Object.freeze(Object.defineProperty({__proto__:null,default:V},Symbol.toStringTag,{value:"Module"}));const f=_({__name:"precision",setup(s){const e=a(1);return(t,l)=>{const o=r("el-input-number");return m(),i(o,{modelValue:e.value,"onUpdate:modelValue":l[0]||(l[0]=n=>e.value=n),precision:2,step:.1,max:10},null,8,["modelValue","step"])}}});var C=Object.freeze(Object.defineProperty({__proto__:null,default:f},Symbol.toStringTag,{value:"Module"}));const y=_({__name:"size",setup(s){const e=a(1),t=a(2),l=a(3);return(o,n)=>{const u=r("el-input-number");return m(),c(b,null,[p(u,{modelValue:e.value,"onUpdate:modelValue":n[0]||(n[0]=d=>e.value=d),size:"large"},null,8,["modelValue"]),p(u,{modelValue:t.value,"onUpdate:modelValue":n[1]||(n[1]=d=>t.value=d),class:"mx-4"},null,8,["modelValue"]),p(u,{modelValue:l.value,"onUpdate:modelValue":n[2]||(n[2]=d=>l.value=d),size:"small"},null,8,["modelValue"])],64)}}});var M=Object.freeze(Object.defineProperty({__proto__:null,default:y},Symbol.toStringTag,{value:"Module"}));const x=_({__name:"step-strictly",setup(s){const e=a(2);return(t,l)=>{const o=r("el-input-number");return m(),i(o,{modelValue:e.value,"onUpdate:modelValue":l[0]||(l[0]=n=>e.value=n),step:2,"step-strictly":""},null,8,["modelValue"])}}});var P=Object.freeze(Object.defineProperty({__proto__:null,default:x},Symbol.toStringTag,{value:"Module"}));const j=_({__name:"steps",setup(s){const e=a(5);return(t,l)=>{const o=r("el-input-number");return m(),i(o,{modelValue:e.value,"onUpdate:modelValue":l[0]||(l[0]=n=>e.value=n),step:2},null,8,["modelValue"])}}});var T=Object.freeze(Object.defineProperty({__proto__:null,default:j},Symbol.toStringTag,{value:"Module"}));export{S as _,z as a,U as b,C as c,M as d,P as e,T as f};
