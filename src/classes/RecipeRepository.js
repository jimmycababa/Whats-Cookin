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

  filterRecipesByName(name) {
    const match = this.recipes.filter(recipe => {
      return recipe.name === name
    });
    if (!match.length) {
      return `Sorry, we could not find any recipes with the name ${name}`
    } else {

      return match[0]
    }
  }
}

export default RecipeRepository;
