(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{"7cwl":function(n,o,l){"use strict";l.r(o);var t=l("CcnG"),i=l("ZZ/e"),e=(l("vlXg"),l("1ZaN")),r=function(){function n(n,o,l,t,i,e){var r=this;this.router=n,this.route=o,this.nav=l,this.util=t,this.userService=i,this.workflowService=e,this.title="\u5386\u53f2\u6d41\u7a0b\u8282\u70b9",this.currentNodes=[],this.historyNodes=[],this.route.queryParams.subscribe(function(n){console.debug(r.router.getCurrentNavigation().extras.state);var o=r.router.getCurrentNavigation().extras.state;o&&(r.tblNam=o.tblNam,r.pkValue=o.pkValue,r.loadDate(null))})}return n.prototype.ngOnInit=function(){console.log("\u9875\u9762\u751f\u547d\u5468\u671f!!!!")},n.prototype.ionViewDidEnter=function(){document.title=this.title},n.prototype.ionViewWillEnter=function(){this.util.pushHistory()},n.prototype.imageIonError=function(n){n.target.src="./assets/icon/avator.png"},n.prototype.usersrcForNode=function(n){var o={type:3,orgno:this.userService.getUserInfo().orgNo,userid:this.userService.getUserInfo().userId,headid:n.operUsr};return this.util.urlForUserId(o)},n.prototype.handleNodes=function(n){var o=this;return(n=n||[]).forEach(function(n){var l=n.operDtm.split(" ");n.date=(l.shift()||"").substr(5),n.time=(l.pop()||"").substr(0,5),n.src=o.usersrcForNode(n)}),n},n.prototype.loadDate=function(n){var o=this;this.util.showLoad().then(function(n){o.workflowService.getWorkFlowHistoryList(o.tblNam,o.pkValue).then(function(l){n.dismiss(),o.currentNodes=o.handleNodes(l.currentNodes),o.historyNodes=o.handleNodes(l.historyNodes),setTimeout(function(){o.content.scrollToBottom(300)},300)})})},n}(),c=function(){return function(){}}(),u=l("pMnS"),a=l("oBZk"),s=l("Ip0R"),d=l("ZYCi"),p=l("BaxT"),f=l("Ouoq"),b=t.mb({encapsulation:0,styles:[['[_ngcontent-%COMP%]:root{font-size:62.5%;-webkit-text-size-adjust:100%;-moz-text-size-adjust:100%;-ms-text-size-adjust:100%;text-size-adjust:100%;--ion-background-color:#F8F8F8;--ion-color-primary:#4880FF;--ion-color-primary-rgb:72,128,255;--ion-color-primary-contrast:#ffffff;--ion-color-primary-contrast-rgb:255,255,255;--ion-color-primary-shade:#3f71e0;--ion-color-primary-tint:#5a8dff;--ion-color-secondary:#0cd1e8;--ion-color-secondary-rgb:12,209,232;--ion-color-secondary-contrast:#ffffff;--ion-color-secondary-contrast-rgb:255,255,255;--ion-color-secondary-shade:#0bb8cc;--ion-color-secondary-tint:#24d6ea;--ion-color-tertiary:#7044ff;--ion-color-tertiary-rgb:112,68,255;--ion-color-tertiary-contrast:#ffffff;--ion-color-tertiary-contrast-rgb:255,255,255;--ion-color-tertiary-shade:#633ce0;--ion-color-tertiary-tint:#7e57ff;--ion-color-success:#10dc60;--ion-color-success-rgb:16,220,96;--ion-color-success-contrast:#ffffff;--ion-color-success-contrast-rgb:255,255,255;--ion-color-success-shade:#0ec254;--ion-color-success-tint:#28e070;--ion-color-warning:#ffce00;--ion-color-warning-rgb:255,206,0;--ion-color-warning-contrast:#ffffff;--ion-color-warning-contrast-rgb:255,255,255;--ion-color-warning-shade:#e0b500;--ion-color-warning-tint:#ffd31a;--ion-color-danger:#f04141;--ion-color-danger-rgb:245,61,61;--ion-color-danger-contrast:#ffffff;--ion-color-danger-contrast-rgb:255,255,255;--ion-color-danger-shade:#d33939;--ion-color-danger-tint:#f25454;--ion-color-dark:#222428;--ion-color-dark-rgb:34,34,34;--ion-color-dark-contrast:#ffffff;--ion-color-dark-contrast-rgb:255,255,255;--ion-color-dark-shade:#1e2023;--ion-color-dark-tint:#383a3e;--ion-color-medium:#666666;--ion-color-medium-rgb:102,102,102;--ion-color-medium-contrast:#ffffff;--ion-color-medium-contrast-rgb:255,255,255;--ion-color-medium-shade:#5a5a5a;--ion-color-medium-tint:#757575;--ion-color-light:#F4F4F4;--ion-color-light-rgb:244,244,244;--ion-color-light-contrast:#000000;--ion-color-light-contrast-rgb:0,0,0;--ion-color-light-shade:#d7d7d7;--ion-color-light-tint:#f5f5f5;--placeholder-color:#CCCCCC!important;--position:fixed}ion-input[_ngcontent-%COMP%]{--placeholder-color:#CCCCCC!important;--placeholder-opacity:1!important}ion-searchbar[_ngcontent-%COMP%]{--placeholder-color:#8E8E93!important;--placeholder-opacity:1!important}ion-toast[_ngcontent-%COMP%]{text-align:center}.ion-page[_ngcontent-%COMP%] > ion-toolbar[_ngcontent-%COMP%]{padding-bottom:0;padding-bottom:env(safe-area-inset-bottom);border-bottom:1px solid #f3f3f3!important}.can-go-back[_ngcontent-%COMP%] > ion-toolbar[_ngcontent-%COMP%]{padding-bottom:0!important;padding-bottom:env(safe-area-inset-bottom)!important}.native-input[disabled].sc-ion-input-ios[_ngcontent-%COMP%]{opacity:1!important}.toast-ios[_ngcontent-%COMP%]{left:30%;width:40%}.toast-message[_ngcontent-%COMP%]{text-align:center}.clear[_ngcontent-%COMP%]{background:0 0;--background:transparent}.no-shadow[_ngcontent-%COMP%]{box-shadow:0 0 0 0 transparent}.border-bottom-full[_ngcontent-%COMP%]{border-bottom:1px solid #f3f3f3!important}.space-top[_ngcontent-%COMP%]{border-top:16px solid #d8d8d8!important}.lk-toast-image[_ngcontent-%COMP%]{margin:0!important}.lk-toast-content[_ngcontent-%COMP%]{padding:0!important}.group-content[_ngcontent-%COMP%]{padding:0 0 16px!important}.segmented-divider[_ngcontent-%COMP%]{padding:16px 0;--background:white}.span-header-title[_ngcontent-%COMP%]{padding:0 16px;border-left:3px solid #4880ff;font-size:16px;line-height:16px;color:#333}.card-content[_ngcontent-%COMP%]{margin:0;box-shadow:unset}.card-content[_ngcontent-%COMP%]:nth-child(2)   .div-line[_ngcontent-%COMP%]{top:16px}.card-content[_ngcontent-%COMP%]:last-child   .div-line[_ngcontent-%COMP%]{bottom:unset;height:16px}.card-content-node[_ngcontent-%COMP%]{padding:0 0 8px;display:-webkit-flex;display:flex;-webkit-flex-direction:row;flex-direction:row;-webkit-justify-content:flex-start;justify-content:flex-start;-webkit-align-items:flex-start;align-items:flex-start}.div-content-date[_ngcontent-%COMP%]{width:50px}.p-date[_ngcontent-%COMP%]{margin:5px 0 0;font-size:12px;line-height:14px;color:#333;text-align:right}.p-time[_ngcontent-%COMP%]{margin:3px 0 0;font-size:10px;line-height:10px;color:#666;text-align:right}.div-line[_ngcontent-%COMP%]{position:absolute;top:0;bottom:0;left:68px;width:2px;background:#e7ebf2;overflow:visible}.img-icon-arrow[_ngcontent-%COMP%]{position:absolute;top:16px;left:63px;min-width:13px;max-width:13px;width:13px;height:13px}.div-history-info-content[_ngcontent-%COMP%]{-webkit-flex:1;flex:1;margin:0 16px 0 40px;padding:16px 0 16px 16px;position:relative;display:-webkit-flex;display:flex;-webkit-flex-direction:column;flex-direction:column;-webkit-justify-content:flex-start;justify-content:flex-start;-webkit-align-items:flex-start;align-items:flex-start;background:#f5f9ff;border-radius:4px}.div-history-info-content[_ngcontent-%COMP%]:before{position:absolute;top:16px;left:-14px;width:0;height:0;border:7px solid transparent;content:"";border-right:7px solid #f5f9ff}.img-user[_ngcontent-%COMP%]{position:absolute;top:16px;left:16px;width:32px;height:32px;border-radius:16px}.span-name-operation[_ngcontent-%COMP%]{margin:0 0 0 46px;font-size:14px;line-height:14px;color:#333}.span-node[_ngcontent-%COMP%]{margin:6px 0 0 46px;font-size:12px;line-height:12px;color:#999}.span-idea[_ngcontent-%COMP%]{margin:8px 0 0;padding:8px 4px 0 0;width:100%;font-size:12px;line-height:12px;border-top:1px solid #e8f0fc;word-break:break-all}.span-operation[_ngcontent-%COMP%]{background:#dbe9ff;border-radius:100px 0 0 100px;padding:5px 10px 5px 12px;font-size:12px;color:#4880ff;position:absolute;top:12px;right:0}']],data:{}});function g(n){return t.Db(0,[(n()(),t.ob(0,0,null,null,21,"ion-card",[["class","card-content"]],null,null,null,a.M,a.d)),t.nb(1,49152,null,0,i.m,[t.h,t.k],null,null),(n()(),t.ob(2,0,null,0,19,"ion-card-content",[["class","card-content-node"]],null,null,null,a.J,a.e)),t.nb(3,49152,null,0,i.n,[t.h,t.k],null,null),(n()(),t.ob(4,0,null,0,4,"div",[["class","div-content-date"]],null,null,null,null,null)),(n()(),t.ob(5,0,null,null,1,"p",[["class","p-date"]],null,null,null,null,null)),(n()(),t.Cb(6,null,["",""])),(n()(),t.ob(7,0,null,null,1,"p",[["class","p-time"]],null,null,null,null,null)),(n()(),t.Cb(8,null,["",""])),(n()(),t.ob(9,0,null,0,0,"div",[["class","div-line"]],null,null,null,null,null)),(n()(),t.ob(10,0,null,0,0,"img",[["class","img-icon-arrow"],["src","./assets/icon/workflow_hisnode.png"]],null,null,null,null,null)),(n()(),t.ob(11,0,null,0,10,"div",[["class","div-history-info-content"]],null,null,null,null,null)),(n()(),t.ob(12,0,null,null,1,"ion-img",[["class","img-user"]],null,[[null,"ionError"]],function(n,o,l){var t=!0;return"ionError"===o&&(t=!1!==n.component.imageIonError(l)&&t),t},a.U,a.o)),t.nb(13,49152,null,0,i.D,[t.h,t.k],{src:[0,"src"]},null),(n()(),t.ob(14,0,null,null,1,"span",[["class","span-name-operation"]],null,null,null,null,null)),(n()(),t.Cb(15,null,["",""])),(n()(),t.ob(16,0,null,null,1,"span",[["class","span-node"]],null,null,null,null,null)),(n()(),t.Cb(17,null,["\u8282\u70b9\uff1a",""])),(n()(),t.ob(18,0,null,null,1,"span",[["class","span-idea"]],null,null,null,null,null)),(n()(),t.Cb(19,null,["\u610f\u89c1\uff1a",""])),(n()(),t.ob(20,0,null,null,1,"span",[["class","span-operation"]],null,null,null,null,null)),(n()(),t.Cb(21,null,["",""]))],function(n,o){n(o,13,0,o.context.$implicit.src)},function(n,o){n(o,6,0,o.context.$implicit.date),n(o,8,0,o.context.$implicit.time),n(o,15,0,o.context.$implicit.operUsrNam),n(o,17,0,o.context.$implicit.nodeSht),n(o,19,0,o.context.$implicit.operContent||"\u65e0"),n(o,21,0,o.context.$implicit.operNam)})}function m(n){return t.Db(0,[(n()(),t.ob(0,0,null,null,17,"ion-card",[["class","card-content"]],null,null,null,a.M,a.d)),t.nb(1,49152,null,0,i.m,[t.h,t.k],null,null),(n()(),t.ob(2,0,null,0,15,"ion-card-content",[["class","card-content-node"]],null,null,null,a.J,a.e)),t.nb(3,49152,null,0,i.n,[t.h,t.k],null,null),(n()(),t.ob(4,0,null,0,4,"div",[["class","div-content-date"]],null,null,null,null,null)),(n()(),t.ob(5,0,null,null,1,"p",[["class","p-date"]],null,null,null,null,null)),(n()(),t.Cb(6,null,["",""])),(n()(),t.ob(7,0,null,null,1,"p",[["class","p-time"]],null,null,null,null,null)),(n()(),t.Cb(8,null,["",""])),(n()(),t.ob(9,0,null,0,0,"div",[["class","div-line"]],null,null,null,null,null)),(n()(),t.ob(10,0,null,0,0,"img",[["class","img-icon-arrow"],["src","./assets/icon/workflow_curnode.png"]],null,null,null,null,null)),(n()(),t.ob(11,0,null,0,6,"div",[["class","div-history-info-content"]],null,null,null,null,null)),(n()(),t.ob(12,0,null,null,1,"ion-img",[["class","img-user"]],null,[[null,"ionError"]],function(n,o,l){var t=!0;return"ionError"===o&&(t=!1!==n.component.imageIonError(l)&&t),t},a.U,a.o)),t.nb(13,49152,null,0,i.D,[t.h,t.k],{src:[0,"src"]},null),(n()(),t.ob(14,0,null,null,1,"span",[["class","span-name-operation"]],null,null,null,null,null)),(n()(),t.Cb(15,null,["",""])),(n()(),t.ob(16,0,null,null,1,"span",[["class","span-node"]],null,null,null,null,null)),(n()(),t.Cb(17,null,["",""]))],function(n,o){n(o,13,0,o.context.$implicit.src)},function(n,o){n(o,6,0,o.context.$implicit.date),n(o,8,0,o.context.$implicit.time),n(o,15,0,o.context.$implicit.operUsrNam),n(o,17,0,("1"==o.context.$implicit.isaviso?"\u77e5\u4f1a\u8282\u70b9\uff1a":"\u5f53\u524d\u8282\u70b9\uff1a")+o.context.$implicit.nodeSht)})}function h(n){return t.Db(0,[t.Ab(402653184,1,{content:0}),(n()(),t.ob(1,0,null,null,11,"ion-content",[["color","white"]],null,null,null,a.P,a.j)),t.nb(2,49152,[[1,4],["content",4]],0,i.u,[t.h,t.k],{color:[0,"color"]},null),(n()(),t.ob(3,0,null,0,9,"ion-item-group",[["class","group-content"]],null,null,null,a.Z,a.u)),t.nb(4,49152,null,0,i.J,[t.h,t.k],null,null),(n()(),t.ob(5,0,null,0,3,"ion-item-divider",[["class","segmented-divider"],["sticky",""]],null,null,null,a.Y,a.t)),t.nb(6,49152,null,0,i.I,[t.h,t.k],{sticky:[0,"sticky"]},null),(n()(),t.ob(7,0,null,0,1,"span",[["class","span-header-title"]],null,null,null,null,null)),(n()(),t.Cb(-1,null,[" \u6d41\u7a0b\u4fe1\u606f "])),(n()(),t.fb(16777216,null,0,1,null,g)),t.nb(10,278528,null,0,s.h,[t.N,t.K,t.s],{ngForOf:[0,"ngForOf"]},null),(n()(),t.fb(16777216,null,0,1,null,m)),t.nb(12,278528,null,0,s.h,[t.N,t.K,t.s],{ngForOf:[0,"ngForOf"]},null)],function(n,o){var l=o.component;n(o,2,0,"white"),n(o,6,0,""),n(o,10,0,l.historyNodes),n(o,12,0,l.currentNodes)},null)}function x(n){return t.Db(0,[(n()(),t.ob(0,0,null,null,1,"history",[],null,null,null,h,b)),t.nb(1,114688,null,0,r,[d.m,d.a,i.Hb,p.a,f.a,e.a],null,null)],function(n,o){n(o,1,0)},null)}var w=t.kb("history",r,x,{},{},[]),C=l("gIcY");l.d(o,"HistoryPageModuleNgFactory",function(){return k});var k=t.lb(c,[],function(n){return t.vb([t.wb(512,t.j,t.ab,[[8,[u.a,w]],[3,t.j],t.x]),t.wb(4608,s.k,s.j,[t.u,[2,s.q]]),t.wb(4608,C.k,C.k,[]),t.wb(4608,i.c,i.c,[t.z,t.g]),t.wb(4608,i.Gb,i.Gb,[i.c,t.j,t.q,s.c]),t.wb(4608,i.Jb,i.Jb,[i.c,t.j,t.q,s.c]),t.wb(1073742336,s.b,s.b,[]),t.wb(1073742336,C.i,C.i,[]),t.wb(1073742336,C.b,C.b,[]),t.wb(1073742336,i.Db,i.Db,[]),t.wb(1073742336,d.n,d.n,[[2,d.t],[2,d.m]]),t.wb(1073742336,c,c,[]),t.wb(1024,d.k,function(){return[[{path:"",component:r}]]},[])])})}}]);