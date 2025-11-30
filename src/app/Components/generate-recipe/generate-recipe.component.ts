import { Component, OnInit } from '@angular/core';
import { ColorService } from '../../shared/services/color.service';

@Component({
  selector: 'app-generate-recipe',
  imports: [],
  templateUrl: './generate-recipe.component.html',
  styleUrl: './generate-recipe.component.scss'
})
export class GenerateRecipeComponent implements OnInit {

  constructor(public colorService: ColorService) {

  }

  ngOnInit(): void {
    this.colorService.setLogoColorLigth(false);
  }
}
