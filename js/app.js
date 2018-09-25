var testApp = angular.module('testApp', ["ngRoute"])
    .config(function($routeProvider){
        $routeProvider.when('/',
        {
            templateUrl:'js/components/home/home.html',
            controller:'homeCtrl as homeCtrl'
        });
       
});