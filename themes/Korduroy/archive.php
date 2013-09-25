<?php get_header(); ?>
<?php get_template_part('partials/blog-sub-nav'); ?>

<div id="body" class="blog-page blog-archives-page">
  <section class="main" role="main">

    <div class="content-container">
      <aside class="aside-container">
        <div class="aside-wrapper">
          <nav class="aside-navigation">
            <h2>Categories</h2>
            <ul class="aside-navigation-list">
              <?php wp_list_categories(array('hide_empty' => 0,'show_option_all' => 'All','title_li' => __(''))); ?>
            </ul>
          </nav>
        </div>
      </aside>

      <div class="blog-posts-container main-container">
        <?php while ( have_posts() ) : the_post(); ?>
        <div class="blog-post">
          <header class="blog-post-header">
            <h1 class="blog-post-title"><a href="<?php the_permalink() ?>"><?php the_title(); ?></a></h1>
          </header>
          <div class="blog-post-thumbnail">
            <a href="<?php the_permalink() ?>">
              <?php if (has_post_thumbnail()): the_post_thumbnail('blog-full-width-cropped'); ?>
              <?php else: ?>
              <img src="<?php bloginfo('template_directory'); ?>/assets/images/default-featured-image.jpg" alt="<?php the_title(); ?>" />
              <?php endif; ?>
            </a>
          </div>
          <div class="blog-post-body">
            <?php the_excerpt(); ?>
          </div>
          <footer class="blog-post-footer">
            <div class="date-container">
              <span class="blog-post-date"><?php the_time('F jS, Y') ?></span>
            </div>
            <div class="sharing-container">
              <?php get_template_part('partials/share-buttons'); ?>
            </div>
          </footer>
        </div>
        <hr class="horizontal-separator-light" />
        <?php endwhile; ?>
      </div>
    </div>
    <div class="pagination-wrapper">
      <div class="pagination-container">
        <?php get_template_part('partials/pagination'); ?>
      </div>
    </div>
  </section>
</div>

<?php get_footer(); ?>
