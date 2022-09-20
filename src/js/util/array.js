export function arrayToLi(array, result = "") {
	for(const item of array) {
		result += `<li><a href="${item.link}">`;
		if(item.image) {
			result += `<img src="${item.image}" alt="${item.alt}" title="${item.alt}" />`;
		}
		if(item.title) {
			result += item.title;
		}
		result += `</li></a>`;
	}
	return result;
}