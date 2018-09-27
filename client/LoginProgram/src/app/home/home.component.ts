import { Component, OnInit } from '@angular/core';
import { MenuService } from '../services/menu.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private menuService: MenuService,private router:Router) {

  }

  ngOnInit() {
  }

  logout() {
    localStorage.setItem('token', '');
    this.router.navigate(['/']);
    console.log('log out clicked ');
  }

}
