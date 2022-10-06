function addEffect(isHeader) {
	return isHeader ? "reveal from-top" : "";
}

export function arrayToLi(array, isHeader, result = "") {
	for(const { image, alt, title, url } of array) {
		result += `<li class="${addEffect(isHeader)}"><a href="${url}">`;
		if(image) {
			result += `<img src="${image}" alt="${alt}" title="${alt}" />`;
		}
		if(title) {
			result += title;
		}
		result += `</li></a>`;
	}
	return result;
}