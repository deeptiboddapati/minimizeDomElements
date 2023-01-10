import { __ } from '@wordpress/i18n';
import './editor.scss';
import {
	useBlockProps,
	InnerBlocks,
	RichText,
	InspectorControls,
} from '@wordpress/block-editor';
import { ImageControls, LinkInput } from 'block-editor-additional-components'
export default function Edit({ attributes, setAttributes }) {
	function handleSelectImage(img) {
		setAttributes({
			imgId: img.id,
			imgUrl: img.url,
			imgAlt: img.alt
		})
	}
	function handleClearImage() {
		setAttributes({
			imgId: '',
			imgUrl: null,
			imgAlt: null
		})
	}
	return (
		<div className="portfolio-project">
			<ImageControls
				imgId={attributes.imgId}
				title="Project Image"
				instructions="This is the image that introduces the project"
				handleSelectImage={handleSelectImage}
				handleClearImage={handleClearImage}
			>
				<img
					className="portfolio-project-img"
					src={attributes.imgUrl}
					alt={attributes.imgAlt}
				/>
			</ImageControls>
			<RichText
				className="portfolio-project-service"
				tagName='p'
				value={attributes.heading}
				onChange={(content) => setAttributes({ heading: content })}
				placeholder={__('Enter the name of the services we did on this project')}
			/>
			<RichText
				className="portfolio-project-name"
				tagName='p'
				value={attributes.text}
				onChange={(content) => setAttributes({ text: content })}
				placeholder={__('Enter the project\'s Name')}
			/>
		</div>
	);
}
