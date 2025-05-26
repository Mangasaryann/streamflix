function tl(t,e){const n=Object.create(null),i=t.split(",");for(let r=0;r<i.length;r++)n[i[r]]=!0;return e?r=>!!n[r.toLowerCase()]:r=>!!n[r]}const dg="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",fg=tl(dg);function nf(t){return!!t||t===""}function nl(t){if(V(t)){const e={};for(let n=0;n<t.length;n++){const i=t[n],r=ke(i)?mg(i):nl(i);if(r)for(const s in r)e[s]=r[s]}return e}else{if(ke(t))return t;if(Se(t))return t}}const hg=/;(?![^(]*\))/g,pg=/:(.+)/;function mg(t){const e={};return t.split(hg).forEach(n=>{if(n){const i=n.split(pg);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function il(t){let e="";if(ke(t))e=t;else if(V(t))for(let n=0;n<t.length;n++){const i=il(t[n]);i&&(e+=i+" ")}else if(Se(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const m2=t=>ke(t)?t:t==null?"":V(t)||Se(t)&&(t.toString===af||!G(t.toString))?JSON.stringify(t,rf,2):String(t),rf=(t,e)=>e&&e.__v_isRef?rf(t,e.value):hi(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[i,r])=>(n[`${i} =>`]=r,n),{})}:sf(e)?{[`Set(${e.size})`]:[...e.values()]}:Se(e)&&!V(e)&&!lf(e)?String(e):e,fe={},fi=[],mt=()=>{},gg=()=>!1,_g=/^on[^a-z]/,Gs=t=>_g.test(t),rl=t=>t.startsWith("onUpdate:"),We=Object.assign,sl=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},vg=Object.prototype.hasOwnProperty,ie=(t,e)=>vg.call(t,e),V=Array.isArray,hi=t=>Ks(t)==="[object Map]",sf=t=>Ks(t)==="[object Set]",G=t=>typeof t=="function",ke=t=>typeof t=="string",ol=t=>typeof t=="symbol",Se=t=>t!==null&&typeof t=="object",of=t=>Se(t)&&G(t.then)&&G(t.catch),af=Object.prototype.toString,Ks=t=>af.call(t),yg=t=>Ks(t).slice(8,-1),lf=t=>Ks(t)==="[object Object]",al=t=>ke(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,as=tl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ys=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},bg=/-(\w)/g,Rt=Ys(t=>t.replace(bg,(e,n)=>n?n.toUpperCase():"")),wg=/\B([A-Z])/g,Pi=Ys(t=>t.replace(wg,"-$1").toLowerCase()),Qs=Ys(t=>t.charAt(0).toUpperCase()+t.slice(1)),Lo=Ys(t=>t?`on${Qs(t)}`:""),vr=(t,e)=>!Object.is(t,e),ls=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},_s=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},vs=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let zc;const Ig=()=>zc||(zc=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});let Ot;class Eg{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&Ot&&(this.parent=Ot,this.index=(Ot.scopes||(Ot.scopes=[])).push(this)-1)}run(e){if(this.active)try{return Ot=this,e()}finally{Ot=this.parent}}on(){Ot=this}off(){Ot=this.parent}stop(e){if(this.active){let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.scopes)for(n=0,i=this.scopes.length;n<i;n++)this.scopes[n].stop(!0);if(this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.active=!1}}}function Cg(t,e=Ot){e&&e.active&&e.effects.push(t)}const ll=t=>{const e=new Set(t);return e.w=0,e.n=0,e},cf=t=>(t.w&gn)>0,uf=t=>(t.n&gn)>0,Tg=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=gn},Sg=t=>{const{deps:e}=t;if(e.length){let n=0;for(let i=0;i<e.length;i++){const r=e[i];cf(r)&&!uf(r)?r.delete(t):e[n++]=r,r.w&=~gn,r.n&=~gn}e.length=n}},la=new WeakMap;let Zi=0,gn=1;const ca=30;let Ct;const xn=Symbol(""),ua=Symbol("");class cl{constructor(e,n=null,i){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Cg(this,i)}run(){if(!this.active)return this.fn();let e=Ct,n=hn;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Ct,Ct=this,hn=!0,gn=1<<++Zi,Zi<=ca?Tg(this):Vc(this),this.fn()}finally{Zi<=ca&&Sg(this),gn=1<<--Zi,Ct=this.parent,hn=n,this.parent=void 0}}stop(){this.active&&(Vc(this),this.onStop&&this.onStop(),this.active=!1)}}function Vc(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let hn=!0;const df=[];function Oi(){df.push(hn),hn=!1}function xi(){const t=df.pop();hn=t===void 0?!0:t}function st(t,e,n){if(hn&&Ct){let i=la.get(t);i||la.set(t,i=new Map);let r=i.get(n);r||i.set(n,r=ll()),ff(r)}}function ff(t,e){let n=!1;Zi<=ca?uf(t)||(t.n|=gn,n=!cf(t)):n=!t.has(Ct),n&&(t.add(Ct),Ct.deps.push(t))}function Ht(t,e,n,i,r,s){const o=la.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&V(t))o.forEach((l,c)=>{(c==="length"||c>=i)&&a.push(l)});else switch(n!==void 0&&a.push(o.get(n)),e){case"add":V(t)?al(n)&&a.push(o.get("length")):(a.push(o.get(xn)),hi(t)&&a.push(o.get(ua)));break;case"delete":V(t)||(a.push(o.get(xn)),hi(t)&&a.push(o.get(ua)));break;case"set":hi(t)&&a.push(o.get(xn));break}if(a.length===1)a[0]&&da(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);da(ll(l))}}function da(t,e){for(const n of V(t)?t:[...t])(n!==Ct||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const Ag=tl("__proto__,__v_isRef,__isVue"),hf=new Set(Object.getOwnPropertyNames(Symbol).map(t=>Symbol[t]).filter(ol)),Rg=ul(),kg=ul(!1,!0),Ng=ul(!0),jc=Pg();function Pg(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const i=se(this);for(let s=0,o=this.length;s<o;s++)st(i,"get",s+"");const r=i[e](...n);return r===-1||r===!1?i[e](...n.map(se)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Oi();const i=se(this)[e].apply(this,n);return xi(),i}}),t}function ul(t=!1,e=!1){return function(i,r,s){if(r==="__v_isReactive")return!t;if(r==="__v_isReadonly")return t;if(r==="__v_isShallow")return e;if(r==="__v_raw"&&s===(t?e?Gg:vf:e?_f:gf).get(i))return i;const o=V(i);if(!t&&o&&ie(jc,r))return Reflect.get(jc,r,s);const a=Reflect.get(i,r,s);return(ol(r)?hf.has(r):Ag(r))||(t||st(i,"get",r),e)?a:Ue(a)?!o||!al(r)?a.value:a:Se(a)?t?yf(a):Mi(a):a}}const Og=pf(),xg=pf(!0);function pf(t=!1){return function(n,i,r,s){let o=n[i];if(yr(o)&&Ue(o)&&!Ue(r))return!1;if(!t&&!yr(r)&&(bf(r)||(r=se(r),o=se(o)),!V(n)&&Ue(o)&&!Ue(r)))return o.value=r,!0;const a=V(n)&&al(i)?Number(i)<n.length:ie(n,i),l=Reflect.set(n,i,r,s);return n===se(s)&&(a?vr(r,o)&&Ht(n,"set",i,r):Ht(n,"add",i,r)),l}}function Mg(t,e){const n=ie(t,e);t[e];const i=Reflect.deleteProperty(t,e);return i&&n&&Ht(t,"delete",e,void 0),i}function Dg(t,e){const n=Reflect.has(t,e);return(!ol(e)||!hf.has(e))&&st(t,"has",e),n}function Lg(t){return st(t,"iterate",V(t)?"length":xn),Reflect.ownKeys(t)}const mf={get:Rg,set:Og,deleteProperty:Mg,has:Dg,ownKeys:Lg},Fg={get:Ng,set(t,e){return!0},deleteProperty(t,e){return!0}},Ug=We({},mf,{get:kg,set:xg}),dl=t=>t,Js=t=>Reflect.getPrototypeOf(t);function Xr(t,e,n=!1,i=!1){t=t.__v_raw;const r=se(t),s=se(e);e!==s&&!n&&st(r,"get",e),!n&&st(r,"get",s);const{has:o}=Js(r),a=i?dl:n?pl:br;if(o.call(r,e))return a(t.get(e));if(o.call(r,s))return a(t.get(s));t!==r&&t.get(e)}function Zr(t,e=!1){const n=this.__v_raw,i=se(n),r=se(t);return t!==r&&!e&&st(i,"has",t),!e&&st(i,"has",r),t===r?n.has(t):n.has(t)||n.has(r)}function es(t,e=!1){return t=t.__v_raw,!e&&st(se(t),"iterate",xn),Reflect.get(t,"size",t)}function $c(t){t=se(t);const e=se(this);return Js(e).has.call(e,t)||(e.add(t),Ht(e,"add",t,t)),this}function qc(t,e){e=se(e);const n=se(this),{has:i,get:r}=Js(n);let s=i.call(n,t);s||(t=se(t),s=i.call(n,t));const o=r.call(n,t);return n.set(t,e),s?vr(e,o)&&Ht(n,"set",t,e):Ht(n,"add",t,e),this}function Gc(t){const e=se(this),{has:n,get:i}=Js(e);let r=n.call(e,t);r||(t=se(t),r=n.call(e,t)),i&&i.call(e,t);const s=e.delete(t);return r&&Ht(e,"delete",t,void 0),s}function Kc(){const t=se(this),e=t.size!==0,n=t.clear();return e&&Ht(t,"clear",void 0,void 0),n}function ts(t,e){return function(i,r){const s=this,o=s.__v_raw,a=se(o),l=e?dl:t?pl:br;return!t&&st(a,"iterate",xn),o.forEach((c,u)=>i.call(r,l(c),l(u),s))}}function ns(t,e,n){return function(...i){const r=this.__v_raw,s=se(r),o=hi(s),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=r[t](...i),u=n?dl:e?pl:br;return!e&&st(s,"iterate",l?ua:xn),{next(){const{value:d,done:f}=c.next();return f?{value:d,done:f}:{value:a?[u(d[0]),u(d[1])]:u(d),done:f}},[Symbol.iterator](){return this}}}}function Qt(t){return function(...e){return t==="delete"?!1:this}}function Wg(){const t={get(s){return Xr(this,s)},get size(){return es(this)},has:Zr,add:$c,set:qc,delete:Gc,clear:Kc,forEach:ts(!1,!1)},e={get(s){return Xr(this,s,!1,!0)},get size(){return es(this)},has:Zr,add:$c,set:qc,delete:Gc,clear:Kc,forEach:ts(!1,!0)},n={get(s){return Xr(this,s,!0)},get size(){return es(this,!0)},has(s){return Zr.call(this,s,!0)},add:Qt("add"),set:Qt("set"),delete:Qt("delete"),clear:Qt("clear"),forEach:ts(!0,!1)},i={get(s){return Xr(this,s,!0,!0)},get size(){return es(this,!0)},has(s){return Zr.call(this,s,!0)},add:Qt("add"),set:Qt("set"),delete:Qt("delete"),clear:Qt("clear"),forEach:ts(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=ns(s,!1,!1),n[s]=ns(s,!0,!1),e[s]=ns(s,!1,!0),i[s]=ns(s,!0,!0)}),[t,n,e,i]}const[Hg,Bg,zg,Vg]=Wg();function fl(t,e){const n=e?t?Vg:zg:t?Bg:Hg;return(i,r,s)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?i:Reflect.get(ie(n,r)&&r in i?n:i,r,s)}const jg={get:fl(!1,!1)},$g={get:fl(!1,!0)},qg={get:fl(!0,!1)},gf=new WeakMap,_f=new WeakMap,vf=new WeakMap,Gg=new WeakMap;function Kg(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Yg(t){return t.__v_skip||!Object.isExtensible(t)?0:Kg(yg(t))}function Mi(t){return yr(t)?t:hl(t,!1,mf,jg,gf)}function Qg(t){return hl(t,!1,Ug,$g,_f)}function yf(t){return hl(t,!0,Fg,qg,vf)}function hl(t,e,n,i,r){if(!Se(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const s=r.get(t);if(s)return s;const o=Yg(t);if(o===0)return t;const a=new Proxy(t,o===2?i:n);return r.set(t,a),a}function pi(t){return yr(t)?pi(t.__v_raw):!!(t&&t.__v_isReactive)}function yr(t){return!!(t&&t.__v_isReadonly)}function bf(t){return!!(t&&t.__v_isShallow)}function wf(t){return pi(t)||yr(t)}function se(t){const e=t&&t.__v_raw;return e?se(e):t}function If(t){return _s(t,"__v_skip",!0),t}const br=t=>Se(t)?Mi(t):t,pl=t=>Se(t)?yf(t):t;function Ef(t){hn&&Ct&&(t=se(t),ff(t.dep||(t.dep=ll())))}function Cf(t,e){t=se(t),t.dep&&da(t.dep)}function Ue(t){return!!(t&&t.__v_isRef===!0)}function Jg(t){return Tf(t,!1)}function Xg(t){return Tf(t,!0)}function Tf(t,e){return Ue(t)?t:new Zg(t,e)}class Zg{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:se(e),this._value=n?e:br(e)}get value(){return Ef(this),this._value}set value(e){e=this.__v_isShallow?e:se(e),vr(e,this._rawValue)&&(this._rawValue=e,this._value=this.__v_isShallow?e:br(e),Cf(this))}}function or(t){return Ue(t)?t.value:t}const e_={get:(t,e,n)=>or(Reflect.get(t,e,n)),set:(t,e,n,i)=>{const r=t[e];return Ue(r)&&!Ue(n)?(r.value=n,!0):Reflect.set(t,e,n,i)}};function Sf(t){return pi(t)?t:new Proxy(t,e_)}class t_{constructor(e,n,i,r){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new cl(e,()=>{this._dirty||(this._dirty=!0,Cf(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=i}get value(){const e=se(this);return Ef(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function n_(t,e,n=!1){let i,r;const s=G(t);return s?(i=t,r=mt):(i=t.get,r=t.set),new t_(i,r,s||!r,n)}Promise.resolve();function pn(t,e,n,i){let r;try{r=i?t(...i):t()}catch(s){Xs(s,e,n)}return r}function ut(t,e,n,i){if(G(t)){const s=pn(t,e,n,i);return s&&of(s)&&s.catch(o=>{Xs(o,e,n)}),s}const r=[];for(let s=0;s<t.length;s++)r.push(ut(t[s],e,n,i));return r}function Xs(t,e,n,i=!0){const r=e?e.vnode:null;if(e){let s=e.parent;const o=e.proxy,a=n;for(;s;){const c=s.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,a)===!1)return}s=s.parent}const l=e.appContext.config.errorHandler;if(l){pn(l,null,10,[t,o,a]);return}}i_(t,n,r,i)}function i_(t,e,n,i=!0){console.error(t)}let ys=!1,fa=!1;const nt=[];let xt=0;const ar=[];let er=null,ai=0;const lr=[];let rn=null,li=0;const Af=Promise.resolve();let ml=null,ha=null;function Rf(t){const e=ml||Af;return t?e.then(this?t.bind(this):t):e}function r_(t){let e=xt+1,n=nt.length;for(;e<n;){const i=e+n>>>1;wr(nt[i])<t?e=i+1:n=i}return e}function kf(t){(!nt.length||!nt.includes(t,ys&&t.allowRecurse?xt+1:xt))&&t!==ha&&(t.id==null?nt.push(t):nt.splice(r_(t.id),0,t),Nf())}function Nf(){!ys&&!fa&&(fa=!0,ml=Af.then(xf))}function s_(t){const e=nt.indexOf(t);e>xt&&nt.splice(e,1)}function Pf(t,e,n,i){V(t)?n.push(...t):(!e||!e.includes(t,t.allowRecurse?i+1:i))&&n.push(t),Nf()}function o_(t){Pf(t,er,ar,ai)}function a_(t){Pf(t,rn,lr,li)}function gl(t,e=null){if(ar.length){for(ha=e,er=[...new Set(ar)],ar.length=0,ai=0;ai<er.length;ai++)er[ai]();er=null,ai=0,ha=null,gl(t,e)}}function Of(t){if(lr.length){const e=[...new Set(lr)];if(lr.length=0,rn){rn.push(...e);return}for(rn=e,rn.sort((n,i)=>wr(n)-wr(i)),li=0;li<rn.length;li++)rn[li]();rn=null,li=0}}const wr=t=>t.id==null?1/0:t.id;function xf(t){fa=!1,ys=!0,gl(t),nt.sort((n,i)=>wr(n)-wr(i));const e=mt;try{for(xt=0;xt<nt.length;xt++){const n=nt[xt];n&&n.active!==!1&&pn(n,null,14)}}finally{xt=0,nt.length=0,Of(),ys=!1,ml=null,(nt.length||ar.length||lr.length)&&xf(t)}}function l_(t,e,...n){const i=t.vnode.props||fe;let r=n;const s=e.startsWith("update:"),o=s&&e.slice(7);if(o&&o in i){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:d,trim:f}=i[u]||fe;f?r=n.map(p=>p.trim()):d&&(r=n.map(vs))}let a,l=i[a=Lo(e)]||i[a=Lo(Rt(e))];!l&&s&&(l=i[a=Lo(Pi(e))]),l&&ut(l,t,6,r);const c=i[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,ut(c,t,6,r)}}function Mf(t,e,n=!1){const i=e.emitsCache,r=i.get(t);if(r!==void 0)return r;const s=t.emits;let o={},a=!1;if(!G(t)){const l=c=>{const u=Mf(c,e,!0);u&&(a=!0,We(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!s&&!a?(i.set(t,null),null):(V(s)?s.forEach(l=>o[l]=null):We(o,s),i.set(t,o),o)}function _l(t,e){return!t||!Gs(e)?!1:(e=e.slice(2).replace(/Once$/,""),ie(t,e[0].toLowerCase()+e.slice(1))||ie(t,Pi(e))||ie(t,e))}let it=null,Zs=null;function bs(t){const e=it;return it=t,Zs=t&&t.type.__scopeId||null,e}function g2(t){Zs=t}function _2(){Zs=null}function c_(t,e=it,n){if(!e||t._n)return t;const i=(...r)=>{i._d&&su(-1);const s=bs(e),o=t(...r);return bs(s),i._d&&su(1),o};return i._n=!0,i._c=!0,i._d=!0,i}function Fo(t){const{type:e,vnode:n,proxy:i,withProxy:r,props:s,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:d,data:f,setupState:p,ctx:g,inheritAttrs:C}=t;let b,v;const E=bs(t);try{if(n.shapeFlag&4){const M=r||i;b=Et(u.call(M,M,d,s,p,f,g)),v=l}else{const M=e;b=Et(M.length>1?M(s,{attrs:l,slots:a,emit:c}):M(s,null)),v=e.props?l:u_(l)}}catch(M){cr.length=0,Xs(M,t,1),b=Ye(_t)}let x=b;if(v&&C!==!1){const M=Object.keys(v),{shapeFlag:K}=x;M.length&&K&7&&(o&&M.some(rl)&&(v=d_(v,o)),x=bi(x,v))}return n.dirs&&(x.dirs=x.dirs?x.dirs.concat(n.dirs):n.dirs),n.transition&&(x.transition=n.transition),b=x,bs(E),b}const u_=t=>{let e;for(const n in t)(n==="class"||n==="style"||Gs(n))&&((e||(e={}))[n]=t[n]);return e},d_=(t,e)=>{const n={};for(const i in t)(!rl(i)||!(i.slice(9)in e))&&(n[i]=t[i]);return n};function f_(t,e,n){const{props:i,children:r,component:s}=t,{props:o,children:a,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return i?Yc(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let d=0;d<u.length;d++){const f=u[d];if(o[f]!==i[f]&&!_l(c,f))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?Yc(i,o,c):!0:!!o;return!1}function Yc(t,e,n){const i=Object.keys(e);if(i.length!==Object.keys(t).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(e[s]!==t[s]&&!_l(n,s))return!0}return!1}function h_({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const p_=t=>t.__isSuspense;function m_(t,e){e&&e.pendingBranch?V(t)?e.effects.push(...t):e.effects.push(t):a_(t)}function cs(t,e){if(Me){let n=Me.provides;const i=Me.parent&&Me.parent.provides;i===n&&(n=Me.provides=Object.create(i)),n[t]=e}}function At(t,e,n=!1){const i=Me||it;if(i){const r=i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides;if(r&&t in r)return r[t];if(arguments.length>1)return n&&G(e)?e.call(i.proxy):e}}const Qc={};function Mn(t,e,n){return Df(t,e,n)}function Df(t,e,{immediate:n,deep:i,flush:r,onTrack:s,onTrigger:o}=fe){const a=Me;let l,c=!1,u=!1;if(Ue(t)?(l=()=>t.value,c=bf(t)):pi(t)?(l=()=>t,i=!0):V(t)?(u=!0,c=t.some(pi),l=()=>t.map(v=>{if(Ue(v))return v.value;if(pi(v))return Nn(v);if(G(v))return pn(v,a,2)})):G(t)?e?l=()=>pn(t,a,2):l=()=>{if(!(a&&a.isUnmounted))return d&&d(),ut(t,a,3,[f])}:l=mt,e&&i){const v=l;l=()=>Nn(v())}let d,f=v=>{d=b.onStop=()=>{pn(v,a,4)}};if(Ir)return f=mt,e?n&&ut(e,a,3,[l(),u?[]:void 0,f]):l(),mt;let p=u?[]:Qc;const g=()=>{if(!!b.active)if(e){const v=b.run();(i||c||(u?v.some((E,x)=>vr(E,p[x])):vr(v,p)))&&(d&&d(),ut(e,a,3,[v,p===Qc?void 0:p,f]),p=v)}else b.run()};g.allowRecurse=!!e;let C;r==="sync"?C=g:r==="post"?C=()=>Ke(g,a&&a.suspense):C=()=>{!a||a.isMounted?o_(g):g()};const b=new cl(l,C);return e?n?g():p=b.run():r==="post"?Ke(b.run.bind(b),a&&a.suspense):b.run(),()=>{b.stop(),a&&a.scope&&sl(a.scope.effects,b)}}function g_(t,e,n){const i=this.proxy,r=ke(t)?t.includes(".")?Lf(i,t):()=>i[t]:t.bind(i,i);let s;G(e)?s=e:(s=e.handler,n=e);const o=Me;wi(this);const a=Df(r,s.bind(i),n);return o?wi(o):Ln(),a}function Lf(t,e){const n=e.split(".");return()=>{let i=t;for(let r=0;r<n.length&&i;r++)i=i[n[r]];return i}}function Nn(t,e){if(!Se(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Ue(t))Nn(t.value,e);else if(V(t))for(let n=0;n<t.length;n++)Nn(t[n],e);else if(sf(t)||hi(t))t.forEach(n=>{Nn(n,e)});else if(lf(t))for(const n in t)Nn(t[n],e);return t}function __(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Bf(()=>{t.isMounted=!0}),zf(()=>{t.isUnmounting=!0}),t}const at=[Function,Array],v_={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:at,onEnter:at,onAfterEnter:at,onEnterCancelled:at,onBeforeLeave:at,onLeave:at,onAfterLeave:at,onLeaveCancelled:at,onBeforeAppear:at,onAppear:at,onAfterAppear:at,onAppearCancelled:at},setup(t,{slots:e}){const n=ev(),i=__();let r;return()=>{const s=e.default&&Wf(e.default(),!0);if(!s||!s.length)return;const o=se(t),{mode:a}=o,l=s[0];if(i.isLeaving)return Uo(l);const c=Jc(l);if(!c)return Uo(l);const u=pa(c,o,i,n);ma(c,u);const d=n.subTree,f=d&&Jc(d);let p=!1;const{getTransitionKey:g}=c.type;if(g){const C=g();r===void 0?r=C:C!==r&&(r=C,p=!0)}if(f&&f.type!==_t&&(!Rn(c,f)||p)){const C=pa(f,o,i,n);if(ma(f,C),a==="out-in")return i.isLeaving=!0,C.afterLeave=()=>{i.isLeaving=!1,n.update()},Uo(l);a==="in-out"&&c.type!==_t&&(C.delayLeave=(b,v,E)=>{const x=Uf(i,f);x[String(f.key)]=f,b._leaveCb=()=>{v(),b._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=E})}return l}}},Ff=v_;function Uf(t,e){const{leavingVNodes:n}=t;let i=n.get(e.type);return i||(i=Object.create(null),n.set(e.type,i)),i}function pa(t,e,n,i){const{appear:r,mode:s,persisted:o=!1,onBeforeEnter:a,onEnter:l,onAfterEnter:c,onEnterCancelled:u,onBeforeLeave:d,onLeave:f,onAfterLeave:p,onLeaveCancelled:g,onBeforeAppear:C,onAppear:b,onAfterAppear:v,onAppearCancelled:E}=e,x=String(t.key),M=Uf(n,t),K=(z,_e)=>{z&&ut(z,i,9,_e)},Z={mode:s,persisted:o,beforeEnter(z){let _e=a;if(!n.isMounted)if(r)_e=C||a;else return;z._leaveCb&&z._leaveCb(!0);const ne=M[x];ne&&Rn(t,ne)&&ne.el._leaveCb&&ne.el._leaveCb(),K(_e,[z])},enter(z){let _e=l,ne=c,ye=u;if(!n.isMounted)if(r)_e=b||l,ne=v||c,ye=E||u;else return;let Ae=!1;const F=z._enterCb=Ie=>{Ae||(Ae=!0,Ie?K(ye,[z]):K(ne,[z]),Z.delayedLeave&&Z.delayedLeave(),z._enterCb=void 0)};_e?(_e(z,F),_e.length<=1&&F()):F()},leave(z,_e){const ne=String(t.key);if(z._enterCb&&z._enterCb(!0),n.isUnmounting)return _e();K(d,[z]);let ye=!1;const Ae=z._leaveCb=F=>{ye||(ye=!0,_e(),F?K(g,[z]):K(p,[z]),z._leaveCb=void 0,M[ne]===t&&delete M[ne])};M[ne]=t,f?(f(z,Ae),f.length<=1&&Ae()):Ae()},clone(z){return pa(z,e,n,i)}};return Z}function Uo(t){if(eo(t))return t=bi(t),t.children=null,t}function Jc(t){return eo(t)?t.children?t.children[0]:void 0:t}function ma(t,e){t.shapeFlag&6&&t.component?ma(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Wf(t,e=!1){let n=[],i=0;for(let r=0;r<t.length;r++){const s=t[r];s.type===lt?(s.patchFlag&128&&i++,n=n.concat(Wf(s.children,e))):(e||s.type!==_t)&&n.push(s)}if(i>1)for(let r=0;r<n.length;r++)n[r].patchFlag=-2;return n}function Ur(t){return G(t)?{setup:t,name:t.name}:t}const ga=t=>!!t.type.__asyncLoader,eo=t=>t.type.__isKeepAlive;function y_(t,e){Hf(t,"a",e)}function b_(t,e){Hf(t,"da",e)}function Hf(t,e,n=Me){const i=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(to(e,i,n),n){let r=n.parent;for(;r&&r.parent;)eo(r.parent.vnode)&&w_(i,e,n,r),r=r.parent}}function w_(t,e,n,i){const r=to(e,t,i,!0);Vf(()=>{sl(i[e],r)},n)}function to(t,e,n=Me,i=!1){if(n){const r=n[t]||(n[t]=[]),s=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Oi(),wi(n);const a=ut(e,n,t,o);return Ln(),xi(),a});return i?r.unshift(s):r.push(s),s}}const qt=t=>(e,n=Me)=>(!Ir||t==="sp")&&to(t,e,n),I_=qt("bm"),Bf=qt("m"),E_=qt("bu"),C_=qt("u"),zf=qt("bum"),Vf=qt("um"),T_=qt("sp"),S_=qt("rtg"),A_=qt("rtc");function R_(t,e=Me){to("ec",t,e)}let _a=!0;function k_(t){const e=$f(t),n=t.proxy,i=t.ctx;_a=!1,e.beforeCreate&&Xc(e.beforeCreate,t,"bc");const{data:r,computed:s,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:d,mounted:f,beforeUpdate:p,updated:g,activated:C,deactivated:b,beforeDestroy:v,beforeUnmount:E,destroyed:x,unmounted:M,render:K,renderTracked:Z,renderTriggered:z,errorCaptured:_e,serverPrefetch:ne,expose:ye,inheritAttrs:Ae,components:F,directives:Ie,filters:Ge}=e;if(c&&N_(c,i,null,t.appContext.config.unwrapInjectedRef),o)for(const he in o){const le=o[he];G(le)&&(i[he]=le.bind(n))}if(r){const he=r.call(n,n);Se(he)&&(t.data=Mi(he))}if(_a=!0,s)for(const he in s){const le=s[he],et=G(le)?le.bind(n,n):G(le.get)?le.get.bind(n,n):mt,ti=!G(le)&&G(le.set)?le.set.bind(n):mt,Pt=Te({get:et,set:ti});Object.defineProperty(i,he,{enumerable:!0,configurable:!0,get:()=>Pt.value,set:bt=>Pt.value=bt})}if(a)for(const he in a)jf(a[he],i,n,he);if(l){const he=G(l)?l.call(n):l;Reflect.ownKeys(he).forEach(le=>{cs(le,he[le])})}u&&Xc(u,t,"c");function Ee(he,le){V(le)?le.forEach(et=>he(et.bind(n))):le&&he(le.bind(n))}if(Ee(I_,d),Ee(Bf,f),Ee(E_,p),Ee(C_,g),Ee(y_,C),Ee(b_,b),Ee(R_,_e),Ee(A_,Z),Ee(S_,z),Ee(zf,E),Ee(Vf,M),Ee(T_,ne),V(ye))if(ye.length){const he=t.exposed||(t.exposed={});ye.forEach(le=>{Object.defineProperty(he,le,{get:()=>n[le],set:et=>n[le]=et})})}else t.exposed||(t.exposed={});K&&t.render===mt&&(t.render=K),Ae!=null&&(t.inheritAttrs=Ae),F&&(t.components=F),Ie&&(t.directives=Ie)}function N_(t,e,n=mt,i=!1){V(t)&&(t=va(t));for(const r in t){const s=t[r];let o;Se(s)?"default"in s?o=At(s.from||r,s.default,!0):o=At(s.from||r):o=At(s),Ue(o)&&i?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[r]=o}}function Xc(t,e,n){ut(V(t)?t.map(i=>i.bind(e.proxy)):t.bind(e.proxy),e,n)}function jf(t,e,n,i){const r=i.includes(".")?Lf(n,i):()=>n[i];if(ke(t)){const s=e[t];G(s)&&Mn(r,s)}else if(G(t))Mn(r,t.bind(n));else if(Se(t))if(V(t))t.forEach(s=>jf(s,e,n,i));else{const s=G(t.handler)?t.handler.bind(n):e[t.handler];G(s)&&Mn(r,s,t)}}function $f(t){const e=t.type,{mixins:n,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=t.appContext,a=s.get(e);let l;return a?l=a:!r.length&&!n&&!i?l=e:(l={},r.length&&r.forEach(c=>ws(l,c,o,!0)),ws(l,e,o)),s.set(e,l),l}function ws(t,e,n,i=!1){const{mixins:r,extends:s}=e;s&&ws(t,s,n,!0),r&&r.forEach(o=>ws(t,o,n,!0));for(const o in e)if(!(i&&o==="expose")){const a=P_[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const P_={data:Zc,props:Tn,emits:Tn,methods:Tn,computed:Tn,beforeCreate:Ve,created:Ve,beforeMount:Ve,mounted:Ve,beforeUpdate:Ve,updated:Ve,beforeDestroy:Ve,beforeUnmount:Ve,destroyed:Ve,unmounted:Ve,activated:Ve,deactivated:Ve,errorCaptured:Ve,serverPrefetch:Ve,components:Tn,directives:Tn,watch:x_,provide:Zc,inject:O_};function Zc(t,e){return e?t?function(){return We(G(t)?t.call(this,this):t,G(e)?e.call(this,this):e)}:e:t}function O_(t,e){return Tn(va(t),va(e))}function va(t){if(V(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Ve(t,e){return t?[...new Set([].concat(t,e))]:e}function Tn(t,e){return t?We(We(Object.create(null),t),e):e}function x_(t,e){if(!t)return e;if(!e)return t;const n=We(Object.create(null),t);for(const i in e)n[i]=Ve(t[i],e[i]);return n}function M_(t,e,n,i=!1){const r={},s={};_s(s,no,1),t.propsDefaults=Object.create(null),qf(t,e,r,s);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);n?t.props=i?r:Qg(r):t.type.props?t.props=r:t.props=s,t.attrs=s}function D_(t,e,n,i){const{props:r,attrs:s,vnode:{patchFlag:o}}=t,a=se(r),[l]=t.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let d=0;d<u.length;d++){let f=u[d];const p=e[f];if(l)if(ie(s,f))p!==s[f]&&(s[f]=p,c=!0);else{const g=Rt(f);r[g]=ya(l,a,g,p,t,!1)}else p!==s[f]&&(s[f]=p,c=!0)}}}else{qf(t,e,r,s)&&(c=!0);let u;for(const d in a)(!e||!ie(e,d)&&((u=Pi(d))===d||!ie(e,u)))&&(l?n&&(n[d]!==void 0||n[u]!==void 0)&&(r[d]=ya(l,a,d,void 0,t,!0)):delete r[d]);if(s!==a)for(const d in s)(!e||!ie(e,d)&&!0)&&(delete s[d],c=!0)}c&&Ht(t,"set","$attrs")}function qf(t,e,n,i){const[r,s]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(as(l))continue;const c=e[l];let u;r&&ie(r,u=Rt(l))?!s||!s.includes(u)?n[u]=c:(a||(a={}))[u]=c:_l(t.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(s){const l=se(n),c=a||fe;for(let u=0;u<s.length;u++){const d=s[u];n[d]=ya(r,l,d,c[d],t,!ie(c,d))}}return o}function ya(t,e,n,i,r,s){const o=t[n];if(o!=null){const a=ie(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&G(l)){const{propsDefaults:c}=r;n in c?i=c[n]:(wi(r),i=c[n]=l.call(null,e),Ln())}else i=l}o[0]&&(s&&!a?i=!1:o[1]&&(i===""||i===Pi(n))&&(i=!0))}return i}function Gf(t,e,n=!1){const i=e.propsCache,r=i.get(t);if(r)return r;const s=t.props,o={},a=[];let l=!1;if(!G(t)){const u=d=>{l=!0;const[f,p]=Gf(d,e,!0);We(o,f),p&&a.push(...p)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!s&&!l)return i.set(t,fi),fi;if(V(s))for(let u=0;u<s.length;u++){const d=Rt(s[u]);eu(d)&&(o[d]=fe)}else if(s)for(const u in s){const d=Rt(u);if(eu(d)){const f=s[u],p=o[d]=V(f)||G(f)?{type:f}:f;if(p){const g=iu(Boolean,p.type),C=iu(String,p.type);p[0]=g>-1,p[1]=C<0||g<C,(g>-1||ie(p,"default"))&&a.push(d)}}}const c=[o,a];return i.set(t,c),c}function eu(t){return t[0]!=="$"}function tu(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:t===null?"null":""}function nu(t,e){return tu(t)===tu(e)}function iu(t,e){return V(e)?e.findIndex(n=>nu(n,t)):G(e)&&nu(e,t)?0:-1}const Kf=t=>t[0]==="_"||t==="$stable",vl=t=>V(t)?t.map(Et):[Et(t)],L_=(t,e,n)=>{const i=c_((...r)=>vl(e(...r)),n);return i._c=!1,i},Yf=(t,e,n)=>{const i=t._ctx;for(const r in t){if(Kf(r))continue;const s=t[r];if(G(s))e[r]=L_(r,s,i);else if(s!=null){const o=vl(s);e[r]=()=>o}}},Qf=(t,e)=>{const n=vl(e);t.slots.default=()=>n},F_=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=se(e),_s(e,"_",n)):Yf(e,t.slots={})}else t.slots={},e&&Qf(t,e);_s(t.slots,no,1)},U_=(t,e,n)=>{const{vnode:i,slots:r}=t;let s=!0,o=fe;if(i.shapeFlag&32){const a=e._;a?n&&a===1?s=!1:(We(r,e),!n&&a===1&&delete r._):(s=!e.$stable,Yf(e,r)),o=e}else e&&(Qf(t,e),o={default:1});if(s)for(const a in r)!Kf(a)&&!(a in o)&&delete r[a]};function v2(t,e){const n=it;if(n===null)return t;const i=n.proxy,r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[o,a,l,c=fe]=e[s];G(o)&&(o={mounted:o,updated:o}),o.deep&&Nn(a),r.push({dir:o,instance:i,value:a,oldValue:void 0,arg:l,modifiers:c})}return t}function In(t,e,n,i){const r=t.dirs,s=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let l=a.dir[i];l&&(Oi(),ut(l,n,8,[t.el,a,t,e]),xi())}}function Jf(){return{app:null,config:{isNativeTag:gg,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let W_=0;function H_(t,e){return function(i,r=null){r!=null&&!Se(r)&&(r=null);const s=Jf(),o=new Set;let a=!1;const l=s.app={_uid:W_++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:av,get config(){return s.config},set config(c){},use(c,...u){return o.has(c)||(c&&G(c.install)?(o.add(c),c.install(l,...u)):G(c)&&(o.add(c),c(l,...u))),l},mixin(c){return s.mixins.includes(c)||s.mixins.push(c),l},component(c,u){return u?(s.components[c]=u,l):s.components[c]},directive(c,u){return u?(s.directives[c]=u,l):s.directives[c]},mount(c,u,d){if(!a){const f=Ye(i,r);return f.appContext=s,u&&e?e(f,c):t(f,c,d),a=!0,l._container=c,c.__vue_app__=l,Il(f.component)||f.component.proxy}},unmount(){a&&(t(null,l._container),delete l._container.__vue_app__)},provide(c,u){return s.provides[c]=u,l}};return l}}function ba(t,e,n,i,r=!1){if(V(t)){t.forEach((f,p)=>ba(f,e&&(V(e)?e[p]:e),n,i,r));return}if(ga(i)&&!r)return;const s=i.shapeFlag&4?Il(i.component)||i.component.proxy:i.el,o=r?null:s,{i:a,r:l}=t,c=e&&e.r,u=a.refs===fe?a.refs={}:a.refs,d=a.setupState;if(c!=null&&c!==l&&(ke(c)?(u[c]=null,ie(d,c)&&(d[c]=null)):Ue(c)&&(c.value=null)),G(l))pn(l,a,12,[o,u]);else{const f=ke(l),p=Ue(l);if(f||p){const g=()=>{if(t.f){const C=f?u[l]:l.value;r?V(C)&&sl(C,s):V(C)?C.includes(s)||C.push(s):f?u[l]=[s]:(l.value=[s],t.k&&(u[t.k]=l.value))}else f?(u[l]=o,ie(d,l)&&(d[l]=o)):Ue(l)&&(l.value=o,t.k&&(u[t.k]=o))};o?(g.id=-1,Ke(g,n)):g()}}}const Ke=m_;function B_(t){return z_(t)}function z_(t,e){const n=Ig();n.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:d,nextSibling:f,setScopeId:p=mt,cloneNode:g,insertStaticContent:C}=t,b=(h,m,_,I=null,w=null,R=null,O=!1,A=null,N=!!m.dynamicChildren)=>{if(h===m)return;h&&!Rn(h,m)&&(I=U(h),ot(h,w,R,!0),h=null),m.patchFlag===-2&&(N=!1,m.dynamicChildren=null);const{type:T,ref:W,shapeFlag:D}=m;switch(T){case bl:v(h,m,_,I);break;case _t:E(h,m,_,I);break;case Wo:h==null&&x(m,_,I,O);break;case lt:Ie(h,m,_,I,w,R,O,A,N);break;default:D&1?Z(h,m,_,I,w,R,O,A,N):D&6?Ge(h,m,_,I,w,R,O,A,N):(D&64||D&128)&&T.process(h,m,_,I,w,R,O,A,N,pe)}W!=null&&w&&ba(W,h&&h.ref,R,m||h,!m)},v=(h,m,_,I)=>{if(h==null)i(m.el=a(m.children),_,I);else{const w=m.el=h.el;m.children!==h.children&&c(w,m.children)}},E=(h,m,_,I)=>{h==null?i(m.el=l(m.children||""),_,I):m.el=h.el},x=(h,m,_,I)=>{[h.el,h.anchor]=C(h.children,m,_,I,h.el,h.anchor)},M=({el:h,anchor:m},_,I)=>{let w;for(;h&&h!==m;)w=f(h),i(h,_,I),h=w;i(m,_,I)},K=({el:h,anchor:m})=>{let _;for(;h&&h!==m;)_=f(h),r(h),h=_;r(m)},Z=(h,m,_,I,w,R,O,A,N)=>{O=O||m.type==="svg",h==null?z(m,_,I,w,R,O,A,N):ye(h,m,w,R,O,A,N)},z=(h,m,_,I,w,R,O,A)=>{let N,T;const{type:W,props:D,shapeFlag:H,transition:j,patchFlag:te,dirs:be}=h;if(h.el&&g!==void 0&&te===-1)N=h.el=g(h.el);else{if(N=h.el=o(h.type,R,D&&D.is,D),H&8?u(N,h.children):H&16&&ne(h.children,N,null,I,w,R&&W!=="foreignObject",O,A),be&&In(h,null,I,"created"),D){for(const ve in D)ve!=="value"&&!as(ve)&&s(N,ve,null,D[ve],R,h.children,I,w,P);"value"in D&&s(N,"value",null,D.value),(T=D.onVnodeBeforeMount)&&It(T,I,h)}_e(N,h,h.scopeId,O,I)}be&&In(h,null,I,"beforeMount");const ue=(!w||w&&!w.pendingBranch)&&j&&!j.persisted;ue&&j.beforeEnter(N),i(N,m,_),((T=D&&D.onVnodeMounted)||ue||be)&&Ke(()=>{T&&It(T,I,h),ue&&j.enter(N),be&&In(h,null,I,"mounted")},w)},_e=(h,m,_,I,w)=>{if(_&&p(h,_),I)for(let R=0;R<I.length;R++)p(h,I[R]);if(w){let R=w.subTree;if(m===R){const O=w.vnode;_e(h,O,O.scopeId,O.slotScopeIds,w.parent)}}},ne=(h,m,_,I,w,R,O,A,N=0)=>{for(let T=N;T<h.length;T++){const W=h[T]=A?sn(h[T]):Et(h[T]);b(null,W,m,_,I,w,R,O,A)}},ye=(h,m,_,I,w,R,O)=>{const A=m.el=h.el;let{patchFlag:N,dynamicChildren:T,dirs:W}=m;N|=h.patchFlag&16;const D=h.props||fe,H=m.props||fe;let j;_&&En(_,!1),(j=H.onVnodeBeforeUpdate)&&It(j,_,m,h),W&&In(m,h,_,"beforeUpdate"),_&&En(_,!0);const te=w&&m.type!=="foreignObject";if(T?Ae(h.dynamicChildren,T,A,_,I,te,R):O||et(h,m,A,null,_,I,te,R,!1),N>0){if(N&16)F(A,m,D,H,_,I,w);else if(N&2&&D.class!==H.class&&s(A,"class",null,H.class,w),N&4&&s(A,"style",D.style,H.style,w),N&8){const be=m.dynamicProps;for(let ue=0;ue<be.length;ue++){const ve=be[ue],ft=D[ve],ni=H[ve];(ni!==ft||ve==="value")&&s(A,ve,ft,ni,w,h.children,_,I,P)}}N&1&&h.children!==m.children&&u(A,m.children)}else!O&&T==null&&F(A,m,D,H,_,I,w);((j=H.onVnodeUpdated)||W)&&Ke(()=>{j&&It(j,_,m,h),W&&In(m,h,_,"updated")},I)},Ae=(h,m,_,I,w,R,O)=>{for(let A=0;A<m.length;A++){const N=h[A],T=m[A],W=N.el&&(N.type===lt||!Rn(N,T)||N.shapeFlag&70)?d(N.el):_;b(N,T,W,null,I,w,R,O,!0)}},F=(h,m,_,I,w,R,O)=>{if(_!==I){for(const A in I){if(as(A))continue;const N=I[A],T=_[A];N!==T&&A!=="value"&&s(h,A,T,N,O,m.children,w,R,P)}if(_!==fe)for(const A in _)!as(A)&&!(A in I)&&s(h,A,_[A],null,O,m.children,w,R,P);"value"in I&&s(h,"value",_.value,I.value)}},Ie=(h,m,_,I,w,R,O,A,N)=>{const T=m.el=h?h.el:a(""),W=m.anchor=h?h.anchor:a("");let{patchFlag:D,dynamicChildren:H,slotScopeIds:j}=m;j&&(A=A?A.concat(j):j),h==null?(i(T,_,I),i(W,_,I),ne(m.children,_,W,w,R,O,A,N)):D>0&&D&64&&H&&h.dynamicChildren?(Ae(h.dynamicChildren,H,_,w,R,O,A),(m.key!=null||w&&m===w.subTree)&&Xf(h,m,!0)):et(h,m,_,W,w,R,O,A,N)},Ge=(h,m,_,I,w,R,O,A,N)=>{m.slotScopeIds=A,h==null?m.shapeFlag&512?w.ctx.activate(m,_,I,O,N):Nt(m,_,I,w,R,O,N):Ee(h,m,N)},Nt=(h,m,_,I,w,R,O)=>{const A=h.component=Z_(h,I,w);if(eo(h)&&(A.ctx.renderer=pe),tv(A),A.asyncDep){if(w&&w.registerDep(A,he),!h.el){const N=A.subTree=Ye(_t);E(null,N,m,_)}return}he(A,h,m,_,w,R,O)},Ee=(h,m,_)=>{const I=m.component=h.component;if(f_(h,m,_))if(I.asyncDep&&!I.asyncResolved){le(I,m,_);return}else I.next=m,s_(I.update),I.update();else m.component=h.component,m.el=h.el,I.vnode=m},he=(h,m,_,I,w,R,O)=>{const A=()=>{if(h.isMounted){let{next:W,bu:D,u:H,parent:j,vnode:te}=h,be=W,ue;En(h,!1),W?(W.el=te.el,le(h,W,O)):W=te,D&&ls(D),(ue=W.props&&W.props.onVnodeBeforeUpdate)&&It(ue,j,W,te),En(h,!0);const ve=Fo(h),ft=h.subTree;h.subTree=ve,b(ft,ve,d(ft.el),U(ft),h,w,R),W.el=ve.el,be===null&&h_(h,ve.el),H&&Ke(H,w),(ue=W.props&&W.props.onVnodeUpdated)&&Ke(()=>It(ue,j,W,te),w)}else{let W;const{el:D,props:H}=m,{bm:j,m:te,parent:be}=h,ue=ga(m);if(En(h,!1),j&&ls(j),!ue&&(W=H&&H.onVnodeBeforeMount)&&It(W,be,m),En(h,!0),D&&q){const ve=()=>{h.subTree=Fo(h),q(D,h.subTree,h,w,null)};ue?m.type.__asyncLoader().then(()=>!h.isUnmounted&&ve()):ve()}else{const ve=h.subTree=Fo(h);b(null,ve,_,I,h,w,R),m.el=ve.el}if(te&&Ke(te,w),!ue&&(W=H&&H.onVnodeMounted)){const ve=m;Ke(()=>It(W,be,ve),w)}m.shapeFlag&256&&h.a&&Ke(h.a,w),h.isMounted=!0,m=_=I=null}},N=h.effect=new cl(A,()=>kf(h.update),h.scope),T=h.update=N.run.bind(N);T.id=h.uid,En(h,!0),T()},le=(h,m,_)=>{m.component=h;const I=h.vnode.props;h.vnode=m,h.next=null,D_(h,m.props,I,_),U_(h,m.children,_),Oi(),gl(void 0,h.update),xi()},et=(h,m,_,I,w,R,O,A,N=!1)=>{const T=h&&h.children,W=h?h.shapeFlag:0,D=m.children,{patchFlag:H,shapeFlag:j}=m;if(H>0){if(H&128){Pt(T,D,_,I,w,R,O,A,N);return}else if(H&256){ti(T,D,_,I,w,R,O,A,N);return}}j&8?(W&16&&P(T,w,R),D!==T&&u(_,D)):W&16?j&16?Pt(T,D,_,I,w,R,O,A,N):P(T,w,R,!0):(W&8&&u(_,""),j&16&&ne(D,_,I,w,R,O,A,N))},ti=(h,m,_,I,w,R,O,A,N)=>{h=h||fi,m=m||fi;const T=h.length,W=m.length,D=Math.min(T,W);let H;for(H=0;H<D;H++){const j=m[H]=N?sn(m[H]):Et(m[H]);b(h[H],j,_,null,w,R,O,A,N)}T>W?P(h,w,R,!0,!1,D):ne(m,_,I,w,R,O,A,N,D)},Pt=(h,m,_,I,w,R,O,A,N)=>{let T=0;const W=m.length;let D=h.length-1,H=W-1;for(;T<=D&&T<=H;){const j=h[T],te=m[T]=N?sn(m[T]):Et(m[T]);if(Rn(j,te))b(j,te,_,null,w,R,O,A,N);else break;T++}for(;T<=D&&T<=H;){const j=h[D],te=m[H]=N?sn(m[H]):Et(m[H]);if(Rn(j,te))b(j,te,_,null,w,R,O,A,N);else break;D--,H--}if(T>D){if(T<=H){const j=H+1,te=j<W?m[j].el:I;for(;T<=H;)b(null,m[T]=N?sn(m[T]):Et(m[T]),_,te,w,R,O,A,N),T++}}else if(T>H)for(;T<=D;)ot(h[T],w,R,!0),T++;else{const j=T,te=T,be=new Map;for(T=te;T<=H;T++){const tt=m[T]=N?sn(m[T]):Et(m[T]);tt.key!=null&&be.set(tt.key,T)}let ue,ve=0;const ft=H-te+1;let ni=!1,Wc=0;const $i=new Array(ft);for(T=0;T<ft;T++)$i[T]=0;for(T=j;T<=D;T++){const tt=h[T];if(ve>=ft){ot(tt,w,R,!0);continue}let wt;if(tt.key!=null)wt=be.get(tt.key);else for(ue=te;ue<=H;ue++)if($i[ue-te]===0&&Rn(tt,m[ue])){wt=ue;break}wt===void 0?ot(tt,w,R,!0):($i[wt-te]=T+1,wt>=Wc?Wc=wt:ni=!0,b(tt,m[wt],_,null,w,R,O,A,N),ve++)}const Hc=ni?V_($i):fi;for(ue=Hc.length-1,T=ft-1;T>=0;T--){const tt=te+T,wt=m[tt],Bc=tt+1<W?m[tt+1].el:I;$i[T]===0?b(null,wt,_,Bc,w,R,O,A,N):ni&&(ue<0||T!==Hc[ue]?bt(wt,_,Bc,2):ue--)}}},bt=(h,m,_,I,w=null)=>{const{el:R,type:O,transition:A,children:N,shapeFlag:T}=h;if(T&6){bt(h.component.subTree,m,_,I);return}if(T&128){h.suspense.move(m,_,I);return}if(T&64){O.move(h,m,_,pe);return}if(O===lt){i(R,m,_);for(let D=0;D<N.length;D++)bt(N[D],m,_,I);i(h.anchor,m,_);return}if(O===Wo){M(h,m,_);return}if(I!==2&&T&1&&A)if(I===0)A.beforeEnter(R),i(R,m,_),Ke(()=>A.enter(R),w);else{const{leave:D,delayLeave:H,afterLeave:j}=A,te=()=>i(R,m,_),be=()=>{D(R,()=>{te(),j&&j()})};H?H(R,te,be):be()}else i(R,m,_)},ot=(h,m,_,I=!1,w=!1)=>{const{type:R,props:O,ref:A,children:N,dynamicChildren:T,shapeFlag:W,patchFlag:D,dirs:H}=h;if(A!=null&&ba(A,null,_,h,!0),W&256){m.ctx.deactivate(h);return}const j=W&1&&H,te=!ga(h);let be;if(te&&(be=O&&O.onVnodeBeforeUnmount)&&It(be,m,h),W&6)L(h.component,_,I);else{if(W&128){h.suspense.unmount(_,I);return}j&&In(h,null,m,"beforeUnmount"),W&64?h.type.remove(h,m,_,w,pe,I):T&&(R!==lt||D>0&&D&64)?P(T,m,_,!1,!0):(R===lt&&D&384||!w&&W&16)&&P(N,m,_),I&&Do(h)}(te&&(be=O&&O.onVnodeUnmounted)||j)&&Ke(()=>{be&&It(be,m,h),j&&In(h,null,m,"unmounted")},_)},Do=h=>{const{type:m,el:_,anchor:I,transition:w}=h;if(m===lt){y(_,I);return}if(m===Wo){K(h);return}const R=()=>{r(_),w&&!w.persisted&&w.afterLeave&&w.afterLeave()};if(h.shapeFlag&1&&w&&!w.persisted){const{leave:O,delayLeave:A}=w,N=()=>O(_,R);A?A(h.el,R,N):N()}else R()},y=(h,m)=>{let _;for(;h!==m;)_=f(h),r(h),h=_;r(m)},L=(h,m,_)=>{const{bum:I,scope:w,update:R,subTree:O,um:A}=h;I&&ls(I),w.stop(),R&&(R.active=!1,ot(O,h,m,_)),A&&Ke(A,m),Ke(()=>{h.isUnmounted=!0},m),m&&m.pendingBranch&&!m.isUnmounted&&h.asyncDep&&!h.asyncResolved&&h.suspenseId===m.pendingId&&(m.deps--,m.deps===0&&m.resolve())},P=(h,m,_,I=!1,w=!1,R=0)=>{for(let O=R;O<h.length;O++)ot(h[O],m,_,I,w)},U=h=>h.shapeFlag&6?U(h.component.subTree):h.shapeFlag&128?h.suspense.next():f(h.anchor||h.el),ce=(h,m,_)=>{h==null?m._vnode&&ot(m._vnode,null,null,!0):b(m._vnode||null,h,m,null,null,null,_),Of(),m._vnode=h},pe={p:b,um:ot,m:bt,r:Do,mt:Nt,mc:ne,pc:et,pbc:Ae,n:U,o:t};let X,q;return e&&([X,q]=e(pe)),{render:ce,hydrate:X,createApp:H_(ce,X)}}function En({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Xf(t,e,n=!1){const i=t.children,r=e.children;if(V(i)&&V(r))for(let s=0;s<i.length;s++){const o=i[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=sn(r[s]),a.el=o.el),n||Xf(o,a))}}function V_(t){const e=t.slice(),n=[0];let i,r,s,o,a;const l=t.length;for(i=0;i<l;i++){const c=t[i];if(c!==0){if(r=n[n.length-1],t[r]<c){e[i]=r,n.push(i);continue}for(s=0,o=n.length-1;s<o;)a=s+o>>1,t[n[a]]<c?s=a+1:o=a;c<t[n[s]]&&(s>0&&(e[i]=n[s-1]),n[s]=i)}}for(s=n.length,o=n[s-1];s-- >0;)n[s]=o,o=e[o];return n}const j_=t=>t.__isTeleport,yl="components";function y2(t,e){return eh(yl,t,!0,e)||t}const Zf=Symbol();function b2(t){return ke(t)?eh(yl,t,!1)||t:t||Zf}function eh(t,e,n=!0,i=!1){const r=it||Me;if(r){const s=r.type;if(t===yl){const a=sv(s);if(a&&(a===e||a===Rt(e)||a===Qs(Rt(e))))return s}const o=ru(r[t]||s[t],e)||ru(r.appContext[t],e);return!o&&i?s:o}}function ru(t,e){return t&&(t[e]||t[Rt(e)]||t[Qs(Rt(e))])}const lt=Symbol(void 0),bl=Symbol(void 0),_t=Symbol(void 0),Wo=Symbol(void 0),cr=[];let Dn=null;function th(t=!1){cr.push(Dn=t?null:[])}function $_(){cr.pop(),Dn=cr[cr.length-1]||null}let Is=1;function su(t){Is+=t}function nh(t){return t.dynamicChildren=Is>0?Dn||fi:null,$_(),Is>0&&Dn&&Dn.push(t),t}function w2(t,e,n,i,r,s){return nh(sh(t,e,n,i,r,s,!0))}function ih(t,e,n,i,r){return nh(Ye(t,e,n,i,r,!0))}function Es(t){return t?t.__v_isVNode===!0:!1}function Rn(t,e){return t.type===e.type&&t.key===e.key}const no="__vInternal",rh=({key:t})=>t!=null?t:null,us=({ref:t,ref_key:e,ref_for:n})=>t!=null?ke(t)||Ue(t)||G(t)?{i:it,r:t,k:e,f:!!n}:t:null;function sh(t,e=null,n=null,i=0,r=null,s=t===lt?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&rh(e),ref:e&&us(e),scopeId:Zs,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null};return a?(wl(l,n),s&128&&t.normalize(l)):n&&(l.shapeFlag|=ke(n)?8:16),Is>0&&!o&&Dn&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&Dn.push(l),l}const Ye=q_;function q_(t,e=null,n=null,i=0,r=null,s=!1){if((!t||t===Zf)&&(t=_t),Es(t)){const a=bi(t,e,!0);return n&&wl(a,n),a}if(ov(t)&&(t=t.__vccOpts),e){e=G_(e);let{class:a,style:l}=e;a&&!ke(a)&&(e.class=il(a)),Se(l)&&(wf(l)&&!V(l)&&(l=We({},l)),e.style=nl(l))}const o=ke(t)?1:p_(t)?128:j_(t)?64:Se(t)?4:G(t)?2:0;return sh(t,e,n,i,r,o,s,!0)}function G_(t){return t?wf(t)||no in t?We({},t):t:null}function bi(t,e,n=!1){const{props:i,ref:r,patchFlag:s,children:o}=t,a=e?Y_(i||{},e):i;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&rh(a),ref:e&&e.ref?n&&r?V(r)?r.concat(us(e)):[r,us(e)]:us(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==lt?s===-1?16:s|16:s,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&bi(t.ssContent),ssFallback:t.ssFallback&&bi(t.ssFallback),el:t.el,anchor:t.anchor}}function K_(t=" ",e=0){return Ye(bl,null,t,e)}function I2(t="",e=!1){return e?(th(),ih(_t,null,t)):Ye(_t,null,t)}function Et(t){return t==null||typeof t=="boolean"?Ye(_t):V(t)?Ye(lt,null,t.slice()):typeof t=="object"?sn(t):Ye(bl,null,String(t))}function sn(t){return t.el===null||t.memo?t:bi(t)}function wl(t,e){let n=0;const{shapeFlag:i}=t;if(e==null)e=null;else if(V(e))n=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),wl(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!(no in e)?e._ctx=it:r===3&&it&&(it.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else G(e)?(e={default:e,_ctx:it},n=32):(e=String(e),i&64?(n=16,e=[K_(e)]):n=8);t.children=e,t.shapeFlag|=n}function Y_(...t){const e={};for(let n=0;n<t.length;n++){const i=t[n];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=il([e.class,i.class]));else if(r==="style")e.style=nl([e.style,i.style]);else if(Gs(r)){const s=e[r],o=i[r];o&&s!==o&&!(V(s)&&s.includes(o))&&(e[r]=s?[].concat(s,o):o)}else r!==""&&(e[r]=i[r])}return e}function It(t,e,n,i=null){ut(t,e,7,[n,i])}function E2(t,e,n,i){let r;const s=n&&n[i];if(V(t)||ke(t)){r=new Array(t.length);for(let o=0,a=t.length;o<a;o++)r[o]=e(t[o],o,void 0,s&&s[o])}else if(typeof t=="number"){r=new Array(t);for(let o=0;o<t;o++)r[o]=e(o+1,o,void 0,s&&s[o])}else if(Se(t))if(t[Symbol.iterator])r=Array.from(t,(o,a)=>e(o,a,void 0,s&&s[a]));else{const o=Object.keys(t);r=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];r[a]=e(t[c],c,a,s&&s[a])}}else r=[];return n&&(n[i]=r),r}function C2(t,e,n={},i,r){if(it.isCE)return Ye("slot",e==="default"?null:{name:e},i&&i());let s=t[e];s&&s._c&&(s._d=!1),th();const o=s&&oh(s(n)),a=ih(lt,{key:n.key||`_${e}`},o||(i?i():[]),o&&t._===1?64:-2);return!r&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),s&&s._c&&(s._d=!0),a}function oh(t){return t.some(e=>Es(e)?!(e.type===_t||e.type===lt&&!oh(e.children)):!0)?t:null}const wa=t=>t?ah(t)?Il(t)||t.proxy:wa(t.parent):null,Cs=We(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>wa(t.parent),$root:t=>wa(t.root),$emit:t=>t.emit,$options:t=>$f(t),$forceUpdate:t=>()=>kf(t.update),$nextTick:t=>Rf.bind(t.proxy),$watch:t=>g_.bind(t)}),Q_={get({_:t},e){const{ctx:n,setupState:i,data:r,props:s,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const p=o[e];if(p!==void 0)switch(p){case 1:return i[e];case 2:return r[e];case 4:return n[e];case 3:return s[e]}else{if(i!==fe&&ie(i,e))return o[e]=1,i[e];if(r!==fe&&ie(r,e))return o[e]=2,r[e];if((c=t.propsOptions[0])&&ie(c,e))return o[e]=3,s[e];if(n!==fe&&ie(n,e))return o[e]=4,n[e];_a&&(o[e]=0)}}const u=Cs[e];let d,f;if(u)return e==="$attrs"&&st(t,"get",e),u(t);if((d=a.__cssModules)&&(d=d[e]))return d;if(n!==fe&&ie(n,e))return o[e]=4,n[e];if(f=l.config.globalProperties,ie(f,e))return f[e]},set({_:t},e,n){const{data:i,setupState:r,ctx:s}=t;return r!==fe&&ie(r,e)?(r[e]=n,!0):i!==fe&&ie(i,e)?(i[e]=n,!0):ie(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(s[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:i,appContext:r,propsOptions:s}},o){let a;return!!n[o]||t!==fe&&ie(t,o)||e!==fe&&ie(e,o)||(a=s[0])&&ie(a,o)||ie(i,o)||ie(Cs,o)||ie(r.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?this.set(t,e,n.get(),null):n.value!=null&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}},J_=Jf();let X_=0;function Z_(t,e,n){const i=t.type,r=(e?e.appContext:t.appContext)||J_,s={uid:X_++,vnode:t,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new Eg(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Gf(i,r),emitsOptions:Mf(i,r),emit:null,emitted:null,propsDefaults:fe,inheritAttrs:i.inheritAttrs,ctx:fe,data:fe,props:fe,attrs:fe,slots:fe,refs:fe,setupState:fe,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=l_.bind(null,s),t.ce&&t.ce(s),s}let Me=null;const ev=()=>Me||it,wi=t=>{Me=t,t.scope.on()},Ln=()=>{Me&&Me.scope.off(),Me=null};function ah(t){return t.vnode.shapeFlag&4}let Ir=!1;function tv(t,e=!1){Ir=e;const{props:n,children:i}=t.vnode,r=ah(t);M_(t,n,r,e),F_(t,i);const s=r?nv(t,e):void 0;return Ir=!1,s}function nv(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=If(new Proxy(t.ctx,Q_));const{setup:i}=n;if(i){const r=t.setupContext=i.length>1?rv(t):null;wi(t),Oi();const s=pn(i,t,0,[t.props,r]);if(xi(),Ln(),of(s)){if(s.then(Ln,Ln),e)return s.then(o=>{ou(t,o,e)}).catch(o=>{Xs(o,t,0)});t.asyncDep=s}else ou(t,s,e)}else lh(t,e)}function ou(t,e,n){G(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Se(e)&&(t.setupState=Sf(e)),lh(t,n)}let au;function lh(t,e,n){const i=t.type;if(!t.render){if(!e&&au&&!i.render){const r=i.template;if(r){const{isCustomElement:s,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=i,c=We(We({isCustomElement:s,delimiters:a},o),l);i.render=au(r,c)}}t.render=i.render||mt}wi(t),Oi(),k_(t),xi(),Ln()}function iv(t){return new Proxy(t.attrs,{get(e,n){return st(t,"get","$attrs"),e[n]}})}function rv(t){const e=i=>{t.exposed=i||{}};let n;return{get attrs(){return n||(n=iv(t))},slots:t.slots,emit:t.emit,expose:e}}function Il(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Sf(If(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Cs)return Cs[n](t)}}))}function sv(t){return G(t)&&t.displayName||t.name}function ov(t){return G(t)&&"__vccOpts"in t}const Te=(t,e)=>n_(t,e,Ir);function Wr(t,e,n){const i=arguments.length;return i===2?Se(e)&&!V(e)?Es(e)?Ye(t,null,[e]):Ye(t,e):Ye(t,null,e):(i>3?n=Array.prototype.slice.call(arguments,2):i===3&&Es(n)&&(n=[n]),Ye(t,e,n))}const av="3.2.31",lv="http://www.w3.org/2000/svg",kn=typeof document!="undefined"?document:null,lu=kn&&kn.createElement("template"),cv={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,i)=>{const r=e?kn.createElementNS(lv,t):kn.createElement(t,n?{is:n}:void 0);return t==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:t=>kn.createTextNode(t),createComment:t=>kn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>kn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},cloneNode(t){const e=t.cloneNode(!0);return"_value"in t&&(e._value=t._value),e},insertStaticContent(t,e,n,i,r,s){const o=n?n.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===s||!(r=r.nextSibling)););else{lu.innerHTML=i?`<svg>${t}</svg>`:t;const a=lu.content;if(i){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function uv(t,e,n){const i=t._vtc;i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function dv(t,e,n){const i=t.style,r=ke(n);if(n&&!r){for(const s in n)Ia(i,s,n[s]);if(e&&!ke(e))for(const s in e)n[s]==null&&Ia(i,s,"")}else{const s=i.display;r?e!==n&&(i.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(i.display=s)}}const cu=/\s*!important$/;function Ia(t,e,n){if(V(n))n.forEach(i=>Ia(t,e,i));else if(e.startsWith("--"))t.setProperty(e,n);else{const i=fv(t,e);cu.test(n)?t.setProperty(Pi(i),n.replace(cu,""),"important"):t[i]=n}}const uu=["Webkit","Moz","ms"],Ho={};function fv(t,e){const n=Ho[e];if(n)return n;let i=Rt(e);if(i!=="filter"&&i in t)return Ho[e]=i;i=Qs(i);for(let r=0;r<uu.length;r++){const s=uu[r]+i;if(s in t)return Ho[e]=s}return e}const du="http://www.w3.org/1999/xlink";function hv(t,e,n,i,r){if(i&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(du,e.slice(6,e.length)):t.setAttributeNS(du,e,n);else{const s=fg(e);n==null||s&&!nf(n)?t.removeAttribute(e):t.setAttribute(e,s?"":n)}}function pv(t,e,n,i,r,s,o){if(e==="innerHTML"||e==="textContent"){i&&o(i,r,s),t[e]=n==null?"":n;return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const a=n==null?"":n;(t.value!==a||t.tagName==="OPTION")&&(t.value=a),n==null&&t.removeAttribute(e);return}if(n===""||n==null){const a=typeof t[e];if(a==="boolean"){t[e]=nf(n);return}else if(n==null&&a==="string"){t[e]="",t.removeAttribute(e);return}else if(a==="number"){try{t[e]=0}catch{}t.removeAttribute(e);return}}try{t[e]=n}catch{}}let Ts=Date.now,ch=!1;if(typeof window!="undefined"){Ts()>document.createEvent("Event").timeStamp&&(Ts=()=>performance.now());const t=navigator.userAgent.match(/firefox\/(\d+)/i);ch=!!(t&&Number(t[1])<=53)}let Ea=0;const mv=Promise.resolve(),gv=()=>{Ea=0},_v=()=>Ea||(mv.then(gv),Ea=Ts());function ci(t,e,n,i){t.addEventListener(e,n,i)}function vv(t,e,n,i){t.removeEventListener(e,n,i)}function yv(t,e,n,i,r=null){const s=t._vei||(t._vei={}),o=s[e];if(i&&o)o.value=i;else{const[a,l]=bv(e);if(i){const c=s[e]=wv(i,r);ci(t,a,c,l)}else o&&(vv(t,a,o,l),s[e]=void 0)}}const fu=/(?:Once|Passive|Capture)$/;function bv(t){let e;if(fu.test(t)){e={};let n;for(;n=t.match(fu);)t=t.slice(0,t.length-n[0].length),e[n[0].toLowerCase()]=!0}return[Pi(t.slice(2)),e]}function wv(t,e){const n=i=>{const r=i.timeStamp||Ts();(ch||r>=n.attached-1)&&ut(Iv(i,n.value),e,5,[i])};return n.value=t,n.attached=_v(),n}function Iv(t,e){if(V(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const hu=/^on[a-z]/,Ev=(t,e,n,i,r=!1,s,o,a,l)=>{e==="class"?uv(t,i,r):e==="style"?dv(t,n,i):Gs(e)?rl(e)||yv(t,e,n,i,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Cv(t,e,i,r))?pv(t,e,i,s,o,a,l):(e==="true-value"?t._trueValue=i:e==="false-value"&&(t._falseValue=i),hv(t,e,i,r))};function Cv(t,e,n,i){return i?!!(e==="innerHTML"||e==="textContent"||e in t&&hu.test(e)&&G(n)):e==="spellcheck"||e==="draggable"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||hu.test(e)&&ke(n)?!1:e in t}const Jt="transition",qi="animation",uh=(t,{slots:e})=>Wr(Ff,Tv(t),e);uh.displayName="Transition";const dh={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};uh.props=We({},Ff.props,dh);const Cn=(t,e=[])=>{V(t)?t.forEach(n=>n(...e)):t&&t(...e)},pu=t=>t?V(t)?t.some(e=>e.length>1):t.length>1:!1;function Tv(t){const e={};for(const F in t)F in dh||(e[F]=t[F]);if(t.css===!1)return e;const{name:n="v",type:i,duration:r,enterFromClass:s=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:l=s,appearActiveClass:c=o,appearToClass:u=a,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:f=`${n}-leave-active`,leaveToClass:p=`${n}-leave-to`}=t,g=Sv(r),C=g&&g[0],b=g&&g[1],{onBeforeEnter:v,onEnter:E,onEnterCancelled:x,onLeave:M,onLeaveCancelled:K,onBeforeAppear:Z=v,onAppear:z=E,onAppearCancelled:_e=x}=e,ne=(F,Ie,Ge)=>{ii(F,Ie?u:a),ii(F,Ie?c:o),Ge&&Ge()},ye=(F,Ie)=>{ii(F,p),ii(F,f),Ie&&Ie()},Ae=F=>(Ie,Ge)=>{const Nt=F?z:E,Ee=()=>ne(Ie,F,Ge);Cn(Nt,[Ie,Ee]),mu(()=>{ii(Ie,F?l:s),Xt(Ie,F?u:a),pu(Nt)||gu(Ie,i,C,Ee)})};return We(e,{onBeforeEnter(F){Cn(v,[F]),Xt(F,s),Xt(F,o)},onBeforeAppear(F){Cn(Z,[F]),Xt(F,l),Xt(F,c)},onEnter:Ae(!1),onAppear:Ae(!0),onLeave(F,Ie){const Ge=()=>ye(F,Ie);Xt(F,d),kv(),Xt(F,f),mu(()=>{ii(F,d),Xt(F,p),pu(M)||gu(F,i,b,Ge)}),Cn(M,[F,Ge])},onEnterCancelled(F){ne(F,!1),Cn(x,[F])},onAppearCancelled(F){ne(F,!0),Cn(_e,[F])},onLeaveCancelled(F){ye(F),Cn(K,[F])}})}function Sv(t){if(t==null)return null;if(Se(t))return[Bo(t.enter),Bo(t.leave)];{const e=Bo(t);return[e,e]}}function Bo(t){return vs(t)}function Xt(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t._vtc||(t._vtc=new Set)).add(e)}function ii(t,e){e.split(/\s+/).forEach(i=>i&&t.classList.remove(i));const{_vtc:n}=t;n&&(n.delete(e),n.size||(t._vtc=void 0))}function mu(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let Av=0;function gu(t,e,n,i){const r=t._endId=++Av,s=()=>{r===t._endId&&i()};if(n)return setTimeout(s,n);const{type:o,timeout:a,propCount:l}=Rv(t,e);if(!o)return i();const c=o+"end";let u=0;const d=()=>{t.removeEventListener(c,f),s()},f=p=>{p.target===t&&++u>=l&&d()};setTimeout(()=>{u<l&&d()},a+1),t.addEventListener(c,f)}function Rv(t,e){const n=window.getComputedStyle(t),i=g=>(n[g]||"").split(", "),r=i(Jt+"Delay"),s=i(Jt+"Duration"),o=_u(r,s),a=i(qi+"Delay"),l=i(qi+"Duration"),c=_u(a,l);let u=null,d=0,f=0;e===Jt?o>0&&(u=Jt,d=o,f=s.length):e===qi?c>0&&(u=qi,d=c,f=l.length):(d=Math.max(o,c),u=d>0?o>c?Jt:qi:null,f=u?u===Jt?s.length:l.length:0);const p=u===Jt&&/\b(transform|all)(,|$)/.test(n[Jt+"Property"]);return{type:u,timeout:d,propCount:f,hasTransform:p}}function _u(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,i)=>vu(n)+vu(t[i])))}function vu(t){return Number(t.slice(0,-1).replace(",","."))*1e3}function kv(){return document.body.offsetHeight}const yu=t=>{const e=t.props["onUpdate:modelValue"];return V(e)?n=>ls(e,n):e};function Nv(t){t.target.composing=!0}function bu(t){const e=t.target;e.composing&&(e.composing=!1,Pv(e,"input"))}function Pv(t,e){const n=document.createEvent("HTMLEvents");n.initEvent(e,!0,!0),t.dispatchEvent(n)}const T2={created(t,{modifiers:{lazy:e,trim:n,number:i}},r){t._assign=yu(r);const s=i||r.props&&r.props.type==="number";ci(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n?a=a.trim():s&&(a=vs(a)),t._assign(a)}),n&&ci(t,"change",()=>{t.value=t.value.trim()}),e||(ci(t,"compositionstart",Nv),ci(t,"compositionend",bu),ci(t,"change",bu))},mounted(t,{value:e}){t.value=e==null?"":e},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:i,number:r}},s){if(t._assign=yu(s),t.composing||document.activeElement===t&&(n||i&&t.value.trim()===e||(r||t.type==="number")&&vs(t.value)===e))return;const o=e==null?"":e;t.value!==o&&(t.value=o)}},Ov=["ctrl","shift","alt","meta"],xv={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>Ov.some(n=>t[`${n}Key`]&&!e.includes(n))},S2=(t,e)=>(n,...i)=>{for(let r=0;r<e.length;r++){const s=xv[e[r]];if(s&&s(n,e))return}return t(n,...i)},A2={beforeMount(t,{value:e},{transition:n}){t._vod=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):Gi(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:i}){!e!=!n&&(i?e?(i.beforeEnter(t),Gi(t,!0),i.enter(t)):i.leave(t,()=>{Gi(t,!1)}):Gi(t,e))},beforeUnmount(t,{value:e}){Gi(t,e)}};function Gi(t,e){t.style.display=e?t._vod:"none"}const Mv=We({patchProp:Ev},cv);let wu;function Dv(){return wu||(wu=B_(Mv))}const R2=(...t)=>{const e=Dv().createApp(...t),{mount:n}=e;return e.mount=i=>{const r=Lv(i);if(!r)return;const s=e._component;!G(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.innerHTML="";const o=n(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function Lv(t){return ke(t)?document.querySelector(t):t}/*!
  * vue-router v4.0.14
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const fh=typeof Symbol=="function"&&typeof Symbol.toStringTag=="symbol",Di=t=>fh?Symbol(t):"_vr_"+t,Fv=Di("rvlm"),Iu=Di("rvd"),io=Di("r"),hh=Di("rl"),Ca=Di("rvl"),ui=typeof window!="undefined";function Uv(t){return t.__esModule||fh&&t[Symbol.toStringTag]==="Module"}const de=Object.assign;function zo(t,e){const n={};for(const i in e){const r=e[i];n[i]=Array.isArray(r)?r.map(t):t(r)}return n}const ur=()=>{},Wv=/\/$/,Hv=t=>t.replace(Wv,"");function Vo(t,e,n="/"){let i,r={},s="",o="";const a=e.indexOf("?"),l=e.indexOf("#",a>-1?a:0);return a>-1&&(i=e.slice(0,a),s=e.slice(a+1,l>-1?l:e.length),r=t(s)),l>-1&&(i=i||e.slice(0,l),o=e.slice(l,e.length)),i=jv(i!=null?i:e,n),{fullPath:i+(s&&"?")+s+o,path:i,query:r,hash:o}}function Bv(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Eu(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function zv(t,e,n){const i=e.matched.length-1,r=n.matched.length-1;return i>-1&&i===r&&Ii(e.matched[i],n.matched[r])&&ph(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Ii(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function ph(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!Vv(t[n],e[n]))return!1;return!0}function Vv(t,e){return Array.isArray(t)?Cu(t,e):Array.isArray(e)?Cu(e,t):t===e}function Cu(t,e){return Array.isArray(e)?t.length===e.length&&t.every((n,i)=>n===e[i]):t.length===1&&t[0]===e}function jv(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),i=t.split("/");let r=n.length-1,s,o;for(s=0;s<i.length;s++)if(o=i[s],!(r===1||o==="."))if(o==="..")r--;else break;return n.slice(0,r).join("/")+"/"+i.slice(s-(s===i.length?1:0)).join("/")}var Er;(function(t){t.pop="pop",t.push="push"})(Er||(Er={}));var dr;(function(t){t.back="back",t.forward="forward",t.unknown=""})(dr||(dr={}));function $v(t){if(!t)if(ui){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),Hv(t)}const qv=/^[^#]+#/;function Gv(t,e){return t.replace(qv,"#")+e}function Kv(t,e){const n=document.documentElement.getBoundingClientRect(),i=t.getBoundingClientRect();return{behavior:e.behavior,left:i.left-n.left-(e.left||0),top:i.top-n.top-(e.top||0)}}const ro=()=>({left:window.pageXOffset,top:window.pageYOffset});function Yv(t){let e;if("el"in t){const n=t.el,i=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?i?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;e=Kv(r,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Tu(t,e){return(history.state?history.state.position-e:-1)+t}const Ta=new Map;function Qv(t,e){Ta.set(t,e)}function Jv(t){const e=Ta.get(t);return Ta.delete(t),e}let Xv=()=>location.protocol+"//"+location.host;function mh(t,e){const{pathname:n,search:i,hash:r}=e,s=t.indexOf("#");if(s>-1){let a=r.includes(t.slice(s))?t.slice(s).length:1,l=r.slice(a);return l[0]!=="/"&&(l="/"+l),Eu(l,"")}return Eu(n,t)+i+r}function Zv(t,e,n,i){let r=[],s=[],o=null;const a=({state:f})=>{const p=mh(t,location),g=n.value,C=e.value;let b=0;if(f){if(n.value=p,e.value=f,o&&o===g){o=null;return}b=C?f.position-C.position:0}else i(p);r.forEach(v=>{v(n.value,g,{delta:b,type:Er.pop,direction:b?b>0?dr.forward:dr.back:dr.unknown})})};function l(){o=n.value}function c(f){r.push(f);const p=()=>{const g=r.indexOf(f);g>-1&&r.splice(g,1)};return s.push(p),p}function u(){const{history:f}=window;!f.state||f.replaceState(de({},f.state,{scroll:ro()}),"")}function d(){for(const f of s)f();s=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u),{pauseListeners:l,listen:c,destroy:d}}function Su(t,e,n,i=!1,r=!1){return{back:t,current:e,forward:n,replaced:i,position:window.history.length,scroll:r?ro():null}}function ey(t){const{history:e,location:n}=window,i={value:mh(t,n)},r={value:e.state};r.value||s(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function s(l,c,u){const d=t.indexOf("#"),f=d>-1?(n.host&&document.querySelector("base")?t:t.slice(d))+l:Xv()+t+l;try{e[u?"replaceState":"pushState"](c,"",f),r.value=c}catch(p){console.error(p),n[u?"replace":"assign"](f)}}function o(l,c){const u=de({},e.state,Su(r.value.back,l,r.value.forward,!0),c,{position:r.value.position});s(l,u,!0),i.value=l}function a(l,c){const u=de({},r.value,e.state,{forward:l,scroll:ro()});s(u.current,u,!0);const d=de({},Su(i.value,l,null),{position:u.position+1},c);s(l,d,!1),i.value=l}return{location:i,state:r,push:a,replace:o}}function k2(t){t=$v(t);const e=ey(t),n=Zv(t,e.state,e.location,e.replace);function i(s,o=!0){o||n.pauseListeners(),history.go(s)}const r=de({location:"",base:t,go:i,createHref:Gv.bind(null,t)},e,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function ty(t){return typeof t=="string"||t&&typeof t=="object"}function gh(t){return typeof t=="string"||typeof t=="symbol"}const Zt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},_h=Di("nf");var Au;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Au||(Au={}));function Ei(t,e){return de(new Error,{type:t,[_h]:!0},e)}function en(t,e){return t instanceof Error&&_h in t&&(e==null||!!(t.type&e))}const Ru="[^/]+?",ny={sensitive:!1,strict:!1,start:!0,end:!0},iy=/[.+*?^${}()[\]/\\]/g;function ry(t,e){const n=de({},ny,e),i=[];let r=n.start?"^":"";const s=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(r+="/");for(let d=0;d<c.length;d++){const f=c[d];let p=40+(n.sensitive?.25:0);if(f.type===0)d||(r+="/"),r+=f.value.replace(iy,"\\$&"),p+=40;else if(f.type===1){const{value:g,repeatable:C,optional:b,regexp:v}=f;s.push({name:g,repeatable:C,optional:b});const E=v||Ru;if(E!==Ru){p+=10;try{new RegExp(`(${E})`)}catch(M){throw new Error(`Invalid custom RegExp for param "${g}" (${E}): `+M.message)}}let x=C?`((?:${E})(?:/(?:${E}))*)`:`(${E})`;d||(x=b&&c.length<2?`(?:/${x})`:"/"+x),b&&(x+="?"),r+=x,p+=20,b&&(p+=-8),C&&(p+=-20),E===".*"&&(p+=-50)}u.push(p)}i.push(u)}if(n.strict&&n.end){const c=i.length-1;i[c][i[c].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&(r+="(?:/|$)");const o=new RegExp(r,n.sensitive?"":"i");function a(c){const u=c.match(o),d={};if(!u)return null;for(let f=1;f<u.length;f++){const p=u[f]||"",g=s[f-1];d[g.name]=p&&g.repeatable?p.split("/"):p}return d}function l(c){let u="",d=!1;for(const f of t){(!d||!u.endsWith("/"))&&(u+="/"),d=!1;for(const p of f)if(p.type===0)u+=p.value;else if(p.type===1){const{value:g,repeatable:C,optional:b}=p,v=g in c?c[g]:"";if(Array.isArray(v)&&!C)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const E=Array.isArray(v)?v.join("/"):v;if(!E)if(b)f.length<2&&(u.endsWith("/")?u=u.slice(0,-1):d=!0);else throw new Error(`Missing required param "${g}"`);u+=E}}return u}return{re:o,score:i,keys:s,parse:a,stringify:l}}function sy(t,e){let n=0;for(;n<t.length&&n<e.length;){const i=e[n]-t[n];if(i)return i;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function oy(t,e){let n=0;const i=t.score,r=e.score;for(;n<i.length&&n<r.length;){const s=sy(i[n],r[n]);if(s)return s;n++}return r.length-i.length}const ay={type:0,value:""},ly=/[a-zA-Z0-9_]/;function cy(t){if(!t)return[[]];if(t==="/")return[[ay]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(p){throw new Error(`ERR (${n})/"${c}": ${p}`)}let n=0,i=n;const r=[];let s;function o(){s&&r.push(s),s=[]}let a=0,l,c="",u="";function d(){!c||(n===0?s.push({type:0,value:c}):n===1||n===2||n===3?(s.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function f(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){i=n,n=4;continue}switch(n){case 0:l==="/"?(c&&d(),o()):l===":"?(d(),n=1):f();break;case 4:f(),n=i;break;case 1:l==="("?n=2:ly.test(l)?f():(d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),d(),o(),r}function uy(t,e,n){const i=ry(cy(t.path),n),r=de(i,{record:t,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function dy(t,e){const n=[],i=new Map;e=Nu({strict:!1,end:!0,sensitive:!1},e);function r(u){return i.get(u)}function s(u,d,f){const p=!f,g=hy(u);g.aliasOf=f&&f.record;const C=Nu(e,u),b=[g];if("alias"in u){const x=typeof u.alias=="string"?[u.alias]:u.alias;for(const M of x)b.push(de({},g,{components:f?f.record.components:g.components,path:M,aliasOf:f?f.record:g}))}let v,E;for(const x of b){const{path:M}=x;if(d&&M[0]!=="/"){const K=d.record.path,Z=K[K.length-1]==="/"?"":"/";x.path=d.record.path+(M&&Z+M)}if(v=uy(x,d,C),f?f.alias.push(v):(E=E||v,E!==v&&E.alias.push(v),p&&u.name&&!ku(v)&&o(u.name)),"children"in g){const K=g.children;for(let Z=0;Z<K.length;Z++)s(K[Z],v,f&&f.children[Z])}f=f||v,l(v)}return E?()=>{o(E)}:ur}function o(u){if(gh(u)){const d=i.get(u);d&&(i.delete(u),n.splice(n.indexOf(d),1),d.children.forEach(o),d.alias.forEach(o))}else{const d=n.indexOf(u);d>-1&&(n.splice(d,1),u.record.name&&i.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function l(u){let d=0;for(;d<n.length&&oy(u,n[d])>=0&&(u.record.path!==n[d].record.path||!vh(u,n[d]));)d++;n.splice(d,0,u),u.record.name&&!ku(u)&&i.set(u.record.name,u)}function c(u,d){let f,p={},g,C;if("name"in u&&u.name){if(f=i.get(u.name),!f)throw Ei(1,{location:u});C=f.record.name,p=de(fy(d.params,f.keys.filter(E=>!E.optional).map(E=>E.name)),u.params),g=f.stringify(p)}else if("path"in u)g=u.path,f=n.find(E=>E.re.test(g)),f&&(p=f.parse(g),C=f.record.name);else{if(f=d.name?i.get(d.name):n.find(E=>E.re.test(d.path)),!f)throw Ei(1,{location:u,currentLocation:d});C=f.record.name,p=de({},d.params,u.params),g=f.stringify(p)}const b=[];let v=f;for(;v;)b.unshift(v.record),v=v.parent;return{name:C,path:g,params:p,matched:b,meta:my(b)}}return t.forEach(u=>s(u)),{addRoute:s,resolve:c,removeRoute:o,getRoutes:a,getRecordMatcher:r}}function fy(t,e){const n={};for(const i of e)i in t&&(n[i]=t[i]);return n}function hy(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:py(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||{}:{default:t.component}}}function py(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const i in t.components)e[i]=typeof n=="boolean"?n:n[i];return e}function ku(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function my(t){return t.reduce((e,n)=>de(e,n.meta),{})}function Nu(t,e){const n={};for(const i in t)n[i]=i in e?e[i]:t[i];return n}function vh(t,e){return e.children.some(n=>n===t||vh(t,n))}const yh=/#/g,gy=/&/g,_y=/\//g,vy=/=/g,yy=/\?/g,bh=/\+/g,by=/%5B/g,wy=/%5D/g,wh=/%5E/g,Iy=/%60/g,Ih=/%7B/g,Ey=/%7C/g,Eh=/%7D/g,Cy=/%20/g;function El(t){return encodeURI(""+t).replace(Ey,"|").replace(by,"[").replace(wy,"]")}function Ty(t){return El(t).replace(Ih,"{").replace(Eh,"}").replace(wh,"^")}function Sa(t){return El(t).replace(bh,"%2B").replace(Cy,"+").replace(yh,"%23").replace(gy,"%26").replace(Iy,"`").replace(Ih,"{").replace(Eh,"}").replace(wh,"^")}function Sy(t){return Sa(t).replace(vy,"%3D")}function Ay(t){return El(t).replace(yh,"%23").replace(yy,"%3F")}function Ry(t){return t==null?"":Ay(t).replace(_y,"%2F")}function Ss(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function ky(t){const e={};if(t===""||t==="?")return e;const i=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<i.length;++r){const s=i[r].replace(bh," "),o=s.indexOf("="),a=Ss(o<0?s:s.slice(0,o)),l=o<0?null:Ss(s.slice(o+1));if(a in e){let c=e[a];Array.isArray(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function Pu(t){let e="";for(let n in t){const i=t[n];if(n=Sy(n),i==null){i!==void 0&&(e+=(e.length?"&":"")+n);continue}(Array.isArray(i)?i.map(s=>s&&Sa(s)):[i&&Sa(i)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+n,s!=null&&(e+="="+s))})}return e}function Ny(t){const e={};for(const n in t){const i=t[n];i!==void 0&&(e[n]=Array.isArray(i)?i.map(r=>r==null?null:""+r):i==null?i:""+i)}return e}function Ki(){let t=[];function e(i){return t.push(i),()=>{const r=t.indexOf(i);r>-1&&t.splice(r,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function on(t,e,n,i,r){const s=i&&(i.enterCallbacks[r]=i.enterCallbacks[r]||[]);return()=>new Promise((o,a)=>{const l=d=>{d===!1?a(Ei(4,{from:n,to:e})):d instanceof Error?a(d):ty(d)?a(Ei(2,{from:e,to:d})):(s&&i.enterCallbacks[r]===s&&typeof d=="function"&&s.push(d),o())},c=t.call(i&&i.instances[r],e,n,l);let u=Promise.resolve(c);t.length<3&&(u=u.then(l)),u.catch(d=>a(d))})}function jo(t,e,n,i){const r=[];for(const s of t)for(const o in s.components){let a=s.components[o];if(!(e!=="beforeRouteEnter"&&!s.instances[o]))if(Py(a)){const c=(a.__vccOpts||a)[e];c&&r.push(on(c,n,i,s,o))}else{let l=a();r.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${s.path}"`));const u=Uv(c)?c.default:c;s.components[o]=u;const f=(u.__vccOpts||u)[e];return f&&on(f,n,i,s,o)()}))}}return r}function Py(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Ou(t){const e=At(io),n=At(hh),i=Te(()=>e.resolve(or(t.to))),r=Te(()=>{const{matched:l}=i.value,{length:c}=l,u=l[c-1],d=n.matched;if(!u||!d.length)return-1;const f=d.findIndex(Ii.bind(null,u));if(f>-1)return f;const p=xu(l[c-2]);return c>1&&xu(u)===p&&d[d.length-1].path!==p?d.findIndex(Ii.bind(null,l[c-2])):f}),s=Te(()=>r.value>-1&&Dy(n.params,i.value.params)),o=Te(()=>r.value>-1&&r.value===n.matched.length-1&&ph(n.params,i.value.params));function a(l={}){return My(l)?e[or(t.replace)?"replace":"push"](or(t.to)).catch(ur):Promise.resolve()}return{route:i,href:Te(()=>i.value.href),isActive:s,isExactActive:o,navigate:a}}const Oy=Ur({name:"RouterLink",props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Ou,setup(t,{slots:e}){const n=Mi(Ou(t)),{options:i}=At(io),r=Te(()=>({[Mu(t.activeClass,i.linkActiveClass,"router-link-active")]:n.isActive,[Mu(t.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const s=e.default&&e.default(n);return t.custom?s:Wr("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},s)}}}),xy=Oy;function My(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function Dy(t,e){for(const n in e){const i=e[n],r=t[n];if(typeof i=="string"){if(i!==r)return!1}else if(!Array.isArray(r)||r.length!==i.length||i.some((s,o)=>s!==r[o]))return!1}return!0}function xu(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Mu=(t,e,n)=>t!=null?t:e!=null?e:n,Ly=Ur({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},setup(t,{attrs:e,slots:n}){const i=At(Ca),r=Te(()=>t.route||i.value),s=At(Iu,0),o=Te(()=>r.value.matched[s]);cs(Iu,s+1),cs(Fv,o),cs(Ca,r);const a=Jg();return Mn(()=>[a.value,o.value,t.name],([l,c,u],[d,f,p])=>{c&&(c.instances[u]=l,f&&f!==c&&l&&l===d&&(c.leaveGuards.size||(c.leaveGuards=f.leaveGuards),c.updateGuards.size||(c.updateGuards=f.updateGuards))),l&&c&&(!f||!Ii(c,f)||!d)&&(c.enterCallbacks[u]||[]).forEach(g=>g(l))},{flush:"post"}),()=>{const l=r.value,c=o.value,u=c&&c.components[t.name],d=t.name;if(!u)return Du(n.default,{Component:u,route:l});const f=c.props[t.name],p=f?f===!0?l.params:typeof f=="function"?f(l):f:null,C=Wr(u,de({},p,e,{onVnodeUnmounted:b=>{b.component.isUnmounted&&(c.instances[d]=null)},ref:a}));return Du(n.default,{Component:C,route:l})||C}}});function Du(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Fy=Ly;function N2(t){const e=dy(t.routes,t),n=t.parseQuery||ky,i=t.stringifyQuery||Pu,r=t.history,s=Ki(),o=Ki(),a=Ki(),l=Xg(Zt);let c=Zt;ui&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=zo.bind(null,y=>""+y),d=zo.bind(null,Ry),f=zo.bind(null,Ss);function p(y,L){let P,U;return gh(y)?(P=e.getRecordMatcher(y),U=L):U=y,e.addRoute(U,P)}function g(y){const L=e.getRecordMatcher(y);L&&e.removeRoute(L)}function C(){return e.getRoutes().map(y=>y.record)}function b(y){return!!e.getRecordMatcher(y)}function v(y,L){if(L=de({},L||l.value),typeof y=="string"){const q=Vo(n,y,L.path),h=e.resolve({path:q.path},L),m=r.createHref(q.fullPath);return de(q,h,{params:f(h.params),hash:Ss(q.hash),redirectedFrom:void 0,href:m})}let P;if("path"in y)P=de({},y,{path:Vo(n,y.path,L.path).path});else{const q=de({},y.params);for(const h in q)q[h]==null&&delete q[h];P=de({},y,{params:d(y.params)}),L.params=d(L.params)}const U=e.resolve(P,L),ce=y.hash||"";U.params=u(f(U.params));const pe=Bv(i,de({},y,{hash:Ty(ce),path:U.path})),X=r.createHref(pe);return de({fullPath:pe,hash:ce,query:i===Pu?Ny(y.query):y.query||{}},U,{redirectedFrom:void 0,href:X})}function E(y){return typeof y=="string"?Vo(n,y,l.value.path):de({},y)}function x(y,L){if(c!==y)return Ei(8,{from:L,to:y})}function M(y){return z(y)}function K(y){return M(de(E(y),{replace:!0}))}function Z(y){const L=y.matched[y.matched.length-1];if(L&&L.redirect){const{redirect:P}=L;let U=typeof P=="function"?P(y):P;return typeof U=="string"&&(U=U.includes("?")||U.includes("#")?U=E(U):{path:U},U.params={}),de({query:y.query,hash:y.hash,params:y.params},U)}}function z(y,L){const P=c=v(y),U=l.value,ce=y.state,pe=y.force,X=y.replace===!0,q=Z(P);if(q)return z(de(E(q),{state:ce,force:pe,replace:X}),L||P);const h=P;h.redirectedFrom=L;let m;return!pe&&zv(i,U,P)&&(m=Ei(16,{to:h,from:U}),ti(U,U,!0,!1)),(m?Promise.resolve(m):ne(h,U)).catch(_=>en(_)?en(_,2)?_:et(_):he(_,h,U)).then(_=>{if(_){if(en(_,2))return z(de(E(_.to),{state:ce,force:pe,replace:X}),L||h)}else _=Ae(h,U,!0,X,ce);return ye(h,U,_),_})}function _e(y,L){const P=x(y,L);return P?Promise.reject(P):Promise.resolve()}function ne(y,L){let P;const[U,ce,pe]=Uy(y,L);P=jo(U.reverse(),"beforeRouteLeave",y,L);for(const q of U)q.leaveGuards.forEach(h=>{P.push(on(h,y,L))});const X=_e.bind(null,y,L);return P.push(X),ri(P).then(()=>{P=[];for(const q of s.list())P.push(on(q,y,L));return P.push(X),ri(P)}).then(()=>{P=jo(ce,"beforeRouteUpdate",y,L);for(const q of ce)q.updateGuards.forEach(h=>{P.push(on(h,y,L))});return P.push(X),ri(P)}).then(()=>{P=[];for(const q of y.matched)if(q.beforeEnter&&!L.matched.includes(q))if(Array.isArray(q.beforeEnter))for(const h of q.beforeEnter)P.push(on(h,y,L));else P.push(on(q.beforeEnter,y,L));return P.push(X),ri(P)}).then(()=>(y.matched.forEach(q=>q.enterCallbacks={}),P=jo(pe,"beforeRouteEnter",y,L),P.push(X),ri(P))).then(()=>{P=[];for(const q of o.list())P.push(on(q,y,L));return P.push(X),ri(P)}).catch(q=>en(q,8)?q:Promise.reject(q))}function ye(y,L,P){for(const U of a.list())U(y,L,P)}function Ae(y,L,P,U,ce){const pe=x(y,L);if(pe)return pe;const X=L===Zt,q=ui?history.state:{};P&&(U||X?r.replace(y.fullPath,de({scroll:X&&q&&q.scroll},ce)):r.push(y.fullPath,ce)),l.value=y,ti(y,L,P,X),et()}let F;function Ie(){F=r.listen((y,L,P)=>{const U=v(y),ce=Z(U);if(ce){z(de(ce,{replace:!0}),U).catch(ur);return}c=U;const pe=l.value;ui&&Qv(Tu(pe.fullPath,P.delta),ro()),ne(U,pe).catch(X=>en(X,12)?X:en(X,2)?(z(X.to,U).then(q=>{en(q,20)&&!P.delta&&P.type===Er.pop&&r.go(-1,!1)}).catch(ur),Promise.reject()):(P.delta&&r.go(-P.delta,!1),he(X,U,pe))).then(X=>{X=X||Ae(U,pe,!1),X&&(P.delta?r.go(-P.delta,!1):P.type===Er.pop&&en(X,20)&&r.go(-1,!1)),ye(U,pe,X)}).catch(ur)})}let Ge=Ki(),Nt=Ki(),Ee;function he(y,L,P){et(y);const U=Nt.list();return U.length?U.forEach(ce=>ce(y,L,P)):console.error(y),Promise.reject(y)}function le(){return Ee&&l.value!==Zt?Promise.resolve():new Promise((y,L)=>{Ge.add([y,L])})}function et(y){return Ee||(Ee=!y,Ie(),Ge.list().forEach(([L,P])=>y?P(y):L()),Ge.reset()),y}function ti(y,L,P,U){const{scrollBehavior:ce}=t;if(!ui||!ce)return Promise.resolve();const pe=!P&&Jv(Tu(y.fullPath,0))||(U||!P)&&history.state&&history.state.scroll||null;return Rf().then(()=>ce(y,L,pe)).then(X=>X&&Yv(X)).catch(X=>he(X,y,L))}const Pt=y=>r.go(y);let bt;const ot=new Set;return{currentRoute:l,addRoute:p,removeRoute:g,hasRoute:b,getRoutes:C,resolve:v,options:t,push:M,replace:K,go:Pt,back:()=>Pt(-1),forward:()=>Pt(1),beforeEach:s.add,beforeResolve:o.add,afterEach:a.add,onError:Nt.add,isReady:le,install(y){const L=this;y.component("RouterLink",xy),y.component("RouterView",Fy),y.config.globalProperties.$router=L,Object.defineProperty(y.config.globalProperties,"$route",{enumerable:!0,get:()=>or(l)}),ui&&!bt&&l.value===Zt&&(bt=!0,M(r.location).catch(ce=>{}));const P={};for(const ce in Zt)P[ce]=Te(()=>l.value[ce]);y.provide(io,L),y.provide(hh,Mi(P)),y.provide(Ca,l);const U=y.unmount;ot.add(y),y.unmount=function(){ot.delete(y),ot.size<1&&(c=Zt,F&&F(),l.value=Zt,bt=!1,Ee=!1),U()}}}}function ri(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function Uy(t,e){const n=[],i=[],r=[],s=Math.max(e.matched.length,t.matched.length);for(let o=0;o<s;o++){const a=e.matched[o];a&&(t.matched.find(c=>Ii(c,a))?i.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(c=>Ii(c,l))||r.push(l))}return[n,i,r]}function P2(){return At(io)}function Wy(){return Ch().__VUE_DEVTOOLS_GLOBAL_HOOK__}function Ch(){return typeof navigator!="undefined"&&typeof window!="undefined"?window:typeof global!="undefined"?global:{}}const Hy=typeof Proxy=="function",By="devtools-plugin:setup",zy="plugin:settings:set";class Vy{constructor(e,n){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=e,this.hook=n;const i={};if(e.settings)for(const o in e.settings){const a=e.settings[o];i[o]=a.defaultValue}const r=`__vue-devtools-plugin-settings__${e.id}`;let s=Object.assign({},i);try{const o=localStorage.getItem(r),a=JSON.parse(o);Object.assign(s,a)}catch{}this.fallbacks={getSettings(){return s},setSettings(o){try{localStorage.setItem(r,JSON.stringify(o))}catch{}s=o}},n&&n.on(zy,(o,a)=>{o===this.plugin.id&&this.fallbacks.setSettings(a)}),this.proxiedOn=new Proxy({},{get:(o,a)=>this.target?this.target.on[a]:(...l)=>{this.onQueue.push({method:a,args:l})}}),this.proxiedTarget=new Proxy({},{get:(o,a)=>this.target?this.target[a]:a==="on"?this.proxiedOn:Object.keys(this.fallbacks).includes(a)?(...l)=>(this.targetQueue.push({method:a,args:l,resolve:()=>{}}),this.fallbacks[a](...l)):(...l)=>new Promise(c=>{this.targetQueue.push({method:a,args:l,resolve:c})})})}async setRealTarget(e){this.target=e;for(const n of this.onQueue)this.target.on[n.method](...n.args);for(const n of this.targetQueue)n.resolve(await this.target[n.method](...n.args))}}function jy(t,e){const n=Ch(),i=Wy(),r=Hy&&t.enableEarlyProxy;if(i&&(n.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__||!r))i.emit(By,t,e);else{const s=r?new Vy(t,i):null;(n.__VUE_DEVTOOLS_PLUGINS__=n.__VUE_DEVTOOLS_PLUGINS__||[]).push({pluginDescriptor:t,setupFn:e,proxy:s}),s&&e(s.proxiedTarget)}}/*!
 * vuex v4.0.2
 * (c) 2021 Evan You
 * @license MIT
 */var Th="store";function O2(t){return t===void 0&&(t=null),At(t!==null?t:Th)}function Li(t,e){Object.keys(t).forEach(function(n){return e(t[n],n)})}function $y(t){return t!==null&&typeof t=="object"}function qy(t){return t&&typeof t.then=="function"}function Gy(t,e){return function(){return t(e)}}function Sh(t,e,n){return e.indexOf(t)<0&&(n&&n.prepend?e.unshift(t):e.push(t)),function(){var i=e.indexOf(t);i>-1&&e.splice(i,1)}}function Ah(t,e){t._actions=Object.create(null),t._mutations=Object.create(null),t._wrappedGetters=Object.create(null),t._modulesNamespaceMap=Object.create(null);var n=t.state;so(t,n,[],t._modules.root,!0),Cl(t,n,e)}function Cl(t,e,n){var i=t._state;t.getters={},t._makeLocalGettersCache=Object.create(null);var r=t._wrappedGetters,s={};Li(r,function(o,a){s[a]=Gy(o,t),Object.defineProperty(t.getters,a,{get:function(){return s[a]()},enumerable:!0})}),t._state=Mi({data:e}),t.strict&&Xy(t),i&&n&&t._withCommit(function(){i.data=null})}function so(t,e,n,i,r){var s=!n.length,o=t._modules.getNamespace(n);if(i.namespaced&&(t._modulesNamespaceMap[o],t._modulesNamespaceMap[o]=i),!s&&!r){var a=Tl(e,n.slice(0,-1)),l=n[n.length-1];t._withCommit(function(){a[l]=i.state})}var c=i.context=Ky(t,o,n);i.forEachMutation(function(u,d){var f=o+d;Yy(t,f,u,c)}),i.forEachAction(function(u,d){var f=u.root?d:o+d,p=u.handler||u;Qy(t,f,p,c)}),i.forEachGetter(function(u,d){var f=o+d;Jy(t,f,u,c)}),i.forEachChild(function(u,d){so(t,e,n.concat(d),u,r)})}function Ky(t,e,n){var i=e==="",r={dispatch:i?t.dispatch:function(s,o,a){var l=As(s,o,a),c=l.payload,u=l.options,d=l.type;return(!u||!u.root)&&(d=e+d),t.dispatch(d,c)},commit:i?t.commit:function(s,o,a){var l=As(s,o,a),c=l.payload,u=l.options,d=l.type;(!u||!u.root)&&(d=e+d),t.commit(d,c,u)}};return Object.defineProperties(r,{getters:{get:i?function(){return t.getters}:function(){return Rh(t,e)}},state:{get:function(){return Tl(t.state,n)}}}),r}function Rh(t,e){if(!t._makeLocalGettersCache[e]){var n={},i=e.length;Object.keys(t.getters).forEach(function(r){if(r.slice(0,i)===e){var s=r.slice(i);Object.defineProperty(n,s,{get:function(){return t.getters[r]},enumerable:!0})}}),t._makeLocalGettersCache[e]=n}return t._makeLocalGettersCache[e]}function Yy(t,e,n,i){var r=t._mutations[e]||(t._mutations[e]=[]);r.push(function(o){n.call(t,i.state,o)})}function Qy(t,e,n,i){var r=t._actions[e]||(t._actions[e]=[]);r.push(function(o){var a=n.call(t,{dispatch:i.dispatch,commit:i.commit,getters:i.getters,state:i.state,rootGetters:t.getters,rootState:t.state},o);return qy(a)||(a=Promise.resolve(a)),t._devtoolHook?a.catch(function(l){throw t._devtoolHook.emit("vuex:error",l),l}):a})}function Jy(t,e,n,i){t._wrappedGetters[e]||(t._wrappedGetters[e]=function(s){return n(i.state,i.getters,s.state,s.getters)})}function Xy(t){Mn(function(){return t._state.data},function(){},{deep:!0,flush:"sync"})}function Tl(t,e){return e.reduce(function(n,i){return n[i]},t)}function As(t,e,n){return $y(t)&&t.type&&(n=e,e=t,t=t.type),{type:t,payload:e,options:n}}var Zy="vuex bindings",Lu="vuex:mutations",$o="vuex:actions",si="vuex",eb=0;function tb(t,e){jy({id:"org.vuejs.vuex",app:t,label:"Vuex",homepage:"https://next.vuex.vuejs.org/",logo:"https://vuejs.org/images/icons/favicon-96x96.png",packageName:"vuex",componentStateTypes:[Zy]},function(n){n.addTimelineLayer({id:Lu,label:"Vuex Mutations",color:Fu}),n.addTimelineLayer({id:$o,label:"Vuex Actions",color:Fu}),n.addInspector({id:si,label:"Vuex",icon:"storage",treeFilterPlaceholder:"Filter stores..."}),n.on.getInspectorTree(function(i){if(i.app===t&&i.inspectorId===si)if(i.filter){var r=[];Oh(r,e._modules.root,i.filter,""),i.rootNodes=r}else i.rootNodes=[Ph(e._modules.root,"")]}),n.on.getInspectorState(function(i){if(i.app===t&&i.inspectorId===si){var r=i.nodeId;Rh(e,r),i.state=rb(ob(e._modules,r),r==="root"?e.getters:e._makeLocalGettersCache,r)}}),n.on.editInspectorState(function(i){if(i.app===t&&i.inspectorId===si){var r=i.nodeId,s=i.path;r!=="root"&&(s=r.split("/").filter(Boolean).concat(s)),e._withCommit(function(){i.set(e._state.data,s,i.state.value)})}}),e.subscribe(function(i,r){var s={};i.payload&&(s.payload=i.payload),s.state=r,n.notifyComponentUpdate(),n.sendInspectorTree(si),n.sendInspectorState(si),n.addTimelineEvent({layerId:Lu,event:{time:Date.now(),title:i.type,data:s}})}),e.subscribeAction({before:function(i,r){var s={};i.payload&&(s.payload=i.payload),i._id=eb++,i._time=Date.now(),s.state=r,n.addTimelineEvent({layerId:$o,event:{time:i._time,title:i.type,groupId:i._id,subtitle:"start",data:s}})},after:function(i,r){var s={},o=Date.now()-i._time;s.duration={_custom:{type:"duration",display:o+"ms",tooltip:"Action duration",value:o}},i.payload&&(s.payload=i.payload),s.state=r,n.addTimelineEvent({layerId:$o,event:{time:Date.now(),title:i.type,groupId:i._id,subtitle:"end",data:s}})}})})}var Fu=8702998,nb=6710886,ib=16777215,kh={label:"namespaced",textColor:ib,backgroundColor:nb};function Nh(t){return t&&t!=="root"?t.split("/").slice(-2,-1)[0]:"Root"}function Ph(t,e){return{id:e||"root",label:Nh(e),tags:t.namespaced?[kh]:[],children:Object.keys(t._children).map(function(n){return Ph(t._children[n],e+n+"/")})}}function Oh(t,e,n,i){i.includes(n)&&t.push({id:i||"root",label:i.endsWith("/")?i.slice(0,i.length-1):i||"Root",tags:e.namespaced?[kh]:[]}),Object.keys(e._children).forEach(function(r){Oh(t,e._children[r],n,i+r+"/")})}function rb(t,e,n){e=n==="root"?e:e[n];var i=Object.keys(e),r={state:Object.keys(t.state).map(function(o){return{key:o,editable:!0,value:t.state[o]}})};if(i.length){var s=sb(e);r.getters=Object.keys(s).map(function(o){return{key:o.endsWith("/")?Nh(o):o,editable:!1,value:Aa(function(){return s[o]})}})}return r}function sb(t){var e={};return Object.keys(t).forEach(function(n){var i=n.split("/");if(i.length>1){var r=e,s=i.pop();i.forEach(function(o){r[o]||(r[o]={_custom:{value:{},display:o,tooltip:"Module",abstract:!0}}),r=r[o]._custom.value}),r[s]=Aa(function(){return t[n]})}else e[n]=Aa(function(){return t[n]})}),e}function ob(t,e){var n=e.split("/").filter(function(i){return i});return n.reduce(function(i,r,s){var o=i[r];if(!o)throw new Error('Missing module "'+r+'" for path "'+e+'".');return s===n.length-1?o:o._children},e==="root"?t:t.root._children)}function Aa(t){try{return t()}catch(e){return e}}var yt=function(e,n){this.runtime=n,this._children=Object.create(null),this._rawModule=e;var i=e.state;this.state=(typeof i=="function"?i():i)||{}},xh={namespaced:{configurable:!0}};xh.namespaced.get=function(){return!!this._rawModule.namespaced};yt.prototype.addChild=function(e,n){this._children[e]=n};yt.prototype.removeChild=function(e){delete this._children[e]};yt.prototype.getChild=function(e){return this._children[e]};yt.prototype.hasChild=function(e){return e in this._children};yt.prototype.update=function(e){this._rawModule.namespaced=e.namespaced,e.actions&&(this._rawModule.actions=e.actions),e.mutations&&(this._rawModule.mutations=e.mutations),e.getters&&(this._rawModule.getters=e.getters)};yt.prototype.forEachChild=function(e){Li(this._children,e)};yt.prototype.forEachGetter=function(e){this._rawModule.getters&&Li(this._rawModule.getters,e)};yt.prototype.forEachAction=function(e){this._rawModule.actions&&Li(this._rawModule.actions,e)};yt.prototype.forEachMutation=function(e){this._rawModule.mutations&&Li(this._rawModule.mutations,e)};Object.defineProperties(yt.prototype,xh);var Kn=function(e){this.register([],e,!1)};Kn.prototype.get=function(e){return e.reduce(function(n,i){return n.getChild(i)},this.root)};Kn.prototype.getNamespace=function(e){var n=this.root;return e.reduce(function(i,r){return n=n.getChild(r),i+(n.namespaced?r+"/":"")},"")};Kn.prototype.update=function(e){Mh([],this.root,e)};Kn.prototype.register=function(e,n,i){var r=this;i===void 0&&(i=!0);var s=new yt(n,i);if(e.length===0)this.root=s;else{var o=this.get(e.slice(0,-1));o.addChild(e[e.length-1],s)}n.modules&&Li(n.modules,function(a,l){r.register(e.concat(l),a,i)})};Kn.prototype.unregister=function(e){var n=this.get(e.slice(0,-1)),i=e[e.length-1],r=n.getChild(i);!r||!r.runtime||n.removeChild(i)};Kn.prototype.isRegistered=function(e){var n=this.get(e.slice(0,-1)),i=e[e.length-1];return n?n.hasChild(i):!1};function Mh(t,e,n){if(e.update(n),n.modules)for(var i in n.modules){if(!e.getChild(i))return;Mh(t.concat(i),e.getChild(i),n.modules[i])}}function x2(t){return new Ze(t)}var Ze=function(e){var n=this;e===void 0&&(e={});var i=e.plugins;i===void 0&&(i=[]);var r=e.strict;r===void 0&&(r=!1);var s=e.devtools;this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new Kn(e),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._makeLocalGettersCache=Object.create(null),this._devtools=s;var o=this,a=this,l=a.dispatch,c=a.commit;this.dispatch=function(f,p){return l.call(o,f,p)},this.commit=function(f,p,g){return c.call(o,f,p,g)},this.strict=r;var u=this._modules.root.state;so(this,u,[],this._modules.root),Cl(this,u),i.forEach(function(d){return d(n)})},Sl={state:{configurable:!0}};Ze.prototype.install=function(e,n){e.provide(n||Th,this),e.config.globalProperties.$store=this;var i=this._devtools!==void 0?this._devtools:!1;i&&tb(e,this)};Sl.state.get=function(){return this._state.data};Sl.state.set=function(t){};Ze.prototype.commit=function(e,n,i){var r=this,s=As(e,n,i),o=s.type,a=s.payload,l={type:o,payload:a},c=this._mutations[o];!c||(this._withCommit(function(){c.forEach(function(d){d(a)})}),this._subscribers.slice().forEach(function(u){return u(l,r.state)}))};Ze.prototype.dispatch=function(e,n){var i=this,r=As(e,n),s=r.type,o=r.payload,a={type:s,payload:o},l=this._actions[s];if(!!l){try{this._actionSubscribers.slice().filter(function(u){return u.before}).forEach(function(u){return u.before(a,i.state)})}catch{}var c=l.length>1?Promise.all(l.map(function(u){return u(o)})):l[0](o);return new Promise(function(u,d){c.then(function(f){try{i._actionSubscribers.filter(function(p){return p.after}).forEach(function(p){return p.after(a,i.state)})}catch{}u(f)},function(f){try{i._actionSubscribers.filter(function(p){return p.error}).forEach(function(p){return p.error(a,i.state,f)})}catch{}d(f)})})}};Ze.prototype.subscribe=function(e,n){return Sh(e,this._subscribers,n)};Ze.prototype.subscribeAction=function(e,n){var i=typeof e=="function"?{before:e}:e;return Sh(i,this._actionSubscribers,n)};Ze.prototype.watch=function(e,n,i){var r=this;return Mn(function(){return e(r.state,r.getters)},n,Object.assign({},i))};Ze.prototype.replaceState=function(e){var n=this;this._withCommit(function(){n._state.data=e})};Ze.prototype.registerModule=function(e,n,i){i===void 0&&(i={}),typeof e=="string"&&(e=[e]),this._modules.register(e,n),so(this,this.state,e,this._modules.get(e),i.preserveState),Cl(this,this.state)};Ze.prototype.unregisterModule=function(e){var n=this;typeof e=="string"&&(e=[e]),this._modules.unregister(e),this._withCommit(function(){var i=Tl(n.state,e.slice(0,-1));delete i[e[e.length-1]]}),Ah(this)};Ze.prototype.hasModule=function(e){return typeof e=="string"&&(e=[e]),this._modules.isRegistered(e)};Ze.prototype.hotUpdate=function(e){this._modules.update(e),Ah(this,!0)};Ze.prototype._withCommit=function(e){var n=this._committing;this._committing=!0,e(),this._committing=n};Object.defineProperties(Ze.prototype,Sl);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dh={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S=function(t,e){if(!t)throw Fi(e)},Fi=function(t){return new Error("Firebase Database ("+Dh.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lh=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let r=t.charCodeAt(i);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&i+1<t.length&&(t.charCodeAt(i+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++i)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},ab=function(t){const e=[];let n=0,i=0;for(;n<t.length;){const r=t[n++];if(r<128)e[i++]=String.fromCharCode(r);else if(r>191&&r<224){const s=t[n++];e[i++]=String.fromCharCode((r&31)<<6|s&63)}else if(r>239&&r<365){const s=t[n++],o=t[n++],a=t[n++],l=((r&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[i++]=String.fromCharCode(55296+(l>>10)),e[i++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[i++]=String.fromCharCode((r&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Al={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let r=0;r<t.length;r+=3){const s=t[r],o=r+1<t.length,a=o?t[r+1]:0,l=r+2<t.length,c=l?t[r+2]:0,u=s>>2,d=(s&3)<<4|a>>4;let f=(a&15)<<2|c>>6,p=c&63;l||(p=64,o||(f=64)),i.push(n[u],n[d],n[f],n[p])}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Lh(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):ab(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let r=0;r<t.length;){const s=n[t.charAt(r++)],a=r<t.length?n[t.charAt(r)]:0;++r;const c=r<t.length?n[t.charAt(r)]:64;++r;const d=r<t.length?n[t.charAt(r)]:64;if(++r,s==null||a==null||c==null||d==null)throw Error();const f=s<<2|a>>4;if(i.push(f),c!==64){const p=a<<4&240|c>>2;if(i.push(p),d!==64){const g=c<<6&192|d;i.push(g)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},Fh=function(t){const e=Lh(t);return Al.encodeByteArray(e,!0)},Uh=function(t){return Fh(t).replace(/\./g,"")},Ra=function(t){try{return Al.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lb(t){return Wh(void 0,t)}function Wh(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!cb(n)||(t[n]=Wh(t[n],e[n]));return t}function cb(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hr{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,i)=>{n?this.reject(n):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,i))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function He(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Rl(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(He())}function M2(){try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function D2(){return typeof self=="object"&&self.self===self}function ub(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Hh(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function db(){const t=He();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Bh(){return Dh.NODE_ADMIN===!0}function fb(){return typeof indexedDB=="object"}function hb(){return new Promise((t,e)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(i);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(i),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var s;e(((s=r.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pb="FirebaseError";class Yn extends Error{constructor(e,n,i){super(n);this.code=e,this.customData=i,this.name=pb,Object.setPrototypeOf(this,Yn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Br.prototype.create)}}class Br{constructor(e,n,i){this.service=e,this.serviceName=n,this.errors=i}create(e,...n){const i=n[0]||{},r=`${this.service}/${e}`,s=this.errors[e],o=s?mb(s,i):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new Yn(r,a,i)}}function mb(t,e){return t.replace(gb,(n,i)=>{const r=e[i];return r!=null?String(r):`<${i}?>`})}const gb=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cr(t){return JSON.parse(t)}function De(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zh=function(t){let e={},n={},i={},r="";try{const s=t.split(".");e=Cr(Ra(s[0])||""),n=Cr(Ra(s[1])||""),r=s[2],i=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:i,signature:r}},_b=function(t){const e=zh(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},vb=function(t){const e=zh(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kt(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Ci(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function ka(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Rs(t,e,n){const i={};for(const r in t)Object.prototype.hasOwnProperty.call(t,r)&&(i[r]=e.call(n,t[r],r,t));return i}function ks(t,e){if(t===e)return!0;const n=Object.keys(t),i=Object.keys(e);for(const r of n){if(!i.includes(r))return!1;const s=t[r],o=e[r];if(Uu(s)&&Uu(o)){if(!ks(s,o))return!1}else if(s!==o)return!1}for(const r of i)if(!n.includes(r))return!1;return!0}function Uu(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qn(t){const e=[];for(const[n,i]of Object.entries(t))Array.isArray(i)?i.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function tr(t){const e={};return t.replace(/^\?/,"").split("&").forEach(i=>{if(i){const[r,s]=i.split("=");e[decodeURIComponent(r)]=decodeURIComponent(s)}}),e}function nr(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yb{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const i=this.W_;if(typeof e=="string")for(let d=0;d<16;d++)i[d]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let d=0;d<16;d++)i[d]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let d=16;d<80;d++){const f=i[d-3]^i[d-8]^i[d-14]^i[d-16];i[d]=(f<<1|f>>>31)&4294967295}let r=this.chain_[0],s=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,u;for(let d=0;d<80;d++){d<40?d<20?(c=a^s&(o^a),u=1518500249):(c=s^o^a,u=1859775393):d<60?(c=s&o|a&(s|o),u=2400959708):(c=s^o^a,u=3395469782);const f=(r<<5|r>>>27)+c+l+u+i[d]&4294967295;l=a,a=o,o=(s<<30|s>>>2)&4294967295,s=r,r=f}this.chain_[0]=this.chain_[0]+r&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const i=n-this.blockSize;let r=0;const s=this.buf_;let o=this.inbuf_;for(;r<n;){if(o===0)for(;r<=i;)this.compress_(e,r),r+=this.blockSize;if(typeof e=="string"){for(;r<n;)if(s[o]=e.charCodeAt(r),++o,++r,o===this.blockSize){this.compress_(s),o=0;break}}else for(;r<n;)if(s[o]=e[r],++o,++r,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let r=this.blockSize-1;r>=56;r--)this.buf_[r]=n&255,n/=256;this.compress_(this.buf_);let i=0;for(let r=0;r<5;r++)for(let s=24;s>=0;s-=8)e[i]=this.chain_[r]>>s&255,++i;return e}}function bb(t,e){const n=new wb(t,e);return n.subscribe.bind(n)}class wb{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,i){let r;if(e===void 0&&n===void 0&&i===void 0)throw new Error("Missing Observer.");Ib(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:i},r.next===void 0&&(r.next=qo),r.error===void 0&&(r.error=qo),r.complete===void 0&&(r.complete=qo);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(i){typeof console!="undefined"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Ib(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function qo(){}function zr(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eb=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let r=t.charCodeAt(i);if(r>=55296&&r<=56319){const s=r-55296;i++,S(i<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(i)-56320;r=65536+(s<<10)+o}r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):r<65536?(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},oo=function(t){let e=0;for(let n=0;n<t.length;n++){const i=t.charCodeAt(n);i<128?e++:i<2048?e+=2:i>=55296&&i<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $(t){return t&&t._delegate?t._delegate:t}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ir(t,e){return new Promise((n,i)=>{t.onsuccess=r=>{n(r.target.result)},t.onerror=r=>{var s;i(`${e}: ${(s=r.target.error)===null||s===void 0?void 0:s.message}`)}})}class Wu{constructor(e){this._db=e,this.objectStoreNames=this._db.objectStoreNames}transaction(e,n){return new Vh(this._db.transaction.call(this._db,e,n))}createObjectStore(e,n){return new jh(this._db.createObjectStore(e,n))}close(){this._db.close()}}class Vh{constructor(e){this._transaction=e,this.complete=new Promise((n,i)=>{this._transaction.oncomplete=function(){n()},this._transaction.onerror=()=>{i(this._transaction.error)},this._transaction.onabort=()=>{i(this._transaction.error)}})}objectStore(e){return new jh(this._transaction.objectStore(e))}}class jh{constructor(e){this._store=e}index(e){return new Hu(this._store.index(e))}createIndex(e,n,i){return new Hu(this._store.createIndex(e,n,i))}get(e){const n=this._store.get(e);return ir(n,"Error reading from IndexedDB")}put(e,n){const i=this._store.put(e,n);return ir(i,"Error writing to IndexedDB")}delete(e){const n=this._store.delete(e);return ir(n,"Error deleting from IndexedDB")}clear(){const e=this._store.clear();return ir(e,"Error clearing IndexedDB object store")}}class Hu{constructor(e){this._index=e}get(e){const n=this._index.get(e);return ir(n,"Error reading from IndexedDB")}}function Cb(t,e,n){return new Promise((i,r)=>{try{const s=indexedDB.open(t,e);s.onsuccess=o=>{i(new Wu(o.target.result))},s.onerror=o=>{var a;r(`Error opening indexedDB: ${(a=o.target.error)===null||a===void 0?void 0:a.message}`)},s.onupgradeneeded=o=>{n(new Wu(s.result),o.oldVersion,o.newVersion,new Vh(s.transaction))}}catch(s){r(`Error opening indexedDB: ${s.message}`)}})}class Bn{constructor(e,n,i){this.name=e,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tb{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const i=new Hr;if(this.instancesDeferred.set(n,i),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&i.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Ab(e))try{this.getOrInitializeService({instanceIdentifier:Sn})}catch{}for(const[n,i]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:r});i.resolve(s)}catch{}}}}clearInstance(e=Sn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Sn){return this.instances.has(e)}getOptions(e=Sn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:i,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);i===a&&o.resolve(r)}return r}onInit(e,n){var i;const r=this.normalizeInstanceIdentifier(n),s=(i=this.onInitCallbacks.get(r))!==null&&i!==void 0?i:new Set;s.add(e),this.onInitCallbacks.set(r,s);const o=this.instances.get(r);return o&&e(o,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const i=this.onInitCallbacks.get(n);if(!!i)for(const r of i)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:Sb(e),options:n}),this.instances.set(e,i),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=Sn){return this.component?this.component.multipleInstances?e:Sn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Sb(t){return t===Sn?void 0:t}function Ab(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rb{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Tb(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kl=[];var ae;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ae||(ae={}));const $h={debug:ae.DEBUG,verbose:ae.VERBOSE,info:ae.INFO,warn:ae.WARN,error:ae.ERROR,silent:ae.SILENT},kb=ae.INFO,Nb={[ae.DEBUG]:"log",[ae.VERBOSE]:"log",[ae.INFO]:"info",[ae.WARN]:"warn",[ae.ERROR]:"error"},Pb=(t,e,...n)=>{if(e<t.logLevel)return;const i=new Date().toISOString(),r=Nb[e];if(r)console[r](`[${i}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Nl{constructor(e){this.name=e,this._logLevel=kb,this._logHandler=Pb,this._userLogHandler=null,kl.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ae))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?$h[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ae.DEBUG,...e),this._logHandler(this,ae.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ae.VERBOSE,...e),this._logHandler(this,ae.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ae.INFO,...e),this._logHandler(this,ae.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ae.WARN,...e),this._logHandler(this,ae.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ae.ERROR,...e),this._logHandler(this,ae.ERROR,...e)}}function Ob(t){kl.forEach(e=>{e.setLogLevel(t)})}function xb(t,e){for(const n of kl){let i=null;e&&e.level&&(i=$h[e.level]),t===null?n.userLogHandler=null:n.userLogHandler=(r,s,...o)=>{const a=o.map(l=>{if(l==null)return null;if(typeof l=="string")return l;if(typeof l=="number"||typeof l=="boolean")return l.toString();if(l instanceof Error)return l.message;try{return JSON.stringify(l)}catch{return null}}).filter(l=>l).join(" ");s>=(i!=null?i:r.logLevel)&&t({level:ae[s].toLowerCase(),message:a,args:o,type:r.name})}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mb{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Db(n)){const i=n.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(n=>n).join(" ")}}function Db(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Na="@firebase/app",Bu="0.7.19";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pl=new Nl("@firebase/app"),Lb="@firebase/app-compat",Fb="@firebase/analytics-compat",Ub="@firebase/analytics",Wb="@firebase/app-check-compat",Hb="@firebase/app-check",Bb="@firebase/auth",zb="@firebase/auth-compat",Vb="@firebase/database",jb="@firebase/database-compat",$b="@firebase/functions",qb="@firebase/functions-compat",Gb="@firebase/installations",Kb="@firebase/installations-compat",Yb="@firebase/messaging",Qb="@firebase/messaging-compat",Jb="@firebase/performance",Xb="@firebase/performance-compat",Zb="@firebase/remote-config",ew="@firebase/remote-config-compat",tw="@firebase/storage",nw="@firebase/storage-compat",iw="@firebase/firestore",rw="@firebase/firestore-compat",sw="firebase",ow="9.6.9";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ao="[DEFAULT]",aw={[Na]:"fire-core",[Lb]:"fire-core-compat",[Ub]:"fire-analytics",[Fb]:"fire-analytics-compat",[Hb]:"fire-app-check",[Wb]:"fire-app-check-compat",[Bb]:"fire-auth",[zb]:"fire-auth-compat",[Vb]:"fire-rtdb",[jb]:"fire-rtdb-compat",[$b]:"fire-fn",[qb]:"fire-fn-compat",[Gb]:"fire-iid",[Kb]:"fire-iid-compat",[Yb]:"fire-fcm",[Qb]:"fire-fcm-compat",[Jb]:"fire-perf",[Xb]:"fire-perf-compat",[Zb]:"fire-rc",[ew]:"fire-rc-compat",[tw]:"fire-gcs",[nw]:"fire-gcs-compat",[iw]:"fire-fst",[rw]:"fire-fst-compat","fire-js":"fire-js",[sw]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _n=new Map,Tr=new Map;function qh(t,e){try{t.container.addComponent(e)}catch(n){Pl.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function lw(t,e){t.container.addOrOverwriteComponent(e)}function zn(t){const e=t.name;if(Tr.has(e))return Pl.debug(`There were multiple attempts to register component ${e}.`),!1;Tr.set(e,t);for(const n of _n.values())qh(n,t);return!0}function Vr(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function cw(t,e,n=ao){Vr(t,e).clearInstance(n)}function uw(){Tr.clear()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dw={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["storage-delete"]:"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."},vn=new Br("app","Firebase",dw);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fw{constructor(e,n,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new Bn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw vn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ui=ow;function hw(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:ao,automaticDataCollectionEnabled:!1},e),i=n.name;if(typeof i!="string"||!i)throw vn.create("bad-app-name",{appName:String(i)});const r=_n.get(i);if(r){if(ks(t,r.options)&&ks(n,r.config))return r;throw vn.create("duplicate-app",{appName:i})}const s=new Rb(i);for(const a of Tr.values())s.addComponent(a);const o=new fw(t,n,s);return _n.set(i,o),o}function Ol(t=ao){const e=_n.get(t);if(!e)throw vn.create("no-app",{appName:t});return e}function pw(){return Array.from(_n.values())}async function mw(t){const e=t.name;_n.has(e)&&(_n.delete(e),await Promise.all(t.container.getProviders().map(n=>n.delete())),t.isDeleted=!0)}function Ft(t,e,n){var i;let r=(i=aw[t])!==null&&i!==void 0?i:t;n&&(r+=`-${n}`);const s=r.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${r}" with version "${e}":`];s&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Pl.warn(a.join(" "));return}zn(new Bn(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}function gw(t,e){if(t!==null&&typeof t!="function")throw vn.create("invalid-log-argument");xb(t,e)}function _w(t){Ob(t)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vw="firebase-heartbeat-database",yw=1,Sr="firebase-heartbeat-store";let Go=null;function Gh(){return Go||(Go=Cb(vw,yw,(t,e)=>{switch(e){case 0:t.createObjectStore(Sr)}}).catch(t=>{throw vn.create("storage-open",{originalErrorMessage:t.message})})),Go}async function bw(t){try{return(await Gh()).transaction(Sr).objectStore(Sr).get(Kh(t))}catch(e){throw vn.create("storage-get",{originalErrorMessage:e.message})}}async function zu(t,e){try{const i=(await Gh()).transaction(Sr,"readwrite");return await i.objectStore(Sr).put(e,Kh(t)),i.complete}catch(n){throw vn.create("storage-set",{originalErrorMessage:n.message})}}function Kh(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ww=1024,Iw=30*24*60*60*1e3;class Ew{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Tw(n),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Vu();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(r=>r.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const s=new Date(r.date).valueOf();return Date.now()-s<=Iw}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Vu(),{heartbeatsToSend:n,unsentEntries:i}=Cw(this._heartbeatsCache.heartbeats),r=Uh(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Vu(){return new Date().toISOString().substring(0,10)}function Cw(t,e=ww){const n=[];let i=t.slice();for(const r of t){const s=n.find(o=>o.agent===r.agent);if(s){if(s.dates.push(r.date),ju(n)>e){s.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),ju(n)>e){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class Tw{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return fb()?hb().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await bw(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return zu(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return zu(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function ju(t){return Uh(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sw(t){zn(new Bn("platform-logger",e=>new Mb(e),"PRIVATE")),zn(new Bn("heartbeat",e=>new Ew(e),"PRIVATE")),Ft(Na,Bu,t),Ft(Na,Bu,"esm2017"),Ft("fire-js","")}Sw("");var L2=Object.freeze(Object.defineProperty({__proto__:null,SDK_VERSION:Ui,_DEFAULT_ENTRY_NAME:ao,_addComponent:qh,_addOrOverwriteComponent:lw,_apps:_n,_clearComponents:uw,_components:Tr,_getProvider:Vr,_registerComponent:zn,_removeServiceInstance:cw,deleteApp:mw,getApp:Ol,getApps:pw,initializeApp:hw,onLog:gw,registerVersion:Ft,setLogLevel:_w,FirebaseError:Yn},Symbol.toStringTag,{value:"Module"}));/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function xl(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,i=Object.getOwnPropertySymbols(t);r<i.length;r++)e.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(t,i[r])&&(n[i[r]]=t[i[r]]);return n}const F2={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",PHONE:"phone",TWITTER:"twitter.com"},U2={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Aw(){return{["admin-restricted-operation"]:"This operation is restricted to administrators only.",["argument-error"]:"",["app-not-authorized"]:"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.",["app-not-installed"]:"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.",["captcha-check-failed"]:"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.",["code-expired"]:"The SMS code has expired. Please re-send the verification code to try again.",["cordova-not-ready"]:"Cordova framework is not ready.",["cors-unsupported"]:"This browser is not supported.",["credential-already-in-use"]:"This credential is already associated with a different user account.",["custom-token-mismatch"]:"The custom token corresponds to a different audience.",["requires-recent-login"]:"This operation is sensitive and requires recent authentication. Log in again before retrying this request.",["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.",["dynamic-link-not-activated"]:"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.",["email-change-needs-verification"]:"Multi-factor users must always have a verified email.",["email-already-in-use"]:"The email address is already in use by another account.",["emulator-config-failed"]:'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',["expired-action-code"]:"The action code has expired.",["cancelled-popup-request"]:"This operation has been cancelled due to another conflicting popup being opened.",["internal-error"]:"An internal AuthError has occurred.",["invalid-app-credential"]:"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.",["invalid-app-id"]:"The mobile app identifier is not registed for the current project.",["invalid-user-token"]:"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.",["invalid-auth-event"]:"An internal AuthError has occurred.",["invalid-verification-code"]:"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.",["invalid-continue-uri"]:"The continue URL provided in the request is invalid.",["invalid-cordova-configuration"]:"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.",["invalid-custom-token"]:"The custom token format is incorrect. Please check the documentation.",["invalid-dynamic-link-domain"]:"The provided dynamic link domain is not configured or authorized for the current project.",["invalid-email"]:"The email address is badly formatted.",["invalid-emulator-scheme"]:"Emulator URL must start with a valid scheme (http:// or https://).",["invalid-api-key"]:"Your API key is invalid, please check you have copied it correctly.",["invalid-cert-hash"]:"The SHA-1 certificate hash provided is invalid.",["invalid-credential"]:"The supplied auth credential is malformed or has expired.",["invalid-message-payload"]:"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-multi-factor-session"]:"The request does not contain a valid proof of first factor successful sign-in.",["invalid-oauth-provider"]:"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.",["invalid-oauth-client-id"]:"The OAuth client ID provided is either invalid or does not match the specified API key.",["unauthorized-domain"]:"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.",["invalid-action-code"]:"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.",["wrong-password"]:"The password is invalid or the user does not have a password.",["invalid-persistence-type"]:"The specified persistence type is invalid. It can only be local, session or none.",["invalid-phone-number"]:"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].",["invalid-provider-id"]:"The specified provider ID is invalid.",["invalid-recipient-email"]:"The email corresponding to this action failed to send as the provided recipient email address is invalid.",["invalid-sender"]:"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-verification-id"]:"The verification ID used to create the phone auth credential is invalid.",["invalid-tenant-id"]:"The Auth instance's tenant ID is invalid.",["missing-android-pkg-name"]:"An Android Package Name must be provided if the Android App is required to be installed.",["auth-domain-config-required"]:"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.",["missing-app-credential"]:"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.",["missing-verification-code"]:"The phone auth credential was created with an empty SMS verification code.",["missing-continue-uri"]:"A continue URL must be provided in the request.",["missing-iframe-start"]:"An internal AuthError has occurred.",["missing-ios-bundle-id"]:"An iOS Bundle ID must be provided if an App Store ID is provided.",["missing-or-invalid-nonce"]:"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.",["missing-multi-factor-info"]:"No second factor identifier is provided.",["missing-multi-factor-session"]:"The request is missing proof of first factor successful sign-in.",["missing-phone-number"]:"To send verification codes, provide a phone number for the recipient.",["missing-verification-id"]:"The phone auth credential was created with an empty verification ID.",["app-deleted"]:"This instance of FirebaseApp has been deleted.",["multi-factor-info-not-found"]:"The user does not have a second factor matching the identifier provided.",["multi-factor-auth-required"]:"Proof of ownership of a second factor is required to complete sign-in.",["account-exists-with-different-credential"]:"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.",["network-request-failed"]:"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.",["no-auth-event"]:"An internal AuthError has occurred.",["no-such-provider"]:"User was not linked to an account with the given provider.",["null-user"]:"A null user object was provided as the argument for an operation which requires a non-null user object.",["operation-not-allowed"]:"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.",["operation-not-supported-in-this-environment"]:'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',["popup-blocked"]:"Unable to establish a connection with the popup. It may have been blocked by the browser.",["popup-closed-by-user"]:"The popup has been closed by the user before finalizing the operation.",["provider-already-linked"]:"User can only be linked to one identity for the given provider.",["quota-exceeded"]:"The project's quota for this operation has been exceeded.",["redirect-cancelled-by-user"]:"The redirect operation has been cancelled by the user before finalizing.",["redirect-operation-pending"]:"A redirect sign-in operation is already pending.",["rejected-credential"]:"The request contains malformed or mismatching credentials.",["second-factor-already-in-use"]:"The second factor is already enrolled on this account.",["maximum-second-factor-count-exceeded"]:"The maximum allowed number of second factors on a user has been exceeded.",["tenant-id-mismatch"]:"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.",["user-token-expired"]:"The user's credential is no longer valid. The user must sign in again.",["too-many-requests"]:"We have blocked all requests from this device due to unusual activity. Try again later.",["unauthorized-continue-uri"]:"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.",["unsupported-first-factor"]:"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.",["unsupported-persistence-type"]:"The current environment does not support the specified persistence type.",["unsupported-tenant-operation"]:"This operation is not supported in a multi-tenant context.",["unverified-email"]:"The operation requires a verified email.",["user-cancelled"]:"The user did not grant your application the permissions it requested.",["user-not-found"]:"There is no user record corresponding to this identifier. The user may have been deleted.",["user-disabled"]:"The user account has been disabled by an administrator.",["user-mismatch"]:"The supplied credentials do not correspond to the previously signed in user.",["user-signed-out"]:"",["weak-password"]:"The password must be 6 characters long or more.",["web-storage-unsupported"]:"This browser is not supported or 3rd party cookies and data may be disabled.",["already-initialized"]:"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance."}}function Yh(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const W2=Aw,Rw=Yh,Qh=new Br("auth","Firebase",Yh());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $u=new Nl("@firebase/auth");function ds(t,...e){$u.logLevel<=ae.ERROR&&$u.error(`Auth (${Ui}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xe(t,...e){throw Ml(t,...e)}function rt(t,...e){return Ml(t,...e)}function Jh(t,e,n){const i=Object.assign(Object.assign({},Rw()),{[e]:n});return new Br("auth","Firebase",i).create(e,{appName:t.name})}function Wi(t,e,n){const i=n;if(!(e instanceof i))throw i.name!==e.constructor.name&&Xe(t,"argument-error"),Jh(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Ml(t,...e){if(typeof t!="string"){const n=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=t.name),t._errorFactory.create(n,...i)}return Qh.create(t,...e)}function k(t,e,...n){if(!t)throw Ml(e,...n)}function Tt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ds(e),new Error(e)}function Bt(t,e){t||Tt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qu=new Map;function Mt(t){Bt(t instanceof Function,"Expected a class definition");let e=qu.get(t);return e?(Bt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,qu.set(t,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kw(t,e){const n=Vr(t,"auth");if(n.isInitialized()){const r=n.getImmediate(),s=n.getOptions();if(ks(s,e!=null?e:{}))return r;Xe(r,"already-initialized")}return n.initialize({options:e})}function Nw(t,e){const n=(e==null?void 0:e.persistence)||[],i=(Array.isArray(n)?n:[n]).map(Mt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ar(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Dl(){return Gu()==="http:"||Gu()==="https:"}function Gu(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pw(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Dl()||ub()||"connection"in navigator)?navigator.onLine:!0}function Ow(){if(typeof navigator=="undefined")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jr{constructor(e,n){this.shortDelay=e,this.longDelay=n,Bt(n>e,"Short delay should be less than long delay!"),this.isMobile=Rl()||Hh()}get(){return Pw()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ll(t,e){Bt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xh{static initialize(e,n,i){this.fetchImpl=e,n&&(this.headersImpl=n),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;Tt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;Tt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;Tt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xw={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mw=new jr(3e4,6e4);function Ne(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Le(t,e,n,i,r={}){return Zh(t,r,async()=>{let s={},o={};i&&(e==="GET"?o=i:s={body:JSON.stringify(i)});const a=Qn(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),Xh.fetch()(ep(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function Zh(t,e,n){t._canInitEmulator=!1;const i=Object.assign(Object.assign({},xw),e);try{const r=new Dw(t),s=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw fs(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw fs(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw fs(t,"email-already-in-use",o);const u=i[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Jh(t,u,c);Xe(t,u)}}catch(r){if(r instanceof Yn)throw r;Xe(t,"network-request-failed")}}async function Gt(t,e,n,i,r={}){const s=await Le(t,e,n,i,r);return"mfaPendingCredential"in s&&Xe(t,"multi-factor-auth-required",{_serverResponse:s}),s}function ep(t,e,n,i){const r=`${e}${n}?${i}`;return t.config.emulator?Ll(t.config,r):`${t.config.apiScheme}://${r}`}class Dw{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,i)=>{this.timer=setTimeout(()=>i(rt(this.auth,"network-request-failed")),Mw.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function fs(t,e,n){const i={appName:t.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const r=rt(t,e,i);return r.customData._tokenResponse=n,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Lw(t,e){return Le(t,"POST","/v1/accounts:delete",e)}async function Fw(t,e){return Le(t,"POST","/v1/accounts:update",e)}async function Uw(t,e){return Le(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fr(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Ww(t,e=!1){const n=$(t),i=await n.getIdToken(e),r=lo(i);k(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const s=typeof r.firebase=="object"?r.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:r,token:i,authTime:fr(Ko(r.auth_time)),issuedAtTime:fr(Ko(r.iat)),expirationTime:fr(Ko(r.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Ko(t){return Number(t)*1e3}function lo(t){const[e,n,i]=t.split(".");if(e===void 0||n===void 0||i===void 0)return ds("JWT malformed, contained fewer than 3 sections"),null;try{const r=Ra(n);return r?JSON.parse(r):(ds("Failed to decode base64 JWT payload"),null)}catch(r){return ds("Caught error parsing JWT payload as JSON",r),null}}function Hw(t){const e=lo(t);return k(e,"internal-error"),k(typeof e.exp!="undefined","internal-error"),k(typeof e.iat!="undefined","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zt(t,e,n=!1){if(n)return e;try{return await e}catch(i){throw i instanceof Yn&&Bw(i)&&t.auth.currentUser===t&&await t.auth.signOut(),i}}function Bw({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zw{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const r=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tp{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=fr(this.lastLoginAt),this.creationTime=fr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rr(t){var e;const n=t.auth,i=await t.getIdToken(),r=await zt(t,Uw(n,{idToken:i}));k(r==null?void 0:r.users.length,n,"internal-error");const s=r.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?$w(s.providerUserInfo):[],a=jw(t.providerData,o),l=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new tp(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(t,d)}async function Vw(t){const e=$(t);await Rr(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function jw(t,e){return[...t.filter(i=>!e.some(r=>r.providerId===i.providerId)),...e]}function $w(t){return t.map(e=>{var{providerId:n}=e,i=xl(e,["providerId"]);return{providerId:n,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qw(t,e){const n=await Zh(t,{},async()=>{const i=Qn({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:s}=t.config,o=ep(t,r,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Xh.fetch()(o,{method:"POST",headers:a,body:i})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){k(e.idToken,"internal-error"),k(typeof e.idToken!="undefined","internal-error"),k(typeof e.refreshToken!="undefined","internal-error");const n="expiresIn"in e&&typeof e.expiresIn!="undefined"?Number(e.expiresIn):Hw(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return k(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:i,refreshToken:r,expiresIn:s}=await qw(e,n);this.updateTokensAndExpiration(i,r,Number(s))}updateTokensAndExpiration(e,n,i){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,n){const{refreshToken:i,accessToken:r,expirationTime:s}=n,o=new kr;return i&&(k(typeof i=="string","internal-error",{appName:e}),o.refreshToken=i),r&&(k(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),s&&(k(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new kr,this.toJSON())}_performRefresh(){return Tt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tn(t,e){k(typeof t=="string"||typeof t=="undefined","internal-error",{appName:e})}class Fn{constructor(e){var{uid:n,auth:i,stsTokenManager:r}=e,s=xl(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new zw(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=i,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new tp(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await zt(this,this.stsTokenManager.getToken(this.auth,e));return k(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Ww(this,e)}reload(){return Vw(this)}_assign(e){this!==e&&(k(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Fn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){k(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),n&&await Rr(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await zt(this,Lw(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var i,r,s,o,a,l,c,u;const d=(i=n.displayName)!==null&&i!==void 0?i:void 0,f=(r=n.email)!==null&&r!==void 0?r:void 0,p=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,g=(o=n.photoURL)!==null&&o!==void 0?o:void 0,C=(a=n.tenantId)!==null&&a!==void 0?a:void 0,b=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,v=(c=n.createdAt)!==null&&c!==void 0?c:void 0,E=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:x,emailVerified:M,isAnonymous:K,providerData:Z,stsTokenManager:z}=n;k(x&&z,e,"internal-error");const _e=kr.fromJSON(this.name,z);k(typeof x=="string",e,"internal-error"),tn(d,e.name),tn(f,e.name),k(typeof M=="boolean",e,"internal-error"),k(typeof K=="boolean",e,"internal-error"),tn(p,e.name),tn(g,e.name),tn(C,e.name),tn(b,e.name),tn(v,e.name),tn(E,e.name);const ne=new Fn({uid:x,auth:e,email:f,emailVerified:M,displayName:d,isAnonymous:K,photoURL:g,phoneNumber:p,tenantId:C,stsTokenManager:_e,createdAt:v,lastLoginAt:E});return Z&&Array.isArray(Z)&&(ne.providerData=Z.map(ye=>Object.assign({},ye))),b&&(ne._redirectEventId=b),ne}static async _fromIdTokenResponse(e,n,i=!1){const r=new kr;r.updateFromServerResponse(n);const s=new Fn({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:i});return await Rr(s),s}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class np{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}np.type="NONE";const Ku=np;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hs(t,e,n){return`firebase:${t}:${e}:${n}`}class mi{constructor(e,n,i){this.persistence=e,this.auth=n,this.userKey=i;const{config:r,name:s}=this.auth;this.fullUserKey=hs(this.userKey,r.apiKey,s),this.fullPersistenceKey=hs("persistence",r.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Fn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,i="authUser"){if(!n.length)return new mi(Mt(Ku),e,i);const r=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=r[0]||Mt(Ku);const o=hs(i,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){const d=Fn._fromJSON(e,u);c!==s&&(a=d),s=c;break}}catch{}const l=r.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new mi(s,e,i):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new mi(s,e,i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yu(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(sp(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(ip(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(ap(e))return"Blackberry";if(lp(e))return"Webos";if(Fl(e))return"Safari";if((e.includes("chrome/")||rp(e))&&!e.includes("edge/"))return"Chrome";if(op(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=t.match(n);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function ip(t=He()){return/firefox\//i.test(t)}function Fl(t=He()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function rp(t=He()){return/crios\//i.test(t)}function sp(t=He()){return/iemobile/i.test(t)}function op(t=He()){return/android/i.test(t)}function ap(t=He()){return/blackberry/i.test(t)}function lp(t=He()){return/webos/i.test(t)}function co(t=He()){return/iphone|ipad|ipod/i.test(t)}function H2(t=He()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(t)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(t)}function Gw(t=He()){var e;return co(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Kw(){return db()&&document.documentMode===10}function cp(t=He()){return co(t)||op(t)||lp(t)||ap(t)||/windows phone/i.test(t)||sp(t)}function Yw(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function up(t,e=[]){let n;switch(t){case"Browser":n=Yu(He());break;case"Worker":n=`${Yu(He())}-${t}`;break;default:n=t}const i=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ui}/${i}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qw{constructor(e,n,i){this.app=e,this.heartbeatServiceProvider=n,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Qu(this),this.idTokenSubscription=new Qu(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Qh,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Mt(n)),this._initializationPromise=this.queue(async()=>{var i,r;if(!this._deleted&&(this.persistenceManager=await mi.create(this,e),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e)}}async initializeCurrentUser(e){var n;let i=await this.assertedPersistence.getCurrentUser();if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const r=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,s=i==null?void 0:i._redirectEventId,o=await this.tryRedirectSignIn(e);(!r||r===s)&&(o==null?void 0:o.user)&&(i=o.user)}return i?i._redirectEventId?(k(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)):this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Rr(e)}catch(n){if(n.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Ow()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?$(e):null;return n&&k(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e){if(!this._deleted)return e&&k(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Mt(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Br("auth","Firebase",e())}onAuthStateChanged(e,n,i){return this.registerStateListener(this.authStateSubscription,e,n,i)}onIdTokenChanged(e,n,i){return this.registerStateListener(this.idTokenSubscription,e,n,i)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const i=await this.getOrInitRedirectPersistenceManager(n);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Mt(e)||this._popupRedirectResolver;k(n,this,"argument-error"),this.redirectPersistenceManager=await mi.create(this,[Mt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,i;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,i,r){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return k(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,i,r):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return k(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=up(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return i&&(n["X-Firebase-Client"]=i),n}}function qe(t){return $(t)}class Qu{constructor(e){this.auth=e,this.observer=null,this.addObserver=bb(n=>this.observer=n)}get next(){return k(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function B2(t,e,n){const i=qe(t);k(i._canInitEmulator,i,"emulator-config-failed"),k(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const r=!!(n!=null&&n.disableWarnings),s=dp(e),{host:o,port:a}=Jw(e),l=a===null?"":`:${a}`;i.config.emulator={url:`${s}//${o}${l}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:r})}),r||Xw()}function dp(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Jw(t){const e=dp(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const i=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(i);if(r){const s=r[1];return{host:s,port:Ju(i.substr(s.length+1))}}else{const[s,o]=i.split(":");return{host:s,port:Ju(o)}}}function Ju(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Xw(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console!="undefined"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window!="undefined"&&typeof document!="undefined"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $r{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Tt("not implemented")}_getIdTokenResponse(e){return Tt("not implemented")}_linkToIdToken(e,n){return Tt("not implemented")}_getReauthenticationResolver(e){return Tt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fp(t,e){return Le(t,"POST","/v1/accounts:resetPassword",Ne(t,e))}async function hp(t,e){return Le(t,"POST","/v1/accounts:update",e)}async function Zw(t,e){return Le(t,"POST","/v1/accounts:update",Ne(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function e0(t,e){return Gt(t,"POST","/v1/accounts:signInWithPassword",Ne(t,e))}async function uo(t,e){return Le(t,"POST","/v1/accounts:sendOobCode",Ne(t,e))}async function t0(t,e){return uo(t,e)}async function n0(t,e){return uo(t,e)}async function i0(t,e){return uo(t,e)}async function r0(t,e){return uo(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function s0(t,e){return Gt(t,"POST","/v1/accounts:signInWithEmailLink",Ne(t,e))}async function o0(t,e){return Gt(t,"POST","/v1/accounts:signInWithEmailLink",Ne(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nr extends $r{constructor(e,n,i,r=null){super("password",i);this._email=e,this._password=n,this._tenantId=r}static _fromEmailAndPassword(e,n){return new Nr(e,n,"password")}static _fromEmailAndCode(e,n,i=null){return new Nr(e,n,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return e0(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return s0(e,{email:this._email,oobCode:this._password});default:Xe(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return hp(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return o0(e,{idToken:n,email:this._email,oobCode:this._password});default:Xe(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ut(t,e){return Gt(t,"POST","/v1/accounts:signInWithIdp",Ne(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a0="http://localhost";class Vt extends $r{constructor(){super(...arguments);this.pendingToken=null}static _fromParams(e){const n=new Vt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Xe("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:r}=n,s=xl(n,["providerId","signInMethod"]);if(!i||!r)return null;const o=new Vt(i,r);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Ut(e,n)}_linkToIdToken(e,n){const i=this.buildRequest();return i.idToken=n,Ut(e,i)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ut(e,n)}buildRequest(){const e={requestUri:a0,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Qn(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function l0(t,e){return Le(t,"POST","/v1/accounts:sendVerificationCode",Ne(t,e))}async function c0(t,e){return Gt(t,"POST","/v1/accounts:signInWithPhoneNumber",Ne(t,e))}async function u0(t,e){const n=await Gt(t,"POST","/v1/accounts:signInWithPhoneNumber",Ne(t,e));if(n.temporaryProof)throw fs(t,"account-exists-with-different-credential",n);return n}const d0={USER_NOT_FOUND:"user-not-found"};async function f0(t,e){const n=Object.assign(Object.assign({},e),{operation:"REAUTH"});return Gt(t,"POST","/v1/accounts:signInWithPhoneNumber",Ne(t,n),d0)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Un extends $r{constructor(e){super("phone","phone");this.params=e}static _fromVerification(e,n){return new Un({verificationId:e,verificationCode:n})}static _fromTokenResponse(e,n){return new Un({phoneNumber:e,temporaryProof:n})}_getIdTokenResponse(e){return c0(e,this._makeVerificationRequest())}_linkToIdToken(e,n){return u0(e,Object.assign({idToken:n},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return f0(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:n,verificationId:i,verificationCode:r}=this.params;return e&&n?{temporaryProof:e,phoneNumber:n}:{sessionInfo:i,code:r}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:n,verificationCode:i,phoneNumber:r,temporaryProof:s}=e;return!i&&!n&&!r&&!s?null:new Un({verificationId:n,verificationCode:i,phoneNumber:r,temporaryProof:s})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function h0(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function p0(t){const e=tr(nr(t)).link,n=e?tr(nr(e)).deep_link_id:null,i=tr(nr(t)).deep_link_id;return(i?tr(nr(i)).link:null)||i||n||e||t}class fo{constructor(e){var n,i,r,s,o,a;const l=tr(nr(e)),c=(n=l.apiKey)!==null&&n!==void 0?n:null,u=(i=l.oobCode)!==null&&i!==void 0?i:null,d=h0((r=l.mode)!==null&&r!==void 0?r:null);k(c&&u&&d,"argument-error"),this.apiKey=c,this.operation=d,this.code=u,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=p0(e);try{return new fo(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn{constructor(){this.providerId=Jn.PROVIDER_ID}static credential(e,n){return Nr._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const i=fo.parseLink(n);return k(i,"argument-error"),Nr._fromEmailAndCode(e,i.code,i.tenantId)}}Jn.PROVIDER_ID="password";Jn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Jn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kt{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hi extends Kt{constructor(){super(...arguments);this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class ps extends Hi{static credentialFromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;return k("providerId"in n&&"signInMethod"in n,"argument-error"),Vt._fromParams(n)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return k(e.idToken||e.accessToken,"argument-error"),Vt._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return ps.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return ps.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:i,oauthTokenSecret:r,pendingToken:s,nonce:o,providerId:a}=e;if(!i&&!r&&!n&&!s||!a)return null;try{return new ps(a)._credential({idToken:n,accessToken:i,nonce:o,pendingToken:s})}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class an extends Hi{constructor(){super("facebook.com")}static credential(e){return Vt._fromParams({providerId:an.PROVIDER_ID,signInMethod:an.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return an.credentialFromTaggedObject(e)}static credentialFromError(e){return an.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return an.credential(e.oauthAccessToken)}catch{return null}}}an.FACEBOOK_SIGN_IN_METHOD="facebook.com";an.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ln extends Hi{constructor(){super("google.com");this.addScope("profile")}static credential(e,n){return Vt._fromParams({providerId:ln.PROVIDER_ID,signInMethod:ln.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return ln.credentialFromTaggedObject(e)}static credentialFromError(e){return ln.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:i}=e;if(!n&&!i)return null;try{return ln.credential(n,i)}catch{return null}}}ln.GOOGLE_SIGN_IN_METHOD="google.com";ln.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cn extends Hi{constructor(){super("github.com")}static credential(e){return Vt._fromParams({providerId:cn.PROVIDER_ID,signInMethod:cn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return cn.credentialFromTaggedObject(e)}static credentialFromError(e){return cn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return cn.credential(e.oauthAccessToken)}catch{return null}}}cn.GITHUB_SIGN_IN_METHOD="github.com";cn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m0="http://localhost";class Pr extends $r{constructor(e,n){super(e,e);this.pendingToken=n}_getIdTokenResponse(e){const n=this.buildRequest();return Ut(e,n)}_linkToIdToken(e,n){const i=this.buildRequest();return i.idToken=n,Ut(e,i)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ut(e,n)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:r,pendingToken:s}=n;return!i||!r||!s||i!==r?null:new Pr(i,s)}static _create(e,n){return new Pr(e,n)}buildRequest(){return{requestUri:m0,returnSecureToken:!0,pendingToken:this.pendingToken}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g0="saml.";class Pa extends Kt{constructor(e){k(e.startsWith(g0),"argument-error");super(e)}static credentialFromResult(e){return Pa.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return Pa.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const n=Pr.fromJSON(e);return k(n,"argument-error"),n}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:n,providerId:i}=e;if(!n||!i)return null;try{return Pr._create(i,n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class un extends Hi{constructor(){super("twitter.com")}static credential(e,n){return Vt._fromParams({providerId:un.PROVIDER_ID,signInMethod:un.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return un.credentialFromTaggedObject(e)}static credentialFromError(e){return un.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:i}=e;if(!n||!i)return null;try{return un.credential(n,i)}catch{return null}}}un.TWITTER_SIGN_IN_METHOD="twitter.com";un.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pp(t,e){return Gt(t,"POST","/v1/accounts:signUp",Ne(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,i,r=!1){const s=await Fn._fromIdTokenResponse(e,i,r),o=Xu(i);return new dt({user:s,providerId:o,_tokenResponse:i,operationType:n})}static async _forOperation(e,n,i){await e._updateTokensIfNecessary(i,!0);const r=Xu(i);return new dt({user:e,providerId:r,_tokenResponse:i,operationType:n})}}function Xu(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function z2(t){var e;const n=qe(t);if(await n._initializationPromise,!((e=n.currentUser)===null||e===void 0)&&e.isAnonymous)return new dt({user:n.currentUser,providerId:null,operationType:"signIn"});const i=await pp(n,{returnSecureToken:!0}),r=await dt._fromIdTokenResponse(n,"signIn",i,!0);return await n._updateCurrentUser(r.user),r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ns extends Yn{constructor(e,n,i,r){var s;super(n.code,n.message);this.operationType=i,this.user=r,Object.setPrototypeOf(this,Ns.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,n,i,r){return new Ns(e,n,i,r)}}function mp(t,e,n,i){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Ns._fromErrorAndOperation(t,s,e,i):s})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gp(t){return new Set(t.map(({providerId:e})=>e).filter(e=>!!e))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function V2(t,e){const n=$(t);await ho(!0,n,e);const{providerUserInfo:i}=await Fw(n.auth,{idToken:await n.getIdToken(),deleteProvider:[e]}),r=gp(i||[]);return n.providerData=n.providerData.filter(s=>r.has(s.providerId)),r.has("phone")||(n.phoneNumber=null),await n.auth._persistUserIfCurrent(n),n}async function Ul(t,e,n=!1){const i=await zt(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return dt._forOperation(t,"link",i)}async function ho(t,e,n){await Rr(e);const i=gp(e.providerData),r=t===!1?"provider-already-linked":"no-such-provider";k(i.has(n)===t,e.auth,r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _p(t,e,n=!1){const{auth:i}=t,r="reauthenticate";try{const s=await zt(t,mp(i,r,e,t),n);k(s.idToken,i,"internal-error");const o=lo(s.idToken);k(o,i,"internal-error");const{sub:a}=o;return k(t.uid===a,i,"user-mismatch"),dt._forOperation(t,r,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Xe(i,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vp(t,e,n=!1){const i="signIn",r=await mp(t,i,e),s=await dt._fromIdTokenResponse(t,i,r);return n||await t._updateCurrentUser(s.user),s}async function Wl(t,e){return vp(qe(t),e)}async function _0(t,e){const n=$(t);return await ho(!1,n,e.providerId),Ul(n,e)}async function v0(t,e){return _p($(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function y0(t,e){return Gt(t,"POST","/v1/accounts:signInWithCustomToken",Ne(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function j2(t,e){const n=qe(t),i=await y0(n,{token:e,returnSecureToken:!0}),r=await dt._fromIdTokenResponse(n,"signIn",i);return await n._updateCurrentUser(r.user),r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class po{constructor(e,n){this.factorId=e,this.uid=n.mfaEnrollmentId,this.enrollmentTime=new Date(n.enrolledAt).toUTCString(),this.displayName=n.displayName}static _fromServerResponse(e,n){return"phoneInfo"in n?Hl._fromServerResponse(e,n):Xe(e,"internal-error")}}class Hl extends po{constructor(e){super("phone",e);this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,n){return new Hl(n)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mo(t,e,n){var i;k(((i=n.url)===null||i===void 0?void 0:i.length)>0,t,"invalid-continue-uri"),k(typeof n.dynamicLinkDomain=="undefined"||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(k(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(k(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $2(t,e,n){const i=$(t),r={requestType:"PASSWORD_RESET",email:e};n&&mo(i,r,n),await n0(i,r)}async function q2(t,e,n){await fp($(t),{oobCode:e,newPassword:n})}async function G2(t,e){await Zw($(t),{oobCode:e})}async function b0(t,e){const n=$(t),i=await fp(n,{oobCode:e}),r=i.requestType;switch(k(r,n,"internal-error"),r){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":k(i.newEmail,n,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":k(i.mfaInfo,n,"internal-error");default:k(i.email,n,"internal-error")}let s=null;return i.mfaInfo&&(s=po._fromServerResponse(qe(n),i.mfaInfo)),{data:{email:(i.requestType==="VERIFY_AND_CHANGE_EMAIL"?i.newEmail:i.email)||null,previousEmail:(i.requestType==="VERIFY_AND_CHANGE_EMAIL"?i.email:i.newEmail)||null,multiFactorInfo:s},operation:r}}async function K2(t,e){const{data:n}=await b0($(t),e);return n.email}async function Y2(t,e,n){const i=qe(t),r=await pp(i,{returnSecureToken:!0,email:e,password:n}),s=await dt._fromIdTokenResponse(i,"signIn",r);return await i._updateCurrentUser(s.user),s}function Q2(t,e,n){return Wl($(t),Jn.credential(e,n))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function J2(t,e,n){const i=$(t),r={requestType:"EMAIL_SIGNIN",email:e};k(n.handleCodeInApp,i,"argument-error"),n&&mo(i,r,n),await i0(i,r)}function X2(t,e){const n=fo.parseLink(e);return(n==null?void 0:n.operation)==="EMAIL_SIGNIN"}async function Z2(t,e,n){const i=$(t),r=Jn.credentialWithLink(e,n||Ar());return k(r._tenantId===(i.tenantId||null),i,"tenant-id-mismatch"),Wl(i,r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function w0(t,e){return Le(t,"POST","/v1/accounts:createAuthUri",Ne(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eS(t,e){const n=Dl()?Ar():"http://localhost",i={identifier:e,continueUri:n},{signinMethods:r}=await w0($(t),i);return r||[]}async function tS(t,e){const n=$(t),i=await t.getIdToken(),r={requestType:"VERIFY_EMAIL",idToken:i};e&&mo(n.auth,r,e);const{email:s}=await t0(n.auth,r);s!==t.email&&await t.reload()}async function nS(t,e,n){const i=$(t),r=await t.getIdToken(),s={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:r,newEmail:e};n&&mo(i.auth,s,n);const{email:o}=await r0(i.auth,s);o!==t.email&&await t.reload()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function I0(t,e){return Le(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iS(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const i=$(t),s={idToken:await i.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await zt(i,I0(i.auth,s));i.displayName=o.displayName||null,i.photoURL=o.photoUrl||null;const a=i.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=i.displayName,a.photoURL=i.photoURL),await i._updateTokensIfNecessary(o)}function rS(t,e){return yp($(t),e,null)}function sS(t,e){return yp($(t),null,e)}async function yp(t,e,n){const{auth:i}=t,s={idToken:await t.getIdToken(),returnSecureToken:!0};e&&(s.email=e),n&&(s.password=n);const o=await zt(t,hp(i,s));await t._updateTokensIfNecessary(o,!0)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E0(t){var e,n;if(!t)return null;const{providerId:i}=t,r=t.rawUserInfo?JSON.parse(t.rawUserInfo):{},s=t.isNewUser||t.kind==="identitytoolkit#SignupNewUserResponse";if(!i&&(t==null?void 0:t.idToken)){const o=(n=(e=lo(t.idToken))===null||e===void 0?void 0:e.firebase)===null||n===void 0?void 0:n.sign_in_provider;if(o){const a=o!=="anonymous"&&o!=="custom"?o:null;return new gi(s,a)}}if(!i)return null;switch(i){case"facebook.com":return new C0(s,r);case"github.com":return new T0(s,r);case"google.com":return new S0(s,r);case"twitter.com":return new A0(s,r,t.screenName||null);case"custom":case"anonymous":return new gi(s,null);default:return new gi(s,i,r)}}class gi{constructor(e,n,i={}){this.isNewUser=e,this.providerId=n,this.profile=i}}class bp extends gi{constructor(e,n,i,r){super(e,n,i);this.username=r}}class C0 extends gi{constructor(e,n){super(e,"facebook.com",n)}}class T0 extends bp{constructor(e,n){super(e,"github.com",n,typeof(n==null?void 0:n.login)=="string"?n==null?void 0:n.login:null)}}class S0 extends gi{constructor(e,n){super(e,"google.com",n)}}class A0 extends bp{constructor(e,n,i){super(e,"twitter.com",n,i)}}function oS(t){const{user:e,_tokenResponse:n}=t;return e.isAnonymous&&!n?{providerId:null,isNewUser:!1,profile:null}:E0(n)}function aS(t,e,n,i){return $(t).onAuthStateChanged(e,n,i)}function lS(t){return $(t).signOut()}class Pn{constructor(e,n){this.type=e,this.credential=n}static _fromIdtoken(e){return new Pn("enroll",e)}static _fromMfaPendingCredential(e){return new Pn("signin",e)}toJSON(){return{multiFactorSession:{[this.type==="enroll"?"idToken":"pendingCredential"]:this.credential}}}static fromJSON(e){var n,i;if(e!=null&&e.multiFactorSession){if(!((n=e.multiFactorSession)===null||n===void 0)&&n.pendingCredential)return Pn._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(!((i=e.multiFactorSession)===null||i===void 0)&&i.idToken)return Pn._fromIdtoken(e.multiFactorSession.idToken)}return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bl{constructor(e,n,i){this.session=e,this.hints=n,this.signInResolver=i}static _fromError(e,n){const i=qe(e),r=n.customData._serverResponse,s=(r.mfaInfo||[]).map(a=>po._fromServerResponse(i,a));k(r.mfaPendingCredential,i,"internal-error");const o=Pn._fromMfaPendingCredential(r.mfaPendingCredential);return new Bl(o,s,async a=>{const l=await a._process(i,o);delete r.mfaInfo,delete r.mfaPendingCredential;const c=Object.assign(Object.assign({},r),{idToken:l.idToken,refreshToken:l.refreshToken});switch(n.operationType){case"signIn":const u=await dt._fromIdTokenResponse(i,n.operationType,c);return await i._updateCurrentUser(u.user),u;case"reauthenticate":return k(n.user,i,"internal-error"),dt._forOperation(n.user,n.operationType,c);default:Xe(i,"internal-error")}})}async resolveSignIn(e){const n=e;return this.signInResolver(n)}}function cS(t,e){var n;const i=$(t),r=e;return k(e.customData.operationType,i,"argument-error"),k((n=r.customData._serverResponse)===null||n===void 0?void 0:n.mfaPendingCredential,i,"argument-error"),Bl._fromError(i,r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R0(t,e){return Le(t,"POST","/v2/accounts/mfaEnrollment:start",Ne(t,e))}function k0(t,e){return Le(t,"POST","/v2/accounts/mfaEnrollment:finalize",Ne(t,e))}function N0(t,e){return Le(t,"POST","/v2/accounts/mfaEnrollment:withdraw",Ne(t,e))}class zl{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload(n=>{n.mfaInfo&&(this.enrolledFactors=n.mfaInfo.map(i=>po._fromServerResponse(e.auth,i)))})}static _fromUser(e){return new zl(e)}async getSession(){return Pn._fromIdtoken(await this.user.getIdToken())}async enroll(e,n){const i=e,r=await this.getSession(),s=await zt(this.user,i._process(this.user.auth,r,n));return await this.user._updateTokensIfNecessary(s),this.user.reload()}async unenroll(e){const n=typeof e=="string"?e:e.uid,i=await this.user.getIdToken(),r=await zt(this.user,N0(this.user.auth,{idToken:i,mfaEnrollmentId:n}));this.enrolledFactors=this.enrolledFactors.filter(({uid:s})=>s!==n),await this.user._updateTokensIfNecessary(r);try{await this.user.reload()}catch(s){if(s.code!=="auth/user-token-expired")throw s}}}const Yo=new WeakMap;function uS(t){const e=$(t);return Yo.has(e)||Yo.set(e,zl._fromUser(e)),Yo.get(e)}const Ps="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wp{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ps,"1"),this.storage.removeItem(Ps),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P0(){const t=He();return Fl(t)||co(t)}const O0=1e3,x0=10;class Ip extends wp{constructor(){super(()=>window.localStorage,"LOCAL");this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=P0()&&Yw(),this.fallbackToPolling=cp(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const i=this.storage.getItem(n),r=this.localCache[n];i!==r&&e(n,r,i)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const i=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(i);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(i,e.newValue):this.storage.removeItem(i);else if(this.localCache[i]===e.newValue&&!n)return}const r=()=>{const o=this.storage.getItem(i);!n&&this.localCache[i]===o||this.notifyListeners(i,o)},s=this.storage.getItem(i);Kw()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,x0):r()}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const r of Array.from(i))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:i}),!0)})},O0)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Ip.type="LOCAL";const M0=Ip;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ep extends wp{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Ep.type="SESSION";const Cp=Ep;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D0(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class go{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(r=>r.isListeningto(e));if(n)return n;const i=new go(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:i,eventType:r,data:s}=n.data,o=this.handlersMap[r];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:i,eventType:r});const a=Array.from(o).map(async c=>c(n.origin,s)),l=await D0(a);n.ports[0].postMessage({status:"done",eventId:i,eventType:r,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}go.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _o(t="",e=10){let n="";for(let i=0;i<e;i++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L0{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,i=50){const r=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const c=_o("",20);r.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},i);o={messageChannel:r,onMessage(d){const f=d;if(f.data.eventId===c)switch(f.data.status){case"ack":clearTimeout(u),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(f.data.response);break;default:clearTimeout(u),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Re(){return window}function F0(t){Re().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vl(){return typeof Re().WorkerGlobalScope!="undefined"&&typeof Re().importScripts=="function"}async function U0(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function W0(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function H0(){return Vl()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tp="firebaseLocalStorageDb",B0=1,Os="firebaseLocalStorage",Sp="fbase_key";class qr{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function vo(t,e){return t.transaction([Os],e?"readwrite":"readonly").objectStore(Os)}function z0(){const t=indexedDB.deleteDatabase(Tp);return new qr(t).toPromise()}function Oa(){const t=indexedDB.open(Tp,B0);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const i=t.result;try{i.createObjectStore(Os,{keyPath:Sp})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const i=t.result;i.objectStoreNames.contains(Os)?e(i):(i.close(),await z0(),e(await Oa()))})})}async function Zu(t,e,n){const i=vo(t,!0).put({[Sp]:e,value:n});return new qr(i).toPromise()}async function V0(t,e){const n=vo(t,!1).get(e),i=await new qr(n).toPromise();return i===void 0?null:i.value}function ed(t,e){const n=vo(t,!0).delete(e);return new qr(n).toPromise()}const j0=800,$0=3;class Ap{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Oa(),this.db)}async _withRetries(e){let n=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(n++>$0)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Vl()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=go._getInstance(H0()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await U0(),!this.activeServiceWorker)return;this.sender=new L0(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);!i||((e=i[0])===null||e===void 0?void 0:e.fulfilled)&&((n=i[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||W0()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Oa();return await Zu(e,Ps,"1"),await ed(e,Ps),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(i=>Zu(i,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(i=>V0(i,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>ed(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const s=vo(r,!1).getAll();return new qr(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],i=new Set;for(const{fbase_key:r,value:s}of e)i.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(s)&&(this.notifyListeners(r,s),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!i.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const r of Array.from(i))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),j0)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Ap.type="LOCAL";const q0=Ap;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G0(t,e){return Le(t,"POST","/v2/accounts/mfaSignIn:start",Ne(t,e))}function K0(t,e){return Le(t,"POST","/v2/accounts/mfaSignIn:finalize",Ne(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Y0(t){return(await Le(t,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q0(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function Rp(t){return new Promise((e,n)=>{const i=document.createElement("script");i.setAttribute("src",t),i.onload=e,i.onerror=r=>{const s=rt("internal-error");s.customData=r,n(s)},i.type="text/javascript",i.charset="UTF-8",Q0().appendChild(i)})}function kp(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J0=500,X0=6e4,is=1e12;class Z0{constructor(e){this.auth=e,this.counter=is,this._widgets=new Map}render(e,n){const i=this.counter;return this._widgets.set(i,new eI(e,this.auth.name,n||{})),this.counter++,i}reset(e){var n;const i=e||is;(n=this._widgets.get(i))===null||n===void 0||n.delete(),this._widgets.delete(i)}getResponse(e){var n;const i=e||is;return((n=this._widgets.get(i))===null||n===void 0?void 0:n.getResponse())||""}async execute(e){var n;const i=e||is;return(n=this._widgets.get(i))===null||n===void 0||n.execute(),""}}class eI{constructor(e,n,i){this.params=i,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const r=typeof e=="string"?document.getElementById(e):e;k(r,"argument-error",{appName:n}),this.container=r,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=tI(50);const{callback:e,"expired-callback":n}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,n)try{n()}catch{}this.isVisible&&this.execute()},X0)},J0))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function tI(t){const e=[],n="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let i=0;i<t;i++)e.push(n.charAt(Math.floor(Math.random()*n.length)));return e.join("")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qo=kp("rcb"),nI=new jr(3e4,6e4),iI="https://www.google.com/recaptcha/api.js?";class rI{constructor(){this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!Re().grecaptcha}load(e,n=""){return k(sI(n),e,"argument-error"),this.shouldResolveImmediately(n)?Promise.resolve(Re().grecaptcha):new Promise((i,r)=>{const s=Re().setTimeout(()=>{r(rt(e,"network-request-failed"))},nI.get());Re()[Qo]=()=>{Re().clearTimeout(s),delete Re()[Qo];const a=Re().grecaptcha;if(!a){r(rt(e,"internal-error"));return}const l=a.render;a.render=(c,u)=>{const d=l(c,u);return this.counter++,d},this.hostLanguage=n,i(a)};const o=`${iI}?${Qn({onload:Qo,render:"explicit",hl:n})}`;Rp(o).catch(()=>{clearTimeout(s),r(rt(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){return!!Re().grecaptcha&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function sI(t){return t.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(t)}class oI{async load(e){return new Z0(e)}clearedOneInstance(){}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Np="recaptcha",aI={theme:"light",type:"image"};class dS{constructor(e,n=Object.assign({},aI),i){this.parameters=n,this.type=Np,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=qe(i),this.isInvisible=this.parameters.size==="invisible",k(typeof document!="undefined",this.auth,"operation-not-supported-in-this-environment");const r=typeof e=="string"?document.getElementById(e):e;k(r,this.auth,"argument-error"),this.container=r,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new oI:new rI,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),n=this.getAssertedRecaptcha(),i=n.getResponse(e);return i||new Promise(r=>{const s=o=>{!o||(this.tokenChangeListeners.delete(s),r(o))};this.tokenChangeListeners.add(s),this.isInvisible&&n.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){k(!this.parameters.sitekey,this.auth,"argument-error"),k(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),k(typeof document!="undefined",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return n=>{if(this.tokenChangeListeners.forEach(i=>i(n)),typeof e=="function")e(n);else if(typeof e=="string"){const i=Re()[e];typeof i=="function"&&i(n)}}}assertNotDestroyed(){k(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const n=document.createElement("div");e.appendChild(n),e=n}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){k(Dl()&&!Vl(),this.auth,"internal-error"),await lI(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await Y0(this.auth);k(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return k(this.recaptcha,this.auth,"internal-error"),this.recaptcha}}function lI(){let t=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}t=()=>e(),window.addEventListener("load",t)}).catch(e=>{throw t&&window.removeEventListener("load",t),e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jl{constructor(e,n){this.verificationId=e,this.onConfirmation=n}confirm(e){const n=Un._fromVerification(this.verificationId,e);return this.onConfirmation(n)}}async function fS(t,e,n){const i=qe(t),r=await yo(i,e,$(n));return new jl(r,s=>Wl(i,s))}async function hS(t,e,n){const i=$(t);await ho(!1,i,"phone");const r=await yo(i.auth,e,$(n));return new jl(r,s=>_0(i,s))}async function pS(t,e,n){const i=$(t),r=await yo(i.auth,e,$(n));return new jl(r,s=>v0(i,s))}async function yo(t,e,n){var i;const r=await n.verify();try{k(typeof r=="string",t,"argument-error"),k(n.type===Np,t,"argument-error");let s;if(typeof e=="string"?s={phoneNumber:e}:s=e,"session"in s){const o=s.session;if("phoneNumber"in s)return k(o.type==="enroll",t,"internal-error"),(await R0(t,{idToken:o.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:r}})).phoneSessionInfo.sessionInfo;{k(o.type==="signin",t,"internal-error");const a=((i=s.multiFactorHint)===null||i===void 0?void 0:i.uid)||s.multiFactorUid;return k(a,t,"missing-multi-factor-info"),(await G0(t,{mfaPendingCredential:o.credential,mfaEnrollmentId:a,phoneSignInInfo:{recaptchaToken:r}})).phoneResponseInfo.sessionInfo}}else{const{sessionInfo:o}=await l0(t,{phoneNumber:s.phoneNumber,recaptchaToken:r});return o}}finally{n._reset()}}async function mS(t,e){await Ul($(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _i{constructor(e){this.providerId=_i.PROVIDER_ID,this.auth=qe(e)}verifyPhoneNumber(e,n){return yo(this.auth,e,$(n))}static credential(e,n){return Un._fromVerification(e,n)}static credentialFromResult(e){const n=e;return _i.credentialFromTaggedObject(n)}static credentialFromError(e){return _i.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:n,temporaryProof:i}=e;return n&&i?Un._fromTokenResponse(n,i):null}}_i.PROVIDER_ID="phone";_i.PHONE_SIGN_IN_METHOD="phone";/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xn(t,e){return e?Mt(e):(k(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $l extends $r{constructor(e){super("custom","custom");this.params=e}_getIdTokenResponse(e){return Ut(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ut(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ut(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function cI(t){return vp(t.auth,new $l(t),t.bypassAuthState)}function uI(t){const{auth:e,user:n}=t;return k(n,e,"internal-error"),_p(n,new $l(t),t.bypassAuthState)}async function dI(t){const{auth:e,user:n}=t;return k(n,e,"internal-error"),Ul(n,new $l(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pp{constructor(e,n,i,r,s=!1){this.auth=e,this.resolver=i,this.user=r,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:i,postBody:r,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:i,tenantId:s||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return cI;case"linkViaPopup":case"linkViaRedirect":return dI;case"reauthViaPopup":case"reauthViaRedirect":return uI;default:Xe(this.auth,"internal-error")}}resolve(e){Bt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Bt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fI=new jr(2e3,1e4);async function gS(t,e,n){const i=qe(t);Wi(t,e,Kt);const r=Xn(i,n);return new Dt(i,"signInViaPopup",e,r).executeNotNull()}async function _S(t,e,n){const i=$(t);Wi(i.auth,e,Kt);const r=Xn(i.auth,n);return new Dt(i.auth,"reauthViaPopup",e,r,i).executeNotNull()}async function vS(t,e,n){const i=$(t);Wi(i.auth,e,Kt);const r=Xn(i.auth,n);return new Dt(i.auth,"linkViaPopup",e,r,i).executeNotNull()}class Dt extends Pp{constructor(e,n,i,r,s){super(e,n,r,s);this.provider=i,this.authWindow=null,this.pollId=null,Dt.currentPopupAction&&Dt.currentPopupAction.cancel(),Dt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return k(e,this.auth,"internal-error"),e}async onExecution(){Bt(this.filter.length===1,"Popup operations only handle one event");const e=_o();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(rt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(rt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Dt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,i;if(!((i=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(rt(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,fI.get())};e()}}Dt.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hI="pendingRedirect",ms=new Map;class pI extends Pp{constructor(e,n,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,i);this.eventId=null}async execute(){let e=ms.get(this.auth._key());if(!e){try{const i=await mI(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(n){e=()=>Promise.reject(n)}ms.set(this.auth._key(),e)}return this.bypassAuthState||ms.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function mI(t,e){const n=xp(e),i=Op(t);if(!await i._isAvailable())return!1;const r=await i._get(n)==="true";return await i._remove(n),r}async function ql(t,e){return Op(t)._set(xp(e),"true")}function yS(){ms.clear()}function Op(t){return Mt(t._redirectPersistence)}function xp(t){return hs(hI,t.config.apiKey,t.name)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bS(t,e,n){return gI(t,e,n)}async function gI(t,e,n){const i=qe(t);Wi(t,e,Kt);const r=Xn(i,n);return await ql(r,i),r._openRedirect(i,e,"signInViaRedirect")}function wS(t,e,n){return _I(t,e,n)}async function _I(t,e,n){const i=$(t);Wi(i.auth,e,Kt);const r=Xn(i.auth,n);await ql(r,i.auth);const s=await Dp(i);return r._openRedirect(i.auth,e,"reauthViaRedirect",s)}function IS(t,e,n){return vI(t,e,n)}async function vI(t,e,n){const i=$(t);Wi(i.auth,e,Kt);const r=Xn(i.auth,n);await ho(!1,i,e.providerId),await ql(r,i.auth);const s=await Dp(i);return r._openRedirect(i.auth,e,"linkViaRedirect",s)}async function ES(t,e){return await qe(t)._initializationPromise,Mp(t,e,!1)}async function Mp(t,e,n=!1){const i=qe(t),r=Xn(i,e),o=await new pI(i,r,n).execute();return o&&!n&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,e)),o}async function Dp(t){const e=_o(`${t.uid}:::`);return t._redirectEventId=e,await t.auth._setRedirectUser(t),await t.auth._persistUserIfCurrent(t),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yI=10*60*1e3;class bI{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(n=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!wI(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var i;if(e.error&&!Lp(e)){const r=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";n.onError(rt(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const i=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=yI&&this.cachedEventUids.clear(),this.cachedEventUids.has(td(e))}saveEventToCache(e){this.cachedEventUids.add(td(e)),this.lastProcessedEventTime=Date.now()}}function td(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Lp({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function wI(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Lp(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function II(t,e={}){return Le(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EI=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,CI=/^https?/;async function TI(t){if(t.config.emulator)return;const{authorizedDomains:e}=await II(t);for(const n of e)try{if(SI(n))return}catch{}Xe(t,"unauthorized-domain")}function SI(t){const e=Ar(),{protocol:n,hostname:i}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&i===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===i}if(!CI.test(n))return!1;if(EI.test(t))return i===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(i)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AI=new jr(3e4,6e4);function nd(){const t=Re().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function RI(t){return new Promise((e,n)=>{var i,r,s;function o(){nd(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{nd(),n(rt(t,"network-request-failed"))},timeout:AI.get()})}if(!((r=(i=Re().gapi)===null||i===void 0?void 0:i.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((s=Re().gapi)===null||s===void 0)&&s.load)o();else{const a=kp("iframefcb");return Re()[a]=()=>{gapi.load?o():n(rt(t,"network-request-failed"))},Rp(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw gs=null,e})}let gs=null;function kI(t){return gs=gs||RI(t),gs}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NI=new jr(5e3,15e3),PI="__/auth/iframe",OI="emulator/auth/iframe",xI={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},MI=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function DI(t){const e=t.config;k(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Ll(e,OI):`https://${t.config.authDomain}/${PI}`,i={apiKey:e.apiKey,appName:t.name,v:Ui},r=MI.get(t.config.apiHost);r&&(i.eid=r);const s=t._getFrameworks();return s.length&&(i.fw=s.join(",")),`${n}?${Qn(i).slice(1)}`}async function LI(t){const e=await kI(t),n=Re().gapi;return k(n,t,"internal-error"),e.open({where:document.body,url:DI(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:xI,dontclear:!0},i=>new Promise(async(r,s)=>{await i.restyle({setHideOnLeave:!1});const o=rt(t,"network-request-failed"),a=Re().setTimeout(()=>{s(o)},NI.get());function l(){Re().clearTimeout(a),r(i)}i.ping(l).then(l,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FI={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},UI=500,WI=600,HI="_blank",BI="http://localhost";class id{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function zI(t,e,n,i=UI,r=WI){const s=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString();let a="";const l=Object.assign(Object.assign({},FI),{width:i.toString(),height:r.toString(),top:s,left:o}),c=He().toLowerCase();n&&(a=rp(c)?HI:n),ip(c)&&(e=e||BI,l.scrollbars="yes");const u=Object.entries(l).reduce((f,[p,g])=>`${f}${p}=${g},`,"");if(Gw(c)&&a!=="_self")return VI(e||"",a),new id(null);const d=window.open(e||"",a,u);k(d,t,"popup-blocked");try{d.focus()}catch{}return new id(d)}function VI(t,e){const n=document.createElement("a");n.href=t,n.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jI="__/auth/handler",$I="emulator/auth/handler";function rd(t,e,n,i,r,s){k(t.config.authDomain,t,"auth-domain-config-required"),k(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:i,v:Ui,eventId:r};if(e instanceof Kt){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",ka(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,c]of Object.entries(s||{}))o[l]=c}if(e instanceof Hi){const l=e.getScopes().filter(c=>c!=="");l.length>0&&(o.scopes=l.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];return`${qI(t)}?${Qn(a).slice(1)}`}function qI({config:t}){return t.emulator?Ll(t,$I):`https://${t.authDomain}/${jI}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jo="webStorageSupport";class GI{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Cp,this._completeRedirectFn=Mp}async _openPopup(e,n,i,r){var s;Bt((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=rd(e,n,i,Ar(),r);return zI(e,o,_o())}async _openRedirect(e,n,i,r){return await this._originValidation(e),F0(rd(e,n,i,Ar(),r)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:r,promise:s}=this.eventManagers[n];return r?Promise.resolve(r):(Bt(s,"If manager is not set, promise should be"),s)}const i=this.initAndGetManager(e);return this.eventManagers[n]={promise:i},i.catch(()=>{delete this.eventManagers[n]}),i}async initAndGetManager(e){const n=await LI(e),i=new bI(e);return n.register("authEvent",r=>(k(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:i.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=n,i}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Jo,{type:Jo},r=>{var s;const o=(s=r==null?void 0:r[0])===null||s===void 0?void 0:s[Jo];o!==void 0&&n(!!o),Xe(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=TI(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return cp()||Fl()||co()}}const KI=GI;class YI{constructor(e){this.factorId=e}_process(e,n,i){switch(n.type){case"enroll":return this._finalizeEnroll(e,n.credential,i);case"signin":return this._finalizeSignIn(e,n.credential);default:return Tt("unexpected MultiFactorSessionType")}}}class Gl extends YI{constructor(e){super("phone");this.credential=e}static _fromCredential(e){return new Gl(e)}_finalizeEnroll(e,n,i){return k0(e,{idToken:n,displayName:i,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,n){return K0(e,{mfaPendingCredential:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class QI{constructor(){}static assertion(e){return Gl._fromCredential(e)}}QI.FACTOR_ID="phone";var sd="@firebase/auth",od="0.19.10";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JI{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(i=>{var r;e(((r=i)===null||r===void 0?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){k(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XI(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function ZI(t){zn(new Bn("auth",(e,{options:n})=>{const i=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),{apiKey:s,authDomain:o}=i.options;return((a,l)=>{k(s&&!s.includes(":"),"invalid-api-key",{appName:a.name}),k(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const c={apiKey:s,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:up(t)},u=new Qw(a,l,c);return Nw(u,n),u})(i,r)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,i)=>{e.getProvider("auth-internal").initialize()})),zn(new Bn("auth-internal",e=>{const n=qe(e.getProvider("auth").getImmediate());return(i=>new JI(i))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ft(sd,od,XI(t)),Ft(sd,od,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CS(t=Ol()){const e=Vr(t,"auth");return e.isInitialized()?e.getImmediate():kw(t,{popupRedirectResolver:KI,persistence:[q0,M0,Cp]})}ZI("Browser");const ad="@firebase/database",ld="0.12.6";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Fp="";function e1(t){Fp=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t1{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),De(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Cr(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n1{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return kt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Up=function(t){try{if(typeof window!="undefined"&&typeof window[t]!="undefined"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new t1(e)}}catch{}return new n1},On=Up("localStorage"),xa=Up("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vi=new Nl("@firebase/database"),i1=function(){let t=1;return function(){return t++}}(),Wp=function(t){const e=Eb(t),n=new yb;n.update(e);const i=n.digest();return Al.encodeByteArray(i)},Gr=function(...t){let e="";for(let n=0;n<t.length;n++){const i=t[n];Array.isArray(i)||i&&typeof i=="object"&&typeof i.length=="number"?e+=Gr.apply(null,i):typeof i=="object"?e+=De(i):e+=i,e+=" "}return e};let Wn=null,cd=!0;const r1=function(t,e){S(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(vi.logLevel=ae.VERBOSE,Wn=vi.log.bind(vi),e&&xa.set("logging_enabled",!0)):typeof t=="function"?Wn=t:(Wn=null,xa.remove("logging_enabled"))},Fe=function(...t){if(cd===!0&&(cd=!1,Wn===null&&xa.get("logging_enabled")===!0&&r1(!0)),Wn){const e=Gr.apply(null,t);Wn(e)}},Kr=function(t){return function(...e){Fe(t,...e)}},Ma=function(...t){const e="FIREBASE INTERNAL ERROR: "+Gr(...t);vi.error(e)},Vn=function(...t){const e=`FIREBASE FATAL ERROR: ${Gr(...t)}`;throw vi.error(e),new Error(e)},$e=function(...t){const e="FIREBASE WARNING: "+Gr(...t);vi.warn(e)},s1=function(){typeof window!="undefined"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&$e("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Kl=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},o1=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},jn="[MIN_NAME]",yn="[MAX_NAME]",Zn=function(t,e){if(t===e)return 0;if(t===jn||e===yn)return-1;if(e===jn||t===yn)return 1;{const n=ud(t),i=ud(e);return n!==null?i!==null?n-i===0?t.length-e.length:n-i:-1:i!==null?1:t<e?-1:1}},a1=function(t,e){return t===e?0:t<e?-1:1},Yi=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+De(e))},Yl=function(t){if(typeof t!="object"||t===null)return De(t);const e=[];for(const i in t)e.push(i);e.sort();let n="{";for(let i=0;i<e.length;i++)i!==0&&(n+=","),n+=De(e[i]),n+=":",n+=Yl(t[e[i]]);return n+="}",n},Hp=function(t,e){const n=t.length;if(n<=e)return[t];const i=[];for(let r=0;r<n;r+=e)r+e>n?i.push(t.substring(r,n)):i.push(t.substring(r,r+e));return i};function Be(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const Bp=function(t){S(!Kl(t),"Invalid JSON number");const e=11,n=52,i=(1<<e-1)-1;let r,s,o,a,l;t===0?(s=0,o=0,r=1/t===-1/0?1:0):(r=t<0,t=Math.abs(t),t>=Math.pow(2,1-i)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),i),s=a+i,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-i-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(s%2?1:0),s=Math.floor(s/2);c.push(r?1:0),c.reverse();const u=c.join("");let d="";for(l=0;l<64;l+=8){let f=parseInt(u.substr(l,8),2).toString(16);f.length===1&&(f="0"+f),d=d+f}return d.toLowerCase()},l1=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},c1=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function u1(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const i=new Error(t+" at "+e._path.toString()+": "+n);return i.code=t.toUpperCase(),i}const d1=new RegExp("^-?(0*)\\d{1,10}$"),f1=-2147483648,h1=2147483647,ud=function(t){if(d1.test(t)){const e=Number(t);if(e>=f1&&e<=h1)return e}return null},Bi=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw $e("Exception was thrown by user callback.",n),e},Math.floor(0))}},p1=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},hr=function(t,e){const n=setTimeout(t,e);return typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m1{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(i=>this.appCheck=i)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,i)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,i):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(i=>i.addTokenListener(e))}notifyForInvalidToken(){$e(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g1{constructor(e,n,i){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=i,this.auth_=null,this.auth_=i.getImmediate({optional:!0}),this.auth_||i.onInit(r=>this.auth_=r)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Fe("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,i)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,i):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',$e(e)}}class Da{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Da.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ql="5",zp="v",Vp="s",jp="r",$p="f",qp=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Gp="ls",_1="p",La="ac",Kp="websocket",Yp="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v1{constructor(e,n,i,r,s=!1,o="",a=!1){this.secure=n,this.namespace=i,this.webSocketOnly=r,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=On.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&On.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function y1(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function Qp(t,e,n){S(typeof e=="string","typeof type must == string"),S(typeof n=="object","typeof params must == object");let i;if(e===Kp)i=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Yp)i=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);y1(t)&&(n.ns=t.namespace);const r=[];return Be(n,(s,o)=>{r.push(s+"="+o)}),i+r.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b1{constructor(){this.counters_={}}incrementCounter(e,n=1){kt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return lb(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xo={},Zo={};function Jl(t){const e=t.toString();return Xo[e]||(Xo[e]=new b1),Xo[e]}function w1(t,e){const n=t.toString();return Zo[n]||(Zo[n]=e()),Zo[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I1{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const i=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let r=0;r<i.length;++r)i[r]&&Bi(()=>{this.onMessage_(i[r])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dd="start",E1="close",C1="pLPCommand",T1="pRTLPCB",Jp="id",Xp="pw",Zp="ser",S1="cb",A1="seg",R1="ts",k1="d",N1="dframe",em=1870,tm=30,P1=em-tm,O1=25e3,x1=3e4;class di{constructor(e,n,i,r,s,o,a){this.connId=e,this.repoInfo=n,this.applicationId=i,this.appCheckToken=r,this.authToken=s,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Kr(e),this.stats_=Jl(n),this.urlFn=l=>(this.appCheckToken&&(l[La]=this.appCheckToken),Qp(n,Yp,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new I1(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(x1)),o1(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Xl((...s)=>{const[o,a,l,c,u]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===dd)this.id=a,this.password=l;else if(o===E1)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,a]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const i={};i[dd]="t",i[Zp]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(i[S1]=this.scriptTagHolder.uniqueCallbackIdentifier),i[zp]=Ql,this.transportSessionId&&(i[Vp]=this.transportSessionId),this.lastSessionId&&(i[Gp]=this.lastSessionId),this.applicationId&&(i[_1]=this.applicationId),this.appCheckToken&&(i[La]=this.appCheckToken),typeof location!="undefined"&&location.hostname&&qp.test(location.hostname)&&(i[jp]=$p);const r=this.urlFn(i);this.log_("Connecting via long-poll to "+r),this.scriptTagHolder.addTag(r,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){di.forceAllow_=!0}static forceDisallow(){di.forceDisallow_=!0}static isAvailable(){return di.forceAllow_?!0:!di.forceDisallow_&&typeof document!="undefined"&&document.createElement!=null&&!l1()&&!c1()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=De(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const i=Fh(n),r=Hp(i,P1);for(let s=0;s<r.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,r.length,r[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const i={};i[N1]="t",i[Jp]=e,i[Xp]=n,this.myDisconnFrame.src=this.urlFn(i),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=De(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Xl{constructor(e,n,i,r){this.onDisconnect=i,this.urlFn=r,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=i1(),window[C1+this.uniqueCallbackIdentifier]=e,window[T1+this.uniqueCallbackIdentifier]=n,this.myIFrame=Xl.createIFrame_();let s="";if(this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"){const a=document.domain;s='<script>document.domain="'+a+'";<\/script>'}const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){Fe("frame writing exception"),a.stack&&Fe(a.stack),Fe(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Fe("No IE domain setting required")}catch{const i=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+i+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.innerHTML="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Jp]=this.myID,e[Xp]=this.myPW,e[Zp]=this.currentSerial;let n=this.urlFn(e),i="",r=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+tm+i.length<=em;){const o=this.pendingSegs.shift();i=i+"&"+A1+r+"="+o.seg+"&"+R1+r+"="+o.ts+"&"+k1+r+"="+o.d,r++}return n=n+i,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,i){this.pendingSegs.push({seg:e,ts:n,d:i}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const i=()=>{this.outstandingRequests.delete(n),this.newRequest_()},r=setTimeout(i,Math.floor(O1)),s=()=>{clearTimeout(r),i()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const i=this.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=e,i.onload=i.onreadystatechange=function(){const r=i.readyState;(!r||r==="loaded"||r==="complete")&&(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),n())},i.onerror=()=>{Fe("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(i)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M1=16384,D1=45e3;let xs=null;typeof MozWebSocket!="undefined"?xs=MozWebSocket:typeof WebSocket!="undefined"&&(xs=WebSocket);class ht{constructor(e,n,i,r,s,o,a){this.connId=e,this.applicationId=i,this.appCheckToken=r,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Kr(this.connId),this.stats_=Jl(n),this.connURL=ht.connectionURL_(n,o,a,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,i,r){const s={};return s[zp]=Ql,typeof location!="undefined"&&location.hostname&&qp.test(location.hostname)&&(s[jp]=$p),n&&(s[Vp]=n),i&&(s[Gp]=i),r&&(s[La]=r),Qp(e,Kp,s)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,On.set("previous_websocket_failure",!0);try{if(!Bh()){const i={headers:{"X-Firebase-GMPID":this.applicationId||"","X-Firebase-AppCheck":this.appCheckToken||""}};this.mySock=new xs(this.connURL,[],i)}}catch(i){this.log_("Error instantiating WebSocket.");const r=i.message||i.data;r&&this.log_(r),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=i=>{this.handleIncomingFrame(i)},this.mySock.onerror=i=>{this.log_("WebSocket error.  Closing connection.");const r=i.message||i.data;r&&this.log_(r),this.onClosed_()}}start(){}static forceDisallow(){ht.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator!="undefined"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,i=navigator.userAgent.match(n);i&&i.length>1&&parseFloat(i[1])<4.4&&(e=!0)}return!e&&xs!==null&&!ht.forceDisallow_}static previouslyFailed(){return On.isInMemoryStorage||On.get("previous_websocket_failure")===!0}markConnectionHealthy(){On.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const i=Cr(n);this.onMessage(i)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(S(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const i=this.extractFrameCount_(n);i!==null&&this.appendFrame_(i)}}send(e){this.resetKeepAlive();const n=De(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const i=Hp(n,M1);i.length>1&&this.sendString_(String(i.length));for(let r=0;r<i.length;r++)this.sendString_(i[r])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(D1))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}ht.responsesRequiredToBeHealthy=2;ht.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zl{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[di,ht]}initTransports_(e){const n=ht&&ht.isAvailable();let i=n&&!ht.previouslyFailed();if(e.webSocketOnly&&(n||$e("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),i=!0),i)this.transports_=[ht];else{const r=this.transports_=[];for(const s of Zl.ALL_TRANSPORTS)s&&s.isAvailable()&&r.push(s)}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L1=6e4,F1=5e3,U1=10*1024,W1=100*1024,ea="t",fd="d",H1="s",hd="r",B1="e",pd="o",md="a",gd="n",_d="p",z1="h";class V1{constructor(e,n,i,r,s,o,a,l,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=i,this.appCheckToken_=r,this.authToken_=s,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Kr("c:"+this.id+":"),this.transportManager_=new Zl(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),i=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,i)},Math.floor(0));const r=e.healthyTimeout||0;r>0&&(this.healthyTimeout_=hr(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>W1?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>U1?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(r)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(ea in e){const n=e[ea];n===md?this.upgradeIfSecondaryHealthy_():n===hd?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===pd&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Yi("t",e),i=Yi("d",e);if(n==="c")this.onSecondaryControl_(i);else if(n==="d")this.pendingDataMessages.push(i);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:_d,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:md,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:gd,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Yi("t",e),i=Yi("d",e);n==="c"?this.onControl_(i):n==="d"&&this.onDataMessage_(i)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Yi(ea,e);if(fd in e){const i=e[fd];if(n===z1)this.onHandshake_(i);else if(n===gd){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let r=0;r<this.pendingDataMessages.length;++r)this.onDataMessage_(this.pendingDataMessages[r]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===H1?this.onConnectionShutdown_(i):n===hd?this.onReset_(i):n===B1?Ma("Server Error: "+i):n===pd?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Ma("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,i=e.v,r=e.h;this.sessionId=e.s,this.repoInfo_.host=r,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Ql!==i&&$e("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),i=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,i),hr(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(L1))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):hr(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(F1))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:_d,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(On.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nm{put(e,n,i,r){}merge(e,n,i,r){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,i){}onDisconnectMerge(e,n,i){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class im{constructor(e){this.allowedEvents_=e,this.listeners_={},S(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const i=[...this.listeners_[e]];for(let r=0;r<i.length;r++)i[r].callback.apply(i[r].context,n)}}on(e,n,i){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:i});const r=this.getInitialEvent(e);r&&n.apply(i,r)}off(e,n,i){this.validateEventType_(e);const r=this.listeners_[e]||[];for(let s=0;s<r.length;s++)if(r[s].callback===n&&(!i||i===r[s].context)){r.splice(s,1);return}}validateEventType_(e){S(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ms extends im{constructor(){super(["online"]);this.online_=!0,typeof window!="undefined"&&typeof window.addEventListener!="undefined"&&!Rl()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Ms}getInitialEvent(e){return S(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vd=32,yd=768;class oe{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let i=0;for(let r=0;r<this.pieces_.length;r++)this.pieces_[r].length>0&&(this.pieces_[i]=this.pieces_[r],i++);this.pieces_.length=i,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function re(){return new oe("")}function Y(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function bn(t){return t.pieces_.length-t.pieceNum_}function ge(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new oe(t.pieces_,e)}function ec(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function j1(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function Or(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function rm(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new oe(e,0)}function Ce(t,e){const n=[];for(let i=t.pieceNum_;i<t.pieces_.length;i++)n.push(t.pieces_[i]);if(e instanceof oe)for(let i=e.pieceNum_;i<e.pieces_.length;i++)n.push(e.pieces_[i]);else{const i=e.split("/");for(let r=0;r<i.length;r++)i[r].length>0&&n.push(i[r])}return new oe(n,0)}function Q(t){return t.pieceNum_>=t.pieces_.length}function Qe(t,e){const n=Y(t),i=Y(e);if(n===null)return e;if(n===i)return Qe(ge(t),ge(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function $1(t,e){const n=Or(t,0),i=Or(e,0);for(let r=0;r<n.length&&r<i.length;r++){const s=Zn(n[r],i[r]);if(s!==0)return s}return n.length===i.length?0:n.length<i.length?-1:1}function tc(t,e){if(bn(t)!==bn(e))return!1;for(let n=t.pieceNum_,i=e.pieceNum_;n<=t.pieces_.length;n++,i++)if(t.pieces_[n]!==e.pieces_[i])return!1;return!0}function ct(t,e){let n=t.pieceNum_,i=e.pieceNum_;if(bn(t)>bn(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[i])return!1;++n,++i}return!0}class q1{constructor(e,n){this.errorPrefix_=n,this.parts_=Or(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let i=0;i<this.parts_.length;i++)this.byteLength_+=oo(this.parts_[i]);sm(this)}}function G1(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=oo(e),sm(t)}function K1(t){const e=t.parts_.pop();t.byteLength_-=oo(e),t.parts_.length>0&&(t.byteLength_-=1)}function sm(t){if(t.byteLength_>yd)throw new Error(t.errorPrefix_+"has a key path longer than "+yd+" bytes ("+t.byteLength_+").");if(t.parts_.length>vd)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+vd+") or object contains a cycle "+An(t))}function An(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nc extends im{constructor(){super(["visible"]);let e,n;typeof document!="undefined"&&typeof document.addEventListener!="undefined"&&(typeof document.hidden!="undefined"?(n="visibilitychange",e="hidden"):typeof document.mozHidden!="undefined"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden!="undefined"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden!="undefined"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const i=!document[e];i!==this.visible_&&(this.visible_=i,this.trigger("visible",i))},!1)}static getInstance(){return new nc}getInitialEvent(e){return S(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qi=1e3,Y1=60*5*1e3,Q1=3*1e3,bd=30*1e3,J1=1.3,X1=3e4,Z1="server_kill",wd=3;class Wt extends nm{constructor(e,n,i,r,s,o,a,l){super();if(this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=i,this.onConnectStatus_=r,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=Wt.nextPersistentConnectionId_++,this.log_=Kr("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Qi,this.maxReconnectDelay_=Y1,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!Bh())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");nc.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Ms.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,i){const r=++this.requestNumber_,s={r,a:e,b:n};this.log_(De(s)),S(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),i&&(this.requestCBHash_[r]=i)}get(e){this.initConnection_();const n=new Hr,i={p:e._path.toString(),q:e._queryObject},r={action:"g",request:i,onComplete:o=>{const a=o.d;o.s==="ok"?(this.onDataUpdate_(i.p,a,!1,null),n.resolve(a)):n.reject(a)}};this.outstandingGets_.push(r),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_||setTimeout(()=>{const o=this.outstandingGets_[s];o===void 0||r!==o||(delete this.outstandingGets_[s],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),this.log_("get "+s+" timed out on connection"),n.reject(new Error("Client is offline.")))},Q1),this.connected_&&this.sendGet_(s),n.promise}listen(e,n,i,r){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),S(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),S(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const a={onComplete:r,hashFn:n,query:e,tag:i};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,i=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(i)})}sendListen_(e){const n=e.query,i=n._path.toString(),r=n._queryIdentifier;this.log_("Listen on "+i+" for "+r);const s={p:i},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,a=>{const l=a.d,c=a.s;Wt.warnOnListenWarnings_(l,n),(this.listens.get(i)&&this.listens.get(i).get(r))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(i,r),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&kt(e,"w")){const i=Ci(e,"w");if(Array.isArray(i)&&~i.indexOf("no_index")){const r='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();$e(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${r} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||vb(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=bd)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=_b(e)?"auth":"gauth",i={cred:e};this.authOverride_===null?i.noauth=!0:typeof this.authOverride_=="object"&&(i.authvar=this.authOverride_),this.sendRequest(n,i,r=>{const s=r.s,o=r.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,i=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,i)})}unlisten(e,n){const i=e._path.toString(),r=e._queryIdentifier;this.log_("Unlisten called for "+i+" "+r),S(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(i,r)&&this.connected_&&this.sendUnlisten_(i,r,e._queryObject,n)}sendUnlisten_(e,n,i,r){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";r&&(s.q=i,s.t=r),this.sendRequest(o,s)}onDisconnectPut(e,n,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:i})}onDisconnectMerge(e,n,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:i})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,i,r){const s={p:n,d:i};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{r&&setTimeout(()=>{r(o.s,o.d)},Math.floor(0))})}put(e,n,i,r){this.putInternal("p",e,n,i,r)}merge(e,n,i,r){this.putInternal("m",e,n,i,r)}putInternal(e,n,i,r,s){this.initConnection_();const o={p:n,d:i};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:r}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,i=this.outstandingPuts_[e].request,r=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,i,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),r&&r(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,i=>{if(i.s!=="ok"){const s=i.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+De(e));const n=e.r,i=this.requestCBHash_[n];i&&(delete this.requestCBHash_[n],i(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Ma("Unrecognized action received from server: "+De(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){S(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Qi,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Qi,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>X1&&(this.reconnectDelay_=Qi),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*J1)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),i=this.onRealtimeDisconnect_.bind(this),r=this.id+":"+Wt.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,i())},c=function(d){S(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(d)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[d,f]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?Fe("getToken() completed but was canceled"):(Fe("getToken() completed. Creating connection."),this.authToken_=d&&d.accessToken,this.appCheckToken_=f&&f.token,a=new V1(r,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,i,p=>{$e(p+" ("+this.repoInfo_.toString()+")"),this.interrupt(Z1)},s))}catch(d){this.log_("Failed to get token: "+d),o||(this.repoInfo_.nodeAdmin&&$e(d),l())}}}interrupt(e){Fe("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Fe("Resuming connection for reason: "+e),delete this.interruptReasons_[e],ka(this.interruptReasons_)&&(this.reconnectDelay_=Qi,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let i;n?i=n.map(s=>Yl(s)).join("$"):i="default";const r=this.removeListen_(e,i);r&&r.onComplete&&r.onComplete("permission_denied")}removeListen_(e,n){const i=new oe(e).toString();let r;if(this.listens.has(i)){const s=this.listens.get(i);r=s.get(n),s.delete(n),s.size===0&&this.listens.delete(i)}else r=void 0;return r}onAuthRevoked_(e,n){Fe("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=wd&&(this.reconnectDelay_=bd,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Fe("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=wd&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+Fp.replace(/\./g,"-")]=1,Rl()?e["framework.cordova"]=1:Hh()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Ms.getInstance().currentlyOnline();return ka(this.interruptReasons_)&&e}}Wt.nextPersistentConnectionId_=0;Wt.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new J(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bo{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const i=new J(jn,e),r=new J(jn,n);return this.compare(i,r)!==0}minPost(){return J.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let rs;class om extends bo{static get __EMPTY_NODE(){return rs}static set __EMPTY_NODE(e){rs=e}compare(e,n){return Zn(e.name,n.name)}isDefinedOn(e){throw Fi("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return J.MIN}maxPost(){return new J(yn,rs)}makePost(e,n){return S(typeof e=="string","KeyIndex indexValue must always be a string."),new J(e,rs)}toString(){return".key"}}const Hn=new om;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ss{constructor(e,n,i,r,s=null){this.isReverse_=r,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?i(e.key,n):1,r&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Oe{constructor(e,n,i,r,s){this.key=e,this.value=n,this.color=i!=null?i:Oe.RED,this.left=r!=null?r:Je.EMPTY_NODE,this.right=s!=null?s:Je.EMPTY_NODE}copy(e,n,i,r,s){return new Oe(e!=null?e:this.key,n!=null?n:this.value,i!=null?i:this.color,r!=null?r:this.left,s!=null?s:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,i){let r=this;const s=i(e,r.key);return s<0?r=r.copy(null,null,null,r.left.insert(e,n,i),null):s===0?r=r.copy(null,n,null,null,null):r=r.copy(null,null,null,null,r.right.insert(e,n,i)),r.fixUp_()}removeMin_(){if(this.left.isEmpty())return Je.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let i,r;if(i=this,n(e,i.key)<0)!i.left.isEmpty()&&!i.left.isRed_()&&!i.left.left.isRed_()&&(i=i.moveRedLeft_()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed_()&&(i=i.rotateRight_()),!i.right.isEmpty()&&!i.right.isRed_()&&!i.right.left.isRed_()&&(i=i.moveRedRight_()),n(e,i.key)===0){if(i.right.isEmpty())return Je.EMPTY_NODE;r=i.right.min_(),i=i.copy(r.key,r.value,null,null,i.right.removeMin_())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Oe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Oe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Oe.RED=!0;Oe.BLACK=!1;class eE{copy(e,n,i,r,s){return this}insert(e,n,i){return new Oe(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Je{constructor(e,n=Je.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Je(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Oe.BLACK,null,null))}remove(e){return new Je(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Oe.BLACK,null,null))}get(e){let n,i=this.root_;for(;!i.isEmpty();){if(n=this.comparator_(e,i.key),n===0)return i.value;n<0?i=i.left:n>0&&(i=i.right)}return null}getPredecessorKey(e){let n,i=this.root_,r=null;for(;!i.isEmpty();)if(n=this.comparator_(e,i.key),n===0){if(i.left.isEmpty())return r?r.key:null;for(i=i.left;!i.right.isEmpty();)i=i.right;return i.key}else n<0?i=i.left:n>0&&(r=i,i=i.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new ss(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new ss(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new ss(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new ss(this.root_,null,this.comparator_,!0,e)}}Je.EMPTY_NODE=new eE;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tE(t,e){return Zn(t.name,e.name)}function ic(t,e){return Zn(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Fa;function nE(t){Fa=t}const am=function(t){return typeof t=="number"?"number:"+Bp(t):"string:"+t},lm=function(t){if(t.isLeafNode()){const e=t.val();S(typeof e=="string"||typeof e=="number"||typeof e=="object"&&kt(e,".sv"),"Priority must be a string or number.")}else S(t===Fa||t.isEmpty(),"priority of unexpected type.");S(t===Fa||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Id;class Pe{constructor(e,n=Pe.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,S(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),lm(this.priorityNode_)}static set __childrenNodeConstructor(e){Id=e}static get __childrenNodeConstructor(){return Id}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Pe(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Pe.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return Q(e)?this:Y(e)===".priority"?this.priorityNode_:Pe.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Pe.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const i=Y(e);return i===null?n:n.isEmpty()&&i!==".priority"?this:(S(i!==".priority"||bn(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(i,Pe.__childrenNodeConstructor.EMPTY_NODE.updateChild(ge(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+am(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=Bp(this.value_):e+=this.value_,this.lazyHash_=Wp(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Pe.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Pe.__childrenNodeConstructor?-1:(S(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,i=typeof this.value_,r=Pe.VALUE_TYPE_ORDER.indexOf(n),s=Pe.VALUE_TYPE_ORDER.indexOf(i);return S(r>=0,"Unknown leaf type: "+n),S(s>=0,"Unknown leaf type: "+i),r===s?i==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-r}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Pe.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let cm,um;function iE(t){cm=t}function rE(t){um=t}class sE extends bo{compare(e,n){const i=e.node.getPriority(),r=n.node.getPriority(),s=i.compareTo(r);return s===0?Zn(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return J.MIN}maxPost(){return new J(yn,new Pe("[PRIORITY-POST]",um))}makePost(e,n){const i=cm(e);return new J(n,new Pe("[PRIORITY-POST]",i))}toString(){return".priority"}}const we=new sE;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oE=Math.log(2);class aE{constructor(e){const n=s=>parseInt(Math.log(s)/oE,10),i=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const r=i(this.count);this.bits_=e+1&r}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Ds=function(t,e,n,i){t.sort(e);const r=function(l,c){const u=c-l;let d,f;if(u===0)return null;if(u===1)return d=t[l],f=n?n(d):d,new Oe(f,d.node,Oe.BLACK,null,null);{const p=parseInt(u/2,10)+l,g=r(l,p),C=r(p+1,c);return d=t[p],f=n?n(d):d,new Oe(f,d.node,Oe.BLACK,g,C)}},s=function(l){let c=null,u=null,d=t.length;const f=function(g,C){const b=d-g,v=d;d-=g;const E=r(b+1,v),x=t[b],M=n?n(x):x;p(new Oe(M,x.node,C,null,E))},p=function(g){c?(c.left=g,c=g):(u=g,c=g)};for(let g=0;g<l.count;++g){const C=l.nextBitIsOne(),b=Math.pow(2,l.count-(g+1));C?f(b,Oe.BLACK):(f(b,Oe.BLACK),f(b,Oe.RED))}return u},o=new aE(t.length),a=s(o);return new Je(i||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ta;const oi={};class Lt{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return S(oi&&we,"ChildrenNode.ts has not been loaded"),ta=ta||new Lt({".priority":oi},{".priority":we}),ta}get(e){const n=Ci(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Je?n:null}hasIndex(e){return kt(this.indexSet_,e.toString())}addIndex(e,n){S(e!==Hn,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const i=[];let r=!1;const s=n.getIterator(J.Wrap);let o=s.getNext();for(;o;)r=r||e.isDefinedOn(o.node),i.push(o),o=s.getNext();let a;r?a=Ds(i,e.getCompare()):a=oi;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const u=Object.assign({},this.indexes_);return u[l]=a,new Lt(u,c)}addToIndexes(e,n){const i=Rs(this.indexes_,(r,s)=>{const o=Ci(this.indexSet_,s);if(S(o,"Missing index implementation for "+s),r===oi)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(J.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),Ds(a,o.getCompare())}else return oi;else{const a=n.get(e.name);let l=r;return a&&(l=l.remove(new J(e.name,a))),l.insert(e,e.node)}});return new Lt(i,this.indexSet_)}removeFromIndexes(e,n){const i=Rs(this.indexes_,r=>{if(r===oi)return r;{const s=n.get(e.name);return s?r.remove(new J(e.name,s)):r}});return new Lt(i,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ji;class B{constructor(e,n,i){this.children_=e,this.priorityNode_=n,this.indexMap_=i,this.lazyHash_=null,this.priorityNode_&&lm(this.priorityNode_),this.children_.isEmpty()&&S(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Ji||(Ji=new B(new Je(ic),null,Lt.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Ji}updatePriority(e){return this.children_.isEmpty()?this:new B(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Ji:n}}getChild(e){const n=Y(e);return n===null?this:this.getImmediateChild(n).getChild(ge(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(S(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const i=new J(e,n);let r,s;n.isEmpty()?(r=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(i,this.children_)):(r=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(i,this.children_));const o=r.isEmpty()?Ji:this.priorityNode_;return new B(r,o,s)}}updateChild(e,n){const i=Y(e);if(i===null)return n;{S(Y(e)!==".priority"||bn(e)===1,".priority must be the last token in a path");const r=this.getImmediateChild(i).updateChild(ge(e),n);return this.updateImmediateChild(i,r)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let i=0,r=0,s=!0;if(this.forEachChild(we,(o,a)=>{n[o]=a.val(e),i++,s&&B.INTEGER_REGEXP_.test(o)?r=Math.max(r,Number(o)):s=!1}),!e&&s&&r<2*i){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+am(this.getPriority().val())+":"),this.forEachChild(we,(n,i)=>{const r=i.hash();r!==""&&(e+=":"+n+":"+r)}),this.lazyHash_=e===""?"":Wp(e)}return this.lazyHash_}getPredecessorChildName(e,n,i){const r=this.resolveIndex_(i);if(r){const s=r.getPredecessorKey(new J(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const i=n.minKey();return i&&i.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new J(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const i=n.maxKey();return i&&i.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new J(n,this.children_.get(n)):null}forEachChild(e,n){const i=this.resolveIndex_(e);return i?i.inorderTraversal(r=>n(r.name,r.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const i=this.resolveIndex_(n);if(i)return i.getIteratorFrom(e,r=>r);{const r=this.children_.getIteratorFrom(e.name,J.Wrap);let s=r.peek();for(;s!=null&&n.compare(s,e)<0;)r.getNext(),s=r.peek();return r}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const i=this.resolveIndex_(n);if(i)return i.getReverseIteratorFrom(e,r=>r);{const r=this.children_.getReverseIteratorFrom(e.name,J.Wrap);let s=r.peek();for(;s!=null&&n.compare(s,e)>0;)r.getNext(),s=r.peek();return r}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Yr?-1:0}withIndex(e){if(e===Hn||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new B(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Hn||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const i=this.getIterator(we),r=n.getIterator(we);let s=i.getNext(),o=r.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=i.getNext(),o=r.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Hn?null:this.indexMap_.get(e.toString())}}B.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class lE extends B{constructor(){super(new Je(ic),B.EMPTY_NODE,Lt.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return B.EMPTY_NODE}isEmpty(){return!1}}const Yr=new lE;Object.defineProperties(J,{MIN:{value:new J(jn,B.EMPTY_NODE)},MAX:{value:new J(yn,Yr)}});om.__EMPTY_NODE=B.EMPTY_NODE;Pe.__childrenNodeConstructor=B;nE(Yr);rE(Yr);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cE=!0;function xe(t,e=null){if(t===null)return B.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),S(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Pe(n,xe(e))}if(!(t instanceof Array)&&cE){const n=[];let i=!1;if(Be(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=xe(a);l.isEmpty()||(i=i||!l.getPriority().isEmpty(),n.push(new J(o,l)))}}),n.length===0)return B.EMPTY_NODE;const s=Ds(n,tE,o=>o.name,ic);if(i){const o=Ds(n,we.getCompare());return new B(s,xe(e),new Lt({".priority":o},{".priority":we}))}else return new B(s,xe(e),Lt.Default)}else{let n=B.EMPTY_NODE;return Be(t,(i,r)=>{if(kt(t,i)&&i.substring(0,1)!=="."){const s=xe(r);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(i,s))}}),n.updatePriority(xe(e))}}iE(xe);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rc extends bo{constructor(e){super();this.indexPath_=e,S(!Q(e)&&Y(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const i=this.extractChild(e.node),r=this.extractChild(n.node),s=i.compareTo(r);return s===0?Zn(e.name,n.name):s}makePost(e,n){const i=xe(e),r=B.EMPTY_NODE.updateChild(this.indexPath_,i);return new J(n,r)}maxPost(){const e=B.EMPTY_NODE.updateChild(this.indexPath_,Yr);return new J(yn,e)}toString(){return Or(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uE extends bo{compare(e,n){const i=e.node.compareTo(n.node);return i===0?Zn(e.name,n.name):i}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return J.MIN}maxPost(){return J.MAX}makePost(e,n){const i=xe(e);return new J(n,i)}toString(){return".value"}}const dm=new uE;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ed="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",dE=function(){let t=0;const e=[];return function(n){const i=n===t;t=n;let r;const s=new Array(8);for(r=7;r>=0;r--)s[r]=Ed.charAt(n%64),n=Math.floor(n/64);S(n===0,"Cannot push at time == 0");let o=s.join("");if(i){for(r=11;r>=0&&e[r]===63;r--)e[r]=0;e[r]++}else for(r=0;r<12;r++)e[r]=Math.floor(Math.random()*64);for(r=0;r<12;r++)o+=Ed.charAt(e[r]);return S(o.length===20,"nextPushId: Length should be 20."),o}}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fm(t){return{type:"value",snapshotNode:t}}function Ti(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function xr(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Mr(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function fE(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sc{constructor(e){this.index_=e}updateChild(e,n,i,r,s,o){S(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(r).equals(i.getChild(r))&&a.isEmpty()===i.isEmpty()||(o!=null&&(i.isEmpty()?e.hasChild(n)?o.trackChildChange(xr(n,a)):S(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Ti(n,i)):o.trackChildChange(Mr(n,i,a))),e.isLeafNode()&&i.isEmpty())?e:e.updateImmediateChild(n,i).withIndex(this.index_)}updateFullNode(e,n,i){return i!=null&&(e.isLeafNode()||e.forEachChild(we,(r,s)=>{n.hasChild(r)||i.trackChildChange(xr(r,s))}),n.isLeafNode()||n.forEachChild(we,(r,s)=>{if(e.hasChild(r)){const o=e.getImmediateChild(r);o.equals(s)||i.trackChildChange(Mr(r,s,o))}else i.trackChildChange(Ti(r,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?B.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dr{constructor(e){this.indexedFilter_=new sc(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Dr.getStartPost_(e),this.endPost_=Dr.getEndPost_(e)}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){return this.index_.compare(this.getStartPost(),e)<=0&&this.index_.compare(e,this.getEndPost())<=0}updateChild(e,n,i,r,s,o){return this.matches(new J(n,i))||(i=B.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,i,r,s,o)}updateFullNode(e,n,i){n.isLeafNode()&&(n=B.EMPTY_NODE);let r=n.withIndex(this.index_);r=r.updatePriority(B.EMPTY_NODE);const s=this;return n.forEachChild(we,(o,a)=>{s.matches(new J(o,a))||(r=r.updateImmediateChild(o,B.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,r,i)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hE{constructor(e){this.rangedFilter_=new Dr(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft()}updateChild(e,n,i,r,s,o){return this.rangedFilter_.matches(new J(n,i))||(i=B.EMPTY_NODE),e.getImmediateChild(n).equals(i)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,i,r,s,o):this.fullLimitUpdateChild_(e,n,i,s,o)}updateFullNode(e,n,i){let r;if(n.isLeafNode()||n.isEmpty())r=B.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){r=B.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const a=s.getNext();let l;if(this.reverse_?l=this.index_.compare(this.rangedFilter_.getStartPost(),a)<=0:l=this.index_.compare(a,this.rangedFilter_.getEndPost())<=0,l)r=r.updateImmediateChild(a.name,a.node),o++;else break}}else{r=n.withIndex(this.index_),r=r.updatePriority(B.EMPTY_NODE);let s,o,a,l;if(this.reverse_){l=r.getReverseIterator(this.index_),s=this.rangedFilter_.getEndPost(),o=this.rangedFilter_.getStartPost();const d=this.index_.getCompare();a=(f,p)=>d(p,f)}else l=r.getIterator(this.index_),s=this.rangedFilter_.getStartPost(),o=this.rangedFilter_.getEndPost(),a=this.index_.getCompare();let c=0,u=!1;for(;l.hasNext();){const d=l.getNext();!u&&a(s,d)<=0&&(u=!0),u&&c<this.limit_&&a(d,o)<=0?c++:r=r.updateImmediateChild(d.name,B.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,r,i)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,i,r,s){let o;if(this.reverse_){const d=this.index_.getCompare();o=(f,p)=>d(p,f)}else o=this.index_.getCompare();const a=e;S(a.numChildren()===this.limit_,"");const l=new J(n,i),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),u=this.rangedFilter_.matches(l);if(a.hasChild(n)){const d=a.getImmediateChild(n);let f=r.getChildAfterChild(this.index_,c,this.reverse_);for(;f!=null&&(f.name===n||a.hasChild(f.name));)f=r.getChildAfterChild(this.index_,f,this.reverse_);const p=f==null?1:o(f,l);if(u&&!i.isEmpty()&&p>=0)return s!=null&&s.trackChildChange(Mr(n,i,d)),a.updateImmediateChild(n,i);{s!=null&&s.trackChildChange(xr(n,d));const C=a.updateImmediateChild(n,B.EMPTY_NODE);return f!=null&&this.rangedFilter_.matches(f)?(s!=null&&s.trackChildChange(Ti(f.name,f.node)),C.updateImmediateChild(f.name,f.node)):C}}else return i.isEmpty()?e:u&&o(c,l)>=0?(s!=null&&(s.trackChildChange(xr(c.name,c.node)),s.trackChildChange(Ti(n,i))),a.updateImmediateChild(n,i).updateImmediateChild(c.name,B.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oc{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=we}hasStart(){return this.startSet_}hasStartAfter(){return this.startAfterSet_}hasEndBefore(){return this.endBeforeSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return S(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return S(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:jn}hasEnd(){return this.endSet_}getIndexEndValue(){return S(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return S(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:yn}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return S(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===we}copy(){const e=new oc;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function pE(t){return t.loadsAllData()?new sc(t.getIndex()):t.hasLimit()?new hE(t):new Dr(t)}function mE(t,e,n){const i=t.copy();return i.startSet_=!0,e===void 0&&(e=null),i.indexStartValue_=e,n!=null?(i.startNameSet_=!0,i.indexStartName_=n):(i.startNameSet_=!1,i.indexStartName_=""),i}function gE(t,e,n){const i=t.copy();return i.endSet_=!0,e===void 0&&(e=null),i.indexEndValue_=e,n!==void 0?(i.endNameSet_=!0,i.indexEndName_=n):(i.endNameSet_=!1,i.indexEndName_=""),i}function _E(t,e){const n=t.copy();return n.index_=e,n}function Cd(t){const e={};if(t.isDefault())return e;let n;return t.index_===we?n="$priority":t.index_===dm?n="$value":t.index_===Hn?n="$key":(S(t.index_ instanceof rc,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=De(n),t.startSet_&&(e.startAt=De(t.indexStartValue_),t.startNameSet_&&(e.startAt+=","+De(t.indexStartName_))),t.endSet_&&(e.endAt=De(t.indexEndValue_),t.endNameSet_&&(e.endAt+=","+De(t.indexEndName_))),t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Td(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_)),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_)),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==we&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ls extends nm{constructor(e,n,i,r){super();this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=i,this.appCheckTokenProvider_=r,this.log_=Kr("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(S(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,i,r){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=Ls.getListenId_(e,i),a={};this.listens_[o]=a;const l=Cd(e._queryParams);this.restRequest_(s+".json",l,(c,u)=>{let d=u;if(c===404&&(d=null,c=null),c===null&&this.onDataUpdate_(s,d,!1,i),Ci(this.listens_,o)===a){let f;c?c===401?f="permission_denied":f="rest_error:"+c:f="ok",r(f,null)}})}unlisten(e,n){const i=Ls.getListenId_(e,n);delete this.listens_[i]}get(e){const n=Cd(e._queryParams),i=e._path.toString(),r=new Hr;return this.restRequest_(i+".json",n,(s,o)=>{let a=o;s===404&&(a=null,s=null),s===null?(this.onDataUpdate_(i,a,!1,null),r.resolve(a)):r.reject(new Error(a))}),r.promise}refreshAuthToken(e){}restRequest_(e,n={},i){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([r,s])=>{r&&r.accessToken&&(n.auth=r.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Qn(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(i&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=Cr(a.responseText)}catch{$e("Failed to parse JSON response for "+o+": "+a.responseText)}i(null,l)}else a.status!==401&&a.status!==404&&$e("Got unsuccessful REST response for "+o+" Status: "+a.status),i(a.status);i=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vE{constructor(){this.rootNode_=B.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fs(){return{value:null,children:new Map}}function hm(t,e,n){if(Q(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const i=Y(e);t.children.has(i)||t.children.set(i,Fs());const r=t.children.get(i);e=ge(e),hm(r,e,n)}}function Ua(t,e,n){t.value!==null?n(e,t.value):yE(t,(i,r)=>{const s=new oe(e.toString()+"/"+i);Ua(r,s,n)})}function yE(t,e){t.children.forEach((n,i)=>{e(i,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bE{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Be(this.last_,(i,r)=>{n[i]=n[i]-r}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sd=10*1e3,wE=30*1e3,IE=5*60*1e3;class EE{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new bE(e);const i=Sd+(wE-Sd)*Math.random();hr(this.reportStats_.bind(this),Math.floor(i))}reportStats_(){const e=this.statsListener_.get(),n={};let i=!1;Be(e,(r,s)=>{s>0&&kt(this.statsToReport_,r)&&(n[r]=s,i=!0)}),i&&this.server_.reportStats(n),hr(this.reportStats_.bind(this),Math.floor(Math.random()*2*IE))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var pt;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(pt||(pt={}));function ac(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function lc(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function cc(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Us{constructor(e,n,i){this.path=e,this.affectedTree=n,this.revert=i,this.type=pt.ACK_USER_WRITE,this.source=ac()}operationForChild(e){if(Q(this.path)){if(this.affectedTree.value!=null)return S(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new oe(e));return new Us(re(),n,this.revert)}}else return S(Y(this.path)===e,"operationForChild called for unrelated child."),new Us(ge(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lr{constructor(e,n){this.source=e,this.path=n,this.type=pt.LISTEN_COMPLETE}operationForChild(e){return Q(this.path)?new Lr(this.source,re()):new Lr(this.source,ge(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n{constructor(e,n,i){this.source=e,this.path=n,this.snap=i,this.type=pt.OVERWRITE}operationForChild(e){return Q(this.path)?new $n(this.source,re(),this.snap.getImmediateChild(e)):new $n(this.source,ge(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Si{constructor(e,n,i){this.source=e,this.path=n,this.children=i,this.type=pt.MERGE}operationForChild(e){if(Q(this.path)){const n=this.children.subtree(new oe(e));return n.isEmpty()?null:n.value?new $n(this.source,re(),n.value):new Si(this.source,re(),n)}else return S(Y(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Si(this.source,ge(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qn{constructor(e,n,i){this.node_=e,this.fullyInitialized_=n,this.filtered_=i}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(Q(e))return this.isFullyInitialized()&&!this.filtered_;const n=Y(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CE{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function TE(t,e,n,i){const r=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(fE(o.childName,o.snapshotNode))}),Xi(t,r,"child_removed",e,i,n),Xi(t,r,"child_added",e,i,n),Xi(t,r,"child_moved",s,i,n),Xi(t,r,"child_changed",e,i,n),Xi(t,r,"value",e,i,n),r}function Xi(t,e,n,i,r,s){const o=i.filter(a=>a.type===n);o.sort((a,l)=>AE(t,a,l)),o.forEach(a=>{const l=SE(t,a,s);r.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function SE(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function AE(t,e,n){if(e.childName==null||n.childName==null)throw Fi("Should only compare child_ events.");const i=new J(e.childName,e.snapshotNode),r=new J(n.childName,n.snapshotNode);return t.index_.compare(i,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wo(t,e){return{eventCache:t,serverCache:e}}function pr(t,e,n,i){return wo(new qn(e,n,i),t.serverCache)}function pm(t,e,n,i){return wo(t.eventCache,new qn(e,n,i))}function Wa(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Gn(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let na;const RE=()=>(na||(na=new Je(a1)),na);class me{constructor(e,n=RE()){this.value=e,this.children=n}static fromObject(e){let n=new me(null);return Be(e,(i,r)=>{n=n.set(new oe(i),r)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:re(),value:this.value};if(Q(e))return null;{const i=Y(e),r=this.children.get(i);if(r!==null){const s=r.findRootMostMatchingPathAndValue(ge(e),n);return s!=null?{path:Ce(new oe(i),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(Q(e))return this;{const n=Y(e),i=this.children.get(n);return i!==null?i.subtree(ge(e)):new me(null)}}set(e,n){if(Q(e))return new me(n,this.children);{const i=Y(e),s=(this.children.get(i)||new me(null)).set(ge(e),n),o=this.children.insert(i,s);return new me(this.value,o)}}remove(e){if(Q(e))return this.children.isEmpty()?new me(null):new me(null,this.children);{const n=Y(e),i=this.children.get(n);if(i){const r=i.remove(ge(e));let s;return r.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,r),this.value===null&&s.isEmpty()?new me(null):new me(this.value,s)}else return this}}get(e){if(Q(e))return this.value;{const n=Y(e),i=this.children.get(n);return i?i.get(ge(e)):null}}setTree(e,n){if(Q(e))return n;{const i=Y(e),s=(this.children.get(i)||new me(null)).setTree(ge(e),n);let o;return s.isEmpty()?o=this.children.remove(i):o=this.children.insert(i,s),new me(this.value,o)}}fold(e){return this.fold_(re(),e)}fold_(e,n){const i={};return this.children.inorderTraversal((r,s)=>{i[r]=s.fold_(Ce(e,r),n)}),n(e,this.value,i)}findOnPath(e,n){return this.findOnPath_(e,re(),n)}findOnPath_(e,n,i){const r=this.value?i(n,this.value):!1;if(r)return r;if(Q(e))return null;{const s=Y(e),o=this.children.get(s);return o?o.findOnPath_(ge(e),Ce(n,s),i):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,re(),n)}foreachOnPath_(e,n,i){if(Q(e))return this;{this.value&&i(n,this.value);const r=Y(e),s=this.children.get(r);return s?s.foreachOnPath_(ge(e),Ce(n,r),i):new me(null)}}foreach(e){this.foreach_(re(),e)}foreach_(e,n){this.children.inorderTraversal((i,r)=>{r.foreach_(Ce(e,i),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,i)=>{i.value&&e(n,i.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{constructor(e){this.writeTree_=e}static empty(){return new gt(new me(null))}}function mr(t,e,n){if(Q(e))return new gt(new me(n));{const i=t.writeTree_.findRootMostValueAndPath(e);if(i!=null){const r=i.path;let s=i.value;const o=Qe(r,e);return s=s.updateChild(o,n),new gt(t.writeTree_.set(r,s))}else{const r=new me(n),s=t.writeTree_.setTree(e,r);return new gt(s)}}}function Ha(t,e,n){let i=t;return Be(n,(r,s)=>{i=mr(i,Ce(e,r),s)}),i}function Ad(t,e){if(Q(e))return gt.empty();{const n=t.writeTree_.setTree(e,new me(null));return new gt(n)}}function Ba(t,e){return ei(t,e)!=null}function ei(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Qe(n.path,e)):null}function Rd(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(we,(i,r)=>{e.push(new J(i,r))}):t.writeTree_.children.inorderTraversal((i,r)=>{r.value!=null&&e.push(new J(i,r.value))}),e}function mn(t,e){if(Q(e))return t;{const n=ei(t,e);return n!=null?new gt(new me(n)):new gt(t.writeTree_.subtree(e))}}function za(t){return t.writeTree_.isEmpty()}function Ai(t,e){return mm(re(),t.writeTree_,e)}function mm(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let i=null;return e.children.inorderTraversal((r,s)=>{r===".priority"?(S(s.value!==null,"Priority writes must always be leaf nodes"),i=s.value):n=mm(Ce(t,r),s,n)}),!n.getChild(t).isEmpty()&&i!==null&&(n=n.updateChild(Ce(t,".priority"),i)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uc(t,e){return ym(e,t)}function kE(t,e,n,i,r){S(i>t.lastWriteId,"Stacking an older write on top of newer ones"),r===void 0&&(r=!0),t.allWrites.push({path:e,snap:n,writeId:i,visible:r}),r&&(t.visibleWrites=mr(t.visibleWrites,e,n)),t.lastWriteId=i}function NE(t,e,n,i){S(i>t.lastWriteId,"Stacking an older merge on top of newer ones"),t.allWrites.push({path:e,children:n,writeId:i,visible:!0}),t.visibleWrites=Ha(t.visibleWrites,e,n),t.lastWriteId=i}function PE(t,e){for(let n=0;n<t.allWrites.length;n++){const i=t.allWrites[n];if(i.writeId===e)return i}return null}function OE(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);S(n>=0,"removeWrite called with nonexistent writeId.");const i=t.allWrites[n];t.allWrites.splice(n,1);let r=i.visible,s=!1,o=t.allWrites.length-1;for(;r&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&xE(a,i.path)?r=!1:ct(i.path,a.path)&&(s=!0)),o--}if(r){if(s)return ME(t),!0;if(i.snap)t.visibleWrites=Ad(t.visibleWrites,i.path);else{const a=i.children;Be(a,l=>{t.visibleWrites=Ad(t.visibleWrites,Ce(i.path,l))})}return!0}else return!1}function xE(t,e){if(t.snap)return ct(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&ct(Ce(t.path,n),e))return!0;return!1}function ME(t){t.visibleWrites=gm(t.allWrites,DE,re()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function DE(t){return t.visible}function gm(t,e,n){let i=gt.empty();for(let r=0;r<t.length;++r){const s=t[r];if(e(s)){const o=s.path;let a;if(s.snap)ct(n,o)?(a=Qe(n,o),i=mr(i,a,s.snap)):ct(o,n)&&(a=Qe(o,n),i=mr(i,re(),s.snap.getChild(a)));else if(s.children){if(ct(n,o))a=Qe(n,o),i=Ha(i,a,s.children);else if(ct(o,n))if(a=Qe(o,n),Q(a))i=Ha(i,re(),s.children);else{const l=Ci(s.children,Y(a));if(l){const c=l.getChild(ge(a));i=mr(i,re(),c)}}}else throw Fi("WriteRecord should have .snap or .children")}}return i}function _m(t,e,n,i,r){if(!i&&!r){const s=ei(t.visibleWrites,e);if(s!=null)return s;{const o=mn(t.visibleWrites,e);if(za(o))return n;if(n==null&&!Ba(o,re()))return null;{const a=n||B.EMPTY_NODE;return Ai(o,a)}}}else{const s=mn(t.visibleWrites,e);if(!r&&za(s))return n;if(!r&&n==null&&!Ba(s,re()))return null;{const o=function(c){return(c.visible||r)&&(!i||!~i.indexOf(c.writeId))&&(ct(c.path,e)||ct(e,c.path))},a=gm(t.allWrites,o,e),l=n||B.EMPTY_NODE;return Ai(a,l)}}}function LE(t,e,n){let i=B.EMPTY_NODE;const r=ei(t.visibleWrites,e);if(r)return r.isLeafNode()||r.forEachChild(we,(s,o)=>{i=i.updateImmediateChild(s,o)}),i;if(n){const s=mn(t.visibleWrites,e);return n.forEachChild(we,(o,a)=>{const l=Ai(mn(s,new oe(o)),a);i=i.updateImmediateChild(o,l)}),Rd(s).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}else{const s=mn(t.visibleWrites,e);return Rd(s).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}}function FE(t,e,n,i,r){S(i||r,"Either existingEventSnap or existingServerSnap must exist");const s=Ce(e,n);if(Ba(t.visibleWrites,s))return null;{const o=mn(t.visibleWrites,s);return za(o)?r.getChild(n):Ai(o,r.getChild(n))}}function UE(t,e,n,i){const r=Ce(e,n),s=ei(t.visibleWrites,r);if(s!=null)return s;if(i.isCompleteForChild(n)){const o=mn(t.visibleWrites,r);return Ai(o,i.getNode().getImmediateChild(n))}else return null}function WE(t,e){return ei(t.visibleWrites,e)}function HE(t,e,n,i,r,s,o){let a;const l=mn(t.visibleWrites,e),c=ei(l,re());if(c!=null)a=c;else if(n!=null)a=Ai(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],d=o.getCompare(),f=s?a.getReverseIteratorFrom(i,o):a.getIteratorFrom(i,o);let p=f.getNext();for(;p&&u.length<r;)d(p,i)!==0&&u.push(p),p=f.getNext();return u}else return[]}function BE(){return{visibleWrites:gt.empty(),allWrites:[],lastWriteId:-1}}function Ws(t,e,n,i){return _m(t.writeTree,t.treePath,e,n,i)}function dc(t,e){return LE(t.writeTree,t.treePath,e)}function kd(t,e,n,i){return FE(t.writeTree,t.treePath,e,n,i)}function Hs(t,e){return WE(t.writeTree,Ce(t.treePath,e))}function zE(t,e,n,i,r,s){return HE(t.writeTree,t.treePath,e,n,i,r,s)}function fc(t,e,n){return UE(t.writeTree,t.treePath,e,n)}function vm(t,e){return ym(Ce(t.treePath,e),t.writeTree)}function ym(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VE{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,i=e.childName;S(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),S(i!==".priority","Only non-priority child changes can be tracked.");const r=this.changeMap.get(i);if(r){const s=r.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(i,Mr(i,e.snapshotNode,r.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(i);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(i,xr(i,r.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(i,Ti(i,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(i,Mr(i,e.snapshotNode,r.oldSnap));else throw Fi("Illegal combination of changes: "+e+" occurred after "+r)}else this.changeMap.set(i,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jE{getCompleteChild(e){return null}getChildAfterChild(e,n,i){return null}}const bm=new jE;class hc{constructor(e,n,i=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=i}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const i=this.optCompleteServerCache_!=null?new qn(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return fc(this.writes_,e,i)}}getChildAfterChild(e,n,i){const r=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Gn(this.viewCache_),s=zE(this.writes_,r,n,1,i,e);return s.length===0?null:s[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $E(t){return{filter:t}}function qE(t,e){S(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),S(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function GE(t,e,n,i,r){const s=new VE;let o,a;if(n.type===pt.OVERWRITE){const c=n;c.source.fromUser?o=Va(t,e,c.path,c.snap,i,r,s):(S(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!Q(c.path),o=Bs(t,e,c.path,c.snap,i,r,a,s))}else if(n.type===pt.MERGE){const c=n;c.source.fromUser?o=YE(t,e,c.path,c.children,i,r,s):(S(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=ja(t,e,c.path,c.children,i,r,a,s))}else if(n.type===pt.ACK_USER_WRITE){const c=n;c.revert?o=XE(t,e,c.path,i,r,s):o=QE(t,e,c.path,c.affectedTree,i,r,s)}else if(n.type===pt.LISTEN_COMPLETE)o=JE(t,e,n.path,i,s);else throw Fi("Unknown operation type: "+n.type);const l=s.getChanges();return KE(e,o,l),{viewCache:o,changes:l}}function KE(t,e,n){const i=e.eventCache;if(i.isFullyInitialized()){const r=i.getNode().isLeafNode()||i.getNode().isEmpty(),s=Wa(t);(n.length>0||!t.eventCache.isFullyInitialized()||r&&!i.getNode().equals(s)||!i.getNode().getPriority().equals(s.getPriority()))&&n.push(fm(Wa(e)))}}function wm(t,e,n,i,r,s){const o=e.eventCache;if(Hs(i,n)!=null)return e;{let a,l;if(Q(n))if(S(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=Gn(e),u=c instanceof B?c:B.EMPTY_NODE,d=dc(i,u);a=t.filter.updateFullNode(e.eventCache.getNode(),d,s)}else{const c=Ws(i,Gn(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,s)}else{const c=Y(n);if(c===".priority"){S(bn(n)===1,"Can't have a priority with additional path components");const u=o.getNode();l=e.serverCache.getNode();const d=kd(i,n,u,l);d!=null?a=t.filter.updatePriority(u,d):a=o.getNode()}else{const u=ge(n);let d;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const f=kd(i,n,o.getNode(),l);f!=null?d=o.getNode().getImmediateChild(c).updateChild(u,f):d=o.getNode().getImmediateChild(c)}else d=fc(i,c,e.serverCache);d!=null?a=t.filter.updateChild(o.getNode(),c,d,u,r,s):a=o.getNode()}}return pr(e,a,o.isFullyInitialized()||Q(n),t.filter.filtersNodes())}}function Bs(t,e,n,i,r,s,o,a){const l=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(Q(n))c=u.updateFullNode(l.getNode(),i,null);else if(u.filtersNodes()&&!l.isFiltered()){const p=l.getNode().updateChild(n,i);c=u.updateFullNode(l.getNode(),p,null)}else{const p=Y(n);if(!l.isCompleteForPath(n)&&bn(n)>1)return e;const g=ge(n),b=l.getNode().getImmediateChild(p).updateChild(g,i);p===".priority"?c=u.updatePriority(l.getNode(),b):c=u.updateChild(l.getNode(),p,b,g,bm,null)}const d=pm(e,c,l.isFullyInitialized()||Q(n),u.filtersNodes()),f=new hc(r,d,s);return wm(t,d,n,r,f,a)}function Va(t,e,n,i,r,s,o){const a=e.eventCache;let l,c;const u=new hc(r,e,s);if(Q(n))c=t.filter.updateFullNode(e.eventCache.getNode(),i,o),l=pr(e,c,!0,t.filter.filtersNodes());else{const d=Y(n);if(d===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),i),l=pr(e,c,a.isFullyInitialized(),a.isFiltered());else{const f=ge(n),p=a.getNode().getImmediateChild(d);let g;if(Q(f))g=i;else{const C=u.getCompleteChild(d);C!=null?ec(f)===".priority"&&C.getChild(rm(f)).isEmpty()?g=C:g=C.updateChild(f,i):g=B.EMPTY_NODE}if(p.equals(g))l=e;else{const C=t.filter.updateChild(a.getNode(),d,g,f,u,o);l=pr(e,C,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function Nd(t,e){return t.eventCache.isCompleteForChild(e)}function YE(t,e,n,i,r,s,o){let a=e;return i.foreach((l,c)=>{const u=Ce(n,l);Nd(e,Y(u))&&(a=Va(t,a,u,c,r,s,o))}),i.foreach((l,c)=>{const u=Ce(n,l);Nd(e,Y(u))||(a=Va(t,a,u,c,r,s,o))}),a}function Pd(t,e,n){return n.foreach((i,r)=>{e=e.updateChild(i,r)}),e}function ja(t,e,n,i,r,s,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;Q(n)?c=i:c=new me(null).setTree(n,i);const u=e.serverCache.getNode();return c.children.inorderTraversal((d,f)=>{if(u.hasChild(d)){const p=e.serverCache.getNode().getImmediateChild(d),g=Pd(t,p,f);l=Bs(t,l,new oe(d),g,r,s,o,a)}}),c.children.inorderTraversal((d,f)=>{const p=!e.serverCache.isCompleteForChild(d)&&f.value===void 0;if(!u.hasChild(d)&&!p){const g=e.serverCache.getNode().getImmediateChild(d),C=Pd(t,g,f);l=Bs(t,l,new oe(d),C,r,s,o,a)}}),l}function QE(t,e,n,i,r,s,o){if(Hs(r,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(i.value!=null){if(Q(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return Bs(t,e,n,l.getNode().getChild(n),r,s,a,o);if(Q(n)){let c=new me(null);return l.getNode().forEachChild(Hn,(u,d)=>{c=c.set(new oe(u),d)}),ja(t,e,n,c,r,s,a,o)}else return e}else{let c=new me(null);return i.foreach((u,d)=>{const f=Ce(n,u);l.isCompleteForPath(f)&&(c=c.set(u,l.getNode().getChild(f)))}),ja(t,e,n,c,r,s,a,o)}}function JE(t,e,n,i,r){const s=e.serverCache,o=pm(e,s.getNode(),s.isFullyInitialized()||Q(n),s.isFiltered());return wm(t,o,n,i,bm,r)}function XE(t,e,n,i,r,s){let o;if(Hs(i,n)!=null)return e;{const a=new hc(i,e,r),l=e.eventCache.getNode();let c;if(Q(n)||Y(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=Ws(i,Gn(e));else{const d=e.serverCache.getNode();S(d instanceof B,"serverChildren would be complete if leaf node"),u=dc(i,d)}u=u,c=t.filter.updateFullNode(l,u,s)}else{const u=Y(n);let d=fc(i,u,e.serverCache);d==null&&e.serverCache.isCompleteForChild(u)&&(d=l.getImmediateChild(u)),d!=null?c=t.filter.updateChild(l,u,d,ge(n),a,s):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(l,u,B.EMPTY_NODE,ge(n),a,s):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Ws(i,Gn(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,s)))}return o=e.serverCache.isFullyInitialized()||Hs(i,re())!=null,pr(e,c,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZE{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const i=this.query_._queryParams,r=new sc(i.getIndex()),s=pE(i);this.processor_=$E(s);const o=n.serverCache,a=n.eventCache,l=r.updateFullNode(B.EMPTY_NODE,o.getNode(),null),c=s.updateFullNode(B.EMPTY_NODE,a.getNode(),null),u=new qn(l,o.isFullyInitialized(),r.filtersNodes()),d=new qn(c,a.isFullyInitialized(),s.filtersNodes());this.viewCache_=wo(d,u),this.eventGenerator_=new CE(this.query_)}get query(){return this.query_}}function eC(t){return t.viewCache_.serverCache.getNode()}function tC(t,e){const n=Gn(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!Q(e)&&!n.getImmediateChild(Y(e)).isEmpty())?n.getChild(e):null}function Od(t){return t.eventRegistrations_.length===0}function nC(t,e){t.eventRegistrations_.push(e)}function xd(t,e,n){const i=[];if(n){S(e==null,"A cancel should cancel all event registrations.");const r=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,r);o&&i.push(o)})}if(e){let r=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))r.push(o);else if(e.hasAnyCallback()){r=r.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=r}else t.eventRegistrations_=[];return i}function Md(t,e,n,i){e.type===pt.MERGE&&e.source.queryId!==null&&(S(Gn(t.viewCache_),"We should always have a full cache before handling merges"),S(Wa(t.viewCache_),"Missing event cache, even though we have a server cache"));const r=t.viewCache_,s=GE(t.processor_,r,e,n,i);return qE(t.processor_,s.viewCache),S(s.viewCache.serverCache.isFullyInitialized()||!r.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,Im(t,s.changes,s.viewCache.eventCache.getNode(),null)}function iC(t,e){const n=t.viewCache_.eventCache,i=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(we,(s,o)=>{i.push(Ti(s,o))}),n.isFullyInitialized()&&i.push(fm(n.getNode())),Im(t,i,n.getNode(),e)}function Im(t,e,n,i){const r=i?[i]:t.eventRegistrations_;return TE(t.eventGenerator_,e,n,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let zs;class rC{constructor(){this.views=new Map}}function sC(t){S(!zs,"__referenceConstructor has already been defined"),zs=t}function oC(){return S(zs,"Reference.ts has not been loaded"),zs}function aC(t){return t.views.size===0}function pc(t,e,n,i){const r=e.source.queryId;if(r!==null){const s=t.views.get(r);return S(s!=null,"SyncTree gave us an op for an invalid query."),Md(s,e,n,i)}else{let s=[];for(const o of t.views.values())s=s.concat(Md(o,e,n,i));return s}}function lC(t,e,n,i,r){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let a=Ws(n,r?i:null),l=!1;a?l=!0:i instanceof B?(a=dc(n,i),l=!1):(a=B.EMPTY_NODE,l=!1);const c=wo(new qn(a,l,!1),new qn(i,r,!1));return new ZE(e,c)}return o}function cC(t,e,n,i,r,s){const o=lC(t,e,i,r,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),nC(o,n),iC(o,n)}function uC(t,e,n,i){const r=e._queryIdentifier,s=[];let o=[];const a=wn(t);if(r==="default")for(const[l,c]of t.views.entries())o=o.concat(xd(c,n,i)),Od(c)&&(t.views.delete(l),c.query._queryParams.loadsAllData()||s.push(c.query));else{const l=t.views.get(r);l&&(o=o.concat(xd(l,n,i)),Od(l)&&(t.views.delete(r),l.query._queryParams.loadsAllData()||s.push(l.query)))}return a&&!wn(t)&&s.push(new(oC())(e._repo,e._path)),{removed:s,events:o}}function Em(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function yi(t,e){let n=null;for(const i of t.views.values())n=n||tC(i,e);return n}function Cm(t,e){if(e._queryParams.loadsAllData())return Io(t);{const i=e._queryIdentifier;return t.views.get(i)}}function Tm(t,e){return Cm(t,e)!=null}function wn(t){return Io(t)!=null}function Io(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Vs;function dC(t){S(!Vs,"__referenceConstructor has already been defined"),Vs=t}function fC(){return S(Vs,"Reference.ts has not been loaded"),Vs}let hC=1;class Dd{constructor(e){this.listenProvider_=e,this.syncPointTree_=new me(null),this.pendingWriteTree_=BE(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Sm(t,e,n,i,r){return kE(t.pendingWriteTree_,e,n,i,r),r?zi(t,new $n(ac(),e,n)):[]}function pC(t,e,n,i){NE(t.pendingWriteTree_,e,n,i);const r=me.fromObject(n);return zi(t,new Si(ac(),e,r))}function dn(t,e,n=!1){const i=PE(t.pendingWriteTree_,e);if(OE(t.pendingWriteTree_,e)){let s=new me(null);return i.snap!=null?s=s.set(re(),!0):Be(i.children,o=>{s=s.set(new oe(o),!0)}),zi(t,new Us(i.path,s,n))}else return[]}function Eo(t,e,n){return zi(t,new $n(lc(),e,n))}function mC(t,e,n){const i=me.fromObject(n);return zi(t,new Si(lc(),e,i))}function gC(t,e){return zi(t,new Lr(lc(),e))}function _C(t,e,n){const i=gc(t,n);if(i){const r=_c(i),s=r.path,o=r.queryId,a=Qe(s,e),l=new Lr(cc(o),a);return vc(t,s,l)}else return[]}function $a(t,e,n,i){const r=e._path,s=t.syncPointTree_.get(r);let o=[];if(s&&(e._queryIdentifier==="default"||Tm(s,e))){const a=uC(s,e,n,i);aC(s)&&(t.syncPointTree_=t.syncPointTree_.remove(r));const l=a.removed;o=a.events;const c=l.findIndex(d=>d._queryParams.loadsAllData())!==-1,u=t.syncPointTree_.findOnPath(r,(d,f)=>wn(f));if(c&&!u){const d=t.syncPointTree_.subtree(r);if(!d.isEmpty()){const f=bC(d);for(let p=0;p<f.length;++p){const g=f[p],C=g.query,b=km(t,g);t.listenProvider_.startListening(gr(C),js(t,C),b.hashFn,b.onComplete)}}}!u&&l.length>0&&!i&&(c?t.listenProvider_.stopListening(gr(e),null):l.forEach(d=>{const f=t.queryToTagMap.get(Co(d));t.listenProvider_.stopListening(gr(d),f)})),wC(t,l)}return o}function vC(t,e,n,i){const r=gc(t,i);if(r!=null){const s=_c(r),o=s.path,a=s.queryId,l=Qe(o,e),c=new $n(cc(a),l,n);return vc(t,o,c)}else return[]}function yC(t,e,n,i){const r=gc(t,i);if(r){const s=_c(r),o=s.path,a=s.queryId,l=Qe(o,e),c=me.fromObject(n),u=new Si(cc(a),l,c);return vc(t,o,u)}else return[]}function Ld(t,e,n){const i=e._path;let r=null,s=!1;t.syncPointTree_.foreachOnPath(i,(d,f)=>{const p=Qe(d,i);r=r||yi(f,p),s=s||wn(f)});let o=t.syncPointTree_.get(i);o?(s=s||wn(o),r=r||yi(o,re())):(o=new rC,t.syncPointTree_=t.syncPointTree_.set(i,o));let a;r!=null?a=!0:(a=!1,r=B.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((f,p)=>{const g=yi(p,re());g&&(r=r.updateImmediateChild(f,g))}));const l=Tm(o,e);if(!l&&!e._queryParams.loadsAllData()){const d=Co(e);S(!t.queryToTagMap.has(d),"View does not exist, but we have a tag");const f=IC();t.queryToTagMap.set(d,f),t.tagToQueryMap.set(f,d)}const c=uc(t.pendingWriteTree_,i);let u=cC(o,e,n,c,r,a);if(!l&&!s){const d=Cm(o,e);u=u.concat(EC(t,e,d))}return u}function mc(t,e,n){const r=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=Qe(o,e),c=yi(a,l);if(c)return c});return _m(r,e,s,n,!0)}function zi(t,e){return Am(e,t.syncPointTree_,null,uc(t.pendingWriteTree_,re()))}function Am(t,e,n,i){if(Q(t.path))return Rm(t,e,n,i);{const r=e.get(re());n==null&&r!=null&&(n=yi(r,re()));let s=[];const o=Y(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,u=vm(i,o);s=s.concat(Am(a,l,c,u))}return r&&(s=s.concat(pc(r,t,i,n))),s}}function Rm(t,e,n,i){const r=e.get(re());n==null&&r!=null&&(n=yi(r,re()));let s=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=vm(i,o),u=t.operationForChild(o);u&&(s=s.concat(Rm(u,a,l,c)))}),r&&(s=s.concat(pc(r,t,i,n))),s}function km(t,e){const n=e.query,i=js(t,n);return{hashFn:()=>(eC(e)||B.EMPTY_NODE).hash(),onComplete:r=>{if(r==="ok")return i?_C(t,n._path,i):gC(t,n._path);{const s=u1(r,n);return $a(t,n,null,s)}}}}function js(t,e){const n=Co(e);return t.queryToTagMap.get(n)}function Co(t){return t._path.toString()+"$"+t._queryIdentifier}function gc(t,e){return t.tagToQueryMap.get(e)}function _c(t){const e=t.indexOf("$");return S(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new oe(t.substr(0,e))}}function vc(t,e,n){const i=t.syncPointTree_.get(e);S(i,"Missing sync point for query tag that we're tracking");const r=uc(t.pendingWriteTree_,e);return pc(i,n,r,null)}function bC(t){return t.fold((e,n,i)=>{if(n&&wn(n))return[Io(n)];{let r=[];return n&&(r=Em(n)),Be(i,(s,o)=>{r=r.concat(o)}),r}})}function gr(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(fC())(t._repo,t._path):t}function wC(t,e){for(let n=0;n<e.length;++n){const i=e[n];if(!i._queryParams.loadsAllData()){const r=Co(i),s=t.queryToTagMap.get(r);t.queryToTagMap.delete(r),t.tagToQueryMap.delete(s)}}}function IC(){return hC++}function EC(t,e,n){const i=e._path,r=js(t,e),s=km(t,n),o=t.listenProvider_.startListening(gr(e),r,s.hashFn,s.onComplete),a=t.syncPointTree_.subtree(i);if(r)S(!wn(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,u,d)=>{if(!Q(c)&&u&&wn(u))return[Io(u).query];{let f=[];return u&&(f=f.concat(Em(u).map(p=>p.query))),Be(d,(p,g)=>{f=f.concat(g)}),f}});for(let c=0;c<l.length;++c){const u=l[c];t.listenProvider_.stopListening(gr(u),js(t,u))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yc{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new yc(n)}node(){return this.node_}}class bc{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Ce(this.path_,e);return new bc(this.syncTree_,n)}node(){return mc(this.syncTree_,this.path_)}}const CC=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Fd=function(t,e,n){if(!t||typeof t!="object")return t;if(S(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return TC(t[".sv"],e,n);if(typeof t[".sv"]=="object")return SC(t[".sv"],e);S(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},TC=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:S(!1,"Unexpected server value: "+t)}},SC=function(t,e,n){t.hasOwnProperty("increment")||S(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const i=t.increment;typeof i!="number"&&S(!1,"Unexpected increment value: "+i);const r=e.node();if(S(r!==null&&typeof r!="undefined","Expected ChildrenNode.EMPTY_NODE for nulls"),!r.isLeafNode())return i;const o=r.getValue();return typeof o!="number"?i:o+i},Nm=function(t,e,n,i){return wc(e,new bc(n,t),i)},Pm=function(t,e,n){return wc(t,new yc(e),n)};function wc(t,e,n){const i=t.getPriority().val(),r=Fd(i,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,a=Fd(o.getValue(),e,n);return a!==o.getValue()||r!==o.getPriority().val()?new Pe(a,xe(r)):t}else{const o=t;return s=o,r!==o.getPriority().val()&&(s=s.updatePriority(new Pe(r))),o.forEachChild(we,(a,l)=>{const c=wc(l,e.getImmediateChild(a),n);c!==l&&(s=s.updateImmediateChild(a,c))}),s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ic{constructor(e="",n=null,i={children:{},childCount:0}){this.name=e,this.parent=n,this.node=i}}function Ec(t,e){let n=e instanceof oe?e:new oe(e),i=t,r=Y(n);for(;r!==null;){const s=Ci(i.node.children,r)||{children:{},childCount:0};i=new Ic(r,i,s),n=ge(n),r=Y(n)}return i}function Vi(t){return t.node.value}function Om(t,e){t.node.value=e,qa(t)}function xm(t){return t.node.childCount>0}function AC(t){return Vi(t)===void 0&&!xm(t)}function To(t,e){Be(t.node.children,(n,i)=>{e(new Ic(n,t,i))})}function Mm(t,e,n,i){n&&!i&&e(t),To(t,r=>{Mm(r,e,!0,i)}),n&&i&&e(t)}function RC(t,e,n){let i=n?t:t.parent;for(;i!==null;){if(e(i))return!0;i=i.parent}return!1}function Qr(t){return new oe(t.parent===null?t.name:Qr(t.parent)+"/"+t.name)}function qa(t){t.parent!==null&&kC(t.parent,t.name,t)}function kC(t,e,n){const i=AC(n),r=kt(t.node.children,e);i&&r?(delete t.node.children[e],t.node.childCount--,qa(t)):!i&&!r&&(t.node.children[e]=n.node,t.node.childCount++,qa(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NC=/[\[\].#$\/\u0000-\u001F\u007F]/,PC=/[\[\].#$\u0000-\u001F\u007F]/,ia=10*1024*1024,So=function(t){return typeof t=="string"&&t.length!==0&&!NC.test(t)},Dm=function(t){return typeof t=="string"&&t.length!==0&&!PC.test(t)},OC=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Dm(t)},Ga=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!Kl(t)||t&&typeof t=="object"&&kt(t,".sv")},Jr=function(t,e,n,i){i&&e===void 0||Ao(zr(t,"value"),e,n)},Ao=function(t,e,n){const i=n instanceof oe?new q1(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+An(i));if(typeof e=="function")throw new Error(t+"contains a function "+An(i)+" with contents = "+e.toString());if(Kl(e))throw new Error(t+"contains "+e.toString()+" "+An(i));if(typeof e=="string"&&e.length>ia/3&&oo(e)>ia)throw new Error(t+"contains a string greater than "+ia+" utf8 bytes "+An(i)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let r=!1,s=!1;if(Be(e,(o,a)=>{if(o===".value")r=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!So(o)))throw new Error(t+" contains an invalid key ("+o+") "+An(i)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);G1(i,o),Ao(t,a,i),K1(i)}),r&&s)throw new Error(t+' contains ".value" child '+An(i)+" in addition to actual children.")}},xC=function(t,e){let n,i;for(n=0;n<e.length;n++){i=e[n];const s=Or(i);for(let o=0;o<s.length;o++)if(!(s[o]===".priority"&&o===s.length-1)){if(!So(s[o]))throw new Error(t+"contains an invalid key ("+s[o]+") in path "+i.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort($1);let r=null;for(n=0;n<e.length;n++){if(i=e[n],r!==null&&ct(r,i))throw new Error(t+"contains a path "+r.toString()+" that is ancestor of another path "+i.toString());r=i}},MC=function(t,e,n,i){if(i&&e===void 0)return;const r=zr(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(r+" must be an object containing the children to replace.");const s=[];Be(e,(o,a)=>{const l=new oe(o);if(Ao(r,a,Ce(n,l)),ec(l)===".priority"&&!Ga(a))throw new Error(r+"contains an invalid value for '"+l.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");s.push(l)}),xC(r,s)},DC=function(t,e,n,i){if(!(i&&n===void 0)&&!So(n))throw new Error(zr(t,e)+'was an invalid key = "'+n+`".  Firebase keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]").`)},Cc=function(t,e,n,i){if(!(i&&n===void 0)&&!Dm(n))throw new Error(zr(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},LC=function(t,e,n,i){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Cc(t,e,n,i)},Tc=function(t,e){if(Y(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},FC=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!So(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!OC(n))throw new Error(zr(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UC{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Ro(t,e){let n=null;for(let i=0;i<e.length;i++){const r=e[i],s=r.getPath();n!==null&&!tc(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(r)}n&&t.eventLists_.push(n)}function Lm(t,e,n){Ro(t,n),Fm(t,i=>tc(i,e))}function vt(t,e,n){Ro(t,n),Fm(t,i=>ct(i,e)||ct(e,i))}function Fm(t,e){t.recursionDepth_++;let n=!0;for(let i=0;i<t.eventLists_.length;i++){const r=t.eventLists_[i];if(r){const s=r.path;e(s)?(WC(t.eventLists_[i]),t.eventLists_[i]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function WC(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const i=n.getEventRunner();Wn&&Fe("event: "+n.toString()),Bi(i)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HC="repo_interrupt",BC=25;class zC{constructor(e,n,i,r){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=i,this.appCheckProvider_=r,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new UC,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Fs(),this.transactionQueueTree_=new Ic,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function VC(t,e,n){if(t.stats_=Jl(t.repoInfo_),t.forceRestClient_||p1())t.server_=new Ls(t.repoInfo_,(i,r,s,o)=>{Ud(t,i,r,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Wd(t,!0),0);else{if(typeof n!="undefined"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{De(n)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}t.persistentConnection_=new Wt(t.repoInfo_,e,(i,r,s,o)=>{Ud(t,i,r,s,o)},i=>{Wd(t,i)},i=>{jC(t,i)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(i=>{t.server_.refreshAuthToken(i)}),t.appCheckProvider_.addTokenChangeListener(i=>{t.server_.refreshAppCheckToken(i.token)}),t.statsReporter_=w1(t.repoInfo_,()=>new EE(t.stats_,t.server_)),t.infoData_=new vE,t.infoSyncTree_=new Dd({startListening:(i,r,s,o)=>{let a=[];const l=t.infoData_.getNode(i._path);return l.isEmpty()||(a=Eo(t.infoSyncTree_,i._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Sc(t,"connected",!1),t.serverSyncTree_=new Dd({startListening:(i,r,s,o)=>(t.server_.listen(i,s,r,(a,l)=>{const c=o(a,l);vt(t.eventQueue_,i._path,c)}),[]),stopListening:(i,r)=>{t.server_.unlisten(i,r)}})}function Um(t){const n=t.infoData_.getNode(new oe(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function ko(t){return CC({timestamp:Um(t)})}function Ud(t,e,n,i,r){t.dataUpdateCount++;const s=new oe(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(r)if(i){const l=Rs(n,c=>xe(c));o=yC(t.serverSyncTree_,s,l,r)}else{const l=xe(n);o=vC(t.serverSyncTree_,s,l,r)}else if(i){const l=Rs(n,c=>xe(c));o=mC(t.serverSyncTree_,s,l)}else{const l=xe(n);o=Eo(t.serverSyncTree_,s,l)}let a=s;o.length>0&&(a=Ri(t,s)),vt(t.eventQueue_,a,o)}function Wd(t,e){Sc(t,"connected",e),e===!1&&GC(t)}function jC(t,e){Be(e,(n,i)=>{Sc(t,n,i)})}function Sc(t,e,n){const i=new oe("/.info/"+e),r=xe(n);t.infoData_.updateSnapshot(i,r);const s=Eo(t.infoSyncTree_,i,r);vt(t.eventQueue_,i,s)}function Ac(t){return t.nextWriteId_++}function $C(t,e,n,i,r){No(t,"set",{path:e.toString(),value:n,priority:i});const s=ko(t),o=xe(n,i),a=mc(t.serverSyncTree_,e),l=Pm(o,a,s),c=Ac(t),u=Sm(t.serverSyncTree_,e,l,c,!0);Ro(t.eventQueue_,u),t.server_.put(e.toString(),o.val(!0),(f,p)=>{const g=f==="ok";g||$e("set at "+e+" failed: "+f);const C=dn(t.serverSyncTree_,c,!g);vt(t.eventQueue_,e,C),Ka(t,r,f,p)});const d=kc(t,e);Ri(t,d),vt(t.eventQueue_,d,[])}function qC(t,e,n,i){No(t,"update",{path:e.toString(),value:n});let r=!0;const s=ko(t),o={};if(Be(n,(a,l)=>{r=!1,o[a]=Nm(Ce(e,a),xe(l),t.serverSyncTree_,s)}),r)Fe("update() called with empty data.  Don't do anything."),Ka(t,i,"ok",void 0);else{const a=Ac(t),l=pC(t.serverSyncTree_,e,o,a);Ro(t.eventQueue_,l),t.server_.merge(e.toString(),n,(c,u)=>{const d=c==="ok";d||$e("update at "+e+" failed: "+c);const f=dn(t.serverSyncTree_,a,!d),p=f.length>0?Ri(t,e):e;vt(t.eventQueue_,p,f),Ka(t,i,c,u)}),Be(n,c=>{const u=kc(t,Ce(e,c));Ri(t,u)}),vt(t.eventQueue_,e,[])}}function GC(t){No(t,"onDisconnectEvents");const e=ko(t),n=Fs();Ua(t.onDisconnect_,re(),(r,s)=>{const o=Nm(r,s,t.serverSyncTree_,e);hm(n,r,o)});let i=[];Ua(n,re(),(r,s)=>{i=i.concat(Eo(t.serverSyncTree_,r,s));const o=kc(t,r);Ri(t,o)}),t.onDisconnect_=Fs(),vt(t.eventQueue_,re(),i)}function KC(t,e,n){let i;Y(e._path)===".info"?i=Ld(t.infoSyncTree_,e,n):i=Ld(t.serverSyncTree_,e,n),Lm(t.eventQueue_,e._path,i)}function Hd(t,e,n){let i;Y(e._path)===".info"?i=$a(t.infoSyncTree_,e,n):i=$a(t.serverSyncTree_,e,n),Lm(t.eventQueue_,e._path,i)}function YC(t){t.persistentConnection_&&t.persistentConnection_.interrupt(HC)}function No(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Fe(n,...e)}function Ka(t,e,n,i){e&&Bi(()=>{if(n==="ok")e(null);else{const r=(n||"error").toUpperCase();let s=r;i&&(s+=": "+i);const o=new Error(s);o.code=r,e(o)}})}function Wm(t,e,n){return mc(t.serverSyncTree_,e,n)||B.EMPTY_NODE}function Rc(t,e=t.transactionQueueTree_){if(e||Po(t,e),Vi(e)){const n=Bm(t,e);S(n.length>0,"Sending zero length transaction queue"),n.every(r=>r.status===0)&&QC(t,Qr(e),n)}else xm(e)&&To(e,n=>{Rc(t,n)})}function QC(t,e,n){const i=n.map(c=>c.currentWriteId),r=Wm(t,e,i);let s=r;const o=r.hash();for(let c=0;c<n.length;c++){const u=n[c];S(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const d=Qe(e,u.path);s=s.updateChild(d,u.currentOutputSnapshotRaw)}const a=s.val(!0),l=e;t.server_.put(l.toString(),a,c=>{No(t,"transaction put response",{path:l.toString(),status:c});let u=[];if(c==="ok"){const d=[];for(let f=0;f<n.length;f++)n[f].status=2,u=u.concat(dn(t.serverSyncTree_,n[f].currentWriteId)),n[f].onComplete&&d.push(()=>n[f].onComplete(null,!0,n[f].currentOutputSnapshotResolved)),n[f].unwatcher();Po(t,Ec(t.transactionQueueTree_,e)),Rc(t,t.transactionQueueTree_),vt(t.eventQueue_,e,u);for(let f=0;f<d.length;f++)Bi(d[f])}else{if(c==="datastale")for(let d=0;d<n.length;d++)n[d].status===3?n[d].status=4:n[d].status=0;else{$e("transaction at "+l.toString()+" failed: "+c);for(let d=0;d<n.length;d++)n[d].status=4,n[d].abortReason=c}Ri(t,e)}},o)}function Ri(t,e){const n=Hm(t,e),i=Qr(n),r=Bm(t,n);return JC(t,r,i),i}function JC(t,e,n){if(e.length===0)return;const i=[];let r=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=Qe(n,l.path);let u=!1,d;if(S(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,d=l.abortReason,r=r.concat(dn(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=BC)u=!0,d="maxretry",r=r.concat(dn(t.serverSyncTree_,l.currentWriteId,!0));else{const f=Wm(t,l.path,o);l.currentInputSnapshot=f;const p=e[a].update(f.val());if(p!==void 0){Ao("transaction failed: Data returned ",p,l.path);let g=xe(p);typeof p=="object"&&p!=null&&kt(p,".priority")||(g=g.updatePriority(f.getPriority()));const b=l.currentWriteId,v=ko(t),E=Pm(g,f,v);l.currentOutputSnapshotRaw=g,l.currentOutputSnapshotResolved=E,l.currentWriteId=Ac(t),o.splice(o.indexOf(b),1),r=r.concat(Sm(t.serverSyncTree_,l.path,E,l.currentWriteId,l.applyLocally)),r=r.concat(dn(t.serverSyncTree_,b,!0))}else u=!0,d="nodata",r=r.concat(dn(t.serverSyncTree_,l.currentWriteId,!0))}vt(t.eventQueue_,n,r),r=[],u&&(e[a].status=2,function(f){setTimeout(f,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(d==="nodata"?i.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):i.push(()=>e[a].onComplete(new Error(d),!1,null))))}Po(t,t.transactionQueueTree_);for(let a=0;a<i.length;a++)Bi(i[a]);Rc(t,t.transactionQueueTree_)}function Hm(t,e){let n,i=t.transactionQueueTree_;for(n=Y(e);n!==null&&Vi(i)===void 0;)i=Ec(i,n),e=ge(e),n=Y(e);return i}function Bm(t,e){const n=[];return zm(t,e,n),n.sort((i,r)=>i.order-r.order),n}function zm(t,e,n){const i=Vi(e);if(i)for(let r=0;r<i.length;r++)n.push(i[r]);To(e,r=>{zm(t,r,n)})}function Po(t,e){const n=Vi(e);if(n){let i=0;for(let r=0;r<n.length;r++)n[r].status!==2&&(n[i]=n[r],i++);n.length=i,Om(e,n.length>0?n:void 0)}To(e,i=>{Po(t,i)})}function kc(t,e){const n=Qr(Hm(t,e)),i=Ec(t.transactionQueueTree_,e);return RC(i,r=>{ra(t,r)}),ra(t,i),Mm(i,r=>{ra(t,r)}),n}function ra(t,e){const n=Vi(e);if(n){const i=[];let r=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(S(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(S(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),r=r.concat(dn(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&i.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?Om(e,void 0):n.length=s+1,vt(t.eventQueue_,Qr(e),r);for(let o=0;o<i.length;o++)Bi(i[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XC(t){let e="";const n=t.split("/");for(let i=0;i<n.length;i++)if(n[i].length>0){let r=n[i];try{r=decodeURIComponent(r.replace(/\+/g," "))}catch{}e+="/"+r}return e}function ZC(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const i=n.split("=");i.length===2?e[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):$e(`Invalid query segment '${n}' in query '${t}'`)}return e}const Bd=function(t,e){const n=eT(t),i=n.namespace;n.domain==="firebase.com"&&Vn(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!i||i==="undefined")&&n.domain!=="localhost"&&Vn("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||s1();const r=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new v1(n.host,n.secure,i,e,r,"",i!==n.subdomain),path:new oe(n.pathString)}},eT=function(t){let e="",n="",i="",r="",s="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let d=t.indexOf("?");d===-1&&(d=t.length),e=t.substring(0,Math.min(u,d)),u<d&&(r=XC(t.substring(u,d)));const f=ZC(t.substring(Math.min(t.length,d)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const p=e.slice(0,c);if(p.toLowerCase()==="localhost")n="localhost";else if(p.split(".").length<=2)n=p;else{const g=e.indexOf(".");i=e.substring(0,g).toLowerCase(),n=e.substring(g+1),s=i}"ns"in f&&(s=f.ns)}return{host:e,port:l,domain:n,subdomain:i,secure:o,scheme:a,pathString:r,namespace:s}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vm{constructor(e,n,i,r){this.eventType=e,this.eventRegistration=n,this.snapshot=i,this.prevName=r}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+De(this.snapshot.exportVal())}}class jm{constructor(e,n,i){this.eventRegistration=e,this.error=n,this.path=i}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tT{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return S(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ji{constructor(e,n,i,r){this._repo=e,this._path=n,this._queryParams=i,this._orderByCalled=r}get key(){return Q(this._path)?null:ec(this._path)}get ref(){return new Yt(this._repo,this._path)}get _queryIdentifier(){const e=Td(this._queryParams),n=Yl(e);return n==="{}"?"default":n}get _queryObject(){return Td(this._queryParams)}isEqual(e){if(e=$(e),!(e instanceof ji))return!1;const n=this._repo===e._repo,i=tc(this._path,e._path),r=this._queryIdentifier===e._queryIdentifier;return n&&i&&r}toJSON(){return this.toString()}toString(){return this._repo.toString()+j1(this._path)}}function nT(t,e){if(t._orderByCalled===!0)throw new Error(e+": You can't combine multiple orderBy calls.")}function Nc(t){let e=null,n=null;if(t.hasStart()&&(e=t.getIndexStartValue()),t.hasEnd()&&(n=t.getIndexEndValue()),t.getIndex()===Hn){const i="Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().",r="Query: When ordering by key, the argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() must be a string.";if(t.hasStart()){if(t.getIndexStartName()!==jn)throw new Error(i);if(typeof e!="string")throw new Error(r)}if(t.hasEnd()){if(t.getIndexEndName()!==yn)throw new Error(i);if(typeof n!="string")throw new Error(r)}}else if(t.getIndex()===we){if(e!=null&&!Ga(e)||n!=null&&!Ga(n))throw new Error("Query: When ordering by priority, the first argument passed to startAt(), startAfter() endAt(), endBefore(), or equalTo() must be a valid priority value (null, a number, or a string).")}else if(S(t.getIndex()instanceof rc||t.getIndex()===dm,"unknown index type."),e!=null&&typeof e=="object"||n!=null&&typeof n=="object")throw new Error("Query: First argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() cannot be an object.")}function $m(t){if(t.hasStart()&&t.hasEnd()&&t.hasLimit()&&!t.hasAnchoredLimit())throw new Error("Query: Can't combine startAt(), startAfter(), endAt(), endBefore(), and limit(). Use limitToFirst() or limitToLast() instead.")}class Yt extends ji{constructor(e,n){super(e,n,new oc,!1)}get parent(){const e=rm(this._path);return e===null?null:new Yt(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Fr{constructor(e,n,i){this._node=e,this.ref=n,this._index=i}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new oe(e),i=ki(this.ref,e);return new Fr(this._node.getChild(n),i,we)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(i,r)=>e(new Fr(r,ki(this.ref,i),we)))}hasChild(e){const n=new oe(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function TS(t,e){return t=$(t),t._checkNotDeleted("ref"),e!==void 0?ki(t._root,e):t._root}function ki(t,e){return t=$(t),Y(t._path)===null?LC("child","path",e,!1):Cc("child","path",e,!1),new Yt(t._repo,Ce(t._path,e))}function SS(t,e){t=$(t),Tc("push",t._path),Jr("push",e,t._path,!0);const n=Um(t._repo),i=dE(n),r=ki(t,i),s=ki(t,i);let o;return e!=null?o=qm(s,e).then(()=>s):o=Promise.resolve(s),r.then=o.then.bind(o),r.catch=o.then.bind(o,void 0),r}function AS(t){return Tc("remove",t._path),qm(t,null)}function qm(t,e){t=$(t),Tc("set",t._path),Jr("set",e,t._path,!1);const n=new Hr;return $C(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function RS(t,e){MC("update",e,t._path,!1);const n=new Hr;return qC(t._repo,t._path,e,n.wrapCallback(()=>{})),n.promise}class Pc{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const i=n._queryParams.getIndex();return new Vm("value",this,new Fr(e.snapshotNode,new Yt(n._repo,n._path),i))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new jm(this,e,n):null}matches(e){return e instanceof Pc?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class Oc{constructor(e,n){this.eventType=e,this.callbackContext=n}respondsTo(e){let n=e==="children_added"?"child_added":e;return n=n==="children_removed"?"child_removed":n,this.eventType===n}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new jm(this,e,n):null}createEvent(e,n){S(e.childName!=null,"Child events should have a childName.");const i=ki(new Yt(n._repo,n._path),e.childName),r=n._queryParams.getIndex();return new Vm(e.type,this,new Fr(e.snapshotNode,i,r),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof Oc?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function Gm(t,e,n,i,r){let s;if(typeof i=="object"&&(s=void 0,r=i),typeof i=="function"&&(s=i),r&&r.onlyOnce){const l=n,c=(u,d)=>{Hd(t._repo,t,a),l(u,d)};c.userCallback=n.userCallback,c.context=n.context,n=c}const o=new tT(n,s||void 0),a=e==="value"?new Pc(o):new Oc(e,o);return KC(t._repo,t,a),()=>Hd(t._repo,t,a)}function kS(t,e,n,i){return Gm(t,"value",e,n,i)}function NS(t,e,n,i){return Gm(t,"child_added",e,n,i)}class Oo{}class iT extends Oo{constructor(e,n){super();this._value=e,this._key=n}_apply(e){Jr("endAt",this._value,e._path,!0);const n=gE(e._queryParams,this._value,this._key);if($m(n),Nc(n),e._queryParams.hasEnd())throw new Error("endAt: Starting point was already set (by another call to endAt, endBefore or equalTo).");return new ji(e._repo,e._path,n,e._orderByCalled)}}class rT extends Oo{constructor(e,n){super();this._value=e,this._key=n}_apply(e){Jr("startAt",this._value,e._path,!0);const n=mE(e._queryParams,this._value,this._key);if($m(n),Nc(n),e._queryParams.hasStart())throw new Error("startAt: Starting point was already set (by another call to startAt, startBefore or equalTo).");return new ji(e._repo,e._path,n,e._orderByCalled)}}class sT extends Oo{constructor(e){super();this._path=e}_apply(e){nT(e,"orderByChild");const n=new oe(this._path);if(Q(n))throw new Error("orderByChild: cannot pass in empty path. Use orderByValue() instead.");const i=new rc(n),r=_E(e._queryParams,i);return Nc(r),new ji(e._repo,e._path,r,!0)}}function PS(t){if(t==="$key")throw new Error('orderByChild: "$key" is invalid.  Use orderByKey() instead.');if(t==="$priority")throw new Error('orderByChild: "$priority" is invalid.  Use orderByPriority() instead.');if(t==="$value")throw new Error('orderByChild: "$value" is invalid.  Use orderByValue() instead.');return Cc("orderByChild","path",t,!1),new sT(t)}class oT extends Oo{constructor(e,n){super();this._value=e,this._key=n}_apply(e){if(Jr("equalTo",this._value,e._path,!1),e._queryParams.hasStart())throw new Error("equalTo: Starting point was already set (by another call to startAt/startAfter or equalTo).");if(e._queryParams.hasEnd())throw new Error("equalTo: Ending point was already set (by another call to endAt/endBefore or equalTo).");return new iT(this._value,this._key)._apply(new rT(this._value,this._key)._apply(e))}}function OS(t,e){return DC("equalTo","key",e,!0),new oT(t,e)}function xS(t,...e){let n=$(t);for(const i of e)n=i._apply(n);return n}sC(Yt);dC(Yt);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aT="FIREBASE_DATABASE_EMULATOR_HOST",Ya={};let lT=!1;function cT(t,e,n,i,r){let s=i||t.options.databaseURL;s===void 0&&(t.options.projectId||Vn("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Fe("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Bd(s,r),a=o.repoInfo,l,c;typeof process!="undefined"&&(c={}[aT]),c?(l=!0,s=`http://${c}?ns=${a.namespace}`,o=Bd(s,r),a=o.repoInfo):l=!o.repoInfo.secure;const u=r&&l?new Da(Da.OWNER):new g1(t.name,t.options,e);FC("Invalid Firebase Database URL",o),Q(o.path)||Vn("Database URL must point to the root of a Firebase Database (not including a child path).");const d=dT(a,t,u,new m1(t.name,n));return new fT(d,t)}function uT(t,e){const n=Ya[e];(!n||n[t.key]!==t)&&Vn(`Database ${e}(${t.repoInfo_}) has already been deleted.`),YC(t),delete n[t.key]}function dT(t,e,n,i){let r=Ya[e.name];r||(r={},Ya[e.name]=r);let s=r[t.toURLString()];return s&&Vn("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new zC(t,lT,n,i),r[t.toURLString()]=s,s}class fT{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(VC(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Yt(this._repo,re())),this._rootInternal}_delete(){return this._rootInternal!==null&&(uT(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Vn("Cannot call "+e+" on a deleted database.")}}function MS(t=Ol(),e){return Vr(t,"database").getImmediate({identifier:e})}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hT(t){e1(Ui),zn(new Bn("database",(e,{instanceIdentifier:n})=>{const i=e.getProvider("app").getImmediate(),r=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return cT(i,r,s,n)},"PUBLIC").setMultipleInstances(!0)),Ft(ad,ld,t),Ft(ad,ld,"esm2017")}Wt.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Wt.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};hT();var pT=function(t){return function(e){return!!e&&typeof e=="object"}(t)&&!function(e){var n=Object.prototype.toString.call(e);return n==="[object RegExp]"||n==="[object Date]"||function(i){return i.$$typeof===mT}(e)}(t)},mT=typeof Symbol=="function"&&Symbol.for?Symbol.for("react.element"):60103;function rr(t,e){return e.clone!==!1&&e.isMergeableObject(t)?Ni(Array.isArray(t)?[]:{},t,e):t}function gT(t,e,n){return t.concat(e).map(function(i){return rr(i,n)})}function zd(t){return Object.keys(t).concat(function(e){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e).filter(function(n){return e.propertyIsEnumerable(n)}):[]}(t))}function Vd(t,e){try{return e in t}catch{return!1}}function Ni(t,e,n){(n=n||{}).arrayMerge=n.arrayMerge||gT,n.isMergeableObject=n.isMergeableObject||pT,n.cloneUnlessOtherwiseSpecified=rr;var i=Array.isArray(e);return i===Array.isArray(t)?i?n.arrayMerge(t,e,n):function(r,s,o){var a={};return o.isMergeableObject(r)&&zd(r).forEach(function(l){a[l]=rr(r[l],o)}),zd(s).forEach(function(l){(function(c,u){return Vd(c,u)&&!(Object.hasOwnProperty.call(c,u)&&Object.propertyIsEnumerable.call(c,u))})(r,l)||(a[l]=Vd(r,l)&&o.isMergeableObject(s[l])?function(c,u){if(!u.customMerge)return Ni;var d=u.customMerge(c);return typeof d=="function"?d:Ni}(l,o)(r[l],s[l],o):rr(s[l],o))}),a}(t,e,n):rr(e,n)}Ni.all=function(t,e){if(!Array.isArray(t))throw new Error("first argument should be an array");return t.reduce(function(n,i){return Ni(n,i,e)},{})};var _T=Ni;function DS(t){var e=(t=t||{}).storage||window&&window.localStorage,n=t.key||"vuex";function i(u,d){var f=d.getItem(u);try{return typeof f=="string"?JSON.parse(f):typeof f=="object"?f:void 0}catch{}}function r(){return!0}function s(u,d,f){return f.setItem(u,JSON.stringify(d))}function o(u,d){return Array.isArray(d)?d.reduce(function(f,p){return function(b,v,E,x){return!/^(__proto__|constructor|prototype)$/.test(v)&&((v=v.split?v.split("."):v.slice(0)).slice(0,-1).reduce(function(M,K){return M[K]=M[K]||{}},b)[v.pop()]=E),b}(f,p,(g=u,(g=((C=p).split?C.split("."):C).reduce(function(b,v){return b&&b[v]},g))===void 0?void 0:g));var g,C},{}):u}function a(u){return function(d){return u.subscribe(d)}}(t.assertStorage||function(){e.setItem("@@",1),e.removeItem("@@")})(e);var l,c=function(){return(t.getState||i)(n,e)};return t.fetchBeforeUse&&(l=c()),function(u){t.fetchBeforeUse||(l=c()),typeof l=="object"&&l!==null&&(u.replaceState(t.overwrite?l:_T(u.state,l,{arrayMerge:t.arrayMerger||function(d,f){return f},clone:!1})),(t.rehydrated||function(){})(u)),(t.subscriber||a)(u)(function(d,f){(t.filter||r)(d)&&(t.setState||s)(n,(t.reducer||o)(f,t.paths),e)})}}var vT="firebase",yT="9.6.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ft(vT,yT,"app");/*!
 * Font Awesome Free 5.15.4 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 */function bT(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function jd(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function wT(t,e,n){return e&&jd(t.prototype,e),n&&jd(t,n),t}function IT(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function ee(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{},i=Object.keys(n);typeof Object.getOwnPropertySymbols=="function"&&(i=i.concat(Object.getOwnPropertySymbols(n).filter(function(r){return Object.getOwnPropertyDescriptor(n,r).enumerable}))),i.forEach(function(r){IT(t,r,n[r])})}return t}function Km(t,e){return TT(t)||AT(t,e)||kT()}function ET(t){return CT(t)||ST(t)||RT()}function CT(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}function TT(t){if(Array.isArray(t))return t}function ST(t){if(Symbol.iterator in Object(t)||Object.prototype.toString.call(t)==="[object Arguments]")return Array.from(t)}function AT(t,e){var n=[],i=!0,r=!1,s=void 0;try{for(var o=t[Symbol.iterator](),a;!(i=(a=o.next()).done)&&(n.push(a.value),!(e&&n.length===e));i=!0);}catch(l){r=!0,s=l}finally{try{!i&&o.return!=null&&o.return()}finally{if(r)throw s}}return n}function RT(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function kT(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}var $d=function(){},xc={},Ym={},NT=null,Qm={mark:$d,measure:$d};try{typeof window!="undefined"&&(xc=window),typeof document!="undefined"&&(Ym=document),typeof MutationObserver!="undefined"&&(NT=MutationObserver),typeof performance!="undefined"&&(Qm=performance)}catch{}var PT=xc.navigator||{},qd=PT.userAgent,Gd=qd===void 0?"":qd,xo=xc,je=Ym,os=Qm;xo.document;var Mc=!!je.documentElement&&!!je.head&&typeof je.addEventListener=="function"&&typeof je.createElement=="function",OT=~Gd.indexOf("MSIE")||~Gd.indexOf("Trident/"),jt="___FONT_AWESOME___",Qa=16,Jm="fa",Xm="svg-inline--fa",Zm="data-fa-i2svg";(function(){try{return!0}catch{return!1}})();var sa={GROUP:"group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},eg=xo.FontAwesomeConfig||{};function xT(t){var e=je.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function MT(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(je&&typeof je.querySelector=="function"){var DT=[["data-family-prefix","familyPrefix"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];DT.forEach(function(t){var e=Km(t,2),n=e[0],i=e[1],r=MT(xT(n));r!=null&&(eg[i]=r)})}var LT={familyPrefix:Jm,replacementClass:Xm,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0},Ja=ee({},LT,eg);Ja.autoReplaceSvg||(Ja.observeMutations=!1);var ze=ee({},Ja);xo.FontAwesomeConfig=ze;var $t=xo||{};$t[jt]||($t[jt]={});$t[jt].styles||($t[jt].styles={});$t[jt].hooks||($t[jt].hooks={});$t[jt].shims||($t[jt].shims=[]);var St=$t[jt],FT=[],UT=function t(){je.removeEventListener("DOMContentLoaded",t),Xa=1,FT.map(function(e){return e()})},Xa=!1;Mc&&(Xa=(je.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(je.readyState),Xa||je.addEventListener("DOMContentLoaded",UT));typeof global!="undefined"&&typeof global.process!="undefined"&&global.process.emit;var nn=Qa,fn={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function WT(t){if(!(!t||!Mc)){var e=je.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=je.head.childNodes,i=null,r=n.length-1;r>-1;r--){var s=n[r],o=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(i=s)}return je.head.insertBefore(e,i),t}}var HT="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function $s(){for(var t=12,e="";t-- >0;)e+=HT[Math.random()*62|0];return e}function tg(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function BT(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,'="').concat(tg(t[n]),'" ')},"").trim()}function Dc(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,": ").concat(t[n],";")},"")}function Lc(t){return t.size!==fn.size||t.x!==fn.x||t.y!==fn.y||t.rotate!==fn.rotate||t.flipX||t.flipY}function ng(t){var e=t.transform,n=t.containerWidth,i=t.iconWidth,r={transform:"translate(".concat(n/2," 256)")},s="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),a="rotate(".concat(e.rotate," 0 0)"),l={transform:"".concat(s," ").concat(o," ").concat(a)},c={transform:"translate(".concat(i/2*-1," -256)")};return{outer:r,inner:l,path:c}}function zT(t){var e=t.transform,n=t.width,i=n===void 0?Qa:n,r=t.height,s=r===void 0?Qa:r,o=t.startCentered,a=o===void 0?!1:o,l="";return a&&OT?l+="translate(".concat(e.x/nn-i/2,"em, ").concat(e.y/nn-s/2,"em) "):a?l+="translate(calc(-50% + ".concat(e.x/nn,"em), calc(-50% + ").concat(e.y/nn,"em)) "):l+="translate(".concat(e.x/nn,"em, ").concat(e.y/nn,"em) "),l+="scale(".concat(e.size/nn*(e.flipX?-1:1),", ").concat(e.size/nn*(e.flipY?-1:1),") "),l+="rotate(".concat(e.rotate,"deg) "),l}var oa={x:0,y:0,width:"100%",height:"100%"};function Kd(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function VT(t){return t.tag==="g"?t.children:[t]}function jT(t){var e=t.children,n=t.attributes,i=t.main,r=t.mask,s=t.maskId,o=t.transform,a=i.width,l=i.icon,c=r.width,u=r.icon,d=ng({transform:o,containerWidth:c,iconWidth:a}),f={tag:"rect",attributes:ee({},oa,{fill:"white"})},p=l.children?{children:l.children.map(Kd)}:{},g={tag:"g",attributes:ee({},d.inner),children:[Kd(ee({tag:l.tag,attributes:ee({},l.attributes,d.path)},p))]},C={tag:"g",attributes:ee({},d.outer),children:[g]},b="mask-".concat(s||$s()),v="clip-".concat(s||$s()),E={tag:"mask",attributes:ee({},oa,{id:b,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[f,C]},x={tag:"defs",children:[{tag:"clipPath",attributes:{id:v},children:VT(u)},E]};return e.push(x,{tag:"rect",attributes:ee({fill:"currentColor","clip-path":"url(#".concat(v,")"),mask:"url(#".concat(b,")")},oa)}),{children:e,attributes:n}}function $T(t){var e=t.children,n=t.attributes,i=t.main,r=t.transform,s=t.styles,o=Dc(s);if(o.length>0&&(n.style=o),Lc(r)){var a=ng({transform:r,containerWidth:i.width,iconWidth:i.width});e.push({tag:"g",attributes:ee({},a.outer),children:[{tag:"g",attributes:ee({},a.inner),children:[{tag:i.icon.tag,children:i.icon.children,attributes:ee({},i.icon.attributes,a.path)}]}]})}else e.push(i.icon);return{children:e,attributes:n}}function qT(t){var e=t.children,n=t.main,i=t.mask,r=t.attributes,s=t.styles,o=t.transform;if(Lc(o)&&n.found&&!i.found){var a=n.width,l=n.height,c={x:a/l/2,y:.5};r.style=Dc(ee({},s,{"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")}))}return[{tag:"svg",attributes:r,children:e}]}function GT(t){var e=t.prefix,n=t.iconName,i=t.children,r=t.attributes,s=t.symbol,o=s===!0?"".concat(e,"-").concat(ze.familyPrefix,"-").concat(n):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:ee({},r,{id:o}),children:i}]}]}function KT(t){var e=t.icons,n=e.main,i=e.mask,r=t.prefix,s=t.iconName,o=t.transform,a=t.symbol,l=t.title,c=t.maskId,u=t.titleId,d=t.extra,f=t.watchable,p=f===void 0?!1:f,g=i.found?i:n,C=g.width,b=g.height,v=r==="fak",E=v?"":"fa-w-".concat(Math.ceil(C/b*16)),x=[ze.replacementClass,s?"".concat(ze.familyPrefix,"-").concat(s):"",E].filter(function(ye){return d.classes.indexOf(ye)===-1}).filter(function(ye){return ye!==""||!!ye}).concat(d.classes).join(" "),M={children:[],attributes:ee({},d.attributes,{"data-prefix":r,"data-icon":s,class:x,role:d.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(C," ").concat(b)})},K=v&&!~d.classes.indexOf("fa-fw")?{width:"".concat(C/b*16*.0625,"em")}:{};p&&(M.attributes[Zm]=""),l&&M.children.push({tag:"title",attributes:{id:M.attributes["aria-labelledby"]||"title-".concat(u||$s())},children:[l]});var Z=ee({},M,{prefix:r,iconName:s,main:n,mask:i,maskId:c,transform:o,symbol:a,styles:ee({},K,d.styles)}),z=i.found&&n.found?jT(Z):$T(Z),_e=z.children,ne=z.attributes;return Z.children=_e,Z.attributes=ne,a?GT(Z):qT(Z)}function YT(t){var e=t.content,n=t.width,i=t.height,r=t.transform,s=t.title,o=t.extra,a=t.watchable,l=a===void 0?!1:a,c=ee({},o.attributes,s?{title:s}:{},{class:o.classes.join(" ")});l&&(c[Zm]="");var u=ee({},o.styles);Lc(r)&&(u.transform=zT({transform:r,startCentered:!0,width:n,height:i}),u["-webkit-transform"]=u.transform);var d=Dc(u);d.length>0&&(c.style=d);var f=[];return f.push({tag:"span",attributes:c,children:[e]}),s&&f.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),f}var Yd=function(){};ze.measurePerformance&&os&&os.mark&&os.measure;var QT=function(e,n){return function(i,r,s,o){return e.call(n,i,r,s,o)}},aa=function(e,n,i,r){var s=Object.keys(e),o=s.length,a=r!==void 0?QT(n,r):n,l,c,u;for(i===void 0?(l=1,u=e[s[0]]):(l=0,u=i);l<o;l++)c=s[l],u=a(u,e[c],c,e);return u};function ig(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i=n.skipHooks,r=i===void 0?!1:i,s=Object.keys(e).reduce(function(o,a){var l=e[a],c=!!l.icon;return c?o[l.iconName]=l.icon:o[a]=l,o},{});typeof St.hooks.addPack=="function"&&!r?St.hooks.addPack(t,s):St.styles[t]=ee({},St.styles[t]||{},s),t==="fas"&&ig("fa",e)}var Qd=St.styles,JT=St.shims,rg=function(){var e=function(r){return aa(Qd,function(s,o,a){return s[a]=aa(o,r,{}),s},{})};e(function(i,r,s){return r[3]&&(i[r[3]]=s),i}),e(function(i,r,s){var o=r[2];return i[s]=s,o.forEach(function(a){i[a]=s}),i});var n="far"in Qd;aa(JT,function(i,r){var s=r[0],o=r[1],a=r[2];return o==="far"&&!n&&(o="fas"),i[s]={prefix:o,iconName:a},i},{})};rg();St.styles;function Jd(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}function sg(t){var e=t.tag,n=t.attributes,i=n===void 0?{}:n,r=t.children,s=r===void 0?[]:r;return typeof t=="string"?tg(t):"<".concat(e," ").concat(BT(i),">").concat(s.map(sg).join(""),"</").concat(e,">")}var XT=function(e){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e?e.toLowerCase().split(" ").reduce(function(i,r){var s=r.toLowerCase().split("-"),o=s[0],a=s.slice(1).join("-");if(o&&a==="h")return i.flipX=!0,i;if(o&&a==="v")return i.flipY=!0,i;if(a=parseFloat(a),isNaN(a))return i;switch(o){case"grow":i.size=i.size+a;break;case"shrink":i.size=i.size-a;break;case"left":i.x=i.x-a;break;case"right":i.x=i.x+a;break;case"up":i.y=i.y-a;break;case"down":i.y=i.y+a;break;case"rotate":i.rotate=i.rotate+a;break}return i},n):n};function Za(t){this.name="MissingIcon",this.message=t||"Icon unavailable",this.stack=new Error().stack}Za.prototype=Object.create(Error.prototype);Za.prototype.constructor=Za;var Mo={fill:"currentColor"},og={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};ee({},Mo,{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"});var Fc=ee({},og,{attributeName:"opacity"});ee({},Mo,{cx:"256",cy:"364",r:"28"}),ee({},og,{attributeName:"r",values:"28;14;28;28;14;28;"}),ee({},Fc,{values:"1;0;1;1;0;1;"});ee({},Mo,{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),ee({},Fc,{values:"1;0;0;0;0;1;"});ee({},Mo,{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),ee({},Fc,{values:"0;0;1;1;0;0;"});St.styles;function Xd(t){var e=t[0],n=t[1],i=t.slice(4),r=Km(i,1),s=r[0],o=null;return Array.isArray(s)?o={tag:"g",attributes:{class:"".concat(ze.familyPrefix,"-").concat(sa.GROUP)},children:[{tag:"path",attributes:{class:"".concat(ze.familyPrefix,"-").concat(sa.SECONDARY),fill:"currentColor",d:s[0]}},{tag:"path",attributes:{class:"".concat(ze.familyPrefix,"-").concat(sa.PRIMARY),fill:"currentColor",d:s[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:s}},{found:!0,width:e,height:n,icon:o}}St.styles;var ZT=`svg:not(:root).svg-inline--fa {
  overflow: visible;
}

.svg-inline--fa {
  display: inline-block;
  font-size: inherit;
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.225em;
}
.svg-inline--fa.fa-w-1 {
  width: 0.0625em;
}
.svg-inline--fa.fa-w-2 {
  width: 0.125em;
}
.svg-inline--fa.fa-w-3 {
  width: 0.1875em;
}
.svg-inline--fa.fa-w-4 {
  width: 0.25em;
}
.svg-inline--fa.fa-w-5 {
  width: 0.3125em;
}
.svg-inline--fa.fa-w-6 {
  width: 0.375em;
}
.svg-inline--fa.fa-w-7 {
  width: 0.4375em;
}
.svg-inline--fa.fa-w-8 {
  width: 0.5em;
}
.svg-inline--fa.fa-w-9 {
  width: 0.5625em;
}
.svg-inline--fa.fa-w-10 {
  width: 0.625em;
}
.svg-inline--fa.fa-w-11 {
  width: 0.6875em;
}
.svg-inline--fa.fa-w-12 {
  width: 0.75em;
}
.svg-inline--fa.fa-w-13 {
  width: 0.8125em;
}
.svg-inline--fa.fa-w-14 {
  width: 0.875em;
}
.svg-inline--fa.fa-w-15 {
  width: 0.9375em;
}
.svg-inline--fa.fa-w-16 {
  width: 1em;
}
.svg-inline--fa.fa-w-17 {
  width: 1.0625em;
}
.svg-inline--fa.fa-w-18 {
  width: 1.125em;
}
.svg-inline--fa.fa-w-19 {
  width: 1.1875em;
}
.svg-inline--fa.fa-w-20 {
  width: 1.25em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: 0.3em;
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: 0.3em;
  width: auto;
}
.svg-inline--fa.fa-border {
  height: 1.5em;
}
.svg-inline--fa.fa-li {
  width: 2em;
}
.svg-inline--fa.fa-fw {
  width: 1.25em;
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: #ff253a;
  border-radius: 1em;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  color: #fff;
  height: 1.5em;
  line-height: 1;
  max-width: 5em;
  min-width: 1.5em;
  overflow: hidden;
  padding: 0.25em;
  right: 0;
  text-overflow: ellipsis;
  top: 0;
  -webkit-transform: scale(0.25);
          transform: scale(0.25);
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: 0;
  right: 0;
  top: auto;
  -webkit-transform: scale(0.25);
          transform: scale(0.25);
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: 0;
  left: 0;
  right: auto;
  top: auto;
  -webkit-transform: scale(0.25);
          transform: scale(0.25);
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  right: 0;
  top: 0;
  -webkit-transform: scale(0.25);
          transform: scale(0.25);
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: 0;
  right: auto;
  top: 0;
  -webkit-transform: scale(0.25);
          transform: scale(0.25);
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-lg {
  font-size: 1.3333333333em;
  line-height: 0.75em;
  vertical-align: -0.0667em;
}

.fa-xs {
  font-size: 0.75em;
}

.fa-sm {
  font-size: 0.875em;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: 2.5em;
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: -2em;
  position: absolute;
  text-align: center;
  width: 2em;
  line-height: inherit;
}

.fa-border {
  border: solid 0.08em #eee;
  border-radius: 0.1em;
  padding: 0.2em 0.25em 0.15em;
}

.fa-pull-left {
  float: left;
}

.fa-pull-right {
  float: right;
}

.fa.fa-pull-left,
.fas.fa-pull-left,
.far.fa-pull-left,
.fal.fa-pull-left,
.fab.fa-pull-left {
  margin-right: 0.3em;
}
.fa.fa-pull-right,
.fas.fa-pull-right,
.far.fa-pull-right,
.fal.fa-pull-right,
.fab.fa-pull-right {
  margin-left: 0.3em;
}

.fa-spin {
  -webkit-animation: fa-spin 2s infinite linear;
          animation: fa-spin 2s infinite linear;
}

.fa-pulse {
  -webkit-animation: fa-spin 1s infinite steps(8);
          animation: fa-spin 1s infinite steps(8);
}

@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}

@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=1)";
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2)";
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=3)";
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)";
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)";
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both, .fa-flip-horizontal.fa-flip-vertical {
  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)";
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

:root .fa-rotate-90,
:root .fa-rotate-180,
:root .fa-rotate-270,
:root .fa-flip-horizontal,
:root .fa-flip-vertical,
:root .fa-flip-both {
  -webkit-filter: none;
          filter: none;
}

.fa-stack {
  display: inline-block;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: #fff;
}

.sr-only {
  border: 0;
  clip: rect(0, 0, 0, 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
}

.sr-only-focusable:active, .sr-only-focusable:focus {
  clip: auto;
  height: auto;
  margin: 0;
  overflow: visible;
  position: static;
  width: auto;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: 1;
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: 0.4;
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: 0.4;
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: 1;
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse {
  color: #fff;
}`;function e2(){var t=Jm,e=Xm,n=ze.familyPrefix,i=ze.replacementClass,r=ZT;if(n!==t||i!==e){var s=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),a=new RegExp("\\.".concat(e),"g");r=r.replace(s,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(a,".".concat(i))}return r}var t2=function(){function t(){bT(this,t),this.definitions={}}return wT(t,[{key:"add",value:function(){for(var n=this,i=arguments.length,r=new Array(i),s=0;s<i;s++)r[s]=arguments[s];var o=r.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(a){n.definitions[a]=ee({},n.definitions[a]||{},o[a]),ig(a,o[a]),rg()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,i){var r=i.prefix&&i.iconName&&i.icon?{0:i}:i;return Object.keys(r).map(function(s){var o=r[s],a=o.prefix,l=o.iconName,c=o.icon;n[a]||(n[a]={}),n[a][l]=c}),n}}]),t}();function ag(){ze.autoAddCss&&!ef&&(WT(e2()),ef=!0)}function lg(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(i){return sg(i)})}}),Object.defineProperty(t,"node",{get:function(){if(!!Mc){var i=je.createElement("div");return i.innerHTML=t.html,i.children}}}),t}function Zd(t){var e=t.prefix,n=e===void 0?"fa":e,i=t.iconName;if(!!i)return Jd(i2.definitions,n,i)||Jd(St.styles,n,i)}function n2(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=(e||{}).icon?e:Zd(e||{}),r=n.mask;return r&&(r=(r||{}).icon?r:Zd(r||{})),t(i,ee({},n,{mask:r}))}}var i2=new t2,ef=!1,cg={transform:function(e){return XT(e)}},r2=n2(function(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.transform,i=n===void 0?fn:n,r=e.symbol,s=r===void 0?!1:r,o=e.mask,a=o===void 0?null:o,l=e.maskId,c=l===void 0?null:l,u=e.title,d=u===void 0?null:u,f=e.titleId,p=f===void 0?null:f,g=e.classes,C=g===void 0?[]:g,b=e.attributes,v=b===void 0?{}:b,E=e.styles,x=E===void 0?{}:E;if(!!t){var M=t.prefix,K=t.iconName,Z=t.icon;return lg(ee({type:"icon"},t),function(){return ag(),ze.autoA11y&&(d?v["aria-labelledby"]="".concat(ze.replacementClass,"-title-").concat(p||$s()):(v["aria-hidden"]="true",v.focusable="false")),KT({icons:{main:Xd(Z),mask:a?Xd(a.icon):{found:!1,width:null,height:null,icon:{}}},prefix:M,iconName:K,transform:ee({},fn,i),symbol:s,title:d,maskId:c,titleId:p,extra:{attributes:v,styles:x,classes:C}})})}}),s2=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=n.transform,r=i===void 0?fn:i,s=n.title,o=s===void 0?null:s,a=n.classes,l=a===void 0?[]:a,c=n.attributes,u=c===void 0?{}:c,d=n.styles,f=d===void 0?{}:d;return lg({type:"text",content:e},function(){return ag(),YT({content:e,transform:ee({},fn,r),title:o,extra:{attributes:u,styles:f,classes:["".concat(ze.familyPrefix,"-layers-text")].concat(ET(l))}})})},o2=typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{};function a2(t,e){return e={exports:{}},t(e,e.exports),e.exports}var l2=a2(function(t){(function(e){var n=function(v,E,x){if(!c(E)||d(E)||f(E)||p(E)||l(E))return E;var M,K=0,Z=0;if(u(E))for(M=[],Z=E.length;K<Z;K++)M.push(n(v,E[K],x));else{M={};for(var z in E)Object.prototype.hasOwnProperty.call(E,z)&&(M[v(z,x)]=n(v,E[z],x))}return M},i=function(v,E){E=E||{};var x=E.separator||"_",M=E.split||/(?=[A-Z])/;return v.split(M).join(x)},r=function(v){return g(v)?v:(v=v.replace(/[\-_\s]+(.)?/g,function(E,x){return x?x.toUpperCase():""}),v.substr(0,1).toLowerCase()+v.substr(1))},s=function(v){var E=r(v);return E.substr(0,1).toUpperCase()+E.substr(1)},o=function(v,E){return i(v,E).toLowerCase()},a=Object.prototype.toString,l=function(v){return typeof v=="function"},c=function(v){return v===Object(v)},u=function(v){return a.call(v)=="[object Array]"},d=function(v){return a.call(v)=="[object Date]"},f=function(v){return a.call(v)=="[object RegExp]"},p=function(v){return a.call(v)=="[object Boolean]"},g=function(v){return v=v-0,v===v},C=function(v,E){var x=E&&"process"in E?E.process:E;return typeof x!="function"?v:function(M,K){return x(M,v,K)}},b={camelize:r,decamelize:o,pascalize:s,depascalize:o,camelizeKeys:function(v,E){return n(C(r,E),v)},decamelizeKeys:function(v,E){return n(C(o,E),v,E)},pascalizeKeys:function(v,E){return n(C(s,E),v)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};t.exports?t.exports=b:e.humps=b})(o2)}),c2=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},sr=function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t},qs=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},u2=function(t,e){var n={};for(var i in t)e.indexOf(i)>=0||!Object.prototype.hasOwnProperty.call(t,i)||(n[i]=t[i]);return n},el=function(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}else return Array.from(t)};function d2(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var i=n.indexOf(":"),r=l2.camelize(n.slice(0,i)),s=n.slice(i+1).trim();return e[r]=s,e},{})}function f2(t){return t.split(/\s+/).reduce(function(e,n){return e[n]=!0,e},{})}function Uc(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var i=(t.children||[]).map(function(l){return Uc(l)}),r=Object.keys(t.attributes||{}).reduce(function(l,c){var u=t.attributes[c];switch(c){case"class":l.class=f2(u);break;case"style":l.style=d2(u);break;default:l.attrs[c]=u}return l},{attrs:{},class:{},style:{}});n.class;var s=n.style,o=s===void 0?{}:s,a=u2(n,["class","style"]);return Wr(t.tag,qs({},e,{class:r.class,style:qs({},r.style,o)},r.attrs,a),i)}var ug=!1;try{ug=!0}catch{}function h2(){if(!ug&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function _r(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?sr({},t,e):{}}function p2(t){var e,n=(e={"fa-spin":t.spin,"fa-pulse":t.pulse,"fa-fw":t.fixedWidth,"fa-border":t.border,"fa-li":t.listItem,"fa-inverse":t.inverse,"fa-flip-horizontal":t.flip==="horizontal"||t.flip==="both","fa-flip-vertical":t.flip==="vertical"||t.flip==="both"},sr(e,"fa-"+t.size,t.size!==null),sr(e,"fa-rotate-"+t.rotation,t.rotation!==null),sr(e,"fa-pull-"+t.pull,t.pull!==null),sr(e,"fa-swap-opacity",t.swapOpacity),e);return Object.keys(n).map(function(i){return n[i]?i:null}).filter(function(i){return i})}function tf(t){if(t===null)return null;if((typeof t=="undefined"?"undefined":c2(t))==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}var LS=Ur({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:String,default:null,validator:function(e){return["horizontal","vertical","both"].indexOf(e)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(e){return["right","left"].indexOf(e)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(e){return[90,180,270].indexOf(Number.parseInt(e,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(e){return["lg","xs","sm","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(e)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1}},setup:function(e,n){var i=n.attrs,r=Te(function(){return tf(e.icon)}),s=Te(function(){return _r("classes",p2(e))}),o=Te(function(){return _r("transform",typeof e.transform=="string"?cg.transform(e.transform):e.transform)}),a=Te(function(){return _r("mask",tf(e.mask))}),l=Te(function(){return r2(r.value,qs({},s.value,o.value,a.value,{symbol:e.symbol,title:e.title}))});Mn(l,function(u){if(!u)return h2("Could not find one or more icon(s)",r.value,a.value)},{immediate:!0});var c=Te(function(){return l.value?Uc(l.value.abstract[0],{},i):null});return function(){return c.value}}});Ur({name:"FontAwesomeLayers",props:{fixedWidth:{type:Boolean,default:!1}},setup:function(e,n){var i=n.slots,r=ze.familyPrefix,s=Te(function(){return[r+"-layers"].concat(el(e.fixedWidth?[r+"-fw"]:[]))});return function(){return Wr("div",{class:s.value},i.default?i.default():[])}}});Ur({name:"FontAwesomeLayersText",props:{value:{type:[String,Number],default:""},transform:{type:[String,Object],default:null},counter:{type:Boolean,default:!1},position:{type:String,default:null,validator:function(e){return["bottom-left","bottom-right","top-left","top-right"].indexOf(e)>-1}}},setup:function(e,n){var i=n.attrs,r=ze.familyPrefix,s=Te(function(){return _r("classes",[].concat(el(e.counter?[r+"-layers-counter"]:[]),el(e.position?[r+"-layers-"+e.position]:[])))}),o=Te(function(){return _r("transform",typeof e.transform=="string"?cg.transform(e.transform):e.transform)}),a=Te(function(){var c=s2(e.value.toString(),qs({},o.value,s.value)),u=c.abstract;return e.counter&&(u[0].attributes.class=u[0].attributes.class.replace("fa-layers-text","")),u[0]}),l=Te(function(){return Uc(a.value,{},i)});return function(){return l.value}}});/*!
 * Font Awesome Free 5.15.4 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 */var FS={prefix:"fas",iconName:"angle-down",icon:[320,512,[],"f107","M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z"]},US={prefix:"fas",iconName:"edit",icon:[576,512,[],"f044","M402.6 83.2l90.2 90.2c3.8 3.8 3.8 10 0 13.8L274.4 405.6l-92.8 10.3c-12.4 1.4-22.9-9.1-21.5-21.5l10.3-92.8L388.8 83.2c3.8-3.8 10-3.8 13.8 0zm162-22.9l-48.8-48.8c-15.2-15.2-39.9-15.2-55.2 0l-35.4 35.4c-3.8 3.8-3.8 10 0 13.8l90.2 90.2c3.8 3.8 10 3.8 13.8 0l35.4-35.4c15.2-15.3 15.2-40 0-55.2zM384 346.2V448H64V128h229.8c3.2 0 6.2-1.3 8.5-3.5l40-40c7.6-7.6 2.2-20.5-8.5-20.5H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V306.2c0-10.7-12.9-16-20.5-8.5l-40 40c-2.2 2.3-3.5 5.3-3.5 8.5z"]},WS={prefix:"fas",iconName:"flushed",icon:[496,512,[],"f579","M344 200c-13.3 0-24 10.7-24 24s10.7 24 24 24 24-10.7 24-24-10.7-24-24-24zm-192 0c-13.3 0-24 10.7-24 24s10.7 24 24 24 24-10.7 24-24-10.7-24-24-24zM248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zM80 224c0-39.8 32.2-72 72-72s72 32.2 72 72-32.2 72-72 72-72-32.2-72-72zm232 176H184c-21.2 0-21.2-32 0-32h128c21.2 0 21.2 32 0 32zm32-104c-39.8 0-72-32.2-72-72s32.2-72 72-72 72 32.2 72 72-32.2 72-72 72z"]},HS={prefix:"fas",iconName:"grin-tears",icon:[640,512,[],"f588","M102.4 256.1c-22.6 3.2-73.5 12-88.3 26.8-19.1 19.1-18.8 50.6.8 70.2s51 19.9 70.2.7c14.8-14.8 23.5-65.7 26.8-88.3.8-5.5-3.9-10.2-9.5-9.4zm523.4 26.8c-14.8-14.8-65.7-23.5-88.3-26.8-5.5-.8-10.3 3.9-9.5 9.5 3.2 22.6 12 73.5 26.8 88.3 19.2 19.2 50.6 18.9 70.2-.7s20-51.2.8-70.3zm-129.4-12.8c-3.8-26.6 19.1-49.5 45.7-45.7 8.9 1.3 16.8 2.7 24.3 4.1C552.7 104.5 447.7 8 320 8S87.3 104.5 73.6 228.5c7.5-1.4 15.4-2.8 24.3-4.1 33.2-3.9 48.6 25.3 45.7 45.7-11.8 82.3-29.9 100.4-35.8 106.4-.9.9-2 1.6-3 2.5 42.7 74.6 123 125 215.2 125s172.5-50.4 215.2-125.1c-1-.9-2.1-1.5-3-2.5-5.9-5.9-24-24-35.8-106.3zM400 152c23.8 0 52.7 29.3 56 71.4.7 8.6-10.8 12-14.9 4.5l-9.5-17c-7.7-13.7-19.2-21.6-31.5-21.6s-23.8 7.9-31.5 21.6l-9.5 17c-4.2 7.4-15.6 4-14.9-4.5 3.1-42.1 32-71.4 55.8-71.4zm-160 0c23.8 0 52.7 29.3 56 71.4.7 8.6-10.8 12-14.9 4.5l-9.5-17c-7.7-13.7-19.2-21.6-31.5-21.6s-23.8 7.9-31.5 21.6l-9.5 17c-4.2 7.4-15.6 4-14.9-4.5 3.1-42.1 32-71.4 55.8-71.4zm80 280c-60.6 0-134.5-38.3-143.8-93.3-2-11.7 9.2-21.6 20.7-17.9C227.1 330.5 272 336 320 336s92.9-5.5 123.1-15.2c11.4-3.7 22.6 6.1 20.7 17.9-9.3 55-83.2 93.3-143.8 93.3z"]},BS={prefix:"fas",iconName:"grin-tongue-wink",icon:[496,512,[],"f58b","M344 184c-13.3 0-24 10.7-24 24s10.7 24 24 24 24-10.7 24-24-10.7-24-24-24zM248 8C111 8 0 119 0 256c0 106.3 67 196.7 161 232-5.6-12.2-9-25.7-9-40v-45.5c-24.7-16.2-43.5-38.1-47.8-63.8-2-11.8 9.3-21.5 20.7-17.9C155.1 330.5 200 336 248 336s92.9-5.5 123.1-15.2c11.5-3.7 22.6 6.1 20.7 17.9-4.3 25.7-23.1 47.6-47.8 63.8V448c0 14.3-3.4 27.8-9 40 94-35.3 161-125.7 161-232C496 119 385 8 248 8zm-56 225l-9.5-8.5c-14.8-13.2-46.2-13.2-61 0L112 233c-8.5 7.4-21.6.3-19.8-10.8 4-25.2 34.2-42.1 59.9-42.1S208 197 212 222.2c1.6 11.1-11.6 18.2-20 10.8zm152 39c-35.3 0-64-28.7-64-64s28.7-64 64-64 64 28.7 64 64-28.7 64-64 64zm-50.9 102.6c-14.4-6.5-31.1 2.2-34.6 17.6l-1.8 7.8c-2.1 9.2-15.2 9.2-17.3 0l-1.8-7.8c-3.5-15.4-20.2-24.1-34.6-17.6-.9.4.3-.2-18.9 9.4v63c0 35.2 28 64.5 63.1 64.9 35.7.5 64.9-28.4 64.9-64v-64c-19.5-9.6-18.2-8.9-19-9.3z"]},zS={prefix:"fas",iconName:"history",icon:[512,512,[],"f1da","M504 255.531c.253 136.64-111.18 248.372-247.82 248.468-59.015.042-113.223-20.53-155.822-54.911-11.077-8.94-11.905-25.541-1.839-35.607l11.267-11.267c8.609-8.609 22.353-9.551 31.891-1.984C173.062 425.135 212.781 440 256 440c101.705 0 184-82.311 184-184 0-101.705-82.311-184-184-184-48.814 0-93.149 18.969-126.068 49.932l50.754 50.754c10.08 10.08 2.941 27.314-11.313 27.314H24c-8.837 0-16-7.163-16-16V38.627c0-14.254 17.234-21.393 27.314-11.314l49.372 49.372C129.209 34.136 189.552 8 256 8c136.81 0 247.747 110.78 248 247.531zm-180.912 78.784l9.823-12.63c8.138-10.463 6.253-25.542-4.21-33.679L288 256.349V152c0-13.255-10.745-24-24-24h-16c-13.255 0-24 10.745-24 24v135.651l65.409 50.874c10.463 8.137 25.541 6.253 33.679-4.21z"]},VS={prefix:"fas",iconName:"info-circle",icon:[512,512,[],"f05a","M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z"]},jS={prefix:"fas",iconName:"laptop",icon:[640,512,[],"f109","M624 416H381.54c-.74 19.81-14.71 32-32.74 32H288c-18.69 0-33.02-17.47-32.77-32H16c-8.8 0-16 7.2-16 16v16c0 35.2 28.8 64 64 64h512c35.2 0 64-28.8 64-64v-16c0-8.8-7.2-16-16-16zM576 48c0-26.4-21.6-48-48-48H112C85.6 0 64 21.6 64 48v336h512V48zm-64 272H128V64h384v256z"]},$S={prefix:"fas",iconName:"mobile-alt",icon:[320,512,[],"f3cd","M272 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM160 480c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm112-108c0 6.6-5.4 12-12 12H60c-6.6 0-12-5.4-12-12V60c0-6.6 5.4-12 12-12h200c6.6 0 12 5.4 12 12v312z"]},qS={prefix:"fas",iconName:"play",icon:[448,512,[],"f04b","M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"]},GS={prefix:"fas",iconName:"play-circle",icon:[512,512,[],"f144","M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm115.7 272l-176 101c-15.8 8.8-35.7-2.5-35.7-21V152c0-18.4 19.8-29.8 35.7-21l176 107c16.4 9.2 16.4 32.9 0 42z"]},KS={prefix:"fas",iconName:"plus-circle",icon:[512,512,[],"f055","M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm144 276c0 6.6-5.4 12-12 12h-92v92c0 6.6-5.4 12-12 12h-56c-6.6 0-12-5.4-12-12v-92h-92c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h92v-92c0-6.6 5.4-12 12-12h56c6.6 0 12 5.4 12 12v92h92c6.6 0 12 5.4 12 12v56z"]},YS={prefix:"fas",iconName:"plus-square",icon:[448,512,[],"f0fe","M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-32 252c0 6.6-5.4 12-12 12h-92v92c0 6.6-5.4 12-12 12h-56c-6.6 0-12-5.4-12-12v-92H92c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h92v-92c0-6.6 5.4-12 12-12h56c6.6 0 12 5.4 12 12v92h92c6.6 0 12 5.4 12 12v56z"]},QS={prefix:"fas",iconName:"search",icon:[512,512,[],"f002","M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"]},JS={prefix:"fas",iconName:"smile",icon:[496,512,[],"f118","M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm80 168c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32 14.3-32 32-32zm-160 0c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32 14.3-32 32-32zm194.8 170.2C334.3 380.4 292.5 400 248 400s-86.3-19.6-114.8-53.8c-13.6-16.3 11-36.7 24.6-20.5 22.4 26.9 55.2 42.2 90.2 42.2s67.8-15.4 90.2-42.2c13.4-16.2 38.1 4.2 24.6 20.5z"]},XS={prefix:"fas",iconName:"times",icon:[352,512,[],"f00d","M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"]},ZS={prefix:"fas",iconName:"times-circle",icon:[512,512,[],"f057","M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z"]},eA={prefix:"fas",iconName:"tv",icon:[640,512,[],"f26c","M592 0H48A48 48 0 0 0 0 48v320a48 48 0 0 0 48 48h240v32H112a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16H352v-32h240a48 48 0 0 0 48-48V48a48 48 0 0 0-48-48zm-16 352H64V64h512z"]},tA={prefix:"fas",iconName:"volume-mute",icon:[512,512,[],"f6a9","M215.03 71.05L126.06 160H24c-13.26 0-24 10.74-24 24v144c0 13.25 10.74 24 24 24h102.06l88.97 88.95c15.03 15.03 40.97 4.47 40.97-16.97V88.02c0-21.46-25.96-31.98-40.97-16.97zM461.64 256l45.64-45.64c6.3-6.3 6.3-16.52 0-22.82l-22.82-22.82c-6.3-6.3-16.52-6.3-22.82 0L416 210.36l-45.64-45.64c-6.3-6.3-16.52-6.3-22.82 0l-22.82 22.82c-6.3 6.3-6.3 16.52 0 22.82L370.36 256l-45.63 45.63c-6.3 6.3-6.3 16.52 0 22.82l22.82 22.82c6.3 6.3 16.52 6.3 22.82 0L416 301.64l45.64 45.64c6.3 6.3 16.52 6.3 22.82 0l22.82-22.82c6.3-6.3 6.3-16.52 0-22.82L461.64 256z"]},nA={prefix:"fas",iconName:"volume-up",icon:[576,512,[],"f028","M215.03 71.05L126.06 160H24c-13.26 0-24 10.74-24 24v144c0 13.25 10.74 24 24 24h102.06l88.97 88.95c15.03 15.03 40.97 4.47 40.97-16.97V88.02c0-21.46-25.96-31.98-40.97-16.97zm233.32-51.08c-11.17-7.33-26.18-4.24-33.51 6.95-7.34 11.17-4.22 26.18 6.95 33.51 66.27 43.49 105.82 116.6 105.82 195.58 0 78.98-39.55 152.09-105.82 195.58-11.17 7.32-14.29 22.34-6.95 33.5 7.04 10.71 21.93 14.56 33.51 6.95C528.27 439.58 576 351.33 576 256S528.27 72.43 448.35 19.97zM480 256c0-63.53-32.06-121.94-85.77-156.24-11.19-7.14-26.03-3.82-33.12 7.46s-3.78 26.21 7.41 33.36C408.27 165.97 432 209.11 432 256s-23.73 90.03-63.48 115.42c-11.19 7.14-14.5 22.07-7.41 33.36 6.51 10.36 21.12 15.14 33.12 7.46C447.94 377.94 480 319.54 480 256zm-141.77-76.87c-11.58-6.33-26.19-2.16-32.61 9.45-6.39 11.61-2.16 26.2 9.45 32.61C327.98 228.28 336 241.63 336 256c0 14.38-8.02 27.72-20.92 34.81-11.61 6.41-15.84 21-9.45 32.61 6.43 11.66 21.05 15.8 32.61 9.45 28.23-15.55 45.77-45 45.77-76.88s-17.54-61.32-45.78-76.86z"]};export{XS as $,NS as A,aS as B,kS as C,x2 as D,DS as E,lt as F,hw as G,i2 as H,jS as I,eA as J,$S as K,YS as L,JS as M,WS as N,BS as O,HS as P,US as Q,qS as R,VS as S,tA as T,nA as U,zS as V,GS as W,KS as X,ZS as Y,QS as Z,FS as _,O2 as a,q0 as a$,R2 as a0,LS as a1,Q2 as a2,D2 as a3,bb as a4,Br as a5,Wh as a6,Nl as a7,Ft as a8,_w as a9,bI as aA,tr as aB,_i as aC,W2 as aD,B2 as aE,G2 as aF,b0 as aG,q2 as aH,Y2 as aI,Yn as aJ,oS as aK,eS as aL,X2 as aM,ub as aN,Hh as aO,M2 as aP,ES as aQ,J2 as aR,$2 as aS,z2 as aT,Wl as aU,j2 as aV,Z2 as aW,fS as aX,gS as aY,bS as aZ,K2 as a_,gw as aa,Ui as ab,L2 as ac,kt as ad,zn as ae,qh as af,Bn as ag,mw as ah,ao as ai,lw as aj,qe as ak,Cp as al,Mp as am,Xe as an,yS as ao,rt as ap,Mt as aq,M0 as ar,hs as as,H2 as at,Bt as au,co as av,op as aw,rd as ax,II as ay,k as az,Te as b,Ku as b0,U2 as b1,Jn as b2,an as b3,cn as b4,ln as b5,ps as b6,Pa as b7,QI as b8,un as b9,KI as bA,SS as bB,qm as bC,RS as bD,AS as bE,Bf as bF,Xg as bG,uh as bH,b2 as bI,A2 as bJ,Vf as bK,g2 as bL,_2 as bM,lS as bN,xS as bO,OS as bP,PS as bQ,$r as ba,He as bb,_o as bc,db as bd,fb as be,cS as bf,F2 as bg,Pr as bh,Vt as bi,uS as bj,_0 as bk,hS as bl,vS as bm,IS as bn,v0 as bo,pS as bp,_S as bq,wS as br,tS as bs,V2 as bt,rS as bu,sS as bv,mS as bw,iS as bx,nS as by,dS as bz,ih as c,w2 as d,C2 as e,sh as f,Ye as g,K_ as h,Jg as i,v2 as j,S2 as k,E2 as l,or as m,il as n,th as o,I2 as p,N2 as q,y2 as r,k2 as s,m2 as t,P2 as u,T2 as v,c_ as w,CS as x,MS as y,TS as z};
