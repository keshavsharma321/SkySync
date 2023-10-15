myApp.controller("LoginController", [
    "$scope",
    "$state",
    "$http",
    function ($scope, $state) {
        $scope.showemail = true;
            $scope.showpassword= false;
      $scope.next = function(){
       // var data = {
        //     email: $scope.email,
        //   };
        // console.log(data);
        // $http({
        //     method: "POST",
        //     url: "https://10.21.87.196:8000/api/register/",
        //     data: data,
        //     withCredentials: true,
        //   }).then(
        //     function (response) {
        //       console.log("Data sent", response.data);
        //       $scope.showemail=false,
        //       $scope.showpassword= true,
        //     },
        //     function (error) {
        //       console.error("Error in Login", error);
        //     }
        //   );
        $scope.showemail=false,
        $scope.showpassword= true
          }
      $scope.login = function(){
        // var data = {
        //     password: $scope.password,
        //   };
        // console.log(data);
        // $http({
        //     method: "POST",
        //     url: "https://10.21.87.196:8000/api/register/",
        //     data: data,
        //     withCredentials: true,
        //   }).then(
        //     function (response) {
        //       console.log("Data sent", response.data);
        //       $state.go("Drive")
        //     },
        //     function (error) {
        //       console.error("Error in Login", error);
        //     }
        //   );
        $state.go("Drive")
      }
    },
  ]);
