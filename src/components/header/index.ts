import { el, els } from "boomutil";
import { arrayToUl } from "Features/generateUl";
const { homeUrl, links } = require("Data/header");

let navActive: boolean = false;
let headerLis: HTMLElement[] = [];

interface linkItem {
	url: string
}

export function initHeader(parent: HTMLElement, enableHighlight: boolean) {
	if(enableHighlight) {
		initHighlight(parent, links.map((item: linkItem) => {
			const hash: string = (item.url).substring(2, (item.url).length);
			headerLis = els("site-header nav li");
			headerLis[0].classList.add("active");
			return hash;
		}));
	}
	
	watchScroll(parent);
	initBurger();
}

function watchScroll(parent: HTMLElement | Window) {
	parent.addEventListener("scroll", () => {
		const headerBack = el("site-header header");
		
		if(parent instanceof Window) {
			if (parent.scrollY > 10) {
				headerBack.classList.add("shadow");
			} else {
				if(!navActive) {
					headerBack.classList.remove("shadow");
				}
			}
		} else {
			if (parent.scrollTop > 10) {
				headerBack.classList.add("shadow");
			} else {
				if(!navActive) {
					headerBack.classList.remove("shadow");
				}
			}
		}
	});
}

function initHighlight(parent: HTMLElement | Window, sections: string[]) {
	const views = sections.map(hash => el(hash));
	parent.addEventListener("scroll", () => {
		views.forEach((view, id: number) => {
			if(view.getBoundingClientRect().top < 150) {
				setHighlight(id);
			}
		});
	});
}

function setHighlight(id: number) {
	for(const view of headerLis) {
		view.classList.remove("active");
	}
	headerLis[id].classList.add("active");
}

function initBurger() {
	const burger: HTMLElement = el("site-header #headerBurger");
	const nav: HTMLElement = el("site-header nav");
	const headerBack: HTMLElement = el("site-header header");
	burger.addEventListener("click", () => {
		burger.classList.toggle("active");
		nav.classList.toggle("active");
		headerBack.classList.toggle("activeByBurger");
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
				<ul class="content">${arrayToUl(links, true)}</ul>
			</nav>
		`;
	}
}

(() => {
	customElements.define("site-header", Header);
})();


