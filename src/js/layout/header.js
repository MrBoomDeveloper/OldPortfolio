import { el, els } from "boomutil";
import { arrayToLi } from "../util/array";
const { homeUrl, links } = require("../../json/header.json");

let navActive = false;
let headerLis = [];

export function initHeader(parent, enableHighlight) {
	if(enableHighlight) {
		initHighlight(parent, links.map(item => {
			const hash = (item.url).substring(2, (item.url).length);
			headerLis = els("site-header nav li");
			headerLis[0].classList.add("active");
			return hash;
		}));
	}
	
	watchScroll(parent);
	initBurger();
}

function watchScroll(parent) {
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

function initHighlight(parent, sections) {
	const views = sections.map(hash => el(hash));
	parent.addEventListener("scroll", () => {
		views.forEach((view, id) => {
			if(view.getBoundingClientRect().top < 150) {
				setHighlight(id);
			}
		});
	});
}

function setHighlight(id) {
	for(const view of headerLis) {
		view.classList.remove("active");
	}
	headerLis[id].classList.add("active");
}

function initBurger() {
	const burger = el("site-header #headerBurger");
	const nav = el("site-header nav");
	const headerBack = el("site-header header");
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
				<ul class="content">${arrayToLi(links, true)}</ul>
			</nav>
		`;
	}
}