import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Sumit\'s app for login sample';

  private menuStt = false;

  constructor(private router: Router) {
    if (localStorage.getItem('token')) {
      this.menuStt = true
    }
    else {
      this.menuStt = false
    }
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/'])
  }
}
