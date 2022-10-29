import { el } from "boomutil";

export function fillElementsSimple(entry: any, parent?: HTMLElement) {
	for(const [ query, html ] of Object.entries(entry)) {
		const element = parent ? el(parent, query): el(query);
		element.innerHTML = html;
	}
}


