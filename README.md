# Amazon Clone

A fully functional e-commerce web application built with **pure HTML, CSS, and JavaScript** — no frameworks or libraries.

## Features

- **Product Browsing**: Browse a catalog of products with images, ratings, and prices
- **Shopping Cart**: Add/remove items, update quantities, and manage your cart
- **Checkout Process**: Complete order checkout with delivery options and payment summary
- **Order History**: View all past orders and their details
- **Order Tracking**: Track the status of placed orders with real-time updates
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Local Storage**: Persistent cart and order data using browser's local storage

## Project Structure

```
amazon-clone/
├── index.html               # Entry Point for Github Pages
├── amazon.html              # Main product listing page
├── checkout.html            # Shopping cart and checkout page
├── orders.html              # Order history page
├── tracking.html            # Order tracking page
├── backend/
│   └── products.json        # Product database
├── data/
│   ├── cart.js             # Shopping cart logic
│   ├── products.js         # Product data management
│   └── deliveryOptions.js  # Delivery options
├── scripts/
│   ├── amazon.js           # Main product page logic
│   ├── checkout.js         # Checkout page logic
│   ├── checkout/
│   │   ├── orderSummary.js    # Order summary rendering
│   │   └── paymentSummary.js  # Payment summary calculation
│   └── utils/
│       └── money.js        # Currency formatting utilities
├── styles/
│   ├── shared/
│   │   ├── general.css          # Global styles
│   │   └── amazon-header.css    # Header styling
│   └── pages/
│       ├── amazon.css           # Product page styles
│       ├── orders.css           # Orders page styles
│       ├── tracking.css         # Tracking page styles
│       └── checkout/
│           ├── checkout.css     # Checkout page styles
│           └── checkout-header.css # Checkout header styles
└── images/
    ├── products/            # Product images
    ├── icons/              # UI icons
    └── ratings/            # Star rating images
```

## Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- No server setup required — runs entirely in the browser

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd javascript-amazon-project
```

2. Open the project:
   - Simply open `amazon.html` in your web browser
   - Or use a local server:
     ```bash
     # Using Python 3
     python -m http.server 8000
     
     # Using Node.js (if you have http-server installed)
     npx http-server
     ```
   - Then navigate to `http://localhost:8000`

## Pages Overview

### 1. **Amazon (amazon.html)**
The main product page featuring:
- Grid layout of all available products
- Product cards with images, names, ratings, and prices
- Add to cart functionality
- Dynamic cart quantity display in the header

### 2. **Checkout (checkout.html)**
The shopping cart and checkout experience:
- List of items in cart with ability to modify quantities
- Remove item functionality
- Delivery option selection
- Order summary with itemized pricing
- Payment summary with shipping costs and taxes

### 3. **Orders (orders.html)**
Order history management:
- Display all placed orders
- Order date and total price
- Option to track orders
- View items in each order

### 4. **Tracking (tracking.html)**
Real-time order tracking:
- View estimated delivery date
- Track current order status
- Product details and quantity
- Shipping and delivery information

## Key Technologies

- **HTML5**: Semantic markup and structure
- **CSS3**: Styling with Flexbox and Grid layouts
- **JavaScript (ES6+)**: 
  - DOM manipulation
  - Event handling
  - Local Storage API
  - Module imports/exports
  - String templates and arrow functions

## Features in Detail

### Shopping Cart System
- Items persist in local storage
- Real-time quantity updates
- Automatic total calculation
- Visual feedback on cart changes

### Product Management
- Dynamic product rendering from JSON data
- Product ratings and customer reviews count
- Product-specific attributes (size charts for clothing)
- Price formatting and currency display

### Checkout Process
- Multiple delivery options with different costs and times
- Automatic tax calculation
- Order summary generation
- Place order functionality

### Data Persistence
- Cart data stored in browser's local storage
- Order history maintained locally
- Delivery options cached for quick access

## Usage

1. **Browse Products**: Navigate through the product catalog on the home page
2. **Add to Cart**: Click "Add to Cart" on any product
3. **View Cart**: Click the cart icon in the header to go to checkout
4. **Manage Items**: Update quantities or remove items
5. **Select Delivery**: Choose a delivery option
6. **Place Order**: Review your order and click "Place your order"
7. **Track Orders**: Go to "Orders & Returns" → "Tracking" to see order status

## Customization

### Adding New Products
Edit `backend/products.json` and add product objects with the following structure:
```json
{
  "id": "unique-id",
  "image": "path/to/image.jpg",
  "name": "Product Name",
  "rating": {
    "stars": 4.5,
    "count": 100
  },
  "priceCents": 2099,
  "keywords": ["keyword1", "keyword2"]
}
```

### Modifying Delivery Options
Edit `data/deliveryOptions.js` to adjust shipping costs and estimated delivery times.

### Styling
All CSS files are organized by page. Modify files in `styles/` to customize the look and feel.

## Browser Compatibility

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Future Enhancements

- Search and filter functionality
- Product recommendations
- Customer reviews system
- Payment gateway integration
- Admin panel for product management
- User authentication
- Multiple currencies support

## License

This project is open source and available under the MIT License.

## Contributing

Contributions are welcome! Feel free to fork this project and submit pull requests for any improvements.

## Support

For issues, questions, or suggestions, please open an issue in the repository.

---

**Enjoy your Amazon clone!** 🛒
