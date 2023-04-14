import { defineType, defineField } from "sanity";

export const educationExperience = defineField({

	title: 'Education Experience',
	name: 'educationExperience',
	type: 'object',
	fields: [
		defineField({
			name: 'Note',
			type: 'note',
			description: <>The following fields are incredibly important for your SEO.You can read more<a href = "https://developer.mozilla.org/en-US/docs/Glossary/SEO" target = "_blank">here</ a >.</>,
			options: {
				// icon: MdOutlineManageSearch,
				tone: 'caution'
			}
		})
	],
})