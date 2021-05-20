class Recipe {
  constructor(id, img, ingredients, instructions, name, tags) {
    this.id = id;
    this.image = img;
    this.name = name;
    this.tags = tags;
    this.instructions = instructions;
    this.ingredients = ingredients;
  }
  findIngredientNames(ingList) {
    let peshes = [];
    let names = ingList.filter((ing) => {
      this.ingredients.forEach(peshe => {
        if (peshe.id === ing.id) {
          peshes.push(ing.name);
        }
      })
    })
    return peshes;
  }
  getPriceOfIngredients(ingCostList) {
    let peshesCost = [];
    let names = ingCostList.filter((ing) => {
      this.ingredients.forEach(peshe => {
        if (peshe.id === ing.id) {
        let costIng = (peshe.quantity.amount * ing.estimatedCostInCents) / 100;
          peshesCost.push(costIng);
        }
      })
    })
    return peshesCost;
  }
  retrieveInstructions() {
    return this.instructions;
  }
}

export default Recipe;
