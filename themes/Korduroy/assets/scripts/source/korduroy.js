(function() {
  jQuery(function() {
    var KTV;
    KTV = KTV || {};
    KTV.contactForm = (function() {
      var el, form;
      el = $('.contact-form-link');
      form = $('#simple-contact-form');
      return {
        init: function() {
          form.attr('action', '');
          return el.magnificPopup({
            items: {
              src: '#contact-form',
              type: 'inline',
              focus: '#scf_name',
              closeBtnInside: true
            }
          });
        }
      };
    })();
    return KTV.contactForm.init();
  });

}).call(this);

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


}).call(this);
