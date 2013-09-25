# My version doesn't feel right
#jQuery ->
#
#  KTV = KTV or {}
#
#  KTV.stickySidebar = do ->
#    #private
#    viewPort = $(document)
#    container = $('.content-container')
#    el = $('.aside-navigation')
#    viewPortTop = null
#
#    lowerPadding = 30
#    upperBound = el.offset().top
#    lowerBound = container.offset().top + container.height() - lowerPadding - el.height()
#
#    # Functions to check where the sidebar is
#    sideBarReachesTop = ->
#      viewPortTop < upperBound
#    siBarIsBetween = ->
#      viewPortTop > upperBound && viewPortTop < lowerBound
#    sideBarReachesBottom = ->
#      viewPortTop > lowerBound
#
#    positionSidebar = (state) ->
#      switch state
#        when 'top' then el.css({ position: 'static', marginTop: 0 })
#        when 'fixed' then el.css({ position: 'fixed', marginTop: 0, top: 0 })
#        when 'bottom' then el.css({ position: 'static', marginTop: container.height() - el.height() - lowerPadding })
#        else console.log("Hmmmmmm, shouldn't be landing here")
#
#    stickyNav = ->
#      viewPortTop = viewPort.scrollTop();
#      switch true
#        when sideBarReachesTop() then positionSidebar('top')
#        when siBarIsBetween() then positionSidebar('fixed')
#        when sideBarReachesBottom() then positionSidebar('bottom')
#        else console.log("Hmmmmmm, shouldn't be landing here")
#
#    # public:
#    init: ->
#      if (el.length)
#        viewPort.on('scroll', stickyNav)
#
#  KTV.stickySidebar.init()

# Option 3, Plugin version
jQuery ->

  KTV = KTV or {}

  KTV.stickySidebar = do ->
    #private
    el = $('.aside-navigation')
    partner = $('.main-container')

    # public:
    init: ->
      if (el.length && el.height() < partner.height())
        el.stick_in_parent()

  KTV.stickySidebar.init()
