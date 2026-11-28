import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
//import '../data/cart-class.js';
//import '../data/backend-practice.js';
import { loadProducts } from "../data/products.js";
import { loadCart } from "../data/cart.js";

Promise.all([
    // In the promise.all we can load products and cart at the same time without waiting to complete anyone of the promise 
    new Promise((resolve) => {
        loadProducts(() => {
            resolve('value1');
        })
    }),
    new Promise((resolve) => {
        loadCart(() => {
            resolve('value2');
        });
    })
]).then((values) => {
    //console.log(values); // Makes array of both values
    renderOrderSummary();
    renderPaymentSummary();
});


/*

// I this method the second promise wait to complete the first promise then load itself
new Promise((resolve) => {
    //console.log('start promise');
    loadProducts(() => {
        //console.log('finish loading');
        resolve('value1');
    })

}).then((value) => {
    console.log(value);
    return new Promise((resolve) => {
        loadCart(() => {
            resolve('value2');
        });
    });

}).then((value) => {
    console.log(value)
    renderOrderSummary();
    renderPaymentSummary();
});
*/

/*
loadProducts(() => {
    loadCart(() => {
        renderOrderSummary();
        renderPaymentSummary();
    });
})
*/
