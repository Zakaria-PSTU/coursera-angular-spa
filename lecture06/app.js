(function(){
  'use restrict'
  angular.module('NameCalculator',[])
  .controller('NameCalculatorController', function($scope){
    $scope.name = "";
    $scope.totalValue = 0;

    $scope.displayNumeric = function(){
      var totalNameValue = calculateNumericForString($scope.name);
      $scope.totalValue = totalNameValue;
    };

    function calculateNumericForString(value){
      var totalStringValue = 0;
      for (var i = 0; i < value.length; i++) {
        totalStringValue += value.charCodeAt(i);
      }
      return totalStringValue;
    };
  })

})();
