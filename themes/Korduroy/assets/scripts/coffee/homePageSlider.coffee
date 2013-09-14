jQuery ->

  KTV = KTV or {}

  KTV.homePageSlider = do ->
    #private
    el = $('#featured-slider')
    sliderOptions = {
      arrowsNav: true
      arrowsNavAutoHide: false,
      fadeinLoadedSlide: false
      controlNavigationSpacing: 0
      controlNavigation: 'bullets'
      imageScaleMode: 'none'
      imageAlignCenter: false
      autoHeight: true
      transitionType: 'fade'
      usePreloader: false
      loop: false
      autoPlay: {
        enabled: true
        delay: 4000
      }
    }

    setSlider = ->
      $('.slide-1').find('.slide-desc').delay(1500).animate({ 'bottom': 0 })
      el.find('.slide').css('display', 'block')
      el.royalSlider(sliderOptions)

    setSliderEvents = ->
      currentSlide = null
      currentSlideDesc = null
      bottom = $('.slide-desc').eq(0).css('bottom')

      apiEl = el.data('royalSlider')

      apiEl.ev.on 'rsAfterSlideChange', ->
        # currentSlideDesc.css('bottom', bottom) if currentSlideDesc
        currentSlide = apiEl.currSlide.content
        currentSlideDesc = currentSlide.find('.slide-desc')

        currentSlideDesc.delay(1500).animate({ 'bottom': 0 })

    # public:
    init: ->
      setSlider()
      setSliderEvents()

  KTV.homePageSlider.init() if $('.home-page').length