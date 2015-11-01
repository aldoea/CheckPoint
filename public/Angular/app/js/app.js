window.onload = function() { document.body.className = ''; }
			window.ontouchmove = function() { return false; }
			window.onorientationchange = function() { document.body.scrollTop = 0; }

var app = angular.module('flapperNews', ['ui.router']);

app.config([
'$stateProvider',
'$urlRouterProvider',
function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: '/home.html',
      controller: 'MainCtrl'
    });
	
	$stateProvider
		.state('posts', {
		  url: '/posts',
		  templateUrl: '/posts.html',
		  controller: 'PostsCtrl'
		});
  $urlRouterProvider.otherwise('home');
}]);

app.controller('MainCtrl', [
'$scope',
function($scope){
  console.log("Hello angular!");
}]);

app.controller('PostsCtrl', [
'$scope',
'$stateParams',
function($scope, $stateParams){

}]);