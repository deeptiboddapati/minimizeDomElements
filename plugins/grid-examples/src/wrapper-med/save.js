import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';
import { LayoutCenteredColumn } from '../components-global/layouts/layouts';
export default function save() {
	const blockProps = useBlockProps.save();
	return (
		<LayoutCenteredColumn blockProps={blockProps}>
			<InnerBlocks.Content />
		</LayoutCenteredColumn>
	);
}
