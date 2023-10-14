var myApp = angular.module("myApp", ["ui.router"]);

myApp.config(function ($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state("Home", {
      url: "/Home",
      templateUrl: "Home.html",
      controller: "HomeController",
    })
    .state("Register", {
        url: "/Register",
        templateUrl: "Registration.html",
        controller: "RegistrationController",
      })
      .state("Drive", {
        url: "/Drive",
        templateUrl: "Drive.html",
        controller: "DriveController",
      })
      .state("Login", {
        url: "/Login",
        templateUrl: "Login.html",
        controller: "LoginController",
      })

    
  $urlRouterProvider.otherwise("/Home");
});

myApp.controller("HomeController", [
    "$scope",
    "$state",
    "$http",
    function ($scope, $state) {
    },
  ]);

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
        $scope.shownameinfo = false;
        $scope.showbasicinfo = true;
        $scope.showphoneinfo = false;
        $scope.showpasswordinfo = false;
      }  
      $scope.next2 = function(){
        $scope.shownameinfo = false;
        $scope.showbasicinfo = false;
        $scope.showphoneinfo = true;
        $scope.showpasswordinfo = false;
      }  
      $scope.next3 = function(){
        $scope.shownameinfo = false;
        $scope.showbasicinfo = false;
        $scope.showphoneinfo = false;
        $scope.showpasswordinfo = true;
      }  
      $scope.drive = function(){
       $state.go("Login")
      }  
    },
  ]); 

  myApp.controller("LoginController", [
    "$scope",
    "$state",
    "$http",
    function ($scope, $state) {
      $scope.login = function(){
        $state.go("Drive")
      }
    },
  ]);
