

app.factory('Cart', function() {
  var cart = {};

  // returns an object
  return {
    addToCart: function(item) {
      if ( cart[item.id] === undefined ) {
        cart[item.id] = {item: item, count: 1};
        item.quantity -= 1; 
        this.grandTotal += item.price;
      } else {
        cart[item.id].count += 1;
        item.quantity -= 1; 
        this.grandTotal += item.price;
      }
    },

    getCartItems: function() {
      return cart;
    },

    buyItems: function(name) {

    },

    grandTotal: 0

  };

});