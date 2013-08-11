<?php
/*
Template Name: About-Big Shaka
*/
?>

<?php get_header(); ?>

<div id="body" class="about-page about-big-shaka-club-page">
  <section class="main" role="main">
    <?php load_template(TEMPLATEPATH . '/partials/about-sub-nav.php'); ?>

    <?php $vimeo_id = get_field('vimeo_id'); ?>
    <div class="video-wrapper">
      <iframe src="http://player.vimeo.com/video/<?php echo $vimeo_id; ?>?title=0&amp;byline=0&amp;portrait=0&amp;color=cfff66" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>
    </div>

    <hr class="horizontal-stitch">
    <p><?php the_field('blurb'); ?></p>
    <hr class="horizontal-stitch">

    <h1>The Big Shaka Club</h1>
    <div class="big-shaka-club-wrapper">
      <div class="big-shaka-group">
        <h2>Big Aloha Rainbow Members</h2>
        <ul>
          <?php if(get_field('rainbow_member')): ?>
            <?php while(has_sub_field('rainbow_member')): ?>
              <li><?php the_sub_field('name'); ?></li>
            <?php endwhile; ?>
          <?php endif; ?>
        </ul>
      </div>

      <div class="big-shaka-group">
        <h2>Big Aloha Platinum Members</h2>
        <ul>
          <?php if(get_field('platinum_member')): ?>
              <?php while(has_sub_field('platinum_member')): ?>
                <li><?php the_sub_field('name'); ?></li>
              <?php endwhile; ?>
            <?php endif; ?>
        </ul>
      </div>

      <div class="big-shaka-group">
        <h2>Big Aloha Gold Members</h2>
        <ul>
          <?php if(get_field('gold_member')): ?>
          <?php while(has_sub_field('gold_member')): ?>
          <li><?php the_sub_field('name'); ?></li>
          <?php endwhile; ?>
          <?php endif; ?>
        </ul>
      </div>

      <div class="big-shaka-group">
        <h2>Big Aloha Members</h2>
        <ul>
          <?php if(get_field('member')): ?>
          <?php while(has_sub_field('member')): ?>
          <li><?php the_sub_field('name'); ?></li>
          <?php endwhile; ?>
          <?php endif; ?>
        </ul>
      </div>
    </div>

  </section>
</div>
<?php get_footer(); ?>
