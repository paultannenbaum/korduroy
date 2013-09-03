(function() {
  var KTV;

  KTV = KTV || {};

  KTV.newsletterSignup = (function() {
    var ajaxSubmit, module, setScope;
    module = this;
    setScope = function() {
      module.el = $('#newsletter-signup');
    };
    ajaxSubmit = function(e) {
      e.preventDefault();
      return $.ajax({
        type: 'POST',
        data: {
          mc_submit_type: 'js',
          mcsf_action: 'mc_submit_signup_form',
          _mc_submit_signup_form_nonce: module.el.find('#_mc_submit_signup_form_nonce').val(),
          mc_mv_EMAIL: module.el.find('.email').val(),
          mc_signup_submit: 'Sign Up'
        },
        beforeSend: function() {
          module.spinner = new Spinner().spin(module.el[0]);
        },
        error: function() {
          module.spinner.stop();
          return alertify.error("Bummer, our servers are having issues right now. Try again later.");
        },
        success: function(data) {
          var errorText, result;
          module.spinner.stop();
          result = $(data);
          if (result.hasClass('mc_success_msg')) {
            module.el.find('.email').val("");
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
        setScope();
        return module.el.on('submit', ajaxSubmit);
      }
    };
  })();

  jQuery(function() {
    return KTV.newsletterSignup.init();
  });

}).call(this);
