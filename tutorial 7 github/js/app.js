var app = angular.module("myApp", [])


app.controller("RegisterController", function ($scope, $http, $httpParamSerializerJQLike) {

    $scope.pageClass = 'register';
$scope.register = function(username, fullname, password, email) {
   console.log("inside login function");
$http({
    method: 'POST',
    url : '',
    data: JSON.stringify({
             name: username,
             fullname:fullname,
 		     password: password,
                email: email

            }),
    contentType: "application/json"
}).success(function(sourcedata) {

   $scope.userName ="";
    $scope.password ="";
$scope.fullName="";
    $scope.email ="";
  
    $scope.msg ="User created successfully";
        })
}
    
$scope.update = function(username, fullname, password, email) {
   console.log("inside login function");
$http({  
    url :'https://api.mongolab.com/api/1/databases/aseproject/collections/users?apiKey=56jTCYNFDRT3b7ebHGJ_suJCl0CbM2OQ&q={"name":"'+username+'"}',
     method:'PUT',
    data: JSON.stringify({
        "$set":{
//                'name': username,
               'fullname':fullname,
 		'password': password,
                'email': email}

            }),
    contentType: "application/json"
}).success(function(sourcedata) {

   $scope.userName ="";
    $scope.password ="";
$scope.fullName="";
    $scope.email ="";
  
    $scope.msg ="User created successfully";
        })
}
});  