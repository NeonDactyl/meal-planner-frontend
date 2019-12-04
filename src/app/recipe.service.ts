import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Recipe } from './models/recipe.model';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(private http: HttpClient, private configService: ConfigService) { }

  public getRecipe(id: number): Observable<Recipe> {
    return this.http.get<Recipe>(this.configService.baseUrl + '/recipes/' + id);
  }
}
