import { el, createElement } from "boomutil";
import { arrayToUl } from "Features/generateUl";
import { Release } from "./fillData";

interface Details {
	release: Release,
	tag_name: string,
	tags: string
}

export function fillDetails({ release, tag_name, tags }: Details) {
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


