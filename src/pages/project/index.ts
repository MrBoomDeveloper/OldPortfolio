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

async function getPackageData(repo: any) {
	try {
		const response = await fetch(`${github.api + repo}/releases/latest`, {
			headers: github.headers
		});
		const json = await response.json();
		return json;
	} catch(e: any) {
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
	const projectsArray: any = await import("Data/projects.json");
	const projectName: any = getParam("name") ?? "studio";
	const projectDetails: any = projectsArray.all[projectName];
	const packageDetails: any = await getPackageData(projectDetails.repo);
	
	initHeader(false);
	setTimeout(() => initReveal(window, 125), 250);
	
	if(!packageDetails.assets) {
		fillDataSimple(projectDetails, projectName);
		return;
	}
	
	const release: any = packageDetails.assets[0];
	delete packageDetails.assets;
	
	const mergedData: any = { ...projectDetails, ...packageDetails, release };
	fillData(mergedData, projectName);
})();


