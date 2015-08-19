(function(){
	
	'use strict';
	
	angular
		.module('app.pages.itemDetail')
		.controller('ItemDetailController', ItemDetailController)
		.filter('checkmark', checkmark);

	ItemDetailController.$inject =
		['$routeParams', 'ItemDetailService'];
	
	function ItemDetailController($routeParams, ItemDetailService){
		
		var self = this;

		self.item = {};

		self.mainImageUrl = '';

		ItemDetailService.getDetail($routeParams.pid, serviceCallback);

		function serviceCallback(serviceResult){
			self.item = serviceResult;
			self.mainImageUrl = serviceResult.images[0];
		}
	}

	function checkmark() {
		return function(input) {
			return input ? '\u2713' : '\u2718';
		};
	}
})();


