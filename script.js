let cart = [];
let total = 0;

// Add item to cart
function addToCart(name, price) {
    cart.push({ name, price });
    total += price;
    updateCart();
}

// Update cart display
function updateCart() {
    const cartList = document.getElementById("cartItems");
    const totalDisplay = document.getElementById("total");

    cartList.innerHTML = "";

    cart.forEach((item, index) => {
        const li = document.createElement("li");
        li.innerHTML = `
            ${item.name} - MWK ${item.price}
            <button onclick="removeItem(${index})">❌</button>
        `;
        cartList.appendChild(li);
    });

    totalDisplay.textContent = total;
}

// Remove item
function removeItem(index) {
    total -= cart[index].price;
    cart.splice(index, 1);
    updateCart();
}

// Place order
function placeOrder() {
    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const location = document.getElementById("location").value;

    if (cart.length === 0) {
        alert("Please add food to cart.");
        return;
    }

    if (!name || !phone || !location) {
        alert("Please fill in all details.");
        return;
    }

    alert(
        "✅ Order Placed Successfully!\n\n" +
        "Customer: " + name +
        "\nPhone: " + phone +
        "\nLocation: " + location +
        "\nTotal: MWK " + total
    );

    // Reset everything
    cart = [];
    total = 0;
    updateCart();

    document.getElementById("name").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("location").value = "";
}