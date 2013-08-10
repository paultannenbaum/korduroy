<?php get_header(); ?>

<div id="body" class="supporters-page">

  <h1>testing</h1>


  <?php
  // wp_list_categories('hide_empty=0&taxonomy=show_category');
  ?>

  <section class="main" role="main">
    <?php while ( have_posts() ) : the_post(); ?>
      <h2><a href="<?php the_permalink() ?>"><?php the_title(); ?></a></h2>
      <p><?php the_field('description'); ?></p>
      <p><?php the_field('vimeo_id'); ?></p>
      <p><?php the_field('youtube_id'); ?></p>
      <p><?php the_field('thumbnail'); ?></p>

      <?php if(get_field('credits')): ?>
        <?php while(has_sub_field('credits')): ?>
          <div class="credit">
            <p><?php the_sub_field('credit_type'); ?></p>
            <p><?php the_sub_field('name'); ?></p>
            <p><?php the_sub_field('url'); ?></p>
          </div>
        <?php endwhile; ?>
      <?php endif; ?>
    <?php endwhile; ?>


    <h1>categories</h1>


    <div class="comments-wrapper">
      <?php comments_template(); ?>
    </div>
  </section>
</div>

<?php get_footer(); ?>