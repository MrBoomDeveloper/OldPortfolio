import { arrayToLi } from "../util/array";
const { copyright, social, resources } = require("../../json/footer.json");

export default class Footer extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `
			<footer>
				<div class="content">
					<h3>Интересные Ресурсы</h3>
						<ul class="urls">${arrayToLi(resources)}</ul>
					<h3>Посетите мои соц-сети</h3>
						<ul class="social">${arrayToLi(social)}</ul>
					<span class="divider"></span>
						<p>${copyright}</p>
				</div>
			</footer>
		`;
	}
}