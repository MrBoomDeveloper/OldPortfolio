import "../core";
import { el, initReveal, getParam, BoomDialog } from "boomutil";
import { fillData } from "./logic/fillData";
import { fillDataSimple } from "./logic/fillDataSimple";
const github = require("Data/github");
import Projects, { Project } from "Data/projects.json";
import "./style";

setTimeout(() => initReveal(window, 125), 250);
(async () => {
	const projects: Projects = await import("Data/projects.json");
	const project: Project = projects.all[getParam("name")];
	el(".highlight").innerText = project.highlight;
	el(".title").innerText = project.title;
	el("#project-description").innerText = project.description;
	el(".banner").src = `./img/large_art/${project.banner}.jpg`;
	if("gamejolt" in project) loadGamejolt(project.gamejolt);
})();

async function loadGamejolt(id: number) {
	const project: any = await fetch(`https://gamejolt.com/site-api/web/discover/games/overview/${id}`);
	(document.getElementById("heroButtonDownload") as HTMLAnchorElement).href = `https://gamejolt.com/games/actionplatformer/${id}`;
	//el("#heroButtonDownload").href = `https://gamejolt.com/games/actionplatformer/${id}`;
	//el("#project-description").innerText = project.payload.
}

/*async function getPackageData(repo: any) {
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
}*/

/*(async () => {
	const projectsArray: any = await import("Data/projects.json");
	const projectDetails: any = projectsArray.all[getParam("name")];
	const packageDetails: any = await getPackageData(projectDetails.repo);
	
	setTimeout(() => initReveal(window, 125), 250);
	
	if(!packageDetails.assets) {
		fillDataSimple(projectDetails);
		return;
	}
	
	const release: any = packageDetails.assets[0];
	delete packageDetails.assets;
	
	const mergedData: any = { ...projectDetails, ...packageDetails, release };
	fillData(mergedData);
})();*/