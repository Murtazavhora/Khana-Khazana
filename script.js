const Searchbtn = document.querySelector(".Searchbtn");
const searchbox = document.querySelector(".Searchbox");
const recipecontainer = document.querySelector(".recipe-container");
const recipeDetailsContainer = document.querySelector(".recipe-details-content");
const recipeCloseButton = document.querySelector(".recipe-close");

const fetchrecipes = async (query) => {
    recipecontainer.innerHTML = "Fetching recipes...";

    try {
        const data = await fetch(
            `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
        );
        const response = await data.json();

        recipecontainer.innerHTML = "";

        if (!response.meals) {
            recipecontainer.innerHTML = "No recipes found";
            return;
        }

        response.meals.forEach((meal) => {
            const recipediv = document.createElement("div");
            recipediv.classList.add("recipe");

            recipediv.innerHTML = `
                <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
                <h3>${meal.strMeal}</h3>
                <p>${meal.strArea}</p>
                <p>${meal.strCategory}</p>
            `;

            const button = document.createElement("button");
            button.textContent = "View Recipe";

            button.addEventListener("click", () => {
                openRecipePopup(meal);
            });

            recipediv.appendChild(button);
            recipecontainer.appendChild(recipediv);
        });
    } catch (error) {
        recipecontainer.innerHTML = "Error fetching recipes";
        console.error(error);
    }
};

const openRecipePopup = (meal) => {
    recipeDetailsContainer.innerHTML = `
        <h2>${meal.strMeal}</h2>
        <h3>Ingredients</h3>
        <ol class="ingredient-list"></ol>
        <h3>Instructions</h3>
        <p>${meal.strInstructions}</p>
    `;

    const ingredientList = recipeDetailsContainer.querySelector(".ingredient-list");

    for (let i = 1; i <= 20; i++) {
        const ingredient = meal[`strIngredient${i}`];
        const measure = meal[`strMeasure${i}`];

        if (ingredient && ingredient.trim() !== "") {
            const li = document.createElement("li");
            li.textContent = `${measure} ${ingredient}`;
            ingredientList.appendChild(li);
        }
    }

    recipeDetailsContainer.parentElement.style.display = "block";
};

recipeCloseButton.addEventListener("click", () => {
    recipeDetailsContainer.parentElement.style.display = "none";
});

Searchbtn.addEventListener("click", (e) => {
    e.preventDefault();
    const searchinput = searchbox.value.trim();

    if (searchinput === "") {
        alert("First write some dish name in box");
        return;
    }

    fetchrecipes(searchinput);
});
