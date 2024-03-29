import '../core';
import { el, initReveal } from 'boomutil';
import './style';

setTimeout(() => initReveal(window, 100), 250);

const link: string = window.location.href;
if(link.includes('/project/')) {
	const path = '/project/';
	const name = link.substr(link.lastIndexOf(path) + path.length, link.length);
	location.href = `https://mrboomdev.ru/project?name=${name}`;
}

el('#route').onclick = () => {
	window.location.href = 'https://www.example.com';
}