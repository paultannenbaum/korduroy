<?php
/*
Template Name: Store
*/
?>

<?php get_header(); ?>

    <?php get_template_part('partials/store-sub-nav'); ?>

    <div id="body" class="store-page <?php if(is_page()) { $page_slug = $post->post_name.'-page'; echo $page_slug; } ?>">
        <section class="main" role="main">
            <div class="store-content">
                <?php while (have_posts()): the_post(); ?>
                    <?php the_content(); ?>
                <?php endwhile; ?>
            </div>
        </section>
    </div>

<?php get_footer(); ?>