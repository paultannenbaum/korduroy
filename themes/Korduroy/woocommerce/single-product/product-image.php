<?php
/**
 * Single Product Image
 *
 * @author 		WooThemes
 * @package 	WooCommerce/Templates
 * @version     2.0.14
 */

if ( ! defined( 'ABSPATH' ) ) exit; // Exit if accessed directly

global $post, $woocommerce, $product;

?>
<div class="featured-product-image-wrapper">
    <?php
    if ( has_post_thumbnail() ) {

        $image_title 		= esc_attr( get_the_title( get_post_thumbnail_id() ) );
        $image_link  		= wp_get_attachment_url( get_post_thumbnail_id() );
        $image       		= get_the_post_thumbnail( $post->ID, apply_filters( 'single_product_large_thumbnail_size', 'shop_single' ), array(
            'title' => $image_title
        ) );
        $attachment_count   = count( $product->get_gallery_attachment_ids() );

        if ( $attachment_count > 0 ) {
            $gallery = '[product-gallery]';
        } else {
            $gallery = '';
        }

        // original code: echo apply_filters( 'woocommerce_single_product_image_html', sprintf( '<a href="%s" itemprop="image" class="woocommerce-main-image zoom" title="%s"  rel="prettyPhoto' . $gallery . '">%s</a>', $image_link, $image_title, $image ), $post->ID );
        echo apply_filters( 'woocommerce_single_product_image_html', sprintf( '<img src="%s" alt="%s" class="featured-product-image" />', $image_link, $image_title ), $post->ID );

    } else {

        echo apply_filters( 'woocommerce_single_product_image_html', sprintf( '<img src="%s" alt="Placeholder" class="featured-product-image" />', woocommerce_placeholder_img_src() ), $post->ID );

    }
    ?>
</div>

<?php do_action( 'woocommerce_product_thumbnails' ); ?>

