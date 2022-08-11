import { defineType, defineField } from "sanity";

import { defaultPage } from './templates/defaultPage';
import { homePage } from './templates/homePage';

import { RiPagesFill } from 'react-icons/ri';
import { AiOutlineFileSearch } from 'react-icons/ai'


export const page = defineType({
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
		defineField({
			title: 'Title',
			name: 'title',
			type: 'string',
			fieldset: 'pageSettings',
			description: 'Title of the page for internal use.',
		}),
		defineField({
			title: 'Slug',
			name: 'slug',
			type: 'slug',
			fieldset: 'pageSettings',
			description: 'Custom slugs are generally not recommended, use the generate option.',
		}),
		defineField({
			title: 'Descriptive Title',
			name: 'descriptiveTitle',
			type: 'string',
			fieldset: 'pageSettings',
			description: 'A more descriptive title, that will appear in browsers and search engines.',
			validation: Rule => [
				Rule.required(),
				Rule.min(15).warning("Try to make the title as accurate and meaningful as possible!"),
				Rule.max(55).warning("This may be too descriptive, and won't all appear in search engines!")
			]
		}),
		defineField({
			title: 'Page Description',
			name: 'description',
			type: 'text',
			fieldset: 'pageSettings',
			description: 'A concise description of the page, if none is provided this page will use the site wide descriptor.',
			validation: Rule => [
				Rule.min(45).warning("Try to be more descriptive."),
				Rule.max(200).warning("This may be too descriptive!")
			]
		}),
		defineField({
			title: "Page Content",
			name: 'pageContent',
			type: 'object',
			fields: [
				defineType({
					title: 'Page Type',
					name: 'pageType',
					type: 'array',
					of: [{ type: 'string' }],
					options: {
						list: [
							{ title: 'Home', value: 'homePage' },
							{ title: 'Blocks', value: 'defaultPage' },
						]
					}
				}),
				defineType({
					title: 'Default Page Template',
					name: 'defaultPage',
					type: 'object',
					fields: [
						defineField({
							title: 'Blocks',
							name: 'blocks',
							type: '_blocks',
							description: 'The main content of the page.',
						})
					],
					hidden: ({ parent, value }) => !value && parent?.pageType != 'defaultPage',
					preview: {
						select: {
							title: 'title'
						}
					}
				}),
				defineType({

					title: 'Home Page Template',
					name: 'homePage',
					type: 'object',
					fields: [
						defineField({
							title: 'Blocks',
							name: 'blocks',
							type: '_blocks',
							description: 'Blocks that will appear before the contact forum.',
						})
					],
					hidden: ({ parent, value }) => !value && parent?.pageType != 'homePage',
					preview: {
						select: {
							title: 'title'
						}
					}
				})
			],
		}),
	]
});
