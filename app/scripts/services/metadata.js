'use strict';

angular.module("school-house").service("metadataService", ["$location", "$rootScope", function($location, $rootScope) {
  var self = this;

  // Set custom options or use provided fallback (default) options
  self.loadMetadata = function(metadata) {
    self.title = document.title = metadata.title || 'The School House, Castledermot';
    self.description = metadata.description || 'Accommodation in Casltedermot, Co. Kildare.';
    self.url = metadata.url || $location.absUrl();
    self.image = metadata.image || 'fallbackimage.jpg';
    self.ogpType = metadata.ogpType || 'website';
    self.twitterCard = metadata.twitterCard || 'summary_large_image';
    self.twitterSite = metadata.twitterSite || '@fallback_handle';
  };

  // Route change handler, sets the route's defined metadata
  $rootScope.$on('$routeChangeSuccess', function (event, newRoute) {
    self.loadMetadata(newRoute.metadata);
  });
}]);
