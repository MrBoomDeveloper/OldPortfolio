import { el } from "./library";
import "./views";

el("html").classList.remove("loading");

setTimeout(() => {
	for(const view of [
		el("site-header header"),
		el("site-header nav")
	]) {
		view.classList.add("fast");
	}
}, 1000);

if(location.hostname == "localhost") {
	/*const eruda = document.createElement("div");
	eruda.innerHTML = `
		<script src="https://cdn.jsdelivr.net/npm/eruda"></script>
		<script defer>eruda.init()</script>
	`;
	document.body.appendChild(eruda);*/
	
	/*const script = document.createElement("script");
	script.src = "https://cdn.jsdelivr.net/npm/eruda";
	document.body.appendChild(script);
	const scriptRunner = document.createElement("script");
	scriptRunner.innerHTML = "eruda.init()";
	document.body.appendChild(scriptRunner);*/
}



