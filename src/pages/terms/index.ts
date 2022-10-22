import "../core";
import { el, initReveal } from "boomutil";
import { initHeader } from "Components/header"; 
import "./style";

initHeader(el("html"), false);
setTimeout(() => initReveal(window, 100), 250);

createElement("p", {}, {
	html: "Извините, но страница в данный момент не доступна",
	parent: el("body"),
	onclick() {
		alert("AMOGUS;");
	}
});




//ADD TO UPDATED LIBRARY

interface elementOptions {
	html?: string,
	text?: string,
	parent?: HTMLElement,
	onclick?: any
}

interface elementAttributes {
	id?: string,
	class?: string,
	src?: string,
	href?: string,
	name?: string,
	style?: string
}

function createElement(type: string, attributes: elementAttributes, { html, text, parent, onclick }: elementOptions) {
	const element = document.createElement(type);
	for(const [key, value] of Object.entries(attributes)) {
		element.setAttribute(key, value);
	}
	if(html) element.innerHTML = html;
	if(text) element.innerText = text;
	if(onclick) element.onclick = onclick;
	if(parent) parent.appendChild(element);
	return element;
}


