import { MediaPlaceholder } from '@wordpress/block-editor';
import { useState } from '@wordpress/element';
export const ImageControls = (props) => {
	const { isHovering } = useState();
	const {
		className,
		// src,
		// alt,
		// id,
		// propNames,
		// setAttributes,
		// title,
		// instruction,
		// nodeImageContainer,
		onSuccessfulSelection,
		nodeImageTag
	} = props;
	var nodeImageContainer = props.nodeImageContainer;
	if (!nodeImageContainer) {
		nodeImageContainer = React.Fragment;
	}
	const clearImage = (propUrl, propAlt, propId) => {
		var args = {};
		args[propUrl] = undefined;
		args[propAlt] = '';
		args[propId] = undefined;
		setAttributes(args);
	};

	//handleSelect can be defined outside and passed in. We can pass in img into it.
	// const handleSelect = (img, propUrl, propAlt, propId) => {
	// 	var args = {};
	// 	args[propUrl] = img.url;
	// 	args[propAlt] = img.alt;
	// 	args[propId] = img.id;
	// 	setAttributes(args);
	// };
	const onUploadError = (err) => {
		noticeOperations.removeAllNotices();
		noticeOperations.createErrorNotice(err);
	};
	// const buttonState = useState(false);
	return (
		<nodeImageContainer>
			{id ? (
				<div className='imageEditBox'
					style={{
						display: flex,
						flexFlow: 'column',

					}}
					handleMouseOver={() => { isHovering[1](true) }}
					handleMouseOut={() => { isHovering[1](false) }}
				>
					{props.children}
					{
						isHovering[0] &&
						<div className='imageRemovePanel'>
							<button
								onClick={() => {
									clearImage(...propNames);
								}}
								style={{
									alignSelf: 'flex-start',
									justifySelf: 'start',
									position: "absolute",
									top: 0,
									width: "100%",
									height: "100%",
									display: "none",
								}}
							>
								Clear Image
							</button>
						</div>
					}
				</div>
			) : (
				<MediaPlaceholder
					className={className}
					accept="image/"
					labels={{ title: title, instructions: instructions }}
					onError={(err) => onUploadError(err)}
					onSelect={(arg) => {
						handleSelect(arg, ...propNames);
					}}
					value={id}
					mediaPreview={id && <img src={url} alt={alt} />}
				/>
			)}
		</nodeImageContainer>
	);
};
