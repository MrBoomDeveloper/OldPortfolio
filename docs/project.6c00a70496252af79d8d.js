(()=>{"use strict";var e,t,o,r,i,a,n,s,l,d,c,m,h,f,p,g,b={315:(e,t,o)=>{function r(e,t){return"object"==typeof e?e.querySelector(t):document.querySelector(e)}function i(e,t){return"object"==typeof e?e.querySelectorAll(t):document.querySelectorAll(e)}o.d(t,{el:()=>r,oJ:()=>i,t8:()=>m});class a extends HTMLElement{connectedCallback(){this.classList.contains("large")&&(this.innerHTML=`\n\t\t\t\t<div class="info">\n\t\t\t\t\t<h2>${this.getAttribute("title")}</h2>\n\t\t\t\t\t<p>${this.getAttribute("description")}</p>\n\t\t\t\t</div>\n\t\t\t\t<span></span>\n\t\t\t`)}}class n extends HTMLElement{constructor(){super(),this.handler=()=>{},this.array={}}connectedCallback(){this.mode=this.getAttribute("mode")||"single"}attributeChangedCallback(e,t,o){"mode"==e&&(this.mode=o)}load(e){this.array=e,this.innerHTML=((t="")=>{for(const o of e)t+=`<boom-item title="${o.title}" `,"gicon"in o&&(t+=`gicon="${o.gicon}"`),t+="></boom-item>";return t})(),this.updateClickListeners()}select(e,t){this.handler(e,t,this.array),"single"==this.mode&&(this.reset(),t?t.classList.add("active"):i(this,"boom-item")[e].classList.add("active"))}updateClickListeners(){i(this,"boom-item").forEach(((e,t)=>{e.className="","single"==this.mode&&0==t&&(this.reset(),e.classList.add("active")),e.onclick=()=>this.select(t,e)}))}reset(){for(const e of i(this,"boom-item"))e.className=""}set mode(e){this.modeValue=e,this.updateClickListeners()}get mode(){return this.modeValue}set onselect(e){this.handler=e}}class s extends HTMLElement{connectedCallback(){let e="<div>";e+=function(e,t,o,r=""){return e&&(r+=`<span class="material-symbols-outlined">${e}</span>`),t&&(r+=`<img src="${t}">`),o&&(r+=`<h6>${o}</h6>`),r}(l(this,"gicon"),l(this,"icon"),l(this,"title")),e+="</div>",this.innerHTML=e}}function l(e,t){return e.getAttribute(t)}class d extends HTMLElement{connectedCallback(){this.innerHTML=`\n\t\t\t<p class="question">\n\t\t\t\t${this.getAttribute("title")}\n\t\t\t</p>\n\t\t\t<p class="answer">\n\t\t\t\t${this.getAttribute("description")}\n\t\t\t</p>\n\t\t\t<span></span>\n\t\t`;const e=r(this,".answer");this.addEventListener("click",(()=>{this.classList.toggle("active"),this.classList.contains("active")?e.style.maxHeight=e.scrollHeight+"px":e.style.maxHeight=0}))}}class c extends HTMLElement{connectedCallback(){this.innerHTML=((e="",t=(e=>this.getAttribute(e)))=>(e+="<div>","undefined"!=t("banner")&&(e+=`<img src="${t("banner")}" alt="${t("title")}">`),e+='<div class="details">',"undefined"!=t("highlight")&&(e+=`<span class="highlight">${t("highlight")}</span>`),e+=`<h3>${t("title")}</h3>`,"undefined"!=t("description")&&(e+=`<p>${t("description")}</p>`),(e+=function(e,t=""){return"undefined"!=e&&(t+='<div class="tags">',t+=e.split(",").reduce(((e,t)=>e+`<boom-item class="tag" \n\t\t\t\t\ttitle="${t}"></boom-item>`),""),t+="</div>"),t}(t("tags")))+"</div>"))()}}function m(e,t){e.addEventListener("scroll",(()=>h(e,t))),h()}function h(e=window,t=250){i(".reveal").forEach(((o,r)=>{o.getBoundingClientRect().top<e.innerHeight-t&&o.classList.add("revealed")}))}customElements.define("boom-button",a),customElements.define("boom-select",n),customElements.define("boom-item",s),customElements.define("boom-faq",d),customElements.define("boom-article",c)},65:(e,t,o)=>{o.d(t,{Z:()=>s});var r=o(81),i=o.n(r),a=o(645),n=o.n(a)()(i());n.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Lato:wght@400;500;600&display=swap);"]),n.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined);"]),n.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Raleway:wght@700&display=swap);"]),n.push([e.id,'*{margin:0;padding:0}*,*::before,*::after{box-sizing:border-box}html,body{height:100%}img,video,iframe{display:block;max-width:100%}input,textarea{font:inherit}h1,h2,h3,h4,h5,h6,a,p,li,label,span,textarea,input,img{font-family:sans-serif;color:#fff;line-height:1.2;vertical-align:baseline}a{overflow-wrap:break-word;text-decoration:none;-webkit-tap-highlight-color:rgba(0,0,0,0)}a:not(hover){color:#ffe6ff}h1,h2,h3,h4,h5,h6{font-family:"Lato",sans-serif}p{color:#ffe6ff}ul{list-style-type:none}img{line-height:1}html{background-color:#11071f;scroll-behavior:smooth;scroll-padding-top:4rem}body{background-color:linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.05))}#app{overflow:hidden;width:100%}::selection{color:#ffe6ff;background-color:rgba(102,0,204,.5)}.content{margin:auto;width:min(50rem,85%)}.reveal{opacity:0}.reveal.from-bottom{transform:translateY(1rem)}.reveal.from-bottom.revealed{transform:translateY(0)}.reveal.from-right{transform:translateX(1rem)}.reveal.from-right.revealed{transform:translateX(0)}.reveal.from-left{transform:translateX(-1rem)}.reveal.from-left.revealed{transform:translateX(0)}.reveal.from-top{transform:translateY(-1rem)}.reveal.from-top.revealed{transform:translateY(0)}.revealed{transition:1s;opacity:1}boom-button{display:inline-block;text-align:center;font-size:1em;transition:.2s}boom-button.large{box-shadow:.1rem .1rem .5rem .1rem rgba(0,0,0,.1);background-color:#140a23;border-radius:.5rem;padding:1.2rem;transition:.25s;width:100%;display:flex;gap:1rem;align-items:center;text-align:left;color:#fff}boom-button.large .info{display:grid;gap:.6rem;flex-grow:1}boom-button.large .info p{color:#ffe6ff;line-height:1.7}boom-button.large span{margin-inline:1rem;display:block;width:1rem;height:1.2rem;position:relative}boom-button.large span::before{content:"";display:block;background:#ffe6ff;position:absolute;width:1rem;height:.2rem;border:solid 2px #ffe6ff;border-radius:.2rem;transform:rotate(30deg) translateY(175%);left:0;top:0;bottom:0}boom-button.large span::after{content:"";display:block;background:#ffe6ff;position:absolute;width:1rem;height:.2rem;border:solid 2px #ffe6ff;border-radius:.2rem;transform:rotate(-30deg) translateY(-175%);left:0;top:100%;bottom:0}boom-button.large:active{transform:scale(0.95);background-color:#1d112f}boom-button.neon{padding:.8em 2em;border:#da33ff 1px solid;border-radius:2px;color:#da33ff;background-color:rgba(17,7,31,.4)}boom-button.neon span{color:#da33ff}boom-button.neon:disabled{opacity:.75}boom-button.neon:not(:disabled):is(:active,:focus){transform:scale(0.95)}boom-button.neon:not(:disabled):hover{color:#000;background-color:#da33ff}boom-button.neon:not(:disabled):hover span{color:#000}boom-select{overflow:scroll;display:flex;gap:.4rem}boom-select.chip boom-item{flex-shrink:0}boom-select.chip boom-item.active>div{background-color:#eee}boom-select.chip boom-item.active>div h6,boom-select.chip boom-item.active>div span{color:#000}boom-select.chip boom-item.active>div .material-symbols-outlined{font-variation-settings:"FILL" 1,"wght" 400,"GRAD" 0,"opsz" 48}boom-select.chip boom-item>div{transition:.2s;border-radius:.4rem;display:flex;gap:.6rem;align-items:center;padding:1rem}boom-select.chip boom-item>div img{height:1.3rem;width:1.3rem;object-fit:scale-down}boom-select.chip boom-item>div h6{font-size:1em;font-weight:500}boom-faq{box-shadow:.1rem .1rem .5rem .1rem rgba(0,0,0,.1);background-color:#140a23;border-radius:.5rem;padding:1.2rem;transition:.25s;width:100%;display:flex;flex-direction:column;padding:1.4rem;gap:0;position:relative}boom-faq.active{gap:1.2rem}boom-faq.active span{transform:rotate(180deg)}boom-faq:hover{background-color:#1d112f}boom-faq span{transition:.3s;position:absolute;right:1.5rem;top:50%;transform:translateY(-50%);margin-top:-0.2rem;display:flex}boom-faq span::before{content:"";display:block;background:#ffe6ff;width:.9rem;height:.3rem;transform:translateX(0.3rem);rotate:45deg}boom-faq span::after{content:"";display:block;background:#ffe6ff;width:.9rem;height:.3rem;transform:translateX(-0.3rem);rotate:-45deg}boom-faq .question{margin-right:3rem;font-weight:500;color:#fff;line-height:1.7}boom-faq .answer{transition:.3s;max-height:0;overflow:hidden;line-height:1.7}boom-item{box-shadow:.1rem .1rem .5rem .1rem rgba(0,0,0,.1);background-color:#140a23;border-radius:.5rem;padding:0;transition:.25s;display:inline-block}boom-item img{height:4rem;width:4rem;object-fit:contain}boom-item.tag{background-color:#1d112f}boom-item.tag>div{padding:.5em .8em}boom-item.tag>div h6{font-stretch:.9em;font-weight:600}boom-item.card>div{display:flex;flex-direction:column;padding:1rem;align-items:center;text-align:center}boom-item.card>div h6{margin-top:1em;font-size:1em;font-weight:600}boom-item.clickable:hover{background-color:#1d112f;transform:scale(0.95)}boom-article{box-shadow:.1rem .1rem .5rem .1rem rgba(0,0,0,.1);background-color:#140a23;border-radius:.5rem;padding:0;transition:.25s;display:block}boom-article:active{transform:scale(0.98)}boom-article>div{height:100%;display:flex;flex-direction:column}boom-article>div .details{flex-grow:1}boom-article:not(:has(p))>div h3{flex-grow:1;padding-bottom:.2em}boom-article:not(:has(img))>div p{flex-grow:1}boom-article img{object-fit:cover;aspect-ratio:16/9}boom-article .details{padding:1rem;display:flex;flex-direction:column;gap:.4rem}boom-article .details .highlight{font-size:.85em;color:#da33ff}boom-article .details h3{font-size:1.3em;margin-block:.1em}boom-article .details p{display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;overflow:hidden;text-overflow:ellipsis;font-size:.9em;line-height:1.7;padding-bottom:.4em}boom-article .details .tags{display:flex;flex-wrap:wrap;gap:.4rem}boom-article.product img{border-radius:.5rem .5rem 0 0}@media(max-width: 750px){boom-article h3{font-size:1.4em}boom-article p{font-size:1em}boom-article .tags{font-size:1.1em}}.dialog{position:fixed;z-index:999;width:100%;height:100%;display:flex;justify-content:center;align-items:center;opacity:0;transform:scale(0.9);transition:.3s;top:0;left:0;backdrop-filter:blur(1px);background-color:rgba(0,0,0,.5)}.dialog.active{opacity:1;transform:scale(1);transition:.1s}.dialog .content{box-shadow:.1rem .1rem .5rem .1rem rgba(0,0,0,.1);background-color:#140a23;border-radius:.5rem;padding:0;transition:.25s;max-width:90vw;max-height:90vh;overflow:scroll}.dialog .content boom-button{padding:.6em 1.2em}.dialog .content textarea,.dialog .content p.input{min-height:50vh}.dialog .content.text{width:30rem;padding:1.6rem 2rem;display:flex;flex-direction:column;gap:2rem}.dialog .content.text boom-button{margin-top:.6rem}.dialog .content.text li{margin-left:.6rem;padding-left:.2rem;list-style-type:disc;line-height:1.6}#footer{position:relative}#footer::before{display:block;position:absolute;width:100%;z-index:-1;height:100%;content:"";background-color:rgba(0,0,0,.2)}site-footer{font-size:.9em;text-align:center}site-footer .content{max-width:45rem;padding:1.7rem 0 2rem 0;display:flex;flex-direction:column;align-items:center;gap:1rem}site-footer .divider{background-color:rgba(200,200,200,.1);height:1px;width:min(90%,55vw)}site-footer a{transition:.3s}site-footer a:hover{text-decoration:underline}site-footer p,site-footer a{color:#d1bddb}site-footer h3{margin:.3em 0 .1em 0;font-weight:400;color:#f4eef6}site-footer h3:first-child{margin-bottom:.3em}site-footer ul{display:flex;flex-wrap:wrap;justify-content:center;gap:1.4rem 2rem}site-footer ul li{flex-shrink:0}@media(max-width: 750px){site-footer h3{margin-block:.4em .2em}site-footer .links{flex-direction:column;align-items:center;gap:1rem}}site-header header{height:4rem;z-index:900;width:100%;position:fixed;top:0;left:0;background-color:rgba(0,0,0,0);backdrop-filter:blur(1px);transition:1s,background-color .2s}site-header header:is(.shadow,.activeByBurger){background-color:rgba(17,7,31,.9)}site-header header .content{height:100%;display:flex;align-items:center}site-header header.fast{transition:.4s}site-header nav{z-index:999;position:fixed;top:0;right:0;pointer-events:none}site-header nav .content{display:flex;align-items:center}site-header nav a{font-family:"Roboto",sans-serif;pointer-events:auto;transition:.3s}site-header nav a:hover{color:#fff}site-header h2{font-family:"Raleway",sans-serif;font-size:1.7em;color:#da33ff;display:inline}@media(min-width: 750px){site-header #headerBurger{display:none}site-header nav{height:4rem;width:100%;z-index:999}site-header nav .content{justify-content:flex-end;gap:2rem;height:100%}site-header nav li:nth-child(2).revealed{transition-delay:.1s}site-header nav li:nth-child(3).revealed{transition-delay:.2s}site-header nav li:nth-child(4).revealed{transition-delay:.3s}site-header nav li::after{content:"";display:block;width:100%;height:0;border-radius:.2rem;transform:translateY(0.2em);background-color:#da33ff;transition:.3s}site-header nav li.active::after{height:.2rem}}@media(max-width: 750px){#app:has(nav.active)>:not(site-header){opacity:.5}#app>:not(site-header){transition:.3s}site-header header a{flex-grow:1}site-header nav{backdrop-filter:blur(1px);background-color:rgba(17,7,31,.9);top:4rem;width:20rem;height:100%;padding:2rem;transform:translateX(100%)}site-header nav .content{padding-block:1.5rem 3rem;flex-direction:column;align-items:flex-end;gap:1.2em;font-size:1.8em}site-header nav .content a:hover{text-decoration:underline}site-header nav.fast{transition:.4s}site-header nav.active{transform:translateX(0)}site-header #headerBurger{height:1.6rem;width:2.2rem;display:grid;grid-template-rows:repeat(3, 1fr);gap:.52rem;transition:.2s}site-header #headerBurger span{width:100%;height:100%;border-radius:.2rem;background-color:#ffe6ff;transition:.2s}site-header #headerBurger:active{transform:scale(0.8)}site-header #headerBurger.active span:nth-child(1){transform:rotate(-45deg) translate(-0.5rem, 0.5rem)}site-header #headerBurger.active span:nth-child(2){opacity:0;transform:rotate(90deg) translate(-0.5rem, -0.5rem)}site-header #headerBurger.active span:nth-child(3){transform:rotate(45deg) translate(-0.5rem, -0.5rem)}}.social img{width:2.6rem;height:2.6rem;object-fit:scale-down;transition:.3s;filter:invert(40%) sepia(100%) saturate(100%) hue-rotate(234deg) brightness(100%) contrast(103%)}.social img:hover{filter:invert(40%) sepia(100%) saturate(100%) hue-rotate(234deg) brightness(125%) contrast(103%)}.cat{color:#ffe6ff;font-size:1.7em;margin-bottom:.5em}.cat::before{display:inline-block;content:"";width:.6ch;height:2ch;margin-right:1ch;border-radius:1px;transform:translateY(0.4ch);background-color:#da33ff}@media(max-width: 750px){.cat{font-size:1.8em}}#app-holder #banner-holder{position:absolute;height:75vh;width:100%}#app-holder #banner-holder #banner{height:100%;width:100%;object-fit:cover}#app-holder #banner-holder #banner-overlay{position:absolute;top:0;background-image:linear-gradient(rgba(17, 7, 31, 0.2) 0%, rgba(17, 7, 31, 0.5) 65%, #11071F 100%);width:100%;height:100%}@media(min-width: 750px){#actions{display:flex;justify-content:flex-end;align-items:center;gap:.8rem;padding-bottom:.2rem}#actions a{width:49%}#actions a button{width:100%}}@media(max-width: 750px){#actions{display:grid;grid-template-columns:1fr 1fr;gap:.8rem;padding-bottom:2rem}#actions button{width:100%}}',""]);const s=n},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var o="",r=void 0!==t[5];return t[4]&&(o+="@supports (".concat(t[4],") {")),t[2]&&(o+="@media ".concat(t[2]," {")),r&&(o+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),o+=e(t),r&&(o+="}"),t[2]&&(o+="}"),t[4]&&(o+="}"),o})).join("")},t.i=function(e,o,r,i,a){"string"==typeof e&&(e=[[null,e,void 0]]);var n={};if(r)for(var s=0;s<this.length;s++){var l=this[s][0];null!=l&&(n[l]=!0)}for(var d=0;d<e.length;d++){var c=[].concat(e[d]);r&&n[c[0]]||(void 0!==a&&(void 0===c[5]||(c[1]="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {").concat(c[1],"}")),c[5]=a),o&&(c[2]?(c[1]="@media ".concat(c[2]," {").concat(c[1],"}"),c[2]=o):c[2]=o),i&&(c[4]?(c[1]="@supports (".concat(c[4],") {").concat(c[1],"}"),c[4]=i):c[4]="".concat(i)),t.push(c))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function o(e){for(var o=-1,r=0;r<t.length;r++)if(t[r].identifier===e){o=r;break}return o}function r(e,r){for(var a={},n=[],s=0;s<e.length;s++){var l=e[s],d=r.base?l[0]+r.base:l[0],c=a[d]||0,m="".concat(d," ").concat(c);a[d]=c+1;var h=o(m),f={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==h)t[h].references++,t[h].updater(f);else{var p=i(f,r);r.byIndex=s,t.splice(s,0,{identifier:m,updater:p,references:1})}n.push(m)}return n}function i(e,t){var o=t.domAPI(t);return o.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;o.update(e=t)}else o.remove()}}e.exports=function(e,i){var a=r(e=e||[],i=i||{});return function(e){e=e||[];for(var n=0;n<a.length;n++){var s=o(a[n]);t[s].references--}for(var l=r(e,i),d=0;d<a.length;d++){var c=o(a[d]);0===t[c].references&&(t[c].updater(),t.splice(c,1))}a=l}}},569:e=>{var t={};e.exports=function(e,o){var r=function(e){if(void 0===t[e]){var o=document.querySelector(e);if(window.HTMLIFrameElement&&o instanceof window.HTMLIFrameElement)try{o=o.contentDocument.head}catch(e){o=null}t[e]=o}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(o)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,o)=>{e.exports=function(e){var t=o.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(o){!function(e,t,o){var r="";o.supports&&(r+="@supports (".concat(o.supports,") {")),o.media&&(r+="@media ".concat(o.media," {"));var i=void 0!==o.layer;i&&(r+="@layer".concat(o.layer.length>0?" ".concat(o.layer):""," {")),r+=o.css,i&&(r+="}"),o.media&&(r+="}"),o.supports&&(r+="}");var a=o.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,o)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},86:(e,t,o)=>{o.r(t);var r=o(315),i=o(402);const{copyright:a,social:n,resources:s}=o(840);class l extends HTMLElement{connectedCallback(){this.innerHTML=`\n\t\t\t<footer>\n\t\t\t\t<div class="content">\n\t\t\t\t\t<h3>Интересные Ресурсы</h3>\n\t\t\t\t\t\t<ul class="urls">${(0,i.j)(s)}</ul>\n\t\t\t\t\t<h3>Посетите мои соц-сети</h3>\n\t\t\t\t\t\t<ul class="social">${(0,i.j)(n)}</ul>\n\t\t\t\t\t<span class="divider"></span>\n\t\t\t\t\t\t<p>${a}</p>\n\t\t\t\t</div>\n\t\t\t</footer>\n\t\t`}}var d=o(1);customElements.define("site-footer",l),customElements.define("site-header",d.Z),(0,r.el)("html").classList.remove("loading"),setTimeout((()=>{for(const e of[(0,r.el)("site-header header"),(0,r.el)("site-header nav")])e.classList.add("fast")}),1e3)},1:(e,t,o)=>{o.d(t,{Z:()=>d,q:()=>l});var r=o(315),i=o(402);const{homeUrl:a,links:n}=o(990);let s=[];function l(e,t){t&&function(e,t){const o=t.map((e=>(0,r.el)(e)));e.addEventListener("scroll",(()=>{o.forEach(((e,t)=>{e.getBoundingClientRect().top<150&&function(e){for(const e of s)e.classList.remove("active");s[e].classList.add("active")}(t)}))}))}(e,n.map((e=>{const t=e.url.substring(2,e.url.length);return s=(0,r.oJ)("site-header nav li"),s[0].classList.add("active"),t}))),function(e){e.addEventListener("scroll",(()=>{const t=(0,r.el)("site-header header");(e.scrollY||e.scrollTop)>10?t.classList.add("shadow"):t.classList.remove("shadow")}))}(e),function(){const e=(0,r.el)("site-header #headerBurger"),t=(0,r.el)("site-header nav"),o=(0,r.el)("site-header header");e.addEventListener("click",(()=>{e.classList.toggle("active"),t.classList.toggle("active"),o.classList.toggle("activeByBurger")}))}()}class d extends HTMLElement{connectedCallback(){this.innerHTML=`\n\t\t\t<header class="reveal">\n\t\t\t\t<div class="content">\n\t\t\t\t\t<a href="${a}"><h2>MrBoomDev</h2></a>\n\t\t\t\t\t<div id="headerBurger">\n\t\t\t\t\t\t<span></span><span></span><span></span>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</header>\n\t\t\t<nav class="reveal">\n\t\t\t\t<ul class="content">${(0,i.j)(n,!0)}</ul>\n\t\t\t</nav>\n\t\t`}}},402:(e,t,o)=>{function r(e){return e?"reveal from-top":""}function i(e,t,o=""){for(const{image:i,alt:a,title:n,url:s}of e)o+=`<li class="${r(t)}"><a href="${s}">`,i&&(o+=`<img src="${i}" alt="${a}" title="${a}" />`),n&&(o+=n),o+="</li></a>";return o}o.d(t,{j:()=>i})},840:e=>{e.exports=JSON.parse('{"copyright":"Сайт был сделан в 2022 году прямо с мобильного телефона!","social":[{"image":"./img/social/vk.png","alt":"VKontakte","url":"https://bit.ly/mrboomdevvk"},{"image":"./img/social/yt.png","alt":"YouTube","url":"https://bit.ly/mrboomdevyt"},{"image":"./img/social/ds.png","alt":"Discord","url":"https://bit.ly/mrboomdevds"}],"resources":[{"title":"Мой Плейлист","url":"https://bit.ly/mrboomdevplay"},{"title":"Репозиторий Сайта","url":"https://bit.ly/mrboomdevrepo"},{"title":"Политика Конфиденциальности","url":"404"},{"title":"Пользовательское Соглашение","url":"404"}]}')},990:e=>{e.exports=JSON.parse('{"homeUrl":"https://mrboomdev.ru","links":[{"title":"Главная","url":"./#hero"},{"title":"Мои проекты","url":"./#projects"},{"title":"Обо мне","url":"./#aboutme"},{"title":"Связаться","url":"./#contact"}]}')}},u={};function v(e){var t=u[e];if(void 0!==t)return t.exports;var o=u[e]={id:e,exports:{}};return b[e](o,o.exports,v),o.exports}v.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return v.d(t,{a:t}),t},v.d=(e,t)=>{for(var o in t)v.o(t,o)&&!v.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},v.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),v.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},v.nc=void 0,e=v(315),t=v(1),o=v(379),r=v.n(o),i=v(795),a=v.n(i),n=v(569),s=v.n(n),l=v(565),d=v.n(l),c=v(216),m=v.n(c),h=v(589),f=v.n(h),p=v(65),(g={}).styleTagTransform=f(),g.setAttributes=d(),g.insert=s().bind(null,"head"),g.domAPI=a(),g.insertStyleElement=m(),r()(p.Z,g),p.Z&&p.Z.locals&&p.Z.locals,v(86),(0,t.q)(window,!1),setTimeout((()=>(0,e.t8)(window,125)),250)})();