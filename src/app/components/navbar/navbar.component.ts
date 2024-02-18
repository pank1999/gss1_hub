import { Component, EventEmitter, Output } from '@angular/core';
import { faBell } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  faBell = faBell;
  showInfo = false;
  @Output() showUserInfo = new EventEmitter();

  handleUserClick() {
    this.showInfo = !this.showInfo;
    this.showUserInfo.emit(this.showInfo);
  }
}
