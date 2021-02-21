import { FaTags } from 'react-icons/fa';

export default {

	title: 'Tags',
	name: 'projectTag',
	type: 'document',
	icon: FaTags,
	fields: [
		{
			title: 'Title',
			name: 'title',
			type: 'string',
			validation: Rule => Rule.required()
		},
		{
			title: 'Description',
			name: 'description',
			type: 'string'
		}
	]
}
