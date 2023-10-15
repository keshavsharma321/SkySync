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
    function ($scope, $state , $http) {
    },
  ]);
