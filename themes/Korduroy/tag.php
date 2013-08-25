<?php get_header(); ?>

<?php $tag = get_terms('post_tag', array('include' => get_query_var('tag_id')))[0]; ?>
<?php $posts = get_posts(array(
  'post_type' => array( 'post', 'shows'),
  'tag__in'   => $tag->term_id
)); ?>

<nav id="ktv-sub-nav">
  <h1 class="sub-nav-heading extend-full">All things "<?php echo $tag->name ?>"</h1>
  <span class="separator-container">
    <hr class="horizontal-stitch" />
  </span>
</nav>

<div id="body" class="tag-page">
  <section class="main" role="main">
    <div class="content-container">
      <aside class="aside-container">
        <nav class="aside-navigation">
          <h2>Popular Tags</h2>
          <?php wp_tag_cloud(array(
            'smallest' => 11,
            'largest' => 11,
            'unit' => 'px',
            'format' => 'list',
            'orderby' => 'count',
            'number' => 15,
            'order' => 'DESC'
          )); ?>
        </nav>
      </aside>

      <div class="tagged-posts-container">
        <?php foreach($posts as $post): setup_postdata($post); ?>
          <?php if ('post' == get_post_type()  ): ?>
            <div class="tag-post blog-post">
              <header class="tag-post-header">
                <h1 class="tag-post-title"><a href="<?php the_permalink() ?>"><?php the_title(); ?></a></h1>
              </header>
              <div class="tag-post-body">
                <div class="post-thumbnail tag-thumbnail">
                  <a href="<?php the_permalink() ?>">
                    <span class="badge-small blog"></span>
                    <?php if (has_post_thumbnail()): the_post_thumbnail(); ?>
                    <?php else: ?>
                      <img src="<?php bloginfo('template_directory'); ?>/assets/images/default-featured-image.jpg" alt="<?php the_title(); ?>" />
                    <?php endif; ?>
                  </a>
                </div>
                <div class="tag-post-content">
                  <?php the_content('READ MORE...');?>
                  <footer class="tag-post-footer">
                    <span class="tag-post-date"><?php the_time('F jS, Y') ?> by <?php the_author() ?></span>
                  </footer>
                </div>
              </div>
            </div>
            <hr class="horizontal-separator-light" />
          <?php elseif ( 'shows' == get_post_type()  ) : ?>
            <div class="tag-post show-post">
              <header class="tag-post-header">
                <h1 class="tag-post-title"><a href="<?php the_permalink() ?>"><?php the_title(); ?></a></h1>
              </header>
              <div class="tag-post-body">
                <div class="post-thumbnail tag-thumbnail">
                  <a href="<?php the_permalink() ?>">
                    <span class="badge-small show"></span>
                    <?php if (has_post_thumbnail()): the_post_thumbnail(); ?>
                    <?php else: ?>
                      <img src="<?php bloginfo('template_directory'); ?>/assets/images/default-featured-image.jpg" alt="<?php the_title(); ?>" />
                    <?php endif; ?>
                  </a>
                </div>
                <div class="tag-post-content">
                  <div class="tag-post-show-desc">
                    <?php the_field('description'); ?>
                  </div>
                  <a href="<?php the_permalink() ?>" class="more-link">Watch Show...</a>
                  <footer class="tag-post-footer">
                    <span class="tag-post-date"><?php the_time('F jS, Y') ?></span>
                  </footer>
                </div>
              </div>
            </div>
            <hr class="horizontal-separator-light" />
          <?php endif; ?>
        <?php endforeach; ?>
      </div>
    </div>

  </section>
</div>

<?php get_sidebar(); ?>

<?php get_footer(); ?>
