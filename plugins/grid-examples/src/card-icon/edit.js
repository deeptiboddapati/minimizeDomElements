import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText } from '@wordpress/block-editor';
import './editor.scss';
import { ImageControls } from './image';

export default function Edit({ attributes, setAttributes }) {
	return (
		<div className="card-icon" {...useBlockProps()}>
			<ImageControls
				className='card-icon-image'
				src={attributes.imgUrl}
				alt={attributes.imgAlt}
				id={attributes.imgId}
				propNames={['imgUrl', 'imgAlt', 'imgId']}
				setAttributes={setAttributes}
				title='Icon'
				instructions='This is a small Icon to represent this card.'
			/>
			<RichText
				className="card-icon-heading"
				tagName='h4'
				value={attributes.title}
				onChange={(newTitle) => setAttributes({ title: newTitle })}
				placeholder={__('Title. Keep it below 3 words.')}
			/>
			<RichText
				className="card-icon-text"
				tagName='p'
				value={attributes.content}
				onChange={(value) => setAttributes({ content: value })}
				placeholder={__('Description. Keep it below 20 words.')}
			/>
		</div>
	);
}
