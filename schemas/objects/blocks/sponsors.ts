import { defineType, defineField } from "sanity";
import { SiGithubsponsors } from 'react-icons/si';
import { BiCommentDetail } from "react-icons/bi";

export const sponsorsBlock = defineType({
	title: 'Sponsors',
	name: 'sponsorsBlock',
	type: 'object',
	description: 'Showcases personal sponsors defined in About.',
	icon: SiGithubsponsors,
	fields: [
		defineField({
			name: 'Note',
			type: 'note',
			description: 'This block uses data from Settings > About > Sponsors.',
			options: {
				icon: BiCommentDetail,
				tone: 'primary',
			},
		}),
		defineField({
			title: 'Message',
			name: 'message',
			description: 'Text to appear before the sponsors.',
			type: 'string',
			initialValue: 'Thanks to the generous support of:'
		}),
	],
	preview: {
		select: {
		},
		prepare(value: any) {
			return {
				title: "Sponsors",
				subtitle: "Data pulled from About.",
				media: SiGithubsponsors
			}
		}
	}
})