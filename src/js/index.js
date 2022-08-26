import "./header";
import "./views";
import { el } from "boomutil";
import "boomutil/js/views";
import "boomutil/js/events";

import { initHeader } from "./layout/header";

window.addEventListener("load", () => {
	initHeader(el("boom-header"), {
		logoTitle: "MrBoomDev",
		homeUrl: "https://mrboomdeveloper.github.io/",
		links: [
			{ name: "Обо мне", link: "#aboutme" },
			{ name: "Мои проекты", link: "#projects" },
			{ name: "Связаться", link: "#contact" }
		]
	})
});

(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)}; m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)}) (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym"); ym(89331187, "init", { clickmap:true, trackLinks:true, accurateTrackBounce:true, trackHash:true, ecommerce:"app" });