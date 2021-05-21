import { HiCursorClick } from "react-icons/hi";


export default {
	name: 'interactiveSection',
	title: 'Interactive Section',
	type: 'object',
	icon: HiCursorClick,
	fields: [
		{
			name: 'sectionType',
			title: 'Section Type',
			type: 'string',
			options: {
				list: [
					{ title: 'Blobs', value: 'blobs' }
				],
				// layout: 'radio',
			}
		}
	],
	preview: {
		select: {
			type: 'sectionType',
		},
		prepare(value) {
			return {
				title: 'Interactive Section',
				subtitle: 'Section Type: ' + value.type
			}
		}
	}
}