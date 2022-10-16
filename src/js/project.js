require("./default");
import { el, initReveal, getParam, formatBytes, formatDate, formatGithubDate } from "boomutil";
import { initHeader } from "./layout/header";
const github = require("../json/github.json");
import "../scss/project.scss";

async function getPackageData(repo) {
	try {
		const response = await fetch(`${github.api + repo}/releases/latest`, {
			headers: github.headers
		});
		return await response.json();
	} catch(e) {
		console.error(e);
	}
}

function fillData({ banner, title, description, highlight }, { assets , html_url }) {
	const { browser_download_url } = assets[0];
	el(".banner-holder #banner").src = `./img/large_art/${banner}.jpg`;
	el("main .highlight").innerText = highlight;
	el("main .title").innerText = title;
	el("main .info .description").innerText = description;
	el("main .actions").innerHTML = `
		<a href="${browser_download_url}">
			<boom-button class="fill">Скачать</boom-button>
		</a>
		<a href="${html_url}">
			<boom-button class="neon">Исходники</boom-button>
		</a>
	`;
}

function objToLi(icon, text) {
	return `
		<li>
			<span class="material-symbols-outlined">${icon}</span>
			<h6>${text}</h6>
		</li>
	`;
}

function fillPackageData(data) {
	const { download_count, size, updated_at } = data.assets[0];
	const items = [
		{ icon: "save", value: formatBytes(size) },
		{ icon: "download", value: download_count },
		{ icon: "schedule", value: formatDate(new Date(formatGithubDate(updated_at))) }
	];
	
	el("main .details").innerHTML = (html => {
		for(const item of items) {
			html += objToLi(item.icon, item.value);
		}
		return html;
	})("");
	console.log(data);
}

(async () => {
	const projectsArray = await import("../json/projects.json");
	const projectDetails = projectsArray.all[getParam("name") ?? "fnafm"];
	const packageDetails = await getPackageData(projectDetails.repo);
	
	initHeader(window, false);
	setTimeout(() => initReveal(window, 125), 250);
	fillData(projectDetails, packageDetails);
	fillPackageData(packageDetails);
})();


