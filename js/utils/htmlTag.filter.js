(function(){
	
	'use strict';
	
	angular
		.module('app.utils')
		.filter('HtmlTagFilter', HtmlTagFilter);

	HtmlTagFilter.$inject =
		[];
	
	function HtmlTagFilter(){
		
		function filter(param1){
			// do something
			return param1;
		}

		return filter;
	}
})();