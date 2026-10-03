async function loadData() {

    const response = await fetch("https://dummyjson.com/recipes");

    const data = await response.json();

    const list = document.getElementById("list");

    list.innerHTML = data.recipes.map(function(recipe) {

        return `
            <div class="card">

                <img src="${recipe.image}" alt="${recipe.name}">

                <div class="card-body">

                    <h2>${recipe.name}</h2>

                    <p>${recipe.cuisine}</p>

                    <p>⭐ ${recipe.rating}</p>

                    <button>Order Now</button>

                </div>

            </div>
        `;

    }).join("");
}

loadData();