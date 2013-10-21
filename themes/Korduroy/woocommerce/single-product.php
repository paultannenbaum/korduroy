<?php
  /** Over ride of Woocommerce Original Template **/
  if ( ! defined( 'ABSPATH' ) ) exit; // Exit if accessed directly
  get_header('shop');
?>
<?php get_template_part('partials/store-sub-nav'); ?>

<div id="body" class="store-page store-single">
  <section class="main" role="main">
		<?php while ( have_posts() ) : the_post(); ?>
			<?php woocommerce_get_template_part( 'content', 'single-product' ); ?>
		<?php endwhile; // end of the loop. ?>
  </section>
</div>

<?php get_footer('shop'); ?>