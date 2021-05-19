import navPage from "../../objects/utilities/navigation/internalPage";
import socialSite from "../../objects/utilities/navigation/socialSite";

export default {
	title: 'Site Navigation',
	name: 'navigation',
	type: 'document',
	__experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'],
	fields: [
		{
			title: 'Primary Navigation',
			name: 'primaryNavigation',
			type: 'array',
			of: [ navPage, socialSite ]
		}
	],
}
