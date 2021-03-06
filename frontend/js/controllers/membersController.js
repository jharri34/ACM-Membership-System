/**
 * @ngdoc controller
 * @name acmApp.controller:membersController
 * @requires $scope
 * @requires $http
 * @requires $location
 * @description
 * This controller is used to control the members list page
 */
angular.module('acmApp').controller('membersCtrl', function ($scope, $http, $location) {

    if (localStorage.getItem('session') == '' || typeof localStorage.getItem('session') == 'undefined') {
        $location.path("/login");
        console.log("damn");
    }

    $http.get(localStorage.getItem('baseURL') + '/members').
    success(function (data, status, headers, config) {
        $scope.members = data;

    });
});