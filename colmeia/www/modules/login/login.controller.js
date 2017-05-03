(function () {
  'use strict';

  angular
    .module('colmeia')
    .controller('LoginController', LoginController);

  LoginController.$inject = ['$location'];

  function LoginController($location) {

    var vm = this;

    vm.username = 'Tharcisio'
    vm.password = '1408465'

    vm.login = function () {
      if (vm.username == 'Tharcisio' && vm.password == '1408465') {
        $location.path('/app/home');
        console.log('Logado')
      } else {
        console.log('Usuário e/ou senha incorreto(s)');
      }
    };

    vm.telaLeitor = function () {
      $location.path('/app/registro');
    };
  }
})();
