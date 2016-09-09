angular.module('pokeApp')
  .service('pokeService', function($http){

    var baseUrl = "http://pokeapi.co/api/v2/pokemon";

    this.getMyData = function(){
      var promise = $http.get(baseUrl)
        .then(function(response){
          console.log(response);
          if(response.status === 200){
          console.log(response);
            return response.data.results;
          }
        });
        console.log(promise);
        return promise;
    };


  });
