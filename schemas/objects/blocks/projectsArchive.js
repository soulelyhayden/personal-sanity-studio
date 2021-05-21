import { IoGrid } from "react-icons/io5";

export default {
	title: 'Projects Archive',
	name: 'projectsArchive',
	type: 'object',
	icon: IoGrid,
	fields: [
		{
			title: 'Enable Tags',
			name: 'tags',
			type: 'boolean',
			description: 'Whether or not to enable tag filters.',
		}
	],
	preview: {
		select: {
		},
		prepare() {
			
			return {
				title: 'Projects Archive',
				subtitle: 'All projects are displayed here.'
			}
		}
	}
}