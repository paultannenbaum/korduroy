(function() {
  var KTV;

  KTV = KTV || {};

  KTV.moduleName = function(args) {
    var privateFun, _self;
    _self = {};
    privateFun = function() {};
    _self.init = function() {
      return console.log('hello Paul!');
    };
    return _self;
  };

  jQuery(function() {
    return KTV.moduleName.init;
  });

}).call(this);
