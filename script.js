let cart = [];
let total = 0;

// Add item to cart
function addToCart(name, price, restaurant) {

  cart.push({
    name: name,
    price: price,
    restaurant: restaurant   // 🔥 THIS IS IMPORTANT
  });

  total += price;
  displayCart();

  function calculateDeliveryFee(location) {

  location = location.toLowerCase();

  if (location.includes("chibavi")) return 1000;
  if (location.includes("luwinga")) return 2000;
  if (location.includes("chimaliro")) return 1500;
  if (location.includes("mzuzu cbd")) return 800;

  return 2500; // default fee
}

}

    // Update cart display
    function displayCart() {

  const cartList = document.getElementById("cartItems");
  cartList.innerHTML = "";

  cart.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item.name + " - MWK " + item.price;
    cartList.appendChild(li);
  });

  document.getElementById("total").textContent = total;



  updateTotals();   // ✅ CALLING the function here

  function updateTotals() {

  const location = document.getElementById("location").value;
  const deliveryFee = calculateDeliveryFee(location);
  const grandTotal = total + deliveryFee;

  document.getElementById("deliveryFee").textContent = deliveryFee;
  document.getElementById("grandTotal").textContent = grandTotal;
}

}





  cartList.innerHTML = "";

  cart.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item.name + " - MWK " + item.price;
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
    const deliveryFee = calculateDeliveryFee(location);
const grandTotal = total + deliveryFee;

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