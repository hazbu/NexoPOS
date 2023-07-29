import{e as A,p as N,F as B,a as x}from"./bootstrap-9d0e4bdd.js";import j from"./ns-alert-popup-d36e6542.js";import{_ as l,n as F}from"./currency-d0508508.js";import"./npm~@dicebear~avatars_-d0087f50.js";import"./npm~@dicebear~avatars-avataaars-sprites_-0d53c542.js";import{_ as L}from"./_plugin-vue_export-helper-c27b6911.js";import"./npm~moment-fbc5633a.js";import"./ns-switch-78984f27.js";import S from"./ns-pos-confirm-popup-ade80be0.js";import"./npm~vue2-daterange-picker-d62cf46d.js";import"./npm~vuedraggable-c50c1d8b.js";import"./npm~vue-upload-component-9a419aa9.js";import"./npm~lodash-f5508214.js";import{ae as _,a6 as a,z as u,A as r,c as y,ax as p,H as v,y as f,F as g,ac as C,x as w}from"./npm~@vue~runtime-core_-c1400cf1.js";import{U as d,z as U}from"./npm~@vue~shared_-82b01912.js";import"./npm~laravel-echo-8b7e2b1d.js";import"./npm~pusher-js-244b366d.js";import"./npm~@ckeditor~ckeditor5-build-classic_-5cff4652.js";import"./npm~axios-4a70c6fc.js";import"./npm~chart.js-3fed1729.js";import"./npm~rxjs-a7e91008.js";import"./npm~tslib-f3101d7c.js";import"./npm~vue-d815d99e.js";import"./npm~@vue~runtime-dom_-3cadedeb.js";import"./npm~@vue~reactivity_-46d78a21.js";import"./npm~@vue~compiler-dom_-04241bb4.js";import"./npm~@vue~compiler-core_-2a2ce8c7.js";import"./npm~rx-812d4a49.js";import"./npm~@wordpress~hooks_-18172e20.js";import"./npm~mathjs-eae2cf2e.js";import"./npm~@babel~runtime_-57eb5ba4.js";import"./npm~decimal.js-d133ee8e.js";import"./npm~complex.js-3f247aa1.js";import"./npm~fraction.js-324b3911.js";import"./npm~typed-function-4896e4f1.js";import"./npm~seedrandom-852a687d.js";import"./npm~javascript-natural-sort-2161c071.js";import"./npm~escape-latex-137e2782.js";import"./npm~numeral-b19ffe25.js";import"./npm~currency.js-57f74176.js";import"./npm~pure-color-c66021e6.js";import"./npm~svgson-5849f5d2.js";import"./npm~omit-deep-622ad2a7.js";import"./npm~is-plain-object-01248184.js";import"./npm~isobject-2e03973b.js";import"./npm~isarray-980812a4.js";import"./npm~unset-value-cf896816.js";import"./npm~has-value-859045a0.js";import"./npm~has-values-79b61d1f.js";import"./npm~get-value-efae0488.js";import"./npm~deep-rename-keys-87135736.js";import"./npm~kind-of-f578382b.js";import"./npm~is-buffer-793dba8c.js";import"./npm~rename-keys-392f1d0e.js";import"./npm~xml-reader-cf246a09.js";import"./npm~eventemitter3-15d04946.js";import"./npm~xml-lexer-0debe984.js";import"./npm~@ckeditor~ckeditor5-vue_-1322dee8.js";import"./npm~sortablejs-b86fd812.js";const O={name:"ns-transaction-selector",props:["popup"],data(){return{configurations:[],warningMessage:!1,type:null}},mounted(){this.configurations=this.popup.params.configurations,this.warningMessage=this.popup.params.warningMessage,this.type=this.popup.params.type},methods:{__:l,nsCurrency:F,popupResolver:A,popupCloser:N,selectType(e){this.popupResolver(e)}}},V={class:"w-6/7-screen md:w-4/7-screen lg:w-3/7-screen flex flex-col shadow-lg ns-box"},H={class:"ns-box-header p-2 border-b flex justify-between items-center"},R={class:"font-bold text-xl"},W={key:0,class:"p-2"},q=["innerHTML"],z={class:"grid grid-cols-2"},D=["onClick"],E=["src","alt"],J={class:"font-bold"};function Y(e,t,i,m,n,s){const h=_("ns-notice");return a(),u("div",V,[r("div",H,[r("h3",R,d(s.__("Transaction Type")),1)]),n.warningMessage?(a(),u("div",W,[y(h,{color:"info"},{title:p(()=>[v(d(s.__("Warning")),1)]),default:p(()=>[r("p",{innerHTML:n.warningMessage},null,8,q)]),_:1})])):f("",!0),r("div",z,[(a(!0),u(g,null,C(n.configurations,o=>(a(),u("div",{class:U([n.type===o.identifier?"info":"","h-40 elevation-surface hoverable flex-col flex items-center justify-center cursor-pointer"]),onClick:T=>s.selectType(o),key:o.identifier},[r("img",{src:o.icon,class:"w-20 my-2",alt:o.label},null,8,E),r("h3",J,d(o.label),1)],10,D))),128))])])}const G=L(O,[["render",Y]]),I={props:[],data(){return{configurations:[],activeTab:"create-customers",selectedConfiguration:{},isLoading:!1,tabs:[],unavailableType:!1,transaction:{},originalRecurrence:[],validation:new B,recurrence:[],warningMessage:!1}},computed:{},mounted(){window.nsTransactionData!==void 0&&(this.transaction=window.nsTransactionData),this.init()},watch:{},methods:{__:l,nsCurrency:F,confirmBeforeSave(){Popup.show(S,{title:l("Confirm Your Action"),message:l("The transaction is about to be saved. Would you like to confirm your action ?"),onAction:e=>{e&&this.saveTransaction()}})},saveTransaction(){const e=this.transaction.id!==void 0?"put":"post",t=this.transaction.id!==void 0?`/api/crud/ns.transactions/${this.transaction.id}`:"/api/crud/ns.transactions",i=this.configurations.filter(o=>o.identifier===this.selectedConfiguration.identifier);if(i.length!==1)return x.error(l("No configuration were choosen. Unable to proceed.")).subscribe();if(!this.validation.validateFields(i[0].fields))return x.error(l("Unable to proceed the form is not valid.")).subscribe();this.validation.disableFields(i[0].fields);const m=this.validation.extractFields(i[0].fields),n=this.validation.extractFields(this.recurrence),s={...m,...n},h={general:{}};for(let o in s)o==="name"?h[o]=s[o]:h.general[o]=s[o];nsHttpClient[e](t,h).subscribe({next:o=>{x.success(o.message).subscribe(),setTimeout(()=>{document.location=o.data.editUrl},1e3)},error:o=>{this.validation.enableFields(i[0].fields),x.error(o.message||l("An unexpected error occured.")).subscribe()}})},updateSelectLabel(){this.recurrence.length>0&&(this.recurrence[0].options=this.recurrence[0].options.map((e,t)=>{const i=this.originalRecurrence[0].options[t];return["x_after_month_starts","x_before_month_ends"].includes(e.value)?(e.label=i.label.replace("{day}",this.recurrence[1].value>=0&&this.recurrence[1].value<=1?`${this.recurrence[1].value} day`:`${this.recurrence[1].value} days`),e.label=i.label.replace("{day}",this.recurrence[1].value>=0&&this.recurrence[1].value<=1?`${this.recurrence[1].value} day`:`${this.recurrence[1].value} days`)):["on_specific_day"].includes(e.value)&&(e.label=i.label.replace("{day}",this.ordinalSuffix(this.recurrence[1].value))),e}))},setActiveTab(e){this.activeTab=e,this.updateSelectLabel()},executeCondition(e,t){if(e.shows){const i=t.filter(n=>Object.keys(e.shows).includes(n.name));return i.filter(n=>e.shows[n.name].includes(n.value)).length===i.length}return!0},setTabs(){const e=[{label:this.selectedConfiguration.label||l("N/A"),identifier:"general",active:!0,fields:this.selectedConfiguration.fields}];["ns.recurring-transactions","ns.salary-transactions"].includes(this.selectedConfiguration.identifier)&&e.push({label:l("Conditions"),identifier:"recurrence"}),this.tabs=e},async init(){try{this.isLoading=!0;const{configurations:e,recurrence:t,warningMessage:i}=await this.loadConfiguration();if(this.configurations=e,this.recurrence=t,this.warningMessage=i,this.originalRecurrence=JSON.parse(JSON.stringify(t)),this.transaction.type===void 0)await this.selectTransactionType();else{const m=this.configurations.filter(n=>n.identifier===this.transaction.type);if(m.length==0)return this.unavailableType=!0,this.isLoading=!1,Popup.show(j,{title:l("Unable to load the transaction"),message:l("You cannot edit this transaction if NexoPOS cannot perform background requests.")});this.processSelectedConfiguration(m[0])}this.isLoading=!1,this.setTabs()}catch(e){console.log(e)}},processSelectedConfiguration(e){e.fields=this.validation.createFields(e.fields),e.fields.forEach(t=>{t.name==="recurring"&&(["ns.recurring-transactions","ns.salary-transactions"].includes(e.identifier)?t.value=!0:t.value=!1),t.name==="type"&&(t.value=e.identifier)}),this.selectedConfiguration=e},async selectTransactionType(){try{const e=await new Promise((t,i)=>{Popup.show(G,{resolve:t,reject:i,configurations:this.configurations,type:this.transaction.type,warningMessage:this.warningMessage})});this.processSelectedConfiguration(e)}catch(e){console.log(e)}},confirmTypeChange(){Popup.show(S,{title:l("Change Type"),message:l("By proceeding the current for and all your entries will be cleared. Would you like to proceed?"),onAction:e=>{e&&(delete this.transaction.type,this.init())}})},ordinalSuffix(e){var t=e%10,i=e%100;return t==1&&i!=11?e+"st":t==2&&i!=12?e+"nd":t==3&&i!=13?e+"rd":e+"th"},loadConfiguration(){return new Promise((e,t)=>{nsHttpClient.get(`/api/transactions/configurations/${this.transaction.id?this.transaction.id:""}`).subscribe({next:i=>{e(i)},error:i=>{t(i)}})})}}},K={key:0,class:"h-half w-full flex items-center justify-center"},Q={class:"flex flex-col"},X={class:"py-4"},Z={key:1,class:"flex items-center justify-center"},$={key:2},ee={class:"md:flex hidden flex-col md:flex-row -mx-2"},te={class:"px-2"},ie={class:"ns-button info"},se={class:"px-2"},ne={class:"ns-button success"},re={class:"my-3 md:hidden"},oe={class:"flex -mx-2"},ae={class:"px-2"},ce={class:"ns-button info"},le={class:"px-2"},de={class:"ns-button success"};function ue(e,t,i,m,n,s){const h=_("ns-spinner"),o=_("ns-button"),T=_("ns-notice"),k=_("ns-field"),M=_("ns-tabs-item"),P=_("ns-tabs");return a(),u(g,null,[n.isLoading&&!n.unavailableType?(a(),u("div",K,[r("div",Q,[y(h),r("div",X,[r("a",{onClick:t[0]||(t[0]=c=>s.init()),class:"text-info-tertiary hover:underline",href:"javascript:void(0)"},d(s.__("Change Type")),1)])])])):f("",!0),n.unavailableType&&!n.isLoading?(a(),u("div",Z,[y(T,{color:"warning"},{title:p(()=>[v(d(s.__("Unable to edit this transaction")),1)]),description:p(()=>[v(d(s.__("This transaction was created with a type that is no longer available. This type is no longer available because NexoPOS is unable to perform background requests.")),1)]),controls:p(()=>[y(o,{target:"_blank",href:"https://my.nexopos.com/en/documentation/troubleshooting/workers-or-async-requests-disabled?utm_source=nexopos&utm_campaign=warning&utm_medium=app",type:"warning"},{default:p(()=>[v(d(s.__("Learn More")),1)]),_:1})]),_:1})])):f("",!0),n.tabs.length>0&&!n.isLoading?(a(),u("div",$,[y(P,{active:n.activeTab,onActive:t[6]||(t[6]=c=>s.setActiveTab(c))},{extra:p(()=>[r("div",ee,[r("div",te,[r("div",ie,[r("button",{onClick:t[1]||(t[1]=c=>s.confirmTypeChange()),class:"py-1 px-2 text-sm rounded"},d(s.__("Change Type")),1)])]),r("div",se,[r("div",ne,[r("button",{onClick:t[2]||(t[2]=c=>s.confirmBeforeSave()),class:"py-1 px-2 text-sm rounded"},d(s.__("Save Transaction")),1)])])])]),default:p(()=>[(a(!0),u(g,null,C(n.tabs,c=>(a(),w(M,{key:c.identifier,identifier:c.identifier,label:c.label},{default:p(()=>[c.fields?(a(),u(g,{key:0},[n.selectedConfiguration.identifier==="ns.entity-transaction"?(a(),w(T,{key:0,class:"mb-2",color:"info"},{title:p(()=>[v(d(s.__("Warning")),1)]),description:p(()=>[v(d(s.__("While selecting entity transaction, the amount defined will be multiplied by the total user assigned to the User group selected.")),1)]),_:1})):f("",!0),(a(!0),u(g,null,C(c.fields,b=>(a(),w(k,{key:b.name,field:b},null,8,["field"]))),128))],64)):f("",!0),c.identifier==="recurrence"?(a(!0),u(g,{key:1},C(n.recurrence,b=>(a(),u(g,{key:b.name},[s.executeCondition(b,n.recurrence)?(a(),w(k,{key:0,onChange:t[3]||(t[3]=pe=>s.updateSelectLabel()),field:b},null,8,["field"])):f("",!0)],64))),128)):f("",!0)]),_:2},1032,["identifier","label"]))),128)),r("div",re,[r("div",oe,[r("div",ae,[r("div",ce,[r("button",{onClick:t[4]||(t[4]=c=>s.confirmTypeChange()),class:"py-1 px-2 text-sm rounded"},d(s.__("Change Type")),1)])]),r("div",le,[r("div",de,[r("button",{onClick:t[5]||(t[5]=c=>s.confirmBeforeSave()),class:"py-1 px-2 text-sm rounded"},d(s.__("Save Expense")),1)])])])])]),_:1},8,["active"])])):f("",!0)],64)}const bt=L(I,[["render",ue]]);export{bt as default};