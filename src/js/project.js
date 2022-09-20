require("./index");
import { error, el, reveal } from "boomutil";
import { initHeader } from "./layout/header";
import { loadPackage, loadDescription } from "./project/load";
import { fillPackage, fillDescription } from "./project/fill";

initHeader(el("#app-holder"));

	const a = el("#app-holder");
	a.addEventListener("scroll", () => {
		console.log(a.scrollTop);
	})

const repo = location.param("name") || "MrBoomDeveloper/boomstudio";
Promise.all([loadPackage(repo), loadDescription(repo)]).then(data => {
	fillPackage(data[0]);
	fillDescription(data[1]);
	reveal();
}).catch(error);

