import { el } from "boomutil";
import { arrayToLi } from "../util/array";

let navActive = false;
const homeUrl = "https://mrboomdev.ddns.net";
const links = [
	{ title: "Обо мне", link: "./#aboutme" },
	{ title: "Мои проекты", link: "./#projects" },
	{ title: "Связаться", link: "./#contact" }
]

export function initHeader(parent) {
	parent.addEventListener("scroll", () => {
		const headerBack = el("site-header header");
		if ((parent.scrollY || parent.scrollTop) > 10) {
			headerBack.classList.add("shadow");
		} else {
			if(!navActive) {
				headerBack.classList.remove("shadow");
			}
		}
	});
}

export default class Header extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `
			<header class="reveal">
				<div class="content">
					<a href="${homeUrl}"><h2>MrBoomDev</h2></a>
					<div id="headerBurger">
						<span></span><span></span><span></span>
					</div>
				</div>
			</header>
			<nav class="reveal">
				<ul class="content">${arrayToLi(links)}</ul>
			</nav>
		`;
	}
}

/*

window.addEventListener("load", () => {
	headerBack = el("#headerLayout");
	const headerBurger = el("#headerBurger");
	const headerNav = el("boom-header .items");
	headerBurger.addEventListener("click", function() {
		this.classList.toggle("active");
		headerActive = this.classList.contains("active");
		if(headerActive) {
			headerBack.classList.add("shadow");
			headerNav.classList.add("active");
		} else {
			headerNav.classList.remove("active");
			if((rootView?.scrollTop || 0) < 10)
				headerBack.classList.remove("shadow");
		}
	});
});

*/