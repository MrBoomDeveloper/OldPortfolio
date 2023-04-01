import { el } from "boomutil";
import { fillHero } from "./hero";
import { fillMetadata } from "./fillData";
import { fillScreenshots } from "./screenshots";

export function fillDataSimple(data: any) {
	fillHero(data, el('main'));
	fillMetadata(data);
	fillScreenshots(data.screenshots, data.name);
	
	el("section.details").remove();
}


