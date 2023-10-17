myApp.controller('Registration2Controller', function($scope, $state , RegistrationService ) {
  
    $scope.next3 = function() {
      RegistrationService.setusername($scope.username);
      RegistrationService.setphone($scope.phone);
      $state.go("Register3");
    };
  });
  