import { el, els, createElement } from "boomutil";
import { arrayToUl } from "Features/generateUl";
const { homeUrl, links } = require("Data/header");

let navActive: boolean = false;
let headerLis: HTMLElement[];

export default class Header extends HTMLElement {
	isHighlightsEnabled: boolean = false;
	isHighlightsInitialized: boolean = false;
	
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
		this.watchScroll();
		this.initBurger();
	}
	
	toggleHighlights(isHighlightsEnabled: boolean) {
		if(isHighlightsEnabled) {
			if(this.isHighlightsInitialized) return;
			this.initHighlight(links.map(({ url }: any) => {
				const hash: string = url.substring(2, url.length);
				els(this, "nav li")[0].classList.add("active");
				return hash;
			}));
			this.isHighlightsInitialized = true;
		} else {
			this.isHighlightsEnabled = false;
		}
	}
	
	watchScroll() {
		window.addEventListener('scroll', () => {
			const headerBack = el(this, "header");
			setClass(headerBack, "shadow", window.scrollY > 10);
		});
	
		function setClass(element: Element, className: string, hasAdded: boolean) {
			if(hasAdded) {
				element.classList.add(className);
			} else {
				element.classList.remove(className);
			}
		}
	}
	
	initHighlight(sections: string[]) {
		const views = sections.map(hash => {
			return el(hash.substring(hash.indexOf(".ru/") + 4, hash.length));	
		});
		window.addEventListener('scroll', () => {
			views.forEach((view, id: number) => {
				if(view.getBoundingClientRect().top < 150) {
					this.setHighlight(id);
				}
			});
		});
	}

	setHighlight(id: number) {
		headerLis = els(this, 'li');
		for(const view of headerLis) {
			view.classList.remove("active");
		}
		headerLis[id].classList.add("active");
	}
	
	initBurger() {
		const burger: HTMLElement = el("#headerBurger");
		const outside: HTMLElement = createElement("div", {
			class: "navigationOutside"
		}, {
			parent: this,
			onclick() {
				burger.click();
			}
		});
		burger.onclick = () => {
			for(const element of ["#headerBurger", "nav", "header"]) {
				el(this, `${element}`).classList.toggle("active");
			}
		}
	}
}

customElements.define("site-header", Header);