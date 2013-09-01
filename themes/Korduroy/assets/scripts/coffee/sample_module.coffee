# Sample KTV Module using the revealing module pattern

KTV = KTV or {}

KTV.moduleName = (args) ->
  _self = {}

  # Private
  privateFun = () ->
    # do stuff

  #public
  _self.init = () ->
    # do stuff
    console.log('hello Paul!')

  return _self

jQuery ->
  KTV.moduleName.init