<?php
  /** Over ride of Woocommerce Original Template **/
  if ( ! defined( 'ABSPATH' ) ) exit; // Exit if accessed directly
  get_header('shop');
?>
<?php get_template_part('partials/store-sub-nav'); ?>

<div id="body" class="store-page store-archives">
  <section class="main" role="main">
    <?php if ( have_posts() ) : ?>
      <?php woocommerce_product_loop_start(); ?>
        <?php while ( have_posts() ) : the_post(); ?>
          <?php woocommerce_get_template_part( 'content', 'product' ); ?>
        <?php endwhile; // end of the loop. ?>
      <?php woocommerce_product_loop_end(); ?>
      <?php
        /** @hooked woocommerce_pagination - 10 **/
        do_action( 'woocommerce_after_shop_loop' );
      ?>
    <?php elseif ( ! woocommerce_product_subcategories( array( 'before' => woocommerce_product_loop_start( false ), 'after' => woocommerce_product_loop_end( false ) ) ) ) : ?>
      <?php woocommerce_get_template( 'loop/no-products-found.php' ); ?>
    <?php endif; ?>
  </section>
</div>

<?php get_footer('shop'); ?>
