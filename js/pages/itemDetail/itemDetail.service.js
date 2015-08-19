(function(){
	
	'use strict';
	
	angular
		.module('app.pages.itemDetail')
		.service('ItemDetailService', ItemDetailService);

	ItemDetailService.$inject =
		['$http'];
	
	function ItemDetailService($http){
		
		var self = this;

		self.getDetail = getDetail;

		function getDetail(pid, callback){
			$http.get('/phones/' + pid + '.json').success(function(data) {
				callback.call(this, data);
			});
		}
	}
})();