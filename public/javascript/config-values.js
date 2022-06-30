const cartPrice = 120;

document.getElementById("cart-price").innerHTML = cartPrice;

lpTag.sdes = lpTag.sdes || [];
lpTag.sdes.push({
  type: "cart", //MANDATORY
  total: cartPrice, //TOTAL VALUE OF THE CART AFTER DISCOUNT
  currency: "USD", //CURRENCY CODE
  numItems: 1, //NUMBER OF ITEMS IN CART
  products: [
    {
      product: {
        name: "prod1", //PRODUCT NAME
        category: "category", //PRODUCT CATEGORY NAME
        sku: "sku", //PRODUCT SKU OR UNIQUE IDENTIFIER
        price: 120, //SINGLE PRODUCT PRICE
      },
      quantity: 1, //NUMBER OF PRODUCTS
    },
  ],
});
