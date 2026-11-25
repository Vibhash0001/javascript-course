import { cart } from "../../data/cart.js";
import { products } from "../../data/products.js";
import { deliveryOptions } from "../../data/deliveryOption.js";
import formatCurrency from "../utils/money.js";

export function renderPaymentSummary(){

    let itemsPrice = 0;
    let deliveryCharge = 0;
    let totalBeforetax = 0;
    let tax = 0;
    let totalAmount = 0;
        
    cart.forEach((cartElement) => {
        // productId = cartElement.id;
        let matchingProduct;

        products.forEach((product) => {
            if(product.id === cartElement.productId){
                matchingProduct =  product;
                itemsPrice += product.priceCents * cartElement.quantity;
            }
            
        });

        deliveryOptions.forEach((deliveryOption) => {
            if(deliveryOption.id === cartElement.deliveryOptionId){
                deliveryCharge += deliveryOption.priceCents;
            }
        });

        totalBeforetax = itemsPrice + deliveryCharge;
        tax = totalBeforetax * 0.10;
        totalAmount = totalBeforetax + tax;


    });

    document.querySelector('.js-payment-summary').innerHTML = 
    `
        <div class="payment-summary-title">
            Order Summary
          </div>

          <div class="payment-summary-row">
            <div>Items (3):</div>
            <div class="payment-summary-money">$${formatCurrency(itemsPrice)}</div>
          </div>

          <div class="payment-summary-row">
            <div>Shipping &amp; handling:</div>
            <div class="payment-summary-money">$${formatCurrency(deliveryCharge)}</div>
          </div>

          <div class="payment-summary-row subtotal-row">
            <div>Total before tax:</div>
            <div class="payment-summary-money">$${formatCurrency(totalBeforetax)}</div>
          </div>

          <div class="payment-summary-row">
            <div>Estimated tax (10%):</div>
            <div class="payment-summary-money">$${formatCurrency(tax)}</div>
          </div>

          <div class="payment-summary-row total-row">
            <div>Order total:</div>
            <div class="payment-summary-money">$${formatCurrency(totalAmount)}</div>
          </div>

          <button class="place-order-button button-primary">
            Place your order
          </button>
    `
   
}