<?php get_header(); ?>

<div id="body" class="default-page">
  <section class="main" role="main">
    <?php while ( have_posts() ) : the_post(); ?>
      <?php the_content(); ?>
    <?php endwhile; ?>
  </section>
</div>

<?php get_footer(); ?>
