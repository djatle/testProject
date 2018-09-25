	"use strict";
	testApp.directive('productsBoard', function(){		
		return {
			restrict : 'E',
			scope: {
				productsList: '<'
			},
			link : link,
			templateUrl: 'js/components/directives/productsBoard/productsBoard.html'
		}
		 function link(scope){
			 scope.recievedProductsList = scope.productsList;
		 }	
	})


