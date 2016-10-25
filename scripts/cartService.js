(function() {

    var moduleName = "mainApp";
    var factoryName = "cartService";
    angular.module(moduleName)


    .factory(factoryName, ['$rootScope', '$http', '$location', function($rootScope, $http, $location) {

        return {
            addCart: addCart,
            removeCart: removeCart
        }

        function addCart(cartItemName, count) {

            var d, totalAmount = 0,
                cartAddedProduct;
            if (!$rootScope.totalItem) {
                $rootScope.totalItem = 0;
                if (count) {
                    $rootScope.totalItem += count;
                } else {
                    $rootScope.totalItem += 1;
                }
            } else {
                if (count) {
                    $rootScope.totalItem += count;
                } else {
                    $rootScope.totalItem += 1;
                }
            }
            if ($rootScope.productData) {
                d = $rootScope.productData;
            }
            for (i = 0; i < d.length; i++) {
                if (d[i].imgURL == cartItemName) {
                    if (count) {
                        d[i].cartCount += count;
                        cartAddedProduct = d[i];
                        break;
                    } else {
                        //adding into cartItem array
                        d[i].cartCount += 1;
                        cartAddedProduct = d[i];
                        break;
                    }
                }
            }


            if ($rootScope.cartItems.length != 0) {
                var ci = $rootScope.cartItems;
                var dupe = false;
                for (var i = 0; i < ci.length; i++) {

                    if (ci[i].imgURL == cartItemName) {
                        dupe = true;
                        break;
                    }
                }
                if (!dupe) {
                    //adding into cartItem array
                    $rootScope.cartItems.push(cartAddedProduct);
                }
            } else {
                //adding into cartItem array
                $rootScope.cartItems.push(cartAddedProduct);
            }

            if ($rootScope.cartItems) {
                var cd = $rootScope.cartItems;
                for (var i = 0; i < cd.length; i++) {
                    totalAmount += cd[i].price * cd[i].cartCount;
                }
                $rootScope.totalAmount = totalAmount;
            }
        }

        function removeCart(removeItemName) {


        }

    }])
})()