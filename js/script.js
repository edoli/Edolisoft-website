$(function() {
  var lastRoute = '';

  var checkRoute = function () {
    var url = window.location.href;

    var route = '';
    var hashMatch = url.match('#(.+)$')
    if (hashMatch) {
      var hash = hashMatch[1];
      route = hash.match('/([^/^#]+)$')[1];
    }

    if (route == '') {
      route = 'main';
    }

    if (lastRoute == route) {
      return;
    }

    lastRoute = route;

    $("#content").load('html/' + route + '.html');
    $('.navbar-nav li').removeClass('active');
    $('.navbar-nav li#' + route).addClass('active');

  }

  checkRoute();
  $(window).on('hashchange', function (e) {
    checkRoute();
  });


});
