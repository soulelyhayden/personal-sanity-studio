import { defineType, defineField, useCurrentUser, SlugRule,} from "sanity";
import { SlugInput } from 'sanity-plugin-prefixed-slug'
import { internalText } from "./textTemplates/internalText";

import { RiPagesFill } from 'react-icons/ri';
import { isUniqueAcrossAllDocuments } from "@lib/isUnique";

const textTemplates = [internalText]
for (const template of textTemplates) {
	template.hidden = ({ parent, value }) => parent?.textType != template.name;
	template.group = 'textContent';
}

export const textDocument = defineType({
	title: "Texts",
	name: "textDocument",
	type: 'document',
	icon: RiPagesFill,
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
			title: 'Text Type',
			name: 'textType',
			type: 'string',
			group: 'textContent',
			options: {
				// layout: 'radio',
				list: [
					{ title: 'Internal Text', value: 'internalText' },
				]
			}
		}),
		internalText
	],
	preview: {
		select: {
			title: 'title',
		},
		prepare(value: any) {
			return {
				title: value.title,
				media: RiPagesFill
			}
		}
	}
});