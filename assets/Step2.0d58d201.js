import{S as Me}from"./SignUpNav.a7f29a73.js";import{C as Ve}from"./ContinueBtn.0c5e7f29.js";import{_ as ge}from"./index.c4540256.js";import{a3 as Be,a4 as xe,a5 as fe,a6 as B,a7 as He,a8 as _e,a9 as ze,aa as Ge,ab as $e,ac as Ye,ad as re,G as Ke,ae as qe,af as se,ag as ve,ah as je,ai as x,aj as Je,ak as H,al as E,am as me,an as W,ao as Ze,ap as M,aq as U,ar as J,as as Z,at as Xe,au as ye,av as Ie,aw as X,ax as Qe,ay as et,az as v,aA as tt,aB as nt,aC as C,aD as it,aE as rt,aF as st,aG as at,aH as ot,aI as be,aJ as A,aK as lt,aL as dt,aM as ut,aN as ct,aO as Ee,aP as Pe,aQ as pt,aR as ht,aS as gt,aT as ft,aU as _t,aV as vt,a2 as mt,aW as yt,aX as It,aY as bt,aZ as Et,a_ as Pt,a$ as S,b0 as F,b1 as b,b2 as wt,b3 as we,b4 as Re,b5 as Ae,b6 as Ce,b7 as Rt,b8 as At,b9 as Se,ba as Ct,bb as Q,bc as St,bd as kt,be as z,bf as Nt,bg as P,bh as Ot,bi as Lt,bj as Tt,bk as Ut,bl as Ft,bm as Dt,bn as Wt,bo as Mt,bp as Vt,bq as Bt,br as xt,bs as Ht,bt as zt,bu as Gt,bv as $t,bw as Yt,bx as Kt,by as qt,bz as jt,bA as Jt,a as Zt,u as Xt,i as N,o as O,d as L,f as h,j as ae,v as oe,n as _,t as le,g as G,w as Qt,k as en,F as ke,h as ee,x as tn}from"./vendor.c0c18083.js";/**
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
 */class nn{constructor(e,t){this._delegate=e,this.firebase=t,se(e,new ve("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),je(this._delegate)))}_getService(e,t=x){var i;this._delegate.checkDestroyed();const r=this._delegate.container.getProvider(e);return!r.isInitialized()&&((i=r.getComponent())===null||i===void 0?void 0:i.instantiationMode)==="EXPLICIT"&&r.initialize(),r.getImmediate({identifier:t})}_removeServiceInstance(e,t=x){this._delegate.container.getProvider(e).clearInstance(t)}_addComponent(e){se(this._delegate,e)}_addOrOverwriteComponent(e){Je(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}/**
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
 */const rn={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance."},de=new fe("app-compat","Firebase",rn);/**
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
 */function sn(n){const e={},t={__esModule:!0,initializeApp:s,app:r,registerVersion:_e,setLogLevel:ze,onLog:Ge,apps:null,SDK_VERSION:$e,INTERNAL:{registerComponent:u,removeApp:i,useAsService:c,modularAPIs:Ye}};t.default=t,Object.defineProperty(t,"apps",{get:l});function i(a){delete e[a]}function r(a){if(a=a||x,!re(e,a))throw de.create("no-app",{appName:a});return e[a]}r.App=n;function s(a,d={}){const o=Ke(a,d);if(re(e,o.name))return e[o.name];const f=new n(o,t);return e[o.name]=f,f}function l(){return Object.keys(e).map(a=>e[a])}function u(a){const d=a.name,o=d.replace("-compat","");if(qe(a)&&a.type==="PUBLIC"){const f=(k=r())=>{if(typeof k[o]!="function")throw de.create("invalid-app-argument",{appName:d});return k[o]()};a.serviceProps!==void 0&&B(f,a.serviceProps),t[o]=f,n.prototype[o]=function(...k){return this._getService.bind(this,d).apply(this,a.multipleInstances?k:[])}}return a.type==="PUBLIC"?t[o]:null}function c(a,d){return d==="serverAuth"?null:d}return t}/**
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
 */function Ne(){const n=sn(nn);n.INTERNAL=Object.assign(Object.assign({},n.INTERNAL),{createFirebaseNamespace:Ne,extendNamespace:e,createSubscribe:xe,ErrorFactory:fe,deepExtend:B});function e(t){B(n,t)}return n}const an=Ne();/**
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
 */const ue=new He("@firebase/app-compat"),on="@firebase/app-compat",ln="0.1.20";/**
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
 */function dn(n){_e(on,ln,n)}/**
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
 */if(Be()&&self.firebase!==void 0){ue.warn(`
    Warning: Firebase is already defined in the global scope. Please make sure
    Firebase library is only loaded once.
  `);const n=self.firebase.SDK_VERSION;n&&n.indexOf("LITE")>=0&&ue.warn(`
    Warning: You are trying to load Firebase while using Firebase Performance standalone script.
    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
    `)}const te=an;dn();/**
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
 */function I(){return window}/**
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
 */const un=2e3;async function cn(n,e,t){var i;const{BuildInfo:r}=I();ye(e.sessionId,"AuthEvent did not contain a session ID");const s=await _n(e.sessionId),l={};return Ie()?l.ibi=r.packageName:X()?l.apn=r.packageName:W(n,"operation-not-supported-in-this-environment"),r.displayName&&(l.appDisplayName=r.displayName),l.sessionId=s,Qe(n,t,e.type,void 0,(i=e.eventId)!==null&&i!==void 0?i:void 0,l)}async function pn(n){const{BuildInfo:e}=I(),t={};Ie()?t.iosBundleId=e.packageName:X()?t.androidPackageName=e.packageName:W(n,"operation-not-supported-in-this-environment"),await et(n,t)}function hn(n){const{cordova:e}=I();return new Promise(t=>{e.plugins.browsertab.isAvailable(i=>{let r=null;i?e.plugins.browsertab.openUrl(n):r=e.InAppBrowser.open(n,Xe()?"_blank":"_system","location=yes"),t(r)})})}async function gn(n,e,t){const{cordova:i}=I();let r=()=>{};try{await new Promise((s,l)=>{let u=null;function c(){var o;s();const f=(o=i.plugins.browsertab)===null||o===void 0?void 0:o.close;typeof f=="function"&&f(),typeof(t==null?void 0:t.close)=="function"&&t.close()}function a(){u||(u=window.setTimeout(()=>{l(M(n,"redirect-cancelled-by-user"))},un))}function d(){(document==null?void 0:document.visibilityState)==="visible"&&a()}e.addPassiveListener(c),document.addEventListener("resume",a,!1),X()&&document.addEventListener("visibilitychange",d,!1),r=()=>{e.removePassiveListener(c),document.removeEventListener("resume",a,!1),document.removeEventListener("visibilitychange",d,!1),u&&window.clearTimeout(u)}})}finally{r()}}function fn(n){var e,t,i,r,s,l,u,c,a,d;const o=I();v(typeof((e=o==null?void 0:o.universalLinks)===null||e===void 0?void 0:e.subscribe)=="function",n,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),v(typeof((t=o==null?void 0:o.BuildInfo)===null||t===void 0?void 0:t.packageName)!="undefined",n,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),v(typeof((s=(r=(i=o==null?void 0:o.cordova)===null||i===void 0?void 0:i.plugins)===null||r===void 0?void 0:r.browsertab)===null||s===void 0?void 0:s.openUrl)=="function",n,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),v(typeof((c=(u=(l=o==null?void 0:o.cordova)===null||l===void 0?void 0:l.plugins)===null||u===void 0?void 0:u.browsertab)===null||c===void 0?void 0:c.isAvailable)=="function",n,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),v(typeof((d=(a=o==null?void 0:o.cordova)===null||a===void 0?void 0:a.InAppBrowser)===null||d===void 0?void 0:d.open)=="function",n,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}async function _n(n){const e=vn(n),t=await crypto.subtle.digest("SHA-256",e);return Array.from(new Uint8Array(t)).map(r=>r.toString(16).padStart(2,"0")).join("")}function vn(n){if(ye(/[0-9a-zA-Z]+/.test(n),"Can only convert alpha-numeric strings"),typeof TextEncoder!="undefined")return new TextEncoder().encode(n);const e=new ArrayBuffer(n.length),t=new Uint8Array(e);for(let i=0;i<n.length;i++)t[i]=n.charCodeAt(i);return t}/**
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
 */const mn=20;class yn extends tt{constructor(){super(...arguments);this.passiveListeners=new Set,this.initPromise=new Promise(e=>{this.resolveInialized=e})}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInialized(),this.passiveListeners.forEach(t=>t(e)),super.onEvent(e)}async initialized(){await this.initPromise}}function In(n,e,t=null){return{type:e,eventId:t,urlResponse:null,sessionId:Pn(),postBody:null,tenantId:n.tenantId,error:M(n,"no-auth-event")}}function bn(n,e){return $()._set(Y(n),e)}async function ce(n){const e=await $()._get(Y(n));return e&&await $()._remove(Y(n)),e}function En(n,e){var t,i;const r=Rn(e);if(r.includes("/__/auth/callback")){const s=T(r),l=s.firebaseError?wn(decodeURIComponent(s.firebaseError)):null,u=(i=(t=l==null?void 0:l.code)===null||t===void 0?void 0:t.split("auth/"))===null||i===void 0?void 0:i[1],c=u?M(u):null;return c?{type:n.type,eventId:n.eventId,tenantId:n.tenantId,error:c,urlResponse:null,sessionId:null,postBody:null}:{type:n.type,eventId:n.eventId,tenantId:n.tenantId,sessionId:n.sessionId,urlResponse:r,postBody:null}}return null}function Pn(){const n=[],e="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let t=0;t<mn;t++){const i=Math.floor(Math.random()*e.length);n.push(e.charAt(i))}return n.join("")}function $(){return U(J)}function Y(n){return Z("authEvent",n.config.apiKey,n.name)}function wn(n){try{return JSON.parse(n)}catch{return null}}function Rn(n){const e=T(n),t=e.link?decodeURIComponent(e.link):void 0,i=T(t).link,r=e.deep_link_id?decodeURIComponent(e.deep_link_id):void 0;return T(r).link||r||i||t||n}function T(n){if(!(n!=null&&n.includes("?")))return{};const[e,...t]=n.split("?");return nt(t.join("?"))}/**
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
 */const An=500;class Cn{constructor(){this._redirectPersistence=E,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=me}async _initialize(e){const t=e._key();let i=this.eventManagers.get(t);return i||(i=new yn(e),this.eventManagers.set(t,i),this.attachCallbackListeners(e,i)),i}_openPopup(e){W(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,t,i,r){fn(e);const s=await this._initialize(e);await s.initialized(),s.resetRedirect(),Ze(),await this._originValidation(e);const l=In(e,i,r);await bn(e,l);const u=await cn(e,l,t),c=await hn(u);return gn(e,s,c)}_isIframeWebStorageSupported(e,t){throw new Error("Method not implemented.")}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=pn(e)),this.originValidationPromises[t]}attachCallbackListeners(e,t){const{universalLinks:i,handleOpenURL:r,BuildInfo:s}=I(),l=setTimeout(async()=>{await ce(e),t.onEvent(pe())},An),u=async d=>{clearTimeout(l);const o=await ce(e);let f=null;o&&(d==null?void 0:d.url)&&(f=En(o,d.url)),t.onEvent(f||pe())};typeof i!="undefined"&&typeof i.subscribe=="function"&&i.subscribe(null,u);const c=r,a=`${s.packageName.toLowerCase()}://`;I().handleOpenURL=async d=>{if(d.toLowerCase().startsWith(a)&&u({url:d}),typeof c=="function")try{c(d)}catch(o){console.error(o)}}}}const Sn=Cn;function pe(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:M("no-auth-event")}}/**
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
 */function kn(n,e){H(n)._logFramework(e)}var Nn="@firebase/auth-compat",On="0.2.10";/**
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
 */const Ln=1e3;function D(){var n;return((n=self==null?void 0:self.location)===null||n===void 0?void 0:n.protocol)||null}function Tn(){return D()==="http:"||D()==="https:"}function Oe(n=Q()){return!!((D()==="file:"||D()==="ionic:")&&n.toLowerCase().match(/iphone|ipad|ipod|android/))}function Un(){return Ee()||Pe()}function Fn(){return kt()&&(document==null?void 0:document.documentMode)===11}function Dn(n=Q()){return/Edge\/\d+/.test(n)}function Wn(n=Q()){return Fn()||Dn(n)}function Le(){try{const n=self.localStorage,e=St();if(n)return n.setItem(e,"1"),n.removeItem(e),Wn()?z():!0}catch{return ne()&&z()}return!1}function ne(){return typeof global!="undefined"&&"WorkerGlobalScope"in global&&"importScripts"in global}function V(){return(Tn()||ct()||Oe())&&!Un()&&Le()&&!ne()}function Te(){return Oe()&&typeof document!="undefined"}async function Mn(){return Te()?new Promise(n=>{const e=setTimeout(()=>{n(!1)},Ln);document.addEventListener("deviceready",()=>{clearTimeout(e),n(!0)})}):!1}function Vn(){return typeof window!="undefined"?window:null}/**
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
 */const g={LOCAL:"local",NONE:"none",SESSION:"session"},w=v,Ue="persistence";function Bn(n,e){if(w(Object.values(g).includes(e),n,"invalid-persistence-type"),Ee()){w(e!==g.SESSION,n,"unsupported-persistence-type");return}if(Pe()){w(e===g.NONE,n,"unsupported-persistence-type");return}if(ne()){w(e===g.NONE||e===g.LOCAL&&z(),n,"unsupported-persistence-type");return}w(e===g.NONE||Le(),n,"unsupported-persistence-type")}async function K(n){await n._initializationPromise;const e=Fe(),t=Z(Ue,n.config.apiKey,n.name);e&&e.setItem(t,n._getPersistence())}function xn(n,e){const t=Fe();if(!t)return[];const i=Z(Ue,n,e);switch(t.getItem(i)){case g.NONE:return[F];case g.LOCAL:return[S,E];case g.SESSION:return[E];default:return[]}}function Fe(){var n;try{return((n=Vn())===null||n===void 0?void 0:n.sessionStorage)||null}catch{return null}}/**
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
 */const Hn=v;class y{constructor(){this.browserResolver=U(Jt),this.cordovaResolver=U(Sn),this.underlyingResolver=null,this._redirectPersistence=E,this._completeRedirectFn=me}async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,t,i,r){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,t,i,r)}async _openRedirect(e,t,i,r){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,t,i,r)}_isIframeWebStorageSupported(e,t){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,t)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return Te()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return Hn(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const e=await Mn();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}}/**
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
 */function De(n){return n.unwrap()}function zn(n){return n.wrapped()}/**
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
 */function Gn(n){return We(n)}function $n(n,e){var t;const i=(t=e.customData)===null||t===void 0?void 0:t._tokenResponse;if(e.code==="auth/multi-factor-auth-required"){const r=e;r.resolver=new Yn(n,Nt(n,e))}else if(i){const r=We(e),s=e;r&&(s.credential=r,s.tenantId=i.tenantId||void 0,s.email=i.email||void 0,s.phoneNumber=i.phoneNumber||void 0)}}function We(n){const{_tokenResponse:e}=n instanceof A?n.customData:n;if(!e)return null;if(!(n instanceof A)&&"temporaryProof"in e&&"phoneNumber"in e)return C.credentialFromResult(n);const t=e.providerId;if(!t||t===P.PASSWORD)return null;let i;switch(t){case P.GOOGLE:i=Ae;break;case P.FACEBOOK:i=we;break;case P.GITHUB:i=Re;break;case P.TWITTER:i=Se;break;default:const{oauthIdToken:r,oauthAccessToken:s,oauthTokenSecret:l,pendingToken:u,nonce:c}=e;return!s&&!l&&!r&&!u?null:u?t.startsWith("saml.")?Ot._create(t,u):Lt._fromParams({providerId:t,signInMethod:t,pendingToken:u,idToken:r,accessToken:s}):new Ce(t).credential({idToken:r,accessToken:s,rawNonce:c})}return n instanceof A?i.credentialFromError(n):i.credentialFromResult(n)}function p(n,e){return e.catch(t=>{throw t instanceof A&&$n(n,t),t}).then(t=>{const i=t.operationType,r=t.user;return{operationType:i,credential:Gn(t),additionalUserInfo:lt(t),user:m.getOrCreate(r)}})}async function q(n,e){const t=await e;return{verificationId:t.verificationId,confirm:i=>p(n,t.confirm(i))}}class Yn{constructor(e,t){this.resolver=t,this.auth=zn(e)}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return p(De(this.auth),this.resolver.resolveSignIn(e))}}/**
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
 */class m{constructor(e){this._delegate=e,this.multiFactor=Tt(e)}static getOrCreate(e){return m.USER_MAP.has(e)||m.USER_MAP.set(e,new m(e)),m.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return p(this.auth,Ut(this._delegate,e))}async linkWithPhoneNumber(e,t){return q(this.auth,Ft(this._delegate,e,t))}async linkWithPopup(e){return p(this.auth,Dt(this._delegate,e,y))}async linkWithRedirect(e){return await K(H(this.auth)),Wt(this._delegate,e,y)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return p(this.auth,Mt(this._delegate,e))}reauthenticateWithPhoneNumber(e,t){return q(this.auth,Vt(this._delegate,e,t))}reauthenticateWithPopup(e){return p(this.auth,Bt(this._delegate,e,y))}async reauthenticateWithRedirect(e){return await K(H(this.auth)),xt(this._delegate,e,y)}sendEmailVerification(e){return Ht(this._delegate,e)}async unlink(e){return await zt(this._delegate,e),this}updateEmail(e){return Gt(this._delegate,e)}updatePassword(e){return $t(this._delegate,e)}updatePhoneNumber(e){return Yt(this._delegate,e)}updateProfile(e){return Kt(this._delegate,e)}verifyBeforeUpdateEmail(e,t){return qt(this._delegate,e,t)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}}m.USER_MAP=new WeakMap;/**
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
 */const R=v;class j{constructor(e,t){if(this.app=e,t.isInitialized()){this._delegate=t.getImmediate(),this.linkUnderlyingAuth();return}const{apiKey:i}=e.options;R(i,"invalid-api-key",{appName:e.name}),R(i,"invalid-api-key",{appName:e.name});const r=typeof window!="undefined"?y:void 0;this._delegate=t.initialize({options:{persistence:Kn(i,e.name),popupRedirectResolver:r}}),this._delegate._updateErrorMap(it),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?m.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,t){rt(this._delegate,e,t)}applyActionCode(e){return st(this._delegate,e)}checkActionCode(e){return at(this._delegate,e)}confirmPasswordReset(e,t){return ot(this._delegate,e,t)}async createUserWithEmailAndPassword(e,t){return p(this._delegate,be(this._delegate,e,t))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return dt(this._delegate,e)}isSignInWithEmailLink(e){return ut(this._delegate,e)}async getRedirectResult(){R(V(),this._delegate,"operation-not-supported-in-this-environment");const e=await pt(this._delegate,y);return e?p(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){kn(this._delegate,e)}onAuthStateChanged(e,t,i){const{next:r,error:s,complete:l}=he(e,t,i);return this._delegate.onAuthStateChanged(r,s,l)}onIdTokenChanged(e,t,i){const{next:r,error:s,complete:l}=he(e,t,i);return this._delegate.onIdTokenChanged(r,s,l)}sendSignInLinkToEmail(e,t){return ht(this._delegate,e,t)}sendPasswordResetEmail(e,t){return gt(this._delegate,e,t||void 0)}async setPersistence(e){Bn(this._delegate,e);let t;switch(e){case g.SESSION:t=E;break;case g.LOCAL:t=await U(S)._isAvailable()?S:J;break;case g.NONE:t=F;break;default:return W("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(t)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return p(this._delegate,ft(this._delegate))}signInWithCredential(e){return p(this._delegate,_t(this._delegate,e))}signInWithCustomToken(e){return p(this._delegate,vt(this._delegate,e))}signInWithEmailAndPassword(e,t){return p(this._delegate,mt(this._delegate,e,t))}signInWithEmailLink(e,t){return p(this._delegate,yt(this._delegate,e,t))}signInWithPhoneNumber(e,t){return q(this._delegate,It(this._delegate,e,t))}async signInWithPopup(e){return R(V(),this._delegate,"operation-not-supported-in-this-environment"),p(this._delegate,bt(this._delegate,e,y))}async signInWithRedirect(e){return R(V(),this._delegate,"operation-not-supported-in-this-environment"),await K(this._delegate),Et(this._delegate,e,y)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return Pt(this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}j.Persistence=g;function he(n,e,t){let i=n;typeof n!="function"&&({next:i,error:e,complete:t}=n);const r=i;return{next:l=>r(l&&m.getOrCreate(l)),error:e,complete:t}}function Kn(n,e){const t=xn(n,e);if(typeof self!="undefined"&&!t.includes(S)&&t.push(S),typeof window!="undefined")for(const i of[J,E])t.includes(i)||t.push(i);return t.includes(F)||t.push(F),t}/**
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
 */class ie{constructor(){this.providerId="phone",this._delegate=new C(De(te.auth()))}static credential(e,t){return C.credential(e,t)}verifyPhoneNumber(e,t){return this._delegate.verifyPhoneNumber(e,t)}unwrap(){return this._delegate}}ie.PHONE_SIGN_IN_METHOD=C.PHONE_SIGN_IN_METHOD;ie.PROVIDER_ID=C.PROVIDER_ID;/**
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
 */const qn=v;class jn{constructor(e,t,i=te.app()){var r;qn((r=i.options)===null||r===void 0?void 0:r.apiKey,"invalid-api-key",{appName:i.name}),this._delegate=new jt(e,t,i.auth()),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}/**
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
 */const Jn="auth-compat";function Zn(n){n.INTERNAL.registerComponent(new ve(Jn,e=>{const t=e.getProvider("app-compat").getImmediate(),i=e.getProvider("auth");return new j(t,i)},"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:b.EMAIL_SIGNIN,PASSWORD_RESET:b.PASSWORD_RESET,RECOVER_EMAIL:b.RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:b.REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:b.VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:b.VERIFY_EMAIL}},EmailAuthProvider:wt,FacebookAuthProvider:we,GithubAuthProvider:Re,GoogleAuthProvider:Ae,OAuthProvider:Ce,SAMLAuthProvider:Rt,PhoneAuthProvider:ie,PhoneMultiFactorGenerator:At,RecaptchaVerifier:jn,TwitterAuthProvider:Se,Auth:j,AuthCredential:Ct,Error:A}).setInstantiationMode("LAZY").setMultipleInstances(!1)),n.registerVersion(Nn,On)}Zn(te);const Xn="_formInput_3yqar_5",Qn="_error_3yqar_21",ei="_accountCreated_3yqar_25";var ti={formInput:Xn,error:Qn,accountCreated:ei};const ni=h("label",{for:"Email"},"Email:",-1),ii=["onSubmit"],ri=h("label",{for:"Email"},"Password:",-1),si=ee("Continue"),ai={setup(n){const e=Zt(),t=Xt(),i=N(e.state.userData.signUpUserEmail),r=N(null),s=N(null),l=N(null);function u(){const c=tn();be(c,i.value,r.value).then(()=>{s.value=null,l.value="Account Created. You are being redirected to the sign in page",setTimeout(()=>{t.push({name:"SignIn"})},2e3)}).catch(a=>{a&&(s.value=a)})}return(c,a)=>(O(),L(ke,null,[ni,h("form",{onSubmit:en(u,["prevent"])},[ae(h("input",{type:"email",placeholder:"E-mail",required:"",class:_(c.classes.formInput),"onUpdate:modelValue":a[0]||(a[0]=d=>i.value=d)},null,2),[[oe,i.value]]),ri,ae(h("input",{type:"password",placeholder:"Password",minlength:"6",maxlength:"60",required:"",class:_(c.classes.formInput),"onUpdate:modelValue":a[1]||(a[1]=d=>r.value=d)},null,2),[[oe,r.value]]),s.value?(O(),L("p",{key:0,class:_(c.classes.error)},le(s.value),3)):(O(),L("p",{key:1,class:_(c.classes.accountCreated)},le(l.value),3)),G(Ve,null,{default:Qt(()=>[si]),_:1})],40,ii)],64))}},oi={classes:ti};var li=ge(ai,[["__cssModules",oi]]);const di="_setUpAccount_lkcfi_1",ui="_infoParagraph_lkcfi_12",ci="_span_lkcfi_16",pi="_infoHeading_lkcfi_20",hi="_infoHeadingSecondary_lkcfi_25",gi="_signUpForm_lkcfi_30";var fi={setUpAccount:di,infoParagraph:ui,span:ci,infoHeading:pi,infoHeadingSecondary:hi,signUpForm:gi};const _i={class:"container"},vi=ee(" Step "),mi=ee(" of "),yi={setup(n){return(e,t)=>(O(),L(ke,null,[G(Me),h("div",_i,[h("main",{class:_(e.classes.setUpAccount)},[h("p",{class:_(e.classes.infoParagraph)},[vi,h("span",{class:_(e.classes.span)},"2",2),mi,h("span",{class:_(e.classes.span)},"2",2)],2),h("h1",{class:_(e.classes.infoHeading)},"Finish setting up your account",2),h("h2",{class:_(e.classes.infoHeadingSecondary)}," Netflix is personalised for you. Create a password to watch Netflix on any device at any time. ",2),h("div",{class:_(e.classes.signUpForm)},[G(li)],2)],2)])],64))}},Ii={classes:fi};var Ai=ge(yi,[["__cssModules",Ii]]);export{Ai as default};
