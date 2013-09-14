<?php get_header(); ?>

<div id="body" class="default-page">
  <section class="main" role="main">
    <div class="page-content">
      <?php while (have_posts()): the_post(); ?>
        <?php the_content(); ?>
      <?php endwhile; ?>
    </div>
  </section>
</div>

<?php get_footer(); ?>
