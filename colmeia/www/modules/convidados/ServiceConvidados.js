(function () {
	'use strict';

	angular
		.module('colmeia')
		.service('ServiceConvidados', ServiceConvidados);


	/* @ngInject */
	function ServiceConvidados($http) {

		var vm = this;

		vm.carregarConvidado = function carregarConvidado() {
			return $http.get('dados/convidados.json');
		};
 
	}
})();