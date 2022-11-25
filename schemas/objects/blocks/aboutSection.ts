import { defineType, defineField } from "sanity";
import { BsFillPersonLinesFill } from 'react-icons/bs';

export const aboutSection = defineType({
	title: 'About Section',
	name: 'aboutSection',
	type: 'object',
	description: 'This block uses the data provided in - Settings / About.',
	icon: BsFillPersonLinesFill,
	fields: [
		defineField({
			title: 'Personal Info',
			name: 'personalInfo',
			type: 'boolean',
			description: 'Whether to include personal information.',
		}),
		defineField({
			title: 'Curriculum Vitae Download',
			name: 'downloadCV',
			type: 'string',
			description: 'The phrase used to link the CV, if none is provided the CV won\'t be included.',
		})
	],
	preview: {
		select: {
		},
		prepare(value:any) {
			return {
				title: "About Section",
				subtitle: "Data set in Settings / About",
				media: BsFillPersonLinesFill
			}
		}
	}
})