import ingredientsData from "../data/ingredients";
import Recipe from "./Recipe";

class RecipeRepository {
  constructor(recipes, ingredientsData) {
    this.recipes = recipes;
    this.ingredients = ingredientsData;
  }

  filterRecipesTags(tags) {
    //console.log("recipe filterRecipesTags here")
    const matches = [];
    //console.log(tags)
    this.recipes.forEach(recipe => {
      //console.log("Recipes")
      tags.forEach(tag => {
        // if (!matches.includes(recipe) && recipe.tags.includes(tag)) {
        //console.log(tag)
        //console.log(recipe.tags.includes(tag))
        if (recipe.tags.includes(tag)) {
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
      // console.log(input)
      return this.filterRecipesByIngredients(input)
    } else {
      return recipeMatch[0]
    }
  }

  filterRecipesByIngredients(input) {
    //console.log(input)
    let matches = [];
    let match = this.ingredients.find(ingredient => {
      //console.log(this.ingredients)
      //console.log(ingredient.name)

      return ingredient.name.includes(input)
      //return
    })
    //console.log(this.recipes[0].ingredients)
    this.recipes.filter(recipe => {
      recipe.ingredients.forEach(ingredient => {
        if (ingredient.id === match.id) {
          matches.push(recipe)
        }
        //matches.push(ingredient.id === match.id)
      })
      //console.log(matches)
      return matches
    })
    //console.log(match)
     //iterate over the this.recipes, and then iterate over this.recipe.ingredients to check and see if the input is included in any of the recipe ingredients arrays
     //object.assign will concatenate two objects with overlapping data
     //compare each ingredient array of objects with the input value (string)
      //return match
    }
    //c
// iterate over this.Recipes
//for each recipe, objects.assign(recipe.ingredients, ingredientsData)
  //   const recipeMatches = [];
  //   this.recipes.forEach(recipe => {
  //     //console.log(recipe)
  //     //const ingredientsSomething =
  //      //console.log(recipe.createFullIngredients(ingredientsData));
  //      //console.log(recipe.fullIngredients)
  //      console.log("this is ingredientsData", ingredientsData)
  //      recipe.fullIngredients = recipe.createFullIngredients(ingredientsData)
  //      console.log("this is full ingreds: ", recipe.fullIngredients)
  //       //console.log(ingredientsData)
  //       recipe.fullIngredients.forEach(ingredient => {
  //         //console.log(recipe.fullIngredients)
  //         //console.log(`full ingredients: ${ingredient.name}`)
  //         //console.log(`input: ${input}`)
  //         //console.log(ingredient)
  //         if (input === ingredient.name) {
  //           recipeMatches.push(ingredient)
  //         }
  //       })
  //       //console.log(recipeMatches)
  //     return recipeMatches
  //     })
  //   if (!recipeMatches[0]) {
  //     return "Sorry, we could not find any recipes to match your search"
  //   } else {
  //     return recipeMatches
  //   }

}

export default RecipeRepository;
