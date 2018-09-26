"use strict";
testApp.controller('addProductModalCtrl', function($scope){
	var vm = this;
	vm.userProduct = null;
	vm.saveProduct = function(form){
		if(form.$valid){
			alert('Ok');
		}
	}
})