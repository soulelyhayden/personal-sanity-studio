import { deskTool } from 'sanity/desk'
import { createConfig, createPlugin } from 'sanity'
import { schemaTypes } from './schemas'
import { structure, defaultDocumentNode } from './structure'
import { colorInput } from "@sanity/color-input";

const defaultDesk = deskTool({
	structure, defaultDocumentNode
})
const deskPlugins = [defaultDesk, colorInput()]

export default createConfig([
	{
		name: 'default',
		title: 'Prod',
		projectId: 'hautfgiz',
		dataset: 'production',
		// the base path is required whenever more than one workspace is defined and is used for route matching
		basePath: '/production',
		plugins: deskPlugins,
		schema: {
			types: schemaTypes
		}
	},
	{
		name: 'staging',
		title: 'Staging',
		projectId: 'hautfgiz',
		dataset: 'development',
		basePath: '/development',
		plugins: deskPlugins,
		schema: {
			types: schemaTypes
		}
	},
])