/*const github = {
	api: "https://api.github.com/repos/",
	key: "39f608c50067aaebb2ed63572e1b4f34cc1f91a8"
};

export function loadPackage(repo) {
	return fetch(`${github.api + repo}/releases/latest`, {
		headers: {
			"Accept": "application/vnd.github+json",
			"Authorization": github.key
		}
	}).then(response => response.json());
}

export function loadDescription(repo) {
	return fetch(`${github.api + repo}/readme`, {
		header: {
			"Accept": "application/vnd.github.VERSION.raw",
			"Authorization": github.key
		}
	}).then(response => response.json());
}*/


