(()=>{var N={};var ue=(e,n)=>e===n,ke=Symbol("solid-proxy"),A={equals:ue},H=null,ce=X,b={},p=1,E=2,V={owned:null,cleanups:null,context:null,owner:null},[Ce,q]=z(!1),u=null,l=null,B=null,c=null,S=null,a=null,d=null,P=0;function U(e,n){n&&(u=n);let t=c,s=u,i=e.length===0?V:{owned:null,cleanups:null,context:null,owner:s};u=i,c=null;let r;try{T(()=>r=e(()=>k(i)),!0)}finally{c=t,u=s}return r}function z(e,n){n=n?Object.assign({},A,n):A;let t={value:e,observers:null,observerSlots:null,pending:b,comparator:n.equals||void 0};return[K.bind(t),s=>(typeof s=="function"&&(l&&l.running&&l.sources.has(t)?s=s(t.pending!==b?t.pending:t.tValue):s=s(t.pending!==b?t.pending:t.value)),F(t,s))]}function ae(e,n,t){v(j(e,n,!0,p))}function w(e,n,t){v(j(e,n,!1,p))}function L(e,n,t){t=t?Object.assign({},A,t):A;let s=j(e,n,!0,0);return s.pending=b,s.observers=null,s.observerSlots=null,s.comparator=t.equals||void 0,v(s),K.bind(s)}function W(e){if(S)return e();let n,t=S=[];try{n=e()}finally{S=null}return T(()=>{for(let s=0;s<t.length;s+=1){let i=t[s];if(i.pending!==b){let r=i.pending;i.pending=b,F(i,r)}}},!1),n}function M(e){let n,t=c;return c=null,n=e(),c=t,n}function de(e){let n=Symbol("context");return{id:n,Provider:me(n),defaultValue:e}}function he(e){let n=L(e);return L(()=>D(n()))}function K(){if(this.state&&this.sources){let e=a;a=null,this.state===p||l&&l.running&&this.tState?v(this):_(this),a=e}if(c){let e=this.observers?this.observers.length:0;c.sources?(c.sources.push(this),c.sourceSlots.push(e)):(c.sources=[this],c.sourceSlots=[e]),this.observers?(this.observers.push(c),this.observerSlots.push(c.sources.length-1)):(this.observers=[c],this.observerSlots=[c.sources.length-1])}return l&&l.running&&l.sources.has(this)?this.tValue:this.value}function F(e,n,t){if(e.comparator){if(l&&l.running&&l.sources.has(e)){if(e.comparator(e.tValue,n))return n}else if(e.comparator(e.value,n))return n}if(S)return e.pending===b&&S.push(e),e.pending=n,n;let s=!1;return l?(s=l.running,(s||!t&&l.sources.has(e))&&(l.sources.add(e),e.tValue=n),s||(e.value=n)):e.value=n,e.observers&&(!a||e.observers.length)&&T(()=>{for(let i=0;i<e.observers.length;i+=1){let r=e.observers[i];s&&l.disposed.has(r)||(r.observers&&r.state!==E&&Q(r),s?r.tState=p:r.state=p,r.pure?a.push(r):d.push(r))}if(a.length>1e6)throw a=[],new Error},!1),n}function v(e){if(!e.fn)return;k(e);let n=u,t=c,s=P;c=u=e,Y(e,e.value,s),l&&!l.running&&l.sources.has(e)&&(l.running=!0,Y(e,e.tValue,s),l.running=!1),c=t,u=n}function Y(e,n,t){let s;try{s=e.fn(n)}catch(i){Z(i)}(!e.updatedAt||e.updatedAt<=t)&&(e.observers&&e.observers.length?F(e,s,!0):l&&l.running&&e.pure?(l.sources.add(e),e.tValue=s):e.value=s,e.updatedAt=t)}function j(e,n,t,s=p,i){let r={fn:e,state:s,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:n,owner:u,context:null,pure:t};return l&&l.running&&(r.state=0,r.tState=s),u===null||u!==V&&(l&&l.running&&u.pure?u.tOwned?u.tOwned.push(r):u.tOwned=[r]:u.owned?u.owned.push(r):u.owned=[r]),r}function I(e){let n=l&&l.running;if(e.state!==p&&!(n&&e.tState))return;if(e.suspense&&M(e.suspense.inFallback))return e.suspense.effects.push(e);let t=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<P);){if(n&&l.disposed.has(e))return;(e.state||n&&e.tState)&&t.push(e)}for(let s=t.length-1;s>=0;s--){if(e=t[s],n){let i=e,r=t[s+1];for(;(i=i.owner)&&i!==r;)if(l.disposed.has(i))return}if(e.state===p||n&&e.tState)v(e);else if(e.state===E){let i=a;a=null,_(e),a=i}}}function T(e,n){if(a)return e();let t=!1;n||(a=[]),d?t=!0:d=[],P++;try{e()}catch(s){Z(s)}finally{ge(t)}}function ge(e){if(a&&(B&&l&&l.running?pe(a):X(a),a=null),e)return;let n;if(l&&l.running){if(l.promises.size||l.queue.size){l.running=!1,l.effects.push.apply(l.effects,d),d=null,q(!0);return}let t=l.sources;n=l.cb,d.forEach(s=>{s.state=p,delete s.tState}),l=null,W(()=>{t.forEach(s=>{if(s.value=s.tValue,s.owned)for(let i=0,r=s.owned.length;i<r;i++)k(s.owned[i]);s.tOwned&&(s.owned=s.tOwned),delete s.tValue,delete s.tOwned,s.tState=0}),q(!1)})}d.length?W(()=>{ce(d),d=null}):d=null,n&&n.forEach(t=>t())}function X(e){for(let n=0;n<e.length;n++)I(e[n])}function pe(e){for(let n=0;n<e.length;n++){let t=e[n],s=l.queue;s.has(t)||(s.add(t),B(()=>{s.delete(t),T(()=>{l.running=!0,I(t),s.size||(d.push.apply(d,l.effects),l.effects=[])},!1),l&&(l.running=!1)}))}}function _(e){e.state=0;for(let n=0;n<e.sources.length;n+=1){let t=e.sources[n];t.sources&&(t.state===p||l&&l.running&&t.tState?I(t):t.state===E&&_(t))}}function Q(e){for(let n=0;n<e.observers.length;n+=1){let t=e.observers[n];t.state||(t.state=E,t.observers&&Q(t))}}function k(e){let n;if(e.sources)for(;e.sources.length;){let t=e.sources.pop(),s=e.sourceSlots.pop(),i=t.observers;if(i&&i.length){let r=i.pop(),o=t.observerSlots.pop();s<i.length&&(r.sourceSlots[o]=s,i[s]=r,t.observerSlots[s]=o)}}if(l&&l.running&&e.pure){if(e.tOwned){for(n=0;n<e.tOwned.length;n++)k(e.tOwned[n]);delete e.tOwned}J(e,!0)}else if(e.owned){for(n=0;n<e.owned.length;n++)k(e.owned[n]);e.owned=null}if(e.cleanups){for(n=0;n<e.cleanups.length;n++)e.cleanups[n]();e.cleanups=null}l&&l.running?e.tState=0:e.state=0,e.context=null}function J(e,n){if(n||(e.tState=0,l.disposed.add(e)),e.owned)for(let t=0;t<e.owned.length;t++)J(e.owned[t])}function Z(e){let n=H&&ee(u,H);if(!n)throw e;n.forEach(t=>t(e))}function ee(e,n){return e&&(e.context&&e.context[n]||e.owner&&ee(e.owner,n))}function D(e){if(typeof e=="function"&&!e.length)return D(e());if(Array.isArray(e)){let n=[];for(let t=0;t<e.length;t++){let s=D(e[t]);Array.isArray(s)?n.push.apply(n,s):n.push(s)}return n}return e}function me(e){return function(t){let s;return ae(()=>s=M(()=>(u.context={[e]:t.value},he(()=>t.children)))),s}}var Ae=Symbol("fallback");var Ee=de();var ye=["allowfullscreen","allowpaymentrequest","async","autofocus","autoplay","checked","controls","default","disabled","formnovalidate","hidden","ismap","itemscope","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","seamless","selected","truespeed"],Ve=new Set(["className","indeterminate","value","readOnly",...ye]),qe=new Set(["innerHTML","textContent","innerText","children"]);var Be=new Set(["beforeinput","click","dblclick","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"]),Ue=new Set(["altGlyph","altGlyphDef","altGlyphItem","animate","animateColor","animateMotion","animateTransform","circle","clipPath","color-profile","cursor","defs","desc","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","font","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignObject","g","glyph","glyphRef","hkern","image","line","linearGradient","marker","mask","metadata","missing-glyph","mpath","path","pattern","polygon","polyline","radialGradient","rect","set","stop","svg","switch","symbol","text","textPath","tref","tspan","use","view","vkern"]);function te(e,n,t){let s=t.length,i=n.length,r=s,o=0,f=0,m=n[i-1].nextSibling,h=null;for(;o<i||f<r;){if(n[o]===t[f]){o++,f++;continue}for(;n[i-1]===t[r-1];)i--,r--;if(i===o){let g=r<s?f?t[f-1].nextSibling:t[r-f]:m;for(;f<r;)e.insertBefore(t[f++],g)}else if(r===f)for(;o<i;)(!h||!h.has(n[o]))&&e.removeChild(n[o]),o++;else if(n[o]===t[r-1]&&t[f]===n[i-1]){let g=n[--i].nextSibling;e.insertBefore(t[f++],n[o++].nextSibling),e.insertBefore(t[--r],g),n[i]=t[r]}else{if(!h){h=new Map;let y=f;for(;y<r;)h.set(t[y],y++)}let g=h.get(n[o]);if(g!=null)if(f<g&&g<r){let y=o,O=1,G;for(;++y<i&&y<r&&!((G=h.get(n[y]))==null||G!==g+O);)O++;if(O>g-f){let fe=n[o];for(;f<g;)e.insertBefore(t[f++],fe)}else e.replaceChild(t[f++],n[o++])}else o++;else e.removeChild(n[o++])}}}function ne(e,n,t){let s;return U(i=>{s=i,be(n,e(),n.firstChild?null:void 0,t)}),()=>{s(),n.textContent=""}}function se(e,n,t){let s=document.createElement("template");s.innerHTML=e;let i=s.content.firstChild;return t&&(i=i.firstChild),i}function ie(e,n,t){t==null?e.removeAttribute(n):e.setAttribute(n,t)}function be(e,n,t,s){if(t!==void 0&&!s&&(s=[]),typeof n!="function")return $(e,n,s,t);w(i=>$(e,n(),i,t),s)}function $(e,n,t,s,i){for(;typeof t=="function";)t=t();if(n===t)return t;let r=typeof n,o=s!==void 0;if(e=o&&t[0]&&t[0].parentNode||e,r==="string"||r==="number")if(r==="number"&&(n=n.toString()),o){let f=t[0];f&&f.nodeType===3?f.data=n:f=document.createTextNode(n),t=C(e,t,s,f)}else t!==""&&typeof t=="string"?t=e.firstChild.data=n:t=e.textContent=n;else if(n==null||r==="boolean"){if(N.context)return t;t=C(e,t,s)}else{if(r==="function")return w(()=>{let f=n();for(;typeof f=="function";)f=f();t=$(e,f,t,s)}),()=>t;if(Array.isArray(n)){let f=[];if(R(f,n,i))return w(()=>t=$(e,f,t,s,!0)),()=>t;if(N.context&&t&&t.length)return t;if(f.length===0){if(t=C(e,t,s),o)return t}else Array.isArray(t)?t.length===0?re(e,f,s):te(e,t,f):t==null||t===""?re(e,f):te(e,o&&t||[e.firstChild],f);t=f}else if(n instanceof Node){if(Array.isArray(t)){if(o)return t=C(e,t,s,n);C(e,t,null,n)}else t==null||t===""||!e.firstChild?e.appendChild(n):e.replaceChild(n,e.firstChild);t=n}}return t}function R(e,n,t){let s=!1;for(let i=0,r=n.length;i<r;i++){let o=n[i],f;if(o instanceof Node)e.push(o);else if(!(o==null||o===!0||o===!1))if(Array.isArray(o))s=R(e,o)||s;else if((f=typeof o)==="string")e.push(document.createTextNode(o));else if(f==="function")if(t){for(;typeof o=="function";)o=o();s=R(e,Array.isArray(o)?o:[o])||s}else e.push(o),s=!0;else e.push(document.createTextNode(o.toString()))}return s}function re(e,n,t){for(let s=0,i=n.length;s<i;s++)e.insertBefore(n[s],t)}function C(e,n,t,s){if(t===void 0)return e.textContent="";let i=s||document.createTextNode("");if(n.length){let r=!1;for(let o=n.length-1;o>=0;o--){let f=n[o];if(i!==f){let m=f.parentNode===e;!r&&!o?m?e.replaceChild(i,f):e.insertBefore(i,t):m&&e.removeChild(f)}else r=!0}}else e.insertBefore(i,t);return[i]}var le="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNjYgMTU1LjMiPjxwYXRoIGQ9Ik0xNjMgMzVTMTEwLTQgNjkgNWwtMyAxYy02IDItMTEgNS0xNCA5bC0yIDMtMTUgMjYgMjYgNWMxMSA3IDI1IDEwIDM4IDdsNDYgOSAxOC0zMHoiIGZpbGw9IiM3NmIzZTEiLz48bGluZWFyR3JhZGllbnQgaWQ9ImEiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4MT0iMjcuNSIgeTE9IjMiIHgyPSIxNTIiIHkyPSI2My41Ij48c3RvcCBvZmZzZXQ9Ii4xIiBzdG9wLWNvbG9yPSIjNzZiM2UxIi8+PHN0b3Agb2Zmc2V0PSIuMyIgc3RvcC1jb2xvcj0iI2RjZjJmZCIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzc2YjNlMSIvPjwvbGluZWFyR3JhZGllbnQ+PHBhdGggZD0iTTE2MyAzNVMxMTAtNCA2OSA1bC0zIDFjLTYgMi0xMSA1LTE0IDlsLTIgMy0xNSAyNiAyNiA1YzExIDcgMjUgMTAgMzggN2w0NiA5IDE4LTMweiIgb3BhY2l0eT0iLjMiIGZpbGw9InVybCgjYSkiLz48cGF0aCBkPSJNNTIgMzVsLTQgMWMtMTcgNS0yMiAyMS0xMyAzNSAxMCAxMyAzMSAyMCA0OCAxNWw2Mi0yMVM5MiAyNiA1MiAzNXoiIGZpbGw9IiM1MThhYzgiLz48bGluZWFyR3JhZGllbnQgaWQ9ImIiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4MT0iOTUuOCIgeTE9IjMyLjYiIHgyPSI3NCIgeTI9IjEwNS4yIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiM3NmIzZTEiLz48c3RvcCBvZmZzZXQ9Ii41IiBzdG9wLWNvbG9yPSIjNDM3N2JiIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjMWYzYjc3Ii8+PC9saW5lYXJHcmFkaWVudD48cGF0aCBkPSJNNTIgMzVsLTQgMWMtMTcgNS0yMiAyMS0xMyAzNSAxMCAxMyAzMSAyMCA0OCAxNWw2Mi0yMVM5MiAyNiA1MiAzNXoiIG9wYWNpdHk9Ii4zIiBmaWxsPSJ1cmwoI2IpIi8+PGxpbmVhckdyYWRpZW50IGlkPSJjIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjE4LjQiIHkxPSI2NC4yIiB4Mj0iMTQ0LjMiIHkyPSIxNDkuOCI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjMzE1YWE5Ii8+PHN0b3Agb2Zmc2V0PSIuNSIgc3RvcC1jb2xvcj0iIzUxOGFjOCIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzMxNWFhOSIvPjwvbGluZWFyR3JhZGllbnQ+PHBhdGggZD0iTTEzNCA4MGE0NSA0NSAwIDAwLTQ4LTE1TDI0IDg1IDQgMTIwbDExMiAxOSAyMC0zNmM0LTcgMy0xNS0yLTIzeiIgZmlsbD0idXJsKCNjKSIvPjxsaW5lYXJHcmFkaWVudCBpZD0iZCIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSI3NS4yIiB5MT0iNzQuNSIgeDI9IjI0LjQiIHkyPSIyNjAuOCI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjNDM3N2JiIi8+PHN0b3Agb2Zmc2V0PSIuNSIgc3RvcC1jb2xvcj0iIzFhMzM2YiIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzFhMzM2YiIvPjwvbGluZWFyR3JhZGllbnQ+PHBhdGggZD0iTTExNCAxMTVhNDUgNDUgMCAwMC00OC0xNUw0IDEyMHM1MyA0MCA5NCAzMGwzLTFjMTctNSAyMy0yMSAxMy0zNHoiIGZpbGw9InVybCgjZCkiLz48L3N2Zz4=";var x={};var Se=se('<div><header><img alt="logo"><p>Edit <code>src/App.jsx</code> and save to reload.</p><a href="https://github.com/solidjs/solid" target="_blank" rel="noopener noreferrer">Learn Solid</a></header></div>',11);function ve(){return console.log("styles",x),(()=>{let e=Se.cloneNode(!0),n=e.firstChild,t=n.firstChild,s=t.nextSibling,i=s.nextSibling;return ie(t,"src",le),w(r=>{let o=x.App,f=x.header,m=x.logo,h=x.link;return o!==r._v$&&(e.className=r._v$=o),f!==r._v$2&&(n.className=r._v$2=f),m!==r._v$3&&(t.className=r._v$3=m),h!==r._v$4&&(i.className=r._v$4=h),r},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0}),e})()}var oe=ve;ne(oe,document.getElementById("root"));})();