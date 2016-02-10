//var app_cached_providers = {};
	
(function(){
	'use strict'
		//configure routes

	angular.module('myApp',[])
  	.run(function($rootScope,$window){
  		//anything at the time of running the app
  		$rootScope.$on("ALERT",function(){
  			$window.alert("Hi, I'm alert");
  		});
  	}).factory("AjaxFactory",function($http){
  		return {
  			getData:function(){
  				var url="http://www.filltext.com";
  				var config = {
			        params: {
			            'rows' : 5,
			            'fname': '{firstName}',
			            'lname': '{lastName}',
			            'sal'  : '{zip}',
			            'city' : '{city}'
			            //'callback': "JSON_CALLBACK"
			        }
    			};
  				return $http.get(url,config,{});
  			}
  		}
  	}).controller("myCtrl",function($scope,AjaxFactory){
  		 //$scope.comVar="Hello "+$scope.myVar; 
  		 $scope.myVar="";
  		 $scope.$watch(function(scope) { 
  		 	return scope.comVar="Hello "+scope.myVar; 
  		 });
  		 AjaxFactory.getData().then(function(response){
  		 	$scope.userList=response.data;
  		 });


  	}).filter("mask",function(){
	   return function(text){
	        var len =text.length;
	        console.log(text.length);
	        var txt="";
	         for(var i=0;i<len;i++){
	             if(i>(len-5))
	             {txt+=text.substr(i,1);}else{
	                 txt+="X";
	             }
	         }
	        return txt;
	    }
	});
  	//angular.bootstrap(document,["app"]);
})();