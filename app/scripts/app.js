'use strict';

/**
 * @ngdoc overview
 * @name healthApplicationApp
 * @description
 * # healthApplicationApp
 *
 * Main module of the application.
 */
angular
  .module('healthApplicationApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/swasthya saasthi', {
        templateUrl: 'views/swasthya saasthi.html',
        controller: 'Swasthya saasthiCtrl',
        controllerAs: 'swasthya saasthi'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'login'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
