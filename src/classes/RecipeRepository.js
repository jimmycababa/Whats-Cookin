import ingredientsData from "../data/ingredients";
import Recipe from "./Recipe";

class RecipeRepository {
  constructor(recipes) {
    this.recipes = recipes;
  }

  filterRecipesTags(...tags) {
    const matches = [];
    this.recipes.forEach(recipe => {
      let foundtags = tags.forEach(tag => {
        if (!matches.includes(recipe) && recipe.tags.includes(tag)) {
        matches.push(recipe);
      }
      })
    })
    //console.log(matches)
    return matches
  }

  filterRecipesByName(input) {
    const recipeMatch = this.recipes.filter(recipe => {
        return recipe.name === input
    });
    if (!recipeMatch[0]) {
      return this.filterRecipesByIngredients(input)
    } else {
      return recipeMatch[0]
    }
  }

  filterRecipesByIngredients(input) {
    const recipeMatches = [];
    this.recipes.forEach(recipe => {
      //console.log(recipe)
      //const ingredientsSomething =
       console.log(recipe.createFullIngredients(ingredientsData));
        //console.log(ingredientsData)
        recipe.fullIngredients.forEach(ingredient => {
          //console.log(recipe.fullIngredients)
          //console.log(`full ingredients: ${ingredient.name}`)
          //console.log(`input: ${input}`)
          //console.log(ingredient)
          if (input === ingredient.name) {
            recipeMatches.push(ingredient)
          }
        })
        console.log(recipeMatches)
      return recipeMatches
      })
    if (!recipeMatches[0]) {
      return "Sorry, we could not find any recipes to match your search"
    } else {
      return recipeMatches
    }
  }
}

export default RecipeRepository;
