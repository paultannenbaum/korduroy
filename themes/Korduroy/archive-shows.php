<?php get_header(); ?>
<?php get_template_part('partials/shows-sub-nav'); ?>

<div id="body" class="shows-page shows-index">
  <section class="main" role="main">
    <?php
      $categories = get_terms('show_category', array(
        'hide_empty' => 1,
        'orderby' => 'count',
        'order' => 'DESC'
      ));
      foreach( $categories as $category ):
    ?>

      <section class="show-channel">
        <header class="channel-header">
          <a class="channel-link" href="<?php echo get_term_link($category, $category -> taxonomy); ?>">
            <span class="channel-icon <?php echo $category -> slug ?>"></span>
          </a>
          <div class="channel-info">
            <p class="channel-desc">
              <a href="<?php echo get_term_link($category, $category -> taxonomy); ?>" class="category-name"><?php echo $category -> name ?></a>
              <?php echo $category -> description ?>
            </p>
            <a class="all-episodes" href="<?php echo get_term_link($category, $category -> taxonomy); ?>">view all episodes</a>
          </div>
        </header>
        <div class="channel-list-container">
          <ul class="channel-list">
            <?php
              $i = 0;
              $posts = get_posts(array(
                'post_type' => 'shows',
                'taxonomy' => $category->taxonomy,
                'term' => $category->slug,
                'numberposts' => '6'
              ));
              foreach($posts as $post): setup_postdata($post);
            ?>
              <li class="episode">
                <a class="episode-link" href="<?php the_permalink(); ?>">
                  <?php the_post_thumbnail('show-thumb', array('class' => 'episode-thumb')); ?>
                  <span class="episode-title"><?php the_title(); ?></span>
                </a>
              </li>
            <?php endforeach; ?>
          </ul>
        </div>
      </section>
      <hr class="channel-separator" />
    <?php endforeach; ?>
  </section>
</div>
<?php get_footer(); ?>



