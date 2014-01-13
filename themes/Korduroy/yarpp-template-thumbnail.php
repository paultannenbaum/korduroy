<?php
/*
YARPP Template: Thumbnails
*/ ?>

<?php if (have_posts()):?>
<div id="related-posts" class="related-posts">
  <h2>Related Posts</h2>
  <ul class="related-posts-items">
    <?php while (have_posts()) : the_post(); ?>
      <?php if (has_post_thumbnail()):?>
        <li class="related-posts-item <?php echo get_post_type() ?>-item">
          <a href="<?php the_permalink() ?>" rel="bookmark" title="<?php the_title_attribute(); ?>">
            <?php the_post_thumbnail('home-blog-thumb'); ?>
            <?php the_title(); ?>
          </a>
        </li>
      <?php endif; ?>
    <?php endwhile; ?>
  </ul>
</div>
<?php endif; ?>
