(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))o(c);new MutationObserver(c=>{for(const y of c)if(y.type==="childList")for(const p of y.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&o(p)}).observe(document,{childList:!0,subtree:!0});function a(c){const y={};return c.integrity&&(y.integrity=c.integrity),c.referrerpolicy&&(y.referrerPolicy=c.referrerpolicy),c.crossorigin==="use-credentials"?y.credentials="include":c.crossorigin==="anonymous"?y.credentials="omit":y.credentials="same-origin",y}function o(c){if(c.ep)return;c.ep=!0;const y=a(c);fetch(c.href,y)}})();function fe(){}function Sl(l){return l()}function bl(){return Object.create(null)}function ut(l){l.forEach(Sl)}function xl(l){return typeof l=="function"}function ft(l,t){return l!=l?t==t:l!==t||l&&typeof l=="object"||typeof l=="function"}let kt;function Al(l,t){return kt||(kt=document.createElement("a")),kt.href=t,l===kt.href}function wl(l){return Object.keys(l).length===0}let xt=!1;function Nl(){xt=!0}function Gl(){xt=!1}function Tl(l,t,a,o){for(;l<t;){const c=l+(t-l>>1);a(c)<=o?l=c+1:t=c}return l}function jl(l){if(l.hydrate_init)return;l.hydrate_init=!0;let t=l.childNodes;if(l.nodeName==="HEAD"){const g=[];for(let E=0;E<t.length;E++){const x=t[E];x.claim_order!==void 0&&g.push(x)}t=g}const a=new Int32Array(t.length+1),o=new Int32Array(t.length);a[0]=-1;let c=0;for(let g=0;g<t.length;g++){const E=t[g].claim_order,x=(c>0&&t[a[c]].claim_order<=E?c+1:Tl(1,c,T=>t[a[T]].claim_order,E))-1;o[g]=a[x]+1;const b=x+1;a[b]=g,c=Math.max(b,c)}const y=[],p=[];let _=t.length-1;for(let g=a[c]+1;g!=0;g=o[g-1]){for(y.push(t[g-1]);_>=g;_--)p.push(t[_]);_--}for(;_>=0;_--)p.push(t[_]);y.reverse(),p.sort((g,E)=>g.claim_order-E.claim_order);for(let g=0,E=0;g<p.length;g++){for(;E<y.length&&p[g].claim_order>=y[E].claim_order;)E++;const x=E<y.length?y[E]:null;l.insertBefore(p[g],x)}}function e(l,t){if(xt){for(jl(l),(l.actual_end_child===void 0||l.actual_end_child!==null&&l.actual_end_child.parentNode!==l)&&(l.actual_end_child=l.firstChild);l.actual_end_child!==null&&l.actual_end_child.claim_order===void 0;)l.actual_end_child=l.actual_end_child.nextSibling;t!==l.actual_end_child?(t.claim_order!==void 0||t.parentNode!==l)&&l.insertBefore(t,l.actual_end_child):l.actual_end_child=t.nextSibling}else(t.parentNode!==l||t.nextSibling!==null)&&l.appendChild(t)}function A(l,t,a){xt&&!a?e(l,t):(t.parentNode!==l||t.nextSibling!=a)&&l.insertBefore(t,a||null)}function r(l){l.parentNode&&l.parentNode.removeChild(l)}function s(l){return document.createElement(l)}function u(l){return document.createTextNode(l)}function v(){return u(" ")}function at(l,t,a,o){return l.addEventListener(t,a,o),()=>l.removeEventListener(t,a,o)}function gt(l){return function(t){return t.preventDefault(),l.call(this,t)}}function h(l,t,a){a==null?l.removeAttribute(t):l.getAttribute(t)!==a&&l.setAttribute(t,a)}function n(l){return Array.from(l.childNodes)}function Cl(l){l.claim_info===void 0&&(l.claim_info={last_index:0,total_claimed:0})}function Il(l,t,a,o,c=!1){Cl(l);const y=(()=>{for(let p=l.claim_info.last_index;p<l.length;p++){const _=l[p];if(t(_)){const g=a(_);return g===void 0?l.splice(p,1):l[p]=g,c||(l.claim_info.last_index=p),_}}for(let p=l.claim_info.last_index-1;p>=0;p--){const _=l[p];if(t(_)){const g=a(_);return g===void 0?l.splice(p,1):l[p]=g,c?g===void 0&&l.claim_info.last_index--:l.claim_info.last_index=p,_}}return o()})();return y.claim_order=l.claim_info.total_claimed,l.claim_info.total_claimed+=1,y}function Dl(l,t,a,o){return Il(l,c=>c.nodeName===t,c=>{const y=[];for(let p=0;p<c.attributes.length;p++){const _=c.attributes[p];a[_.name]||y.push(_.name)}y.forEach(p=>c.removeAttribute(p))},()=>o(t))}function i(l,t,a){return Dl(l,t,a,s)}function f(l,t){return Il(l,a=>a.nodeType===3,a=>{const o=""+t;if(a.data.startsWith(o)){if(a.data.length!==o.length)return a.splitText(o.length)}else a.data=o},()=>u(t),!0)}function m(l){return f(l," ")}let Bt;function Et(l){Bt=l}const ct=[],kl=[],Lt=[],Ll=[],Pl=Promise.resolve();let Rt=!1;function Rl(){Rt||(Rt=!0,Pl.then($l))}function Ot(l){Lt.push(l)}const Pt=new Set;let ot=0;function $l(){if(ot!==0)return;const l=Bt;do{try{for(;ot<ct.length;){const t=ct[ot];ot++,Et(t),Ol(t.$$)}}catch(t){throw ct.length=0,ot=0,t}for(Et(null),ct.length=0,ot=0;kl.length;)kl.pop()();for(let t=0;t<Lt.length;t+=1){const a=Lt[t];Pt.has(a)||(Pt.add(a),a())}Lt.length=0}while(ct.length);for(;Ll.length;)Ll.pop()();Rt=!1,Pt.clear(),Et(l)}function Ol(l){if(l.fragment!==null){l.update(),ut(l.before_update);const t=l.dirty;l.dirty=[-1],l.fragment&&l.fragment.p(l.ctx,t),l.after_update.forEach(Ot)}}const St=new Set;let We;function Bl(){We={r:0,c:[],p:We}}function Ml(){We.r||ut(We.c),We=We.p}function Fe(l,t){l&&l.i&&(St.delete(l),l.i(t))}function qe(l,t,a,o){if(l&&l.o){if(St.has(l))return;St.add(l),We.c.push(()=>{St.delete(l),o&&(a&&l.d(1),o())}),l.o(t)}else o&&o()}function yt(l){l&&l.c()}function bt(l,t){l&&l.l(t)}function ht(l,t,a,o){const{fragment:c,after_update:y}=l.$$;c&&c.m(t,a),o||Ot(()=>{const p=l.$$.on_mount.map(Sl).filter(xl);l.$$.on_destroy?l.$$.on_destroy.push(...p):ut(p),l.$$.on_mount=[]}),y.forEach(Ot)}function dt(l,t){const a=l.$$;a.fragment!==null&&(ut(a.on_destroy),a.fragment&&a.fragment.d(t),a.on_destroy=a.fragment=null,a.ctx=[])}function Hl(l,t){l.$$.dirty[0]===-1&&(ct.push(l),Rl(),l.$$.dirty.fill(0)),l.$$.dirty[t/31|0]|=1<<t%31}function _t(l,t,a,o,c,y,p,_=[-1]){const g=Bt;Et(l);const E=l.$$={fragment:null,ctx:[],props:y,update:fe,not_equal:c,bound:bl(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(g?g.$$.context:[])),callbacks:bl(),dirty:_,skip_bound:!1,root:t.target||g.$$.root};p&&p(E.root);let x=!1;if(E.ctx=a?a(l,t.props||{},(b,T,...C)=>{const $=C.length?C[0]:T;return E.ctx&&c(E.ctx[b],E.ctx[b]=$)&&(!E.skip_bound&&E.bound[b]&&E.bound[b]($),x&&Hl(l,b)),T}):[],E.update(),x=!0,ut(E.before_update),E.fragment=o?o(E.ctx):!1,t.target){if(t.hydrate){Nl();const b=n(t.target);E.fragment&&E.fragment.l(b),b.forEach(r)}else E.fragment&&E.fragment.c();t.intro&&Fe(l.$$.fragment),ht(l,t.target,t.anchor,t.customElement),Gl(),$l()}Et(g)}class vt{$destroy(){dt(this,1),this.$destroy=fe}$on(t,a){if(!xl(a))return fe;const o=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return o.push(a),()=>{const c=o.indexOf(a);c!==-1&&o.splice(c,1)}}$set(t){this.$$set&&!wl(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function zl(l){let t,a,o,c,y,p,_,g,E,x,b,T,C,$,V,B,L,M,w,D,se,U,I,W,ee,R,H,te,le,F,K,oe;return{c(){t=s("h2"),a=u("Skillz"),o=v(),c=s("p"),y=u("Javascript (and related frameworks)"),p=v(),_=s("p"),g=u("Stylez"),E=v(),x=s("p"),b=u("Github"),T=v(),C=s("p"),$=u("Telling other people how to Javascipt"),V=v(),B=s("p"),L=u("Databases SQL and no SQL"),M=v(),w=s("p"),D=u("Node and Express"),se=v(),U=s("p"),I=u("Worrying about security"),W=v(),ee=s("p"),R=u("REST"),H=v(),te=s("p"),le=u("Math"),F=v(),K=s("p"),oe=u("Chatting"),this.h()},l(d){t=i(d,"H2",{class:!0});var k=n(t);a=f(k,"Skillz"),k.forEach(r),o=m(d),c=i(d,"P",{});var re=n(c);y=f(re,"Javascript (and related frameworks)"),re.forEach(r),p=m(d),_=i(d,"P",{});var _e=n(_);g=f(_e,"Stylez"),_e.forEach(r),E=m(d),x=i(d,"P",{});var q=n(x);b=f(q,"Github"),q.forEach(r),T=m(d),C=i(d,"P",{});var P=n(C);$=f(P,"Telling other people how to Javascipt"),P.forEach(r),V=m(d),B=i(d,"P",{});var Y=n(B);L=f(Y,"Databases SQL and no SQL"),Y.forEach(r),M=m(d),w=i(d,"P",{});var Q=n(w);D=f(Q,"Node and Express"),Q.forEach(r),se=m(d),U=i(d,"P",{});var ne=n(U);I=f(ne,"Worrying about security"),ne.forEach(r),W=m(d),ee=i(d,"P",{});var he=n(ee);R=f(he,"REST"),he.forEach(r),H=m(d),te=i(d,"P",{});var ve=n(te);le=f(ve,"Math"),ve.forEach(r),F=m(d),K=i(d,"P",{});var z=n(K);oe=f(z,"Chatting"),z.forEach(r),this.h()},h(){h(t,"class","svelte-itamui")},m(d,k){A(d,t,k),e(t,a),A(d,o,k),A(d,c,k),e(c,y),A(d,p,k),A(d,_,k),e(_,g),A(d,E,k),A(d,x,k),e(x,b),A(d,T,k),A(d,C,k),e(C,$),A(d,V,k),A(d,B,k),e(B,L),A(d,M,k),A(d,w,k),e(w,D),A(d,se,k),A(d,U,k),e(U,I),A(d,W,k),A(d,ee,k),e(ee,R),A(d,H,k),A(d,te,k),e(te,le),A(d,F,k),A(d,K,k),e(K,oe)},p:fe,i:fe,o:fe,d(d){d&&r(t),d&&r(o),d&&r(c),d&&r(p),d&&r(_),d&&r(E),d&&r(x),d&&r(T),d&&r(C),d&&r(V),d&&r(B),d&&r(M),d&&r(w),d&&r(se),d&&r(U),d&&r(W),d&&r(ee),d&&r(H),d&&r(te),d&&r(F),d&&r(K)}}}class Fl extends vt{constructor(t){super(),_t(this,t,null,zl,ft,{})}}function Kl(l){let t,a,o,c,y,p,_,g,E,x,b,T,C,$,V,B,L,M;return{c(){t=s("ul"),a=s("li"),o=s("strong"),c=u("Email:"),y=u("rkelmsouthworth@gmail.com"),p=v(),_=s("li"),g=s("strong"),E=u("LinkedIn:"),x=v(),b=s("a"),T=u("www.linkedin.com/in/rachael-kelm-southworth-87a3831b3"),C=v(),$=s("li"),V=s("strong"),B=u("Github:"),L=s("a"),M=u("https://github.com/RKSouth"),this.h()},l(w){t=i(w,"UL",{class:!0});var D=n(t);a=i(D,"LI",{class:!0});var se=n(a);o=i(se,"STRONG",{});var U=n(o);c=f(U,"Email:"),U.forEach(r),y=f(se,"rkelmsouthworth@gmail.com"),se.forEach(r),p=m(D),_=i(D,"LI",{class:!0});var I=n(_);g=i(I,"STRONG",{});var W=n(g);E=f(W,"LinkedIn:"),W.forEach(r),x=m(I),b=i(I,"A",{href:!0,class:!0});var ee=n(b);T=f(ee,"www.linkedin.com/in/rachael-kelm-southworth-87a3831b3"),ee.forEach(r),I.forEach(r),C=m(D),$=i(D,"LI",{class:!0});var R=n($);V=i(R,"STRONG",{});var H=n(V);B=f(H,"Github:"),H.forEach(r),L=i(R,"A",{href:!0,class:!0});var te=n(L);M=f(te,"https://github.com/RKSouth"),te.forEach(r),R.forEach(r),D.forEach(r),this.h()},h(){h(a,"class","svelte-1fn49u9"),h(b,"href","https://www.linkedin.com/in/rachael-kelm-southworth-87a3831b3/"),h(b,"class","svelte-1fn49u9"),h(_,"class","svelte-1fn49u9"),h(L,"href","https://github.com/RKSouth"),h(L,"class","svelte-1fn49u9"),h($,"class","svelte-1fn49u9"),h(t,"class","svelte-1fn49u9")},m(w,D){A(w,t,D),e(t,a),e(a,o),e(o,c),e(a,y),e(t,p),e(t,_),e(_,g),e(g,E),e(_,x),e(_,b),e(b,T),e(t,C),e(t,$),e($,V),e(V,B),e($,L),e(L,M)},p:fe,i:fe,o:fe,d(w){w&&r(t)}}}class Ul extends vt{constructor(t){super(),_t(this,t,null,Kl,ft,{})}}function Jl(l){let t,a,o,c,y,p,_,g,E,x,b,T,C,$,V,B,L,M,w,D,se,U,I,W,ee,R,H,te,le,F,K,oe,d,k,re,_e,q,P,Y,Q,ne,he,ve,z,ge,j,N,ie,Ee,ke,X,ue,Le,Z,O,Se,pe,me,xe,be,ye;return{c(){t=s("h2"),a=u("A little about me..."),o=v(),c=s("h3"),y=u("I like:"),p=v(),_=s("ul"),g=s("li"),E=u("Playing relaxing video games like rimworld, civilization, and animal crossing"),x=v(),b=s("li"),T=u("Going on walks around the city"),C=v(),$=s("li"),V=u("Getting really comfortable"),B=v(),L=s("li"),M=u("Cooking and Eating good food"),w=v(),D=s("li"),se=u("Listening to good music"),U=v(),I=s("li"),W=u("Taking it easy with my family"),ee=v(),R=s("li"),H=u("Doing puzzles"),te=v(),le=s("li"),F=u("Any kind of arts and crafts"),K=v(),oe=s("li"),d=u("Making cool things with code"),k=v(),re=s("li"),_e=u("Talking about rules"),q=v(),P=s("li"),Y=u("Trying to be healthy"),Q=v(),ne=s("li"),he=u("Generally trying to make myself better than I was yesterday"),ve=v(),z=s("h3"),ge=u("I don't like:"),j=v(),N=s("ul"),ie=s("li"),Ee=u("Breaking the rules"),ke=v(),X=s("li"),ue=u("Building things poorly"),Le=v(),Z=s("li"),O=u("Hurting anyone"),Se=v(),pe=s("li"),me=u("Doing a Bad Job"),xe=v(),be=s("li"),ye=u("Being Sick"),this.h()},l(S){t=i(S,"H2",{class:!0});var ae=n(t);a=f(ae,"A little about me..."),ae.forEach(r),o=m(S),c=i(S,"H3",{class:!0});var $e=n(c);y=f($e,"I like:"),$e.forEach(r),p=m(S),_=i(S,"UL",{});var G=n(_);g=i(G,"LI",{});var Ie=n(g);E=f(Ie,"Playing relaxing video games like rimworld, civilization, and animal crossing"),Ie.forEach(r),x=m(G),b=i(G,"LI",{});var we=n(b);T=f(we,"Going on walks around the city"),we.forEach(r),C=m(G),$=i(G,"LI",{});var De=n($);V=f(De,"Getting really comfortable"),De.forEach(r),B=m(G),L=i(G,"LI",{});var Ne=n(L);M=f(Ne,"Cooking and Eating good food"),Ne.forEach(r),w=m(G),D=i(G,"LI",{});var Pe=n(D);se=f(Pe,"Listening to good music"),Pe.forEach(r),U=m(G),I=i(G,"LI",{});var Re=n(I);W=f(Re,"Taking it easy with my family"),Re.forEach(r),ee=m(G),R=i(G,"LI",{});var de=n(R);H=f(de,"Doing puzzles"),de.forEach(r),te=m(G),le=i(G,"LI",{});var Oe=n(le);F=f(Oe,"Any kind of arts and crafts"),Oe.forEach(r),K=m(G),oe=i(G,"LI",{});var Be=n(oe);d=f(Be,"Making cool things with code"),Be.forEach(r),k=m(G),re=i(G,"LI",{});var Ae=n(re);_e=f(Ae,"Talking about rules"),Ae.forEach(r),q=m(G),P=i(G,"LI",{});var Ge=n(P);Y=f(Ge,"Trying to be healthy"),Ge.forEach(r),Q=m(G),ne=i(G,"LI",{});var Me=n(ne);he=f(Me,"Generally trying to make myself better than I was yesterday"),Me.forEach(r),G.forEach(r),ve=m(S),z=i(S,"H3",{class:!0});var He=n(z);ge=f(He,"I don't like:"),He.forEach(r),j=m(S),N=i(S,"UL",{});var ce=n(N);ie=i(ce,"LI",{});var je=n(ie);Ee=f(je,"Breaking the rules"),je.forEach(r),ke=m(ce),X=i(ce,"LI",{});var Qe=n(X);ue=f(Qe,"Building things poorly"),Qe.forEach(r),Le=m(ce),Z=i(ce,"LI",{});var Xe=n(Z);O=f(Xe,"Hurting anyone"),Xe.forEach(r),Se=m(ce),pe=i(ce,"LI",{});var ze=n(pe);me=f(ze,"Doing a Bad Job"),ze.forEach(r),xe=m(ce),be=i(ce,"LI",{});var Ve=n(be);ye=f(Ve,"Being Sick"),Ve.forEach(r),ce.forEach(r),this.h()},h(){h(t,"class","svelte-nnz1j3"),h(c,"class","svelte-nnz1j3"),h(z,"class","svelte-nnz1j3")},m(S,ae){A(S,t,ae),e(t,a),A(S,o,ae),A(S,c,ae),e(c,y),A(S,p,ae),A(S,_,ae),e(_,g),e(g,E),e(_,x),e(_,b),e(b,T),e(_,C),e(_,$),e($,V),e(_,B),e(_,L),e(L,M),e(_,w),e(_,D),e(D,se),e(_,U),e(_,I),e(I,W),e(_,ee),e(_,R),e(R,H),e(_,te),e(_,le),e(le,F),e(_,K),e(_,oe),e(oe,d),e(_,k),e(_,re),e(re,_e),e(_,q),e(_,P),e(P,Y),e(_,Q),e(_,ne),e(ne,he),A(S,ve,ae),A(S,z,ae),e(z,ge),A(S,j,ae),A(S,N,ae),e(N,ie),e(ie,Ee),e(N,ke),e(N,X),e(X,ue),e(N,Le),e(N,Z),e(Z,O),e(N,Se),e(N,pe),e(pe,me),e(N,xe),e(N,be),e(be,ye)},p:fe,i:fe,o:fe,d(S){S&&r(t),S&&r(o),S&&r(c),S&&r(p),S&&r(_),S&&r(ve),S&&r(z),S&&r(j),S&&r(N)}}}class Wl extends vt{constructor(t){super(),_t(this,t,null,Jl,ft,{})}}function ql(l){let t,a,o,c,y,p,_,g,E,x,b,T,C,$,V,B,L,M,w,D,se,U,I,W,ee,R,H,te,le,F,K,oe,d,k,re,_e,q,P,Y,Q,ne,he,ve,z,ge,j,N,ie,Ee,ke,X,ue,Le;return{c(){t=s("main"),a=s("h3"),o=u("Current Job: starting November 2021"),c=v(),y=s("ul"),p=s("li"),_=s("strong"),g=u("Lead Developer, Project Manager and CoFounder"),E=u(" at HCDL"),x=v(),b=s("li"),T=u("Tasks: Build,Architect and Deploy MERN (MySql) app, train/manage interns, keep project on track"),C=v(),$=s("h3"),V=u("Internship: July - November 2021"),B=v(),L=s("ul"),M=s("li"),w=s("strong"),D=u("Intern"),se=u(" at Tapply"),U=v(),I=s("li"),W=u("Tasks: Build Next.js,Firebase, Firestore sign and log in functionality"),ee=v(),R=s("h3"),H=u("Previous Life: Chemist"),te=v(),le=s("ul"),F=s("li"),K=s("strong"),oe=u("Lead Heavy Metals Chemist"),d=v(),k=s("li"),re=u("Tasks: Data Analysis, Method writing, research, troubleshooting, operating/repairing/setting up various complex scientific instruments"),_e=v(),q=s("h3"),P=u("Education"),Y=v(),Q=s("ul"),ne=s("li"),he=s("strong"),ve=u("Certificate in Fullstack Development"),z=v(),ge=s("li"),j=u("from UC Berkley Extension 2020"),N=v(),ie=s("li"),Ee=s("strong"),ke=u("BS in Chemistry"),X=v(),ue=s("li"),Le=u("from Evergreen State College in 2011"),this.h()},l(Z){t=i(Z,"MAIN",{class:!0});var O=n(t);a=i(O,"H3",{class:!0});var Se=n(a);o=f(Se,"Current Job: starting November 2021"),Se.forEach(r),c=m(O),y=i(O,"UL",{});var pe=n(y);p=i(pe,"LI",{});var me=n(p);_=i(me,"STRONG",{});var xe=n(_);g=f(xe,"Lead Developer, Project Manager and CoFounder"),xe.forEach(r),E=f(me," at HCDL"),me.forEach(r),x=m(pe),b=i(pe,"LI",{});var be=n(b);T=f(be,"Tasks: Build,Architect and Deploy MERN (MySql) app, train/manage interns, keep project on track"),be.forEach(r),pe.forEach(r),C=m(O),$=i(O,"H3",{class:!0});var ye=n($);V=f(ye,"Internship: July - November 2021"),ye.forEach(r),B=m(O),L=i(O,"UL",{});var S=n(L);M=i(S,"LI",{});var ae=n(M);w=i(ae,"STRONG",{});var $e=n(w);D=f($e,"Intern"),$e.forEach(r),se=f(ae," at Tapply"),ae.forEach(r),U=m(S),I=i(S,"LI",{});var G=n(I);W=f(G,"Tasks: Build Next.js,Firebase, Firestore sign and log in functionality"),G.forEach(r),S.forEach(r),ee=m(O),R=i(O,"H3",{class:!0});var Ie=n(R);H=f(Ie,"Previous Life: Chemist"),Ie.forEach(r),te=m(O),le=i(O,"UL",{});var we=n(le);F=i(we,"LI",{});var De=n(F);K=i(De,"STRONG",{});var Ne=n(K);oe=f(Ne,"Lead Heavy Metals Chemist"),Ne.forEach(r),De.forEach(r),d=m(we),k=i(we,"LI",{});var Pe=n(k);re=f(Pe,"Tasks: Data Analysis, Method writing, research, troubleshooting, operating/repairing/setting up various complex scientific instruments"),Pe.forEach(r),we.forEach(r),_e=m(O),q=i(O,"H3",{class:!0});var Re=n(q);P=f(Re,"Education"),Re.forEach(r),Y=m(O),Q=i(O,"UL",{});var de=n(Q);ne=i(de,"LI",{});var Oe=n(ne);he=i(Oe,"STRONG",{});var Be=n(he);ve=f(Be,"Certificate in Fullstack Development"),Be.forEach(r),Oe.forEach(r),z=m(de),ge=i(de,"LI",{});var Ae=n(ge);j=f(Ae,"from UC Berkley Extension 2020"),Ae.forEach(r),N=m(de),ie=i(de,"LI",{});var Ge=n(ie);Ee=i(Ge,"STRONG",{});var Me=n(Ee);ke=f(Me,"BS in Chemistry"),Me.forEach(r),Ge.forEach(r),X=m(de),ue=i(de,"LI",{});var He=n(ue);Le=f(He,"from Evergreen State College in 2011"),He.forEach(r),de.forEach(r),O.forEach(r),this.h()},h(){h(a,"class","svelte-1vvroml"),h($,"class","svelte-1vvroml"),h(R,"class","svelte-1vvroml"),h(q,"class","svelte-1vvroml"),h(t,"class","svelte-1vvroml")},m(Z,O){A(Z,t,O),e(t,a),e(a,o),e(t,c),e(t,y),e(y,p),e(p,_),e(_,g),e(p,E),e(y,x),e(y,b),e(b,T),e(t,C),e(t,$),e($,V),e(t,B),e(t,L),e(L,M),e(M,w),e(w,D),e(M,se),e(L,U),e(L,I),e(I,W),e(t,ee),e(t,R),e(R,H),e(t,te),e(t,le),e(le,F),e(F,K),e(K,oe),e(le,d),e(le,k),e(k,re),e(t,_e),e(t,q),e(q,P),e(t,Y),e(t,Q),e(Q,ne),e(ne,he),e(he,ve),e(Q,z),e(Q,ge),e(ge,j),e(Q,N),e(Q,ie),e(ie,Ee),e(Ee,ke),e(Q,X),e(Q,ue),e(ue,Le)},p:fe,i:fe,o:fe,d(Z){Z&&r(t)}}}class Ql extends vt{constructor(t){super(),_t(this,t,null,ql,ft,{})}}function Xl(l){let t,a,o,c,y,p,_,g,E,x,b,T,C,$,V,B,L,M,w,D,se,U,I,W,ee,R,H,te,le,F,K,oe,d,k,re,_e,q,P,Y,Q,ne,he,ve,z,ge,j,N,ie,Ee,ke,X,ue,Le,Z,O,Se,pe,me,xe,be,ye,S,ae,$e,G,Ie,we,De,Ne,Pe,Re,de,Oe,Be,Ae,Ge,Me,He,ce,je,Qe,Xe,ze,Ve,It,Ke,$t,At,Ye,mt,wt,Nt,Ce,Ue,Gt,Tt,pt,jt,Ct,Je,Dt;return{c(){t=s("h2"),a=u("Cool Projects"),o=v(),c=s("ul"),y=s("li"),p=s("strong"),_=u("Drink to the Weather"),g=v(),E=s("li"),x=s("a"),b=u("Github Link"),T=v(),C=s("span"),$=u("||"),V=v(),B=s("a"),L=u("Live Deployment"),M=v(),w=s("li"),D=s("strong"),se=u("What the Fact?"),U=v(),I=s("li"),W=s("a"),ee=u("Github Link"),R=v(),H=s("span"),te=u("||"),le=v(),F=s("a"),K=u("Live Deployment"),oe=v(),d=s("li"),k=s("strong"),re=u("Snake Game"),_e=v(),q=s("l"),P=s("a"),Y=u("Github Link"),Q=v(),ne=s("span"),he=u("||"),ve=v(),z=s("a"),ge=u("Live Deployment"),j=v(),N=s("li"),ie=s("strong"),Ee=u("Clicky Game"),ke=v(),X=s("li"),ue=s("a"),Le=u("Github Link"),Z=v(),O=s("span"),Se=u("||"),pe=v(),me=s("a"),xe=u("Live Deployment"),be=v(),ye=s("li"),S=s("strong"),ae=u("Axel the Bird"),$e=v(),G=s("li"),Ie=s("a"),we=u("Github Link"),De=v(),Ne=s("span"),Pe=u("||"),Re=v(),de=s("a"),Oe=u("Live Deployment"),Be=v(),Ae=s("li"),Ge=s("strong"),Me=u("Pong"),He=v(),ce=s("li"),je=s("a"),Qe=u("Github Link"),Xe=v(),ze=s("span"),Ve=u("||"),It=v(),Ke=s("a"),$t=u("Live Deployment"),At=v(),Ye=s("li"),mt=s("strong"),wt=u("Carbon + Diversity"),Nt=v(),Ce=s("li"),Ue=s("a"),Gt=u("Github Link"),Tt=v(),pt=s("span"),jt=u("||"),Ct=v(),Je=s("a"),Dt=u("Live Deployment"),this.h()},l(Te){t=i(Te,"H2",{class:!0});var Ze=n(t);a=f(Ze,"Cool Projects"),Ze.forEach(r),o=m(Te),c=i(Te,"UL",{class:!0});var J=n(c);y=i(J,"LI",{class:!0});var Mt=n(y);p=i(Mt,"STRONG",{});var Ht=n(p);_=f(Ht,"Drink to the Weather"),Ht.forEach(r),Mt.forEach(r),g=m(J),E=i(J,"LI",{class:!0});var et=n(E);x=i(et,"A",{href:!0,class:!0});var zt=n(x);b=f(zt,"Github Link"),zt.forEach(r),T=m(et),C=i(et,"SPAN",{});var Ft=n(C);$=f(Ft,"||"),Ft.forEach(r),V=m(et),B=i(et,"A",{href:!0,class:!0});var Kt=n(B);L=f(Kt,"Live Deployment"),Kt.forEach(r),et.forEach(r),M=m(J),w=i(J,"LI",{class:!0});var Ut=n(w);D=i(Ut,"STRONG",{});var Jt=n(D);se=f(Jt,"What the Fact?"),Jt.forEach(r),Ut.forEach(r),U=m(J),I=i(J,"LI",{class:!0});var tt=n(I);W=i(tt,"A",{href:!0,class:!0});var Wt=n(W);ee=f(Wt,"Github Link"),Wt.forEach(r),R=m(tt),H=i(tt,"SPAN",{});var qt=n(H);te=f(qt,"||"),qt.forEach(r),le=m(tt),F=i(tt,"A",{href:!0,class:!0});var Qt=n(F);K=f(Qt,"Live Deployment"),Qt.forEach(r),tt.forEach(r),oe=m(J),d=i(J,"LI",{class:!0});var Xt=n(d);k=i(Xt,"STRONG",{});var Vt=n(k);re=f(Vt,"Snake Game"),Vt.forEach(r),Xt.forEach(r),_e=m(J),q=i(J,"L",{});var lt=n(q);P=i(lt,"A",{href:!0,class:!0});var Yt=n(P);Y=f(Yt,"Github Link"),Yt.forEach(r),Q=m(lt),ne=i(lt,"SPAN",{});var Zt=n(ne);he=f(Zt,"||"),Zt.forEach(r),ve=m(lt),z=i(lt,"A",{href:!0,class:!0});var el=n(z);ge=f(el,"Live Deployment"),el.forEach(r),lt.forEach(r),j=m(J),N=i(J,"LI",{class:!0});var tl=n(N);ie=i(tl,"STRONG",{});var ll=n(ie);Ee=f(ll,"Clicky Game"),ll.forEach(r),tl.forEach(r),ke=m(J),X=i(J,"LI",{class:!0});var rt=n(X);ue=i(rt,"A",{href:!0,class:!0});var rl=n(ue);Le=f(rl,"Github Link"),rl.forEach(r),Z=m(rt),O=i(rt,"SPAN",{});var sl=n(O);Se=f(sl,"||"),sl.forEach(r),pe=m(rt),me=i(rt,"A",{href:!0,class:!0});var nl=n(me);xe=f(nl,"Live Deployment"),nl.forEach(r),rt.forEach(r),be=m(J),ye=i(J,"LI",{class:!0});var il=n(ye);S=i(il,"STRONG",{});var al=n(S);ae=f(al,"Axel the Bird"),al.forEach(r),il.forEach(r),$e=m(J),G=i(J,"LI",{class:!0});var st=n(G);Ie=i(st,"A",{href:!0,class:!0});var ol=n(Ie);we=f(ol,"Github Link"),ol.forEach(r),De=m(st),Ne=i(st,"SPAN",{});var cl=n(Ne);Pe=f(cl,"||"),cl.forEach(r),Re=m(st),de=i(st,"A",{href:!0,class:!0});var ul=n(de);Oe=f(ul,"Live Deployment"),ul.forEach(r),st.forEach(r),Be=m(J),Ae=i(J,"LI",{class:!0});var fl=n(Ae);Ge=i(fl,"STRONG",{});var hl=n(Ge);Me=f(hl,"Pong"),hl.forEach(r),fl.forEach(r),He=m(J),ce=i(J,"LI",{class:!0});var nt=n(ce);je=i(nt,"A",{href:!0,class:!0});var dl=n(je);Qe=f(dl,"Github Link"),dl.forEach(r),Xe=m(nt),ze=i(nt,"SPAN",{});var _l=n(ze);Ve=f(_l,"||"),_l.forEach(r),It=m(nt),Ke=i(nt,"A",{href:!0,class:!0});var vl=n(Ke);$t=f(vl,"Live Deployment"),vl.forEach(r),nt.forEach(r),At=m(J),Ye=i(J,"LI",{class:!0});var ml=n(Ye);mt=i(ml,"STRONG",{});var pl=n(mt);wt=f(pl,"Carbon + Diversity"),pl.forEach(r),ml.forEach(r),Nt=m(J),Ce=i(J,"LI",{class:!0});var it=n(Ce);Ue=i(it,"A",{href:!0,class:!0});var gl=n(Ue);Gt=f(gl,"Github Link"),gl.forEach(r),Tt=m(it),pt=i(it,"SPAN",{});var El=n(pt);jt=f(El,"||"),El.forEach(r),Ct=m(it),Je=i(it,"A",{href:!0,class:!0});var yl=n(Je);Dt=f(yl,"Live Deployment"),yl.forEach(r),it.forEach(r),J.forEach(r),this.h()},h(){h(t,"class","svelte-1g5n9i7"),h(y,"class","svelte-1g5n9i7"),h(x,"href","https://github.com/RKSouth/drink-to-the-weather"),h(x,"class","svelte-1g5n9i7"),h(B,"href","https://rksouth.github.io/drink-to-the-weather/"),h(B,"class","svelte-1g5n9i7"),h(E,"class","svelte-1g5n9i7"),h(w,"class","svelte-1g5n9i7"),h(W,"href","https://github.com/RKSouth/whatTheFact"),h(W,"class","svelte-1g5n9i7"),h(F,"href","https://what-the-fact.herokuapp.com/"),h(F,"class","svelte-1g5n9i7"),h(I,"class","svelte-1g5n9i7"),h(d,"class","svelte-1g5n9i7"),h(P,"href","https://github.com/RKSouth/Snake-Game"),h(P,"class","svelte-1g5n9i7"),h(z,"href","https://rksouth.github.io/Snake-Game/"),h(z,"class","svelte-1g5n9i7"),h(N,"class","svelte-1g5n9i7"),h(ue,"href","https://github.com/RKSouth/Clicker-Game"),h(ue,"class","svelte-1g5n9i7"),h(me,"href","https://rksouth.github.io/Clicker-Game/"),h(me,"class","svelte-1g5n9i7"),h(X,"class","svelte-1g5n9i7"),h(ye,"class","svelte-1g5n9i7"),h(Ie,"href","https://github.com/RKSouth/AxelTheBird"),h(Ie,"class","svelte-1g5n9i7"),h(de,"href","https://rksouth.github.io/AxelTheBird/"),h(de,"class","svelte-1g5n9i7"),h(G,"class","svelte-1g5n9i7"),h(Ae,"class","svelte-1g5n9i7"),h(je,"href","https://github.com/RKSouth/OldSchoolPong"),h(je,"class","svelte-1g5n9i7"),h(Ke,"href","https://rksouth.github.io/OldSchoolPong/"),h(Ke,"class","svelte-1g5n9i7"),h(ce,"class","svelte-1g5n9i7"),h(Ye,"class","svelte-1g5n9i7"),h(Ue,"href","https://github.com/RKSouth/CarbonDiversity"),h(Ue,"class","svelte-1g5n9i7"),h(Je,"href","https://rksouth.github.io/CarbonDiversity/"),h(Je,"class","svelte-1g5n9i7"),h(Ce,"class","svelte-1g5n9i7"),h(c,"class","svelte-1g5n9i7")},m(Te,Ze){A(Te,t,Ze),e(t,a),A(Te,o,Ze),A(Te,c,Ze),e(c,y),e(y,p),e(p,_),e(c,g),e(c,E),e(E,x),e(x,b),e(E,T),e(E,C),e(C,$),e(E,V),e(E,B),e(B,L),e(c,M),e(c,w),e(w,D),e(D,se),e(c,U),e(c,I),e(I,W),e(W,ee),e(I,R),e(I,H),e(H,te),e(I,le),e(I,F),e(F,K),e(c,oe),e(c,d),e(d,k),e(k,re),e(c,_e),e(c,q),e(q,P),e(P,Y),e(q,Q),e(q,ne),e(ne,he),e(q,ve),e(q,z),e(z,ge),e(c,j),e(c,N),e(N,ie),e(ie,Ee),e(c,ke),e(c,X),e(X,ue),e(ue,Le),e(X,Z),e(X,O),e(O,Se),e(X,pe),e(X,me),e(me,xe),e(c,be),e(c,ye),e(ye,S),e(S,ae),e(c,$e),e(c,G),e(G,Ie),e(Ie,we),e(G,De),e(G,Ne),e(Ne,Pe),e(G,Re),e(G,de),e(de,Oe),e(c,Be),e(c,Ae),e(Ae,Ge),e(Ge,Me),e(c,He),e(c,ce),e(ce,je),e(je,Qe),e(ce,Xe),e(ce,ze),e(ze,Ve),e(ce,It),e(ce,Ke),e(Ke,$t),e(c,At),e(c,Ye),e(Ye,mt),e(mt,wt),e(c,Nt),e(c,Ce),e(Ce,Ue),e(Ue,Gt),e(Ce,Tt),e(Ce,pt),e(pt,jt),e(Ce,Ct),e(Ce,Je),e(Je,Dt)},p:fe,i:fe,o:fe,d(Te){Te&&r(t),Te&&r(o),Te&&r(c)}}}class Vl extends vt{constructor(t){super(),_t(this,t,null,Xl,ft,{})}}function Yl(l){let t,a;return{c(){t=s("h1"),a=u("Page Not Found"),this.h()},l(o){t=i(o,"H1",{class:!0});var c=n(t);a=f(c,"Page Not Found"),c.forEach(r),this.h()},h(){h(t,"class","svelte-1jb5x4m")},m(o,c){A(o,t,c),e(t,a)},i:fe,o:fe,d(o){o&&r(t)}}}function Zl(l){let t,a;return t=new Ul({}),{c(){yt(t.$$.fragment)},l(o){bt(t.$$.fragment,o)},m(o,c){ht(t,o,c),a=!0},i(o){a||(Fe(t.$$.fragment,o),a=!0)},o(o){qe(t.$$.fragment,o),a=!1},d(o){dt(t,o)}}}function er(l){let t,a;return t=new Vl({}),{c(){yt(t.$$.fragment)},l(o){bt(t.$$.fragment,o)},m(o,c){ht(t,o,c),a=!0},i(o){a||(Fe(t.$$.fragment,o),a=!0)},o(o){qe(t.$$.fragment,o),a=!1},d(o){dt(t,o)}}}function tr(l){let t,a;return t=new Ql({}),{c(){yt(t.$$.fragment)},l(o){bt(t.$$.fragment,o)},m(o,c){ht(t,o,c),a=!0},i(o){a||(Fe(t.$$.fragment,o),a=!0)},o(o){qe(t.$$.fragment,o),a=!1},d(o){dt(t,o)}}}function lr(l){let t,a;return t=new Fl({}),{c(){yt(t.$$.fragment)},l(o){bt(t.$$.fragment,o)},m(o,c){ht(t,o,c),a=!0},i(o){a||(Fe(t.$$.fragment,o),a=!0)},o(o){qe(t.$$.fragment,o),a=!1},d(o){dt(t,o)}}}function rr(l){let t,a;return t=new Wl({}),{c(){yt(t.$$.fragment)},l(o){bt(t.$$.fragment,o)},m(o,c){ht(t,o,c),a=!0},i(o){a||(Fe(t.$$.fragment,o),a=!0)},o(o){qe(t.$$.fragment,o),a=!1},d(o){dt(t,o)}}}function sr(l){let t,a,o,c,y,p,_,g,E,x,b,T,C,$,V,B,L,M,w,D,se,U,I,W,ee,R,H,te,le,F,K,oe,d,k,re,_e,q,P,Y,Q,ne,he;const ve=[rr,lr,tr,er,Zl,Yl],z=[];function ge(j,N){return j[0]===1?0:j[0]===2?1:j[0]===3?2:j[0]===4?3:j[0]===5?4:5}return P=ge(l),Y=z[P]=ve[P](l),{c(){t=s("header"),a=s("img"),c=v(),y=s("h1"),p=u("Rachael Kelm-Southworth"),_=v(),g=s("h3"),E=u("A developer who builds stuff kind of good"),x=v(),b=s("main"),T=s("section"),C=s("div"),$=s("button"),V=u("Toggle mode"),B=v(),L=s("ul"),M=s("li"),w=s("a"),D=u("About"),se=u(` |
      `),U=s("li"),I=s("a"),W=u("Skillz"),ee=u(` |
      `),R=s("li"),H=s("a"),te=u("Xperience"),le=u(` |
      `),F=s("li"),K=s("a"),oe=u("Projects"),d=u(` |
      `),k=s("li"),re=s("a"),_e=u("Contact"),q=v(),Y.c(),this.h()},l(j){t=i(j,"HEADER",{class:!0});var N=n(t);a=i(N,"IMG",{src:!0,alt:!0,class:!0}),c=m(N),y=i(N,"H1",{class:!0});var ie=n(y);p=f(ie,"Rachael Kelm-Southworth"),ie.forEach(r),_=m(N),g=i(N,"H3",{class:!0});var Ee=n(g);E=f(Ee,"A developer who builds stuff kind of good"),Ee.forEach(r),N.forEach(r),x=m(j),b=i(j,"MAIN",{class:!0});var ke=n(b);T=i(ke,"SECTION",{class:!0});var X=n(T);C=i(X,"DIV",{class:!0});var ue=n(C);$=i(ue,"BUTTON",{class:!0});var Le=n($);V=f(Le,"Toggle mode"),Le.forEach(r),ue.forEach(r),B=m(X),L=i(X,"UL",{id:!0,class:!0});var Z=n(L);M=i(Z,"LI",{class:!0});var O=n(M);w=i(O,"A",{href:!0,class:!0});var Se=n(w);D=f(Se,"About"),Se.forEach(r),O.forEach(r),se=f(Z,` |
      `),U=i(Z,"LI",{class:!0});var pe=n(U);I=i(pe,"A",{href:!0,class:!0});var me=n(I);W=f(me,"Skillz"),me.forEach(r),pe.forEach(r),ee=f(Z,` |
      `),R=i(Z,"LI",{class:!0});var xe=n(R);H=i(xe,"A",{href:!0,class:!0});var be=n(H);te=f(be,"Xperience"),be.forEach(r),xe.forEach(r),le=f(Z,` |
      `),F=i(Z,"LI",{class:!0});var ye=n(F);K=i(ye,"A",{href:!0,class:!0});var S=n(K);oe=f(S,"Projects"),S.forEach(r),ye.forEach(r),d=f(Z,` |
      `),k=i(Z,"LI",{class:!0});var ae=n(k);re=i(ae,"A",{href:!0,class:!0});var $e=n(re);_e=f($e,"Contact"),$e.forEach(r),ae.forEach(r),Z.forEach(r),q=m(X),Y.l(X),X.forEach(r),ke.forEach(r),this.h()},h(){Al(a.src,o="./assets/rachael2.jpg")||h(a,"src",o),h(a,"alt","a nerdy blonde woman"),h(a,"class","svelte-1jb5x4m"),h(y,"class","svelte-1jb5x4m"),h(g,"class","svelte-1jb5x4m"),h(t,"class","svelte-1jb5x4m"),h($,"class","svelte-1jb5x4m"),h(C,"class","svelte-1jb5x4m"),h(w,"href","/"),h(w,"class","svelte-1jb5x4m"),h(M,"class","svelte-1jb5x4m"),h(I,"href","/"),h(I,"class","svelte-1jb5x4m"),h(U,"class","svelte-1jb5x4m"),h(H,"href","/"),h(H,"class","svelte-1jb5x4m"),h(R,"class","svelte-1jb5x4m"),h(K,"href","/"),h(K,"class","svelte-1jb5x4m"),h(F,"class","svelte-1jb5x4m"),h(re,"href","/"),h(re,"class","svelte-1jb5x4m"),h(k,"class","svelte-1jb5x4m"),h(L,"id","menu"),h(L,"class","svelte-1jb5x4m"),h(T,"class","svelte-1jb5x4m"),h(b,"class","svelte-1jb5x4m")},m(j,N){A(j,t,N),e(t,a),e(t,c),e(t,y),e(y,p),e(t,_),e(t,g),e(g,E),A(j,x,N),A(j,b,N),e(b,T),e(T,C),e(C,$),e($,V),e(T,B),e(T,L),e(L,M),e(M,w),e(w,D),e(L,se),e(L,U),e(U,I),e(I,W),e(L,ee),e(L,R),e(R,H),e(H,te),e(L,le),e(L,F),e(F,K),e(K,oe),e(L,d),e(L,k),e(k,re),e(re,_e),e(T,q),z[P].m(T,null),Q=!0,ne||(he=[at($,"click",nr),at(w,"click",gt(l[1])),at(I,"click",gt(l[2])),at(H,"click",gt(l[3])),at(K,"click",gt(l[4])),at(re,"click",gt(l[5]))],ne=!0)},p(j,[N]){let ie=P;P=ge(j),P!==ie&&(Bl(),qe(z[ie],1,1,()=>{z[ie]=null}),Ml(),Y=z[P],Y||(Y=z[P]=ve[P](j),Y.c()),Fe(Y,1),Y.m(T,null))},i(j){Q||(Fe(Y),Q=!0)},o(j){qe(Y),Q=!1},d(j){j&&r(t),j&&r(x),j&&r(b),z[P].d(),ne=!1,ut(he)}}}function nr(){window.document.body.classList.toggle("dark-mode")}function ir(l,t,a){let{menu:o=1}=t;const c=()=>a(0,o=1),y=()=>a(0,o=2),p=()=>a(0,o=3),_=()=>a(0,o=4),g=()=>a(0,o=5);return l.$$set=E=>{"menu"in E&&a(0,o=E.menu)},[o,c,y,p,_,g]}class ar extends vt{constructor(t){super(),_t(this,t,ir,sr,ft,{menu:0})}}new ar({target:document.getElementById("app")});
