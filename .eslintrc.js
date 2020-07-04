module.exports = {
	extends: 'eslint:recommended',
	env: {
		browser: true,
		commonjs: true,
		es2020: true,
		node: true,
	},
	parserOptions: {
		ecmaVersion: 11,
	},
	rules: {
		indent: ['error', 'tab'],
		semi: ['error', 'always'],
		quotes: ['error', 'single'],
		'no-trailing-spaces': [2, { 'skipBlankLines': true }]
	},
};
