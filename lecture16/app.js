(function(){
  'use restrict'
  angular.module('BindingApp',[])
  .controller('BindingController', BindingController);

    BindingController.$inject = ['$scope'];
    function BindingController($scope) {
      $scope.firstName = "Mohammod";
      // $scope.fullName = "";

      $scope.showNumberOfWatchers = function(){
        console.log("# No of Watchers : ",$scope.$$watchersCount);
      };
      $scope.setFullName = function(){
          $scope.fullName = $scope.firstName + " " + "zakaria";
      };
      $scope.logFirstName = function(){
          console.log("First Name is : ",$scope.firstName);
      };
      $scope.logFullName = function(){
          console.log("Full Name is : ",$scope.fullName);
      };
      }

  })();
