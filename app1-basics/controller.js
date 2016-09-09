angular.module('app1')
  .controller('mainCtrl', function($scope){

    $scope.clearText = function(){
      $scope.text = '';
    };
  });
