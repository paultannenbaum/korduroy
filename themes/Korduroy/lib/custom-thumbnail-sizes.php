<?php

if ( function_exists( 'add_theme_support' ) ) {
	add_theme_support( 'post-thumbnails' );
    set_post_thumbnail_size( 158, 158 ); // default Post Thumbnail dimensions
}

if ( function_exists( 'add_image_size' ) ) {
	add_image_size( 'show-thumb', 145, 110, true );
	add_image_size( 'home-featured', 700, 400, true );
	add_image_size( 'home-blog-thumb', 367, 200, true );
	add_image_size( 'blog-full-width-cropped', 803, 350, true );
}