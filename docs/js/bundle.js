(()=>{"use strict";var t={989:(t,e,n)=>{n.r(e),n.d(e,{default:()=>i});class i extends HTMLElement{connectedCallback(){this.innerHTML=`<div>\n\t\t\t<div class="about">\n\t\t\t\t<h2>${this.getAttribute("title")}</h2>\n\t\t\t\t<p>${this.getAttribute("description")}</p>\n\t\t\t</div>\n\t\t\t<span>&#62;</span>\n\t\t</div>`}}},191:(t,e,n)=>{n.r(e),n.d(e,{default:()=>i});class i extends HTMLElement{connectedCallback(){this.innerHTML=`<p>${this.getAttribute("code")}</p>`,this.style.backgroundColor=this.getAttribute("code")}}},150:(t,e,n)=>{n.r(e),n.d(e,{default:()=>i});class i extends HTMLElement{connectedCallback(){const t=this.id;this.innerHTML=`\n\t\t<button class="accordion" \n\t\t\tid="faq1_${t}">\n\t\t\t\t${this.getAttribute("title")}\n\t\t</button>\n\t\t<div class="panel" id="faq2_${t}">\n\t\t\t<p>${this.getAttribute("description")}</p>\n\t\t</div>`;let e=!1;this.addEventListener("click",(()=>{this.classList.toggle("active");const n=element(`#faq2_${t}`);n.classList.toggle("active"),e?(n.style.maxHeight=null,e=!1):(n.style.maxHeight=n.scrollHeight+"px",e=!0)}))}}},913:(t,e,n)=>{n.r(e),n.d(e,{default:()=>i});class i extends HTMLElement{connectedCallback(){console.error("This element is deprecated. Please use boom-item"),this.innerHTML=`<div>\n\t\t\t<img src="${this.getAttribute("icon")}" \n\t\t\t\ttitle="${this.getAttribute("title")}" \n\t\t\t\talt="${this.getAttribute("title")}"/>\n\t\t\t<h6>${this.getAttribute("title")}</h6>\n\t\t</div>`}}},538:(t,e,n)=>{n.r(e),n.d(e,{default:()=>i});class i extends HTMLElement{connectedCallback(){this.innerHTML=`<div>\n\t\t\t<img class="banner" \n\t\t\t\tsrc="${this.getAttribute("banner")}"/>\n\t\t\t<div class="shadow"></div>\n\t\t\t<div class="about">${this.innerHTML}</div>\n\t\t</div>`}}},941:(t,e,n)=>{n.r(e),n.d(e,{default:()=>i});class i extends HTMLElement{connectedCallback(){this.innerHTML=`<div>\n\t\t\t<img class="banner" \n\t\t\t\tsrc="${this.getAttribute("banner")}" \n\t\t\t\ttitle="${this.getAttribute("title")}" \n\t\t\t\talt="${this.getAttribute("title")}"/>\n\t\t\t<div class="about">\n\t\t\t\t<h3>${this.getAttribute("title")}</h3>\n\t\t\t\t<span>${this.getAttribute("tags")}</span>\n\t\t\t\t<p>${this.getAttribute("description")}</p>\n\t\t\t</div>\n\t\t</div>`}}},991:(t,e,n)=>{n.r(e),n.d(e,{default:()=>i});class i extends HTMLElement{connectedCallback(){this.innerHTML=`<div>\n\t\t\t<div class="text">\n\t\t\t\t<h4>${this.getAttribute("title")}</h4>\n\t\t\t\t<p>${this.getAttribute("description")}</p>\n\t\t\t</div>\n\t\t\t<input-switch \n\t\t\t\tkey="${this.getAttribute("key")}" \n\t\t\t\tchecked="${cookies.get(this.getAttribute("key"))}">\n\t\t\t</input-switch>\n\t\t</div>`}}},805:(t,e,n)=>{n.r(e),n.d(e,{default:()=>i});class i extends HTMLElement{connectedCallback(){console.error("This element is deprecated. Please use boom-item");let t="";null==this.getAttribute("google")?(t=`<img src="${this.getAttribute("icon")}" `,null!=this.getAttribute("icon")&&(t+=`title="${this.getAttribute("title")}"`),t+="/>"):t=`<span class="material-symbols-outlined">\n\t\t\t\t${this.getAttribute("icon")}\n\t\t\t</span>`,this.innerHTML=t}}},490:(t,e,n)=>{n.r(e),n.d(e,{default:()=>i});class i extends HTMLElement{connectedCallback(){this.innerHTML=`<div>\n\t\t\t<h4>${this.getAttribute("title")}</h4>\n\t\t\t<p>${this.getAttribute("description")}</p>\n\t\t</div>`}}},751:(t,e,n)=>{n.r(e),n.d(e,{default:()=>i});class i extends HTMLElement{connectedCallback(){let t="";const e=this.getAttribute("key");t=`<label \n\t\t\tfor="${e}_switch" \n\t\t\tclass="switch">\n\t\t<input type="checkbox" `,cookies.get(e)&&(t+="checked "),t+=`name="${e}_switch" \n\t\t\tvalue="${e}_switch" \n\t\t\tid="${e}_switch"\n\t\t\tonchange="cookies.set('\n\t\t\t\t${e}', \n\t\t\t\tevent.currentTarget.checked\n\t\t)">\n\t\t\t<span class="slider"></span>\n\t\t</label>`,this.innerHTML=t}}}},e={};function n(i){var s=e[i];if(void 0!==s)return s.exports;var l=e[i]={exports:{}};return t[i](l,l.exports,n),l.exports}n.d=(t,e)=>{for(var i in e)n.o(e,i)&&!n.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},(()=>{const t=t=>document.querySelector(t),e=()=>{(".reveal",document.querySelectorAll(".reveal")).forEach(((t,e)=>{t.getBoundingClientRect().top<window.innerHeight-75?t.classList.add("revealed"):t.classList.remove("revealed")}))},i=(e,n,i)=>{const s=document.createElement("card-small");s.setAttribute("title",e),s.setAttribute("description",n??""),t("#boomMessagesDiv").appendChild(s),new Promise((t=>setTimeout((()=>t()),200))).then((()=>{s.className="active",setTimeout((()=>{s.className="destroy",setTimeout((()=>s.remove()),250)}),i??2500)}))},s=t=>i("An error has occurred",t,5e3);Number.prototype.zeros=function(){return this>9?this:"0"+this},Number.prototype.offset=function(t){let e=this+t;return e>23?e-24:e},Date.prototype.getWeek=function(){let t=new Date(this.getFullYear(),0,1),e=(new Date(this.getFullYear(),this.getMonth(),this.getDate())-t+864e5)/864e5;return Math.ceil(e/7)},Number.prototype.isEven=function(){return this%2==0},String.prototype.insert=function(t=0,e){return t>0?this.substring(0,t)+e+this.substr(t):e+this},location.param=t=>{const e=new URL(location).searchParams.getAll(t).toString();return""==e?void 0:e};class l extends HTMLElement{connectedCallback(){let t="<div>";null==this.getAttribute("google")?t+=`<img src="${this.getAttribute("icon")}"\n\t\t\t\ttitle="${this.getAttribute("title")??"Item"}"\n\t\t\t\talt="${this.getAttribute("title")??"Item"}">`:t+=`<span class="material-symbols-outlined">\n\t\t\t\t${this.getAttribute("google")}\n\t\t\t</span>`,null!=this.getAttribute("title")&&(t+=`<h6>${this.getAttribute("title")}</h6>`),t+="</div>",this.innerHTML=t}}const a=n(941),r=n(989),c=n(805),o=n(913),d=n(191),u=n(538),h=n(751),m=n(490),b=n(150),g=n(991);customElements.define("boom-item",l),customElements.define("card-product",a.default),customElements.define("card-button",r.default),customElements.define("card-simple",c.default),customElements.define("card-icon",o.default),customElements.define("card-color",d.default),customElements.define("card-layers",u.default),customElements.define("input-switch",h.default),customElements.define("card-small",m.default),customElements.define("card-faq",b.default),customElements.define("card-setting",g.default);let p=!1;window.addEventListener("load",(()=>{let t=document.createElement("div");t.id="boomMessagesDiv",document.body.appendChild(t),p=!0,e()})),window.addEventListener("scroll",(()=>e())),window.addEventListener("error",(t=>s(t))),window.addEventListener("unhandledrejection",(t=>s(t.reason))),window.addEventListener("offline",(()=>{i("Lost Internet!","Please, check your internet connection")})),window.addEventListener("online",(()=>{i("Back online","Internet connection has been restored",3500)}));class v extends HTMLElement{connectedCallback(){this.innerHTML='\n\t\t\t<header>\n\t\t\t\t<div class="content reveal">\n\t\t\t\t\t<h2>MrBoomDev</h2>\n\t\t\t\t\t<boom-burger></boom-burger>\n\t\t\t\t\t<nav>\n\t\t\t\t\t\t<ul class="content">\n\t\t\t\t\t\t\t<li><a href="./#aboutme">Обо мне</a></li>\n\t\t\t\t\t\t\t<li><a href="./#projects">Проекты</a></li>\n\t\t\t\t\t\t\t<li><a href="./#contact">Связаться</a></li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t<nav>\n\t\t\t\t</div>\n\t\t\t</header>\n\t\t'}}class f extends HTMLElement{connectedCallback(){this.innerHTML='\n\t\t\t<footer>\n\t\t\t\t<div class="content">\n\t\t\t\t\t<h3>О ваших данных</h3>\n\t\t\t\t\t<ul class="links">\n\t\t\t\t\t\t<li><a href="404.html">Политика Конфиденциальности</a></li>\n\t\t\t\t\t\t<li><a href="404.html">Пользовательское Соглашение</a></li>\n\t\t\t\t\t</ul>\n\t\t\t\t\t<h3>Загляните в мои соц-сети</h3>\n\t\t\t\t\t<ul class="social">\n\t\t\t\t\t\t<li><a href="https://bit.ly/mrboomdevvk"><img src="./img/icon/vk.png"></a></li>\n\t\t\t\t\t\t<li><a href="https://bit.ly/mrboomdevyt"><img src="./img/icon/yt.png"></a></li>\n\t\t\t\t\t\t<li><a href="https://bit.ly/mrboomdevds"><img src="./img/icon/ds.png"></a></li>\n\t\t\t\t\t</ul>\n\t\t\t\t\t<span class="divider"></span>\n\t\t\t\t\t<p>Сайт был сделан в 2022 году прямо с мобильного телефона!</p>\n\t\t\t\t</div>\n\t\t\t</footer>\n\t\t'}}var L,y,E,A,k;customElements.define("site-footer",f),customElements.define("site-header",v),window.addEventListener("scroll",(()=>{const e=t("header");document.body.scrollTop>10?e.classList.add("shadow"):e.classList.remove("shadow")})),function(){class e extends HTMLElement{connectedCallback(){this.innerHTML="<span></span><span></span><span></span>",this.onclick=()=>{this.classList.toggle("active");const e=t("header nav");if(e.classList.toggle("active"),this.active){const n=t("header").offsetHeight;e.style.transform=`translateY(${n}px)`}}}get active(){return this.classList.contains("active")}}customElements.define("boom-burger",e)}(),L=window,y=document,E="script",L.ym=L.ym||function(){(L.ym.a=L.ym.a||[]).push(arguments)},L.ym.l=1*new Date,A=y.createElement(E),k=y.getElementsByTagName(E)[0],A.async=1,A.src="https://mc.yandex.ru/metrika/tag.js",k.parentNode.insertBefore(A,k),ym(89331187,"init",{clickmap:!0,trackLinks:!0,accurateTrackBounce:!0,trackHash:!0,ecommerce:"app"})})()})();