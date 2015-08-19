(function(){
	
	'use strict';
	
	angular
		.module('app.pages.itemList')
		.directive('itemListDirective', ItemListDirective);

	ItemListDirective.$inject =
		['$location'];
	
	function ItemListDirective($location){
		
		var directive = {
			scope: false,
			restrict: 'A',
    			link : link
		};

		return directive;
		
		function link(scope, elem, attrs, ctrl){
			
		}
	}
})();