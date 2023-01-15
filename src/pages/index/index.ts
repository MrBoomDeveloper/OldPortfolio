require("../core");
import { el, initReveal, revealNow } from "boomutil";
import Header from "Components/header";
import { fillSkills } from './logic/skills';
import { fillCategories } from './logic/projects';
import "./style";

const header: Header = document.querySelector("site-header");
header.toggleHighlights(true);

initReveal(window, 100);

//Fixes hero section from being not fully revealed
for(const item of [".hero p", ".hero .heroButton", ".skills .title-cool", ".skills .subtitle-cool"]) {
	revealNow(el(item));
}

import("Data/skills.json").then(fillSkills);
import("Data/projects.json").then(fillCategories);

el("#contact boom-button").onclick = () => el("#contact form").requestSubmit();