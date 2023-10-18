myApp.controller(
  "Registration3Controller",
  function ($scope,$state, RegistrationService) {
    $scope.drive = function () {
      RegistrationService.setpassword($scope.password);
      $state.go("Register4");
    };
  }
);
