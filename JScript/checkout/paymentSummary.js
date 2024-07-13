import { cart } from "../../data/cart.js";
import { getProduct } from "../../data/products.js";

export function renderPaymentsummary(){

  let productpriceCents=0;

  cart.forEach((cartItem)=>{
    const product=getProduct(cartItem.productId);
    productpriceCents+= product.priceCents*cartItem.quantity;
  });

  console.log(productpriceCents);
}