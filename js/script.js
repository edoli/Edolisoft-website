$(function() {
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

  $("#content").load('html/' + route + '.html');
});
