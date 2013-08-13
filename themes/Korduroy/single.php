<?php get_header(); ?>
<?php load_template(TEMPLATEPATH . '/partials/blog-sub-nav.php'); ?>

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

      <div class="blog-posts-container">
        <?php while ( have_posts() ) : the_post(); ?>
        <div class="blog-post">
          <h1 class="blog-post-title"><?php the_title(); ?></h1>
          <span class="blog-post-date">Posted on <?php the_time('F jS, Y') ?></span>
          <div class="blog-post-content">
            <?php the_content();?>
            <footer class="blog-post-footer">
              <?php load_template(TEMPLATEPATH . '/partials/tag-list.php'); ?>
            </footer>
          </div>
        </div>
        <?php endwhile; ?>
      </div>
    </div>

    <!--<div class="comments-wrapper">-->
      <!--<?php comments_template(); ?>-->
    <!--</div>-->

  </section>
</div>

<?php get_footer(); ?>
