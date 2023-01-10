import { __ } from '@wordpress/i18n';
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';
import './editor.scss';
import { LayoutCenteredColumn } from '../components-global/layouts/layouts';
export default function Edit({ attributes }) {
	const blockProps = useBlockProps();
	return (
		<LayoutCenteredColumn blockProps={blockProps}>
			<InnerBlocks />
		</LayoutCenteredColumn>
	);
}
