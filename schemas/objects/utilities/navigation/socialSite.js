import { IoShareSocialSharp } from 'react-icons/io5';

export default {
	title: 'Social',
	name: 'socialSite',
	description: 'Link to a social platform.',
	icon: IoShareSocialSharp,
	type: 'object',	
	fields: [
		{		
			title: 'Social Type',
			name: 'socialType',
			type: 'string',
			options: {
				list: [
					{ title: 'Twitter', value: 'twitter' },
					{ title: 'Instagram', value: 'instagram' },
					{ title: 'Facebook', value: 'facebook' },
					{ title: 'Vimeo', value: 'vimeo' },
					{ title: 'LinkedIn', value: 'linkedin' },
					{ title: 'GitHub', value: 'github' },
				]
			},
			validation: Rule => Rule.required()
		},
		{
			title: 'URL',
			name: 'url',
			type: 'url',
			validation: Rule => Rule.required()
		}
	]
}