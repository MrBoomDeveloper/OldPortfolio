import { el, createElement } from "boomutil";
import { arrayToUl } from "Features/generateUl";
import { Release } from "./fillData";

interface Details {
	release: Release,
	tag_name: string,
	tags: string,
	prerelease: string,
	id: string
}

export function fillDetails({ release, tag_name, tags, prerelease, id }: Details) {
	createElement("ul", { class: "details-grid" }, {
		html: arrayToUl([
			{
				title: "Название", value: release.name
			}, {
				title: "Версия", value: tag_name
			}, {
				title: "Теги", value: tags.replaceAll(",", ", ")
			}, {
				title: "Тип версии", value: (prerelease ? "Пререлиз" : "Релиз")
			}, {
				title: "Идентификатор", value: id
			}
		]),
		parent: el("section.details")
	});
}


