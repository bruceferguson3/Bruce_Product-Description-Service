# IKEA Product-Description Service

The product description service should have components that display the title for the selected 
product, along with a smaller discription below it. 

Display the price and the avg review rating in the form of stars on a 0.0 - 5.0 scale 
with a total # of reviews beside it.

The quantity of the selected item should be displayed along with a way for the user to inc or dec
the selected item. 

Below the quantity, the user can either select "Add to cart" to add the selected items
to there cart for purchase, or select "Add to WishList" to save the item for later. 

There is an assembly option that will take you to the "Assembly and documents" tab. 

The "Avaliable for delivery" drawer will pull down on click and 
will display if the item is in the users' cart. 

The "Check your local store" button will pull the page down to the 
"Check your IKEA Store" drawer.

## Related Projects

  - https://github.com/bruceferguson3/IKEA-Clone-Proxy

## Pictures of the Service

There are several diffrent ways the component could render.

If the product is new, a special tag will be displayed in the top left corner.

#### ![](/assets/readMe/NEW-item-tag.png) 

If a product is under the `IKEA Family Sale` then it will render like this.

#### ![](/assets/readMe/IKEA-Family-Sale.png) 

A product that is on sale for a discounted price will render like this. 

> If there is a disclamer to go with the product, it will render a warning message below the product rating.

#### ![](/assets/readMe/On-sale:warning-label.png) 

Products will sometimes have a `Not quite perfect?` tag. This is seen on a few products with many options.

#### ![](/assets/readMe/Not-quite-perfect-tag.png)

A product might sometimes not have a description.

#### ![](/assets/readMe/NoDescription.png)  

### Installing Dependencies

From within the root directory:

```
npm install
```

