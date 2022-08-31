require("./index");
import { el } from "boomutil";

(async () => {
	const projects = await import("../json/projects");
	console.log(projects);
})();

class BoomFilter extends HTMLElement {
	connectedCallback() {
		this.render();
	}
	
	render() {
		let html = "";
		if(!this.cats) return;
		try {
			for(const cat of this.cats) {
				html+= `<boom-item title="${cat}" type="${this.getAttribute('type')}" class="reveal"></boom-item>`;
			}
		} catch(exception) {
			console.error(exception + ".........");
		}
		this.innerHTML = html;
	}
	
	set array(arr) {
		this.cats = arr;
		this.render();
	}
	
	get array() {
		return this.cats;
	}
}

customElements.define("boom-filter", BoomFilter);

window.onload = () => {
	el("#tags").array = ["test", "test1", "test2"];
}