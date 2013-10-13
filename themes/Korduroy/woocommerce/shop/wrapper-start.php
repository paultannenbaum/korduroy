<?php
/**
 * Over ride of Woocommerce Original Template
 *
 */

if ( ! defined( 'ABSPATH' ) ) exit; // Exit if accessed directly

$template = get_option('template');

switch( $template ) {
	case 'twentyeleven' :
		echo '<div id="primary"><div id="content" role="main">';
		break;
	case 'twentytwelve' :
		echo '<div id="primary" class="site-content"><div id="content" role="main">';
		break;
	case 'twentythirteen' :
		echo '<div id="primary" class="site-content"><div id="content" role="main" class="entry-content twentythirteen">';
		break;
	default :
		echo '<div id="body"><div class="main" role="main">';
		break;
}