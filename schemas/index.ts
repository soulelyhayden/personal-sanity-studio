import { defineType, defineField } from "sanity";

/**
 * Documents import
 */
import { about } from "./documents/settings/about"
import { siteSettings } from "./documents/settings/siteSettings"
import { navigation } from "./documents/settings/navigation"
import { theme } from "@settings/theme";

const _documents = [about, siteSettings, navigation, theme ]

/**
 * Utilities import
 */
import { navPage } from "./objects/utilities/navigation/navPage"
import { page } from "./documents/site-pages/page"
import { socialSite } from "./objects/utilities/items/socialSite";
import { workExperience } from "@utilities/items/workExperience";

const _utilities = [ navPage, page, socialSite, workExperience ]

/**
 * Blocks import
 */
import { aboutSection } from "./objects/blocks/aboutSection";
import { contactForm } from "./objects/blocks/contactForm";
import { interactiveSection } from "./objects/blocks/interactiveSection";
import { textSection } from "./objects/blocks/textSection";
const _blocks = [aboutSection, contactForm, interactiveSection, textSection]

const blockTypes = defineType({
	title: 'Blocks',
	name: 'blockTypes',
	type: 'array',
	of: [{ type: "aboutSection" }, { type: "contactForm" }, { type: "interactiveSection" }, { type: "textSection" }],

})

export const schemaTypes = [..._documents, ..._utilities, ..._blocks, blockTypes]
