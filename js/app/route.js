window.appConfig.locationConfig = {
	/**
	 * 
	 */
	'/': {
		controller: 'ItemListController',
		controllerAs: 'ilCtrl',
		templateUrl: window.appConfig.projectStaticPath+'/templates/pages/itemList/item-list.html',
		resolve : []
	},
	/**
	 * 
	 */
	'/:pid': {
		controller: 'ItemDetailController',
		controllerAs: 'idCtrl',
		templateUrl: window.appConfig.projectStaticPath+'/templates/pages/itemDetail/item-detail.html',
		resolve : []
	}
};