(function() {

    var moduleName = "mainApp";
    var controllerName = "productController";
    angular.module(moduleName)


    .controller(controllerName, ['$scope', '$rootScope', '$routeParams', '$http', 'cartService', function($scope, $rootScope, $routeParams, $http, cartService) {


        var d = $rootScope.productData,
            i;
        $scope.icount = 0;
        for (i = 0; i < d.length; i++) {

            if (d[i].imgURL == $routeParams.title) {


                $scope.productInfo = d[i];
                $scope.icount = $scope.productInfo.cartCount;
                console.log($scope.productInfo);
            }
        }
        $scope.addCart = function(cartItemName, count) {
            return cartService.addCart(cartItemName, count);
        }
        $scope.incrementCount = function(pCount) {
            pCount += 1;
            $scope.icount = pCount;
        }

    }])
})()