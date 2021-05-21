import './styles.css';
import apiCalls from './apiCalls';

// Import classes
import  Recipe  from "./classes/Recipe";
import  Ingredient  from './classes/Ingredient';
import  RecipeRepository  from './classes/RecipeRepository';
import  recipeData  from './data/recipes.js';

let recipeRepo = new RecipeRepository(recipeData);

// DOM !!!
// Buttons
const allRecipesButton = document.getElementById("allRecipesButton");
const favoriteButton = document.getElementById("favoriteButton");
const toCookButton = document.getElementById("toCookButton");
const addToFavoriteButton = document.getElementById("addToFavoriteButton");
const addtoCookButton = document.getElementById("addtoCookButton");
// Submit Buttons
const submitNameIng = document.getElementById("submitNameIngredient");
const submitTagsButton = document.getElementById("submitTagsButton");
//Tags
const antipastiTag = document.getElementById("antipastiTag");
const starterTag = document.getElementById("starterTag");
const snackTag = document.getElementById("snackTag");
const appetizerTag = document.getElementById("appetizerTag");
const antipastoTag = document.getElementById("antipastoTag");
const horDoeuvreTag = document.getElementById("horDoeuvreTag");
const lunchTag = document.getElementById("lunchTag");
const mainCourseTag = document.getElementById("mainCourseTag");
const mainDishTag = document.getElementById("mainDishTag");
const dinnerTag = document.getElementById("dinnerTag");
const sauceTag = document.getElementById("sauceTag");
const sideDishTag = document.getElementById("sideDishTag");
const brunchTag = document.getElementById("brunchTag");
const morningMealTag = document.getElementById("morningMealTag");
const dipTag = document.getElementById("dipTag");
const breakfastTag = document.getElementById("breakfastTag");
const spreadTag = document.getElementById("spreadTag");
const condimentTag = document.getElementById("spreadTag");
const saladTag = document.getElementById("saladTag");
// Views
const tagsView = document.getElementById("tagsView");
const currentRecipeView = document.getElementById("currentRecipeView");
const recipeDisplay = document.getElementById("recipeDisplay");
const favRecipesView = document.getElementById("favRecipesView");
const toCookRecipesView = document.getElementById("toCookRecipesView");


// Event Listeners
// favoriteButton.addEventListener('click', showFavoriteRecipes);
// toCookButton.addEventListener('click', showRecipesToCook);
// submitNameIng.addEventListener('click', searchByNameIng);
// submitTagsButton.addEventListener('click', searchByTags);
// addToFavoriteButton.addEventListener('click', );
// addtoCookButton.addEventListener('click', );


// Functions
function show(element) {
  element.classList.remove('hidden');
}

function hide(element) {
  element.classList.add('hidden');
}

// showFavoriteRecipes() {
//   show(favRecipesView);
//   hide(toCookRecipesView);
// }
//
// showRecipesToCook() {
//   show(toCookRecipesView);
//   hide(favRecipesView);
// }

function showRecipes(recipes) {
  console.log(recipes);
  for (var i = 0; i < recipes.length; i++) {
    recipes[i];
    console.log(recipes[i]);
    let recipeCard = document.createElement("div");
    recipeCard.innerHTML = `<p>${recipes[i].name}</p>
    <img src=${recipes[i].image}>`
    recipeDisplay.appendChild(recipeCard)
  }
}
window.onload = showRecipes(recipeRepo.recipes);
// window.onload = function showRecipes() {
//             console.log('The Script will load now.');
//         }

// searchByNameIng() {
//
// }
//
// searchByTags() {
//
// }

console.log('Hello world');
