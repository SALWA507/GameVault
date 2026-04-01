const container = document.getElementById("games-container");
const buttons = document.querySelectorAll(".filter-btn");

function displayGames(list) {
  container.innerHTML = "";

  for (let i = 0; i < list.length; i++) {
    let game = list[i]; 

    let div = document.createElement("div");
    div.className = "bg-white rounded-xl shadow p-3"; 
    div.innerHTML =
      '<img src="' + game.image + '" class="w-full h-40 object-cover rounded-lg" />' +
      '<h3 class="font-bold mt-2">' + game.title + '</h3>' +
      '<p>' + game.description + '</p>' +
      '<div class="flex justify-between mt-2">' +
        '<p> 4.8</p>' +
        '<p class="text-green-600 font-bold">' + game.price + '$</p>' +
      '</div>';

    container.appendChild(div);
}
}
displayGames(games);

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    const filter = btn.dataset.filter;

    let filtered = [];

    if (filter === "all") {
      filtered = games;
    } 
    else if (filter === "top") {
      filtered = games.slice(0, 10); 
    } 
    else if (filter === "popular") {
      filtered = games.filter(game => game.popular);
    }

    displayGames(filtered);
  });
});
const searchInput = document.getElementById("searchInput");
searchInput.addEventListener("input", function() {
  let query = searchInput.value.toLowerCase(); 

  let filtered = [];

  for (let i = 0; i < games.length; i++) {
    if (games[i].title.toLowerCase().indexOf(query) >= 0) {
      filtered.push(games[i]);
    }
  }

  displayGames(list); 
});
function displayGames(list) {
  container.innerHTML = "";

  for (let i = 0; i < list.length; i++) {
    let game = list[i];

    let div = document.createElement("div");
    div.className = "bg-white rounded-xl shadow p-3 relative"; 

    div.innerHTML =
      '<img src="' + game.image + '" class="w-full h-40 object-cover rounded-lg" />' +
      '<h3 class="font-bold mt-2">' + game.title + '</h3>' +
      '<p>' + game.description + '</p>' +
      '<div class="flex justify-between items-center mt-2">' +
        '<p>4.8</p>' +
        '<p class="text-green-600 font-bold">' + game.price + '$</p>' +
      '</div>' +
      '<i class="fa-solid fa-cart-plus absolute top-3 right-3 text-blue-500 cursor-pointer"></i>';

    container.appendChild(div);
  }
}
