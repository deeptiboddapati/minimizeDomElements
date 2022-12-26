<?php
/**
 * Plugin Name:       Contains blocks to explain CSS Grid.
 * Description:       The blocks in this balance minimizing dom elements and maximizing editor usability
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            Deepti Boddapati
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       variable-cards
 *
 * @package           db
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function db_grid_examples_block_init() {
	register_block_type( __DIR__ . '/build/card-icon' );
	register_block_type( __DIR__ . '/build/variable-cards' );
	register_block_type( __DIR__ . '/build/hero' );

}
add_action( 'init', 'db_grid_examples_block_init' );
