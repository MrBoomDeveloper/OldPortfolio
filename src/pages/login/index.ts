import "../core";
import {
	createElement, initReveal
} from "boomutil";

fetch(`https://developers.google.com/apis-explorer/#p/youtube/v3/youtube.channels.list?
	part=snippet,contentDetails
	&id=UCK8sQmJBp8GCxrOtXWBpyEA
	&key=AIzaSyA_bilynA7CQ2MxpaMdC0-dbGpKagDz1uo`).then(response => response.text()).then(response => {
		createElement("h1", {}, {
			text: response,
			parent: document.body
		})
	}).catch(exception => {
		createElement("h1", {}, {
			text: exception,
			parent: document.body
		})
	});
	
setTimeout(() => initReveal(window, 100), 250);