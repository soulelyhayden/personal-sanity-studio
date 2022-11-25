import { defineType, defineField } from "sanity";
import { RiPagesFill } from 'react-icons/ri';

export const navPage = defineType({
	title: 'Internal Page',
	name: 'navPage',
	description: 'Navigation to a page on your site',
	type: 'object',
	icon: RiPagesFill,
	fields: [
		defineField({
			title: 'Page',
			name: 'page',
			type: 'reference',
			description: 'Reference to a page on your site',
			to: [{ type: 'page' }],
			validation: Rule => Rule.required()
		}),
		defineField({
			title: 'Navigation Title',
			name: 'title',
			type: 'string',
			description: 'Only used if different from Page title. Not recommended'
		})
	],
	preview: {
		select: {
			title: 'title',
			subtitle: 'page.blurb',
			pageTitle: 'page.title'
		},
		prepare(selection:any) {
			const { title, subtitle, pageTitle } = selection
			return {
				title: title ? title : pageTitle,
				subtitle: subtitle ? subtitle : 'An internal site page.',
				media: RiPagesFill
			}
		}
	}
})