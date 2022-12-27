(()=>{"use strict";var t={145:t=>{t.exports=JSON.parse('{"copyright":"Сайт был сделан в 2022 году прямо с мобильного телефона!","social":[{"image":"https://mrboomdev.ru/img/social/vk.png","alt":"VKontakte","url":"https://vkontakte.mrboomdev.ru"},{"image":"https://mrboomdev.ru/img/social/youtube.png","alt":"YouTube","url":"https://youtube.mrboomdev.ru"},{"image":"https://mrboomdev.ru/img/social/ds.png","alt":"Discord","url":"https://discord.mrboomdev.ru"}],"resources":[{"title":"Мой Плейлист","url":"https://music.mrboomdev.ru"},{"title":"Репозиторий Сайта","url":"https://repository.mrboomdev.ru"},{"title":"Политика Конфиденциальности","url":"https://privacy.mrboomdev.ru"},{"title":"Пользовательское Соглашение","url":"https://agreement.mrboomdev.ru"}]}')},989:t=>{t.exports=JSON.parse('{"homeUrl":"https://mrboomdev.ru","links":[{"title":"Главная","url":"https://mrboomdev.ru/#hero"},{"title":"Мои проекты","url":"https://mrboomdev.ru/#projects"},{"title":"Обо мне","url":"https://mrboomdev.ru/#aboutme"},{"title":"Связаться","url":"https://mrboomdev.ru/#contact"}]}')}},e={};function s(n){var i=e[n];if(void 0!==i)return i.exports;var o=e[n]={exports:{}};return t[n](o,o.exports,s),o.exports}(()=>{class t extends HTMLElement{connectedCallback(){this.classList.contains("large")&&(this.innerHTML=`\n\t\t\t\t<div class="info">\n\t\t\t\t\t<h2>${this.getAttribute("title")}</h2>\n\t\t\t\t\t<p>${this.getAttribute("description")}</p>\n\t\t\t\t</div>\n\t\t\t\t<span></span>\n\t\t\t`)}}function e(t,e){return"object"==typeof t?t.querySelector(e):document.querySelector(t)}function n(t,e){return"object"==typeof t?t.querySelectorAll(e):document.querySelectorAll(t)}class i extends HTMLElement{constructor(){super(),this.handler=()=>{},this.array={}}connectedCallback(){this.mode=this.getAttribute("mode")||"single"}attributeChangedCallback(t,e,s){"mode"==t&&(this.mode=s)}load(t){this.array=t,this.innerHTML=((e="")=>{for(const s of t)e+=`<boom-item class="tag"\n\t\t\t\t\ttabindex="0"\n\t\t\t\t\ttitle="${s.title}" `,"gicon"in s&&(e+=`gicon="${s.gicon}"`),e+="></boom-item>";return e})(),this.updateClickListeners()}select(t,e){this.handler(t,e,this.array),"single"==this.mode&&(this.reset(),e?e.classList.add("active"):n(this,"boom-item")[t].classList.add("active"))}updateClickListeners(){n(this,"boom-item").forEach(((t,e)=>{t.classList.remove("active"),"single"==this.mode&&0==e&&(this.reset(),t.classList.add("active")),t.onclick=()=>this.select(e,t)}))}reset(){for(const t of n(this,"boom-item"))t.classList.remove("active")}set mode(t){this.modeValue=t,this.updateClickListeners()}get mode(){return this.modeValue}set onselect(t){this.handler=t}}class o extends HTMLElement{connectedCallback(){this.innerHTML=`\n\t\t\t<p class="question">\n\t\t\t\t${this.getAttribute("title")}\n\t\t\t</p>\n\t\t\t<p class="answer">\n\t\t\t\t${this.getAttribute("description")}\n\t\t\t</p>\n\t\t\t<span></span>\n\t\t`;const t=e(this,".answer");this.addEventListener("click",(()=>{this.classList.toggle("active"),this.classList.contains("active")?t.style.maxHeight=t.scrollHeight+"px":t.style.maxHeight=0}))}}class a extends HTMLElement{connectedCallback(){let t="<div>";t+=function(t,e,s,n,i=""){return t&&(i+=`<span class="material-symbols-outlined">\n\t\t\t${t}\n\t\t</span>`),e&&(i+=`<img src="${e}" \n\t\t\ttitle="${s||""}" \n\t\t\talt="${s||""}"\n\t\t\t${n?'loading="'+n+'"':""}\n\t\t>`),s&&(i+=`<h6>${s}</h6>`),i}(r(this,"gicon"),r(this,"icon"),r(this,"title"),r(this,"loading")),t+="</div>",this.innerHTML=t}}function r(t,e){return t.getAttribute(e)}class l extends HTMLElement{connectedCallback(t="<div>"){const{banner:e,loading:s,title:n,highlight:i,description:o,tags:a}=this.attributes;e&&(t+=`<div class="banner">\n\t\t\t\t<img src="${e.value}" loading="${s.value||"auto"}"\n\t\t\t\t\talt="${n.value}" title="${n.value}">\n\t\t\t</div>`),t+='<div class="details">',n&&(t+=`<h3>${n.value}</h3>`),o&&(t+=`<p>${o.value}</p>`),a&&(t+='<div class="tags">',t+=a.value.split(",").reduce(((t,e)=>t+`<boom-item\n\t\t\t\t\t\ttitle="${e}" class="tag"\n\t\t\t\t\t></boom-item>`),""),t+="</div>"),this.innerHTML=t+"</div></div>"}}class c extends HTMLElement{constructor(t){super(),this.options=t,this.innerHTML=this[t.style??"message"](t)}message({title:t,description:e,buttons:s}){return`<div class="message">\n\t\t\t<h1>${t}</h1>\n\t\t\t<p>${e}</p>\n\t\t\t${this.getButtons(s)}\n\t\t</div>`}getButtons(t){const e=document.createElement("div");e.className="buttons";for(const{title:s}of t){const t=document.createElement("boom-button");t.className="fill",t.textContent=s,e.appendChild(t)}return e.outerHTML}show(t){(t||document.body).appendChild(this),setTimeout((()=>{this.classList.add("shown"),n(this,"boom-button").forEach((t=>{t.onclick=()=>{this.close()}}))}),250)}close(){this.classList.add("closed"),setTimeout((()=>{this.remove()}),250)}}function d(t=window,e=250){n(".reveal").forEach(((s,n)=>{s.getBoundingClientRect().top<t.innerHeight-e&&s.classList.add("revealed")}))}function m(t,e,s=""){for(const{image:n,gicon:i,alt:o,title:a,url:r,value:l}of t)s+=`<li class='${e?"reveal from-top":""}'>`,r&&(s+=`<a href="${r}">`),n&&(s+=`<img src="${n}" alt="${o||a}" title="${o||a}" />`),i&&(s+=`<span class="material-symbols-outlined">${i}</span>`),a&&(s+=`<span>${a}</span>`),l&&(s+=`<span>${l}</span>`),r&&(s+="</a>"),s+="</li>";return s}customElements.define("boom-button",t),customElements.define("boom-select",i),customElements.define("boom-item",a),customElements.define("boom-faq",o),customElements.define("boom-article",l),customElements.define("boom-dialog",c);const{homeUrl:u,links:h}=s(989);class p extends HTMLElement{connectedCallback(){this.innerHTML=`\n\t\t\t<header class="reveal">\n\t\t\t\t<div class="content">\n\t\t\t\t\t<a href="${u}"><h2>MrBoomDev</h2></a>\n\t\t\t\t\t<div id="headerBurger">\n\t\t\t\t\t\t<span></span><span></span><span></span>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</header>\n\t\t\t\n\t\t\t<nav class="reveal">\n\t\t\t\t<ul class="content">${m(h,!0)}</ul>\n\t\t\t</nav>\n\t\t`}}customElements.define("site-header",p);const{copyright:v,social:g,resources:b}=s(145);class f extends HTMLElement{connectedCallback(){this.innerHTML=`\n\t\t\t<footer>\n\t\t\t\t<div class="content">\n\t\t\t\t\t<h3>Интересные Ресурсы</h3>\n\t\t\t\t\t<ul class="urls">${m(b)}</ul>\n\t\t\t\t\t\n\t\t\t\t\t<h3>Посетите мои соц-сети</h3>\n\t\t\t\t\t<ul class="social">${m(g)}</ul>\n\t\t\t\t\t\n\t\t\t\t\t<span class="divider"></span>\n\t\t\t\t\t<p>${v}</p>\n\t\t\t\t</div>\n\t\t\t</footer>\n\t\t`}}customElements.define("site-footer",f),e("html").classList.remove("loading"),e("#javascriptErrorMessage").remove(),setTimeout((()=>{for(const t of[e("site-header header"),e("site-header nav")])t.classList.add("fast")}),1e3),window.addEventListener("scroll",(()=>{var t,s;t=e("site-header header"),s="shadow",window.scrollY>10?t.classList.add(s):t.classList.remove(s)})),e("#headerBurger").onclick=()=>{for(const t of["#headerBurger","nav","header"])e(`site-header ${t}`).classList.toggle("active")},setTimeout((()=>{return t=window,100,t.addEventListener("scroll",(()=>d(t,100))),void d();var t}),250);const L=window.location.href;if(L.includes("/project/")){const t="/project/",e=L.substr(L.lastIndexOf(t)+t.length,L.length);location.href=`https://mrboomdev.ru/project?name=${e}`}e("#route").onclick=()=>{window.location.href="https://www.example.com"}})()})();