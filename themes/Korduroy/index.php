<?php get_header(); ?>
<?php get_template_part('partials/blog-sub-nav'); ?>

<div id="body" class="blog-page blog-index-page">
  <section class="main" role="main">

    <div class="content-container">
      <aside class="aside-container">
        <nav class="aside-navigation">
          <h2>Categories</h2>
          <ul class="aside-navigation-list">
            <li class="current-cat"><a href="<?php echo site_url(); ?>/blog">All</a></li>
            <?php wp_list_categories(array('hide_empty' => 0, 'title_li' => __(''))); ?>
          </ul>
        </nav>
      </aside>

      <div class="blog-posts-container">
        <?php while ( have_posts() ) : the_post(); ?>
          <div class="blog-post">
            <header class="blog-post-header">
              <h1 class="blog-post-title"><a href="<?php the_permalink() ?>"><?php the_title(); ?></a></h1>
            </header>
            <div class="blog-post-body">
              <div class="blog-post-thumbnail">
                <a href="<?php the_permalink() ?>">
                  <?php if (has_post_thumbnail()): the_post_thumbnail(); ?>
                  <?php else: ?>
                    <img src="<?php bloginfo('template_directory'); ?>/assets/images/default-featured-image.jpg" alt="<?php the_title(); ?>" />
                  <?php endif; ?>
                </a>
              </div>
              <div class="blog-post-content">
                <?php the_content('READ MORE...');?>
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
        <?php endwhile; ?>
      </div>

      <?php get_template_part('partials/pagination'); ?>
    </div>

  </section>
</div>

<?php get_footer(); ?>
