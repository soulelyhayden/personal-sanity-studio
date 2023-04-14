import { defineType, defineField } from "sanity";

/**
 * Documents import
 */
import { about } from "@settings//about"
import { siteSettings } from "@settings/siteSettings"
import { navigation } from "@settings/navigation"
import { theme } from "@settings/theme";
import { projectTag } from "@documents/projects/projectTag";
import { textTag } from "@documents/projects/textTag";


const _documents = [about, siteSettings, navigation, theme, projectTag, textTag]

/**
 * Utilities import
 */
import { internalLink } from "@utilities/navigation/internalLink"
import { socialSite } from "@utilities/items/socialSite";
import { dateRange } from "@utilities/items/dateRange";
import { externalLink } from "@utilities/navigation/externalLink"


const _utilities = [internalLink, socialSite, dateRange, externalLink]

import { page } from "@documents/site-pages/page"
import { project } from "@documents/projects/project";
import { textDocument } from "@documents/projects/textDocument";


const _content = [page, project, textDocument]

/**
 * Blocks import
 */
import { aboutSection } from "@objects/blocks/aboutSection";
import { contactForm } from "@objects/blocks/contactForm";
import { textSection } from "@objects/blocks/textSection";
import { projectsArchive } from "@objects/blocks/projectsArchive"
import { textsArchive } from "@objects/blocks/textsArchive";
import { interactiveSection } from "@objects/blocks/interactiveSection";

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
import { imageObject } from "@objects/project-items/imageObject";
import { textObject } from "@objects/project-items/textObject";
import { embedObject } from "@objects/project-items/embedObject";

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
