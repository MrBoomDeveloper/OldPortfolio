const { copyright, social, resources } = require("Data/footer");
import { arrayToUl } from "Features/generateUl";

export default class Footer extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `
			<footer>
				<div class="content">
					<h3>Интересные Ресурсы</h3>
						<ul class="urls">${arrayToUl(resources)}</ul>
					<h3>Посетите мои соц-сети</h3>
						<ul class="social">${arrayToUl(social)}</ul>
					<span class="divider"></span>
						<p>${copyright}</p>
				</div>
			</footer>
		`;
	}
}

(() => {
	customElements.define("site-footer", Footer);
})();


