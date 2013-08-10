<?php get_header(); ?>

<div id="body" class="supporters-page">
  <section id="main" role="main">

    <?php $category = get_term_by('slug', get_query_var( 'term' ), get_query_var( 'taxonomy' ) ); ?>

    <h1><?php echo $category -> name; ?></h1>

    <ul class="shows-list">
      <?php $posts = get_posts(array(
              'post_type' => 'shows',
              'taxonomy' => $category -> taxonomy,
              'term' => $category -> slug,
              'nopaging' => true
      ));
      foreach($posts as $post):
      setup_postdata($post);
      ?>
        <li><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></li>
      <?php endforeach; ?>
    </ul>
  </section>
</div>
<?php get_footer(); ?>