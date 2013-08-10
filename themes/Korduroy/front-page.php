<?php get_header(); ?>

<div id="body">
  <div class="row">
    <div class="small-12 large-12 columns">
      <section id="main" role="main">

        <h1>This is front-page.php</h1>

        <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
          <article class="post" id="post-<?php the_ID(); ?>">
            <h1><?php the_title(); ?></h1>
            <div class="entry">
              <?php the_content(); ?>
              <?php wp_link_pages( array( 'before' => 'Pages: ', 'next_or_number' => 'number' ) ); ?>
            </div>
          </article>
        <?php endwhile; endif; ?>

      </section>
    </div>
  </div>
</div>

<?php get_footer(); ?>
