# Amazon Clone

This project is a front-end shopping experience inspired by Amazon, built with plain HTML, CSS, and JavaScript. It includes a product catalog, shopping cart, checkout flow, order history, and tracking pages.

## Features

- Product listing page with images, prices, and ratings
- Add-to-cart and quantity update functionality
- Checkout page with delivery options and order summary
- Orders page to view previous purchases
- Tracking page for order status
- Responsive layout for desktop and mobile screens
- Browser-based persistence using local storage

## Tech Stack

- HTML5
- CSS3
- JavaScript (ES6 modules)
- Local storage for cart and order data

## Project Structure

```text
amazon.html          # Main product page
checkout.html        # Cart and checkout page
orders.html          # Orders page
tracking.html        # Order tracking page
backend/
  products.json      # Product data
data/
  cart.js            # Cart logic
  products.js        # Product data handling
  deliveryOptions.js # Delivery option data
scripts/
  amazon.js          # Product page behavior
  checkout.js        # Checkout behavior
  checkout/
    orderSummary.js
    paymentSummary.js
  utils/
    money.js
styles/
  shared/
  pages/
images/
```

## Getting Started

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd javascript-amazon-project
   ```
2. Open the project in a browser:
   - You can open Amazon.html directly, or
   - Run a simple local server:
     ```bash
     python3 -m http.server 8000
     ```
   Then visit http://localhost:8000/amazon.html

## Customization

- Add or edit products in backend/products.json
- Update styling in the styles folder
- Adjust cart and checkout behavior in the scripts folder

## Notes

This is a learning-focused project and does not include real payment processing or backend authentication.
