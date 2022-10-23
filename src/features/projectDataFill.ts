import { el, els, formatGithubDate, formatBytes, formatDate, createElement } from "boomutil";
import { arrayToUl } from "Features/generateUl";

interface Release {
	name: string,
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
	screenshots?: Screenshot[],
	tag_name?: string,
	name?: string,
	body?: string
}

function getStats({ size, download_count, updated_at }: Release) {
	return arrayToUl([
		{ gicon: "save", title: formatBytes(size) },
		{ gicon: "download", title: download_count },
		{ gicon: "schedule", title: formatDate(new Date(formatGithubDate(updated_at))) }
	]);
}

export function fillProjectData(data: any) {
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
	const { title, description, release, highlight } = data;
	el(parent, ".highlight").innerText = highlight;
	el(parent, ".title").innerText = title;
	el(parent, ".description").innerHTML = description;
	el(parent, ".details").innerHTML = getStats(release);
	fillUpdage(data);
}

function fillProjectOther({ banner, description, release: { browser_download_url }, html_url, screenshots }: Data) {
	for(const bannerElement of els(".banner")) {
		bannerElement.src = `./img/large_art/${banner}.jpg`;
	}
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

interface Screenshot {
	image: string,
	title?: string
}

function fillScreenshots(items: Screenshot[]) {
	if(items) {
		throw new Error("Not yet implemented!");
	} else {
		el("section.screenshots").remove();
	}
}

interface detailsData {
	release: Release,
	tag_name: string,
	tags: string
}

function fillUpdage({ name, body }: Data) {
	createElement("div", {}, {
		html: `<h3>${name}</h3><p>${body}</p>`,
		parent: el("section.update")
	});
}

function fillDetails({ release, tag_name, tags }: detailsData) {
	createElement("ul", { class: "details-grid" }, {
		html: arrayToUl([
			{
				title: "Название", value: release.name
			}, {
				title: "Версия", value: tag_name
			}, {
				title: "Теги", value: tags.replaceAll(",", ", ")
			}
		]),
		parent: el("section.details")
	});
}


