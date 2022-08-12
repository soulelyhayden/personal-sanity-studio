// import { WebPreview, JsonView } from './previews'
import { MdSettings } from "react-icons/md";
import { CgWebsite } from "react-icons/cg";
// import { GrNavigate } from "react-icons/gr";
import { IoNavigateCircle } from "react-icons/io5";
import { BsFillPersonLinesFill } from "react-icons/bs";


export const structure = (S:any, context:any) => 
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
								.title('Site Settings')
								.icon(CgWebsite)
								.child(
									S.document()
										.schemaType('siteSettings')
										.documentId('siteSettings')
								),
							S.listItem()
								.title('Site Navigation')
								.icon(IoNavigateCircle)
								.child(
									S.document()
										.title('Site Navigation')
										.schemaType('navigation')
										.documentId('navigation')
								),
							S.listItem()
								.title('About')
								.icon(BsFillPersonLinesFill)
								.child(
									S.document()
										.schemaType('about')
										.documentId('about')
								),
						])
				),

			S.divider(),
			...S.documentTypeListItems().filter(
				(listItem:any) => !['siteSettings', 'about', 'navigation', 'media.tag'].includes(listItem.getId())
			)
		])

interface docSchemaOptions {
	schemaType: any;
}

export const defaultDocumentNode = (S: any, { schemaType }: docSchemaOptions) => {
	// Conditionally return a different configuration based on the schema type
	if (schemaType === "post") {
		return S.document().views([
			S.view.form(),
			// S.view.component(WebPreview).title('Web')
		])
	}

	return S.document().views([
		S.view.form(),
		// S.view.component(JsonView).title('JSON')
	])
}