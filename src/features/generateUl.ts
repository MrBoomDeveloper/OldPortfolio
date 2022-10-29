interface UlItem {
	image?: string,
	gicon?: string,
	alt?: string,
	title?: string,
	value?: string,
	url?: string
}

export function arrayToUl(array: UlItem[], isHeader?: boolean, result: string = "") {
	for (const {
		image, gicon, alt, title, url, value
	} of array) {
		result += `<li class='${isHeader ? "reveal from-top": ""}'>`;
		if (url) result += `<a href="${url}">`;
		if (image) {
			result += `<img src="${image}" alt="${alt || title}" title="${alt || title}" />`;
		}
		if (gicon) {
			result += `<span class="material-symbols-outlined">${gicon}</span>`;
		}
		if (title) result += `<span>${title}</span>`;
		if (value) result += `<span>${value}</span>`;
		if (url) result += `</a>`;
		result += `</li>`;
	}
	return result;
}