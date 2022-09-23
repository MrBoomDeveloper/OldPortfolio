require("./index");
import { el, notify, reveal, initReveal } from "boomutil";
import { initHeader } from "./layout/header";

initHeader(window, true);
setTimeout(() => initReveal(window, 125), 250);

el("#filter").load = [
	{ title: "Java" },
	{ title: "CSS" },
	{ title: "HTML5" },
	{ title: "FireBase" }
]


