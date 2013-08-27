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

<!-- How to use them in a loop
  foreach($posts as $post): // begin cycle through posts of this category
  setup_postdata($post); //set up post data for use in the loop (enables the_title(), etc without specifying a post ID)
-->

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
              <a href="<?php echo site_url(); ?>/shows"><h1 class="section-title">Shows</h1></a>
            </div>
            <div class="all-container">
              <a href="<?php echo site_url(); ?>/shows" class="all-link">View All Shows</a>
            </div>
          </header>
          <ul class="channel-list">
            <?php foreach($shows as $show): ?>
              <li class="episode">
                <a class="episode-link" href="<?php echo get_permalink($show->ID); ?>">
                  <?php echo get_the_post_thumbnail($show->ID, 'show-thumb'); ?>
                  <span class="episode-title"><?php echo $show->post_title ?></span>
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
              <a href="<?php echo site_url(); ?>/blog"><h1 class="section-title">Blog</h1></a>
            </div>
            <div class="all-container">
              <a href="<?php echo site_url(); ?>/blog" class="all-link">View All Articles</a>
            </div>
          </header>
          <div class="blog-posts">
            <?php foreach($blogs as $blog): setup_postdata($blog); ?>
              <div class="blog-post">
                <div class="blog-post-body">
                  <div class="blog-post-thumbnail">
                    <a href="<?php the_permalink($blog->ID) ?>">
                      <?php if (has_post_thumbnail($blog->ID)): ?>
                        <?php echo get_the_post_thumbnail($blog->ID, 'thumbnail'); ?>
                      <?php else: ?>
                        <img src="<?php bloginfo('template_directory'); ?>/assets/images/default-featured-image.jpg" alt="<?php echo $blog->post_title ?>" />
                      <?php endif; ?>
                    </a>
                  </div>
                  <div class="blog-post-content">
                    <header class="blog-post-header">
                      <h1 class="blog-post-title"><a href="<?php echo get_permalink($blog->ID); ?>"><?php echo $blog->post_title ?></a></h1>
                    </header>
                    <div class="post-content">
                      <?php the_excerpt() ?>
                    </div>
                  </div>
                </div>
              </div>
              <hr class="horizontal-separator-light" />
            <?php endforeach; ?>
            <?php wp_reset_postdata(); ?>
          </div>
        </div>
      </div>
  </section>
</div>

<?php get_footer(); ?>
