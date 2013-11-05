<?php get_header(); ?>

<div id="body" class="default-page <?php if(is_page()) { $page_slug = $post->post_name.'-page'; echo $page_slug; } ?>">
  <section class="main" role="main">
    <div class="page-content">
      <?php while (have_posts()): the_post(); ?>
        <?php the_content(); ?>
      <?php endwhile; ?>
    </div>
  </section>
</div>

<?php get_footer(); ?>
