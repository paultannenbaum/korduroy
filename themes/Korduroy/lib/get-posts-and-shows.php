<?php

function query_post_type($query) {
  if(is_category() || is_tag()) {
    $post_type = get_query_var('post_type');

    if($post_type)
      $post_type = $post_type;
    else
      $post_type = array('post','cpt'); // replace cpt to your custom post type

    $query -> set('post_type', $post_type);
    return $query;
  }
}

add_filter('pre_get_posts', 'query_post_type');