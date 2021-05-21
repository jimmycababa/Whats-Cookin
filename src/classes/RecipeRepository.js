class RecipeRepository {
  constructor(recipes) {
    this.recipes = recipes;
  }

  filterRecipesTags(...tags) {
    const matches = [];
    this.recipes.filter(recipe => {
      tags.forEach(tag => {
        if (!matches.includes(recipe) && recipe.tags.includes(tag)) {
          matches.push(recipe);
        }
      })
    })
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
    const recipeMatch = this.recipes.filter(recipe => {
      console.log(recipe.ingredients)
      if (recipe.ingredients.includes(input))
      return recipe
    });
    if (!recipeMatch[0]) {
      return "Sorry, we could not find any recipes to match your search"
    } else {
      return recipeMatch[0]
    }
  }
}

export default RecipeRepository;
