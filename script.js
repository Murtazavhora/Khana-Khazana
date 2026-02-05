const Searchbtn = document.querySelector(".Searchbtn");
const searchbox = document.querySelector(".Searchbox"); 
const recipecontainer = document.querySelector(".recipe-container");
const recipeDetailsContainer = document.querySelector(".recipe-details-content");
const recipeCloseButton = document.querySelector(".recipe-close");


const fetchrecipes = async (query)=>{
    recipecontainer.innerHTML = "fetching recipes";
    const data = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
    const response = await data.json();
    // console.log(response.meals);
    recipecontainer.innerHTML = "";
    response.meals.forEach(meal => {
        const recipediv = document.createElement('div');
        recipediv.classList.add("recipe");
         recipediv.innerHTML =`
         <img src = "${meal.strMealThumb}"> 
         <h3>${meal.strMeal}</h3>
         <p>${meal.strArea}</p>
         <p>${meal.strCategory}</p>
         `;
         const button = document.createElement('button');
         button.textContent = "View Recipe";
         recipediv.appendChild(button); 

         button.addEventListener("click",()=>{
            openRecipePopup(meal);
         })
         recipecontainer.appendChild(recipediv);
    });
    
}
const openRecipePopup = (meal)=>{
console.log(meal);
const ingredientslist = document.createElement("ol");
const ingredients = document.createElement("li");

}
Searchbtn.addEventListener("click",(e)=>{
e.preventDefault();
const searchinput = searchbox.value.trim();
if(searchinput==="") 
    {alert("first write some dish name in box");}
else{
        fetchrecipes(searchinput);
        
    }
}
);