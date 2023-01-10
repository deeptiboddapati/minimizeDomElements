import React, { useState } from 'react';
export const LayoutFullWidth = (props) => {
	console.log(props);
	return <div className="layoutFullWidth">{props.children}</div>;
}

export const LayoutFullWidthPadded = (props) => {
	return <div className="layoutFullWidth-padded">{props.children}</div>;
}

export const LayoutCenteredColumn = (props) => {
	return (
		<div className="layoutCenteredColumn"
			style={{
				width: "1229px",
				margin: '0 auto'
			}}
			{...props.blockProps}
		>
			{props.children}
		</div>
	)
}

export const LayoutSidebar = (props) => {
	return (
		<div className="layoutSidebar">
			<div className="layoutSidebarPrimary">{props.primary}</div>
			<div className="layoutSidebarSecondary">{props.secondary}</div>
		</div>
	);
}
