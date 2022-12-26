import { useBlockProps } from '@wordpress/block-editor';
import DOMPurify from 'dompurify';
export default function save({ attributes }) {

	return (
		<section className="hero" {...useBlockProps.save()}>
			{attributes.imgUrl_icon && attributes.imgAlt ?
				<img className="hero-image"
					src={attributes.imgUrl_icon}
					alt={attributes.imgAlt_icon} />
				:
				<></>
			}
			<img className="hero-icon" src="./assets/images/icon-min.jpg" alt="A
		decorative icon that shows we build an app" />
			<h1 className="hero-headline" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(attributes.headline) }} />
			<p className="hero-text" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(attributes.content) }} />
			{attributes.urlPrimary && attributes.ctaPrimary ?
				<a className="hero-navigation-primary" href={attributes.urlPrimary}>{attributes.ctaPrimary}</a> :
				<></>
			}
			{attributes.urlSecondary && attributes.ctaSecondary ?
				<a className="hero-navigation-secondary" href={attributes.urlSecondary}>{attributes.ctaSecondary}</a> :
				<></>
			}
			{attributes.imgurl && attributes.imgAlt ?
				<img className="hero-image"
					src={attributes.imgurl}
					alt={attributes.imgAlt} />
				:
				<></>
			}
		</section>
	);
}
