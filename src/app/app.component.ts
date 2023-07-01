import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<h1>Welcom to {{title}}</h1>`,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-pokemon-app';
}
