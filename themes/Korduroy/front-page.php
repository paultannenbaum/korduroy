<?php get_header(); ?>

<?php
  $shows = get_posts(array(
    'post_type'   => 'shows',
    'orderby'     => 'post_date',
    'numberposts' => '6'
  ));
?>

<?php
  $blogs = get_posts(array(
    'post_type'   => 'post',
    'orderby'     => 'post_date',
    'numberposts' => '5'
  ));
?>

<div id="body" class="home-page">
  <section class="main" role="main">
      <div class="featured-content">
        <div class="featured-slider-container">
          <div id="featured-slider" class="royalSlider rsDefault">
            <div class="slide slide-1 show">
              <div class="slide-image">
                <a href="<?php echo get_permalink($shows[0]->ID); ?>">
                  <?php echo get_the_post_thumbnail($shows[0]->ID, 'home-featured', array(
                    # 'data-rsvideo' => 'http://www.youtube.com/watch?v=HFbHRWwyihE',
                    'class' => 'rsImg'
                  )); ?>
                  <div class="slide-desc"><?php echo get_excerpt_by_id($shows[0]->ID); ?></div>
                </a>
              </div>
              <div class="slide-info">
                <header>
                  <a href="<?php echo get_permalink($shows[0]->ID); ?>">
                    <span class="slide-title"><?php echo $shows[0]->post_title ?></span>
                  </a>
                </header>
              </div>
            </div>
            <div class="slide slide-2 blog">
              <div class="slide-image">
                <a href="<?php echo get_permalink($blogs[0]->ID); ?>">
                  <?php echo get_the_post_thumbnail($blogs[0]->ID, 'home-featured'); ?>
                  <div class="slide-desc"><?php echo get_excerpt_by_id($blogs[0]->ID); ?></div>
                </a>
              </div>
              <div class="slide-info">
                <header>
                  <a href="<?php echo get_permalink($blogs[0]->ID); ?>">
                    <span class="slide-title"><?php echo $blogs[0]->post_title ?></span>
                  </a>
                </header>
              </div>
            </div>
            <div class="slide slide-3 blog">
              <div class="slide-image">
                <a href="<?php echo get_permalink($blogs[1]->ID); ?>">
                  <?php echo get_the_post_thumbnail($blogs[1]->ID, 'home-featured'); ?>
                  <div class="slide-desc"><?php echo get_excerpt_by_id($blogs[1]->ID); ?></div>
                </a>
              </div>
              <div class="slide-info">
                <header>
                  <a href="<?php echo get_permalink($blogs[1]->ID); ?>">
                    <span class="slide-title"><?php echo $blogs[1]->post_title ?></span>
                  </a>
                </header>
              </div>
            </div>
            <div class="slide slide-4 show">
              <div class="slide-image">
                <a href="<?php echo get_permalink($shows[1]->ID); ?>">
                  <?php echo get_the_post_thumbnail($shows[1]->ID, 'home-featured'); ?>
                  <div class="slide-desc"><?php echo get_excerpt_by_id($shows[1]->ID); ?></div>
                </a>
              </div>
              <div class="slide-info">
                <header>
                  <a href="<?php echo get_permalink($shows[1]->ID); ?>">
                    <span class="slide-title"><?php echo $shows[1]->post_title ?></span>
                  </a>
                </header>
              </div>
            </div>
            <div class="slide slide-5 blog">
              <div class="slide-image">
                <a href="<?php echo get_permalink($blogs[2]->ID); ?>">
                  <?php echo get_the_post_thumbnail($blogs[2]->ID, 'home-featured'); ?>
                  <div class="slide-desc"><?php echo get_excerpt_by_id($blogs[2]->ID); ?></div>
                </a>
              </div>
              <div class="slide-info">
                <header>
                  <a href="<?php echo get_permalink($blogs[2]->ID); ?>">
                    <span class="slide-title"><?php echo $blogs[2]->post_title ?></span>
                  </a>
                </header>
              </div>
            </div>
            <div class="slide slide-6 blog">
              <div class="slide-image">
                <a href="<?php echo get_permalink($blogs[3]->ID); ?>">
                  <?php echo get_the_post_thumbnail($blogs[3]->ID, 'home-featured'); ?>
                  <div class="slide-desc"><?php echo get_excerpt_by_id($blogs[3]->ID); ?></div>
                </a>
              </div>
              <div class="slide-info">
                <header>
                  <a href="<?php echo get_permalink($blogs[3]->ID); ?>">
                    <span class="slide-title"><?php echo $blogs[3]->post_title ?></span>
                  </a>
                </header>
              </div>
            </div>
          </div>
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
              <a href="<?php echo site_url(); ?>/blog" class="all-link">View All Posts</a>
            </div>
          </header>
          <div class="blog-posts">
            <?php foreach($blogs as $post): setup_postdata($post); ?>
              <div class="blog-post">
                <div class="blog-post-body">
                  <div class="blog-post-thumbnail">
                    <a href="<?php the_permalink() ?>">
                      <?php if (has_post_thumbnail()): the_post_thumbnail('home-blog-thumb'); ?>
                      <?php else: ?>
                      <img src="<?php bloginfo('template_directory'); ?>/assets/images/default-featured-image.jpg" alt="<?php the_title(); ?>" />
                      <?php endif; ?>
                    </a>
                  </div>
                  <div class="blog-post-content">
                    <header class="blog-post-header">
                      <h1 class="blog-post-title"><a href="<?php the_permalink() ?>"><?php the_title(); ?></a></h1>
                    </header>
                    <div class="blog-post-body">
                      <?php the_excerpt(); ?>
                      <a class="more-link" href="<?php the_permalink() ?>">Read More</a>
                    </div>
                    <footer class="blog-post-footer">
                      <div class="date-container">
                        <span class="blog-post-date"><?php the_time('F jS, Y') ?></span>
                      </div>
                    </footer>
                  </div>
                </div>
              </div>
              <hr class="horizontal-separator-light" />
            <?php endforeach; ?>
            <div class="footer-all-container">
              <a href="<?php echo site_url(); ?>/blog" class="footer-all-link">View All Posts</a>
            </div>
          </div>
        </div>
      </div>
  </section>
</div>

<?php get_footer(); ?>
