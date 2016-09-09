angular.module('filterApp')
  .controller('mainController', function($scope, appService){

    $scope.myData = appService.getMyData();

  });
