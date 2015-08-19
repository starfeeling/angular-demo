'use strict';

var buildModule = {
	createElement : function(name){
		name = name.replace(/([A-Z])/g,'-$1');
		name = name.toLowerCase();
		document.createElement(name);
	},
	overrideDirective : function(module){
		(function(m){
			var directive = m.directive;

			m.directive = function(){
				var name = arguments[0];
				buildModule.createElement(name);
				return directive.apply(directive, arguments);
			};
		})(module);
	},
	checkType : function(defined){
		return (Object.prototype.toString.call(defined) === '[object Array]') ? 'array' : 'object';
	},
	main : function(defined){
		if(buildModule.checkType(defined) === 'array'){
			if(defined.length > 0){
				defined.map(function(property){
					var m = angular.module(property, []);

					//console.log(property, []);

					if($.browser.msie === true && /^8/.test($.browser.version)){
						//buildModule.overrideDirective(m);
					}
				});
			}
		}else if(buildModule.checkType(defined) === 'object'){
			var properties = Object.keys(defined);

			if(properties.length > 0){
				properties.map(function(property){
					var subProperties = [];

					if(defined[property] !== false){
						buildModule.main(defined[property]);

						if(buildModule.checkType(defined[property]) === 'array'){
							subProperties = defined[property];
						}else if(buildModule.checkType(defined[property]) === 'object'){
							subProperties = Object.keys(defined[property]);
						}

						var m = angular.module(property, subProperties);

						//console.log(property, subProperties);

						if($.browser.msie === true && /^8/.test($.browser.version)){
							//buildModule.overrideDirective(m);
						}
					}
				});
			}
		}
	}
};

