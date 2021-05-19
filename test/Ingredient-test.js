import { expect } from 'chai';
import  Ingredient  from '../src/classes/Ingredient';

describe("Ingredient", () => {
  let ingredient;

  beforeEach(() => {
    //added new properties to the ingredient class
    ingredient = new Ingredient(582, "clementine", 203, {"quantity": {
      "amount": .25,
      "unit": "lb"
    }});
  })

  it.skip('should be a function', () => {

    expect(Ingredient).to.be.a.function();
  });

  it.skip('should be an instance of Ingredient', () => {

    expect(ingredient).to.be.an.instanceof(Ingredient);
  });

  it.skip('should be stored with an id number', () => {

    expect(ingredient.id).to.be.number();
    expect(ingredient.id).to.equal(582);
  });

  it.skip('should store the name of the ingredient', () => {

    expect(ingredient.name).to.be.string();
    expect(ingredient.name).to.equal("clementines");
  });

  it.skip('should store the cost of the ingredient', () => {

    expect(ingredient.cost).to.be.number();
    expect(ingredient.cost).to.equal(203);
  });

  it.skip('should store the quantity of the ingredient', () => {

    expect(ingredient.quantity).to.be.an("object");
    expect(ingredient.quantity).to.equal({"quantity": {
      "amount": .25,
      "unit": "lb"
    }});
  });
});
