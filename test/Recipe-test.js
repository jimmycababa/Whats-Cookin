import { expect } from 'chai';
import  Recipe  from "../src/classes/Recipe";
import  Ingredient  from '../src/classes/Ingredient';

describe("Recipe", () => {
  let ingredient, recipe, ingredientsData;

  beforeEach(() => {
    //how do we incorporate this variable below into the recipe?
    ingredientsData = [{
      "id": 81,
      "name": "peaches",
      "estimatedCostInCents": 190
    },
    {
      "id": 12,
      "name": "soda",
      "estimatedCostInCents": 902
    },
    {
      "id": 53,
      "name": "lobster",
      "estimatedCostInCents": 472
    },
    {
      "id": 18,
      "name": "pasta",
      "estimatedCostInCents": 150
    },
    {
      "id": 21,
      "name": "cheddar cheese",
      "estimatedCostInCents": 430
    },
    {
      "id": 77,
      "name": "butter",
      "estimatedCostInCents": 203
    },
    {
      "id": 35,
      "name": "flour",
      "estimatedCostInCents": 324
    }];
    ingredient = new Ingredient(1123, "eggs", 472);
    recipe = new Recipe(51, "https://www.pumpkinnspice.com/wp-content/uploads/2020/08/creamy-macaroni-cheese-4.jpg", [{
      "id": 35,
      "quantity": {
        "amount": 2,
        "unit": "c"
      }
    },
    {
      "id": 77,
      "quantity": {
        "amount": 9,
        "unit": "oz"
      }
    },
    {
      "id": 21,
      "quantity": {
        "amount": 1.5,
        "unit": "cup"
      }
    },
    {
      "id": 18,
      "quantity": {
        "amount": 0.5,
        "unit": "lb"
      }}],
      [{ "instruction": "Salt the water then boil", "number": 1},
      {"instruction": "Pour the dry noodles into the pot", "number": 2},
      {"instruction": "Boil noodles for 8 minutes", "number": 3},
      {"instruction": "Make a roux with flour and butter", "number": 4},
      {"instruction": "Add cheese to roux", "number": 5},
      {"instruction": "Add cheesy roux to noodles and mix", "number": 6}],
      "Macaroni and Cheese", ["comfort food", "dinner"]
    )})

  it('should be a function', () => {

      expect(Recipe).to.be.a('function');
  });

  it('should be an instance of Recipe', () => {

    expect(recipe).to.be.an.instanceof(Recipe);
  });

  it('should be stored with an id number', () => {

    expect(recipe.id).to.equal(51);
  });

  it('should store an image of the recipe', () => {

    expect(recipe.image).to.equal("https://www.pumpkinnspice.com/wp-content/uploads/2020/08/creamy-macaroni-cheese-4.jpg");
  });

  it('should store the name of the recipe', () => {

    expect(recipe.name).to.equal("Macaroni and Cheese");
  });

  it('should store related tags from the recipe', () => {

    expect(recipe.tags).to.deep.equal(["comfort food", "dinner"]);
  });

  it('should store instructions to prepare the recipe', () => {

    expect(recipe.instructions).to.deep.equal([{ "instruction": "Salt the water then boil", "number": 1},
    {"instruction": "Pour the dry noodles into the pot", "number": 2},
    {"instruction": "Boil noodles for 8 minutes", "number": 3},
    {"instruction": "Make a roux with flour and butter", "number": 4},
    {"instruction": "Add cheese to roux", "number": 5},
    {"instruction": "Add cheesy roux to noodles and mix", "number": 6}]);
  });

  it('should store all the required ingredients for the recipe', () => {

    expect(recipe.ingredients).to.deep.equal([{"id": 35, "quantity": {"amount": 2, "unit": "c"}},
    {"id":77, "quantity": {"amount": 9,"unit": "oz"}}, {"id": 21, "quantity": {"amount": 1.5, "unit": "cup"}}, {"id": 18,"quantity": {"amount": 0.5,"unit": "lb"}}])
  });

  it("should be able to determine the names of ingredients needed", () => {
    recipe.findIngredientNames(ingredientsData);
    //should this method update the ingredient array by instantiating an ingredient class?
    //instantiate Ingredient with relevant data - if we rebuild our Ingredient?
    //perhaps:
      //iterates over ingredients.js, forEach object check the id number against this.ingredients
      // and add a name property and a cost property to this.ingredients objects?

    //edit this assertion statement later to check if this.ingredients objects have the required data?
    expect(recipe.findIngredientNames(ingredientsData)).to.deep.equal(["pasta", "cheddar cheese", "butter", "flour"]);
  });

    it("should calculate estimated cost in cents of ingredients", () => {
      recipe.getPriceOfIngredients(ingredientsData);
      //populates a property with an array of costs?
      //retrieves these costs from the this.ingredients array of objects

      //update this assertion statement to check that it updates this.ingredients
      expect(recipe.getPriceOfIngredients(ingredientsData)).to.deep.equal([0.75, 6.45, 18.27, 6.48])
    });

    it("should return the instructions needed to cook recipe", () => {
      recipe.retrieveInstructions();

      expect(recipe.retrieveInstructions()).to.deep.equal([{ "instruction": "Salt the water then boil", "number": 1},
      {"instruction": "Pour the dry noodles into the pot", "number": 2},
      {"instruction": "Boil noodles for 8 minutes", "number": 3},
      {"instruction": "Make a roux with flour and butter", "number": 4},
      {"instruction": "Add cheese to roux", "number": 5},
      {"instruction": "Add cheesy roux to noodles and mix", "number": 6}
    ]);
  });
});
