<?php
/*
Template Name: About-The Site
*/
?>

<?php get_header(); ?>
<?php load_template(TEMPLATEPATH . '/partials/about-sub-nav.php'); ?>

<div id="body" class="about-page about-the-site-page">
  <section class="main" role="main">
    <?php $vimeo_id = get_field('vimeo_embed_id'); ?>
    <div class="video-wrapper">
      <iframe src="http://player.vimeo.com/video/<?php echo $vimeo_id; ?>?title=0&amp;byline=0&amp;portrait=0&amp;color=cfff66" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>
    </div>

    <hr class="horizontal-stitch">
    <p><?php the_field('blurb'); ?></p>
    <hr class="horizontal-stitch">
  </section>
</div>

<?php get_footer(); ?>
