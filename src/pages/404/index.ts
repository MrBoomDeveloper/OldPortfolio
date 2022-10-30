import '../core';
import './style';

import { el, initReveal } from 'boomutil';
import { initHeader } from 'Components/header';

initHeader(window, false);
setTimeout(() => initReveal(window, 100), 250);

const link = window.location.href;
alert(link);
if(link.includes('/project/')) {
	const name = link.substring(link.lastIndexOf('project/'), link.length);
	alert(name);
	location.href = `https://mrboomdev.ru/project?name=${name}`;
}

el('#route').onclick = () => {
	window.location.href = 'https://www.example.com';
}