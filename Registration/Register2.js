myApp.controller('Registration2Controller', function($scope, $state , RegistrationService ) {
  
    $scope.next3 = function() {
      if($scope.username == null || $scope.phone == null){Swal.fire('Please enter all valid details')}else{
      RegistrationService.setusername($scope.username);
      RegistrationService.setphone($scope.phone);
      $state.go("Register3");}
    };
  });
  