import { expect } from 'chai';
import RecipeRepository from '../src/classes/RecipeRepository';
import Recipe from "../src/Recipe";

describe('RecipeRepository', () => {
  let recipeRepo, recipe

  beforeEach(() => {
    recipe = new Recipe(51, "https://www.pumpkinnspice.com/wp-content/uploads/2020/08/creamy-macaroni-cheese-4.jpg", [{"id": 20, "quantity": {"amount": 2, "unit": "c"}}, {"id": 8, "quantity": {"amount": 9, "unit": "oz"}}, {"id": 11, "quantity": { "amount": 1.5, "unit": "cup"}}, {"id": 225, "quantity": {"amount": 0.5, "unit": "lb"}],
      [{ "instruction": "Salt the water then boil", "number": 1},
      {"instruction": "Pour the dry noodles into the pot", "number": 2},
      {"instruction": "Boil noodles for 8 minutes", "number": 3},
      {"instruction": "Make a roux with flour and butter", "number": 4},
      {"instruction": "Add cheese to roux", "number": 5},
      {"instruction": "Add cheesy roux to noodles and mix", "number": 6}],
      "Macaroni and Cheese", ["comfort food", "dinner"];
    });

    recipe1 = new Recipe(32, "https://www.spendwithpennies.com/wp-content/uploads/2021/04/Fried-Eggs-SpendWithPennies-4.jpg", [{"id": 2, "quantity": {"amount": 2, "unit": "small"}, {"id": 8, "quantity": {"amount": 2, "unit": "tbs"}}], [{ "instruction": "Melt butter in pan", "number": 1},
    {"instruction": "Crack the eggs in the pan", "number": 2},
    {"instruction": "Flip eggs once and cook to desired firmness", "number": 3}], "Fried Eggs in Butter", ["breakfast", "protein"])

    recipes = [recipe1, recipe];

    recipeRepo = new RecipeRepository(recipes);
  });

  it('should be a function', () => {

    expect(RecipeRepository).to.be.a('function');
  });
  
  it('should be an instances of RecipeRepository' () => {

    expect(recipeRepo).to.be.an.instanceof(RecipeRepository);
  });

  it('should store multiple recipes' () => {

    expect(recipeRepo.recipes).to.be.array();
    expect(recipeRepo.recipes).to.deep.equal([recipe1, recipe]);
  });
});
