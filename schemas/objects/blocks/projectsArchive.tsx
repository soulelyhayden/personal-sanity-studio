import { defineType, defineField } from "sanity";
import { AiFillFileImage } from 'react-icons/ai';
import { BiCommentDetail } from "react-icons/bi";

export const projectsArchive = defineType({
	title: 'Projects Archive',
	name: 'projectsArchive',
	type: 'object',
	description: 'This block uses data from your Projects.',
	icon: AiFillFileImage,
	fields: [
		defineField({
			name: 'Note',
			type: 'note',
			description: 'This block uses data from your Projects.',
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
				title: "Projects Archive",
				subtitle: "Data pulled from Projects.",
				media: AiFillFileImage
			}
		}
	}
})