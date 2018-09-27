"use strict";
	testApp.directive('productItem', ['appSettings', 'Popeye',  function(appSettings, Popeye){
		return{
			restrict: 'E',
			scope: {
				productItem: '='
			},
			link: link,
			templateUrl: 'js/components/directives/productItem/productItem.html'
		}
		
		function link(scope){
			if(!scope.productItem.productDescription){
				scope.productItem.productDescription = appSettings.sampleProductDescription;
			};	
			 		
			scope.removeProduct = function(){
				var modal = Popeye.openModal({
				  templateUrl: "js/components/modals/removeProductModal.html",
				  controller: "removeProductModalCtrl as removeProductModalCtrl",
				  scope: scope
				});
			}
		}
	}]);