(function() {

    var moduleName = "mainApp";
    var controllerName = "mainController";
    var factoryName = "appFactory";

    angular.module(moduleName, ['ngRoute', 'ui.bootstrap'])
        .config(['$routeProvider', function($routeProvider) {
            $routeProvider

            //Default route
                .when("/", {
                    templateUrl: "pages/category.html",
                    controller: "categoryController"
                })
                //Route to the products page
                .when("/product/:title", {
                    templateUrl: "pages/product.html",
                    controller: "productController"
                })
                //Route to the category page

            .when("/category", {
                    templateUrl: "pages/category.html",
                    controller: "categoryController"
                })
                //Route to the cart page

            .when("/cart", {
                templateUrl: "pages/cart.html",
                controller: "cartController"
            });
        }])
        .controller(controllerName, ['$scope', '$rootScope', '$location', 'appFactory', function($scope, $rootScope, $location, service) {
            $rootScope.cartItems = [];
            $scope.message = "Hello its main app";

            $scope.goTopage = function(page) {
                $location.path("/" + page);
            }

            $scope.showPopUp = function() {
                service.showCartPopUp();
            }
        }])
        .factory(factoryName, ['$uibModal', function($uibModal) {

            return {
                showCartPopUp: showCartPopUp,
            };

            function showCartPopUp() {
                return $uibModal.open({
                    templateUrl: "pages/cartPopUp.html",
                    controller: 'cartController',
                    backdrop: true
                })
            }
        }])
})();