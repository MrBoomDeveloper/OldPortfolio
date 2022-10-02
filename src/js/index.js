require("./default");
import { el, initReveal } from "boomutil";
import { initHeader } from "./layout/header";
import "../scss/home.scss";

initHeader(window, true);
setTimeout(() => initReveal(window, 125), 250);

import("../json/skills.json").then(data => {
	el("#skills .grid").innerHTML = (list => {
		return list.reduce((html, item) => {
			return html + `<boom-item class="card reveal"
				title="${item.title}"
				icon="./img/icon/${item.icon || item.title.toLowerCase()}.svg">
			</boom-item>`;
		}, "");
	})(data.all);
});

const filter = el("#filter");
	
filter.load([
	{ title: "Лучшие", gicon: "star" },
	{ title: "Самые Скачиваемые", gicon: "download" },
	{ title: "Недавние", gicon: "schedule" },
	{ title: "Отмененные", gicon: "cancel" },
	{ title: "Все", gicon: "dataset" }
]);

function showProjects(json) {
	el("#projects .grid").innerHTML = (list => {
		return list.reduce((html, item) => {
			const { title, description, tags, banner, link, highlight } = item;
			return html + `<a href="${link}"><boom-article title="${title}" 
				banner="${banner ? (`./img/banner/${banner}.jpg`) : undefined}"
				highlight="${highlight}" tags="${tags}"
				description="${description}"
				class="product clickable"></boom-article></a>`;
		}, "");
	})(json);
}

const pages = {
	a0(data) {
		return data.best.map(item => {
			return data.all[item];
		});
	},
	
	a1() {
		
	},
	
	a2() {
		
	},
	
	a3(data) {
		return data.old.map(item => {
			return data.all[item];
		});
	},
	
	a4(data) {
		return Object.values(data.all);
	}
};

import("../json/projects.json").then(data => {
	filter.onSelected = i => {
		showProjects(pages[`a${i}`](data));
	};
	
	el("#seeAllProjects").addEventListener("click", () => {
		window.scrollTo(0, el("#projects").getBoundingClientRect().top + window.scrollY);
		filter.select(4);
	});
	
	showProjects(data.best.map(item => data.all[item]));
});

//EARLY UPDATES FOR LIBRARY

class BoomArticle extends HTMLElement {
	connectedCallback() {
		this.innerHTML = ((html = "", attr = name => this.getAttribute(name)) => {
			html += "<div>";
			if(attr("banner") != "undefined") {
				html += `<img src="${attr("banner")}" alt="${attr("title")}">`;
			}
			html += `<div class="details">`;
			if(attr("highlight") != "undefined") {
				html += `<span class="highlight">${attr("highlight")}</span>`;
			}
			html += `<h3>${attr("title")}</h3>`;
			if(attr("description") != "undefined") {
				html += `<p>${attr("description")}</p>`;
			}
			html += fillTags(attr("tags"));
			return html + "</div>";
		})();
	}
}

function fillTags(tags, html = "") {
	if(tags != "undefined") {
		html += `<div class="tags">`;
			html += tags.split(",").reduce((html, item) => {
				return html + `<boom-item class="tag" 
					title="${item}"></boom-item>`;
			}, "");
			html += `</div>`;
	}
	
	return html;
}

customElements.define("boom-article", BoomArticle);


