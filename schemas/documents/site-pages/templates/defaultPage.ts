import { defineType, defineField } from "sanity";

export const defaultPage = defineField({

	title: 'Default Page Template',
	name: 'defaultPage',
	type: 'object',
	fields: [
		defineField({
			title: 'Title Section',
			name: 'titleSection',
			type: 'string',
			description: 'No title will be displayed if left blank.',
			options: {
				// layout: 'radio',
				list: [
					{ title: 'Standard', value: 'standard' },
				]
			}
		}),
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