(function() {

    var moduleName = "mainApp";
    var controllerName = "categoryController";
    angular.module(moduleName)


    .controller(controllerName, ['$scope', '$rootScope', '$location', '$http', 'cartService', function($scope, $rootScope, $location, $http, cartService) {
        var d, cartAddedProduct, totalItem = 0;
        if (!$rootScope.productData) {
            $http.get('../json/products.json')
                .success(function(data) {
                    for (var i = 0; i < data.length; i++) {
                        data[i].imgURL = (data[i].title).replace(/ /g, "-");
                        data[i].cartCount = 0;
                        data[i].id = i + 1;
                    }

                    $rootScope.productData = d = $scope.productDetails = data;
                })
                .error(function(data) {
                    alert("error occured - try again later")
                });
        } else {
            d = $scope.productDetails = $rootScope.productData;
        }

        $scope.goToPage = function(param) {
            $location.path(param);

        }
        $scope.addCart = function(cartItemName){
            return cartService.addCart(cartItemName);
        }

    }])
})()