jQuery ->

  KTV = KTV or {}

  KTV.responsiveSubNav = do ->
    #private
    el = $('#ktv-sub-nav').find('nav');
    breakpoint = 768

    setTitle = ->
      switch true
        when !!($("#body.shows-page").length) then "Select Show:"
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