(function(){
  'use restrict'
  angular.module('MsgApp',[])
  .controller('MsgController', MsgController);

  MsgController.$inject = ['$scope','$filter'];
  function MsgController($scope,$filter) {
    $scope.name = "zakaria";
    $scope.stateOfBeing = "hungry";

    $scope.sayMessage = function(){
      var msg = "say zakaria to eat healthy snacks at night!";
      var output = $filter('uppercase')(msg);
      return output;
    };
    $scope.feedZakaria = function(){
      $scope.stateOfBeing = "fed";
    }
  }

})();
