require("../core");
import { el, initReveal, revealNow } from "boomutil";
import { initHeader } from "Components/header";
import { loadProjects } from "Components/projectsGrid";
import "./style";

initHeader(window, true);
setTimeout(() => initReveal(window, 100), 250);

//Fixes hero section from being not fully revealed
for(const item of ["#hero p", "#hero .button-holder"]) {
	revealNow(el(item));
}

import("Data/skills").then(data => {
	el("#skills .grid").innerHTML = (list => {
		return list.reduce((html, item) => {
			return html + `<boom-item class="card reveal"
				title="${item.title}"
				icon="./img/skills/${item.icon || item.title.toLowerCase()}.svg">
			</boom-item>`;
		}, "");
	})(data.all);
});

const filter = el("#filter");
import("Data/projects").then(data => {
	loadProjects(data);
	el("#seeAllProjects").addEventListener("click", () => {
		window.scrollTo(0, el("#projects").getBoundingClientRect().top + window.scrollY);
		filter.select(4);
	});
});

el("#contact boom-button").addEventListener("click", () => {
	el("#contact form").requestSubmit();
});



