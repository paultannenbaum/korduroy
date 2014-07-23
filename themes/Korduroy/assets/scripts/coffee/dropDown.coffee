jQuery ->

  KTV = KTV or {}

  KTV.dropDown = do ->
    #private
    el = $('.drop-down-list')

    hasDropDown = ->
      return !!(el.length)

    setListeners = ->
      el.on 'click', handleClick

    handleClick = ->
      debugger

    # public:
    init: ->
      setListeners() if hasDropDown()

  KTV.dropDown.init()