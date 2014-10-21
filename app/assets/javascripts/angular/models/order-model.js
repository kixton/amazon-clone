app.factory('Order', function($resource) {
  return $resource(
    'orders/:id',
    {id: '@id'}
    // {post: {method: 'POST'}}
  );
});