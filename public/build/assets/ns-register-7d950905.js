import{F as x,a as o,n as u,b as d}from"./bootstrap-77c64f15.js";import{_}from"./currency-ab26e44d.js";import{_ as F}from"./_plugin-vue_export-helper-c27b6911.js";import{f as T}from"./npm~rxjs-eeb06f17.js";import{ak as l,ac as s,A as r,D as t,F as V,ai as X,y as w,z as h,c,aE as g,I as b}from"./npm~@vue~runtime-core_-ff0546fa.js";import{U as m}from"./npm~@vue~shared_-3ce114fe.js";import"./npm~lodash-9a4afe3d.js";import"./npm~@ckeditor~ckeditor5-build-classic_-27365139.js";import"./npm~laravel-echo-198fd56d.js";import"./npm~pusher-js-a179ff58.js";import"./npm~axios-28bc18a3.js";import"./npm~chart.js-3fed1729.js";import"./npm~moment-fbc5633a.js";import"./npm~vue-4c913503.js";import"./npm~@vue~runtime-dom_-aa3a306b.js";import"./npm~@vue~reactivity_-547540a3.js";import"./npm~@vue~compiler-dom_-85e36bcf.js";import"./npm~@vue~compiler-core_-be14e06b.js";import"./npm~rx-da74c705.js";import"./npm~@wordpress~hooks_-bd0b7221.js";import"./npm~mathjs-d162420d.js";import"./npm~@babel~runtime_-57eb5ba4.js";import"./npm~decimal.js-d133ee8e.js";import"./npm~complex.js-2f8f27d8.js";import"./npm~fraction.js-704ae1f4.js";import"./npm~typed-function-de33f2d8.js";import"./npm~seedrandom-4e17e537.js";import"./npm~javascript-natural-sort-82d7d2c3.js";import"./npm~escape-latex-6c71499e.js";import"./npm~tslib-8dbab242.js";import"./npm~numeral-85b533a7.js";import"./npm~currency.js-57f74176.js";const N={name:"ns-register",data(){return{fields:[],xXsrfToken:null,validation:new x}},mounted(){T([o.get("/api/fields/ns.register"),o.get("/sanctum/csrf-cookie")]).subscribe(n=>{this.fields=this.validation.createFields(n[0]),this.xXsrfToken=o.response.config.headers["X-XSRF-TOKEN"],setTimeout(()=>u.doAction("ns-register-mounted",this))})},methods:{__:_,register(){if(!this.validation.validateFields(this.fields))return d.error(_("Unable to proceed the form is not valid.")).subscribe();this.validation.disableFields(this.fields),u.applyFilters("ns-register-submit",!0)&&o.post("/auth/sign-up",this.validation.getValue(this.fields),{headers:{"X-XSRF-TOKEN":this.xXsrfToken}}).subscribe(e=>{d.success(e.message).subscribe(),setTimeout(()=>{document.location=e.data.redirectTo},1500)},e=>{this.validation.triggerFieldsErrors(this.fields,e),this.validation.enableFields(this.fields),d.error(e.message).subscribe()})}}},B={class:"ns-box rounded shadow overflow-hidden transition-all duration-100"},C={class:"ns-box-body"},E={class:"p-3 -my-2"},S={key:0,class:"py-2 fade-in-entrance anim-duration-300"},R={key:0,class:"flex items-center justify-center"},j={class:"flex w-full items-center justify-center py-4"},A={href:"/sign-in",class:"link hover:underline text-sm"},D={class:"flex ns-box-footer border-t justify-between items-center p-3"};function H(n,e,I,K,a,i){const v=l("ns-field"),k=l("ns-spinner"),p=l("ns-button");return s(),r("div",B,[t("div",C,[t("div",E,[a.fields.length>0?(s(),r("div",S,[(s(!0),r(V,null,X(a.fields,(f,y)=>(s(),w(v,{key:y,field:f},null,8,["field"]))),128))])):h("",!0)]),a.fields.length===0?(s(),r("div",R,[c(k)])):h("",!0),t("div",j,[t("a",A,m(i.__("Already registered ?")),1)])]),t("div",D,[t("div",null,[c(p,{onClick:e[0]||(e[0]=f=>i.register()),type:"info"},{default:g(()=>[b(m(i.__("Register")),1)]),_:1})]),t("div",null,[c(p,{link:!0,href:"/sign-in",type:"success"},{default:g(()=>[b(m(i.__("Sign In")),1)]),_:1})])])])}const be=F(N,[["render",H]]);export{be as default};
