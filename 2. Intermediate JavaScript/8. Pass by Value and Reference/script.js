let cart = {

    items: [

        { id: 1, name: 'Laptop', price: 60000, quantity: 1 },

        { id: 2, name: 'Mouse', price: 800, quantity: 2 }
    ]
};

console.log(cart);

// Pass by reference: modifies shared cart object

function updateQuantity(itemId, change) {

    let item = cart.items.find(i => i.id === itemId);

    if (item) {

        item.quantity = Math.max(1, item.quantity + change); // min 1
    }

    render();
}

// Pass by value: calculates total without changing actual prices

function calculateDiscountedTotal(discountPercent) {

    let total = 0;

    cart.items.forEach(item => {

        let discountAmount = (item.price * discountPercent) / 100;

        let finalPrice = item.price - discountAmount;

        total += finalPrice * item.quantity;
    });

    return total;
}

// Render Cart Page

function renderCartPage() {

    const cartDiv = document.getElementById('cartItems');

    cartDiv.innerHTML = '';

    cart.items.forEach(item => {

        const itemDiv = document.createElement('div');

        itemDiv.className = 'item';

        itemDiv.innerHTML = `

            <span class="item-name">${item.name} <br>₹${item.price}</span>

            <div class="qty-controls">

                <button onclick="updateQuantity(${item.id}, -1)">-</button>

                <span>${item.quantity}</span>

                <button onclick="updateQuantity(${item.id}, 1)">+</button>

            </div>
        `;

        cartDiv.appendChild(itemDiv);
    });
}

// Render Checkout Page

function renderCheckoutPage() {

    const checkoutDiv = document.getElementById('checkoutItems');

    checkoutDiv.innerHTML = '';

    cart.items.forEach(item => {

        const itemDiv = document.createElement('div');

        itemDiv.className = 'item';

        itemDiv.innerHTML = `

            <span>${item.name}</span>

            <span>x ${item.quantity}</span>
        `;

        checkoutDiv.appendChild(itemDiv);
    });

    // Calculate discounted total

    const total = calculateDiscountedTotal(10); // 10% off

    document.getElementById('discountedTotal').textContent = `Total Price (10% Off): ₹${total}`;
}

// Render both pages

function render() {

    renderCartPage();

    renderCheckoutPage();
}

// Initial render

render();