import { FaTags } from 'react-icons/fa';
import { Rule, StringRule, ValidationContext, defineType } from 'sanity';

export const tag = defineType({
	title: 'Tags',
	name: 'projectTag',
	type: 'document',
	icon: FaTags,
	fields: [
		{
			title: 'Title',
			name: 'title',
			type: 'string',
			validation: (rule:Rule) => [
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
		},
		{
			title: 'Description',
			name: 'description',
			type: 'string'
		}
	]
})