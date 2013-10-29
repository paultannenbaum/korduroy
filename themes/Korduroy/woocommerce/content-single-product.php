<?php
  /** Over ride of Woocommerce Original Template **/
  if ( ! defined( 'ABSPATH' ) ) exit; // Exit if accessed directly
?>

<?php
	/** @hooked woocommerce_show_messages - 10 **/
	do_action( 'woocommerce_before_single_product' );
?>

<div itemscope itemtype="http://schema.org/Product" id="product-<?php the_ID(); ?>" <?php post_class(); ?>>
  <div class="product-images-container">
    <?php
      /** @hooked woocommerce_show_product_sale_flash - 10 **/
      /** @hooked woocommerce_show_product_images - 20 **/
      do_action( 'woocommerce_before_single_product_summary' );
    ?>
  </div>

  <div class="product-desc-container">
    <div class="summary entry-summary">
      <?php
        /** @hooked woocommerce_template_single_title - 5 **/
        /** @hooked woocommerce_template_single_price - 10 **/
        /** @hooked woocommerce_template_single_excerpt - 20 **/
        /** @hooked woocommerce_template_single_add_to_cart - 30 **/
        /** @hooked woocommerce_template_single_meta - 40 **/
        /** @hooked woocommerce_template_single_sharing - 50 **/
        do_action( 'woocommerce_single_product_summary' );
      ?>
    </div>
  </div>

  <!--
	<?php
		/** @hooked woocommerce_output_product_data_tabs - 10 **/
		/** @hooked woocommerce_output_related_products - 20 **/
		# do_action( 'woocommerce_after_single_product_summary' );
	?>
	-->

</div>

<?php do_action( 'woocommerce_after_single_product' ); ?>