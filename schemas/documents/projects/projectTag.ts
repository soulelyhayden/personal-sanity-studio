import { FaTags } from 'react-icons/fa';
import { NumberRule, Rule, StringRule, defineField, defineType } from 'sanity';

export const projectTag = defineType({
	title: 'Project Tags',
	name: 'projectTag',
	type: 'document',
	icon: FaTags,
	fields: [
		defineField({
			title: 'Title',
			name: 'title',
			type: 'string',
			validation: (rule:StringRule) => [
				rule.required().error("Tag needs a title!"),
				rule.custom((title, context) => {
					const id = context.document?._id.replace(/^drafts\./, '')
					const draftID = `drafts.${id}`

					const { getClient } = context
					const client = getClient({ apiVersion: '2022-12-07' })

					return client.fetch(`count(*[_type == "projectTag" && title == "${title}" && !(_id == "${id}") && !(_id == "${draftID}")])`)
						.then(count => {
							if (count > 0) {
								return 'Tags need to be unique from one another.'
							} else {
								return true
							}
						})
				}).error()
			]
		}),
		defineField({
			title: 'Priority',
			name: 'priority',
			description: 'Determines tag order. Tags are ordered based on their priority first, and then alphabetically. High priority tags appear closer to the start of a list of tags. Tags without an assigned priority are treated as 0.',
			type: 'number',
			validation: (Rule:NumberRule) => [
				Rule.integer().error("Let's stick to whole numbers for this!"),
				Rule.positive().error("No need for negative priority; all tags have value!")
			]
		}),
		defineField({
			title: 'Description',
			name: 'description',
			type: 'string'
		})
	]
})