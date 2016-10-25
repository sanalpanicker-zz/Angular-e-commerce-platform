##### WHY THIS FRAMEWORK

I am using Angular framework for the ecommerce SPA application.
there are various reasons why I picked up Angular JS.

1) Its very comfortable for me as I have been developing angualr Apps for almost 2 years now :).
2)It is the cleanest MVC framework I have ever worked on.
3)Handeling lot of session related attributes can be done easily with the famous $rootScope.
4)Little code and $scope glues make it easier to update the entire UI quickly.
5)I have not done any localStorage implementations, because of this you will not be able to directly load a page like "/cart". you will have to come to the home page first to get thigs right.

##### HOW TO RUN TEST - NOT DONE!!

6)Unit test has not been written, I did not get time for it. But I could do it easily with jasmine ,I been using jasmine for about a year.


##### HOW TO BUILD
7)copy the content inside UI folder and place it in the public folder of noder server.
8)go to terminal and run "node server" from the server.js folder path. 
9)Hit http://localhost:8080/ and you are good to go.


### QUICK RECAP OF MY work


Things which are done are marked as --> DONE.


### Sample Screens
#### Category List page:
![](./screens/desktop/category-page.png)
* Clicking the My Cart link should display the Cart Popup. --> DONE
* Hovering over one of the product tiles should display an overlay prompting the user to Add to Cart or View Details, --> DONE
  as below:

![](./screens/desktop/product-tile-overlay.png)

#### Cart Popup:
![](./screens/desktop/cart-popup.png)
* You should be able to remove items from the cart using the popup. --> NOT DONE
* The View Cart button should take you to the cart page. --> DONE
* The Checkout button does not need to do anything. NA
* When the popup is displayed, clicking anywhere outside it on the page should dismiss the popup. --> DONE

#### Product details page:
![](./screens/desktop/product-details.png)
* Clicking the My Cart link should display the Cart Popup. --> DONE
* The quantity buttons should work as expected.--> DONE [ - dosent work]
* Clicking Add to Cart should work as expected.--> DONE

#### Cart page:
![](./screens/desktop/cart.png)
* Clicking the My Cart link should display the Cart Popup.--> DONE
* The quantity buttons should work as expected, including updating the total for each line item and the cart total.--> DONE
* The remove buttons should work as expected.--> NOT DONE
* The Continue Shopping link should return to the homepage.  --> DONE
* The Checkout button does not need to do anything.--> DONE