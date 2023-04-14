import { defineType, defineField } from "sanity";

/**
 * Documents import
 */
import { about } from "@settings//about"
import { siteSettings } from "@settings/siteSettings"
import { navigation } from "@settings/navigation"
import { theme } from "@settings/theme";
import { projectTag } from "@documents/projects/projectTag";
import { textTag } from "@documents/texts/textTag";


const _documents = [about, siteSettings, navigation, theme, projectTag, textTag]

/**
 * Utilities import
 */
import { internalLink } from "@utilities/navigation/internalLink"
import { socialSite } from "@utilities/items/socialSite";
import { dateRange } from "@utilities/items/dateRange";
import { externalLink } from "@utilities/navigation/externalLink"


const _utilities = [internalLink, socialSite, dateRange, externalLink]

import { page } from "@documents/pages/page"
import { project } from "@documents/projects/project";
import { textDocument } from "@documents/texts/textDocument";


const _content = [page, project, textDocument]

/**
 * Blocks import
 */
import { aboutSection } from "@objects/pages/aboutSection";
import { contactForm } from "@objects/pages/contactForm";
import { textSection } from "@objects/pages/textSection";
import { projectsArchive } from "@objects/pages/projectsArchive"
import { textsArchive } from "@objects/pages/textsArchive";
import { interactiveSection } from "@objects/pages/interactiveSection";

const _blocks = [aboutSection, contactForm, textSection, projectsArchive, textsArchive, interactiveSection]

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
import { imageObject } from "@objects/projects/imageObject";
import { textObject } from "@objects/projects/textObject";
import { embedObject } from "@objects/projects/embedObject";

const _projectItems: Array<any> = [imageObject, textObject, embedObject]

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
