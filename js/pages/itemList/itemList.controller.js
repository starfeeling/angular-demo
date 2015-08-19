(function(){
	
	'use strict';
	
	angular
		.module('app.pages.itemList')
		.controller('ItemListController', ItemListController);

	ItemListController.$inject =
		['$routeParams', 'ItemListService'];
	
	function ItemListController($routeParams, ItemListService){

		var self = this;

		self.list = [];

		function serviceCallback(serviceResult){
			self.list = self.list.concat(serviceResult);
		}

		ItemListService.getList(serviceCallback);
	}
})();


