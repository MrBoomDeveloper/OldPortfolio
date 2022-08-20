import { el } from "boomutil/js/general"

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