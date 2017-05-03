(function () {
	'use strict';

	angular.module('colmeia').provider("util", function () {
		
		this.$get = function ($timeout) {
			return {

				calcularIdade : function calcularIdade(milliseconds) {
					var dataNasc = new Date(milliseconds),
						anoAniversario = dataNasc.getFullYear(),
						mesAniversario = dataNasc.getMonth() + 1,
						diaAniversario = dataNasc.getDate();

					var	dataAtual = new Date(),
				        anoAtual = dataAtual.getFullYear(),
				        mesAtual = dataAtual.getMonth() + 1,
				        diaAtual = dataAtual.getDate();

				    var quantosAnos = anoAtual - anoAniversario;

				    if (mesAtual < mesAniversario || mesAtual == mesAniversario && diaAtual < diaAniversario) {
				        quantosAnos--;
				    }

				    return quantosAnos < 0 ? 0 : quantosAnos;
				},

				iniciarPickadate : function iniciarPickadate(seletor) {
					$(seletor).pickadate({
						format: 'dd/mm/yyyy',
						clear: 'Limpar',
					    close: 'Fechar',
					    labelMonthNext: 'Mês seguinte',
					    labelMonthPrev: 'Mês anterior',
					    labelMonthSelect: 'Selecione um mês',
					    labelYearSelect: 'Selecione um ano',
					    monthsFull: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
					    monthsShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
					    today: 'Hoje',
					    weekdaysFull: ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'],
					    weekdaysLetter: ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'],
					    weekdaysShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'],
					    selectMonths: true,
					    selectYears: 15
				    });
				},

				iniciarCombo : function iniciarCombo(seletor){
					$timeout(function() {
						$(seletor).material_select();
					});
				},

				iniciarAccordion : function iniciarAccordion (seletor){
                    $(seletor).collapsible({
                        accordion: false, // A setting that changes the collapsible behavior to expandable instead of the default accordion style
                        onOpen: function(el) {
                        }, // Callback for Collapsible open
                        onClose: function(el) {
                        } // Callback for Collapsible close
                    });
                },
                iniciarToast : function iniciarToast (seletor) {
                    $(seletor).ready(function () {
                    $('.tooltipped').tooltip({
                    	delay: 0,
                        outDuration: 30
                    });
                    });
                },
                   iniciarsideNav : function iniciarsideNav (seletor) {
                    $(seletor).sideNav(
                        {
                            menuWidth: 300, // Default is 300
                            edge: 'left', // Choose the horizontal origin
                            closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
                            draggable: true // Choose whether you can drag to open on touch screens
                    });
                }
			};
		};
	});

})();