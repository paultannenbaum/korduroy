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

/**
 * Rewrite Rule for blog index pagination
 */
function wpa_fix_blog_pagination(){
    add_rewrite_rule(
        'blog/page/([0-9]+)/?$',
        'index.php?pagename=blog&paged=$matches[1]',
        'top'
    );
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
	if (!is_admin() ) {
    // Basically psuedo register jQuery. We want to load it via the html5 boilerplate method (cdn with local fallback),
    // But wordpress makes this hard to do. So do it manually above wp_footer call, and then load dependencies accordingly
    wp_deregister_script('jquery');
    wp_register_script('jquery', '', false, false, true);
    wp_enqueue_script('jquery');

		wp_register_script('app', get_template_directory_uri() . '/assets/scripts/app.js', array('jquery'), false, true );
	  wp_enqueue_script('app');
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
