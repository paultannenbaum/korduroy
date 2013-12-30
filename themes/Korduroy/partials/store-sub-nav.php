<nav id="ktv-sub-nav" class="horizontal-sub-nav">
  <div class="heading-container extend-full">
    <h2 class="sub-nav-heading">Store</h2>
    <div class="cart-container">
      <a href="<?php global $woocommerce; echo $woocommerce->cart->get_cart_url()?>" title="<?php _e('Go To Cart','woothemes') ?>">
        <?php _e('CART','woothemes') ?>
        <span class="cart-icon"></span>
      </a>
    </div>
  </div>
  <div class="separator-container">
    <hr class="horizontal-stitch" />
  </div>
</nav>