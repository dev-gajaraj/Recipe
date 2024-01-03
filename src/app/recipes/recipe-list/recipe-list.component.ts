import {Component} from '@angular/core';
import {RecipeItemComponent} from "./recipe-item/recipe-item.component";
import {Recipe} from "../recipe.model";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-recipe-list',
  standalone: true,
  imports: [
    RecipeItemComponent,
    NgForOf
  ],
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe('Test recipe 1', "A tasty dish from south india", "https://assets-global.website-files.com/5e86c7170f1ab21474c3f2a4/5ef1cecb899ee03d62c90355_Natural%2Blight%2B-%2BFood%2BPhotography%2B-%2BFrenchly%2B-4365.jpeg"),
    new Recipe('Test recipe 2', "west indian dish", "https://assets-global.website-files.com/5e86c7170f1ab21474c3f2a4/5ef1d059ed9bf4b92c1fecec_Fig%2BSalad%2B-%2Blayers-%2BFood%2BPhotography%2B-%2BFrenchly%2B-%2B-%20(1).jpg"),
  ]
}
