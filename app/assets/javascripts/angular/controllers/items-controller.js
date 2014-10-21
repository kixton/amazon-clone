app.controller('ItemsController', ['$scope', '$resource', 'Item',
  function($scope, $resource, Item) {
    $scope.items = Item.query();

    $scope.allItemsView = true;
    $scope.cartView = true;
    $scope.orderView = true;
    $scope.itemsInCart = []

    $scope.addToCart = function(item) {
      $scope.itemsInCart.push(item)
      console.log($scope.itemsInCart)
    }

    $scope.getTotal = function() {
      var total = 0;
      for (var i = 0; $scope.itemsInCart.length; i++) {
        total += $scope.itemsInCart[i];
        console.log(total)
      }
      return total;
    }
  }
]);