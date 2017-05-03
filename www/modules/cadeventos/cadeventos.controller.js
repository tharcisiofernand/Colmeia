(function () {
  'use strict';
  angular
    .module('colmeia')
    .controller('CadeventosController', CadeventosController);

    function CadeventosController(util, $location, $scope, $state, $ionicModal, $ionicPopover, $timeout, ServiceEvento, $stateParams, $rootScope) {
        var vm = this;
        var sessao = $stateParams.cadeventosid;
        init();

    function init(){
    	console.log($stateParams.listConvidados);
    	carregarItens();
    	carregarTipo();
    	$('#comboItem').on('change', function(e){carregaritemSelecionado(e)});
    	$('#comboTipoEvento').on('change', function(e){carregartipoSelecionado(e)});
    	inicializaritens();
 		$(document).ready(function() {
   			 Materialize.updateTextFields();
  		});
  		vm.itemSelecionado = [];
		vm.tipoSelecionado = [];
    }

    function inicializaritens(){
    		if(sessao == null){
		        $rootScope.frmEvento = {};
		        $rootScope.frmEvento.item = [];
		        $rootScope.frmEvento.tipo = [];
		        vm.filtro = {};
		        vm.item = [{}];
			}
    }

  	function carregarTipo() {
		ServiceEvento.carregarTipo().then(function mySucces(response) {
	    	vm.tipo = response.data;
	    	util.iniciarCombo('#comboTipoEvento');
	    }, function myError(response) {
	        console.log(response.statusText);
	    });
	};

	function carregarItens() {
		
			ServiceEvento.carregarItem().then(function mySucces(response) {
		    	vm.item = response.data;
		    	util.iniciarCombo('#comboItem');
		    }, function myError(response) {
		        console.log(response.statusText);
		    });
	};


    vm.carregarListItens = function carregarListItens() {
        if(vm.itemSelecionado.data != null) {                
            $rootScope.frmEvento.item.push(vm.itemSelecionado.data);
        }
    };

    function carregaritemSelecionado (e) {
            vm.itemSelecionado.data = e.currentTarget.selectedOptions[0].label;
    };

    function carregartipoSelecionado (e) {
            vm.tipoSelecionado.data = e.currentTarget.selectedOptions[0].label;
            $rootScope.frmEvento.tipo.push(vm.tipoSelecionado.data);
            
            if(vm.tipoSelecionado.data == "Aniversário"){
				ServiceEvento.carregarPresentes().then(function mySucces(response) {
			    	vm.item = response.data;
			    	util.iniciarCombo('#comboItem');
			    }, function myError(response) {
			        console.log(response.statusText);
			    });

			}else{
				ServiceEvento.carregarItem().then(function mySucces(response) {
			    	vm.item = response.data;
			    	util.iniciarCombo('#comboItem');
			    }, function myError(response) {
			        console.log(response.statusText);
			    });
			}
    };

    vm.excluirListItens = function excluirListItens(item) {
        var index = vm.gridItens.data.indexOf(item.entity);
        $rootScope.frmEvento.data.splice(index, 1);
    };

    vm.viewConvidados = function viewConvidados(frmEvento){
    	$state.go("app.convidados", {'cadeventosid': frmEvento});
    	console.log($rootScope.frmEvento);
    }

    vm.home = function () {
      	$location.path('/app/home');
    };
      
  }
})();
