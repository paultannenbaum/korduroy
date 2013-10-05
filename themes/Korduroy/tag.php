<?php get_header(); ?>

<?php $tag = get_terms('post_tag', array('include' => get_query_var('tag_id')))[0]; ?>
<?php $posts = get_posts(array(
  'post_type' => array( 'post', 'shows'),
  'tag__in'   => $tag->term_id
)); ?>

<nav id="ktv-sub-nav" class="horizontal-sub-nav">
  <div class="heading-container extend-full">
    <h2 class="sub-nav-heading">All things "<?php echo $tag->name ?>"</h2>
  </div>
  <div class="separator-container">
    <hr class="horizontal-stitch" />
  </div>
</nav>

<div id="body" class="tag-page">
  <section class="main" role="main">
    <div class="content-container">
      <aside class="aside-container">
        <div class="aside-wrapper">
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
        </div>
      </aside>

      <div class="tagged-posts-container main-container">
        <?php foreach($posts as $post): setup_postdata($post); ?>
          <?php if (get_post_type() === 'post'): ?>
            <div class="tag-post blog-post">
              <div class="tag-post-body">
                <div class="post-thumbnail tag-thumbnail">
                  <a href="<?php the_permalink() ?>">
                    <span class="badge-small blog"></span>
                    <?php if (has_post_thumbnail()): the_post_thumbnail('home-blog-thumb'); ?>
                    <?php else: ?>
                      <img src="<?php bloginfo('template_directory'); ?>/assets/images/default-featured-image.jpg" alt="<?php the_title(); ?>" />
                    <?php endif; ?>
                  </a>
                </div>
                <div class="tag-post-content">
                  <header class="tag-post-header">
                    <h1 class="tag-post-title"><a href="<?php the_permalink() ?>"><?php the_title(); ?></a></h1>
                  </header>
                  <?php the_excerpt(); ?>
                  <footer class="tag-post-footer">
                    <div class="date-container">
                      <span class="tag-post-date"><?php the_time('F jS, Y') ?></span>
                    </div>
                    <div class="sharing-container">
                      <?php get_template_part('partials/share-buttons'); ?>
                    </div>
                  </footer>
                </div>
              </div>
            </div>
            <hr class="horizontal-separator-light" />


          <?php elseif (get_post_type() === 'shows'): ?>
            <div class="tag-post show-post">
              <div class="tag-post-body">
                <div class="post-thumbnail tag-thumbnail">
                  <a href="<?php the_permalink() ?>">
                    <span class="badge-small show"></span>
                    <?php if (has_post_thumbnail()): the_post_thumbnail('home-blog-thumb'); ?>
                    <?php else: ?>
                      <img src="<?php bloginfo('template_directory'); ?>/assets/images/default-featured-image.jpg" alt="<?php the_title(); ?>" />
                    <?php endif; ?>
                  </a>
                </div>
                <div class="tag-post-content">
                  <header class="tag-post-header">
                    <h1 class="tag-post-title"><a href="<?php the_permalink() ?>"><?php the_title(); ?></a></h1>
                  </header>
                  <div class="tag-post-show-desc">
                    <?php the_field('description'); ?>
                  </div>
                  <a href="<?php the_permalink() ?>" class="more-link">Watch show</a>
                  <footer class="tag-post-footer">
                    <div class="date-container">
                      <span class="tag-post-date"><?php the_time('F jS, Y') ?></span>
                    </div>
                    <div class="sharing-container">
                      <?php get_template_part('partials/share-buttons'); ?>
                    </div>
                  </footer>
                </div>
              </div>
            </div>
            <hr class="horizontal-separator-light" />
          <?php endif; ?>
        <?php endforeach; ?>

        <div class="pagination-container">
          <?php get_template_part('partials/pagination'); ?>
        </div>
      </div>
    </div>

  </section>
</div>

<?php get_footer(); ?>
