import { Routes } from '@angular/router';
import { HeroComponent } from './Components/hero/hero.component';
import { GenerateRecipeComponent } from './Components/generate-recipe/generate-recipe.component';
import { CookbookComponent } from './Components/cookbook/cookbook.component';

export const routes: Routes = [
  {path: '', component: HeroComponent},
  {path:'ingredients', component: GenerateRecipeComponent},
  {path:"cookbook", component: CookbookComponent}
];
