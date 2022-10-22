module.exports = {
	"env": {
		"browser": true,
		"node": true,
		"es2021": true,
		"commonjs": true
	},
	"extends": "eslint:recommended",
	"overrides": [
	],
	"parserOptions": {
		"ecmaVersion": "latest",
		"sourceType": "module"
	},
	"rules": {
		"semi": ["error", "always"],
		"max-lines-per-function": ["error", 20],
		"max-len": ["error", { "code": 85, "ignoreUrls": true, "ignoreStrings": true }],
		"no-alert": "error",
		"no-var": "error",
		"arrow-spacing": "error"
	}
}


