import { MdPermMedia } from 'react-icons/md';

export default {
		
	title: 'Projects',
	name: 'project',
	type: 'document',
	icon: MdPermMedia,
	fields: [
		{
			title: 'Title',
			name: 'title',
			type: 'string',
			validation: Rule => Rule.required()
		},
		{
			title: 'Date',
			name: 'date',
			type: 'datetime'
		},
		{
			title: 'Description',
			name:'description',
			type: 'string',
			validation: Rule => Rule.required()
		},
		{
			title: 'Project Tags',
			name: 'projectTags',
			type: 'array',
			of: [{
				type: 'reference',
				to: [{ type: 'projectTag' }]
			}]
		},
		{
			title: 'Thumbnail Image',
			name: 'thumbnail',
			type: 'image',
			validation: Rule => Rule.required()
		},
		{
			title: 'Content',
			name: 'content',
			type: 'array',
			of: [{type: 'block'}, {type: 'image'}, {type: 'vimeo'}]
		}
	]
}