(function(){
	
	'use strict';
	
	angular
		.module('app.components.autoComplete')
		.directive('autoCompleteDirective', AutoCompleteDirective);

	AutoCompleteDirective.$inject =
		[];
	
	function AutoCompleteDirective(){
		
		var directive = {
			scope: {
				attr1: '='
			},
			restrict: 'AE',
    			templateUrl: window.appConfig.projectStaticPath+'/templates/components/autoComplete/auto-complete.html',
    			controller : 'AutoCompleteController',
    			controllerAs : 'acCtrl',
    			link : link
		};

		return directive;
		
		function link(scope, elem, attrs, ctrl){
			
			scope.getSuggest = getSuggest;

			function getSuggest(){
				function controllerCallback(controllerResult){

				}

				ctrl.getSuggest(controllerCallback);
			};
		}
	}
})();