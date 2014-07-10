<?php
/*
Template Name: Filtered Shows
*/
?>

<?php get_header(); ?>
<?php get_template_part('partials/shows-sub-nav-v2'); ?>

<div id="body" class="shows-page filtered-shows">
    <section class="main" role="main">
        <?#php $category = get_term_by('slug', get_query_var('term'), get_query_var('taxonomy')); ?>

        <section class="show-channel">
            <header class="channel-header">
                <div class="channel-info">
                    <p class="channel-desc">
                        <span class="category-name">Featured</span>
                        Just some descriptive text
                    </p>
                </div>
            </header>

            <ul class="channel-list">
                <?php
                    $tag = get_query_var('show-filter');
                    $posts = get_posts(array(
                        'post_type' => array( 'post', 'shows'),
                        'tag'       => $tag
                    ));

                    foreach($posts as $post): // begin cycle through posts of this category
                    setup_postdata($post); //set up post data for use in the loop (enables the_title(), etc without specifying a post ID)
                ?>
                <li class="episode">
                    <a class="episode-link" href="<?php the_permalink(); ?>">
                        <?php the_post_thumbnail('show-thumb', array('class' => 'episode-thumb')); ?>
                        <span class="episode-title"><?php the_title(); ?></span>
                    </a>
                </li>
                <?php endforeach; ?>
            </ul>
        </section>
    </section>
</div>

<?php get_footer(); ?>


