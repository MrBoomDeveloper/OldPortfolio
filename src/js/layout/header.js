import { el } from "boomutil";

let rootView, headerBack, headerActive = false;

const homeUrl = "https://mrboomdeveloper.github.io";

const links = [
	{ title: "Обо мне", link: "./#aboutme" },
	{ title: "Мои проекты", link: "./#projects" },
	{ title: "Связаться", link: "./#contact" }
]

class BoomHeader extends HTMLElement {
	connectedCallback() {
		let html = `
		<div id="headerLayout" class="reveal">
			<div class="content">
				<a href="${homeUrl}"><h2>MrBoomDev</h2></a>
				<div id="headerBurger">
					<span></span><span></span><span></span>
				</div>
			</div>
		</div>
		<div class="items reveal">
			<div class="content">`;
				for(const item of links) {
					html += `<a href="${item.link}">${item.title}</a>`;
				}
				html += `
				<a href="./auth.html"><button neon>Войти в BoomID</button></a>
			</div>
		</div>
		`;
		this.innerHTML = html;
	}
} 

customElements.define("boom-header", BoomHeader);
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

export function fadeHeader(view) {
	rootView = view;
	if (view.scrollTop > 10) {
		headerBack.classList.add("shadow");
	} else {
		if(!headerActive)
			headerBack.classList.remove("shadow");
	}
}

export default (() => {
	window.addEventListener("scroll", () => fadeHeader(document.body));
})();

