// route to get an item
app.factory('Item', function($resource) {
  return $resource(
    'items/:id',
    {id: '@id'},
    {post: {method: 'POST'}}
  );
});