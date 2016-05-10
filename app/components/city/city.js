'use strict';


angular.module('myApp.city', ['myApp.stats'])
.component('city', {
  templateUrl: 'components/city/city.html',
  controller: CityController
});




function CityController( StatsFactory ) {
  var $ctrl = this;
  var id;

  this.$routerOnActivate = function(next, previous) {
    id = next.params.id;

    StatsFactory.getCityStats(id)
    .then( function(data) {
      var fitxes = data.fitxes;

      $ctrl.location = fitxes.cols.col.map(function (info) {
        return info.content;
      });

      $ctrl.info = fitxes.gg.g;
    });
  }
}