import { defineType, defineField } from "sanity";
import { BsFillCalendarRangeFill } from 'react-icons/bs';
import { BiCommentDetail } from "react-icons/bi";

export const dateRange = defineType({
	title: 'Date Range',
	name: 'dateRange',
	icon: BsFillCalendarRangeFill,
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
			title: 'Date',
			name: 'date',
			type: 'date'
		}),
		defineField({
			title: 'End Date',
			name: 'endDate',
			type: 'date',
			description: 'Leave blank for ongoing.',
			hidden: ({ parent, value }) => parent?.range != true,
			validation: Rule => Rule.min(Rule.valueOfField('startDate')).error('End Date cannot be before Start Date')
		}),
		defineField({
			title: 'Range',
			name: 'range',
			type: 'boolean',
			description: 'Whether the date is a range or singular.',
			initialValue: false
		}),
	]
})