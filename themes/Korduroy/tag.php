<?php get_header(); ?>

<div id="body" class="blog-page blog-archives-page">
  <section class="main" role="main">

    <?php $tag = get_terms('post_tag', array('include' => get_query_var('tag_id')))[0]; ?>
    <?php $posts = get_posts(array(
      'post_type' => array( 'post', 'shows'),
      'tag__in'   => $tag->term_id
    )); ?>

    <?php foreach($posts as $post): setup_postdata($post); ?>
      <?php if ('post' == get_post_type()  ) : ?>
        <h1>Blog: <?php the_title(); ?></h1>
      <?php elseif ( 'shows' == get_post_type()  ) : ?>
        <h1>Show: <?php the_title(); ?></h1>
      <?php endif; ?>
    <?php endforeach; ?>

    <!-- Popular tags -->
    <?php wp_tag_cloud(array(
      'smallest'                  => 16,
      'largest'                   => 16,
      'unit'                      => 'px',
      'format' => 'list',
      'orderby' => 'count',
      'number' => 10,
      'order' => 'DESC'
    )); ?>

  </section>
</div>

<?php get_sidebar(); ?>

<?php get_footer(); ?>
