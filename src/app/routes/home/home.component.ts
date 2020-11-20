import { Component } from '@angular/core';
import { ThemeService } from '../../services';

@Component({
  selector: 'home-route',
  templateUrl: 'home.component.html'
})
export class HomeComponent {
  url = 'https://raw.githubusercontent.com/JaimeStill/disconnected-docs/master/server/Controllers/DocumentController.cs';
  constructor(
    public themeSvc: ThemeService
  ) { }
}
