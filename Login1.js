myApp.controller("Login1Controller", [
  "$scope",
  "$http",
  "$state",
  "UserDataService",
  function ($scope, $http,$state ,UserDataService) {
    $scope.login = function () {
      var email = UserDataService.getEmail();
      var password = $scope.password;

      var data = {
        email: email,
        password: password,
      };
      console.log(data);

        $http({
          method: "POST",
          url: "https://10.21.82.31:8000/api/login_view/",
          data: data,
          withCredentials: true,
        })
        .then(function (response) {
          console.log("Response from server:", response.data);
          $state.go("Drive");
        })
        .catch(function (error) {
          console.error("Error:", error);
        });

      UserDataService.clearData();
    };
  },
]);
