// Models Page Functionality
document.addEventListener('DOMContentLoaded', function() {
    const products = [
        {
            id: 1,
            name: "BMW M5 CS",
            category: "m5",
            price: 142000,
            image: "./images/M5.png",
            description: "The ultimate performance sedan with 627 horsepower, carbon fiber components, and track-focused dynamics."
        },
        {
            id: 2,
            name: "BMW M5 Competition",
            category: "m5",
            price: 111100,
            image: "./images/M5.png",
            description: "The balanced performance sedan with 617 horsepower, refined handling, and luxurious interior amenities."
        },
        {
            id: 3,
            name: "BMW M4 Competition",
            category: "m4",
            price: 81900,
            image: "./images/M4.png",
            description: "A high-performance coupe with 503 horsepower, M xDrive, and aggressive styling that commands attention."
        },
        {
            id: 4,
            name: "BMW M4 CSL",
            category: "m4",
            price: 140895,
            image: "./images/M4.png",
            description: "The lightest and most powerful M4 ever with 543 horsepower and extensive use of carbon fiber."
        },
        {
            id: 5,
            name: "BMW M3 Competition",
            category: "m3",
            price: 76900,
            image: "./images/M3.png",
            description: "Sports sedan with 503 horsepower, M xDrive, and iconic M3 design cues."
        },
        {
            id: 6,
            name: "BMW M3 CS",
            category: "m3",
            price: 118700,
            image: "./images/M3.png",
            description: "Limited edition M3 with 543 horsepower and extensive weight reduction through carbon fiber."
        },
        {
            id: 7,
            name: "BMW M8 Competition Coupe",
            category: "m8",
            price: 138000,
            image: "./images/M8.png",
            description: "Flagship performance coupe with 617 horsepower and luxurious grand touring capabilities."
        },
        {
            id: 8,
            name: "BMW M8 Gran Coupe",
            category: "m8",
            price: 143000,
            image: "./images/M8.png",
            description: "Four-door luxury sports coupe with 617 horsepower and executive-level comfort."
        }
    ];

    // Render products by category
    function renderProductsByCategory() {
        const categories = ['m5', 'm4', 'm3', 'm8'];
        
        categories.forEach(category => {
            const container = document.getElementById(`${category}Products`);
            if (!container) return;
            
            const categoryProducts = products.filter(product => product.category === category);
            
            if (categoryProducts.length === 0) {
                container.innerHTML = '<p>No products available in this category.</p>';
                return;
            }
            
            container.innerHTML = categoryProducts.map(product => `
                <div class="product-card">
                    <div class="product-image">
                        <img src="${product.image}" alt="${product.name}">
                    </div>
                    <div class="product-details">
                        <div class="product-category">${product.category.toUpperCase()}</div>
                        <h3 class="product-title">${product.name}</h3>
                        <p class="product-description">${product.description}</p>
                        <div class="product-price">$${product.price.toLocaleString()}</div>
                        <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
                    </div>
                </div>
            `).join('');
            
            // Add event listeners to "Add to Cart" buttons
            container.querySelectorAll('.add-to-cart').forEach(button => {
                button.addEventListener('click', function() {
                    const productId = parseInt(this.getAttribute('data-id'));
                    const product = products.find(p => p.id === productId);
                    if (product && window.cart) {
                        window.cart.addToCart(product);
                    }
                });
            });
        });
    }

    // Initialize models page
    renderProductsByCategory();
});