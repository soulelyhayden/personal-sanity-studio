import { defineType, defineField } from "sanity";
import { IoDocumentsSharp } from 'react-icons/io5';
import { BiCommentDetail } from "react-icons/bi";

export const textsArchive = defineType({
	title: 'Texts Archive',
	name: 'textsArchive',
	type: 'object',
	description: 'This block uses data from your Texts.',
	icon: IoDocumentsSharp,
	fields: [
		defineField({
			name: 'Note',
			type: 'note',
			description: 'This block uses data from your Texts.',
			options: {
				icon: BiCommentDetail,
				tone: 'primary',
			},
		}),
		defineField({
			title: 'Filterable',
			name: 'filterable',
			description: 'Whether or not tag filtering is enabled for the archive.',
			type: 'boolean',
			initialValue: true
		}),
		defineField({
			title: 'Items Per Page',
			name: 'items',
			description: 'Controls the number of items per page, if set to 0 pagination will not be used.',
			type: 'number',
			initialValue: 0,
			validation: Rule => [
				Rule.max(100).warning("Do you really need pagination at this point?"),
				Rule.integer().error("Can't show partial projects!"),
				Rule.positive().error("What are you thinking...?")
			]
		}),
	],
	preview: {
		select: {
		},
		prepare(value: any) {
			return {
				title: "Texts Archive",
				subtitle: "Data pulled from Texts.",
				media: IoDocumentsSharp
			}
		}
	}
})