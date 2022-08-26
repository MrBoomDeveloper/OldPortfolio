require("./index");
import { el, error, formatBytes, formatDocType, notify } from "boomutil";
import { loadPackage, loadDescription } from "./project/load";

function formatDate(date) {
	const now = new Date();
	if(date.getYear() == now.getYear() && date.getMonth() == now.getMonth()) {
		if(date.getDay() == now.getDay()) return "Сегодня";
		if(date.getDay() == (now.getDay() - 1)) return "Вчера";
	}
	return [date.getDate(), date.getMonth(), date.getFullYear()].join(".");
}

function parseGithubDate(string) {
	const parsed = string.substring(0, 10).split("-");
	return new Date(parsed[0], parsed[1], parsed[2]);
}

//TODO: Get repo name from boomutil.location.param("repo")

const loads = [()=>loadPackage(), ()=>loadDescription()]

Promise.all(loads)

/*fetch(`${github.api}MrBoomDeveloper/BoomStudio/readme`, {
	header: {
		"Accept": "application/vnd.github.VERSION.raw",
		"Authorization": "39f608c50067aaebb2ed63572e1b4f34cc1f91a8"
	}
}).then(response => response.json())
	.then(data => {
		el("#description-text").innerText = atob(data.content);
	});
	

fetch(`${github.api}MrBoomDeveloper/BoomStudio/releases/latest`, {
	headers: {
		"Accept": "application/vnd.github+json",
		"Authorization": "39f608c50067aaebb2ed63572e1b4f34cc1f91a8"
	}
}).then(response => response.json())
	.then(result => {
		if(!("assets" in result)) {
			notify("Не спешите!", "Попробуйте еще раз через пару минут.", 25000);
			return;
		}
		const assets = result.assets[0];
		el("#size").innerText = formatBytes(assets.size);
		el("#open").href = assets.browser_download_url;
		el("#source").href = result.html_url;
		el("#downloads").innerText = assets.download_count;
		const date = new Date(parseGithubDate(assets.updated_at));
		el("#updated").innerText = formatDate(date);
		el("#update-text").innerText = result.body;
		el("#version").innerText = result.tag_name;
	}).catch(exception => error(exception.stack));*/

