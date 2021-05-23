import ingredientsData from "../data/ingredients";

class Recipe {
  constructor(id, img, ingredients, instructions, name, tags) {
    this.id = id;
    this.image = img;
    this.name = name;
    this.tags = tags;
    this.instructions = instructions;
    this.ingredients = ingredients;
    this.fullIngredients = [];
  }

  createFullIngredients(ingredientsData) {
    let fullIngredients = [];
    this.ingredients.forEach(ingredient => {
      ingredientsData.forEach(namedIng => {
        if(ingredient.id === namedIng.id) {
          this.fullIngredients.push({id: ingredient.id, name: namedIng.name, estimatedCostInCents: namedIng.estimatedCostInCents, quantity: ingredient.quantity})
          fullIngredients.push({id: ingredient.id, name: namedIng.name, estimatedCostInCents: namedIng.estimatedCostInCents, quantity: ingredient.quantity})
        }
      })
    })
    return fullIngredients
  }

  findIngredientNames(ingData) {
    let ingNames = [];
    this.ingredients.forEach((ing) => {
      let foundIngred = ingData.find(ingred => {
        return ingred.id === ing.id
      })
      ing.name = foundIngred.name;
      ingNames.unshift(ing.name);
    })
    return ingNames;
  }

  getPriceOfIngredients(ingData) {
    let ingCosts = [];
    let costIng;
    this.ingredients.forEach(ing => {
      let foundIngred = ingData.find(ingred => {
        return ingred.id === ing.id
      })
      costIng = (ing.quantity.amount * foundIngred.estimatedCostInCents) / 100;
      ing.cost = costIng;
      ingCosts.unshift(costIng);
    })
    return ingCosts;
  }

  retrieveInstructions() {
    return this.instructions;
  }
}

export default Recipe;
