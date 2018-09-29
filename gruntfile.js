
module.exports = function(grunt) {
	const sass = require('node-sass');

//require('load-grunt-tasks')(grunt);
   grunt.initConfig({
	   pkg: grunt.file.readJSON('package.json'),
	   'http-server': {
 
        'dev': {
 
            // the server root directory
            root: 'C:\Barbershop\works\testProject',
 
            // the server port
            // can also be written as a function, e.g.
            // port: function() { return 8282; }
            port: 8080,
 
            // the host ip address
            // If specified to, for example, "127.0.0.1" the server will
            // only be available on that ip.
            // Specify "0.0.0.0" to be available everywhere
            host: "127.0.0.1",
 
            cache: 1000,
            showDir : true,
            autoIndex: true,
 
            // server default file extension
            ext: "html",
 
            // run in parallel with other tasks
            runInBackground: true,
 
            // specify a logger function. By default the requests are
            // sent to stdout.
            //logFn: function(req, res, error) { },
 
            // Proxies all requests which can't be resolved locally to the given url
            // Note this this will disable 'showDir'
            //proxy: "http://someurl.com",
 
            /// Use 'https: true' for default module SSL configuration
            /// (default state is disabled)
            /*https: {
                cert: "cert.pem",
                key : "key.pem"
            },*/
 
            // Tell grunt task to open the browser
            openBrowser : true,
 
            // customize url to serve specific pages
            customPages: {
                "/readme": "README.md",
                "/readme.html": "README.html"
            }
		}
 
        },
		
		sass: {
		options: {
			implementation: sass,
			sourceMap: false
		},
		dist: {
			loadPath: ['node_modules/foundation-sites/scss'],
			files: {
				'styles/style.css': 'styles/scss/app.scss'
			}
		}
	},
		watch: {
		  sass: {
			files: 'styles/scss/{,*/}*.{scss,sass}',
			tasks: ['sass']
		  }
		},
		  concat: {
			options: {
			  separator: ';',
			  
			},
			dist: {
			  src: ['js/{*,**/}*.js'
					/*'js/lib/angular.min.js',
					'js/lib/angular-route.min.js',
					'js/lib/popeye.min.js', 
					'js/app.js', 
					'js/app-settings.js', 
					'js/components/home/homeCtrl.js', 
					'js/components/directives/productsBoard/productsBoard.js',
					'js/components/directives/productItem/productItem.js',
					'js/components/modals/addProductModalCtrl.js',
					'js/components/modals/removeProductModalCtrl.js'*/],
			  dest: 'dist/built.js',
    }
  }

});
//grunt.loadNpmTasks('grunt-http-server');
grunt.loadNpmTasks('grunt-contrib-concat');
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-contrib-sass');
grunt.registerTask('default', ['sass', 'watch']);
};
