require("./index");
import { error, el } from "boomutil";
import { fadeHeader } from "./layout/header";
import { loadPackage, loadDescription } from "./project/load";
import { fillPackage, fillDescription } from "./project/fill";

window.addEventListener("load", () => {
	const app = el("#app-holder")
	app.addEventListener("scroll", () => fadeHeader(app));
});

const repo = location.param("name") || "MrBoomDeveloper/boomstudio";
Promise.all([loadPackage(repo), loadDescription(repo)]).then(data => {
	fillPackage(data[0]);
	fillDescription(data[1]);
}).catch(error);

