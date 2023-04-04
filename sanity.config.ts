import { deskTool } from 'sanity/desk'
import { defineConfig, definePlugin } from 'sanity'
import { schemaTypes } from './schemas'
import { structure, defaultDocumentNode } from './structure'
import { colorInput } from "@sanity/color-input";
import { visionTool } from '@sanity/vision'
import { noteField } from 'sanity-plugin-note-field'


const defaultDesk = deskTool({
	structure, defaultDocumentNode
})
const deskPlugins = [defaultDesk, colorInput(), visionTool(), noteField()]

export default defineConfig([
	{
		name: 'default',
		title: 'Prod',
		projectId: 'ijjxi0wa',
		dataset: 'production',
		// the base path is required whenever more than one workspace is defined and is used for route matching
		basePath: '/production',
		plugins: deskPlugins,
		schema: {
			types: schemaTypes
		}
	},
	// {
	// 	name: 'staging',
	// 	title: 'Staging',
	// 	projectId: 'ijjxi0wa',
	// 	dataset: 'development',
	// 	basePath: '/development',
	// 	plugins: deskPlugins,
	// 	schema: {
	// 		types: schemaTypes
	// 	}
	// },
])