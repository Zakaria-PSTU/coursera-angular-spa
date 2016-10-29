(function(){
   'use strict'

    angular.module('myFirstApp',[])
    .controller('MyFirstController',function($scope){
          $scope.name = "zakaria";
          $scope.sayHello = function(){
            return "Hello Coursera!";
          }
    });
})();
