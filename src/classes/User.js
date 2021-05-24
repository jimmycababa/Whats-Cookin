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
  filterFavRecipesTags(tags) {
    const matches = [];
    this.favoriteRecipes.forEach(recipe => {
      tags.forEach(tag => {
        if (recipe.tags.includes(tag)) {
        matches.push(recipe);
      }
      })
    })
    if (!matches[0]) {
      return "Sorry, we could not find any recipes with that tag"
    } else {
      return matches
    }
  }

  // Filter my favoriteRecipes by its name or ingredients.
  filterFavRecipesByName(input) {
    const recipeMatch = this.favoriteRecipes.filter(recipe => {
        return recipe.name  === input;
    });
    // if (!recipeMatch[0]) {
    //   return this.filterFavRecipesByIngredients(input)
    // } else {
      return recipeMatch
    }
  //}

  // filterFavRecipesByIngredients(input) {
  //   let matches = [];
  //   let match = this.favoriteRecipes.find(ingredient => {
  //     return ingredient.name.includes(input)
  //   })
  //   if (!match) {
  //     return "Sorry, we could not find any recipes to match your search"
  //   } else {
  //     this.recipes.filter(recipe => {
  //       recipe.ingredients.forEach(ingredient => {
  //         if (ingredient.id === match.id) {
  //           matches.push(recipe)
  //         }
  //       })
  //     })
  //     return matches
  //   }
  // }

}


export default User;
