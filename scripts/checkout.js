import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import { loadProducts } from "../data/products.js";

async function loadPage() {
  await loadProducts();
  
  renderOrderSummary();
  renderPaymentSummary();
}

loadPage();

/*
loadProducts().then(() => {
  renderOrderSummary();
  renderPaymentSummary();
});
*/

/*
new Promise((resolve) => {
  loadProducts(() => {
    resolve();
  });
  
}).then(() => {
  return new Promise((resolve) => {
    loadCart(() => {
      resolve();
    });
  });
  
}).then(() => {
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
});
*/