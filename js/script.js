$(function() {
  var route = window.location.href.match('/([^.^/]+)[^/]*$')[1];
  console.log(route)


  $('.navbar-nav li').removeClass('active');
  $('.navbar-nav li#' + route).addClass('active');

});
