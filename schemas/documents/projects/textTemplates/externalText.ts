import { defineType, defineField } from "sanity";

export const externalText = defineField({

	title: 'Internal Text Template',
	name: 'externalText',
	type: 'object',
	fields: [
		defineField({
			title: 'Link',
			name: 'link',
			type: 'externalLink',
		})
	],
})