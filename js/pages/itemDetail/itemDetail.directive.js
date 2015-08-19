(function(){
	
	'use strict';
	
	angular
		.module('app.pages.itemDetail')
		.directive('itemDetailDirective', ItemDetailDirective);

	ItemDetailDirective.$inject =
		[];
	
	function ItemDetailDirective(){
		
		var directive = {
			scope: false,
			restrict: 'A',
			link : link
		};

		return directive;
		
		function link(scope, elem, attrs, ctrl){
			
			scope.setImage = setImage;

			function setImage(imageUrl) {
				scope.idCtrl.mainImageUrl = imageUrl;
			}
		}
	}
})();