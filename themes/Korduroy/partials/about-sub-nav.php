<nav class="ktv-sub-nav">
  <h1 class="sub-nav-heading">About Us</h1>
  <ul class="sub-nav-list">
    <li class="sub-nav-list-item about-us <?php if (is_page('the-site')) { echo "current"; }?>">
      <a class="sub-nav-link" href="<?php echo site_url(); ?>/about/the-site">The Site</a>
    </li>
    <li class="sub-nav-list-item crew <?php if (is_page('the-crew')) { echo "current"; }?>">
      <a class="sub-nav-link" href="<?php echo site_url(); ?>/about/the-crew">The Crew</a>
    </li>
    <li class="sub-nav-list-item big-shaka-club <?php if (is_page('big-shaka-club')) { echo "current"; }?>">
      <a class="sub-nav-link" href="<?php echo site_url(); ?>/about/big-shaka-club">The Big Shaka Club</a>
    </li>
  </ul>
</nav>
<hr class="horizontal-stitch">