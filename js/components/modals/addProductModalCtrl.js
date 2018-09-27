"use strict";
testApp.controller('addProductModalCtrl', function($scope, $rootScope, Popeye){
	var vm = this;
	vm.userProduct = null;
	vm.saveProduct = function(form){
		if(form.$valid){
			$rootScope.$broadcast('customProductAdded', vm.userProduct);
			Popeye.closeCurrentModal();
		}
	}
})