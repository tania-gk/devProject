var coursomaticApp = angular.module("coursomaticApp", []);

var loginCtrl = coursomaticApp.controller('loginCtrl', function($scope, $http) {

  function task(newObject) {
    this.firstName = newObject.firstName;
    this.lastName = newObject.lastName;
    this.phone = newObject.phone;
    this.city = newObject.city;
    this.email = newObject.email;
    this.password = newObject.password;
  }


  $http.get("users.json").then(function(response) {
      $scope.users = [];
      for (var i = 0; i < response.data.length; i++) {
        $scope.users.push(new task(response.data[i]));
      }
    },
    function(response) {
      console.log("Failed to initiate JSON:" + response.statusText);
    }
  );

});