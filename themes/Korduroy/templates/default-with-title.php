<?php
/*
Template Name: Default-with-title
*/
?>

<?php get_header(); ?>

<nav id="ktv-sub-nav">
  <div class="heading-container extend-full">
    <h1 class="sub-nav-heading">Korduroy.TV <?php wp_title("", true); ?></h1>
  </div>
  <div class="separator-container">
    <hr class="horizontal-stitch" />
  </div>
</nav>

<div id="body" class="default-page">
  <section class="main" role="main">
    <div class="page-content">
      <?php while (have_posts()): the_post(); ?>
      <?php the_content(); ?>
      <?php endwhile; ?>
    </div>
  </section>
</div>

<?php get_footer(); ?>
