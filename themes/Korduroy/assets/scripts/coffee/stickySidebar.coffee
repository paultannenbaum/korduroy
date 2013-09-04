jQuery ->

  KTV = KTV or {}

  KTV.stickySidebar = do ->
    #private
    asideNav = $('.aside-navigation')
    window = $('#page-wrap')
    offsetTop = asideNav.offset().top
    stickyNav = ->
      if (window.scrollTop() > offsetTop)
        asideNav.stop().css({ marginTop: window.scrollTop() - offsetTop + 15 })
      else
        asideNav.stop().css({ marginTop: 0 })

    # public:
    init: ->
      if (asideNav.length)
        window.on('scroll', stickyNav)

  KTV.stickySidebar.init()

