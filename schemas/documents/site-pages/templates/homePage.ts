import { defineType, defineField } from "sanity";

export const homePage = defineField({

	title: 'Home Page Template',
	name: 'homePage',
	type: 'object',
	fields: [
		defineField({
			title: 'Blocks',
			name: 'blocks',
			type: '_blocks',
			description: 'Blocks that will appear before the contact forum.',
		})
	],
	hidden: ({ parent, value }) => !value && parent?.pageType != 'homePage',
	preview: {
		select: {
			title: 'title'
		}
	}
})