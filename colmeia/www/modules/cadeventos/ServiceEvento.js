(function () {
	'use strict';

	angular
		.module('colmeia')
		.service('ServiceEvento', ServiceEvento);


	/* @ngInject */
	function ServiceEvento($http) {

		var vm = this;

		vm.carregarTipo = function carregarTipo() {
			return $http.get('dados/tipoEvento.json');
		};

		vm.carregarItem = function carregarItem() {
			return $http.get('dados/itens.json');
		};

		vm.carregarPresentes = function carregarItem() {
			return $http.get('dados/presentes.json');
		};

		vm.carregarConvidado = function carregarConvidado() {
			return $http.get('dados/convidados.json');
		};
 
	}
})();