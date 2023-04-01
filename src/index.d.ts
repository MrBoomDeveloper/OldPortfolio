declare module "Data/skills.json" {
	const value: any;
	export default value;
}

declare module "Data/projects.json" {
	export interface Project {
		highlight: string,
		title: string,
		description: string,
		banner: string,
		gamejolt: number
	}
	
	const all: Project[];
	
	export default interface Projects {
		all: Project[]
	}
}