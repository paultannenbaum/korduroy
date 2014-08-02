<?php get_header(); ?>
<?php get_template_part('partials/shows-sub-nav'); ?>

<div id="body" class="shows-page shows-index">
  <section class="main" role="main">
    <section class="show-channel">
      <ul class="channel-list">
        <?php
          $args = array(
	          'posts_per_page' => 30,
            'post_type' => 'shows'
          );
          query_posts($args);
          while ( have_posts() ) : the_post();
        ?>
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