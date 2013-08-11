<?php
/*
Template Name: Supporters Page
*/
?>

<?php get_header(); ?>

<div id="body" class="supporters-page">
  <section class="main" role="main">

    <nav class="ktv-sub-nav">
      <h1 class="sub-nav-heading extend-full">Our Supporters</h1>
    </nav>

    <hr class="horizontal-stitch">

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
