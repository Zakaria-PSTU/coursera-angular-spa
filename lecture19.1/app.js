(function(){
  'use restrict'

  angular.module('ControllerAsApp',[])
  .controller('ParentController1',ParentController1)
  .controller('ChildController1',ChildController1)
  .controller('ParentController2',ParentController2)
  .controller('ChildController2',ChildController2);

  ParentController1.inject = ['$scope'];
  function ParentController1($scope){
    $scope.parentValue = 1;
    $scope.pc = this;
    $scope.pc.parentValue = 1;
  }

  ChildController1.inject = ['$scope'];
  function ChildController1($scope){
  //  console.log("$scope.parentValue",$scope.parentValue);
  //  console.log("Child scope",$scope);
   //
  //   $scope.parentValue = 5;
  //   console.log("$scope.parentValue",$scope.parentValue);
  //   console.log("Child scope",$scope);
   //
  //   console.log("$scope.pc.parentValue",$scope.pc.parentValue);
  //   $scope.pc.parentValue = 5;
  //   console.log("$scope.pc.parentValue",$scope.parentValue);
  //   console.log("Child scope",$scope);
  //   console.log("$scope.$parent.parentValue",$scope.$parent.parentValue);
  }

    // Controller as syntax
    function ParentController2(){
      var parent = this;
      parent.value = 1;
    }

  ChildController1.inject = ['$scope'];
    function ChildController2($scope){
      var child = this;
      child.value = 5;
     console.log("Child controller scope",$scope);
   }
})()
