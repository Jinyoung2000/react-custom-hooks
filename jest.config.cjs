// eslint-disable-next-line no-undef
module.exports = {
	transform: {
		'^.+\\.(t|j)sx?$': '@swc/jest',
	},
	moduleNameMapper: {
		'^(\\.{1,2}/.*)\\.js$': '$1',
	},
	testEnvironment: 'jsdom',

	// MEMO: TO FIX 'toBeInTheDocument' type error
	setupFilesAfterEnv: ['@testing-library/jest-dom'],

	// MEMO: React is not Defined ifx
	transform: {
		'^.+\\.(ts|tsx)$': [
			'@swc/jest',
			{
				sourceMaps: true,
				jsc: {
					parser: {
						syntax: 'typescript',
						tsx: true,
						decorators: false,
						dynamicImport: false,
					},
					transform: {
						react: {
							runtime: 'automatic',
						},
					},
				},
			},
		],
	},
}
