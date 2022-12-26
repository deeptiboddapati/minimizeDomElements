import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText } from '@wordpress/block-editor';
import './editor.scss';
import { ImageControls } from '../components-global/image';
import { LinkInput } from '../components-global/link';

export default function Edit( { attributes, setAttributes } ) {
	return (
		<section className="hero" { ...useBlockProps() }>
			<ImageControls
				className="hero-icon"
				src={ attributes.imgUrl_icon }
				alt={ attributes.imgAlt_icon }
				id={ attributes.imgId_icon }
				propNames={ [ 'imgUrl_icon', 'imgAlt_icon', 'imgId_icon' ] }
				setAttributes={ setAttributes }
				title="Icon"
				instructions="This is a small Icon to represent this product."
			/>
			<RichText
				className="hero-headline"
				tagName="h1"
				value={ attributes.headline }
				onChange={ ( newTitle ) =>
					setAttributes( { headline: newTitle } )
				}
				placeholder={ __( 'Title. Keep it below 3 words.' ) }
			/>
			<RichText
				className="hero-text"
				tagName="p"
				value={ attributes.text }
				onChange={ ( content ) => setAttributes( { text: content } ) }
				placeholder={ __(
					'This is the most important supporting point on the page.'
				) }
			/>
			<a
				href={ attributes.urlPrimary }
				className="hero-navigation-primary"
			>
				{ attributes.ctaPrimary }
			</a>

			<LinkInput
				url={ attributes.urlPrimary }
				content={ attributes.ctaPrimary }
				setAttributes={ setAttributes }
				attrNameUrl="urlPrimary"
				attrNameContent="ctaPrimary"
			/>
			<a
				href={ attributes.urlSecondary }
				className="hero-navigation-secondary"
			>
				{ attributes.ctaSecondary }
			</a>
			<LinkInput
				url={ attributes.urlSecondary }
				content={ attributes.ctaSecondary }
				setAttributes={ setAttributes }
				attrNameUrl={ 'urlSecondary' }
				attrNameContent={ 'ctaSecondary' }
			/>
			<ImageControls
				className="featured-image"
				src={ attributes.imgUrl_featured }
				alt={ attributes.imgAlt_featured }
				id={ attributes.imgId_featured }
				propNames={ [
					'imgUrl_featured',
					'imgAlt_featured',
					'imgId_featured',
				] }
				setAttributes={ setAttributes }
				title="Icon"
				instructions="This is a large feature picture to represent this product."
			/>
		</section>
	);
}
