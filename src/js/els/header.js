export default class Header extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `
			<header>
				<div class="content reveal">
					<a href="./" id="boom-logo"><h2>MrBoomDev</h2></a>
					<boom-burger></boom-burger>
					<nav>
						<ul class="content">
							<li><a href="#aboutme">Обо мне</a></li>
							<li><a href="#projects">Мои проекты</a></li>
							<li><a href="#contact">Связаться</a></li>
						</ul>
					<nav>
				</div>
			</header>
		`
	}
}

