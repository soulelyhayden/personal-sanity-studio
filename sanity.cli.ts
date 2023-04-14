import { defineCliConfig } from 'sanity/cli'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineCliConfig({
	api: {
		projectId: 'hautfgiz',
		dataset: 'production'
	},
	vite: (viteConfig: any): any => ({
		...viteConfig,
		plugins: [...viteConfig.plugins,tsconfigPaths()],
		server: {
			...viteConfig.server,
			host: true
		}
		// ...rest of config 
	}),
})
