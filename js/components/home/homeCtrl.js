testApp.controller('homeCtrl', 
    function homeCtrl(){
      var vm = this; 
		  function init(){
			vm.productsList = [
			  {
				  productName: 'product 1'
			  },
			  {
				  productName: 'product 2'
			  },
			  {
				  productName: 'product 3'
			  }		  
		  ];
		  }
		  init();
		  alert('123');
    }
)