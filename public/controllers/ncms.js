'use strict';

/* jshint -W098 */
angular.module('mean.ncms').controller('NcmsController', ['$scope', 'Global', 'Ncms',
  function($scope, Global, Ncms) {
    $scope.global = Global;
    $scope.package = {
      name: 'ncms'
    };
  }
]);
