myApp.controller('Registration4Controller', function($scope,$state ,$http, RegistrationService) {
    $scope.verify = function() {
      var email = { email: $scope.recoveryemail}
      console.log(email)
      $http({
        method: "POST",
        url: "https://10.21.82.31:8000/api/verify/",
        data: email,
        withCredentials: true,
      }).then(
        function (response) {
          console.log("Login Successful", response.data);
        },
        function (error) {
          console.error("Login failed", error);
        })
    };
    $scope.next4 = function(){
      var firstname = RegistrationService.getfirstname();
      var lastname = RegistrationService.getlastname();
      var month = RegistrationService.getmonth();
      var date = RegistrationService.getdate();
      var year = RegistrationService.getyear();
      var gender = RegistrationService.getgender();
      var email = RegistrationService.getemail();
      var phone = RegistrationService.getphone();
      var gender = RegistrationService.getgender();
      var password = RegistrationService.getpassword();
      var recoveryemail = $scope.recoveryemail;
      var code = $scope.Code;

      var data = {
        first_name: firstname,
        last_name: lastname,
        month: month,
        date: date,
        year: year,
        gender: gender,
        username: email,
        recoveryemail :recoveryemail,
        phone: phone,
        password: password,
        recoveryemail : recoveryemail,
        code: code,
      };
      console.log(data);
      $http({
        method: "POST",
        url: "https://10.21.82.31:8000/api/user_registration/",
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