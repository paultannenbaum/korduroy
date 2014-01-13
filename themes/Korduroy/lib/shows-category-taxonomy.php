<?php

function shows_category_taxonomy()  {
  $labels = array(
    'name'                       => _x( 'Show Category', 'Taxonomy General Name', 'text_domain' ),
    'singular_name'              => _x( 'Show Category', 'Taxonomy Singular Name', 'text_domain' ),
    'menu_name'                  => __( 'Show Categories', 'text_domain' ),
    'all_items'                  => __( 'All Show Categories', 'text_domain' ),
    'new_item_name'              => __( 'New Show Category', 'text_domain' ),
    'add_new_item'               => __( 'Add New Show Category', 'text_domain' ),
    'edit_item'                  => __( 'Edit Show Category', 'text_domain' ),
    'update_item'                => __( 'Update Show Category', 'text_domain' ),
    'separate_items_with_commas' => __( 'Separate show categories with commas', 'text_domain' ),
    'search_items'               => __( 'Search show categories', 'text_domain' ),
    'add_or_remove_items'        => __( 'Add or remove show categories', 'text_domain' ),
    'choose_from_most_used'      => __( 'Choose from the most used show categories', 'text_domain' ),
  );
  $args = array(
    'labels'                     => $labels,
    'hierarchical'               => true,
    'public'                     => true,
    'rewrite' => array( 'slug'   => 'shows' ),
    'show_ui'                    => true,
    'show_admin_column'          => true,
    'show_in_nav_menus'          => true,
    'yarpp_support'              => true
  );

  register_taxonomy( 'show_category', 'custom_post_type', $args );
}

add_action( 'init', 'shows_category_taxonomy', 0 );