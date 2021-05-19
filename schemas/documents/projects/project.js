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
			description: 'Title of the project.',
			validation: Rule => Rule.required()
		},
		{
			title: 'Date',
			name: 'date',
			type: 'datetime',
			description: 'When was the project made, or launched.'
		},
		{
			title: 'Blurb',
			name:'blurb',
			type: 'string',
			description: 'A short blurb about the project.',
			validation: Rule => Rule.required()
		},
		{
			title: 'Project Tags',
			name: 'projectTags',
			type: 'array',
			description: 'Select all applicable tags.',
			of: [{
				type: 'reference',
				to: [{ type: 'projectTag' }]
			}]
		},
		{
			title: 'Thumbnail Image',
			name: 'thumbnail',
			type: 'image',
			description: 'This will appear in project lists, but not in the project itself.',
			validation: Rule => Rule.required()
		},
		{
			title: 'Description',
			name: 'description',
			type: 'array',
			description: 'A more descriptive bit of text about the project that will appear at the top of the project page- above the content, and under the title.',
			of: [{ type: 'block' }]
		},
		{
			title: 'Content',
			name: 'content',
			type: 'array',
			description: 'The main content of the project.',
			of: [{ type: 'altImage' }, { type: 'projectText' }]
		}
	]
}