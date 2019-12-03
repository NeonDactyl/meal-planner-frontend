import { Ingredient } from './ingredient.model';
import { UnitOfMeasure } from './unitOfMeasure.model';

export class RecipeIngredient {
    id: number;
    recipe_id: number;
    ingredient: Ingredient;
    unit_of_measure_id: number
    unit_of_measure: UnitOfMeasure;
    quantity: number;
}