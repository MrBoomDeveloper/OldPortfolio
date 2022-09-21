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
	initBurger();
}

function initBurger() {
	const burger = el("site-header #headerBurger");
	const nav = el("site-header nav");
	const headerBack = el("site-header header");
	burger.addEventListener("click", () => {
		burger.classList.toggle("active");
		nav.classList.toggle("active");
		headerBack.classList.toggle("activeByBurger");
	})
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