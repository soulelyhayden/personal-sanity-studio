import { defineType, defineField } from "sanity";
import { HiCursorClick } from "react-icons/hi";

const interactiveSectionTypes = [
	{ title: 'Blobs', value: 'blobShader' },
	{ title: 'Pixel Mosaic', value: 'pixelMosaic' }
]

export const interactiveSection = defineType({
	name: 'interactiveSection',
	title: 'Interactive Section',
	type: 'object',
	icon: HiCursorClick,
	fields: [
		defineField({
			name: 'interactiveScript',
			title: 'Section Type',
			type: 'string',
			options: {
				list: interactiveSectionTypes,
				// layout: 'radio',
			}
		})
	],
	preview: {
		select: {
			type: 'interactiveScript',
		},
		prepare(value:any) {
			const interactiveSectionTitle = value.type && interactiveSectionTypes.flatMap(option => option.value === value.type ? [option.title] : [])

			return {
				title: 'Interactive Section',
				subtitle: 'Section Type: ' + interactiveSectionTitle
			}
		}
	}
})