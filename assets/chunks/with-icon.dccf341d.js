import{g as c,i as p,r as d,o as v,c as w,a as t,F as P,b as i,e as g,w as r,u as _,A as b,d as j,aj as U}from"../app.a753a604.js";const z=i("div",{style:{margin:"20px 0"}},null,-1),O=c({__name:"auto-sizing-textarea",setup(f){const o=p(""),s=p("");return(a,n)=>{const e=d("el-input");return v(),w(P,null,[t(e,{modelValue:o.value,"onUpdate:modelValue":n[0]||(n[0]=l=>o.value=l),autosize:"",type:"textarea",placeholder:"Please input"},null,8,["modelValue"]),z,t(e,{modelValue:s.value,"onUpdate:modelValue":n[1]||(n[1]=l=>s.value=l),autosize:{minRows:2,maxRows:4},type:"textarea",placeholder:"Please input"},null,8,["modelValue"])],64)}}});var Y=Object.freeze(Object.defineProperty({__proto__:null,default:O},Symbol.toStringTag,{value:"Module"}));const S=c({__name:"basic",setup(f){const o=p("");return(s,a)=>{const n=d("el-input");return v(),g(n,{modelValue:o.value,"onUpdate:modelValue":a[0]||(a[0]=e=>o.value=e),placeholder:"Please input"},null,8,["modelValue"])}}});var Z=Object.freeze(Object.defineProperty({__proto__:null,default:S},Symbol.toStringTag,{value:"Module"}));const $=c({__name:"clearable",setup(f){const o=p("");return(s,a)=>{const n=d("el-input");return v(),g(n,{modelValue:o.value,"onUpdate:modelValue":a[0]||(a[0]=e=>o.value=e),placeholder:"Please input",clearable:""},null,8,["modelValue"])}}});var ee=Object.freeze(Object.defineProperty({__proto__:null,default:$},Symbol.toStringTag,{value:"Module"}));const T=c({__name:"disabled",setup(f){const o=p("");return(s,a)=>{const n=d("el-input");return v(),g(n,{modelValue:o.value,"onUpdate:modelValue":a[0]||(a[0]=e=>o.value=e),disabled:"",placeholder:"Please input"},null,8,["modelValue"])}}});var le=Object.freeze(Object.defineProperty({__proto__:null,default:T},Symbol.toStringTag,{value:"Module"}));const h=c({__name:"formatter",setup(f){const o=p("");return(s,a)=>{const n=d("el-input");return v(),g(n,{modelValue:o.value,"onUpdate:modelValue":a[0]||(a[0]=e=>o.value=e),placeholder:"Please input",formatter:e=>`$ ${e}`.replace(/\B(?=(\d{3})+(?!\d))/g,","),parser:e=>e.replace(/\$\s?|(,*)/g,"")},null,8,["modelValue","formatter","parser"])}}});var te=Object.freeze(Object.defineProperty({__proto__:null,default:h},Symbol.toStringTag,{value:"Module"}));const M=i("div",{style:{margin:"20px 0"}},null,-1),I=c({__name:"length-limiting",setup(f){const o=p(""),s=p("");return(a,n)=>{const e=d("el-input");return v(),w(P,null,[t(e,{modelValue:o.value,"onUpdate:modelValue":n[0]||(n[0]=l=>o.value=l),maxlength:"10",placeholder:"Please input","show-word-limit":"",type:"text"},null,8,["modelValue"]),M,t(e,{modelValue:s.value,"onUpdate:modelValue":n[1]||(n[1]=l=>s.value=l),maxlength:"30",placeholder:"Please input","show-word-limit":"",type:"textarea"},null,8,["modelValue"])],64)}}});var oe=Object.freeze(Object.defineProperty({__proto__:null,default:I},Symbol.toStringTag,{value:"Module"}));const k=j("Http://"),B={class:"mt-4"},N=j(".com"),R={class:"mt-4"},C={class:"mt-4"},F=c({__name:"mixed-input",setup(f){const o=p(""),s=p(""),a=p(""),n=p("");return(e,l)=>{const u=d("el-input"),x=d("el-option"),y=d("el-select"),V=d("el-button");return v(),w(P,null,[i("div",null,[t(u,{modelValue:o.value,"onUpdate:modelValue":l[0]||(l[0]=m=>o.value=m),placeholder:"Please input"},{prepend:r(()=>[k]),_:1},8,["modelValue"])]),i("div",B,[t(u,{modelValue:s.value,"onUpdate:modelValue":l[1]||(l[1]=m=>s.value=m),placeholder:"Please input"},{append:r(()=>[N]),_:1},8,["modelValue"])]),i("div",R,[t(u,{modelValue:a.value,"onUpdate:modelValue":l[3]||(l[3]=m=>a.value=m),placeholder:"Please input",class:"input-with-select"},{prepend:r(()=>[t(y,{modelValue:n.value,"onUpdate:modelValue":l[2]||(l[2]=m=>n.value=m),placeholder:"Select",style:{width:"115px"}},{default:r(()=>[t(x,{label:"Restaurant",value:"1"}),t(x,{label:"Order No.",value:"2"}),t(x,{label:"Tel",value:"3"})]),_:1},8,["modelValue"])]),append:r(()=>[t(V,{icon:_(b)},null,8,["icon"])]),_:1},8,["modelValue"])]),i("div",C,[t(u,{modelValue:a.value,"onUpdate:modelValue":l[5]||(l[5]=m=>a.value=m),placeholder:"Please input",class:"input-with-select"},{prepend:r(()=>[t(V,{icon:_(b)},null,8,["icon"])]),append:r(()=>[t(y,{modelValue:n.value,"onUpdate:modelValue":l[4]||(l[4]=m=>n.value=m),placeholder:"Select",style:{width:"115px"}},{default:r(()=>[t(x,{label:"Restaurant",value:"1"}),t(x,{label:"Order No.",value:"2"}),t(x,{label:"Tel",value:"3"})]),_:1},8,["modelValue"])]),_:1},8,["modelValue"])])],64)}}});var ae=Object.freeze(Object.defineProperty({__proto__:null,default:F},Symbol.toStringTag,{value:"Module"}));const A=c({__name:"password",setup(f){const o=p("");return(s,a)=>{const n=d("el-input");return v(),g(n,{modelValue:o.value,"onUpdate:modelValue":a[0]||(a[0]=e=>o.value=e),type:"password",placeholder:"Please input password","show-password":""},null,8,["modelValue"])}}});var ne=Object.freeze(Object.defineProperty({__proto__:null,default:A},Symbol.toStringTag,{value:"Module"}));const E=c({__name:"textarea",setup(f){const o=p("");return(s,a)=>{const n=d("el-input");return v(),g(n,{modelValue:o.value,"onUpdate:modelValue":a[0]||(a[0]=e=>o.value=e),rows:2,type:"textarea",placeholder:"Please input"},null,8,["modelValue"])}}});var ue=Object.freeze(Object.defineProperty({__proto__:null,default:E},Symbol.toStringTag,{value:"Module"}));const H={class:"demo-input-size"},q={class:"demo-input-size"},D={class:"demo-input-size"},G=c({__name:"various-size",setup(f){const o=p(""),s=p(""),a=p("");return(n,e)=>{const l=d("el-input");return v(),w(P,null,[i("div",H,[t(l,{modelValue:o.value,"onUpdate:modelValue":e[0]||(e[0]=u=>o.value=u),class:"w-50 m-2",size:"large",placeholder:"Please Input"},null,8,["modelValue"]),t(l,{modelValue:s.value,"onUpdate:modelValue":e[1]||(e[1]=u=>s.value=u),class:"w-50 m-2",placeholder:"Please Input"},null,8,["modelValue"]),t(l,{modelValue:a.value,"onUpdate:modelValue":e[2]||(e[2]=u=>a.value=u),class:"w-50 m-2",size:"small",placeholder:"Please Input"},null,8,["modelValue"])]),i("div",q,[t(l,{modelValue:o.value,"onUpdate:modelValue":e[3]||(e[3]=u=>o.value=u),class:"w-50 m-2",size:"large",placeholder:"Please Input","suffix-icon":_(b)},null,8,["modelValue","suffix-icon"]),t(l,{modelValue:s.value,"onUpdate:modelValue":e[4]||(e[4]=u=>s.value=u),class:"w-50 m-2",placeholder:"Please Input","suffix-icon":_(b)},null,8,["modelValue","suffix-icon"]),t(l,{modelValue:a.value,"onUpdate:modelValue":e[5]||(e[5]=u=>a.value=u),class:"w-50 m-2",size:"small",placeholder:"Please Input","suffix-icon":_(b)},null,8,["modelValue","suffix-icon"])]),i("div",D,[t(l,{modelValue:o.value,"onUpdate:modelValue":e[6]||(e[6]=u=>o.value=u),class:"w-50 m-2",size:"large",placeholder:"Please Input","prefix-icon":_(b)},null,8,["modelValue","prefix-icon"]),t(l,{modelValue:s.value,"onUpdate:modelValue":e[7]||(e[7]=u=>s.value=u),class:"w-50 m-2",placeholder:"Please Input","prefix-icon":_(b)},null,8,["modelValue","prefix-icon"]),t(l,{modelValue:a.value,"onUpdate:modelValue":e[8]||(e[8]=u=>a.value=u),class:"w-50 m-2",size:"small",placeholder:"Please Input","prefix-icon":_(b)},null,8,["modelValue","prefix-icon"])])],64)}}});var se=Object.freeze(Object.defineProperty({__proto__:null,default:G},Symbol.toStringTag,{value:"Module"}));const J={class:"demo-input-suffix"},K=i("span",{class:"ml-3 w-35 text-gray-600 inline-flex items-center"},"Using attributes",-1),L={class:"demo-input-suffix"},Q=i("span",{class:"ml-3 w-35 text-gray-600 inline-flex items-center"},"Using slots",-1),W=c({__name:"with-icon",setup(f){const o=p(""),s=p(""),a=p(""),n=p("");return(e,l)=>{const u=d("el-input"),x=d("el-row"),y=d("el-icon");return v(),w(P,null,[i("div",J,[t(x,{gutter:20},{default:r(()=>[K,t(u,{modelValue:o.value,"onUpdate:modelValue":l[0]||(l[0]=V=>o.value=V),class:"w-50 m-2",placeholder:"Pick a date","suffix-icon":_(U)},null,8,["modelValue","suffix-icon"]),t(u,{modelValue:s.value,"onUpdate:modelValue":l[1]||(l[1]=V=>s.value=V),class:"w-50 m-2",placeholder:"Type something","prefix-icon":_(b)},null,8,["modelValue","prefix-icon"])]),_:1})]),i("div",L,[t(x,{gutter:20},{default:r(()=>[Q,t(u,{modelValue:a.value,"onUpdate:modelValue":l[2]||(l[2]=V=>a.value=V),class:"w-50 m-2",placeholder:"Pick a date"},{suffix:r(()=>[t(y,{class:"el-input__icon"},{default:r(()=>[t(_(U))]),_:1})]),_:1},8,["modelValue"]),t(u,{modelValue:n.value,"onUpdate:modelValue":l[3]||(l[3]=V=>n.value=V),class:"w-50 m-2",placeholder:"Type something"},{prefix:r(()=>[t(y,{class:"el-input__icon"},{default:r(()=>[t(_(b))]),_:1})]),_:1},8,["modelValue"])]),_:1})])],64)}}});var pe=Object.freeze(Object.defineProperty({__proto__:null,default:W},Symbol.toStringTag,{value:"Module"}));export{Y as _,Z as a,ee as b,le as c,te as d,oe as e,ae as f,ne as g,ue as h,se as i,pe as j};
