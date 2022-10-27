import { el, els, formatGithubDate, formatBytes, formatDate, createElement } from "boomutil";
import { arrayToUl } from "Features/generateUl";
import { fillHero } from "Pages/project/logic/hero";
import { fillScreenshots, Screenshot } from "Pages/project/logic/screenshots";
import { fillDetails } from "Pages/project/logic/details";

//TODO: DELETE THIS FILE AND MOVE ALL FUNCTIONS INTO THE PAGE FILE

export interface Release {
	name: string,
	size: number,
	download_count: number,
	updated_at: string,
	browser_download_url: string
}

export interface Data {
	banner?: string,
	title?: string,
	description?: string,
	assets?: any,
	release?: Release,
	highlight?: string,
	html_url?: string,
	screenshots?: Screenshot[],
	tag_name?: string,
	name?: string,
	body?: string
}

export function fillProjectData(data: any) {
	fillHero(data, el("main"));
	fillProjectGeneral(data, el("main"));
	fillProjectOther(data);
	fillDetails(data);
}

interface generalData {
	title: string,
	description: string,
	release: Release,
	highlight: string
}

function fillProjectGeneral(data: generalData, parent: HTMLElement) {
	fillUpdate(data);
}

function fillProjectOther({ banner, description, release: { browser_download_url }, html_url, screenshots }: Data) {
	el("section.description p").innerHTML = description;
	el("main .actions").innerHTML = `
		<a href="${browser_download_url}">
			<boom-button class="fill">Скачать</boom-button>
		</a>
		<a href="${html_url}">
			<boom-button class="neon">Исходники</boom-button>
		</a>
	`;
	fillScreenshots(screenshots);
}

function fillUpdate({ name, body }: Data) {
	createElement("div", {}, {
		html: `<h3>${name}</h3><p>${body}</p>`,
		parent: el("section.update")
	});
}


