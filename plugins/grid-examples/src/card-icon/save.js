/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps } from '@wordpress/block-editor';
import DOMPurify from 'dompurify';

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */
export default function save({ attributes }) {
	console.log(attributes)
	const { content, title, imgAlt, imgUrl } = attributes;
	console.log(attributes.title)
	return (
		<div className="card-icon" {...useBlockProps.save()}>
			{imgUrl && <img className='card-icon-image' src={imgUrl} alt={imgAlt} />}
			<h4 className="card-icon-heading" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(title) }} />
			<p className="card-icon-text" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(content) }} />
		</div>
	);
}
