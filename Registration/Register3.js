myApp.controller(
  "Registration3Controller",
  function ($scope,$state, RegistrationService) {
    $scope.drive = function () {
      if($scope.password == null||$scope.confirmpassword == null ){Swal.fire('Please enter all valid details')}else if($scope.password != $scope.confirmpassword){Swal.fire('Passwords should be Same')}else{ RegistrationService.setpassword($scope.password);
        $state.go("Register4");}
    };
  }
);
