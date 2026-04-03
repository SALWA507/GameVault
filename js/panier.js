const container = document.getElementById("cart-container");
const totalDisplay = document.getElementById("total");
const orderBtn = document.getElementById("orderBtn");


function displayCart() {
  container.innerHTML = "";
  let total = 0;

  cart.forEach(item => {
    const div = document.createElement("div");
    div.className = "bg-white p-3 flex justify-between rounded shadow";

    div.innerHTML = `
      <p>${item.title} x ${item.quantity || 0}</p>
      <p>${((item.price || 0) * (item.quantity || 0)).toFixed(2)}$</p>
    `;

    container.appendChild(div);

    total += (item.price || 0) * (item.quantity || 0);
  });

  totalDisplay.innerText = "Total : " + total.toFixed(2) + "$";
}

displayCart();

