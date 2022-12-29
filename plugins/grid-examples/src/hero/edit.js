import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText, InspectorControls } from '@wordpress/block-editor';
import './editor.scss';
import { ImageControls } from '../components-global/image';
import { LinkInput } from '../components-global/link';
import {
	TextControl,
	ToggleControl,
	PanelBody,
	PanelRow
} from '@wordpress/components';
export default function Edit({ attributes, setAttributes }) {
	function generate_Highlight(params) {

	}
	return (

		<section {...useBlockProps()}>
			<div className='tutorial tutorial-show'>
				<div className='tutorial-ui'>
					{[...Array(1000)].map((e, i) => <span className="tutorial-ui-area" key={i}
						onClick={(event) => console.log(event.target)} data-grid-id={i}></span>)}
				</div>
			</div>
			<ImageControls
				className="hero-icon"
				src={attributes.imgUrl_icon}
				alt={attributes.imgAlt_icon}
				id={attributes.imgId_icon}
				propNames={['imgUrl_icon', 'imgAlt_icon', 'imgId_icon']}
				setAttributes={setAttributes}
				title="Icon"
				instructions="This is a small Icon to represent this product."
			/>
			<RichText
				className="hero-headline"
				tagName="h1"
				value={attributes.headline}
				onChange={(newTitle) =>
					setAttributes({ headline: newTitle })
				}
				placeholder={__('Title. Keep it below 3 words.')}
			/>
			<RichText
				className="hero-text"
				tagName="p"
				value={attributes.text}
				onChange={(content) => setAttributes({ text: content })}
				placeholder={__(
					'This is the most important supporting point on the page.'
				)}
			/>
			<a
				href={attributes.urlPrimary}
				className="hero-navigation-primary"
			>
				{attributes.ctaPrimary}
			</a>

			<LinkInput
				url={attributes.urlPrimary}
				content={attributes.ctaPrimary}
				setAttributes={setAttributes}
				attrNameUrl="urlPrimary"
				attrNameContent="ctaPrimary"
			/>
			<a
				href={attributes.urlSecondary}
				className="hero-navigation-secondary"
			>
				{attributes.ctaSecondary}
			</a>
			<LinkInput
				url={attributes.urlSecondary}
				content={attributes.ctaSecondary}
				setAttributes={setAttributes}
				attrNameUrl={'urlSecondary'}
				attrNameContent={'ctaSecondary'}
			/>
			<ImageControls
				className="hero-image"
				src={attributes.imgUrl}
				alt={attributes.imgAlt}
				id={attributes.imgId}
				propNames={[
					'imgUrl',
					'imgAlt',
					'imgId',
				]}
				setAttributes={setAttributes}
				title="Icon"
				instructions="This is a large feature picture to represent this product."
			/>
			<InspectorControls>
				<PanelBody title="Create Tutorial" initialOpen={false}>

				</PanelBody>
			</InspectorControls>

		</section>
	);
}
