import { deskTool } from 'sanity/desk'
import { defineConfig, definePlugin } from 'sanity'
import { schemaTypes } from './schemas'
import { structure, schemaOptions, documentOptions } from './structure'
import { colorInput } from "@sanity/color-input";
import { visionTool } from '@sanity/vision'
import { noteField } from 'sanity-plugin-note-field'
import { media } from 'sanity-plugin-media'

const defaultDesk = deskTool({
	structure,
})
const deskPlugins = [defaultDesk, colorInput(), visionTool(), noteField(), media()]

export default defineConfig([
	{
		name: 'default',
		title: 'Prod',
		projectId: 'hautfgiz',
		dataset: 'production',
		// the base path is required whenever more than one workspace is defined and is used for route matching
		basePath: '/production',
		plugins: deskPlugins,
		schema: schemaOptions,
		document: documentOptions
	},
	{
		name: 'staging',
		title: 'Staging',
		projectId: 'hautfgiz',
		dataset: 'development',
		basePath: '/development',
		plugins: deskPlugins,
		schema: schemaOptions,
		document: documentOptions
	},
])