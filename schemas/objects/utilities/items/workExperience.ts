import { defineType, defineField } from "sanity";
import { GiOfficeChair } from 'react-icons/gi';


export const workExperience = defineType({
	title: 'Work Experience',
	name: 'workExperience',
	description: 'Personal & professional experience.',
	icon: GiOfficeChair,
	type: 'object',
	fields: [
		defineField({
			title: 'Job Title',
			name: 'jobTitle',
			type: 'string',
			description: 'Title of the experience.',
			validation: Rule => Rule.required()
		}),
		defineField({
			title: 'Position Title',
			name: 'positionTitle',
			type: 'string',
			description: 'Your title during this position.',
			validation: Rule => Rule.required()
		}),
		defineField({
			title: 'Employer',
			name: 'employer',
			type: 'string',
			validation: Rule => Rule.required()
		}),
		defineField({
			title: 'Duration',
			name: 'duration',
			type: 'dateRange',
			description: 'Time spent at this experience.',
			validation: Rule => Rule.required()
		}),
		defineField({
			title: 'Tags',
			name: 'tags',
			type: 'array',
			of: [{type: 'string'}]
		}),
		defineField({
			title: 'Description',
			name: 'description',
			type: 'array',
			of: [{ type: 'block' }]
		})

	],
	preview: {
		select: {
			title: 'jobTitle',
			employer: 'employer'
		},
		prepare(value: any) {
			return {
				title: value.title,
				subtitle: value.employer,
				media: GiOfficeChair
			}
		}
	}
})