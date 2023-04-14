import { defineType, defineField, StringRule } from "sanity";
import { FaBusinessTime } from 'react-icons/fa';
import { educationExperience } from "./experienceTypes/educationExperience";
import { lectureExperience } from "./experienceTypes/lectureExperience";
import { workExperience } from "./experienceTypes/workExperience";
import { camelCaseToWords } from "@lib/camelCaseToWords";


const experienceTypes = [educationExperience, lectureExperience, workExperience]
for (const template of experienceTypes) {
	template.hidden = ({ parent, value }) => parent?.experienceType != template.name;
	template.group = 'experienceContent';
}

export const experience = defineType({
	title: "Experiences",
	name: "experience",
	type: 'document',
	icon: FaBusinessTime,
	groups: [
		{
			name: 'experienceSettings',
			title: 'Experience Settings',
		},
		{
			name: 'experienceContent',
			title: 'Experience Content',
		},
	],
	fields: [
		defineField({
			title: 'Title',
			name: 'title',
			type: 'string',
			group: 'experienceSettings',
			description: 'Title of the experience.',
			validation: (Rule: StringRule) => [
				Rule.required().error("Experience needs a title!"),
			]
		}),
		defineField({
			title: 'Date',
			name: 'date',
			type: 'dateRange',
			group: 'experienceSettings',
			validation: (Rule) => [
				Rule.required().warning("Experiences should have a date!"),
			]
		}),
		defineField({
			title: 'Experience Description',
			name: 'description',
			type: 'text',
			group: 'experienceSettings',
			description: 'A description of the experience.',
		}),
		defineField({
			title: 'Tags',
			name: 'tags',
			type: 'array',
			group: 'experienceSettings',
			of: [{
				type: 'reference',
				to: [{ type: 'experienceTag' }]
			}]
		}),
		defineField({
			title: 'Institution',
			name: 'institution',
			type: 'reference',
			group: 'experienceSettings',
			to: [{ type: 'institution' }],
			// weak: true
		}),
		defineField({
			title: 'Experience Type',
			name: 'experienceType',
			type: 'string',
			group: 'experienceContent',
			options: {
				// layout: 'radio',
				list: [
					{ title: 'Education Experience', value: 'educationExperience' },
					{ title: 'Lecture Experience', value: 'lectureExperience' },
					{ title: 'Work Experience', value: 'workExperience' },


				]
			},
			validation: (Rule:StringRule) => Rule.required()
		}),
		educationExperience,
		lectureExperience,
		workExperience
		
	],
	orderings: [
		{
			title: 'Experience Type',
			name: 'experienceTypeAsc',
			by: [
				{ field: 'experienceType', direction: 'asc' }
			]
		},
	],
	preview: {
		select: {
			title: 'title',
			experienceType: 'experienceType'
		},
		prepare(value: any, viewOptions = {}) {
			return {
				title: value.title,
				subtitle: value.experienceType ? camelCaseToWords(value.experienceType) : 'Experience needs a type!',
				// subtitle: viewOptions.ordering && viewOptions.ordering.name === "experienceTypeAsc"
				// 	? value.experienceType : 'Filler',
				media: FaBusinessTime
			}
		}
	}

});
