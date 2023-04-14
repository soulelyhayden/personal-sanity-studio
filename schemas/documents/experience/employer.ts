import { FaPlaceOfWorship } from "react-icons/fa";
import { StringRule, defineField, defineType } from "sanity";

export const employer = defineType({
	title: "Employer",
	name: "employer",
	type: 'document',
	icon: FaPlaceOfWorship,
	fields: [
		defineField({
			title: 'Title',
			name: 'title',
			type: 'string',
			description: 'Title of the employer.',
			validation: (Rule: StringRule) => Rule.required().error("Employer needs a title!")
		})
	]
})