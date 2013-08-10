<?php

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

add_filter( 'post_type_link', 'ktv_show_permalinks', 1, 2 );