function addEffect(isHeader) {
	return isHeader ? "reveal from-top" : "";
}

export function arrayToLi(array, isHeader, result = "") {
	for(const { image, alt, title, link } of array) {
		result += `<li class="${addEffect(isHeader)}"><a href="${link}">`;
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