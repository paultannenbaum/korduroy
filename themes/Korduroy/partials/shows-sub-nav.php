<nav id="ktv-sub-nav">
  <div class="heading-container">
    <h2 class="sub-nav-heading">Shows</h2>
  </div>
  <div class="list-container">
    <ul class="sub-nav-list">
      <?php wp_list_categories(array(
      'taxonomy' => 'show_category',
      'hide_empty' => 0,
      'title_li' => '',
      'orderby' => 'count',
      'order' => 'DESC'
      )); ?>
    </ul>
  </div>
  <div class="separator-container">
    <hr class="horizontal-stitch" />
  </div>
</nav>