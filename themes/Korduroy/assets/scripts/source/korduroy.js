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
    KTV.homePageSlider = (function() {
      var el, setSlider, setSliderEvents, sliderOptions;
      el = $('#featured-slider');
      sliderOptions = {
        arrowsNav: true,
        arrowsNavAutoHide: false,
        fadeinLoadedSlide: false,
        controlNavigationSpacing: 0,
        controlNavigation: 'bullets',
        imageScaleMode: 'none',
        imageAlignCenter: false,
        autoHeight: true,
        transitionType: 'fade',
        usePreloader: false,
        loop: false,
        autoPlay: {
          enabled: true,
          delay: 4000
        }
      };
      setSlider = function() {
        $('.slide-1').find('.slide-desc').delay(1500).animate({
          'bottom': 0
        });
        return el.royalSlider(sliderOptions);
      };
      setSliderEvents = function() {
        var apiEl, bottom, currentSlide, currentSlideDesc;
        currentSlide = null;
        currentSlideDesc = null;
        bottom = $('.slide-desc').eq(0).css('bottom');
        apiEl = el.data('royalSlider');
        return apiEl.ev.on('rsAfterSlideChange', function() {
          currentSlide = apiEl.currSlide.content;
          currentSlideDesc = currentSlide.find('.slide-desc');
          return currentSlideDesc.delay(1500).animate({
            'bottom': 0
          });
        });
      };
      return {
        init: function() {
          setSlider();
          return setSliderEvents();
        }
      };
    })();
    if ($('.home-page').length) {
      return KTV.homePageSlider.init();
    }
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
            form.find('input[type="submit"]').attr('disabled', 'disabled');
            spinner = new Spinner().spin(form[0]);
          },
          error: function() {
            form.find('input[type="submit"]').removeAttr('disabled');
            spinner.stop();
            return alertify.error("Bummer, our servers are having issues right now. Try again later.");
          },
          success: function(data) {
            var errorText, result;
            form.find('input[type="submit"]').removeAttr('disabled');
            spinner.stop();
            result = $(data);
            if (result.hasClass('mc_success_msg')) {
              form.find('.email').val("");
              alertify.set({
                delay: 3000
              });
              return alertify.success("Your all signed up. Yeeeew!");
            } else {
              errorText = result.html().replace("» ", "");
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
      var contentContainer, el, elContainer, paddingBottom;
      el = $('.aside-navigation');
      elContainer = $('.aside-container');
      contentContainer = $('.content-container');
      paddingBottom = 50;
      return {
        init: function() {
          if (el.length) {
            elContainer.height(contentContainer.height() - paddingBottom);
            return el.stick_in_parent();
          }
        }
      };
    })();
    return KTV.stickySidebar.init();
  });

}).call(this);

(function() {


}).call(this);
