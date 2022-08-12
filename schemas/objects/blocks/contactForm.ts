import { defineType, defineField } from "sanity";
import { MdContactMail } from "react-icons/md";

export const contactForm = defineType({
	title: 'Contact Form',
	name: 'contactForm',
	type: 'object',
	icon: MdContactMail,
	fields: [
		defineField({
			title: 'Form Name',
			name: 'formName',
			type: 'string',
			description: "Each form on your site should have a unique name (e.g. 'contact').",
			validation: Rule => Rule.required()
		}),
		defineField({
			title: 'Form Contact',
			name: 'formContact',
			type: 'string',
			description: "Enter the email address you would like to receive form submissions to. If left blank it will default to the email provided in under Site Settings / About",
		}),
		defineField({
			title: 'Success Message',
			name: 'successMessage',
			type: 'string',
			description: 'Message to display when form is submitted successfully.',
			initialValue: 'Message submitted successfully!',
			validation: Rule => Rule.required()
		})
	],
	preview: {
		select: {
			title: 'formName',
			message: 'successMessage'
		},
		prepare(value:any) {
			return {
				title: `Form: ${value.title}`,
				subtitle: `Success message: ${value.message}`
			}
		}
	}
})