import { el, els, createElement } from "boomutil";
import { fillElementsSameSimple } from 'Features/fillElements';
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
	console.log(data);
	
	fillHero(data, el("main"));
	fillActions(data);
	fillScreenshots(data.screenshots, projectName);
	fillDetails(data);
	fillMetadata(data);
	createElement("div", {}, {
		html: `
			<h3>${data.name}</h3>
			<p>${data.body.replaceAll('\n', '<br>')}</p>
		`,
		parent: el("section.update")
	});
}

interface Metadata {
	title: string,
	description: string
}

export function fillMetadata({ title, description }: Metadata) {
	fillElementsSameSimple('title, meta[name="og:title"]', title);
	
	fillElementsSameSimple((`meta[name=description],
		meta[property="og:description"],
		section.description #project-description`
	), description);
	
	if(!description) el('section.description').remove();
}


