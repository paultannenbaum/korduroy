<?php get_header(); ?>
<?php load_template(TEMPLATEPATH . '/partials/shows-sub-nav.php'); ?>

<div id="body" class="shows-page show-page-show">

  <section class="main" role="main">

    <?php while ( have_posts() ) : the_post(); ?>


      <div class="video-wrapper">
        <?php if(get_field('vimeo_id')): ?>
          <iframe src="http://player.vimeo.com/video/<?php the_field('vimeo_id'); ?>?title=0&amp;byline=0&amp;portrait=0&amp;color=cfff66" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>
        <?php elseif(get_field('youtube_id')): ?>
          <iframe src="//www.youtube.com/embed/<?php the_field('youtube_id'); ?>" frameborder="0" allowfullscreen></iframe>
        <?php endif; ?>
      </div>

      <?php $category = array_values(get_the_terms($post -> ID , 'show_category'))[0]; ?>

      <div class="episode-info">
        <aside class="episode-aside">
          <a class="channel-link" href="<?php echo get_term_link($category, 'show_category'); ?>">
            <span class="channel-icon <?php echo $category -> slug ?>"></span>
          </a>
        </aside>
        <div class="episode-main">
          <h1 class="episode-title"><?php the_title(); ?></h1>
          <div class="episode-desc">
            <?php the_field('description'); ?>
          </div>
          <div class="credits">
            <?php if(get_field('credits')): ?>
              <?php while(has_sub_field('credits')): ?>
                <div class="credit">
                  <p><?php the_sub_field('credit_type'); ?></p>
                  <p><?php the_sub_field('name'); ?></p>
                  <p><?php the_sub_field('url'); ?></p>
                </div>
              <?php endwhile; ?>
            <?php endif; ?>
          </div>
        </div>
      </div>
    <?php endwhile; ?>

    <!--<div class="comments-wrapper">-->
      <!--<?php comments_template(); ?>-->
    <!--</div>-->

  </section>
</div>

<?php get_footer(); ?>