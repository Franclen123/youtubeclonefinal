let totalAmount = 0;

function addToCart(price) {
    totalAmount += price;
    document.getElementById('total').textContent = totalAmount.toFixed(2);

    const cartItems = document.getElementById('cart-items');
    const listItem = document.createElement('li');
    listItem.textContent = `Item: $${price.toFixed(2)}`;
    cartItems.appendChild(listItem);
}

function processPayment() {
    alert(`Total amount to pay: $${totalAmount.toFixed(2)}`);
    totalAmount = 0;
    document.getElementById('total').textContent = '0.00';
    document.getElementById('cart-items').innerHTML = '';
}
