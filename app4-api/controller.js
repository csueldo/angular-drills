angular.module('apiApp')
  .controller('apiController', function($scope, apiService){

    apiService.getMyData()
      .then(function(result){
        console.log(result);
        $scope.myData = result;
      });

  });
