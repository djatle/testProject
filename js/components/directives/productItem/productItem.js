"use strict";
	testApp.directive('productItem', ['appSettings', function(appSettings){
		return{
			restrict: 'E',
			scope: {
				productItem: '='
			},
			link: link,
			templateUrl: 'js/components/directives/productItem/productItem.html'
		}
		
		function link(scope){
			if(!scope.productItem.description){
				scope.productItem.description = appSettings.sampleProductDescription;
			};
		}
	}]);