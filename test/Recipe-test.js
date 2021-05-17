import { expect } from 'chai';
import Recipe = from "../src/Recipe";
import Ingredient from '../src/classes/Ingredient';

describe("Recipe", () => {
  let ingredient, recipe;

  beforeEach(() => {
    ingredient = new Ingredient(1123, "eggs", 472);
    recipe = new Recipe(5411, "https://www.pumpkinnspice.com/wp-content/uploads/2020/08/creamy-macaroni-cheese-4.jpg", [{
      "id": 20,
      "quantity": {
        "amount": 2,
        "unit": "c"
      }
    },
    {
      "id": 8,
      "quantity": {
        "amount": 9,
        "unit": "oz"
      }
    },
    {
      "id": 11,
      "quantity": {
        "amount": 1.5,
        "unit": "cup"
      }
    },
    {
      "id": 225,
      "quantity": {
        "amount": 0.5,
        "unit": "lb"
      }],
      [{ "instruction": "Salt the water then boil", "number": 1},
      {"instruction": "Pour the dry noodles into the pot", "number": 2},
      {"instruction": "Boil noodles for 8 minutes", "number": 3},
      {"instruction": "Make a roux with flour and butter", "number": 4},
      {"instruction": "Add cheese to roux", "number": 5},
      {"instruction": "Add cheesy roux to noodles and mix", "number": 6}],
      "Macaroni and Cheese", ["comfort food", "dinner"];
    });


    it('should be a function', () => {

      expect(Recipe).to.be.function());
    });
  it('should be an instance of Recipe', () => {

    expect(recipe).to.be.an.instanceof(Recipe);
  });
  it('should be stored with an id number', () => {

    expect(recipe.id).to.be.number());
  });
  it('should store an image of the recipe', () => {

    expect(recipe.image).to.be.string());
  });
  it('should store the name of the recipe', () => {

    expect(recipe.name).to.be.string());
  });
  it('should store related tags from the recipe', () => {

    expect(recipe.tags).to.be.array());
  });
  it('should store instructions to prepare the recipe', () => {

    expect(recipe.instructions).to.be.array());
  });
  it('should store all the required ingredients for the recipe', () => {

    expect(recipe.ingredients).to.be.array());
  });
});
