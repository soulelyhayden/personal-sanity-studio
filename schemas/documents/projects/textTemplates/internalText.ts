import { defineType, defineField } from "sanity";

export const internalText = defineField({

	title: 'Internal Text Template',
	name: 'internalText',
	type: 'object',
	fields: [
		defineField({
			title: 'Text',
			name: 'text',
			type: 'array',
			of: [{ type: 'block' }],
			description: 'The main content of the text.',
		}),
		defineField({
			title: 'Links',
			name: 'links',
			type: 'array',
			of: [{ type: 'internalLink' }, { type: 'externalLink' }]
		})
	],
	preview: {
		select: {
			title: 'title'
		}
	}
})