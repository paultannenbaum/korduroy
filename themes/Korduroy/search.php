<?php get_header(); ?>

<?php if (have_posts()) : ?>
  <nav id="ktv-sub-nav">
    <div class="heading-container extend-full">
      <h1 class="sub-nav-heading">Search Results for "<?php echo get_search_query(); ?>"</h1>
    </div>
    <div class="separator-container">
      <hr class="horizontal-stitch" />
    </div>
  </nav>
<?php endif; ?>

<div id="body" class="search-page">
  <section class="main" role="main">
    <div class="content-container">
      <?php if (have_posts()) : ?>
        <?php while ( have_posts() ) : the_post(); ?>

          <?php if (get_post_type() === 'post'): ?>
            <div class="search-post blog-post">
              <div class="search-post-body">
                <div class="post-thumbnail search-thumbnail">
                  <a href="<?php the_permalink() ?>">
                    <span class="badge-small blog"></span>
                    <?php if (has_post_thumbnail()): the_post_thumbnail('thumbnail'); ?>
                    <?php else: ?>
                    <img src="<?php bloginfo('template_directory'); ?>/assets/images/default-featured-image.jpg" alt="<?php the_title(); ?>" />
                    <?php endif; ?>
                  </a>
                </div>
                <div class="search-post-content">
                  <header class="search-post-header">
                    <h1 class="search-post-title"><a href="<?php the_permalink() ?>"><?php the_title(); ?></a></h1>
                  </header>
                  <?php the_excerpt(); ?>
                  <footer class="search-post-footer">
                    <div class="date-container">
                      <span class="search-post-date"><?php the_time('F jS, Y') ?> by <?php the_author() ?></span>
                    </div>
                    <div class="sharing-container">
                      <?php get_template_part('partials/share-buttons'); ?>
                    </div>
                  </footer>
                </div>
              </div>
            </div>
            <div class="separator-container">
              <hr class="horizontal-separator-light" />
            </div>


          <?php elseif (get_post_type() === 'shows'): ?>
            <div class="search-post show-post">
              <div class="search-post-body">
                <div class="post-thumbnail search-thumbnail">
                  <a href="<?php the_permalink() ?>">
                    <span class="badge-small show"></span>
                    <?php if (has_post_thumbnail()): the_post_thumbnail('thumbnail'); ?>
                    <?php else: ?>
                    <img src="<?php bloginfo('template_directory'); ?>/assets/images/default-featured-image.jpg" alt="<?php the_title(); ?>" />
                    <?php endif; ?>
                  </a>
                </div>
                <div class="search-post-content">
                  <header class="search-post-header">
                    <h1 class="search-post-title"><a href="<?php the_permalink() ?>"><?php the_title(); ?></a></h1>
                  </header>
                  <div class="search-post-show-desc">
                    <?php the_field('description'); ?>
                  </div>
                  <a href="<?php the_permalink() ?>" class="more-link">Watch show</a>
                  <footer class="search-post-footer">
                    <div class="date-container">
                      <span class="search-post-date"><?php the_time('F jS, Y') ?></span>
                    </div>
                    <div class="sharing-container">
                      <?php get_template_part('partials/share-buttons'); ?>
                    </div>
                  </footer>
                </div>
              </div>
            </div>
            <div class="separator-container">
              <hr class="horizontal-separator-light" />
            </div>
          <?php endif; ?>
        <?php endwhile; ?>
        <div class="pagination-container">
          <?php get_template_part('partials/pagination'); ?>
        </div>
      <?php else : ?>
        <div class="no-results-container">
          <h1>Shoots brah, no can find DaKine for "<?php echo get_search_query(); ?>".</h1>
          <h2>Maybe try something else yeah.</h2>
          <div class="no-results-photo">
            <!--<img src="<?php bloginfo('template_directory'); ?>/assets/images/search_wipeout.jpg" />-->
          </div>
        </div>
      <?php endif; ?>
    </div>
  </section>
</div>

<?php get_footer(); ?>
