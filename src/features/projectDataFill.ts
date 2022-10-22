import { el, formatGithubDate, formatBytes, formatDate, createElement } from "boomutil";
import { arrayToUl } from "Features/generateUl";

interface Stats {
	size: number,
	download_count: number,
	updated_at: string
}

interface Data {
	banner?: string,
	title?: string,
	description?: string,
	assets?: any,
	release?: any,
	highlight?: string,
	html_url?: string,
	screenshots?: Screenshot[]
}

function getStats({ size, download_count, updated_at }: Stats) {
	return arrayToUl([
		{ gicon: "save", title: formatBytes(size) },
		{ gicon: "download", title: download_count },
		{ gicon: "schedule", title: formatDate(new Date(formatGithubDate(updated_at))) }
	]);
}

export function fillProjectData(data: Data) {
	fillProjectGeneral(data, el("main"));
	fillProjectOther(data);
	fillDetails(data);
}

function fillProjectGeneral(data: Data, parent: HTMLElement) {
	const { title, description, release, highlight } = data;
	el(parent, ".highlight").innerText = highlight;
	el(parent, ".title").innerText = title;
	el(parent, ".description").innerHTML = description;
	el(parent, ".details").innerHTML = getStats(release);
	console.log(data);
}

function fillProjectOther({ banner, description, release, html_url, screenshots }: Data) {
	el("#banner").src = `./img/large_art/${banner}.jpg`;
	el("section.description p").innerHTML = description;
	el("main .actions").innerHTML = `
		<a href="${release.browser_download_url}">
			<boom-button class="fill">Скачать</boom-button>
		</a>
		<a href="${html_url}">
			<boom-button class="neon">Исходники</boom-button>
		</a>
	`;
	fillScreenshots(screenshots);
}

interface Screenshot {
	image: string,
	title?: string
}

function fillScreenshots(items: Screenshot[]) {
	if(items) {
		throw new Error("Not yet implemented!");
	} else {
		el("section.screenshots").style.display = "none";
	}
}

function fillDetails(items: Data) {
	createElement("ul", { class: "details-grid" }, {
		html: arrayToUl([
			{
				title: "test"
			},
			{
				title: "test1"
			},
			{
				title: "test2"
			}
		]),
		parent: el("section.details")
	});
}


