import { Component } from '@angular/core';
import { faEdit } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'gss1-hub';
  faEdit = faEdit;
  showUserDropdown = false;
  handleSidebarToggle(value: Event) {
    console.log(value);
  }

  showUserInfoDropdown(value: any) {
    console.log(value);
    this.showUserDropdown = value;
  }
}
