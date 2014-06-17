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

/**
* Rewrite rule for show permalinks
*/
function ktv_show_permalinks( $post_link, $id = 0 ) {
  $post = get_post($id);

  if ( is_object( $post ) && $post->post_type == 'shows' ) {
    $terms = wp_get_object_terms( $post->ID, 'show_category' );
    if( $terms ) {
      return str_replace( '%show_category%' , $terms[0]->slug , $post_link );
    }
  }

return $post_link;
}

/**
 * Set dedault values for excerpt
 */
function new_excerpt_more( $more ) {
  return '...';
}

/**
* Helper function to fetch excerpt by post id
*/
function get_excerpt_by_id($post_id){
  $the_post = get_post($post_id); //Gets post ID
  $the_excerpt = $the_post->post_content; //Gets post_content to be used as a basis for the excerpt
  $excerpt_length = 45; //Sets excerpt length by word count
  $the_excerpt = strip_tags(strip_shortcodes($the_excerpt)); //Strips tags and images
  $words = explode(' ', $the_excerpt, $excerpt_length + 1);

  if(count($words) > $excerpt_length) :
    array_pop($words);
    array_push($words, '…(continued)');
    $the_excerpt = implode(' ', $words);
  endif;

  $the_excerpt = '<p>' . $the_excerpt . '</p>';
  return $the_excerpt;
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

    wp_deregister_script('wc-add-to-cart-variation');
    wp_register_script('wc-add-to-cart-variation', get_template_directory_uri() . '/assets/scripts/vendor/woocommerce/add-to-cart-variation.js' , array( 'jquery' ), false, true);
    wp_enqueue_script('wc-add-to-cart-variation');
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

/**
* Replacing the default WordPress search form with an HTML5 version
*/
function html5_search_form( $form ) {
  $form =

  '<form role="search" method="get" class="site-search" action="' . home_url( '/' ) . '" >
    <input type="search" placeholder="Search..." class="site-search-input" value="' . get_search_query() . '" name="s" />
    <input type="submit" class="site-search-submit" value="GO" />
  </form>';

  return $form;
}

/**
* Adds "show-filter" query variable
*/
function add_query_vars_filter( $vars ){
    $vars[] = "show-filter";
    return $vars;
}
add_filter( 'query_vars', 'add_query_vars_filter' );
