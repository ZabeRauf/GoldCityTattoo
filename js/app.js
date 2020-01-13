var app = angular.module("goldcitytattoo", ['ngRoute']);

app.config(function ($routeProvider) { 
  $routeProvider 
    .when('/', { 
      controller: 'MainController', 
      templateUrl: 'views/home.html' 
    }) 
    .when('/case/:id', {
	    // controller: 'CaseController', 
      templateUrl: 'views/case.html' 
    })
    .otherwise({ 
      redirectTo: '/' 
    }); 
}); 