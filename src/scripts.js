import './styles.css';
import apiCalls from './apiCalls';


// Import classes
import  Recipe  from "./classes/Recipe";
import  Ingredient  from './classes/Ingredient';
import  RecipeRepository  from './classes/RecipeRepository';
import  recipeData  from './data/recipes.js';
import  ingredientsData  from './data/ingredients.js';

let instantiatedRecipes = [];

//We will be instantiating Recipes here from data
//event listener on window load for this function?


//let recipeRepo = new RecipeRepository(recipeData);
let recipeRepo = new RecipeRepository(instantiatedRecipes);

// DOM !!!
// Buttons
const allRecipesButton = document.getElementById("allRecipesButton");
const favoriteButton = document.getElementById("favoriteButton");
const toCookButton = document.getElementById("toCookButton");
const addToFavoriteButton = document.getElementById("addToFavoriteButton");
const addtoCookButton = document.getElementById("addtoCookButton");
// Submit Buttons
const filterNameIngInput = document.getElementById("filterNameIngInput");
const submitNameIng = document.getElementById("submitNameIng");
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
const saladTag = document.getElementById("saladTag");
const condimentTag = document.getElementById("condimentTag");

const checkBoxes = document.querySelectorAll("input[type=checkbox]");
// Views
const tagsView = document.getElementById("tagsView");
const recipeDisplay = document.getElementById("recipeDisplay");
const favRecipesView = document.getElementById("favRecipesView");
const toCookRecipesView = document.getElementById("toCookRecipesView");
const currentRecipeView = document.getElementById("currentRecipeView");
const currentRecipeCard = document.getElementById("currentRecipeCard");

// Event Listeners
allRecipesButton.addEventListener('click', showAllRecipes);
submitNameIng.addEventListener('click', searchByNameIng);
submitTagsButton.addEventListener('click', searchByTags);

window.addEventListener("load", function() {
  instantiateRecipes(recipeData)});
// favoriteButton.addEventListener('click', showFavoriteRecipes);
// addToFavoriteButton.addEventListener('click', );
// toCookButton.addEventListener('click', showRecipesToCook);
// addtoCookButton.addEventListener('click', );


// Functions
function show(element) {
  element.classList.remove('hidden');
}

function hide(element) {
  element.classList.add('hidden');
}

// Show Recipes Function
// Change for iteration methods and be able to use for fav and to cook
function showRecipes(recipes) {
  // console.log(recipes);
  for (var i = 0; i < recipes.length; i++) {
    recipes[i];

    // console.log(recipes[i]);
    let recipeCard = document.createElement("div");
    recipeCard.innerHTML =
    `
    <p>${recipes[i].name}</p>
    <img src=${recipes[i].image}>
    `
    recipeDisplay.appendChild(recipeCard)
  }
}

function showAllRecipes() {
  show(recipeDisplay);
  hide(toCookRecipesView);
  hide(favRecipesView);
  hide(currentRecipeView);

  showRecipes(recipeRepo.recipes);
}

function searchByNameIng() {
  show(recipeDisplay);
  hide(toCookRecipesView);
  hide(favRecipesView);
  hide(currentRecipeView);
  // filterNameIngInput.value"
  // Will take the value from the user tags selection
  //That value will pass as an "Argument" through:
  // recipeRepository.findIngredientNames(filterNameIngInput.value)
  // Is gonna iterate and filter all the recipes repository info and will return a new array based the "User conditions".
  // That new array will be the ARGUMENT for  "showRecipes();"
  showRecipes();
}


function searchByTags() {
  show(recipeDisplay);
  hide(toCookRecipesView);
  hide(favRecipesView);
  hide(currentRecipeView);
  console.log("search by tags here")
  const checkBoxMatches = checkBoxes.filter(checkBox => {
    console.log(checkBox.checked)
    return checkBox.checked
  })

  const tagMatches = recipeRepo.filterRecipesTags(checkboxMatches);
  showRecipes(tagMatches)



  // " checkboxes value"
  // this query will take the value from the user selections
  //That value will pass an "Argument" through:
  // recipeRepository.""???findIngredientNames(""filterNameIngInput.value)
  // Is gonna iterate and filter all the recipes repository info and will return a new array based the "User conditions".
  // That new array will be the ARGUMENT for  "showRecipes();"
  //showRecipes();
}

function displayCurrentRecipe(currentRecipe) {
      currentRecipeView.innerHTML +=
          `<div class="current-recipe-card" id="currentRecipeCard">
          <section class="current-recipe-name">
            <h3>${currentRecipe.name}</h3>
          </section>
          <section class="current-recipe-add-to-fav">
            <button class="add-favorite-button" id="addToFavoriteButton">Favorite</button>
            <div class="current-recipe-add-to-cook">
              <button class="add-to-cook-button" id="addtoCookButton">Add to Weekly Meals</button>
            </div>
          </section>
          <section class="current-recipe-img">
            <div class="current-recipe-ing">
              <ul>
                <li>${currentRecipe.findIngredientNames()}</li>
              </ul>
            </div>
            <div class="food-image">
              <img src=${currentRecipe.image}>
            </div>
          </section>
          <section class="current-recipe-text">
            <div class="current-recipe-inst">
              <ol>
                <li>${currentRecipe.findIngredientNames}</li>
              </ol>
            </div>
            <div class="current-recipe-tags">
              <ul>
                <li>${recipes.tags}</li>
              </ul>
            </div>
          </section>
        </div>`

    // currentRecipeView.innerHTML = currentRecipeHTML;
    currentRecipeView.appendChild(currentRecipeHTML)
};

function showCurrentRecipe() {
  show(currentRecipeView);
  hide(recipeDisplay);
  hide(toCookRecipesView);
  hide(favRecipesView);

  displayCurrentRecipe();
};

// function showFavoriteRecipes() {
//   show(favRecipesView);
//   hide(toCookRecipesView);
// }
//
// function showRecipesToCook() {
//   show(toCookRecipesView);
//   hide(favRecipesView);
// }




// window.onload = showRecipes(recipeRepo.recipes);
function instantiateRecipes(recipeData) {
  recipeData.map(recipe => {
    recipe = new Recipe(recipe.id, recipe.image, recipe.ingredients, recipe.instructions, recipe.name, recipe.tags)
    recipe.createFullIngredients(ingredientsData)
    //console.log(recipe)
    return instantiatedRecipes.push(recipe)
  })
}
//recipe.createFullIngredients()

console.log('Hello world');
