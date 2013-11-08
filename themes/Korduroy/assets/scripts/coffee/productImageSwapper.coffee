jQuery ->

  KTV = KTV or {}

  KTV.productImageSwapper = do ->
    #private
    container     = $('.product-images-container')
    featuredImage = $('.featured-product-image', container)
    thumbnails    = $('.thumbnails', container)

    handleThumbClick = ->
      thumbnails.on('click', '.product-thumb img', swapFeaturedImage)

    swapFeaturedImage = (e) ->
      e.preventDefault()
      featuredImage.attr('src', $(this).closest('a').attr('href'));

    # public:
    init: ->
      handleThumbClick()

  KTV.productImageSwapper.init() if $('.store-page.store-single').length