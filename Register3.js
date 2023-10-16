myApp.controller(
  "Registration3Controller",
  function ($scope,$state, ) {
    $scope.drive = function () {
      
      $state.go("Register4");
    };
  }
);
