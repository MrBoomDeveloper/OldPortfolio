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


