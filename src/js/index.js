require("./default");
import { el, reveal, initReveal } from "boomutil";
import { initHeader } from "./layout/header";
import "../scss/home.scss";

initHeader(window, true);
setTimeout(() => initReveal(window, 125), 250);

import("../json/skills.json").then(data => {
	el("#skills .grid").innerHTML = (list => {
		return list.reduce((html, item) => {
			return html + `<boom-item class="card reveal"
				title="${item.title}" icon="./img/icon/${item.icon || item.title.toLowerCase()}.svg"></boom-item>`;
		}, "");
	})(data.all);
});

import("../json/projects.json").then(data => {
	const filter = el("#filter");
	
	filter.load([
		{ title: "Лучшие", gicon: "star" },
		{ title: "Самые Скачиваемые", gicon: "download" },
		{ title: "Недавние", gicon: "schedule" },
		{ title: "Отмененные", gicon: "cancel" },
		{ title: "Все", gicon: "dataset" }
	]);

	filter.onSelected = i => {
		if(i == 0) {
			loadProjects(data.best.map(item => data.all[item]));
		}
		
		if([1, 2, 3, 4].includes(i)) return alert("Данная категория еще не работает");
	}
	
	el("#seeAllProjects").addEventListener("click", () => {
		window.scrollTo(0, el("#projects").getBoundingClientRect().top + window.scrollY);
		filter.select(4);
	});
	
	function loadProjects(json) {
		el("#projects .grid").innerHTML = (list => {
			return list.reduce((html, item) => {
				const { title, description, tags, banner, link } = item;
				return html + `<a href="${link}"><boom-article class="product"
					title="${title}" description="${description}" banner="${banner}" tags="${tags}"></boom-article></a>`;
			}, "");
		})(json);
	}
	
	loadProjects(data.best.map(item => data.all[item]));
});

//EARLY UPDATES FOR LIBRARY

class BoomArticle extends HTMLElement {
	connectedCallback() {
		this.innerHTML = ((html = "", attr = name => this.getAttribute(name)) => {
			if(attr("banner")) html += `<img src="${attr("banner")}" alt="${attr("title")}">`;
			html += `<div class="details">`;
			if(attr("highlight")) html += `<span class="highlight">${attr("highlight")}</span>`;
			html += `<h3>${attr("title")}</h3>`;
			if(attr("description")) html += `<p>${attr("description")}</p>`;
			html += `</div>`;
			return html;
		})();
	}
}

customElements.define("boom-article", BoomArticle);


