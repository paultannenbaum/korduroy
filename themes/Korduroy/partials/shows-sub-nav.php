<nav id="ktv-sub-nav">
  <h1 class="sub-nav-heading">Shows</h1>
  <ul class="sub-nav-list">
    <?php wp_list_categories(array(
      'taxonomy' => 'show_category',
      'hide_empty' => 0,
      'title_li' => '',
      'orderby' => 'count',
      'order' => 'DESC'
    )); ?>
  </ul>
  <span class="separator-container">
    <hr class="horizontal-stitch" />
  </span>
</nav>