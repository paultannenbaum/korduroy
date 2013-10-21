<?php

if ( ! function_exists( 'woocommerce_over_rides' ) ):
function woocommerce_over_rides() {
  /*** Remove Actions ***/
  remove_action( 'woocommerce_after_single_product_summary', 'woocommerce_output_product_data_tabs', 10 );


  /*** Add Actions ***/
  add_action( 'woocommerce_single_product_summary', 'woocommerce_output_product_data_tabs', 60 );
}
endif;
add_action('after_setup_theme', 'woocommerce_over_rides');