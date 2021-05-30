import client from 'part:@sanity/base/client'
import SlugInput from 'sanity-plugin-better-slug'
import { isUniqueAcrossAllDocuments } from '../../lib/isUniqueAcrossAllDocuments'
import { validateSlug } from '../../lib/validateSlug'

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
			title: 'Slug',
			name: 'slug',
			type: 'slug',
			inputComponent: SlugInput,
			description: 'Set the projects root slug in the Site Navigation settings.',
			options: {
				source: 'title',
				isUnique: isUniqueAcrossAllDocuments,
				basePath: async (document) => {
					const projectsRoot = await client.fetch(`*[_id == "navigation"]{"archivePageSlug":archivePage->slug.current}[0].archivePageSlug`)

					return projectsRoot ? `/${projectsRoot}` : ' '
				}
			},
			validation: Rule => Rule.custom((slug) => validateSlug(slug))
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
			hidden: true,
			description: 'A short blurb about the project.'
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
			description: 'A more descriptive bit of text about the project.',
			of: [{ type: 'block' }]
		},
		{
			title: 'Blocks',
			name: 'blocks',
			type: '_projectBlocks',
			description: 'The project content.',
		}
	],
	preview: {
		select: {
			title: 'title',
			thumbnail: 'thumbnail',
			tag0: 'projectTags.0.title',
			tag1: 'projectTags.1.title',
			tag2: 'projectTags.2.title',
		},
		prepare(value) {
			const tags = [value.tag0, value.tag1].filter(Boolean)
			const joinedTags = tags.length > 0 ? tags.join(', ') : 'no tags'
			const moreTags = Boolean(value.tag2) ? ', and more...' : ''

			return {
				title: value.title,
				media: value.thumbnail,
				subtitle: `Project Tags: ${joinedTags}${moreTags}`
			}
		}
	}
}