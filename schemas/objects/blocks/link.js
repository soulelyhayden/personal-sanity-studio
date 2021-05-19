import { BiLink } from "react-icons/bi";

export default {
	title: 'Link',
	name: 'link',
	type: 'object',
	icon: BiLink,
	fields: [
		{
			name: 'title',
			type: 'string',
			description: 'How the link will appear on the page.'
		},
		{
			name: 'url',
			type: 'url',
			description: 'The URL for the resource.'
		}
	]
}