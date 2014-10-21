app.controller('OrderController', ['$scope', '$location', 'Item', 'Cart', 'Order',
  function($scope, $location, Item, Cart, Order) {
    $scope.person = {};
    // ng-model = person.name

    $scope.cartDetails = Cart.getCartItems();
    $scope.grandTotal = Cart.grandTotal;

    $scope.placeOrder = function() {
      // get peron's name
      Cart.buyItems(name);
    };

    // $scope.placeOrder = function() {
    //   // place order for items in cart & for person ng-model="name"
    //   $scope.order = new Order();
    //   $scope.order.person = $scope.name;
    //   $scope.order.cost = $scope.grandTotal;
    //   $scope.order.$save();
    //   for(var key in $scope.cartDetails) {
    //     $scope.cartDetails[key].item.$update();
    //   }
    // };

  }
]);