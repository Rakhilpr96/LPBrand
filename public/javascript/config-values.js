const cartPrice = 799;

document.getElementById("cart-price").innerHTML = cartPrice;

lpTag.sdes.push({
  type: "cart", //MANDATORY
  total: cartPrice, //TOTAL VALUE OF THE CART AFTER DISCOUNT
  currency: "USD", //CURRENCY CODE
  numItems: 1, //NUMBER OF ITEMS IN CART
  products: [
    {
      product: {
        name: "iPhone13", //PRODUCT NAME
        category: "Mobiles", //PRODUCT CATEGORY NAME
        sku: "AHNJK2453JDSJ", //PRODUCT SKU OR UNIQUE IDENTIFIER
        price: 799, //SINGLE PRODUCT PRICE
      },
      quantity: 1, //NUMBER OF PRODUCTS
    },
  ],
});
