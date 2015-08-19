(function(){
	
	'use strict';
	
	angular
		.module('app.components.autoComplete')
		.service('AutoCompleteService', AutoCompleteService);

	AutoCompleteService.$inject =
		[];
	
	function AutoCompleteService(){
		
		var self = this;

		self.restUrl = '/autoComplete';
		
		self.getResult = getResult;

		function getResult(param1, param2, callback){
			callback.call(this, []);
		}
	}
})();