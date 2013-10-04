<nav id="about-sub-nav" class="horizontal-sub-nav">
  <div class="heading-container">
    <h2 class="sub-nav-heading">About Us</h2>
  </div>

  <div class="list-container">
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
  </div>
  <div class="separator-container">
    <hr class="horizontal-stitch" />
  </div>
</nav>