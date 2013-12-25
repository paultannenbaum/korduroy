<?php
/**
 * Single Product Thumbnails
 *
 * @author 		WooThemes
 * @package 	WooCommerce/Templates
 * @version     2.0.3
 */

if ( ! defined( 'ABSPATH' ) ) exit; // Exit if accessed directly

global $post, $product, $woocommerce;

$attachment_ids = $product->get_gallery_attachment_ids();

if ( $attachment_ids ) {
	?>
	<ul class="thumbnails"><?php

    # Insert the featured image as the first thumbnail
    $image_title 		= esc_attr( get_the_title( get_post_thumbnail_id() ) );
    $image_link  		= wp_get_attachment_url( get_post_thumbnail_id() );
    $image       		= get_the_post_thumbnail( $post->ID, apply_filters( 'single_product_small_thumbnail_size', 'shop_thumbnail' ), array(
      'title' => $image_title
    ) );
    echo apply_filters( 'woocommerce_single_product_image_html', sprintf( '
    <li class="product-thumb"><a href="%s" title="%s"  rel="prettyPhoto[product-gallery]">%s</a></li>', $image_link, $image_title, $image ), $attachment_id, $post->ID, $image_class );

    # Then add the rest of the thumbnails
    $loop = 0;
		$columns = apply_filters( 'woocommerce_product_thumbnails_columns', 3 );

		foreach ( $attachment_ids as $attachment_id ) {

			$classes = array( 'zoom' );

			if ( $loop == 0 || $loop % $columns == 0 )
				$classes[] = 'first';

			if ( ( $loop + 1 ) % $columns == 0 )
				$classes[] = 'last';

			$image_link = wp_get_attachment_url( $attachment_id );

			if ( ! $image_link )
				continue;

			$image       = wp_get_attachment_image( $attachment_id, apply_filters( 'single_product_small_thumbnail_size', 'shop_thumbnail' ) );
			$image_class = esc_attr( implode( ' ', $classes ) );
			$image_title = esc_attr( get_the_title( $attachment_id ) );

			echo apply_filters( 'woocommerce_single_product_image_thumbnail_html', sprintf( '<li class="product-thumb"><a href="%s" class="%s" title="%s"  rel="prettyPhoto[product-gallery]">%s</a></li>', $image_link, $image_class, $image_title, $image ), $attachment_id, $post->ID, $image_class );

			$loop++;
		}

	?></ul>
	<?php
}