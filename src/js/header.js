import { el } from "boomutil"

export default function setupHeader(scroller, burger) {
	if(scroller) headerScroller()
	if(burger) headerBurger()
}

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
			return this.classList.contains("active")
		}
	}
	customElements.define("boom-burger", BoomBurger)
}

function headerScroller() {
	window.addEventListener("scroll", () => {
		const headerElement = el("header")
		if (document.body.scrollTop > 10) {
			headerElement.classList.add("shadow")
		} else {
			headerElement.classList.remove("shadow")
		}
	})
}