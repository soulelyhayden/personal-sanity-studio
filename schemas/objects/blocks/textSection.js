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
			title: 'Highlighted Text',
			name: 'highlighted',
			type: 'boolean',
			description: 'Highlighted text is treated differently.',
		}
	],
	preview: {
		select: {
			blocks: 'text',
			highlighted: 'highlighted'
		},
		prepare(value) {
			const block = (value.blocks || []).find(block => block._type === 'block')
			return {
				title: block ?
					block.children.filter(child => child._type === 'span').map(span => span.text).join('') :
					'No title',
				subtitle: value.highlighted ? "Highlighted text section" : "Normal text section"
			}
		}
	}
}