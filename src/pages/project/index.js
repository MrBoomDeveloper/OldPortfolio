import "../core";
import { el, initReveal, getParam, BoomDialog } from "boomutil";
import { initHeader } from "Components/header";
import { fillData } from "./logic/fillData";
import { fillDataSimple } from "./logic/fillDataSimple";
const github = require("Data/github");
import "./style";

window.addEventListener('scroll', () => {
	const element = el('#app > .info');
	element.style.marginTop = `-${window.scrollY / 3}px`;
});

async function getPackageData(repo) {
	try {
		const response = await fetch(`${github.api + repo}/releases/latest`, {
			headers: github.headers
		});
		const json = await response.json();
		return json;
	} catch(e) {
		new BoomDialog({
			title: "Произошла ошибка",
			description: `Во время загрузки страницы призошла ошибка. 
				Пожалуйста, попробуйте еще раз через пару минут.`,
			buttons: [{
				title: "Попробовать еще раз",
				action() { location.reload(); }
			}]
		}).show();
		console.error(e);
	}
}

el(".expand").onclick = function() {
	el("#disqus_thread").classList.add("expanded");
	setTimeout(() => this.remove(), 250);
};

(async () => {
	const projectsArray = await import("Data/projects.json");
	const projectName = getParam("name") ?? "studio";
	const projectDetails = projectsArray.all[projectName];
	const packageDetails = await getPackageData(projectDetails.repo);
	
	initHeader(false);
	setTimeout(() => initReveal(window, 125), 250);
	
	if(!packageDetails.assets) {
		fillDataSimple(projectDetails, projectName);
		return;
	}
	
	const release = packageDetails.assets[0];
	delete packageDetails.assets;
	
	const mergedData = { ...projectDetails, ...packageDetails, release };
	fillData(mergedData, projectName);
})();


