angular.module('myApp.stats', [
  'ngResource'
])
.factory('StatsFactory', function($http, $q) {
  var statsUrl = 'http://api.idescat.cat/emex/v1/nodes.json?tipus=mun';


  this.getCities = function () {
    var q = $q.defer();

    $http.get(statsUrl)
    .then(
      function(resp) {
        q.resolve(resp.data);
      },
      function(error) {
        q.reject(error);
      });

    return q.promise;
  }


  this.getCityStats = function (id) {
    var q = $q.defer();

    $http.get("http://api.idescat.cat/emex/v1/geo/" + id + ".json")
    .then(
      function(resp) {
        q.resolve(resp.data);
      },
      function(error) {
        q.reject(error);
      });

    return q.promise;
  }

  return this;
});