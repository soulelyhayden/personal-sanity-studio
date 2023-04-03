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
import { page } from "@site-pages/page"
import { socialSite } from "@utilities/items/socialSite";
import { sponsor } from "@utilities/items/sponsor";
import { dateRange } from "@utilities/items/dateRange";


const _utilities = [navPage, page, socialSite, dateRange, sponsor]

/**
 * Blocks import
 */
import { aboutSection } from "@blocks/aboutSection";
import { contactForm } from "@blocks/contactForm";
import { interactiveSection } from "@blocks/interactiveSection";
import { textSection } from "@blocks/textSection";
const _blocks = [aboutSection, contactForm, interactiveSection, textSection]

const blockTypes = defineType({
	title: 'Blocks',
	name: 'blockTypes',
	type: 'array',
	of: [{ type: "aboutSection" }, { type: "contactForm" }, { type: "interactiveSection" }, { type: "textSection" }],

})

export const schemaTypes = [..._documents, ..._utilities, ..._blocks, blockTypes]
