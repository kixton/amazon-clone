app.controller('OrderController', ['$scope', '$location', 'Item', 'Cart',
  function($scope, $location, Item, Cart) {
    $scope.person = {};

    $scope.cartDetails = Cart.cart;
    // $scope.cartDetails = Cart.getCartItems();
    console.log($scope.cartDetails);

    $scope.grandTotal = Cart.grandTotal;

    $scope.placeOrder = function() {
      // get peron's name
      Cart.buyItems($scope.person.name);
      $location.path("/");
    };

  }
]);