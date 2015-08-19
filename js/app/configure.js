(function(){
	
	'use strict';
	
	angular
		.module('app')
		.config(configure);

	configure.$inject =
		['$routeProvider', '$locationProvider', '$httpProvider', '$logProvider'];
	
	function configure($routeProvider, $locationProvider, $httpProvider, $logProvider){

		// log 層級設定
		$logProvider.debugEnabled(appConfig.debugMode);

		// HttpHandler 設定
		$httpProvider.interceptors.push(appConfig.httpHandleInterceptor);
		
		// 開啟 History HTML5 模式
		$locationProvider.html5Mode({enabled: true, requireBase: false});
		
		// Url 設定
		for (var locationPath in appConfig.locationConfig) {
			var urlPattern = appConfig.project + locationPath;
			var config = appConfig.locationConfig[locationPath];

			config.templateUrl = window.appConfig.projectStaticPath + config.templateUrl;
			config.reloadOnSearch = true;

			$routeProvider.when(urlPattern, config);
		}
	}
})();


