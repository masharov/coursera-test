(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var toBuy = this;
  toBuy.items = ShoppingListCheckOffService.getToBuyItems();

  toBuy.buyItem = function(index) {
    ShoppingListCheckOffService.buyItem(index);
  };
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var alreadyBought = this;
  alreadyBought.items = ShoppingListCheckOffService.getAlreadyBoughtItems();
}

function ShoppingListCheckOffService() {
  var service = this;
  var toBuyItems = [
    {
      name: "Cookies",
      quantity: 10
    },
    {
      name: "Candies",
      quantity: 20
    },
    {
      name: "Milk",
      quantity: 2
    },
    {
      name: "Oranges",
      quantity: 3
    },
    {
      name: "Tomatoes",
      quantity: 7
    }
  ];
  var alreadyBoughtItems = [];

  service.getToBuyItems = function() {
    return toBuyItems;
  };

  service.getAlreadyBoughtItems = function() {
    return alreadyBoughtItems;
  };

  service.buyItem = function(index) {
    var item = toBuyItems[index];
    toBuyItems.splice(index, 1);
    alreadyBoughtItems.push(item);
  };
}

})();
