

app.factory('Cart', ['$resource', function($resource) {
  // returns an object
  var Order = $resource("/orders/:id", {id: "@id"});

  return {
    cart: {},
    grandTotal: 0,
    addToCart: function(item) {
      if ( this.cart[item.id] === undefined ) {
        this.cart[item.id] = {item: item, count: 1};
        item.quantity -= 1; 
        this.grandTotal += item.price;
      } else {
        this.cart[item.id].count += 1;
        item.quantity -= 1; 
        this.grandTotal += item.price;
      }
    },

    getCartItems: function() {
      return cart;
    },

    buyItems: function(name) {
      for (item in this.cart) {
        var itemBought = this.cart[item];
        console.log(item);
        console.log(this.cart[item]);
        // itemBought.item.$update();
      }

      var order = new Order({ person: name, cost: this.grandTotal });
      order.$save();
      this.cart = {};
    }

  };

}]);