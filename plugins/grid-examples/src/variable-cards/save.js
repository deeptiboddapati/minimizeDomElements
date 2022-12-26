import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';
import DOMPurify from 'dompurify';
export default function save({ attributes }) {
	return (
		<section className="variable-cards" {...useBlockProps.save()}>
			<div className="variable-cards-captions">
				<p
					className="variable-cards-captions-section-header"
					dangerouslySetInnerHTML={{
						__html: DOMPurify.sanitize(attributes.header),
					}}
				/>
				<h3
					className="variable-cards-captions-heading"
					dangerouslySetInnerHTML={{
						__html: DOMPurify.sanitize(attributes.heading),
					}}
				/>
				<p
					className="variable-cards-captions-text"
					dangerouslySetInnerHTML={{
						__html: DOMPurify.sanitize(attributes.text),
					}}
				/>
			</div>
			<div className="variable-cards-cards">
				<InnerBlocks.Content />
			</div>
		</section>
	);
}
