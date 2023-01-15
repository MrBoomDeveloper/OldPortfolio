import { el, els, formatBytes, formatDate, formatGithubDate } from "boomutil";
import { arrayToUl } from "Features/generateUl";
import { fillElementsSimple } from "Features/fillElements";
import { Release } from "./fillData";

interface Hero {
	banner: string,
	highlight: string,
	title: string,
	description: string,
	release?: Release
}

export function fillHero(data: Hero, parent: HTMLElement) {
	for(const bannerElement of els(".banner")) {
		bannerElement.src = `./img/large_art/${data.banner}.jpg`;
		if(!data.banner) bannerElement.remove();
	}
	
	fillElementsSimple({
		".highlight": data.highlight,
		".title": data.title,
		".description": data.description,
		".details": (data.release ? getStats(data.release) : "")
	}, parent);
	
	if(!data.release) parent.classList.add("no-release");
	if(!data.description) el(parent, '.description').remove();
}

interface Actions {
	release: Release,
	html_url: string
}

export function fillActions(actions: Actions) {
	el("main .actions").innerHTML = `
		<a href="${actions.release.browser_download_url}">
			<boom-button class="fill">Скачать</boom-button>
		</a>
		<a href="${actions.html_url}">
			<boom-button class="neon">Исходники</boom-button>
		</a>
	`;
}

function getStats({ size, download_count, updated_at }: Release) {
	return arrayToUl([
		{ gicon: "save", title: formatBytes(size) },
		{ gicon: "download", title: download_count || "0" },
		{ gicon: "schedule", title: formatDate(new Date(formatGithubDate(updated_at))) }
	]);
}


