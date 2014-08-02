<?php get_header(); ?>
<?php get_template_part('partials/shows-sub-nav'); ?>

<div id="body" class="shows-page shows-category">
  <section class="main" role="main">

    <?php $category = get_term_by('slug', get_query_var('term'), get_query_var('taxonomy')); ?>

    <section class="show-channel">
      <header class="channel-header">
        <img class="channel-icon <?php echo $category -> slug ?>" src="<?php echo bloginfo( 'template_directory' )?>/assets/images/channel-icons/large/<?php echo $category -> slug ?>.png" />
        <div class="channel-info">
          <p class="channel-desc">
            <span class="category-name"><?php echo $category -> name ?></span>
            <?php echo $category -> description ?>
          </p>
        </div>
      </header>

      <ul class="channel-list">
        <?php $posts = get_posts(array(
            'post_type' => 'shows',
            'taxonomy' => $category -> taxonomy,
            'term' => $category -> slug,
            'nopaging' => true, // to show all posts in this category, could also use 'numberposts' => -1 instead
        ));
        foreach($posts as $post): // begin cycle through posts of this category
        setup_postdata($post); //set up post data for use in the loop (enables the_title(), etc without specifying a post ID)
        ?>
        <li class="episode">
          <a class="episode-link" href="<?php the_permalink(); ?>">
            <?php the_post_thumbnail('show-thumb', array('class' => 'episode-thumb')); ?>
            <span class="episode-title"><?php the_title(); ?></span>
          </a>
        </li>
        <?php endforeach; ?>
      </ul>
    </section>
  </section>
</div>

<?php get_footer(); ?>