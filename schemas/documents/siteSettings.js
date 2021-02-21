

export default {
	title: 'Site Settings',
	name: 'siteSettings',
	type: 'document',
	__experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'],
	fields: [
		{
			title: 'Title',
			name: 'title',
			type: 'string'
		},
		{
			title: 'Description',
			name: 'description',
			type: 'text',
			description: 'Description for search engines and social media.'
		},
		{
			title: 'Keywords',
			name: 'keywords',
			type: 'array',	
			description: 'Keywords that describe my site.',
			of: [{type: 'string'}],
			options: {
				layout: 'tags'
		}
		}
	]
}
