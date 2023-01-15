import { el } from 'boomutil';

interface Skill {
	title: string,
	icon: string
}

export function fillSkills(data: any) {
	el(".skillsContent").innerHTML = (list => {
		return list.reduce((html: string, { title, icon }: Skill) => {
			return html + `<boom-item class="tag reveal from-right" loading="lazy"
				title="${title}" icon="./img/skills/${icon}.svg">
			</boom-item>`;
		}, "");
	})(data.all);
}