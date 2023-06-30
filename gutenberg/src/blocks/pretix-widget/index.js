const { registerBlockType } = wp.blocks;

import metadata from './block.json';
import edit from './edit.js';
import save from './save.js';

registerBlockType('pretix/widget', {
	...metadata,
	edit,
	save,
});
