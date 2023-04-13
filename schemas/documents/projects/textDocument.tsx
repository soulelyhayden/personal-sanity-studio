import { defineType, defineField, useCurrentUser, SlugRule,} from "sanity";
import { SlugInput } from 'sanity-plugin-prefixed-slug'
import { internalText } from "./textTemplates/internalText";
import { externalText } from "./textTemplates/externalText";

import { BsFileText } from 'react-icons/bs';
import { isUniqueAcrossAllDocuments } from "@lib/isUnique";

const textTemplates = [internalText, externalText]
for (const template of textTemplates) {
	template.hidden = ({ parent, value }) => parent?.textType != template.name;
	template.group = 'textContent';
}

export const textDocument = defineType({
	title: "Texts",
	name: "textDocument",
	type: 'document',
	icon: BsFileText,
	groups: [
		{
			name: 'textSettings',
			title: 'Text Settings',
		},
		{
			name: 'textContent',
			title: 'Text Content',
		},
	],
	fields: [
		defineField({
			title: 'Title',
			name: 'title',
			type: 'string',
			group: 'textSettings',
			description: 'Title of the text.',
			validation: (Rule) => [
				Rule.required().error("Text needs a title!"),
			]
		}),
		defineField({
			title: 'Date',
			name: 'date',
			type: 'dateRange',
			group: 'textSettings',
			validation: (Rule) => [
				Rule.required().warning("Texts should have a date!"),
			]
		}),
		defineField({
			title: 'Page Description',
			name: 'description',
			type: 'text',
			group: 'textSettings',
			description: 'A concise description of the text, if none is provided an abbreviated version of the text will be used if it is an internal text, otherwise no description will appear.',
		}),
		defineField({
			title: 'Tags',
			name: 'tags',
			type: 'array',
			of: [{ 
				type: 'reference',
				to: [{type:'textTag'}]
			 }]
		}),
		defineField({
			title: 'Text Type',
			name: 'textType',
			type: 'string',
			group: 'textContent',
			options: {
				// layout: 'radio',
				list: [
					{ title: 'Internal Text', value: 'internalText' },
					{ title: 'External Text', value: 'externalText' },

				]
			}
		}),
		internalText,
		externalText
	],
	preview: {
		select: {
			title: 'title',
		},
		prepare(value: any) {
			return {
				title: value.title,
				media: BsFileText
			}
		}
	}
});