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
	wp_register_style('ktv_style', get_stylesheet_directory_uri().'/style.css', null, '1.0', 'all' );
	wp_enqueue_style( 'ktv_style' );

	// JavaScript
	if ( !is_admin() ) {
	  wp_deregister_script('jquery');
		# wp_register_script('jquery', '//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js', false, NULL);
		wp_register_script('jquery', get_template_directory_uri() . '/assets/scripts/vendor/libs/jquery-1.9.1.min.js', false, NULL);
		wp_enqueue_script('jquery');
		wp_enqueue_script('app', get_template_directory_uri() . '/assets/scripts/app.js', array('jquery'), false, NULL );
	}
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
