import { defineType, defineField } from "sanity";
import { emailValidation } from "../../../lib/emailValidation";
import { BsFillPersonLinesFill } from "react-icons/bs";

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
			title: 'Avatar',
			name: 'avatar',
			type: 'image',
			// validation: Rule => Rule.required()
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
		defineField({
			title: 'Experiences',
			name: 'experiences',
			type: 'array',
			of: [{
				type: 'reference',
				to: [{ type: 'experience' }],
			}]
		})
	],
	preview: {
		select: {
			name: 'name',
			// message: 'successMessage'
			handle: 'handle',
			avatar: 'avatar'
		},
		prepare(value: any) {
			return {
				title: value.handle ? value.handle : value.name ? value.name : 'About',
				media: value.avatar ? value.avatar : BsFillPersonLinesFill
			}
		}
	}
})
