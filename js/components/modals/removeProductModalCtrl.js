"use strict";
testApp.controller('removeProductModalCtrl', function($scope, $rootScope, Popeye){
	var vm = this;
	vm.removeProduct = function(){
		$rootScope.$broadcast('removeProductItem', $scope.productItem.productId);
		Popeye.closeCurrentModal();
	}
})