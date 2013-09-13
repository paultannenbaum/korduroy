<?php

if ( ! function_exists( 'ktv_setup' ) ):
function ktv_setup() {

	/****************************************
	Backend
	*****************************************/

	// Clean up the head
	remove_action('wp_head', 'rsd_link');
	remove_action('wp_head', 'wlwmanifest_link');
	remove_action('wp_head', 'wp_generator');
	remove_action('wp_head', 'wp_shortlink_wp_head');

	// Add RSS links to head
	add_theme_support( 'automatic-feed-links' );

	// Prevent File Modifications
	define ( 'DISALLOW_FILE_EDIT', true );

	// Show Kitchen Sink in WYSIWYG Editor
	add_filter( 'tiny_mce_before_init', 'ktv_unhide_kitchensink' );

	/****************************************
	Frontend
	*****************************************/

	// Add Post Formats Theme Support
	// add_theme_support( 'post-formats', array('aside', 'gallery', 'link', 'image', 'quote', 'status', 'audio', 'chat', 'video') );

	// Enqueue scripts
	add_action( 'wp_enqueue_scripts', 'ktv_scripts' );

	// Remove Query Strings From Static Resources
	add_filter('script_loader_src', 'ktv_remove_script_version', 15, 1);
	add_filter('style_loader_src', 'ktv_remove_script_version', 15, 1);

	// Remove Read More Jump
	add_filter('the_content_more_link', 'ktv_remove_more_jump_link');
}
endif;
add_action('after_setup_theme', 'ktv_setup');