angular.module('pokeApp')
  .controller('pokeController', function($scope, pokeService){

        pokeService.getMyData()
          .then( function(result){
            console.log(result);
            $scope.myData = result;
          });

  });
