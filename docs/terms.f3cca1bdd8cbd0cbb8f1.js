(()=>{"use strict";var t={145:t=>{t.exports=JSON.parse('{"copyright":"Сайт был сделан в 2022 году прямо с мобильного телефона!","social":[{"image":"https://mrboomdev.ru/img/social/vk.png","alt":"VKontakte","url":"https://redirect.mrboomdev.ru/vkontakte"},{"image":"https://mrboomdev.ru/img/social/youtube.png","alt":"YouTube","url":"https://redirect.mrboomdev.ru/youtube"},{"image":"https://mrboomdev.ru/img/social/ds.png","alt":"Discord","url":"https://redirect.mrboomdev.ru/discord"}],"resources":[{"title":"Мой Плейлист","url":"https://redirect.mrboomdev.ru/music"},{"title":"Репозиторий Сайта","url":"https://redirect.mrboomdev.ru/repository"},{"title":"Политика Конфиденциальности","url":"https://privacy.mrboomdev.ru"},{"title":"Пользовательское Соглашение","url":"https://agreement.mrboomdev.ru"}]}')},989:t=>{t.exports=JSON.parse('{"homeUrl":"https://mrboomdev.ru","links":[{"title":"Главная","url":"https://mrboomdev.ru/#hero"},{"title":"Мои проекты","url":"https://mrboomdev.ru/#projects"},{"title":"Обо мне","url":"https://mrboomdev.ru/#aboutme"},{"title":"Связаться","url":"https://mrboomdev.ru/#contact"}]}')}},e={};function s(i){var n=e[i];if(void 0!==n)return n.exports;var o=e[i]={exports:{}};return t[i](o,o.exports,s),o.exports}(()=>{class t extends HTMLElement{connectedCallback(){this.classList.contains("large")&&(this.innerHTML=`\n\t\t\t\t<div class="info">\n\t\t\t\t\t<h2>${this.getAttribute("title")}</h2>\n\t\t\t\t\t<p>${this.getAttribute("description")}</p>\n\t\t\t\t</div>\n\t\t\t\t<span></span>\n\t\t\t`)}}function e(t,e){return"object"==typeof t?t.querySelector(e):document.querySelector(t)}function i(t,e){return"object"==typeof t?t.querySelectorAll(e):document.querySelectorAll(t)}class n extends HTMLElement{constructor(){super(),this.handler=()=>{},this.array={}}connectedCallback(){this.mode=this.getAttribute("mode")||"single"}attributeChangedCallback(t,e,s){"mode"==t&&(this.mode=s)}load(t){this.array=t,this.innerHTML=((e="")=>{for(const s of t)e+=`<boom-item class="tag"\n\t\t\t\t\ttabindex="0"\n\t\t\t\t\ttitle="${s.title}" `,"gicon"in s&&(e+=`gicon="${s.gicon}"`),e+="></boom-item>";return e})(),this.updateClickListeners()}select(t,e){this.handler(t,e,this.array),"single"==this.mode&&(this.reset(),e?e.classList.add("active"):i(this,"boom-item")[t].classList.add("active"))}updateClickListeners(){i(this,"boom-item").forEach(((t,e)=>{t.classList.remove("active"),"single"==this.mode&&0==e&&(this.reset(),t.classList.add("active")),t.onclick=()=>this.select(e,t)}))}reset(){for(const t of i(this,"boom-item"))t.classList.remove("active")}set mode(t){this.modeValue=t,this.updateClickListeners()}get mode(){return this.modeValue}set onselect(t){this.handler=t}}class o extends HTMLElement{connectedCallback(){this.innerHTML=`\n\t\t\t<p class="question">\n\t\t\t\t${this.getAttribute("title")}\n\t\t\t</p>\n\t\t\t<p class="answer">\n\t\t\t\t${this.getAttribute("description")}\n\t\t\t</p>\n\t\t\t<span></span>\n\t\t`;const t=e(this,".answer");this.addEventListener("click",(()=>{this.classList.toggle("active"),this.classList.contains("active")?t.style.maxHeight=t.scrollHeight+"px":t.style.maxHeight=0}))}}class l extends HTMLElement{connectedCallback(){let t="<div>";t+=function(t,e,s,i,n=""){return t&&(n+=`<span class="material-symbols-outlined">\n\t\t\t${t}\n\t\t</span>`),e&&(n+=`<img src="${e}" \n\t\t\ttitle="${s||""}" \n\t\t\talt="${s||""}"\n\t\t\t${i?'loading="'+i+'"':""}\n\t\t>`),s&&(n+=`<h6>${s}</h6>`),n}(r(this,"gicon"),r(this,"icon"),r(this,"title"),r(this,"loading")),t+="</div>",this.innerHTML=t}}function r(t,e){return t.getAttribute(e)}class a extends HTMLElement{connectedCallback(t="<div>"){const{banner:e,loading:s,title:i,highlight:n,description:o,tags:l}=this.attributes;e&&(t+=`<div class="banner">\n\t\t\t\t<img src="${e.value}" loading="${s.value||"auto"}"\n\t\t\t\t\talt="${i.value}" title="${i.value}">\n\t\t\t</div>`),t+='<div class="details">',i&&(t+=`<h3>${i.value}</h3>`),o&&(t+=`<p>${o.value}</p>`),l&&(t+='<div class="tags">',t+=l.value.split(",").reduce(((t,e)=>t+`<boom-item\n\t\t\t\t\t\ttitle="${e}" class="tag"\n\t\t\t\t\t></boom-item>`),""),t+="</div>"),this.innerHTML=t+"</div></div>"}}class c extends HTMLElement{constructor(t){super(),this.options=t,this.innerHTML=this[t.style??"message"](t)}message({title:t,description:e,buttons:s}){return`<div class="message">\n\t\t\t<h1>${t}</h1>\n\t\t\t<p>${e}</p>\n\t\t\t${this.getButtons(s)}\n\t\t</div>`}getButtons(t){const e=document.createElement("div");e.className="buttons";for(const{title:s}of t){const t=document.createElement("boom-button");t.className="fill",t.textContent=s,e.appendChild(t)}return e.outerHTML}show(t){(t||document.body).appendChild(this),setTimeout((()=>{this.classList.add("shown"),i(this,"boom-button").forEach((t=>{t.onclick=()=>{this.close()}}))}),250)}close(){this.classList.add("closed"),setTimeout((()=>{this.remove()}),250)}}function d(t=window,e=250){i(".reveal").forEach(((s,i)=>{s.getBoundingClientRect().top<t.innerHeight-e&&s.classList.add("revealed")}))}function h(t,e,s=""){for(const{image:i,gicon:n,alt:o,title:l,url:r,value:a}of t)s+=`<li class='${e?"reveal from-top":""}'>`,r&&(s+=`<a href="${r}">`),i&&(s+=`<img src="${i}" alt="${o||l}" title="${o||l}" />`),n&&(s+=`<span class="material-symbols-outlined">${n}</span>`),l&&(s+=`<span>${l}</span>`),a&&(s+=`<span>${a}</span>`),r&&(s+="</a>"),s+="</li>";return s}customElements.define("boom-button",t),customElements.define("boom-select",n),customElements.define("boom-item",l),customElements.define("boom-faq",o),customElements.define("boom-article",a),customElements.define("boom-dialog",c);const{homeUrl:u,links:m}=s(989);let g;class p extends HTMLElement{constructor(){super(...arguments),this.isHighlightsEnabled=!1,this.isHighlightsInitialized=!1}connectedCallback(){this.innerHTML=`\n\t\t\t<header class="reveal">\n\t\t\t\t<div class="content">\n\t\t\t\t\t<a href="${u}"><h2>MrBoomDev</h2></a>\n\t\t\t\t\t<div id="headerBurger">\n\t\t\t\t\t\t<span></span><span></span><span></span>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</header>\n\t\t\t\n\t\t\t<nav class="reveal">\n\t\t\t\t<ul class="content">${h(m,!0)}</ul>\n\t\t\t</nav>\n\t\t`,this.watchScroll(),this.initBurger()}toggleHighlights(t){if(t){if(this.isHighlightsInitialized)return;this.initHighlight(m.map((({url:t})=>{const e=t.substring(2,t.length);return i(this,"nav li")[0].classList.add("active"),e}))),this.isHighlightsInitialized=!0}else this.isHighlightsEnabled=!1}watchScroll(){window.addEventListener("scroll",(()=>{var t,s;t=e(this,"header"),s="shadow",window.scrollY>10?t.classList.add(s):t.classList.remove(s)}))}initHighlight(t){const s=t.map((t=>e(t.substring(t.indexOf(".ru/")+4,t.length))));window.addEventListener("scroll",(()=>{s.forEach(((t,e)=>{t.getBoundingClientRect().top<150&&this.setHighlight(e)}))}))}setHighlight(t){g=i(this,"li");for(const t of g)t.classList.remove("active");g[t].classList.add("active")}initBurger(){const t=e("#headerBurger");!function(t,e,{html:s,text:i,parent:n,onclick:o}){const l=document.createElement(t);for(const[t,s]of Object.entries(e))l.setAttribute(t,s);s&&(l.innerHTML=s),i&&(l.innerText=i),o&&(l.onclick=o),n&&n.appendChild(l)}("div",{class:"navigationOutside"},{parent:this,onclick(){t.click()}}),t.onclick=()=>{for(const t of["#headerBurger","nav","header"])e(this,`${t}`).classList.toggle("active")}}}customElements.define("site-header",p);const{copyright:v,social:b,resources:f}=s(145);class L extends HTMLElement{connectedCallback(){this.innerHTML=`\n\t\t\t<footer>\n\t\t\t\t<div class="content">\n\t\t\t\t\t<h3>Интересные Ресурсы</h3>\n\t\t\t\t\t<ul class="urls">${h(f)}</ul>\n\t\t\t\t\t\n\t\t\t\t\t<h3>Посетите мои соц-сети</h3>\n\t\t\t\t\t<ul class="social">${h(b)}</ul>\n\t\t\t\t\t\n\t\t\t\t\t<span class="divider"></span>\n\t\t\t\t\t<p>${v}</p>\n\t\t\t\t</div>\n\t\t\t</footer>\n\t\t`}}var $;customElements.define("site-footer",L),e("html").classList.remove("loading"),e("#javascriptErrorMessage").remove(),setTimeout((()=>{for(const t of[e("site-header header"),e("site-header nav")])t.classList.add("fast")}),1e3),setTimeout((()=>{return t=window,100,t.addEventListener("scroll",(()=>d(t,100))),void d();var t}),250),function(t,e){for(const t of i("title, meta[name=title]"))t.innerHTML=e}(0,($="privacy"==function(t){const e=new URL(location).searchParams.getAll("page").toString();return""==e?void 0:e}(),{title:$?"Политика Конфедициальности":"Пользовательское Соглашение"}).title)})()})();