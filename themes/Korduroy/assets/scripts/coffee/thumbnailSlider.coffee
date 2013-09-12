#jQuery ->
#
#  KTV = KTV or {}
#
#  KTV.thumbnailSlider = do ->
#    #private
#    el = $('.thumbnail-slider')
#
#    setListWidth = (list) ->
#      # assumes that all list items are equal width
#      thumbnails = list.find('.thumbnail')
#      currentThumbnailWidth = thumbnails.eq(0).width()
#
#      el.width(thumbnails.length * thumbnailWidth)
#
#      thumbnails.width("" + 1/thumbnails.length + "%")
#
#    setSliders = ->
#      el.each ->
#        setListWidth(el)
#
#    # public:
#    init: ->
#      setSliders()
#
#  KTV.thumbnailSlider.init() if $('.thumbnail-slider').length