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
	function handleSelectIcon(img) {
		setAttributes({
			imgId_icon: img.id,
			imgUrl_icon: img.url,
			imgAlt_icon: img.alt
		})
	}
	function handleClearIcon() {
		setAttributes({
			imgId_icon: '',
			imgUrl_icon: null,
			imgAlt_icon: null
		})
	}
	function handleSelectHeroImage(img) {
		setAttributes({
			imgId: img.id,
			imgUrl: img.url,
			imgAlt: img.alt
		})
	}
	function handleClearHeroImage() {
		setAttributes({
			imgId: '',
			imgUrl: null,
			imgAlt: null
		})
	}
	return (
		<section className="hero" {...useBlockProps()}>
			<div className='hero-icon'>
				<ImageControls
					imgId={attributes.imgId_icon}
					title="Icon"
					instructions="This is a small Icon to represent this product."
					handleSelectImage={handleSelectIcon}
					handleClearImage={handleClearIcon}
				>
					<img
						className="hero-icon"
						src={attributes.imgUrl_icon}
						alt={attributes.imgAlt_icon}
					/>
				</ImageControls>
			</div>
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
			<div className='hero-image'>
				<ImageControls
					imgId={attributes.imgId}
					title="Hero Image"
					instructions="This is a large featured picture to represent this product."
					handleSelectImage={handleSelectHeroImage}
					handleClearImage={handleClearHeroImage}
				>
					<img
						className="hero-image"
						src={attributes.imgUrl}
						alt={attributes.imgAlt}
						style={{ maxHeight: '100%', maxWidth: '100%' }}
					/>
				</ImageControls>
			</div>
			<InspectorControls>
				<PanelBody title="Create Tutorial" initialOpen={false}>

				</PanelBody>
			</InspectorControls>
		</section>
	);
}
