export default class Header extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `
			<header>
				<div class="content reveal">
					<h2>MrBoomDev</h2>
					<boom-burger></boom-burger>
					<nav>
						<ul class="content">
							<li><a href="#aboutme">Обо мне</a></li>
							<li><a href="#projects">Проекты</a></li>
							<li><a href="#contact">Связаться</a></li>
						</ul>
					<nav>
				</div>
			</header>
		`
	}
}