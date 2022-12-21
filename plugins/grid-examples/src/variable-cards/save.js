/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */
export default function save() {
	return (
		<section  {...useBlockProps.save()} className="variable-cards" >
			<p className="variable-cards-section-header">Our Services</p>
			<h3 className="variable-cards-heading">From idea to execution</h3>
			<p className="variable-cards-text">Marketing, development, design, and
				project
				management, we have all the specialists needed to build
				great
				things.</p>
			<div className='variable-cards-cards'>
				<InnerBlocks.Content />
			</div>
		</section>
	);
}
