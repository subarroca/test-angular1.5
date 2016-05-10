'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngComponentRouter',
  'pascalprecht.translate',

  'myApp.about',
  'myApp.cities'
])
.value('$routerRootComponent', 'app')

.config(function ($translateProvider) {
  $translateProvider.useStaticFilesLoader({
    prefix: 'i18n/',
    suffix: '.json'
  })
  .registerAvailableLanguageKeys(['en', 'ca', 'es'])
  .preferredLanguage('en')
  .determinePreferredLanguage();
})

.component('app', {
  templateUrl: 'app.html',
  controller: AppController,
  $routeConfig: [
    {path: '/about', name: 'About', component: 'about', useAsDefault: true},
    {path: '/cities', name: 'Cities', component: 'cities' },
    {path: '/city/:id', name: 'City', component: 'city' }
  ]
});


function AppController($translate) {
  var $ctrl = this;

  $ctrl.name = 'Mr Marshall';



  $ctrl.setLang = function (lang) {
    $ctrl.lang = /(ca|es|en)/gi.test(lang) ? lang : 'en';
    $translate.use(this.lang);
  }
}