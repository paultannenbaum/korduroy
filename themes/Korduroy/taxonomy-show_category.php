<?php get_header(); ?>
<?php load_template(TEMPLATEPATH . '/partials/shows-sub-nav.php'); ?>

<div id="body" class="shows-page shows-index">
  <section class="main" role="main">

    <?php $category = get_term_by('slug', get_query_var( 'term' ), get_query_var( 'taxonomy' ) ); ?>

    <section class="show-channel">
      <header class="channel-header">
        <span class="channel-icon <?php echo $category -> slug ?>"></span>
        <p class="channel-info"><?php echo $category -> description ?></p>
      </header>

      <!--<div class="royalSlider rsDefault">-->
        <!--<img class="rsImg rsMainSlideImage" src="http://dimsemenov.com/plugins/royal-slider/img/admin-video.png">-->
        <!--<img class="rsImg rsMainSlideImage" src="http://dimsemenov.com/plugins/royal-slider/img/admin-video.png">-->
        <!--<img class="rsImg rsMainSlideImage" src="http://dimsemenov.com/plugins/royal-slider/img/admin-video.png">-->
        <!--<img class="rsImg rsMainSlideImage" src="http://dimsemenov.com/plugins/royal-slider/img/admin-video.png">-->
      <!--</div>-->



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
    </section>
  </section>
</div>

<?php get_footer(); ?>