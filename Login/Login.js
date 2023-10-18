myApp.controller('LoginController', ['$scope','$state' ,'UserDataService', 
function ($scope,$state ,UserDataService) {
  $scope.next = function () {
    UserDataService.setEmail($scope.email);
    $state.go("Login1");
  };
}]);