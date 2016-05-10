'use strict';

angular.module('myApp.about', [
  'ngComponentRouter'
])

.component('about', {
  templateUrl: 'components/about/about.html',
  controller: AboutController
});


function AboutController() {
	var $ctrl = this;

	$ctrl.model = {
		name: 'Henry Gale',
		email: 'magician@oz.net',
		age: 13
	}

	$ctrl.submitted = false;

	$ctrl.onSubmit = function () {
		this.submitted = true;
	}
}