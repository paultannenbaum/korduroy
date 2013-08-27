<?php

function new_excerpt_more( $more ) {
  return '... <a class="more-link" href="'. get_permalink( get_the_ID() ) . '">Read More</a>';
}
add_filter( 'excerpt_more', 'new_excerpt_more' );