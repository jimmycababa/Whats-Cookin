import { expect } from 'chai';
import  RecipeRepository  from '../src/classes/RecipeRepository';
import  Recipe  from "../src/classes/Recipe";
//import ingredientsData from "../src/data/ingredients";
import  testIngredientsData   from "./test-Data";

describe('RecipeRepository', () => {
  let recipeRepo, recipe, recipe1, recipes;

  beforeEach(() => {
    recipe = new Recipe(51, "https://www.pumpkinnspice.com/wp-content/uploads/2020/08/creamy-macaroni-cheese-4.jpg", [{"id": 20, "quantity": {"amount": 2, "unit": "c"}}, {"id": 8, "quantity": {"amount": 9, "unit": "oz"}}, {"id": 11, "quantity": { "amount": 1.5, "unit": "cup"}}, {"id": 225, "quantity": {"amount": 0.5, "unit": "lb"}}],
      [{ "instruction": "Salt the water then boil", "number": 1},
      {"instruction": "Pour the dry noodles into the pot", "number": 2},
      {"instruction": "Boil noodles for 8 minutes", "number": 3},
      {"instruction": "Make a roux with flour and butter", "number": 4},
      {"instruction": "Add cheese to roux", "number": 5},
      {"instruction": "Add cheesy roux to noodles and mix", "number": 6}],
      "Macaroni and Cheese", ["comfort food", "dinner", "protein"]);

      recipe1 = new Recipe(32, "https://www.spendwithpennies.com/wp-content/uploads/2021/04/Fried-Eggs-SpendWithPennies-4.jpg", [{"id": 2, "quantity": {"amount": 2, "unit": "small"}}, {"id": 8, "quantity": {"amount": 2, "unit": "tbs"}}], [{ "instruction": "Melt butter in pan", "number": 1},
      {"instruction": "Crack the eggs in the pan", "number": 2},
      {"instruction": "Flip eggs once and cook to desired firmness", "number": 3}], "Fried Eggs in Butter", ["breakfast", "protein"]);

      recipes = [recipe1, recipe];

      recipeRepo = new RecipeRepository(recipes, testIngredientsData);
    })

  it('should be a function', () => {

    expect(RecipeRepository).to.be.a('function');
  });

  it('should be an instances of RecipeRepository', () => {

    expect(recipeRepo).to.be.an.instanceof(RecipeRepository);
  });

  it('should store multiple recipes', () => {

    expect(recipeRepo.recipes).to.deep.equal([recipe1, recipe]);
  });

//is this test really necessary? how are we going to instantiate these recipes?
  it("should store instances of Recipes", () => {

    expect(recipeRepo.recipes[0]).to.be.an.instanceof(Recipe);
    expect(recipeRepo.recipes[1]).to.be.an.instanceof(Recipe);
  })

  it("should store ingredients", () => {

    expect(recipeRepo.ingredients).to.deep.equal(testIngredientsData)
  })


  //Happy
  it.skip('should filter recipes via multiple tags', () => {
    recipeRepo.filterRecipesTags(["dinner", "protein"]);

    expect(recipeRepo.filterRecipesTags("dinner", "protein")).to.deep.equal([recipe1, recipe]);
  });

//Sad
  // it('should not show duplicate recipes', () => {
  //   recipeRepo.filterRecipesTags(["dinner", "protein"]);
  //
  //   expect(recipeRepo.filterRecipesTags(["dinner", "protein"])).to.deep.equal([recipe1, recipe]);
  // });

//Happy
  it('should filter favorite recipes via name or ingredients', () => {
    recipeRepo.filterRecipesByName("Macaroni and Cheese");

    expect(recipeRepo.filterRecipesByName("Macaroni and Cheese")).to.deep.equal(recipe);
  });

//more edge cases? can check if the recipe names include one of the search terms?

//Sad
  it.skip('should alert the user when no recipe with that name is found', () => {
    recipeRepo.filterRecipesByName("Crab legs");

    expect(recipeRepo.filterRecipesByName("Crab legs")).to.equal("Sorry, we could not find any recipes to match your search");
  });

//Happy
  it.skip('should filter favorite recipes via name or ingredients', () => {
    //the line below is intentional! we can refactor later
    //called as two separate functions for now
    recipeRepo.filterRecipesByName("pasta");

    //call this function in an if statement in filterFavRecipesByName!
    expect(recipeRepo.filterRecipesByIngredients("pasta")).to.deep.equal(recipe);
  });

  //Sad
  it.skip('should alert the user if no recipe with specified ingredients are found', () => {
    //the line below is intentional! we can refactor later
    //called as two separate functions for now
    recipeRepo.filterRecipesByName(["milk", "corn"]);

  //call this function in an if statement in filterFavRecipesByName!
  //this string may have to change according to the dom to be something more generic
    expect(recipeRepo.filterRecipesByIngredients("pasta")).to.equal("Sorry, we could not find any recipes to match your search");
  });


});
