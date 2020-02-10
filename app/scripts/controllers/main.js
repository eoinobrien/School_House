'use strict';

/**
 * @ngdoc function
 * @name App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the App
 */
angular.module('school-house')
  .controller('MainCtrl', ['$location', '$scope', '$rootScope', 'metadataService', function ($location, $scope, $rootScope, $metadataService) {
    $scope.scrollTo = function (hash) {
        $location.hash(hash);
    };
  }]);
