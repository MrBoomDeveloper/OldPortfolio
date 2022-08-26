import { el } from "boomutil";

export default (() => {
	window.addEventListener("scroll", () => fadeHeader(document.body));
	headerBurger();
})();

function headerBurger() {
	class BoomBurger extends HTMLElement {
		connectedCallback() {
			this.innerHTML = "<span></span><span></span><span></span>"
			this.onclick = () => {
				this.classList.toggle("active")
				const nav = el("header nav")
				nav.classList.toggle("active")
				if(this.active) {
					const headerHeight = el("header").offsetHeight
					nav.style.transform = `translateY(${headerHeight}px)`
				} else {
					const headerHeight = el("header").offsetHeight
					nav.style.transform = `translateY(-100%)`
				}
			}
		}
		get active() {
			return this.classList.contains("active");
		}
	}
	customElements.define("boom-burger", BoomBurger);
}

export function fadeHeader(view) {
	const headerElement = el("header");
	if (view.scrollTop > 10) {
		headerElement.classList.add("shadow");
	} else {
		headerElement.classList.remove("shadow");
	}
}

