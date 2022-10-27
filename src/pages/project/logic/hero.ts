import { el, els, formatBytes, formatDate, formatGithubDate } from "boomutil";
import { arrayToUl } from "Features/generateUl";
import { Data, Release } from "Features/projectDataFill";

interface Hero {
	banner: string,
	highlight: string,
	title: string,
	description: string,
	release: Release
}

export function fillHero(data: Hero, parent: HTMLElement) {
	for(const bannerElement of els(".banner")) {
		bannerElement.src = `./img/large_art/${data.banner}.jpg`;
	}
	el(parent, ".highlight").innerText = data.highlight;
	el(parent, ".title").innerText = data.title;
	el(parent, ".description").innerHTML = data.description;
	el(parent, ".details").innerHTML = getStats(data.release);
}

function getStats({ size, download_count, updated_at }: Release) {
	return arrayToUl([
		{ gicon: "save", title: formatBytes(size) },
		{ gicon: "download", title: download_count },
		{ gicon: "schedule", title: formatDate(new Date(formatGithubDate(updated_at))) }
	]);
}


