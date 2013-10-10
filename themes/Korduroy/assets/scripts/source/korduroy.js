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
        el.find('.slide').css('display', 'block');
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
    KTV.responsiveSubNav = (function() {
      var breakpoint, cloneLeftIntoTop, hasLeftNav, hasTopNav, leftEl, leftSubNav, navClone, setNavState, setResponsiveNav, setTitle, topEl, topHeader, topSubNav, watchNav;
      leftEl = $('.aside-container');
      topEl = $('.horizontal-sub-nav');
      leftSubNav = null;
      topSubNav = null;
      topHeader = null;
      navClone = null;
      breakpoint = 769;
      hasLeftNav = function() {
        leftSubNav = leftEl.find('.aside-navigation');
        return !!leftSubNav.length;
      };
      hasTopNav = function() {
        topSubNav = topEl.find('.list-container');
        topHeader = topEl.find('.sub-nav-heading');
        return !!topSubNav.length;
      };
      setNavState = function() {
        if (navClone) {
          navClone.hide();
        }
        topSubNav.show();
        if ($(window).width() > breakpoint) {
          return topHeader.show();
        } else {
          return topHeader.hide();
        }
      };
      watchNav = function() {
        return $(window).resize(setNavState);
      };
      cloneLeftIntoTop = function() {
        var cloneContainer;
        navClone = leftSubNav.find('ul').first().clone().addClass('cloned');
        cloneContainer = $('<div class="list-container"></div>');
        cloneContainer.insertAfter(topEl.find('.heading-container'));
        return navClone.appendTo(cloneContainer);
      };
      setTitle = function() {
        switch (true) {
          case !!($("#body.shows-page").length):
            return "Select Channel:";
          case !!($("#body.blog-page").length):
            return "Blog Categories:";
          case !!($("#body.about-page").length):
            return "About Us:";
          case !!($("#body.tag-page").length):
            return "Popular Tags:";
          case !!($("#body.links-page").length):
            return "Link Categories:";
          default:
            return 'Menu:';
        }
      };
      setResponsiveNav = function() {
        topSubNav.menutron({
          maxScreenWidth: breakpoint,
          menuTitle: setTitle()
        });
        return setNavState();
      };
      return {
        init: function() {
          if (hasLeftNav()) {
            cloneLeftIntoTop();
          }
          if (hasTopNav()) {
            setResponsiveNav();
          }
          if (hasTopNav()) {
            return watchNav();
          }
        }
      };
    })();
    return KTV.responsiveSubNav.init();
  });

}).call(this);

(function() {
  jQuery(function() {
    var KTV;
    KTV = KTV || {};
    KTV.stickySidebar = (function() {
      var el, partner;
      el = $('.aside-navigation');
      partner = $('.main-container');
      return {
        init: function() {
          if (el.length && el.height() < partner.height()) {
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
