import embed from './blocks/embed';
import textSection from './blocks/textSection';
import video from './blocks/video'


export default {
	title: 'Project Blocks',
	name: '_projectBlocks',
	type: 'array',
	of: [textSection, video, embed],
}