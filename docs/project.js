(()=>{"use strict";var t={207:(t,e,n)=>{function s(t,e){return"object"==typeof t?t.querySelector(e):document.querySelector(t)}function i(t,e){return"object"==typeof t?t.querySelectorAll(e):document.querySelectorAll(t)}n.d(e,{el:()=>s,oJ:()=>i,vU:()=>m,td:()=>h.t,h4:()=>u,ay:()=>p});class o extends HTMLElement{connectedCallback(){this.classList.contains("large")&&(this.innerHTML=`\n\t\t\t\t<div class="info">\n\t\t\t\t\t<h2>${this.getAttribute("title")}</h2>\n\t\t\t\t\t<p>${this.getAttribute("description")}</p>\n\t\t\t\t</div>\n\t\t\t\t<span></span>\n\t\t\t`)}}class a extends HTMLElement{constructor(){super(),this.handler=()=>{}}connectedCallback(){this.mode=this.getAttribute("mode")||"single"}attributeChangedCallback(t,e,n){"mode"==t&&(this.mode=n)}load(t){this.innerHTML=((e="")=>{for(const n of t)e+=`<boom-item title="${n.title}" `,"gicon"in n&&(e+=`gicon="${n.gicon}"`),e+="></boom-item>";return e})(),this.updateClickListeners()}select(t,e){this.handler(t,e),"single"==this.mode&&(this.reset(),e?e.classList.add("active"):i(this,"boom-item")[t].classList.add("active"))}updateClickListeners(){i(this,"boom-item").forEach(((t,e)=>{t.className="","single"==this.mode&&0==e&&(this.reset(),t.classList.add("active")),t.onclick=()=>this.select(e,t)}))}reset(){for(const t of i(this,"boom-item"))t.className=""}set mode(t){this.modeValue=t,this.updateClickListeners()}get mode(){return this.modeValue}set onSelected(t){this.handler=t}}class l extends HTMLElement{connectedCallback(){let t="<div>";t+=function(t,e,n,s=""){return t&&(s+=`<span class="material-symbols-outlined">${t}</span>`),e&&(s+=`<img src="${e}">`),n&&(s+=`<h6>${n}</h6>`),s}(r(this,"gicon"),r(this,"icon"),r(this,"title")),t+="</div>",this.innerHTML=t}}function r(t,e){return t.getAttribute(e)}class c extends HTMLElement{connectedCallback(){this.innerHTML=`\n\t\t\t<p class="question">\n\t\t\t\t${this.getAttribute("title")}\n\t\t\t</p>\n\t\t\t<p class="answer">\n\t\t\t\t${this.getAttribute("description")}\n\t\t\t</p>\n\t\t`;const t=s(this,"p:last-child");this.addEventListener("click",(()=>{this.classList.toggle("active"),this.classList.contains("active")?t.style.maxHeight=t.scrollHeight+"px":t.style.maxHeight=0}))}}class d extends HTMLElement{connectedCallback(){this.innerHTML="\n\t\t\t\n\t\t"}}customElements.define("boom-button",o),customElements.define("boom-select",a),customElements.define("boom-item",l),customElements.define("boom-faq",c),customElements.define("boom-product",d);var h=n(326);function u(t,e,n){alert(`${t} ${e}`)}const m=t=>u("An error has occurred",t);function p(t=window,e=100){i(".reveal").forEach(((n,s)=>{n.getBoundingClientRect().top<t.innerHeight-e&&n.classList.add("revealed")}))}},326:(t,e,n)=>{function s(t,e=2){if(0===t)return"0 Bytes";const n=e<0?0:e,s=Math.floor(Math.log(t)/Math.log(1024));return parseFloat((t/Math.pow(1024,s)).toFixed(n))+" "+["Bytes","KB","MB","GB","TB"][s]}n.d(e,{t:()=>s})},86:(t,e,n)=>{n.r(e);var s=n(207),i=n(402);const o=[{link:"https://bit.ly/mrboomdevplay",title:"Мой Плейлист"},{link:"https://bit.ly/mrboomdevrepo",title:"Репозиторий Сайта"},{link:"404",title:"Политика Конфиденциальности"},{link:"404",title:"Пользовательское Соглашение"}],a=[{link:"https://bit.ly/mrboomdevvk",image:"./img/icon/vk.png",alt:"VKontakte"},{link:"https://bit.ly/mrboomdevyt",image:"./img/icon/yt.png",alt:"YouTube"},{link:"https://bit.ly/mrboomdevds",image:"./img/icon/ds.png",alt:"Discord"}];class l extends HTMLElement{connectedCallback(){this.innerHTML=`\n\t\t\t<footer>\n\t\t\t\t<div class="content">\n\t\t\t\t\t<h3>Интересные Ресурсы</h3>\n\t\t\t\t\t\t<ul class="links">${(0,i.j)(o)}</ul>\n\t\t\t\t\t<h3>Посетите мои соц-сети</h3>\n\t\t\t\t\t\t<ul class="social">${(0,i.j)(a)}</ul>\n\t\t\t\t\t<span class="divider"></span>\n\t\t\t\t\t\t<p>Сайт был сделан в 2022 году прямо с мобильного телефона!</p>\n\t\t\t\t</div>\n\t\t\t</footer>\n\t\t`}}var r=n(1);customElements.define("site-footer",l),customElements.define("site-header",r.Z),(0,s.el)("html").classList.remove("loading"),setTimeout((()=>{for(const t of[(0,s.el)("site-header header"),(0,s.el)("site-header nav")])t.classList.add("fast")}),1e3),location.hostname},1:(t,e,n)=>{n.d(e,{Z:()=>r,q:()=>l});var s=n(207),i=n(402);let o=[];const a=[{title:"Главная",link:"./#hero"},{title:"Мои проекты",link:"./#projects"},{title:"Обо мне",link:"./#aboutme"},{title:"Связаться",link:"./#contact"}];function l(t,e){e&&function(t,e){const n=e.map((t=>(0,s.el)(t)));t.addEventListener("scroll",(()=>{n.forEach(((t,e)=>{t.getBoundingClientRect().top<150&&function(t){for(const t of o)t.classList.remove("active");o[t].classList.add("active")}(e)}))}))}(t,a.map((t=>{const e=t.link.substring(2,t.link.length);return o=(0,s.oJ)("site-header nav li"),o[0].classList.add("active"),e}))),function(t){t.addEventListener("scroll",(()=>{const e=(0,s.el)("site-header header");(t.scrollY||t.scrollTop)>10?e.classList.add("shadow"):e.classList.remove("shadow")}))}(t),function(){const t=(0,s.el)("site-header #headerBurger"),e=(0,s.el)("site-header nav"),n=(0,s.el)("site-header header");t.addEventListener("click",(()=>{t.classList.toggle("active"),e.classList.toggle("active"),n.classList.toggle("activeByBurger")}))}()}class r extends HTMLElement{connectedCallback(){this.innerHTML=`\n\t\t\t<header class="reveal">\n\t\t\t\t<div class="content">\n\t\t\t\t\t<a href="https://mrboomdev.ddns.net"><h2>MrBoomDev</h2></a>\n\t\t\t\t\t<div id="headerBurger">\n\t\t\t\t\t\t<span></span><span></span><span></span>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</header>\n\t\t\t<nav class="reveal">\n\t\t\t\t<ul class="content">${(0,i.j)(a,!0)}</ul>\n\t\t\t</nav>\n\t\t`}}},402:(t,e,n)=>{function s(t){return t?"reveal from-top":""}function i(t,e,n=""){for(const{image:i,alt:o,title:a,link:l}of t)n+=`<li class="${s(e)}"><a href="${l}">`,i&&(n+=`<img src="${i}" alt="${o}" title="${o}" />`),a&&(n+=a),n+="</li></a>";return n}n.d(e,{j:()=>i})}},e={};function n(s){var i=e[s];if(void 0!==i)return i.exports;var o=e[s]={exports:{}};return t[s](o,o.exports,n),o.exports}n.d=(t,e)=>{for(var s in e)n.o(e,s)&&!n.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:e[s]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},(()=>{var t=n(207),e=n(1);const s="https://api.github.com/repos/",i="39f608c50067aaebb2ed63572e1b4f34cc1f91a8";n(86),(0,e.q)((0,t.el)("#app-holder"));const o=location.param("name")||"MrBoomDeveloper/boomstudio";Promise.all([function(t){return fetch(`${s+t}/releases/latest`,{headers:{Accept:"application/vnd.github+json",Authorization:i}}).then((t=>t.json()))}(o),function(t){return fetch(`${s+t}/readme`,{header:{Accept:"application/vnd.github.VERSION.raw",Authorization:i}}).then((t=>t.json()))}(o)]).then((e=>{(function(e){if(!("assets"in e))return void(0,t.h4)("Не спешите!","Попробуйте еще раз через пару минут.",25e3);const n=e.assets[0];(0,t.el)("#size").innerText=(0,t.td)(n.size),(0,t.el)("#open").href=n.browser_download_url,(0,t.el)("#source").href=e.html_url,(0,t.el)("#downloads").innerText=n.download_count;const s=new Date(function(t){const e=t.substring(0,10).split("-");return new Date(e[0],e[1],e[2])}(n.updated_at));(0,t.el)("#updated").innerText=function(t){const e=new Date;if(t.getYear()==e.getYear()&&t.getMonth()==e.getMonth()){if(t.getDay()==e.getDay())return"Сегодня";if(t.getDay()==e.getDay()-1)return"Вчера"}return[t.getDate(),t.getMonth(),t.getFullYear()].join(".")}(s),(0,t.el)("#update-text").innerText=e.body,(0,t.el)("#version").innerText=e.tag_name})(e[0]),function(e){(0,t.el)("#description-text").innerText=atob(e.content)}(e[1]),(0,t.ay)()})).catch(t.vU)})()})();