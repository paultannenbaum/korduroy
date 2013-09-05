<?php

if ( function_exists( 'add_theme_support' ) ) {
	add_theme_support( 'post-thumbnails' );
    set_post_thumbnail_size( 158, 158 ); // default Post Thumbnail dimensions
}

if ( function_exists( 'add_image_size' ) ) {
	add_image_size( 'show-thumb', 145, 110, true );
}