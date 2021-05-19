import { RiPagesFill } from 'react-icons/ri';

import defaultPage from './templates/default-page';
import contactPage from './templates/contact-page';
// collapsible: true

import conditionalFields from "../../objects/conditionalFields";

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
			validation: Rule => Rule.required()
		},
		{
			title: 'Slug',
			name: 'slug',
			type: 'url',
			fieldset: 'pageSettings',
			description: 'If different from title.'
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
