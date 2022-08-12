import { defineType, defineField } from "sanity";
import { HiAtSymbol } from 'react-icons/hi';

export const socialSite = defineType({
	title: 'Social',
	name: 'socialSite',
	description: 'Link to a social platform.',
	icon: HiAtSymbol,
	type: 'object',
	fields: [
		defineField({
			title: 'Social Title',
			name: 'socialTitle',
			type: 'string',
			description: 'The title associated with the account prefixed with the address sign (e.g. @username)',
			validation: Rule => Rule.required()
		}),
		defineField({
			title: 'Social Type',
			name: 'socialType',
			type: 'string',
			options: {
				list: [
					{ title: 'Twitter', value: 'twitter' },
					{ title: 'Instagram', value: 'instagram' },
					{ title: 'Facebook', value: 'facebook' },
					{ title: 'Vimeo', value: 'vimeo' },
					{ title: 'LinkedIn', value: 'linkedin' },
					{ title: 'GitHub', value: 'github' },
				]
			},
			validation: Rule => Rule.required()
		}),
		defineField({
			title: 'URL',
			name: 'url',
			type: 'url',
			validation: Rule => Rule.required()
		}),
		
	],
	preview: {
		select: {
			title: 'socialTitle',
			type: 'socialType'
		},
		prepare(value:any) {
			return {
				title: `Social type: ${value.type}`,
				subtitle: value.title,
			}
		}
	}
})