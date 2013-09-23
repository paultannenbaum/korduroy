<?php get_header(); ?>
<?php get_template_part('partials/blog-sub-nav'); ?>

<div id="body" class="blog-page blog-show-page">
  <section class="main" role="main">

    <div class="content-container">
      <aside class="aside-container">
        <nav class="aside-navigation">
          <h2>Categories</h2>
          <ul class="aside-navigation-list">
            <?php wp_list_categories(array('hide_empty' => 0,'show_option_all' => 'All','title_li' => __(''))); ?>
          </ul>
        </nav>
      </aside>

      <div class="blog-post-container">
        <?php while ( have_posts() ) : the_post(); ?>
        <div class="blog-post">
          <header class="blog-post-header">
            <h1 class="blog-post-title"><?php the_title(); ?></h1>

            <div class="blog-post-meta">
              <div class="date-container"><?php the_time('F jS, Y') ?></div>
              <div class="sharing-container"><?php get_template_part('partials/share-buttons'); ?></div>
            </div>

          </header>
          <div class="blog-post-body">
            <?php the_content();?>
            <footer class="blog-post-footer">
              <?php get_template_part('partials/tag-list'); ?>
              <hr class="horizontal-stitch" />
              <h2>Related Items</h2>
              <!-- TODO: Related Posts Goes Here -->
            </footer>
          </div>
        </div>
        <?php endwhile; ?>

        <div class="comments-wrapper">
          <?php comments_template(); ?>
        </div>
      </div>
    </div>

  </section>
</div>

<?php get_footer(); ?>
