export default {
	title: 'About Me',
	name: 'aboutMe',
	type: 'document',
	__experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'],
	fields: [
		{
			title: 'Name',
			name: 'name',
			type: 'string'
		},
		{
			title: 'Bio',
			name: 'bio',
			description: 'A little bit about myself. Keep it short.',
			type: 'string'
		},
		{
			title: 'Description',
			name: 'desc',
			description: 'Get a little more detailed about yourself and your work.',
			type: 'array',
			of: [{ type: 'block' }]
		},
		{
			title: 'Avatar',
			name: 'avatar',
			type: 'image',
			fields: [
				{
					// Editing this field will be hidden behind an "Edit"-button
					name: 'attribution',
					type: 'string',
					title: 'Attribution',
				}
			]
		},
		{
			title: 'Email',
			name: 'email',
			type: 'string'
		},
		{
			title: 'Socials',
			name: 'social',
			description: 'A list of my socials.',
			type: 'array',
			of: [{ type: 'socialSite' }]
		}
	]
}
