class RecipeRepository {
  constructor(recipes) {
    this.recipes = recipes;
    // One class to get you started!
  }

//do we need an instantiate recipe method?

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
}

export default RecipeRepository;
