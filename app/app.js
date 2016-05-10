'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngComponentRouter',

  'myApp.about',
  'myApp.cities'
])
.value('$routerRootComponent', 'app')

.component('app', {
  templateUrl: 'app.html',
  $routeConfig: [
    {path: '/about', name: 'About', component: 'about', useAsDefault: true},
    {path: '/cities', name: 'Cities', component: 'cities' },
    {path: '/city/:id', name: 'City', component: 'city' }
  ]
});