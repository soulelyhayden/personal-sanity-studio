import { defineType, defineField, StringRule } from "sanity";
import { GiOrbital } from 'react-icons/gi';

export const experience = defineType({
	title: "Experiences",
	name: "experience",
	type: 'document',
	icon: GiOrbital,
	groups: [
		{
			name: 'experienceSettings',
			title: 'Experience Settings',
		},
		{
			name: 'experienceContent',
			title: 'Experience Content',
		},
	],
	fields: [
		defineField({
			title: 'Title',
			name: 'title',
			type: 'string',
			group: 'experienceSettings',
			description: 'Title of the experience.',
			validation: (Rule: StringRule) => [
				Rule.required().error("Experience needs a title!"),
			]
		}),
		defineField({
			title: 'Date',
			name: 'date',
			type: 'dateRange',
			group: 'experienceSettings',
			validation: (Rule) => [
				Rule.required().warning("Experiences should have a date!"),
			]
		}),
		defineField({
			title: 'Experience Description',
			name: 'description',
			type: 'text',
			group: 'experienceSettings',
			description: 'A description of the experience.',
		}),
		defineField({
			title: 'Tags',
			name: 'tags',
			type: 'array',
			of: [{
				type: 'reference',
				to: [{ type: 'experienceTag' }]
			}]
		}),
		defineField({
			title: 'Employer',
			name: 'employer',
			type: 'reference',
			to: [{ type: 'employer' }],
			// weak: true
		}),
		// defineField({
		// 	title: 'Content',
		// 	name: 'content',
		// 	type: 'experienceTypes',
		// 	group: 'experienceContent',
		// 	description: 'The main content of the experience.',
		// })
	],
	preview: {
		select: {
			title: 'title',
		},
		prepare(value: any) {
			return {
				title: value.title,
				media: GiOrbital
			}
		}
	}
});