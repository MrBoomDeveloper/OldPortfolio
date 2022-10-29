import { el, els, createElement } from "boomutil";
import { fillElementsSimple } from "Features/fillElements";
import { arrayToUl } from "Features/generateUl";

let projectName : string;
let totalScreenshots : number;
let currentScreenshot : number = 0;
let screenshotsAutoSwitchInterval : ReturnType<typeof setInterval>;

export interface Screenshot {
	image: string,
	title?: string
}

export function fillScreenshots(items : Screenshot[], project: string) {
	if(!items) {
		el("section.screenshots").remove();
		return;
	}
	
	projectName = project;
	totalScreenshots = items.length;
	const parent = el(".screenshots-gallery");
	fillScreenshotsUl(items, parent, true);
	fillScreenshotsUl(items, parent, false);
	screenshotsAutoSwitchInterval = setInterval(screenshotsAutoSwitch, 3000);
	selectScreenshot(0);
}

function screenshotsAutoSwitch() {
	currentScreenshot++;
	if(currentScreenshot == totalScreenshots) {
		currentScreenshot = 0;
	}
	selectScreenshot(currentScreenshot);
}

function fillScreenshotsUl(entry : Screenshot[], parent : HTMLElement, isBig : boolean) {
	const rowHolder = createElement("div", { class: "row-holder" }, { parent });
	
	const screenshotsUl = createElement("ul", { 
		class: (isBig ? "big" : "small")
	}, {
		html: arrayToUl(entry.map(changeImageUrl)),
		parent: rowHolder,
	});
	
	els(screenshotsUl, "li").forEach((item: HTMLElement, i: number) => {
		item.onclick = () => {
			selectScreenshot(i);
			clearInterval(screenshotsAutoSwitchInterval);
		}
	});
	
	function changeImageUrl({ image, ...other }: any) {
		/* Данная функция добавляет полный путь для картинок, так как в json файле только названия файлов
		   А еще она позволяет при клике раскрыть картинку на весь экран */
		
		const url = `./img/screenshots/${projectName}/${image}`;
		image = url;
		if(isBig) other.url = url;
		return { image, ...other };
	}
}

function selectScreenshot(id: number) {
	const elements = [...els(".row-holder .big > *"), ...els(".row-holder .small > *")];
	for(const element of elements) {
		element.classList.remove("active");
	}
	
	for(const size of ["big", "small"]) {
		const row : HTMLElement = el(`.row-holder .${size}`);
		const nextActive : HTMLElement = els(row, 'li')[id];
		nextActive.classList.add("active");
		row.scrollTo(nextActive.offsetLeft - row.offsetLeft, 0);
	}
}


