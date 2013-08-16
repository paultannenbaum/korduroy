<?php get_header(); ?>
<?php load_template(TEMPLATEPATH . '/partials/shows-sub-nav.php'); ?>

<div id="body" class="shows-page shows-index">
  <section class="main" role="main">
    <?php $categories = get_terms('show_category', array(
      'hide_empty' => 0,
      'orderby' => 'count',
      'order' => 'DESC'
      ));
    foreach( $categories as $category ):
    ?>
      <section class="show-channel">
        <header class="channel-header">
          <a class="channel-link" href="<?php echo get_term_link($category, $category -> taxonomy); ?>">
            <span class="channel-icon <?php echo $category -> slug ?>"></span>
            <p class="channel-info"><?php echo $category -> description ?></p>
          </a>
        </header>

        <div class="channel-list-container">
          <ul class="channel-list">
            <?php $posts = get_posts(array(
              'post_type' => 'shows',
              'taxonomy' => $category->taxonomy,
              'term' => $category->slug,
              'nopaging' => true, // to show all posts in this category, could also use 'numberposts' => -1 instead
            ));
            foreach($posts as $post): // begin cycle through posts of this category
            setup_postdata($post); //set up post data for use in the loop (enables the_title(), etc without specifying a post ID)
            ?>
              <li class="episode">
                <a class="episode-link" href="<?php the_permalink(); ?>">

                  <img class="episode-thumb" src="http://b.vimeocdn.com/ts/440/907/440907059_200.jpg" />
                  <span class="episode-title"><?php the_title(); ?></span>
                </a>
              </li>
            <?php endforeach; ?>
          </ul>
        </div>
      </section>
      <hr class="channel-separator" />
    <?php endforeach; ?>
  </section>
</div>

<?php get_footer(); ?>



