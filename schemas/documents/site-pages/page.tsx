import { defineType, defineField, useCurrentUser, SlugRule,} from "sanity";
import { SlugInput } from 'sanity-plugin-prefixed-slug'

import { blocksPage } from "@documents/site-pages/templates/blocksPage";
import { RiPagesFill } from 'react-icons/ri';
import { MdOutlineManageSearch } from 'react-icons/md'

import { createClient } from '@sanity/client'
import { isUniqueAcrossAllDocuments } from "@lib/isUnique";

const client = createClient({
	projectId: 'ijjxi0wa',
	dataset: 'production',
	apiVersion: '2023-04-04',
})

const pageTamples = [blocksPage]
for (const template of pageTamples) {
	template.hidden = ({ parent, value }) => parent?.pageType != template.name;
	template.group = 'pageContent';
}

async function getDocumentSubPath(document: any) {
	console.log(document)
	return
}

export const page = defineType({
	title: "Pages",
	name: "page",
	type: 'document',
	icon: RiPagesFill,
	groups: [
		{
			name: 'pageSettings',
			title: 'Page Settings',
		},
		{
			name: 'pageContent',
			title: 'Page Content',
		},
	],
	fields: [
		defineField({
			title: 'Title',
			name: 'title',
			type: 'string',
			group: 'pageSettings',
			description: 'Title of the page for internal use.',
			validation: (Rule) => [
				Rule.required().error("Page needs a title!"),
			]
		}),
		defineField({
			name: 'Note',
			type: 'note',
			group: 'pageSettings',
			description: <>The following fields are incredibly important for your SEO. You can read more <a href="https://developer.mozilla.org/en-US/docs/Glossary/SEO" target="_blank" >here</ a >.</>,
			options: {
				icon: MdOutlineManageSearch,
				tone: 'caution',
			},
		}),
		defineField({
			title: 'Slug',
			name: 'slug',
			type: 'slug',
			components: {
				input: SlugInput,
			},
			options: {
				source: 'title',
				// @ts-ignore
				urlPrefix: ``,
				slugify: input => input
					.toLowerCase()
					.replace(/\s+/g, '-')
					.slice(0, 200),
				// Use isUnique/maxLength just like you would w/ the regular slug field
				isUnique: isUniqueAcrossAllDocuments,
				maxLength: 30,
				// If you want to save the full URL in the slug object, set storeFullUrl to `true`
				// Example storage: { _type: "slug", current: "my-slug", fullUrl: "https://site.com/my-slug" }
				storeFullUrl: false,
			},
			group: 'pageSettings',
			description: 'Custom slugs are generally not recommended, use the generate option.',
			validation: (Rule:SlugRule) => Rule.required()

		}),
		defineField({
			title: 'Page Description',
			name: 'description',
			type: 'text',
			group: 'pageSettings',
			description: 'A concise description of the page, if none is provided this page will use the site wide descriptor.',
			validation: Rule => [
				Rule.min(45).warning("Try to be more descriptive."),
				Rule.max(200).warning("This may be too descriptive!")
			]
		}),
		defineField({
			title: 'Page Type',
			name: 'pageType',
			type: 'string',
			group: 'pageContent',
			options: {
				// layout: 'radio',
				list: [
					{ title: 'Blocks', value: 'blocksPage' },
				]
			}
		}),
		blocksPage
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