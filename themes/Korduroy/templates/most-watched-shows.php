<?php
/*
Template Name: Most Watched Shows
*/
?>

<?php get_header(); ?>
<?php get_template_part('partials/shows-sub-nav'); ?>

<div id="body" class="shows-page shows-index">
  <?php
    // args
    $args = array(
      'post_type' => 'shows',
      'posts_per_page' => 30,
      'meta_key' => 'user_views',
      'orderby' => 'meta_value_num',
      'order' => 'DESC'
    );

    // query
    $wp_query = new WP_Query( $args );
  ?>

  <section class="main" role="main">
    <section class="show-channel">
      <ul class="channel-list">
        <?php while ($wp_query->have_posts()) : the_post(); ?>
        <li class="episode">
          <a class="episode-link" href="<?php the_permalink(); ?>">
            <?php the_post_thumbnail('show-thumb', array('class' => 'episode-thumb')); ?>
            <span class="episode-title"><?php the_title(); ?></span>
          </a>
        </li>
        <?php endwhile; ?>
      </ul>
    </section>
  </section>
</div>

<?php get_footer(); ?>