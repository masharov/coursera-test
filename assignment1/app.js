(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);
LunchCheckController.$inject = ['$scope'];

function LunchCheckController ($scope) {
  var PLEASE_ENTER_DATA_FIRST = "Please enter data first";
  var ENJOY = "Enjoy!";
  var TOO_MUCH = "Too much!";
  var comma = ',';
  var minDishes = 1;
  var maxDishes = 3;

  $scope.message = "";

  $scope.checkDishes = function() {
    if($scope.dishes == null || $scope.dishes.length == 0) {
      $scope.message = PLEASE_ENTER_DATA_FIRST;
    } else {
    handleValidValue();
    }
  };

  var handleValidValue = function() {
    var stringsArray = $scope.dishes.split(comma);
    var length = stringsArray.length;
    if(length >= minDishes && length <= maxDishes) {
      $scope.message = ENJOY;
    } else if(length > 3) {
      $scope.message = TOO_MUCH;
    }
  };
}
})();
