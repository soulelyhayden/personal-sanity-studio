import { FaTags } from 'react-icons/fa';
import { NumberRule, Rule, StringRule, defineField, defineType } from 'sanity';

export const experienceTag = defineType({
	title: 'Experience Tags',
	name: 'experienceTag',
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

					return client.fetch(`count(*[_type == "experienceTag" && title == "${title}" && !(_id == "${id}") && !(_id == "${draftID}")])`)
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
			title: 'Description',
			name: 'description',
			type: 'string'
		})
	]
})