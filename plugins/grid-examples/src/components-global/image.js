import { MediaPlaceholder } from '@wordpress/block-editor';
import React, { useState, useEffect } from 'react';
export const ImageControls = (props) => {
	const {
		imgId,
		handleSelectImage,
		handleClearImage,
		title,
		instructions
	} = props;
	const onUploadError = (err) => {
		noticeOperations.removeAllNotices();
		noticeOperations.createErrorNotice(err);
	};
	const isHovering = useState(false);
	return (
		<div
			className='imageWrapper'
			style={{
				height: 'fit-content',
				width: 'fit-content',
				position: 'relative',
				maxHeight: '100%',
				maxWidth: '100%'
			}}
			onMouseEnter={() => { isHovering[1](true) }}
			onMouseLeave={() => { isHovering[1](false) }}
		>
			{imgId ? (
				<>
					{props.children}
					<div
						className='imageEditBox'
						style={{
							display: 'grid',
							gridTemplateColumns: 'minmax(100px, auto)',
							gridTemplateRows: 'minmax(100px, auto)',
							position: 'absolute',
							top: 0,
							right: 0,
							left: 0,
							bottom: 0
						}}
					>
						{
							isHovering[0] &&
							<button
								onClick={() => {
									handleClearImage();
								}}
								style={{
									placeSelf: 'center',
								}}
							>
								Clear Image
							</button>
						}
					</div>
				</>
			) : (
				<MediaPlaceholder
					accept="image/"
					labels={{ title: title, instructions: instructions }}
					onError={(err) => onUploadError(err)}
					onSelect={(arg) => {
						handleSelectImage(arg);
					}}
					value={imgId}
				/>
			)}
		</div>
	);
};
