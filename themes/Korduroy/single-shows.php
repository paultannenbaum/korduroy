<?php get_header(); ?>
<?php load_template(TEMPLATEPATH . '/partials/shows-sub-nav.php'); ?>

<div id="body" class="supporters-page">

  <section class="main" role="main">

    <?php while ( have_posts() ) : the_post(); ?>

      <?php if(get_field('vimeo_id')): ?>
        <p><?php the_field('vimeo_id'); ?></p>
        <p>Vimeo</p>
      <?php elseif(get_field('youtube_id')): ?>
        <p><?php the_field('youtube_id'); ?></p>
        <p>Youtube</p>
      <?php endif; ?>


      <div class="video-wrapper">
        <iframe src="http://player.vimeo.com/video/<?php echo $vimeo_id; ?>?title=0&amp;byline=0&amp;portrait=0&amp;color=cfff66" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>
      </div>

      <h2><a href="<?php the_permalink() ?>"><?php the_title(); ?></a></h2>
      <p><?php the_field('description'); ?></p>

      <p><?php the_field('thumbnail'); ?></p>

      <?php if(get_field('credits')): ?>
        <?php while(has_sub_field('credits')): ?>
          <div class="credit">
            <p><?php the_sub_field('credit_type'); ?></p>
            <p><?php the_sub_field('name'); ?></p>
            <p><?php the_sub_field('url'); ?></p>
          </div>
        <?php endwhile; ?>
      <?php endif; ?>
    <?php endwhile; ?>

    <!--<div class="comments-wrapper">-->
      <!--<?php comments_template(); ?>-->
    <!--</div>-->

  </section>
</div>

<?php get_footer(); ?>