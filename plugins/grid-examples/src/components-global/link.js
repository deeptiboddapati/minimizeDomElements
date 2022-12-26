import { TextControl } from '@wordpress/components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons';
import { PluginPrePublishPanel } from '@wordpress/edit-post';
import React, { useState, useEffect } from 'react';
export const LinkInput = ( props ) => {
	const warning = useState();
	function Warning( props ) {
		useEffect( () => {
			props.setWarningClass( 'show-warning' );
			return () => {
				props.setWarningClass( '' );
			};
		} );
		return <></>;
	}
	function changeVal( value, propName ) {
		var args = { [ propName ]: value };
		props.setAttributes( args );
	}
	return (
		<>
			<div className={ warning[ 0 ] }>
				<div className="warning">
					<FontAwesomeIcon
						className={ [ 'warn' ].join( ' ' ) }
						icon={ faCircleExclamation }
					/>
					You are publishing a link without a url!
				</div>
				<TextControl
					label={ 'Enter the URL...' }
					value={ props.url }
					onChange={ ( value ) =>
						changeVal( value, props.attrNameUrl )
					}
				/>
				<TextControl
					label={ 'Enter the Content...' }
					value={ props.content }
					onChange={ ( value ) =>
						changeVal( value, props.attrNameContent )
					}
				/>
			</div>
			{ Boolean( props.content.replace( /\s/g, '' ).length ) &&
			Boolean( props.url.replace( /\s/g, '' ).length ) ? (
				''
			) : (
				<PluginPrePublishPanel>
					<Warning setWarningClass={ warning[ 1 ] } />
					<div>
						<FontAwesomeIcon
							className={ [ 'warn' ].join( ' ' ) }
							icon={ faCircleExclamation }
						/>
						You are publishing a link without a url!
					</div>
				</PluginPrePublishPanel>
			) }
		</>
	);
};
