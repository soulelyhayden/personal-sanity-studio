import { defineType, defineField, UrlRule } from "sanity";
import { ImEmbed2 } from "react-icons/im";

export const embedObject = defineType({
	title: 'Embed',
	name: 'embedObject',
	type: 'object',
	icon: ImEmbed2,
	fields: [
		defineField({
			name: 'url',
			type: 'url',
			title: 'Link to the content to be embedded.',
			description: 'Tested working with: Vimeo, YouTube, Instagram, Twitter, and more.',
			validation: (Rule:UrlRule) => Rule.required()
		})
	],
	preview: {
		select: {
			textType: 'textType',
			url: 'url'
		},
		prepare(value: any) {
			return {
				title: 'Embedded Content',
				subtitle: `URL: ${value.url}`,
				media: ImEmbed2
			}
		}
	}
})