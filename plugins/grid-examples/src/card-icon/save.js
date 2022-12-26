import { useBlockProps } from '@wordpress/block-editor';
import DOMPurify from 'dompurify';
export default function save( { attributes } ) {
	const { imgUrl, imgAlt, title, content } = attributes;
	return (
		<div className="card-icon" { ...useBlockProps.save() }>
			{ imgUrl && (
				<img
					className="card-icon-image"
					src={ imgUrl }
					alt={ imgAlt }
				/>
			) }
			<h4
				className="card-icon-heading"
				dangerouslySetInnerHTML={ {
					__html: DOMPurify.sanitize( title ),
				} }
			/>
			<p
				className="card-icon-text"
				dangerouslySetInnerHTML={ {
					__html: DOMPurify.sanitize( content ),
				} }
			/>
		</div>
	);
}
