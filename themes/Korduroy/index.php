<?php get_header(); ?>

<div id="body" class="supporters-page">
  <section class="main" role="main">

    <?php while ( have_posts() ) : the_post(); ?>
      <h2><a href="<?php the_permalink() ?>"><?php the_title(); ?></a></h2>
      <small><?php the_time('F jS, Y') ?> by <?php the_author() ?></small>
      <?php the_content();?>
      <?php the_post_thumbnail('thumbnail'); ?>
      <p class="postmetadata">Posted in <?php the_category(', '); ?></p>
    <?php endwhile; ?>

    <?php load_template(TEMPLATEPATH . '/partials/pagination.php'); ?>
  </section>
</div>

<?php get_footer(); ?>
