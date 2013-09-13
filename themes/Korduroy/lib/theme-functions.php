<?php

/****************************************
Backend Functions
*****************************************/

/**
 * Show Kitchen Sink in WYSIWYG Editor
 */
function ktv_unhide_kitchensink($args) {
	$args['wordpress_adv_hidden'] = false;
	return $args;
}

/****************************************
Frontend
*****************************************/

/**
 * Register/Deregister scripts
 */

function ktv_scripts() {
	// CSS first
	wp_deregister_style('mailchimpSF_main_css');
	wp_deregister_style('mailchimpSF_ie_css');
	wp_deregister_style('post_ratings');

	wp_register_style('ktv', get_stylesheet_directory_uri().'/style.css', null, '1.0', 'all' );
	wp_enqueue_style( 'ktv' );

	// JavaScript
	# wp_deregister_script('jquery');
}

/**
 * Remove Query Strings From Static Resources
 */
function ktv_remove_script_version($src){
	$parts = explode('?', $src);
	return $parts[0];
}

/**
 * Remove Read More Jump
 */
function ktv_remove_more_jump_link($link) {
	$offset = strpos($link, '#more-');
	if ($offset) {
		$end = strpos($link, '"',$offset);
	}
	if ($end) {
		$link = substr_replace($link, '', $offset, $end-$offset);
	}
	return $link;
}