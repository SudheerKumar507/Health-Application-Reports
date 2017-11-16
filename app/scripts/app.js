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
    'ngTouch',
    '720kb.datepicker'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html',
        controller: 'homeCtrl',
        controllerAs: 'homeCtrl'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'loginCtrl',
        controllerAs: 'loginCtrl'
      })         
      .when('/sessionReports', {
        templateUrl: 'views/sessionReports.html',
        controller: 'sessionCtrl',
        controllerAs: 'sessionCtrl'
      })
      .when('/viewerReports', {
        templateUrl: 'views/viewerReports.html',
        controller: 'ViewerCtrl',
        controllerAs: 'ViewerCtrl'
      })      
      .when('/swasthyaSaasthi', {
        templateUrl: 'views/swasthyaSaasthi.html',
        controller: 'swasthyaCtrl',
        controllerAs: 'swasthyaCtrl'
      })
      .when('/reports', {
        templateUrl: 'views/reports.html',
        controller: 'reportsCtrl',
        controllerAs: 'reportsCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
