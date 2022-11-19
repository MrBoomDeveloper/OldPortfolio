require("../core");
import { el, initReveal, revealNow } from "boomutil";
import { initHeader } from "Components/header";
import { fillSkills } from './logic/skills';
import { fillCategories } from './logic/projects';
import "./style";

initHeader(true);
initReveal(window, 100);

//Fixes hero section from being not fully revealed
for(const item of ["#hero p", "#hero .button-holder"]) {
	revealNow(el(item));
}

import("Data/skills.json").then(fillSkills);
import("Data/projects.json").then(fillCategories);

el("#contact boom-button").onclick = () => el("#contact form").requestSubmit();