import { el, els } from "boomutil";
import { arrayToUl } from "Features/generateUl";
const { homeUrl, links } = require("Data/header");

let navActive: boolean = false;
let headerLis: HTMLElement[] = [];

export function initHeader(parent: Window, enableHighlight: boolean) {
	if(enableHighlight) {
		initHighlight(parent, links.map(({ url }: any) => {
			const hash: string = url.substring(2, url.length);
			els("site-header nav li")[0].classList.add("active");
			return hash;
		}));
	}
	
	watchScroll(parent);
	initBurger();
}

function watchScroll(parent: Window) {
	parent.onscroll = () => {
		const headerBack = el("site-header header");
		setClass(headerBack, "shadow", parent.scrollY > 10);
	}
	
	function setClass(element: Element, className: string, hasAdded: boolean) {
		if(hasAdded) {
			element.classList.add(className);
		} else {
			element.classList.remove(className);
		}
	}
}

function initHighlight(parent: HTMLElement | Window, sections: string[]) {
	const views = sections.map(hash => el(hash));
	parent.onscroll = () => {
		views.forEach((view, id: number) => {
			if(view.getBoundingClientRect().top < 150) {
				setHighlight(id);
			}
		});
	}
}

function setHighlight(id: number) {
	for(const view of headerLis) {
		view.classList.remove("active");
	}
	headerLis[id].classList.add("active");
}

function initBurger() {
	el("#headerBurger").onclick = () => {
		for(const element of ["#headerBurger", "nav", "header"]) {
			el(`site-header ${element}`).classList.toggle("active");
		}
	}
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

customElements.define("site-header", Header);


