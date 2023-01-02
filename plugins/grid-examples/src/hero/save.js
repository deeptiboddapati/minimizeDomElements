import { useBlockProps } from '@wordpress/block-editor';
import DOMPurify from 'dompurify';
export default function save({ attributes }) {
	console.log(attributes)
	return (
		<section className="hero" {...useBlockProps.save()}>
			{attributes.imgUrl_icon ?
				<img
					className="hero-icon"
					src={attributes.imgUrl_icon}
					alt={attributes.imgAlt_icon}
				/>
				:
				<></>
			}
			<h1
				className="hero-headline"
				dangerouslySetInnerHTML={{
					__html: DOMPurify.sanitize(attributes.headline),
				}}
			/>
			<p
				className="hero-text"
				dangerouslySetInnerHTML={{
					__html: DOMPurify.sanitize(attributes.text),
				}}
			/>
			{attributes.urlPrimary && attributes.ctaPrimary ? (
				<a
					className="hero-navigation-primary"
					href={attributes.urlPrimary}
				>
					{attributes.ctaPrimary}
				</a>
			) : (
				<></>
			)}
			{attributes.urlSecondary && attributes.ctaSecondary ? (
				<a
					className="hero-navigation-secondary"
					href={attributes.urlSecondary}
				>
					{attributes.ctaSecondary}
				</a>
			) : (
				<></>
			)}
			{attributes.imgUrl ?
				<img
					className="hero-image"
					src={attributes.imgUrl}
					alt={attributes.imgAlt}
				/>
				:
				<></>
			}
		</section>
	);
}
