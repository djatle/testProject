"use strict";
	testApp.directive('productItem', function(){
		return{
			restrict: 'E',
			scope: {
				productItem: '<'
			},
			link: link,
			templateUrl: 'js/components/directives/productItem/productItem.html'
		}
		
		function link(scope){
			console.log(scope.productItem);
		}
	});