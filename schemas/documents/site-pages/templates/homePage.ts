import { defineType, defineField } from "sanity";

export const homePage = defineField({

	title: 'Home Page Template',
	name: 'homePage',
	type: 'object',
	fields: [
		defineField({
			title: 'Blocks',
			name: 'blocks',
			type: 'blockTypes',
			description: 'Blocks that will appear before the contact forum.',
		})
	],
	preview: {
		select: {
			title: 'title'
		}
	}
})