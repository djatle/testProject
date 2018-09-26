	"use strict";
	testApp.directive('productsBoard', ['Popeye', function(Popeye){		
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
			 
			 scope.addNewProduct = function(){
			 var modal = Popeye.openModal({
				  templateUrl: "js/components/modals/addProductModal.html",
				  controller: "addProductModalCtrl as addProductModalCtrl",
				});
			 }
		 }	
	}])


