<nav id="ktv-sub-nav">
  <h1 class="sub-nav-heading">Shows</h1>
  <ul class="sub-nav-list">
    <?php wp_list_categories(array('hide_empty' => 0, 'title_li' => __(''), 'taxonomy' => 'show_category')); ?>
  </ul>
  <span class="separator-container">
    <hr class="horizontal-stitch" />
  </span>
</nav>