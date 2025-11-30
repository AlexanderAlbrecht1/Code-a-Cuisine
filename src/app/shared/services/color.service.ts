import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ColorService {

  logoColorLight:boolean = true;
  private logoColorLightSubject = new BehaviorSubject<boolean>(true);
  public logoColorLight$: Observable<boolean> = this.logoColorLightSubject.asObservable();

  constructor() {

  }

  setLogoColorLigth(light:boolean) {
    this.logoColorLight = light;
        this.logoColorLightSubject.next(light);
  }
}
