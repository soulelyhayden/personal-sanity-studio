// First, we must import the schema creator
// Then import schema types from any plugins that might expose them
import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Documents
import about from './documents/settings/about'
import siteSettings from './documents/settings/siteSettings'
import navigation from './documents/settings/navigation'
import page from './documents/site-pages/page'
import project from './documents/projects/project'
import projectTag from './documents/projects/projectTag'

// Objects
import _blocks from './objects/_blocks'
import socialSite from './objects/utilities/navigation/socialSite.js'

// Degraded need to be removed
import projectText from './objects/projectText.js'
import altImage from './objects/altImage.js'

const documents = [about, siteSettings, navigation, page, project, projectTag]
const objects = [_blocks, socialSite, projectText, altImage]


// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  name: 'default',
	types: schemaTypes.concat([...documents, ...objects]),
})
