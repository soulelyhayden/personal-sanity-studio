import { defineType, defineField } from "sanity";
import { SiGithubsponsors } from 'react-icons/si';

export const sponsor = defineType({
	title: 'Sponsor',
	name: 'sponsor',
	description: 'Personal sponsors.',
	icon: SiGithubsponsors,
	type: 'object',
	fields: [
		defineField({
			title: 'Name',
			name: 'name',
			type: 'string',
			description: 'The full capitalized name of the sponsor.',
			validation: (Rule) => Rule.required()
		}),
		defineField({
			title: 'Description',
			name: 'description',
			type: 'string',
			description: 'A short description of their contribution, or a small thanks (will appear in the image alt text).',
		}),
		defineField({
			title: 'URL',
			name: 'url',
			type: 'url'
		}),
		defineField({
			title: 'Image',
			name: 'image',
			type: 'image',
			validation: (Rule) => Rule.required()
		})
	],
	preview: {
		select: {
			sponsorName: 'name',
			sponsorURL: 'url',
			sponsorIMG: 'image'
		},
		prepare(value: any) {
			return {
				title: `Sponsor: ${value.sponsorName}`,
				subtitle: value.sponsorURL,
				media: SiGithubsponsors
			}
		}
	}
})