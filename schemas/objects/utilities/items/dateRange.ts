import { defineType, defineField } from "sanity";
import { BsFillCalendarRangeFill } from 'react-icons/bs';
import { BiCommentDetail } from "react-icons/bi";

export const dateRange = defineType({
	title: 'Date Range',
	name: 'dateRange',
	icon: BsFillCalendarRangeFill,
	description: 'Select a range of dates.',
	type: 'object',
	fields: [
		defineField({
			name: 'Note',
			type: 'note',
			description: 'Be as accurate when inputting date information as possible, but be aware that specificity is defined by the site frontend (e.g. only the year might appear on the frontend if that is what the design called for).',
			options: {
				icon: BiCommentDetail,
				tone: 'primary',
			},
		}),
		defineField({
			title: 'Start Date',
			name: 'startDate',
			type: 'date',
			validation: Rule => Rule.required()
		}),
		defineField({
			title: 'End Date',
			name: 'endDate',
			type: 'date',
			description: 'Leave blank for ongoing.',
			validation: Rule => Rule.min(Rule.valueOfField('startDate')).error('End Date cannot be before Start Date')
		})
	]
})