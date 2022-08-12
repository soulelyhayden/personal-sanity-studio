import { defineType, defineField } from "sanity";
import { HiAtSymbol } from 'react-icons/hi';

const socialSiteTypes = [
	{ title: 'Twitter', value: 'twitter' },
	{ title: 'Instagram', value: 'instagram' },
	{ title: 'Facebook', value: 'facebook' },
	{ title: 'Vimeo', value: 'vimeo' },
	{ title: 'LinkedIn', value: 'linkedin' },
	{ title: 'GitHub', value: 'github' },
]

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
				list: socialSiteTypes
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
			const socialSiteTypeTitle = value.type && socialSiteTypes.flatMap(option => option.value === value.type ? [option.title] : [])

			return {
				title: `Social type: ${socialSiteTypeTitle}`,
				subtitle: value.title,
			}
		}
	}
})