myApp.controller('Registration2Controller', function($scope, $state ) {
  
    $scope.next3 = function() {
      $state.go("Register3");
    };
  });
  