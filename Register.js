myApp.controller('RegistrationController', function($scope, $state,$http , RegistrationService) {
  $http
  .get("https://10.21.81.127:8000/api/options/?type=title")
  .then(function (response) {
    $scope.titles = response.data;
    console.log($scope.titles);
  })
  .catch(function (error) {
    console.error("Error fetching Gender: " + error);
  }); 


  $scope.user = {};
  $scope.next1 = function() {
    RegistrationService.setfirst_name($scope.first_name);
    RegistrationService.setlast_name($scope.last_name);
    $state.go("Register1")
  };
});