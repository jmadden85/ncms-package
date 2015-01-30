'use strict';

// angular.module('mean.ncms', ['mean.system']).config(['$stateProvider', '$viewPathProvider',
//   function($stateProvider, $viewPathProvider) {
//     $viewPathProvider.override('system/views/index.html', 'ncms/views/index.html');
//     $stateProvider.state('ncms example page', {
//       url: '/ncms/example',
//       templateUrl: 'ncms/views/index.html'
//     });
//   }
// ]);

angular.module('mean.ncms').config(['$stateProvider',
  function($stateProvider) {
    // $viewPathProvider.override('system/views/index.html', 'ncms/views/index.html');
    $stateProvider.state('ncms example page', {
      url: '/ncms/example',
      templateUrl: 'ncms/views/index.html'
    });
  }
]);