import { el, els, createElement } from "boomutil";
import { fillHero, fillActions } from "Pages/project/logic/hero";
import { fillScreenshots, Screenshot } from "Pages/project/logic/screenshots";
import { fillDetails } from "Pages/project/logic/details";

export interface Release {
	name: string,
	size: number,
	download_count: number,
	updated_at: string,
	browser_download_url: string
}

export function fillData(data: any, projectName: string) {
	fillHero(data, el("main"));
	fillActions(data);
	fillScreenshots(data.screenshots, projectName);
	fillDetails(data);
	fillMetadata(data);
	
	createElement("div", {}, {
		html: `<h3>${data.name}</h3><p>${data.body}</p>`,
		parent: el("section.update")
	});
}

interface Metadata {
	title: string,
	description: string
}

export function fillMetadata({ title, description }: Metadata) {
	el('title').textContent = title;
	
	for(const element of els(
		`meta[name=description],
		meta[property="og:description"],
		section.description p`
	)) {
		element.innerText = description;
	}
	
	if(!description) el('section.description').remove();
}


