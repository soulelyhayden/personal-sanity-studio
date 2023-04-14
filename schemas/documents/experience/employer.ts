import { TiBusinessCard } from "react-icons/ti";
import { StringRule, defineField, defineType } from "sanity";

export const employer = defineType({
	title: "Employers",
	name: "employer",
	type: 'document',
	icon: TiBusinessCard,
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