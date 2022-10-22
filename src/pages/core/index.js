import { el } from "boomutil";
import "Components/header";
import "Components/footer";

el("html").classList.remove("loading");

setTimeout(() => {
	for(const view of [
		el("site-header header"),
		el("site-header nav")
	]) {
		view.classList.add("fast");
	}
}, 1000);


