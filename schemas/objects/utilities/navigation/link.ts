import { defineType, defineField } from "sanity";
import { FaExternalLinkAlt } from 'react-icons/fa';

export const navPage = defineType({
	title: 'External Link',
	name: 'externalLink',
	description: 'Navigation to a page outside of your site',
	type: 'object',
	icon: FaExternalLinkAlt,
	fields: [
		defineField({
			title: 'Link Text',
			name: 'text',
			type: 'string',
			description: 'If not provided the whole raw url will be displayed.'
		}),
		defineField({
			title: 'Link',
			name: 'link',
			type: 'url',
			description: 'The link to the external resource',
			validation: (Rule) => Rule.required()
		}),
	],
	preview: {
		select: {
			text: 'text',
		},
		prepare(selection) {
			const { text } = selection
			return {
				text: text,
				subtitle: 'An external link.',
				media: FaExternalLinkAlt
			}
		}
	}
})