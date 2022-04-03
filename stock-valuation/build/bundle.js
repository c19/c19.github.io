var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function r(t){t.forEach(e)}function o(t){return"function"==typeof t}function u(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function c(t,e){t.appendChild(e)}function i(t,e,n){t.insertBefore(e,n||null)}function s(t){t.parentNode.removeChild(t)}function l(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function a(t){return document.createElement(t)}function _(t){return document.createTextNode(t)}function f(){return _(" ")}function d(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function h(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function m(t){return""===t?null:+t}function p(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function g(t,e){t.value=null==e?"":e}let v;function $(t){v=t}const x=[],y=[],b=[],w=[],F=Promise.resolve();let k=!1;function C(t){b.push(t)}const E=new Set;let A=0;function z(){const t=v;do{for(;A<x.length;){const t=x[A];A++,$(t),M(t.$$)}for($(null),x.length=0,A=0;y.length;)y.pop()();for(let t=0;t<b.length;t+=1){const e=b[t];E.has(e)||(E.add(e),e())}b.length=0}while(x.length);for(;w.length;)w.pop()();k=!1,E.clear(),$(t)}function M(t){if(null!==t.fragment){t.update(),r(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(C)}}const j=new Set;function L(t,e){t&&t.i&&(j.delete(t),t.i(e))}function N(t,e,n,r){if(t&&t.o){if(j.has(t))return;j.add(t),undefined.c.push((()=>{j.delete(t),r&&(n&&t.d(1),r())})),t.o(e)}}function O(t){t&&t.c()}function T(t,n,u,c){const{fragment:i,on_mount:s,on_destroy:l,after_update:a}=t.$$;i&&i.m(n,u),c||C((()=>{const n=s.map(e).filter(o);l?l.push(...n):r(n),t.$$.on_mount=[]})),a.forEach(C)}function D(t,e){const n=t.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function P(t,e){-1===t.$$.dirty[0]&&(x.push(t),k||(k=!0,F.then(z)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function S(e,o,u,c,i,l,a,_=[-1]){const f=v;$(e);const d=e.$$={fragment:null,ctx:null,props:l,update:t,not_equal:i,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(o.context||(f?f.$$.context:[])),callbacks:n(),dirty:_,skip_bound:!1,root:o.target||f.$$.root};a&&a(d.root);let h=!1;if(d.ctx=u?u(e,o.props||{},((t,n,...r)=>{const o=r.length?r[0]:n;return d.ctx&&i(d.ctx[t],d.ctx[t]=o)&&(!d.skip_bound&&d.bound[t]&&d.bound[t](o),h&&P(e,t)),n})):[],d.update(),h=!0,r(d.before_update),d.fragment=!!c&&c(d.ctx),o.target){if(o.hydrate){const t=function(t){return Array.from(t.childNodes)}(o.target);d.fragment&&d.fragment.l(t),t.forEach(s)}else d.fragment&&d.fragment.c();o.intro&&L(e.$$.fragment),T(e,o.target,o.anchor,o.customElement),z()}$(f)}class q{$destroy(){D(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function B(e){let n,o,u,l,p,v,$,x,y,b,w,F,k,C,E,A,z,M,j,L,N,O,T,D,P,S,q,B,G,H,W,I,J,K,Q,R,U,V,X,Y,Z,tt,et,nt,rt,ot,ut,ct,it,st;return{c(){n=a("div"),o=a("label"),u=_("名称\n\t\t"),l=a("input"),p=f(),v=a("label"),$=_("代码\n\t\t"),x=a("input"),y=f(),b=a("label"),w=_("现价\n\t\t"),F=a("input"),k=f(),C=a("label"),E=_("股份数\n\t\t"),A=a("input"),z=f(),M=a("label"),j=_("当前营收\n\t\t"),L=a("input"),N=f(),O=a("label"),T=_("当前营收增长率\n\t\t"),D=a("input"),P=f(),S=a("label"),q=_("当前净利润\n\t\t"),B=a("input"),G=f(),H=a("label"),W=_("假定营收增长率\n\t\t"),I=a("input"),J=f(),K=a("label"),Q=_("假定终止营收增长率(一般设为远期GDP增长率)\n\t\t"),R=a("input"),U=f(),V=a("label"),X=_("假定折现率(一般为WACC,简单起见设为10%)\n\t\t"),Y=a("input"),Z=f(),tt=a("label"),et=_("假定净利率\n\t\t"),nt=a("input"),rt=f(),ot=a("label"),ut=_("假定高增长年限\n\t\t"),ct=a("input"),h(F,"type","number"),h(A,"type","number"),h(L,"type","number"),h(D,"type","number"),h(B,"type","number"),h(I,"type","number"),h(R,"type","number"),h(Y,"type","number"),h(nt,"type","number"),h(ct,"type","number")},m(t,r){i(t,n,r),c(n,o),c(o,u),c(o,l),g(l,e[0].name),c(n,p),c(n,v),c(v,$),c(v,x),g(x,e[0].code),c(n,y),c(n,b),c(b,w),c(b,F),g(F,e[0].current_price),c(n,k),c(n,C),c(C,E),c(C,A),g(A,e[0].shares),c(n,z),c(n,M),c(M,j),c(M,L),g(L,e[0].current_revenue),c(n,N),c(n,O),c(O,T),c(O,D),g(D,e[0].current_revenue_growth),c(n,P),c(n,S),c(S,q),c(S,B),g(B,e[0].current_net_income),c(n,G),c(n,H),c(H,W),c(H,I),g(I,e[0].assumptions.revenue_growth_rate),c(n,J),c(n,K),c(K,Q),c(K,R),g(R,e[0].assumptions.terminal_growth_rate),c(n,U),c(n,V),c(V,X),c(V,Y),g(Y,e[0].assumptions.discount_rate),c(n,Z),c(n,tt),c(tt,et),c(tt,nt),g(nt,e[0].assumptions.net_margin),c(n,rt),c(n,ot),c(ot,ut),c(ot,ct),g(ct,e[0].assumptions.growth_year_count),it||(st=[d(l,"input",e[1]),d(x,"input",e[2]),d(F,"input",e[3]),d(A,"input",e[4]),d(L,"input",e[5]),d(D,"input",e[6]),d(B,"input",e[7]),d(I,"input",e[8]),d(R,"input",e[9]),d(Y,"input",e[10]),d(nt,"input",e[11]),d(ct,"input",e[12])],it=!0)},p(t,[e]){1&e&&l.value!==t[0].name&&g(l,t[0].name),1&e&&x.value!==t[0].code&&g(x,t[0].code),1&e&&m(F.value)!==t[0].current_price&&g(F,t[0].current_price),1&e&&m(A.value)!==t[0].shares&&g(A,t[0].shares),1&e&&m(L.value)!==t[0].current_revenue&&g(L,t[0].current_revenue),1&e&&m(D.value)!==t[0].current_revenue_growth&&g(D,t[0].current_revenue_growth),1&e&&m(B.value)!==t[0].current_net_income&&g(B,t[0].current_net_income),1&e&&m(I.value)!==t[0].assumptions.revenue_growth_rate&&g(I,t[0].assumptions.revenue_growth_rate),1&e&&m(R.value)!==t[0].assumptions.terminal_growth_rate&&g(R,t[0].assumptions.terminal_growth_rate),1&e&&m(Y.value)!==t[0].assumptions.discount_rate&&g(Y,t[0].assumptions.discount_rate),1&e&&m(nt.value)!==t[0].assumptions.net_margin&&g(nt,t[0].assumptions.net_margin),1&e&&m(ct.value)!==t[0].assumptions.growth_year_count&&g(ct,t[0].assumptions.growth_year_count)},i:t,o:t,d(t){t&&s(n),it=!1,r(st)}}}function G(t,e,n){let{stock:r={name:"",code:"",current_price:1,shares:1,current_revenue:1,current_revenue_growth:1,current_net_income:1,assumptions:{revenue_growth_rate:1,terminal_growth_rate:1,discount_rate:1,net_margin:1,growth_year_count:1}}}=e;return t.$$set=t=>{"stock"in t&&n(0,r=t.stock)},[r,function(){r.name=this.value,n(0,r)},function(){r.code=this.value,n(0,r)},function(){r.current_price=m(this.value),n(0,r)},function(){r.shares=m(this.value),n(0,r)},function(){r.current_revenue=m(this.value),n(0,r)},function(){r.current_revenue_growth=m(this.value),n(0,r)},function(){r.current_net_income=m(this.value),n(0,r)},function(){r.assumptions.revenue_growth_rate=m(this.value),n(0,r)},function(){r.assumptions.terminal_growth_rate=m(this.value),n(0,r)},function(){r.assumptions.discount_rate=m(this.value),n(0,r)},function(){r.assumptions.net_margin=m(this.value),n(0,r)},function(){r.assumptions.growth_year_count=m(this.value),n(0,r)}]}class H extends q{constructor(t){super(),S(this,t,G,B,u,{stock:0})}}function W(t){let e=Array(t.assumptions.growth_year_count).fill(t.assumptions.revenue_growth_rate),n=function(t,e){let n=Array(e.length);var r=t;for(var o in e)r*=1+e[o],n[o]=r;return n}(t.current_revenue,e),r=n.map((e=>e*t.assumptions.net_margin)),o=r.map(((e,n)=>e/Math.pow(1+t.assumptions.discount_rate,n+1))),u=r[r.length-1]*(1+t.assumptions.revenue_growth_rate)/(t.assumptions.discount_rate-t.assumptions.terminal_growth_rate),c=u/Math.pow(1+t.assumptions.discount_rate,t.assumptions.growth_year_count+1),i=o.reduce(((t,e)=>t+e),0)+c;return{revenue_growth_rates:e,revenue_array:n,net_income_array:r,dcf_array:o,cf_terminal_value:u,dcf_terminal_value:c,dcf_total:i,dcf_value:i/t.shares}}function I(t,e,n){const r=t.slice();return r[2]=e[n],r[4]=n,r}function J(t,e,n){const r=t.slice();return r[5]=e[n],r[4]=n,r}function K(t,e,n){const r=t.slice();return r[5]=e[n],r[4]=n,r}function Q(t,e,n){const r=t.slice();return r[8]=e[n],r[4]=n,r}function R(t,e,n){const r=t.slice();return r[10]=e[n],r[4]=n,r}function U(t,e,n){const r=t.slice();return r[12]=e[n],r[4]=n,r}function V(e){let n,r,o=2022+e[4]+1+"";return{c(){n=a("th"),r=_(o)},m(t,e){i(t,n,e),c(n,r)},p:t,d(t){t&&s(n)}}}function X(t){let e,n,r=t[10].toFixed(0)+"";return{c(){e=a("td"),n=_(r)},m(t,r){i(t,e,r),c(e,n)},p(t,e){2&e&&r!==(r=t[10].toFixed(0)+"")&&p(n,r)},d(t){t&&s(e)}}}function Y(t){let e,n,r,o=(100*t[8]).toFixed(2)+"";return{c(){e=a("td"),n=_(o),r=_("%")},m(t,o){i(t,e,o),c(e,n),c(e,r)},p(t,e){2&e&&o!==(o=(100*t[8]).toFixed(2)+"")&&p(n,o)},d(t){t&&s(e)}}}function Z(t){let e,n,r=t[5].toFixed(0)+"";return{c(){e=a("td"),n=_(r)},m(t,r){i(t,e,r),c(e,n)},p(t,e){2&e&&r!==(r=t[5].toFixed(0)+"")&&p(n,r)},d(t){t&&s(e)}}}function tt(t){let e,n,r,o=(100*t[0].assumptions.net_margin).toFixed(2)+"";return{c(){e=a("td"),n=_(o),r=_("%")},m(t,o){i(t,e,o),c(e,n),c(e,r)},p(t,e){1&e&&o!==(o=(100*t[0].assumptions.net_margin).toFixed(2)+"")&&p(n,o)},d(t){t&&s(e)}}}function et(t){let e,n,r=t[2].toFixed(0)+"";return{c(){e=a("td"),n=_(r)},m(t,r){i(t,e,r),c(e,n)},p(t,e){2&e&&r!==(r=t[2].toFixed(0)+"")&&p(n,r)},d(t){t&&s(e)}}}function nt(e){let n,r,o,u,d,h,m,g,v,$,x,y,b,w,F,k,C,E,A,z,M,j,L,N,O,T,D,P,S,q,B,G,H,W,nt,rt,ot,ut,ct,it,st,lt,at,_t,ft,dt,ht,mt,pt,gt,vt,$t,xt,yt,bt,wt,Ft,kt,Ct,Et,At,zt,Mt=e[0].current_revenue.toFixed(0)+"",jt=(100*e[0].current_revenue_growth).toFixed(2)+"",Lt=e[0].current_net_income.toFixed(0)+"",Nt=(e[0].current_net_income/e[0].current_revenue*100).toFixed(2)+"",Ot=e[0].current_net_income.toFixed(0)+"",Tt=e[1].dcf_terminal_value.toFixed(0)+"",Dt=e[1].dcf_total.toFixed(0)+"",Pt=e[1].dcf_value.toFixed(0)+"",St=e[1].revenue_array,qt=[];for(let t=0;t<St.length;t+=1)qt[t]=V(U(e,St,t));let Bt=e[1].revenue_array,Gt=[];for(let t=0;t<Bt.length;t+=1)Gt[t]=X(R(e,Bt,t));let Ht=e[1].revenue_growth_rates,Wt=[];for(let t=0;t<Ht.length;t+=1)Wt[t]=Y(Q(e,Ht,t));let It=e[1].net_income_array,Jt=[];for(let t=0;t<It.length;t+=1)Jt[t]=Z(K(e,It,t));let Kt=e[1].net_income_array,Qt=[];for(let t=0;t<Kt.length;t+=1)Qt[t]=tt(J(e,Kt,t));let Rt=e[1].dcf_array,Ut=[];for(let t=0;t<Rt.length;t+=1)Ut[t]=et(I(e,Rt,t));return{c(){n=a("table"),r=a("thead"),o=a("th"),o.textContent="指标",u=f(),d=a("th"),d.textContent="2022",h=f();for(let t=0;t<qt.length;t+=1)qt[t].c();m=f(),g=a("tbody"),v=a("tr"),$=a("td"),$.textContent="总营收",x=f(),y=a("td"),b=_(Mt),w=f();for(let t=0;t<Gt.length;t+=1)Gt[t].c();F=f(),k=a("tr"),C=a("td"),C.textContent="总营收增长率",E=f(),A=a("td"),z=_(jt),M=_("%"),j=f();for(let t=0;t<Wt.length;t+=1)Wt[t].c();L=f(),N=a("tr"),O=a("td"),O.textContent="净利润",T=f(),D=a("td"),P=_(Lt),S=f();for(let t=0;t<Jt.length;t+=1)Jt[t].c();q=f(),B=a("tr"),G=a("td"),G.textContent="净利润率",H=f(),W=a("td"),nt=_(Nt),rt=_("%"),ot=f();for(let t=0;t<Qt.length;t+=1)Qt[t].c();ut=f(),ct=a("tr"),it=a("td"),it.textContent="净利润流折现价值",st=f(),lt=a("td"),at=_(Ot),_t=f();for(let t=0;t<Ut.length;t+=1)Ut[t].c();ft=f(),dt=a("tr"),ht=a("td"),ht.textContent="净利润流终值",mt=f(),pt=a("td"),gt=_(Tt),vt=f(),$t=a("tr"),xt=a("td"),xt.textContent="净利润流折现价值总计",yt=f(),bt=a("td"),wt=_(Dt),Ft=f(),kt=a("tr"),Ct=a("td"),Ct.textContent="每股净利润流折现价值",Et=f(),At=a("td"),zt=_(Pt)},m(t,e){i(t,n,e),c(n,r),c(r,o),c(r,u),c(r,d),c(r,h);for(let t=0;t<qt.length;t+=1)qt[t].m(r,null);c(n,m),c(n,g),c(g,v),c(v,$),c(v,x),c(v,y),c(y,b),c(v,w);for(let t=0;t<Gt.length;t+=1)Gt[t].m(v,null);c(g,F),c(g,k),c(k,C),c(k,E),c(k,A),c(A,z),c(A,M),c(k,j);for(let t=0;t<Wt.length;t+=1)Wt[t].m(k,null);c(g,L),c(g,N),c(N,O),c(N,T),c(N,D),c(D,P),c(N,S);for(let t=0;t<Jt.length;t+=1)Jt[t].m(N,null);c(g,q),c(g,B),c(B,G),c(B,H),c(B,W),c(W,nt),c(W,rt),c(B,ot);for(let t=0;t<Qt.length;t+=1)Qt[t].m(B,null);c(g,ut),c(g,ct),c(ct,it),c(ct,st),c(ct,lt),c(lt,at),c(ct,_t);for(let t=0;t<Ut.length;t+=1)Ut[t].m(ct,null);c(g,ft),c(g,dt),c(dt,ht),c(dt,mt),c(dt,pt),c(pt,gt),c(g,vt),c(g,$t),c($t,xt),c($t,yt),c($t,bt),c(bt,wt),c(g,Ft),c(g,kt),c(kt,Ct),c(kt,Et),c(kt,At),c(At,zt)},p(t,[e]){if(2&e){let n;for(St=t[1].revenue_array,n=0;n<St.length;n+=1){const o=U(t,St,n);qt[n]?qt[n].p(o,e):(qt[n]=V(o),qt[n].c(),qt[n].m(r,null))}for(;n<qt.length;n+=1)qt[n].d(1);qt.length=St.length}if(1&e&&Mt!==(Mt=t[0].current_revenue.toFixed(0)+"")&&p(b,Mt),2&e){let n;for(Bt=t[1].revenue_array,n=0;n<Bt.length;n+=1){const r=R(t,Bt,n);Gt[n]?Gt[n].p(r,e):(Gt[n]=X(r),Gt[n].c(),Gt[n].m(v,null))}for(;n<Gt.length;n+=1)Gt[n].d(1);Gt.length=Bt.length}if(1&e&&jt!==(jt=(100*t[0].current_revenue_growth).toFixed(2)+"")&&p(z,jt),2&e){let n;for(Ht=t[1].revenue_growth_rates,n=0;n<Ht.length;n+=1){const r=Q(t,Ht,n);Wt[n]?Wt[n].p(r,e):(Wt[n]=Y(r),Wt[n].c(),Wt[n].m(k,null))}for(;n<Wt.length;n+=1)Wt[n].d(1);Wt.length=Ht.length}if(1&e&&Lt!==(Lt=t[0].current_net_income.toFixed(0)+"")&&p(P,Lt),2&e){let n;for(It=t[1].net_income_array,n=0;n<It.length;n+=1){const r=K(t,It,n);Jt[n]?Jt[n].p(r,e):(Jt[n]=Z(r),Jt[n].c(),Jt[n].m(N,null))}for(;n<Jt.length;n+=1)Jt[n].d(1);Jt.length=It.length}if(1&e&&Nt!==(Nt=(t[0].current_net_income/t[0].current_revenue*100).toFixed(2)+"")&&p(nt,Nt),3&e){let n;for(Kt=t[1].net_income_array,n=0;n<Kt.length;n+=1){const r=J(t,Kt,n);Qt[n]?Qt[n].p(r,e):(Qt[n]=tt(r),Qt[n].c(),Qt[n].m(B,null))}for(;n<Qt.length;n+=1)Qt[n].d(1);Qt.length=Kt.length}if(1&e&&Ot!==(Ot=t[0].current_net_income.toFixed(0)+"")&&p(at,Ot),2&e){let n;for(Rt=t[1].dcf_array,n=0;n<Rt.length;n+=1){const r=I(t,Rt,n);Ut[n]?Ut[n].p(r,e):(Ut[n]=et(r),Ut[n].c(),Ut[n].m(ct,null))}for(;n<Ut.length;n+=1)Ut[n].d(1);Ut.length=Rt.length}2&e&&Tt!==(Tt=t[1].dcf_terminal_value.toFixed(0)+"")&&p(gt,Tt),2&e&&Dt!==(Dt=t[1].dcf_total.toFixed(0)+"")&&p(wt,Dt),2&e&&Pt!==(Pt=t[1].dcf_value.toFixed(0)+"")&&p(zt,Pt)},i:t,o:t,d(t){t&&s(n),l(qt,t),l(Gt,t),l(Wt,t),l(Jt,t),l(Qt,t),l(Ut,t)}}}function rt(t,e,n){let r,{stock:o}=e;return t.$$set=t=>{"stock"in t&&n(0,o=t.stock)},t.$$.update=()=>{1&t.$$.dirty&&n(1,r=W(o))},[o,r]}class ot extends q{constructor(t){super(),S(this,t,rt,nt,u,{stock:0})}}function ut(t){let e,n,r,o,u,l,_,d,m,p;function g(e){t[1](e)}let v={};return void 0!==t[0]&&(v.stock=t[0]),u=new H({props:v}),y.push((()=>function(t,e,n){const r=t.$$.props[e];void 0!==r&&(t.$$.bound[r]=n,n(t.$$.ctx[r]))}(u,"stock",g))),m=new ot({props:{stock:t[0]}}),{c(){e=a("div"),n=a("div"),n.innerHTML='<h1 class="svelte-1v0nztx">股票估值(DCF)</h1>',r=f(),o=a("div"),O(u.$$.fragment),_=f(),d=a("div"),O(m.$$.fragment),h(n,"class","header svelte-1v0nztx"),h(o,"class","content svelte-1v0nztx"),h(e,"class","main svelte-1v0nztx")},m(t,s){i(t,e,s),c(e,n),c(e,r),c(e,o),T(u,o,null),c(o,_),c(o,d),T(m,d,null),p=!0},p(t,[e]){const n={};var r;!l&&1&e&&(l=!0,n.stock=t[0],r=()=>l=!1,w.push(r)),u.$set(n);const o={};1&e&&(o.stock=t[0]),m.$set(o)},i(t){p||(L(u.$$.fragment,t),L(m.$$.fragment,t),p=!0)},o(t){N(u.$$.fragment,t),N(m.$$.fragment,t),p=!1},d(t){t&&s(e),D(u),D(m)}}}function ct(t,e,n){let r={name:"海大集团",code:"002311",current_price:54.26,shares:1661,current_revenue:60320,current_revenue_growth:.15,current_net_income:2460,assumptions:{revenue_growth_rate:.15,terminal_growth_rate:.03,discount_rate:.1,net_margin:.04,growth_year_count:7}};return[r,function(t){r=t,n(0,r)}]}return new class extends q{constructor(t){super(),S(this,t,ct,ut,u,{})}}({target:document.body,props:{}})}();
//# sourceMappingURL=bundle.js.map
