module.exports = {
	root: true,
	parser: '@typescript-eslint/parser',
	plugins: [
		'@typescript-eslint',
		'react',
		'react-hooks',
		'jest',
		'import'
	],
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:react/recommended',
		'plugin:react-hooks/recommended',
		'plugin:jest/recommended',
		'plugin:import/errors',
		'plugin:import/warnings',
		'plugin:import/typescript'
	],
	env: {
		'browser': true,
		'node': true,
		'jest': true
	},
	rules: {
		'indent': ['error', 'tab'],
		'semi': ['error', 'never'],
		'quotes': ['error', 'single'],
		'@typescript-eslint/explicit-module-boundary-types': 'off'
	},
	settings: {
		react: {
			version: 'detect'
		}
	}
}