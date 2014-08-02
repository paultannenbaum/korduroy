<nav id="ktv-sub-nav" class="horizontal-sub-nav">
  <div class="heading-container">
    <h2 class="sub-nav-heading">Shows</h2>
  </div>
  <div class="list-container">
    <ul class="shows-sub-nav-list">
      <li class="cat-item">
        <a href="<?php echo site_url(); ?>/shows/">Recent</a>
      </li>
      <li class="cat-item <?php if (is_page('most-watched')) { echo "current"; }?>">
        <a href="<?php echo site_url(); ?>/most-watched/">Most Viewed</a>
      </li>
      <li class="cat-item <?php if (is_page('featured-shows')) { echo "current"; }?>">
        <a href="<?php echo site_url(); ?>/featured-shows/?show-filter=ktv-favorite">Favorites</a>
      </li>
      <li class="drop-down-list-container">
        <ul class="drop-down-list" data-state="closed">
          Film Makers
          <li class="cat-item">
            <a href="#">Cyrus Sutton</a>
          </li>
          <li class="cat-item">
            <a href="#">Ed Derman</a>
          </li>
          <li class="cat-item">
            <a href="#">Reis Paluso</a>
          </li>
        </ul>
      </li>
      <li class="drop-down-list-container">
        <ul class="drop-down-list" data-state="closed">
          Korduroy Channels
          <?php wp_list_categories(array(
            'taxonomy' => 'show_category',
            'hide_empty' => 0,
            'title_li' => '',
            'orderby' => 'count',
            'order' => 'DESC'
          )); ?>
        </ul>
      </li>
    </ul>
  </div>
  <div class="separator-container">
    <hr class="horizontal-stitch" />
  </div>
</nav>