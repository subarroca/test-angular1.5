angular.module('myApp.stats', [
  'ngResource'
])
.factory('StatsFactory', function($http, $q) {
  var statsUrl = 'http://api.idescat.cat/emex/v1/nodes.json?tipus=mun';


  // getCities(): Observable<any> {
  //   return this.loadInfo();
  // }

  // getCityStats(id: string): Observable<any> {
  //   return this.http.get(`http://api.idescat.cat/emex/v1/geo/${id}.json`)
  //   .map((res) => res.json());
  // }

  // private loadInfo(): Observable<any> {
  //   if (!this.info$) {
  //     this.info$ = this.http.get(this.statsUrl)
  //     .map( (res) => res.json() );
  //   }

  //   return this.info$;
  // }



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