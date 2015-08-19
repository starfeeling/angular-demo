window.appConfig.httpHandleInterceptor = [
	'$injector', '$q', '$window', '$location',
	function ($injector, $q, $window, $location){
		return {
			request : function(config){
				if($.browser.msie === true){
					if(typeof config.cache !== 'undefined'){
						config.params = config.params || {};
						config.params._rdts = (new Date().getTime());
					}
				}
				
				return config || $q.when(config);
			},
			requestError : function(rejection){
				return $q.reject(rejection);
			},
			response : function(response){
				return response || $q.when(response);
			},
			responseError : function(rejection){
				switch(rejection.status){
					case 403:
						$window.location.href = $location.absUrl() + "?_=" + (new Date().getTime());
						break;

					default :
						return $q.reject("can't handle error");
						break;
				}
			}
		};
	}
];

