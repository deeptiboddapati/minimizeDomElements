import { useBlockProps } from '@wordpress/block-editor';
import DOMPurify from 'dompurify';
export default function save({ attributes }) {
	return (
		<div className='portfolio-project' {...useBlockProps.save()}>
			{
				attributes.imgUrl ?
					<img
						className="portfolio-project-img"
						src={attributes.imgUrl}
						alt={attributes.imgAlt}
					/>
					:
					<></>
			}
			<p
				className="portfolio-project-service"
				dangerouslySetInnerHTML={{
					__html: DOMPurify.sanitize(attributes.heading),
				}}
			/>
			<p
				className="portfolio-project-name"
				dangerouslySetInnerHTML={{
					__html: DOMPurify.sanitize(attributes.text),
				}}
			/>
		</div>
	);
}
