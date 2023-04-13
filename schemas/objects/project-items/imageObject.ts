import { defineType, defineField, ImageRule } from "sanity";
import { BsFillImageFill } from "react-icons/bs";

export const imageObject = defineType({
	title: 'Image',
	name: 'imageObject',
	type: 'object',
	icon: BsFillImageFill,
	fields: [
		defineField({
			title: 'Image',
			name: 'image',
			type: 'image',
			validation: (Rule:ImageRule) => Rule.required()
		}),
		defineField({
			title: 'Title',
			name: 'title',
			type: 'string',
			description: 'Title of the image.'
			// validation: Rule => Rule.required()
		}),
		defineField({
			title: 'Description',
			name: 'description',
			type: 'string',
			description: 'A brief description of the image, this could be the content of the image, the medium ,etc.'
			// validation: Rule => Rule.required()
		}),
		defineField({
			title: 'Date',
			name: 'date',
			type: 'dateRange',
			description: 'The date the image was taken.'
		})
	],
	preview: {
		select: {
			title: 'title',
			description: 'description'
		},
		prepare(value) {
			return {
				title: value.title,
				subtitle: value.description ? value.description : 'Image object.',
				media: BsFillImageFill
			}
		}
	}
})