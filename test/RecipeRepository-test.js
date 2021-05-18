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

  it('should be an instances of RecipeRepository', () => {

    expect(recipeRepo).to.be.an.instanceof(RecipeRepository);
  });

  it('should store multiple recipes', () => {

    expect(recipeRepo.recipes).to.be.array();
    expect(recipeRepo.recipes).to.deep.equal([recipe1, recipe]);
  });

  it("should store instances of Recipes", () => {

    expect(recipeRepo.recipes[0].to.be.an.instanceof(Recipe));
    expect(recipeRepo.recipes[1].to.be.an.instanceof(Recipe));
  })

  //Happy
  it('should filter recipes via tags', () => {
    recipeRepo.filterRecipesTags("dinner");

    expect(recipeRepo.filterRecipesTags("dinner")).to.equal([recipe]);
  });

  //Sad
    it('should alert user when no recipe with that tag is found', () => {
      recipeRepo.filterRecipesTags("tea");

      expect(recipeRepo.filterRecipesTags("tea")).to.equal("Sorry, we could not find any recipes with the tea tag");
    });

    //Happy
      it('should filter favorite recipes via name or ingredients', () => {
          recipeRepo.filterRecipesByName("Mac and Cheese");
          //should return an array based on input

          expect(recipeRepo.filterRecipesByName("Mac and Cheese")).to.equal([recipe]);
        });

      //Sad
        it('should alert the user when no recipe with that name is found', () => {
            recipeRepo.filterRecipesByName("Crab legs");
            //should return an array based on input

            expect(recipeRepo.filterRecipesByName("Crab legs")).to.equal("Sorry, we could not find any recipes with the name Crab legs");
          });

          //Happy
            it('should filter favorite recipes via name or ingredients', () => {
              //the line below is intentional! we can refactor later
              //called as two separate functions for now
              recipeRepo.filterRecipesByName("pasta");

              //call this function in an if statement in filterFavRecipesByName!
              expect(recipeRepo.filterRecipesByIngredients("pasta")).to.equal([recipe]);
            });

        //Sad
          it('should alert the user if no recipe with specified ingredients are found', () => {
              //the line below is intentional! we can refactor later
              //called as two separate functions for now
          recipeRepo.filterRecipesByName(["milk", "corn"]);

              //call this function in an if statement in filterFavRecipesByName!
                  //this string may have to change according to the dom to be something more generic
            expect(recipeRepo.filterRecipesByIngredients("pasta")).to.equal("Sorry, we could not find any recipes with the ingredients milk and corn");
          });


});
