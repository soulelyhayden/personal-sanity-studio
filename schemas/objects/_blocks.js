import textSection from './blocks/textSection';
import embed from './blocks/embed';
import link from './blocks/link'
import interactiveSection from './blocks/interactiveSection'
import projectsArchive from './blocks/projectsArchive'

export default {
	title: 'Blocks',
	name: '_blocks',
	type: 'array',
	of: [textSection, embed, link, interactiveSection, projectsArchive]
}