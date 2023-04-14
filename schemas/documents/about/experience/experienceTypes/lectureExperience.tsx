import { defineType, defineField } from "sanity";

export const lectureExperience = defineField({

	title: 'Lecture Experience',
	name: 'lectureExperience',
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