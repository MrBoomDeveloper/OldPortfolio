import "../core";
import { el, initReveal, getParam } from "boomutil";
import { fillElementsSameSimple } from 'Features/fillElements';
import "./style";

setTimeout(() => initReveal(window, 100), 250);

const terms : Terms = getTerms(getParam('page') == 'privacy');

fillElementsSameSimple('title, meta[name=title]', terms.title);

interface Terms {
	title: string
}

function getTerms(isPrivacy : boolean) {
	const result : Terms = {
		title: (isPrivacy ?  'Политика Конфедициальности' : 'Пользовательское Соглашение')
	}
	return result;
}