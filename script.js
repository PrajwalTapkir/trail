let allRecipes = [];                     // the full list, never changed

async function loadData() {
  const response = await fetch("https://dummyjson.com/recipes");
  const data = await response.json();
  allRecipes = data.recipes;             // save the full list
  renderCards(allRecipes);               // show everything at the start
}

function renderCards(recipes) {
  const list = document.getElementById("list");

  if (recipes.length === 0) {
    list.innerHTML = "<p>No recipes found</p>";
    return;
  }

  list.innerHTML = recipes.map(function (recipe) {
    return `
      <div class="card">
        <img src="${recipe.image}" alt="${recipe.name}">
        <div class="card-body">
          <h2>${recipe.name}</h2>
          <p>${recipe.cuisine}</p>
          <p>⏱ ${recipe.prepTimeMinutes + recipe.cookTimeMinutes} min • ⭐ ${recipe.rating}</p>
          <button>Order Now</button>
        </div>
      </div>`;
  }).join("");
}

const searchBox = document.getElementById("search");

searchBox.addEventListener("input", function () {
  const text = searchBox.value.toLowerCase();

  const filtered = allRecipes.filter(function (recipe) {
    return recipe.name.toLowerCase().includes(text);
  });

  renderCards(filtered);
});

loadData();