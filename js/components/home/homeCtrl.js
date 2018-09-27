testApp.controller('homeCtrl', 
    function homeCtrl($scope, $rootScope){
      var vm = this; 
		  function init(){
			vm.productsList = [
			  {
				  productId: '1',
				  companyName: 'Company 1',
				  productName: 'Product 1',
				  productDescription: null,
				  productColor: '#697996',
				  createdByUser: false,
				  isDeleted: false
			  },
			  {	  
				  productId: '2',
				  companyName: 'Company 2',
				  productName: 'Product 2',
				  productDescription: null,
				  productColor: '#9354A0',
				  createdByUser: false,
				  isDeleted: false
			  },
			  {	  
				  productId: '3',
				  companyName: 'Company 3',				  
				  productName: 'Product 3',
				  productDescription: null,
				  productColor: '#783D84',
				  createdByUser: false,
				  isDeleted: false
			  },
				{	  
				  productId: '4',
				  companyName: 'Company 4',				  
				  productName: 'Product 4',
				  productDescription: null,
				  productColor: '#662574',
				  createdByUser: false,
				  isDeleted: false
			  },
				{	  
				  productId: '5',
				  companyName: 'Company 5',		
				  productName: 'Product 5',
				  productDescription: null,
				  productColor: '#D8C08A',
				  createdByUser: false,
				  isDeleted: false
			  },
				{	  
				  productId: '6',
				  companyName: 'Company 6',	
				  productName: 'Product 6',
				  productDescription: null,
				  productColor: '#9EC4C3',
				  createdByUser: false,
				  isDeleted: false
			  }					  
		  ];
		  
		  addEventListeners();
		  }
		  
		  function addEventListeners(){
			  $rootScope.$on('customProductAdded', function(event, productItem){
				  var recievedProductItem = {
					  productId: Date.now(),
					  companyName: productItem.companyName,
					  productName:  productItem.productName,
					  productDescription: productItem.productDescription,
					  productColor: '#9EC4C3',
					  createdByUser: true,
					  isDeleted: false				  
				  }
				  vm.productsList.push(recievedProductItem);
			  });
			  
			  $rootScope.$on('removeProductItem', function(event, productId){
				 for (var i = 0; i < vm.productsList.length; i++){
					 if(vm.productsList[i].productId == productId){
						 vm.productsList[i].isDeleted = true;
					 }
				 }
			  });
		  }
		  
		  
		  init();
    }
)