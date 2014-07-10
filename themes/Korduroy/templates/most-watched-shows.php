<?php
/*
Template Name: Most Watched Shows
*/
?>

<?php get_header(); ?>

<div id="body" class="shows-page shows-index">
  <?php
    // args
    $args = array(
      'post_type' => 'shows',
      'posts_per_page' => -1,
      'meta_key' => 'user_views',
      'orderby' => 'meta_value_num',
      'order' => 'DESC'
    );

    // query
    $wp_query = new WP_Query( $args );
  ?>

  <?php while ($wp_query->have_posts()) : the_post(); ?>
    <div><?php the_title(); ?></div>
  <?php endwhile;?>
</div>