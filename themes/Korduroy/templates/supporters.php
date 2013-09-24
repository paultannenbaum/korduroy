<?php
/*
Template Name: Supporters Page
*/
?>

<?php get_header(); ?>

<nav id="ktv-sub-nav">
  <div class="heading-container extend-full">
    <h2 class="sub-nav-heading">Our Supporters</h2>
  </div>
  <span class="separator-container">
    <hr class="horizontal-stitch" />
  </span>
</nav>

<div id="body" class="supporters-page">
  <section class="main" role="main">

    <?php if(get_field('add_supporter')): ?>
      <?php while(has_sub_field('add_supporter')): ?>
        <div class="supporter-row">
          <div class="logo-container">
            <img src="<?php the_sub_field('logo'); ?>" class="image-border" />
          </div>
          <div class="info-container">
            <ul class="info-items">
              <li class="info-item name"><?php the_sub_field('name'); ?></li>
              <li class="info-item phone"><?php the_sub_field('phone'); ?></li>
              <li class="info-item website"><a href="<?php the_sub_field('website_url'); ?>">Website</a></li>
              <li class="info-item email"><a href="mailto:<?php the_sub_field('contact_email'); ?>">Email</a></li>
            </ul>
          </div>
          <div class="description-container">
            <?php the_sub_field('blurb'); ?>
          </div>
          <div class="banner-container">
            <img src="<?php the_sub_field('banner_image'); ?>" class="image-border" />
          </div>
        </div>
        <hr class="horizontal-separator-light" />
      <?php endwhile; ?>
    <?php endif; ?>

  </section>
</div>
<?php get_footer(); ?>
