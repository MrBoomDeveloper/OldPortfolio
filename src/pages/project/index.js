import "../core";
import { el, initReveal, getParam, BoomDialog } from "boomutil";
import { initHeader } from "Components/header";
import { fillProjectData } from "Features/projectDataFill";
const github = require("Data/github");
import "./style";

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
	const projectDetails = projectsArray.all[getParam("name") ?? "fnafm"];
	const packageDetails = await getPackageData(projectDetails.repo);
	
	initHeader(window, false);
	setTimeout(() => initReveal(window, 125), 250);
	
	const release = packageDetails.assets[0];
	delete packageDetails.assets;
	
	const mergedData = { ...projectDetails, ...packageDetails, release };
	fillProjectData(mergedData);
})();


