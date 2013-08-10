<?php
/*
Template Name: Links
*/
?>

<?php get_header(); ?>

<div id="body" class="about-page">
  <section class="main" role="main">

    <p><?php the_field('banner_image'); ?></p>

    <?php if(get_field('blogs/portfolio')): ?>
      <?php while(has_sub_field('blogs/portfolio')): ?>
        <p><?php the_sub_field('name'); ?></p>
        <p><?php the_sub_field('name'); ?></p>
      <?php endwhile; ?>
    <?php endif; ?>

    <?php if(get_field('organizations')): ?>
      <?php while(has_sub_field('organizations')): ?>
        <p><?php the_sub_field('name'); ?></p>
        <p><?php the_sub_field('name'); ?></p>
      <?php endwhile; ?>
    <?php endif; ?>

    <?php if(get_field('media')): ?>
      <?php while(has_sub_field('media')): ?>
        <p><?php the_sub_field('name'); ?></p>
        <p><?php the_sub_field('name'); ?></p>
      <?php endwhile; ?>
    <?php endif; ?>

    <?php if(get_field('resources')): ?>
      <?php while(has_sub_field('resources')): ?>
        <p><?php the_sub_field('name'); ?></p>
        <p><?php the_sub_field('name'); ?></p>
      <?php endwhile; ?>
    <?php endif; ?>

    <?php if(get_field('business')): ?>
      <?php while(has_sub_field('business')): ?>
        <p><?php the_sub_field('name'); ?></p>
        <p><?php the_sub_field('name'); ?></p>
      <?php endwhile; ?>
    <?php endif; ?>

  </section>
</div>
<?php get_footer(); ?>
