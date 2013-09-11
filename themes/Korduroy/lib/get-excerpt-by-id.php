<?php

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

add_action( 'init', 'get_excerpt_by_id' );