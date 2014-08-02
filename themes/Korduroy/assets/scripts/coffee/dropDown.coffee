jQuery ->

  KTV = KTV or {}

  KTV.dropDown = do ->
    #private
    el = $('.drop-down-list')

    hasDropDown = ->
      return !!(el.length)

    setListeners = ->
      el.on('click', handleClick).children().on('click', preventBubbling)

    preventBubbling = (e) ->
      e.stopPropagation()

    handleClick = ->
      clickedDropDown = $(this)
      state = clickedDropDown.attr('data-state')

      switch state
        when 'open'   then clickedDropDown.attr('data-state', 'closed')
        when 'closed' then clickedDropDown.attr('data-state', 'open')

    # public:
    init: ->
      setListeners() if hasDropDown()

  KTV.dropDown.init()