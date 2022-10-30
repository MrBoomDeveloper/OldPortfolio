import '../core';
import './style';

import { el, initReveal } from 'boomutil';
import { initHeader } from 'Components/header';

initHeader(window, false);
setTimeout(() => initReveal(window, 100), 250);

const link: string = window.location.href;
//const link: string  = prompt("Hi!");
if(link.includes('/project/')) {
	const path = '/project/';
	const name = link.substr(link.lastIndexOf(path) + path.length, link.length);
	location.href = `https://mrboomdev.ru/project?name=${name}`;
}

el('#route').onclick = () => {
	window.location.href = 'https://www.example.com';
}