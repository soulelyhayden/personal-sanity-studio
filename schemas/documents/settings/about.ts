import { defineType, defineField } from "sanity";
import { emailValidation } from "../../../lib/emailValidation";

export const about = defineType({
	title: 'About',
	name: 'about',
	type: 'document',
	fields: [
		defineField({
			title: 'Screen Name // Handle',
			name: 'handle',
			type: 'string'
		}),
		defineField({
			title: 'Full Name',
			name: 'name',
			type: 'string'
		}),
		defineField({
			title: 'Description',
			name: 'description',
			description: 'A detailed about section.',
			type: 'array',
			of: [{ type: 'block' }]
		}),
		defineField({
			title: 'Curriculum Vitae',
			name: 'curriculumVitae',
			type: 'file'
		}),
		defineField({
			title: 'Email',
			name: 'email',
			type: 'string',
			validation: Rule => Rule.custom((formContact: string | undefined) => emailValidation(formContact))
		}),
		defineField({
			title: 'Socials',
			name: 'social',
			description: 'A list of all related social media accounts. The first social is treated as the primary.',
			type: 'array',
			of: [{ type: 'socialSite' }]
		}),
		// defineField({
		// 	title: 'Work Experience',
		// 	name: 'workExperience',
		// 	type: 'array',
		// 	of: [{
		// 		type: 'reference',
		// 		to: [{ type: 'workExperience' }]
		// 	}]
		// })
	],
	preview: {
		select: {
			name: 'name',
			// message: 'successMessage'
		},
		prepare(value: any) {
			return {
				title: `About${value.name ? `: ${value.name}` : ''}`
			}
		}
	}
})
