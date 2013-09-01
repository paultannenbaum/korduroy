//var KTV = KTV || {}; // Application Namespace
//KTV.about = (function($) {
//  var self = {};
//
//  var performDomLookups = function() {
//    self.container = $('#body.about-page');
//    self.subNav = $('.sub-nav', self.container);
//    self.panels = $('.about-panel', self.container);
//  };
//  var handleSubNavClick = function(e) {
//    var clickedTab = $(this),
//        associatedPanel = clickedTab.attr('href');
//
//    e.preventDefault();
//    self.panels.removeClass('hide').filter(associatedPanel).addClass('show');
//  };
//
//
//  var initDomEvents = function() {
//    self.container.delegate('.sub-nav-link', 'click', handleSubNavClick)
//  };
//
//
//  // Public
//  self.init = function() {
//    performDomLookups();
//    initDomEvents();
//  };
//
//  return self;
//
//})(jQuery);
//
//$(function() {
//  KTV.about.init();
//});
