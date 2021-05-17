import { GrTextAlignFull } from "react-icons/gr";

export default {
	title: 'Text Section',
	name: 'textSection',
	type: 'object',
	icon: GrTextAlignFull,
	fields: [
		{
			title: 'Text',
			name: 'text',
			type: 'array',
			of: [{ type: 'block' }],
			description: 'Added formatted text to appear within the block.',
		},
		{
			title: 'Text Align',
			name: 'textAlign',
			type: 'string',
			initialValue: 'left',
			options: {
				list: [
					{ title: 'Left', value: 'left' },
					{ title: 'Centre', value: 'center' },
					{ title: 'Right', value: 'right' }
				],
				layout: 'radio'
			},
			validation: Rule => Rule.required()		
		}
	],
	preview: {
		select: {
			blocks: 'text',
			align: 'textAlign'
		},
		prepare(value) {
			const block = (value.blocks || []).find(block => block._type === 'block')
			return {
				title: block
					? block.children
						.filter(child => child._type === 'span')
						.map(span => span.text)
						.join('')
					: 'No title',
				subtitle: 'Text Align: ' + value.align,
			}
		}
	}
}