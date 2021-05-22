class Ingredient {
  constructor(id, name, cost, quantityObj) {
    this.id = id;
    this.name = name || "";
    this.cost = cost || 0;
    //this.quantity = quantityObj;
  }
}

export default Ingredient;
