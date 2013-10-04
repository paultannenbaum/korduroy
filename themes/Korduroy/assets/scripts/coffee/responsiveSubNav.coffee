jQuery ->

  KTV = KTV or {}

  KTV.responsiveSubNav = do ->
    #private
    el = $('.horizontal-sub-nav').find('.list-container');
    breakpoint = 768

    setTitle = ->
      switch true
        when !!($("#body.shows-page").length) then "Select Channel:"
        when !!($("#body.about-page").length) then "About Us:"
        else 'Main Menu:'

    setResponsiveNav = ->
      el.menutron({
        maxScreenWidth: breakpoint,
        menuTitle: setTitle()
      });


    # public:
    init: ->
      if (el.length)
        setResponsiveNav()

  KTV.responsiveSubNav.init()