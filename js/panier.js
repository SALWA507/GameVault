const container = document.getElementById("cart-container");
const totalDisplay = document.getElementById("total");
let cart = JSON.parse(localStorage.getItem("cart")) || [];
function displayCart() {
  container.innerHTML = "";
  let total = 0;

  for (let i = 0; i < cart.length; i++) {

    let item = cart[i];

    let div = document.createElement("div");
    div.className = "bg-white p-3 mb-2";

    div.innerHTML =
    '<img src="' + item.image + '" class="w-20 h-20 object-cover inline-block mr-2" />' +
      item.title + " -" + item.quantity + " - " +
      (item.price * item.quantity).toFixed(2) + "$" +
      " <button onclick='increase(" + item.id + ")'>+</button>" +
      " <button onclick='decrease(" + item.id + ")'>-</button>" +
      " <button onclick='removeItem(" + item.id + ")'>supprimer</button>";

    container.appendChild(div);

    total += item.price * item.quantity;
  }

  totalDisplay.innerText = "Total : " + total.toFixed(2) + "$";
}


function increase(id) {
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].id === id) {
      cart[i].quantity++;
    }
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  displayCart();
}

function decrease(id) {
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].id === id && cart[i].quantity > 1) {
      cart[i].quantity--;
    }
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  displayCart();
}

function removeItem(id) {
  let newCart = [];

  for (let i = 0; i < cart.length; i++) {
    if (cart[i].id !== id) {
      newCart.push(cart[i]);
    }
  }

  cart = newCart;

  localStorage.setItem("cart", JSON.stringify(cart));
  displayCart();
}

displayCart();
const orderBtn = document.getElementById("orderBtn");

orderBtn.addEventListener("click", function() {

  if (cart.length === 0) {
    alert("Le panier est vide !");
    return;
  }

  alert("Commande réussie ");

  cart = [];
  localStorage.setItem("cart", JSON.stringify(cart));

  displayCart();
});