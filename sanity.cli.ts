import {createCliConfig} from 'sanity/cli'
import tsconfigPaths from 'vite-tsconfig-paths'

export default createCliConfig({
	api: {
		projectId: 'hautfgiz',
		dataset: 'development'
	},
	vite: (viteConfig: UserConfig): UserConfig => ({
		...viteConfig,
		plugins: [tsconfigPaths()]
		// ...rest of config 
	}),
})
