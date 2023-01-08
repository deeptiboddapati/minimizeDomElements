import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	InnerBlocks,
	RichText,
	InspectorControls,
} from '@wordpress/block-editor';
import './editor.scss';
export default function Edit({ attributes, setAttributes }) {
	return (
		<section className="variable-cards" {...useBlockProps()}>
			<RichText
				className="variable-cards-captions-section-header"
				tagName="p"
				value={attributes.header}
				onChange={(content) => setAttributes({ header: content })}
				placeholder={__('Put the name of the header here...')}
			/>
			<RichText
				className="variable-cards-captions-heading"
				tagName="h3"
				value={attributes.heading}
				onChange={(content) =>
					setAttributes({ heading: content })
				}
				placeholder={__('Heading of the verse')}
			/>
			<RichText
				className="variable-cards-captions-text"
				tagName="p"
				value={attributes.text}
				onChange={(content) => setAttributes({ text: content })}
				placeholder={__('Preamble to the verses')}
			/>
			<div className="variable-cards-cards">
				<InnerBlocks allowedBlocks={['db/card-icon']} />
			</div>
			<InspectorControls>
				<div>
					<a
						onClick={() => generate_Highlight()}
						onHover={() => {
							return <>Thisss</>;
						}}
					>
						Add Highlight
					</a>
				</div>
			</InspectorControls>
		</section>
	);
}
