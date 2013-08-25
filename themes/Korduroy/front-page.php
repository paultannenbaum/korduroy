<?php get_header(); ?>

<?php
  $shows = get_posts(array(
    'post_type'   => 'shows',
    'orderby'     => 'post_date',
    'numberposts' => '10'
  ));
?>

<?php
  $blogs = get_posts(array(
    'post_type'   => 'post',
    'orderby'     => 'post_date',
    'numberposts' => '15'
  ));
?>

<!-- How to use them in a loop
  foreach($posts as $post): // begin cycle through posts of this category
  setup_postdata($post); //set up post data for use in the loop (enables the_title(), etc without specifying a post ID)
-->

<div id="body" class="home-page">
  <section class="main" role="main">

      <div class="featured-content">
        <div class="featured-slider-container">
          <div class="featured-slider">
            <div class="slide slide-1">
              <?php echo $shows[0]->post_title ?>
            </div>
            <div class="slide slide-2">
              <?php echo $blogs[0]->post_title ?>
            </div>
            <div class="slide slide-3">
              <?php echo $blogs[1]->post_title ?>
            </div>
            <div class="slide slide-4">
              <?php echo $shows[1]->post_title ?>
            </div>
            <div class="slide slide-5">
              <?php echo $blogs[2]->post_title ?>
            </div>
            <div class="slide slide-6">
              <?php echo $blogs[3]->post_title ?>
            </div>
          </div>
        </div>

        <div class="campaigns-container">
          <div class="campaigns"></div>
        </div>
      </div>

      <hr class="horizontal-stitch">

      <div class="shows-container">
        <div class="shows">
          <h1>Shows</h1>
        </div>
      </div>

      <hr class="horizontal-stitch">

      <div class="blog-container">
        <div class="blogs">
          <h1>Blog</h1>
        </div>
      </div>
  </section>
</div>

<?php get_footer(); ?>
