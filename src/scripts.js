import './styles.css';
import apiCalls from './apiCalls';

// Import classes
import  Recipe  from "../src/classes/Recipe";
import  Ingredient  from '../src/classes/Ingredient';
import  RecipeRepository  from '../src/classes/RecipeRepository';

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
const recipeDisplayView = document.getElementById("recipeDisplayView");
const favRecipesView = document.getElementById("favRecipesView");
const toCookRecipesView = document.getElementById("toCookRecipesView");


// Event Listeners
favoriteButton.addEventListener('click', showFavoriteRecipes);
toCookButton.addEventListener('click', showRecipesToCook);
submitNameIng.addEventListener('click', searchByNameIng);
submitTagsButton.addEventListener('click', searchByTags);
// addToFavoriteButton.addEventListener('click', );
// addtoCookButton.addEventListener('click', );


console.log('Hello world');
