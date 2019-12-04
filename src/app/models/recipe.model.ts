import { RecipeIngredient } from './recipeIngredient.model';

export class Recipe {
    id: number;
    name: string;
    instruction_set: string;
    recipe_ingredients: RecipeIngredient[];
}