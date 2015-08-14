(function () {
  var app = angular.module('RtmaApp.Theme', ['ngMaterial']);
  app.config(function ($mdThemingProvider) {
    $mdThemingProvider.theme('default')
      .primaryPalette('lime', {
        'default': '400',
        'hue-1': '100',
        'hue-2': '600',
        'hue-3': 'A100'
      })
      .accentPalette('purple', {
        'default': '200'
      });
  });
})();