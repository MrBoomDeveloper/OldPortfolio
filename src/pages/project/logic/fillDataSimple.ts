import { el } from "boomutil";
import { fillHero } from "./hero";
import { fillMetadata } from "./fillData";
import { fillScreenshots } from "./screenshots";

export function fillDataSimple(data: any, title: string) {
	fillHero(data, el('main'));
	fillMetadata(data);
	fillScreenshots(data.screenshots, title);
	
	el("section.details").remove();
}


