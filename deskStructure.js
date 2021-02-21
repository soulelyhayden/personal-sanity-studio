import S from '@sanity/desk-tool/structure-builder'
import { MdSettings } from 'react-icons/md';
import { CgWebsite } from 'react-icons/cg';
import { BsFillPersonLinesFill } from 'react-icons/bs';

export default () =>
	S.list()
		.title('Content')
		.items([
			S.listItem()
				.title('Settings')
				.icon(MdSettings)
				.child(
					S.list()
						// Sets a title for our new list
						.title('Settings Documents')
						// Add items to the array
						// Each will pull one of our new singletons
						.items([
							S.listItem()
								.title('About Site')
								.icon(CgWebsite)
								.child(
									S.document()
										.schemaType('siteSettings')
										.documentId('siteSettings')
								),
							S.listItem()
								.title('About Me')
								.icon(BsFillPersonLinesFill)
								.child(
									S.document()
										.schemaType('aboutMe')
										.documentId('aboutMe')
								)
						])
				),

			S.divider(),
			...S.documentTypeListItems().filter(listItem => !['siteSettings', 'aboutMe'].includes(listItem.getId()))
		])