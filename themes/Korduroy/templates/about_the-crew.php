<?php
/*
Template Name: About-The Crew
*/
?>

<?php get_header(); ?>

<div id="body" class="about-page about-the-crew-page">
  <section class="main" role="main">
    <?php load_template(TEMPLATEPATH . '/partials/about-sub-nav.php'); ?>

    <div class="the-crew">
      <?php if(get_field('crew_member')): ?>
        <?php while(has_sub_field('crew_member')): ?>
          <div class="crew-member">
            <div class="crew-member-photo">
              <img class="image-border" src="<?php the_sub_field('photo'); ?>" title="<?php the_sub_field('name'); ?>" alt="<?php the_sub_field('name'); ?>" />
            </div>
            <div class="crew-member-info">
              <div class="member-name"><?php the_sub_field('name'); ?></div>
              <div class="member-position"><?php the_sub_field('position'); ?></div>
              <div class="member-desc"><?php the_sub_field('description'); ?></div>
            </div>
          </div>
          <hr class="crew-separator" />
        <?php endwhile; ?>
      <?php endif; ?>
    </div>

  </section>
</div>
<?php get_footer(); ?>
