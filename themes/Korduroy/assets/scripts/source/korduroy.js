(function() {
  jQuery(function() {
    var KTV;
    KTV = KTV || {};
    KTV.newsletterSignup = (function() {
      var form, handleSubmit, spinner;
      form = $('#newsletter-signup');
      spinner = null;
      handleSubmit = function(e) {
        e.preventDefault();
        return $.ajax({
          type: 'POST',
          data: {
            mc_submit_type: 'js',
            mcsf_action: 'mc_submit_signup_form',
            _mc_submit_signup_form_nonce: form.find('#_mc_submit_signup_form_nonce').val(),
            mc_mv_EMAIL: form.find('.email').val(),
            mc_signup_submit: 'Sign Up'
          },
          beforeSend: function() {
            spinner = new Spinner().spin(form[0]);
          },
          error: function() {
            spinner.stop();
            return alertify.error("Bummer, our servers are having issues right now. Try again later.");
          },
          success: function(data) {
            var errorText, result;
            spinner.stop();
            result = $(data);
            if (result.hasClass('mc_success_msg')) {
              form.find('.email').val("");
              return alertify.success("Your all signed up. Yeeeew!");
            } else {
              errorText = result.html();
              alertify.set({
                delay: 10000
              });
              return alertify.error(errorText);
            }
          }
        });
      };
      return {
        init: function() {
          return form.on('submit', handleSubmit);
        }
      };
    })();
    return KTV.newsletterSignup.init();
  });

}).call(this);

(function() {
  jQuery(function() {
    var KTV;
    KTV = KTV || {};
    KTV.stickySidebar = (function() {
      var asideNav, offsetTop, stickyNav, window;
      asideNav = $('.aside-navigation');
      window = $('#page-wrap');
      offsetTop = asideNav.offset().top;
      stickyNav = function() {
        if (window.scrollTop() > offsetTop) {
          return asideNav.stop().css({
            marginTop: window.scrollTop() - offsetTop + 15
          });
        } else {
          return asideNav.stop().css({
            marginTop: 0
          });
        }
      };
      return {
        init: function() {
          if (asideNav.length) {
            return window.on('scroll', stickyNav);
          }
        }
      };
    })();
    return KTV.stickySidebar.init();
  });

}).call(this);
