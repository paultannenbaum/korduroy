<?php get_header(); ?>

<?php
  $shows = get_posts(array(
    'post_type'   => 'shows',
    'orderby'     => 'post_date',
    'numberposts' => '10'
  ));
?>

<?php
  $blogs = get_posts(array(
    'post_type'   => 'post',
    'orderby'     => 'post_date',
    'numberposts' => '15'
  ));
?>

<div id="body" class="home-page">
  <section class="main" role="main">
      <div class="featured-content">
        <div class="featured-slider-container">
          <div class="featured-slider">
            <div class="slide slide-1">
              <?php echo $shows[0]->post_title ?>
            </div>
            <div class="slide slide-2">
              <?php echo $blogs[0]->post_title ?>
            </div>
            <div class="slide slide-3">
              <?php echo $blogs[1]->post_title ?>
            </div>
            <div class="slide slide-4">
              <?php echo $shows[1]->post_title ?>
            </div>
            <div class="slide slide-5">
              <?php echo $blogs[2]->post_title ?>
            </div>
            <div class="slide slide-6">
              <?php echo $blogs[3]->post_title ?>
            </div>
          </div>
        </div>

        <div class="campaigns-container">
          <div class="campaigns"></div>
        </div>
      </div>

      <hr class="horizontal-stitch">

      <div class="shows-container">
        <div class="shows">
          <header class="shows-header section-header">
            <div class="title-container">
              <h1 class="section-title"><a href="<?php echo site_url(); ?>/shows">Shows</a></h1>
            </div>
            <div class="all-container">
              <a href="<?php echo site_url(); ?>/shows" class="all-link">View All Shows</a>
            </div>
          </header>
          <ul class="channel-list">
            <?php foreach($shows as $post): setup_postdata($post); ?>
              <li class="episode">
                <a class="episode-link" href="<?php the_permalink(); ?>">
                  <?php the_post_thumbnail('show-thumb', array('class' => 'episode-thumb')); ?>
                  <span class="episode-title"><?php the_title(); ?></span>
                </a>
              </li>
            <?php endforeach; ?>
          </ul>
        </div>
      </div>

      <hr class="horizontal-stitch">

      <div class="blog-container">
        <div class="blog">
          <header class="blog-header section-header">
            <div class="title-container">
              <h1 class="section-title"><a href="<?php echo site_url(); ?>/blog">Blog</a></h1>
            </div>
            <div class="all-container">
              <a href="<?php echo site_url(); ?>/blog" class="all-link">View All Articles</a>
            </div>
          </header>
          <div class="blog-posts">
            <?php foreach($blogs as $post): setup_postdata($post); ?>
              <div class="blog-post">
                <div class="blog-post-body">
                  <div class="blog-post-thumbnail">
                    <a href="<?php the_permalink() ?>">
                      <?php if (has_post_thumbnail()): the_post_thumbnail('thumbnail'); ?>
                      <?php else: ?>
                      <img src="<?php bloginfo('template_directory'); ?>/assets/images/default-featured-image.jpg" alt="<?php the_title(); ?>" />
                      <?php endif; ?>
                    </a>
                  </div>
                  <div class="blog-post-content">
                    <header class="blog-post-header">
                      <h1 class="blog-post-title"><a href="<?php the_permalink() ?>"><?php the_title(); ?></a></h1>
                    </header>
                    <?php the_excerpt(); ?>
                    <footer class="blog-post-footer">
                      <div class="date-container">
                        <span class="blog-post-date"><?php the_time('F jS, Y') ?> by <?php the_author() ?></span>
                      </div>
                      <div class="sharing-container">
                        <?php get_template_part('partials/share-buttons'); ?>
                      </div>
                    </footer>
                  </div>
                </div>
              </div>
              <hr class="horizontal-separator-light" />
            <?php endforeach; ?>
          </div>
        </div>
      </div>
  </section>
</div>

<?php get_footer(); ?>
