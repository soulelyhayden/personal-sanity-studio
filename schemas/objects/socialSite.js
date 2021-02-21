import { IoShareSocialSharp } from 'react-icons/io5';

export default {
	title: 'Social',
	name: 'socialSite',
	description: 'A link to one of my socials.',
	icon: IoShareSocialSharp,
	type: 'object',	
	fields: [
		{		
			title: 'Social Type',
			name: 'socialType',
			type: 'string'
		},
		{
			title: 'URL',
			name: 'url',
			type: 'url'
		}
	]
}