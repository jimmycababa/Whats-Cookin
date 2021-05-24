//     import { expect } from 'chai';
// import  Recipe  from "../src/classes/Recipe";
//import  testIngredientsData  from './test-data';

class User {
  constructor(id, name, pantry) {
    this.id = id;
    this.name = name;
    this.pantry = pantry;
    this.favoriteRecipes = [];
    this.recipesToCook = [];
    }

  // Allow a user to favorite or unfavorite recipes (add to / remove from the user’s favoriteRecipes)
  addToFavoriteRecipes(recipe) {
    if(!this.favoriteRecipes.includes(recipe)) {
     this.favoriteRecipes.push(recipe)
    }
  }

  removeFromFavoriteRecipes(input) {
    this.favoriteRecipes.forEach(recipe =>{
      if (input.name === recipe.name) {
        this.favoriteRecipes.splice(input, 1)
      }
    })
  }

  addToRecipesToCook(recipe) {
    if(!this.recipesToCook.includes(recipe)) {
     this.recipesToCook.push(recipe)
    }
  }
  // Filter my favoriteRecipes by one or more tags.
  // Filter my favoriteRecipes by its name or ingredients.

}


export default User;
