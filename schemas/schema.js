// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'


import aboutMe from './documents/aboutMe'
import siteSettings from './documents/siteSettings'
import project from './documents/project'
import projectTag from './documents/projectTag'

import socialSite from './objects/socialSite.js'
import embed from './objects/embed.js'
import projectText from './objects/projectText.js'
import altImage from './objects/altImage.js'
import link from './objects/link.js'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */
	siteSettings,
	project,
	projectText,
	altImage,
	link,
	embed,
	projectTag,
	aboutMe,
	socialSite
	

  ]),
})
