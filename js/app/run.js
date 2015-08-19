(function(){
	
	'use strict';
	
	angular
		.module('app')
		.run(runBlock);
		
	runBlock.$inject = 
		['$rootScope'];

	function runBlock($rootScope) {
		// do something
	}
})();