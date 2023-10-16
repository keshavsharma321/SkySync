myApp.controller('Registration1Controller', function($scope,$state) {
    $scope.next2 = function() {
        // $http
        // .get("")
        // .then(function (response) {
        //   $scope.departments = response.data;
        //   console.log($scope.months);
        // })
        // .catch(function (error) {
        //   console.error("Error fetching months: " + error);
        // });
        // $http
        // .get("")
        // .then(function (response) {
        //   $scope.departments = response.data;
        //   console.log($scope.Gender);
        // })
        // .catch(function (error) {
        //   console.error("Error fetching Gender: " + error);
        // });  
      $state.go("Register2")
    };
  });