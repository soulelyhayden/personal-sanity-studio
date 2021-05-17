// First, we must import the schema creator
// Then import schema types from any plugins that might expose them
import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Documents
import aboutMe from './documents/aboutMe'
import siteSettings from './documents/siteSettings'
import page from './documents/site-pages/page'
import project from './documents/project'
import projectTag from './documents/projectTag'


const documents = [aboutMe, siteSettings, page, project, projectTag]

// Objects
import socialSite from './objects/socialSite.js'
import projectText from './objects/projectText.js'
import altImage from './objects/altImage.js'
import link from './objects/link.js'

// Page Templates
import defaultPage from './documents/site-pages/templates/default-page'
import contactPage from './documents/site-pages/templates/contact-page'

// Blocks
import _blocks from './objects/_blocks'
import textSection from './objects/blocks/textSection'
import embed from './objects/blocks/embed.js'

const objects = [socialSite, projectText, altImage, link]
const pageTemplates = [defaultPage, ]
const blocks = [_blocks, textSection, embed]


// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  name: 'default',
	types: schemaTypes.concat([...documents, ...objects, ...pageTemplates, ...blocks]),
})
