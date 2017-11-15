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
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl',
        controllerAs: 'home'
      })         
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/sessionReport', {
        templateUrl: 'views/session-report.html',
        controller: 'Session-ReportCtrl',
        controllerAs: 'session-report'
      })
      .when('/viewerReport', {
        templateUrl: 'views/viewer-report.html',
        controller: 'Viewer-ReportCtrl',
        controllerAs: 'viewer-report'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
