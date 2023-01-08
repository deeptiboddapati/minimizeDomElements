import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText } from '@wordpress/block-editor';
import './editor.scss';
import { ImageControls } from 'block-editor-additional-components'
import { LayoutFullWidth } from '../components-global/layouts/layouts';
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
	return (
		<div className="card-icon" {...useBlockProps()}>
			<LayoutFullWidth
				className="card-icon"
				onClick={() => console.log('hurdur')}
			></LayoutFullWidth>
			<div className='card-icon-image'>
				<ImageControls
					imgId={attributes.imgId_icon}
					title="Icon"
					instructions="This is a small Icon to represent this product."
					handleSelectImage={handleSelectIcon}
					handleClearImage={handleClearIcon}
				>
					<img
						className="card-icon-image"
						src={attributes.imgUrl_icon}
						alt={attributes.imgAlt_icon}
					/>
				</ImageControls>
			</div>
			<RichText
				className="card-icon-heading"
				tagName="h4"
				value={attributes.title}
				onChange={(newTitle) =>
					setAttributes({ title: newTitle })
				}
				placeholder={__('Title. Keep it below 3 words.')}
			/>
			<RichText
				className="card-icon-text"
				tagName="p"
				value={attributes.content}
				onChange={(value) => setAttributes({ content: value })}
				placeholder={__('Description. Keep it below 20 words.')}
			/>
		</div>
	);
}
