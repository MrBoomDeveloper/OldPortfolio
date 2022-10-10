import { el, els } from "boomutil";

let data = {};
let cats = [];

export function loadProjects(array) {
	data = array;
	loadFilters(array.categories);
}

function loadFilters(array) {
	cats = array;
	let filters = [];
	
	for(const cat of array) {
		filters.push(cat);
	}
	
	filters.push({
		"title": "Все",
		"gicon": "dataset"
	});
	
	const filter = el("#filter");
	filter.load(filters);
	filter.onselect = onSelectedFilter;
	filter.select(0);
}

function onSelectedFilter(i, item, array) {
	if(i < cats.length) {
		showProjects(array[i].content.map(item => {
			return data.all[item];
		}));
	} else {
		showProjects(Object.values(data.all));
	}
	
	els("#projects .grid a").forEach((item, i) => {
		setTimeout(() => item.classList.add("revealed"), (i  * 350));
	});
}

function showProjects(json) {
	el("#projects .grid").innerHTML = (list => {
		return list.reduce((html, item) => {
			const { title, description, tags, banner, link, highlight } = item;
			return html + `<a href="${link}" class="reveal from-right">
			<boom-article title="${title}" class="product" tags="${tags}"
				banner="${banner ? (`./img/large_art/${banner}.jpg`) : undefined}"
				highlight="${highlight}" description="${description}">
			</boom-article></a>`;
		}, "");
	})(json);
}


