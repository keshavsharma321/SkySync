myApp.controller('Registration4Controller', function($scope,$state ,$http, RegistrationService) {
    $scope.verify = function() {
  var data = {
       username : RegistrationService.getusername(),
       email :  $scope.recoveryemail }
      console.log(data)
      $http({
        method: "POST",
        url: "https://10.21.87.8:8000/api/verify/",
        data: data,
        withCredentials: true,
      }).then(
        function (response) {
          console.log("Login Successful", response.data);
        },
        function (error) {
          console.error("Login failed", error);
        })
    };
    $scope.code = function(){
     var data = {
      username : RegistrationService.getusername(),
      code : Number($scope.Code),
     };
     console.log(data);
      $http({
        method: "POST",
        url: "https://10.21.87.8:8000/api/verify/",
        data: data,
        withCredentials: true,
      })
      .then(function (response) {
        console.log("Response from server:", response.data);
      })
      .catch(function (error) {
        console.error("Error:", error);
      });
    };
    $scope.next4 = function(){
      var title = RegistrationService.title();
      var first_name = RegistrationService.getfirst_name();
      var last_name = RegistrationService.getlast_name();
      var month = RegistrationService.getmonth();
      var date = RegistrationService.getdate();
      var year = RegistrationService.getyear();
      var gender = RegistrationService.getgender();
      var username = RegistrationService.getusername();
      var phone = RegistrationService.getphone();
      var gender = RegistrationService.getgender();
      var password = RegistrationService.getpassword();
      var recoveryemail = $scope.recoveryemail;

      var data = {
        title : title,
        first_name: first_name,
        last_name: last_name,
        month: month,
        date: date,
        year: year,
        gender: gender,
        username: username,
        phone: phone,
        password: password,
        recovery_email : recoveryemail,
      };
      console.log(data);
      $http({
        method: "POST",
        url: "https://10.21.87.8:8000/api/user_registration/",
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


      RegistrationService.clearData();
    }
  });