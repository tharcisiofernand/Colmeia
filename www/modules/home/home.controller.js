(function () {
  'use strict';

  angular
    .module('colmeia')
    .config(['ChartJsProvider', function (ChartJsProvider) {
        // Configure all charts
        ChartJsProvider.setOptions({
          chartColors: ['#ffee58', '#9ccc65'],
          responsive: false
        });
        // Configure all line charts
        ChartJsProvider.setOptions('line', {
          showLines: true
        });
    }])
    .controller('HomeController', HomeController);


  HomeController.$inject = ['util', '$location', '$scope', "$ionicModal", "$ionicPopover", "$timeout"];
  
  function HomeController(util, $location, $scope, $ionicModal, $ionicPopover, $timeout) {
      var vm = this;

      vm.labels = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
      vm.series = ['Realizados', 'Participados'];
      vm.data = [
        [4, 3, 10, 8, 8, 6, 5, 4, 7, 3, 9, 5],
        [4, 7, 8, 15, 13, 6, 9, 4, 7, 6, 15, 7]
      ];
      $scope.onClick = function (points, evt) {
        console.log(points, evt);
      };
      vm.datasetOverride = [{ yAxisID: 'y-axis-1' }, { yAxisID: 'y-axis-2' }];
      vm.options = {
        scales: {
          yAxes: [
            {
              id: 'y-axis-1',
              type: 'linear',
              display: true,
              position: 'left'
            },
            {
              id: 'y-axis-2',
              type: 'linear',
              display: true,
              position: 'right'
            }
          ]
        }
      };
       
    vm.cadeventos = function () {
      $location.path('/app/cadeventos');
    };

    vm.home = function () {
      $location.path('/app/home');
    };
  }
})();
