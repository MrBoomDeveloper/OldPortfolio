import { el, createElement } from "boomutil";

export interface Screenshot {
	image: string,
	title?: string
}

export function fillScreenshots(items: Screenshot[]) {
	if(items) {
		const screenshotsHolder = el(".screenshots-gallery");
		
		createElement("img", {
			"class": "screenshot-active"
		}, {
			"parent": screenshotsHolder
		})
		el(".screenshots-gallery").innerHTML;
	} else {
		el("section.screenshots").remove();
	}
}

function selectScreenshot(id: number) {
	
}


