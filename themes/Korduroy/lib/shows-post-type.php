<?php

function shows_post_type() {
  $labels = array(
    'name'               => _x( 'Shows', 'post type general name' ),
    'singular_name'      => _x( 'Show', 'post type singular name' ),
    'add_new'            => _x( 'Add New', 'show' ),
    'add_new_item'       => __( 'Add New Show' ),
    'edit_item'          => __( 'Edit Show' ),
    'new_item'           => __( 'New Show' ),
    'all_items'          => __( 'All Shows' ),
    'view_item'          => __( 'View Shows' ),
    'search_items'       => __( 'Search Shows' ),
    'not_found'          => __( 'No shows found' ),
    'not_found_in_trash' => __( 'No shows found in the Trash' ),
    'parent_item_colon'  => '',
    'menu_name'          => 'Shows'
  );
  $args = array(
    'labels'        => $labels,
    'public'        => true,
    'menu_position' => 5,
    'supports'      => array( 'title', 'editor', 'thumbnail', 'comments' ),
    'taxonomies'    => array( 'show_category', 'post_tag' ),
    'rewrite' => array( 'slug' => 'shows/%show_category%' ),
    'has_archive' => 'shows'
  );
  register_post_type( 'shows', $args );
}

add_action( 'init', 'shows_post_type' );
