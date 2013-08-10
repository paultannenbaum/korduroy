<?php

/**
* Replacing the default WordPress search form with an HTML5 version
*
*/

function html5_search_form( $form ) {
  $form =

  '<form role="search" method="get" class="site-search" action="' . home_url( '/' ) . '" >
    <input type="search" placeholder="Search..." class="site-search-input" value="' . get_search_query() . '" name="s" />
    <input type="submit" class="site-search-submit" value="GO" />
  </form>';

  return $form;
}

add_filter( 'get_search_form', 'html5_search_form' );

