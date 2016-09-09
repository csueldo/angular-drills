angular.module('apiApp')
  .service('apiService', function($http){

    var baseUrl = 'http://swapi.co/api/people';

    this.getMyData =  function(){
      var promise = $http.get(baseUrl)
        .then(function(response){
          console.log(response);
          if(response.status === 200){
            console.log(response);
            return response.data.results;
          }
        });
        return promise;
      };
  });
