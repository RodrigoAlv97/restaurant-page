(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>p});var r=n(81),o=n.n(r),i=n(645),a=n.n(i),c=n(667),s=n.n(c),d=new URL(n(122),n.b),l=a()(o()),u=s()(d);l.push([e.id,"*{\n    margin: 0;\n    padding: 0;\n    font-family: roboto , monospace , Verdana, Geneva, Tahoma, sans-serif;\n}\n\n\n\n#content{\n    height: 100vh;\n    width: 100vw;\n    background: url("+u+");\n    background-size: cover;\n    display: flex;\n    flex-direction:column;\n}\n\n#main{\n    height: 95%;\n}\n/*--------------------Header--------------------*/ \n#header{\n    height: 80px;\n    border-bottom: 2px #ffec9678 solid;\n    background-color: rgba(0, 0, 0, 0.633);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    color: white;\n}\n\n#headerList{\n    list-style: none;\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n}\n.listItem{\n    font-size: 1.6rem;\n    font-weight: 400;\n    margin-left: 30px;\n    margin-right: 30px;\n    cursor: pointer;\n}\n\n.listItem:hover{\n    transform: scale(1.1);\n    border-bottom: #ffd930c6 solid 2px;\n}\n/*--------------------Header--------------------*/ \n\n\n/*--------------------Home--------------------*/ \n\n#homeContainer{\n    background-color: rgba(0, 0, 0, 0.633);\n    height: 95%;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    color: #fff;\n}\n\n#name{\n    font-size: 4rem;\n    font-weight: 700;\n    font-family: Verdana;\n}\n\n#subText{\n    font-weight: 400;\n    font-size: 1.2rem;\n}\n\n\n/*--------------------Home--------------------*/ \n\n\n/*--------------------About--------------------*/ \n\n#aboutContainer{\n    background-color: rgba(0, 0, 0, 0.633);\n    height: 95%;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    color: #fff;\n}\n\n#aboutFrame{\n    height: 360px;\n    width: 300px;\n    background-color: rgba(0, 0, 0, 0.645);\n    padding: 40px;\n    border-radius: 15px;\n    display: flex;\n    flex-direction: column;\n    align-items: center; \n}\n\n#aboutTitle{\n    font-size: 3.3rem;\n    font-weight: 600;\n    border-bottom: 2px #ffec9678 solid;\n}\n#aboutContent{\n    font-size: 1.2rem;\n    padding-top: 40px;\n    color: rgb(218, 218, 218);\n}\n\n/*--------------------About--------------------*/ \n\n\n/*--------------------Footer--------------------*/ \n#footer{\n    height: 5%;\n    border-top: 2px #ffec9678 solid;\n    background-color: rgba(0, 0, 0, 0.633);\n    position: fixed;\n    bottom:0;\n    width: 100%;\n    position: fixed;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-weight: 400;\n    font-size: 1.2rem;\n\n}\n\n.link {\n    text-decoration: none;\n    color: #fff;\n  }\n  \n  .link:hover {\n    cursor: pointer;\n    border-bottom: #ffd930c6 solid 2px;\n  }\n  /*--------------------Footer--------------------*/ ",""]);const p=l},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,i){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(a[s]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);r&&a[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),t.push(l))}},t}},667:e=>{e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]|(%20)/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var i={},a=[],c=0;c<e.length;c++){var s=e[c],d=r.base?s[0]+r.base:s[0],l=i[d]||0,u="".concat(d," ").concat(l);i[d]=l+1;var p=n(u),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)t[p].references++,t[p].updater(m);else{var f=o(m,r);r.byIndex=c,t.splice(c,0,{identifier:u,updater:f,references:1})}a.push(u)}return a}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var i=r(e=e||[],o=o||{});return function(e){e=e||[];for(var a=0;a<i.length;a++){var c=n(i[a]);t[c].references--}for(var s=r(e,o),d=0;d<i.length;d++){var l=n(i[d]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}i=s}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},122:(e,t,n)=>{e.exports=n.p+"37feb38d305ac1d9c0a5.jpeg"}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={id:r,exports:{}};return e[r](i,i.exports,n),i.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.b=document.baseURI||self.location.href,n.nc=void 0,(()=>{const e=document.querySelector("#content");function t(e){const t=document.createElement("div");t.setAttribute("id","homeContainer");const n=document.createElement("div");n.setAttribute("id","name"),n.textContent="Example Name",t.appendChild(n);const r=document.createElement("div");r.setAttribute("id","subText"),r.textContent="Lorem ipsum dolor sit amet consectetur adipisicing elit. In, magni.",t.appendChild(r),e.appendChild(t)}var r=n(379),o=n.n(r),i=n(795),a=n.n(i),c=n(569),s=n.n(c),d=n(565),l=n.n(d),u=n(216),p=n.n(u),m=n(589),f=n.n(m),h=n(426),b={};b.styleTagTransform=f(),b.setAttributes=l(),b.insert=s().bind(null,"head"),b.domAPI=a(),b.insertStyleElement=p(),o()(h.Z,b),h.Z&&h.Z.locals&&h.Z.locals,function(){const t=document.createElement("div");t.setAttribute("id","header");const n=document.createElement("ul");n.setAttribute("id","headerList"),t.appendChild(n);const r=document.createElement("li");r.setAttribute("class","listItem"),r.setAttribute("id","home"),r.textContent="HOME",n.appendChild(r);const o=document.createElement("li");o.setAttribute("class","listItem"),o.setAttribute("id","menu"),o.textContent="MENU",n.appendChild(o);const i=document.createElement("li");i.setAttribute("class","listItem"),i.setAttribute("id","about"),i.textContent="ABOUT",n.appendChild(i),e.appendChild(t);const a=document.createElement("div");a.setAttribute("id","main"),e.appendChild(a);const c=document.createElement("div");c.setAttribute("id","footer");const s=document.createElement("a");s.setAttribute("class","link"),s.href="https://github.com/RodrigoAlv97/restaurant-page",s.textContent="GitHub",s.target="_blank",c.appendChild(s),e.appendChild(c)}();const g=document.querySelector("#main"),v=document.querySelector("#home"),x=(document.querySelector("#menu"),document.querySelector("#about"));t(g),v.addEventListener("click",(function(){g.replaceChildren(),t(g)})),x.addEventListener("click",(function(){g.replaceChildren(),function(e){const t=document.createElement("div");t.setAttribute("id","aboutContainer");const n=document.createElement("div");n.setAttribute("id","aboutFrame");const r=document.createElement("div");r.setAttribute("id","aboutTitle"),r.textContent="About us",n.appendChild(r);const o=document.createElement("div");o.setAttribute("id","aboutContent"),o.textContent="Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis sit laboriosam officiis praesentium, quis velit laudantium reprehenderit aspernatur distinctio, voluptates ex quisquam omnis beatae, quae rem ipsam necessitatibus? Dolorem, odit?",n.appendChild(o),t.appendChild(n),e.appendChild(t)}(g)}))})()})();