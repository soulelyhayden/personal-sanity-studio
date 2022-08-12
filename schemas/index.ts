import { defineType, defineField } from "sanity";


import { about } from "./documents/settings/about"
import { siteSettings } from "./documents/settings/siteSettings"
import { navigation } from "./documents/settings/navigation"

import { navPage } from "./objects/utilities/navigation/navPage"
import { page } from "./documents/site-pages/page"

/**
 * Blocks import
 */
import { aboutSection } from "./objects/blocks/aboutSection";
import { contactForm } from "./objects/blocks/contactForm";

const _blocks = defineType({
	title: 'Blocks',
	name: '_blocks',
	type: 'array',
	of: [aboutSection, contactForm]
})
const settings = [about, siteSettings, navigation]

export const schemaTypes = [...settings, _blocks, navPage, page]
