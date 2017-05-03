(function () {
  'use strict';
  angular
    .module('colmeia')
    .controller('ConvidadosController', ConvidadosController);

    function ConvidadosController(util, $location, $scope, $ionicModal, $ionicPopover, $timeout, ServiceConvidados, $ionicHistory, $stateParams, $state) {

        var vm = this;
        vm.convidados = [{}];
        vm.listConvidados = [{}];
        vm.convidados.checked = false;
        vm.frmEvento = $stateParams.cadeventosid;
        init();

    function init(){
        carregarConvidado();
    }

    function carregarConvidado() {
        ServiceConvidados.carregarConvidado().then(function mySucces(response) {
            vm.convidados = response.data;
        }, function myError(response) {
            console.log(response.statusText);
        });
    };

    vm.SelectAll = function SelectAll () {
        if (vm.listChek) {
            vm.listChek = true;
        } else {
            vm.listChek = false;
        }
        angular.forEach(vm.convidados, function (item) {
             vm.convidados.checked = vm.listChek;
        });

    };

    vm.voltar = function voltar(){
       console.log($stateParams.cadeventosid);
       console.log(vm.listconvidados);
       $state.go('app.cadeventos', {'listConvidados': vm.convidados, 'cadeventosid': true});
    };

    vm.home = function () {
      $location.path('/app/home');
    };
      
  }
})();
