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
      .when('/session-report', {
        templateUrl: 'views/session-report.html',
        controller: 'Session-ReportCtrl',
        controllerAs: 'session-report'
      })
      .when('/viewer-report', {
        templateUrl: 'views/viewer-report.html',
        controller: 'Viewer-ReportCtrl',
        controllerAs: 'viewer-report'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
