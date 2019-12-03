import { RecipeIngredient } from './recipeIngredient.model';

export class Recipe {
    id: number;
    name: string;
    description: string;
    recipe_ingredients: RecipeIngredient[];
}