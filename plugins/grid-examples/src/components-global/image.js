import { MediaPlaceholder } from '@wordpress/block-editor';
import { useState } from '@wordpress/element';
export const ImageControls = ( props ) => {
	const {
		className,
		src,
		alt,
		id,
		propNames,
		setAttributes,
		title,
		instructions,
	} = props;
	const clearImage = ( propUrl, propAlt, propId ) => {
		var args = {};
		args[ propUrl ] = undefined;
		args[ propAlt ] = '';
		args[ propId ] = undefined;
		setAttributes( args );
	};
	const handleSelect = ( img, propUrl, propAlt, propId ) => {
		var args = {};
		args[ propUrl ] = img.url;
		args[ propAlt ] = img.alt;
		args[ propId ] = img.id;
		setAttributes( args );
	};
	const onUploadError = ( err ) => {
		noticeOperations.removeAllNotices();
		noticeOperations.createErrorNotice( err );
	};
	const buttonState = useState( false );
	return (
		<>
			{ id ? (
				<div className={ className } style={ { flexFlow: 'column' } }>
					<img
						src={ src }
						alt={ alt }
						onClick={ () => buttonState[ 1 ]( ! buttonState[ 0 ] ) }
					/>
					{ buttonState[ 0 ] && (
						<button
							onClick={ () => {
								clearImage( ...propNames );
								buttonState[ 1 ]( ! buttonState[ 0 ] );
							} }
							style={ {
								alignSelf: 'flex-start',
								justifySelf: 'start',
							} }
						>
							Clear Image
						</button>
					) }
				</div>
			) : (
				<MediaPlaceholder
					className={ className }
					accept="image/"
					labels={ { title: title, instructions: instructions } }
					onError={ ( err ) => onUploadError( err ) }
					onSelect={ ( arg ) => {
						handleSelect( arg, ...propNames );
					} }
					value={ id }
					mediaPreview={ id && <img src={ url } alt={ alt } /> }
				/>
			) }
		</>
	);
};
