app.controller('ItemsController', ['$scope', '$location', 'Item', 'Cart',
  function($scope, $location, Item, Cart) {

    $scope.items = Item.query();
    $scope.totalItemsInCart = 0;


    $scope.checkout = function() {
      $location.path('/checkout');
    };

    $scope.addToCart = function(item) {
      Cart.addToCart(item);
      $scope.totalItemsInCart += 1;
    };

  }
]);