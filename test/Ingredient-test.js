import { expect } from 'chai';
import Ingredient from '../src/classes/Ingredient';

describe("Ingredient", () => {
  let ingredient;

  beforeEach(() => {
    ingredient = new Ingredient(582, "clementines", 203);
  });

  it('should be a function', () => {

    expect(Ingredient).to.be.a.function();
  });

  it('should be an instance of Ingredient', () => {

    expect(ingredient).to.be.an.instanceof(Ingredient);
  });

  it('should be stored with an id number', () => {

    expect(ingredient.id).to.be.number();
    expect(ingredient.id).to.equal(582);
  });

  it('should store the name of the ingredient', () => {

    expect(ingredient.name).to.be.string();
    expect(ingredient.name).to.equal("clementines");
  });

  it('should store the cost of the ingredient', () => {

    expect(ingredient.cost).to.be.number();
    expect(ingredient.cost).to.equal(203);
  });
});
