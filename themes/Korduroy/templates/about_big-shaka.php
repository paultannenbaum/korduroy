<?php
/*
Template Name: About-Big Shaka
*/
?>

<?php get_header(); ?>

<div id="body" class="about-page">
  <section class="main" role="main">
    <?php load_template(TEMPLATEPATH . '/partials/about-sub-nav.php'); ?>

    <?php if(get_field('rainbow_member')): ?>
      <?php while(has_sub_field('rainbow_member')): ?>
        <p><?php the_sub_field('name'); ?></p>
      <?php endwhile; ?>
    <?php endif; ?>

    <?php if(get_field('platinum_member')): ?>
      <?php while(has_sub_field('platinum_member')): ?>
        <p><?php the_sub_field('name'); ?></p>
      <?php endwhile; ?>
    <?php endif; ?>

    <?php if(get_field('gold_member')): ?>
      <?php while(has_sub_field('gold_member')): ?>
        <p><?php the_sub_field('name'); ?></p>
      <?php endwhile; ?>
    <?php endif; ?>

    <?php if(get_field('member')): ?>
      <?php while(has_sub_field('member')): ?>
        <p><?php the_sub_field('name'); ?></p>
      <?php endwhile; ?>
    <?php endif; ?>

  </section>
</div>
<?php get_footer(); ?>
