(function() {

    var moduleName = "mainApp";
    var controllerName = "cartController";
    angular.module(moduleName)


    .controller(controllerName, ['$scope', '$rootScope', '$http', '$location', 'cartService', function($scope, $rootScope, $http, $location, cartService) {
        var totalAmount = 0,
            cd;
        cd = $scope.cartItems = $rootScope.cartItems;
        $scope.goToPage = function(param) {
            $location.path("/" + param);

        }
        if (!$rootScope.totalAmount) {
        
            for (var i = 0; i < cd.length; i++) {
                totalAmount += cd[i].price * cd[i].cartCount;
            }
            $rootScope.totalAmount = totalAmount;
        }
        $scope.getTotalPrice = function(totalcount, itemPrice) {
            return itemPrice * totalcount;

        }
        $scope.addCart = function(cartItemName) {
            return cartService.addCart(cartItemName);
        }
    }])
})()