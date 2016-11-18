(function(){
  'use restrict'

  var shoppingList = [
    "Milk","Donuts","Cookies","Chocolate","Peanut Butter"
  ];

  angular.module('ShoppingListApp',[])
  .controller('ShoppingListController',ShoppingListController);

  ShoppingListController.$inject = ['$scope'];
  function ShoppingListController($scope){

    $scope.shoppingList = shoppingList;
  }

  })()
