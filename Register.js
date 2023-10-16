myApp.controller('RegistrationController', function($scope, $state) {
  $scope.user = {};

  $scope.next1 = function() {
    $state.go("Register1")
  };
});