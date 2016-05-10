'use strict';


angular.module('myApp.cities', [
	'myApp.stats',
	'myApp.city'
])
.component('cities', {
  templateUrl: 'components/cities/cities.html',
  controller: CitiesController
});




function CitiesController( StatsFactory ) {
	var $ctrl = this;

	StatsFactory.getCities()
	.then( function(data) {
		$ctrl.cities = data.fitxes.v;
	});
}