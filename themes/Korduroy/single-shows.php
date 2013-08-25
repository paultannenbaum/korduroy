<?php get_header(); ?>
<?php get_template_part('partials/shows-sub-nav'); ?>

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
          <!--<div class="stars">-->
            <!--<?php if (function_exists('ec_stars_rating')) { ec_stars_rating(); } ?>-->
          <!--</div>-->
        </aside>
        <div class="episode-main">
          <h1 class="episode-title"><?php the_title(); ?></h1>
          <div class="episode-desc">
            <?php the_field('description'); ?>
          </div>
          <?php if(get_field('credits')): ?>
            <div class="credits">
              <?php while(has_sub_field('credits')): ?>
                <div class="credit">
                  <span class="credit-type"><?php the_sub_field('credit_type'); ?></span>
                  <span class="credit-name">
                    <?php if(get_sub_field('url')): ?>
                      <a href="<?php the_sub_field('url'); ?>"><?php the_sub_field('name'); ?></a>
                    <?php else: ?>
                      <?php the_sub_field('name'); ?>
                    <?php endif; ?>
                  </span>
                </div>
              <?php endwhile; ?>
            </div>
          <?php endif; ?>
          <div class="sharing">
            <?php get_template_part('partials/share-buttons'); ?>
          </div>
          <div class="tags">
            <?php get_template_part('partials/tag-list'); ?>
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