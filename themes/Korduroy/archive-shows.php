<?php get_header(); ?>
<?php load_template(TEMPLATEPATH . '/partials/shows-sub-nav.php'); ?>

<div id="body" class="supporters-page">
  <section id="main" role="main">
    <h1>Old</h1>

    <?php $categories = get_terms('show_category', array(
      'hide_empty' => 0
    ));
    foreach( $categories as $category ):
    ?>
      <section class="category-<?php echo $category -> name?>">
        <h2><a href="<?php echo get_term_link($category, $category -> taxonomy); ?>"><?php echo $category -> name; ?></a></h2>
        <p class="description"><?php echo $category -> description ?></p>

        <ul class="shows-list">
          <?php $posts = get_posts(array(
            'post_type' => 'shows',
            'taxonomy' => $category->taxonomy,
            'term' => $category->slug,
            'nopaging' => true, // to show all posts in this category, could also use 'numberposts' => -1 instead
          ));
          foreach($posts as $post): // begin cycle through posts of this category
          setup_postdata($post); //set up post data for use in the loop (enables the_title(), etc without specifying a post ID)
          ?>
            <li><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></li>
          <?php endforeach; ?>
        </ul>
      </section>
    <?php endforeach; ?>
  </section>
</div>

<?php get_footer(); ?>



