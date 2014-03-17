<?php get_header(); ?>
<?php get_template_part('partials/shows-sub-nav'); ?>

<div id="body" class="shows-page shows-single">

  <section class="main" role="main">

    <?php while ( have_posts() ) : the_post(); ?>

      <?php
        echo 'starting';
        $id = get_the_id();
        if (get_field('user_views')) {
          $views = get_field('user_views');
        } else {
          $views = 1;
        }
        echo $views;
        echo 'updating';
        update_field('user_views', $views+1, $id);
        the_field('user_views');
      ?>

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
          <div class="shaka-ratings">
            <?php echo PostRatings()->getControl(); ?>
          </div>
        </aside>
        <div class="episode-main">
          <header class="episode-header">
            <div class="title-container">
              <h1 class="episode-title"><?php the_title(); ?></h1>
            </div>
            <div class="sharing-wrapper">
              <div class="sharing-container">
                <?php get_template_part('partials/share-buttons'); ?>
              </div>
            </div>
          </header>
          <div class="episode-desc">
            <?php the_content() ?>
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
          <div class="tags">
            <?php get_template_part('partials/tag-list'); ?>
            <?php related_posts() ?>
          </div>
        </div>
      </div>
    <?php endwhile; ?>

    <div class="comments-wrapper">
      <?php comments_template(); ?>
    </div>

  </section>
</div>

<?php get_footer(); ?>