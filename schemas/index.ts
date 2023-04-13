import { defineType, defineField } from "sanity";

/**
 * Documents import
 */
import { about } from "@settings//about"
import { siteSettings } from "@settings/siteSettings"
import { navigation } from "@settings/navigation"
import { theme } from "@settings/theme";

const _documents = [about, siteSettings, navigation, theme ]

/**
 * Utilities import
 */
import { navPage } from "@utilities/navigation/navPage"
import { socialSite } from "@utilities/items/socialSite";
import { sponsor } from "@utilities/items/sponsor";
import { dateRange } from "@utilities/items/dateRange";


const _utilities = [navPage, socialSite, dateRange, sponsor]

import { page } from "@documents/site-pages/page"
import { project } from "@documents/projects/project";

const _content = [page, project]

/**
 * Blocks import
 */
import { aboutSection } from "@objects/blocks/aboutSection";
import { contactForm } from "@objects/blocks/contactForm";
import { textSection } from "@objects/blocks/textSection";
import { projectsArchive } from "@objects/blocks/projectsArchive"
import { textsArchive } from "@objects/blocks/textsArchive";

const _blocks = [aboutSection, contactForm, textSection, projectsArchive, textsArchive]

const blockTypeList = (function () {
	let list: Array<{ type: string }> = [];
	_blocks.forEach(item => {
		list.push({ type: `${item.name}` })
	});
	return list;
})();

const blockTypes = defineType({
	title: 'Blocks',
	name: 'blockTypes',
	type: 'array',
	of: [...blockTypeList],

})

/**
 * Project items import
 */
// import { aboutSection } from "@objects/aboutSection";

const _projectItems: Array<any> = []

const projectTypeList = ( function() {
	let list: Array<{type: string}> = [];
	_projectItems.forEach(item => {
		list.push({ type: `${item.name}` })
	});
	return list;
})();

const porojectTypes = defineType({
	title: 'Project Items',
	name: 'projectTypes',
	type: 'array',
	of: [...projectTypeList],

})



export const schemaTypes = [..._documents, ..._utilities, ..._blocks, blockTypes, ..._content, ..._projectItems, porojectTypes]
