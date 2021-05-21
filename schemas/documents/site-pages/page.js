import { RiPagesFill } from 'react-icons/ri';

import defaultPage from './templates/defaultPage';
import contactPage from './templates/contactPage';
// collapsible: true

import conditionalFields from "../../lib/conditionalFields";
import { isUniqueAcrossAllDocuments } from '../../lib/isUniqueAcrossAllDocuments'
import client from 'part:@sanity/base/client'

export default {
	title: "Pages",
	name: "page",
	type: 'document',
	icon: RiPagesFill,
	fieldsets: [
		{ 
			name: 'pageSettings',
			title: 'Page Settings',
			options: {
				collapsible: true,
				collapsed: false
			}
		}
	],
	fields: [
		{
			title: 'Title',
			name: 'title',
			type: 'string',
			fieldset: 'pageSettings',
			description: 'Title of the page.',
			validation: Rule => [
				Rule.required().error("Page needs a title!"),
				Rule.custom((title) => {
					return client.fetch(`count(*[_type == "page" && title == "${title}"])`)
						.then(count => {
							if (count > 1) {
								return 'This might be confusing, page titles should be unique.'
							} else {
								return true
							}
						})
				}).warning()
			]
		},
		{
			title: 'Slug',
			name: 'slug',
			type: 'slug',
			fieldset: 'pageSettings',
			description: 'Custom slugs are generally not recommended, use the generate option.',
			options: {
				source: 'title',
				isUnique: isUniqueAcrossAllDocuments,
			},
			validation: Rule => Rule.required().custom((slug) => {
				let errorMessage;

				if (slug.current.startsWith('/') || slug.current.startsWith('\\')) errorMessage = 'Cannot start with a slash';
				if (slug.current.endsWith('/') || slug.current.endsWith('\\')) errorMessage = 'Cannot end with a slash';
				
				return errorMessage ? errorMessage : true;
			})
		},
		{
			title: 'Blurb',
			name: 'blurb',
			type: 'string',
			fieldset: 'pageSettings',
			description: 'A short blurb about the page.'
		},
		{
			title: "Page Content",
			name: 'pageContent',
			type: 'object',
			inputComponent: conditionalFields,
			fields: [
				
				{
					type: 'object',
					name: 'input',
					fields: [
						{
							name: 'condition',
							title: 'Template Select',
							type: 'string',
							options: {
								list: [
									{ title: 'Blocks', value: 'defaultPage' },
									{ title: 'Contact', value: 'contactPage' }
								],
								// layout: 'radio',
							}
						}
					]
				},
				{
					type: 'object',
					name: 'options',
					fields: [defaultPage, contactPage ]
				}
			]
		},
	]
};
