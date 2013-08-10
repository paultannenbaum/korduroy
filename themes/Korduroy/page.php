<?php get_header(); ?>

<div id="body" class="supporters-page">
  <section class="main" role="main">
    <?php while ( have_posts() ) : the_post(); ?>
      <?php get_template_part( 'templates/partials/content', 'page' ); ?>
    <?php endwhile; ?>
  </section>
</div>

<?php get_footer(); ?>
