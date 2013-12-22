</div> <!-- End of .page-wrap -->

<footer id="footer" class="site-footer">

  <section class="footer-row">
    <div class="sponsors-container">
      <ul class="sponsors-list">
        <li class="sponsor-list-item leatherman"><a href="http://www.leatherman.com/" target="_blank"><img src="<?php echo bloginfo( 'template_directory' )?>/assets/images/sponsors/logo_leatherman.png"></a></li>
        <li class="sponsor-list-item go-pro"><a href="http://www.gopro.com/" target="_blank"><img src="<?php echo bloginfo( 'template_directory' )?>/assets/images/sponsors/logo_gopro.png"></a></li>
        <li class="sponsor-list-item axxe"><a href="http://www.axxe.jp.com/" target="_blank"><img src="<?php echo bloginfo( 'template_directory' )?>/assets/images/sponsors/logo_axxe.png"></a></li>
        <li class="sponsor-list-item poler"><a href="http://www.polerstuff.com/" target="_blank"><img src="<?php echo bloginfo( 'template_directory' )?>/assets/images/sponsors/logo_poler.png"></a></li>
        <li class="sponsor-list-item reef"><a href="http://www.reef.com/" target="_blank"><img src="<?php echo bloginfo( 'template_directory' )?>/assets/images/sponsors/logo_reef.png"></a></li>
        <li class="sponsor-list-item tropitreats"><a href="http://www.tropitreats.com/" target="_blank"><img src="<?php echo bloginfo( 'template_directory' )?>/assets/images/sponsors/logo_tropitreats.png"></a></li>
        <li class="sponsor-list-item audiosocket"><a href="http://www.audiosocket.com/" target="_blank"><img src="<?php echo bloginfo( 'template_directory' )?>/assets/images/sponsors/logo_audio_socket.png"></a></li>
        <li class="sponsor-list-item vstr"><a href="http://www.vstr.com/" target="_blank"><img src="<?php echo bloginfo( 'template_directory' )?>/assets/images/sponsors/logo_vstr.png"></a></li>
      </ul>

    </div>
  </section>

  <hr class="horizontal-stitch">

  <section class="footer-row">
    <div class="logo-container">
      <a href="<?php echo home_url(); ?>" rel="nofollow" class="korduroy-logo footer-logo"><?php bloginfo('name'); ?></a>
    </div>
    <div class="info-links-container">

      <nav class="information">
        <h4 class="section-title">Information</h4>
        <ul class="info-nav">
          <li><a href="<?php echo site_url(); ?>/links">links</a></li>
          <li><a href="<?php echo site_url(); ?>/submissions">submissions</a></li>
          <li><a href="<?php echo site_url(); ?>/returns">returns</a></li>
          <li><a href="<?php echo site_url(); ?>/help">help</a></li>
          <!--<li><a href="#contact-form" class="contact-form-link">contact us</a></li>-->
          <li><a href="mailto:paultannenbaum@gmail.com">contact us</a></li>
        </ul>
      </nav>

      <div id="contact-form" class="mfp-hide">
        <header class="message">
          <h1>Drop us a line</h1>
        </header>
        <?php if (function_exists('simple_contact_form')) simple_contact_form(); ?>
      </div>

    </div>
    <div class="network-links-container">
      <nav class="network">
        <h4 class="section-title">Our Network</h4>
        <ul class="network-nav">
          <li><a href="http://showusyourquiver.com/" target="_blank">Show us your quiver</a></li>
          <li><a href="http://korduroytv.tumblr.com/" target="_blank">Korduroy Tumblr</a></li>
          <li><a href="http://seamovies.korduroy.tv/" target="_blank">Sea Movies Tumblr</a></li>
        </ul>
      </nav>
    </div>
    <hr class="horizontal-stitch hide-for-medium-up">
    <div class="stay-updated-container">
      <div class="stay-updated">
        <h4 class="section-title">Stay Updated</h4>
        <form id="newsletter-signup" method="post">
          <!-- TODO: Switch this value from js to html, and gracefully degrade -->
          <input type="hidden" id="mc_submit_type" name="mc_submit_type" value="js">
          <input type="hidden" name="mcsf_action" value="mc_submit_signup_form">
          <?php wp_nonce_field('mc_submit_signup_form', '_mc_submit_signup_form_nonce', false); ?>

          <label>Receive our newsletter</label>
          <input class="email" name="mc_mv_EMAIL" id="mc_mv_EMAIL" placeholder="YOUR EMAIL ADDRESS" type="email">
          <input class="submit button" type="submit" value="SIGN UP">
        </form>


      </div>
    </div>
  </section>

  <hr class="horizontal-stitch">

  <section class="footer-row">
    <div class="copyright-container">
      <span class="copyright">&copy; <?php echo date( "Y" ); echo " "; bloginfo( 'name' ); ?></span>
    </div>
    <div class="legal-links-container">
      <a href="<?php echo site_url(); ?>/privacy-policy" class="privacy-policy">Privacy Policy</a>
      <a href="<?php echo site_url(); ?>/terms-of-use" class="terms-of-use">Terms of use</a>
    </div>
  </section>
</footer>

<?php get_template_part('partials/cdn-javascripts'); ?>
<?php wp_footer(); ?>
<?php get_template_part('partials/third-party-embeds'); ?>

</body>
</html>
