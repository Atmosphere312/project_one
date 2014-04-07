/**
 * My Client Application
 */
angular.module('client', [])
    .controller('MainCtrl', ['$scope', '$http', function ($scope, $http) {
        'use strict';
        $scope.mySillyText = "Get your bananas!";
        $scope.popAlert = function() {
          alert('hello');
        };
        $scope.priceMessage ="";
        $scope.bananaType = "";

        $scope.checkPrice = function(aBananaType){
          $scope.bananaType = aBananaType;
          $http.get('/checkPrice', {params: {bananaType: aBananaType} })
              .success(function (response) {
                  $scope.priceMessage = response.price;
              });

        };
    }]).run([function () {

    }]);