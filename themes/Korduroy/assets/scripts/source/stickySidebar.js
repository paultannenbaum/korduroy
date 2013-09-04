//$(function() {
//
//  var KTV = KTV || {};
//
//  KTV.stickySidebar = (function() {
//    var module = {};
//
//    // Private
//    var asideNav = $('.aside-navigation'),
//        window = $(window),
//        offsetTop = asideNav.offset().top,
//        stickyNav = function() {
//          console.log("pants");
//          if (window.scrollTop() > offsetTop) {
//            console.log("sticky");
//            asideNav.stop().animate({ marginTop: window.scrollTop() - offsetTop + 14 });
//          } else {
//            console.log("not sticky");
//            asideNav.stop().animate({ marginTop: 0 });
//          }
//        };
//
//    module.init = function() {
//        $(document).scroll(function(){
//          console.log("pants");
//        });
//        alert("paul");
//    };
//
//    return module;
//  })();
//
//  KTV.stickySidebar.init();
//
//});