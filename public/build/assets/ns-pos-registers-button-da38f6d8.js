import{F as O,p as j,e as C,a as y,n as w}from"./bootstrap-bcf575d6.js";import $ from"./ns-pos-confirm-popup-b1c573b1.js";import{n as k,_ as p}from"./currency-47ec5b79.js";import{_ as m}from"./_plugin-vue_export-helper-c27b6911.js";import{ae as g,a6 as l,z as c,A as t,c as f,y as u,F as v,ac as P,x as B,H}from"./npm~@vue~runtime-core_-ff0bdc0c.js";import{U as n,z as S}from"./npm~@vue~shared_-82b01912.js";import{n as I}from"./ns-numpad-plus-f3ffaa01.js";import"./npm~lodash-f7a36ac5.js";import"./npm~@ckeditor~ckeditor5-build-classic_-a8abd726.js";import"./npm~laravel-echo-7ac8f47a.js";import"./npm~pusher-js-7b18aad5.js";import"./npm~axios-4a70c6fc.js";import"./npm~chart.js-3fed1729.js";import"./npm~rxjs-a7e91008.js";import"./npm~tslib-f3101d7c.js";import"./npm~moment-fbc5633a.js";import"./npm~vue-6a0d7c4c.js";import"./npm~@vue~runtime-dom_-a668b91e.js";import"./npm~@vue~reactivity_-481192b6.js";import"./npm~@vue~compiler-dom_-04241bb4.js";import"./npm~@vue~compiler-core_-2a2ce8c7.js";import"./npm~rx-1641e2f8.js";import"./npm~@wordpress~hooks_-18172e20.js";import"./npm~mathjs-1dff8408.js";import"./npm~@babel~runtime_-34ca84e8.js";import"./npm~decimal.js-d133ee8e.js";import"./npm~complex.js-15c479db.js";import"./npm~fraction.js-52b397f9.js";import"./npm~typed-function-e88d1f37.js";import"./npm~seedrandom-b246f2f9.js";import"./npm~javascript-natural-sort-11e7fc54.js";import"./npm~escape-latex-404addb9.js";import"./npm~numeral-faf61dd1.js";import"./npm~currency.js-57f74176.js";const F={components:{},props:["popup"],data(){return{amount:0,title:null,identifier:null,settingsSubscription:null,settings:null,action:null,register:null,loaded:!1,register_id:null,validation:new O,fields:[]}},mounted(){this.title=this.popup.params.title,this.identifier=this.popup.params.identifier,this.register=this.popup.params.register,this.action=this.popup.params.action,this.register_id=this.popup.params.register_id,this.settingsSubscription=POS.settings.subscribe(s=>{this.settings=s}),this.loadFields()},unmounted(){this.settingsSubscription.unsubscribe()},methods:{popupCloser:j,nsCurrency:k,__:p,definedValue(s){this.amount=s},close(){this.popup.close()},loadFields(){this.loaded=!1,nsHttpClient.get(`/api/fields/${this.identifier}`).subscribe(s=>{this.loaded=!0,this.fields=s},s=>(this.loaded=!0,nsSnackBar.error(s.message,"OKAY",{duration:!1}).subscribe()))},submit(s){Popup.show($,{title:"Confirm Your Action",message:this.popup.params.confirmMessage||"Would you like to confirm your action.",onAction:e=>{e&&this.triggerSubmit()}})},triggerSubmit(){const s=this.validation.extractFields(this.fields);s.amount=this.amount===""?0:this.amount,nsHttpClient.post(`/api/cash-registers/${this.action}/${this.register_id||this.settings.register.id}`,s).subscribe({next:e=>{this.popup.params.resolve(e),this.popup.close(),nsSnackBar.success(e.message).subscribe()},error:e=>{nsSnackBar.error(e.message).subscribe()}})}}},N={key:0,class:"shadow-lg w-95vw md:w-2/5-screen ns-box"},L={class:"border-b ns-box-header p-2 text-primary flex justify-between items-center"},z={class:"font-semibold"},A={class:"p-2"},U={key:0,class:"mb-2 p-3 elevation-surface font-bold border text-right flex justify-between"},D={class:"mb-2 p-3 elevation-surface success border font-bold text-right flex justify-between"},Q={class:"mb-2"},T={key:1,class:"h-full w-full flex items-center justify-center"};function E(s,e,a,d,r,i){const h=g("ns-close-button"),o=g("ns-numpad"),_=g("ns-field"),R=g("ns-spinner");return l(),c("div",null,[r.loaded?(l(),c("div",N,[t("div",L,[t("h3",z,n(r.title),1),t("div",null,[f(h,{onClick:e[0]||(e[0]=b=>i.close())})])]),t("div",A,[r.register!==null?(l(),c("div",U,[t("span",null,n(i.__("Balance")),1),t("span",null,n(i.nsCurrency(r.register.balance)),1)])):u("",!0),t("div",D,[t("span",null,n(i.__("Input")),1),t("span",null,n(i.nsCurrency(r.amount)),1)]),t("div",Q,[f(o,{floating:!0,onNext:e[1]||(e[1]=b=>i.submit(b)),value:r.amount,onChanged:e[2]||(e[2]=b=>i.definedValue(b))},null,8,["value"])]),(l(!0),c(v,null,P(r.fields,(b,V)=>(l(),B(_,{field:b,key:V},null,8,["field"]))),128))])])):u("",!0),r.loaded?u("",!0):(l(),c("div",T,[f(R)]))])}const x=m(F,[["render",E]]),Y={name:"ns-pos-cash-registers-popup",props:["popup"],components:{nsNumpad:I},data(){return{registers:[],priorVerification:!1,hasLoadedRegisters:!1,validation:new O,amount:0,settings:null,settingsSubscription:null}},mounted(){this.checkUsedRegister(),this.settingsSubscription=POS.settings.subscribe(s=>{this.settings=s})},beforeDestroy(){this.settingsSubscription.unsubscribe()},computed:{},methods:{__:p,popupResolver:C,async selectRegister(s){if(s.status!=="closed")return y.error(p("Unable to open this register. Only closed register can be opened.")).subscribe();try{const e=await new Promise((a,d)=>{const r=p("Open Register : %s").replace("%s",s.name),i="open",h=s.id,o="ns.cash-registers-opening";Popup.show(x,{resolve:a,reject:d,title:r,identifier:o,register:s,action:i,register_id:h})});this.popupResolver(e)}catch(e){this.popup.reject(e)}},checkUsedRegister(){this.priorVerification=!1,w.get("/api/cash-registers/used").subscribe({next:s=>{this.popup.params.resolve(s),this.popup.close()},error:s=>{this.priorVerification=!0,y.error(s.message).subscribe(),this.loadRegisters()}})},loadRegisters(){this.hasLoadedRegisters=!1,w.get("/api/cash-registers").subscribe(s=>{this.registers=s,this.hasLoadedRegisters=!0})},getClass(s){switch(s.status){case"in-use":return"elevation-surface warning cursor-not-allowed";case"disabled":return"elevation-surface cursor-not-allowed";case"available":return"elevation-surface success"}return"elevation-surface hoverable cursor-pointer"}}},q={key:0,class:"h-full w-full py-10 flex justify-center items-center"},K={class:"title p-2 border-b ns-box-header flex justify-between items-center"},M={class:"font-semibold"},W={key:0},G=["href"],J={key:0,class:"py-10 flex-auto overflow-y-auto flex items-center justify-center"},X={key:1,class:"flex-auto overflow-y-auto"},Z={class:"grid grid-cols-3"},ee=["onClick"],se=t("i",{class:"las la-cash-register text-6xl"},null,-1),te={class:"text-semibold text-center"},ie={class:"text-sm"},re={key:0,class:"p-2 alert text-white"},ne=["href"];function oe(s,e,a,d,r,i){const h=g("ns-spinner");return l(),c("div",null,[r.priorVerification===!1?(l(),c("div",q,[f(h,{size:"24",border:"8"})])):u("",!0),r.priorVerification?(l(),c("div",{key:1,id:"ns-pos-cash-registers-popup",class:S(["w-95vw md:w-3/5-screen lg:w-3/5-screen xl:w-2/5-screen flex flex-col overflow-hidden",r.priorVerification?"shadow-lg ns-box":""])},[t("div",K,[t("h3",M,n(i.__("Open The Register")),1),r.settings?(l(),c("div",W,[t("a",{href:r.settings.urls.orders_url,class:"rounded-full border ns-close-button px-3 text-sm py-1"},n(i.__("Exit To Orders")),9,G)])):u("",!0)]),r.hasLoadedRegisters?u("",!0):(l(),c("div",J,[f(h,{size:"16",border:"4"})])),r.hasLoadedRegisters?(l(),c("div",X,[t("div",Z,[(l(!0),c(v,null,P(r.registers,(o,_)=>(l(),c("div",{onClick:R=>i.selectRegister(o),class:S([i.getClass(o),"border flex items-center justify-center flex-col p-3"]),key:_},[se,t("h3",te,n(o.name),1),t("span",ie,"("+n(o.status_label)+")",1)],10,ee))),128))]),r.registers.length===0?(l(),c("div",re,[H(n(i.__("Looks like there is no registers. At least one register is required to proceed."))+" — ",1),t("a",{class:"font-bold hover:underline",href:r.settings.urls.registers_url},n(i.__("Create Cash Register")),9,ne)])):u("",!0)])):u("",!0)],2)):u("",!0)])}const le=m(Y,[["render",oe]]),ce={props:["popup"],data(){return{totalIn:0,totalOut:0,settings:null,settingsSubscription:null,histories:[]}},mounted(){this.settingsSubscription=POS.settings.subscribe(s=>{this.settings=s}),this.getHistory()},unmounted(){this.settingsSubscription.unsubscribe()},methods:{__:p,nsCurrency:k,popupResolver:C,closePopup(){this.popupResolver({status:"success"})},getHistory(){w.get(`/api/cash-registers/session-history/${this.settings.register.id}`).subscribe(s=>{this.histories=s,this.totalIn=this.histories.filter(e=>["register-opening","register-sale","register-cash-in"].includes(e.action)).map(e=>parseFloat(e.value)).reduce((e,a)=>e+a,0),this.totalOut=this.histories.filter(e=>["register-closing","register-refund","register-cash-out"].includes(e.action)).map(e=>parseFloat(e.value)).reduce((e,a)=>e+a,0)})}}},ae={class:"ns-box shadow-lg w-95vw md:w-4/6-screen lg:w-half overflow-hidden"},ue={id:"header",class:"p-2 flex justify-between items-center ns-box-header"},de={class:"font-bold"},pe={class:"flex w-full ns-box-body"},he={class:"flex flex-auto"},_e={class:"w-full md:w-1/2 text-right bg-success-secondary text-white font-bold text-3xl p-3"},ge={class:"w-full md:w-1/2 text-right bg-error-secondary text-white font-bold text-3xl p-3"},fe={class:"flex flex-col overflow-y-auto h-120"},be={class:"p-2 flex-auto"},me={class:"flex-auto text-right p-2"},xe={class:"p-2 flex-auto"},ve={class:"flex-auto text-right p-2"},ye={class:"p-2 flex-auto"},we={class:"flex-auto text-right p-2"},Ce={class:"p-2 flex-auto"},ke={class:"flex-auto text-right p-2"};function Pe(s,e,a,d,r,i){const h=g("ns-close-button");return l(),c("div",ae,[t("div",ue,[t("h3",de,n(i.__("Register History")),1),t("div",null,[f(h,{onClick:i.closePopup},null,8,["onClick"])])]),t("div",pe,[t("div",he,[t("div",_e,n(i.nsCurrency(r.totalIn)),1),t("div",ge,n(i.nsCurrency(r.totalOut)),1)])]),t("div",fe,[(l(!0),c(v,null,P(r.histories,o=>(l(),c(v,null,[["register-sale","register-cash-in"].includes(o.action)?(l(),c("div",{key:o.id,class:"flex border-b elevation-surface success"},[t("div",be,n(o.label),1),t("div",me,n(i.nsCurrency(o.value)),1)])):u("",!0),["register-opening"].includes(o.action)?(l(),c("div",{key:o.id,class:"flex border-b elevation-surface"},[t("div",xe,n(o.label),1),t("div",ve,n(i.nsCurrency(o.value)),1)])):u("",!0),["register-close"].includes(o.action)?(l(),c("div",{key:o.id,class:"flex border-b elevation-surface info"},[t("div",ye,n(o.label),1),t("div",we,n(i.nsCurrency(o.value)),1)])):u("",!0),["register-refund","register-cash-out"].includes(o.action)?(l(),c("div",{key:o.id,class:"flex border-b elevation-surface error"},[t("div",Ce,n(o.label),1),t("div",ke,n(i.nsCurrency(o.value)),1)])):u("",!0)],64))),256))])])}const Re=m(ce,[["render",Pe]]),Se={props:["popup"],mounted(){this.settingsSubscriber=POS.settings.subscribe(s=>{this.settings=s}),this.popupCloser(),this.loadRegisterSummary()},beforeDestroy(){this.settingsSubscriber.unsubscribe()},data(){return{settings:null,settingsSubscriber:null,register:{}}},methods:{__:p,nsCurrency:k,popupResolver:C,popupCloser:j,loadRegisterSummary(){nsHttpClient.get(`/api/cash-registers/${this.settings.register.id}`).subscribe(s=>{this.register=s})},closePopup(){this.popupResolver({status:"failed",button:"close_popup"})},async closeCashRegister(s){try{const e=await new Promise((a,d)=>{Popup.show(x,{title:p("Close Register"),action:"close",identifier:"ns.cash-registers-closing",register:s,resolve:a,reject:d})});POS.unset("register"),this.popupResolver({button:"close_register",...e})}catch(e){throw e}},async cashIn(s){try{const e=await new Promise((a,d)=>{Popup.show(x,{title:p("Cash In"),action:"register-cash-in",register:s,identifier:"ns.cash-registers-cashing",resolve:a,reject:d})});this.popupResolver({button:"close_register",...e})}catch(e){throw e}},async cashOut(s){try{const e=await new Promise((a,d)=>{Popup.show(x,{title:p("Cash Out"),action:"register-cash-out",register:s,identifier:"ns.cash-registers-cashout",resolve:a,reject:d})});this.popupResolver({button:"close_register",...e})}catch(e){throw e}},async historyPopup(s){try{const e=await new Promise((a,d)=>{Popup.show(Re,{resolve:a,reject:d,register:s})})}catch(e){throw e}}}},Oe={class:"shadow-lg w-95vw md:w-3/5-screen lg:w-2/4-screen ns-box"},je={class:"p-2 border-b ns-box-header flex items-center justify-between"},Ve={key:0},$e={class:"h-16 text-3xl elevation-surface info flex items-center justify-between px-3"},Be={class:""},He={class:"font-bold"},Ie={class:"h-16 text-3xl elevation-surface success flex items-center justify-between px-3"},Fe={class:""},Ne={class:"font-bold"},Le={key:1,class:"h-32 ns-box-body border-b py-1 flex items-center justify-center"},ze={class:"grid grid-cols-2 text-primary"},Ae=t("i",{class:"las la-sign-out-alt text-6xl"},null,-1),Ue={class:"text-xl font-bold"},De=t("i",{class:"las la-plus-circle text-6xl"},null,-1),Qe={class:"text-xl font-bold"},Te=t("i",{class:"las la-minus-circle text-6xl"},null,-1),Ee={class:"text-xl font-bold"},Ye=t("i",{class:"las la-history text-6xl"},null,-1),qe={class:"text-xl font-bold"};function Ke(s,e,a,d,r,i){const h=g("ns-close-button"),o=g("ns-spinner");return l(),c("div",Oe,[t("div",je,[t("h3",null,n(i.__("Register Options")),1),t("div",null,[f(h,{onClick:e[0]||(e[0]=_=>i.closePopup())})])]),r.register.total_sale_amount!==void 0&&r.register.balance!==void 0?(l(),c("div",Ve,[t("div",$e,[t("span",Be,n(i.__("Sales")),1),t("span",He,n(i.nsCurrency(r.register.total_sale_amount)),1)]),t("div",Ie,[t("span",Fe,n(i.__("Balance")),1),t("span",Ne,n(i.nsCurrency(r.register.balance)),1)])])):u("",!0),r.register.total_sale_amount===void 0&&r.register.balance===void 0?(l(),c("div",Le,[t("div",null,[f(o,{border:"4",size:"16"})])])):u("",!0),t("div",ze,[t("div",{onClick:e[1]||(e[1]=_=>i.closeCashRegister(r.register)),class:"border-r border-b py-4 ns-numpad-key info cursor-pointer px-2 flex items-center justify-center flex-col"},[Ae,t("h3",Ue,n(i.__("Close")),1)]),t("div",{onClick:e[2]||(e[2]=_=>i.cashIn(r.register)),class:"ns-numpad-key success border-r border-b py-4 cursor-pointer px-2 flex items-center justify-center flex-col"},[De,t("h3",Qe,n(i.__("Cash In")),1)]),t("div",{onClick:e[3]||(e[3]=_=>i.cashOut(r.register)),class:"ns-numpad-key error border-r border-b py-4 cursor-pointer px-2 flex items-center justify-center flex-col"},[Te,t("h3",Ee,n(i.__("Cash Out")),1)]),t("div",{onClick:e[4]||(e[4]=_=>i.historyPopup(r.register)),class:"ns-numpad-key info border-r border-b py-4 cursor-pointer px-2 flex items-center justify-center flex-col"},[Ye,t("h3",qe,n(i.__("History")),1)])])])}const Me=m(Se,[["render",Ke]]),We={data(){return{order:null,name:"",selectedRegister:null,orderSubscriber:null,settingsSubscriber:null}},watch:{},methods:{__:p,async openRegisterOptions(){try{(await new Promise((e,a)=>{Popup.show(Me,{resolve:e,reject:a})})).button==="close_register"&&(delete this.settings.register,POS.settings.next(this.settings),POS.reset())}catch(s){Object.keys(s).length>0&&y.error(s.message).subscribe()}},registerInitialQueue(){POS.initialQueue.push(async()=>{try{const s=await new Promise((e,a)=>{this.settings.register===void 0&&Popup.show(le,{resolve:e,reject:a})});return POS.set("register",s.data.register),this.setRegister(s.data.register),s}catch(s){throw console.log({exception:s}),s}})},setButtonName(){if(this.settings.register===void 0)return this.name=p("Cash Register");this.name=p("Cash Register : {register}").replace("{register}",this.settings.register.name)},setRegister(s){if(s!==void 0){const e=POS.order.getValue();e.register_id=s.id,POS.order.next(e)}}},unmounted(){this.orderSubscriber.unsubscribe(),this.settingsSubscriber.unsubscribe()},mounted(){this.registerInitialQueue(),this.orderSubscriber=POS.order.subscribe(s=>{this.order=s}),this.settingsSubscriber=POS.settings.subscribe(s=>{this.settings=s,this.setRegister(this.settings.register),this.setButtonName()})}},Ge={class:"ns-button default"},Je=t("i",{class:"mr-1 text-xl las la-cash-register"},null,-1);function Xe(s,e,a,d,r,i){return l(),c("div",Ge,[t("button",{onClick:e[0]||(e[0]=h=>i.openRegisterOptions()),class:"rounded shadow flex-shrink-0 h-12 flex items-center px-2 py-1 text-sm"},[Je,t("span",null,n(r.name),1)])])}const Hs=m(We,[["render",Xe]]);export{Hs as default};