import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'gss1-hub';

  handleSidebarToggle(value: Event) {
    console.log(value);
  }
}
