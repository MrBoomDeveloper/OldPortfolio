import { el, notify, formatBytes } from "boomutil";

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

export function fillPackage(data) {
	if(!("assets" in data)) {
		notify("Не спешите!", "Попробуйте еще раз через пару минут.", 25000);
		return;
	}
	
	const assets = data.assets[0];
	el("#size").innerText = formatBytes(assets.size);
	el("#open").href = assets.browser_download_url;
	el("#source").href = data.html_url;
	el("#downloads").innerText = assets.download_count;
	const date = new Date(parseGithubDate(assets.updated_at));
	el("#updated").innerText = formatDate(date);
	el("#update-text").innerText = data.body;
	el("#version").innerText = data.tag_name;
}

export function fillDescription(data) {
	el("#description-text").innerText = atob(data.content);
}



