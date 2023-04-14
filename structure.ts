// import { WebPreview, JsonView } from './previews'
import { MdSettings } from "react-icons/md";
import { CgWebsite } from "react-icons/cg";
// import { GrNavigate } from "react-icons/gr";
import { IoNavigateCircle } from "react-icons/io5";
import { BsFileText, BsFillPersonLinesFill } from "react-icons/bs";
import { RiPaintBrushFill } from "react-icons/ri";
import { FaBusinessTime, FaTags } from "react-icons/fa";
import { StructureBuilder, StructureResolverContext } from "sanity/desk";
import { AiFillFileImage } from "react-icons/ai";
import { schemaTypes } from "schemas";
import { DocumentActionComponent, DocumentActionsContext, Template } from "sanity";

// Define the actions that should be available for singleton documents
const singletonActions = new Set(["publish", "discardChanges", "restore"])

// Define the singleton document types
const singletonTypes = new Set(["siteSettings", "navigation", "theme", "about"])



export const structure = (S:StructureBuilder) => 
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

	/** EXPERIENCE */
	S.listItem().title('Experiences').icon(FaBusinessTime).child(
		S.list().title('Experiences').items([
			S.documentTypeListItem('experienceTag'),
			S.divider(),
			S.documentTypeListItem('employer'),
			S.documentTypeListItem('experience'),
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
	S.listItem().title('Texts').icon(BsFileText).child(
		S.list().title('Texts').items([
			S.documentTypeListItem('textTag'),
			S.divider(),
			S.documentTypeListItem('textDocument'),
		])
	),
])

export const schemaOptions = {
	types: schemaTypes,
	// Filter out singleton types from the global “New document” menu options
	templates: (templates: Template<any, any>[]) => templates.filter(({ schemaType }: {schemaType:string}) => !singletonTypes.has(schemaType)),
}
export const documentOptions = {
	// For singleton types, filter out actions that are not explicitly included
	// in the `singletonActions` list defined above
	actions: (input: DocumentActionComponent[], context: DocumentActionsContext) =>
		singletonTypes.has(context.schemaType)
			? input.filter(({ action }) => action && singletonActions.has(action))
			: input,
}

// interface docSchemaOptions {
// 	schemaType: any;
// }

// export const defaultDocumentNode = (S: any, { schemaType }: docSchemaOptions) => {
// 	// Conditionally return a different configuration based on the schema type
// 	// if (schemaType === "post") {
// 	// 	return S.document().views([
// 	// 		S.view.form(),
// 	// 		// S.view.component(WebPreview).title('Web')
// 	// 	])
// 	// }

// 	return S.document().views([
// 		S.view.form(),
// 		// S.view.component(JsonView).title('JSON')
// 	])
// }