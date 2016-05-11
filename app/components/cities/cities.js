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

	var currentColorIndex = -1;
	var colors = ['transparent', 'wheat'];


	function init (){
		$ctrl.changeStyle();

		console.time('loadCities');

		StatsFactory.getCities()
		.then( function(data) {
			console.time('renderCities');
			$ctrl.cities = data.fitxes.v;
			console.timeEnd('loadCities');

			console.log(data.fitxes.v[0]);

			setTimeout(
				function(){
					console.timeEnd('renderCities');
				}
			);
		});
	}


	$ctrl.onInputChanged = function() {
		console.time('inputChange');

		setTimeout(
			function(){
				console.timeEnd('inputChange');
			}
		);
	}


	$ctrl.changeStyle = function(){
		console.time('styleChange');

		currentColorIndex = (currentColorIndex + 1) % colors.length;
		$ctrl.currentColor = colors[currentColorIndex];

		setTimeout(
			function(){
				console.timeEnd('styleChange');
			}
		);
	}



	init();
}