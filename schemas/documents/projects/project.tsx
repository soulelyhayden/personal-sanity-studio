import { defineType, defineField, useCurrentUser, SlugRule } from "sanity";
import { SlugInput } from 'sanity-plugin-prefixed-slug'

import { GiPaintBrush } from 'react-icons/gi';

import { createClient } from '@sanity/client'
import { isUniqueAcrossAllDocuments } from "@lib/isUnique";

const client = createClient({
	projectId: 'ijjxi0wa',
	dataset: 'production',
	apiVersion: '2023-04-04',
})

export const project = defineType({
	title: "Projects",
	name: "project",
	type: 'document',
	icon: GiPaintBrush,
	groups: [
		{
			name: 'projectSettings',
			title: 'project Settings',
		},
		{
			name: 'projectContent',
			title: 'project Content',
		},
	],
	fields: [
		defineField({
			title: 'Title',
			name: 'title',
			type: 'string',
			group: 'projectSettings',
			description: 'Title of the project.',
			validation: (Rule) => [
				Rule.required().error("Project needs a title!"),
			]
		}),
		defineField({
			title: 'project Description',
			name: 'description',
			type: 'text',
			group: 'projectSettings',
			description: 'A description of the project.',
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
				urlPrefix: async (document) => {
					const query = '*[_id == "navigation"]{"projectsSlug": projectsPage -> slug.current}[0].projectsSlug'
					const projectsPageTitle = await client.fetch(query)
					return `/${projectsPageTitle ? projectsPageTitle : ''}`
				},
				slugify: input => input
					.toLowerCase()
					.replace(/\s+/g, '-')
					.slice(0, 200),
				// Use isUnique/maxLength just like you would w/ the regular slug field
				isUnique: isUniqueAcrossAllDocuments,
				maxLength: 30,
				// If you want to save the full URL in the slug object, set storeFullUrl to `true`
				// Example storage: { _type: "slug", current: "my-slug", fullUrl: "https://site.com/my-slug" }
				storeFullUrl: true,
			},
			group: 'projectSettings',
			description: 'Custom slugs are generally not recommended, use the generate option.',
			validation: (Rule:SlugRule) => Rule.required()

		}),
	],
	preview: {
		select: {
			title: 'title',
		},
		prepare(value: any) {
			return {
				title: value.title,
				media: GiPaintBrush
			}
		}
	}
});