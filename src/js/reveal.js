import { el, els } from "boomutil/js/general"

export default (() => {
	window.addEventListener("scroll", () => {
		reveal()
	})
	window.addEventListener("load", () => reveal())
})()

function reveal() {
	els(".reveal1").forEach((view, i) => {
		if(view.getBoundingClientRect().top < window.innerHeight - 75) {
			view.classList.add("revealed1")
		} else {
			view.classList.remove("revealed1")
		}
	})
}