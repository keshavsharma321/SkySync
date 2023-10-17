myApp.controller('Registration1Controller', function($scope,$state ,$http,RegistrationService) {
  $http
  .get("https://10.21.81.127:8000/api/options/?type=gender")
  .then(function (response) {
    $scope.options = response.data;
    console.log($scope.options);
  })
  .catch(function (error) {
    console.error("Error fetching Gender: " + error);
  }); 
    $scope.next2 = function() { 
        RegistrationService.setmonth($scope.month);
        RegistrationService.setdate($scope.date);
        RegistrationService.setyear($scope.year);
        RegistrationService.setgender($scope.gender);
      $state.go("Register2")
    };
  });