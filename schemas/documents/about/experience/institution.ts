import { HiBuildingLibrary } from "react-icons/hi2";
import { StringRule, defineField, defineType } from "sanity";

export const institution = defineType({
	title: "Institutions",
	name: "institution",
	type: 'document',
	icon: HiBuildingLibrary,
	fields: [
		defineField({
			title: 'Title',
			name: 'title',
			type: 'string',
			description: 'Title of the institution.',
			validation: (Rule: StringRule) => Rule.required().error("Institution needs a title!")
		})
	]
})