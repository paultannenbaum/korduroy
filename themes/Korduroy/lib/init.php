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

	add_filter( 'tiny_mce_before_init', 'ktv_unhide_kitchensink' );
	add_filter( 'excerpt_more', 'new_excerpt_more' );
	add_filter( 'post_type_link', 'ktv_show_permalinks', 1, 2 );
	add_action( 'init', 'wpa_fix_blog_pagination' );
	add_action( 'init', 'get_excerpt_by_id' );


	/****************************************
	Frontend
	*****************************************/
	add_action( 'wp_enqueue_scripts', 'ktv_scripts' );
	add_filter('script_loader_src', 'ktv_remove_script_version', 15, 1);
	add_filter('style_loader_src', 'ktv_remove_script_version', 15, 1);
	add_filter('the_content_more_link', 'ktv_remove_more_jump_link');
	add_filter( 'get_search_form', 'html5_search_form' );
}
endif;
add_action('after_setup_theme', 'ktv_setup');