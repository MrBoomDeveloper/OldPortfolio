require("./default");
import { initReveal } from "boomutil";
import { initHeader } from "./layout/header";
/*import { error, el, reveal, getParam } from "boomutil";
import { loadPackage, loadDescription } from "./project/load";
import { fillPackage, fillDescription } from "./project/fill";*/
import "../scss/project.scss";

initHeader(window, false);
setTimeout(() => initReveal(window, 125), 250);

/*const repo = getParam("name") || "MrBoomDeveloper/boomstudio";
Promise.all([loadPackage(repo), loadDescription(repo)]).then(data => {
	fillPackage(data[0]);
	fillDescription(data[1]);
	reveal();
}).catch(error);*/


