
myApp.controller("RegistrationController", [
    "$scope",
    "$state",
    "$http",
    function ($scope, $state , $http) { 
     
        $scope.shownameinfo = true;
        $scope.showbasicinfo = false
        $scope.showphoneinfo = false;
        $scope.showpasswordinfo = false;
      
      $scope.next1 = function(){
        // 
        // var data = {
        //     first_name: $scope.first_name,
        //     last_name: $scope.last_name,
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
        //       $scope.shownameinfo = false;
        //       $scope.showbasicinfo = true;
        //       $scope.showphoneinfo = false;
        //       $scope.showpasswordinfo = false;
        //     },
        //     function (error) {
        //       console.error("Error in Registration", error);
        //     }
        //   );
        $scope.shownameinfo = false;
        $scope.showbasicinfo = true;
        $scope.showphoneinfo = false;
        $scope.showpasswordinfo = false;
      }  
      $scope.next2 = function(){
        // var data = {
        //     month: $scope.month,
        //     date: $scope.date,
        //     year : $scope.year,
        //     gender: $scope.gender,
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
        //       $scope.shownameinfo = false;
        //       $scope.showbasicinfo = false;
        //       $scope.showphoneinfo = true;
        //       $scope.showpasswordinfo = false;
        //     },
        //     function (error) {
        //       console.error("Error in Registration", error);
        //     }
        //   );
        $scope.shownameinfo = false;
        $scope.showbasicinfo = false;
        $scope.showphoneinfo = true;
        $scope.showpasswordinfo = false;
      }  
      $scope.next3 = function(){
        // var data = {
        //     email: $scope.email,
        //     phone: $scope.phone,
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
        //       $scope.shownameinfo = false;
        //       $scope.showbasicinfo = false;
        //       $scope.showphoneinfo = false;
        //       $scope.showpasswordinfo = true;
        //     },
        //     function (error) {
        //       console.error("Error in Registration", error);
        //     }
        //   );
        $scope.shownameinfo = false;
        $scope.showbasicinfo = false;
        $scope.showphoneinfo = false;
        $scope.showpasswordinfo = true;
      }  
      $scope.drive = function(){
        // var data = {
        //     password: $scope.password,
        //     confirmpassword: $scope.confirmpassword,
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
        //       $state.go("Login")
        //     },
        //     function (error) {
        //       console.error("Error in Registration", error);
        //     }
        //   );
       $state.go("Drive")
      }  
    },
  ]); 
