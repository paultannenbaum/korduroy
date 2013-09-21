<?php
/*
Template Name: Links
*/
?>

<?php get_header(); ?>

<nav id="ktv-sub-nav" class="links-page">
  <h1 class="sub-nav-heading extend-full">Meet some of our digital friends</h1>
  <div class="separator-container">
    <hr class="horizontal-stitch">
    <img class="links-page-image" src="<?php the_field('banner_image'); ?>">
    <hr class="horizontal-stitch">
  </div>
</nav>

<div id="body" class="links-page">
  <section class="main" role="main">
    <div class="content-container">
      <aside class="aside-container">
        <nav class="aside-navigation">
          <h2>Categories</h2>
          <ul class="aside-navigation-list">
            <li><a href="#blogs-portfolios">Blogs/Portfolio</a></li>
            <li><a href="#organizations">Organizations</a></li>
            <li><a href="#media">Media</a></li>
            <li><a href="#resources">Resources</a></li>
            <li><a href="#business">Business</a></li>
          </ul>
        </nav>
      </aside>
      <div class="linked-pages-container">

        <?php if(get_field('blogs/portfolio')): ?>
        <div class="blog-portfolio-links link-group">
          <header>
            <a name="blogs-portfolios"></a>
            <h1>Blogs and Portfolios</h1>
            <ul class="links-list">
              <?php while(has_sub_field('blogs/portfolio')): ?>
                <li class="links-list-item"><a href="<?php the_sub_field('url'); ?>"><?php the_sub_field('name'); ?></a></li>
              <?php endwhile; ?>
            </ul>
            <hr class="horizontal-separator-light" />
          </header>
        </div>
        <?php endif; ?>

        <?php if(get_field('organizations')): ?>
        <div class="organizations-links link-group">
          <header>
            <a name="organizations"></a>
            <h1>Organizations</h1>
            <ul class="links-list">
              <?php while(has_sub_field('organizations')): ?>
              <li class="links-list-item"><a href="<?php the_sub_field('url'); ?>"><?php the_sub_field('name'); ?></a></li>
              <?php endwhile; ?>
            </ul>
            <hr class="horizontal-separator-light" />
          </header>
        </div>
        <?php endif; ?>

        <?php if(get_field('media')): ?>
        <div class="media-links link-group">
          <header>
            <a name="media"></a>
            <h1>Media</h1>
            <ul class="links-list">
              <?php while(has_sub_field('media')): ?>
              <li class="links-list-item"><a href="<?php the_sub_field('url'); ?>"><?php the_sub_field('name'); ?></a></li>
              <?php endwhile; ?>
            </ul>
            <hr class="horizontal-separator-light" />
          </header>
        </div>
        <?php endif; ?>

        <?php if(get_field('resources')): ?>
        <div class="resources-links link-group">
          <header>
            <a name="resources"></a>
            <h1>Resources</h1>
            <ul class="links-list">
              <?php while(has_sub_field('resources')): ?>
              <li class="links-list-item"><a href="<?php the_sub_field('url'); ?>"><?php the_sub_field('name'); ?></a></li>
              <?php endwhile; ?>
            </ul>
            <hr class="horizontal-separator-light" />
          </header>
        </div>
        <?php endif; ?>

        <?php if(get_field('business')): ?>
        <div class="resources-links link-group">
          <header>
            <a name="business"></a>
            <h1>Business</h1>
            <ul class="links-list">
              <?php while(has_sub_field('business')): ?>
              <li class="links-list-item"><a href="<?php the_sub_field('url'); ?>"><?php the_sub_field('name'); ?></a></li>
              <?php endwhile; ?>
            </ul>
            <hr class="horizontal-separator-light" />
          </header>
        </div>
        <?php endif; ?>
      </div>
    </div>
  </section>
</div>
<?php get_footer(); ?>
