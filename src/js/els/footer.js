export default class Footer extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `
			<footer>
				<div class="content">
					<h3>О ваших данных</h3>
					<ul class="links">
						<li><a href="404.html">Политика Конфиденциальности</a></li>
						<li><a href="404.html">Пользовательское Соглашение</a></li>
					</ul>
					<h3>Посетите мои соц-сети</h3>
					<ul class="social">
						<li><a href="https://bit.ly/mrboomdevvk"><img src="./img/icon/vk.png"></a></li>
						<li><a href="https://bit.ly/mrboomdevyt"><img src="./img/icon/yt.png"></a></li>
						<li><a href="https://bit.ly/mrboomdevds"><img src="./img/icon/ds.png"></a></li>
					</ul>
					<span class="divider"></span>
					<p>Сайт был сделан в 2022 году прямо с мобильного телефона!</p>
				</div>
			</footer>
		`
	}
}