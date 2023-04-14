import { deskTool } from 'sanity/desk'
import { defineConfig, definePlugin } from 'sanity'
import { schemaTypes } from './schemas'
import { structure, schemaOptions, documentOptions } from './structure'
import { colorInput } from "@sanity/color-input";
import { visionTool } from '@sanity/vision'
import { noteField } from 'sanity-plugin-note-field'

// Define the actions that should be available for singleton documents
const singletonActions = new Set(["publish", "discardChanges", "restore"])

// Define the singleton document types
const singletonTypes = new Set(["siteSettings", "navigation", "theme", "about"])


const defaultDesk = deskTool({
	structure,
})
const deskPlugins = [defaultDesk, colorInput(), visionTool(), noteField()]

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