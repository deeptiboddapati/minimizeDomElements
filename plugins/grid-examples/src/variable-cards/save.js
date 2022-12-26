import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';
import DOMPurify from 'dompurify';
export default function save({ attributes }) {
	return (
		<section className="variable-cards" {...useBlockProps.save()} >
			<p className="variable-cards-section-header" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(attributes.header) }} />
			<h3 className="variable-cards-heading" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(attributes.heading) }} />
			<p className="variable-cards-text" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(attributes.text) }} />
			<div className='variable-cards-cards'>
				<InnerBlocks.Content />
			</div>
		</section>
	);
}
