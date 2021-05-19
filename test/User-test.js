import { expect } from 'chai';
import { User } from "../src/User";
import { Ingredient } from '../src/classes/Ingredient';

describe("User", () => {
  let user, ingredient, recipe;
  beforeEach(() => {
    ingredient = new Ingredient(1124, "jelly beans", 625);
    user = new User(55, "Sally HungryPerson", [{"ingredient": 1124, "amount": 3}, {"ingredient": 1127, "amount": 2}, {"ingredient": 14, "amount": 7}], ingredient);
    });
    recipe = new Recipe(51, "https://www.pumpkinnspice.com/wp-content/uploads/2020/08/creamy-macaroni-cheese-4.jpg", [{"id": 20, "quantity": {"amount": 2, "unit": "c"}}, {"id": 8, "quantity": {"amount": 9, "unit": "oz"}}, {"id": 11, "quantity": { "amount": 1.5, "unit": "cup"}}, {"id": 225, "quantity": {"amount": 0.5, "unit": "lb"}],
      [{ "instruction": "Salt the water then boil", "number": 1},
      {"instruction": "Pour the dry noodles into the pot", "number": 2},
      {"instruction": "Boil noodles for 8 minutes", "number": 3},
      {"instruction": "Make a roux with flour and butter", "number": 4},
      {"instruction": "Add cheese to roux", "number": 5},
      {"instruction": "Add cheesy roux to noodles and mix", "number": 6}],
      "Macaroni and Cheese", ["comfort food", "dinner"];
    });

    it('should be a function', () => {

      expect(User).to.be.a.function());
    });

  it('should be an instance of User', () => {

    expect(user).to.be.an.instanceof(User);
  });

  it('should be stored with an id number', () => {

    expect(user.id).to.be.number();
    expect(user.id).to.equal(55);
  });

  it('should store the name of the user', () => {

    expect(user.name).to.be.string());
    expect(user.name).to.equal("Sally HungryPerson");
  });

  it('should store related ingredients', () => {

    expect(user.pantry).to.deep.equal([{"ingredient": 1124, "amount": 3}, {"ingredient": 1127, "amount": 2}, {"ingredient": 14, "amount": 7}]);
  });

  //Happy
    it('should be able to store favorites recipes', () => {
      user.addToFavoriteRecipes(recipe);

      expect(user.favoriteRecipes).to.deep.equal([recipe]);
    });

  //Sad
    it('should prevent the user from favoriting the same recipe twice', () => {
      user.favoriteRecipes = [recipe];
      user.addToFavoriteRecipes(recipe);

      expect(user.favoriteRecipes).to.deep.equal([recipe]);
    });

  //Happy
    it('should be able to add a recipe to weekly recipes', () => {
      user.addToRecipeCook(recipe);

      expect(user.recipesToCook).to.deep.equal([recipe]);
    });

  //Sad
    it('should prevent the user from saving the same recipe twice', () => {
      user.favoriteRecipes = [recipe];
      user.addToRecipeCook(recipe);

      expect(user.recipesToCook).to.deep.equal([recipe]);
    });

  //Happy
    it('should filter favorite recipes via tags', () => {
      user.filterFavRecipesTags("dinner");

      expect(user.filterFavRecipesTags("dinner")).to.equal([recipe]);
    });

  //Sad
    it('should alert user when no recipe with that tag is found', () => {
      user.filterFavRecipesTags("tea");

      expect(user.filterFavRecipesTags("tea")).to.equal("Sorry, we could not find any recipes with the tea tag");
    });

  //Happy
    it('should filter favorite recipes via name or ingredients', () => {
        user.filterFavRecipesByName("Mac and Cheese");
        //should return an array based on input

        expect(user.filterFavRecipesByName("Mac and Cheese")).to.equal([recipe]);
      });

    //Sad
      it('should alert the user when no recipe with that name is found', () => {
          user.filterFavRecipesByName("Crab legs");
          //should return an array based on input

          expect(user.filterFavRecipesByName("Crab legs")).to.equal("Sorry, we could not find any recipes with the name Crab legs");
        });

    //Happy
      it('should filter favorite recipes via name or ingredients', () => {
        //the line below is intentional! we can refactor later
        //called as two separate functions for now
        user.filterFavRecipesByName("pasta");

        //call this function in an if statement in filterFavRecipesByName!
        expect(user.filterFavRecipesByIngredients("pasta")).to.equal([recipe]);
      });

  //Sad
    it('should alert the user if no recipe with specified ingredients are found', () => {
        //the line below is intentional! we can refactor later
        //called as two separate functions for now
      user.filterFavRecipesByName(["milk", "corn"]);

        //call this function in an if statement in filterFavRecipesByName!
            //this string may have to change according to the dom to be something more generic
      expect(user.filterFavRecipesByIngredients("pasta")).to.equal("Sorry, we could not find any recipes with the ingredients milk and corn");
    });




});
