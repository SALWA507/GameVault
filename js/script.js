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

<div class="flex justify-center gap-2 mt-2">
    <div id="dot1" class="w-2 h-2 bg-blue-500 rounded-full"></div>
    <div id="dot2" class="w-2 h-2 bg-gray-300 rounded-full"></div>
    <div id="dot3" class="w-2 h-2 bg-gray-300 rounded-full"></div>
  </div>