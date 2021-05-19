import { expect } from 'chai';
import { User } from "../src/classes/User";
import { Ingredient } from '../src/classes/Ingredient';
import { Recipe } from '../src/classes/Recipe';

describe("Pantry", () => {
  let user, recipe, pantry;

  beforeEach(() => {
    //ingredient = new Ingredient(1124, "jelly beans", 625);
    user = new User(55, "Sally HungryPerson", [{"ingredient": 1124, "amount": 3}, {"ingredient": 1127, "amount": 2}, {"ingredient": 14, "amount": 7}]);

    pantry = new Pantry([{
      "ingredient": 17,
      "amount": 1
    },
    {
      "ingredient": 107,
      "amount": 8
    },
    {
      "ingredient": 99,
      "amount": 6
    }]);

    recipe = new Recipe(51, "https://www.pumpkinnspice.com/wp-content/uploads/2020/08/creamy-macaroni-cheese-4.jpg", [{"id": 20, "quantity": {"amount": 2, "unit": "c"}}, {"id": 8, "quantity": {"amount": 9, "unit": "oz"}}, {"id": 11, "quantity": { "amount": 1.5, "unit": "cup"}}, {"id": 225, "quantity": {"amount": 0.5, "unit": "lb"}}],
      [{ "instruction": "Salt the water then boil", "number": 1},
      {"instruction": "Pour the dry noodles into the pot", "number": 2},
      {"instruction": "Boil noodles for 8 minutes", "number": 3},
      {"instruction": "Make a roux with flour and butter", "number": 4},
      {"instruction": "Add cheese to roux", "number": 5},
      {"instruction": "Add cheesy roux to noodles and mix", "number": 6}],
      "Macaroni and Cheese", ["comfort food", "dinner"]);


    });

    it('should be a function', () => {

      expect(Pantry).to.be.a.function();
    });

    it('should be an instance of User', () => {

    expect(pantry).to.be.an.instanceof(Pantry);
    });

    it('should store items', () => {

    expect(pantry.item).to.deep.equal([{"ingredient": 17, "amount": 1}, {"ingredient": 107, "amount": 8}, { "ingredient": 99, "amount": 6}]);
    });

    it('should store items by ingredient', () => {

    expect(pantry.item[0].ingredient).to.equal(17);
    expect(pantry.item[1].ingredient).to.equal(107);
    expect(pantry.item[2].ingredient).to.equal(99);
    });

    it('should store items by amount', () => {

    expect(pantry.item[0].amount).to.equal(1);
    expect(pantry.item[1].amount).to.equal(8);
    expect(pantry.item[2].amount).to.equal(6);
    });

});
