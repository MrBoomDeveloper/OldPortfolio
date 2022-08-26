import { el } from "boomutil";

export function initHeader(view, pref) {
	view.setAttribute("preferences", pref);
}

class BoomHeader extends HTMLElement {
	connectedCallback() { this.render() }
	attributeChangedCallback() { this.render() }
	
	render() {
		const pref = this.getAttribute("preferences");
		console.log(pref);
		/*this.innerHTML = `<div class="content">
			<a href="${this.homeUrl}" id="boom-logo"><h2>MrBoomDev</h2></a>
			<boom-burger></boom-burger>
		</div>
		<div class="links">
			<div class="content">`
			for(const item of pref.links) {
				this.innerHTML+= `<a href="${item.link}">${item.name}</a>`;
			}
			this.innerHTML+= `</div>
		</div>`*/
	}
	
	set preferences(daga) {
		this.
	}
}

customElements.define("boom-header", BoomHeader);

