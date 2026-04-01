const container = document.getElementById("games-container");
const buttons = document.querySelectorAll(".filter-btn");
function displayGames(filteredGames) {
  container.innerHTML = "";
  filteredGames.forEach(game => {
    const div = document.createElement("div");
    div.classList.add("bg-white", "rounded-xl", "shadow", "p-3");
    div.innerHTML = `
      <img src="${game.image}" class="w-full h-40 object-cover rounded-lg" />
      <h3 class="font-bold mt-2">${game.title}</h3>
      <p>${game.description}</p>
      <div class="flex justify-between mt-2">
        <p>⭐ 4.8</p>
        <p class="text-green-600 font-bold">${game.price}$</p>
      </div>
    `;

    container.appendChild(div);
  });
}
function resetDots() {
  document.getElementById("dot1").className = "w-2 h-2 bg-gray-300 rounded-full";
  document.getElementById("dot2").className = "w-2 h-2 bg-gray-300 rounded-full";
  document.getElementById("dot3").className = "w-2 h-2 bg-gray-300 rounded-full";
}

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    const filter = btn.dataset.filter;
    resetDots();
    let filtered = [];
    if (filter === "all") {
      filtered = games;
      document.getElementById("dot1").className = "w-2 h-2 bg-blue-500 rounded-full";
    } 
    else if (filter === "top") {
      filtered = games.slice(0, 10);
      document.getElementById("dot2").className = "w-2 h-2 bg-blue-500 rounded-full";
    } 
    else if (filter === "popular") {
      filtered = games.filter(game => game.popular);
      document.getElementById("dot3").className = "w-2 h-2 bg-blue-500 rounded-full";
    }
    else {
      filtered = []; 
    }
    displayGames(filtered);
  });
});
displayGames(games);
// Sélectionner l'input
const searchInput = document.getElementById("searchInput");

// Ajouter un événement "input" (chaque fois que l'utilisateur tape)
searchInput.addEventListener("input", () => {
  const query = searchInput.value.toLowerCase(); // tout en minuscule pour comparer

  const filtered = games.filter(game => game.title.toLowerCase().includes(query));

  displayGames(filtered);
});