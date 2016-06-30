/**
 * Created by Arman Jalalian on 6/19/2016.
 */
angular.module('starter.controllers', ['ngOpenFB'])

.controller('AppCtrl', function ($scope, $ionicModal, $timeout, ngFB) {
    $scope.name = "arman";
    $scope.fbLogin = function () {
        console.log("click");
        ngFB.login({scope: 'email,read_stream,publish_actions'}).then(
            function (response) {
                if(response.status === 'connected') {
                    console.log("Facebook login succeeded");
                    $scope.closeLogin();
                } else {
                    alert('Facebook login failed!');
                }
            }
        )
    }
});