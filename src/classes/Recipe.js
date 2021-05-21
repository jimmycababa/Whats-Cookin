class Recipe {
  constructor(id, img, ingredients, instructions, name, tags) {
    this.id = id;
    this.image = img;
    this.name = name;
    this.tags = tags;
    this.instructions = instructions;
    this.ingredients = ingredients;
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
    console.log(this.ingredients)
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
    //console.log(this.ingredients)
    return ingCosts;
  }

    // let ingredsCost = [];
    // let names = ingCostList.filter((ing) => {
    //   this.ingredients.forEach(ingred => {
    //     if (ingred.id === ing.id) {
    //     let costIng = (ingred.quantity.amount * ing.estimatedCostInCents) / 100;
    //       ingred.cost = costIng;
    //       ingredsCost.push(costIng);
    //     }
    //   })
    // })
    // return ingredsCost;
  //}

  retrieveInstructions() {
    return this.instructions;
  }
}

export default Recipe;
