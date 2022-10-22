interface item {
	image?: string,
	gicon?: string,
	alt?: string,
	title?: string,
	url?: string
}

export function arrayToUl(array: item[], isHeader?: boolean, result: string = "") {
	for (const {
		image, gicon, alt, title, url
	} of array) {
		result += `<li class='${isHeader ? "reveal from-top": ""}'>`;
		if (url) result += `<a href="${url}">`;
		if (image) {
			result += `<img src="${image}" alt="${alt}" title="${alt}" />`;
		}
		if (gicon) {
			result += `<span class="material-symbols-outlined">${gicon}</span>`;
		}
		if (title) result += `<span>${title}</span>`;
		if (url) result += `</a>`;
		result += `</li>`;
	}
	return result;
}