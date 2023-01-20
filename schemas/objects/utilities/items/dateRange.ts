import { defineType, defineField } from "sanity";
import { BsFillCalendarRangeFill } from 'react-icons/bs';

export const dateRange = defineType({
	title: 'Date Range',
	name: 'dateRange',
	icon: BsFillCalendarRangeFill,
	description: 'Select a range of dates.',
	type: 'object',
	fields: [
		defineField({
			title: 'Start Date',
			name: 'startDate',
			type: 'date',
			description: 'When to start the duration.',
			validation: Rule => Rule.required()
		}),
		defineField({
			title: 'End Date',
			name: 'endDate',
			type: 'date',
			description: 'Leave blank for ongoing.',
		})
	]
})