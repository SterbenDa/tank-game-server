import{d as T,r as b,f as y,h as L,i as f,w as l,s as B,o as r,j as a,b as t,k as u,a4 as w,a5 as F,a6 as z,a as m,a0 as v,m as n,a7 as I,a2 as N,a8 as S,a9 as V,t as p,F as h,a3 as U,e as j,p as A,_ as D}from"./index.78d81d6b.js";import{u as q}from"./todoStore.c47a016e.js";const E={class:"todo-item d-flex align-center pa-5"},G={class:"flex-1 mx-5"},K=T({__name:"TodoList",props:{tasks:{type:Array,required:!0}},setup(x){const g=x,_=q(),i=b(""),C=d=>{const s=_.labels.find(c=>c.id===d);return s?s.color:""},k=y(()=>g.tasks.filter(d=>d.title.toLowerCase().includes(i.value.toLowerCase())));return(d,s)=>{const c=L("perfect-scrollbar");return r(),f(B,{height:"100%"},{default:l(()=>[a(" ---------------------------------------------- "),a(" Filter Input "),a(" ---------------------------------------------- "),t(F,{clearable:"",variant:"solo",class:"elevation-1 ma-3","hide-details":"","prepend-inner-icon":"mdi-magnify",placeholder:"Filter Tasks",modelValue:u(i),"onUpdate:modelValue":s[0]||(s[0]=e=>w(i)?i.value=e:null)},null,8,["modelValue"]),a(" ---------------------------------------------- "),a(" List "),a(" ---------------------------------------------- "),t(c,{class:"todo-list"},{default:l(()=>[t(z,{name:"fade"},{default:l(()=>[(r(!0),m(h,null,v(u(k),e=>(r(),m("div",{key:e.id},[n("div",E,[t(I,{modelValue:e.completed,"onUpdate:modelValue":o=>e.completed=o,color:"primary",class:"pe-2"},null,8,["modelValue","onUpdate:modelValue"]),t(N,{size:"40"},{default:l(()=>[t(S,{src:"https://avatars.githubusercontent.com/u/35951244?v=4",alt:"alt"})]),_:1}),n("div",G,[n("div",{class:V(["font-weight-bold",e.completed?"text-decoration-line-through":""])},p(e.title),3),n("div",{class:V(e.completed?"text-decoration-line-through":"")},p(e.detail),3),n("div",null,[(r(!0),m(h,null,v(e.tags,o=>(r(),f(U,{size:"x-small",variant:"outlined",class:"mr-1 mt-1",color:C(o)},{default:l(()=>[j(p(o),1)]),_:2},1032,["color"]))),256))])]),t(A,{size:"small",icon:"mdi-delete-outline",variant:"text",onClick:o=>u(_).deleteTodoById(e.id)},null,8,["onClick"])])]))),128))]),_:1})]),_:1})]),_:1})}}});const $=D(K,[["__scopeId","data-v-82947a85"],["__file","D:/Project/tank-game-server-ts/admin-vue3-ts/src/views/app/todo/component/TodoList.vue"]]);export{$ as T};