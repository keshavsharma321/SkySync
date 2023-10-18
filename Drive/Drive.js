myApp.controller("DriveController", [
    "$scope",
    "$state",
    "$http",
    function ($scope, $state , $http) {
      $http({
        method: "GET",
        url: "https://10.21.87.8:8000/api/image/",
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      }).then(
        function (Response) {
          console.log("Fetched Data", Response.data);
          $scope.images = Response.data;
        },
        function (Error) {
          console.error("Failed to fetch data", Error);
        }
      );
      $http({
        method: "GET",
        url: "https://10.21.87.8:8000/api/left_panel/",
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      }).then(
        function (Response) {
          console.log("Fetched Data", Response.data);
          $scope.panels = Response.data;
        },
        function (Error) {
          console.error("Failed to fetch data", Error);
        }
      );
      $http({
        method: "GET",
        url: "https://10.21.87.8:8000/api/right_panel/",
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      }).then(
        function (Response) {
          console.log("Fetched Data", Response.data);
          $scope.images = Response.data;
        },
        function (Error) {
          console.error("Failed to fetch data", Error);
        }
      );
      $http({
        method: "POST",
        url: "https://10.21.87.8:8000/api/file_upload/",
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      }).then(
        function (Response) {
          console.log("Fetched Data", Response.data);
          $scope.panels = Response.data;
        },
        function (Error) {
          console.error("Failed to fetch data", Error);
        }
      );
    },
  ]);