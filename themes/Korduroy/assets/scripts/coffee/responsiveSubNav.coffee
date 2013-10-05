jQuery ->

  KTV = KTV or {}

  KTV.responsiveSubNav = do ->
    #private
    leftEl = $('.aside-container')
    topEl = $('.horizontal-sub-nav')
    leftSubNav = null
    topSubNav = null
    topHeader = null
    navState = null
    navClone = null
    breakpoint = 768 # TODO: Should be replaced with a global breakpoint


    hasLeftNav = ->
      leftSubNav = leftEl.find('.aside-navigation')
      return !!(leftSubNav.length)

    hasTopNav = ->
      topSubNav = topEl.find('.list-container')
      topHeader = topEl.find('.sub-nav-heading')
      return !!(topSubNav.length)

    setNavState = ->
      navClone.hide() if navClone
      topSubNav.show()

      if $(window).width() > breakpoint and navState isnt 'normal'
        navState = 'normal'
        topHeader.show()
      else
        navState = 'enhanced'
        topHeader.hide()
      return navState

    watchNav = ->
      $(window).resize(setNavState)

    cloneLeftIntoTop = ->
      navClone = leftSubNav.find('ul').first().clone().addClass('cloned');
      cloneContainer = $('<div class="list-container"></div>')

      cloneContainer.insertAfter(topEl.find('.heading-container'))
      navClone.appendTo(cloneContainer)

    setTitle = ->
      switch true
        when !!($("#body.shows-page").length) then "Select Channel:"
        when !!($("#body.blog-page").length) then "Blog Categories:"
        when !!($("#body.about-page").length) then "About Us:"
        when !!($("#body.tag-page").length) then "Popular Tags:"
        when !!($("#body.links-page").length) then "Link Categories:"
        else 'Menu:'

    setResponsiveNav = ->
      topSubNav.menutron({
        maxScreenWidth: breakpoint,
        menuTitle: setTitle()
      });
      setNavState()


    # public:
    init: ->
      cloneLeftIntoTop() if hasLeftNav()
      setResponsiveNav() if hasTopNav()
      watchNav() if hasTopNav()


  KTV.responsiveSubNav.init()