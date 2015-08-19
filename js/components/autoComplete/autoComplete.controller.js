(function(){
	
	'use strict';
	
	angular
		.module('app.components.autoComplete')
		.controller('AutoCompleteController', AutoCompleteController);

	AutoCompleteController.$inject =
		['AutoCompleteService'];
	
	function AutoCompleteController(AutoCompleteService){
		
		var self = this;

		self.getSuggest  = getSuggest;

		function getSuggest(controllerCallback){
			function serviceCallback(serviceResult){
				// do somthing
				controllerCallback.call(this, serviceResult);
			}

			AutoCompleteService.getResult(param1, param2, serviceCallback);
		}

	}
})();


