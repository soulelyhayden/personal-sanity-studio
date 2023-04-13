// import { WebPreview, JsonView } from './previews'
import { MdSettings } from "react-icons/md";
import { CgWebsite } from "react-icons/cg";
// import { GrNavigate } from "react-icons/gr";
import { IoNavigateCircle } from "react-icons/io5";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { RiPaintBrushFill } from "react-icons/ri";
import { FaTags } from "react-icons/fa";
import { StructureBuilder, StructureResolverContext } from "sanity/desk";
import { AiFillFileImage } from "react-icons/ai";


export const structure = async(S:StructureBuilder, context:StructureResolverContext) => 
S.list().title('Content').items([
	/* SETTINGS */
	S.listItem().title('Settings').icon(MdSettings).child(		
		S.list().title('Settings Documents').items([
				/* SITE SETTINGS */
				S.listItem().title('Site Settings').icon(CgWebsite).child(
					S.document().title('Site Settings').schemaType('siteSettings').documentId('siteSettings')
				),
				/* SITE NAVIGATION */
				S.listItem().title('Site Navigation').icon(IoNavigateCircle).child(
					S.document().title('Site Navigation').schemaType('navigation').documentId('navigation')		
				),
				/* SITE THEME */
				S.listItem().title('Site Theme').icon(RiPaintBrushFill).child(
					S.document().title('Site Theme').schemaType('theme').documentId('theme')
				),
				/* ABOUT */
				S.listItem().title('About').icon(BsFillPersonLinesFill).child(
					S.document().schemaType('about').documentId('about')
				),
		])
	),
	S.divider(),

	/** PAGES */
	S.documentTypeListItem('page').schemaType('page'),

	/** PROJECTS */
	S.listItem().title('Projects').icon(AiFillFileImage).child(
		S.list().title('Projects').items([
			S.documentTypeListItem('projectTag'),
			S.divider(),
			S.documentTypeListItem('project'),			
		])
	),
	/** TEXTS */
	S.listItem().title('Texts').icon(AiFillFileImage).child(
		S.list().title('Texts').items([
			S.documentTypeListItem('textTag'),
			S.divider(),
			S.documentTypeListItem('textDocument'),
		])
	),
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