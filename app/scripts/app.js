'use strict';

/**
* @ngdoc overview
* @name App
* @description
* # App
*
* Main module of the application.
*/
angular
.module('school-house', [
  'ngAnimate',
  'ngAria',
  'ngCookies',
  'ngResource',
  'ngRoute',
  'ngSanitize',
  'ngTouch',
])
.config(function ($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'views/main.html',
    controller: 'MainCtrl',
    controllerAs: 'main',
    metadata: {
      title: 'Bed & Breakfast | The School House, Castledermot',
      description: 'Bed &amp; Breakfast at The School House. Available to Book now' }
    })
    .otherwise({
      redirectTo: '/'
    });
  })
  .controller('BaseCtrl', ['$location', '$scope', "metadataService", function($location, $scope){
    $scope.isActive = function (viewLocation) {
        return viewLocation === $location.path();
    };
  }]);
