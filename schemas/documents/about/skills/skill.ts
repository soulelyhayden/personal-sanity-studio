import { defineType, defineField, StringRule } from "sanity";
import { TfiMedall } from 'react-icons/tfi';

export const skill = defineType({
	title: "Skills",
	name: "skill",
	type: 'document',
	icon: TfiMedall,
	fields: [
		defineField({
			title: 'Title',
			name: 'title',
			type: 'string',
			description: 'Title of the skill.',
			validation: (Rule: StringRule) => [
				Rule.required().error("skill needs a title!"),
			]
		}),
		defineField({
			title: 'Date',
			name: 'date',
			type: 'dateRange',
			description: 'Select the date you began this skill, the duration will be displayed.',
			validation: (Rule) => [
				Rule.required().warning("skills should have a date!"),
			]
		}),
		defineField({
			title: 'skill Description',
			name: 'description',
			type: 'text',
			description: 'A description of the skill.',
		}),
		defineField({
			title: 'Tags',
			name: 'tags',
			type: 'array',
			of: [{
				type: 'reference',
				to: [{ type: 'experienceTag' }]
			}]
		}),
	],
	preview: {
		select: {
			title: 'title',
		},
		prepare(value: any) {
			return {
				title: value.title,
				media: TfiMedall
			}
		}
	}
});