myApp.controller("DriveController", [
  "$scope",
  "$state",
  "$http",
  "$sce",
  function ($scope, $state, $http , $sce) {
    

    // $http({
    //   method: "GET",
    //   url: ip + 'api/profile_pic/',
    //   withCredentials: true,
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // }).then(
    //   function (Response) {
    //     console.log("User Data", Response.data);
    //     $scope.Users = Response.data;
             
    //     // 'https://ui-avatars.com/api/?background=random&name=Keshav+Sharma'
        
    //       $http({
    //         method: "GET",
    //         url: 'https://ui-avatars.com/',
    //         withCredentials: true,
    //         headers: {
    //           "Content-Type": "application/json",
    //         },
    //       }).then(
    //         function (Response) {
    //           console.log("Fetched Data", Response.data);
    //           $scope.images = Response.data;
    //           console.log(images);
    //         },
    //         function (Error) {
    //           console.error("Failed to fetch data", Error);
    //         }
    //       );

    //   },
    //   function (Error) {
    //     console.error("Failed to fetch data", Error);
    //   }
    // )
    

    $scope.ok = function(){
      $scope.showdrivecontent = true;
      $scope.shownestedcontent = false;
      
    }

    $scope.folder = function (id, file_name, folder_name) {
      console.log(id, file_name, folder_name);
    
      if (file_name == null) {
        var folder_name = folder_name;
        var data = { id: id };
        console.log(data);
    
        $http({
          method: "POST",
          url: ip + 'api/inside_folder/',
          withCredentials: true,
          data: data,
          headers: {
            "Content-Type": "application/json",
          },
        }).then(
          function (Response) {
            console.log("Fetched Data", Response.data);
            $scope.insidefolder = Response.data;
            console.log($scope.insidefolder);
            $scope.showdrivecontent = false;
            $scope.shownestedcontent = true;
          },
          function (Error) {
            console.error("Failed to fetch data", Error);
          }
        );
      } else {
        var file_name = file_name;



        $http({
          method: "GET",
          url: ip + 'api/media/' + file_name,
          withCredentials: true,
          responseType: "arraybuffer",
        }).then(
          function (response) {
            console.log("Pdf data fetched", response.data);

            var blob = new Blob([response.data], {
              type: "application",
            });
            var url = URL.createObjectURL(blob);

            $scope.pdfs = url;
            openpdf();
          },
          function (error) {
            console.log("Data not fetched", error);
          }
        );

      }
    };
    

     openpdf = function () {
      document.getElementById("photo").style.display = "block";
  };
  
  

    $scope.dots = function(){
    $http({
      method: "GET",
      url: ip + 'api/dots_panel/',
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
    )};



    $http({
      method: "GET",
      url: ip + 'api/left_panel/',
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
      url: ip + 'api/get_data/',
      withCredentials: true,
      headers: {
        "Content-Type": "application/json",
      },
    }).then(
      function (Response) {
        console.log("getdata",Response.data)
        $scope.files = Response.data;

      
        
      },
      function (Error) {
        console.error("Failed to fetch data", Error);
      }
    );

    $http({
      method: "GET",
      url: ip + 'api/get_data/',
      withCredentials: true,
      headers: {
        "Content-Type": "application/json",
      },
    }).then(
      function (Response) {
        console.log(Response.data)
        $scope.files = Response.data;

      
        
      },
      function (Error) {
        console.error("Failed to fetch data", Error);
      }
    );


    $http({
      method: "GET",
      url: ip + 'api/suggested/',
      withCredentials: true,
      headers: {
        "Content-Type": "application/json",
      },
    }).then(
      function (Response) {
        console.log(Response.data.files)
        $scope.suggested = Response.data.files;

        
        
      },
      function (Error) {
        console.error("Failed to fetch data", Error);
      }
    );

    $http({
      method: "GET",
      url: ip + 'api/right_panel/',
      withCredentials: true,
      headers: {
        "Content-Type": "application/json",
      },
    }).then(
      function (Response) {
        console.log("Fetched Data", Response.data);
        $scope.pixels = Response.data;
      },
      function (Error) {
        console.error("Failed to fetch data", Error);
      }
    );
    

    $scope.handleHeadingClick = function (option) {
      console.log(" clicked. option:", option);

      var data = option;
      console.log(data);
  
          if (data === "My Drive") {
            showdcontents();
          } else if (data === "Computers") {
            showccontents();
          } else if (data === "Shared With Me") {
            showshcontents();
          } else if (data === "Recent") {
            showrecontents();
          } else if (data === "Starred") {
            showstcontents();
          } else if (data === "Spam") {
            showspcontents();
          } else if (data === "Bin") {
            showbincontents();
          }else if (data === "Storage") {
            showstorcontents();
          }  else {
            console.error("error in response");
          }
        }
  $scope.showdrivecontent = true;    

  showdcontents = function(){
    $scope.showdrivecontent = true;
    $scope.showcomputerscontent = false;
    $scope.showsharedcontent = false;
    $scope.showrecentcontent = false;
    $scope.showstarredcontent = false;
    $scope.showspamcontent = false;
    $scope.showbincontent = false;
    $scope.showstoragecontent = false;
    } ;







// $scope.showuncolured1 = {}; 
// $scope.showcolured1 = {};  

// $scope.handleclick = function(id, starred) {
//   console.log(id, starred);

//   if (starred === false) {
//     var data = {
//       "id": id,
//       "star": "true",
//     };
//     console.log(data);
//     $http({
//       method: "POST",
//       url: ip + 'api/starred/',
//       data: data,
//       withCredentials: true,
//       headers: {
//         "Content-Type": "application/json",
//       },
//     }).then(
//       function (Response) {
//         console.log("Fetched Data", Response.data);
//         showcoloured(id);
//       },
//       function (Error) {
//         console.error("Failed to fetch data", Error);
//       }
//     );
//   } else {
//     var data = {
//       "id": id,
//       "star": "False",
//     };
//     console.log(data);
//     $http({
//       method: "POST",
//       url: ip + 'api/starred/',
//       data: data,
//       withCredentials: true,
//       headers: {
//         "Content-Type": "application/json",
//       },
//     }).then(
//       function (Response) {
//         console.log("Fetched Data", Response.data);

//         showuncoloured(id);
//       },
//       function (Error) {
//         console.error("Failed to fetch data", Error);
//       }
//     );
//   }
// }
// $scope.showcolured1[id] = true;
// function showcoloured(id) {
//   console.log(id);
//   $scope.showcolured1[id] = true;
//   $scope.showuncolured1[id]  = false;
// }

// function showuncoloured(id) {
//   console.log(id);
//   $scope.showcolured1[id] = false;
//   $scope.showuncolured1[id] = true;
// }


  showccontents = function(){
        $scope.showdrivecontent = false;
        $scope.showcomputerscontent = true;
        $scope.showsharedcontent = false;
        $scope.showrecentcontent = false;
        $scope.showstarredcontent = false;
        $scope.showspamcontent = false;
        $scope.showbincontent = false;
        $scope.showstoragecontent = false;
    } ;


    showshcontents = function(){
      $scope.showdrivecontent = false;
      $scope.showcomputerscontent = false;
      $scope.showsharedcontent = true;
      $scope.showrecentcontent = false;
      $scope.showstarredcontent = false;
      $scope.showspamcontent = false;
      $scope.showbincontent = false;
      $scope.showstoragecontent = false;

      $http({
        method: "GET",
        url: ip + 'api/shared_with_me/',
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      }).then(
        function (Response) {
          $scope.shared = Response.data;
          console.log($scope.shared);
          
        },
        function (Error) {
          console.error("Failed to fetch data", Error);
        }
      );

    } ;


    showrecontents = function(){
      $scope.showdrivecontent = false;
      $scope.showcomputerscontent = false;
      $scope.showsharedcontent = false;
      $scope.showrecentcontent = true;
      $scope.showstarredcontent = false;
      $scope.showspamcontent = false;
      $scope.showbincontent = false;
      $scope.showstoragecontent = false;

      $http({
        method: "GET",
        url: ip + 'api/recent/',
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      }).then(
        function (Response) {
          $scope.recents = Response.data;
          console.log($scope.recents);
          
        },
        function (Error) {
          console.error("Failed to fetch data", Error);
        }
      );
    };

    showstcontents = function(){
      $scope.showdrivecontent = false;
      $scope.showcomputerscontent = false;
      $scope.showsharedcontent = false;
      $scope.showrecentcontent = false;
      $scope.showstarredcontent = true;
      $scope.showspamcontent = false;
      $scope.showbincontent = false;
      $scope.showstoragecontent = false;

      $http({
        method: "GET",
        url: ip + 'api/starred/',
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      }).then(
        function (Response) {
          $scope.starred = Response.data;
          console.log($scope.starred);
          
        },
        function (Error) {
          console.error("Failed to fetch data", Error);
        }
      );
    };

    showspcontents = function(){
      $scope.showdrivecontent = false;
      $scope.showcomputerscontent = false;
      $scope.showsharedcontent = false;
      $scope.showrecentcontents = false;
      $scope.showstarredcontent = false;
      $scope.showspamcontent = true;
      $scope.showbincontent = false;
      $scope.showstoragecontent = false;

      
    } ;

    showbincontents = function(){
      $scope.showdrivecontent = false;
      $scope.showcomputerscontent = false;
      $scope.showsharedcontent = false;
      $scope.showrecentcontent = false;
      $scope.showstarredcontent = false;
      $scope.showspamcontent = false;
      $scope.showbincontent = true;
      $scope.showstoragecontent = false;

      $http({
        method: "GET",
        url: ip + 'api/bin/',
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      }).then(
        function (Response) {
          $scope.bins = Response.data;
          console.log($scope.bins);
          
        },
        function (Error) {
          console.error("Failed to fetch data", Error);
        }
      );

      
  };



  showstorcontents = function(){
    $scope.showdrivecontent = false;
    $scope.showcomputerscontent = false;
    $scope.showsharedcontent = false;
    $scope.showrecentcontent = false;
    $scope.showstarredcontent = false;
    $scope.showspamcontent = false;
    $scope.showbincontent = false;
    $scope.showstoragecontent = true;

    $http({
      method: "GET",
      url: ip + 'api/storage/',
      withCredentials: true,
      headers: {
        "Content-Type": "application/json",
      },
    }).then(
      function (Response) {
        $scope.storage = Response.data;
        
        $scope.width = '700px';
        $scope.bgColor = 'rgb(189, 189, 49)';
        
      },
      function (Error) {
        console.error("Failed to fetch data", Error);
      }
    );
}  ;               


   

    $scope.newFolderName = "";
  
    $scope.openNewFolderModal = function () {
        document.getElementById("newFolderModal").style.display = "block";
    };
    
    $scope.closeNewFolderModal = function () {
        document.getElementById("newFolderModal").style.display = "none";
    };

    $scope.closeshare = function () {
      document.getElementById("shared").style.display = "none";
  };

  $scope.closerename = function () {
    document.getElementById("rename").style.display = "none";
};

    
    $scope.createNewFolder = function () {
        var newFolderData = {
            new_folder: $scope.newFolderName
        };
        console.log(newFolderData);
        $http({
            method: "POST",
            url: ip + "/api/create_folder/", 
            data: newFolderData,
            withCredentials: true,
        })
        .then(
            function (response) {
                console.log("response", response.data);
                $scope.closeNewFolderModal()
                $scope.newFolderName = "";
                Swal.fire('New Folder Created')
                
                 
                
            },
            function (error) {
                console.error("error", error);
                Swal.fire('Invalid Data');
                
            }
        );
    };
    
    $scope.sendFile = function () {
        var file = document.getElementById("file").files[0];
        var formData = new FormData();
        formData.append('file', file);
    
        $http({
            method: "POST",
            url: ip + "/api/file_upload/",
            data: formData,
            headers: { 'Content-Type': undefined }, 
            withCredentials: true,
        })
        .then(
            function (response) {
                console.log("response", response);
                Swal.fire('File Sent');
                $scope.closeNewFolderModal();
            },
            function (error) {
                console.error("error", error);
                Swal.fire('Error In Uploading File');
            }
        );
    };
    
   $scope.RENAMED = function(id){
    $scope.rename = function(){
      var data = {
        id:id,
        rename : $scope.renamed,
      }
      console.log(data);
    $http({
      method: "POST",
      url: ip + "/api/rename/",
      data : data ,
      withCredentials : true,
    })
    .then(
      function(response){
        console.log("response", response);
        $scope.renamed = "";
        Swal.fire('File Renamed')
        $scope.closerename();
      },
      function (error) {
        console.error("error", error);
    }
    )
   }},


  $scope.bin = function(id){
    console.log(id);
    $scope.trash = function(){
      var data = {
        id : id , 
        bin : "in",
      }
      console.log(data);
      $http({
        method:"POST",
        url: ip + 'api/bin/',
        withCredentials: true,
        data : data,
      })
      .then(
        function(response){
          console.log("response",response.data)
          Swal.fire('Moved to Bin');
        },
        function(error){
          console.log("error",error);
        }
      )

    }
  },

  $scope.shared = function(id){
    console.log(id);
    var keep = id;
      $http({
        method:"GET",
        url: ip + 'api/share/',
        data: id,
        withCredentials: true,
      })
      .then(
        function(response){
          console.log("response",response.data)
          $scope.recieved = response.data;
        },
        function(error){
          console.log("error",error);
        }
      );

      $scope.Post = function(id){
        console.log(id);
        var share_to_id = id ;

        var data = {
                  share_to_id : share_to_id,
                  id: keep,
        }

        $http({
          method:"POST",
          url: ip + 'api/share/',
          data: data,
          withCredentials: true,
        })
        .then(
          function(response){
            console.log("response",response.data)
            $scope.recieved = response.data;
            $scope.closeshare();

          },
          function(error){
            console.log("error",error);
          }
        );
      }

    
  },

  $scope.Repet = function(id){
    console.log(id);
    $scope.Rest = function(){
      var data = {
        id : id , 
        bin : "out",
      }
      console.log(data);
      $http({
        method:"POST",
        url: ip + 'api/bin/',
        withCredentials: true,
        data : data,
      })
      .then(
        function(response){
          console.log("response",response.data)
          Swal.fire('File Restored');
        },
        function(error){
          console.log("error",error);
        }
      )

    }
  },

$scope.downloadFile = function (file_name) {
  $http({
    method: "GET",
    url: ip + 'api/media/' + file_name,
    responseType: 'arraybuffer', 
  })
  .then(
    function (Response) {
      console.log("Fetched", Response.data);
      $scope.triggerFileDownload(Response.data, file_name);
    },
    function (Error) {
      console.error("Failed to fetch data", Error);
    }
  );
};

$scope.triggerFileDownload = function (data, fileName) {
  var blob = new Blob([data], { type: "application/octet-stream" });
  var url = window.URL.createObjectURL(blob);

  
  var a = document.createElement("a");
  a.style.display = "none";
  a.href = url;
  a.download = fileName;

  document.body.appendChild(a);
  a.click();

  window.URL.revokeObjectURL(url);
};


  $scope.Delete = function(id){
    console.log(id);
    $scope.Dlt = function(){
      var data = {
        id : id , 
        bin : "permanent",
      }
      console.log(data);
      $http({
        method:"POST",
        url: ip + 'api/bin/',
        withCredentials: true,
        data : data,
      })
      .then(
        function(response){
          console.log("response",response.data)
          Swal.fire('Permanently Deleted');
        },
        function(error){
          console.log("error",error);
        }
      )

    }
  }
}
]);
