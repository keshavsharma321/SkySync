myApp.controller('LoginController', ['$scope','$state' ,'UserDataService', 
function ($scope,$state ,UserDataService) {
  $scope.next = function () {
    if($scope.email == null){Swal.fire('Please enter valid Email')}else{
    UserDataService.setEmail($scope.email);
    $state.go("Login1");}
  };
}]);