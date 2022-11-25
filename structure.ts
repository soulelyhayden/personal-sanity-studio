// import { WebPreview, JsonView } from './previews'
import { MdSettings } from "react-icons/md";
import { CgWebsite } from "react-icons/cg";
// import { GrNavigate } from "react-icons/gr";
import { IoNavigateCircle } from "react-icons/io5";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { RiPaintBrushFill } from "react-icons/ri";



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
						.items([
							S.listItem()
								.title('Site Settings')
								.icon(CgWebsite)
								.child(
									S.document()
										.title('Site Settings')
										.schemaType('siteSettings')
										.documentId('siteSettings')
								),
							S.listItem()
								.title('Site Navigation')
								.icon(IoNavigateCircle)
								.child(
									// S.editor() // This shows the content editor in the child pane. We specify what this editor displays with the three methods below...
									// 	.id("navigation") // Set this to the name of the singleton.
									// 	.schemaType("navigation") // Here we define which schema this editor will use to generate fields. We want this to use the 'about' schema so it has been filled in accordingly.
									// 	.documentId("navigation")
									S.document()
										.title('Site Navigation')
										.schemaType('navigation')
										.documentId('navigation')
										
								),
							S.listItem()
								.title('Site Theme')
								.icon(RiPaintBrushFill)
								.child(
									S.document()
										.title('Site Theme')
										.schemaType('theme')
										.documentId('theme')
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
				(listItem:any) => !['siteSettings', 'about', 'navigation', 'theme', 'media.tag'].includes(listItem.getId())
			)
		])

interface docSchemaOptions {
	schemaType: any;
}

export const defaultDocumentNode = (S: any, { schemaType }: docSchemaOptions) => {
	// Conditionally return a different configuration based on the schema type
	// if (schemaType === "post") {
	// 	return S.document().views([
	// 		S.view.form(),
	// 		// S.view.component(WebPreview).title('Web')
	// 	])
	// }

	return S.document().views([
		S.view.form(),
		// S.view.component(JsonView).title('JSON')
	])
}