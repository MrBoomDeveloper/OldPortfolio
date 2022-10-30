import { el, els } from "boomutil";

export function fillElementsSimple(entry: any, parent?: HTMLElement) {
	for(const [ query, content ] of Object.entries(entry)) {
		const element = parent ? el(parent, query): el(query);
		element.innerHTML = content;
	}
}

export function fillElementsSameSimple(entry: string, content: string) {
	for(const element of els(entry)) {
		element.innerHTML = content;
	}
}


