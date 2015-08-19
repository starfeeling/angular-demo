'use strict';

buildModule.main({
	'app' : {
		'app.core' : {
			'ngRoute' : false,
			'ngResource' : false
		},
		'app.components' : [
			'app.components.autoComplete',
						],
		'app.pages' : [
			'app.pages.itemList',
			'app.pages.itemDetail'
		],
		'app.utils' : true
	}
});
