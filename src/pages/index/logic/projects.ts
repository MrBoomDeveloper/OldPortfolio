import { el, els, BoomDialog, createElement } from 'boomutil';

export function fillCategories(data: any) {
	const filter = el("#filter");
	filter.load([...data.categories, { "title": "Все", "gicon": "dataset"}]);
	filter.onselect = onSelectedFilter;
	filter.select(0);
	
	el("#seeAllProjects").onclick = () => {
		window.scrollTo(0, el("#projects").getBoundingClientRect().top + window.scrollY);
		filter.select(4);
	}
	
	function onSelectedFilter(i: number, item: never, array: any) {
		const cats : any = array;
		if(i == cats.length - 1) {
			fillProjects(Object.values(data.all));
		} else {
			fillProjects(array[0].content.map((item: any) => data.all[item]));
		}
	
		els("#projects .grid a").forEach((item: HTMLElement, i: number) => {
			setTimeout(() => item.classList.add("revealed"), (i  * 350));
		});
	}
}

function fillProjects(obj: any) {
	const projectsHolder: HTMLElement = el('#projects .grid');
	projectsHolder.innerHTML = '';
	for(const item of obj) {
		const linkHolder: HTMLElement = createElement('a', {
			href: item.link, 
			class: 'reveal from-right'
		},{ 
			parent: projectsHolder
		}
		
		);
		createElement('boom-article', fixParams(item), {
			parent: linkHolder
		});
		
		function fixParams({ banner, ...other }: any) {
			banner = banner ? `./img/large_art/${banner}.jpg` : undefined;
			return { banner, ...other };
		}
	}
}


