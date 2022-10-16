import { el, notify } from "boomutil";

//LEGACY BULLSHIT
export function fillPackage(data) {
	if(!("assets" in data)) {
		notify("Не спешите!", "Попробуйте еще раз через пару минут.", 25000);
		return;
	}
	
	el("#update-text").innerText = data.body;
	el("#version").innerText = data.tag_name;
}

export function fillDescription(data) {
	el("#description-text").innerText = atob(data.content);
}


