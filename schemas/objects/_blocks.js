import textSection from './blocks/textSection';
import embed from './blocks/embed';
import link from './blocks/link'

export default {
	title: 'Blocks',
	name: '_blocks',
	type: 'array',
	of: [textSection, embed, link]
}