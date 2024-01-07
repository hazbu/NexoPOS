import{b as g}from"./components-dd2eca3e.js";import"./npm~vue-4c913503.js";import{_ as m}from"./currency-ab26e44d.js";import{a as l,b as h}from"./bootstrap-77c64f15.js";import{_ as x}from"./_plugin-vue_export-helper-c27b6911.js";import{ak as y,ac as n,A as p,D as e,z as a,y as _,aE as f}from"./npm~@vue~runtime-core_-ff0546fa.js";import{U as s}from"./npm~@vue~shared_-3ce114fe.js";import{c as b}from"./npm~@vue~runtime-dom_-aa3a306b.js";import"./ns-alert-popup-b14f8b15.js";import"./ns-avatar-image-c7eda85f.js";import"./npm~@dicebear~avatars_-e718895d.js";import"./npm~pure-color-7e91fe3a.js";import"./npm~@ckeditor~ckeditor5-build-classic_-27365139.js";import"./npm~svgson-b28014ad.js";import"./npm~deep-rename-keys-b2342f4f.js";import"./npm~kind-of-f578382b.js";import"./npm~is-buffer-793dba8c.js";import"./npm~rename-keys-392f1d0e.js";import"./npm~xml-reader-442daf8d.js";import"./npm~eventemitter3-3e95be7d.js";import"./npm~xml-lexer-4446ceee.js";import"./npm~@dicebear~avatars-avataaars-sprites_-c793f8f6.js";import"./npm~moment-fbc5633a.js";import"./ns-prompt-popup-5faf7c75.js";import"./npm~@ckeditor~ckeditor5-vue_-be5de702.js";import"./npm~vue2-daterange-picker-ccd86bea.js";import"./npm~@vue~reactivity_-547540a3.js";import"./npm~vuedraggable-4b4454f2.js";import"./npm~sortablejs-314556ad.js";import"./npm~vue-upload-component-6f0f62ed.js";import"./npm~lodash-9a4afe3d.js";import"./npm~rxjs-eeb06f17.js";import"./npm~tslib-8dbab242.js";import"./npm~@vue~compiler-dom_-85e36bcf.js";import"./npm~@vue~compiler-core_-be14e06b.js";import"./npm~numeral-85b533a7.js";import"./npm~currency.js-57f74176.js";import"./npm~laravel-echo-198fd56d.js";import"./npm~pusher-js-a179ff58.js";import"./npm~axios-28bc18a3.js";import"./npm~chart.js-3fed1729.js";import"./npm~rx-da74c705.js";import"./npm~@wordpress~hooks_-bd0b7221.js";import"./npm~mathjs-d162420d.js";import"./npm~@babel~runtime_-57eb5ba4.js";import"./npm~decimal.js-d133ee8e.js";import"./npm~complex.js-2f8f27d8.js";import"./npm~fraction.js-704ae1f4.js";import"./npm~typed-function-de33f2d8.js";import"./npm~seedrandom-4e17e537.js";import"./npm~javascript-natural-sort-82d7d2c3.js";import"./npm~escape-latex-6c71499e.js";const k={name:"ns-database-update",data(){return{files:Update.files,returnLink:Update.returnLink,modules:Update.modules,updating:!1,xXsrfToken:null,updatingModule:!1,error:!1,lastErrorMessage:"",index:0}},computed:{totalModules(){return Object.values(this.modules).length}},mounted(){l.get("/sanctum/csrf-cookie").subscribe(r=>{try{this.xXsrfToken=l.response.config.headers["X-XSRF-TOKEN"],this.proceedUpdate()}catch(o){h.error(o.message).subscribe()}})},methods:{__:m,async proceedUpdate(){this.updating=!0;for(let r in this.files)try{this.index=parseInt(r)+1;const o=await new Promise((d,c)=>{l.post("/api/update",{file:this.files[r]},{headers:{"X-XSRF-TOKEN":this.xXsrfToken}}).subscribe({next:d,error:c})})}catch(o){return this.updating=!1,this.error=!0,this.lastErrorMessage=o.message||m("An unexpected error occurred"),h.error(o.message).subscribe()}if(this.index=0,Object.values(this.modules).length>0){this.updatingModule=!0;let r=0;for(let o in this.modules)try{r+=1,this.index=r;const d=await new Promise((c,t)=>{l.post("/api/update",{module:this.modules[o]},{headers:{"X-XSRF-TOKEN":this.xXsrfToken}}).subscribe({next:c,error:t})})}catch(d){return this.updating=!1,this.error=!0,this.lastErrorMessage=d.message||m("An unexpected error occurred"),h.error(d.message).subscribe()}}this.error=!1,this.updating=!1,document.location=this.returnLink}}},w={class:"container mx-auto flex-auto items-center justify-center flex"},v={id:"database-update",class:"w-full md:w-2/3 lg:w-1/3"},U=e("div",{class:"flex justify-center items-center py-6"},[e("img",{class:"w-32",src:"/svg/nexopos-variant-1.svg",alt:"NexoPOS"})],-1),M={class:"my-3 rounded shadow ns-box"},X={class:"border-b ns-box-header py-4 flex items-center justify-center"},E={class:"text-xl font-bold"},T={class:"p-2 ns-box-body"},j={class:"text-center text-sm py-4"},N={key:0,class:"border-l-4 text-sm ns-notice error p-4"},O={class:"rounded whitespace-pre-wrap my-2 p-2"},S={class:"border-t ns-box-footer p-2 flex justify-between"},C=e("i",{class:"las la-sync"},null,-1),A={class:"ml-1"},B={class:"flex"},L=e("i",{class:"las la-sync animate-spin"},null,-1),P={key:0},D={key:1,class:"mr-1"},R={key:2},F={key:3,class:"mr-1"},I=e("i",{class:"las la-undo"},null,-1),K={class:"ml-1"};function H(r,o,d,c,t,i){const u=y("ns-button");return n(),p("div",w,[e("div",v,[U,e("div",M,[e("div",X,[e("h3",E,s(i.__("Database Update")),1)]),e("div",T,[e("p",j,s(i.__("In order to keep NexoPOS running smoothly with updates, we need to proceed to the database migration. In fact you don't need to do any action, just wait until the process is done and you'll be redirected.")),1),t.error?(n(),p("div",N,[e("p",null,s(i.__("Looks like an error has occurred during the update. Usually, giving another shot should fix that. However, if you still don't get any chance."))+" "+s(i.__("Please report this message to the support : ")),1),e("pre",O,s(t.lastErrorMessage),1)])):a("",!0)]),e("div",S,[e("div",null,[t.error?(n(),_(u,{key:0,onClick:o[0]||(o[0]=z=>i.proceedUpdate()),type:"error",class:"rounded shadow-inner"},{default:f(()=>[C,e("span",A,s(i.__("Try Again")),1)]),_:1})):a("",!0)]),e("div",B,[t.updating?(n(),_(u,{key:0,type:"info",class:"rounded shadow-inner"},{default:f(()=>[L,t.updatingModule?a("",!0):(n(),p("span",P,s(i.__("Updating"))+"...",1)),t.updatingModule?a("",!0):(n(),p("span",D,s(t.index)+"/"+s(t.files.length),1)),t.updatingModule?(n(),p("span",R,s(i.__("Updating Modules"))+"...",1)):a("",!0),t.updatingModule?(n(),p("span",F,s(t.index)+"/"+s(i.totalModules),1)):a("",!0)]),_:1})):a("",!0),t.updating?a("",!0):(n(),_(u,{key:1,type:"info",href:t.returnLink,class:"rounded shadow-inner"},{default:f(()=>[I,e("span",K,s(i.__("Return")),1)]),_:1},8,["href"]))])])])])])}const V=x(k,[["render",H]]);window.nsUpdate=b({components:{nsDatabaseUpdate:V}});for(let r in g)window.nsUpdate.component(r,g[r]);window.nsUpdate.mount("#main-container");
