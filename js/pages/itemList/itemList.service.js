(function(){
	
	'use strict';
	
	angular
		.module('app.pages.itemList')
		.service('ItemListService', ItemListService);

	ItemListService.$inject =
		['$http'];
	
	function ItemListService($http){
		
		var self = this;

		self.getList = getList;

		function getList(callback){
			$http.get('/phones/phones.json').success(function(data) {
				callback.call(this, data);
			});
		}
	}
})();