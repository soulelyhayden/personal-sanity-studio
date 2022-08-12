import { defineType, defineField } from "sanity";

/**
 * Documents import
 */
import { about } from "./documents/settings/about"
import { siteSettings } from "./documents/settings/siteSettings"
import { navigation } from "./documents/settings/navigation"

const _documents = [about, siteSettings, navigation ]

/**
 * Utilities import
 */
import { navPage } from "./objects/utilities/navigation/navPage"
import { page } from "./documents/site-pages/page"
import { socialSite } from "./objects/utilities/items/socialSite";

const _utilities = [ navPage, page, socialSite ]

/**
 * Blocks import
 */
import { aboutSection } from "./objects/blocks/aboutSection";
import { contactForm } from "./objects/blocks/contactForm";
import { interactiveSection } from "./objects/blocks/interactiveSection";
import { textSection } from "./objects/blocks/textSection";

const _blocks = defineType({
	title: 'Blocks',
	name: '_blocks',
	type: 'array',
	of: [aboutSection, contactForm, interactiveSection, textSection],

})

export const schemaTypes = [..._documents, ..._utilities, _blocks]
