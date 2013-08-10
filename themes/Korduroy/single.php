<?php get_header(); ?>

<div id="body">
  <div class="row">
    <div class="small-12 large-12 columns">
    	<section id="main" role="main">

        <?php while ( have_posts() ) : the_post(); ?>
          <h2><?php the_title(); ?></h2>
          <small><?php the_time('F jS, Y') ?> by <?php the_author() ?></small>
          <?php the_content();?>
          <p class="postmetadata">Posted in <?php the_category(', '); ?></p>
        <?php endwhile;?>

        <p><?php the_tags(); ?></p>

        <div class="comments-wrapper">
          <?php comments_template(); ?>
        </div>

      </section>
    </div>
  </div>
</div>


<?php get_footer(); ?>
