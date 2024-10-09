class Product {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
}
class ShoppingCartItem {
    constructor(product, quantity) {
        this.product = product; // Instance of Product
        this.quantity = quantity;
    }

    // Method to calculate total price of the item
    getTotalPrice() {
        return this.product.price * this.quantity;
    }
}
class ShoppingCart {
    constructor() {
        this.items = []; // Array to hold ShoppingCartItem instances
    }

    // Method to get total of items inside the cart
    getTotal() {
        let total = 0;
        for (const item of this.items) {
            total += item.getTotalPrice();
        }
        return total;
    }

    // Method to add items to the cart
    addItem(product, quantity) {
        const existingItem = this.items.find(item => item.product.id === product.id);
        if (existingItem) {
            existingItem.quantity += quantity; // Increase quantity if item already exists
        } else {
            const newItem = new ShoppingCartItem(product, quantity);
            this.items.push(newItem); // Add new item
        }
    }

    // Method to remove items from the cart
    removeItem(productId) {
        this.items = this.items.filter(item => item.product.id !== productId);
    }

    // Method to display cart items
    displayItems() {
        console.log("Cart Items:");
        this.items.forEach(item => {
            console.log(`${item.product.name} (x${item.quantity}): $${item.getTotalPrice().toFixed(2)}`);
        });
        console.log(`Total: $${this.getTotal().toFixed(2)}`);
    }
}
// Creating products
const product1 = new Product(1, "Apple", 1.00);
const product2 = new Product(2, "Banana", 0.50);
const product3 = new Product(3, "Orange", 0.80);

// Creating a shopping cart
const cart = new ShoppingCart();

// Adding items to the cart
cart.addItem(product1, 3); // 3 Apples
cart.addItem(product2, 2); // 2 Bananas
cart.addItem(product3, 1); // 1 Orange

// Displaying the cart
cart.displayItems(); // Should show 3 Apples, 2 Bananas, 1 Orange

// Removing an item from the cart
cart.removeItem(2); // Remove Bananas

// Displaying the cart again
cart.displayItems(); // Should show 3 Apples and 1 Orange
