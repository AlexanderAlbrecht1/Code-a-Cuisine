import { ColorService } from './../services/color.service';
import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  logoLight:boolean = true;
  private logoSub?: Subscription;

  constructor(public colorService: ColorService) {

    this.logoSub = this.colorService.logoColorLight$.subscribe(value => this.logoLight = value);

  }

  ngOnDestroy(): void {
    this.logoSub?.unsubscribe();
  }



}
