testApp.controller('homeCtrl', 
    function homeCtrl(){
      var vm = this; 
		  function init(){
			vm.productsList = [
			  {
				  productId: '1',
				  companyName: 'Company 1',
				  productName: 'Product 1',
				  productDescription: 'null',
				  productColor: '#697996',
				  createdByUser: 'false',
				  isDeleted: 'false'
			  },
			  {	  
				  productId: '2',
				  companyName: 'Company 2',
				  productName: 'Product 2',
				  productDescription: 'null',
				  productColor: '#9354A0',
				  createdByUser: 'false',
				  isDeleted: 'false'
			  },
			  {	  
				  productId: '3',
				  companyName: 'Company 3',				  
				  productName: 'Product 3',
				  productDescription: 'null',
				  productColor: '#783D84',
				  createdByUser: 'false',
				  isDeleted: 'false'
			  },
				{	  
				  productId: '4',
				  companyName: 'Company 4',				  
				  productName: 'Product 4',
				  productDescription: 'null',
				  productColor: '#662574',
				  createdByUser: 'false',
				  isDeleted: 'false'
			  },
				{	  
				  productId: '5',
				  companyName: 'Company 5',		
				  productName: 'Product 5',
				  productDescription: 'null',
				  productColor: '#D8C08A',
				  createdByUser: 'false',
				  isDeleted: 'false'
			  },
				{	  
				  productId: '6',
				  companyName: 'Company 6',	
				  productName: 'Product 6',
				  productDescription: 'null',
				  productColor: '#9EC4C3',
				  createdByUser: 'false',
				  isDeleted: 'false'
			  }					  
		  ];
		  }
		  init();
    }
)