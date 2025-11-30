import { ColorService } from './../../shared/services/color.service';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hero',
  imports: [RouterLink],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent implements OnInit {
  constructor(public colorService: ColorService) {}

  ngOnInit(): void {
    this.colorService.setLogoColorLigth(true);
  }
}
