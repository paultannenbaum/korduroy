<?php get_header(); ?>
<?php get_template_part('partials/blog-sub-nav'); ?>

<div id="body" class="blog-page blog-show-page">
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

      <div class="blog-post-container">
        <?php while ( have_posts() ) : the_post(); ?>
        <div class="blog-post main-container">
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
            </footer>
          </div>
        </div>
        <?php endwhile; ?>
      </div>
    </div>

    <div class="post-blog-post">
      <hr class="horizontal-stitch" />
      <h2>Related Items</h2>
      <?php wp_related_posts()?>

      <div class="comments-wrapper">
        <?php comments_template(); ?>
      </div>
    </div>

  </section>
</div>

<?php get_footer(); ?>
