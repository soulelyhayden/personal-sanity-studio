import { defineType, defineField } from "sanity";

export const defaultPage = defineField({

	title: 'Default Page Template',
	name: 'defaultPage',
	type: 'object',
	fields: [
		defineField({
			title: 'Blocks',
			name: 'blocks',
			type: '_blocks',
			description: 'The main content of the page.',
		})
	],
	preview: {
		select: {
			title: 'title'
		}
	}
})