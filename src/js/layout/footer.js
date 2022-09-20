import { arrayToLi } from "../util/array";

const resources = [
	{ link: "https://bit.ly/mrboomdevplay", title: "Мой Плейлист" },
	{ link: "https://bit.ly/mrboomdevrepo", title: "Репозиторий Сайта" },
	{ link: "404", title: "Политика Конфиденциальности" },
	{ link: "404", title: "Пользовательское Соглашение" }
]

const social = [
	{ link: "https://bit.ly/mrboomdevvk", image: "./img/icon/vk.png", alt: "VKontakte" },
	{ link: "https://bit.ly/mrboomdevyt", image: "./img/icon/yt.png", alt: "YouTube" },
	{ link: "https://bit.ly/mrboomdevds", image: "./img/icon/ds.png", alt: "Discord" }
]

export default class Footer extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `
			<footer>
				<div class="content">
					<h3>Интересные Ресурсы</h3>
						<ul class="links">${arrayToLi(resources)}</ul>
					<h3>Посетите мои соц-сети</h3>
						<ul class="social">${arrayToLi(social)}</ul>
					<span class="divider"></span>
						<p>Сайт был сделан в 2022 году прямо с мобильного телефона!</p>
				</div>
			</footer>
		`;
	}
}